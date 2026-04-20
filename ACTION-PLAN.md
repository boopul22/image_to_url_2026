# SEO Action Plan — imagetourl.cloud

**Health Score:** 67/100 → target 90/100
**Date:** 2026-04-14

Priority levels: **Critical** = ship this week. **High** = within 2 weeks. **Medium** = within 1 month. **Low** = backlog.

---

## CRITICAL (this week)

### C1. Fix `/en/*` routing for tool, about, FAQ, and blog-post pages
Header nav and sitemap reference `/en/png-to-url`, `/en/about`, `/en/faq`, `/en/blog/[slug]` but those URLs return **404 + noindex**. Content lives at the bare path. Pick one canonical scheme (recommend locale-prefixed everywhere) and:
- Make tool, about, FAQ, blog-post routes resolve under `/en/`.
- 301 the bare-path versions to the locale version (or vice versa).
- Update sitemap + hreflang to match.
- Re-test the entire `*-to-url` slug family + `image-hosting-for-*` cluster.

### C2. Publish real blog content (or noindex the empty hub)
`/en/blog` renders 346 words of chrome and zero indexable posts. Either publish 5–10 real posts with author bylines, `datePublished`/`dateModified`, and `BlogPosting` schema, or `noindex` the empty hub until ready.

### C3. Remove `FAQPage` schema and self-serving review markup
- Delete the `FAQPage` block (Google restricted FAQ rich results to gov/health Aug 2023). Keep the Q&A as visible HTML only.
- Remove `aggregateRating` + the 3 hand-coded `review` entries from `SoftwareApplication`, or wire them to a verifiable third-party review source. Self-serving reviews risk a manual action.

### C4. Make `WebPage` JSON-LD per-page
Today the same `WebPage` (`@id`, `name`, `url`, `breadcrumb`) is injected on every URL with the homepage values. Generate dynamically per route with the real `url`, `name`, `inLanguage: "en"`, and a real `BreadcrumbList`.

### C5. Fix `SoftwareApplication.offers`
- Replace non-Schema `billingIncrement` with `priceSpecification` → `UnitPriceSpecification` (`billingDuration: "P1M"`, `unitCode: "MON"`).
- Add `priceValidUntil` (e.g., `2026-12-31`).

---

## HIGH (within 2 weeks)

### H1. Strip `Vary: Cookie` from anonymous HTML
Cacheable HTML (`s-maxage=3600`) is being fragmented by cookie at the Cloudflare edge, killing HIT rate and inflating TTFB/LCP. Strip auth cookies from the response for `/en/` and other anonymous routes, or remove `Vary: Cookie`.

### H2. Fix Google Fonts loading
- Remove the duplicate **synchronous** `<link rel="stylesheet">` that's defeating the async `media=print` swap.
- Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.
- Better: self-host Space Grotesk + DM Sans as `woff2` with `font-display: swap` and `<link rel="preload" as="font" crossorigin>` for the LCP weight (500/600).
- Drop or subset **Material Symbols Outlined** variable font; replace above-fold icons with inline SVG.

### H3. Add `Content-Security-Policy` header
Start with `Content-Security-Policy-Report-Only`, then promote.

### H4. Add PNG/JPG `og:image` fallback (1200×630)
Current SVG OG image won't render on LinkedIn, Slack, or WhatsApp.

### H5. Replace `SoftwareApplication.screenshot`
Currently points at `favicon.svg`. Use a real product screenshot ≥1280px.

### H6. Convert `/imgur-alternative` into a hard comparison
Add a side-by-side table with concrete numbers: upload limits, retention, NSFW policy, API rate limits, pricing. Highest-intent commercial page; make it citable for AI Overviews.

### H7. Add author + freshness signals site-wide
- `Organization` with `sameAs`, `contactPoint`, `logo`, `foundingDate`.
- Founder `Person` JSON-LD with `sameAs` (GitHub, LinkedIn, X).
- Visible "Last updated" dates and `dateModified` on every evergreen page.

### H8. Replace `SoftwareApplication` with `WebApplication` subtype
Add `browserRequirements: "Requires JavaScript and HTML5"`.

---

## MEDIUM (within 1 month)

### M1. Per-page `BreadcrumbList`
Generate from route, not hard-coded.

### M2. `Blog` + `BlogPosting` schema for blog
Once C2 is done. Include `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`.

### M3. Self-referential hreflang on English-only landing pages
The 40+ programmatic landing pages (`/png-to-url`, `/imgur-alternative`, `/image-hosting-for-discord`, …) need at least `hreflang="en"` + `x-default` self-declaration in the sitemap and HTML head.

### M4. Fix `zh` hreflang
Switch to `zh-Hans` (and add `zh-Hant` if targeting Taiwan/HK).

### M5. Sitemap `lastmod` from real git mtimes
Currently only 2 distinct values (build-stamped).

### M6. Add `max-image-preview:large` robots meta
Important for an image product — wins larger SERP image previews.

### M7. Inline critical CSS + defer GTM
Astro `inlineStylesheets: 'auto'` for `Layout.CaBVyy_r.css`. Move GTM behind `async` + post-`load` (or Partytown) to protect INP.

### M8. Preload hero LCP element
Once identified, serve as AVIF/WebP with explicit width/height and `<link rel="preload" as="image">`.

### M9. Strengthen tool-page depth
Add format-specific notes (PNG transparency, color profiles), real before/after example, file-size benchmarks. Same pattern for the other format-to-URL pages.

### M10. Add an FAQ block + comparison snippet to homepage
2–3 paragraphs of unique perspective on permanent links + visible Q&A.

### M11. Mobile UX fixes from visual audit
- Truncated "Kept forever — never auto-d..." label: wrap or shorten.
- Stack auto-delete label above select on <400px.
- Add text labels to mobile trust-icon row.

### M12. Resolve bare-path / locale-path duplication
Bare `/blog`, `/about`, `/pricing`, `/contact`, `/privacy`, `/terms`, `/docs`, `/features` all return 200 and duplicate the locale versions. Pick one canonical and 301 the other.

---

## LOW (backlog)

- **L1.** Remove `Astro` generator meta tag.
- **L2.** Drop self-canonical on `/404/`.
- **L3.** Add explicit AI crawler grants in robots.txt (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
- **L4.** Publish `llms.txt`.
- **L5.** Split sitemap into an index (core / locales / programmatic landing pages).
- **L6.** Widen desktop hero max-width at 1920px (or add a secondary element).
- **L7.** Add "Paste image" / keyboard-shortcut hint above the fold.

---

## Expected Impact

Shipping all **Critical + High** items should move the health score from **67 → ~85** and unlock:
- Indexation of the entire tool + blog + about cluster (currently silently 404).
- Materially better LCP/TTFB once fonts are self-hosted and `Vary: Cookie` is gone.
- Eligibility for sitelinks search box, brand panel, and product rich results once schema is correct.
- Removed manual-action risk from FAQ + self-serving reviews.
