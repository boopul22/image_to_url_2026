export const prerender = false;

import type { APIRoute } from 'astro';
import { deleteSession } from '../../../lib/session';
import { getDB } from '../../../lib/db';
import { safeReturnTo } from '../../../lib/return-to';

const PRO_AUTH_ORIGINS = new Set([
  'https://pro.imagetourl.cloud',
  'http://localhost:4322',
  'http://127.0.0.1:4322',
]);

export const GET: APIRoute = async ({ request, url, locals }) => {
  const rawCookie = request.headers.get('cookie') || '';
  const match = rawCookie.match(/(?:^|;\s*)session=([^;]*)/);
  const token = match ? match[1] : null;

  if (token) {
    try {
      const db = getDB(locals);
      await deleteSession(db, token);
    } catch {
      // Ignore DB errors on logout
    }
  }

  const isSecure = import.meta.env.PROD;
  const domain = isSecure ? '; Domain=.imagetourl.cloud' : '';
  const clearFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=0${isSecure ? '; Secure' : ''}${domain}`;
  const hintClearFlags = `SameSite=Lax; Path=/; Max-Age=0${isSecure ? '; Secure' : ''}${domain}`;
  const returnTo = safeReturnTo(url.searchParams.get('return_to'));
  const wantsJson = url.searchParams.get('response') === 'json';

  if (wantsJson) {
    const requestOrigin = request.headers.get('Origin') ?? '';
    if (!PRO_AUTH_ORIGINS.has(requestOrigin)) {
      return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
          Vary: 'Origin',
        },
      });
    }

    return new Response(JSON.stringify({ signed_out: true }), {
      status: 200,
      headers: [
        ['Content-Type', 'application/json; charset=utf-8'],
        ['Cache-Control', 'no-store'],
        ['Access-Control-Allow-Origin', requestOrigin],
        ['Access-Control-Allow-Credentials', 'true'],
        ['Vary', 'Origin'],
        ['Set-Cookie', `session=; ${clearFlags}`],
        ['Set-Cookie', `has_session=; ${hintClearFlags}`],
      ],
    });
  }

  return new Response(null, {
    status: 302,
    headers: [
      ['Location', returnTo],
      ['Set-Cookie', `session=; ${clearFlags}`],
      ['Set-Cookie', `has_session=; ${hintClearFlags}`],
    ],
  });
};
