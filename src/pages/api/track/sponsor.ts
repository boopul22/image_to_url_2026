export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { recordSponsorEvent } from '../../../lib/sponsor-ads';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { adId, type, page } = (await request.json()) as {
      adId?: string;
      type?: string;
      page?: string;
    };

    if (!adId || (type !== 'view' && type !== 'click')) {
      return new Response(JSON.stringify({ ok: false }), { status: 400 });
    }

    const db = getDB(locals);

    const ad = await db
      .prepare('SELECT id FROM sponsor_ads WHERE id = ? LIMIT 1')
      .bind(adId)
      .first<{ id: string }>();
    if (!ad) {
      return new Response(JSON.stringify({ ok: false }), { status: 404 });
    }

    await recordSponsorEvent(db, adId, type, page ?? null);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
};
