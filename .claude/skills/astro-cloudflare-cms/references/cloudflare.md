# Cloudflare Setup (D1, R2, Wrangler, Secrets)

Everything here assumes the user has a Cloudflare account and `wrangler` installed (`npm install -D wrangler` + `npx wrangler login`).

## D1 (SQLite database)

```bash
# Create the DB
npx wrangler d1 create {{D1_DATABASE_NAME}}
```

Wrangler prints a `database_id`. Paste it into `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "{{D1_DATABASE_NAME}}"
database_id = "PASTED_UUID_HERE"
remote = true
```

`remote = true` means `astro dev` and `wrangler` both talk to the production D1. This keeps local dev honest (no divergence between a local sqlite replica and prod). If you want local isolation, set `remote = false` and use `--local` on `d1 execute`.

### Running schema + migrations

```bash
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=src/lib/schemas/db-schema.sql --remote
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=src/lib/schemas/cms-schema.sql --remote
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/001_add_faq_items.sql --remote
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/002_seed_categories.sql --remote
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/004_add_image_expiration.sql --remote
# Multi-locale only:
npx wrangler d1 execute {{D1_DATABASE_NAME}} --file=migrations/006_post_translations.sql --remote
```

**Migration 002 seeds sample categories specific to image hosting** — rewrite that file for the target site's topics before running it, or skip and create categories via the admin UI.

### Inspecting the DB

```bash
# Any SQL
npx wrangler d1 execute {{D1_DATABASE_NAME}} --remote --command="SELECT * FROM users"

# List tables
npx wrangler d1 execute {{D1_DATABASE_NAME}} --remote --command="SELECT name FROM sqlite_master WHERE type='table'"

# Interactive shell (useful for exploration)
npx wrangler d1 execute {{D1_DATABASE_NAME}} --remote --command=".tables"
```

### Backing up

D1 has built-in export:

```bash
npx wrangler d1 export {{D1_DATABASE_NAME}} --output=backup.sql --remote
```

## R2 (object storage)

```bash
npx wrangler r2 bucket create {{R2_BUCKET_NAME}}
```

### Public access

The CMS expects public URLs for media. Two options:

1. **Default R2 public URL** (easiest): Cloudflare dashboard → R2 → select bucket → Settings → "R2.dev subdomain" → enable. URL looks like `https://pub-abc123.r2.dev`. Set `R2_PUBLIC_URL=https://pub-abc123.r2.dev`.
2. **Custom domain** (recommended for production): Dashboard → R2 → bucket → Settings → Custom Domains → add `cdn.{{DOMAIN}}`. Cloudflare auto-provisions a cert. Set `R2_PUBLIC_URL=https://cdn.{{DOMAIN}}`.

### R2 API token (for the SigV4 upload path)

The bundled `src/lib/r2.ts` uses the S3-compatible API, which needs an **access key + secret**, not the Workers binding.

1. Dashboard → R2 → "Manage R2 API Tokens" → Create API Token.
2. Permissions: **Object Read & Write**.
3. Bucket scope: the specific bucket (`{{R2_BUCKET_NAME}}`) — don't grant account-wide.
4. TTL: Forever (or longer).
5. Copy **Access Key ID** and **Secret Access Key** — shown once.

Set in env:
- `R2_ACCESS_KEY_ID=...`
- `R2_SECRET_ACCESS_KEY=...`
- `CLOUDFLARE_ACCOUNT_ID=...` (from dashboard home page → right sidebar)

### Why both the binding AND the API token?

The skill uses the Workers R2 binding for reads (faster, no egress cost) and the S3 SigV4 flow for writes. You could use the binding for writes too — just less egress-efficient and requires replacing `uploadToR2` calls with `env.R2.put(key, body, { httpMetadata: {...} })`. Stick with SigV4 unless there's a reason.

## Secrets

`.dev.vars` is for local dev. Production secrets are pushed separately:

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

Each opens a prompt for the value. Never paste secrets on the CLI.

## Custom domain

After `wrangler deploy`:

1. Dashboard → Workers & Pages → your worker → Settings → Triggers → Add Custom Domain.
2. Enter `{{DOMAIN}}` (and/or `www.{{DOMAIN}}`).
3. Cloudflare auto-creates the route and cert.

For the session cookie `Domain=.{{DOMAIN}}` to work across `www.` and apex, set the cookie domain in `src/pages/api/auth/login.ts` and `src/pages/api/auth/callback.ts`.

## Deployment

```bash
npx wrangler deploy
```

The first deploy creates the worker at `{{PROJECT_NAME}}.{{USERNAME}}.workers.dev`. Custom domain attaches afterward.

## Gotchas

- **`Cannot find module 'cloudflare:workers'`** during `astro build`: means the Cloudflare adapter isn't installed. `npm install @astrojs/cloudflare`.
- **`D1_ERROR: no such table`**: schema wasn't applied to `--remote`. Confirm you used `--remote` and the correct DB name.
- **`prerender` warnings**: every API route and SSR page must have `export const prerender = false` at the top. Astro 6+ defaults to prerendering.
- **CORS on R2 uploads via the browser**: only applies if uploading client-direct. The bundled flow uploads server-side, so no CORS config needed.
- **Slow cold starts**: normal for Workers. The CMS has no warmup requirement.
