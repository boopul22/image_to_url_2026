import { t } from '../i18n/utils';
import type { Locale } from '../i18n/config';
import { localizedUrl, type PageKey } from '../i18n/landing/registry';

export type NavLink = {
  name: string;
  href: string;
  icon: string;
  external?: boolean;
};

export type NavGroups = {
  tools: NavLink[];
  convert: NavLink[];      // URL-upload tools (registered in SLUGS)
  formatConvert: NavLink[];// browser-only format pair converters (Cluster A — English-only)
  utilities: NavLink[];    // Cluster B — English-only
  features: NavLink[];
  useCases: NavLink[];     // existing + Cluster D
  compare: NavLink[];      // Cluster C — English-only
  api: NavLink[];          // Cluster E — English-only
  answers: NavLink[];      // Cluster F GEO Q&A — English-only
  guides: NavLink[];       // pillar guides — English-only
  companion: NavLink[];
  company: NavLink[];
};

// Helper: build an internal link pointing at a translated slug (SLUGS registry).
function lp(locale: Locale, pageKey: PageKey, name: string, icon: string): NavLink {
  return { name, href: localizedUrl(pageKey, locale), icon };
}

// Helper: build a plain English-only link (for pages not yet in SLUGS).
function en(href: string, name: string, icon: string): NavLink {
  return { name, href, icon };
}

export function getNavGroups(locale: Locale): NavGroups {
  return {
    tools: [
      { name: 'ExtractPics — Image Extractor', href: 'https://extractpics.com/?ref=imagetourl', icon: 'travel_explore', external: true },
      { name: 'Daily Meditation Guide', href: 'https://dailymeditationguide.com/?ref=imagetourl', icon: 'self_improvement', external: true },
    ],
    convert: [
      lp(locale, 'png-to-url', 'PNG to URL', 'image'),
      lp(locale, 'jpg-to-url', 'JPG to URL', 'photo'),
      lp(locale, 'gif-to-url', 'GIF to URL', 'gif_box'),
      lp(locale, 'webp-to-url', 'WebP to URL', 'web'),
      lp(locale, 'photo-to-url', 'Photo to URL', 'add_photo_alternate'),
      lp(locale, 'screenshot-to-url', 'Screenshot to URL', 'screenshot_monitor'),
    ],
    formatConvert: [
      lp(locale, 'heic-to-jpg', 'HEIC → JPG', 'photo_camera_back'),
      lp(locale, 'heic-to-png', 'HEIC → PNG', 'photo_camera_back'),
      lp(locale, 'heic-to-pdf', 'HEIC → PDF', 'picture_as_pdf'),
      lp(locale, 'png-to-jpg', 'PNG → JPG', 'compare'),
      lp(locale, 'jpg-to-png', 'JPG → PNG', 'compare'),
      lp(locale, 'png-to-webp', 'PNG → WebP', 'compare'),
      lp(locale, 'jpg-to-webp', 'JPG → WebP', 'compare'),
      lp(locale, 'webp-to-jpg', 'WebP → JPG', 'compare'),
      lp(locale, 'webp-to-png', 'WebP → PNG', 'compare'),
      lp(locale, 'png-to-pdf', 'PNG → PDF', 'picture_as_pdf'),
      lp(locale, 'jpg-to-pdf', 'JPG → PDF', 'picture_as_pdf'),
    ],
    utilities: [
      lp(locale, 'image-compressor', 'Compressor', 'compress'),
      lp(locale, 'image-resizer', 'Resizer', 'aspect_ratio'),
      lp(locale, 'favicon-generator', 'Favicon Generator', 'favorite'),
      lp(locale, 'image-to-base64', 'Image → Base64', 'data_object'),
      lp(locale, 'base64-to-image', 'Base64 → Image', 'data_array'),
    ],
    features: [
      lp(locale, 'free-image-hosting', t(locale, 'nav.freeHosting'), 'cloud_upload'),
      lp(locale, 'image-url-generator', t(locale, 'nav.urlGenerator'), 'link'),
      lp(locale, 'bulk-image-upload', t(locale, 'nav.bulkUpload'), 'backup'),
      lp(locale, 'free-image-cdn', 'Free Image CDN', 'public'),
      lp(locale, 'permanent-image-hosting', 'Permanent Hosting', 'all_inclusive'),
      lp(locale, 'direct-image-link', 'Direct Image Links', 'link'),
      lp(locale, 'anonymous-image-upload', 'Anonymous Upload', 'person_off'),
      lp(locale, 'image-embed-code-generator', 'Embed Code Generator', 'code'),
    ],
    useCases: [
      // Existing (translated via SLUGS)
      lp(locale, 'image-hosting-for-ebay', 'For eBay', 'storefront'),
      lp(locale, 'image-hosting-for-discord', 'For Discord', 'forum'),
      lp(locale, 'image-hosting-for-github-readme', 'For GitHub', 'terminal'),
      lp(locale, 'image-hosting-for-notion', 'For Notion', 'description'),
      lp(locale, 'image-hosting-for-wordpress', 'For WordPress', 'language'),
      lp(locale, 'image-hosting-for-shopify', 'For Shopify', 'shopping_cart'),
      lp(locale, 'image-hosting-for-newsletters', 'For Newsletters', 'newspaper'),
      lp(locale, 'image-hosting-for-email-signatures', 'For Email Signatures', 'signature'),
      lp(locale, 'image-hosting-for-forums', 'For Forums', 'chat'),
      lp(locale, 'image-to-url-for-whatsapp', 'For WhatsApp', 'sms'),
      lp(locale, 'image-url-for-chatgpt', 'For ChatGPT', 'smart_toy'),
      lp(locale, 'ai-image-hosting', 'AI Image Hosting', 'auto_awesome'),
      // New (Cluster D — English-only)
      en('/image-hosting-for-reddit', 'For Reddit', 'reddit'),
      en('/image-hosting-for-twitter', 'For X / Twitter', 'share'),
      en('/image-hosting-for-instagram', 'For Instagram', 'photo_camera'),
      en('/image-hosting-for-pinterest', 'For Pinterest', 'push_pin'),
      en('/image-hosting-for-linkedin', 'For LinkedIn', 'work'),
      en('/image-hosting-for-substack', 'For Substack', 'mail'),
      en('/image-hosting-for-medium', 'For Medium', 'article'),
      en('/image-hosting-for-webflow', 'For Webflow', 'web_stories'),
      en('/image-hosting-for-squarespace', 'For Squarespace', 'widgets'),
      en('/image-hosting-for-wix', 'For Wix', 'construction'),
      en('/image-hosting-for-framer', 'For Framer', 'animation'),
      en('/image-hosting-for-stack-overflow', 'For Stack Overflow', 'bug_report'),
      en('/image-hosting-for-markdown', 'For Markdown', 'description'),
      en('/image-hosting-for-nextjs', 'For Next.js', 'web'),
      en('/image-hosting-for-jira', 'For Jira', 'task'),
    ],
    compare: [
      lp(locale, 'imgur-alternative', 'Imgur Alternative', 'swap_horiz'),
      lp(locale, 'imgbb-alternative', 'ImgBB Alternative', 'swap_horiz'),
      lp(locale, 'cloudinary-alternative', 'Cloudinary Alternative', 'swap_horiz'),
      en('/postimages-alternative', 'Postimages Alternative', 'swap_horiz'),
      en('/google-photos-direct-link', 'Google Photos Direct Link', 'photo_library'),
      en('/dropbox-direct-image-link', 'Dropbox Direct Link', 'cloud'),
      en('/imagetourl-vs-imgur', 'vs Imgur', 'compare_arrows'),
      en('/imagetourl-vs-imgbb', 'vs ImgBB', 'compare_arrows'),
      en('/imagetourl-vs-cloudinary', 'vs Cloudinary', 'compare_arrows'),
      en('/imgur-vs-imgbb', 'Imgur vs ImgBB', 'compare_arrows'),
    ],
    api: [
      en('/image-upload-api', 'Upload API', 'api'),
      en('/image-hosting-rest-api', 'REST Reference', 'data_object'),
      en('/image-hosting-api-python', 'Python', 'code'),
      en('/image-hosting-api-nodejs', 'Node.js', 'code'),
      en('/image-hosting-api-php', 'PHP', 'code'),
      en('/image-hosting-api-curl', 'cURL', 'terminal'),
      en('/image-upload-zapier', 'Zapier', 'electric_bolt'),
      en('/image-upload-make', 'Make.com', 'hub'),
      en('/image-upload-n8n', 'n8n', 'settings_input_component'),
    ],
    answers: [
      en('/how-to-get-direct-url-for-image', 'Get a direct URL', 'help'),
      en('/how-to-share-image-as-link', 'Share as a link', 'help'),
      en('/how-to-embed-image-in-email', 'Embed in email', 'help'),
      en('/what-is-image-hotlinking', 'What is hotlinking', 'help'),
      en('/how-to-host-image-for-free', 'Host for free', 'help'),
      en('/how-long-does-imagetourl-store-images', 'Retention policy', 'help'),
    ],
    guides: [
      en('/guides/jpg-vs-png-vs-webp-vs-avif', 'JPG vs PNG vs WebP vs AVIF', 'menu_book'),
      en('/guides/image-lcp-optimization', 'Image LCP Optimization', 'speed'),
      en('/guides/image-optimization-core-web-vitals', 'Core Web Vitals Guide', 'monitoring'),
      en('/guides/responsive-images-cheatsheet', 'Responsive Images Cheatsheet', 'devices'),
      en('/guides/what-exif-leaks', 'What EXIF Leaks', 'visibility_off'),
      en('/guides/embed-images-in-notion', 'Embed in Notion', 'description'),
      en('/guides/why-reddit-strips-exif', 'Why Reddit Strips EXIF', 'reddit'),
    ],
    companion: [
      { name: 'ExtractPics — Image Extractor', href: 'https://extractpics.com/?ref=imagetourl', icon: 'travel_explore', external: true },
    ],
    company: [
      lp(locale, 'about', t(locale, 'nav.about'), 'info'),
      lp(locale, 'contact', t(locale, 'nav.contact'), 'mail'),
    ],
  };
}
