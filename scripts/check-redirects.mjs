#!/usr/bin/env node
// Check redirects and broken pages across the site.
// Usage: node scripts/check-redirects.mjs [--base=https://imagetourl.cloud] [--concurrency=25] [--crawl-links] [--sample=50]

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);

const BASE = args.base || 'https://imagetourl.cloud';
const CONCURRENCY = Number(args.concurrency || 25);
const CRAWL_LINKS = Boolean(args['crawl-links']);
const SAMPLE = Number(args.sample || 50);
const MAX_REDIRECTS = 5;
const TIMEOUT_MS = 15000;
const UA = 'imagetourl-link-checker/1.0 (+https://imagetourl.cloud)';

const SITEMAPS = [`${BASE}/sitemap.xml`, `${BASE}/image-sitemap.xml`];

function log(...a) { console.log(...a); }
function err(...a) { console.error(...a); }

async function fetchWithTimeout(url, opts = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: ctrl.signal, headers: { 'user-agent': UA, ...(opts.headers || {}) } });
  } finally {
    clearTimeout(t);
  }
}

async function getText(url) {
  const r = await fetchWithTimeout(url, { redirect: 'follow' });
  if (!r.ok) throw new Error(`${url} -> ${r.status}`);
  return await r.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function collectSitemapUrls() {
  const all = new Set();
  for (const sm of SITEMAPS) {
    try {
      const xml = await getText(sm);
      const locs = extractLocs(xml);
      // Nested sitemap index? Follow one level.
      for (const loc of locs) {
        if (loc.endsWith('.xml')) {
          try {
            const nested = await getText(loc);
            extractLocs(nested).forEach((u) => all.add(u));
          } catch (e) { err(`nested sitemap failed: ${loc} — ${e.message}`); }
        } else {
          all.add(loc);
        }
      }
    } catch (e) {
      err(`sitemap failed: ${sm} — ${e.message}`);
    }
  }
  return [...all];
}

// Follow redirects manually so we can record the chain.
async function checkUrl(url) {
  const chain = [];
  let current = url;
  for (let i = 0; i <= MAX_REDIRECTS; i++) {
    let res;
    try {
      res = await fetchWithTimeout(current, { method: 'HEAD', redirect: 'manual' });
      // Some hosts return 405/403 on HEAD; retry with GET.
      if (res.status === 405 || res.status === 403 || res.status === 501) {
        res = await fetchWithTimeout(current, { method: 'GET', redirect: 'manual' });
      }
    } catch (e) {
      return { url, status: 'error', error: e.message, chain };
    }

    const loc = res.headers.get('location');
    chain.push({ url: current, status: res.status, location: loc || null, contentType: res.headers.get('content-type') });

    if (res.status >= 300 && res.status < 400 && loc) {
      current = new URL(loc, current).toString();
      continue;
    }
    return {
      url,
      finalUrl: current,
      finalStatus: res.status,
      finalContentType: res.headers.get('content-type'),
      redirected: chain.length > 1,
      hops: chain.length - 1,
      chain,
    };
  }
  return { url, status: 'redirect-loop', chain };
}

async function runPool(items, worker, concurrency) {
  const out = new Array(items.length);
  let idx = 0;
  let done = 0;
  const total = items.length;
  async function next() {
    while (true) {
      const i = idx++;
      if (i >= total) return;
      out[i] = await worker(items[i], i);
      done++;
      if (done % 50 === 0 || done === total) process.stdout.write(`\r  checked ${done}/${total}`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, total) }, next));
  process.stdout.write('\n');
  return out;
}

function extractHrefs(html, pageUrl) {
  const out = new Set();
  const re = /<a\b[^>]*?\bhref=["']([^"'#]+)["']/gi;
  for (const m of html.matchAll(re)) {
    try {
      const abs = new URL(m[1], pageUrl).toString();
      out.add(abs);
    } catch {}
  }
  return [...out];
}

async function crawlSamplePagesForLinks(urls, sample) {
  const picks = urls.slice(0, sample);
  const extra = new Set();
  await runPool(picks, async (u) => {
    try {
      const r = await fetchWithTimeout(u, { redirect: 'follow' });
      if (!r.ok) return;
      if (!(r.headers.get('content-type') || '').includes('html')) return;
      const html = await r.text();
      for (const href of extractHrefs(html, u)) extra.add(href);
    } catch {}
  }, CONCURRENCY);
  return [...extra];
}

function summarize(results) {
  const buckets = { ok: [], redirect: [], broken: [], error: [] };
  for (const r of results) {
    if (r.status === 'error' || r.status === 'redirect-loop') buckets.error.push(r);
    else if (r.finalStatus >= 400) buckets.broken.push(r);
    else if (r.redirected) buckets.redirect.push(r);
    else buckets.ok.push(r);
  }
  return buckets;
}

(async () => {
  log(`base: ${BASE}`);
  log(`concurrency: ${CONCURRENCY}`);
  log('\n[1/3] collecting sitemap URLs…');
  const urls = await collectSitemapUrls();
  log(`  sitemap URLs: ${urls.length}`);

  let extraLinks = [];
  if (CRAWL_LINKS) {
    log(`\n[2a/3] crawling first ${SAMPLE} pages for extra links…`);
    const found = await crawlSamplePagesForLinks(urls, SAMPLE);
    const sitemapSet = new Set(urls);
    extraLinks = found.filter((u) => {
      if (sitemapSet.has(u)) return false;
      try { return new URL(u).host === new URL(BASE).host; } catch { return false; }
    });
    log(`  extra internal links found: ${extraLinks.length}`);
  }

  const all = [...new Set([...urls, ...extraLinks])];
  log(`\n[2/3] checking ${all.length} URLs…`);
  const results = await runPool(all, checkUrl, CONCURRENCY);

  log('\n[3/3] writing report…');
  const b = summarize(results);
  const date = new Date().toISOString().slice(0, 10);
  const reportDir = 'reports';
  mkdirSync(reportDir, { recursive: true });
  const out = {
    base: BASE,
    checkedAt: new Date().toISOString(),
    totals: { checked: results.length, ok: b.ok.length, redirect: b.redirect.length, broken: b.broken.length, error: b.error.length },
    redirects: b.redirect,
    broken: b.broken,
    errors: b.error,
  };
  const path = join(reportDir, `redirects-${date}.json`);
  writeFileSync(path, JSON.stringify(out, null, 2));

  log(`\n=== summary ===`);
  log(`  OK:         ${b.ok.length}`);
  log(`  Redirect:   ${b.redirect.length}`);
  log(`  Broken 4xx/5xx: ${b.broken.length}`);
  log(`  Errors:     ${b.error.length}`);
  log(`  report: ${path}`);

  if (b.broken.length) {
    log(`\n--- top broken (first 20) ---`);
    for (const r of b.broken.slice(0, 20)) log(`  ${r.finalStatus}  ${r.url}`);
  }
  if (b.redirect.length) {
    log(`\n--- top redirects (first 20) ---`);
    for (const r of b.redirect.slice(0, 20)) log(`  ${r.hops}x  ${r.url}  ->  ${r.finalUrl}  [${r.finalStatus}]`);
  }
  if (b.error.length) {
    log(`\n--- errors (first 10) ---`);
    for (const r of b.error.slice(0, 10)) log(`  ${r.status}  ${r.url}  ${r.error || ''}`);
  }

  process.exit(b.broken.length || b.error.length ? 1 : 0);
})();
