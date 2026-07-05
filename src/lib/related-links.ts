// Programmatic internal-linking module.
// Given a landing page key, returns a curated set of related registered pages
// for rendering in a "More image to URL tools" section. Taxonomy is explicit so
// we don't produce accidental thin-content cross-linking.

import type { PageKey } from '../i18n/landing/registry';

export interface RelatedPage { pageKey: PageKey; title: string; body: string }

// Page taxonomy: each page belongs to one or more tag groups. The related
// resolver picks pages from the same groups, de-duped, capped at 6.
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
  | 'alternative';

interface PageMeta { title: string; body: string; tags: Tag[] }

const PAGES: Record<PageKey, PageMeta> = {
  // Head terms and URL/link variants
  'image-to-url': { title: 'Image to URL', body: 'Upload any image and get a direct link.', tags: ['url-upload'] },
  'image-to-url-converter': { title: 'Image to URL Converter', body: 'Convert image files into shareable URLs.', tags: ['url-upload'] },
  'image-to-link': { title: 'Image to Link', body: 'Turn a photo into a paste-ready link.', tags: ['url-upload'] },
  'image-embed-code-generator': { title: 'Image Embed Code Generator', body: 'Generate HTML and Markdown embed snippets.', tags: ['url-upload', 'platform-dev'] },
  'image-url-for-chatgpt': { title: 'Image URL for ChatGPT', body: 'Create URLs that work in AI prompts.', tags: ['url-upload', 'platform-dev'] },
  'image-to-url-for-whatsapp': { title: 'Image to URL for WhatsApp', body: 'Share images as clean WhatsApp links.', tags: ['url-upload', 'platform-social'] },
  'image-to-url-for-html': { title: 'Image to URL for HTML', body: 'Use direct image links in HTML.', tags: ['url-upload', 'platform-dev'] },
  'image-to-url-vercel': { title: 'Image to URL for Vercel', body: 'Host images for Vercel apps.', tags: ['url-upload', 'platform-dev'] },

  // Format converters
  'png-to-jpg': { title: 'PNG to JPG', body: 'Shrink PNG for email and marketplaces.', tags: ['format-conversion', 'png', 'jpg'] },
  'jpg-to-png': { title: 'JPG to PNG', body: 'Lossless re-encode for edits.', tags: ['format-conversion', 'jpg', 'png'] },
  'convert-to-jpg': { title: 'Convert to JPG', body: 'Convert many formats into JPG.', tags: ['format-conversion', 'jpg'] },
  'jpeg-to-jpg': { title: 'JPEG to JPG', body: 'Normalize JPEG extensions.', tags: ['format-conversion', 'jpg'] },
  'jfif-to-jpg': { title: 'JFIF to JPG', body: 'Fix JFIF files for apps and forms.', tags: ['format-conversion', 'jpg'] },
  'jpg-to-jpeg': { title: 'JPG to JPEG', body: 'Rename and re-export JPG as JPEG.', tags: ['format-conversion', 'jpg'] },
  'avif-to-jpg': { title: 'AVIF to JPG', body: 'Convert modern AVIF files to JPG.', tags: ['format-conversion', 'jpg'] },
  'tiff-to-jpg': { title: 'TIFF to JPG', body: 'Convert large TIFF images to JPG.', tags: ['format-conversion', 'jpg'] },
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
  'free-image-hosting': { title: 'Free Image Hosting', body: 'Upload and host images for free.', tags: ['url-upload'] },
  'free-image-cdn': { title: 'Free Image CDN', body: 'Serve images through a fast CDN.', tags: ['url-upload'] },
  'ai-image-hosting': { title: 'AI Image Hosting', body: 'Host images for AI workflows.', tags: ['url-upload'] },
  'anonymous-image-upload': { title: 'Anonymous Image Upload', body: 'Upload without creating an account.', tags: ['url-upload'] },
  'direct-image-link': { title: 'Direct Image Link', body: 'Get a direct image file URL.', tags: ['url-upload'] },
  'permanent-image-hosting': { title: 'Permanent Image Hosting', body: 'Keep important image links stable.', tags: ['url-upload'] },
  'mp3-to-url': { title: 'MP3 to URL', body: 'Upload audio and get a direct link.', tags: ['url-upload'] },

  // Utilities
  'image-compressor': { title: 'Image Compressor', body: 'Smaller files, same quality.', tags: ['utility'] },
  'image-resizer': { title: 'Image Resizer', body: 'Exact pixels or percent.', tags: ['utility'] },
  'image-to-base64': { title: 'Image to Base64', body: 'Encode as data URI.', tags: ['utility'] },
  'base64-to-image': { title: 'Base64 to Image', body: 'Decode data URI.', tags: ['utility'] },
  'favicon-generator': { title: 'Favicon Generator', body: 'Every size at once.', tags: ['utility'] },

  // Comparisons
  'imgur-alternative': { title: 'Imgur Alternative', body: 'Permanent URLs.', tags: ['alternative', 'comparison'] },
  'imgbb-alternative': { title: 'ImgBB Alternative', body: 'Ad-free hosting.', tags: ['alternative', 'comparison'] },
  'cloudinary-alternative': { title: 'Cloudinary Alternative', body: 'For teams who just need URLs.', tags: ['alternative', 'comparison'] },

  // Platforms
  'image-hosting-for-wordpress': { title: 'WordPress', body: 'WP integration.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-discord': { title: 'Discord', body: 'Discord embeds.', tags: ['platform', 'platform-social'] },
  'image-hosting-for-ebay': { title: 'eBay', body: 'Listing photos.', tags: ['platform'] },
  'image-hosting-for-email-signatures': { title: 'Email Signatures', body: 'Hosted signature images.', tags: ['platform'] },
  'image-hosting-for-forums': { title: 'Forums', body: 'BBCode and direct links.', tags: ['platform'] },
  'image-hosting-for-github-readme': { title: 'GitHub README', body: 'Repo screenshots.', tags: ['platform', 'platform-dev'] },
  'image-hosting-for-google-forms': { title: 'Google Forms', body: 'Image URLs for forms.', tags: ['platform'] },
  'image-hosting-for-google-sheets': { title: 'Google Sheets', body: 'Use image URLs in sheets.', tags: ['platform'] },
  'image-hosting-for-newsletters': { title: 'Newsletters', body: 'Stable images for email campaigns.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-notion': { title: 'Notion', body: 'Permanent Notion links.', tags: ['platform', 'platform-cms'] },
  'image-hosting-for-shopify': { title: 'Shopify', body: 'Commerce assets.', tags: ['platform', 'platform-cms'] },

  // Company and policy pages still need outgoing internal discovery links.
  'about': { title: 'Image to URL', body: 'Upload any image and get a direct link.', tags: ['url-upload'] },
  'contact': { title: 'Free Image Hosting', body: 'Upload and host images for free.', tags: ['url-upload'] },
  'content-guidelines': { title: 'Direct Image Link', body: 'Get a direct image file URL.', tags: ['url-upload'] },
};

/**
 * Return related pages for the given page. Prefers same-tag matches, with a
 * bias toward format-conversion pairs that share a format.
 */
export function relatedFor(pageKey: PageKey, max = 6): RelatedPage[] {
  const self = PAGES[pageKey];
  if (!self) return [];

  const scored: { pageKey: PageKey; score: number }[] = [];
  for (const [key, meta] of Object.entries(PAGES) as [PageKey, PageMeta][]) {
    if (key === pageKey) continue;
    const overlap = meta.tags.filter(tag => self.tags.includes(tag)).length;
    if (overlap === 0) continue;
    scored.push({ pageKey: key, score: overlap });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, max).map(({ pageKey: key }) => {
    const meta = PAGES[key];
    return { pageKey: key, title: meta.title, body: meta.body };
  });
}
