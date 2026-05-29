#!/usr/bin/env node
/**
 * One-time helper: mints a Google Ads API refresh token (scope: adwords)
 * using your existing GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET.
 *
 * Prereq: in Google Cloud Console -> your OAuth client -> Authorized redirect URIs,
 *         add  http://localhost:4477/oauth2callback
 *         (or create a new "Desktop app" OAuth client and use its id/secret).
 *
 * Run:  node scripts/keyword-ideas/get-refresh-token.mjs
 * Then paste the printed GOOGLE_ADS_REFRESH_TOKEN into your .env.
 */
import http from 'node:http';
import { exec } from 'node:child_process';
import { readFileSync } from 'node:fs';

// --- load .env (simple parser, no dep) ---
function loadEnv() {
  try {
    const raw = readFileSync(new URL('../../.env', import.meta.url), 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch { /* no .env */ }
}
loadEnv();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT = 'http://localhost:4477/oauth2callback';
const SCOPE = 'https://www.googleapis.com/auth/adwords';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET in .env');
  process.exit(1);
}

const authUrl =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent',
  });

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/oauth2callback')) { res.writeHead(404); res.end(); return; }
  const code = new URL(req.url, REDIRECT).searchParams.get('code');
  if (!code) { res.writeHead(400); res.end('No code'); return; }

  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT,
        grant_type: 'authorization_code',
      }),
    });
    const data = await tokenRes.json();
    if (!data.refresh_token) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No refresh_token returned. Revoke prior access at https://myaccount.google.com/permissions and retry.');
      console.error('Response:', data);
      server.close();
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>✅ Done — refresh token captured. Return to your terminal.</h2>');
    console.log('\n========================================================');
    console.log('Add this line to your .env:\n');
    console.log(`GOOGLE_ADS_REFRESH_TOKEN=${data.refresh_token}`);
    console.log('========================================================\n');
  } catch (e) {
    res.writeHead(500); res.end('Error: ' + e.message);
    console.error(e);
  } finally {
    setTimeout(() => server.close(), 500);
  }
});

server.listen(4477, () => {
  console.log('Opening browser for Google consent…');
  console.log('If it does not open, visit:\n' + authUrl + '\n');
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  exec(`${opener} "${authUrl}"`);
});
