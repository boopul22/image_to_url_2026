import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Base64 to Image — Browser Decoder | Free',
  metaDescription: 'Decode base64 data URIs to downloadable images in your browser. Free, instant, no upload.',
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
const hi: LandingContent = { ...en, metaTitle: 'Base64 से इमेज — ब्राउज़र डिकोडर | मुफ्त', schemaName: 'Base64 से इमेज डिकोडर', h1Pre: 'Base64 से इमेज', h1Highlight: 'पेस्ट, प्रीव्यू, डाउनलोड।', intro: 'base64 या पूर्ण data URI पेस्ट करें — प्रीव्यू और डाउनलोड करने योग्य इमेज पाएं।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'Base64 a Imagen — Decodificador Navegador | Gratis', schemaName: 'Decodificador Base64 a Imagen', h1Pre: 'Base64 a Imagen', h1Highlight: 'pega, previsualiza, descarga.', intro: 'Pega un string base64 o un data URI completo — obtén un archivo descargable.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Base64 vers Image — Décodeur Navigateur | Gratuit', schemaName: 'Décodeur Base64 vers Image', h1Pre: 'Base64 vers Image', h1Highlight: 'collez, prévisualisez, téléchargez.', intro: 'Collez une chaîne base64 ou un data URI complet — obtenez un fichier image téléchargeable.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Base64 zu Bild — Browser-Decoder | Kostenlos', schemaName: 'Base64 zu Bild Decoder', h1Pre: 'Base64 zu Bild', h1Highlight: 'einfügen, vorschauen, herunterladen.', intro: 'Base64-String oder vollständige Data-URI einfügen — herunterladbare Bilddatei erhalten.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'Base64 から画像 — ブラウザデコーダー | 無料', schemaName: 'Base64 から画像デコーダー', h1Pre: 'Base64 から画像', h1Highlight: '貼り付け、プレビュー、ダウンロード。', intro: 'base64 文字列または完全な data URI を貼り付け — プレビュー可能でダウンロード可能な画像を取得。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
