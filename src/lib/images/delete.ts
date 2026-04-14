import { deleteFromR2 } from '../r2';

export const EXPIRES_IN_SECONDS: Record<string, number | null> = {
  '1h': 3600,
  '24h': 86400,
  '7d': 604800,
  '30d': 2592000,
  never: null,
};

export const ANON_MAX_EXPIRES_SECONDS = 86400;

export function resolveExpiresIn(raw: unknown, isAnonymous: boolean): number | null {
  const key = typeof raw === 'string' && raw in EXPIRES_IN_SECONDS ? raw : '24h';
  const seconds = EXPIRES_IN_SECONDS[key];
  if (isAnonymous) {
    return seconds === null ? ANON_MAX_EXPIRES_SECONDS : Math.min(seconds, ANON_MAX_EXPIRES_SECONDS);
  }
  return seconds;
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
