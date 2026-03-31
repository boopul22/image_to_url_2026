export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';

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

  let query = `SELECT u.*, (SELECT COUNT(*) FROM images WHERE user_id = u.id) as image_count FROM users u`;
  let countQuery = 'SELECT COUNT(*) as count FROM users';
  const params: any[] = [];

  if (search) {
    const where = ' WHERE u.name LIKE ? OR u.email LIKE ?';
    query += where;
    countQuery += where.replace('u.', '');
    params.push(`%${search}%`, `%${search}%`);
  }

  query += ' ORDER BY u.created_at DESC LIMIT ? OFFSET ?';

  const [users, countResult] = await Promise.all([
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
      users: users.results,
      total: countResult?.count ?? 0,
      page,
      totalPages: Math.ceil((countResult?.count ?? 0) / limit),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const PATCH: APIRoute = async ({ request, locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { userId, action } = await request.json();
  if (!userId || !action) {
    return new Response(JSON.stringify({ error: 'userId and action required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Prevent self-modification
  if (userId === locals.user.id) {
    return new Response(JSON.stringify({ error: 'Cannot modify your own account' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);

  switch (action) {
    case 'ban':
      await db.prepare("UPDATE users SET is_banned = 1, updated_at = datetime('now') WHERE id = ?").bind(userId).run();
      // Delete all sessions for banned user
      await db.prepare('DELETE FROM sessions WHERE user_id = ?').bind(userId).run();
      break;
    case 'unban':
      await db.prepare("UPDATE users SET is_banned = 0, updated_at = datetime('now') WHERE id = ?").bind(userId).run();
      break;
    case 'make_admin':
      await db.prepare("UPDATE users SET role = 'admin', updated_at = datetime('now') WHERE id = ?").bind(userId).run();
      break;
    case 'remove_admin':
      await db.prepare("UPDATE users SET role = 'user', updated_at = datetime('now') WHERE id = ?").bind(userId).run();
      break;
    default:
      return new Response(JSON.stringify({ error: 'Invalid action' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
