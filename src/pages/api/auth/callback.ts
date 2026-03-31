export const prerender = false;

import type { APIRoute } from 'astro';
import { getGoogleClient, createSessionToken } from '../../../lib/auth';

export const GET: APIRoute = async ({ request, url, cookies, redirect }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  // Parse cookies from raw header as fallback (Astro cookie API can miss them)
  const rawCookie = request.headers.get('cookie') || '';
  const parseCookie = (name: string) => {
    const match = rawCookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
    return match ? match[1] : undefined;
  };

  const storedState = cookies.get('google_oauth_state')?.value || parseCookie('google_oauth_state');
  const codeVerifier = cookies.get('google_oauth_code_verifier')?.value || parseCookie('google_oauth_code_verifier');

  if (!code || !state || !storedState || !codeVerifier || state !== storedState) {
    const missing = [
      !code && 'code',
      !state && 'state',
      !storedState && 'storedState(cookie)',
      !codeVerifier && 'codeVerifier(cookie)',
      (state && storedState && state !== storedState) && 'state-mismatch',
    ].filter(Boolean).join(', ');
    return new Response(`Invalid OAuth state — missing: ${missing}`, { status: 400 });
  }

  try {
    const google = getGoogleClient();
    const tokens = await google.validateAuthorizationCode(code, codeVerifier);
    const accessToken = tokens.accessToken();

    // Fetch user info from Google
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!userResponse.ok) {
      return new Response('Failed to fetch user info', { status: 500 });
    }

    const googleUser = await userResponse.json();

    const sessionToken = await createSessionToken({
      googleId: googleUser.sub,
      name: googleUser.name,
      email: googleUser.email,
      avatarUrl: googleUser.picture,
    });

    // Set session cookie
    cookies.set('session', sessionToken, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Clear temporary OAuth cookies
    cookies.delete('google_oauth_state', { path: '/' });
    cookies.delete('google_oauth_code_verifier', { path: '/' });

    return redirect('/', 302);
  } catch (err) {
    console.error('OAuth callback error:', err);
    return new Response('Authentication failed', { status: 500 });
  }
};
