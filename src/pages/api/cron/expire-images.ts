export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { getEnv } from '../../../lib/env';
import { expireDueImages } from '../../../lib/images/delete';

// Auth: requires `Authorization: Bearer <CRON_SECRET>` matching the CRON_SECRET env var.
// Wire this endpoint to a Cloudflare Cron Trigger (separate Worker) or any external cron
// (e.g. cron-job.org) every 15 minutes.
async function handle(request: Request, locals: App.Locals): Promise<Response> {
  const env = getEnv(locals) as unknown as { CRON_SECRET?: string } & Record<string, string>;
  const expected = env.CRON_SECRET;
  if (!expected) {
    return new Response(JSON.stringify({ error: 'CRON_SECRET not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const auth = request.headers.get('authorization') || '';
  if (auth !== `Bearer ${expected}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const result = await expireDueImages(db, env as any);
  return new Response(JSON.stringify({ ok: true, ...result }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = ({ request, locals }) => handle(request, locals);
export const GET: APIRoute = ({ request, locals }) => handle(request, locals);
