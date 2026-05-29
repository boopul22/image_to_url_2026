# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`imagetourl.cloud` — a free image-hosting + image-tools SaaS. Astro 6 (SSR + prerender hybrid) on the **Cloudflare Workers** runtime, with ~28 localized SEO landing pages, R2 storage, D1 database, Google OAuth, and a TipTap-based CMS. Production site: `https://imagetourl.cloud`.

## Commands

```bash
npm run dev          # astro dev at http://localhost:4321  (root / → /en/)
npm run build        # astro build + scripts/patch-worker-entry.mjs (prebuild fetches icons/fonts)
npm run preview      # astro preview (local Workers preview)
npm run astro -- check   # TypeScript/Astro type-check (tsconfig extends astro/strict). There is NO separate lint/test setup.

# Content tooling (OpenRouter / Gemini)
node scripts/translate-landing.mjs   # auto-fill non-English slugs in src/i18n/landing/slugs.ts (idempotent)
node scripts/translate-blog.mjs      # translate CMS posts
node scripts/translate-missing.mjs   # fill missing translation keys

# Keyword research (Google Ads API)
npm run kw:auth      # obtain refresh token
npm run kw:ideas     # GenerateKeywordIdeas
```

There are **no automated tests and no linter** — `npm run astro -- check` is the only static check. The `scripts/test-footer-*.mjs` files are ad-hoc live-URL probes, not a test suite.

### Local dev gotchas
- `astro dev` returns **500 for the `@fontsource` `.woff2` files** (and some `/src/*` assets) because the Cloudflare vite-plugin's miniflare sandbox can't serve them — text falls back to Helvetica. This is dev-only; it resolves in a real build. **Material Symbols icons load fine** (served from `public/`). To truly validate fonts/bindings, run `npm run build`.
- Bindings (D1/R2/KV/IMAGES) use `remoteBindings: true`, so dev talks to the real remote resources.
- After editing a component, `.wrangler` ISR cache can make localized pages 404 the new bundle — clear `.wrangler` + `node_modules/.cache` before rebuilding to verify locally.

## Deploy

**Production = git push to `main` → Cloudflare auto-build** (Workers Builds runs `npm run build` and publishes). Don't run `wrangler deploy` for prod.

**Preview a version without touching prod traffic** (0%-traffic version preview):
```bash
npm run build
# The adapter emits dist/server/wrangler.json but leaves the SESSION KV binding without an id.
# Inject it before uploading (namespace: imagetourl2026-session = 5472d36b12354fa68c518e303d68c76d):
#   patch dist/server/wrangler.json kv_namespaces[binding=SESSION].id = <id>
npx wrangler versions upload -c dist/server/wrangler.json
# → prints a "Version Preview URL"; promote with `wrangler versions deploy`
```

## Architecture

### Routing is middleware-first
`wrangler.toml` sets `run_worker_first = true` on the `[assets]` binding, so the Worker (SSR + `src/middleware.ts`) runs **before** static-asset matching on every path. `src/middleware.ts` owns: locale detection, cross-locale 301 redirects (via `ownerLocaleForSlug`), legacy redirects (`/zh/*`→`/zh-Hans/*`, locale-prefixed `/auth/*`→`/api/auth/*`), root `/`→`/en/` rewrite, session restoration + role gating for `/admin` & `/dashboard`, anonymous-GET edge caching, 404→410 conversion for dead URL patterns, and security headers. Astro i18n `routing: 'manual'` (see `astro.config.mjs`) — locale handling is hand-rolled in middleware, not automatic.

Prerender vs SSR: landing pages (`src/pages/[locale]/[...slug].astro`, `export const prerender = true`) are statically generated for all pageKey × locale combos via `getStaticPaths`. Admin, dashboard, `api/`, and `src/pages/[...catchall].astro` are SSR. The catch-all exists specifically so middleware runs on unknown URLs.

### `scripts/patch-worker-entry.mjs` — required post-build step
Astro's router returns `null` (404) for a `[locale]/[...slug]` URL whose param combo isn't in `getStaticPaths`, and does **not** fall back to a less-specific route — so middleware never runs for cross-locale "polluted" URLs (e.g. `/ar/<farsi-slug>/`). This script parses `src/i18n/landing/slugs.ts`, builds a slug→owning-locale map + valid-combo set, and injects redirect/fast-path logic into the built worker entry (`dist/server/chunks/worker-entry_*.mjs`) **before `app.match()`**. It runs as part of `npm run build` and is safe to re-run. If you change routing or slugs, this is the file to understand. See memory note `astro_prerendered_route_fallback`.

