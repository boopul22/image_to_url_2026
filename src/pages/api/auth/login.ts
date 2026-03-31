export const prerender = false;

import type { APIRoute } from 'astro';
import { generateCodeVerifier, generateState } from 'arctic';
import { getGoogleClient } from '../../../lib/auth';

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const google = getGoogleClient();
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  const url = google.createAuthorizationURL(state, codeVerifier, ['openid', 'profile', 'email']);

  cookies.set('google_oauth_state', state, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: 600, // 10 minutes
  });

  cookies.set('google_oauth_code_verifier', codeVerifier, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: 600,
  });

  return redirect(url.toString(), 302);
};
