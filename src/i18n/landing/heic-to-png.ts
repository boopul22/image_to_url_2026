import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'HEIC to PNG — 100% Browser | Lossless iPhone Conversion',
  metaDescription: 'Convert iPhone HEIC photos to lossless PNG in your browser. Free, private, no upload.',
  schemaName: 'HEIC to PNG Converter',
  schemaDescription: 'Convert iPhone HEIC photos to lossless PNG entirely in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'HEIC to PNG', h1Highlight: 'lossless, private, free.',
  intro: 'Drop iPhone HEIC photos and get edit-ready PNGs. A WebAssembly decoder runs in your browser — nothing uploads.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop HEIC files', body: 'Drag .heic or .heif files into the drop zone.' },
    { title: 'Browser decodes via WebAssembly', body: 'A WASM decoder reads the HEIC and emits lossless PNG locally.' },
    { title: 'Download the PNG', body: 'Save each output or click Get URL to host it.' },
  ],
  whyTitle: 'Why PNG from HEIC',
  whyItems: [
    { title: 'Editable', body: 'PNG re-saves without further quality loss.' },
    { title: 'Transparent capable', body: 'You can later erase backgrounds.' },
    { title: 'Universally supported', body: 'Every app, OS, and print pipeline accepts PNG.' },
    { title: 'Local and private', body: 'HEIC decoder runs in your browser — photos never leave.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Why convert HEIC to PNG?', a: 'Pick PNG for editing or lossless fidelity. Every future save will not degrade it.' },
    { q: 'Is the PNG truly lossless from HEIC?', a: 'Lossless on the PNG side. The HEIC source itself is typically lossy.' },
    { q: 'Why is the PNG so much larger?', a: 'HEIC is state-of-the-art compression; PNG uses a general-purpose lossless encoder. Expect 5–15× larger.' },
    { q: 'Does anything get uploaded?', a: 'No. Both the HEIC decoder and PNG encoder run in your browser.' },
    { q: 'How do I get HEIC files off my iPhone?', a: 'AirDrop to a Mac, USB, email, chat app, then drag onto this page.' },
    { q: 'Does EXIF survive?', a: 'No. WASM re-encoding strips EXIF and GPS.' },
    { q: 'Batch limit?', a: 'None. Dozens of photos at a time work on typical hardware.' },
    { q: 'What if a file fails?', a: 'Some older HEIC variants are unsupported. Failed files show inline; the rest still convert.' },
  ],
  ctaTitle: 'Want a hosted URL?', ctaBody: 'Click Get URL after conversion.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'HEIC से PNG — 100% ब्राउज़र | लॉसलेस iPhone', schemaName: 'HEIC से PNG कनवर्टर', h1Pre: 'HEIC से PNG', h1Highlight: 'लॉसलेस, निजी, मुफ्त।', intro: 'iPhone HEIC फोटो ड्रॉप करें और संपादित-तैयार PNG पाएं। WebAssembly डिकोडर ब्राउज़र में चलता है।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'HEIC a PNG — Navegador | Conversión sin pérdidas', schemaName: 'Convertidor HEIC a PNG', h1Pre: 'HEIC a PNG', h1Highlight: 'sin pérdidas, privado, gratis.', intro: 'Suelta fotos HEIC de iPhone y obtén PNG listos para editar.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'HEIC vers PNG — Navigateur | Conversion sans perte', schemaName: 'Convertisseur HEIC vers PNG', h1Pre: 'HEIC vers PNG', h1Highlight: 'sans perte, privé, gratuit.', intro: 'Déposez des photos HEIC d\'iPhone et obtenez des PNG prêts à éditer.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'HEIC zu PNG — Browser | Verlustfrei', schemaName: 'HEIC zu PNG Konverter', h1Pre: 'HEIC zu PNG', h1Highlight: 'verlustfrei, privat, kostenlos.', intro: 'iPhone HEIC-Fotos ablegen und bearbeitungsfertige PNGs erhalten.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'HEIC から PNG — ブラウザ | ロスレス iPhone 変換', schemaName: 'HEIC から PNG 変換ツール', h1Pre: 'HEIC から PNG', h1Highlight: 'ロスレス、プライベート、無料。', intro: 'iPhone HEIC 写真をドロップして編集可能な PNG を取得。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
