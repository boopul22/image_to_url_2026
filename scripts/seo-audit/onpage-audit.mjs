#!/usr/bin/env node
/**
 * On-page SEO audit via the DataForSEO On-Page API.
 * Crawls the English site (start at /en/), polls until the crawl finishes, then pulls:
 *   - summary  (aggregated on-page checks across the whole crawl)
 *   - pages    (per-page title/description/h1, word count, timing, checks)
 *   - duplicate_tags (duplicate title / description / h1 groups)
 *   - links    (broken / 4xx-5xx internal links)
 * and writes a Markdown report + raw JSON to ./output/.
 *
 * Env (.env): DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD
 *
 * Usage:
 *   node scripts/seo-audit/onpage-audit.mjs
 *   node scripts/seo-audit/onpage-audit.mjs --start https://imagetourl.cloud/en/ --pages 25
 *   node scripts/seo-audit/onpage-audit.mjs --target imagetourl.cloud --pages 50
 */
import { readFileSync, writeFileSync } from 'node:fs';

// ---------- load .env ----------
function loadEnv() {
  try {
    const raw = readFileSync(new URL('../../.env', import.meta.url), 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch { /* ignore */ }
}
loadEnv();

const { DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD } = process.env;
if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
  console.error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env');
  process.exit(1);
}
const AUTH = 'Basic ' + Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');
const BASE = 'https://api.dataforseo.com/v3';

// ---------- args ----------
function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const startUrl = arg('start', 'https://imagetourl.cloud/en/');
const target = arg('target', new URL(startUrl).hostname);
const maxPages = Number(arg('pages', '25'));

// ---------- api helper ----------
async function api(path, method = 'GET', body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { Authorization: AUTH, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (json.status_code !== 20000) {
    throw new Error(`${path}: ${json.status_message} (${json.status_code})`);
  }
  const task = json.tasks?.[0];
  if (task && task.status_code !== 20000 && task.status_code !== 20100) {
    throw new Error(`${path} task: ${task.status_message} (${task.status_code})`);
  }
  return task;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log(`On-Page audit -> target=${target}, start=${startUrl}, max_crawl_pages=${maxPages}\n`);

  // 1) Post the crawl task
  const post = await api('/on_page/task_post', 'POST', [{
    target,
    max_crawl_pages: maxPages,
    start_url: startUrl,
    load_resources: true,
    enable_javascript: true,
    enable_browser_rendering: true,
    custom_user_agent: 'Mozilla/5.0 (compatible; SEO-Audit-DataForSEO)',
    check_spell: false,
    calculate_keyword_density: false,
  }]);
  const id = post.id;
  console.log(`Task posted: ${id}\nCrawling (polling summary)…`);

  // 2) Poll summary until crawl finishes
  let summary;
  for (let i = 0; i < 60; i++) {
    await sleep(5000);
    const t = await api(`/on_page/summary/${id}`);
    summary = t.result?.[0];
    const prog = summary?.crawl_progress;
    const crawled = summary?.pages_crawled ?? 0;
    process.stdout.write(`\r  progress=${prog} pages_crawled=${crawled}/${summary?.pages_in_queue + crawled || '?'}   `);
    if (prog === 'finished') break;
  }
  console.log('\n');

  // 3) Fetch per-page data
  const pagesT = await api('/on_page/pages', 'POST', [{
    id, limit: 1000,
    order_by: ['onpage_score,asc'],
  }]);
  const pages = pagesT.result?.[0]?.items ?? [];

  // 4) Duplicate tags
  async function dupes(type) {
    try {
      const t = await api('/on_page/duplicate_tags', 'POST', [{ id, type, limit: 100 }]);
      return t.result?.[0]?.items ?? [];
    } catch { return []; }
  }
  const [dupTitle, dupDesc, dupH1] = await Promise.all([dupes('title'), dupes('description'), dupes('h1')]);

  // 5) Broken links
  let brokenLinks = [];
  try {
    const t = await api('/on_page/links', 'POST', [{ id, limit: 200,
      filters: [['link_to_status_code', '>=', 400]] }]);
    brokenLinks = t.result?.[0]?.items ?? [];
  } catch { /* ignore */ }

  // ---------- write raw JSON ----------
  const outDir = new URL('./output/', import.meta.url);
  const raw = { id, target, startUrl, maxPages, summary, pages, dupTitle, dupDesc, dupH1, brokenLinks };
  writeFileSync(new URL('./audit-en-raw.json', outDir), JSON.stringify(raw, null, 2));

  // ---------- build report ----------
  const m = summary?.page_metrics ?? {};
  const checks = m.checks ?? {};
  const dom = summary?.domain_info ?? {};

  const CHECK_LABELS = {
    no_title: 'Pages with no <title>',
    no_description: 'Pages with no meta description',
    no_h1_tag: 'Pages with no H1',
    title_too_long: 'Title too long (>65 chars)',
    title_too_short: 'Title too short (<30 chars)',
    no_image_alt: 'Images missing alt text',
    no_image_title: 'Images missing title attr',
    duplicate_title_tag: 'Duplicate <title>',
    duplicate_description_tag: 'Duplicate meta description',
    duplicate_content: 'Duplicate content pages',
    low_content_rate: 'Low text-to-HTML ratio',
    small_page_size: 'Very small pages',
    large_page_size: 'Oversized pages',
    high_loading_time: 'Slow loading pages',
    is_redirect: 'Redirecting pages',
    is_4xx_code: '4xx errors',
    is_5xx_code: '5xx errors',
    is_broken: 'Broken pages',
    is_www: 'WWW/non-www issues',
    is_https: 'HTTPS pages',
    is_http: 'HTTP (insecure) pages',
    canonical: 'Pages with canonical',
    no_favicon: 'No favicon',
    no_doctype: 'No doctype',
    no_encoding_meta_tag: 'No charset meta',
    high_waiting_time: 'High TTFB',
    has_render_blocking_resources: 'Render-blocking resources',
    redirect_loop: 'Redirect loops',
    canonical_to_broken: 'Canonical -> broken',
    canonical_to_redirect: 'Canonical -> redirect',
    recursive_canonical: 'Recursive canonical',
    no_content_encoding: 'No gzip/br compression',
    seo_friendly_url: 'SEO-friendly URLs',
    flash: 'Uses Flash',
    frame: 'Uses frames',
    lorem_ipsum: 'Placeholder (lorem ipsum) text',
    deprecated_html_tags: 'Deprecated HTML tags',
    duplicate_meta_tags: 'Duplicate meta tags',
    no_image_alt_text: 'Images missing alt',
    https_to_http_links: 'HTTPS page links to HTTP',
    size_greater_than_3mb: 'Page > 3MB',
    irrelevant_description: 'Irrelevant description',
    irrelevant_title: 'Irrelevant title',
    irrelevant_meta_keywords: 'Irrelevant meta keywords',
    title_too_many_words: 'Title has too many words',
    no_meta_refresh_redirect: 'Meta-refresh redirect',
    has_meta_refresh_redirect: 'Meta-refresh redirect',
    has_html_doctype: 'Has HTML5 doctype',
    no_doctype_tag: 'Missing doctype',
  };

  // problem checks = ones where a nonzero count is BAD
  const PROBLEMS = new Set([
    'no_title', 'no_description', 'no_h1_tag', 'title_too_long', 'title_too_short',
    'no_image_alt', 'duplicate_title_tag', 'duplicate_description_tag', 'duplicate_content',
    'low_content_rate', 'large_page_size', 'high_loading_time', 'is_4xx_code', 'is_5xx_code',
    'is_broken', 'high_waiting_time', 'has_render_blocking_resources', 'redirect_loop',
    'canonical_to_broken', 'canonical_to_redirect', 'recursive_canonical', 'no_content_encoding',
    'flash', 'frame', 'lorem_ipsum', 'deprecated_html_tags', 'duplicate_meta_tags',
    'https_to_http_links', 'size_greater_than_3mb', 'irrelevant_description', 'irrelevant_title',
    'no_favicon', 'no_doctype', 'no_encoding_meta_tag',
  ]);

  const problemRows = Object.entries(checks)
    .filter(([k, v]) => PROBLEMS.has(k) && v > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => ({ key: k, label: CHECK_LABELS[k] || k, count: v }));

  const N = (x) => (x ?? 0).toLocaleString();
  const lines = [];
  lines.push(`# On-Page SEO Audit — ${target} (English)\n`);
  lines.push(`- Crawl start: \`${startUrl}\``);
  lines.push(`- Pages crawled: **${N(summary?.pages_crawled)}** (cap ${maxPages})`);
  lines.push(`- Crawl status: ${summary?.crawl_progress}`);
  lines.push(`- Domain CMS: ${dom.cms || '—'} | Server: ${dom.server || '—'} | SSL: ${dom.ssl_info?.valid_certificate ? 'valid' : '—'}`);
  lines.push(`- Avg OnPage score: **${m.onpage_score != null ? m.onpage_score.toFixed(1) : '—'} / 100**`);
  lines.push(`- Total links checked: ${N(m.links_external + m.links_internal)} (int ${N(m.links_internal)} / ext ${N(m.links_external)}, broken ${N(m.broken_links)})`);
  lines.push('');

  lines.push(`## Issues found (${problemRows.length})\n`);
  if (problemRows.length) {
    lines.push('| Issue | Pages affected |');
    lines.push('|---|---|');
    for (const r of problemRows) lines.push(`| ${r.label} | ${r.count} |`);
  } else {
    lines.push('No issues flagged by the crawler. 🎉');
  }
  lines.push('');

  // Per-page table
  lines.push(`## Per-page detail\n`);
  lines.push('| URL | Score | Title (len) | Desc (len) | H1 | Words | Status |');
  lines.push('|---|---|---|---|---|---|---|');
  for (const p of pages.slice(0, 60)) {
    const meta = p.meta ?? {};
    const url = (p.url || '').replace(/^https?:\/\/[^/]+/, '');
    const titleLen = meta.title?.length ?? 0;
    const descLen = meta.description?.length ?? 0;
    const h1 = meta.htags?.h1?.length ?? 0;
    lines.push(`| ${url || '/'} | ${p.onpage_score != null ? p.onpage_score.toFixed(0) : '—'} | ${titleLen} | ${descLen} | ${h1} | ${N(meta.content?.plain_text_word_count)} | ${p.status_code} |`);
  }
  lines.push('');

  // Page-level problem callouts
  const callouts = [];
  for (const p of pages) {
    const meta = p.meta ?? {};
    const url = (p.url || '').replace(/^https?:\/\/[^/]+/, '') || '/';
    const issues = [];
    if (!meta.title) issues.push('no title');
    else if (meta.title.length > 65) issues.push(`title ${meta.title.length} chars (long)`);
    else if (meta.title.length < 30) issues.push(`title ${meta.title.length} chars (short)`);
    if (!meta.description) issues.push('no description');
    else if (meta.description.length > 160) issues.push(`description ${meta.description.length} chars (long)`);
    else if (meta.description.length < 70) issues.push(`description ${meta.description.length} chars (short)`);
    const h1c = meta.htags?.h1?.length ?? 0;
    if (h1c === 0) issues.push('no H1');
    else if (h1c > 1) issues.push(`${h1c} H1 tags`);
    if ((meta.content?.plain_text_word_count ?? 0) < 300) issues.push(`${meta.content?.plain_text_word_count ?? 0} words (thin)`);
    if (p.checks?.no_image_alt) issues.push('images missing alt');
    if (p.checks?.canonical_to_redirect) issues.push('canonical -> redirect');
    if (p.checks?.high_loading_time) issues.push('slow load');
    if (issues.length) callouts.push(`- \`${url}\` — ${issues.join('; ')}`);
  }
  if (callouts.length) {
    lines.push(`## Page-level action items (${callouts.length})\n`);
    lines.push(...callouts);
    lines.push('');
  }

  // Duplicate groups
  function dupSection(title, items, field) {
    if (!items.length) return;
    lines.push(`## ${title} (${items.length} group${items.length > 1 ? 's' : ''})\n`);
    for (const g of items.slice(0, 20)) {
      const val = g.accumulator ?? g[field] ?? '';
      const urls = (g.pages ?? []).map((u) => u.replace(/^https?:\/\/[^/]+/, ''));
      lines.push(`- **"${val}"** → ${urls.join(', ')}`);
    }
    lines.push('');
  }
  dupSection('Duplicate titles', dupTitle, 'title');
  dupSection('Duplicate descriptions', dupDesc, 'description');
  dupSection('Duplicate H1s', dupH1, 'h1');

  if (brokenLinks.length) {
    lines.push(`## Broken links (${brokenLinks.length})\n`);
    for (const l of brokenLinks.slice(0, 50)) {
      lines.push(`- ${l.link_to} (${l.link_to_status_code}) on ${l.page_from?.replace(/^https?:\/\/[^/]+/, '') || '?'}`);
    }
    lines.push('');
  }

  const report = lines.join('\n');
  writeFileSync(new URL('./audit-en-report.md', outDir), report);

  // ---------- console ----------
  console.log(`Pages crawled: ${summary?.pages_crawled}  |  Avg OnPage score: ${m.onpage_score?.toFixed(1) ?? '—'}/100\n`);
  console.log('Top issues:');
  console.table(problemRows.slice(0, 20));
  console.log(`\nSaved:\n  scripts/seo-audit/output/audit-en-report.md\n  scripts/seo-audit/output/audit-en-raw.json`);
}

main().catch((e) => { console.error('\nError:', e.message); process.exit(1); });
