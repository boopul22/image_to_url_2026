export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';

// All time windows are anchored to UTC. SQLite's date('now') / datetime('now') return UTC,
// so today/yesterday/etc. on the dashboard are UTC days. That keeps numbers consistent
// regardless of where the admin loads the page from.
export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);

  const [
    imageAgg,
    uploaderAgg,
    userAgg,
    anonAgg,
    apiKeys,
    sessionAgg,
    posts,
    cmsMedia,
    pages,
    recentUploads,
    uploadsByUser,
    topUploadersAllTime,
    dailySeries,
    hourOfDay,
    dayOfWeek,
    recentSignups,
    dormantUsers,
    ctaBreakdown,
  ] = await Promise.all([
    // All upload counts / storage / source splits in one pass, filtered to live images.
    db
      .prepare(
        `SELECT
           COUNT(*) AS total,
           COALESCE(SUM(size_bytes), 0) AS total_size,
           SUM(CASE WHEN created_at >= date('now')                                                                    THEN 1 ELSE 0 END) AS today,
           SUM(CASE WHEN created_at >= date('now', '-1 day') AND created_at < date('now')                              THEN 1 ELSE 0 END) AS yesterday,
           SUM(CASE WHEN created_at >= datetime('now', '-7 days')                                                      THEN 1 ELSE 0 END) AS last7d,
           SUM(CASE WHEN created_at >= datetime('now', '-14 days') AND created_at < datetime('now', '-7 days')         THEN 1 ELSE 0 END) AS prev7d,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days')                                                     THEN 1 ELSE 0 END) AS last30d,
           SUM(CASE WHEN created_at >= datetime('now', '-60 days') AND created_at < datetime('now', '-30 days')        THEN 1 ELSE 0 END) AS prev30d,
           COALESCE(SUM(CASE WHEN created_at >= date('now')                  THEN size_bytes ELSE 0 END), 0) AS size_today,
           COALESCE(SUM(CASE WHEN created_at >= datetime('now', '-7 days')   THEN size_bytes ELSE 0 END), 0) AS size_7d,
           COALESCE(SUM(CASE WHEN created_at >= datetime('now', '-30 days')  THEN size_bytes ELSE 0 END), 0) AS size_30d,
           COALESCE(SUM(adblock), 0) AS adblock_total,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days') AND adblock = 1            THEN 1 ELSE 0 END) AS adblock_30d,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days') AND uploaded_via = 'web'   THEN 1 ELSE 0 END) AS web_30d,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days') AND uploaded_via = 'api'   THEN 1 ELSE 0 END) AS api_30d,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days') AND user_id IS NOT NULL    THEN 1 ELSE 0 END) AS auth_30d,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days') AND user_id IS NULL        THEN 1 ELSE 0 END) AS anon_30d
         FROM images
         WHERE deleted_at IS NULL`,
      )
      .first<{
        total: number; total_size: number;
        today: number; yesterday: number;
        last7d: number; prev7d: number;
        last30d: number; prev30d: number;
        size_today: number; size_7d: number; size_30d: number;
        adblock_total: number; adblock_30d: number;
        web_30d: number; api_30d: number;
        auth_30d: number; anon_30d: number;
      }>(),

    // Distinct authenticated uploaders per window. Cannot fold into the SUM(CASE) trick.
    db
      .prepare(
        `SELECT
           COUNT(DISTINCT CASE WHEN user_id IS NOT NULL AND created_at >= datetime('now', '-7 days')  THEN user_id END) AS uploaders_7d,
           COUNT(DISTINCT CASE WHEN user_id IS NOT NULL AND created_at >= datetime('now', '-30 days') THEN user_id END) AS uploaders_30d
         FROM images
         WHERE deleted_at IS NULL`,
      )
      .first<{ uploaders_7d: number; uploaders_30d: number }>(),

    // User base health.
    db
      .prepare(
        `SELECT
           COUNT(*) AS total,
           SUM(CASE WHEN created_at >= date('now')                  THEN 1 ELSE 0 END) AS new_today,
           SUM(CASE WHEN created_at >= datetime('now', '-7 days')   THEN 1 ELSE 0 END) AS new_7d,
           SUM(CASE WHEN created_at >= datetime('now', '-30 days')  THEN 1 ELSE 0 END) AS new_30d,
           SUM(CASE WHEN is_banned = 1 THEN 1 ELSE 0 END) AS banned,
           SUM(CASE WHEN role = 'admin' THEN 1 ELSE 0 END) AS admins
         FROM users`,
      )
      .first<{ total: number; new_today: number; new_7d: number; new_30d: number; banned: number; admins: number }>(),

    // Anonymous traffic: unique IPs as a proxy for "how many people came to upload".
    db
      .prepare(
        `SELECT
           COUNT(DISTINCT CASE WHEN created_at >= datetime('now', '-7 days')   THEN ip_address END) AS ips_7d,
           COUNT(DISTINCT CASE WHEN created_at >= datetime('now', '-30 days')  THEN ip_address END) AS ips_30d,
           COUNT(*) AS anon_total
         FROM anonymous_uploads`,
      )
      .first<{ ips_7d: number; ips_30d: number; anon_total: number }>(),

    db
      .prepare('SELECT COUNT(*) as count FROM api_keys WHERE revoked_at IS NULL')
      .first<{ count: number }>(),

    db
      .prepare("SELECT COUNT(*) as count FROM sessions WHERE expires_at > datetime('now')")
      .first<{ count: number }>(),

    db.prepare('SELECT COUNT(*) as count FROM posts').first<{ count: number }>(),
    db.prepare('SELECT COUNT(*) as count FROM media').first<{ count: number }>(),
    db.prepare('SELECT COUNT(*) as count FROM pages').first<{ count: number }>(),

    db
      .prepare(
        `SELECT i.id, i.filename, i.size_bytes, i.mime_type, i.url, i.created_at, i.uploaded_via, u.name as user_name, u.email as user_email
         FROM images i LEFT JOIN users u ON i.user_id = u.id
         WHERE i.deleted_at IS NULL
         ORDER BY i.created_at DESC LIMIT 10`,
      )
      .all(),

    // Per-user uploads (last 30 days). Anonymous uploads roll up under user_id IS NULL.
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
         WHERE i.deleted_at IS NULL AND i.created_at >= datetime('now', '-30 days')
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

    // Lifetime top uploaders — separates "consistent power users" from "30-day spike" users.
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
         WHERE i.deleted_at IS NULL
         GROUP BY i.user_id
         ORDER BY count DESC, last_upload DESC
         LIMIT 10`,
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

    // Daily series for the last 30 UTC days. One row per day; client renders the table.
    db
      .prepare(
        `SELECT
           date(created_at) as day,
           COUNT(*) as uploads,
           COUNT(DISTINCT user_id) as unique_users,
           SUM(CASE WHEN user_id IS NULL THEN 1 ELSE 0 END) as anon,
           COALESCE(SUM(adblock), 0) as adblock,
           COALESCE(SUM(size_bytes), 0) as size
         FROM images
         WHERE deleted_at IS NULL AND created_at >= datetime('now', '-30 days')
         GROUP BY day
         ORDER BY day DESC`,
      )
      .all<{ day: string; uploads: number; unique_users: number; anon: number; adblock: number; size: number }>(),

    // Upload patterns: what hour of day people upload (UTC, last 7 days).
    db
      .prepare(
        `SELECT strftime('%H', created_at) as hour, COUNT(*) as count
         FROM images
         WHERE deleted_at IS NULL AND created_at >= datetime('now', '-7 days')
         GROUP BY hour
         ORDER BY hour ASC`,
      )
      .all<{ hour: string; count: number }>(),

    // Which day of week people upload (0=Sun..6=Sat, UTC, last 30 days).
    db
      .prepare(
        `SELECT strftime('%w', created_at) as dow, COUNT(*) as count
         FROM images
         WHERE deleted_at IS NULL AND created_at >= datetime('now', '-30 days')
         GROUP BY dow
         ORDER BY dow ASC`,
      )
      .all<{ dow: string; count: number }>(),

    // Newest 10 signups — who just joined, with their lifetime upload count.
    db
      .prepare(
        `SELECT
           u.id, u.name, u.email, u.avatar_url, u.created_at,
           (SELECT COUNT(*) FROM images WHERE user_id = u.id AND deleted_at IS NULL) as upload_count
         FROM users u
         ORDER BY u.created_at DESC
         LIMIT 10`,
      )
      .all<{ id: string; name: string; email: string; avatar_url: string | null; created_at: string; upload_count: number }>(),

    // Dormant: registered users with zero uploads in the last 30 days.
    // Sorted newest-signup-first so the admin spots fresh signups that bounced.
    db
      .prepare(
        `SELECT
           u.id, u.name, u.email, u.avatar_url, u.created_at,
           (SELECT COUNT(*) FROM images WHERE user_id = u.id AND deleted_at IS NULL) as lifetime_uploads,
           (SELECT MAX(created_at) FROM images WHERE user_id = u.id AND deleted_at IS NULL) as last_upload
         FROM users u
         WHERE u.is_banned = 0
           AND NOT EXISTS (
             SELECT 1 FROM images
             WHERE user_id = u.id AND deleted_at IS NULL AND created_at >= datetime('now', '-30 days')
           )
         ORDER BY u.created_at DESC
         LIMIT 20`,
      )
      .all<{ id: string; name: string; email: string; avatar_url: string | null; created_at: string; lifetime_uploads: number; last_upload: string | null }>(),

    // CTA / link click breakdown (last 30 days). Future-proofed — currently only extractpics-cta exists.
    db
      .prepare(
        `SELECT link_id, COUNT(*) as count
         FROM link_clicks
         WHERE created_at >= datetime('now', '-30 days')
         GROUP BY link_id
         ORDER BY count DESC`,
      )
      .all<{ link_id: string; count: number }>(),
  ]);

  const img = imageAgg!;
  const usr = userAgg!;
  const upl = uploaderAgg!;
  const anon = anonAgg!;

  // Percent change helper: returns null when the previous window had zero (avoid Infinity).
  const pctChange = (curr: number, prev: number): number | null => {
    if (!prev) return curr > 0 ? null : 0;
    return ((curr - prev) / prev) * 100;
  };

  const adblockPctAllTime = img.total > 0 ? (img.adblock_total / img.total) * 100 : 0;
  const adblockPct30d = img.last30d > 0 ? (img.adblock_30d / img.last30d) * 100 : 0;

  return new Response(
    JSON.stringify({
      // ---- Legacy fields (kept so anything else that reads them still works) ----
      totalUsers: usr.total,
      totalImages: img.total,
      totalStorage: img.total_size,
      activeApiKeys: apiKeys?.count ?? 0,
      recentUploads: recentUploads.results,
      totalPosts: posts?.count ?? 0,
      totalMedia: cmsMedia?.count ?? 0,
      totalPages: pages?.count ?? 0,
      ctaClicks: ctaBreakdown.results?.find((r) => r.link_id === 'extractpics-cta')?.count ?? 0,
      adblockUploads: img.adblock_total,
      uploadsByUser: uploadsByUser.results ?? [],

      // ---- New structured payload ----
      uploads: {
        allTime: img.total,
        today: img.today,
        yesterday: img.yesterday,
        last7d: img.last7d,
        prev7d: img.prev7d,
        change7dPct: pctChange(img.last7d, img.prev7d),
        last30d: img.last30d,
        prev30d: img.prev30d,
        change30dPct: pctChange(img.last30d, img.prev30d),
      },
      storage: {
        allTime: img.total_size,
        today: img.size_today,
        last7d: img.size_7d,
        last30d: img.size_30d,
      },
      users: {
        total: usr.total,
        newToday: usr.new_today,
        new7d: usr.new_7d,
        new30d: usr.new_30d,
        banned: usr.banned,
        admins: usr.admins,
        activeUploaders7d: upl.uploaders_7d,
        activeUploaders30d: upl.uploaders_30d,
      },
      sources: {
        web30d: img.web_30d,
        api30d: img.api_30d,
        authenticated30d: img.auth_30d,
        anonymous30d: img.anon_30d,
        adblock30d: img.adblock_30d,
        noAdblock30d: img.last30d - img.adblock_30d,
        adblockPct30d,
        adblockPctAllTime,
      },
      anonymous: {
        uniqueIPs7d: anon.ips_7d,
        uniqueIPs30d: anon.ips_30d,
        totalUploadsAllTime: anon.anon_total,
      },
      engagement: {
        activeSessions: sessionAgg?.count ?? 0,
        ctaBreakdown: ctaBreakdown.results ?? [],
      },
      dailySeries: dailySeries.results ?? [],
      hourOfDay: hourOfDay.results ?? [],
      dayOfWeek: dayOfWeek.results ?? [],
      topUploadersAllTime: topUploadersAllTime.results ?? [],
      recentSignups: recentSignups.results ?? [],
      dormantUsers: dormantUsers.results ?? [],
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
