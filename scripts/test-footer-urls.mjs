// Walk every href the footer renders (English locale) and test it against
// the dev server. Reports: final status, redirect chain length, full chain.
// Flags redirect loops (hit cap) and 404s.
//
// Run with: node scripts/test-footer-urls.mjs

const BASE = 'http://localhost:4321';
const MAX_HOPS = 10;

const urls = [
  // Convert (SLUGS, /en/ prefixed)
  '/en/png-to-url/',
  '/en/jpg-to-url/',
  '/en/gif-to-url/',
  '/en/webp-to-url/',
  '/en/photo-to-url/',
  '/en/screenshot-to-url/',
  // Format converters
  '/en/heic-to-jpg/',
  '/en/heic-to-png/',
  '/en/heic-to-pdf/',
  '/en/png-to-jpg/',
  '/en/jpg-to-png/',
  '/en/png-to-webp/',
  '/en/jpg-to-webp/',
  '/en/webp-to-jpg/',
  '/en/webp-to-png/',
  '/en/png-to-pdf/',
  '/en/jpg-to-pdf/',
  // Utilities
  '/en/image-compressor/',
  '/en/image-resizer/',
  '/en/favicon-generator/',
  '/en/image-to-base64/',
  '/en/base64-to-image/',
  // Features
  '/en/free-image-hosting/',
  '/en/image-url-generator/',
  '/en/bulk-image-upload/',
  '/en/free-image-cdn/',
  '/en/permanent-image-hosting/',
  '/en/direct-image-link/',
  '/en/anonymous-image-upload/',
  '/en/image-embed-code-generator/',
  // Use cases (mixed SLUGS + English-only)
  '/en/image-hosting-for-ebay/',
  '/en/image-hosting-for-discord/',
  '/en/image-hosting-for-github-readme/',
  '/en/image-hosting-for-notion/',
  '/en/image-hosting-for-wordpress/',
  '/en/image-hosting-for-shopify/',
  '/en/image-hosting-for-newsletters/',
  '/en/image-hosting-for-email-signatures/',
  '/en/image-hosting-for-forums/',
  '/en/image-to-url-for-whatsapp/',
  '/en/image-url-for-chatgpt/',
  '/en/ai-image-hosting/',
  '/image-hosting-for-reddit',
  '/image-hosting-for-twitter',
  '/image-hosting-for-instagram',
  '/image-hosting-for-pinterest',
  '/image-hosting-for-linkedin',
  '/image-hosting-for-substack',
  '/image-hosting-for-medium',
  '/image-hosting-for-webflow',
  '/image-hosting-for-squarespace',
  '/image-hosting-for-wix',
  '/image-hosting-for-framer',
  '/image-hosting-for-stack-overflow',
  '/image-hosting-for-markdown',
  '/image-hosting-for-nextjs',
  '/image-hosting-for-jira',
  // Compare
  '/en/imgur-alternative/',
  '/en/imgbb-alternative/',
  '/cloudinary-alternative',
  '/postimages-alternative',
  '/google-photos-direct-link',
  '/dropbox-direct-image-link',
  '/imagetourl-vs-imgur',
  '/imagetourl-vs-imgbb',
  '/imagetourl-vs-cloudinary',
  '/imgur-vs-imgbb',
  // API
  '/image-upload-api',
  '/image-hosting-rest-api',
  '/image-hosting-api-python',
  '/image-hosting-api-nodejs',
  '/image-hosting-api-php',
  '/image-hosting-api-curl',
  '/image-upload-zapier',
  '/image-upload-make',
  '/image-upload-n8n',
  // Answers
  '/how-to-get-direct-url-for-image',
  '/how-to-share-image-as-link',
  '/how-to-embed-image-in-email',
  '/what-is-image-hotlinking',
  '/how-to-host-image-for-free',
  '/how-long-does-imagetourl-store-images',
  // Guides
  '/guides/jpg-vs-png-vs-webp-vs-avif',
  '/guides/image-lcp-optimization',
  '/guides/image-optimization-core-web-vitals',
  '/guides/responsive-images-cheatsheet',
  '/guides/what-exif-leaks',
  '/guides/embed-images-in-notion',
  '/guides/why-reddit-strips-exif',
  // Resources + static
  '/en/privacy',
  '/en/terms',
  '/en/docs',
  '/about',
  '/contact',
  '/en/blog',
  '/content-guidelines',
  // Our Tools
  '/',
  '/heic-to-jpg',
];

async function trace(path) {
  const chain = [];
  let current = BASE + path;
  for (let i = 0; i < MAX_HOPS; i++) {
    const res = await fetch(current, { redirect: 'manual' });
    chain.push({ url: current, status: res.status, location: res.headers.get('location') });
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      const loc = res.headers.get('location');
      current = loc.startsWith('http') ? loc : BASE + loc;
    } else {
      return { final: res.status, hops: chain.length, chain };
    }
  }
  return { final: 'LOOP', hops: MAX_HOPS, chain };
}

const results = [];
for (const u of urls) {
  try {
    const r = await trace(u);
    results.push({ url: u, ...r });
  } catch (e) {
    results.push({ url: u, final: 'ERR', err: e.message });
  }
}

// Report
const problems = results.filter(r => r.final !== 200);
const redirects = results.filter(r => r.final === 200 && r.hops > 1);
console.log(`\n===== Redirect chains (${redirects.length}) =====\n`);
for (const r of redirects) {
  console.log(`[OK via ${r.hops} hops] ${r.url}`);
  for (const h of r.chain) console.log(`   ${h.status} -> ${h.location ?? '(terminal)'}`);
  console.log();
}
console.log(`\n===== ${results.length} URLs tested — ${problems.length} problems =====\n`);
for (const r of problems) {
  console.log(`[${r.final}] ${r.url}`);
  if (r.chain) {
    for (const h of r.chain) {
      console.log(`   ${h.status} -> ${h.location ?? '(terminal)'}`);
    }
  }
  if (r.err) console.log(`   err: ${r.err}`);
  console.log();
}

const ok = results.filter(r => r.final === 200).length;
const redirected = results.filter(r => r.final === 200 && r.hops > 1).length;
console.log(`\nSummary: ${ok} OK, ${redirected} succeeded via redirects, ${problems.length} problems`);
