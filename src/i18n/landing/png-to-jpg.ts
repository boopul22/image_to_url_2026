import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'PNG to JPG Converter — 100% in Browser | Free, No Upload',
  metaDescription: 'Convert PNG to JPG in your browser. Zero upload, no watermark, unlimited files. Free and private — runs entirely on your device.',
  schemaName: 'PNG to JPG Converter',
  schemaDescription: 'Convert PNG images to JPG entirely in your browser. Files never leave your device.',
  badge: 'Browser-only Tool',
  h1Pre: 'PNG to JPG Converter',
  h1Highlight: 'runs on your device.',
  intro: 'Drop your PNG files and get JPGs instantly — smaller, universally compatible, ready to email or upload anywhere. Conversion happens locally. No upload, no signup, no watermark.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop PNG files', body: 'Drag from Finder, desktop, downloads, or a folder. Multi-select is fine — they are processed one by one.' },
    { title: 'Convert locally', body: 'Your browser decodes the PNG, flattens transparency to white, and re-encodes as JPG using the canvas API. Zero network calls.' },
    { title: 'Download or host', body: 'Save the JPG to your device, or click Get URL to host it on our CDN and copy a permanent link.' },
  ],
  whyTitle: 'Why convert PNG to JPG?',
  whyItems: [
    { title: '5–10× smaller files', body: 'Photos as PNG are wastefully large. JPG at 92% quality produces files a fraction of the size with no visible difference.' },
    { title: 'Email attachments', body: 'Gmail\'s 25 MB cap kills big PNG batches. Convert first and send ten times as many photos in one email.' },
    { title: 'Marketplaces & listings', body: 'eBay, Depop, Etsy, Facebook Marketplace, and OLX recompress anything you upload. Sending PNG just wastes bandwidth.' },
    { title: 'Strips EXIF by default', body: 'Canvas re-encoding drops every embedded metadata field. A privacy win when sharing screenshots that might contain file paths.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Does this upload my PNG files?', a: 'No. Conversion runs in your browser using the canvas API. Your PNGs never leave your device unless you explicitly click Get URL to host the converted JPG.' },
    { q: 'Why does my transparent PNG come out with a white background?', a: 'JPG does not support transparency — the spec has no alpha channel. We fill transparent pixels with white before encoding. If you need transparency preserved, use the PNG to WebP converter instead.' },
    { q: 'Will the JPG be smaller than the PNG?', a: 'Usually much smaller. PNG uses lossless compression; JPG uses lossy compression tuned for photos. A 4 MB PNG photo typically drops to 300–700 KB as JPG at 92% quality.' },
    { q: 'Is there a file-size or file-count limit?', a: 'No hard limit. Because conversion is local, you are bounded only by your device\'s RAM — typically dozens of files without trouble.' },
    { q: 'What quality setting should I use?', a: '92% is the visual-lossless sweet spot for photos. Use 80% for web thumbnails to shrink files further.' },
    { q: 'Does this preserve my PNG\'s EXIF or metadata?', a: 'No. Browser-side re-encoding strips EXIF, color profiles, and every other embedded metadata. For most uploads that is a privacy win.' },
    { q: 'Can I convert PNG screenshots this way?', a: 'Yes. Screenshots convert well, but text stays crisper at 95–100% quality because JPG\'s DCT blocks blur sharp edges. For screenshots you share online, consider WebP instead.' },
    { q: 'What browsers work?', a: 'Every modern browser: Chrome, Edge, Firefox, Safari, Brave, Arc, and mobile browsers on iOS and Android.' },
  ],
  ctaTitle: 'Want a permanent link to the JPG?',
  ctaBody: 'After converting, click Get URL on any file to host it on our CDN — free, no signup, no expiry.',
  ctaButton: 'Try the main uploader',
};

const hi: LandingContent = {
  ...en,
  metaTitle: 'PNG से JPG कनवर्टर — 100% ब्राउज़र में | मुफ्त',
  metaDescription: 'अपने ब्राउज़र में PNG को JPG में बदलें। कोई अपलोड नहीं, कोई वॉटरमार्क नहीं, असीमित फाइलें। मुफ्त और निजी — आपके डिवाइस पर चलता है।',
  schemaName: 'PNG से JPG कनवर्टर',
  badge: 'ब्राउज़र-ओनली टूल',
  h1Pre: 'PNG से JPG कनवर्टर',
  h1Highlight: 'आपके डिवाइस पर चलता है।',
  intro: 'अपनी PNG फाइलें ड्रॉप करें और तुरंत JPG पाएं — छोटी, सार्वभौमिक रूप से संगत, ईमेल या अपलोड करने के लिए तैयार। रूपांतरण स्थानीय रूप से होता है। कोई अपलोड नहीं, कोई साइनअप नहीं।',
  howTitle: 'यह कैसे काम करता है',
  whyTitle: 'PNG को JPG में क्यों बदलें?',
  faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
  ctaTitle: 'क्या आपको JPG का स्थायी लिंक चाहिए?',
  ctaBody: 'कनवर्ट करने के बाद, किसी भी फाइल पर Get URL क्लिक करें — मुफ्त, कोई साइनअप नहीं।',
  ctaButton: 'मुख्य अपलोडर आज़माएं',
};

