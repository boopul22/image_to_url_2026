// Per-locale llms.txt — localized short description + links for each supported
// language so non-English AI crawlers get locale-appropriate context.

export const prerender = false;

import type { APIContext } from 'astro';
import { locales, defaultLocale } from '../../i18n/config';
import type { Locale } from '../../i18n/config';

const SITE = 'https://imagetourl.cloud';

// Localized one-line intro. Hand-authored so no translation service call.
const INTRO: Record<Locale, string> = {
  en: 'ImageToURL is a free image hosting service that converts uploaded images into permanent, shareable CDN-backed URLs.',
  hi: 'ImageToURL एक मुफ्त इमेज होस्टिंग सेवा है जो अपलोड की गई इमेजेज़ को स्थायी, साझा करने योग्य CDN URLs में बदल देती है।',
  es: 'ImageToURL es un servicio gratuito de alojamiento de imágenes que convierte las imágenes cargadas en URLs permanentes y compartibles respaldadas por CDN.',
  fr: 'ImageToURL est un service gratuit d\'hébergement d\'images qui convertit les images téléchargées en URLs permanentes et partageables via CDN.',
  de: 'ImageToURL ist ein kostenloser Bilder-Hosting-Dienst, der hochgeladene Bilder in permanente, teilbare CDN-URLs umwandelt.',
  ja: 'ImageToURLは、アップロードされた画像を永続的で共有可能なCDNベースのURLに変換する無料の画像ホスティングサービスです。',
  'zh-Hans': 'ImageToURL 是一项免费的图片托管服务，可将上传的图片转换为永久、可共享的 CDN URL。',
  id: 'ImageToURL adalah layanan hosting gambar gratis yang mengubah gambar yang diunggah menjadi URL permanen yang dapat dibagikan berbasis CDN.',
  vi: 'ImageToURL là dịch vụ lưu trữ hình ảnh miễn phí, chuyển đổi hình ảnh được tải lên thành URL CDN vĩnh viễn, có thể chia sẻ.',
  'pt-BR': 'O ImageToURL é um serviço gratuito de hospedagem de imagens que converte imagens carregadas em URLs permanentes e compartilháveis via CDN.',
  tr: 'ImageToURL, yüklenen görselleri kalıcı ve paylaşılabilir CDN tabanlı URL\'lere dönüştüren ücretsiz bir görsel barındırma hizmetidir.',
  tl: 'Ang ImageToURL ay isang libreng serbisyo sa pag-host ng larawan na nagko-convert ng mga na-upload na larawan sa permanent, nakabahaging CDN URL.',
  pl: 'ImageToURL to darmowa usługa hostingu obrazów, która przekształca przesłane obrazy w trwałe, udostępnialne adresy URL CDN.',
  nl: 'ImageToURL is een gratis afbeelding-hostingservice die geüploade afbeeldingen omzet in permanente, deelbare CDN-URL\'s.',
  it: 'ImageToURL è un servizio gratuito di hosting di immagini che converte le immagini caricate in URL permanenti e condivisibili tramite CDN.',
  ar: 'ImageToURL هي خدمة استضافة صور مجانية تحول الصور المرفوعة إلى روابط CDN دائمة وقابلة للمشاركة.',
  bn: 'ImageToURL একটি ফ্রি ইমেজ হোস্টিং সার্ভিস যা আপলোড করা ছবিগুলিকে স্থায়ী, শেয়ারযোগ্য CDN URL-এ রূপান্তরিত করে।',
  fa: 'ImageToURL یک سرویس میزبانی تصویر رایگان است که تصاویر آپلود شده را به URL های CDN دائمی و قابل اشتراک گذاری تبدیل می کند.',
  ur: 'ImageToURL ایک مفت امیج ہوسٹنگ سروس ہے جو اپ لوڈ کردہ امیجز کو مستقل، قابل اشتراک CDN پر مبنی URLs میں تبدیل کرتی ہے۔',
  ru: 'ImageToURL — это бесплатный сервис хостинга изображений, который преобразует загруженные изображения в постоянные, расшариваемые CDN-URL.',
  th: 'ImageToURL เป็นบริการโฮสต์รูปภาพฟรีที่แปลงรูปภาพที่อัปโหลดเป็น URL ถาวรที่แชร์ได้ผ่าน CDN',
  ko: 'ImageToURL은 업로드된 이미지를 영구적이고 공유 가능한 CDN 기반 URL로 변환하는 무료 이미지 호스팅 서비스입니다.',
  sw: 'ImageToURL ni huduma ya bure ya kuhifadhi picha ambayo hubadilisha picha zilizopakiwa kuwa URL za kudumu na zinazoshirikika zinazoungwa mkono na CDN.',
  ms: 'ImageToURL ialah perkhidmatan hosting imej percuma yang menukar imej yang dimuat naik menjadi URL CDN kekal yang boleh dikongsi.',
  ta: 'ImageToURL என்பது பதிவேற்றப்பட்ட படங்களை நிரந்தரமான, பகிரக்கூடிய CDN-ஆதரவு URLகளாக மாற்றும் ஒரு இலவச படம் வழங்கும் சேவையாகும்.',
  mr: 'ImageToURL एक मोफत इमेज होस्टिंग सेवा आहे जी अपलोड केलेल्या इमेजेसना कायमस्वरूपी, शेअर करण्यायोग्य CDN URL मध्ये रूपांतरित करते.',
  te: 'ImageToURL అనేది ఉచిత ఇమేజ్ హోస్టింగ్ సేవ, ఇది అప్‌లోడ్ చేసిన చిత్రాలను శాశ్వతమైన, భాగస్వామ్యం చేయదగిన CDN-మద్దతు URLలుగా మారుస్తుంది.',
  'zh-Hant': 'ImageToURL 是一項免費的圖片託管服務，可將上傳的圖片轉換為永久、可分享的 CDN 網址。',
};

const KEY_PAGES = [
  'features', 'pricing', 'blog', 'about',
  'heic-to-jpg', 'heic-to-png', 'png-to-jpg', 'jpg-to-png', 'png-to-webp', 'jpg-to-webp',
  'image-compressor', 'image-resizer', 'favicon-generator',
  'imgur-alternative', 'cloudinary-alternative',
  'how-to-get-direct-url-for-image', 'what-is-image-hotlinking', 'how-to-host-image-for-free',
];

export async function GET({ params }: APIContext): Promise<Response> {
  const localeParam = params.locale as string;
  if (!locales.includes(localeParam as Locale)) {
    return new Response('Not found', { status: 404 });
  }
  const locale = localeParam as Locale;
  const intro = INTRO[locale] || INTRO[defaultLocale];

  let body = `# ImageToURL (${locale})\n\n> ${intro}\n\n`;
  body += `## Canonical site (English)\n- ${SITE}/\n\n`;
  body += `## Localized homepage\n- ${SITE}/${locale}/\n\n`;
  body += `## Key pages (English URLs)\n`;
  for (const p of KEY_PAGES) body += `- ${SITE}/${p}\n`;
  body += `\n## Full site map\n- ${SITE}/sitemap.xml\n- ${SITE}/llms-full.txt\n`;

  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
