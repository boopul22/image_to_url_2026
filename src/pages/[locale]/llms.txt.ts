// Per-locale llms.txt — localized short description + links for each supported
// language so non-English AI crawlers get locale-appropriate context.

export const prerender = false;

import type { APIContext } from 'astro';
import { locales, defaultLocale } from '../../i18n/config';
import type { Locale } from '../../i18n/config';

const SITE = 'https://imagetourl.cloud';

// Localized one-line intro. Hand-authored so no translation service call.
const INTRO: Record<Locale, string> = {
  en: 'ImageToURL is a free image hosting service that converts uploaded images into shareable CDN-backed URLs. Guest uploads expire; signed-in users can choose Never delete.',
  es: 'ImageToURL es un servicio gratuito de alojamiento de imágenes que convierte imágenes en URLs CDN compartibles. Las subidas de visitantes caducan; los usuarios con sesión pueden elegir Nunca eliminar.',
  fr: 'ImageToURL est un service gratuit d\'hébergement d\'images qui convertit les images en URLs CDN partageables. Les téléversements visiteurs expirent; les utilisateurs connectés peuvent choisir Ne jamais supprimer.',
  de: 'ImageToURL ist ein kostenloser Bilder-Hosting-Dienst, der hochgeladene Bilder in teilbare CDN-URLs umwandelt. Gast-Uploads laufen ab; angemeldete Nutzer können Nie löschen wählen.',
  ja: 'ImageToURLは、アップロードされた画像を共有可能なCDNベースのURLに変換する無料の画像ホスティングサービスです。ゲストアップロードは期限切れになり、ログインユーザーは「削除しない」を選択できます。',
  'zh-Hans': 'ImageToURL 是一项免费的图片托管服务，可将上传的图片转换为可共享的 CDN URL。访客上传会过期，已登录用户可以选择“永不删除”。',
};

const KEY_PAGES = [
  'features', 'pricing', 'blog', 'about',
  'heic-to-jpg', 'heic-to-png', 'png-to-jpg', 'jpg-to-png', 'png-to-webp', 'jpg-to-webp',
  'image-compressor', 'image-resizer', 'favicon-generator',
  'imgur-alternative', 'cloudinary-alternative',
  'how-to-get-direct-url-for-image', 'what-is-image-hotlinking', 'how-to-host-image-for-free',
];

export async function GET({ params }: APIContext): Promise<Response> {
  const localeParam = params.locale as string;
  if (!locales.includes(localeParam as Locale)) {
    return new Response('Not found', { status: 404 });
  }
  const locale = localeParam as Locale;
  const intro = INTRO[locale] || INTRO[defaultLocale];

  let body = `# ImageToURL (${locale})\n\n> ${intro}\n\n`;
  body += `## Canonical site (English)\n- [Homepage](${SITE}/)\n\n`;
  body += `## Localized homepage\n- [${locale} homepage](${SITE}/${locale}/)\n\n`;
  body += `## Key pages (English URLs)\n`;
  for (const p of KEY_PAGES) body += `- [${p}](${SITE}/${p})\n`;
  body += `\n## Full site map\n- [Sitemap](${SITE}/sitemap.xml)\n- [Full LLM reference](${SITE}/llms-full.txt)\n`;

  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
