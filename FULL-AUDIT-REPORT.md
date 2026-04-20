# Full SEO Audit — imagetourl.cloud/en/

**Date:** 2026-04-14
**Business type:** SaaS / Web utility (free image-to-URL hosting)
**Pages crawled:** homepage + 10 internal (mix of /en/ and bare-path)

## SEO Health Score: **67 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 75 | 18.8 |
| Content Quality | 25% | 58 | 14.5 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 55 | 5.5 |
| Performance (CWV) | 10% | 70 | 7.0 |
| Images | 5% | 80 | 4.0 |
| AI Search Readiness | 5% | 45 | 2.3 |
| **Total** |  |  | **66.5** |

---

## Executive Summary

The site has strong fundamentals — clean SSR (Astro), HTTPS with HSTS preload, hreflang for 7 locales, a valid sitemap, low JS footprint, and a coherent brutalist design that renders well on mobile and desktop. However, **a routing inconsistency between localized navigation and actual page paths is silently breaking core money pages and the entire blog**, and several easy wins (schema correctness, font loading, edge cache) are being left on the table.

### Top 5 Critical Issues
1. **Broken `/en/*` routing** — `/en/png-to-url`, `/en/about`, `/en/faq`, `/en/blog/[slug]` return 404. Tool/blog/about content lives at the bare path. Header nav and sitemap reference both inconsistently. Crawl + hreflang + UX all hit.
2. **Blog hub is empty** of indexable posts — major helpful-content negative.
3. **`Vary: Cookie` on cacheable anonymous HTML** fragments the Cloudflare edge cache and hurts TTFB/LCP at scale.
4. **`FAQPage` schema in use** — Google restricted FAQ rich results to gov/health in Aug 2023; risks a manual action and won't render. Plus self-serving `aggregateRating` + 3 hand-coded `Review`s violate Google's review policy.
5. **Same `WebPage` JSON-LD on every URL** — `@id`, `name`, `breadcrumb`, `url` are hard-coded to the homepage on every locale page.

