// Scheduled tasks for imagetourl.cloud.
//
// Two triggers (see wrangler.toml [triggers].crons), dispatched on event.cron:
//   */15 * * * *  → ping the main worker's expire-images endpoint
//   0 3 * * *     → resubmit the sitemap to IndexNow (Bing/Yandex/Seznam/Naver)
//
// CRON_SECRET must be set on this worker via `wrangler secret put CRON_SECRET`.

const HOST = 'imagetourl.cloud';
// Public IndexNow key — its `${KEY}.txt` lives in the site's public/ root so the
// IndexNow endpoints can verify ownership. Keep in sync with scripts/indexnow-submit.mjs.
const INDEXNOW_KEY = '3d44731f2eba442a88a3b29703d060db';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_BATCH = 10000; // IndexNow per-request cap

async function pingExpireImages(env) {
  const res = await fetch(`https://${HOST}/api/cron/expire-images`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.CRON_SECRET}` },
  });
  if (!res.ok) console.error('expire-images failed:', res.status, await res.text());
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'indexnow-cron/1.0' } });
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
  for (let i = 0; i < urls.length; i += INDEXNOW_BATCH) {
    const urlList = urls.slice(i, i + INDEXNOW_BATCH);
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation, urlList }),
    });
    // 200 = received, 202 = received & processing. Anything else is an error.
    if (res.status === 200 || res.status === 202) {
      console.log(`indexnow: batch ${i / INDEXNOW_BATCH + 1} ${res.status} OK (${urlList.length} URLs)`);
    } else {
      console.error(`indexnow: batch ${i / INDEXNOW_BATCH + 1} ${res.status} — ${(await res.text().catch(() => '')).slice(0, 300)}`);
    }
  }
}

export default {
  async scheduled(event, env, ctx) {
    // Daily IndexNow resubmission keeps newly published pages discoverable even
    // when no deploy-time submission ran. Everything else is the 15-min pinger.
    if (event.cron === '0 3 * * *') {
      ctx.waitUntil(submitIndexNow().catch((err) => console.error('indexnow error:', err)));
    } else {
      ctx.waitUntil(pingExpireImages(env).catch((err) => console.error('expire-images fetch error:', err)));
    }
  },
};
