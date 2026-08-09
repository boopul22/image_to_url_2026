// Single source of truth for upload limits — shared by the enforcer
// (`api/upload.ts`) and the quota reporter (`api/me.ts`) so the allowance a
// client sees can never diverge from what the server enforces.
//
// What actually costs us money is *permanent* storage — an image kept forever
// keeps paying rent. Temporary uploads auto-expire (see lib/images/delete.ts),
// so they clean themselves up and are cheap. The limits reflect that:
//   • Guests: 5 temporary uploads per rolling 24h, keyed by IP. Every guest
//     upload auto-expires, so this is purely a light anti-abuse cap.
//   • Signed-in free users: 5 permanent uploads and 25 temporary uploads per
//     rolling 24h. Permanent storage is also capped at 25 active images or
//     100 MB, whichever comes first. Existing links remain available above the
//     cap; only new permanent uploads pause until space is freed or Pro is used.
//
// NOTE: the users table columns are still named `credits` / `credits_refreshed_at`
// for historical reasons; a "credit" now simply means one permanent upload.

export const ANON_DAILY_LIMIT = 5;
export const USER_DAILY_CREDITS = 5;
export const USER_TEMPORARY_DAILY_LIMIT = 25;
export const USER_PERMANENT_IMAGE_LIMIT = 25;
export const USER_PERMANENT_STORAGE_BYTES = 100 * 1024 * 1024;
export const FREE_MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
export const CREDIT_REFRESH_MS = 24 * 60 * 60 * 1000;
export const CONTACT_EMAIL = 'blog.boopul@gmail.com';
export const PRO_PRICING_URL = '/pro/pricing';

// A permanent ("keep forever") upload costs exactly one credit, regardless of
// size. Temporary/auto-expiring uploads cost nothing (handled by the caller,
// which only spends this for permanent uploads). Mirrored client-side.
export const PERMANENT_UPLOAD_COST = 1;

export function getClientIP(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '0.0.0.0'
  );
}

// Credits an upload costs. Permanent ("keep forever") uploads cost one credit;
// temporary/auto-expiring uploads are free. `isPermanent` is true only for a
// signed-in user who chose "never" expiry (expires_at resolves to null).
// Mirrored client-side in the uploaders' pre-slice, so keep this in sync there.
export function creditCost(isPermanent: boolean): number {
  return isPermanent ? PERMANENT_UPLOAD_COST : 0;
}

// Human-friendly "resets in ~X" string, derived from a UTC timestamp that marks
// the *start* of the current 24h window (guests: oldest in-window upload;
// users: credits_refreshed_at). SQLite stores UTC as 'YYYY-MM-DD HH:MM:SS'.
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

// A signed-in user's current credit balance, with a lazy fixed daily refill:
// if the last refill was >=24h ago (or never), top the balance back up to the
// full cap and stamp `credits_refreshed_at = now` before returning. This is the
// single place the refill happens, so both the reporter and the enforcer see a
// consistent post-refill balance.
export async function getUserCredits(
  db: D1Database,
  userId: string,
): Promise<{ credits: number; refreshedAt: string | null }> {
  // Refill and legacy-balance clamping happen in one serialized statement.
  // This prevents a quota read racing with a simultaneous reservation from
  // restoring a credit that was already spent.
  const row = await db
    .prepare(
      `UPDATE users
          SET credits = CASE
                WHEN credits_refreshed_at IS NULL
                  OR credits_refreshed_at <= datetime('now', '-1 day')
                  THEN ?
                ELSE MIN(?, MAX(0, COALESCE(credits, ?)))
              END,
              credits_refreshed_at = CASE
                WHEN credits_refreshed_at IS NULL
                  OR credits_refreshed_at <= datetime('now', '-1 day')
                  THEN datetime('now')
                ELSE credits_refreshed_at
              END
        WHERE id = ?
        RETURNING credits, credits_refreshed_at`,
    )
    .bind(USER_DAILY_CREDITS, USER_DAILY_CREDITS, USER_DAILY_CREDITS, userId)
    .first<{ credits: number; credits_refreshed_at: string | null }>();

  return {
    credits: Math.min(USER_DAILY_CREDITS, Math.max(0, row?.credits ?? USER_DAILY_CREDITS)),
    refreshedAt: row?.credits_refreshed_at ?? null,
  };
}

