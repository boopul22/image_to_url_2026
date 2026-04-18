import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'WebP to JPG Converter — 100% in Browser | Free',
  metaDescription: 'Convert WebP to JPG in your browser. Free, no upload, no watermark, unlimited files.',
  schemaName: 'WebP to JPG Converter',
  schemaDescription: 'Convert WebP images to JPG locally in your browser. Fix incompatible files.',
  badge: 'Browser-only Tool',
  h1Pre: 'WebP to JPG Converter', h1Highlight: 'fix incompatible files.',
  intro: 'Stuck with WebP files an app won\'t accept? Drop them here, get JPGs back — all in your browser, no upload.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop WebP files', body: 'Drag .webp files into the drop zone or click to select.' },
    { title: 'Pick a quality', body: '92% is the sweet spot for photos. Drop lower to save bandwidth.' },
    { title: 'Download JPG', body: 'Click Download on each file. No server round-trip.' },
  ],
  whyTitle: 'When JPG is the only option',
  whyItems: [
    { title: 'Print shops', body: 'Photo printers and lab kiosks still default to JPG/TIFF. WebP rarely makes the upload list.' },
    { title: 'Old software', body: 'Photoshop CS6, Lightroom 5, older Office builds, and some inventory apps still choke on WebP.' },
    { title: 'Stock sites', body: 'Most stock-photo submission portals require JPG, often with a minimum resolution check.' },
    { title: 'Email attachments', body: 'Older Outlook installs silently strip WebP inline. Convert once and avoid the support ticket.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Why do I need to convert WebP to JPG?', a: 'Some older apps, print shops, and email clients reject WebP. JPG works everywhere.' },
    { q: 'Does converting to JPG lose quality?', a: 'A small amount — JPG is lossy. At 92% quality the difference is imperceptible on screen.' },
    { q: 'What about transparent WebPs?', a: 'JPG has no alpha channel. Transparent pixels get flattened to white. If transparency matters, convert WebP to PNG instead.' },
    { q: 'Are my files uploaded anywhere?', a: 'No. Conversion runs entirely in your browser via canvas decoding and re-encoding.' },
    { q: 'Any limit on file count or size?', a: 'No server limit. Only your device\'s RAM.' },
    { q: 'Does it preserve EXIF?', a: 'No. Canvas re-encoding drops all metadata.' },
    { q: 'Animated WebPs?', a: 'Canvas only reads the first frame of animated WebP. For animation, use a GIF export tool.' },
    { q: 'Browser support?', a: 'Safari 14+, Chrome/Edge/Firefox all versions since 2021.' },
  ],
  ctaTitle: 'Want a permanent URL?', ctaBody: 'After converting, click Get URL to host on our CDN.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'WebP से JPG कनवर्टर — 100% ब्राउज़र में | मुफ्त', schemaName: 'WebP से JPG कनवर्टर', h1Pre: 'WebP से JPG कनवर्टर', h1Highlight: 'असंगत फाइलें ठीक करें।', intro: 'WebP फाइलें जिन्हें कोई ऐप स्वीकार नहीं करता? यहाँ ड्रॉप करें और JPG पाएं।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'Convertidor WebP a JPG — 100% Navegador | Gratis', schemaName: 'Convertidor WebP a JPG', h1Pre: 'Convertidor WebP a JPG', h1Highlight: 'arregla archivos incompatibles.', intro: '¿Archivos WebP que no se aceptan? Suéltalos aquí y obtén JPG.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Convertisseur WebP vers JPG — Navigateur | Gratuit', schemaName: 'Convertisseur WebP vers JPG', h1Pre: 'Convertisseur WebP vers JPG', h1Highlight: 'corrigez les fichiers incompatibles.', intro: 'Fichiers WebP refusés par une app ? Déposez-les ici pour obtenir des JPG.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'WebP zu JPG Konverter — 100% im Browser | Kostenlos', schemaName: 'WebP zu JPG Konverter', h1Pre: 'WebP zu JPG Konverter', h1Highlight: 'inkompatible Dateien reparieren.', intro: 'WebP-Dateien, die eine App nicht akzeptiert? Hier ablegen und JPG erhalten.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'WebP から JPG 変換ツール — 100% ブラウザ | 無料', schemaName: 'WebP から JPG 変換ツール', h1Pre: 'WebP から JPG 変換ツール', h1Highlight: '非対応ファイルを修正。', intro: 'アプリが受け付けない WebP ファイル？ここにドロップして JPG を取得。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
