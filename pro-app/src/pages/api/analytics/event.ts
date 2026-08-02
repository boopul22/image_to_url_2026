export const prerender = false;

import type { APIRoute } from 'astro';
import { getProEnv } from '../../../lib/env';
import { json } from '../../../lib/http';

const CLIENT_EVENTS = new Set([
	'pro_promotion_viewed',
	'pro_cta_clicked',
	'pro_pricing_viewed',
	'pro_plan_selected',
	'pro_signin_started',
	'pro_paywall_viewed',
	'pro_paywall_clicked',
	'pro_feature_explored',
]);

function shortString(value: unknown, max: number): string | null {
	if (typeof value !== 'string') return null;
	const clean = value.trim().slice(0, max);
	return clean || null;
}

function allowedOrigin(request: Request): boolean {
	const origin = request.headers.get('Origin');
	if (!origin) return false;
	const requestUrl = new URL(request.url);
	if (origin === requestUrl.origin) return true;
	return origin === 'https://imagetourl.cloud' || origin === 'https://pro.imagetourl.cloud';
}

export const POST: APIRoute = async ({ request, locals }) => {
	if (!allowedOrigin(request)) return json({ error: 'Invalid request origin' }, 403);
	const contentLength = Number(request.headers.get('Content-Length') ?? 0);
	if (contentLength > 4096) return json({ error: 'Analytics payload is too large' }, 413);

	const payload = await request.json().catch(() => null) as Record<string, unknown> | null;
	const eventId = shortString(payload?.eventId, 64);
	const eventName = shortString(payload?.eventName, 48);
	const sessionId = shortString(payload?.sessionId, 64);
	const pagePath = shortString(payload?.pagePath, 160);
	if (!eventId || !eventName || !CLIENT_EVENTS.has(eventName) || !sessionId || !pagePath?.startsWith('/')) {
		return json({ error: 'Invalid analytics event' }, 400);
	}

	const planValue = shortString(payload?.planInterval, 12);
	const planInterval = planValue === 'month' || planValue === 'year' ? planValue : null;
	const env = getProEnv();
	const recent = await env.PRO_DB.prepare(
		`SELECT COUNT(*) AS count
		   FROM pro_interest_events
		  WHERE session_id = ? AND created_at >= datetime('now', '-1 minute')`,
	)
		.bind(sessionId)
		.first<{ count: number }>();
	if (Number(recent?.count ?? 0) >= 30) return json({ error: 'Analytics rate limit reached' }, 429);

	try {
		await env.PRO_DB.batch([
			env.PRO_DB.prepare(
				`INSERT OR IGNORE INTO pro_interest_events
				   (event_id, event_name, session_id, user_id, page_path, location,
				    plan_interval, referrer_host, utm_source, utm_medium, utm_campaign)
				 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			).bind(
				eventId,
				eventName,
				sessionId,
				locals.proUser?.id ?? null,
				pagePath,
				shortString(payload?.location, 64),
				planInterval,
				shortString(payload?.referrerHost, 120),
				shortString(payload?.utmSource, 80),
				shortString(payload?.utmMedium, 80),
				shortString(payload?.utmCampaign, 80),
			),
			env.PRO_DB.prepare(
				`DELETE FROM pro_interest_events WHERE created_at < datetime('now', '-180 days')`,
			),
		]);
		return new Response(null, { status: 204, headers: { 'Cache-Control': 'private, no-store' } });
	} catch (error) {
		console.error('Pro interest event failed', error);
		return json({ error: 'Analytics event could not be stored' }, 500);
	}
};
