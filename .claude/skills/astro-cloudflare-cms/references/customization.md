# Per-Site Customization

Every spot the source site (`imagetourl.cloud`) bleeds into the skill's code, and how to replace it.

## Hardcoded domain / site name

Run `grep -r 'imagetourl' src/` after copying — every hit needs a replacement. The complete list:

| File | What to change |
|---|---|
| `src/lib/auth.ts` | `getRedirectUri()` prod branch — replace `imagetourl.cloud` with target domain |
| `src/pages/api/auth/login.ts` | Cookie `Domain=.imagetourl.cloud` → `.{{DOMAIN}}` |
| `src/pages/api/auth/callback.ts` | Same cookie domain |
| `src/middleware.ts` / `middleware.i18n.ts` | CSP `img-src` allowlist (`https://imagetourl.cloud`). Also in the i18n version, the dev-proxy `cdn.imagetourl.cloud` → `cdn.{{DOMAIN}}` |
| `src/lib/openrouter.ts` | `HTTP-Referer` header (used as app identifier by OpenRouter). Set to `https://{{DOMAIN}}` |
| `src/components/pages/BlogPostPage.astro` | `@id` fields in the BlogPosting schema (`imagetourl.cloud/#organization`, `imagetourl.cloud/blog/...`) → `{{DOMAIN}}` |
| `src/pages/p/[slug].astro` | Site name in `<Layout title>` → `{{SITE_NAME}}` |
| `src/pages/admin/cms/**/*.astro` | Page titles show "ImageToURL CMS" → `{{SITE_NAME}} CMS` |
| `src/lib/schemas/cms-schema.sql` | Header comment referencing `imagetourl-db` |
| `src/lib/translate.ts` | Prompt text mentions "imagetourl.cloud" context — update to target site's topic |

Tip: use `find src -type f \( -name '*.ts' -o -name '*.astro' -o -name '*.sql' \) -exec sed -i '' 's/imagetourl\.cloud/{{DOMAIN}}/g' {} +` (macOS) or `sed -i 's/.../.../g'` (Linux). But **review each hit first** — CSP and prompt text need judgment.

## Design system (colors, fonts, shadows)

The admin UI and blog rendering use Material Design 3 color tokens as Tailwind classes:

- `primary`, `secondary`, `tertiary` + variants (`-fixed`, `-container`, `-container-low`, `-container-lowest`)
- `surface`, `surface-container`, `surface-container-lowest`, `surface-container-highest`
- `on-surface`, `on-surface-variant`, `outline`, `outline-variant`
- `error`, `error-container`, `on-error`, `on-error-container`

These resolve to CSS variables defined in the source site's `src/styles/global.css`. The target site must either:

1. Copy those CSS variables over (simplest).
2. Use different Tailwind tokens and find-replace the class names across the admin + blog files.
3. Use a MD3-based color palette (Tailwind plugins exist for this).

Fonts used:
- `font-headline` (serif, black weight, italic for hero text)
- `font-label` (uppercase, bold, wide letter-spacing)
- `font-body` (plain sans-serif)

These are defined in Tailwind config. Either (a) add the same font families to `tailwind.config.js` or (b) use the target site's font classes and find-replace.

Custom utilities used:
- `hard-shadow` — a 4px offset solid shadow (imagetourl uses a brutalist style). Defined in `global.css`.
- `material-symbols-outlined` — Material Symbols font, loaded from Google Fonts in Layout.astro.

If the target site has a completely different design system, the simplest path is:
- Keep the admin UI unchanged (functional; nobody sees it but admins)
- Rewrite `BlogPage.astro` and `BlogPostPage.astro` from scratch using the target's component library, keeping only the data-fetching + schema markup blocks

## Blog component adaptation checklist

When porting `BlogPostPage.astro` to a target site:

- [ ] Keep the `getPostBySlug` / `getPostBySlugLocalized` data fetch
- [ ] Keep the `ISR` cache header
- [ ] Keep the `BlogPosting` + `FAQPage` JSON-LD schema blocks (critical for SEO)
- [ ] Keep the HTML-vs-JSON content detection (`post.htmlContent ? set:html : render structured`)
- [ ] Keep the related posts fetch (`getRelatedPosts(db, post.relatedSlugs)`)
- [ ] Replace `<Layout>`, `<Nav>`, `<Footer>` with target site components
- [ ] Replace `t(locale, ...)` calls with plain strings if single-language
- [ ] Replace the Tailwind classes to match the target site's design

## Admin UI theming

The admin pages are functional but styled with MD3 tokens. If the target site uses a different design system and you want to theme the admin too:

- Most semantic classes (`bg-surface-container`, `border-on-surface`, `hard-shadow`) are used repeatedly. A mass find-replace to equivalent target classes is feasible.
- The TipTap editor toolbar is hardcoded Tailwind — easiest to leave alone.
- The icons are Material Symbols. If the target uses a different icon system, find-replace the icon names (e.g. `<span class="material-symbols-outlined">edit</span>` → your icon component).

## Categories

Migration `002_seed_categories.sql` seeds 8 image-hosting categories. For a new site:

1. Open the file.
2. Rewrite the INSERT rows for the target topic (e.g. dev blog: "Tutorials", "Opinion", "Deep Dives", "Tools").
3. Run the migration — or skip it and let the admin create categories via the UI.

## Activity log labels

`cms.ts` logs actions like `create_post`, `publish_post`, etc. If you want the admin UI to show pretty labels ("Published a post" instead of `publish_post`), that mapping lives in `src/pages/admin/cms/index.astro` — the activity feed renderer. Update as needed.

## SEO metadata defaults

`src/layouts/Layout.astro` (not bundled — the target site's own) should accept `title`, `description`, `ogImage`, `schema`, `noindex`, `breadcrumbs`, `lastModified`. The bundled blog components pass all these. If the target Layout has a different prop shape, adjust the call sites.

## What NOT to customize

- `src/lib/crypto.ts` — it's pure crypto. Don't change.
- `src/lib/session.ts` — session duration is 30 days; fine to tune but don't change the token generation.
- `src/lib/r2.ts` — AWS SigV4 implementation. Leave alone.
- `src/lib/auth.ts` PKCE flow — only change the redirect URI function.
- The `users.role` check (`admin` literal) — if you want more roles, change the schema *and* every `role !== 'admin'` check in middleware + API routes simultaneously.
