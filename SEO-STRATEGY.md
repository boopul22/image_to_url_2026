# SEO Strategy — New Opportunities (Apr 2026)

> Scope: Net-new keywords, pages, and SEO work **not already implemented**. Existing coverage (HEIC→JPG, PNG/JPG/GIF/WebP→URL, 27 locales, hreflang, sitemap, Organization/WebApplication/FAQPage/BreadcrumbList schema, robots with AI crawler allowlist, llms.txt, Imgur/ImgBB alternatives, WordPress/Shopify/GitHub/Notion/Discord/eBay/Google/WhatsApp use-cases, 33 landing pages) is **excluded** from this plan.

---

## 1. Current coverage (baseline, skip)

- Conversions live: HEIC→JPG, PNG/JPG/GIF/WebP→URL, photo/screenshot→URL
- Use-cases live: WordPress, Shopify, GitHub, Notion, Discord, eBay, Google Sheets/Forms, WhatsApp, Email signatures, Newsletters, Forums, ChatGPT
- Competitor alts live: Imgur, ImgBB
- Locales: 27 (full hreflang + x-default)
- Schema: Organization, WebSite, WebApplication, FAQPage, BreadcrumbList, Article
- Infra SEO: dynamic sitemap, robots AI allowlist, canonical, llms.txt, PWA manifest

**Assumption:** the tool supports arbitrary image formats + direct URL. Where a "new" page describes a conversion the client-side pipeline does not yet do, build the converter alongside the SEO page — no thin content.

---

## 2. New keyword clusters (prioritized)

Each cluster is ranked by expected search volume × competitive fit × implementation cost. Volumes are directional; validate with DataForSEO before scaling.

### Cluster A — Format conversion pairs (high volume, exact-match intent)

These are searched 10k–500k/mo globally. Site already ranks for HEIC/PNG/JPG/GIF/WebP→URL but **not for format-to-format conversions** or less common sources.

| Priority | Slug | Primary KW | Monthly (global, est.) |
|---|---|---|---|
| P0 | `/png-to-jpg` | png to jpg | 450k |
| P0 | `/jpg-to-png` | jpg to png | 200k |
| P0 | `/heic-to-png` | heic to png | 90k |
| P0 | `/heic-to-pdf` | heic to pdf | 60k |
| P0 | `/jpg-to-pdf` | jpg to pdf | 500k |
| P0 | `/png-to-pdf` | png to pdf | 300k |
| P0 | `/webp-to-jpg` | webp to jpg | 165k |
| P0 | `/webp-to-png` | webp to png | 135k |
| P0 | `/png-to-webp` | png to webp | 60k |
| P0 | `/jpg-to-webp` | jpg to webp | 40k |
| P1 | `/svg-to-png` | svg to png | 110k |
| P1 | `/png-to-svg` | png to svg | 90k |
| P1 | `/avif-to-jpg` | avif to jpg | 45k |
| P1 | `/avif-to-png` | avif to png | 30k |
| P1 | `/bmp-to-jpg` | bmp to jpg | 30k |
| P1 | `/tiff-to-jpg` | tiff to jpg | 25k |
| P1 | `/tiff-to-pdf` | tiff to pdf | 20k |
| P1 | `/ico-to-png` | ico to png | 20k |
| P1 | `/png-to-ico` | png to ico | 25k |
| P2 | `/cr2-to-jpg`, `/nef-to-jpg`, `/dng-to-jpg`, `/raw-to-jpg` | RAW converters | 5–15k each |
| P2 | `/pdf-to-jpg`, `/pdf-to-png` | pdf to image | 400k+ (very competitive) |

Target: **20 P0+P1 pages in Phase 1**, 8 P2 in Phase 2. Reuse the existing HEIC→JPG template (client-side WASM), FAQPage schema, and i18n landing-page registry so all roll out in 27 locales automatically.

### Cluster B — Image utilities (recurring, high intent)

Site is a hosting+convert tool. Users search for these alongside hosting; adding them captures top-funnel traffic.

| Priority | Slug | Primary KW | Monthly |
|---|---|---|---|
| P0 | `/image-compressor` | image compressor | 300k |
| P0 | `/image-resizer` | image resizer | 250k |
| P0 | `/image-to-base64` | image to base64 | 135k |
| P0 | `/base64-to-image` | base64 to image | 90k |
| P0 | `/favicon-generator` | favicon generator | 200k |
| P1 | `/image-cropper` | crop image online | 110k |
| P1 | `/remove-background` | remove background | 800k (very competitive) |
| P1 | `/image-to-text` | image to text / OCR | 250k |
| P1 | `/exif-viewer`, `/exif-remover` | exif data | 40k combined |
| P1 | `/image-rotator`, `/image-flipper` | rotate image | 60k |
| P2 | `/image-color-picker`, `/image-metadata`, `/image-dpi-changer`, `/watermark-image` | long-tail | 10–30k each |

### Cluster C — New competitor alternatives (easy E-E-A-T wins)

