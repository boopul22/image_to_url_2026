// Spot-check footer URLs across non-English locales to catch locale-specific
// redirect loops. Renders the exact English slug the footer would use for the
// "Our Tools" block (/heic-to-jpg), plus the locale-prefixed versions.
const BASE = 'http://localhost:4321';
const MAX = 10;

const LOCALES = ['hi','fr','de','ja','ar','zh-Hans','es','pt-BR','ru','ko','tr','vi','id','it','nl','pl','tl','bn','fa','ur','th','sw','ms','ta','mr','te','zh-Hant'];
// Representative paths: home, a SLUGS tool (english form on non-en locale),
// hardcoded /about (footer drops locale on these), blog
const TEMPLATES = [
  (l) => `/${l}/`,
  (l) => `/${l}/heic-to-jpg/`,        // english slug on non-en locale — should 301 to translated slug
  (l) => `/${l}/png-to-url/`,
  (l) => `/${l}/blog`,
  (l) => `/${l}/privacy`,
  // Footer hardcodes /about /contact /content-guidelines /heic-to-jpg /
  () => `/about`,
  () => `/contact`,
  () => `/content-guidelines`,
  () => `/heic-to-jpg`,
];

async function trace(path) {
  const chain = [];
  let current = BASE + path;
  for (let i = 0; i < MAX; i++) {
    const res = await fetch(current, { redirect: 'manual' });
    chain.push({ status: res.status, location: res.headers.get('location') });
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      const loc = res.headers.get('location');
      const next = loc.startsWith('http') ? loc : BASE + loc;
      // loop detector: same URL already in chain
      if (chain.some(h => h.loc === next)) return { final: 'LOOP', chain };
      current = next;
    } else {
      return { final: res.status, chain };
    }
  }
  return { final: 'HOPS>10', chain };
}

const rows = [];
for (const l of LOCALES) {
  for (const tmpl of TEMPLATES) {
    const p = tmpl(l);
    const r = await trace(p);
    rows.push({ locale: l, path: p, ...r });
  }
}

const problems = rows.filter(r => r.final !== 200);
console.log(`\n===== ${rows.length} URLs tested — ${problems.length} non-200 =====\n`);
for (const r of problems) {
  console.log(`[${r.final}] [${r.locale}] ${r.path}`);
  for (const h of r.chain) console.log(`   ${h.status} -> ${h.location ?? '(terminal)'}`);
}

// Long redirect chains (>2 hops)
const longChains = rows.filter(r => r.final === 200 && r.chain.length > 2);
console.log(`\n===== Long redirect chains (>2 hops): ${longChains.length} =====\n`);
for (const r of longChains) {
  console.log(`[${r.chain.length} hops] [${r.locale}] ${r.path}`);
  for (const h of r.chain) console.log(`   ${h.status} -> ${h.location ?? '(terminal)'}`);
}

console.log(`\nTotal: ${rows.length}, ok: ${rows.filter(r=>r.final===200).length}, problems: ${problems.length}`);
