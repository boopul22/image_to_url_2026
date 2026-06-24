import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Free Image Hosting for Shopify Stores | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "For Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "For eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" }
    ],
    "metaDescription": "Host product images and custom section images for your Shopify store. Free CDN-backed image hosting with permanent URLs for custom Shopify pages.",
    "schemaName": "Image Hosting for Shopify",
    "schemaDescription": "Host product images and custom section images for your Shopify store with permanent CDN-backed URLs.",
    "badge": "SHOPIFY",
    "h1Pre": "Image Hosting for Shopify",
    "h1Highlight": "stores.",
    "intro": "Shopify already has its own media library and CDN for product photos, and you should keep using it for those. Where it gets awkward is the rest: an image inside a rich-text product description, a graphic in a blog post, a banner in a custom theme section, or a picture in an email blast. Drop the file here and you get a plain https link that ends in the real extension, ready to paste into description HTML, Liquid, or your email tool. It's free, there's no account to make, and the image isn't squeezed or resized on the way through.",
    "howTitle": "How to Use in Shopify",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag and drop product photos, banners, or graphics. All common formats supported."
      },
      {
        "title": "Copy the URL",
        "body": "Get a permanent, CDN-backed image URL instantly. One click to copy."
      },
      {
        "title": "Paste in Shopify",
        "body": "Use in custom HTML sections, blog posts, pages, or email templates. Works with any Shopify theme."
      }
    ],
    "whyTitle": "Why Shopify Stores Need This",
    "whyItems": [
      {
        "title": "Custom Section Images",
        "body": "Shopify's custom HTML and Liquid sections accept external image URLs. Add banners, icons, and visuals to any section without uploading to Shopify's file manager."
      },
      {
        "title": "Blog Post Images",
        "body": "Enrich your Shopify blog with high-quality images. External hosting means no file manager limits and faster content creation for your editorial calendar."
      },
      {
        "title": "Email campaign assets",
        "body": "Shopify Email, Klaviyo and Mailchimp all want a real image URL in the editor. Paste one in and the picture renders in the inbox. Sign in and pick 'keep forever' so the link is still live when the campaign goes out months later."
      },
      {
        "title": "Quick links for support and ads",
        "body": "Need to show a customer a sizing chart in a chat reply, or hand an image to a Meta or Google ad? Upload it, copy the link, and paste it. No file manager digging, no app to install."
      }
    ],
    "specsTitle": "Shopify image hosting at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Formats", "value": "JPG, PNG, WebP, GIF, SVG" },
      { "label": "Max size", "value": "10 MB" },
      { "label": "Output", "value": "Direct CDN link" }
    ],
    "comparisonTitle": "Shopify media library vs an external image link",
    "comparisonIntro": "These two are not rivals. Shopify's media library is the right home for product images and variants, since they tie into the catalog. An external link is just easier for the places Shopify's library is fiddly: description HTML, blog bodies, theme code and email. Here's where each one fits.",
    "comparisonColumns": [
      "Task",
      "Shopify media library",
      "External hosted link"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Product photos and variants",
          "Best fit (ties to catalog)",
          "Not the right tool"
        ]
      },
      {
        "cells": [
          "Image inside a product description",
          "Workable but clunky to grab the URL",
          "Paste a plain link into the HTML"
        ]
      },
      {
        "cells": [
          "Blog and article images",
          "Supported",
          "Quick, no file manager limits"
        ]
      },
      {
        "cells": [
          "Custom Liquid or theme section",
          "Needs a settings_data asset",
          "Hardcode the link in the section"
        ]
      },
      {
        "cells": [
          "Email and external ads",
          "Not exposed",
          "Direct https link works anywhere"
        ]
      }
    ],
    "useCasesTitle": "Where a hosted image link helps a Shopify store",
    "useCasesIntro": "Once a picture has its own direct link, it slots into the corners of Shopify that the media library doesn't reach cleanly:",
    "useCases": [
      {
        "title": "Product description HTML",
        "body": "Switch the description editor to HTML and drop an <img src> with your link. Handy for size guides, ingredient panels and comparison graphics that don't belong in the main photo gallery."
      },
      {
        "title": "Blog posts and pages",
        "body": "Paste the link into a blog article or a custom page. The image loads inline, and you skip the round trip through the file manager for every screenshot or diagram."
      },
      {
        "title": "Theme sections and email",
        "body": "Hardcode a banner into a custom Liquid section, or use the link in Shopify Email and Klaviyo. The same URL works in both, so you reuse one asset across the storefront and the inbox."
      }
    ],
    "sections": [
      {
        "heading": "Do you even need external hosting for Shopify?",
        "body": "For product images, no. Upload those to the product itself so they live in your catalog and your theme can resize them. External hosting earns its place in the spots the media library can't reach without friction: an image dropped into rich-text description HTML, a picture in a blog article, a banner hardcoded into a custom Liquid section, or a graphic in an email campaign. In those places you just want a plain link you can paste, and that's all this does. Think of it as a complement to Shopify's own storage, not a replacement for the product uploader."
      },
      {
        "heading": "What you get back, and what stays untouched",
        "body": "Upload a JPG, PNG, WebP, GIF or SVG up to 10 MB and you get a direct https link that ends in the real file extension. Nothing is recompressed, resized or watermarked, so a crisp size chart stays crisp. That matters because Shopify's storefront CDN already handles resizing for product images through its own image tags. For the loose pieces, description graphics, blog visuals, email art, you usually want the file shown exactly as you made it, which is what a direct link does."
      },
      {
        "heading": "How long do the links stay live?",
        "body": "Be honest with yourself about this before you paste a link into a live store. Anonymous uploads stick around for at least a couple of weeks and are cleared on a regular storage cleanup, which is fine for a one-off support reply but risky for a product page meant to run for a year. If the image is part of your store long term, make a free account and choose 'keep forever' when you upload. Either way, keep your own copy of the file, and remember anonymous links are public to anyone who has them."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Can I use external image URLs in Shopify?",
        "a": "Yes. Shopify accepts external image URLs in rich-text product descriptions (via the HTML view), blog posts, custom pages, custom HTML and Liquid sections, and email templates. Paste the hosted link into the editor and the image loads."
      },
      {
        "q": "Should I host product photos here instead of in Shopify?",
        "a": "No. Keep product photos in Shopify so they tie into the catalog and the theme can resize them automatically. This is for the other images: description graphics, blog visuals, theme banners and email art, where a plain link is just easier to paste."
      },
      {
        "q": "How do I add an image to a product description?",
        "a": "In the description editor, switch to the HTML view (the <> icon), then add an image tag with your link, like <img src=\"https://imagetourl.cloud/abc123.jpg\">. Save and the picture shows up in the description."
      },
      {
        "q": "Can I use these images in Shopify email campaigns?",
        "a": "Yes. Shopify Email, Klaviyo and Mailchimp all take a real image URL in their editors, so a hosted link drops straight in. If the campaign goes out weeks later, sign in and choose keep forever so the link is still live."
      },
      {
        "q": "Will an external image slow down my store?",
        "a": "Not in any way customers will notice. The file is served over HTTPS from a global CDN. Product photos already go through Shopify's own image pipeline, so this only affects the handful of custom images you paste in yourself."
      },
      {
        "q": "Are the links permanent?",
        "a": "Anonymous uploads last at least a couple of weeks and are removed on a regular storage cleanup, which is fine for a quick support reply. For anything that lives in your store long term, make a free account and pick keep forever when you upload."
      },
      {
        "q": "What image formats and sizes work?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10 MB per file. The link ends in the real extension, so it embeds the same way the original file would in an HTML img tag or Liquid."
      },
      {
        "q": "Do I need a Shopify app for this?",
        "a": "No. There's no app to install and nothing to add to your theme's app blocks. Upload here, copy the link, paste it where you need it. It works with any Shopify theme."
      },
      {
        "q": "Can I put a hosted image in a custom Liquid or theme section?",
        "a": "Yes. Hardcode the link in your section markup or pass it through a setting. Since it's a direct URL ending in the file extension, Liquid renders it like any other image source."
      },
      {
        "q": "Is it safe to use for store images?",
        "a": "Links are served over HTTPS with no redirect pages or trackers. The one thing to know: anonymous uploads are public to anyone who has the link, so don't post anything private and keep your own copy of the file as a backup."
      },
      {
        "q": "Does it compress or watermark my image?",
        "a": "No. You get back the same file you uploaded, at full quality, with no watermark. A sizing chart or ingredient panel stays sharp and readable."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Power up your Shopify store",
    "ctaBody": "Upload an image, copy the direct link, and paste it into a description, blog post, theme section or email. Free, fast, no app required.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes gratuito para tiendas Shopify | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Para Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Para eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" }
    ],
    "metaDescription": "Aloja imágenes de productos y secciones personalizadas para tu tienda Shopify. Alojamiento de imágenes gratuito con CDN y URLs permanentes para páginas personalizadas de Shopify.",
    "schemaName": "Alojamiento de imágenes para Shopify",
    "schemaDescription": "Aloja imágenes de productos y secciones personalizadas para tu tienda Shopify con URLs permanentes respaldadas por CDN.",
    "badge": "SHOPIFY",
    "h1Pre": "Alojamiento de imágenes para tiendas",
    "h1Highlight": "Shopify.",
    "intro": "Aloja imágenes de secciones personalizadas, elementos visuales para blogs y recursos de marketing para tu tienda Shopify. URLs gratuitas con CDN que funcionan en cualquier parte de tu panel de administración de Shopify.",
    "howTitle": "Cómo usarlo en Shopify",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta fotos de productos, banners o gráficos. Se admiten todos los formatos comunes."
      },
      {
        "title": "Copia la URL",
        "body": "Obtén al instante una URL de imagen permanente respaldada por CDN. Cópiala con un solo clic."
      },
      {
        "title": "Pégala en Shopify",
        "body": "Úsala en secciones HTML personalizadas, publicaciones de blog, páginas o plantillas de correo electrónico. Funciona con cualquier tema de Shopify."
      }
    ],
    "whyTitle": "Por qué las tiendas Shopify necesitan esto",
    "whyItems": [
      {
        "title": "Imágenes para secciones personalizadas",
        "body": "Las secciones HTML y Liquid personalizadas de Shopify aceptan URLs de imágenes externas. Añade banners, iconos y elementos visuales a cualquier sección sin tener que subirlos al gestor de archivos de Shopify."
      },
      {
        "title": "Imágenes para publicaciones de blog",
        "body": "Enriquece tu blog de Shopify con imágenes de alta calidad. El alojamiento externo significa que no hay límites en el gestor de archivos y una creación de contenido más rápida para tu calendario editorial."
      },
      {
        "title": "Recursos para campañas de email",
        "body": "Usa URLs de imágenes alojadas en campañas de Shopify Email, Klaviyo o Mailchimp. Las URLs permanentes garantizan que las imágenes de tus correos nunca se rompan, incluso meses después."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Puedo usar URLs de imágenes externas en Shopify?",
        "a": "Sí. Shopify permite URLs de imágenes externas en secciones HTML personalizadas, publicaciones de blog, páginas personalizadas y plantillas de correo electrónico. Puedes pegar cualquier URL de imagen alojada directamente en el editor de Shopify."
      },
      {
        "q": "¿Las imágenes alojadas externamente afectarán la velocidad de mi tienda Shopify?",
        "a": "No. Las imágenes alojadas en CDN se cargan desde servidores perimetrales cercanos a tu cliente, a menudo más rápido que las imágenes servidas desde la propia CDN de Shopify para secciones personalizadas y contenido de blog."
      },
      {
        "q": "¿Puedo usar estas imágenes en campañas de email de Shopify?",
        "a": "Absolutamente. Las URLs de imágenes alojadas externamente funcionan perfectamente en Shopify Email, Klaviyo, Mailchimp y cualquier otra herramienta de marketing por correo electrónico que conectes a tu tienda."
      },
      {
        "q": "¿Son permanentes las URLs de las imágenes?",
        "a": "Sí. Cada imagen subida a ImageToURL obtiene una URL permanente que nunca caduca. El contenido de tu tienda Shopify siempre se mostrará correctamente."
      },
      {
        "q": "¿Necesito instalar una aplicación de Shopify para esto?",
        "a": "No se requiere instalación de aplicaciones. Simplemente sube tu imagen a ImageToURL, copia la URL y pégala donde la necesites en tu panel de administración de Shopify. Funciona con cualquier tema de Shopify."
      }
    ],
    "ctaTitle": "Potencia tu tienda Shopify",
    "ctaBody": "Sube imágenes, obtén URLs permanentes y úsalas en cualquier parte de tu panel de administración de Shopify. Gratis, rápido y sin necesidad de aplicaciones.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images gratuit pour boutiques Shopify | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Pour Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Pour eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" }
    ],
    "metaDescription": "Hébergez vos images de produits et sections personnalisées pour votre boutique Shopify. Hébergement d'images gratuit via CDN avec URLs permanentes pour vos pages Shopify.",
    "schemaName": "Hébergement d'images pour Shopify",
    "schemaDescription": "Hébergez vos images de produits et sections personnalisées pour votre boutique Shopify avec des URLs permanentes via CDN.",
    "badge": "SHOPIFY",
    "h1Pre": "Hébergement d'images pour boutiques",
    "h1Highlight": "Shopify.",
    "intro": "Hébergez vos images de sections personnalisées, visuels de blog et ressources marketing pour votre boutique Shopify. URLs gratuites via CDN compatibles avec toute l'interface d'administration Shopify.",
    "howTitle": "Comment l'utiliser sur Shopify",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez vos photos de produits, bannières ou graphiques. Tous les formats courants sont pris en charge."
      },
      {
        "title": "Copiez l'URL",
        "body": "Obtenez instantanément une URL d'image permanente via CDN. Copiez en un clic."
      },
      {
        "title": "Collez dans Shopify",
        "body": "Utilisez-la dans vos sections HTML personnalisées, articles de blog, pages ou modèles d'e-mails. Compatible avec tous les thèmes Shopify."
      }
    ],
    "whyTitle": "Pourquoi les boutiques Shopify en ont besoin",
    "whyItems": [
      {
        "title": "Images de sections personnalisées",
        "body": "Les sections HTML et Liquid personnalisées de Shopify acceptent les URLs d'images externes. Ajoutez des bannières, icônes et visuels sans passer par le gestionnaire de fichiers Shopify."
      },
      {
        "title": "Images pour articles de blog",
        "body": "Enrichissez votre blog Shopify avec des images de haute qualité. L'hébergement externe évite les limites du gestionnaire de fichiers et accélère la création de contenu."
      },
      {
        "title": "Ressources pour campagnes e-mail",
        "body": "Utilisez les URLs d'images hébergées dans Shopify Email, Klaviyo ou Mailchimp. Les URLs permanentes garantissent que vos images ne disparaîtront jamais, même après des mois."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Puis-je utiliser des URLs d'images externes dans Shopify ?",
        "a": "Oui. Shopify autorise les URLs d'images externes dans les sections HTML, les articles de blog, les pages personnalisées et les modèles d'e-mails. Vous pouvez coller n'importe quelle URL d'image directement dans l'éditeur Shopify."
      },
      {
        "q": "Les images hébergées en externe affectent-elles la vitesse de ma boutique Shopify ?",
        "a": "Non. Les images hébergées via CDN se chargent depuis des serveurs proches de vos clients, souvent plus rapidement que les images servies par le CDN natif de Shopify pour les sections personnalisées."
      },
      {
        "q": "Puis-je utiliser ces images dans mes campagnes e-mail Shopify ?",
        "a": "Absolument. Les URLs d'images hébergées en externe fonctionnent parfaitement dans Shopify Email, Klaviyo, Mailchimp et tout autre outil marketing connecté à votre boutique."
      },
      {
        "q": "Les URLs des images sont-elles permanentes ?",
        "a": "Oui. Chaque image téléchargée sur ImageToURL reçoit une URL permanente qui n'expire jamais. Le contenu de votre boutique Shopify s'affichera toujours correctement."
      },
      {
        "q": "Dois-je installer une application Shopify pour cela ?",
        "a": "Aucune installation d'application n'est nécessaire. Téléchargez simplement votre image sur ImageToURL, copiez l'URL et collez-la où vous le souhaitez dans votre administration Shopify. Cela fonctionne avec n'importe quel thème."
      }
    ],
    "ctaTitle": "Boostez votre boutique Shopify",
    "ctaBody": "Téléchargez vos images, obtenez des URLs permanentes et utilisez-les partout dans votre administration Shopify. Gratuit, rapide, sans application.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Kostenloses Bild-Hosting für Shopify-Shops | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Für Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Für eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" }
    ],
    "metaDescription": "Hosten Sie Produktbilder und benutzerdefinierte Sektionsbilder für Ihren Shopify-Shop. Kostenloses CDN-gestütztes Bild-Hosting mit permanenten URLs für individuelle Shopify-Seiten.",
    "schemaName": "Bild-Hosting für Shopify",
    "schemaDescription": "Hosten Sie Produktbilder und benutzerdefinierte Sektionsbilder für Ihren Shopify-Shop mit permanenten CDN-gestützten URLs.",
    "badge": "SHOPIFY",
    "h1Pre": "Bild-Hosting für Shopify-",
    "h1Highlight": "Shops.",
    "intro": "Hosten Sie benutzerdefinierte Sektionsbilder, Blog-Grafiken und Marketing-Assets für Ihren Shopify-Shop. Kostenlose CDN-gestützte URLs, die überall in Ihrem Shopify-Admin funktionieren.",
    "howTitle": "So verwenden Sie es in Shopify",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Produktfotos, Banner oder Grafiken per Drag-and-Drop hinein. Alle gängigen Formate werden unterstützt."
      },
      {
        "title": "URL kopieren",
        "body": "Erhalten Sie sofort eine permanente, CDN-gestützte Bild-URL. Mit einem Klick kopieren."
      },
      {
        "title": "In Shopify einfügen",
        "body": "Verwenden Sie diese in benutzerdefinierten HTML-Sektionen, Blog-Beiträgen, Seiten oder E-Mail-Vorlagen. Funktioniert mit jedem Shopify-Theme."
      }
    ],
    "whyTitle": "Warum Shopify-Shops dies benötigen",
    "whyItems": [
      {
        "title": "Benutzerdefinierte Sektionsbilder",
        "body": "Shopifys benutzerdefinierte HTML- und Liquid-Sektionen akzeptieren externe Bild-URLs. Fügen Sie Banner, Icons und Grafiken zu jedem Bereich hinzu, ohne sie in den Shopify-Dateimanager hochladen zu müssen."
      },
      {
        "title": "Blog-Beitragsbilder",
        "body": "Bereichern Sie Ihren Shopify-Blog mit hochwertigen Bildern. Externes Hosting bedeutet keine Dateimanager-Limits und eine schnellere Inhaltserstellung für Ihren Redaktionsplan."
      },
      {
        "title": "Assets für E-Mail-Kampagnen",
        "body": "Verwenden Sie gehostete Bild-URLs in Shopify Email, Klaviyo oder Mailchimp-Kampagnen. Permanente URLs bedeuten, dass Ihre E-Mail-Bilder auch Monate später nicht defekt sind."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Kann ich externe Bild-URLs in Shopify verwenden?",
        "a": "Ja. Shopify erlaubt externe Bild-URLs in benutzerdefinierten HTML-Sektionen, Blog-Beiträgen, benutzerdefinierten Seiten und E-Mail-Vorlagen. Sie können jede gehostete Bild-URL direkt in den Shopify-Editor einfügen."
      },
      {
        "q": "Beeinträchtigen extern gehostete Bilder die Geschwindigkeit meines Shopify-Shops?",
        "a": "Nein. CDN-gehostete Bilder werden von Edge-Servern geladen, die Ihren Kunden am nächsten sind – oft schneller als Bilder, die für benutzerdefinierte Sektionen und Blog-Inhalte über Shopifys eigenes CDN bereitgestellt werden."
      },
      {
        "q": "Kann ich diese Bilder in Shopify-E-Mail-Kampagnen verwenden?",
        "a": "Absolut. Extern gehostete Bild-URLs funktionieren perfekt in Shopify Email, Klaviyo, Mailchimp und jedem anderen E-Mail-Marketing-Tool, das Sie mit Ihrem Shop verbinden."
      },
      {
        "q": "Sind die Bild-URLs permanent?",
        "a": "Ja. Jedes Bild, das auf ImageToURL hochgeladen wird, erhält eine permanente URL, die niemals abläuft. Ihre Shopify-Shop-Inhalte werden immer korrekt angezeigt."
      },
      {
        "q": "Muss ich dafür eine Shopify-App installieren?",
        "a": "Es ist keine App-Installation erforderlich. Laden Sie Ihr Bild einfach auf ImageToURL hoch, kopieren Sie die URL und fügen Sie sie dort ein, wo Sie sie in Ihrem Shopify-Admin benötigen. Es funktioniert mit jedem Shopify-Theme."
      }
    ],
    "ctaTitle": "Optimieren Sie Ihren Shopify-Shop",
    "ctaBody": "Laden Sie Bilder hoch, erhalten Sie permanente URLs und verwenden Sie diese überall in Ihrem Shopify-Admin. Kostenlos, schnell, keine App erforderlich.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "Shopifyストア向け無料画像ホスティング | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Discord用" },
      { "pageKey": "image-hosting-for-ebay", "label": "eBay用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" }
    ],
    "metaDescription": "Shopifyストアの商品画像やカスタムセクション用画像をホスト。CDN対応の無料画像ホスティングで、カスタムページ用の永続的なURLを提供します。",
    "schemaName": "Shopify向け画像ホスティング",
    "schemaDescription": "CDN対応の永続的なURLを使用して、Shopifyストアの商品画像やカスタムセクション用画像をホストします。",
    "badge": "SHOPIFY",
    "h1Pre": "Shopifyストア向け",
    "h1Highlight": "画像ホスティング",
    "intro": "Shopifyストアのカスタムセクション、ブログ用ビジュアル、マーケティング素材をホストしましょう。Shopify管理画面のどこでも使える、CDN対応の無料URLを提供します。",
    "howTitle": "Shopifyでの利用方法",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "商品写真、バナー、グラフィックをドラッグ＆ドロップ。一般的な画像形式すべてに対応しています。"
      },
      {
        "title": "URLをコピー",
        "body": "CDN対応の永続的な画像URLを即座に取得。ワンクリックでコピーできます。"
      },
      {
        "title": "Shopifyに貼り付け",
        "body": "カスタムHTMLセクション、ブログ記事、ページ、メールテンプレートで使用可能。あらゆるShopifyテーマに対応しています。"
      }
    ],
    "whyTitle": "Shopifyストアに選ばれる理由",
    "whyItems": [
      {
        "title": "カスタムセクション用画像",
        "body": "ShopifyのカスタムHTMLやLiquidセクションは外部画像URLに対応しています。Shopifyのファイルマネージャーを使わずに、バナーやアイコンを自由に追加できます。"
      },
      {
        "title": "ブログ記事用画像",
        "body": "高品質な画像でShopifyブログを充実させましょう。外部ホスティングならファイルマネージャーの制限を気にせず、効率的にコンテンツを作成できます。"
      },
      {
        "title": "メールキャンペーン用素材",
        "body": "Shopify Email、Klaviyo、Mailchimpなどのキャンペーンでホストされた画像URLを使用可能。永続的なURLなので、時間が経過しても画像リンク切れの心配はありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "Shopifyで外部画像URLを使用できますか？",
        "a": "はい。ShopifyはカスタムHTMLセクション、ブログ記事、カスタムページ、メールテンプレートでの外部画像URL利用を許可しています。ホストされた画像URLをShopifyエディタに直接貼り付けるだけです。"
      },
      {
        "q": "外部ホスト画像はShopifyストアの表示速度に影響しますか？",
        "a": "いいえ。CDNホストされた画像は顧客に最も近いエッジサーバーから読み込まれるため、カスタムセクションやブログコンテンツにおいては、Shopify独自のCDNよりも高速に表示される場合があります。"
      },
      {
        "q": "Shopifyのメールキャンペーンでこれらの画像を使用できますか？",
        "a": "もちろんです。外部ホストされた画像URLは、Shopify Email、Klaviyo、Mailchimpなど、ストアに接続しているあらゆるメールマーケティングツールで完璧に機能します。"
      },
      {
        "q": "画像URLは永続的ですか？",
        "a": "はい。ImageToURLにアップロードされたすべての画像には、期限切れのない永続的なURLが発行されます。Shopifyストアのコンテンツは常に正しく表示されます。"
      },
      {
        "q": "これを利用するためにShopifyアプリをインストールする必要がありますか？",
        "a": "アプリのインストールは不要です。ImageToURLに画像をアップロードし、URLをコピーしてShopify管理画面の必要な場所に貼り付けるだけです。あらゆるShopifyテーマで動作します。"
      }
    ],
    "ctaTitle": "Shopifyストアをパワーアップ",
    "ctaBody": "画像をアップロードして永続的なURLを取得し、Shopify管理画面のどこでも活用しましょう。無料、高速、アプリ不要です。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "Shopify 商店免费图片托管 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "用于 Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "用于 eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" }
    ],
    "metaDescription": "为您的 Shopify 商店托管产品图片和自定义板块图片。提供永久 URL 的免费 CDN 图片托管服务，适用于 Shopify 自定义页面。",
    "schemaName": "Shopify 图片托管",
    "schemaDescription": "使用带有永久 CDN URL 的服务，为您的 Shopify 商店托管产品图片和自定义板块图片。",
    "badge": "SHOPIFY",
    "h1Pre": "Shopify 商店的",
    "h1Highlight": "图片托管。",
    "intro": "为您的 Shopify 商店托管自定义板块图片、博客视觉素材和营销资源。提供免费的 CDN 加速 URL，可在 Shopify 后台的任何位置使用。",
    "howTitle": "如何在 Shopify 中使用",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖放产品照片、横幅或图形。支持所有常见格式。"
      },
      {
        "title": "复制 URL",
        "body": "立即获取永久的 CDN 加速图片 URL。一键即可复制。"
      },
      {
        "title": "在 Shopify 中粘贴",
        "body": "用于自定义 HTML 板块、博客文章、页面或电子邮件模板。适用于任何 Shopify 主题。"
      }
    ],
    "whyTitle": "为什么 Shopify 商店需要此服务",
    "whyItems": [
      {
        "title": "自定义板块图片",
        "body": "Shopify 的自定义 HTML 和 Liquid 板块支持外部图片 URL。无需上传到 Shopify 文件管理器，即可在任何板块添加横幅、图标和视觉素材。"
      },
      {
        "title": "博客文章图片",
        "body": "用高质量图片丰富您的 Shopify 博客。外部托管意味着没有文件管理器限制，并能加快内容创作速度，助力您的编辑计划。"
      },
      {
        "title": "电子邮件营销素材",
        "body": "在 Shopify Email、Klaviyo 或 Mailchimp 活动中使用托管的图片 URL。永久 URL 确保您的邮件图片即使在数月后也不会失效。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我可以在 Shopify 中使用外部图片 URL 吗？",
        "a": "可以。Shopify 允许在自定义 HTML 板块、博客文章、自定义页面和电子邮件模板中使用外部图片 URL。您可以直接将任何托管的图片 URL 粘贴到 Shopify 编辑器中。"
      },
      {
        "q": "外部托管的图片会影响我的 Shopify 商店速度吗？",
        "a": "不会。CDN 托管的图片从距离客户最近的边缘服务器加载，对于自定义板块和博客内容而言，其加载速度通常比 Shopify 自带的 CDN 更快。"
      },
      {
        "q": "我可以在 Shopify 电子邮件营销活动中使用这些图片吗？",
        "a": "当然可以。外部托管的图片 URL 可以完美地用于 Shopify Email、Klaviyo、Mailchimp 以及您连接到商店的任何其他电子邮件营销工具。"
      },
      {
        "q": "这些图片 URL 是永久的吗？",
        "a": "是的。上传到 ImageToURL 的每张图片都会获得一个永不过期的永久 URL。您的 Shopify 商店内容将始终正确显示。"
      },
      {
        "q": "我需要为此安装 Shopify 应用程序吗？",
        "a": "不需要安装任何应用程序。只需将图片上传到 ImageToURL，复制 URL，然后将其粘贴到 Shopify 后台需要的地方即可。它适用于任何 Shopify 主题。"
      }
    ],
    "ctaTitle": "为您的 Shopify 商店赋能",
    "ctaBody": "上传图片，获取永久 URL，并在 Shopify 后台的任何位置使用。免费、快速，无需安装应用程序。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
