import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Free Image Hosting - Upload Images & Get Instant URLs",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "free-image-cdn", "label": "Free image CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI image hosting" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymous image upload" },
      { "pageKey": "bulk-image-upload", "label": "Bulk image upload" }
    ],
    "metaDescription": "Free image hosting with no signup. Upload JPG, PNG, WebP, GIF or SVG up to 50 MB and get a direct CDN link you can paste into Discord, forums, and HTML.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A free, no-signup image hosting service that returns a direct CDN link for JPG, PNG, WebP, GIF and SVG files up to 50 MB.",
    "badge": "FREE HOSTING",
    "h1Pre": "Free Image Hosting",
    "h1Highlight": "for everyone.",
    "intro": "Free image hosting with nothing to pay and nothing to sign up for. Drop a JPG, PNG, WebP, GIF or SVG up to 50 MB in the box above and you get a direct link in a couple of seconds, served from a global CDN so it loads fast wherever people open it. Nothing gets compressed or watermarked, so the file you share is the file you uploaded. Anonymous links stay live for at least a couple of weeks; sign in free if you want one that sticks around forever.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload",
        "body": "Drag and drop your images directly into the uploader or click to select files from your device."
      },
      {
        "title": "Process",
        "body": "Our system instantly optimizes and hosts your image on our global CDN network."
      },
      {
        "title": "Share",
        "body": "Copy your permanent, shareable URL and use it anywhere on the web immediately."
      }
    ],
    "whyTitle": "Why Choose Free Hosting",
    "whyItems": [
      {
        "title": "Unlimited Free Uploads",
        "body": "Upload as many images as you want, completely free. No hidden fees, no storage caps - just straightforward image hosting."
      },
      {
        "title": "Global CDN Network",
        "body": "Your images are delivered from edge servers worldwide, ensuring fast load times no matter where your audience is located."
      },
      {
        "title": "No Signup Required",
        "body": "Start uploading instantly. No account creation, no email verification - just drag, drop, and share."
      },
      {
        "title": "Honest about how long links last",
        "body": "An anonymous upload stays live for at least a couple of weeks, until the monthly storage cleanup. Want a link that never goes away? Make a free account and mark the file 'keep forever' when you upload it."
      }
    ],
    "faqTitle": "Free image hosting FAQ",
    "faqs": [
      {
        "q": "Is this image hosting really free?",
        "a": "Yes. There's no charge to upload, no subscription and no credit card. You don't even need an account to get a working link."
      },
      {
        "q": "Do I have to sign up?",
        "a": "No. You can upload and copy a link without making an account. Signing in is optional, and the only thing it adds is the ability to mark a file 'keep forever' so its link doesn't get cleaned up."
      },
      {
        "q": "How long do the links last?",
        "a": "Anonymous uploads stay live until the next monthly storage cleanup, so you get at least a couple of weeks and often longer. For a link that never expires, sign in free and choose 'keep forever' when you upload. Either way, keep your own copy of the file."
      },
      {
        "q": "What file types and sizes can I upload?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 50 MB per file. The link you get ends in the real extension, so it hotlinks and embeds just like the original."
      },
      {
        "q": "Does it compress or watermark my image?",
        "a": "No. The file is served exactly as you uploaded it, at full resolution, with no re-encoding and no logo stamped on top."
      },
      {
        "q": "Can I use these links on my website?",
        "a": "Yes. The URL is a direct image link, so it works in an HTML <img> tag, Markdown, a CSS background-image, Notion, a README or any site builder that accepts an image address."
      },
      {
        "q": "Will the link show up inline on Discord and Reddit?",
        "a": "Yes. Because the link points straight at the image file rather than a gallery page, Discord, Reddit, Slack and most forums render it as a picture instead of a download button."
      },
      {
        "q": "Is the upload private?",
        "a": "The link is unguessable, but anyone who has it can open the image, since anonymous uploads are public. Don't post anything sensitive, and keep a local backup of the original."
      },
      {
        "q": "Is this a good free Imgur alternative?",
        "a": "For a lot of people, yes. Imgur dropped anonymous uploads in 2023, so if you just want to drop an image and grab a link without an account, this fills that gap."
      },
      {
        "q": "How many images can I host?",
        "a": "There's no overall library cap. Anonymous uploading has a daily limit to keep things fair; signing in free raises that limit if you're hosting a batch at once."
      }
    ],
    "ctaTitle": "Start hosting your images for free",
    "ctaBody": "Upload your first image in seconds. No signup, no credit card, no catch.",
    "ctaButton": "Upload Now",
    "specsTitle": "Free image hosting at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Formats", "value": "JPG, PNG, WebP, GIF, SVG" },
      { "label": "Max size", "value": "50 MB" },
      { "label": "Output", "value": "Direct CDN link" }
    ],
    "comparisonTitle": "Free image hosts compared",
    "comparisonIntro": "Plenty of hosts will give you a free link. Where they differ is whether you need an account, how big a file you can drop, whether the image keeps its full quality, and how long the link stays up. Here's an honest side by side.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Direct hotlink",
      "Keeps full quality",
      "Link lifetime"
    ],
    "comparisonRows": [
      { "cells": ["ImageToURL", "Yes", "50 MB", "Yes", "Yes", "Weeks free, forever when signed in"] },
      { "cells": ["Imgur", "No (since 2023)", "20 MB", "Limited", "Yes", "Tied to your account"] },
      { "cells": ["ImgBB", "Yes", "32 MB", "Yes", "Yes", "Optional expiry"] },
      { "cells": ["Catbox", "Yes", "200 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["Postimages", "Yes", "24 MB", "Yes", "No (resized to 1280px)", "Permanent"] }
    ],
    "useCasesTitle": "What free image hosting is good for",
    "useCasesIntro": "Once your picture has a direct link, it slots into most places online:",
    "useCases": [
      { "title": "Chat and communities", "body": "Paste the link into Discord, a Reddit post or a forum thread and the image just shows up. No attachment, no extra click to open it." },
      { "title": "Listings and signatures", "body": "Marketplace photos, classified ads and email-signature logos all need a hosted image. Drop the file here and use the link wherever the platform asks for a URL." },
      { "title": "Quick shares and drafts", "body": "Sending a screenshot to a coworker or pasting a mockup into a ticket? A throwaway anonymous link is plenty for something nobody revisits in a month." }
    ],
    "sections": [
      { "heading": "What does free image hosting mean?", "body": "Free image hosting is a service that stores your picture and hands back a web address pointing straight at it, at no cost. The address ends in the file's own extension, like .jpg or .png, so anything that reads a URL can load the image inline. That's different from sharing a file directly: instead of attaching a 4 MB photo to every message, you store it once and pass around a short link. Here the storage and the link are both free, there's no account required to get started, and the picture isn't compressed or shrunk on its way through." },
      { "heading": "Free hosting vs paid hosting", "body": "Paid plans on hosts and CDNs make sense once you're serving heavy traffic, need analytics, or want guaranteed uptime in a contract. For most people sharing a screenshot, a meme or a product photo, none of that applies. A free link backed by a global CDN already loads fast from edge servers worldwide. The one honest trade-off is lifetime: free anonymous links here are cleaned up monthly, while a paid plan elsewhere keeps files indefinitely. You get the same 'keep forever' outcome at no cost by creating a free account and flagging the file." },
      { "heading": "Are free image links safe to share?", "body": "Every link is served over HTTPS and points only at your image, with no redirect pages or trackers attached. The thing to remember is that an anonymous upload is public to anyone who has the link, so it isn't the place for private documents, ID photos or anything you wouldn't want a stranger to open. Keep your own copy of the original too, since free links are cleared on a regular schedule unless you sign in and keep them. Treat it like a public bulletin board, not a private vault." }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes gratis - Sube imágenes y obtén URLs al instante | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "free-image-cdn", "label": "CDN de imágenes gratuito" },
      { "pageKey": "ai-image-hosting", "label": "Hosting de imágenes con IA" },
      { "pageKey": "anonymous-image-upload", "label": "Carga anónima de imágenes" },
      { "pageKey": "bulk-image-upload", "label": "Carga masiva de imágenes" }
    ],
    "metaDescription": "Aloja tus imágenes gratis con ImageToURL. Sin registro, enlaces permanentes, entrega por CDN global y soporte para formatos JPG, PNG, WebP, GIF y SVG.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Un servicio de alojamiento de imágenes gratuito y sin registro que ofrece enlaces permanentes y entrega por CDN global para varios formatos de imagen.",
    "badge": "ALOJAMIENTO GRATUITO",
    "h1Pre": "Alojamiento de imágenes gratis",
    "h1Highlight": "para todos.",
    "intro": "Sin registro. Sin límites. Sube tus imágenes y obtén enlaces permanentes y compartibles al instante, respaldados por una CDN global para una entrega ultrarrápida.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Subir",
        "body": "Arrastra y suelta tus imágenes directamente en el cargador o haz clic para seleccionar archivos desde tu dispositivo."
      },
      {
        "title": "Procesar",
        "body": "Nuestro sistema optimiza y aloja instantáneamente tu imagen en nuestra red CDN global."
      },
      {
        "title": "Compartir",
        "body": "Copia tu URL permanente y compartible para usarla en cualquier lugar de la web de inmediato."
      }
    ],
    "whyTitle": "Por qué elegir nuestro alojamiento gratuito",
    "whyItems": [
      {
        "title": "Subidas ilimitadas",
        "body": "Sube tantas imágenes como quieras, totalmente gratis. Sin tarifas ocultas ni límites de almacenamiento: alojamiento de imágenes directo."
      },
      {
        "title": "Red CDN global",
        "body": "Tus imágenes se entregan desde servidores en todo el mundo, garantizando tiempos de carga rápidos sin importar dónde esté tu audiencia."
      },
      {
        "title": "Sin registro",
        "body": "Empieza a subir al instante. Sin creación de cuentas ni verificación de correo electrónico: solo arrastra, suelta y comparte."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Este alojamiento de imágenes es realmente gratuito?",
        "a": "Sí, nuestro servicio es completamente gratuito, sin costes ocultos ni requisitos de suscripción."
      },
      {
        "q": "¿Mis enlaces de imagen caducan alguna vez?",
        "a": "No, ofrecemos alojamiento de imágenes permanente, por lo que tus enlaces permanecerán activos indefinidamente."
      },
      {
        "q": "¿Hay límites de tamaño de archivo?",
        "a": "Admitimos una amplia gama de tamaños de archivo, lo que te permite alojar imágenes de alta calidad sin compresión."
      },
      {
        "q": "¿Puedo usar estas imágenes en mi sitio web?",
        "a": "Por supuesto, nuestras URLs generadas son perfectas para insertar en blogs, foros y sitios web."
      }
    ],
    "ctaTitle": "Empieza a alojar tus imágenes gratis",
    "ctaBody": "Sube tu primera imagen en segundos. Sin registro, sin tarjeta de crédito, sin trucos.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images gratuit - Téléchargez et obtenez des URLs instantanées | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "free-image-cdn", "label": "CDN d'images gratuit" },
      { "pageKey": "ai-image-hosting", "label": "Hébergement d'images IA" },
      { "pageKey": "anonymous-image-upload", "label": "Téléchargement d'image anonyme" },
      { "pageKey": "bulk-image-upload", "label": "Téléchargement d'images en masse" }
    ],
    "metaDescription": "Hébergez vos images gratuitement avec ImageToURL. Aucune inscription requise, liens permanents, livraison via CDN mondial et support des formats JPG, PNG, WebP, GIF, SVG.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Un service d'hébergement d'images gratuit sans inscription, offrant des liens permanents et une livraison via CDN mondial pour divers formats d'image.",
    "badge": "HÉBERGEMENT GRATUIT",
    "h1Pre": "Hébergement d'images gratuit",
    "h1Highlight": "pour tout le monde.",
    "intro": "Aucune inscription requise. Aucune limite. Téléchargez vos images et obtenez instantanément des liens permanents et partageables, propulsés par un CDN mondial pour une livraison ultra-rapide.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Télécharger",
        "body": "Glissez-déposez vos images directement dans l'outil de téléchargement ou cliquez pour sélectionner des fichiers depuis votre appareil."
      },
      {
        "title": "Traiter",
        "body": "Notre système optimise et héberge instantanément votre image sur notre réseau CDN mondial."
      },
      {
        "title": "Partager",
        "body": "Copiez votre URL permanente et partageable pour l'utiliser immédiatement partout sur le web."
      }
    ],
    "whyTitle": "Pourquoi choisir notre hébergement gratuit",
    "whyItems": [
      {
        "title": "Téléchargements illimités",
        "body": "Téléchargez autant d'images que vous le souhaitez, totalement gratuitement. Pas de frais cachés, pas de limite de stockage, juste un hébergement d'images simple."
      },
      {
        "title": "Réseau CDN mondial",
        "body": "Vos images sont diffusées depuis des serveurs périphériques dans le monde entier, garantissant des temps de chargement rapides, quel que soit l'emplacement de votre audience."
      },
      {
        "title": "Aucune inscription requise",
        "body": "Commencez à télécharger instantanément. Pas de création de compte, pas de vérification d'e-mail, juste glisser, déposer et partager."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Cet hébergement d'images est-il vraiment gratuit ?",
        "a": "Oui, notre service est entièrement gratuit, sans frais cachés ni abonnement requis."
      },
      {
        "q": "Mes liens d'images expirent-ils ?",
        "a": "Non, nous proposons un hébergement d'images permanent, vos liens resteront donc actifs indéfiniment."
      },
      {
        "q": "Y a-t-il des limites de taille de fichier ?",
        "a": "Nous prenons en charge une large gamme de tailles de fichiers, vous permettant d'héberger des images de haute qualité sans compression."
      },
      {
        "q": "Puis-je utiliser ces images sur mon site web ?",
        "a": "Absolument, nos URLs générées sont parfaites pour être intégrées dans des blogs, des forums et des sites web."
      }
    ],
    "ctaTitle": "Commencez à héberger vos images gratuitement",
    "ctaBody": "Téléchargez votre première image en quelques secondes. Aucune inscription, aucune carte bancaire, aucun piège.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Kostenloses Image Hosting - Bilder hochladen & sofort URLs erhalten | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "free-image-cdn", "label": "Kostenloses Bild-CDN" },
      { "pageKey": "ai-image-hosting", "label": "KI-Bild-Hosting" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymes Bild-Upload" },
      { "pageKey": "bulk-image-upload", "label": "Massen-Bild-Upload" }
    ],
    "metaDescription": "Hosten Sie Ihre Bilder kostenlos mit ImageToURL. Keine Registrierung erforderlich, permanente Links, globale CDN-Bereitstellung und Unterstützung für JPG, PNG, WebP, GIF, SVG-Formate.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Ein kostenloser Image-Hosting-Dienst ohne Registrierung, der permanente Links und globale CDN-Bereitstellung für verschiedene Bildformate bietet.",
    "badge": "KOSTENLOSES HOSTING",
    "h1Pre": "Kostenloses Image Hosting",
    "h1Highlight": "für jeden.",
    "intro": "Keine Registrierung erforderlich. Keine Limits. Laden Sie Ihre Bilder hoch und erhalten Sie sofort permanente, teilbare Links – unterstützt durch ein globales CDN für blitzschnelle Bereitstellung.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Hochladen",
        "body": "Ziehen Sie Ihre Bilder per Drag & Drop direkt in den Uploader oder klicken Sie, um Dateien von Ihrem Gerät auszuwählen."
      },
      {
        "title": "Verarbeiten",
        "body": "Unser System optimiert und hostet Ihr Bild sofort auf unserem globalen CDN-Netzwerk."
      },
      {
        "title": "Teilen",
        "body": "Kopieren Sie Ihren permanenten, teilbaren Link und verwenden Sie ihn sofort überall im Web."
      }
    ],
    "whyTitle": "Warum kostenloses Hosting wählen",
    "whyItems": [
      {
        "title": "Unbegrenzte kostenlose Uploads",
        "body": "Laden Sie so viele Bilder hoch, wie Sie möchten, völlig kostenlos. Keine versteckten Gebühren, keine Speicherbegrenzungen – einfach unkompliziertes Image-Hosting."
      },
      {
        "title": "Globales CDN-Netzwerk",
        "body": "Ihre Bilder werden von Edge-Servern weltweit bereitgestellt, was schnelle Ladezeiten garantiert, egal wo sich Ihr Publikum befindet."
      },
      {
        "title": "Keine Registrierung erforderlich",
        "body": "Starten Sie sofort mit dem Hochladen. Keine Kontoerstellung, keine E-Mail-Verifizierung – einfach ziehen, ablegen und teilen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Ist dieses Image-Hosting wirklich kostenlos?",
        "a": "Ja, unser Dienst ist komplett kostenlos nutzbar, ohne versteckte Kosten oder Abonnementanforderungen."
      },
      {
        "q": "Laufen meine Bild-Links jemals ab?",
        "a": "Nein, wir bieten permanentes Image-Hosting an, sodass Ihre Links dauerhaft aktiv bleiben."
      },
      {
        "q": "Gibt es Dateigrößenbeschränkungen?",
        "a": "Wir unterstützen eine Vielzahl von Dateigrößen, sodass Sie hochwertige Bilder ohne Komprimierung hosten können."
      },
      {
        "q": "Kann ich diese Bilder auf meiner Website verwenden?",
        "a": "Absolut, unsere generierten URLs eignen sich perfekt zum Einbetten in Blogs, Foren und Websites."
      }
    ],
    "ctaTitle": "Starten Sie kostenlos mit dem Hosting Ihrer Bilder",
    "ctaBody": "Laden Sie Ihr erstes Bild in Sekunden hoch. Keine Registrierung, keine Kreditkarte, kein Haken.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "無料画像ホスティング - 画像をアップロードして即座にURLを取得 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "free-image-cdn", "label": "無料画像CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI画像ホスティング" },
      { "pageKey": "anonymous-image-upload", "label": "匿名画像アップロード" },
      { "pageKey": "bulk-image-upload", "label": "一括画像アップロード" }
    ],
    "metaDescription": "ImageToURLで画像を無料でホストしましょう。登録不要、永久リンク、グローバルCDN配信、JPG、PNG、WebP、GIF、SVG形式に対応。",
    "schemaName": "ImageToURL",
    "schemaDescription": "登録不要の無料画像ホスティングサービス。様々な画像形式に対して永久リンクとグローバルCDN配信を提供します。",
    "badge": "無料ホスティング",
    "h1Pre": "誰でも使える",
    "h1Highlight": "無料画像ホスティング",
    "intro": "登録不要、制限なし。画像をアップロードすれば、すぐに共有可能な永久リンクが手に入ります。グローバルCDNによる超高速配信を実現。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "アップロード",
        "body": "画像をアップローダーにドラッグ＆ドロップするか、クリックしてデバイスからファイルを選択してください。"
      },
      {
        "title": "処理",
        "body": "システムが即座に画像を最適化し、グローバルCDNネットワーク上でホストします。"
      },
      {
        "title": "共有",
        "body": "生成された永久リンクをコピーして、ウェブ上のどこでもすぐに使用できます。"
      }
    ],
    "whyTitle": "無料ホスティングが選ばれる理由",
    "whyItems": [
      {
        "title": "無制限の無料アップロード",
        "body": "何枚でも無料でアップロード可能。隠れた料金やストレージ制限はなく、シンプルな画像ホスティングを提供します。"
      },
      {
        "title": "グローバルCDNネットワーク",
        "body": "世界中のエッジサーバーから画像が配信されるため、どこにいるユーザーに対しても高速な読み込みを実現します。"
      },
      {
        "title": "登録不要",
        "body": "すぐにアップロードを開始できます。アカウント作成やメール認証は一切不要。ドラッグ＆ドロップして共有するだけです。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "本当に無料で利用できますか？",
        "a": "はい、当サービスは完全に無料です。隠れたコストやサブスクリプションの要件はありません。"
      },
      {
        "q": "画像リンクの有効期限はありますか？",
        "a": "いいえ、永久的な画像ホスティングを提供しているため、リンクは無期限で有効です。"
      },
      {
        "q": "ファイルサイズの制限はありますか？",
        "a": "幅広いファイルサイズに対応しており、圧縮なしで高品質な画像をホストできます。"
      },
      {
        "q": "自分のウェブサイトで画像を使用できますか？",
        "a": "もちろんです。生成されたURLは、ブログ、フォーラム、ウェブサイトへの埋め込みに最適です。"
      }
    ],
    "ctaTitle": "無料で画像をホストしよう",
    "ctaBody": "数秒で最初の画像をアップロード。登録もクレジットカードも不要、一切の条件はありません。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "免费图片托管 - 上传图片并获取即时链接 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "free-image-cdn", "label": "免费图片 CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI 图片托管" },
      { "pageKey": "anonymous-image-upload", "label": "匿名图片上传" },
      { "pageKey": "bulk-image-upload", "label": "批量上传图片" }
    ],
    "metaDescription": "使用 ImageToURL 免费托管您的图片。无需注册，提供永久链接、全球 CDN 分发，并支持 JPG、PNG、WebP、GIF、SVG 格式。",
    "schemaName": "ImageToURL",
    "schemaDescription": "一个免费、无需注册的图片托管服务，为各种图片格式提供永久链接和全球 CDN 分发。",
    "badge": "免费托管",
    "h1Pre": "免费图片托管",
    "h1Highlight": "面向所有人。",
    "intro": "无需注册，没有限制。上传您的图片并立即获取永久、可分享的链接——由全球 CDN 提供支持，实现极速加载。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传",
        "body": "将图片直接拖放到上传器中，或点击从您的设备中选择文件。"
      },
      {
        "title": "处理",
        "body": "我们的系统会立即优化您的图片，并将其托管在全球 CDN 网络上。"
      },
      {
        "title": "分享",
        "body": "复制您的永久分享链接，即可立即在网络上的任何地方使用。"
      }
    ],
    "whyTitle": "为什么选择免费托管",
    "whyItems": [
      {
        "title": "无限免费上传",
        "body": "随心所欲上传图片，完全免费。没有隐藏费用，没有存储上限——只有简单直接的图片托管。"
      },
      {
        "title": "全球 CDN 网络",
        "body": "您的图片由全球边缘服务器分发，确保无论您的受众身在何处，都能获得极快的加载速度。"
      },
      {
        "title": "无需注册",
        "body": "立即开始上传。无需创建账户，无需电子邮件验证——只需拖放即可分享。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "这个图片托管真的是免费的吗？",
        "a": "是的，我们的服务完全免费，没有任何隐藏费用或订阅要求。"
      },
      {
        "q": "我的图片链接会过期吗？",
        "a": "不会，我们提供永久图片托管，因此您的链接将无限期保持有效。"
      },
      {
        "q": "有文件大小限制吗？",
        "a": "我们支持多种文件大小，允许您托管高质量图片而无需压缩。"
      },
      {
        "q": "我可以在我的网站上使用这些图片吗？",
        "a": "当然可以，我们生成的 URL 非常适合嵌入到博客、论坛和网站中。"
      }
    ],
    "ctaTitle": "立即免费开始托管您的图片",
    "ctaBody": "几秒钟内上传您的第一张图片。无需注册，无需信用卡，没有任何套路。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
