// Website-only request guard for our internal POST endpoints (api/upload,
// api/brand-image). These are NOT a public API: we only accept requests that a
// browser makes from our own site, where the Origin (or, as a fallback,
// Referer) header is present and matches a known host.
//
// Non-browser clients (curl, scripts, third-party sites) either send no
// Origin/Referer or one that doesn't match, so they're rejected.
//
// Exact host comparison — the previous `startsWith('https://imagetourl.cloud')`
// check both rejected the live `www.` host (a real duplicate domain) AND would
// have ACCEPTED `https://imagetourl.cloud.evil.com`. Comparing the parsed host
// fixes both.
const ALLOWED_HOSTS = new Set([
  'imagetourl.cloud',
  'www.imagetourl.cloud',
  'localhost:4321',
  'localhost:3000',
]);

export function isSameSiteRequest(request: Request): boolean {
  const source = request.headers.get('origin') || request.headers.get('referer');
  if (!source) return false;
  let host: string;
  try {
    host = new URL(source).host;
  } catch {
    return false;
  }
  return ALLOWED_HOSTS.has(host);
}
