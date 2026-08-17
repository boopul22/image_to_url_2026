// Single source of truth for upload limits — shared by the enforcer
// (`api/upload.ts`) and the quota reporter (`api/me.ts`) so the allowance a
// client sees can never diverge from what the server enforces.
//
// What actually costs us money is *permanent* storage — an image kept forever
// keeps paying rent. Temporary uploads auto-expire (see lib/images/delete.ts),
// so they clean themselves up and are cheap. The limits reflect that:
//   • Guests: 5 temporary uploads per rolling 24h, keyed by IP. Every guest
//     upload auto-expires, so this is purely a light anti-abuse cap.
//   • Signed-in free users: 50 permanent uploads and 500 temporary uploads per
//     rolling 24h. Permanent links do not have a separate lifetime image-count
//     or storage cap; the rolling upload allowance is the authoritative limit.
//
// Signed-in quota events live independently of images, so deleting an image
// never gives an upload back inside the current rolling window.

export const ANON_DAILY_LIMIT = 5;
export const USER_PERMANENT_DAILY_LIMIT = 50;
export const USER_TEMPORARY_DAILY_LIMIT = 500;
export const FREE_MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
export const CREDIT_REFRESH_MS = 24 * 60 * 60 * 1000;
export const CONTACT_EMAIL = 'blog.boopul@gmail.com';
export const PRO_PRICING_URL = '/pro/pricing';

export function getClientIP(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '0.0.0.0'
  );
}

// Human-friendly "next slot in ~X" string derived from the oldest event in the
// current rolling 24-hour window. SQLite stores UTC as 'YYYY-MM-DD HH:MM:SS'.
export function formatResetIn(oldestUtc: string | null): string {
  if (!oldestUtc) return 'a little while';
  const oldestMs = new Date(oldestUtc.replace(' ', 'T') + 'Z').getTime();
  if (Number.isNaN(oldestMs)) return 'a little while';
  const diff = oldestMs + CREDIT_REFRESH_MS - Date.now();
  if (diff <= 0) return 'a few moments';
  const minutes = Math.ceil(diff / 60000);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'}`;
  const hours = Math.round(minutes / 60);
  return `${hours} hour${hours === 1 ? '' : 's'}`;
}

export type UserUploadKind = 'permanent' | 'temporary';

export async function getUserUploadUsage(
  db: D1Database,
  userId: string,
  kind: UserUploadKind,
): Promise<{ limit: number; used: number; remaining: number; resetIn: string }> {
  const limit = kind === 'permanent' ? USER_PERMANENT_DAILY_LIMIT : USER_TEMPORARY_DAILY_LIMIT;
  const row = await db
    .prepare(
      `SELECT COUNT(*) AS count, MIN(created_at) AS oldest
         FROM user_upload_events
        WHERE user_id = ? AND kind = ?
          AND created_at >= datetime('now', '-1 day')`,
    )
    .bind(userId, kind)
    .first<{ count: number; oldest: string | null }>();
  const used = Number(row?.count ?? 0);
  return {
    limit,
    used,
    remaining: Math.max(0, limit - used),
    resetIn: formatResetIn(row?.oldest ?? null),
  };
}

export async function getTemporaryUploadUsage(
  db: D1Database,
  userId: string,
): Promise<{ limit: number; used: number; remaining: number; resetIn: string }> {
  return getUserUploadUsage(db, userId, 'temporary');
}

export interface UploadUsage {
  scope: 'user' | 'anon';
  // Guests are counted in temporary uploads. For signed-in users, the top-level
  // numbers mirror permanent uploads so existing nav/dashboard consumers can
  // render the primary allowance. Signed-in users also receive the
  // mode-specific `temporary` and `permanent` objects below.
  unit: 'uploads';
  limit: number;
  used: number;
  remaining: number;
  resetIn: string;
  temporary?: { limit: number; used: number; remaining: number; resetIn: string };
  permanent?: { dailyLimit: number; dailyUsed: number; dailyRemaining: number; resetIn: string };
  maxFileBytes: number;
}

// Report the caller's current allowance. Signed-in users get their credit
// balance (with lazy refill applied); guests get the count-based query the
// enforcer runs (branded variants excluded via branded_of IS NULL).
export async function getUploadUsage(
  db: D1Database,
  user: { id: string } | null | undefined,
  request: Request,
): Promise<UploadUsage> {
  if (user) {
    const [permanent, temporary] = await Promise.all([
      getUserUploadUsage(db, user.id, 'permanent'),
      getUserUploadUsage(db, user.id, 'temporary'),
    ]);
    return {
      scope: 'user',
      unit: 'uploads',
      limit: USER_PERMANENT_DAILY_LIMIT,
      used: permanent.used,
      remaining: permanent.remaining,
      resetIn: permanent.resetIn,
      temporary,
      permanent: {
        dailyLimit: USER_PERMANENT_DAILY_LIMIT,
        dailyUsed: permanent.used,
        dailyRemaining: permanent.remaining,
        resetIn: permanent.resetIn,
      },
      maxFileBytes: FREE_MAX_UPLOAD_BYTES,
    };
  }

  const ip = getClientIP(request);
  const row = await db
    .prepare(
      `SELECT COUNT(*) as count, MIN(created_at) as oldest
         FROM anonymous_uploads
        WHERE ip_address = ? AND created_at >= datetime('now', '-1 day')`,
    )
    .bind(ip)
    .first<{ count: number; oldest: string | null }>();
  const used = row?.count ?? 0;
  return {
    scope: 'anon',
    unit: 'uploads',
    limit: ANON_DAILY_LIMIT,
    used,
    remaining: Math.max(0, ANON_DAILY_LIMIT - used),
    resetIn: formatResetIn(row?.oldest ?? null),
    maxFileBytes: FREE_MAX_UPLOAD_BYTES,
  };
}
