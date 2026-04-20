---
name: astro-cloudflare-cms
description: Drop a complete auth + CMS + blog system into a new Astro + Cloudflare site. Includes Google OAuth (PKCE, no libs), D1-backed sessions, role-based middleware, TipTap admin UI, posts/categories/media/pages CRUD with activity log, R2 media upload (AWS SigV4 zero-dep), public blog rendering with ISR caching, and optional AI-translated multi-locale posts. Use this skill whenever the user says they want to set up a blog / CMS / admin panel on an Astro site, add Google OAuth to Astro on Cloudflare, "add the CMS from my other site", scaffold an editor UI, or build anything that sounds like "posts table + admin UI + public blog" on Cloudflare Workers with D1 — even when they don't name it "CMS" explicitly. Also trigger on: "I want to manage content from an admin panel", "add a blog with an editor", "copy the CMS from imagetourl", "Astro + D1 auth", "SSR blog with TipTap".
---

# Astro + Cloudflare CMS — Setup Skill

This skill installs a production-grade CMS on a fresh (or existing) Astro site running on Cloudflare Workers. The system came from `imagetourl.cloud` and is shipped as **copy-and-customize source files** — not generated from scratch. That means fewer bugs, faster setup, and byte-for-byte parity with a known-working system.

## What you get

- **Google OAuth** (PKCE, zero libs, DB-backed 30-day sessions)
- **Middleware** — session resolution, `/admin` + `/dashboard` route protection, security headers, ISR-style cache headers
- **Admin UI** (`/admin/cms/*`) — dashboard, posts list, TipTap post editor (create/edit), categories, media library, static pages
- **Admin API** (`/api/admin/cms/*`) — full CRUD for posts, categories, media, pages, publish/unpublish, activity log
- **Public blog** — `/blog`, `/blog/[slug]`, `/p/[slug]` (static pages) with `BlogPosting` + `FAQPage` schema
- **R2 media upload** via AWS SigV4 — no `@aws-sdk` dependency
- **Activity log** — audit trail of every CMS write
- **Optional i18n** — 27-locale version available; simple single-language is the default
- **Optional AI translation** — bulk translate posts via OpenRouter/Gemini

## When to decide single-language vs i18n

Ask the user upfront. **Default to single-language** unless they say otherwise — it has fewer moving parts (no `i18n/config.ts`, no locale redirects, no `post_translations` table). They can add i18n later.

## Preflight — gather these before touching code

| Input | Example | Notes |
|---|---|---|
| Target project path | `/path/to/new-site` | Must be an Astro project. If not, bootstrap one first (`npm create astro@latest`). |
| Site domain | `example.com` | Used for cookie `Domain=.example.com`, OAuth redirect URI, schema.org `@id`. |
| Site name | `Example Blog` | Shown in Layout schema + admin header. |
| D1 database name | `example-db` | You'll create this with `wrangler d1 create`. |
| R2 bucket name | `example-media` | You'll create this with `wrangler r2 bucket create`. |
| R2 public URL | `https://cdn.example.com` or the default R2 public URL | Needed for media URLs. |
| Google OAuth credentials | Client ID + Secret | Create at Google Cloud Console. See `references/google-oauth.md`. |
| Cloudflare Account ID | 32-char hex | From Cloudflare dashboard → right sidebar. |
| R2 API token | Access key + Secret | Create a scoped R2 token in Cloudflare dashboard. |
| Single-language or multi-locale? | `en` only, or list of locales | Default: single-language. Multi-locale = use `middleware.i18n.ts` + `post_translations` migration. |
| Use TipTap editor? | yes/no | Default yes. No = use a plain `<textarea>` for post content. |
| Enable AI translation? | yes/no | Only relevant for multi-locale. Needs OpenRouter key. |

If any item is missing, ask the user a **batched** question that gathers all of them — don't drip one at a time.

## Workflow

Follow these phases in order. Each phase is independently verifiable — don't move on with a broken phase. Use `@skill-creator` sensibility: if something feels site-specific and isn't in the list below, ask rather than guess.

### Phase 1 — Cloudflare resources (user-gated)

Most of this is `wrangler` CLI. You can run these yourself if the user is logged in, or ask the user to run them and paste IDs back. See `references/cloudflare.md` for details.

```bash
# From the target project root
npx wrangler d1 create {{D1_DATABASE_NAME}}
# → records database_id — save it for wrangler.toml

npx wrangler r2 bucket create {{R2_BUCKET_NAME}}

# Create an R2 API token in the CF dashboard (not via CLI).
# Scope: Object Read & Write. Save key + secret.
```

Ask for: `database_id`, R2 access key, R2 secret, Cloudflare Account ID.

### Phase 2 — Copy source files

The skill's `assets/` directory mirrors the final `src/` tree. Copy everything over:

```bash
SKILL_ASSETS="<claude-skills-root>/astro-cloudflare-cms/assets"
cp -r "$SKILL_ASSETS/src/"* <TARGET>/src/
cp -r "$SKILL_ASSETS/migrations" <TARGET>/migrations
cp "$SKILL_ASSETS/config/wrangler.toml.template" <TARGET>/wrangler.toml
cp "$SKILL_ASSETS/config/.dev.vars.template" <TARGET>/.dev.vars
```

**If doing single-language (default):** keep the slim `src/middleware.ts` and `src/env.d.ts` that were copied. Delete `src/middleware.i18n.ts` and `src/env.d.i18n.ts`.

**If doing multi-locale:** delete the slim ones, rename `middleware.i18n.ts` → `middleware.ts` and `env.d.i18n.ts` → `env.d.ts`. Then create `src/i18n/config.ts` and `src/i18n/utils.ts` — see `references/i18n.md` for stubs. Also keep migration `006_post_translations.sql`.

### Phase 3 — Customize per-site values (find-replace)

These hardcoded strings reference the source site. Find and replace each one across `src/`:

| Find | Replace with | Where |
|---|---|---|
| `imagetourl.cloud` | `{{DOMAIN}}` | `src/lib/auth.ts`, `src/middleware.ts` (CSP `img-src`), `src/middleware.i18n.ts`, `src/pages/api/auth/login.ts`, `src/pages/api/auth/callback.ts`, `src/pages/p/[slug].astro`, `src/components/pages/BlogPostPage.astro`, `src/lib/openrouter.ts` |
| `imagetourl-db` | `{{D1_DATABASE_NAME}}` | `src/lib/schemas/cms-schema.sql` (header comment only) |
| `ImageToURL` / `imagetourl` (display name) | `{{SITE_NAME}}` | Admin UI `.astro` files (header titles), `BlogPostPage.astro` schema |
| `cdn.imagetourl.cloud` | Your R2 public URL domain | `src/middleware.i18n.ts` (dev-proxy rewrite — only if using i18n variant) |

Use `Grep` to confirm zero hits remain for `imagetourl` before moving on. One exception: migration `002_seed_categories.sql` has sample category seed data about image hosting — **review and rewrite** the categories for the new site's topic (or skip the seed and have the user create categories via the admin UI).

### Phase 4 — Fill in `wrangler.toml` and `.dev.vars`

Replace `{{PLACEHOLDERS}}` in `wrangler.toml` (database_id, database_name, R2 bucket name, project name) and `.dev.vars` (all env keys).

Generate a random `AUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Phase 5 — Astro config + deps

Merge `assets/config/astro.config.mjs.template` into the project's `astro.config.mjs`. Critical bits:
- `output: 'server'`
- `adapter: cloudflare({ remoteBindings: true })`

Install CMS deps (check `assets/config/package.deps.json` for versions):

```bash
cd <TARGET>
npm install astro @astrojs/cloudflare @tailwindcss/vite tailwindcss @cloudflare/workers-types
npm install -D wrangler
```

TipTap is loaded from a CDN inside the admin `.astro` pages — no npm install needed unless the user wants it bundled.

### Phase 6 — Apply database schemas

```bash
# Auth tables
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=src/lib/schemas/db-schema.sql --remote

# CMS tables
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=src/lib/schemas/cms-schema.sql --remote

# Migrations in order (001, 002, 004; skip 003 + 005 — those are for unrelated features)
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/001_add_faq_items.sql --remote
# Review/edit migrations/002_seed_categories.sql for your topic FIRST, then apply (optional)
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/002_seed_categories.sql --remote
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/004_add_image_expiration.sql --remote

# Only for multi-locale:
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/006_post_translations.sql --remote
```

Verify with:

```bash
npx wrangler d1 execute {{D1_DATABASE_NAME}} --remote --command="SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
```

Expected tables: `users, sessions, posts, categories, media, pages, activity_log` (+ `post_translations` if multi-locale).

### Phase 7 — Set production secrets

`.dev.vars` is for local dev only. For production, push secrets to Wrangler:

```bash
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put GOOGLE_CLIENT_SECRET
npx wrangler secret put AUTH_SECRET
npx wrangler secret put CLOUDFLARE_ACCOUNT_ID
npx wrangler secret put R2_ACCESS_KEY_ID
npx wrangler secret put R2_SECRET_ACCESS_KEY
npx wrangler secret put R2_BUCKET_NAME
npx wrangler secret put R2_PUBLIC_URL
# Optional
npx wrangler secret put OPENROUTER_API_KEY
```

### Phase 8 — Google OAuth client

See `references/google-oauth.md` for the exact clicks. In short: create OAuth 2.0 Web client, authorized redirect URIs `http://localhost:4321/api/auth/callback` (dev) + `https://{{DOMAIN}}/api/auth/callback` (prod).

### Phase 9 — Blog rendering (site-specific)

The bundled `src/components/pages/BlogPage.astro` and `BlogPostPage.astro` are **reference implementations** from the source site — they import `Nav`, `Footer`, `Layout`, and `i18n/utils` from that site. You MUST adapt them to the target site's chrome:

- Keep the data-fetching block (`getDB`, `getPublishedPosts`/`Localized`, `getCategories`, etc.)
- Keep the ISR cache headers (`CDN-Cache-Control`)
- Keep the schema.org `BlogPosting` + `FAQPage` JSON-LD
- Replace `<Nav>`, `<Footer>`, `<Layout>` imports with whatever the target site uses
- Replace the `t(locale, ...)` i18n calls with plain strings (single-language) or adapt to the target's i18n system

Same treatment for `src/pages/p/[slug].astro` — it's a reference. Adapt the Layout/Nav imports.

### Phase 10 — Smoke test (dev server)

```bash
cd <TARGET>
npx wrangler d1 execute {{D1_DATABASE_NAME}} --remote --command="SELECT COUNT(*) FROM users"
# should return 0

npm run dev
# → visit http://localhost:4321
```

Go to `/api/auth/login` → sign in with Google → you should land on `/` with a session cookie. Because `users` was empty, **your account is auto-promoted to admin**. Confirm:

```bash
npx wrangler d1 execute {{D1_DATABASE_NAME}} --remote --command="SELECT email, role FROM users"
```

Then visit `/admin/cms/` — should load. Visit `/admin/cms/posts/new` — TipTap editor should render. Create a draft, publish it, confirm it renders at `/blog/{slug}`.

### Phase 11 — Deploy

```bash
npx wrangler deploy
```

Verify `/api/auth/login` works in prod. First user to sign up gets admin.

## Decision guide — common customizations

- **No dashboard (only admin)?** Drop the `/dashboard` protection block from `middleware.ts` and skip copying `src/pages/dashboard/*` (not bundled — the source site has it but the skill doesn't assume it).
- **Different auth provider?** The OAuth flow in `src/lib/auth.ts` + `src/pages/api/auth/*.ts` is isolated. Replace the Google token exchange and userinfo calls with GitHub/etc. Keep the session + PKCE layer.
- **Flat Markdown editor instead of TipTap?** Replace the TipTap block in `src/pages/admin/cms/posts/new.astro` and `edit/[id].astro` with a `<textarea>` or a Markdown editor CDN widget. The `content` column already stores a string — the `isHtmlContent()` detection in `cms.ts` handles HTML vs JSON transparently.
- **No R2 / using Images bucket?** R2 upload is only used by `/api/admin/cms/media` and `/api/upload`. If you don't need media, skip those routes. `cms.ts` doesn't touch R2.
- **Custom design system?** The admin UI uses Material Design 3 color tokens (`primary`, `surface`, `on-surface`, etc.) via Tailwind CSS variables. If the target site uses different tokens, either (a) add those tokens to the target's `global.css` or (b) find-replace the token names across the admin `.astro` files.

## Verification checklist (run through this before declaring done)

- [ ] `wrangler d1` queries show all expected tables
- [ ] `npm run dev` boots without type errors
- [ ] `/api/auth/login` redirects to Google
- [ ] After login, `users` table has a row with `role='admin'`
- [ ] `/admin/cms/` loads and shows zero posts
- [ ] Creating a post via the admin UI succeeds and appears in `posts` table
- [ ] Publishing the post makes it visible at `/blog/{slug}`
- [ ] Uploading an image in the media library lands in R2 (`cms/general/*`) and returns a public URL that loads
- [ ] `activity_log` has rows for create/publish
- [ ] Signing out clears the session cookie and deletes the row from `sessions`

## Reference files

- `references/google-oauth.md` — Google Cloud Console setup
- `references/cloudflare.md` — wrangler, D1, R2, secrets, custom domain
- `references/customization.md` — per-site find-replace targets, color system, i18n swap
- `references/i18n.md` — multi-locale setup, `i18n/config.ts` + `i18n/utils.ts` stubs, translate feature
- `references/architecture.md` — how the pieces fit together (for when something breaks)

## Anti-patterns (things NOT to do)

- **Don't regenerate the lib files from scratch.** The `assets/` files are byte-for-byte from a working system — use them. Even small differences in PKCE or AWS SigV4 will break silently.
- **Don't put AUTH_SECRET or OAuth credentials in `wrangler.toml`.** That file is committed. Use `.dev.vars` (gitignored) locally and `wrangler secret put` for prod.
- **Don't store session data in JWTs.** The session pattern here is DB-backed so bans take effect instantly. Switching to JWT breaks the ban enforcement in `getSession()`.
- **Don't skip the first-login admin check.** The "first user in empty table becomes admin" logic in `src/pages/api/auth/callback.ts` is how you bootstrap the very first admin. Without it, nobody can access `/admin` on a fresh install.
- **Don't enable `prerender: true` on CMS pages.** The blog, admin, and API routes all need SSR (`export const prerender = false` — already set in every page).
- **Don't remove the `Domain=.example.com` on production cookies** unless the site has no subdomains. If it does, the cookie must be set at the parent domain so `www.` and apex share sessions.