| Slug | KW | Monthly |
|---|---|---|
| `/postimages-alternative` | postimages alternative | 5k |
| `/cloudinary-alternative` | cloudinary alternative (free) | 12k |
| `/imageshack-alternative` | imageshack alternative | 3k |
| `/tinypic-alternative` | tinypic alternative (dead service → migration traffic) | 8k |
| `/lightshot-alternative` | lightshot alternative | 6k |
| `/flickr-alternative-direct-link` | flickr direct image link | 4k |
| `/google-photos-direct-link` | google photos direct link | 40k |
| `/dropbox-image-direct-link` | dropbox direct image link | 25k |

Also add **"X vs Y" pages**: `/imgur-vs-imgbb`, `/cloudinary-vs-imgur`, `/imagetourl-vs-imgur`, `/imagetourl-vs-cloudinary`. 4 pages, each ~2–8k/mo.

### Cluster D — New platform/use-case pages

Already-covered list excluded. Remaining high-intent platforms:

- `/image-hosting-for-reddit`
- `/image-hosting-for-slack`
- `/image-hosting-for-telegram`
- `/image-hosting-for-twitter` (+ `/image-hosting-for-x`)
- `/image-hosting-for-instagram-bio`
- `/image-hosting-for-pinterest`
- `/image-hosting-for-facebook-marketplace`
- `/image-hosting-for-linkedin`
- `/image-hosting-for-craigslist`
- `/image-hosting-for-olx` (India — pairs with existing Hindi locale)
- `/image-hosting-for-medium`
- `/image-hosting-for-substack`
- `/image-hosting-for-ghost`
- `/image-hosting-for-webflow`
- `/image-hosting-for-squarespace`
- `/image-hosting-for-wix`
- `/image-hosting-for-framer`
- `/image-hosting-for-stack-overflow`
- `/image-hosting-for-quora`
- `/image-hosting-for-jira`, `/confluence`, `/trello`, `/airtable`, `/clickup`, `/monday`, `/asana`, `/figma`, `/miro`
- `/image-hosting-for-markdown`, `/jekyll`, `/hugo`, `/nextjs`, `/gatsby`, `/nuxt`, `/astro`

Target: 15 P0 (Reddit, X, Instagram, Pinterest, Substack, Medium, LinkedIn, Webflow, Squarespace, Wix, Framer, Stack Overflow, Markdown, Next.js, Jira) in Phase 2.

### Cluster E — Developer/API (low competition, high fit)

- `/image-upload-api` (strengthen beyond existing docs)
- `/image-hosting-api-python`
- `/image-hosting-api-nodejs`
- `/image-hosting-api-php`
- `/image-hosting-api-curl`
- `/image-upload-zapier`
- `/image-upload-make`
- `/image-upload-n8n`
- `/image-hosting-rest-api`

Pair each with a GitHub snippet gist + `SoftwareSourceCode` JSON-LD.

### Cluster F — GEO / AI-answer-style questions (llms.txt expansion)

Target zero-click AI citations by publishing clean Q&A pages the existing llms.txt can reference:

- `/how-to-get-direct-url-for-image`
- `/how-to-share-image-as-link`
- `/how-to-embed-image-in-email`
- `/what-is-image-hotlinking`
- `/how-to-host-image-for-free`
- `/how-long-does-imagetourl-store-images`

Each: 800–1200 words, short answer ≤45 words in first paragraph, `QAPage` + `FAQPage` + `Speakable` schema, cited sources.

---

## 3. New schema types to implement

Already live: Organization, WebSite, WebApplication, FAQPage, BreadcrumbList, Article.

Add:

| Schema | Where | Why |
|---|---|---|
| `HowTo` | every conversion tool page | rich results for "how to convert X to Y" |
| `SoftwareApplication` w/ `aggregateRating` + `review` | all tool pages | stars in SERP — needs real review collection via widget |
| `ImageObject` | homepage hero + tool demos | image search visibility |
| `VideoObject` | tutorial blog posts (new) | video rich results |
| `QAPage` + `Speakable` | Cluster F pages | AI Overviews / voice |
| `SoftwareSourceCode` | API/dev cluster | GitHub-style citations |
| `ItemList` | `/blog`, category pages | carousel eligibility |
| `Dataset` | `/image-format-comparison` table page | dataset rich results |

---

## 4. New technical SEO work

