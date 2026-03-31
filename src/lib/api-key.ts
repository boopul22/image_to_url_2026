import { generateRandomToken, sha256Hex, generateId } from './crypto';

const KEY_PREFIX = 'itu_';

export async function generateApiKey(): Promise<{ raw: string; hash: string; prefix: string }> {
  const token = generateRandomToken(24); // 48 hex chars
  const raw = `${KEY_PREFIX}${token}`;
  const hash = await sha256Hex(raw);
  const prefix = raw.substring(0, 8);
  return { raw, hash, prefix };
}

export async function createApiKey(
  db: D1Database,
  userId: string,
  name: string,
): Promise<{ raw: string; id: string; prefix: string }> {
  const { raw, hash, prefix } = await generateApiKey();
  const id = generateId(16);

  await db
    .prepare(
      'INSERT INTO api_keys (id, user_id, name, key_hash, key_prefix) VALUES (?, ?, ?, ?, ?)',
    )
    .bind(id, userId, name, hash, prefix)
    .run();

  return { raw, id, prefix };
}

export async function verifyApiKey(
  db: D1Database,
  rawKey: string,
): Promise<{
  userId: string;
  keyId: string;
  user: { id: string; googleId: string; name: string; email: string; avatarUrl: string; role: string };
} | null> {
  const hash = await sha256Hex(rawKey);

  const row = await db
    .prepare(
      `SELECT k.id as key_id, k.user_id, u.id, u.google_id, u.name, u.email, u.avatar_url, u.role, u.is_banned
       FROM api_keys k
       JOIN users u ON k.user_id = u.id
       WHERE k.key_hash = ? AND k.revoked_at IS NULL`,
    )
    .bind(hash)
    .first<{
      key_id: string;
      user_id: string;
      id: string;
      google_id: string;
      name: string;
      email: string;
      avatar_url: string;
      role: string;
      is_banned: number;
    }>();

  if (!row || row.is_banned) return null;

  // Update last_used_at
  await db
    .prepare("UPDATE api_keys SET last_used_at = datetime('now') WHERE id = ?")
    .bind(row.key_id)
    .run();

  return {
    userId: row.user_id,
    keyId: row.key_id,
    user: {
      id: row.id,
      googleId: row.google_id,
      name: row.name,
      email: row.email,
      avatarUrl: row.avatar_url,
      role: row.role,
    },
  };
}

export async function revokeApiKey(
  db: D1Database,
  keyId: string,
  userId: string,
): Promise<boolean> {
  const result = await db
    .prepare("UPDATE api_keys SET revoked_at = datetime('now') WHERE id = ? AND user_id = ?")
    .bind(keyId, userId)
    .run();
  return (result.meta?.changes ?? 0) > 0;
}

export async function listApiKeys(
  db: D1Database,
  userId: string,
): Promise<
  Array<{
    id: string;
    name: string;
    key_prefix: string;
    last_used_at: string | null;
    created_at: string;
    revoked_at: string | null;
  }>
> {
  const result = await db
    .prepare(
      'SELECT id, name, key_prefix, last_used_at, created_at, revoked_at FROM api_keys WHERE user_id = ? ORDER BY created_at DESC',
    )
    .bind(userId)
    .all();
  return result.results as any;
}
