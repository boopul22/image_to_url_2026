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
  convert: NavLink[];
  features: NavLink[];
  useCases: NavLink[];
  companion: NavLink[];
  company: NavLink[];
};

// Helper: build an internal link pointing at a translated slug.
function lp(locale: Locale, pageKey: PageKey, name: string, icon: string): NavLink {
  return { name, href: localizedUrl(pageKey, locale), icon };
}

export function getNavGroups(locale: Locale): NavGroups {
  return {
    tools: [
      lp(locale, 'heic-to-jpg', 'HEIC to JPG (browser)', 'photo_camera_back'),
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
      lp(locale, 'imgur-alternative', 'Imgur Alternative', 'swap_horiz'),
      lp(locale, 'imgbb-alternative', 'ImgBB Alternative', 'swap_horiz'),
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
