// Per-locale URL slugs for each tool/landing page.
//
// The key of each record is a stable English page ID — never renamed, used for
// imports and internal refs. The value maps each Locale to the slug used in
// that locale's URL. English slugs equal the page ID (keeps existing URLs
// stable). Other locales are translated for SEO (French users search for
// "gif en url" not "gif-to-url").
//
// This file is partially auto-maintained: English entries are authored here;
// non-English entries are filled by scripts/translate-landing.mjs using
// OpenRouter (google/gemini-3.1-flash-lite-preview). Re-running the script is
// idempotent — existing non-English entries are preserved.

import type { Locale } from '../config';

export type PageKey =
  | 'gif-to-url'
  | 'heic-to-jpg'
  | 'png-to-url'
  | 'jpg-to-url'
  | 'webp-to-url'
  | 'photo-to-url'
  | 'screenshot-to-url'
  | 'image-url-generator'
  | 'image-to-url-converter'
  | 'image-to-link'
  | 'image-embed-code-generator'
  | 'image-url-for-chatgpt'
  | 'image-to-url-for-whatsapp'
  | 'image-to-url-for-html'
  | 'image-to-url-vercel'
  | 'image-hosting-for-wordpress'
  | 'image-hosting-for-discord'
  | 'image-hosting-for-ebay'
  | 'image-hosting-for-email-signatures'
  | 'image-hosting-for-forums'
  | 'image-hosting-for-github-readme'
  | 'image-hosting-for-google-forms'
  | 'image-hosting-for-google-sheets'
  | 'image-hosting-for-newsletters'
  | 'image-hosting-for-notion'
  | 'image-hosting-for-shopify'
  | 'free-image-hosting'
  | 'free-image-cdn'
  | 'ai-image-hosting'
  | 'anonymous-image-upload'
  | 'bulk-image-upload'
  | 'direct-image-link'
  | 'permanent-image-hosting'
  | 'imgbb-alternative'
  | 'imgur-alternative'
  | 'cloudinary-alternative'
  // Cluster A — format-pair converters (browser-side)
  | 'png-to-jpg'
  | 'jpg-to-png'
  | 'convert-to-jpg'
  | 'jpeg-to-jpg'
  | 'jfif-to-jpg'
  | 'jpg-to-jpeg'
  | 'avif-to-jpg'
  | 'tiff-to-jpg'
  | 'webp-to-jpg'
  | 'webp-to-png'
  | 'png-to-webp'
  | 'jpg-to-webp'
  | 'png-to-pdf'
  | 'jpg-to-pdf'
  | 'heic-to-png'
  | 'heic-to-pdf'
  // Cluster B — utilities
  | 'image-compressor'
  | 'image-resizer'
  | 'image-to-base64'
  | 'base64-to-image'
  | 'favicon-generator'
  | 'about'
  | 'contact'
  | 'content-guidelines';

export type LocaleSlugMap = Partial<Record<Locale, string>>;