### Top 5 Quick Wins
1. Remove the duplicate synchronous Google Fonts `<link>` (the async swap is being defeated by a second blocking copy).
2. Strip `Vary: Cookie` for anonymous HTML to restore edge cache hits.
3. Add a 1200×630 PNG/JPG `og:image` fallback (current SVG won't render on LinkedIn/Slack/WhatsApp).
4. Replace `SoftwareApplication.screenshot` (currently `favicon.svg`) with a real product screenshot.
5. Switch `zh` hreflang to `zh-Hans` (+ `zh-Hant` if targeting Taiwan/HK).

---

## 1. Technical SEO (75/100)

**Pass:** robots.txt + sitemap reachable, HTTPS + HSTS preload, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, mobile viewport, single 301 from `/` → `/en/`, full SSR.

**Fail / Fix:**
- **CRITICAL** — `/en/png-to-url` and the `*-to-url` slug family return 404 with `noindex` despite being listed in robots.txt and the sitemap. Routing for the locale-prefixed tool pages is broken or those pages live only at the bare path.
- **HIGH** — No `Content-Security-Policy` header (start with report-only).
- **HIGH** — `Vary: Cookie` on `s-maxage=3600` HTML kills edge cache for anonymous visitors.
- **MEDIUM** — Hreflang declares 7 locales but several alternates 404, which causes Google to ignore the cluster.
- **LOW** — `Astro` generator meta exposed; OG image is SVG (no PNG fallback); 404 page has a self-canonical to `/404/`.

## 2. Content Quality (58/100)

E-E-A-T breakdown: Experience 10/20, Expertise 12/25, Authoritativeness 8/25, Trust 18/30.

- Tool pages (~750 words) meet the floor but are interchangeable with competitors — no first-hand benchmarks, no PNG-specific technical depth, no real before/after.
- `/imgur-alternative` (907 words) is the highest-intent commercial page but lacks a hard side-by-side comparison table with concrete limits/numbers.
- Blog hub renders 346 words of chrome and **zero indexable posts**.
- No author bylines, no `Person`/`Organization` author entities, no "Last updated" dates, no `dateModified` on any page.
- Homepage hero is mostly UI copy; needs an FAQ block, a comparison snippet, and 2–3 paragraphs of unique perspective.

## 3. On-Page SEO (72/100)

- Titles + descriptions present and within length on inspected pages.
- H1 hierarchy is clean (decorative spans inside H1 — fine for users, verify plain-text extractability).
- Internal linking from header nav points at non-existent `/en/*` slugs (see routing critical).
- Localized nav inconsistent with content paths — biggest internal-linking gap.
- Add `max-image-preview:large` to robots meta to win larger image SERP previews (important for an image product).

## 4. Schema / Structured Data (55/100)

Single global JSON-LD array injected on every page. Contains: `Organization`, `WebSite`+`SearchAction`, `SoftwareApplication` (with `offers`, `aggregateRating`, `review`), `WebPage`+`BreadcrumbList`, `FAQPage`.

**Issues:**
- **CRITICAL** — `FAQPage`: remove. Google deprecated FAQ rich results outside gov/health. Move Q&A into visible page copy only.
- **CRITICAL** — `SoftwareApplication.offers` uses non-Schema `billingIncrement`. Use `priceSpecification` with `UnitPriceSpecification` (`billingDuration: "P1M"`, `unitCode: "MON"`); add `priceValidUntil`.
- **CRITICAL** — `aggregateRating` + 3 hand-coded `review`s appear self-serving and risk a manual action under Google's review policy. Remove or wire to a verifiable third-party review source.
- **CRITICAL** — Same `WebPage` block reused across all URLs with hard-coded homepage `@id`/`name`/`url`. Make per-page (dynamic).
- **HIGH** — Breadcrumb only has 1 item (Home) on every page. Generate per-page breadcrumbs.
- **MEDIUM** — `screenshot` points at `favicon.svg`; replace with real screenshot. Add `Organization.sameAs`, `contactPoint`, `foundingDate`. Replace `SoftwareApplication` with the more accurate `WebApplication` subtype (+ `browserRequirements`).
- **HIGH OPPORTUNITY** — Blog index → add `Blog` + per-post `BlogPosting` schema with `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`.

## 5. Performance / CWV (70/100)

CrUX/PSI quota was exhausted; numbers below are direct fetch + static analysis.

- TTFB ~408 ms (Cloudflare DEL POP) — borderline; target <200 ms p75. Cache-busting from `Vary: Cookie` is the likely culprit.
- HTML 74 KB, HTTP/2, h3 advertised, good cache headers.
- LCP **at risk**: Google Fonts on the critical path (Space Grotesk + DM Sans + Material Symbols variable font), no hero preload, render-blocking `Layout.CaBVyy_r.css`.
- INP probably good (only two small `type=module` chunks, no heavy framework).
- CLS low risk: avatar `<img>`s have explicit dimensions; main residual risk is FOUT swap from third-party fonts.
- Duplicate Google Fonts `<link>`: one async (`media=print` swap) and one synchronous — the sync one defeats the async pattern and double-fetches.

**Top fixes:** remove duplicate sync font link → preconnect → self-host woff2 with `font-display: swap` → drop/subset Material Symbols → inline critical CSS → defer GTM (or Partytown) → strip `Vary: Cookie` → preload hero LCP element as AVIF/WebP.

## 6. Images (80/100)

- Avatars sized correctly (no CLS).
- `og:image` is SVG — needs PNG/JPG fallback.
- `SoftwareApplication.screenshot` points at favicon — needs real screenshot.
- Hero LCP element not preloaded.
- Add `max-image-preview:large` and serve hero in AVIF/WebP.

## 7. AI Search Readiness (45/100)

- No `Article`/`BlogPosting` schema, no `dateModified`, no author entities — all key citation signals missing.
- No quotable statistics or hard numeric comparisons in the highest-intent comparison page.
- llms.txt not present.
- AI crawler access not explicitly granted in robots.txt (default-allow is fine, but consider explicit GPTBot/ClaudeBot/PerplexityBot lines).
- Add brand-mention signals: `Organization.sameAs` social profiles, founder `Person` schema with `sameAs` to GitHub/LinkedIn.

## 8. Sitemap

- 82 URLs, single file, valid format, no deprecated tags. Listed in robots.txt.
- Hreflang reciprocal across 7 locale homes + section pages.
- **Issues:** bare `/` not in sitemap (and serves a 200 duplicate of `/en/`); 40+ programmatic landing pages are English-only with no self-referential `hreflang="en"` + `x-default`; `zh` should be `zh-Hans`; only 2 distinct `lastmod` values (build-stamped, not per-file); duplicate exposure of bare-path + locale-path versions of `/blog`, `/about`, `/pricing`, etc.

## 9. Visual / Mobile

Desktop and mobile renders match the locked brutalist spec. No overlaps, no horizontal scroll, touch targets ≥44px.

- Auto-delete hint truncated on mobile (`"Kept forever — never auto-d..."`). Wrap or shorten.
- Mobile auto-delete row crowds at <400px — stack label above select.
- Desktop hero has large empty side margins at 1920px; widen max-width or add a secondary element (sample gallery, paste-from-clipboard hint).
- "Paste image" / keyboard shortcut hint not exposed above the fold.
- Mobile trust-icon row lacks text labels — icons alone may not communicate.

---

## Files

- `screenshots/home-desktop.png`, `screenshots/home-mobile.png`
- See `ACTION-PLAN.md` for prioritized work.
