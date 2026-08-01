# ImageToURL Pro legacy router

This Worker keeps `pro.imagetourl.cloud` backward-compatible after the Pro app
moved to `https://imagetourl.cloud/pro`.

- Browser documents permanently redirect to the matching main-domain `/pro` URL.
- Historical file URLs, API calls, and Paddle webhook requests are proxied through
  the `PRO_APP` service binding so they do not depend on an external redirect.
- The Worker has no D1, R2, or secret bindings of its own.

Deploy with Wrangler from the repository root:

```sh
npx wrangler deploy --config pro-legacy-router/wrangler.jsonc
```