const es: LandingContent = {
  ...en,
  metaTitle: 'Convertidor PNG a JPG — 100% en el Navegador | Gratis',
  metaDescription: 'Convierte PNG a JPG en tu navegador. Sin subidas, sin marca de agua, archivos ilimitados. Gratuito y privado.',
  schemaName: 'Convertidor PNG a JPG',
  badge: 'Herramienta solo en el navegador',
  h1Pre: 'Convertidor PNG a JPG',
  h1Highlight: 'se ejecuta en tu dispositivo.',
  intro: 'Suelta tus archivos PNG y obtén JPG al instante — más pequeños, compatibles universalmente. La conversión ocurre localmente. Sin subidas, sin registro, sin marca de agua.',
  howTitle: 'Cómo funciona',
  whyTitle: '¿Por qué convertir PNG a JPG?',
  faqTitle: 'Preguntas frecuentes',
  ctaTitle: '¿Necesitas un enlace permanente al JPG?',
  ctaBody: 'Tras convertir, haz clic en Get URL para alojarlo en nuestra CDN — gratis, sin registro.',
  ctaButton: 'Probar el cargador principal',
};

const fr: LandingContent = {
  ...en,
  metaTitle: 'Convertisseur PNG vers JPG — 100% Navigateur | Gratuit',
  metaDescription: 'Convertissez PNG en JPG dans votre navigateur. Aucun envoi, aucun filigrane, fichiers illimités. Gratuit et privé.',
  schemaName: 'Convertisseur PNG vers JPG',
  badge: 'Outil navigateur uniquement',
  h1Pre: 'Convertisseur PNG vers JPG',
  h1Highlight: 's\'exécute sur votre appareil.',
  intro: 'Déposez vos fichiers PNG et obtenez des JPG instantanément — plus petits, universellement compatibles. La conversion a lieu localement. Aucun envoi, aucune inscription, aucun filigrane.',
  howTitle: 'Comment ça marche',
  whyTitle: 'Pourquoi convertir PNG en JPG ?',
  faqTitle: 'Questions fréquentes',
  ctaTitle: 'Besoin d\'un lien permanent vers le JPG ?',
  ctaBody: 'Après conversion, cliquez sur Get URL pour l\'héberger sur notre CDN — gratuit, sans inscription.',
  ctaButton: 'Essayer le téléchargeur principal',
};

const de: LandingContent = {
  ...en,
  metaTitle: 'PNG zu JPG Konverter — 100% im Browser | Kostenlos',
  metaDescription: 'Konvertieren Sie PNG in JPG in Ihrem Browser. Kein Upload, kein Wasserzeichen, unbegrenzte Dateien. Kostenlos und privat.',
  schemaName: 'PNG zu JPG Konverter',
  badge: 'Nur-Browser-Tool',
  h1Pre: 'PNG zu JPG Konverter',
  h1Highlight: 'läuft auf Ihrem Gerät.',
  intro: 'Legen Sie Ihre PNG-Dateien ab und erhalten Sie sofort JPGs — kleiner, universell kompatibel. Die Konvertierung erfolgt lokal. Kein Upload, keine Anmeldung, kein Wasserzeichen.',
  howTitle: 'So funktioniert es',
  whyTitle: 'Warum PNG in JPG konvertieren?',
  faqTitle: 'Häufige Fragen',
  ctaTitle: 'Brauchen Sie einen dauerhaften JPG-Link?',
  ctaBody: 'Nach der Konvertierung klicken Sie Get URL, um es auf unserer CDN zu hosten — kostenlos.',
  ctaButton: 'Hauptuploader ausprobieren',
};

const ja: LandingContent = {
  ...en,
  metaTitle: 'PNG から JPG 変換ツール — 100% ブラウザで | 無料',
  metaDescription: 'ブラウザで PNG を JPG に変換。アップロード不要、透かしなし、無制限。無料で安全 — デバイス上で実行されます。',
  schemaName: 'PNG から JPG 変換ツール',
  badge: 'ブラウザ専用ツール',
  h1Pre: 'PNG から JPG 変換ツール',
  h1Highlight: 'あなたのデバイスで動作します。',
  intro: 'PNG ファイルをドロップして、すぐに JPG を取得 — より小さく、ユニバーサルに互換。変換はローカルで行われます。アップロード、サインアップ、透かしは一切ありません。',
  howTitle: '仕組み',
  whyTitle: 'PNG を JPG に変換する理由',
  faqTitle: 'よくある質問',
  ctaTitle: 'JPG の永続リンクが必要ですか？',
  ctaBody: '変換後、Get URL をクリックして CDN にホスト — 無料、サインアップ不要。',
  ctaButton: 'メインアップローダーを試す',
};

export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });
