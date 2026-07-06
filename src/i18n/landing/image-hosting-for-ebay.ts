import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Free Image Hosting for eBay Listings | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "For Discord" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" },
      { "pageKey": "image-hosting-for-github-readme", "label": "For GitHub" }
    ],
    "metaDescription": "Host eBay item photos and get a direct image URL you can drop into your listing description HTML, buyer messages or a selling forum. Free, no signup, no watermark, 50MB.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A free tool that turns eBay item photos into direct image URLs for listing descriptions, messages and forums. No account, no watermark, full quality.",
    "badge": "EBAY SELLERS",
    "h1Pre": "Image Hosting for eBay",
    "h1Highlight": "listings.",
    "intro": "Need a public link for an item photo so you can drop it into your eBay listing description? Upload the picture above and you get a direct URL in a couple of seconds. Paste it into the description HTML with an <img> tag to show extra angles beyond the gallery slots, or share it in a buyer message or a selling forum. It works on JPG, PNG, WebP and GIF up to 50MB, there's no watermark, and the photo isn't squeezed or shrunk on the way through.",
    "specsTitle": "eBay image hosting at a glance",
    "specs": [
      {
        "label": "Price",
        "value": "Free"
      },
      {
        "label": "Sign-up",
        "value": "Not required"
      },
      {
        "label": "Formats",
        "value": "JPG, PNG, WebP, GIF"
      },
      {
        "label": "Max size",
        "value": "50 MB"
      },
      {
        "label": "Output",
        "value": "Direct CDN link for <img> tags"
      }
    ],
    "howTitle": "How to use it for eBay",
    "steps": [
      {
        "title": "Upload your item photo",
        "body": "Drag a product shot onto the box above or click to pick one. JPG, PNG, WebP and GIF all work, up to 50MB each, and the file isn't recompressed."
      },
      {
        "title": "Copy the direct link",
        "body": "Your photo lands on a fast CDN and a direct URL appears right away. It ends in the real file extension, so it behaves like the original image file."
      },
      {
        "title": "Paste it in your listing description",
        "body": "Open the HTML view of your eBay description and add an <img src=\"...\"> tag with the link. The photo loads inline. The link also works in buyer messages and forum posts."
      }
    ],
    "whyTitle": "Why eBay sellers reach for an outside link",
    "whyItems": [
      {
        "title": "More photos than the gallery allows",
        "body": "eBay gives you photo slots for the main gallery, but sellers often want extra close-ups in the description itself. A hosted link lets you embed as many angle and condition shots as you like inside the listing HTML."
      },
      {
        "title": "No account, no email",
        "body": "There's nothing to sign up for. Imgur dropped anonymous uploads back in 2023, so a lot of sellers went looking for something simpler. Upload, copy, paste."
      },
      {
        "title": "Full quality, no watermark",
        "body": "The file comes back exactly as you sent it, with no branding overlay and no resizing. Buyers see the same sharp photo you uploaded."
      },
      {
        "title": "One link, reused anywhere",
        "body": "The same URL can sit in several listings, go out in a message to a buyer, or get pasted into a reselling forum. It points straight at the image file every time."
      }
    ],
    "comparisonTitle": "Hosted image link vs eBay's own photo slots",
    "comparisonIntro": "These two things do different jobs. eBay's photo uploader runs the main gallery and the zoom view, and a hosted link is for everything else, mostly the description HTML and anywhere you need to share the picture. Here's how they line up.",
    "comparisonColumns": [
      "Capability",
      "eBay photo gallery",
      "Hosted image URL"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Where it appears",
          "Main gallery and zoom view",
          "Inside the listing description HTML"
        ]
      },
      {
        "cells": [
          "How many images",
          "Up to 24 photos per listing",
          "As many as you embed"
        ]
      },
      {
        "cells": [
          "Reuse across listings",
          "Re-upload to each one",
          "Same link in every listing"
        ]
      },
      {
        "cells": [
          "Share in messages or forums",
          "No, gallery only",
          "Yes, paste the link anywhere"
        ]
      },
      {
        "cells": [
          "Cost",
          "Free",
          "Free"
        ]
      }
    ],
    "useCasesTitle": "Where eBay sellers use a hosted link",
    "useCasesIntro": "Once a photo has a direct URL, it slots into the places eBay's gallery can't reach:",
    "useCases": [
      {
        "title": "Extra description photos",
        "body": "Embed close-ups of a flaw, a serial number or a bundle layout right in the description so buyers see them without leaving the page."
      },
      {
        "title": "Buyer messages and disputes",
        "body": "Send a condition photo in a message, or attach proof to a return or 'item not as described' case by pasting a link instead of a bulky file."
      },
      {
        "title": "Forums and cross-listing",
        "body": "Share an item pic in a reselling or collector community for a price check, or drop the same link into a cross-post on another marketplace."
      }
    ],
    "sections": [
      {
        "heading": "Where a hosted link fits on eBay",
        "body": "eBay's main photos are uploaded into eBay itself, and that's still where your gallery and zoom images belong. An outside link is for the listing description, the part you can edit as HTML. Sellers use it to add extra angles, measurement charts or condition shots beyond the gallery slots. The same URL is handy outside the listing too, in messages to buyers or a forum post. So a hosted image doesn't replace eBay's photo uploader, it covers the spots eBay's gallery doesn't reach."
      },
      {
        "heading": "Will the image embed inside a description?",
        "body": "Yes, as long as you use a direct link in an HTML <img> tag. eBay's description editor has an HTML or code view where you paste something like <img src=\"https://imagetourl.cloud/abc123.jpg\">, and the photo loads inline. The link here ends in the real file extension and is served over HTTPS, which eBay needs, so it won't trip the mixed-content warning that breaks plain http images. Switch to the HTML view, drop the tag where you want the picture, and preview before you save."
      },
      {
        "heading": "How long will the image stay up?",
        "body": "Anonymous uploads stay live for at least a couple of weeks and usually longer, then get cleared on a regular storage cleanup. eBay listings can run for months, so if a photo needs to last the whole time, make a free account and choose 'keep forever' when you upload. Either way, hold on to your own copy of the file. If a link is ever cleared you can re-upload in seconds and swap the URL in your description."
      }
    ],
    "faqTitle": "eBay image hosting FAQ",
    "faqs": [
      {
        "q": "Why do I need external image hosting for eBay?",
        "a": "The gallery slots cover your main photos, but the description is HTML, so extra pictures there need a direct image URL. Hosting also gives you one link you can reuse across listings and paste into messages or forums."
      },
      {
        "q": "Can I add hosted photos to my eBay listing description?",
        "a": "Yes. Open the HTML or code view of the description editor and add an <img src=\"...\"> tag with your link. The photo shows up inline when the listing goes live, alongside whatever text you've written."
      },
      {
        "q": "Can a hosted URL replace eBay's main gallery photos?",
        "a": "No, and it isn't meant to. Your gallery and zoom images are uploaded into eBay directly. A hosted link is for the description HTML and for sharing photos in messages, forums and cross-posts."
      },
      {
        "q": "Does Imgur work for eBay listings?",
        "a": "Imgur is awkward for marketplaces, and it dropped anonymous uploads in 2023, so you'd need an account first. The direct links here are made to embed cleanly in description HTML without a login."
      },
      {
        "q": "How long will my eBay image link stay online?",
        "a": "Anonymous links last at least a couple of weeks and often longer, then clear on a regular cleanup. Listings can run for months, so sign in and pick 'keep forever' for photos that need to last, and keep your own backup of the file."
      },
      {
        "q": "What image sizes work best for eBay?",
        "a": "eBay suggests at least 500 pixels on the longest side, and 1600 pixels is a good target so the zoom feature looks sharp. This tool keeps your photo at full resolution, so whatever you upload is what buyers see."
      },
      {
        "q": "Can I use the same image URL across multiple eBay listings?",
        "a": "Yes. One link works in as many listings as you want, which is handy for a standard banner, a returns-policy graphic or a sizing chart you reuse on every item."
      },
      {
        "q": "What image formats can I upload?",
        "a": "JPG, PNG, WebP and GIF, up to 50MB per file. The link ends in the real extension, so it embeds in the description HTML the same way the original file would."
      },
      {
        "q": "Does it compress or watermark my photo?",
        "a": "No. You get the same file back at full quality, with no re-compression and no branding overlay. That matters for condition shots where buyers are zooming in on detail."
      },
      {
        "q": "Can I share an item photo in eBay messages or a forum?",
        "a": "Yes. Copy the link and paste it into a buyer message, a return case or a selling community thread. Anyone who clicks it sees the photo, no download needed."
      },
      {
        "q": "Is there a file size limit?",
        "a": "50MB per image, which covers almost any product photo. If a shot is larger, resize or compress it a little first, then upload it to get the link."
      },
      {
        "q": "Are the links safe to share with buyers?",
        "a": "Every link is served over HTTPS and points only at your image, with no redirect pages. Just remember anonymous uploads are public to anyone with the link, so don't host anything private."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Make your eBay listings stand out",
    "ctaBody": "Upload an item photo and get a direct URL in seconds for your description HTML, messages or forum posts. No signup, no compression, no watermark.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes gratuito para anuncios de eBay | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Para Discord" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" },
      { "pageKey": "image-hosting-for-github-readme", "label": "Para GitHub" }
    ],
    "metaDescription": "Aloja imágenes de productos para anuncios de eBay con URLs directas y permanentes. Gratis, sin registro. Funciona perfectamente con los requisitos de eBay.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Aloja imágenes de productos para anuncios de eBay con URLs directas y permanentes sin necesidad de registro ni marcas de agua.",
    "badge": "VENDEDORES DE EBAY",
    "h1Pre": "Alojamiento de imágenes para",
    "h1Highlight": "anuncios de eBay.",
    "intro": "Sube las fotos de tus productos y obtén URLs de imagen directas y permanentes que funcionan perfectamente en las descripciones de tus anuncios de eBay. Uso gratuito, sin necesidad de cuenta.",
    "howTitle": "Cómo usarlo para eBay",
    "steps": [
      {
        "title": "Sube las fotos de tus productos",
        "body": "Arrastra y suelta tus imágenes de producto arriba. Aceptamos formatos JPG, PNG, WebP y GIF sin pérdida de calidad."
      },
      {
        "title": "Copia la URL de la imagen",
        "body": "Tu enlace directo permanente estará listo al instante. Haz clic para copiar la URL a tu portapapeles."
      },
      {
        "title": "Pégalo en tu anuncio de eBay",
        "body": "Añade la URL a la descripción de tu anuncio de eBay usando el editor HTML. Usa una etiqueta <img> y tu imagen aparecerá al instante."
      }
    ],
    "whyTitle": "Por qué los vendedores de eBay necesitan alojamiento externo",
    "whyItems": [
      {
        "title": "Imgur bloquea los enlaces de eBay",
        "body": "Los alojamientos de imágenes gratuitos populares como Imgur bloquean activamente el hotlinking desde eBay, lo que provoca que las imágenes se rompan en tus anuncios."
      },
      {
        "title": "URLs permanentes",
        "body": "Tus enlaces de imagen nunca caducan, asegurando que las fotos de tus productos se muestren correctamente mientras exista tu anuncio."
      },
      {
        "title": "Sin marcas de agua",
        "body": "Tus imágenes se sirven exactamente como las subiste, sin superposiciones de marca ni marcas de agua molestas."
      },
      {
        "title": "Enlaces directos a imágenes",
        "body": "Obtén URLs limpias y directas que apuntan directamente a tu archivo, perfectas para incrustar en el editor HTML de eBay."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué necesito alojamiento de imágenes externo para eBay?",
        "a": "El alojamiento externo te da más control sobre la calidad de la imagen, te permite usar imágenes en múltiples anuncios y evita la propia compresión de eBay."
      },
      {
        "q": "¿Funciona Imgur para los anuncios de eBay?",
        "a": "Imgur ha bloqueado históricamente el hotlinking desde eBay. ImageToURL proporciona URLs de imagen directas diseñadas específicamente para funcionar en marketplaces."
      },
      {
        "q": "¿Mis imágenes de eBay permanecerán online permanentemente?",
        "a": "Sí. Las imágenes subidas a ImageToURL se alojan de forma permanente sin fechas de caducidad."
      },
      {
        "q": "¿Qué tamaños de imagen funcionan mejor para eBay?",
        "a": "eBay recomienda al menos 500 píxeles en el lado más largo, siendo 1600 píxeles lo ideal para la función de zoom."
      },
      {
        "q": "¿Puedo usar la misma URL de imagen en varios anuncios de eBay?",
        "a": "Absolutamente. Puedes reutilizar el mismo enlace en tantos anuncios como necesites, lo cual es perfecto para fotos de productos estándar o banners."
      }
    ],
    "ctaTitle": "Haz que tus anuncios de eBay destaquen",
    "ctaBody": "Sube las fotos de tus productos y obtén URLs permanentes en segundos, sin registro ni marcas de agua.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images gratuit pour annonces eBay | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Pour Discord" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" },
      { "pageKey": "image-hosting-for-github-readme", "label": "Pour GitHub" }
    ],
    "metaDescription": "Hébergez vos photos de produits pour eBay avec des URLs directes et permanentes. Gratuit, sans inscription. Compatible avec les exigences d'eBay.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Hébergez vos images de produits pour eBay avec des URLs directes et permanentes, sans inscription ni filigrane.",
    "badge": "VENDEURS EBAY",
    "h1Pre": "Hébergement d'images pour vos annonces",
    "h1Highlight": "eBay.",
    "intro": "Téléchargez vos photos de produits et obtenez des URLs d'images directes et permanentes, parfaitement adaptées aux descriptions d'annonces eBay. Utilisation gratuite, aucun compte requis.",
    "howTitle": "Comment utiliser pour eBay",
    "steps": [
      {
        "title": "Téléchargez vos photos",
        "body": "Glissez-déposez vos images de produits ci-dessus. Nous acceptons les formats JPG, PNG, WebP et GIF sans perte de qualité."
      },
      {
        "title": "Copiez l'URL de l'image",
        "body": "Votre lien direct permanent est généré instantanément. Cliquez pour copier l'URL dans votre presse-papiers."
      },
      {
        "title": "Collez dans votre annonce eBay",
        "body": "Ajoutez l'URL dans la description de votre annonce eBay via l'éditeur HTML. Utilisez une balise <img> et votre image s'affichera immédiatement."
      }
    ],
    "whyTitle": "Pourquoi les vendeurs eBay ont besoin d'un hébergement externe",
    "whyItems": [
      {
        "title": "Imgur bloque les intégrations eBay",
        "body": "Les hébergeurs d'images gratuits populaires comme Imgur bloquent activement le hotlinking depuis eBay, ce qui entraîne des images brisées dans vos annonces."
      },
      {
        "title": "URLs permanentes",
        "body": "Vos liens d'images n'expirent jamais, garantissant que vos photos de produits s'affichent correctement tant que votre annonce est active."
      },
      {
        "title": "Sans filigrane",
        "body": "Vos images sont servies exactement telles que vous les avez téléchargées, sans ajout de branding ou de filigranes gênants."
      },
      {
        "title": "Liens d'images directs",
        "body": "Obtenez des URLs propres et directes pointant directement vers votre fichier, idéales pour une intégration dans l'éditeur HTML d'eBay."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi ai-je besoin d'un hébergement externe pour eBay ?",
        "a": "L'hébergement externe vous offre un meilleur contrôle sur la qualité de l'image, vous permet de réutiliser les images sur plusieurs annonces et évite la compression automatique d'eBay."
      },
      {
        "q": "Imgur fonctionne-t-il pour les annonces eBay ?",
        "a": "Imgur bloque historiquement le hotlinking depuis eBay. ImageToURL fournit des URLs d'images directes spécifiquement conçues pour fonctionner sur les places de marché."
      },
      {
        "q": "Mes images eBay resteront-elles en ligne indéfiniment ?",
        "a": "Oui. Les images téléchargées sur ImageToURL sont hébergées de manière permanente sans date d'expiration."
      },
      {
        "q": "Quelles tailles d'images sont recommandées pour eBay ?",
        "a": "eBay recommande au moins 500 pixels sur le côté le plus long, 1600 pixels étant l'idéal pour la fonction de zoom."
      },
      {
        "q": "Puis-je utiliser la même URL d'image pour plusieurs annonces eBay ?",
        "a": "Absolument. Vous pouvez réutiliser le même lien dans autant d'annonces que nécessaire, ce qui est parfait pour les photos de produits standards ou les bannières."
      }
    ],
    "ctaTitle": "Valorisez vos annonces eBay",
    "ctaBody": "Téléchargez vos photos de produits et obtenez des URLs permanentes en quelques secondes, sans inscription ni filigrane.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Kostenloses Image Hosting für eBay-Angebote | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Für Discord" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" },
      { "pageKey": "image-hosting-for-github-readme", "label": "Für GitHub" }
    ],
    "metaDescription": "Hosten Sie Produktbilder für eBay-Angebote mit permanenten, direkten URLs. Kostenlos, keine Registrierung erforderlich. Perfekt für die Bildanforderungen von eBay.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Hosten Sie Produktbilder für eBay-Angebote mit permanenten, direkten URLs ohne Registrierung oder Wasserzeichen.",
    "badge": "EBAY-VERKÄUFER",
    "h1Pre": "Image Hosting für eBay-",
    "h1Highlight": "Angebote.",
    "intro": "Laden Sie Ihre Produktfotos hoch und erhalten Sie permanente, direkte Bild-URLs, die perfekt in eBay-Artikelbeschreibungen funktionieren. Kostenlos und ohne Account.",
    "howTitle": "So nutzen Sie es für eBay",
    "steps": [
      {
        "title": "Produktfotos hochladen",
        "body": "Ziehen Sie Ihre Produktbilder per Drag-and-Drop hierher. Wir akzeptieren JPG-, PNG-, WebP- und GIF-Formate ohne Qualitätsverlust."
      },
      {
        "title": "Bild-URL kopieren",
        "body": "Ihr permanenter Direktlink ist sofort bereit. Klicken Sie darauf, um die URL in Ihre Zwischenablage zu kopieren."
      },
      {
        "title": "In eBay-Angebot einfügen",
        "body": "Fügen Sie die URL über den HTML-Editor in Ihre eBay-Artikelbeschreibung ein. Verwenden Sie ein <img>-Tag, damit Ihr Bild sofort angezeigt wird."
      }
    ],
    "whyTitle": "Warum eBay-Verkäufer externes Hosting benötigen",
    "whyItems": [
      {
        "title": "Imgur blockiert eBay-Einbindungen",
        "body": "Beliebte kostenlose Bildhoster wie Imgur blockieren aktiv das Hotlinking von eBay, was zu defekten Bildern in Ihren Angeboten führt."
      },
      {
        "title": "Permanente URLs",
        "body": "Ihre Bildlinks laufen nie ab und stellen sicher, dass Ihre Produktfotos so lange korrekt angezeigt werden, wie Ihr Angebot existiert."
      },
      {
        "title": "Keine Wasserzeichen",
        "body": "Ihre Bilder werden genau so bereitgestellt, wie Sie sie hochgeladen haben – ohne Branding-Overlays oder störende Wasserzeichen."
      },
      {
        "title": "Direkte Bildlinks",
        "body": "Erhalten Sie saubere, direkte URLs, die direkt auf Ihre Datei verweisen – perfekt für die Einbettung in den HTML-Editor von eBay."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum benötige ich externes Image Hosting für eBay?",
        "body": "Externes Hosting gibt Ihnen mehr Kontrolle über die Bildqualität, ermöglicht die Nutzung von Bildern in mehreren Angeboten und umgeht die Komprimierung durch eBay."
      },
      {
        "q": "Funktioniert Imgur für eBay-Angebote?",
        "body": "Imgur hat in der Vergangenheit das Hotlinking von eBay blockiert. ImageToURL bietet direkte Bild-URLs, die speziell für Marktplätze entwickelt wurden."
      },
      {
        "q": "Bleiben meine eBay-Bilder dauerhaft online?",
        "body": "Ja. Bilder, die auf ImageToURL hochgeladen werden, werden dauerhaft ohne Ablaufdatum gehostet."
      },
      {
        "q": "Welche Bildgrößen sind für eBay am besten?",
        "body": "eBay empfiehlt mindestens 500 Pixel an der längsten Seite, wobei 1600 Pixel ideal für die Zoom-Funktion sind."
      },
      {
        "q": "Kann ich dieselbe Bild-URL für mehrere eBay-Angebote verwenden?",
        "body": "Absolut. Sie können denselben Link in so vielen Angeboten verwenden, wie Sie möchten – ideal für Standard-Produktfotos oder Banner."
      }
    ],
    "ctaTitle": "Heben Sie Ihre eBay-Angebote hervor",
    "ctaBody": "Laden Sie Ihre Produktfotos hoch und erhalten Sie in Sekunden permanente URLs – ohne Registrierung oder Wasserzeichen.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "eBay出品用無料画像ホスティング | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Discord用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" },
      { "pageKey": "image-hosting-for-github-readme", "label": "GitHub用" }
    ],
    "metaDescription": "eBay出品用の商品写真を永続的な直接画像URLでホスティング。完全無料、登録不要、透かしなし。ドラッグ＆ドロップでアップロードし、HTMLエディタにそのまま貼り付けられます。",
    "schemaName": "ImageToURL",
    "schemaDescription": "登録や透かしなしで、eBay出品用の商品画像を永続的な直接URLでホスティングします。",
    "badge": "eBayセラー向け",
    "h1Pre": "eBay出品のための",
    "h1Highlight": "画像ホスティング",
    "intro": "商品写真をアップロードして、eBayの出品説明文でそのまま使える永続的な直接画像URLを取得しましょう。登録不要で無料です。",
    "howTitle": "eBayでの利用方法",
    "steps": [
      {
        "title": "商品写真をアップロード",
        "body": "商品画像をドラッグ＆ドロップしてください。JPG、PNG、WebP、GIF形式に対応しており、画質劣化はありません。"
      },
      {
        "title": "画像URLをコピー",
        "body": "永続的な直接リンクが即座に生成されます。クリックしてURLをクリップボードにコピーしてください。"
      },
      {
        "title": "eBay出品に貼り付け",
        "body": "HTMLエディタを使用して、eBayの出品説明文にURLを追加します。<img>タグを使えば、画像がすぐに表示されます。"
      }
    ],
    "whyTitle": "eBayセラーが外部ホスティングを必要とする理由",
    "whyItems": [
      {
        "title": "ImgurはeBayの埋め込みをブロック",
        "body": "Imgurなどの一般的な無料画像ホスティングサービスは、eBayからのホットリンクを積極的にブロックするため、出品ページで画像が表示されなくなります。"
      },
      {
        "title": "永続的なURL",
        "body": "画像リンクの有効期限は切れないため、出品が続く限り商品写真が正しく表示されます。"
      },
      {
        "title": "透かし（ウォーターマーク）なし",
        "body": "アップロードした画像はそのままの状態で配信されます。ブランドロゴや邪魔な透かしは一切入りません。"
      },
      {
        "title": "直接画像リンク",
        "body": "ファイルに直接アクセスできるクリーンなURLを提供します。eBayのHTMLエディタへの埋め込みに最適です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜeBayに外部画像ホスティングが必要なのですか？",
        "a": "外部ホスティングを利用することで、画質をコントロールでき、複数の出品で同じ画像を使い回すことが可能になり、eBay独自の圧縮を回避できます。"
      },
      {
        "q": "ImgurはeBayの出品に使えますか？",
        "a": "Imgurは以前からeBayからのホットリンクをブロックしています。ImageToURLは、マーケットプレイスで確実に動作するように設計された直接画像URLを提供します。"
      },
      {
        "q": "eBayの画像は永続的にオンラインで維持されますか？",
        "a": "はい。ImageToURLにアップロードされた画像は、有効期限なしで永続的にホストされます。"
      },
      {
        "q": "eBayに最適な画像サイズは？",
        "a": "eBayは長辺500ピクセル以上を推奨しており、ズーム機能を利用するには1600ピクセルが理想的です。"
      },
      {
        "q": "同じ画像URLを複数のeBay出品で使えますか？",
        "a": "もちろんです。同じリンクを必要な数だけ複数の出品に再利用できるため、定番商品やバナー画像に最適です。"
      }
    ],
    "ctaTitle": "eBayの出品を目立たせよう",
    "ctaBody": "登録や透かしなしで、商品写真をアップロードして数秒で永続的なURLを取得しましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "eBay 商品图片免费托管 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "用于 Discord" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" },
      { "pageKey": "image-hosting-for-github-readme", "label": "用于 GitHub" }
    ],
    "metaDescription": "为 eBay 商品详情页托管商品图片，获取永久、直接的图片链接。完全免费，无需注册，无水印。拖放上传即可直接粘贴到 eBay 的 HTML 编辑器中使用。",
    "schemaName": "ImageToURL",
    "schemaDescription": "为 eBay 商品详情页提供永久、直接的图片链接，无需注册，无水印。",
    "badge": "eBay 卖家",
    "h1Pre": "eBay 商品",
    "h1Highlight": "图片托管。",
    "intro": "上传您的商品照片，获取可直接用于 eBay 商品详情页的永久图片链接。完全免费，无需注册账号。",
    "howTitle": "如何用于 eBay",
    "steps": [
      {
        "title": "上传商品照片",
        "body": "将您的商品图片拖拽至上方。我们支持 JPG、PNG、WebP 和 GIF 格式，且画质无损。"
      },
      {
        "title": "复制图片链接",
        "body": "您的永久直接链接会立即生成。点击即可将 URL 复制到剪贴板。"
      },
      {
        "title": "粘贴到 eBay 详情页",
        "body": "使用 HTML 编辑器将链接添加到您的 eBay 商品详情中。使用 <img> 标签，图片即可立即显示。"
      }
    ],
    "whyTitle": "为什么 eBay 卖家需要外部托管",
    "whyItems": [
      {
        "title": "Imgur 屏蔽 eBay 嵌入",
        "body": "像 Imgur 这样热门的免费图片托管平台会主动屏蔽来自 eBay 的外链，导致您的商品详情页图片无法显示。"
      },
      {
        "title": "永久链接",
        "body": "您的图片链接永不过期，确保在您的商品刊登期间，照片始终能正常显示。"
      },
      {
        "title": "无水印",
        "body": "您的图片将保持原样呈现，不会添加任何品牌覆盖层或干扰性的水印。"
      },
      {
        "title": "直接图片链接",
        "body": "获取指向文件的纯净、直接 URL，非常适合嵌入 eBay 的 HTML 编辑器。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么 eBay 需要外部图片托管？",
        "a": "外部托管让您能更好地控制图片质量，支持在多个商品详情中重复使用，并避免 eBay 自带的图片压缩。"
      },
      {
        "q": "Imgur 能用于 eBay 吗？",
        "a": "Imgur 长期以来一直屏蔽来自 eBay 的外链。ImageToURL 提供的直接图片链接专为电商平台设计。"
      },
      {
        "q": "我的 eBay 图片会永久在线吗？",
        "a": "是的。上传到 ImageToURL 的图片将永久托管，没有过期日期。"
      },
      {
        "q": "什么尺寸的图片最适合 eBay？",
        "a": "eBay 建议长边至少 500 像素，1600 像素是实现缩放功能的理想尺寸。"
      },
      {
        "q": "我可以在多个 eBay 商品中使用同一个图片链接吗？",
        "a": "当然可以。您可以在任意数量的商品详情中重复使用同一个链接，非常适合通用商品照片或横幅。"
      }
    ],
    "ctaTitle": "让您的 eBay 商品脱颖而出",
    "ctaBody": "立即上传您的商品照片，几秒钟内即可获得永久链接，无需注册，无水印。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
