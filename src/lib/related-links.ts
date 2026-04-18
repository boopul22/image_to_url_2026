// Programmatic internal-linking module.
// Given a page slug, returns a curated set of 3–5 related slugs for rendering
// in a "Related" section. Taxonomy is explicit so we don't produce accidental
// thin-content cross-linking.

export interface RelatedSlug { href: string; title: string; body: string }

// Page taxonomy: each page belongs to one or more tag groups. The related
// resolver picks slugs from the same groups, de-duped, capped at 5.
type Tag =
  | 'format-conversion'
  | 'url-upload'
  | 'utility'
  | 'pdf'
  | 'heic'
  | 'webp'
  | 'png'
  | 'jpg'
  | 'platform'
  | 'platform-social'
  | 'platform-cms'
  | 'platform-dev'
  | 'comparison'
  | 'alternative'
  | 'api'
  | 'geo-qa';

interface PageMeta { title: string; body: string; tags: Tag[] }

const PAGES: Record<string, PageMeta> = {
  // Cluster A — format pairs
  'png-to-jpg': { title: 'PNG to JPG', body: 'Shrink PNG for email & marketplaces.', tags: ['format-conversion', 'png', 'jpg'] },
  'jpg-to-png': { title: 'JPG to PNG', body: 'Lossless re-encode for edits.', tags: ['format-conversion', 'jpg', 'png'] },
  'webp-to-jpg': { title: 'WebP to JPG', body: 'Fix incompatible files.', tags: ['format-conversion', 'webp', 'jpg'] },
  'webp-to-png': { title: 'WebP to PNG', body: 'Keep transparency.', tags: ['format-conversion', 'webp', 'png'] },
  'png-to-webp': { title: 'PNG to WebP', body: 'Half the size, same look.', tags: ['format-conversion', 'png', 'webp'] },
  'jpg-to-webp': { title: 'JPG to WebP', body: 'Lighter pages.', tags: ['format-conversion', 'jpg', 'webp'] },
  'png-to-pdf': { title: 'PNG to PDF', body: 'Merge PNGs into one PDF.', tags: ['format-conversion', 'png', 'pdf'] },
  'jpg-to-pdf': { title: 'JPG to PDF', body: 'Merge JPGs into one PDF.', tags: ['format-conversion', 'jpg', 'pdf'] },
  'heic-to-jpg': { title: 'HEIC to JPG', body: 'iPhone photos, universally compatible.', tags: ['format-conversion', 'heic', 'jpg'] },
  'heic-to-png': { title: 'HEIC to PNG', body: 'Lossless HEIC conversion.', tags: ['format-conversion', 'heic', 'png'] },
  'heic-to-pdf': { title: 'HEIC to PDF', body: 'iPhone photos to PDF.', tags: ['format-conversion', 'heic', 'pdf'] },

  // URL upload tools
  'png-to-url': { title: 'PNG to URL', body: 'Host PNG, get CDN URL.', tags: ['url-upload', 'png'] },
  'jpg-to-url': { title: 'JPG to URL', body: 'Host JPG, get CDN URL.', tags: ['url-upload', 'jpg'] },
  'webp-to-url': { title: 'WebP to URL', body: 'Host WebP.', tags: ['url-upload', 'webp'] },
  'gif-to-url': { title: 'GIF to URL', body: 'Host animated GIF.', tags: ['url-upload'] },
  'photo-to-url': { title: 'Photo to URL', body: 'Any photo to link.', tags: ['url-upload'] },
  'screenshot-to-url': { title: 'Screenshot to URL', body: 'Screenshot to link.', tags: ['url-upload'] },
  'image-url-generator': { title: 'Image URL Generator', body: 'Generic upload.', tags: ['url-upload'] },
  'bulk-image-upload': { title: 'Bulk Upload', body: 'Many files at once.', tags: ['url-upload'] },

  // Cluster B — utilities
  'image-compressor': { title: 'Image Compressor', body: 'Smaller files, same quality.', tags: ['utility'] },
  'image-resizer': { title: 'Image Resizer', body: 'Exact pixels or percent.', tags: ['utility'] },
  'image-to-base64': { title: 'Image to Base64', body: 'Encode as data URI.', tags: ['utility'] },
  'base64-to-image': { title: 'Base64 to Image', body: 'Decode data URI.', tags: ['utility'] },
  'favicon-generator': { title: 'Favicon Generator', body: 'Every size at once.', tags: ['utility'] },

  // Cluster C — comparisons
  'imgur-alternative': { title: 'Imgur Alternative', body: 'Permanent URLs.', tags: ['alternative', 'comparison'] },
  'imgbb-alternative': { title: 'ImgBB Alternative', body: 'Ad-free hosting.', tags: ['alternative', 'comparison'] },
  'cloudinary-alternative': { title: 'Cloudinary Alternative', body: 'For teams who just need URLs.', tags: ['alternative', 'comparison'] },
  'postimages-alternative': { title: 'Postimages Alternative', body: 'No ads, faster CDN.', tags: ['alternative', 'comparison'] },
  'google-photos-direct-link': { title: 'Google Photos Direct Link', body: 'Real direct URLs.', tags: ['comparison'] },
  'dropbox-direct-image-link': { title: 'Dropbox Direct Link', body: 'Stable embeds.', tags: ['comparison'] },
  'imagetourl-vs-imgur': { title: 'vs Imgur', body: 'Permanence matters.', tags: ['comparison'] },
  'imagetourl-vs-imgbb': { title: 'vs ImgBB', body: 'Quiet upgrades.', tags: ['comparison'] },
  'imagetourl-vs-cloudinary': { title: 'vs Cloudinary', body: 'Honest tradeoffs.', tags: ['comparison'] },
  'imgur-vs-imgbb': { title: 'Imgur vs ImgBB', body: 'Compare the two.', tags: ['comparison'] },

  // Cluster D — platforms
  'image-hosting-for-reddit': { title: 'Reddit', body: 'Embeds that survive.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-twitter': { title: 'X / Twitter', body: 'Link cards.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-instagram': { title: 'Instagram', body: 'Bio-link assets.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-pinterest': { title: 'Pinterest', body: 'Pin-friendly.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-substack': { title: 'Substack', body: 'Faster newsletters.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-medium': { title: 'Medium', body: 'Cross-post friendly.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-linkedin': { title: 'LinkedIn', body: 'Consistent cards.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-webflow': { title: 'Webflow', body: 'CMS-friendly.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-squarespace': { title: 'Squarespace', body: 'Code blocks & email.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-wix': { title: 'Wix', body: 'Velo & HTML.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-framer': { title: 'Framer', body: 'External CMS items.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-stack-overflow': { title: 'Stack Overflow', body: 'Screenshots that stay.', tags: ['platform', 'platform-dev'] },
  'image-hosting-for-markdown': { title: 'Markdown', body: 'Every renderer.', tags: ['platform', 'platform-dev'] },
  'image-hosting-for-nextjs': { title: 'Next.js', body: 'next/image patterns.', tags: ['platform', 'platform-dev'] },
  'image-hosting-for-jira': { title: 'Jira', body: 'Repro screenshots.', tags: ['platform', 'platform-dev'] },
  'image-hosting-for-wordpress': { title: 'WordPress', body: 'WP integration.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-shopify': { title: 'Shopify', body: 'Commerce assets.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-github-readme': { title: 'GitHub README', body: 'Repo screenshots.', tags: ['platform', 'platform-dev'] },
  'image-hosting-for-notion': { title: 'Notion', body: 'Permanent Notion links.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-discord': { title: 'Discord', body: 'Discord embeds.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-ebay': { title: 'eBay', body: 'Listing photos.', tags: ['platform'] },

  // Cluster E — dev / API
  'image-upload-api': { title: 'Upload API', body: 'REST endpoint.', tags: ['api'] },
  'image-hosting-rest-api': { title: 'REST API Reference', body: 'Full endpoint docs.', tags: ['api'] },
  'image-hosting-api-python': { title: 'Python', body: 'Python requests snippet.', tags: ['api', 'platform-dev'] },
  'image-hosting-api-nodejs': { title: 'Node.js', body: 'Node fetch snippet.', tags: ['api', 'platform-dev'] },
  'image-hosting-api-php': { title: 'PHP', body: 'PHP curl snippet.', tags: ['api', 'platform-dev'] },
  'image-hosting-api-curl': { title: 'cURL', body: 'Shell examples.', tags: ['api', 'platform-dev'] },
  'image-upload-zapier': { title: 'Zapier', body: 'No-code webhook.', tags: ['api'] },
  'image-upload-make': { title: 'Make.com', body: 'HTTP module.', tags: ['api'] },
  'image-upload-n8n': { title: 'n8n', body: 'Self-hosted flow.', tags: ['api'] },

  // Cluster F — GEO Q&A
  'how-to-get-direct-url-for-image': { title: 'How to get a direct URL', body: 'The 10-second method.', tags: ['geo-qa'] },
  'how-to-share-image-as-link': { title: 'Share image as link', body: 'Universal method.', tags: ['geo-qa'] },
  'how-to-embed-image-in-email': { title: 'Embed in email', body: 'Inline vs linked.', tags: ['geo-qa'] },
  'what-is-image-hotlinking': { title: 'What is hotlinking', body: 'Defined.', tags: ['geo-qa'] },
  'how-to-host-image-for-free': { title: 'Host for free', body: '2026 guide.', tags: ['geo-qa'] },
  'how-long-does-imagetourl-store-images': { title: 'Retention policy', body: 'Store time explained.', tags: ['geo-qa'] },
};

const SITE_ROOT = '';

/**
 * Return 3–5 related slugs for the given page. Prefers same-tag matches, with
 * a bias toward format-conversion pairs that share a format (png-to-jpg ↔ jpg-to-png).
 */
export function relatedFor(slug: string, max = 4): RelatedSlug[] {
  const self = PAGES[slug];
  if (!self) return [];

  // Score every other page by shared-tag count
  const scored: { slug: string; score: number }[] = [];
  for (const [s, meta] of Object.entries(PAGES)) {
    if (s === slug) continue;
    const overlap = meta.tags.filter(t => self.tags.includes(t)).length;
    if (overlap === 0) continue;
    scored.push({ slug: s, score: overlap });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, max).map(({ slug: s }) => {
    const m = PAGES[s];
    return { href: `${SITE_ROOT}/${s}`, title: m.title, body: m.body };
  });
}
