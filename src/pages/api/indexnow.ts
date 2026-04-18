// IndexNow webhook helper — calls Bing/Yandex IndexNow on publish events.
// POST with { urls: string[], reason?: string } from the admin CMS to push
// updated URLs to IndexNow. Auth via a shared secret header.

import type { APIContext } from 'astro';

export const prerender = false;

const INDEXNOW_HOST = 'imagetourl.cloud';
const INDEXNOW_KEY = '6a5d7e2c8b3f4a1e9c7d5b8a2f6e4c3d'; // static per-host token; must also exist at /{KEY}.txt in public/
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

export async function POST({ request, locals }: APIContext): Promise<Response> {
  const secret = request.headers.get('x-indexnow-secret');
  const expected = (locals as any)?.runtime?.env?.INDEXNOW_SECRET;
  if (!expected || secret !== expected) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: { 'content-type': 'application/json' } });
  }

  let body: { urls?: string[] };
  try { body = await request.json(); }
  catch { return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400, headers: { 'content-type': 'application/json' } }); }

  const urls = (body.urls || []).filter(u => typeof u === 'string' && u.startsWith(`https://${INDEXNOW_HOST}/`));
  if (!urls.length) {
    return new Response(JSON.stringify({ error: 'no valid urls' }), { status: 400, headers: { 'content-type': 'application/json' } });
  }

  const payload = JSON.stringify({
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  const results = await Promise.allSettled(
    ENDPOINTS.map(ep => fetch(ep, { method: 'POST', headers: { 'content-type': 'application/json' }, body: payload }))
  );

  const summary = results.map((r, i) => ({
    endpoint: ENDPOINTS[i],
    ok: r.status === 'fulfilled' && r.value.ok,
    status: r.status === 'fulfilled' ? r.value.status : 0,
  }));

  return new Response(JSON.stringify({ urls: urls.length, results: summary }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
