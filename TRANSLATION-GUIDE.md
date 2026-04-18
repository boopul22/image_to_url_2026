# Translation Guide for Agents

**Audience:** smaller / specialized agents translating ImageToURL pages into 27 locales. Do not use OpenRouter or `scripts/translate-landing.mjs` — translate directly and commit the edits.

**Your goal:** take an English page (either a root `.astro` file with noHreflang, OR an existing i18n landing entry) and make it render at `/<locale>/<translated-slug>/` for every locale, with native-script slugs and native-script content, keeping the existing design tokens and schema intact.

---

## 1. How the i18n system works (must-read)

Two artifacts per page:

1. **Slug map** — `src/i18n/landing/slugs.ts` — one line per page, object keyed by locale → URL slug.
2. **Content module** — `src/i18n/landing/<page-key>.ts` — exports `content: LandingContentMap` with a full translated object per locale.

A page is "fully translated" only when **both** exist.

### Request flow

```
Browser → /fr/convertir-png-en-jpg/
          ↓
      middleware (src/middleware.ts)
          ↓ locale = 'fr'
      [locale]/[...slug].astro
          ↓ slug = 'convertir-png-en-jpg'
          ↓ reverse-resolves via SLUGS → pageKey = 'png-to-jpg'
          ↓ imports src/i18n/landing/png-to-jpg.ts
          ↓ picks content['fr']
      renders Layout + LandingContent
```

If the slug doesn't exist in SLUGS, the route 404s after a redirect to `/<locale>/`. If content for the locale is missing, the route falls back to English content (`defaultLocale`).

### The 27 locales

Defined in `src/i18n/config.ts`:

```ts
['en', 'hi', 'es', 'fr', 'de', 'ja', 'zh-Hans', 'id', 'vi', 'pt-BR',
 'tr', 'tl', 'pl', 'nl', 'it', 'ar', 'bn', 'fa', 'ur', 'ru',
 'th', 'ko', 'sw', 'ms', 'ta', 'mr', 'te', 'zh-Hant']
```

RTL locales (right-to-left scripts, handled by Layout automatically): **ar, fa, ur**. Native labels are in `src/i18n/config.ts` → `localeLabels`.

---

## 2. The slug system — rules (don't break these)

Slugs drive SEO. A bad slug = no ranking. Rules:

### Rule 1 — Native script, not transliteration

Each locale uses its native script. If the language writes in Devanagari, the slug is in Devanagari. If it's Arabic, Arabic script. Exceptions below.

```ts
// RIGHT
'png-to-jpg': {
  en: 'png-to-jpg',
  hi: 'png-को-jpg-में-बदलें',       // Devanagari
  ar: 'تحويل-png-إلى-jpg',         // Arabic
  fr: 'convertir-png-en-jpg',      // Latin, translated
  ja: 'png-を-jpg-に変換',          // Japanese
}

// WRONG — transliteration to Latin defeats native-language SEO
'png-to-jpg': {
  hi: 'png-ko-jpg-mein-badlein',   // ❌ Hinglish
}
```

**Exception — Romanized locales:** some locales prefer Latin-script slugs because users search in Latin script (e.g. `ru` Russian users often search in transliteration, `zh-Hans` sometimes uses pinyin). Match the pattern of nearby existing entries in `SLUGS` — inspect neighboring pages before authoring. Current conventions:

| Locale | Script used in slugs |
|---|---|
| hi, mr, ne | Devanagari |
| bn | Bengali |
| ar | Arabic |
| fa | Farsi/Perso-Arabic |
| ur | Urdu/Perso-Arabic |
| ja | Japanese (kanji/kana) |
| ko | Hangul |
| zh-Hans | Simplified Chinese **or** pinyin (check neighbors) |
| zh-Hant | Traditional Chinese |
| ta | Tamil |
| te | Telugu |
| ru | Latin transliteration is common (e.g. `konvertirovat-png-v-jpg`) |
| th | Thai |
| All others | Latin, translated |

**Format names (PNG, JPG, WebP, HEIC, PDF, SVG, GIF, AVIF) always stay in Latin case-insensitive** in every locale — they're technical terms users search for. Same for brand names (Imgur, ImgBB, Cloudinary, WordPress, Notion, ChatGPT).

### Rule 2 — Lowercase, hyphen-separated

