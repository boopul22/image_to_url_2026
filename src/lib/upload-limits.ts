// Single source of truth for the daily upload rate limit — shared by the
// enforcer (`api/upload.ts`) and the quota reporter (`api/me.ts`) so the count
// a client sees can never diverge from the count the server enforces.
//
// Hosting images costs real money in storage + bandwidth, so uploads are capped
// per rolling 24h window. Guests get a small free allowance keyed by IP; signing
// in raises it and keys by user id. Email CONTACT_EMAIL to request more.

export const ANON_DAILY_LIMIT = 5;
export const USER_DAILY_LIMIT = 25;
export const CONTACT_EMAIL = 'blog.boopul@gmail.com';

export function getClientIP(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '0.0.0.0'
  );
}

// Human-friendly "resets in ~X" string, derived from the oldest upload still
// inside the 24h window (SQLite stores UTC as 'YYYY-MM-DD HH:MM:SS'). The
// window frees up exactly 24h after that oldest upload.
export function formatResetIn(oldestUtc: string | null): string {
  if (!oldestUtc) return 'a little while';
  const oldestMs = new Date(oldestUtc.replace(' ', 'T') + 'Z').getTime();
  if (Number.isNaN(oldestMs)) return 'a little while';
  const diff = oldestMs + 24 * 60 * 60 * 1000 - Date.now();
  if (diff <= 0) return 'a few moments';
  const minutes = Math.ceil(diff / 60000);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'}`;
  const hours = Math.round(minutes / 60);
  return `${hours} hour${hours === 1 ? '' : 's'}`;
}

export interface UploadUsage {
  scope: 'user' | 'anon';
  limit: number;
  used: number;
  remaining: number;
  resetIn: string;
}

// Count uploads in the caller's rolling 24h window and derive remaining quota.
// Uses the SAME query the enforcer runs (branded variants excluded via
// branded_of IS NULL), so `remaining` is exact. `user` keys by id; guests by IP.
export async function getUploadUsage(
  db: D1Database,
  user: { id: string } | null | undefined,
  request: Request,
): Promise<UploadUsage> {
  if (user) {
    const row = await db
      .prepare(
        `SELECT COUNT(*) as count, MIN(created_at) as oldest
           FROM images
          WHERE user_id = ? AND branded_of IS NULL
            AND created_at >= datetime('now', '-1 day')`,
      )
      .bind(user.id)
      .first<{ count: number; oldest: string | null }>();
    const used = row?.count ?? 0;
    return {
      scope: 'user',
      limit: USER_DAILY_LIMIT,
      used,
      remaining: Math.max(0, USER_DAILY_LIMIT - used),
      resetIn: formatResetIn(row?.oldest ?? null),
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
    limit: ANON_DAILY_LIMIT,
    used,
    remaining: Math.max(0, ANON_DAILY_LIMIT - used),
    resetIn: formatResetIn(row?.oldest ?? null),
  };
}
