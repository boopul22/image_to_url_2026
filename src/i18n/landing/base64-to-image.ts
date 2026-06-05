import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Base64 to Image — Browser Decoder | Free',
  metaDescription: 'Decode base64 strings and data URIs back into previewable, downloadable image files right in your browser. Free, instant, fully local, no upload.',
  schemaName: 'Base64 to Image Decoder',
  schemaDescription: 'Decode base64 data URIs to image files locally in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'Base64 to Image', h1Highlight: 'paste, preview, download.',
  intro: 'Paste a base64 string or a full data URI — get a previewable, downloadable image file. Fully local.',
  howTitle: 'How to decode',
  steps: [
    { title: 'Paste base64 or data URI', body: 'Paste either the full data:image/...;base64,... string or just the base64 payload.' },
    { title: 'Click Decode', body: 'The image preview appears; click Download to save.' },
    { title: 'Save', body: 'Use the downloaded file as a normal image.' },
  ],
  whyTitle: 'Why decode base64',
  whyItems: [
    { title: 'Debug data URIs', body: 'Verify that an encoded data URI actually represents the expected image.' },
    { title: 'Extract from config', body: 'Pull inline images out of JSON config and save as files.' },
    { title: 'Email-embedded images', body: 'Recover images embedded in email source.' },
    { title: 'Offline recovery', body: 'No internet needed — runs fully in your browser.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Do I need the data: prefix?', a: 'Either works. If full data URI, decoder uses embedded MIME. If raw, defaults to PNG.' },
    { q: 'Why is nothing happening after paste?', a: 'Usually invisible line breaks. Remove them or paste as plain text.' },
    { q: 'Is anything uploaded?', a: 'No. Decoding is a local atob() and Blob constructor.' },
    { q: 'What formats can I get out?', a: 'PNG, JPG, GIF, WebP, SVG — whatever was encoded.' },
    { q: 'Max paste length?', a: 'Several MB in textarea. Past ~10 MB performance degrades.' },
    { q: 'Transparent PNG looks blank?', a: 'It might actually have transparency. Right-click Save to verify.' },
    { q: 'Base64 URL-safe variants?', a: 'Yes — we normalize - to + and _ to /.' },
    { q: 'Data URI with URL-encoded SVG?', a: 'Preview works; open in new tab to see the SVG.' },
  ],
  ctaTitle: 'Host the decoded image?', ctaBody: 'Upload for a permanent URL.', ctaButton: 'Try the main uploader',
};
const es: LandingContent = { ...en, metaTitle: 'Base64 a Imagen — Decodificador Navegador | Gratis', metaDescription: 'Decodifica cadenas base64 y data URIs en archivos de imagen previsualizables y descargables en tu navegador. Gratis, instantáneo, local, sin subir nada.', schemaName: 'Decodificador Base64 a Imagen', h1Pre: 'Base64 a Imagen', h1Highlight: 'pega, previsualiza, descarga.', intro: 'Pega un string base64 o un data URI completo — obtén un archivo descargable.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Base64 vers Image — Décodeur Navigateur | Gratuit', metaDescription: 'Décodez des chaînes base64 et des data URIs en fichiers image prévisualisables et téléchargeables dans votre navigateur. Gratuit, instantané, local, sans envoi.', schemaName: 'Décodeur Base64 vers Image', h1Pre: 'Base64 vers Image', h1Highlight: 'collez, prévisualisez, téléchargez.', intro: 'Collez une chaîne base64 ou un data URI complet — obtenez un fichier image téléchargeable.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Base64 zu Bild — Browser-Decoder | Kostenlos', metaDescription: 'Dekodieren Sie Base64-Strings und Data-URIs in Ihrem Browser zurück in vorschaubare, herunterladbare Bilddateien. Kostenlos, sofort, lokal, ohne Upload.', schemaName: 'Base64 zu Bild Decoder', h1Pre: 'Base64 zu Bild', h1Highlight: 'einfügen, vorschauen, herunterladen.', intro: 'Base64-String oder vollständige Data-URI einfügen — herunterladbare Bilddatei erhalten.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'Base64 から画像 — ブラウザデコーダー | 無料', metaDescription: 'base64 文字列や data URI をブラウザでプレビュー・ダウンロード可能な画像ファイルにデコード。無料、即時、完全ローカル、アップロード不要。', schemaName: 'Base64 から画像デコーダー', h1Pre: 'Base64 から画像', h1Highlight: '貼り付け、プレビュー、ダウンロード。', intro: 'base64 文字列または完全な data URI を貼り付け — プレビュー可能でダウンロード可能な画像を取得。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'Base64 转图片 — 浏览器解码器 | 免费', metaDescription: '在浏览器中将 base64 字符串和 data URI 解码为可预览、可下载的图片文件。免费、即时、完全本地、无需上传。', schemaName: 'Base64 转图片解码器', h1Pre: 'Base64 转图片', h1Highlight: '粘贴、预览、下载。', intro: '粘贴 base64 字符串或完整的 data URI — 获得可预览、可下载的图片文件。完全本地处理。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });
