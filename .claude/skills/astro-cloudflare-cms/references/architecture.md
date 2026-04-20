# Architecture Reference (for when something breaks)

How the pieces of this CMS fit together. Read this when debugging or extending.

## Request lifecycle

```
Browser → Cloudflare Worker → Astro SSR
                ↓
           middleware.ts
                ↓
      Session cookie → getSession(db, token) → locals.user
                ↓
         Route-specific .astro or API route
                ↓
              D1 / R2
                ↓
          Security + cache headers added on response
```

1. **Middleware** runs on every request. It resolves the session from the `session` cookie, sets `locals.user`, and gates `/admin` + `/dashboard` routes by role. Security headers + cache headers are added to the response.
2. **Astro SSR routes** render pages with `export const prerender = false`. They call DB helpers from `src/lib/cms.ts`.
3. **API routes** (`src/pages/api/**/*.ts`) export HTTP methods. Admin routes check `locals.user?.role === 'admin'` before writing to D1.

## Module responsibilities

| Module | What it owns |
|---|---|
| `crypto.ts` | Random token + ID generation, SHA-256 helpers |
| `auth.ts` | Google OAuth URL building, PKCE code challenge, token exchange, userinfo fetch, redirect URI |
| `session.ts` | `createSession`, `getSession` (validates expiry + ban), `deleteSession` |
| `db.ts` | `getDB(locals)` — returns D1 binding |
| `env.ts` | `getEnv(locals)` — returns env vars |
| `r2.ts` | `uploadToR2`, `deleteFromR2` via AWS SigV4 |
| `cms.ts` | Types (Post, Category, Page, ActivityEntry), helpers (slug, readTime, mapPostRow), DB queries (getPublishedPosts, getPostBySlug, getRelatedPosts, getCategories, logActivity) |
| `openrouter.ts` | OpenRouter chat completion wrapper (for translate) |
| `translate.ts` | Bulk translate a post to all locales via Gemini |
| `middleware.ts` | Session resolution, route protection, security headers, cache headers |

## Data flow: creating a post

```
Admin UI (posts/new.astro)
  ↓ fetch POST /api/admin/cms/posts
Admin API (pages/api/admin/cms/posts.ts)
  ↓ validates locals.user.role === 'admin'
  ↓ generates ID, slug (from title if missing), read time
  ↓ INSERT into posts
  ↓ INSERT into activity_log
  ↓ returns { id, slug }
Admin UI
  ↓ redirects to /admin/cms/posts/edit/{id}
```

## Data flow: viewing a published post

```
Browser → /blog/my-post
Middleware → session resolved (optional), route NOT protected
Astro page (pages/blog/[slug].astro)
  ↓ imports BlogPostPage.astro
BlogPostPage
  ↓ getPostBySlug(db, slug) — queries posts JOIN categories WHERE status='published'
  ↓ getRelatedPosts(db, post.relatedSlugs)
  ↓ sets ISR cache headers (CDN-Cache-Control: 10 min + SWR 24h)
  ↓ renders schema.org JSON-LD + HTML
Response
  ↓ Middleware adds security headers + public cache headers
```

Because of ISR, Cloudflare caches the page at the edge for 10 minutes and serves stale up to 24 hours while revalidating. That's why publishing a new post may not appear immediately — users can purge with `?_=timestamp` query param, or you can invalidate via the Cloudflare cache API.

## Data flow: uploading CMS media

```
Admin UI (media.astro) → drag file
  ↓ POST /api/admin/cms/media with FormData
Admin API (pages/api/admin/cms/media.ts)
  ↓ validates admin, file type, file size
  ↓ generateId() for key
  ↓ uploadToR2({ bucket, key: `cms/${folder}/${id}.${ext}`, body, contentType })
  ↓ INSERT into media (r2_key, url, filename, size_bytes, mime_type, folder, uploaded_by)
  ↓ INSERT into activity_log
  ↓ returns { url, id }
Admin UI
  ↓ shows new media in grid
```

TipTap editor's image button uses the same endpoint — uploads then inserts an `<img src="...">` node.

## Session lifecycle

| Moment | What happens |
|---|---|
| User clicks "Sign in" → GET /api/auth/login | Generates state + PKCE verifier, sets temp cookies, redirects to Google |
| Google redirects back → GET /api/auth/callback | Validates state, exchanges code for tokens, upserts user (first user = admin), creates session, sets `session` cookie (30 days, HttpOnly, Secure, SameSite=Lax) |
| Every subsequent request | Middleware reads `session` cookie → `getSession(db, token)` joins sessions+users → sets `locals.user` (or null if expired/banned) |
| User clicks "Sign out" → GET /api/auth/logout | Deletes session row, clears cookie |
| Admin bans a user | `UPDATE users SET is_banned=1` — next request fails `getSession` check because of `if (row.is_banned) return null` |

## Why DB-backed sessions (not JWT)?

Two reasons:
1. **Instant ban enforcement.** JWT would keep granting access until it expires; a stateless pattern makes bans slow. DB check runs on every request — `users.is_banned = 1` immediately invalidates all sessions.
2. **Logout works.** Deleting the row + clearing the cookie means a stolen cookie becomes useless the moment the user logs out. JWT logout requires a blocklist (which is... just a DB).

The trade-off is one D1 query per request. D1 is fast (<5ms edge queries); the trade is worth it.

## Why PKCE?

PKCE (RFC 7636) prevents the authorization code from being useful to anyone who intercepts it — only the holder of the original `code_verifier` can exchange it for a token. Without PKCE, an attacker intercepting the redirect URI could steal the code. This is Google's recommended flow for all OAuth clients, including web apps.

The flow:
1. Client generates `code_verifier` (random 32 bytes, base64url) — stored in HttpOnly cookie
2. Client sends `code_challenge = SHA256(code_verifier)` (base64url) to Google
3. Google includes the challenge in the session, returns auth code
4. Client POSTs the auth code AND `code_verifier` to Google's token endpoint
5. Google verifies SHA256(code_verifier) === code_challenge → exchanges for token

## Why AWS SigV4 instead of `@aws-sdk`?

Workers has tight bundle size limits (1 MB compressed after 4.4.0). `@aws-sdk/client-s3` is huge. The SigV4 implementation in `r2.ts` is ~120 lines, zero deps, fits in Workers easily.

You could use the R2 Workers binding (`env.R2.put(key, body)`) instead — that's lighter still. The SigV4 flow is used because the source site originally needed a credential-based API for external services.

## Why SSR instead of static (prerender)?

- Content lives in D1 and changes independently of deploys. Prerendering would require a deploy to update blog posts.
- ISR (SSR + CDN cache) gets most of the performance of static while keeping dynamic content fresh.
- `locals.user` needs to be resolved per request for personalized nav, which static can't do.

## Debugging map

| Symptom | Check |
|---|---|
| Sign-in redirects to Google then 400 | State mismatch — cookie not set or parsed. Check `Domain=.{{DOMAIN}}` attribute matches the current host. |
| Sign-in succeeds but `locals.user` is null | Middleware timing — make sure middleware runs before the route that reads `locals.user`. The `DB` binding must be available. |
| First user doesn't become admin | `users` table wasn't truly empty at first login. Check `SELECT COUNT(*) FROM users` before login. |
| Admin UI loads but APIs 403 | `locals.user.role !== 'admin'`. Check the user row in D1. |
| Upload succeeds but file URL 404s | R2 bucket doesn't have public access enabled or `R2_PUBLIC_URL` is wrong. |
| TipTap image button does nothing | Check browser console — the fetch to `/api/admin/cms/media` might be erroring. CORS isn't an issue (same origin) but auth might fail if the session cookie isn't being sent. |
| Blog post 404 after publishing | CDN edge cache. Either wait 10 min or request with a cache-bust query param. For a permanent fix, add a cache-purge API call to the publish endpoint. |
| Activity log not logging | `logActivity()` swallows errors. Check D1 for the `activity_log` table and the insert statement. |

## Extending

- **New role** (e.g. `editor`): add to `users.role` values, update middleware checks (`role !== 'admin'` → `!['admin', 'editor'].includes(role)`), update `SessionUser` type.
- **New entity** (e.g. `testimonials`): mirror the posts flow — schema table, CMS type in cms.ts, API route, admin UI page, public rendering.
- **Webhooks on publish**: add to `src/pages/api/admin/cms/posts/[id]/publish.ts` after the `UPDATE posts SET status = 'published'` — `await fetch('https://hooks.example.com/post-published', ...)` with payload.
- **Revision history**: add a `post_revisions` table, insert a row on every update in `posts/[id].ts`. The admin UI can show a history sidebar reading from it.
