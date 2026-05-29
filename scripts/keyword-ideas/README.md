# Keyword ideas (Google Keyword Planner via Google Ads API)

Pulls keyword ideas — avg monthly searches, competition, top-of-page bids — using the
Google Ads API `GenerateKeywordIdeas` endpoint. English (US) by default. Seeds come from
`seeds.json` (a keyword list + your site URL).

> There is no standalone "Keyword Planner API" — the data is served by the Google Ads API.

## One-time setup

### 1. Developer token (the only real wait)
1. Sign in to your **Google Ads** account → **Tools → API Center**.
2. Copy the **Developer token**. New tokens start at **Test access**, which **cannot**
   return real Keyword Planner data — apply for **Basic access** (usually approved in 1–3 days).
3. Put it in `.env` → `GOOGLE_ADS_DEVELOPER_TOKEN`.

### 2. Customer ID
- The 10-digit ID at the top-right of the Google Ads UI (e.g. `123-456-7890`).
- `.env` → `GOOGLE_ADS_CUSTOMER_ID` (dashes are fine).
- If that account lives under a manager (MCC) account, also set `GOOGLE_ADS_LOGIN_CUSTOMER_ID`.

### 3. Enable the API in your existing GCP project
- Console → **APIs & Services → Library → Google Ads API → Enable**
  (same project as your CMS OAuth client — reusing `GOOGLE_CLIENT_ID`/`SECRET`).

### 4. Refresh token
1. GCP → **Credentials** → your OAuth client → add redirect URI
   `http://localhost:4477/oauth2callback`
   *(or create a "Desktop app" OAuth client and swap its id/secret into `.env`).*
2. Run:
   ```bash
   npm run kw:auth
   ```
3. Approve consent in the browser, then paste the printed
   `GOOGLE_ADS_REFRESH_TOKEN=...` into `.env`.

## Run

```bash
npm run kw:ideas                          # keywords + URL (seeds.json)
npm run kw:ideas -- --mode keywords       # keyword seeds only
npm run kw:ideas -- --mode url            # URL seed only
npm run kw:ideas -- --kw "heic to url,svg to url,base64 to image"
```

Output → `scripts/keyword-ideas/output/ideas-en-<mode>.{json,csv}`, plus a top-25 table
printed to the console. Edit `seeds.json` to change the seed list (max 20 keywords/request).

## Notes
- Without ad spend, Google may return **bucketed** monthly-search ranges rather than exact
  numbers — still fine for relative comparison.
- `locales.mjs` already maps all 28 site locales for later multi-market runs
  (`--locale es`, etc.); English is the focus for now.
- All credentials live in `.env` (git-ignored) — nothing is committed.