Every slug is lowercase, no spaces. Use `-` not `_` not space. Non-Latin scripts use `-` too. URL-encode only at serve time — the literal file bytes are the UTF-8 script.

### Rule 3 — No trailing slash in SLUGS

The registry stores the slug without slash: `'convertir-png-en-jpg'`. `localizedUrl()` adds the trailing slash when emitting the URL.

### Rule 4 — Unique per locale

Two pages can't have the same slug in the same locale. The reverse index would collide.

### Rule 5 — Keyword-first order

Whatever ranks highest in the user's search should appear first in the slug. For a "convert X to Y" page:

- English: `png-to-jpg` (SEO-familiar pattern)
- French: `convertir-png-en-jpg` (verb-first is natural)
- Hindi: `png-को-jpg-में-बदलें` (keeps format identifiers first, Hindi connector words)
- German: `png-in-jpg-konvertieren` or `png-zu-jpg` (both are used — prefer whichever has higher search volume per DataForSEO; fall back to whichever reads natural)

### Rule 6 — No stop-words padding

Don't pad with words like "online", "free", "best" unless they're native SEO terms. Short wins. `heic-to-jpg` beats `free-online-heic-to-jpg-converter-tool`.

### Rule 7 — Reserved slugs

These slug shapes conflict with routes and must not be used:
- starts with `en/`, `hi/`, etc. (locale prefixes)
- starts with `api/`, `admin/`, `dashboard/`, `uploads/`, `p/`, `_` (reserved paths)
- starts with `guides/` (guides are a separate tree)
- matches an entry in `NON_LOCALIZED_EXACT` in `src/middleware.ts`

---

## 3. Content module structure

`src/i18n/landing/<page-key>.ts`:

```ts
import type { LandingContentMap } from './types';

export const content: LandingContentMap = {
  en: { /* English — canonical */ },
  hi: { /* Hindi */ },
  fr: { /* French */ },
  // ... all 27 locales
};
```

Every locale object implements the `LandingContent` interface (`src/i18n/landing/types.ts`):

```ts
interface LandingContent {
  metaTitle: string;         // <title>, ≤60 chars
  metaDescription: string;   // meta[description], 150–160 chars
  schemaName: string;        // WebApplication.name in JSON-LD
  schemaDescription: string; // WebApplication.description in JSON-LD
  badge: string;             // Small uppercase pill above H1, ≤20 chars
  h1Pre: string;             // H1 first part (normal weight)
  h1Highlight: string;       // H1 second part (italic, rose-600 accent)
  intro: string;             // Lead paragraph under H1, 1–2 sentences
  howTitle: string;          // H2 of the 3-step how-it-works block
  steps: { title: string; body: string }[]; // 3 steps, each body 1–2 sentences
  whyTitle: string;          // H2 of the 4-card why block
  whyItems: { title: string; body: string }[]; // 4 items
  faqTitle: string;          // H2 of the FAQ (usually just "FAQ" in locale)
  faqs: { q: string; a: string }[]; // 5–8 Q&As
  ctaTitle: string;          // Final CTA box heading
  ctaBody: string;           // CTA subtext, 1 sentence
  ctaButton: string;         // CTA button label, ≤25 chars
}
```

### Field rules

- **metaTitle**: ≤60 chars (Google SERP truncation). Include primary keyword + brand.
- **metaDescription**: 150–160 chars. Include keyword + one benefit. End with a call-to-action phrase.
- **h1Highlight**: short, emphatic, italicized. Usually a 3–6 word benefit clause.
- **faqs**: 5–8 items. Questions should match real user search intent (mine from People-Also-Ask, Reddit threads). Answers: 1–3 sentences, factual.
- **steps**: exactly 3. Each body ≤25 words.
- **whyItems**: 2, 4, or 6 (even numbers render in a clean grid). Each body ≤30 words.

### What must NOT be translated

- Brand names: ImageToURL, Imgur, ImgBB, Cloudinary, WordPress, Shopify, Notion, Discord, eBay, ChatGPT, GitHub, Next.js, jsPDF, Cloudflare, etc.
- Format acronyms: PNG, JPG, JPEG, WebP, AVIF, HEIC, HEIF, GIF, SVG, BMP, TIFF, PDF, ICO.
- HTTP/MIME: image/jpeg, multipart/form-data, WebAssembly, canvas API, etc.
- Code snippets inside markdown/text (leave untouched).
- URLs.
- The placeholders for styling: never invent translated equivalents of `<span>` or CSS classes — they don't exist as content.

