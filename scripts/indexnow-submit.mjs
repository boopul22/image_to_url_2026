#!/usr/bin/env node
// Bulk-submit sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after a deploy that publishes new/changed pages:
//   node scripts/indexnow-submit.mjs
//   node scripts/indexnow-submit.mjs https://imagetourl.cloud/some/page  # ad-hoc single URL(s)

const HOST = 'imagetourl.cloud';
const KEY = '3d44731f2eba442a88a3b29703d060db';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const BATCH_SIZE = 10000; // IndexNow per-request cap

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'indexnow-submit/1.0' } });
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

async function submit(urlList) {
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text().catch(() => '');
  return { status: res.status, body: text };
}

async function main() {
  const cliUrls = process.argv.slice(2).filter(u => u.startsWith('https://'));
  const urls = cliUrls.length ? cliUrls : await fetchSitemapUrls();
  if (urls.length === 0) {
    console.error('No URLs to submit.');
    process.exit(1);
  }
  console.log(`Submitting ${urls.length} URL(s) to IndexNow in batches of ${BATCH_SIZE}...`);

  let ok = 0;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const { status, body } = await submit(batch);
    // IndexNow returns 200 (URLs received) or 202 (received, processing). 4xx = error.
    if (status === 200 || status === 202) {
      console.log(`  batch ${i / BATCH_SIZE + 1}: ${status} OK (${batch.length} URLs)`);
      ok += batch.length;
    } else {
      console.error(`  batch ${i / BATCH_SIZE + 1}: ${status} — ${body.slice(0, 300)}`);
    }
  }
  console.log(`Done. ${ok}/${urls.length} URLs accepted.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
