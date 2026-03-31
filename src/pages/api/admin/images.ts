export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { getEnv } from '../../../lib/env';
import { deleteFromR2 } from '../../../lib/r2';

export const GET: APIRoute = async ({ url, locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const page = parseInt(url.searchParams.get('page') || '1');
  const search = url.searchParams.get('search') || '';
  const limit = 20;
  const offset = (page - 1) * limit;

  let query = `SELECT i.*, u.name as user_name, u.email as user_email FROM images i LEFT JOIN users u ON i.user_id = u.id`;
  let countQuery = 'SELECT COUNT(*) as count FROM images i LEFT JOIN users u ON i.user_id = u.id';
  const params: any[] = [];

  if (search) {
    const where = ' WHERE i.filename LIKE ? OR u.email LIKE ?';
    query += where;
    countQuery += where;
    params.push(`%${search}%`, `%${search}%`);
  }

  query += ' ORDER BY i.created_at DESC LIMIT ? OFFSET ?';

  const [images, countResult] = await Promise.all([
    db
      .prepare(query)
      .bind(...params, limit, offset)
      .all(),
    db
      .prepare(countQuery)
      .bind(...params)
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
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
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

  const image = await db
    .prepare('SELECT r2_key FROM images WHERE id = ?')
    .bind(id)
    .first<{ r2_key: string }>();

  if (!image) {
    return new Response(JSON.stringify({ error: 'Image not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Delete from R2
  try {
    const env = getEnv(locals);
    await deleteFromR2({
      accountId: env.CLOUDFLARE_ACCOUNT_ID,
      accessKeyId: env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
      bucket: env.R2_BUCKET_NAME,
      key: image.r2_key,
    });
  } catch {
    // Continue even if R2 delete fails
  }

  await db.prepare('DELETE FROM images WHERE id = ?').bind(id).run();

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
