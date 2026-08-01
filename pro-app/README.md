# ImageToURL Pro

The standalone Pro product mounted at `imagetourl.cloud/pro`. Its app folder, Worker, D1 database, R2 bucket, and billing model remain isolated from the free ImageToURL site.

## Resource naming

| Resource | Name |
| --- | --- |
| Folder | `pro-app` |
| Package | `@imagetourl/pro-app` |
| Cloudflare Worker | `imagetourl-pro-app` |
| D1 database | `imagetourl-pro-db` |
| D1 binding | `PRO_DB` |
| Shared identity service | `https://imagetourl.cloud/api/auth/*` |
| Identity service binding | `AUTH_API` → `imagetourl2026` |
| R2 bucket | `imagetourl-pro-storage` |
| R2 binding | `PRO_STORAGE` |
| Session KV namespace | `imagetourl-pro-app-session` |
| Production URL | `https://imagetourl.cloud/pro` |
| Legacy compatibility host | `pro.imagetourl.cloud` via `imagetourl-pro-legacy-router` |

The Pro Worker validates the existing ImageToURL session through the main-domain
authentication API over a Cloudflare service binding. It does not bind to or
query the main identity database.
Pro files, folders, preferences, subscriptions, and usage remain in the separate
Pro resources.

## Production behavior

- One ImageToURL Google account works across the free site and the `/pro` workspace.
- Anonymous dashboard requests stay on the Pro sign-in UI, which starts Google
  OAuth through the trusted main-domain authentication API.
- Authenticated uploads are stored in the dedicated Pro R2 bucket.
- JPG, PNG, GIF, WebP, and AVIF files are signature checked before storage.
- Uploads are limited to 50 MB, 20 uploads per minute, and 50 GB per workspace.
- Remote URL imports are restricted to public HTTP(S) images up to 10 MB.
- Mutating APIs require a same-origin browser request.
- Private assets return `404` unless the owner has a valid shared session.
- Asset delivery supports immutable caching, ETags, and bandwidth accounting.
- The dashboard, folders, preferences, usage, and asset library are D1-backed.

Paddle Billing is configured for the live environment. New signed-in users
receive a Pro preview profile until a verified Paddle webhook provisions a paid
subscription.

The billing flow is intentionally server-led:

1. The authenticated Worker creates a Paddle transaction for an allowed price.
2. The transaction is recorded against the Pro user in D1.
3. Paddle.js opens that exact transaction in a one-page overlay checkout.
4. The Paddle SDK verifies the raw webhook body before any parsing or database
   access. Typed, idempotent handlers mirror customers, subscriptions, and
   completed transactions into D1.
5. A subscription in `active` or `trialing` status grants Pro access. A future
   scheduled cancellation does not revoke access; `paused`, `past_due`, and
   `canceled` do not grant write access under the current product policy.
6. The webhook event ledger and resource timestamps make duplicate and
   out-of-order deliveries convergent. An unmapped paid subscription returns a
   non-2xx response so Paddle retries rather than losing fulfillment.
7. Existing customers manage invoices, payment methods, and cancellation in a
   temporary Paddle customer portal session.

Browser-supplied user IDs or price IDs are never trusted for provisioning.

## Local development

```sh
npm install
npx wrangler d1 migrations apply PRO_DB --local
npm run dev
```

The D1 health check is available at `/pro/api/health`.

## Cloudflare commands

```sh
npm run cf-typegen
npm run check
npx wrangler d1 migrations apply PRO_DB --remote
npm run deploy
```

`npm run deploy` builds the standalone Astro Worker and publishes it to the
`imagetourl.cloud/pro*` routes configured in `wrangler.jsonc`. The old subdomain
remains behind a compatibility Worker so historical file and webhook URLs do
not fail during migration.

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

Paddle sandbox and live credentials, customers, products, and prices are
separate. Production is currently mapped to this live catalog:

- Product: `ImageToURL Pro` (`pro_01kymyp8r0q8dyz28w437p4xgg`)
- Monthly recurring price: USD 4.99 (`pri_01kymyp901jkpahectcbvhv2xk`)
- Annual recurring price: USD 39 (`pri_01kymyp99v8fq5wva28t78cd2h`)
- Storage add-on product: `ImageToURL Pro Storage Pack` (`pro_01kymyp9mc51rbq4qrp0zdvy70`)
- Recurring 50GB pack monthly price: USD 2.99 (`pri_01kymyp9w6j7g5esz8jvtrvjcq`)
- Recurring 50GB pack annual price: USD 24 (`pri_01kymypa4pwy961gejhbxjr14q`)
- Client-side token
- API key with `transaction.write` and `customer_portal_session.write`
- Notification destination:
  `https://imagetourl.cloud/pro/api/webhooks/paddle`
- Events: `customer.created`, `customer.updated`, `subscription.created`,
  `subscription.updated`, `subscription.canceled`, and `transaction.completed`
- Default payment link: `https://imagetourl.cloud/pro/pricing`

The live notification destination is permanent infrastructure and must not be
deleted: `ntfset_01kymypaz3e69y83at3jqdg0j4`. Paddle has approved
`imagetourl.cloud` for checkout.

Add the non-sensitive values to `vars` in `wrangler.jsonc`, then publish them
with Wrangler:

```jsonc
"PADDLE_ENVIRONMENT": "production",
"PADDLE_PRO_MONTHLY_PRICE_ID": "pri_...",
"PADDLE_PRO_ANNUAL_PRICE_ID": "pri_...",
"PADDLE_STORAGE_ADDON_MONTHLY_PRICE_ID": "pri_...",
"PADDLE_STORAGE_ADDON_ANNUAL_PRICE_ID": "pri_..."
```

Store every credential with Wrangler rather than the Cloudflare dashboard:

```sh
npx wrangler secret put PADDLE_CLIENT_TOKEN --name imagetourl-pro-app
npx wrangler secret put PADDLE_API_KEY --name imagetourl-pro-app
npx wrangler secret put PADDLE_NOTIFICATION_WEBHOOK_SECRET --name imagetourl-pro-app
npx wrangler secret list --name imagetourl-pro-app
```

`PADDLE_NOTIFICATION_WEBHOOK_SECRET` is the notification destination signing
secret, not the Paddle API key. The handler also accepts the legacy
`PADDLE_WEBHOOK_SECRET` binding during migration.

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
