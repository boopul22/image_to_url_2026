# Local Setup

Run **imagetourl.cloud** on your machine to preview and edit content — with
**no Cloudflare account, no login, and no secret keys.** The dev server uses a
fully local simulation of the database and storage.

## Prerequisites

- **Node 22.x** (see `.nvmrc`). Check with `node -v`.
  - Have [nvm](https://github.com/nvm-sh/nvm)? Run `nvm use`.
  - Otherwise install Node ≥ 22.12 from [nodejs.org](https://nodejs.org).
- **git**.

## Steps

```bash
# 1. Clone (or use your fork)
git clone https://github.com/boopul22/image_to_url_2026.git
cd image_to_url_2026

# 2. Pick the Node version
nvm use            # or install Node >= 22.12 yourself

# 3. Install dependencies
npm install

# 4. One-time: build the LOCAL database (no login, runs fully offline)
npm run setup

# 5. Start the dev server
npm run dev
```

Open **http://localhost:4321** — it redirects to `/en/`.

That's the whole setup. You do **not** create a `.dev.vars` file, you do **not**
run `wrangler login`, and you do **not** need any API keys.

## What `npm run setup` does

It creates the database tables in a local SQLite file under `.wrangler/` (via
`scripts/setup-local-db.mjs`). This **never contacts Cloudflare** — it just lets
the blog/CMS pages render against empty local tables instead of erroring. Safe to
re-run any time. You only need to run it once (or after deleting `.wrangler/`).

## What you can edit

Hot-reload shows changes instantly as you save:

| What | Where |
| --- | --- |
| Landing / tool page copy (hero, steps, benefits, FAQ, meta) | `src/i18n/landing/<page-key>.ts` |
| Shape of a landing page (the fields you fill in) | `src/i18n/landing/types.ts` |
| Nav, footer, and other UI strings | `src/i18n/translations/{en,es,fr,de,ja,zh-Hans}.json` |
| URL slugs per language | `src/i18n/landing/slugs.ts` |
| Components / layout | `src/components/**` |

Supported languages: `en`, `es`, `fr`, `de`, `ja`, `zh-Hans`. Preview a localized
page at e.g. `http://localhost:4321/es/png-to-jpg`.

For translation rules, see `TRANSLATION-GUIDE.md`. For contribution flow and PRs,
see `CONTRIBUTING.md`.

## Expected locally (these are NOT errors)

These features need production credentials and are not part of content work, so
they're intentionally inert locally — they degrade quietly, they don't crash:

- **Image upload** — no storage keys locally, so uploads fail gracefully; the page
  stays fine.
- **Google login / `/admin` / `/dashboard`** — login won't complete; `/admin`
  returns 403 and `/dashboard` redirects to login.
- **Blog posts** — blog content lives in the production database, not in the repo,
  so the blog index/pages render **empty** locally.
- **Homepage reviews carousel** — reviews are user-submitted and live in
  production, so the carousel is **empty** locally (no error).
- **Some fonts** may 500 in the dev server, so text can fall back to a system font.
  This is dev-only and a real build is unaffected.
- **Some `/img/*` thumbnails** may not render locally. Harmless.

A correctly running dev server shows **no `[ERROR]` lines** in the terminal for
normal page loads. If you see one, note the page and report it.

## Troubleshooting

- **A localized page 404s the new JS after editing a component** — clear caches and
  restart: `rm -rf .wrangler node_modules/.cache && npm run dev`.
- **`no such table` error** — run `npm run setup` (you likely skipped step 4 or
  deleted `.wrangler/`).
- **Wrong Node version errors on `npm install`** — run `nvm use` (or install Node
  ≥ 22.12) and reinstall.

## Opening a pull request

1. Create a branch (or fork).
2. Commit your changes.
3. Push and open a PR against **`main`**.

No credentials are needed to open a PR. A maintainer reviews and merges; the live
site rebuilds automatically on merge.

---

### Maintainer note

`npm run dev` is local-only by default. To run the dev server against the **live**
Cloudflare resources (real database/storage — requires `wrangler login`):

```bash
npm run dev:remote
```