### Quality gates

Every translation must pass:

1. **Read aloud in the target language** — does it sound like a native speaker? If it reads like a machine, rewrite.
2. **Keyword check** — is the primary keyword (format name, "convert", etc.) in metaTitle, metaDescription, h1, and at least one FAQ?
3. **Length check** — metaTitle ≤60, metaDescription ≤160, badge ≤20, ctaButton ≤25 (chars, not bytes).
4. **Noun-verb agreement** — most commonly broken for languages with grammatical gender/case (de, ru, fr, ar, pl). Double-check plural/case on format names.
5. **Punctuation conventions** — Spanish uses ¿inverted question marks?, French uses « guillemets » with non-breaking spaces (but use plain "" for JSON ease), German capitalizes nouns.
6. **RTL flow** — for ar/fa/ur, Arabic numbers and Latin format names stay LTR inside RTL text; the browser handles this automatically — do not insert Unicode direction marks unless you verify they're needed.

---

## 4. Step-by-step: translate one page

Target file example: `src/pages/png-to-jpg.astro` (root-level English-only page you need to promote into the i18n system).

### Step 1 — Decide: promote or parallel?

Two architectures exist in this repo:

- **Root-only** — a standalone `src/pages/<slug>.astro` with `noHreflang` and a custom widget (e.g. `<CanvasConverter>`). English-only. Not in SLUGS.
- **Landing module** — content lives in `src/i18n/landing/<slug>.ts`, rendered via `[locale]/[...slug].astro` dynamic route. Fully localized. No custom widget (uses `<ImageUploader>` by default).

**When to promote (move root → landing module):**
- The page's tool works via the generic `<ImageUploader>` AND the page can be generated from content fields, OR
- The page has no interactive tool at all (comparison, Q&A, use-case).