### i18n landing system (`src/i18n/`)
- `config.ts` — the 28-locale list (must match `astro.config.mjs`), RTL flags (`ar`, `fa`, `ur`), OG locale tags.
- `utils.ts` — `t(locale, key, params?)` reads `src/i18n/translations/*.json` (UI strings).
- `landing/registry.ts` — `resolveSlug(locale, slug)→pageKey`, `localizedUrl(pageKey, locale)`, `hreflangPairs(pageKey)`. The reverse/owner indices here drive the language switcher and `<link rel=alternate>`.
- `landing/slugs.ts` — per-pageKey localized slug map (English slug == pageKey, stable). Non-English entries are auto-generated by `translate-landing.mjs`; **don't hand-rename English slugs.** This file is also parsed by `patch-worker-entry.mjs`.
- `landing/*.ts` — one module per page exporting fully-translated `content` (hero/benefits/FAQ/meta), loaded by `[...slug].astro`.

### Backend & storage
- Cloudflare bindings (`wrangler.toml` / adapter-generated `dist/server/wrangler.json`): `DB` (D1 `imagetourl-db`), `R2` (`imagetourl-storage`), `IMAGES` (Cloudflare Images transforms), `SESSION` (KV), `ASSETS`.
- `src/lib/` is the binding layer: `db.ts`/`env.ts` (accessors w/ graceful fallback), `r2.ts` (S3-compatible signed requests, **no AWS SDK**), `session.ts` + `auth.ts` (Google OAuth PKCE → D1 `sessions`), `api-key.ts`, `cms.ts`, `nav-links.ts` (`getNavGroups(locale)`), `img.ts` (rewrites CDN URLs to the `/img` route).
- `src/pages/api/upload.ts` — stores to R2, rows in D1 `images`, daily rate-limited per rolling 24h window (5/day guests by IP via `anonymous_uploads`, 25/day signed-in by `user_id`; constants + friendly 429 message live at the top of the file), returns short URL `https://imagetourl.cloud/{id}.{ext}`. Short-URL serving + expiry are handled at the worker/edge level.
- `src/pages/img/[...path].ts` — on-the-fly resize/reformat (`?w=&f=webp`) via the `IMAGES` binding, edge-cached. Use `src/lib/img.ts` helpers to generate these URLs.
- D1 schema lives in `src/lib/*-schema.sql` and `migrations/*.sql`. `cron-worker/` is a separate Worker that pings `/api/cron/expire-images` to purge expired uploads.

### CMS / admin
`src/pages/admin/**` (gated to `role=admin` in middleware) + `src/pages/api/admin/cms/**` provide TipTap-based CRUD for posts/pages/categories/media backed by D1 `cms_*` tables; the public blog renders from the same tables.

### Dynamic OG images
`/og/card.png` renders per-page/per-locale social cards via `workers-og` with runtime Google-Font subsetting (`src/lib/og-fonts.ts`). Gotchas: uppercase in JS not CSS (subset glyphs); Arabic/Indic fall back to English (no satori shaping). See memory note `dynamic-og-images`.

## Design system — read before any UI work

The site uses a **soft square-edged** system (the old brutalist spec was reversed; committed 2026-05). The full spec is in memory `project_design_system.md`. Essentials:
- **Square corners everywhere** — all `--radius-{sm..3xl}` tokens are `0` in the `@theme` block of `src/styles/global.css`, so every `rounded-*` utility is square. `rounded-full` is exempt (circles/avatars/badges stay round).
- **Recessed inner shadows, no drop shadows** — `.hard-shadow`/`.brutal-shadow` (legacy names) are redefined to `inset 0 2px 4px rgb(0 0 0/.05)`. Gray cards get it via `[class~="bg-surface-container"][class*="rounded"]`.
- **Thin light hairline borders** — `border border-outline-variant/40` (not 2px charcoal). Normal-case Space Grotesk headings; rose accent (`#e11d48`/`#be123c`); light-mode only; minimal motion.
- Most styling is centralized in `src/styles/global.css` (Tailwind v4 via `@import "tailwindcss"`; unlayered rules there beat utility classes without `!important`). Prefer editing tokens/classes there over per-component edits.
- **The uploader is the one rounded exception**: the `.soft-uploader`/`su-*` layer keeps larger radii via `!important`. There are **6 independent client uploaders** (HomePage + ImageCompressor/HeicConverter/etc.) — touch all of them when changing upload UI/logic. Ad-block detection must use bait elements, not `adsbygoogle.loaded` (see memory `uploaders-and-adblock`).
