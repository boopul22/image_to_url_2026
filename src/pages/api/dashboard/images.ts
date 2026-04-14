export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { getEnv } from '../../../lib/env';
import { hardDeleteImage } from '../../../lib/images/delete';

export const GET: APIRoute = async ({ url, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = 20;
  const offset = (page - 1) * limit;

  const [images, countResult] = await Promise.all([
    db
      .prepare(
        'SELECT id, r2_key, url, filename, size_bytes, mime_type, created_at, expires_at FROM images WHERE user_id = ? AND deleted_at IS NULL ORDER BY created_at DESC LIMIT ? OFFSET ?',
      )
      .bind(locals.user.id, limit, offset)
      .all(),
    db
      .prepare('SELECT COUNT(*) as count FROM images WHERE user_id = ? AND deleted_at IS NULL')
      .bind(locals.user.id)
      .first<{ count: number }>(),
  ]);

  return new Response(
    JSON.stringify({
      images: images.results,
      total: countResult?.count ?? 0,
      page,
      totalPages: Math.ceil((countResult?.count ?? 0) / limit),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { id } = await request.json();
  if (!id) {
    return new Response(JSON.stringify({ error: 'Image ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);

  // Get image info (verify ownership)
  const image = await db
    .prepare('SELECT r2_key FROM images WHERE id = ? AND user_id = ?')
    .bind(id, locals.user.id)
    .first<{ r2_key: string }>();

  if (!image) {
    return new Response(JSON.stringify({ error: 'Image not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await hardDeleteImage(db, getEnv(locals) as any, id, image.r2_key, { userId: locals.user.id });

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