**When to leave as root-only (don't promote):**
- The page uses a bespoke widget like `<CanvasConverter>`, `<PdfConverter>`, `<HeicConverter>`, `<HeicPngConverter>`, `<ImageCompressor>`, `<ImageResizer>`, `<ImageUploader>` with custom props, or inline `<script>` tool logic. Content fields can't carry widgets.

**If the page stays root-only:** you cannot translate it through the SLUGS system. You must either (a) refactor the dynamic route to accept per-page widget mappings (see §7 "Widget-aware dynamic route"), or (b) accept English-only for that page and document the decision in the page's frontmatter comment.

**The 60 new pages I shipped and their status:**

| Cluster | Pages | Has widget? | Promotion path |
|---|---|---|---|
| A (10) format converters | png-to-jpg, jpg-to-png, webp↔jpg, webp↔png, png-to-webp, jpg-to-webp, png-to-pdf, jpg-to-pdf, heic-to-png, heic-to-pdf | Yes — CanvasConverter / PdfConverter / HeicPngConverter | Blocked on widget-aware route |
| B (5) utilities | image-compressor, image-resizer, favicon-generator, image-to-base64, base64-to-image | Yes — custom inline tools | Blocked on widget-aware route |
| C (8) comparison | cloudinary-alt, postimages-alt, google-photos-direct-link, dropbox-direct-link, imagetourl-vs-imgur/imgbb/cloudinary, imgur-vs-imgbb | No | **Promote + translate** |
| D (15) platform use-cases | image-hosting-for-reddit/twitter/instagram/pinterest/linkedin/substack/medium/webflow/squarespace/wix/framer/stack-overflow/markdown/nextjs/jira | No | **Promote + translate** |
| E (9) dev / API | image-upload-api, image-hosting-rest-api, image-hosting-api-python/nodejs/php/curl, image-upload-zapier/make/n8n | Has code blocks (not widgets — code stays English) | **Promote + translate** |
| F (6) GEO Q&A | how-to-get-direct-url-for-image, how-to-share-image-as-link, how-to-embed-image-in-email, what-is-image-hotlinking, how-to-host-image-for-free, how-long-does-imagetourl-store-images | No | **Promote + translate** |
| Guides (7) pillar | /guides/* | No | Separate tree — do not touch for now |

**Clusters C, D, E, F — 38 pages — are the translation priority.** Clusters A and B need upstream engineering work before translation is possible.

### Step 2 — Add PageKey + SLUGS entry

Edit `src/i18n/landing/slugs.ts`:

```ts
// 1. Add to PageKey union (alphabetically nearby existing keys)
export type PageKey =
  | 'cloudinary-alternative'   // ← new
  // ...existing keys...
  ;

// 2. Add translated slug map
export const SLUGS: Record<PageKey, LocaleSlugMap> = {
  // ...
  'cloudinary-alternative': {
    en:       'cloudinary-alternative',
    hi:       'cloudinary-का-विकल्प',
    es:       'alternativa-a-cloudinary',
    fr:       'alternative-cloudinary',
    de:       'cloudinary-alternative',
    ja:       'cloudinary-の-代替',
    'zh-Hans':'cloudinary-替代品',
    id:       'alternatif-cloudinary',
    vi:       'thay-the-cloudinary',
    'pt-BR':  'alternativa-ao-cloudinary',
    tr:       'cloudinary-alternatifi',
    tl:       'alternatibo-sa-cloudinary',
    pl:       'alternatywa-dla-cloudinary',
    nl:       'cloudinary-alternatief',
    it:       'alternativa-a-cloudinary',
    ar:       'بديل-cloudinary',
    bn:       'cloudinary-এর-বিকল্প',
    fa:       'جایگزین-cloudinary',
    ur:       'cloudinary-کا-متبادل',
    ru:       'alternativa-cloudinary',
    th:       'ทางเลือก-cloudinary',
    ko:       'cloudinary-대체',
    sw:       'mbadala-wa-cloudinary',
    ms:       'alternatif-cloudinary',
    ta:       'cloudinary-மாற்று',
    mr:       'cloudinary-चा-पर्याय',
    te:       'cloudinary-ప్రత్యామ్నాయం',
    'zh-Hant':'cloudinary-替代方案',
  },
  // ...
};
```

All 27 locale slugs required. Alphabetize the key entries within `SLUGS` (not critical but easier to diff).

### Step 3 — Create content module

Create `src/i18n/landing/<page-key>.ts`. Copy the English content from the source file's sections (hero, steps, why-cards, FAQ, CTA) into the `LandingContent` shape. Then add each locale.

Full template:

```ts
import type { LandingContentMap } from './types';

export const content: LandingContentMap = {
  en: {
    metaTitle: 'Cloudinary Alternative — Free Image Hosting | ImageToURL',
    metaDescription: 'Free, no-signup alternative to Cloudinary for simple image hosting and direct URLs. 5–10× cheaper at scale. Global CDN, permanent links.',
    schemaName: 'Cloudinary Alternative',
    schemaDescription: 'Free, no-signup alternative to Cloudinary for simple image hosting and direct URLs.',
    badge: 'COMPARISON',
    h1Pre: 'Cloudinary Alternative',
    h1Highlight: 'for teams who just need URLs.',
    intro: 'Cloudinary is a powerhouse for on-the-fly transformations. ImageToURL is the lightweight alternative: free hosting, global CDN, permanent URLs — without the transformation engine you\'re not using.',
    howTitle: 'How to switch',
    steps: [
      { title: 'Export from Cloudinary', body: 'Download your source assets from Cloudinary\'s Media Library.' },
      { title: 'Upload here', body: 'Drop files into ImageToURL to host them on Cloudflare\'s global CDN.' },
      { title: 'Swap the URLs', body: 'Find-replace Cloudinary URLs in your codebase with the new URLs.' },
    ],
    whyTitle: 'When ImageToURL wins',
    whyItems: [
      { title: 'Pre-processed images', body: 'If you already use sharp or Pillow at build time, you don\'t need Cloudinary\'s URL transforms — just a CDN.' },
      { title: 'Blog and portfolio', body: 'For sites serving static images at known sizes, Cloudinary\'s $99/mo floor is hard to justify. ImageToURL covers it for $12.' },
      { title: 'No vendor lock-in', body: 'Cloudinary URLs bake transformations into the path. ImageToURL URLs are dumb CDN paths — portable.' },
      { title: 'Quick shares', body: 'Dev screenshots, design handoffs, bug repros — drop, copy URL, paste. No dashboard to navigate.' },
    ],
    faqTitle: 'FAQ',
    faqs: [
      { q: 'Why do people look for a Cloudinary alternative?', a: 'Cloudinary\'s free tier gets consumed fast, and paid starts at $99/month. For teams that just need hosted URLs, that\'s a lot of engine for a simple job.' },
      { q: 'What do I lose by switching?', a: 'On-the-fly URL transformations and AI features. If you lean on those, Cloudinary is right. If you pre-process images once, ImageToURL covers it.' },
      { q: 'Is there a CDN?', a: 'Yes — Cloudflare\'s 300+ edge PoPs, same latency class as Cloudinary.' },
      { q: 'How does pricing compare?', a: 'ImageToURL free tier: 10 uploads/month. Pro at $12/month: unlimited. Cloudinary starts at $99.' },
      { q: 'API?', a: 'Yes — POST to /api/upload with multipart form. Pro plan unlocks API key auth.' },
    ],
    ctaTitle: 'Try ImageToURL in 10 seconds',
    ctaBody: 'No signup for anonymous uploads. Drop an image, get a CDN URL, done.',
    ctaButton: 'Upload an image',
  },
  hi: {
    metaTitle: 'Cloudinary का विकल्प — मुफ्त इमेज होस्टिंग | ImageToURL',
    metaDescription: 'Cloudinary का मुफ्त, बिना साइनअप विकल्प — सरल इमेज होस्टिंग और डायरेक्ट URL के लिए। ग्लोबल CDN, स्थायी लिंक, स्केल पर 5–10× सस्ता।',
    schemaName: 'Cloudinary का विकल्प',
    schemaDescription: 'Cloudinary का मुफ्त, बिना साइनअप विकल्प — सरल इमेज होस्टिंग और डायरेक्ट URL के लिए।',
    badge: 'तुलना',
    h1Pre: 'Cloudinary का विकल्प',
    h1Highlight: 'उन टीमों के लिए जिन्हें केवल URL चाहिए।',
    intro: 'Cloudinary on-the-fly रूपांतरण के लिए शक्तिशाली है। ImageToURL हल्का विकल्प है: मुफ्त होस्टिंग, ग्लोबल CDN, स्थायी URL — बिना उस ट्रांसफॉर्मेशन इंजन के जिसका आप उपयोग नहीं कर रहे।',
    howTitle: 'कैसे स्विच करें',
    steps: [
      { title: 'Cloudinary से निर्यात करें', body: 'Cloudinary की Media Library से अपनी सोर्स फाइलें डाउनलोड करें।' },
      { title: 'यहाँ अपलोड करें', body: 'ImageToURL पर फाइलें ड्रॉप करें ताकि वे Cloudflare के ग्लोबल CDN पर होस्ट हों।' },
      { title: 'URL बदलें', body: 'अपने कोडबेस में Cloudinary URL को नए URL से रिप्लेस करें।' },
    ],
    whyTitle: 'ImageToURL कब बेहतर है',
    whyItems: [
      { title: 'पहले से प्रोसेस की गई इमेजें', body: 'अगर आप build time पर sharp या Pillow इस्तेमाल करते हैं, तो आपको Cloudinary के URL transforms की जरूरत नहीं — बस एक CDN चाहिए।' },
      { title: 'ब्लॉग और पोर्टफोलियो', body: 'ज्ञात आकारों पर स्थिर इमेज सर्व करने वाली साइटों के लिए, Cloudinary का $99/mo फ्लोर भारी है। ImageToURL $12 में पूरा करता है।' },
      { title: 'वेंडर लॉक-इन नहीं', body: 'Cloudinary URL पथ में ट्रांसफॉर्मेशन बेक कर देते हैं। ImageToURL URL सामान्य CDN पथ हैं — पोर्टेबल।' },
      { title: 'तेज शेयरिंग', body: 'Dev स्क्रीनशॉट, डिज़ाइन हैंडऑफ़, बग repros — ड्रॉप, कॉपी URL, पेस्ट।' },
    ],
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      { q: 'लोग Cloudinary का विकल्प क्यों ढूँढते हैं?', a: 'Cloudinary का मुफ्त tier जल्दी खत्म होता है, और paid $99/महीने से शुरू होता है। सिर्फ होस्टेड URL चाहने वाली टीमों के लिए यह अत्यधिक है।' },
      { q: 'स्विच करने से क्या खो जाएगा?', a: 'On-the-fly URL ट्रांसफॉर्मेशन और AI फीचर्स। यदि आप उन पर निर्भर हैं, Cloudinary सही है। अगर आप पहले से प्रोसेस करते हैं, तो ImageToURL काफी है।' },
      { q: 'क्या CDN है?', a: 'हाँ — Cloudflare के 300+ edge PoPs, Cloudinary के समान लेटेंसी।' },
      { q: 'कीमतें कैसे तुलना करती हैं?', a: 'ImageToURL free: 10 uploads/महीना। Pro $12/महीने: असीमित। Cloudinary $99 से शुरू।' },
      { q: 'API?', a: 'हाँ — /api/upload पर multipart form POST करें। Pro plan में API key auth है।' },
    ],
    ctaTitle: '10 सेकंड में ImageToURL आज़माएँ',
    ctaBody: 'अनाम अपलोड के लिए साइनअप नहीं। एक इमेज ड्रॉप करें, CDN URL पाएँ, हो गया।',
    ctaButton: 'इमेज अपलोड करें',
  },
  // es, fr, de, ja, zh-Hans, id, vi, pt-BR, tr, tl, pl, nl, it, ar, bn, fa, ur, ru, th, ko, sw, ms, ta, mr, te, zh-Hant
  // ... 25 more locales, same structure
};
```

Every locale key must be present. If you truly cannot produce a translation for a locale, copy the English block verbatim as a placeholder and log a TODO — but do NOT omit the key (it'll crash `contentFor()`).

### Step 4 — Delete the root-level .astro (if promoting)

If you're promoting a root-only page into the landing system, after adding SLUGS + content module, delete the root `src/pages/<slug>.astro`. The dynamic route will now serve it at `/<locale>/<translated-slug>/`.

If the root page was in `NON_LOCALIZED_EXACT` (middleware.ts), remove it from that list so the middleware redirects `/slug` → `/en/slug`.

If the root page was in `ROOT_PAGES` (sitemap.xml.ts), remove it — the dynamic route's own sitemap entries take over.

### Step 5 — Verify

```bash
# 1. Dev server
npm run dev
# 2. Each locale URL should return 200
curl -o /dev/null -w '%{http_code}\n' http://localhost:4321/en/cloudinary-alternative/
curl -o /dev/null -w '%{http_code}\n' http://localhost:4321/hi/cloudinary-का-विकल्प/
curl -o /dev/null -w '%{http_code}\n' http://localhost:4321/fr/alternative-cloudinary/
# 3. H1 should render in target language
curl -sS http://localhost:4321/hi/cloudinary-का-विकल्प/ | grep -o '<h1[^>]*>.*</h1>' | head -1
# 4. hreflang tags should list all 27 locales
curl -sS http://localhost:4321/en/cloudinary-alternative/ | grep -c 'rel="alternate"'
# 5. Sitemap should include the new page with all locale variants
curl -sS http://localhost:4321/sitemap.xml | grep -c 'cloudinary-alternative\|cloudinary-का-विकल्प\|alternative-cloudinary'
```

All 27 locale URLs must return 200.

---

## 5. Batch workflow — many pages at a time

Order-of-operations that avoids broken intermediate states:

1. **Author all 38 content modules first**, locally, before editing slugs.ts. Each module should have at least the `en` key filled (required by type system). Fill other locales progressively per locale, not per page (fewer language-context switches → better translation quality).
2. Add all PageKey entries to the `PageKey` union in `slugs.ts` in a single diff.
3. Add all SLUGS entries in a single diff.
4. Remove root `.astro` files and NON_LOCALIZED_EXACT / ROOT_PAGES entries in a final cleanup diff.
5. Run `npm run dev` and spot-check 10+ URLs.
6. Run the verification script in `§6`.

### Recommended locale-translation order

Translate in this sequence to maximize early SEO ROI:

1. **Tier A (must-have, highest search volume):** en, hi, es, fr, de, pt-BR, ja, ar — 8 locales
2. **Tier B (regional + long-tail):** zh-Hans, id, vi, tr, it, nl, pl, ru, ko, th — 10 locales
3. **Tier C (lower volume but easy fills):** bn, fa, ur, sw, ms, ta, mr, te, tl, zh-Hant — 10 locales
   (For Tier C, if native-speaker translation capacity is constrained, copying English as a placeholder is acceptable provided a TODO is logged. The Layout already falls back to English if the locale key is missing, so the `LandingContent` contract still needs the key present.)

---

## 6. Verification script

Save as `scripts/verify-i18n.mjs` and run with `node scripts/verify-i18n.mjs`:

```js
import { SLUGS, PAGE_KEYS } from '../src/i18n/landing/slugs.js';
import { locales } from '../src/i18n/config.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const errors = [];

// 1. Every PageKey has every locale slug
for (const key of PAGE_KEYS) {
  for (const loc of locales) {
    if (!SLUGS[key][loc]) errors.push(`missing slug: ${key} / ${loc}`);
  }
}

// 2. Every PageKey has a content module
for (const key of PAGE_KEYS) {
  const p = path.join('src/i18n/landing', key + '.ts');
  try { await fs.access(p); } catch { errors.push(`missing content module: ${p}`); }
}

// 3. Every content module has every locale key
for (const key of PAGE_KEYS) {
  const mod = await import('../src/i18n/landing/' + key + '.ts');
  for (const loc of locales) {
    if (!mod.content[loc]) errors.push(`missing locale in content: ${key} / ${loc}`);
  }
}

// 4. No duplicate slugs within a locale
for (const loc of locales) {
  const seen = new Map();
  for (const key of PAGE_KEYS) {
    const slug = SLUGS[key][loc];
    if (seen.has(slug)) errors.push(`duplicate slug in ${loc}: ${slug} shared by ${seen.get(slug)} + ${key}`);
    seen.set(slug, key);
  }
}

// 5. Slug format rules
for (const key of PAGE_KEYS) {
  for (const loc of locales) {
    const slug = SLUGS[key][loc];
    if (slug.startsWith('/') || slug.endsWith('/')) errors.push(`slug has slash: ${key} / ${loc}`);
    if (slug !== slug.toLowerCase() && !/[\u0900-\u2FFF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/.test(slug)) {
      errors.push(`non-lowercase latin slug: ${key} / ${loc} = ${slug}`);
    }
    if (/\s/.test(slug)) errors.push(`slug has whitespace: ${key} / ${loc}`);
  }
}

if (errors.length) { console.log(errors.join('\n')); process.exit(1); }
console.log('i18n OK: ' + PAGE_KEYS.length + ' pages × ' + locales.length + ' locales');
```

---

## 7. Widget-aware dynamic route (future work, blocks Clusters A+B)

The current `[locale]/[...slug].astro` uses `<ImageUploader>` for every landing module. To support HEIC WASM, canvas converters, jsPDF, etc., extend it with a component map:

```astro
---
// [locale]/[...slug].astro
import ImageUploader from '../../components/ImageUploader.astro';
import HeicConverter from '../../components/HeicConverter.astro';
import HeicPngConverter from '../../components/HeicPngConverter.astro';
import CanvasConverter from '../../components/CanvasConverter.astro';
import PdfConverter from '../../components/PdfConverter.astro';
import ImageCompressor from '../../components/ImageCompressor.astro';
import ImageResizer from '../../components/ImageResizer.astro';

// ... existing pageKey resolution ...

const widgetMap: Record<string, { component: any; props?: any }> = {
  'heic-to-jpg':  { component: HeicConverter },
  'heic-to-png':  { component: HeicPngConverter },
  'heic-to-pdf':  { component: PdfConverter,     props: { from: 'heic' } },
  'png-to-jpg':   { component: CanvasConverter,  props: { from: 'png',  to: 'jpg', idPrefix: 'png2jpg' } },
  'jpg-to-png':   { component: CanvasConverter,  props: { from: 'jpg',  to: 'png', idPrefix: 'jpg2png' } },
  'webp-to-jpg':  { component: CanvasConverter,  props: { from: 'webp', to: 'jpg', idPrefix: 'webp2jpg' } },
  'webp-to-png':  { component: CanvasConverter,  props: { from: 'webp', to: 'png', idPrefix: 'webp2png' } },
  'png-to-webp':  { component: CanvasConverter,  props: { from: 'png',  to: 'webp', idPrefix: 'png2webp' } },
  'jpg-to-webp':  { component: CanvasConverter,  props: { from: 'jpg',  to: 'webp', idPrefix: 'jpg2webp' } },
  'png-to-pdf':   { component: PdfConverter,     props: { from: 'png' } },
  'jpg-to-pdf':   { component: PdfConverter,     props: { from: 'jpg' } },
  'image-compressor': { component: ImageCompressor },
  'image-resizer':    { component: ImageResizer },
};

const Widget = widgetMap[pageKey]?.component ?? ImageUploader;
const widgetProps = widgetMap[pageKey]?.props ?? {};
---
...
<Widget {...widgetProps} />
...
```

Once wired, translator agents can add Cluster A + B pages to SLUGS/content-modules without losing the working widget.

---

## 8. Reference: file/location cheat-sheet

| Artifact | Path | Purpose |
|---|---|---|
| Locale list | `src/i18n/config.ts` | 27 locales, defaultLocale, RTL list |
| Slug registry | `src/i18n/landing/slugs.ts` | PageKey union + per-locale slug map |
| Slug resolvers | `src/i18n/landing/registry.ts` | `getSlug()`, `localizedUrl()`, `hreflangPairs()` |
| Content interface | `src/i18n/landing/types.ts` | `LandingContent`, `LandingContentMap` |
| Content modules | `src/i18n/landing/<page-key>.ts` | One per page |
| Dynamic route | `src/pages/[locale]/[...slug].astro` | Renders locale+slug → content |
| Root pages (English-only) | `src/pages/<slug>.astro` | Standalone pages with custom widgets |
| Middleware | `src/middleware.ts` | Redirects root → `/en/<slug>` unless exempted |
| Sitemap | `src/pages/sitemap.xml.ts` | Lists every page + hreflang variants |
| Reserved root-only list | `NON_LOCALIZED_EXACT` in middleware.ts | Slugs that must stay at root (no /en/ prefix) |
| Per-locale llms.txt | `src/pages/[locale]/llms.txt.ts` | Localized intro for AI crawlers |
| Sitewide llms | `public/llms.txt`, `public/llms-full.txt` | English canonical references |

---

## 9. Common pitfalls and fixes

### Symptom → Cause → Fix

- **404 on `/fr/convertir-png-en-jpg/` but slug is in SLUGS** → missing content module `src/i18n/landing/png-to-jpg.ts` → create it.
- **Page renders English even when `/hi/...`** → content module exists but `hi` key missing/undefined → add `hi:` entry to `content` object.
- **`/png-to-jpg` 404s at root** → root `.astro` was deleted but slug not in SLUGS → either restore `.astro` or add to SLUGS + content module.
- **Build error "Cannot find module '../i18n/landing/png-to-jpg'"** → typo in PageKey or file name → `PageKey` must match filename exactly.
- **Tool widget missing on localized page** → dynamic route uses `<ImageUploader>` by default → implement widget map from §7.
- **Two pages in same locale share slug** → verification script catches it → rename one.
- **hreflang missing for some locales** → `hreflangPairs()` reads from SLUGS — if a locale slug is falsy/empty it's skipped → fill every locale.
- **Character-count blown on metaTitle** → translations expand in some languages (de, fi, ru are often 20–30% longer than en) → shorten the title for those specifically.
- **Arabic/Hebrew renders with broken punctuation** → don't insert LTR/RTL Unicode marks unless required; the HTML `dir` attribute on the locale's body handles directionality.
- **Locale slug appears English in sitemap** → cached dev output — restart `npm run dev` after editing slugs.ts.

---

## 10. Deliverable checklist per page

Before declaring a page "translated", verify all of:

- [ ] Added to `PageKey` union
- [ ] All 27 locales have a native-script slug in `SLUGS`
- [ ] All 27 locales have unique slugs (no duplicates)
- [ ] Content module created at `src/i18n/landing/<key>.ts`
- [ ] All 27 locale keys present in `content` (placeholder English OK, but key must exist)
- [ ] `metaTitle` ≤60 chars in each locale
- [ ] `metaDescription` ≤160 chars in each locale
- [ ] `steps` has exactly 3 items, `whyItems` has 2/4/6
- [ ] `faqs` has 5–8 items per locale
- [ ] Brand names (ImageToURL, Imgur, Cloudinary, etc.) left untranslated
- [ ] Format acronyms (PNG, JPG, WebP, etc.) left untranslated
- [ ] Root `.astro` file deleted (if promoting) OR kept + noted (if custom-widget)
- [ ] Removed from `NON_LOCALIZED_EXACT` if promoted
- [ ] Removed from `ROOT_PAGES` in sitemap.xml.ts if promoted
- [ ] `curl /<locale>/<slug>/` returns 200 for all 27 locales
- [ ] H1 renders in target language for a spot-checked RTL locale (ar/fa/ur) and a CJK locale (ja/zh-Hans)
- [ ] No console errors on localized page
- [ ] Verification script (§6) passes
