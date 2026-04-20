// Fetch the rendered home page in several locales, extract *actual* <a href>
// links from the <footer>, and trace each for redirect loops / 404s.
const BASE = process.env.BASE || 'http://localhost:4321';
const MAX = 10;
const LOCALES = ['en','hi','fr','de','ja','ar','zh-Hans'];

async function trace(url) {
  const chain = [];
  let current = url;
  const seen = new Set();
  for (let i = 0; i < MAX; i++) {
    if (seen.has(current)) return { final: 'LOOP', chain };
    seen.add(current);
    const res = await fetch(current, { redirect: 'manual' });
    chain.push({ url: current, status: res.status, location: res.headers.get('location') });
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      const loc = res.headers.get('location');
      current = loc.startsWith('http') ? loc : BASE + loc;
    } else {
      return { final: res.status, chain };
    }
  }
  return { final: 'HOPS>10', chain };
}

function extractFooterLinks(html) {
  // Grab everything between <footer ...> and </footer>
  const m = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/);
  if (!m) return [];
  const footerHtml = m[1];
  const hrefs = [...footerHtml.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  // Keep only same-origin (skip http/external and mailto)
  return [...new Set(hrefs.filter(h => h.startsWith('/') && !h.startsWith('//')))];
}

const allResults = [];
for (const locale of LOCALES) {
  const homeUrl = `${BASE}/${locale}/`;
  const html = await (await fetch(homeUrl, { redirect: 'follow' })).text();
  const links = extractFooterLinks(html);
  console.log(`\n--- ${locale}: ${links.length} footer links ---`);
  for (const link of links) {
    const r = await trace(BASE + link);
    allResults.push({ locale, link, ...r });
  }
}

const problems = allResults.filter(r => r.final !== 200);
const loops = allResults.filter(r => r.final === 'LOOP');
const longChains = allResults.filter(r => r.final === 200 && r.chain.length > 2);

console.log(`\n===== ${allResults.length} links tested, ${problems.length} non-200, ${loops.length} LOOPS, ${longChains.length} chains >2 hops =====\n`);

for (const r of problems) {
  console.log(`[${r.final}] [${r.locale}] ${r.link}`);
  for (const h of r.chain) console.log(`   ${h.status} -> ${h.location ?? '(terminal)'}  (${h.url})`);
  console.log();
}

console.log(`\n===== Redirect chains >1 hop =====\n`);
const redirects = allResults.filter(r => r.final === 200 && r.chain.length > 1);
for (const r of redirects) {
  console.log(`[${r.chain.length} hops] [${r.locale}] ${r.link}`);
  for (const h of r.chain) console.log(`   ${h.status} -> ${h.location ?? '(terminal)'}`);
}

// Summary per-locale
console.log(`\n===== Per-locale summary =====`);
for (const l of LOCALES) {
  const rs = allResults.filter(r => r.locale === l);
  const ok = rs.filter(r => r.final === 200).length;
  const bad = rs.filter(r => r.final !== 200).length;
  const chains = rs.filter(r => r.final === 200 && r.chain.length > 1).length;
  console.log(`${l}: ${rs.length} total, ${ok} ok, ${bad} problems, ${chains} redirected`);
}
