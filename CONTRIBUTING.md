# Contributing

Thanks for helping with **imagetourl.cloud**! This guide gets you running the site
locally so you can edit content and open a pull request — **no credentials, no
Cloudflare account, and no `.env` files required.**

## Quick start

```bash
# 1. Use a compatible Node version (22.x; see .nvmrc)
nvm use            # or install Node >= 22.12 yourself

# 2. Install dependencies
npm install

# 3. One-time: create the local database (no login, runs fully offline)
npm run setup

# 4. Start the dev server
npm run dev
```

Open **http://localhost:4321** — the homepage redirects to `/en/`.

That's it. The dev server uses a fully **local** simulation of the database and
storage, so you never log in to Cloudflare and never need any secret keys.

## What you can edit

Almost all visible text lives in plain TypeScript/JSON files you can edit directly —
hot-reload shows your changes instantly:

| What | Where |
| --- | --- |
| Landing / tool page copy (hero, steps, benefits, FAQ, meta) | `src/i18n/landing/<page-key>.ts` |
| Shape of a landing page (the fields you fill in) | `src/i18n/landing/types.ts` |
| Nav, footer, and other UI strings | `src/i18n/translations/{en,es,fr,de,ja,zh-Hans}.json` |
| URL slugs per language | `src/i18n/landing/slugs.ts` |
| Components / layout | `src/components/**` |

For translation rules and conventions, see **`TRANSLATION-GUIDE.md`**.

Supported languages: `en`, `es`, `fr`, `de`, `ja`, `zh-Hans`. Preview a localized
page at e.g. `http://localhost:4321/es/png-to-jpg`.

## What does NOT work locally (and that's expected)

These need production credentials and are not part of content work:

- **Image upload** — fails gracefully (no storage keys locally); the page stays fine.
- **Google login**, **`/admin`**, **`/dashboard`** — login won't complete; admin
  returns 403.
- **Blog posts** — blog content lives in the production database, not in the repo,
  so the blog index/pages render **empty** locally. Don't try to edit blog posts in
  files or in the local database.

## Known cosmetic quirks in dev (not real errors)

- Some font files return 500 in the dev server, so text may fall back to a system
  font. This only happens in `npm run dev`; a real build is unaffected.
- Some image thumbnails (`/img/*`) may not render locally. Harmless.

## Opening a pull request

1. Create a branch (or fork the repo).
2. Commit your changes.
3. Push and open a PR against **`main`**.

No credentials are needed to open a PR. A maintainer reviews and merges; the live
site rebuilds automatically on merge.

---

### Maintainer note

`npm run dev` is local-only by default. To run the dev server against the **live**
Cloudflare resources (real database/storage — requires `wrangler login`), use:

```bash
npm run dev:remote
```
