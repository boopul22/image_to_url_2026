import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Image Resizer — 100% Browser | Free, Unlimited',
  metaDescription: 'Resize JPG, PNG, WebP in your browser. By pixels or percent, aspect-lock, no upload.',
  schemaName: 'Image Resizer',
  schemaDescription: 'Resize images by pixel width, height, or percentage in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'Image Resizer', h1Highlight: 'exact pixels, exact ratio.',
  intro: 'Scale images by width, height, or percent. Aspect-ratio lock, batch support, zero upload.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop images', body: 'Drag PNG / JPG / WebP files into the drop zone.' },
    { title: 'Pick a mode & value', body: 'Enter a target width, height, or percentage.' },
    { title: 'Download', body: 'Each output shows the new dimensions and file size.' },
  ],
  whyTitle: 'Why resize in browser',
  whyItems: [
    { title: 'Exact sizes for platforms', body: 'Instagram 1080, eBay 1600, LinkedIn 1200 — hit the spec.' },
    { title: 'Batch shrinking', body: 'Percent-scale many photos at once before upload.' },
    { title: 'No quality drop from uploading', body: 'Resize first; services recompress less.' },
    { title: 'Privacy', body: 'Files never leave your device.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Does it preserve aspect ratio?', a: 'By default, yes. Lock Ratio is on.' },
    { q: 'What resampling is used?', a: 'The browser\'s high-quality image smoothing — bicubic or Lanczos-like.' },
    { q: 'Can I upscale?', a: 'Yes, but browser resampling cannot invent detail.' },
    { q: 'Does it upload anything?', a: 'No. All resizing happens in-browser via canvas.' },
    { q: 'Does it preserve format?', a: 'Yes — PNG stays PNG, JPG stays JPG, WebP stays WebP.' },
    { q: 'What happens to EXIF?', a: 'Stripped — canvas re-encoding drops all metadata.' },
    { q: 'Percent or pixels?', a: 'Pixels when a platform has a spec. Percent for batch-shrinking.' },
    { q: 'Batch different sizes?', a: 'Not at once — this tool applies one rule. Run twice for split outputs.' },
  ],
  ctaTitle: 'Host the resized image?', ctaBody: 'Click Get URL on the main uploader.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'इमेज रीसाइज़र — 100% ब्राउज़र | मुफ्त', schemaName: 'इमेज रीसाइज़र', h1Pre: 'इमेज रीसाइज़र', h1Highlight: 'सटीक पिक्सेल, सटीक अनुपात।', intro: 'चौड़ाई, ऊंचाई, या प्रतिशत से इमेज स्केल करें। अनुपात लॉक, बैच समर्थन।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'Redimensionador de Imágenes — Navegador | Gratis', schemaName: 'Redimensionador de Imágenes', h1Pre: 'Redimensionador de Imágenes', h1Highlight: 'píxeles exactos, proporción exacta.', intro: 'Escala imágenes por ancho, alto o porcentaje.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Redimensionneur d\'Images — Navigateur | Gratuit', schemaName: 'Redimensionneur d\'Images', h1Pre: 'Redimensionneur d\'Images', h1Highlight: 'pixels exacts, ratio exact.', intro: 'Redimensionnez les images par largeur, hauteur ou pourcentage.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Bildgröße ändern — Browser | Kostenlos', schemaName: 'Bildgröße ändern', h1Pre: 'Bildgröße ändern', h1Highlight: 'exakte Pixel, exaktes Verhältnis.', intro: 'Skalieren Sie Bilder nach Breite, Höhe oder Prozent.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: '画像リサイザー — ブラウザ | 無料', schemaName: '画像リサイザー', h1Pre: '画像リサイザー', h1Highlight: '正確なピクセル、正確な比率。', intro: '幅、高さ、またはパーセントで画像をスケール。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