export async function reservePermanentUploadCredit(
  db: D1Database,
  userId: string,
): Promise<{ reserved: boolean; remaining: number; refreshedAt: string | null }> {
  const current = await getUserCredits(db, userId);
  const updated = await db
    .prepare(
      `UPDATE users
          SET credits = credits - 1
        WHERE id = ? AND credits >= 1
        RETURNING credits`,
    )
    .bind(userId)
    .first<{ credits: number }>();
  return {
    reserved: Boolean(updated),
    remaining: updated?.credits ?? current.credits,
    refreshedAt: current.refreshedAt,
  };
}

export async function refundPermanentUploadCredit(db: D1Database, userId: string): Promise<void> {
  await db
    .prepare('UPDATE users SET credits = MIN(?, credits + 1) WHERE id = ?')
    .bind(USER_DAILY_CREDITS, userId)
    .run();
}

export interface PermanentStorageUsage {
  images: number;
  bytes: number;
  imageLimit: number;
  byteLimit: number;
  imageRemaining: number;
  byteRemaining: number;
}

export async function getPermanentStorageUsage(
  db: D1Database,
  userId: string,
): Promise<PermanentStorageUsage> {
  const row = await db
    .prepare(
      `SELECT COUNT(*) AS images, COALESCE(SUM(size_bytes), 0) AS bytes
         FROM images
        WHERE user_id = ?
          AND expires_at IS NULL
          AND deleted_at IS NULL
          AND branded_of IS NULL`,
    )
    .bind(userId)
    .first<{ images: number; bytes: number }>();
  const images = Number(row?.images ?? 0);
  const bytes = Number(row?.bytes ?? 0);
  return {
    images,
    bytes,
    imageLimit: USER_PERMANENT_IMAGE_LIMIT,
    byteLimit: USER_PERMANENT_STORAGE_BYTES,
    imageRemaining: Math.max(0, USER_PERMANENT_IMAGE_LIMIT - images),
    byteRemaining: Math.max(0, USER_PERMANENT_STORAGE_BYTES - bytes),
  };
}

export async function getTemporaryUploadUsage(
  db: D1Database,
  userId: string,
): Promise<{ limit: number; used: number; remaining: number; resetIn: string }> {
  const row = await db
    .prepare(
      `SELECT COUNT(*) AS count, MIN(created_at) AS oldest
         FROM images
        WHERE user_id = ?
          AND expires_at IS NOT NULL
          AND deleted_at IS NULL
          AND branded_of IS NULL
          AND created_at >= datetime('now', '-1 day')`,
    )
    .bind(userId)
    .first<{ count: number; oldest: string | null }>();
  const used = Number(row?.count ?? 0);
  return {
    limit: USER_TEMPORARY_DAILY_LIMIT,
    used,
    remaining: Math.max(0, USER_TEMPORARY_DAILY_LIMIT - used),
    resetIn: formatResetIn(row?.oldest ?? null),
  };
}

export interface UploadUsage {
  scope: 'user' | 'anon';
  // How to read `limit`/`used`/`remaining`: guests are counted in temporary
  // uploads, signed-in users in permanent-upload credits (1 each). Lets the
  // client pre-slice a bulk selection. Signed-in users also receive the
  // mode-specific `temporary` and `permanent` objects below.
  unit: 'uploads' | 'credits';
  limit: number;
  used: number;
  remaining: number;
  resetIn: string;
  temporary?: { limit: number; used: number; remaining: number; resetIn: string };
  permanent?: PermanentStorageUsage & { dailyLimit: number; dailyUsed: number; dailyRemaining: number; resetIn: string };
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
    const [{ credits, refreshedAt }, temporary, storage] = await Promise.all([
      getUserCredits(db, user.id),
      getTemporaryUploadUsage(db, user.id),
      getPermanentStorageUsage(db, user.id),
    ]);
    const resetIn = formatResetIn(refreshedAt);
    return {
      scope: 'user',
      unit: 'credits',
      limit: USER_DAILY_CREDITS,
      used: Math.max(0, USER_DAILY_CREDITS - credits),
      remaining: credits,
      resetIn,
      temporary,
      permanent: {
        ...storage,
        dailyLimit: USER_DAILY_CREDITS,
        dailyUsed: Math.max(0, USER_DAILY_CREDITS - credits),
        dailyRemaining: credits,
        resetIn,
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
