# Google OAuth 2.0 Setup

The CMS uses Google Sign-In as its only auth provider. This is a manual setup in the Google Cloud Console that needs to happen once per environment (or once for both dev + prod if you list both redirect URIs on the same client).

## Steps

1. Go to <https://console.cloud.google.com/>.
2. Create a new project (or reuse one). Name it after the site.
3. Enable the **Google+ API / People API** — needed for the `userinfo` endpoint.
   - APIs & Services → Library → search "People API" → Enable.
4. Configure OAuth consent screen:
   - User Type: **External** (unless this is a Google Workspace internal app).
   - App name: the site's name.
   - User support email: user's email.
   - Developer contact: user's email.
   - Scopes: `openid`, `email`, `profile` — nothing more.
   - Test users: add the user's email if the app is still in testing mode (it can stay in testing for personal sites; no verification needed).
5. Create credentials:
   - APIs & Services → Credentials → Create Credentials → **OAuth client ID**.
   - Application type: **Web application**.
   - Name: anything.
   - **Authorized JavaScript origins:** `http://localhost:4321`, `https://{{DOMAIN}}`.
   - **Authorized redirect URIs:** `http://localhost:4321/api/auth/callback`, `https://{{DOMAIN}}/api/auth/callback`.
6. Copy the **Client ID** and **Client secret**. These go into:
   - `.dev.vars` (local): `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
   - `wrangler secret put GOOGLE_CLIENT_ID` / `put GOOGLE_CLIENT_SECRET` (prod)

## Where the redirect URI lives in code

`src/lib/auth.ts` has `getRedirectUri(isDev)`:

```ts
export function getRedirectUri(isDev: boolean): string {
  if (isDev) return 'http://localhost:4321/api/auth/callback';
  return 'https://{{DOMAIN}}/api/auth/callback';
}
```

Update this to the target domain. Both URIs must match what's registered in Google Cloud or auth will fail with `redirect_uri_mismatch`.

## Troubleshooting

- **`redirect_uri_mismatch`**: exact match required, including protocol and trailing slash. No trailing slash on the callback path.
- **`invalid_grant` on token exchange**: usually a clock skew or the authorization code was already used. The code is single-use — refresh the login page and try again.
- **Stuck on "This app isn't verified"**: happens for external consent screens not yet verified by Google. Click "Advanced → Go to {site} (unsafe)" during testing. For production, either (a) submit for verification (takes a few days) or (b) keep the app internal to your Google Workspace.
- **Missing `picture` claim**: the `profile` scope must be requested (already is).
- **First user not getting admin**: check `users` table has exactly zero rows before the first login. If migration seeded an admin, the COUNT check won't trigger.