1. **`llms-full.txt`** in addition to existing `llms.txt` — expanded version with per-tool descriptions, API examples, and the new Cluster F Q&A answers inline. Follow the anthropic/llmstxt-org emerging spec.
2. **Per-locale llms.txt** (`/{locale}/llms.txt`) — current one is English-only; multilingual AI crawlers miss non-EN intent.
3. **IndexNow** push on publish — Bing/Yandex instant indexing. Cloudflare Worker hook on blog/CMS publish.
4. **Google Merchant/image sitemap** — separate `image-sitemap.xml` listing every hosted showcase image with `<image:caption>` + `<image:license>`.
5. **News sitemap** (if blog cadence ≥3/week) for Google News eligibility.
6. **Review collection widget** on tool pages → feeds `aggregateRating` schema (needs real data, not fabricated).
7. **Core Web Vitals INP regression monitor** — Dec 2024 INP replaced FID; add a RUM beacon. (Not checked if already in place — verify.)
8. **Programmatic internal linking module** — every new Cluster A page links to related Cluster A pairs + the Cluster B utility most relevant (e.g., `/png-to-jpg` → `/image-compressor`).
9. **Breadcrumb on locale pages** — current BreadcrumbList is English-root-only per analysis; extend.
10. **FAQ dedup guard** — once 60+ FAQ pages exist, Google may penalize near-duplicate FAQs across conversion pairs. Author distinct Q&A per page.

---

## 5. Content strategy — blog topic gaps

Current blog has 8 posts, none mapped to the tool's own keyword universe. New editorial pillars:

1. **Format deep-dives** — "JPG vs PNG vs WebP vs AVIF in 2026", "When to use HEIC", "SVG vs PNG for UI icons"
2. **Platform tutorials** — "Embed images in Notion without breaking", "Why Reddit strips your image EXIF", one per Cluster D platform
3. **Privacy/security** — "What EXIF leaks about you", "Anonymous image hosting explained", "GDPR-safe image sharing"
4. **Core Web Vitals & images** — "Image LCP optimization 2026", "AVIF rollout for CMS", "Responsive images cheatsheet"
5. **Case studies / E-E-A-T** — real customers, measured outcomes, bylined authors with schema `Person` + `sameAs` to LinkedIn

Cadence: 2/week for 6 months = 52 posts. Each post ≥1200 words, includes internal links to ≥3 tool pages, `Article` + `Speakable` schema, author bio.

---

## 6. Roadmap

**Phase 1 (weeks 1–4) — Cluster A P0 + schema upgrades**
- Build client-side converters for 10 P0 format pairs (reuse HEIC WASM pipeline pattern)
- Ship 10 Cluster A P0 pages + rollout to 27 locales via registry
- Add `HowTo` + `SoftwareApplication.aggregateRating` schema to all tool pages
- Launch review widget (real reviews only)

**Phase 2 (weeks 5–12) — Cluster A P1, B P0, C, D P0**
- 10 more format pairs (P1)
- 5 Cluster B utilities (compressor, resizer, base64×2, favicon)
- 4 competitor alt pages + 4 vs pages
- 15 platform use-cases
- Launch `llms-full.txt` + per-locale llms.txt
- Image sitemap + IndexNow
- Blog cadence ramp to 2/week

**Phase 3 (weeks 13–24) — Cluster B P1, E, F, programmatic linking**
- Remaining Cluster B (crop, bg-remove, OCR, EXIF, rotate)
- Full dev/API cluster (9 pages)
- 6 GEO Q&A pages with QAPage schema
- Programmatic internal-link module
- Review collection at scale

**Phase 4 (months 7–12) — Authority**
- Cluster A P2 + Cluster B P2 tail
- 10 case studies w/ real data
- Outreach for backlinks (dev tool roundups, "best imgur alternatives" lists)
- Language-specific link building (target top 5 locales by traffic)

---

## 7. KPI targets (above current baseline)

Treat current traffic as baseline = B. After the plan:

| Metric | 3 mo | 6 mo | 12 mo |
|---|---|---|---|
| Organic sessions | 1.8× B | 3.5× B | 7× B |
| Indexed pages | +40 | +90 | +160 |
| Ranking keywords (top 10) | +150 | +500 | +1500 |
| AI Overview citations (manual sample) | 5 | 20 | 60 |
| Core Web Vitals pass (p75) | ≥95% | ≥97% | ≥98% |

---

## 8. Risk / watch list

- **Thin-content risk** on Cluster A: each pair needs a real working converter + unique FAQ, not a templated clone. Google's Dec 2025 E-E-A-T update penalizes near-duplicates sitewide.
- **Locale bloat**: 33 landing pages × 27 locales = 891 URLs. Adding 50 more tool pages = +1350 URLs. Watch the 50k sitemap cap and crawl budget — consider splitting sitemap per locale.
- **Schema over-claiming**: don't add `aggregateRating` without real reviews. Google can issue manual actions.
- **RAW/PDF conversion (Cluster A P2)**: heavy WASM, may blow LCP budget. Gate behind lazy worker.
- **Competitive moats**: `remove-background`, `pdf-to-jpg`, `image-compressor` are owned by TinyPNG, Adobe, iLovePDF, Remove.bg. Enter only with a differentiator (privacy/client-side/free-forever).

---

## 9. Immediate next step

Validate Cluster A P0 volumes + difficulty with DataForSEO (`kw_data_google_ads_search_volume`, `dataforseo_labs_bulk_keyword_difficulty`) for the 10 priority slugs before committing engineering to the WASM converter work. Deliverable: a ranked shortlist of 10 pages to ship in Phase 1.
