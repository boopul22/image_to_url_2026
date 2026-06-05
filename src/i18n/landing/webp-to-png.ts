import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'WebP to PNG — 100% Browser, Preserves Transparency',
  metaDescription: 'Convert WebP to PNG in your browser with lossless re-encoding that preserves the alpha channel. Free, no upload, unlimited files — editor-ready and archival.',
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
const es: LandingContent = { ...en, metaTitle: 'WebP a PNG — Navegador, preserva transparencia', metaDescription: 'Convierte WebP a PNG en tu navegador con re-codificación sin pérdidas que conserva el canal alfa. Gratis, sin subir nada, ilimitado — listo para editores y archivo.', schemaName: 'Convertidor WebP a PNG', h1Pre: 'WebP a PNG', h1Highlight: 'transparencia intacta.', intro: 'Convierte WebP a PNG preservando el canal alfa. Sin pérdidas.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'WebP vers PNG — Navigateur, transparence préservée', metaDescription: 'Convertissez WebP en PNG dans votre navigateur avec un ré-encodage sans perte qui conserve le canal alpha. Gratuit, sans envoi, illimité — prêt pour vos éditeurs et l\'archivage.', schemaName: 'Convertisseur WebP vers PNG', h1Pre: 'WebP vers PNG', h1Highlight: 'transparence intacte.', intro: 'Convertissez WebP en PNG en préservant le canal alpha.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'WebP zu PNG — Browser, Transparenz erhalten', metaDescription: 'Konvertieren Sie WebP im Browser zu PNG mit verlustfreiem Re-Encoding, das den Alphakanal erhält. Kostenlos, ohne Upload, unbegrenzt — editor-fertig und archivtauglich.', schemaName: 'WebP zu PNG Konverter', h1Pre: 'WebP zu PNG', h1Highlight: 'Transparenz erhalten.', intro: 'Konvertieren Sie WebP in PNG unter Beibehaltung des Alphakanals.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'WebP から PNG — ブラウザ、透明度保持', metaDescription: 'アルファチャンネルを保持するロスレス再エンコードで、WebP をブラウザ内で PNG に変換。無料、アップロード不要、無制限 — 編集や保存に最適。', schemaName: 'WebP から PNG 変換ツール', h1Pre: 'WebP から PNG', h1Highlight: '透明度そのまま。', intro: 'アルファチャンネルを保持したまま WebP を PNG に変換。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'WebP 转 PNG — 浏览器，保留透明度', metaDescription: '在浏览器中以无损重新编码将 WebP 转换为 PNG，保留 alpha 通道。免费、无需上传、无限制 — 适合编辑和长期存档。', schemaName: 'WebP 转 PNG 转换器', h1Pre: 'WebP 转 PNG', h1Highlight: '透明度保持不变。', intro: '在保留 alpha 通道的前提下将 WebP 转换为 PNG。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });
