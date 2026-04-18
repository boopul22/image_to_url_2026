import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'WebP to PNG — 100% Browser, Preserves Transparency',
  metaDescription: 'Convert WebP to PNG in your browser. Preserves alpha. Free, no upload.',
  schemaName: 'WebP to PNG Converter',
  schemaDescription: 'Convert WebP images to PNG losslessly in your browser, preserving transparency.',
  badge: 'Browser-only Tool',
  h1Pre: 'WebP to PNG', h1Highlight: 'transparency intact.',
  intro: 'Convert WebP to PNG while preserving the alpha channel. Lossless re-encoding, in your browser, zero upload.',
  howTitle: 'How to convert WebP to PNG',
  steps: [
    { title: 'Drop WebP files', body: 'Drag .webp files into the drop zone.' },
    { title: 'Browser re-encodes losslessly', body: 'Canvas decodes WebP and writes PNG with alpha channel preserved.' },
    { title: 'Download PNG', body: 'Click Download on each file.' },
  ],
  whyTitle: 'Why PNG from WebP',
  whyItems: [
    { title: 'Transparency preserved', body: 'PNG supports the same alpha channel WebP uses.' },
    { title: 'Lossless pixels', body: 'No further compression loss on top of whatever the WebP had.' },
    { title: 'Editor compatibility', body: 'Every design tool accepts PNG.' },
    { title: 'Archival fidelity', body: 'PNG is a better archive format than WebP for future-proof storage.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Does this preserve transparency?', a: 'Yes. PNG supports the same alpha channel WebP uses.' },
    { q: 'Is the PNG lossless?', a: 'PNG encoding is lossless. The source WebP quality is preserved as-is.' },
    { q: 'Why is the PNG so much larger?', a: 'PNG uses deflate; WebP uses a custom encoder. Expect PNG output 3–8× larger.' },
    { q: 'Are my files uploaded?', a: 'No — zero network activity during conversion.' },
    { q: 'Any batch limit?', a: 'No count or size limit since there is no upload.' },
    { q: 'Animated WebPs?', a: 'Canvas decodes only the first frame.' },
    { q: 'Is metadata preserved?', a: 'No. Canvas re-encoding strips EXIF, XMP, and color profiles.' },
    { q: 'Why convert instead of just renaming?', a: 'File extension alone does not change the format. Real re-encoding is required.' },
  ],
  ctaTitle: 'Need a hosted URL?', ctaBody: 'After converting, click Get URL.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'WebP से PNG — पारदर्शिता के साथ | ब्राउज़र में', schemaName: 'WebP से PNG कनवर्टर', h1Pre: 'WebP से PNG', h1Highlight: 'पारदर्शिता बरकरार।', intro: 'अल्फा चैनल बनाए रखते हुए WebP को PNG में बदलें। लॉसलेस, ब्राउज़र में।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'WebP a PNG — Navegador, preserva transparencia', schemaName: 'Convertidor WebP a PNG', h1Pre: 'WebP a PNG', h1Highlight: 'transparencia intacta.', intro: 'Convierte WebP a PNG preservando el canal alfa. Sin pérdidas.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'WebP vers PNG — Navigateur, transparence préservée', schemaName: 'Convertisseur WebP vers PNG', h1Pre: 'WebP vers PNG', h1Highlight: 'transparence intacte.', intro: 'Convertissez WebP en PNG en préservant le canal alpha.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'WebP zu PNG — Browser, Transparenz erhalten', schemaName: 'WebP zu PNG Konverter', h1Pre: 'WebP zu PNG', h1Highlight: 'Transparenz erhalten.', intro: 'Konvertieren Sie WebP in PNG unter Beibehaltung des Alphakanals.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'WebP から PNG — ブラウザ、透明度保持', schemaName: 'WebP から PNG 変換ツール', h1Pre: 'WebP から PNG', h1Highlight: '透明度そのまま。', intro: 'アルファチャンネルを保持したまま WebP を PNG に変換。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
