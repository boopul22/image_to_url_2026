import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Image Compressor — 100% in Browser | Free, No Upload',
  metaDescription: 'Compress JPG, PNG, and WebP images in your browser with adjustable quality and live before/after sizes. Free, batch-friendly, no signup, no upload.',
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
const es: LandingContent = { ...en, metaTitle: 'Compresor de Imágenes — Navegador | Gratis', metaDescription: 'Comprime imágenes JPG, PNG y WebP en tu navegador con calidad ajustable y tamaños antes/después en vivo. Gratis, por lotes, sin registro — sin subir archivos.', schemaName: 'Compresor de Imágenes', h1Pre: 'Compresor de Imágenes', h1Highlight: 'la mitad del tamaño.', intro: 'Reduce JPG, PNG o WebP sin subirlos. Tamaños antes/después en vivo.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Compresseur d\'Images — Navigateur | Gratuit', metaDescription: 'Compressez vos images JPG, PNG et WebP dans votre navigateur avec qualité réglable et tailles avant/après en direct. Gratuit, par lots, sans inscription ni envoi.', schemaName: 'Compresseur d\'Images', h1Pre: 'Compresseur d\'Images', h1Highlight: 'moitié taille.', intro: 'Réduisez JPG, PNG ou WebP sans envoi. Tailles avant/après en direct.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Bildkomprimierer — Browser | Kostenlos', metaDescription: 'Komprimieren Sie JPG-, PNG- und WebP-Bilder im Browser mit einstellbarer Qualität und Live-Größenvergleich. Kostenlos, stapelfähig, ohne Anmeldung oder Upload.', schemaName: 'Bildkomprimierer', h1Pre: 'Bildkomprimierer', h1Highlight: 'halbe Größe, gleiches Aussehen.', intro: 'Verkleinern Sie JPG, PNG oder WebP, ohne sie hochzuladen.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: '画像圧縮ツール — ブラウザ | 無料', metaDescription: 'JPG・PNG・WebP 画像を品質調整しながらブラウザで圧縮。前後のサイズをリアルタイム表示。無料、一括処理対応、登録不要、アップロードなし。', schemaName: '画像圧縮ツール', h1Pre: '画像圧縮ツール', h1Highlight: 'サイズ半分、同じ見た目。', intro: 'アップロードなしで JPG、PNG、WebP を縮小。ライブでサイズ比較。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: '图片压缩工具 — 纯浏览器 | 免费', metaDescription: '在浏览器中压缩 JPG、PNG 和 WebP 图片，质量可调，实时显示压缩前后的大小。免费、支持批量、无需注册 — 文件不会被上传。', schemaName: '图片压缩工具', h1Pre: '图片压缩工具', h1Highlight: '尺寸减半，外观不变。', intro: '无需上传即可缩小 JPG、PNG 或 WebP，实时对比压缩前后大小。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });
