import { t } from '../i18n/utils';
import type { Locale } from '../i18n/config';

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

export function getNavGroups(locale: Locale): NavGroups {
  return {
    tools: [
      { name: 'HEIC to JPG (browser)', href: '/heic-to-jpg', icon: 'photo_camera_back' },
      { name: 'ExtractPics — Image Extractor', href: 'https://extractpics.com/?ref=imagetourl', icon: 'travel_explore', external: true },
      { name: 'Daily Meditation Guide', href: 'https://dailymeditationguide.com/?ref=imagetourl', icon: 'self_improvement', external: true },
    ],
    convert: [
      { name: 'PNG to URL', href: '/png-to-url', icon: 'image' },
      { name: 'JPG to URL', href: '/jpg-to-url', icon: 'photo' },
      { name: 'GIF to URL', href: '/gif-to-url', icon: 'gif_box' },
      { name: 'WebP to URL', href: '/webp-to-url', icon: 'web' },
      { name: 'Photo to URL', href: '/photo-to-url', icon: 'add_photo_alternate' },
      { name: 'Screenshot to URL', href: '/screenshot-to-url', icon: 'screenshot_monitor' },
    ],
    features: [
      { name: t(locale, 'nav.freeHosting'), href: '/free-image-hosting', icon: 'cloud_upload' },
      { name: t(locale, 'nav.urlGenerator'), href: '/image-url-generator', icon: 'link' },
      { name: t(locale, 'nav.bulkUpload'), href: '/bulk-image-upload', icon: 'backup' },
      { name: 'Free Image CDN', href: '/free-image-cdn', icon: 'public' },
      { name: 'Permanent Hosting', href: '/permanent-image-hosting', icon: 'all_inclusive' },
      { name: 'Direct Image Links', href: '/direct-image-link', icon: 'link' },
      { name: 'Anonymous Upload', href: '/anonymous-image-upload', icon: 'person_off' },
      { name: 'Embed Code Generator', href: '/image-embed-code-generator', icon: 'code' },
    ],
    useCases: [
      { name: 'For eBay', href: '/image-hosting-for-ebay', icon: 'storefront' },
      { name: 'For Discord', href: '/image-hosting-for-discord', icon: 'forum' },
      { name: 'For GitHub', href: '/image-hosting-for-github-readme', icon: 'terminal' },
      { name: 'For Notion', href: '/image-hosting-for-notion', icon: 'description' },
      { name: 'For WordPress', href: '/image-hosting-for-wordpress', icon: 'language' },
      { name: 'For Shopify', href: '/image-hosting-for-shopify', icon: 'shopping_cart' },
      { name: 'For Newsletters', href: '/image-hosting-for-newsletters', icon: 'newspaper' },
      { name: 'For Email Signatures', href: '/image-hosting-for-email-signatures', icon: 'signature' },
      { name: 'For Forums', href: '/image-hosting-for-forums', icon: 'chat' },
      { name: 'For WhatsApp', href: '/image-to-url-for-whatsapp', icon: 'sms' },
      { name: 'For ChatGPT', href: '/image-url-for-chatgpt', icon: 'smart_toy' },
      { name: 'AI Image Hosting', href: '/ai-image-hosting', icon: 'auto_awesome' },
      { name: 'Imgur Alternative', href: '/imgur-alternative', icon: 'swap_horiz' },
      { name: 'ImgBB Alternative', href: '/imgbb-alternative', icon: 'swap_horiz' },
    ],
    companion: [
      { name: 'ExtractPics — Image Extractor', href: 'https://extractpics.com/?ref=imagetourl', icon: 'travel_explore', external: true },
    ],
    company: [
      { name: t(locale, 'nav.about'), href: '/about', icon: 'info' },
      { name: t(locale, 'nav.contact'), href: '/contact', icon: 'mail' },
    ],
  };
}
