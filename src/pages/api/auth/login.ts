export const prerender = false;

import type { APIRoute } from 'astro';
import { generateCodeVerifier, generateState } from 'arctic';
import { getGoogleClient } from '../../../lib/auth';

export const GET: APIRoute = async () => {
  const google = getGoogleClient();
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  const url = google.createAuthorizationURL(state, codeVerifier, ['openid', 'profile', 'email']);

  const isSecure = import.meta.env.PROD;
  const cookieFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=600${isSecure ? '; Secure' : ''}`;

  return new Response(null, {
    status: 302,
    headers: [
      ['Location', url.toString()],
      ['Set-Cookie', `google_oauth_state=${state}; ${cookieFlags}`],
      ['Set-Cookie', `google_oauth_code_verifier=${codeVerifier}; ${cookieFlags}`],
    ],
  });
};
