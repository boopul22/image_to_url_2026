export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';

export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);

  const [users, images, apiKeys, recentUploads, posts, cmsMedia, pages, ctaClicks, adblock, uploadsByHour] = await Promise.all([
    db.prepare('SELECT COUNT(*) as count FROM users').first<{ count: number }>(),
    db
      .prepare('SELECT COUNT(*) as count, COALESCE(SUM(size_bytes), 0) as total_size FROM images')
      .first<{ count: number; total_size: number }>(),
    db
      .prepare('SELECT COUNT(*) as count FROM api_keys WHERE revoked_at IS NULL')
      .first<{ count: number }>(),
    db
      .prepare(
        `SELECT i.id, i.filename, i.size_bytes, i.mime_type, i.url, i.created_at, i.uploaded_via, u.name as user_name, u.email as user_email
         FROM images i LEFT JOIN users u ON i.user_id = u.id
         ORDER BY i.created_at DESC LIMIT 10`,
      )
      .all(),
    db.prepare('SELECT COUNT(*) as count FROM posts').first<{ count: number }>(),
    db.prepare('SELECT COUNT(*) as count FROM media').first<{ count: number }>(),
    db.prepare('SELECT COUNT(*) as count FROM pages').first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM link_clicks WHERE link_id = 'extractpics-cta'").first<{ count: number }>(),
    db
      .prepare('SELECT COUNT(*) as count FROM images WHERE adblock = 1')
      .first<{ count: number }>(),
    db
      .prepare(
        `SELECT
           strftime('%Y-%m-%d %H:', created_at) || (CASE WHEN cast(strftime('%M', created_at) as int) < 30 THEN '00' ELSE '30' END) as bucket,
           COUNT(*) as count,
           COALESCE(SUM(adblock), 0) as adblock
         FROM images
         WHERE created_at >= datetime('now', '-32 days')
         GROUP BY bucket
         ORDER BY bucket ASC`,
      )
      .all<{ bucket: string; count: number; adblock: number }>(),
  ]);

  return new Response(
    JSON.stringify({
      totalUsers: users?.count ?? 0,
      totalImages: images?.count ?? 0,
      totalStorage: images?.total_size ?? 0,
      activeApiKeys: apiKeys?.count ?? 0,
      recentUploads: recentUploads.results,
      totalPosts: posts?.count ?? 0,
      totalMedia: cmsMedia?.count ?? 0,
      totalPages: pages?.count ?? 0,
      ctaClicks: ctaClicks?.count ?? 0,
      adblockUploads: adblock?.count ?? 0,
      uploadsByBucket: uploadsByHour.results ?? [],
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
