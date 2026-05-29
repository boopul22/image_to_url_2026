import { deleteFromR2 } from '../r2';

// Two-option expiry model:
//   'never' (logged-in only) -> kept forever (expires_at = null)
//   'auto'  (default, + anonymous) -> swept at the monthly billing boundary
//
// Auto-expire anchors to the 1st of a month at 00:00 UTC (the Cloudflare billing
// reset). To avoid killing a fresh upload almost immediately, anything uploaded
// within AUTO_EXPIRE_GRACE_DAYS of the upcoming 1st is pushed to the following
// month — so every image gets at least ~2 weeks (and at most ~6).
export const AUTO_EXPIRE_GRACE_DAYS = 14;

function toSqliteUtc(ms: number): string {
  // SQLite datetime format the cron + short-URL handler compare against.
  return new Date(ms).toISOString().replace('T', ' ').slice(0, 19);
}

export function computeAutoExpiresAt(now: Date = new Date()): string {
  const firstOfNextMonth = Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1);
  const graceMs = AUTO_EXPIRE_GRACE_DAYS * 86_400_000;
  const target =
    firstOfNextMonth - now.getTime() < graceMs
      ? Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 2, 1) // bump a cycle
      : firstOfNextMonth;
  return toSqliteUtc(target);
}

// Returns an absolute SQLite-UTC datetime string, or null to keep forever.
// Anonymous uploads can never be permanent — they always auto-expire.
export function resolveExpiresAt(raw: unknown, isAnonymous: boolean): string | null {
  if (raw === 'never' && !isAnonymous) return null;
  return computeAutoExpiresAt();
}

type R2Env = {
  CLOUDFLARE_ACCOUNT_ID: string;
  R2_ACCESS_KEY_ID: string;
  R2_SECRET_ACCESS_KEY: string;
  R2_BUCKET_NAME: string;
};

async function r2Delete(env: R2Env, key: string): Promise<void> {
  await deleteFromR2({
    accountId: env.CLOUDFLARE_ACCOUNT_ID,
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    bucket: env.R2_BUCKET_NAME,
    key,
  });
}

// Hard-delete: removes from R2 and the DB row. Used by user/admin manual delete.
export async function hardDeleteImage(
  db: D1Database,
  env: R2Env,
  id: string,
  r2Key: string,
  ownerScope?: { userId: string },
): Promise<void> {
  try {
    await r2Delete(env, r2Key);
  } catch {
    // R2 delete failures are non-fatal — D1 row removal still proceeds.
  }
  if (ownerScope) {
    await db.prepare('DELETE FROM images WHERE id = ? AND user_id = ?').bind(id, ownerScope.userId).run();
  } else {
    await db.prepare('DELETE FROM images WHERE id = ?').bind(id).run();
  }
}

// Soft-expire: removes from R2, marks the DB row as deleted. Used by the expiry cron.
// Keeps the row so the public proxy can serve a clean 410 Gone, and so we can hard-purge later.
export async function expireDueImages(
  db: D1Database,
  env: R2Env,
  limit = 500,
): Promise<{ expired: number }> {
  const due = await db
    .prepare(
      `SELECT id, r2_key FROM images
       WHERE expires_at IS NOT NULL
         AND expires_at <= datetime('now')
         AND deleted_at IS NULL
       LIMIT ?`,
    )
    .bind(limit)
    .all<{ id: string; r2_key: string }>();

  let expired = 0;
  for (const row of due.results ?? []) {
    try {
      await r2Delete(env, row.r2_key);
    } catch {
      // ignore — row will be retried on the next cron tick
      continue;
    }
    await db
      .prepare("UPDATE images SET deleted_at = datetime('now') WHERE id = ? AND deleted_at IS NULL")
      .bind(row.id)
      .run();
    expired++;
  }

  // Hard-purge soft-deleted rows older than 30 days so the table doesn't grow unbounded.
  await db
    .prepare("DELETE FROM images WHERE deleted_at IS NOT NULL AND deleted_at <= datetime('now', '-30 days')")
    .run();

  return { expired };
}
