// Reviews data layer. Reviews are submitted by signed-in users (status 'pending')
// and shown on the homepage once an admin approves them (status 'approved').
import type { D1Database } from '@cloudflare/workers-types';

export interface ReviewRow {
  id: string;
  user_id: string;
  rating: number;
  role: string | null;
  body: string;
  status: 'pending' | 'approved' | 'rejected';
  featured: number;
  created_at: string;
  updated_at: string;
  name: string;
  avatar_url: string | null;
}

export interface ReviewStats {
  total: number;
  average: number; // rounded to 1 decimal
}

function genId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = 'rv-';
  for (let i = 0; i < 12; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

/** Approved reviews joined with author name/avatar, featured first then newest. */
export async function getApprovedReviews(db: D1Database, limit = 24): Promise<ReviewRow[]> {
  const res = await db
    .prepare(
      `SELECT r.*, u.name, u.avatar_url
         FROM reviews r JOIN users u ON u.id = r.user_id
        WHERE r.status = 'approved'
        ORDER BY r.featured DESC, r.created_at DESC
        LIMIT ?`,
    )
    .bind(limit)
    .all<ReviewRow>();
  return res.results ?? [];
}

/** Count + average rating across all approved reviews. */
export async function getReviewStats(db: D1Database): Promise<ReviewStats> {
  const row = await db
    .prepare(`SELECT COUNT(*) AS total, AVG(rating) AS avg FROM reviews WHERE status = 'approved'`)
    .first<{ total: number; avg: number | null }>();
  const total = row?.total ?? 0;
  const average = total > 0 && row?.avg != null ? Math.round(row.avg * 10) / 10 : 0;
  return { total, average };
}

/** The current user's existing review, if any (for prefilling / one-per-user). */
export async function getUserReview(db: D1Database, userId: string): Promise<ReviewRow | null> {
  const row = await db
    .prepare(
      `SELECT r.*, u.name, u.avatar_url FROM reviews r JOIN users u ON u.id = r.user_id WHERE r.user_id = ?`,
    )
    .bind(userId)
    .first<ReviewRow>();
  return row ?? null;
}

/** Create or update a user's review. Always resets status to 'pending'. */
export async function upsertReview(
  db: D1Database,
  input: { userId: string; rating: number; role: string | null; body: string },
): Promise<void> {
  const existing = await db
    .prepare('SELECT id FROM reviews WHERE user_id = ?')
    .bind(input.userId)
    .first<{ id: string }>();

  if (existing) {
    await db
      .prepare(
        `UPDATE reviews SET rating = ?, role = ?, body = ?, status = 'pending', updated_at = datetime('now') WHERE user_id = ?`,
      )
      .bind(input.rating, input.role, input.body, input.userId)
      .run();
  } else {
    await db
      .prepare(
        `INSERT INTO reviews (id, user_id, rating, role, body, status, featured) VALUES (?, ?, ?, ?, ?, 'pending', 0)`,
      )
      .bind(genId(), input.userId, input.rating, input.role, input.body)
      .run();
  }
}

// ---- admin moderation -------------------------------------------------------
export async function listReviewsForAdmin(
  db: D1Database,
  status: string | null,
): Promise<ReviewRow[]> {
  const base = `SELECT r.*, u.name, u.avatar_url FROM reviews r JOIN users u ON u.id = r.user_id`;
  const q =
    status && ['pending', 'approved', 'rejected'].includes(status)
      ? db.prepare(`${base} WHERE r.status = ? ORDER BY r.created_at DESC LIMIT 500`).bind(status)
      : db.prepare(`${base} ORDER BY r.created_at DESC LIMIT 500`);
  const res = await q.all<ReviewRow>();
  return res.results ?? [];
}

export async function setReviewStatus(
  db: D1Database,
  id: string,
  status: 'pending' | 'approved' | 'rejected',
): Promise<void> {
  await db
    .prepare(`UPDATE reviews SET status = ?, updated_at = datetime('now') WHERE id = ?`)
    .bind(status, id)
    .run();
}

export async function setReviewFeatured(db: D1Database, id: string, featured: boolean): Promise<void> {
  await db
    .prepare(`UPDATE reviews SET featured = ?, updated_at = datetime('now') WHERE id = ?`)
    .bind(featured ? 1 : 0, id)
    .run();
}

export async function deleteReview(db: D1Database, id: string): Promise<void> {
  await db.prepare('DELETE FROM reviews WHERE id = ?').bind(id).run();
}
