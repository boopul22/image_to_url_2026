// imagetourl-indexnow-submit
// ---------------------------
// Dedicated scheduled worker whose ONLY job is to keep search engines fresh:
// once a day it reads https://imagetourl.cloud/sitemap.xml and submits every
// URL to IndexNow (Bing, Yandex, Seznam, Naver). This is what makes "recently
// published pages were not submitted via IndexNow" stop happening — previously
// submission was a manual script (scripts/indexnow-submit.mjs) nobody ran.
//
// No bindings, no secrets: IndexNow auth is the public key file served at
// https://imagetourl.cloud/<KEY>.txt, so this worker can live on any account.
//
// Schedule: see wrangler.toml [triggers] → "0 3 * * *" (daily, 03:00 UTC).

const HOST = 'imagetourl.cloud';
// Public IndexNow key — its `${KEY}.txt` lives in the site's public/ root so the
// IndexNow endpoints can verify ownership. Keep in sync with scripts/indexnow-submit.mjs.
const INDEXNOW_KEY = '3d44731f2eba442a88a3b29703d060db';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const BATCH = 10000; // IndexNow per-request cap

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'imagetourl-indexnow-submit/1.0' } });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const u = m[1].trim().replace(/&amp;/g, '&');
    if (u.startsWith(`https://${HOST}/`)) urls.push(u);
  }
  return [...new Set(urls)];
}

async function submitIndexNow() {
  const urls = await fetchSitemapUrls();
  if (urls.length === 0) {
    console.error('indexnow: no URLs in sitemap');
    return;
  }
  const keyLocation = `https://${HOST}/${INDEXNOW_KEY}.txt`;
  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation, urlList }),
    });
    // 200 = received, 202 = received & processing. Anything else is an error.
    if (res.status === 200 || res.status === 202) {
      console.log(`indexnow: batch ${i / BATCH + 1} ${res.status} OK (${urlList.length} URLs)`);
    } else {
      console.error(`indexnow: batch ${i / BATCH + 1} ${res.status} — ${(await res.text().catch(() => '')).slice(0, 300)}`);
    }
  }
}

export default {
  // Cron trigger.
  async scheduled(event, env, ctx) {
    ctx.waitUntil(submitIndexNow().catch((err) => console.error('indexnow error:', err)));
  },
  // Manual trigger for testing: `curl https://imagetourl-indexnow-submit.<subdomain>.workers.dev`
  async fetch() {
    await submitIndexNow().catch((err) => console.error('indexnow error:', err));
    return new Response('IndexNow submission triggered. Check `wrangler tail` for results.\n');
  },
};
