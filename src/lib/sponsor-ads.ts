export interface SponsorAd {
  id: string;
  slot: string;
  title: string;
  body: string;
  cta_text: string;
  href: string;
  theme: string;
  icon_kind: string | null;
  rel: string;
  active: number;
}

export interface SponsorAdWithStats extends SponsorAd {
  views: number;
  clicks: number;
  ctr: number;
}

export async function getActiveAds(db: D1Database): Promise<SponsorAd[]> {
  const res = await db
    .prepare(
      `SELECT id, slot, title, body, cta_text, href, theme, icon_kind, rel, active
       FROM sponsor_ads WHERE active = 1 ORDER BY slot`,
    )
    .all<SponsorAd>();
  return res.results ?? [];
}

export async function getAdsWithStats(db: D1Database): Promise<SponsorAdWithStats[]> {
  const res = await db
    .prepare(
      `SELECT a.id, a.slot, a.title, a.body, a.cta_text, a.href, a.theme, a.icon_kind, a.rel, a.active,
              COALESCE(SUM(CASE WHEN e.event_type = 'view' THEN 1 ELSE 0 END), 0) AS views,
              COALESCE(SUM(CASE WHEN e.event_type = 'click' THEN 1 ELSE 0 END), 0) AS clicks
       FROM sponsor_ads a
       LEFT JOIN sponsor_events e ON e.ad_id = a.id
       GROUP BY a.id
       ORDER BY a.active DESC, a.slot`,
    )
    .all<SponsorAd & { views: number; clicks: number }>();

  return (res.results ?? []).map((r) => ({
    ...r,
    ctr: r.views > 0 ? r.clicks / r.views : 0,
  }));
}

export async function recordSponsorEvent(
  db: D1Database,
  adId: string,
  type: 'view' | 'click',
  page: string | null,
): Promise<void> {
  await db
    .prepare('INSERT INTO sponsor_events (id, ad_id, event_type, page) VALUES (?, ?, ?, ?)')
    .bind(crypto.randomUUID(), adId, type, page)
    .run();
}
