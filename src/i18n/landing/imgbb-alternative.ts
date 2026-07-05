import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "ImgBB Alternative — No Ads, No Account, Direct Links | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "imgur-alternative", "label": "Imgur alternative" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary alternative" }
    ],
    "metaDescription": "Looking for an ImgBB alternative? ImageToURL is faster, cleaner, and completely free. No ads, no compression, permanent direct image links.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A faster, cleaner alternative to ImgBB with no ads, no compression, and permanent direct image links.",
    "badge": "IMGBB ALTERNATIVE",
    "h1Pre": "A Better ImgBB",
    "h1Highlight": "Alternative.",
    "intro": "ImgBB is a fine free image host, but every upload lands on its own image page wrapped in ads, and the link you copy often points at that page rather than the file. If all you want is a clean link to drop into Discord or a forum, that gets in the way. ImageToURL skips the account and the gallery page: drop a JPG, PNG, WebP, GIF or SVG up to 10MB and you get a direct https link in about two seconds, at full quality, with no watermark and no ad page around it.",
    "specsTitle": "ImageToURL at a glance",
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
    "howTitle": "How it works",
    "steps": [
      {
        "title": "Drop your image in",
        "body": "Drag a file onto the box above or click to pick one from your device. JPG, PNG, WebP, GIF and SVG all work, up to 10MB each. No account screen, no email to confirm first."
      },
      {
        "title": "Copy the direct link",
        "body": "Your image lands on a global CDN and a direct link appears right away. It ends in the real file extension, so it behaves like the original file and not a page about it."
      },
      {
        "title": "Paste it anywhere",
        "body": "Drop the URL into Discord, a Reddit comment, a forum post, an email or an HTML img tag. It renders as the picture inline, with no ad page and no extra click for the person reading."
      }
    ],
    "whyTitle": "Why people pick a direct-link host over ImgBB",
    "whyItems": [
      {
        "title": "A direct link, not an image page",
        "body": "ImgBB puts each upload on its own viewer page with ads around it. If you only want a raw link that embeds inline, that page is friction. Here you get the file URL straight up."
      },
      {
        "title": "No ads in the way",
        "body": "There is no gallery, no banners and no pop-ups wrapped around your image. The link points at the file and nothing else, so nobody you share it with sees an ad page first."
      },
      {
        "title": "Full quality, no watermark",
        "body": "Your file comes back at the same resolution you uploaded, with no re-compression and no badge stamped on it. What you put in is what other people see."
      },
      {
        "title": "Clear about how long links last",
        "body": "Anonymous links stay live for at least a couple of weeks and are cleared on a monthly storage cleanup. Want one that sticks around? Make a free account and choose 'keep forever' when you upload."
      }
    ],
    "comparisonTitle": "ImgBB alternatives compared",
    "comparisonIntro": "All of these hosts will hand you a link. Where they differ is whether you need an account, how big a file you can drop, whether the link points straight at the image, and how long it stays up. Here is how a few popular options line up.",
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
          "ImgBB",
          "Yes",
          "32 MB",
          "Yes",
          "Yes",
          "Permanent or optional expiry"
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
          "Postimages",
          "Yes",
          "24 MB",
          "Yes",
          "No (resized to 1280px)",
          "Permanent"
        ]
      }
    ],
    "useCasesTitle": "Where a clean direct link helps",
    "useCasesIntro": "Once your picture has its own URL ending in the real extension, it slots into the places an ImgBB link can feel clunky:",
    "useCases": [
      {
        "title": "Discord and forums",
        "body": "Paste the link in a channel or thread and the image renders inline. No image page to open, no ads for the person reading, and no 'view on host' detour."
      },
      {
        "title": "Bug reports and tickets",
        "body": "Attach a screenshot to a GitHub issue, a support ticket or a Notion doc by dropping in the URL. It loads as the image itself, so reviewers see it without leaving the page."
      },
      {
        "title": "Email and Markdown",
        "body": "Add the link to a signature, a Markdown README or a chat message. Because it hotlinks the file directly, recipients see the picture instead of a broken preview or an ad-wrapped page."
      }
    ],
    "sections": [
      {
        "heading": "What is ImgBB?",
        "body": "ImgBB is a free image host that has been around for years. You can upload without an account, files can be up to 32MB, and you can set an optional expiry so a link deletes itself after a chosen time. Each upload gets its own viewer page on the site, with sharing codes for forums, HTML and BBCode, and that page carries ads. It is a solid, reliable host for storing and sharing images. The one rough edge for some people is that the share flow centres on those image pages, and the link many users copy points at the page rather than straight at the file."
      },
      {
        "heading": "ImgBB vs a plain direct-link host",
        "body": "The two are built for slightly different jobs. ImgBB is part gallery: every image gets a page, sharing codes and ads around it. A direct-link host like this one has no viewer page at all. You upload a file and get a URL that ends in .jpg or .png and points at the raw image. That is the right tool when you want the picture to appear inline somewhere else, like a Discord chat or a Markdown file, rather than send someone to a separate page. If you want ImgBB's bigger 32MB cap or its built-in expiry timers, ImgBB is still worth keeping for those uploads."
      },
      {
        "heading": "Is it safe to switch?",
        "body": "For quick sharing, yes, with a couple of things to keep in mind. Every link here is served over HTTPS and points only at your file, with no redirect pages or trackers attached. Anonymous uploads are public to anyone who has the link, so do not post anything private, and keep your own copy of the original. Free links clear on a regular monthly cleanup rather than living forever, so for anything you need to keep, make a free account and mark it 'keep forever', or hold onto the source file. ImgBB stays a perfectly good host alongside this one."
      }
    ],
    "faqTitle": "ImgBB alternative FAQ",
    "faqs": [
      {
        "q": "Is ImgBB free?",
        "a": "Yes, ImgBB is free to use, and you can upload without an account. It funds itself with ads shown on the image pages and around the site."
      },
      {
        "q": "Why would I switch from ImgBB?",
        "a": "Mostly for a cleaner link. ImgBB puts each upload on its own ad-supported viewer page, and the link people copy often points at that page. If you just want a direct URL that embeds inline with no ads, a plain direct-link host fits better."
      },
      {
        "q": "What is the best free ImgBB alternative?",
        "a": "It depends on what you need. For a quick direct link with no account, no ads and full quality, ImageToURL works well. Postimages is another free option, and Imgur is good if you want a community gallery. ImgBB itself is still fine for larger files and built-in expiry."
      },
      {
        "q": "Do I need an account to use ImageToURL?",
        "a": "No. You can upload and get a direct link without signing up. An account is optional and mainly useful if you want a link that stays up permanently."
      },
      {
        "q": "Does ImgBB compress my images?",
        "a": "ImgBB can re-encode and resize larger uploads, which may soften high-resolution photos and detailed graphics. ImageToURL keeps your file at the resolution you uploaded with no re-compression."
      },
      {
        "q": "What image formats and sizes can I upload?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10MB per file. ImgBB allows larger files (up to 32MB), so for very big images that limit is worth knowing."
      },
      {
        "q": "Will the link embed in Discord and forums?",
        "a": "Yes. Because the URL points right at the image file and ends in the real extension, Discord shows it inline as a picture instead of a link card. The same is true on Reddit, Slack and most forums."
      },
      {
        "q": "Does it add a watermark?",
        "a": "No. You get back the same file you uploaded with no watermark and no badge added."
      },
      {
        "q": "How long do the links last?",
        "a": "Anonymous uploads stay live until the monthly storage cleanup, so you get a couple of weeks at minimum and often longer. For a link that never expires, create a free account and pick 'keep forever' when you upload."
      },
      {
        "q": "Are ImgBB links permanent?",
        "a": "ImgBB links are permanent by default, but you can set an optional auto-delete timer when you upload. On ImageToURL, anonymous links clear on the monthly cleanup, while signed-in 'keep forever' uploads stay up."
      },
      {
        "q": "Can I move my old ImgBB images here?",
        "a": "Yes. Download the images from ImgBB, then upload them here to get fresh direct links. Keep the originals as a backup either way."
      },
      {
        "q": "Are my uploads private?",
        "a": "Anonymous uploads are public to anyone who has the link. There is no feed listing them, but the URL is not secret, so do not use it for anything sensitive."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Get a clean direct link, no account",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct link in seconds. No sign-up, no compression, no watermark, no ad page.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alternativa a ImgBB — Más rápida, limpia y gratuita | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "imgur-alternative", "label": "Alternativa a Imgur" },
      { "pageKey": "cloudinary-alternative", "label": "Alternativa a Cloudinary" }
    ],
    "metaDescription": "¿Buscas una alternativa a ImgBB? ImageToURL es más rápida, limpia y totalmente gratuita. Sin anuncios, sin compresión y con enlaces directos permanentes.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Una alternativa a ImgBB más rápida y limpia, sin anuncios, sin compresión y con enlaces directos permanentes.",
    "badge": "ALTERNATIVA A IMGBB",
    "h1Pre": "Una mejor",
    "h1Highlight": "alternativa a ImgBB.",
    "intro": "¿Cansado de los anuncios, la lentitud y la compresión de ImgBB? ImageToURL es el alojamiento de imágenes más rápido y limpio: gratuito, con enlaces directos permanentes y sin compromisos.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube al instante",
        "body": "Arrastra y suelta tus imágenes en nuestro cargador. Nuestra CDN global garantiza que tus archivos se procesen y almacenen en milisegundos."
      },
      {
        "title": "Obtén enlaces directos",
        "body": "Recibe URLs directas, limpias y permanentes para cada imagen. Sin páginas de galería ni interfaces llenas de anuncios."
      },
      {
        "title": "Comparte donde quieras",
        "body": "Inserta tus imágenes sin problemas en tus aplicaciones, sitios web o servidores de Discord con entrega de alta velocidad y calidad total."
      }
    ],
    "whyTitle": "Por qué cambiar desde ImgBB",
    "whyItems": [
      {
        "title": "Cero anuncios",
        "body": "ImgBB rodea tu contenido con banners y ventanas emergentes. Nosotros ofrecemos un entorno libre de distracciones para tus imágenes."
      },
      {
        "title": "Sin compresión",
        "body": "Nunca recodificamos ni reducimos la escala de tus archivos. Tus fotos de alta resolución se mantienen exactamente como las subiste."
      },
      {
        "title": "CDN global",
        "body": "Con más de 300 ubicaciones de borde, tus imágenes se cargan al instante para los espectadores de cualquier parte del mundo, a diferencia de la infraestructura limitada de ImgBB."
      },
      {
        "title": "Alojamiento permanente",
        "body": "Olvídate de la eliminación automática o los temporizadores de inactividad. Tus enlaces son permanentes y nunca caducarán."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué debería cambiar desde ImgBB?",
        "a": "ImgBB tiene publicidad cada vez más agresiva, velocidades de carga lentas, compresión de imágenes que degrada la calidad y capacidades de API limitadas. ImageToURL ofrece una experiencia más limpia y rápida sin anuncios ni compresión."
      },
      {
        "q": "¿Es ImageToURL más rápido que ImgBB?",
        "a": "Sí. ImageToURL utiliza una CDN global con más de 300 ubicaciones de borde tanto para la carga como para la entrega. Las imágenes se suben y cargan más rápido para los espectadores en comparación con la infraestructura de ImgBB."
      },
      {
        "q": "¿ImageToURL comprime las imágenes como ImgBB?",
        "a": "No. ImageToURL almacena y sirve tus imágenes en su calidad original. ImgBB comprime las imágenes más grandes, lo que puede reducir notablemente la calidad en fotos de alta resolución y gráficos detallados."
      },
      {
        "q": "¿ImageToURL tiene una API como ImgBB?",
        "a": "ImageToURL proporciona una interfaz de carga sencilla que funciona para casos de uso programáticos. Nuestras URLs directas están diseñadas para funcionar perfectamente con cualquier aplicación o flujo de trabajo."
      },
      {
        "q": "¿Son permanentes los enlaces de imágenes de ImgBB?",
        "a": "ImgBB ofrece temporizadores de eliminación automática opcionales y puede eliminar contenido inactivo. ImageToURL proporciona URLs verdaderamente permanentes sin fechas de caducidad ni eliminación por inactividad."
      }
    ],
    "ctaTitle": "Actualízate desde ImgBB hoy mismo",
    "ctaBody": "Cargas más rápidas, sin anuncios, sin compresión. Experimenta el alojamiento de imágenes como debe ser.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Alternative à ImgBB — Plus rapide, plus propre, gratuite | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "imgur-alternative", "label": "Alternative à Imgur" },
      { "pageKey": "cloudinary-alternative", "label": "Alternative à Cloudinary" }
    ],
    "metaDescription": "Vous cherchez une alternative à ImgBB ? ImageToURL est plus rapide, plus épuré et totalement gratuit. Sans publicité, sans compression, avec des liens directs permanents.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Une alternative plus rapide et plus propre à ImgBB, sans publicité, sans compression et avec des liens directs permanents.",
    "badge": "ALTERNATIVE À IMGBB",
    "h1Pre": "Une meilleure",
    "h1Highlight": "Alternative à ImgBB.",
    "intro": "Fatigué des publicités, des téléchargements lents et de la compression d'ImgBB ? ImageToURL est l'hébergeur d'images plus rapide et plus propre — gratuit, avec des liens directs permanents et sans aucun compromis.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargement instantané",
        "body": "Glissez-déposez vos images dans notre outil de téléchargement. Notre CDN mondial garantit que vos fichiers sont traités et stockés en quelques millisecondes."
      },
      {
        "title": "Obtenez des liens directs",
        "body": "Recevez des URL directes, propres et permanentes pour chaque image. Pas de pages de galerie ou d'interfaces surchargées de publicités à parcourir."
      },
      {
        "title": "Partagez partout",
        "body": "Intégrez vos images de manière transparente dans vos applications, sites web ou serveurs Discord avec une qualité optimale et une diffusion ultra-rapide."
      }
    ],
    "whyTitle": "Pourquoi quitter ImgBB",
    "whyItems": [
      {
        "title": "Zéro publicité",
        "body": "ImgBB entoure votre contenu de bannières et de pop-ups. Nous offrons un environnement sans distraction pour vos images."
      },
      {
        "title": "Aucune compression",
        "body": "Nous ne réencodons ni ne réduisons jamais la taille de vos fichiers. Vos photos haute résolution restent exactement telles que vous les avez téléchargées."
      },
      {
        "title": "CDN mondial",
        "body": "Avec plus de 300 points de présence, vos images se chargent instantanément pour les utilisateurs du monde entier, contrairement à l'infrastructure limitée d'ImgBB."
      },
      {
        "title": "Hébergement permanent",
        "body": "Oubliez la suppression automatique ou les délais d'inactivité. Vos liens sont permanents et n'expireront jamais."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi devrais-je quitter ImgBB ?",
        "a": "ImgBB propose une publicité de plus en plus agressive, des vitesses de téléchargement lentes, une compression qui dégrade la qualité et des capacités API limitées. ImageToURL offre une expérience plus propre et plus rapide sans publicité ni compression."
      },
      {
        "q": "ImageToURL est-il plus rapide qu'ImgBB ?",
        "a": "Oui. ImageToURL utilise un CDN mondial avec plus de 300 points de présence pour le téléchargement et la diffusion. Les images sont téléchargées et chargées plus rapidement pour les spectateurs par rapport à l'infrastructure d'ImgBB."
      },
      {
        "q": "ImageToURL compresse-t-il les images comme ImgBB ?",
        "a": "Non. ImageToURL stocke et diffuse vos images dans leur qualité originale. ImgBB compresse les images volumineuses, ce qui peut réduire sensiblement la qualité des photos haute résolution et des graphiques détaillés."
      },
      {
        "q": "ImageToURL possède-t-il une API comme ImgBB ?",
        "a": "ImageToURL fournit une interface de téléchargement simple qui fonctionne pour les cas d'utilisation programmatiques. Nos URL directes sont conçues pour fonctionner de manière transparente avec n'importe quelle application ou flux de travail."
      },
      {
        "q": "Les liens d'images ImgBB sont-ils permanents ?",
        "a": "ImgBB propose des minuteurs de suppression automatique optionnels et peut supprimer le contenu inactif. ImageToURL fournit des URL réellement permanentes sans date d'expiration et sans suppression basée sur l'inactivité."
      }
    ],
    "ctaTitle": "Passez à ImageToURL dès aujourd'hui",
    "ctaBody": "Téléchargements plus rapides, sans publicité, sans compression. Découvrez l'hébergement d'images tel qu'il devrait être.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "ImgBB Alternative — Schneller, sauberer, kostenlos | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "imgur-alternative", "label": "Imgur-Alternative" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary-Alternative" }
    ],
    "metaDescription": "Suchen Sie eine ImgBB Alternative? ImageToURL ist schneller, sauberer und komplett kostenlos. Keine Werbung, keine Komprimierung, dauerhafte direkte Bild-Links.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Eine schnellere, sauberere Alternative zu ImgBB ohne Werbung, ohne Komprimierung und mit dauerhaften direkten Bild-Links.",
    "badge": "IMGBB ALTERNATIVE",
    "h1Pre": "Eine bessere ImgBB",
    "h1Highlight": "Alternative.",
    "intro": "Haben Sie genug von ImgBBs Werbung, langsamen Uploads und Komprimierung? ImageToURL ist der schnellere, sauberere Bild-Hoster — kostenlos, mit dauerhaften direkten Links und ohne Kompromisse.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Sofort hochladen",
        "body": "Ziehen Sie Ihre Bilder per Drag-and-Drop in unseren Uploader. Unser globales CDN sorgt dafür, dass Ihre Dateien in Millisekunden verarbeitet und gespeichert werden."
      },
      {
        "title": "Direkte Links erhalten",
        "body": "Erhalten Sie saubere, dauerhafte direkte URLs für jedes Bild. Keine Galerie-Seiten oder werbelastige Umleitungen."
      },
      {
        "title": "Überall teilen",
        "body": "Binden Sie Ihre Bilder nahtlos in Ihre Apps, Websites oder Discord-Server ein, mit voller Qualität und Hochgeschwindigkeits-Bereitstellung."
      }
    ],
    "whyTitle": "Warum von ImgBB wechseln?",
    "whyItems": [
      {
        "title": "Keine Werbung",
        "body": "ImgBB umgibt Ihre Inhalte mit Bannern und Pop-ups. Wir bieten eine ablenkungsfreie Umgebung für Ihre Bilder."
      },
      {
        "title": "Keine Komprimierung",
        "body": "Wir kodieren Ihre Dateien niemals neu und verkleinern sie nicht. Ihre hochauflösenden Fotos bleiben exakt so, wie Sie sie hochgeladen haben."
      },
      {
        "title": "Globales CDN",
        "body": "Mit über 300 Edge-Standorten laden Ihre Bilder für Betrachter weltweit sofort, im Gegensatz zur begrenzten Infrastruktur von ImgBB."
      },
      {
        "title": "Dauerhaftes Hosting",
        "body": "Vergessen Sie automatische Löschungen oder Inaktivitäts-Timer. Ihre Links sind dauerhaft und laufen niemals ab."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum sollte ich von ImgBB wechseln?",
        "a": "ImgBB setzt zunehmend auf aggressive Werbung, langsame Upload-Geschwindigkeiten, Bildkomprimierung, die die Qualität mindert, und begrenzte API-Funktionen. ImageToURL bietet ein saubereres, schnelleres Erlebnis ohne Werbung und ohne Komprimierung."
      },
      {
        "q": "Ist ImageToURL schneller als ImgBB?",
        "a": "Ja. ImageToURL nutzt ein globales CDN mit über 300 Edge-Standorten für Uploads und Bereitstellung. Bilder werden schneller hochgeladen und laden für Betrachter schneller als bei der Infrastruktur von ImgBB."
      },
      {
        "q": "Komprimiert ImageToURL Bilder wie ImgBB?",
        "a": "Nein. ImageToURL speichert und liefert Ihre Bilder in ihrer Originalqualität. ImgBB komprimiert größere Bilder, was die Qualität bei hochauflösenden Fotos und detaillierten Grafiken spürbar mindern kann."
      },
      {
        "q": "Hat ImageToURL eine API wie ImgBB?",
        "a": "ImageToURL bietet eine unkomplizierte Upload-Schnittstelle, die für programmatische Anwendungsfälle funktioniert. Unsere direkten URLs sind so konzipiert, dass sie nahtlos mit jeder Anwendung oder jedem Workflow funktionieren."
      },
      {
        "q": "Sind ImgBB-Bildlinks dauerhaft?",
        "a": "ImgBB bietet optionale Timer zur automatischen Löschung an und kann inaktive Inhalte entfernen. ImageToURL bietet wirklich dauerhafte URLs ohne Ablaufdatum und ohne Löschung aufgrund von Inaktivität."
      }
    ],
    "ctaTitle": "Wechseln Sie noch heute von ImgBB",
    "ctaBody": "Schnellere Uploads, keine Werbung, keine Komprimierung. Erleben Sie Bild-Hosting, wie es sein sollte.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "ImgBBの代替サービス — より高速、クリーン、無料 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "imgur-alternative", "label": "Imgur代替" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary代替" }
    ],
    "metaDescription": "ImgBBの代替をお探しですか？ImageToURLは、より高速でクリーン、そして完全無料です。広告なし、圧縮なし、永久的な直接画像リンクを提供します。",
    "schemaName": "ImageToURL",
    "schemaDescription": "広告や圧縮がなく、永久的な直接リンクを提供する、ImgBBのより高速でクリーンな代替サービス。",
    "badge": "IMGBBの代替",
    "h1Pre": "より優れたImgBB",
    "h1Highlight": "代替サービス",
    "intro": "ImgBBの広告、遅いアップロード、画質圧縮にうんざりしていませんか？ImageToURLは、より高速でクリーンな画像ホスティングサービスです。完全無料で、妥協のない永久的な直接リンクを提供します。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "瞬時にアップロード",
        "body": "画像をアップローダーにドラッグ＆ドロップするだけ。グローバルCDNにより、ファイルはミリ秒単位で処理・保存されます。"
      },
      {
        "title": "直接リンクを取得",
        "body": "すべての画像に対して、クリーンで永久的な直接URLを取得できます。ギャラリーページや広告だらけのラッパー画面を経由する必要はありません。"
      },
      {
        "title": "どこでも共有",
        "body": "アプリ、ウェブサイト、Discordサーバーなどに、高品質かつ高速な配信で画像をシームレスに埋め込めます。"
      }
    ],
    "whyTitle": "ImgBBから乗り換える理由",
    "whyItems": [
      {
        "title": "広告ゼロ",
        "body": "ImgBBはコンテンツの周囲にバナーやポップアップを表示しますが、私たちは画像のために気が散ることのない環境を提供します。"
      },
      {
        "title": "圧縮なし",
        "body": "ファイルを再エンコードしたり縮小したりすることはありません。高解像度の写真は、アップロードしたそのままの品質で保持されます。"
      },
      {
        "title": "グローバルCDN",
        "body": "300以上のエッジロケーションにより、ImgBBの限られたインフラとは異なり、世界中のどこからでも画像が瞬時に読み込まれます。"
      },
      {
        "title": "永久ホスティング",
        "body": "自動削除や非アクティブタイマーを気にする必要はありません。リンクは永久的であり、期限切れになることはありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜImgBBから乗り換えるべきですか？",
        "a": "ImgBBは広告がますます強引になり、アップロード速度が遅く、画質を劣化させる圧縮を行い、API機能も制限されています。ImageToURLは、広告や圧縮のない、よりクリーンで高速な体験を提供します。"
      },
      {
        "q": "ImageToURLはImgBBより速いですか？",
        "a": "はい。ImageToURLは、アップロードと配信の両方に300以上のエッジロケーションを持つグローバルCDNを使用しています。ImgBBのインフラと比較して、画像のアップロードも閲覧者への読み込みも高速です。"
      },
      {
        "q": "ImageToURLはImgBBのように画像を圧縮しますか？",
        "a": "いいえ。ImageToURLは、元の品質のまま画像を保存・配信します。ImgBBは大きな画像を圧縮するため、高解像度の写真や詳細なグラフィックでは品質の低下が目立つことがあります。"
      },
      {
        "q": "ImageToURLにはImgBBのようなAPIはありますか？",
        "a": "ImageToURLは、プログラムによる利用にも対応したシンプルなアップロードインターフェースを提供しています。直接URLは、あらゆるアプリケーションやワークフローでシームレスに機能するように設計されています。"
      },
      {
        "q": "ImgBBの画像リンクは永久的ですか？",
        "a": "ImgBBはオプションで自動削除タイマーを提供しており、非アクティブなコンテンツを削除する場合があります。ImageToURLは、有効期限や非アクティブによる削除がない、真に永久的なURLを提供します。"
      }
    ],
    "ctaTitle": "今すぐImgBBからアップグレード",
    "ctaBody": "より高速なアップロード、広告なし、圧縮なし。理想的な画像ホスティングを体験してください。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "ImgBB 最佳替代品 — 更快、更简洁、免费 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "imgur-alternative", "label": "Imgur 替代品" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary 替代品" }
    ],
    "metaDescription": "正在寻找 ImgBB 的替代品？ImageToURL 更快、更简洁且完全免费。无广告、无压缩、提供永久直接图片链接。",
    "schemaName": "ImageToURL",
    "schemaDescription": "ImgBB 的更快、更简洁的替代方案，无广告、无压缩，并提供永久直接图片链接。",
    "badge": "IMGBB 最佳替代品",
    "h1Pre": "更好的 ImgBB",
    "h1Highlight": "替代方案。",
    "intro": "厌倦了 ImgBB 的广告、缓慢的上传速度和图片压缩？ImageToURL 是更快速、更简洁的图片托管服务——完全免费，提供永久直接链接，且绝不妥协。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "即时上传",
        "body": "将图片拖放到我们的上传器中。我们的全球 CDN 可确保您的文件在毫秒内完成处理和存储。"
      },
      {
        "title": "获取直接链接",
        "body": "为每张图片获取简洁、永久的直接 URL。无需浏览画廊页面或充斥广告的包装页面。"
      },
      {
        "title": "随处分享",
        "body": "将您的图片无缝嵌入到您的应用程序、网站或 Discord 服务器中，享受全质量、高速的交付体验。"
      }
    ],
    "whyTitle": "为什么要从 ImgBB 切换过来",
    "whyItems": [
      {
        "title": "零广告",
        "body": "ImgBB 的内容周围充斥着横幅和弹出窗口。我们为您提供一个无干扰的图片展示环境。"
      },
      {
        "title": "无压缩",
        "body": "我们从不重新编码或缩小您的文件。您的高分辨率照片将保持与上传时完全一致。"
      },
      {
        "title": "全球 CDN",
        "body": "凭借 300 多个边缘节点，无论观众身在何处，您的图片都能瞬间加载，这与 ImgBB 有限的基础设施截然不同。"
      },
      {
        "title": "永久托管",
        "body": "无需担心自动删除或不活跃计时器。您的链接是永久性的，永不过期。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么要从 ImgBB 切换到 ImageToURL？",
        "a": "ImgBB 的广告日益激进，上传速度缓慢，图片压缩会降低质量，且 API 功能有限。ImageToURL 提供更简洁、更快速的体验，且无广告、无压缩。"
      },
      {
        "q": "ImageToURL 比 ImgBB 更快吗？",
        "a": "是的。ImageToURL 使用拥有 300 多个边缘节点的全球 CDN 进行上传和分发。与 ImgBB 的基础设施相比，图片上传更快，观众加载速度也更快。"
      },
      {
        "q": "ImageToURL 会像 ImgBB 那样压缩图片吗？",
        "a": "不会。ImageToURL 以原始质量存储和提供图片。ImgBB 会压缩大图，这会明显降低高分辨率照片和精细图形的质量。"
      },
      {
        "q": "ImageToURL 有像 ImgBB 那样的 API 吗？",
        "a": "ImageToURL 提供了一个简单直接的上传接口，适用于程序化使用场景。我们的直接 URL 设计旨在与任何应用程序或工作流程无缝协作。"
      },
      {
        "q": "ImgBB 的图片链接是永久的吗？",
        "a": "ImgBB 提供可选的自动删除计时器，并可能删除不活跃的内容。ImageToURL 提供真正的永久 URL，没有过期日期，也不会因为不活跃而删除。"
      }
    ],
    "ctaTitle": "立即从 ImgBB 升级",
    "ctaBody": "更快的上传、无广告、无压缩。体验真正优质的图片托管服务。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
