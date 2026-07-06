export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { getEnv } from '../../../lib/env';
import { hardDeleteImage } from '../../../lib/images/delete';
import { getUserCredits, formatResetIn, USER_DAILY_CREDITS } from '../../../lib/upload-limits';

const JSON_HEADERS = { 'Content-Type': 'application/json' };

// Whitelisted sort options -> fixed SQL fragments (never interpolate user input).
const SORT_MAP: Record<string, string> = {
  newest: 'created_at DESC',
  oldest: 'created_at ASC',
  largest: 'size_bytes DESC',
  smallest: 'size_bytes ASC',
  name: 'filename COLLATE NOCASE ASC',
};

// Cap how many images one request may delete in a single bulk operation.
const MAX_BULK_DELETE = 200;

export const GET: APIRoute = async ({ url, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: JSON_HEADERS,
    });
  }

  const db = getDB(locals);
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1') || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const search = (url.searchParams.get('search') || '').trim().slice(0, 100);
  const orderBy = SORT_MAP[url.searchParams.get('sort') || 'newest'] || SORT_MAP.newest;

  // Build the filtered WHERE clause + bound params once, reuse for list + count.
  const filters = ['user_id = ?', 'deleted_at IS NULL'];
  const params: unknown[] = [locals.user.id];
  if (search) {
    filters.push('filename LIKE ? ESCAPE \'\\\'');
    // Escape LIKE wildcards so a literal % or _ in a filename matches itself.
    const escaped = search.replace(/[\\%_]/g, (c) => '\\' + c);
    params.push(`%${escaped}%`);
  }
  const where = filters.join(' AND ');

  const [images, countResult, stats] = await Promise.all([
    db
      .prepare(
        `SELECT id, r2_key, url, filename, size_bytes, mime_type, created_at, expires_at
           FROM images WHERE ${where} ORDER BY ${orderBy} LIMIT ? OFFSET ?`,
      )
      .bind(...params, limit, offset)
      .all(),
    db
      .prepare(`SELECT COUNT(*) as count FROM images WHERE ${where}`)
      .bind(...params)
      .first<{ count: number }>(),
    // Library-wide stats (ignore the search filter) — cheap aggregate scan.
    db
      .prepare(
        `SELECT COUNT(*) as total,
                COALESCE(SUM(size_bytes), 0) as bytes,
                SUM(CASE WHEN expires_at IS NOT NULL AND expires_at <= datetime('now', '+7 days') THEN 1 ELSE 0 END) as expiring
           FROM images WHERE user_id = ? AND deleted_at IS NULL`,
      )
      .bind(locals.user.id)
      .first<{ total: number; bytes: number; expiring: number }>(),
  ]);

  const total = countResult?.count ?? 0;

  // Current credit balance (with lazy daily refill applied) for the dashboard tile.
  const { credits, refreshedAt } = await getUserCredits(db, locals.user.id);

  return new Response(
    JSON.stringify({
      images: images.results,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      stats: {
        totalImages: stats?.total ?? 0,
        totalBytes: stats?.bytes ?? 0,
        expiringSoon: stats?.expiring ?? 0,
        credits,
        creditsCap: USER_DAILY_CREDITS,
        refreshIn: formatResetIn(refreshedAt),
      },
    }),
    { headers: JSON_HEADERS },
  );
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: JSON_HEADERS,
    });
  }

  const body = await request.json().catch(() => ({}));

  // Accept either a single { id } or a bulk { ids: [...] } payload.
  const rawIds: unknown[] = Array.isArray(body.ids) ? body.ids : body.id != null ? [body.id] : [];
  const ids = [...new Set(rawIds.filter((v): v is string => typeof v === 'string' && v.length > 0))];

  if (ids.length === 0) {
    return new Response(JSON.stringify({ error: 'Image ID(s) required' }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  if (ids.length > MAX_BULK_DELETE) {
    return new Response(
      JSON.stringify({ error: `Too many images. Delete at most ${MAX_BULK_DELETE} at a time.` }),
      { status: 400, headers: JSON_HEADERS },
    );
  }

  const db = getDB(locals);
  const env = getEnv(locals) as any;

  // Fetch only rows owned by this user (ownership check + r2_key lookup).
  const placeholders = ids.map(() => '?').join(',');
  const owned = await db
    .prepare(`SELECT id, r2_key FROM images WHERE id IN (${placeholders}) AND user_id = ?`)
    .bind(...ids, locals.user.id)
    .all<{ id: string; r2_key: string }>();

  const rows = owned.results ?? [];
  if (rows.length === 0) {
    return new Response(JSON.stringify({ error: 'Image not found' }), {
      status: 404,
      headers: JSON_HEADERS,
    });
  }

  let deleted = 0;
  for (const row of rows) {
    await hardDeleteImage(db, env, row.id, row.r2_key, { userId: locals.user.id });
    deleted++;
  }

  return new Response(JSON.stringify({ success: true, deleted }), {
    headers: JSON_HEADERS,
  });
};
