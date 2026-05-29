#!/usr/bin/env node
/**
 * Google Keyword Planner ideas via the Google Ads API (GenerateKeywordIdeas).
 * English (US) by default. Seeds from seeds.json (keywords + URL).
 *
 * Setup: see scripts/keyword-ideas/README.md
 * Env (in .env):
 *   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET     (reused from CMS OAuth)
 *   GOOGLE_ADS_DEVELOPER_TOKEN                 (API Center, needs Basic access)
 *   GOOGLE_ADS_REFRESH_TOKEN                   (from get-refresh-token.mjs)
 *   GOOGLE_ADS_CUSTOMER_ID                     (10 digits, no dashes)
 *   GOOGLE_ADS_LOGIN_CUSTOMER_ID               (optional, MCC manager id, no dashes)
 *
 * Usage:
 *   node scripts/keyword-ideas/keyword-ideas.mjs                 # keywords + URL from seeds.json
 *   node scripts/keyword-ideas/keyword-ideas.mjs --mode keywords # keywords only
 *   node scripts/keyword-ideas/keyword-ideas.mjs --mode url      # url only
 *   node scripts/keyword-ideas/keyword-ideas.mjs --kw "heic to url,svg to url"
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { GoogleAdsApi, enums } from 'google-ads-api';
import { localeTargets } from './locales.mjs';

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

const {
  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
  GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_REFRESH_TOKEN,
  GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID,
} = process.env;

const missing = Object.entries({
  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
  GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_REFRESH_TOKEN, GOOGLE_ADS_CUSTOMER_ID,
}).filter(([, v]) => !v).map(([k]) => k);
if (missing.length) {
  console.error('Missing env vars:\n  ' + missing.join('\n  ') + '\n\nSee scripts/keyword-ideas/README.md');
  process.exit(1);
}

// ---------- args ----------
function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const mode = arg('mode', 'both');          // both | keywords | url
const locale = arg('locale', 'en');
const target = localeTargets[locale];
if (!target) { console.error(`Unknown locale "${locale}"`); process.exit(1); }

const seeds = JSON.parse(readFileSync(new URL('./seeds.json', import.meta.url), 'utf8'));
let keywords = (arg('kw', null)?.split(',').map((s) => s.trim()).filter(Boolean)) || seeds.seedKeywords;
keywords = keywords.slice(0, 20); // Google hard limit
const url = arg('url', seeds.seedUrl);

// ---------- client ----------
const client = new GoogleAdsApi({
  client_id: GOOGLE_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
  developer_token: GOOGLE_ADS_DEVELOPER_TOKEN,
});
const customer = client.Customer({
  customer_id: GOOGLE_ADS_CUSTOMER_ID.replace(/-/g, ''),
  login_customer_id: GOOGLE_ADS_LOGIN_CUSTOMER_ID?.replace(/-/g, ''),
  refresh_token: GOOGLE_ADS_REFRESH_TOKEN,
});

const COMPETITION = { 0: 'UNSPECIFIED', 1: 'UNKNOWN', 2: 'LOW', 3: 'MEDIUM', 4: 'HIGH' };
const micros = (v) => (v ? (Number(v) / 1e6).toFixed(2) : '');

async function main() {
  // sanity: resolve the language name so a wrong ID is obvious
  try {
    const lc = await customer.query(
      `SELECT language_constant.name, language_constant.code
       FROM language_constant WHERE language_constant.id = ${target.languageId}`
    );
    const name = lc?.[0]?.language_constant?.name;
    console.log(`Locale ${locale} -> ${target.label} (resolved: ${name ?? '??'}), geo ${target.geoId ?? 'worldwide'}`);
  } catch { /* resolution is best-effort */ }

  const request = {
    customer_id: GOOGLE_ADS_CUSTOMER_ID.replace(/-/g, ''),
    language: `languageConstants/${target.languageId}`,
    geo_target_constants: target.geoId ? [`geoTargetConstants/${target.geoId}`] : [],
    keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
    include_adult_keywords: false,
  };
  if (mode === 'keywords') request.keyword_seed = { keywords };
  else if (mode === 'url') request.url_seed = { url };
  else request.keyword_and_url_seed = { keywords, url };

  console.log(`\nRequesting ideas (mode=${mode}, ${keywords.length} seed kw${mode !== 'keywords' ? ` + url ${url}` : ''})…\n`);

  let results;
  try {
    results = await customer.keywordPlanIdeas.generateKeywordIdeas(request);
  } catch (e) {
    console.error('Google Ads API error:', e?.errors ?? e?.message ?? e);
    process.exit(1);
  }

  const rows = results.map((r) => {
    const m = r.keyword_idea_metrics ?? {};
    return {
      keyword: r.text,
      avg_monthly_searches: Number(m.avg_monthly_searches ?? 0),
      competition: COMPETITION[m.competition] ?? m.competition ?? '',
      competition_index: m.competition_index ?? '',
      low_bid_usd: micros(m.low_top_of_page_bid_micros),
      high_bid_usd: micros(m.high_top_of_page_bid_micros),
    };
  }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

  // ---------- write outputs ----------
  const outDir = new URL('./output/', import.meta.url);
  const stamp = `${locale}-${mode}`;
  writeFileSync(new URL(`./ideas-${stamp}.json`, outDir), JSON.stringify(rows, null, 2));
  const csv = ['keyword,avg_monthly_searches,competition,competition_index,low_bid_usd,high_bid_usd']
    .concat(rows.map((r) =>
      [`"${r.keyword.replace(/"/g, '""')}"`, r.avg_monthly_searches, r.competition,
       r.competition_index, r.low_bid_usd, r.high_bid_usd].join(',')))
    .join('\n');
  writeFileSync(new URL(`./ideas-${stamp}.csv`, outDir), csv);

  // ---------- console preview ----------
  console.log(`${rows.length} ideas. Top 25 by volume:\n`);
  console.table(rows.slice(0, 25));
  console.log(`\nSaved: scripts/keyword-ideas/output/ideas-${stamp}.{json,csv}`);
}

main();