// Only English slugs authored here. Non-English slugs are added by
// scripts/translate-landing.mjs (it edits this file in place, filling entries).
export const SLUGS: Record<PageKey, LocaleSlugMap> = {
  'gif-to-url': { en: 'gif-to-url', fr: 'gif-vers-url', de: 'gif-zu-url-konvertieren', es: 'convertir-gif-a-url', ja: 'gif-を-url-に変換', 'zh-Hans': 'gif-转-url' },
  'heic-to-jpg': { en: 'heic-to-jpg', fr: 'convertir-heic-en-jpg', de: 'heic-zu-jpg-konverter', es: 'convertir-heic-a-jpg', ja: 'heic-を-jpg-に変換', 'zh-Hans': 'heic-转-jpg-转换器' },
  'png-to-url': { en: 'png-to-url', fr: 'convertir-png-en-url', de: 'png-in-url-umwandeln', es: 'convertir-png-a-url', ja: 'png-画像-url-変換', 'zh-Hans': 'png-zhuan-url-lian-jie' },
  'jpg-to-url': { en: 'jpg-to-url', es: 'convertir-jpg-a-url', fr: 'convertir-jpg-en-url', de: 'jpg-in-url-umwandeln', ja: 'jpg-画像-url-変換', 'zh-Hans': 'jpg-zhuan-url-lianjie' },
  'webp-to-url': { en: 'webp-to-url', es: 'convertir-webp-a-url', fr: 'convertir-webp-en-url', de: 'webp-in-url-umwandeln', ja: 'webp-url-henkan', 'zh-Hans': 'webp-zhuan-url' },
  'photo-to-url': { en: 'photo-to-url', es: 'convertir-foto-a-url', fr: 'convertir-photo-en-url', de: 'foto-in-url-umwandeln', ja: '写真-url-変換', 'zh-Hans': '照片转链接' },
  'screenshot-to-url': { en: 'screenshot-to-url', es: 'convertir-captura-a-url', fr: 'convertir-capture-ecran-en-url', de: 'screenshot-in-url-umwandeln', ja: 'スクリーンショット-url-変換', 'zh-Hans': '截图转链接' },
  'image-url-generator': { en: 'image-url-generator', es: 'generador-de-url-de-imagen', fr: 'generateur-url-image-gratuit', de: 'bild-zu-url-konverter', ja: '画像-url-生成', 'zh-Hans': '图片转链接生成器' },
  'image-to-url-converter': { en: 'image-to-url-converter' },
  'image-to-link': { en: 'image-to-link' },
  'image-embed-code-generator': { en: 'image-embed-code-generator', es: 'generador-codigo-incrustar-imagenes', fr: 'generateur-code-embed-image', de: 'bild-embed-code-generator', ja: '画像-埋め込み-コード-生成', 'zh-Hans': '图片-嵌入-代码-生成器' },
  'image-url-for-chatgpt': { en: 'image-url-for-chatgpt', es: 'url-de-imagen-para-chatgpt', fr: 'url-image-pour-chatgpt', de: 'bild-url-fuer-chatgpt-erstellen', ja: 'chatgpt-画像url-変換', 'zh-Hans': 'chatgpt-tupian-lianjie' },
  'image-to-url-for-whatsapp': { en: 'image-to-url-for-whatsapp', es: 'compartir-imagenes-whatsapp-url', fr: 'partager-images-whatsapp-url', de: 'bilder-auf-whatsapp-teilen', ja: 'whatsapp-gazo-kyoyu', 'zh-Hans': 'whatsapp-图片-链接-分享' },
  'image-to-url-for-html': { en: 'image-to-url-for-html', es: 'imagen-a-url-html', fr: 'convertir-image-url-html', de: 'bild-zu-url-html', ja: '画像-を-url-に変換-html', 'zh-Hans': '图片-转-url-为-html' },
  'image-to-url-vercel': { en: 'image-to-url-vercel', es: 'imagen-a-url-vercel', fr: 'image-vers-url-vercel', de: 'bild-zu-url-vercel', ja: '画像-url-変換-vercel', 'zh-Hans': '图片-转-url-vercel' },
  'image-hosting-for-wordpress': { en: 'image-hosting-for-wordpress', es: 'alojamiento-imagenes-wordpress', fr: 'hebergement-images-wordpress', de: 'bildhosting-fuer-wordpress', ja: 'wordpress-画像ホスティング-高速化', 'zh-Hans': 'wordpress-图片托管-加速' },
  'image-hosting-for-discord': { en: 'image-hosting-for-discord', es: 'alojamiento-imagenes-discord', fr: 'hebergement-image-discord', de: 'bild-hosting-fuer-discord', ja: 'discord-用-画像-ホスティング', 'zh-Hans': 'discord-专用-图片-托管' },
  'image-hosting-for-ebay': { en: 'image-hosting-for-ebay', es: 'alojamiento-imagenes-ebay', fr: 'hebergement-images-ebay', de: 'bildhosting-fuer-ebay', ja: 'ebay-出品用-画像ホスティング', 'zh-Hans': 'ebay-商品-图片-托管' },
  'image-hosting-for-email-signatures': { en: 'image-hosting-for-email-signatures', es: 'alojamiento-imagenes-firmas-email', fr: 'hebergement-images-signature-email', de: 'bildhosting-fuer-e-mail-signaturen', ja: 'メール署名-画像ホスティング', 'zh-Hans': '电子邮件签名-图片托管' },
  'image-hosting-for-forums': { en: 'image-hosting-for-forums', es: 'alojamiento-imagenes-foros', fr: 'hebergement-images-forums', de: 'bildhosting-fuer-foren', ja: '掲示板用-画像-hosting', 'zh-Hans': '论坛-图片-托管' },
  'image-hosting-for-github-readme': { en: 'image-hosting-for-github-readme', es: 'alojamiento-imagenes-github-readme', de: 'bildhosting-fuer-github-readme', ja: 'github-readme-gazou-hozon', 'zh-Hans': 'github-readme-tupian-tuoguan', fr: 'hebergement-images-github-readme' },
  'image-hosting-for-google-forms': { en: 'image-hosting-for-google-forms', es: 'urls-imagenes-google-forms', fr: 'url-images-google-forms', de: 'bild-urls-fuer-google-forms', ja: 'google-forms-gazou-url', 'zh-Hans': 'google-forms-tupian-lianjie' },
  'image-hosting-for-google-sheets': { en: 'image-hosting-for-google-sheets', es: 'urls-imagenes-google-sheets', fr: 'urls-images-google-sheets', de: 'bild-urls-fuer-google-sheets', ja: 'google-sheets-image-url-sakusei', 'zh-Hans': 'google-sheets-图片链接' },
  'image-hosting-for-newsletters': { en: 'image-hosting-for-newsletters', es: 'alojamiento-imagenes-boletines', fr: 'hebergement-images-newsletter', de: 'bildhosting-fuer-newsletter', ja: 'メールマガジン用画像ホスティング', 'zh-Hans': '邮件通讯-图片托管' },
  'image-hosting-for-notion': { en: 'image-hosting-for-notion', es: 'alojamiento-imagenes-notion', fr: 'hebergement-images-notion', de: 'dauerhafte-bild-urls-fuer-notion', ja: 'notion-画像-永続化', 'zh-Hans': 'notion-tupian-wai-lian' },
  'image-hosting-for-shopify': { en: 'image-hosting-for-shopify', es: 'alojamiento-imagenes-shopify', fr: 'hebergement-images-shopify', de: 'kostenloses-bild-hosting-shopify', ja: 'shopify-画像ホスティング', 'zh-Hans': 'shopify-图片托管' },
  'free-image-hosting': { en: 'free-image-hosting', es: 'alojamiento-imagenes-gratis', fr: 'hebergement-images-gratuit', de: 'kostenloses-image-hosting', ja: '無料-画像-ホスティング', 'zh-Hans': '免费-图片-托管' },
  'free-image-cdn': { en: 'free-image-cdn', es: 'cdn-imagenes-gratis', fr: 'cdn-images-gratuit', de: 'kostenloses-image-cdn', ja: '無料-画像-cdn', 'zh-Hans': '免费-图片-cdn' },
  'ai-image-hosting': { en: 'ai-image-hosting', es: 'alojamiento-imagenes-ia', fr: 'hebergement-images-ia', de: 'ki-bilder-hosten', ja: 'ai-画像-ホスティング', 'zh-Hans': 'ai-图像-托管' },
  'anonymous-image-upload': { en: 'anonymous-image-upload', es: 'subir-imagenes-anonimo', fr: 'hebergement-image-anonyme', de: 'anonymer-bild-upload', ja: '匿名-画像-アップロード', 'zh-Hans': '匿名-image-上传' },
  'bulk-image-upload': { en: 'bulk-image-upload', es: 'carga-masiva-imagenes', fr: 'telechargement-images-masse', de: 'bilder-massen-upload', ja: '画像-一括-アップロード', 'zh-Hans': '批量-图片-上传' },
  'direct-image-link': { en: 'direct-image-link', es: 'enlaces-directos-imagenes', fr: 'hebergement-image-lien-direct', de: 'direkte-bild-links', ja: '画像-direct-link-作成', 'zh-Hans': '直接-image-链接' },
  'permanent-image-hosting': { en: 'permanent-image-hosting', fr: 'image-vers-url-permanent', de: 'bild-zu-url-dauerhaft', ja: '画像-url-永続化', 'zh-Hans': '永久图片链接托管', es: 'imagen-a-url-permanente' },
  'imgbb-alternative': { en: 'imgbb-alternative', es: 'alternativa-a-imgbb', fr: 'alternative-imgbb-gratuite', de: 'imgbb-alternative-kostenlos', ja: 'imgbb-no-daitai-service', 'zh-Hans': 'imgbb-zui-jia-ti-dai-pin' },
  'imgur-alternative': { en: 'imgur-alternative', fr: 'meilleure-alternative-imgur', de: 'beste-imgur-alternative', ja: 'imgur-no-daitai-service', 'zh-Hans': '最佳-imgur-替代品', es: 'mejor-alternativa-a-imgur' },
  'cloudinary-alternative': { en: 'cloudinary-alternative', es: 'alternativa-a-cloudinary', fr: 'alternative-cloudinary', de: 'cloudinary-alternative', ja: 'cloudinary-の-代替', 'zh-Hans':'cloudinary-替代品' },
  // Cluster A — format-pair converters
  'png-to-jpg': { en: 'png-to-jpg', es: 'convertir-png-a-jpg', fr: 'convertir-png-en-jpg', de: 'png-in-jpg-umwandeln', ja: 'png-を-jpg-に変換', 'zh-Hans': 'png-转-jpg' },
  'jpg-to-png': { en: 'jpg-to-png', es: 'convertir-jpg-a-png', fr: 'convertir-jpg-en-png', de: 'jpg-in-png-umwandeln', ja: 'jpg-を-png-に変換', 'zh-Hans': 'jpg-转-png' },
  'convert-to-jpg': { en: 'convert-to-jpg', es: 'convertir-a-jpg', fr: 'convertir-en-jpg', de: 'bild-in-jpg-umwandeln', ja: '画像-jpg-変換', 'zh-Hans': 'zhuan-huan-wei-jpg' },
  'jpeg-to-jpg': { en: 'jpeg-to-jpg', es: 'convertir-jpeg-a-jpg', fr: 'convertir-jpeg-en-jpg', de: 'jpeg-zu-jpg-konvertieren', ja: 'jpeg-jpg-henkan', 'zh-Hans': 'jpeg-zhuan-jpg-gong-ju' },
  'jfif-to-jpg': { en: 'jfif-to-jpg', es: 'convertir-jfif-a-jpg', fr: 'convertir-jfif-en-jpg', de: 'jfif-in-jpg-umwandeln', ja: 'jfif-jpg-henkan', 'zh-Hans': 'jfif-zhuan-jpg-zhuan-huan-qi' },
  'jpg-to-jpeg': { en: 'jpg-to-jpeg', es: 'convertir-jpg-a-jpeg', fr: 'convertir-jpg-en-jpeg', de: 'jpg-zu-jpeg-konverter', ja: 'jpg-jpeg-henkan', 'zh-Hans': 'jpg-zhuan-jpeg-gong-ju' },
  'avif-to-jpg': { en: 'avif-to-jpg', es: 'convertir-avif-a-jpg', fr: 'convertir-avif-en-jpg', de: 'avif-in-jpg-umwandeln', ja: 'avif-jpg-henkan', 'zh-Hans': 'avif-zhuan-jpg' },
  'tiff-to-jpg': { en: 'tiff-to-jpg', es: 'convertir-tiff-a-jpg', fr: 'convertir-tiff-en-jpg', de: 'tiff-in-jpg-umwandeln', ja: 'tiff-jpg-henkan', 'zh-Hans': 'tiff-zhuan-jpg-zhuan-huan-qi' },
  'webp-to-jpg': { en: 'webp-to-jpg', es: 'convertir-webp-a-jpg', fr: 'convertir-webp-en-jpg', de: 'webp-in-jpg-umwandeln', ja: 'webp-を-jpg-に変換', 'zh-Hans': 'webp-转-jpg' },
  'webp-to-png': { en: 'webp-to-png', es: 'convertir-webp-a-png', fr: 'convertir-webp-en-png', de: 'webp-in-png-umwandeln', ja: 'webp-を-png-に変換', 'zh-Hans': 'webp-转-png' },
  'png-to-webp': { en: 'png-to-webp', es: 'convertir-png-a-webp', fr: 'convertir-png-en-webp', de: 'png-in-webp-umwandeln', ja: 'png-を-webp-に変換', 'zh-Hans': 'png-转-webp' },
  'jpg-to-webp': { en: 'jpg-to-webp', es: 'convertir-jpg-a-webp', fr: 'convertir-jpg-en-webp', de: 'jpg-in-webp-umwandeln', ja: 'jpg-を-webp-に変換', 'zh-Hans': 'jpg-转-webp' },
  'png-to-pdf': { en: 'png-to-pdf', es: 'convertir-png-a-pdf', fr: 'convertir-png-en-pdf', de: 'png-in-pdf-umwandeln', ja: 'png-を-pdf-に変換', 'zh-Hans': 'png-转-pdf' },
  'jpg-to-pdf': { en: 'jpg-to-pdf', es: 'convertir-jpg-a-pdf', fr: 'convertir-jpg-en-pdf', de: 'jpg-in-pdf-umwandeln', ja: 'jpg-を-pdf-に変換', 'zh-Hans': 'jpg-转-pdf' },
  'heic-to-png': { en: 'heic-to-png', es: 'convertir-heic-a-png', fr: 'convertir-heic-en-png', de: 'heic-in-png-umwandeln', ja: 'heic-を-png-に変換', 'zh-Hans': 'heic-转-png' },
  'heic-to-pdf': { en: 'heic-to-pdf', es: 'convertir-heic-a-pdf', fr: 'convertir-heic-en-pdf', de: 'heic-in-pdf-umwandeln', ja: 'heic-を-pdf-に変換', 'zh-Hans': 'heic-转-pdf' },
  // Cluster B — utilities
  'image-compressor': { en: 'image-compressor', es: 'compresor-de-imagenes', fr: 'compresseur-d-images', de: 'bildkomprimierer', ja: '画像-圧縮-ツール', 'zh-Hans': '图片-压缩-工具' },
  'image-resizer': { en: 'image-resizer', es: 'redimensionar-imagen', fr: 'redimensionneur-d-images', de: 'bild-groesse-aendern', ja: '画像-サイズ-変更', 'zh-Hans': '图片-尺寸-调整' },
  'image-to-base64': { en: 'image-to-base64', es: 'imagen-a-base64', fr: 'image-vers-base64', de: 'bild-zu-base64', ja: '画像-を-base64-に変換', 'zh-Hans': '图片-转-base64' },
  'base64-to-image': { en: 'base64-to-image', es: 'base64-a-imagen', fr: 'base64-vers-image', de: 'base64-zu-bild', ja: 'base64-を-画像-に変換', 'zh-Hans': 'base64-转-图片' },
  'favicon-generator': { en: 'favicon-generator', es: 'generador-de-favicon', fr: 'generateur-de-favicon', de: 'favicon-generator', ja: 'favicon-生成-ツール', 'zh-Hans': 'favicon-生成器' },
  'about': { en: 'about', es: 'sobre-imagetourl', fr: 'a-propos-imagetourl', de: 'ueber-imagetourl', ja: 'imagetourl-について', 'zh-Hans': '关于-imagetourl' },
  'contact': { en: 'contact', es: 'contacto-imagetourl', fr: 'contactez-imagetourl', de: 'kontakt-imagetourl', ja: 'お問い合わせ-imagetourl', 'zh-Hans': '联系-我们-支持' },
  'content-guidelines': { en: 'content-guidelines', es: 'directrices-de-contenido', fr: 'directives-de-contenu', de: 'inhaltsrichtlinien-und-nutzungsbedingungen', ja: 'コンテンツ-ガイドライン', 'zh-Hans': '内容-准则' } };

export const PAGE_KEYS = Object.keys(SLUGS) as PageKey[];
