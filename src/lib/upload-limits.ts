// Single source of truth for upload limits — shared by the enforcer
// (`api/upload.ts`) and the quota reporter (`api/me.ts`) so the allowance a
// client sees can never diverge from what the server enforces.
//
// What actually costs us money is *permanent* storage — an image kept forever
// keeps paying rent. Temporary uploads auto-expire (see lib/images/delete.ts),
// so they clean themselves up and are cheap. The limits reflect that:
//   • Guests: 5 temporary uploads per rolling 24h, keyed by IP. Every guest
//     upload auto-expires, so this is purely a light anti-abuse cap.
//   • Signed-in users: 50 *permanent* uploads per day (a flat 1 "credit" each,
//     size-independent), refilled to full once every 24h. Temporary /
//     auto-expiring uploads cost nothing and are unlimited — only choosing
//     "keep forever" spends the daily allowance. Email CONTACT_EMAIL for more.
//
// NOTE: the users table columns are still named `credits` / `credits_refreshed_at`
// for historical reasons; a "credit" now simply means one permanent upload.

export const ANON_DAILY_LIMIT = 5;
export const USER_DAILY_CREDITS = 50;
export const CREDIT_REFRESH_MS = 24 * 60 * 60 * 1000;
export const CONTACT_EMAIL = 'blog.boopul@gmail.com';

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
  const row = await db
    .prepare(`SELECT credits, credits_refreshed_at FROM users WHERE id = ?`)
    .bind(userId)
    .first<{ credits: number | null; credits_refreshed_at: string | null }>();

  const refreshedAt = row?.credits_refreshed_at ?? null;
  const refreshedMs = refreshedAt
    ? new Date(refreshedAt.replace(' ', 'T') + 'Z').getTime()
    : NaN;
  const dueRefill = !refreshedAt || Number.isNaN(refreshedMs) || Date.now() - refreshedMs >= CREDIT_REFRESH_MS;

  if (dueRefill) {
    const updated = await db
      .prepare(
        `UPDATE users SET credits = ?, credits_refreshed_at = datetime('now')
          WHERE id = ? RETURNING credits_refreshed_at`,
      )
      .bind(USER_DAILY_CREDITS, userId)
      .first<{ credits_refreshed_at: string }>();
    return { credits: USER_DAILY_CREDITS, refreshedAt: updated?.credits_refreshed_at ?? null };
  }

  return { credits: row?.credits ?? USER_DAILY_CREDITS, refreshedAt };
}

export interface UploadUsage {
  scope: 'user' | 'anon';
  // How to read `limit`/`used`/`remaining`: guests are counted in temporary
  // uploads, signed-in users in permanent-upload credits (1 each). Lets the
  // client pre-slice a bulk selection — but only permanent uploads spend the
  // signed-in allowance; temporary ones are free (the client checks the expiry
  // select before applying `remaining`).
  unit: 'uploads' | 'credits';
  limit: number;
  used: number;
  remaining: number;
  resetIn: string;
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
    const { credits, refreshedAt } = await getUserCredits(db, user.id);
    return {
      scope: 'user',
      unit: 'credits',
      limit: USER_DAILY_CREDITS,
      used: Math.max(0, USER_DAILY_CREDITS - credits),
      remaining: credits,
      resetIn: formatResetIn(refreshedAt),
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
  };
}
