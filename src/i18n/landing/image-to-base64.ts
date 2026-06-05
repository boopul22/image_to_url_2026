import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Image to Base64 — 100% Browser | Free Encoder',
  metaDescription: 'Convert any PNG, JPG, GIF, SVG, or WebP image to a base64 data URI you can paste into CSS, HTML, or JSON. Instant, free, runs in your browser, no upload.',
  schemaName: 'Image to Base64 Encoder',
  schemaDescription: 'Encode images as base64 data URIs locally in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'Image to Base64', h1Highlight: 'instant data URI.',
  intro: 'Drop an image — get a ready-to-paste data URI for CSS, HTML, JSON, or email. Runs in your browser.',
  howTitle: 'How to convert',
  steps: [
    { title: 'Drop an image', body: 'Drop any PNG, JPG, GIF, SVG, or WebP.' },
    { title: 'Copy the data URI', body: 'The full data:image/...;base64,... string appears in the output box.' },
    { title: 'Paste anywhere', body: 'Use in CSS url(), HTML <img src>, or JSON config.' },
  ],
  whyTitle: 'When to use base64',
  whyItems: [
    { title: 'Tiny icons', body: 'Embed sub-1KB icons inline to avoid a network request.' },
    { title: 'Email HTML', body: 'When you cannot link external assets.' },
    { title: 'Inline CSS', body: 'Eliminate the extra HTTP request for critical background images.' },
    { title: 'Offline apps', body: 'Bundle images into source for fully offline use.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'What is base64 image encoding?', a: 'Base64 encodes binary data as ASCII text — lets you embed images directly inside CSS, HTML, or JSON.' },
    { q: 'When should I use base64 instead of a URL?', a: 'For tiny images, emails, or inline CSS. For anything bigger, use a hosted URL — base64 inflates size by ~33%.' },
    { q: 'Why is the base64 string so big?', a: 'Base64 costs 4 chars per 3 bytes — ~33% overhead.' },
    { q: 'Is anything uploaded?', a: 'No. Local FileReader.readAsDataURL call.' },
    { q: 'SVG encoding?', a: 'Works. URL-encoding can be smaller for SVG.' },
    { q: 'How to use in CSS?', a: 'Paste inside url() — background-image: url(\'data:image/png;base64,...\').' },
    { q: 'How in HTML?', a: 'Put in img src: <img src="data:image/png;base64,...">.' },
    { q: 'Any file-size limit?', a: 'Practical browser limits around 2 MB for inline data URIs.' },
  ],
  ctaTitle: 'Need a hosted URL instead?', ctaBody: 'For images > 2 KB, a CDN URL is faster.', ctaButton: 'Try the main uploader',
};
const es: LandingContent = { ...en, metaTitle: 'Imagen a Base64 — Navegador | Gratis', metaDescription: 'Convierte cualquier imagen PNG, JPG, GIF, SVG o WebP en un data URI base64 listo para pegar en CSS, HTML o JSON. Instantáneo, gratis, en tu navegador, sin subir nada.', schemaName: 'Codificador Imagen a Base64', h1Pre: 'Imagen a Base64', h1Highlight: 'data URI instantáneo.', intro: 'Suelta una imagen — obtén un data URI listo para pegar en CSS, HTML o JSON.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Image vers Base64 — Navigateur | Gratuit', metaDescription: 'Convertissez n\'importe quelle image PNG, JPG, GIF, SVG ou WebP en data URI base64 prêt à coller dans CSS, HTML ou JSON. Instantané, gratuit, dans votre navigateur, sans envoi.', schemaName: 'Encodeur Image vers Base64', h1Pre: 'Image vers Base64', h1Highlight: 'data URI instantané.', intro: 'Déposez une image — obtenez un data URI prêt à coller dans CSS, HTML ou JSON.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Bild zu Base64 — Browser | Kostenlos', metaDescription: 'Wandeln Sie jedes PNG-, JPG-, GIF-, SVG- oder WebP-Bild in eine Base64-Data-URI um, die Sie in CSS, HTML oder JSON einfügen können. Sofort, kostenlos, im Browser, ohne Upload.', schemaName: 'Bild zu Base64 Encoder', h1Pre: 'Bild zu Base64', h1Highlight: 'sofort Data-URI.', intro: 'Bild ablegen — erhalten Sie eine einsatzbereite Data-URI für CSS, HTML oder JSON.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: '画像を Base64 に — ブラウザ | 無料', metaDescription: 'PNG・JPG・GIF・SVG・WebP のあらゆる画像を、CSS・HTML・JSON に貼り付け可能な base64 データ URI に変換。即時、無料、ブラウザ完結、アップロード不要。', schemaName: '画像から Base64 エンコーダー', h1Pre: '画像を Base64 に', h1Highlight: '即座にデータ URI。', intro: '画像をドロップ — CSS、HTML、JSON、メール用のデータ URI を取得。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: '图片转 Base64 — 纯浏览器 | 免费', metaDescription: '将任意 PNG、JPG、GIF、SVG 或 WebP 图片转换为可粘贴到 CSS、HTML 或 JSON 中的 base64 data URI。即时、免费、在浏览器中运行、无需上传。', schemaName: '图片转 Base64 编码器', h1Pre: '图片转 Base64', h1Highlight: '即时生成 data URI。', intro: '拖入一张图片 — 获得可粘贴到 CSS、HTML 或 JSON 的 data URI。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });
