export const prerender = false;

import type { APIRoute } from 'astro';
import {
  generateState,
  generateCodeVerifier,
  generateCodeChallenge,
  buildGoogleAuthURL,
  getRedirectUri,
} from '../../../lib/auth';
import { getEnv } from '../../../lib/env';
import { safeReturnTo } from '../../../lib/return-to';

const PRO_AUTH_ORIGINS = new Set([
	'https://imagetourl.cloud',
  'https://pro.imagetourl.cloud',
  'http://localhost:4322',
  'http://127.0.0.1:4322',
]);

export const GET: APIRoute = async ({ request, url: requestUrl, locals }) => {
  const returnTo = safeReturnTo(requestUrl.searchParams.get('return_to'));
  if (requestUrl.searchParams.get('start') !== 'google') {
    return signInPage(returnTo);
  }

  const env = getEnv(locals);
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const emailOptIn = requestUrl.searchParams.get('email_updates') === '1' ? '1' : '0';

  const redirectUri = getRedirectUri(import.meta.env.DEV);
  const url = buildGoogleAuthURL(state, codeChallenge, env.GOOGLE_CLIENT_ID, redirectUri);

  const isSecure = import.meta.env.PROD;
  const domain = isSecure ? '; Domain=.imagetourl.cloud' : '';
  const cookieFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=600${isSecure ? '; Secure' : ''}${domain}`;
  const wantsJson = requestUrl.searchParams.get('response') === 'json';

  if (wantsJson) {
    const requestOrigin = request.headers.get('Origin') ?? requestUrl.origin;
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

    return new Response(JSON.stringify({ authorization_url: url }), {
      status: 200,
      headers: [
        ['Content-Type', 'application/json; charset=utf-8'],
        ['Cache-Control', 'no-store'],
        ['Access-Control-Allow-Origin', requestOrigin],
        ['Access-Control-Allow-Credentials', 'true'],
        ['Vary', 'Origin'],
        ['Set-Cookie', `google_oauth_state=${state}; ${cookieFlags}`],
        ['Set-Cookie', `google_oauth_code_verifier=${codeVerifier}; ${cookieFlags}`],
        ['Set-Cookie', `google_oauth_email_opt_in=${emailOptIn}; ${cookieFlags}`],
        ['Set-Cookie', `google_oauth_return_to=${encodeURIComponent(returnTo)}; ${cookieFlags}`],
      ],
    });
  }

  return new Response(null, {
    status: 302,
    headers: [
      ['Location', url],
      ['Set-Cookie', `google_oauth_state=${state}; ${cookieFlags}`],
      ['Set-Cookie', `google_oauth_code_verifier=${codeVerifier}; ${cookieFlags}`],
      ['Set-Cookie', `google_oauth_email_opt_in=${emailOptIn}; ${cookieFlags}`],
      ['Set-Cookie', `google_oauth_return_to=${encodeURIComponent(returnTo)}; ${cookieFlags}`],
    ],
  });
};

function signInPage(returnTo: string): Response {
  const escapedReturnTo = returnTo
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
  return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sign in - ImageToURL</title>
  </head>
  <body style="margin:0;background:#fafafa;color:#18181b;font-family:Arial,Helvetica,sans-serif;">
    <main style="min-height:100vh;display:grid;place-items:center;padding:24px;">
      <form method="get" action="/api/auth/login" style="width:min(440px,100%);border:1px solid #e5e7eb;background:#fff;padding:28px;box-sizing:border-box;">
        <input type="hidden" name="start" value="google" />
        <input type="hidden" name="return_to" value="${escapedReturnTo}" />
        <p style="margin:0 0 10px;color:#e11d48;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;">ImageToURL</p>
        <h1 style="margin:0 0 10px;font-size:28px;line-height:1.15;">Sign in with Google</h1>
        <p style="margin:0 0 22px;color:#52525b;line-height:1.55;font-size:15px;">Use your Google account for dashboard access, higher upload limits, and permanent image options.</p>
        <label style="display:flex;gap:10px;align-items:flex-start;margin:0 0 22px;color:#3f3f46;font-size:14px;line-height:1.45;">
          <input type="checkbox" name="email_updates" value="1" checked style="margin-top:2px;width:16px;height:16px;accent-color:#e11d48;" />
          <span>Email me before my image links expire, plus occasional product updates. I can unsubscribe anytime.</span>
        </label>
        <button type="submit" style="width:100%;min-height:46px;border:0;background:#e11d48;color:#fff;font-weight:800;font-size:14px;cursor:pointer;">Continue with Google</button>
        <p style="margin:18px 0 0;color:#71717a;font-size:12px;line-height:1.45;">Uncheck the box if you prefer no reminder or marketing emails for this login.</p>
      </form>
    </main>
  </body>
</html>`, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });
}
