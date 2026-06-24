import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for WordPress — Free, No Plugin, CDN URLs",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "For Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "For eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" }
    ],
    "metaDescription": "Host images for WordPress on a free CDN. Keep your wp-uploads folder small, cut bandwidth, and paste a direct image URL into the block editor. No plugin, no account.",
    "schemaName": "Image Hosting for WordPress",
    "schemaDescription": "A free way to host images for WordPress off your own server. Get a direct CDN link and paste it into the block editor, a Custom HTML block, or your theme.",
    "badge": "WORDPRESS",
    "h1Pre": "Image Hosting for WordPress",
    "h1Highlight": "free, no plugin needed.",
    "intro": "WordPress has its own media library, so why host images somewhere else? Because every photo you upload there sits on your hosting disk, gets copied into every backup, and eats the bandwidth your plan pays for. Drop an image in the box above and you get a direct link in about two seconds. Paste that URL into the block editor, a Custom HTML block, your theme files, or an email, and the picture loads from a fast CDN instead of your server. No plugin, no account, and nothing gets compressed on the way through.",
    "specsTitle": "Image hosting for WordPress at a glance",
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
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "Max size",
        "value": "10 MB"
      },
      {
        "label": "Output",
        "value": "Direct CDN link"
      }
    ],
    "howTitle": "How to host an image for WordPress",
    "steps": [
      {
        "title": "Upload your image",
        "body": "Drag a file onto the box above or click to pick one. JPG, PNG, WebP, GIF and SVG all work, up to 10MB each. Nothing is resized or recompressed."
      },
      {
        "title": "Copy the link",
        "body": "Your image lands on a global CDN and a direct URL appears right away. It ends in the real file extension, so it behaves exactly like a file in wp-uploads would."
      },
      {
        "title": "Paste it into WordPress",
        "body": "In the block editor, add an Image block and choose 'Insert from URL'. Or drop the link inside a Custom HTML block as <img src=\"...\">, a widget, or your theme code. It loads off the CDN, not your host."
      }
    ],
    "whyTitle": "Why host WordPress images externally",
    "whyItems": [
      {
        "title": "Keep your disk and backups small",
        "body": "Media is usually the biggest thing in a WordPress backup. Years of full-size uploads can balloon wp-content to several gigabytes, which makes every backup slower and your hosting plan tighter. Images you host elsewhere never touch that folder."
      },
      {
        "title": "Offload bandwidth from your host",
        "body": "Images are often 60 to 80 percent of a page's weight. Serving them from a CDN means those requests hit edge servers near your visitor instead of your origin, so a cheap shared plan stops choking when a post does well."
      },
      {
        "title": "No plugin to maintain",
        "body": "Offload plugins add settings, a paid tier, and one more thing that can break on a core update. Pasting a plain URL needs none of that. The link is just text in your post, so there's nothing to keep updated."
      },
      {
        "title": "Full quality, no extra processing",
        "body": "WordPress generates several scaled copies of every upload and can re-encode large images. Here you get back the exact file you put in, at full resolution, with no watermark and no second copies cluttering your media folder."
      }
    ],
    "comparisonTitle": "WordPress image hosts compared",
    "comparisonIntro": "Plenty of free hosts can hand you a link to paste into WordPress. They differ on whether you need an account, how big a file you can drop, whether the link hotlinks straight into an Image block, and how long it stays live. Here's how the common ones line up.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Direct hotlink",
      "Keeps full quality",
      "Link lifetime"
    ],
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "Yes",
          "10 MB",
          "Yes",
          "Yes",
          "Weeks free, forever when signed in"
        ]
      },
      {
        "cells": [
          "Imgur",
          "No (since 2023)",
          "20 MB",
          "Limited",
          "Yes",
          "Tied to your account"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "Yes",
          "32 MB",
          "Yes",
          "Yes",
          "Optional expiry"
        ]
      },
      {
        "cells": [
          "Catbox",
          "Yes",
          "200 MB",
          "Yes",
          "Yes",
          "Permanent"
        ]
      },
      {
        "cells": [
          "Postimages",
          "Yes",
          "24 MB",
          "Yes",
          "No (resized to 1280px)",
          "Permanent"
        ]
      }
    ],
    "useCasesTitle": "Where a hosted image URL helps in WordPress",
    "useCasesIntro": "Once a picture has a direct link, it slots into most parts of a WordPress site:",
    "useCases": [
      {
        "title": "Block editor and Custom HTML",
        "body": "Use 'Insert from URL' on an Image block, or write <img src> inside a Custom HTML block. Both load the picture straight from the CDN with no upload to your media library."
      },
      {
        "title": "Themes and email",
        "body": "Reference the URL in a child theme template, a header logo, or a transactional and newsletter email. The same link works everywhere a normal image address does."
      },
      {
        "title": "Multi-site reuse",
        "body": "Run several WordPress installs? Upload an image once and paste the one URL across all of them, instead of re-uploading the same banner to each media library."
      }
    ],
    "sections": [
      {
        "heading": "External hosting vs the WordPress media library",
        "body": "The media library is fine for most sites, and you don't have to abandon it. The trade-off is simple. Anything in the library lives on your hosting disk, gets duplicated into every scaled size, and rides along in each backup. An external URL keeps the file off your server entirely, so your disk usage, backup size, and origin bandwidth all stay flat no matter how many images a post uses. A good rule: keep small site graphics in the library where the editor manages them, and host the heavy or rarely changing images, like big hero shots or downloadable graphics, on a CDN link."
      },
      {
        "heading": "How to insert an external image in the block editor",
        "body": "Add an Image block, click the upload area, and pick 'Insert from URL'. Paste the link you copied here and the picture appears. For more control, use a Custom HTML block and write your own tag, like <img src=\"https://imagetourl.cloud/abc123.jpg\" alt=\"...\" loading=\"lazy\">. The Custom HTML route lets you set alt text, lazy loading, and width yourself, which matters for accessibility and Core Web Vitals. Most page builders, including Elementor and similar tools, also have a field that accepts an external image URL."
      },
      {
        "heading": "Are externally hosted images safe and good for SEO?",
        "body": "Every link is served over HTTPS and points only at your file, with no redirect or tracker attached. For SEO, search engines index images by their URL whether that URL is on your domain or a CDN, so a hosted image can still rank and still help the page, as long as you add real alt text. One caveat: anonymous uploads are public to anyone with the link, so don't host private client material, and keep your own copy as a backup since free links are cleared on a regular cleanup."
      }
    ],
    "faqTitle": "WordPress image hosting FAQ",
    "faqs": [
      {
        "q": "Can I use externally hosted images in WordPress?",
        "a": "Yes. The block editor's Image block has an 'Insert from URL' option, and a Custom HTML block accepts a normal <img src> tag. The Classic Editor and most page builders take an external image URL too."
      },
      {
        "q": "How do I add an image by URL in the WordPress block editor?",
        "a": "Add an Image block, click the upload area, and choose 'Insert from URL'. Paste the link from the box above and the picture loads from the CDN. For custom alt text or lazy loading, use a Custom HTML block instead."
      },
      {
        "q": "Does this replace the WordPress media library?",
        "a": "Not entirely, and it doesn't have to. The library still handles galleries and featured images well. External hosting is best for heavy images you want off your disk and out of your backups. Many sites use both."
      },
      {
        "q": "Will external images slow down my site?",
        "a": "Usually they speed it up. Images served from a global CDN load from an edge server near the visitor, which is often faster than a budget shared host serving its own files. Add loading=\"lazy\" in a Custom HTML block to help further."
      },
      {
        "q": "Do I need a plugin?",
        "a": "No. Pasting a direct URL into a block or template needs no plugin at all. That means nothing extra to configure, update, or break when WordPress core changes."
      },
      {
        "q": "Will this lower my hosting bandwidth and disk usage?",
        "a": "Yes. Images you host externally never sit in wp-uploads, so they don't grow your disk usage or your backups, and visitors pull them from the CDN instead of your origin, which trims bandwidth."
      },
      {
        "q": "Can I use these URLs in WooCommerce listings?",
        "a": "Yes. An external image URL works in WooCommerce product descriptions, custom fields, and page builder sections the same way it works anywhere else in WordPress."
      },
      {
        "q": "Do the image links expire?",
        "a": "Anonymous uploads stay live until our regular storage cleanup, so you get a couple of weeks at minimum and often longer. Want a link that never goes away? Create a free account and pick 'keep forever' when you upload."
      },
      {
        "q": "Will external images still show up in Google Images?",
        "a": "Yes. Search engines index an image by its URL regardless of which server hosts it. Add clear alt text and a descriptive filename and a hosted image can rank just like one in your media library."
      },
      {
        "q": "Does it compress or resize my image?",
        "a": "No. You get back the same file you uploaded, at full resolution, with no re-compression and no watermark. WordPress normally makes several scaled copies of an upload; here there's just the one file."
      },
      {
        "q": "What formats and sizes can I upload?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10MB per file. If an image is larger, compress or resize it first, then upload it and copy the link."
      },
      {
        "q": "Can I host the same image across several WordPress sites?",
        "a": "Yes. Upload it once and paste the single URL into each site. That beats re-uploading the same logo or banner into every separate media library."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Host your WordPress images off your server",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct CDN link in seconds. Paste it into the block editor or a Custom HTML block. No plugin, no account, no compression.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para WordPress — Acelera tu sitio | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Para Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Para eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" }
    ],
    "metaDescription": "Acelera WordPress alojando imágenes externamente en una CDN gratuita. Reduce la carga del servidor, mejora los Core Web Vitals y obtén URLs de imagen permanentes.",
    "schemaName": "Alojamiento de imágenes para WordPress",
    "schemaDescription": "Acelera WordPress alojando imágenes externamente en una CDN gratuita para reducir la carga del servidor y mejorar los Core Web Vitals.",
    "badge": "WORDPRESS",
    "h1Pre": "Alojamiento de imágenes para WordPress",
    "h1Highlight": "acelera tu sitio.",
    "intro": "Descarga tus imágenes a una CDN global gratuita. Reduce la carga del servidor, mejora los Core Web Vitals y mantén tu sitio WordPress rápido, sin necesidad de plugins.",
    "howTitle": "Cómo utilizarlo",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta o selecciona cualquier imagen desde tu dispositivo. Compatible con JPG, PNG, WebP, GIF y SVG."
      },
      {
        "title": "Copia la URL",
        "body": "Obtén al instante una URL permanente respaldada por una CDN para tu imagen. Un solo clic para copiarla al portapapeles."
      },
      {
        "title": "Pega en WordPress",
        "body": "Usa el bloque de Imagen, el bloque de HTML personalizado o pega directamente en el Editor Clásico. Tu imagen se cargará instantáneamente desde la CDN."
      }
    ],
    "whyTitle": "Por qué usar alojamiento externo de imágenes para WordPress",
    "whyItems": [
      {
        "title": "Reduce la carga del servidor",
        "body": "Cada solicitud de imagen gestionada por tu hosting de WordPress consume ancho de banda y CPU. Descarga las imágenes a una CDN para que tu servidor pueda centrarse en entregar las páginas."
      },
      {
        "title": "Mejora la velocidad de carga",
        "body": "Las imágenes alojadas en una CDN se cargan desde el servidor perimetral más cercano a tu visitante. Una entrega de imágenes más rápida significa mejores puntuaciones en Largest Contentful Paint."
      },
      {
        "title": "Reduce los costes de ancho de banda",
        "body": "Las imágenes suelen representar entre el 60 y el 80% del peso de una página. Al alojarlas externamente, reduces drásticamente el uso de ancho de banda en tu hosting de WordPress."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Puedo usar imágenes alojadas externamente en WordPress?",
        "a": "Sí. WordPress admite URLs de imágenes externas tanto en el editor de bloques como en el editor clásico. Simplemente pega la URL de la imagen en un bloque de Imagen o utiliza el bloque de HTML personalizado."
      },
      {
        "q": "¿Las imágenes externas ralentizarán mi sitio de WordPress?",
        "a": "No, todo lo contrario. Las imágenes servidas desde una CDN global se cargan más rápido que las alojadas en tu servidor de WordPress, especialmente si tu plan de hosting tiene recursos limitados."
      },
      {
        "q": "¿Caducan las URLs de las imágenes?",
        "a": "No. Todas las URLs de imágenes generadas por ImageToURL son permanentes. Una vez subidas, tus imágenes permanecen accesibles en la misma URL indefinidamente."
      },
      {
        "q": "¿Puedo usar estas URLs en listados de productos de WooCommerce?",
        "a": "Sí. Puedes usar URLs de imágenes alojadas externamente en descripciones de productos de WooCommerce, campos personalizados y secciones de constructores de páginas."
      },
      {
        "q": "¿Existe un límite de tamaño de archivo para las subidas?",
        "a": "ImageToURL admite tamaños de subida generosos para formatos de imagen comunes, incluyendo JPG, PNG, WebP, GIF y SVG. No es necesario registrarse."
      }
    ],
    "ctaTitle": "Acelera tu sitio WordPress hoy mismo",
    "ctaBody": "Sube una imagen, obtén una URL respaldada por una CDN y pégala en WordPress sin plugins ni complicaciones.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images pour WordPress — Accélérez votre site | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Pour Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Pour eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" }
    ],
    "metaDescription": "Accélérez WordPress en hébergeant vos images sur un CDN gratuit. Réduisez la charge serveur, améliorez les Core Web Vitals et obtenez des URL d'images permanentes.",
    "schemaName": "Hébergement d'images pour WordPress",
    "schemaDescription": "Accélérez WordPress en hébergeant vos images sur un CDN gratuit pour réduire la charge serveur et améliorer les Core Web Vitals.",
    "badge": "WORDPRESS",
    "h1Pre": "Hébergement d'images pour WordPress",
    "h1Highlight": "accélérez votre site.",
    "intro": "Déchargez vos images sur un CDN mondial gratuit. Réduisez la charge serveur, améliorez les Core Web Vitals et gardez votre site WordPress rapide — sans aucun plugin.",
    "howTitle": "Comment l'utiliser",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez ou sélectionnez n'importe quelle image depuis votre appareil. Supporte JPG, PNG, WebP, GIF et SVG."
      },
      {
        "title": "Copiez l'URL",
        "body": "Obtenez instantanément une URL permanente via CDN pour votre image. Un clic suffit pour la copier dans votre presse-papiers."
      },
      {
        "title": "Collez dans WordPress",
        "body": "Utilisez le bloc Image, le bloc HTML personnalisé ou collez directement dans l'éditeur classique. Votre image se chargera instantanément depuis le CDN."
      }
    ],
    "whyTitle": "Pourquoi l'hébergement externe pour WordPress",
    "whyItems": [
      {
        "title": "Réduisez la charge serveur",
        "body": "Chaque requête d'image traitée par votre hébergeur WordPress consomme de la bande passante et du CPU. Déchargez vos images sur un CDN pour que votre serveur se concentre sur la livraison des pages."
      },
      {
        "title": "Améliorez la vitesse de chargement",
        "body": "Les images hébergées sur CDN se chargent depuis le serveur le plus proche de votre visiteur. Une livraison plus rapide signifie de meilleurs scores de Largest Contentful Paint."
      },
      {
        "title": "Réduisez les coûts de bande passante",
        "body": "Les images représentent souvent 60 à 80 % du poids d'une page. En les hébergeant en externe, vous réduisez drastiquement la consommation de bande passante de votre hébergeur WordPress."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Puis-je utiliser des images hébergées en externe dans WordPress ?",
        "a": "Oui. WordPress supporte les URL d'images externes dans l'éditeur de blocs et l'éditeur classique. Collez simplement l'URL de l'image dans un bloc Image ou utilisez le bloc HTML personnalisé."
      },
      {
        "q": "Les images externes vont-elles ralentir mon site WordPress ?",
        "a": "Non, au contraire. Les images servies depuis un CDN mondial se chargent plus rapidement que celles hébergées sur votre serveur WordPress, surtout si votre plan d'hébergement a des ressources limitées."
      },
      {
        "q": "Les URL des images expirent-elles ?",
        "a": "Non. Toutes les URL générées par ImageToURL sont permanentes. Une fois téléchargées, vos images restent accessibles à la même URL indéfiniment."
      },
      {
        "q": "Puis-je utiliser ces URL dans les fiches produits WooCommerce ?",
        "a": "Oui. Vous pouvez utiliser des URL d'images hébergées en externe dans les descriptions de produits WooCommerce, les champs personnalisés et les sections de constructeurs de pages."
      },
      {
        "q": "Y a-t-il une limite de taille pour les téléchargements ?",
        "a": "ImageToURL supporte des tailles de fichiers généreuses pour les formats courants, notamment JPG, PNG, WebP, GIF et SVG. Aucune inscription n'est requise."
      }
    ],
    "ctaTitle": "Accélérez votre site WordPress dès aujourd'hui",
    "ctaBody": "Téléchargez une image, obtenez une URL via CDN et collez-la dans WordPress sans plugin ni complication.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bildhosting für WordPress — Beschleunigen Sie Ihre Website | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Für Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Für eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" }
    ],
    "metaDescription": "Beschleunigen Sie WordPress durch externes Bildhosting auf einem kostenlosen CDN. Reduzieren Sie die Serverlast, verbessern Sie die Core Web Vitals und erhalten Sie permanente Bild-URLs.",
    "schemaName": "Bildhosting für WordPress",
    "schemaDescription": "Beschleunigen Sie WordPress durch externes Bildhosting auf einem kostenlosen CDN, um die Serverlast zu reduzieren und die Core Web Vitals zu verbessern.",
    "badge": "WORDPRESS",
    "h1Pre": "Bildhosting für WordPress",
    "h1Highlight": "beschleunigen Sie Ihre Website.",
    "intro": "Lagern Sie Ihre Bilder auf ein kostenloses globales CDN aus. Reduzieren Sie die Serverlast, verbessern Sie die Core Web Vitals und halten Sie Ihre WordPress-Seite schnell — ganz ohne Plugins.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie ein Bild per Drag-and-Drop hinein oder wählen Sie es von Ihrem Gerät aus. Unterstützt JPG, PNG, WebP, GIF und SVG."
      },
      {
        "title": "URL kopieren",
        "body": "Erhalten Sie sofort eine permanente, CDN-gestützte URL für Ihr Bild. Mit einem Klick in die Zwischenablage kopieren."
      },
      {
        "title": "In WordPress einfügen",
        "body": "Verwenden Sie den Bild-Block, den Custom HTML-Block oder fügen Sie die URL direkt in den Classic Editor ein. Ihr Bild wird sofort vom CDN geladen."
      }
    ],
    "whyTitle": "Warum externes Bildhosting für WordPress?",
    "whyItems": [
      {
        "title": "Serverlast reduzieren",
        "body": "Jede Bildanfrage, die von Ihrem WordPress-Host verarbeitet wird, verbraucht Bandbreite und CPU. Lagern Sie Bilder auf ein CDN aus, damit sich Ihr Server auf die Auslieferung der Seiten konzentrieren kann."
      },
      {
        "title": "Seitengeschwindigkeit verbessern",
        "body": "CDN-gehostete Bilder werden vom nächstgelegenen Edge-Server für Ihre Besucher geladen. Eine schnellere Bildauslieferung bedeutet bessere Largest Contentful Paint-Werte."
      },
      {
        "title": "Bandbreitenkosten senken",
        "body": "Bilder machen oft 60-80% des Seitengewichts aus. Durch externes Hosting reduzieren Sie die Bandbreitennutzung Ihres WordPress-Hosts massiv."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Kann ich extern gehostete Bilder in WordPress verwenden?",
        "a": "Ja. WordPress unterstützt externe Bild-URLs sowohl im Block Editor als auch im Classic Editor. Fügen Sie einfach die Bild-URL in einen Bild-Block ein oder verwenden Sie den Custom HTML-Block."
      },
      {
        "q": "Verlangsamen externe Bilder meine WordPress-Seite?",
        "a": "Nein, im Gegenteil. Bilder, die von einem globalen CDN geladen werden, sind schneller als Bilder auf Ihrem WordPress-Server, insbesondere wenn Ihr Hosting-Plan begrenzte Ressourcen hat."
      },
      {
        "q": "Laufen die Bild-URLs ab?",
        "a": "Nein. Alle von ImageToURL generierten Bild-URLs sind permanent. Sobald sie hochgeladen wurden, bleiben Ihre Bilder unter derselben URL dauerhaft erreichbar."
      },
      {
        "q": "Kann ich diese URLs in WooCommerce-Produktlisten verwenden?",
        "a": "Ja. Sie können extern gehostete Bild-URLs in WooCommerce-Produktbeschreibungen, benutzerdefinierten Feldern und Page-Builder-Abschnitten verwenden."
      },
      {
        "q": "Gibt es eine Dateigrößenbeschränkung für Uploads?",
        "a": "ImageToURL unterstützt großzügige Upload-Größen für gängige Bildformate wie JPG, PNG, WebP, GIF und SVG. Eine Registrierung ist nicht erforderlich."
      }
    ],
    "ctaTitle": "Beschleunigen Sie Ihre WordPress-Seite noch heute",
    "ctaBody": "Laden Sie ein Bild hoch, erhalten Sie eine CDN-gestützte URL und fügen Sie diese ohne Plugins oder Aufwand in WordPress ein.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "WordPress向け画像ホスティング — サイトを高速化 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Discord用" },
      { "pageKey": "image-hosting-for-ebay", "label": "eBay用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" }
    ],
    "metaDescription": "無料CDNで画像を外部ホスティングしてWordPressを高速化。サーバー負荷を軽減し、Core Web Vitalsを改善。永続的な画像URLを取得できます。",
    "schemaName": "WordPress向け画像ホスティング",
    "schemaDescription": "無料CDNで画像を外部ホスティングし、サーバー負荷を軽減してCore Web Vitalsを改善することでWordPressを高速化します。",
    "badge": "WORDPRESS",
    "h1Pre": "WordPress向け画像ホスティングで",
    "h1Highlight": "サイトを高速化。",
    "intro": "画像を無料のグローバルCDNにオフロードしましょう。プラグイン不要で、サーバー負荷を軽減し、Core Web Vitalsを改善してWordPressサイトを高速に保ちます。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "デバイスから画像をドラッグ＆ドロップまたは選択します。JPG、PNG、WebP、GIF、SVG形式に対応しています。"
      },
      {
        "title": "URLをコピー",
        "body": "CDN経由の永続的な画像URLを即座に取得。ワンクリックでクリップボードにコピーできます。"
      },
      {
        "title": "WordPressに貼り付け",
        "body": "画像ブロックやカスタムHTMLブロック、またはクラシックエディタに直接貼り付けます。画像はCDNから即座に読み込まれます。"
      }
    ],
    "whyTitle": "WordPressで外部画像ホスティングを利用する理由",
    "whyItems": [
      {
        "title": "サーバー負荷の軽減",
        "body": "WordPressホストが処理する画像リクエストは帯域幅とCPUを消費します。画像をCDNにオフロードすることで、サーバーはページ配信に専念できます。"
      },
      {
        "title": "ページ速度の向上",
        "body": "CDNホストの画像は、訪問者に最も近いエッジサーバーから読み込まれます。画像の配信が速くなれば、Largest Contentful Paint（LCP）スコアも向上します。"
      },
      {
        "title": "帯域幅コストの削減",
        "body": "画像はページ容量の60〜80%を占めることが一般的です。外部ホスティングを利用することで、WordPressホストの帯域幅使用量を大幅に削減できます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "WordPressで外部ホストされた画像を使用できますか？",
        "a": "はい。WordPressはブロックエディタとクラシックエディタの両方で外部画像URLをサポートしています。画像ブロックにURLを貼り付けるか、カスタムHTMLブロックを使用してください。"
      },
      {
        "q": "外部画像を使用するとWordPressサイトが遅くなりますか？",
        "a": "いいえ、むしろ逆です。グローバルCDNから配信される画像は、特にホスティングプランのリソースが限られている場合、WordPressサーバーでホストするよりも高速に読み込まれます。"
      },
      {
        "q": "画像URLの有効期限はありますか？",
        "a": "いいえ。ImageToURLで生成されたすべての画像URLは永続的です。一度アップロードすれば、画像は同じURLで無期限にアクセス可能です。"
      },
      {
        "q": "WooCommerceの商品リストでこれらのURLを使用できますか？",
        "a": "はい。WooCommerceの商品説明、カスタムフィールド、ページビルダーセクションで外部ホストされた画像URLを使用できます。"
      },
      {
        "q": "アップロードにファイルサイズ制限はありますか？",
        "a": "ImageToURLは、JPG、PNG、WebP、GIF、SVGなどの一般的な画像形式に対して十分なアップロードサイズをサポートしています。登録は不要です。"
      }
    ],
    "ctaTitle": "今すぐWordPressサイトを高速化",
    "ctaBody": "画像をアップロードしてCDN経由のURLを取得し、プラグインなしで簡単にWordPressに貼り付けましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "WordPress 图片托管 — 加速您的网站 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "用于 Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "用于 eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" }
    ],
    "metaDescription": "通过免费 CDN 外部托管图片来加速 WordPress。减轻服务器负载，改善核心网页指标 (Core Web Vitals)，并获取永久图片 URL。",
    "schemaName": "WordPress 图片托管",
    "schemaDescription": "通过免费 CDN 外部托管图片来加速 WordPress，从而减轻服务器负载并改善核心网页指标。",
    "badge": "WORDPRESS",
    "h1Pre": "WordPress 图片托管",
    "h1Highlight": "加速您的网站。",
    "intro": "将图片卸载到免费的全球 CDN。减轻服务器负载，改善核心网页指标，并保持 WordPress 网站快速运行 — 无需任何插件。",
    "howTitle": "如何使用",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖放或从您的设备中选择任何图片。支持 JPG、PNG、WebP、GIF 和 SVG 格式。"
      },
      {
        "title": "复制 URL",
        "body": "立即获取图片的永久 CDN 加速 URL。一键即可复制到剪贴板。"
      },
      {
        "title": "粘贴到 WordPress",
        "body": "使用“图片”区块、自定义 HTML 区块，或直接粘贴到经典编辑器中。您的图片将通过 CDN 瞬间加载。"
      }
    ],
    "whyTitle": "为什么 WordPress 需要外部图片托管",
    "whyItems": [
      {
        "title": "减轻服务器负载",
        "body": "WordPress 主机处理的每一个图片请求都会消耗带宽和 CPU。将图片卸载到 CDN，让您的服务器专注于页面交付。"
      },
      {
        "title": "提高页面速度",
        "body": "CDN 托管的图片会从距离访客最近的边缘服务器加载。更快的图片交付意味着更好的最大内容渲染 (LCP) 分数。"
      },
      {
        "title": "降低带宽成本",
        "body": "图片通常占页面大小的 60-80%。通过外部托管，您可以大幅削减 WordPress 主机的带宽使用量。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我可以在 WordPress 中使用外部托管的图片吗？",
        "a": "可以。WordPress 在区块编辑器和经典编辑器中都支持外部图片 URL。只需将图片 URL 粘贴到“图片”区块或使用“自定义 HTML”区块即可。"
      },
      {
        "q": "外部图片会拖慢我的 WordPress 网站吗？",
        "a": "不会，恰恰相反。从全球 CDN 加载的图片比托管在 WordPress 服务器上的图片加载速度更快，特别是当您的主机资源有限时。"
      },
      {
        "q": "图片 URL 会过期吗？",
        "a": "不会。ImageToURL 生成的所有图片 URL 都是永久的。上传后，您的图片将无限期地保持在同一 URL 下可访问。"
      },
      {
        "q": "我可以在 WooCommerce 产品列表中使用这些 URL 吗？",
        "a": "可以。您可以在 WooCommerce 产品描述、自定义字段和页面构建器部分使用外部托管的图片 URL。"
      },
      {
        "q": "上传有文件大小限制吗？",
        "a": "ImageToURL 为包括 JPG、PNG、WebP、GIF 和 SVG 在内的常见图片格式提供慷慨的上传大小支持。无需注册。"
      }
    ],
    "ctaTitle": "立即加速您的 WordPress 网站",
    "ctaBody": "上传图片，获取 CDN 加速 URL，并将其粘贴到 WordPress 中，无需插件，简单快捷。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
