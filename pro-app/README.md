# ImageToURL Pro

The standalone Pro product for `pro.imagetourl.cloud`. It is deliberately isolated from the free ImageToURL site so the product, infrastructure, and billing model can evolve independently.

## Resource naming

| Resource | Name |
| --- | --- |
| Folder | `pro-app` |
| Package | `@imagetourl/pro-app` |
| Cloudflare Worker | `imagetourl-pro-app` |
| D1 database | `imagetourl-pro-db` |
| D1 binding | `PRO_DB` |
| Shared identity database | `imagetourl-db` |
| Identity binding | `AUTH_DB` |
| R2 bucket | `imagetourl-pro-storage` |
| R2 binding | `PRO_STORAGE` |
| Session KV namespace | `imagetourl-pro-app-session` |
| Production hostname | `pro.imagetourl.cloud` |

The shared identity binding is used only to validate the existing ImageToURL
session. Pro files, folders, preferences, subscriptions, and usage remain in the
separate Pro resources.

## Production behavior

- One ImageToURL Google account works across the main and Pro subdomains.
- Anonymous dashboard requests return to the trusted main-site login.
- Authenticated uploads are stored in the dedicated Pro R2 bucket.
- JPG, PNG, GIF, WebP, and AVIF files are signature checked before storage.
- Uploads are limited to 50 MB, 20 uploads per minute, and 50 GB per workspace.
- Remote URL imports are restricted to public HTTP(S) images up to 10 MB.
- Mutating APIs require a same-origin browser request.
- Private assets return `404` unless the owner has a valid shared session.
- Asset delivery supports immutable caching, ETags, and bandwidth accounting.
- The dashboard, folders, preferences, usage, and asset library are D1-backed.

Paddle Billing is integrated but remains safely disabled until its Cloudflare
configuration is supplied. New signed-in users receive a Pro preview profile
until a verified Paddle webhook provisions a paid subscription.

The billing flow is intentionally server-led:

1. The authenticated Worker creates a Paddle transaction for an allowed price.
2. The transaction is recorded against the Pro user in D1.
3. Paddle.js opens that exact transaction in a one-page overlay checkout.
4. A signature-verified Paddle webhook matches the resulting subscription to
   the recorded transaction before granting the Pro entitlement.
5. Existing customers manage invoices, payment methods, and cancellation in a
   temporary Paddle customer portal session.

Browser-supplied user IDs or price IDs are never trusted for provisioning.

## Local development

```sh
npm install
npx wrangler d1 migrations apply PRO_DB --local
npm run dev
```

The D1 health check is available at `/api/health`.

## Cloudflare commands

```sh
npm run cf-typegen
npm run check
npx wrangler d1 migrations apply PRO_DB --remote
npm run deploy
```

`npm run deploy` builds the standalone Astro Worker and publishes it to the
`pro.imagetourl.cloud` custom domain configured in `wrangler.jsonc`.

## Cloudflare-only infrastructure policy

All production configuration is managed with Wrangler. Do not create bindings,
variables, or secrets manually in the Cloudflare dashboard.

- Non-sensitive environment variables belong in `vars` in `wrangler.jsonc` and
  are published by `npm run deploy`.
- Sensitive values must be uploaded with
  `npx wrangler secret put SECRET_NAME --name imagetourl-pro-app`.
- Inspect encrypted secret names with
  `npx wrangler secret list --name imagetourl-pro-app`.
- D1, KV, R2, Queues, service bindings, and custom domains are created with
  their corresponding Wrangler commands and declared in `wrangler.jsonc`.
- Local-only values belong in `.dev.vars`, which is ignored by Git. Never place
  a production secret in `wrangler.jsonc`, `.env`, or source code.

This Cloudflare login has access to more than one account. If Wrangler requests
an account in a non-interactive command, run it with:

```sh
CLOUDFLARE_ACCOUNT_ID=ab54ca2d01df4886aa0c3f240ace806d npx wrangler <command>
```

## Paddle Billing configuration

Start in Paddle sandbox and complete a test subscription before switching to
live. Paddle sandbox and live credentials, customers, products, and prices are
separate.

The sandbox catalog currently uses:

- Product: `ImageToURL Pro` (`pro_01kymjd52929gdxfr3hxcp5gbf`)
- Monthly recurring price: USD 4.99 (`pri_01kymq9gw78c1ahdekbwbjhvms`)
- Annual recurring price: USD 39 (`pri_01kymqdabt3mxtwrsk82wvt1f3`)
- Client-side token
- API key with `transaction.write` and `customer_portal_session.write`
- Notification destination:
  `https://pro.imagetourl.cloud/api/webhooks/paddle`
- Events: `subscription.created`, `subscription.updated`, and
  `subscription.canceled`
- Default payment link: `https://pro.imagetourl.cloud/?billing=checkout`

For live checkout, Paddle must approve `pro.imagetourl.cloud`.

Add the non-sensitive values to `vars` in `wrangler.jsonc`, then publish them
with Wrangler:

```jsonc
"PADDLE_ENVIRONMENT": "sandbox",
"PADDLE_PRO_MONTHLY_PRICE_ID": "pri_...",
"PADDLE_PRO_ANNUAL_PRICE_ID": "pri_..."
```

Store every credential with Wrangler rather than the Cloudflare dashboard:

```sh
npx wrangler secret put PADDLE_CLIENT_TOKEN --name imagetourl-pro-app
npx wrangler secret put PADDLE_API_KEY --name imagetourl-pro-app
npx wrangler secret put PADDLE_WEBHOOK_SECRET --name imagetourl-pro-app
npx wrangler secret list --name imagetourl-pro-app
```

The client-side token is safe to publish according to Paddle, but it is still
managed as a Cloudflare secret here to keep all credentials in one operational
workflow.

Apply the Paddle schema and deploy through Wrangler:

```sh
npx wrangler d1 migrations apply PRO_DB --remote
npm run check
npm run deploy
```

Never use live credentials with sandbox price IDs, or sandbox credentials with
live price IDs.
