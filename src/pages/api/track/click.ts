export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { linkId, page } = await request.json() as { linkId?: string; page?: string };
    if (!linkId) {
      return new Response(JSON.stringify({ error: 'Missing linkId' }), { status: 400 });
    }

    const db = getDB(locals);
    const id = crypto.randomUUID();
    await db
      .prepare('INSERT INTO link_clicks (id, link_id, page) VALUES (?, ?, ?)')
      .bind(id, linkId, page ?? null)
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
};
