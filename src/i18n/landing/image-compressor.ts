import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Image Compressor — 100% in Browser | Free, No Upload',
  metaDescription: 'Compress JPG, PNG, and WebP in your browser. Adjustable quality, before/after sizes. Free, no signup.',
  schemaName: 'Image Compressor',
  schemaDescription: 'Compress PNG, JPG, and WebP images in your browser. Adjustable quality and format.',
  badge: 'Browser-only Tool',
  h1Pre: 'Image Compressor', h1Highlight: 'half the size, same look.',
  intro: 'Shrink JPG, PNG, or WebP files without uploading them anywhere. Live before/after sizes, adjustable quality, batch-friendly.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop images', body: 'Drag PNG, JPG, or WebP files into the drop zone.' },
    { title: 'Pick format & quality', body: 'Match source or force to JPG/WebP; slide quality between 30–100%.' },
    { title: 'Download smaller files', body: 'Each result shows before/after size.' },
  ],
  whyTitle: 'Why compress locally',
  whyItems: [
    { title: 'Faster uploads', body: 'Pre-compressed files upload faster everywhere.' },
    { title: 'Better Core Web Vitals', body: 'Smaller images improve LCP scores.' },
    { title: 'Email-friendly sizes', body: 'Fit under Gmail/Outlook attachment caps.' },
    { title: 'Privacy-first', body: 'Your files never leave your browser.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'How much can I compress without visible quality loss?', a: 'For photos, quality 80–85 in JPG or WebP drops file size 50–70% and is visually indistinguishable on screens.' },
    { q: 'Is this really compressing, or just converting?', a: 'Both. The image is re-encoded at a lower quality target.' },
    { q: 'Does it upload my images?', a: 'No. The compressor runs in your browser via canvas.' },
    { q: 'Will PNG transparency be preserved?', a: 'Only if you output PNG or WebP. JPG flattens to white.' },
    { q: 'Large images (10 MB+)?', a: 'Works. No server roundtrip means you are bounded only by RAM.' },
    { q: 'Does it strip metadata?', a: 'Yes. EXIF, GPS, and ICC profiles are dropped.' },
    { q: 'Batch hundreds of images?', a: 'Yes — drop as many as you want.' },
    { q: 'Best use case?', a: 'Web delivery, email attachments, and marketplace listings.' },
  ],
  ctaTitle: 'Need a hosted URL?', ctaBody: 'Upload the compressed file for a permanent link.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'इमेज कंप्रेसर — 100% ब्राउज़र में | मुफ्त', schemaName: 'इमेज कंप्रेसर', h1Pre: 'इमेज कंप्रेसर', h1Highlight: 'आधा आकार, वही दिखावट।', intro: 'JPG, PNG, या WebP फाइलें अपलोड किए बिना सिकोड़ें। लाइव आकार तुलना।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'Compresor de Imágenes — Navegador | Gratis', schemaName: 'Compresor de Imágenes', h1Pre: 'Compresor de Imágenes', h1Highlight: 'la mitad del tamaño.', intro: 'Reduce JPG, PNG o WebP sin subirlos. Tamaños antes/después en vivo.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Compresseur d\'Images — Navigateur | Gratuit', schemaName: 'Compresseur d\'Images', h1Pre: 'Compresseur d\'Images', h1Highlight: 'moitié taille.', intro: 'Réduisez JPG, PNG ou WebP sans envoi. Tailles avant/après en direct.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Bildkomprimierer — Browser | Kostenlos', schemaName: 'Bildkomprimierer', h1Pre: 'Bildkomprimierer', h1Highlight: 'halbe Größe, gleiches Aussehen.', intro: 'Verkleinern Sie JPG, PNG oder WebP, ohne sie hochzuladen.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: '画像圧縮ツール — ブラウザ | 無料', schemaName: '画像圧縮ツール', h1Pre: '画像圧縮ツール', h1Highlight: 'サイズ半分、同じ見た目。', intro: 'アップロードなしで JPG、PNG、WebP を縮小。ライブでサイズ比較。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
