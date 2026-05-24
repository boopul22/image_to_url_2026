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

  const [users, images, apiKeys, recentUploads, posts, cmsMedia, pages, ctaClicks, adblock, uploadsByHour, uploadsByUser] = await Promise.all([
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
    // Per-user uploads in the last 30 days. Anonymous uploads (NULL user_id) are
    // grouped under a single "Anonymous" row. first_upload / last_upload help the
    // admin see how active each user has been and when they last engaged.
    db
      .prepare(
        `SELECT
           i.user_id,
           COALESCE(u.name, 'Anonymous') as user_name,
           u.email as user_email,
           u.avatar_url as user_avatar,
           COUNT(*) as count,
           MIN(i.created_at) as first_upload,
           MAX(i.created_at) as last_upload
         FROM images i
         LEFT JOIN users u ON i.user_id = u.id
         WHERE i.created_at >= datetime('now', '-30 days')
         GROUP BY i.user_id
         ORDER BY count DESC, last_upload DESC
         LIMIT 100`,
      )
      .all<{
        user_id: string | null;
        user_name: string;
        user_email: string | null;
        user_avatar: string | null;
        count: number;
        first_upload: string;
        last_upload: string;
      }>(),
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
      uploadsByUser: uploadsByUser.results ?? [],
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
