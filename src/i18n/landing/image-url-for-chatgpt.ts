import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image URL for ChatGPT - Free Public Link AI Can Read | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Image embed code generator" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Image URL for WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "Image URL for HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Image hosting for Vercel" }
    ],
    "metaDescription": "Get a public https image URL ChatGPT can actually fetch. Upload a JPG, PNG or WebP, copy the direct link, paste it into a prompt or an API image_url. Free, no signup.",
    "schemaName": "Image URL for ChatGPT",
    "schemaDescription": "Turn any image into a public https link that ChatGPT, Claude and Gemini can fetch and read. Free, instant, no account, no compression.",
    "badge": "CHATGPT USERS",
    "h1Pre": "Image URL for ChatGPT:",
    "h1Highlight": "a public link AI can read",
    "intro": "ChatGPT and other AI models can only look at an image if it lives at a public https address their servers can reach. A file on your desktop or a private share link won't do it. Drop your picture in the box above, copy the direct link, and paste it into your prompt or an image_url field. It works on JPG, PNG, WebP, GIF and SVG up to 10 MB, with no account and no sign-up.",
    "specsTitle": "Image URL for ChatGPT at a glance",
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
        "value": "Public https CDN link"
      }
    ],
    "howTitle": "How to get an image URL for ChatGPT",
    "steps": [
      {
        "title": "Upload your image",
        "body": "Drag your picture onto the box or click to pick one. JPG, PNG, WebP, GIF and SVG all work, up to 10 MB each. Nothing is compressed or resized."
      },
      {
        "title": "Copy the direct link",
        "body": "Your image lands on a fast CDN and you get an https link ending in the real file extension. That extension matters: it tells the model it's pointing straight at an image, not a web page."
      },
      {
        "title": "Paste it into the model",
        "body": "Drop the URL into a ChatGPT prompt, a custom GPT, or an API image_url input. The model fetches the file from the link and reads it. The same link works in Claude, Gemini and most automation tools."
      }
    ],
    "whyTitle": "Why ChatGPT needs a public link, not a file",
    "whyItems": [
      {
        "title": "The model lives on a remote server",
        "body": "ChatGPT runs in a data center, not on your machine. It can't open C:\\Users\\photo.jpg or /Users/you/Desktop/pic.png because it has no way to reach your hard drive. A public URL is the bridge."
      },
      {
        "title": "It has to fetch the file itself",
        "body": "When you pass an image_url, the model's servers make a request to that address and download the bytes. If the link needs a login, sits behind a firewall, or returns a preview page instead of the image, the fetch fails."
      },
      {
        "title": "Direct links beat share links",
        "body": "Google Drive and Dropbox 'share' links usually open an HTML viewer, not the raw file, so the model gets a web page it can't parse. A direct CDN link that ends in .jpg or .png points at the actual image."
      },
      {
        "title": "Full quality, no squeezing",
        "body": "The link serves the same file you uploaded, at full resolution. Nothing is re-compressed or scaled down, so text in screenshots and fine detail in diagrams stay readable for the model."
      }
    ],
    "comparisonTitle": "What kind of link can ChatGPT actually read?",
    "comparisonIntro": "Not every link to an image is one a model can use. The model needs a public address that returns the raw image file with no login wall in front of it. Here's how the common ways of sharing an image compare.",
    "comparisonColumns": [
      "Method",
      "AI can fetch it",
      "Needs login",
      "Direct file",
      "Best for"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Direct CDN link (ImageToURL)",
          "Yes",
          "No",
          "Yes",
          "Pasting into ChatGPT, Claude or an API image_url"
        ]
      },
      {
        "cells": [
          "Local file path",
          "No",
          "n/a",
          "On your disk only",
          "Nothing - the model can't reach it"
        ]
      },
      {
        "cells": [
          "Google Drive share link",
          "Usually no",
          "Often",
          "No (viewer page)",
          "Storing files for yourself, not feeding AI"
        ]
      },
      {
        "cells": [
          "Dropbox share link",
          "Usually no",
          "Sometimes",
          "No (preview page)",
          "Sending files to people"
        ]
      },
      {
        "cells": [
          "Imgur gallery page",
          "Partial",
          "No",
          "No (gallery, not the file)",
          "Browsing, not direct model input"
        ]
      }
    ],
    "useCasesTitle": "Where an AI-ready image link helps",
    "useCasesIntro": "Once your picture has a public direct link, you can hand it to any model or tool that accepts an image address:",
    "useCases": [
      {
        "title": "Prompts and custom GPTs",
        "body": "Paste the link into a ChatGPT message and ask it to describe the scene, read the text, or critique a design. Custom GPTs and assistants can take the same URL in their instructions."
      },
      {
        "title": "API image_url inputs",
        "body": "Most vision APIs accept an image_url that has to be publicly reachable. Drop the CDN link into that field and your script can analyze images without uploading raw bytes every call."
      },
      {
        "title": "Automations and agents",
        "body": "Zapier flows, no-code agents and webhooks often pass images around as URLs. A stable https link is easier to move through a pipeline than a file attachment."
      }
    ],
    "sections": [
      {
        "heading": "Why local files and screenshots don't work",
        "body": "When you take a screenshot or save a photo, it sits on your own device at a path like /Users/you/Desktop/shot.png. That path means nothing to ChatGPT, because the model isn't on your computer - it runs on remote servers that have no view of your filesystem. The fix is to give the image a public web address. Upload the file here, and it gets an https link the model can request and download on its own. You can keep the original on your machine; the link is just a copy the AI is allowed to reach."
      },
      {
        "heading": "Why Drive and Dropbox links usually fail",
        "body": "A Google Drive or Dropbox 'share' link almost never points at the raw image. It opens a viewer page wrapped in HTML, and often asks whoever clicks it to sign in or request access first. When a model follows that link, it gets a login screen or a page of markup, not the picture, so the analysis fails or returns nonsense. A direct link is different: it ends in .jpg, .png or .webp and returns only the image bytes. That's what a vision model expects, and it's exactly what you copy here."
      },
      {
        "heading": "Keeping the link live long enough",
        "body": "A model can only read your image while the link is up, so the URL needs to stay reachable until the request finishes. Anonymous uploads here stay live for at least a couple of weeks and are cleared on a monthly cleanup, which is plenty for a one-off prompt. If you're wiring an image into an API call or an automation that runs for months, sign in for free and choose 'keep forever' so the link doesn't disappear mid-flow. Anonymous links are public to anyone who has them, so skip private images and keep your own backup."
      }
    ],
    "faqTitle": "Image URL for ChatGPT FAQ",
    "faqs": [
      {
        "q": "Why does ChatGPT need a public image URL?",
        "a": "ChatGPT's vision model runs on remote servers and fetches images over the web. It needs a publicly reachable https address it can download, so a link behind a login or a file on your own computer won't work."
      },
      {
        "q": "How do I give ChatGPT an image URL?",
        "a": "Upload your image in the box above, copy the direct link, then paste it into your ChatGPT prompt. The model fetches the file from that link and reads it. No account needed."
      },
      {
        "q": "Can I paste a local file path into ChatGPT?",
        "a": "No. A path like C:\\Users\\photo.jpg only exists on your device, and the model can't reach your device. Upload the image to get a public link, then paste that instead."
      },
      {
        "q": "Why doesn't my Google Drive link work with ChatGPT?",
        "a": "Drive 'share' links open an HTML viewer page and often require sign-in, so the model gets a web page or a login screen rather than the image file. Use a direct link that ends in the file extension."
      },
      {
        "q": "Does the image URL have to be HTTPS?",
        "a": "Yes, use a secure https link. Every link from this tool is served over https by default and points straight at your image file."
      },
      {
        "q": "Will this link work with Claude, Gemini and API tools?",
        "a": "Yes. Any model or tool that accepts a public image address can use the same link, including Claude, Gemini, Perplexity and vision APIs that take an image_url field."
      },
      {
        "q": "What image formats and sizes can I use?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10 MB per file. The link ends in the real extension, which is what tells a model it's a direct image rather than a page."
      },
      {
        "q": "Is my image compressed before the model sees it?",
        "a": "No. You get back the exact file you uploaded at full resolution, with no re-compression. That keeps text in screenshots and detail in charts sharp enough for the model to read."
      },
      {
        "q": "How long does the link stay live?",
        "a": "Anonymous links last at least a couple of weeks and are cleared on a monthly cleanup. For a link wired into an API or automation, sign in for free and pick 'keep forever' so it doesn't expire."
      },
      {
        "q": "Is it safe to put my image behind a public link for AI?",
        "a": "The link is https and points only at your image, but anonymous uploads are public to anyone who has the URL. Don't upload private or sensitive images, and keep your own copy as a backup."
      },
      {
        "q": "Can I use the URL in an API image_url field?",
        "a": "Yes. Most image APIs expect a publicly accessible image_url. Paste the CDN link into that field and the service fetches the file the same way ChatGPT does."
      },
      {
        "q": "Why did my image fail with 'could not access the image'?",
        "a": "That usually means the link wasn't public, needed a login, pointed at a page instead of the file, or had already expired. A fresh direct link from this tool, kept live, fixes all four."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Get an image URL ChatGPT can read",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a public https link in seconds. Paste it into a prompt or an image_url field. No sign-up, no compression.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Obtén URLs de imágenes para ChatGPT Vision — Gratis e instantáneo | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Generador de código incrustado de imagen" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "URL de imagen para WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "URL de imagen para HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Hosting de imágenes para Vercel" }
    ],
    "metaDescription": "ChatGPT Vision necesita URLs de imágenes públicas. Sube tu imagen, obtén una URL al instante y pégala en ChatGPT. Gratis, sin registro.",
    "schemaName": "URLs de imágenes para ChatGPT",
    "schemaDescription": "Sube imágenes y obtén URLs públicas para ChatGPT Vision. Gratis, instantáneo y sin necesidad de registro.",
    "badge": "USUARIOS DE CHATGPT",
    "h1Pre": "URLs de imágenes para ChatGPT",
    "h1Highlight": "instantáneas y gratis.",
    "intro": "ChatGPT Vision necesita una URL de imagen pública para analizar tus archivos. Súbelos aquí, copia el enlace y pégalo en ChatGPT; listo en segundos.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta o haz clic para seleccionar tu imagen. Admitimos formatos JPG, PNG, WebP, GIF y SVG de hasta 25 MB."
      },
      {
        "title": "Copia la URL",
        "body": "Tu URL de imagen pública se genera al instante. Haz clic en el botón de copiar para guardar el enlace HTTPS en tu portapapeles."
      },
      {
        "title": "Pega en ChatGPT",
        "body": "Pega la URL en cualquier conversación de ChatGPT. El modelo de visión buscará y analizará automáticamente tu imagen."
      }
    ],
    "whyTitle": "Por qué ChatGPT necesita URLs de imágenes",
    "whyItems": [
      {
        "title": "Vision requiere URLs públicas",
        "body": "El modelo de visión de ChatGPT obtiene imágenes de la web. Necesita una URL accesible públicamente para descargar y procesar tu imagen para el análisis."
      },
      {
        "title": "Los archivos locales no funcionan",
        "body": "No puedes pegar una ruta de archivo de tu computadora en ChatGPT. La IA se ejecuta en servidores remotos y no tiene acceso a tu sistema de archivos local."
      },
      {
        "title": "Análisis instantáneo",
        "body": "ChatGPT procesa tu imagen en segundos una vez que tiene la URL. Haz preguntas sobre la imagen, obtén descripciones o extrae texto."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "为什么ChatGPT需要公共图片URL？",
        "a": "La función de visión de ChatGPT solo puede analizar imágenes alojadas en la internet pública con una URL directa. No puede acceder a archivos almacenados localmente en tu computadora."
      },
      {
        "q": "¿Puedo pegar una ruta de archivo local en ChatGPT?",
        "a": "No. ChatGPT no puede leer rutas de archivos locales como C:/Users/foto.jpg. Primero debes subir la imagen a un servicio de alojamiento."
      },
      {
        "q": "¿Cómo uso una URL de imagen en ChatGPT?",
        "a": "Sube tu imagen a ImageToURL, copia el enlace generado y pégalo directamente en tu conversación de ChatGPT."
      },
      {
        "q": "¿La URL de la imagen debe ser HTTPS?",
        "a": "Sí. ChatGPT requiere URLs HTTPS seguras. Todos los enlaces de ImageToURL se sirven a través de HTTPS de forma predeterminada."
      },
      {
        "q": "¿Funcionará mi URL de imagen con otros chatbots de IA?",
        "a": "Sí. Nuestras URLs de imágenes funcionan con cualquier herramienta de IA que acepte URLs de imágenes públicas, incluyendo Claude, Gemini y Perplexity."
      }
    ],
    "ctaTitle": "Obtén tu URL de imagen para ChatGPT",
    "ctaBody": "Sube una imagen, copia el enlace y pégalo en ChatGPT. Toma menos de 10 segundos.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Obtenez des URL d'images pour ChatGPT Vision — Gratuit et instantané | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Générateur de code intégré d'image" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "URL d'image pour WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "URL d'image pour HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Hébergement d'images pour Vercel" }
    ],
    "metaDescription": "ChatGPT Vision nécessite des URL d'images publiques. Téléchargez votre image, obtenez une URL instantanée et collez-la dans ChatGPT. Gratuit, sans inscription.",
    "schemaName": "URL d'images pour ChatGPT",
    "schemaDescription": "Téléchargez des images et obtenez des URL publiques pour ChatGPT Vision. Gratuit, instantané, sans inscription.",
    "badge": "UTILISATEURS CHATGPT",
    "h1Pre": "URL d'images pour ChatGPT",
    "h1Highlight": "instantané et gratuit.",
    "intro": "ChatGPT Vision a besoin d'une URL d'image publique pour analyser vos images. Téléchargez ici, copiez le lien, collez-le dans ChatGPT — fait en quelques secondes.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez ou cliquez pour sélectionner votre image. Nous prenons en charge les formats JPG, PNG, WebP, GIF et SVG jusqu'à 25 Mo."
      },
      {
        "title": "Copiez l'URL",
        "body": "Votre URL d'image publique est générée instantanément. Cliquez sur le bouton de copie pour récupérer le lien HTTPS dans votre presse-papiers."
      },
      {
        "title": "Collez dans ChatGPT",
        "body": "Collez l'URL dans n'importe quelle conversation ChatGPT. Le modèle de vision récupérera et analysera automatiquement votre image."
      }
    ],
    "whyTitle": "Pourquoi ChatGPT a besoin d'URL d'images",
    "whyItems": [
      {
        "title": "La vision nécessite des URL publiques",
        "body": "Le modèle de vision de ChatGPT récupère les images depuis le Web. Il a besoin d'une URL accessible publiquement pour télécharger et traiter votre image pour l'analyse."
      },
      {
        "title": "Les fichiers locaux ne fonctionnent pas",
        "body": "Vous ne pouvez pas coller un chemin de fichier depuis votre ordinateur dans ChatGPT. L'IA fonctionne sur des serveurs distants et n'a pas accès à votre système de fichiers local."
      },
      {
        "title": "Analyse instantanée",
        "body": "ChatGPT traite votre image en quelques secondes une fois qu'il a l'URL. Posez des questions sur l'image, obtenez des descriptions ou extrayez du texte."
      }
    ],
    "faqTitle": "Questions fréquemment posées",
    "faqs": [
      {
        "q": "Pourquoi ChatGPT a-t-il besoin d'une URL d'image publique ?",
        "a": "La fonctionnalité de vision de ChatGPT ne peut analyser que les images hébergées sur l'Internet public avec une URL directe. Elle ne peut pas accéder aux fichiers stockés localement sur votre ordinateur."
      },
      {
        "q": "Puis-je coller un chemin de fichier local dans ChatGPT ?",
        "a": "Non. ChatGPT ne peut pas lire les chemins de fichiers locaux comme C:/Users/photo.jpg. Vous devez d'abord télécharger l'image sur un service d'hébergement."
      },
      {
        "q": "Comment utiliser une URL d'image dans ChatGPT ?",
        "a": "Téléchargez votre image sur ImageToURL, copiez le lien généré, puis collez-le directement dans votre conversation ChatGPT."
      },
      {
        "q": "L'URL de l'image doit-elle être en HTTPS ?",
        "a": "Oui. ChatGPT nécessite des URL HTTPS sécurisées. Tous les liens ImageToURL sont servis via HTTPS par défaut."
      },
      {
        "q": "Mon URL d'image fonctionnera-t-elle aussi avec d'autres chatbots IA ?",
        "a": "Oui. Nos URL d'images fonctionnent avec tout outil d'IA acceptant les URL d'images publiques, y compris Claude, Gemini et Perplexity."
      }
    ],
    "ctaTitle": "Obtenez votre URL d'image pour ChatGPT",
    "ctaBody": "Téléchargez une image, copiez le lien, collez-le dans ChatGPT. Cela prend moins de 10 secondes.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bild-URLs für ChatGPT Vision erhalten — Kostenlos & Sofort | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Bild-Embed-Code-Generator" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Bild-URL für WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "Bild-URL für HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Bild-Hosting für Vercel" }
    ],
    "metaDescription": "ChatGPT Vision benötigt öffentliche Bild-URLs. Laden Sie Ihr Bild hoch, erhalten Sie sofort eine URL und fügen Sie diese in ChatGPT ein. Kostenlos, keine Registrierung erforderlich.",
    "schemaName": "Bild-URLs für ChatGPT",
    "schemaDescription": "Laden Sie Bilder hoch und erhalten Sie öffentliche URLs für ChatGPT Vision. Kostenlos, sofort, keine Registrierung erforderlich.",
    "badge": "CHATGPT-NUTZER",
    "h1Pre": "Bild-URLs für ChatGPT",
    "h1Highlight": "sofort & kostenlos.",
    "intro": "ChatGPT Vision benötigt eine öffentliche Bild-URL, um Ihre Bilder zu analysieren. Hier hochladen, Link kopieren, in ChatGPT einfügen — in Sekunden erledigt.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Ihr Bild per Drag & Drop hinein oder klicken Sie, um es auszuwählen. Wir unterstützen JPG, PNG, WebP, GIF und SVG-Formate bis zu 25 MB."
      },
      {
        "title": "URL kopieren",
        "body": "Ihre öffentliche Bild-URL wird sofort generiert. Klicken Sie auf den Kopieren-Button, um den HTTPS-Link in Ihre Zwischenablage zu übernehmen."
      },
      {
        "title": "In ChatGPT einfügen",
        "body": "Fügen Sie die URL in eine beliebige ChatGPT-Konversation ein. Das Vision-Modell ruft Ihr Bild automatisch ab und analysiert es."
      }
    ],
    "whyTitle": "Warum ChatGPT Bild-URLs benötigt",
    "whyItems": [
      {
        "title": "Vision erfordert öffentliche URLs",
        "body": "Das Vision-Modell von ChatGPT ruft Bilder aus dem Internet ab. Es benötigt eine öffentlich zugängliche URL, um Ihr Bild herunterzuladen und für die Analyse zu verarbeiten."
      },
      {
        "title": "Lokale Dateien funktionieren nicht",
        "body": "Sie können keinen Dateipfad von Ihrem Computer in ChatGPT einfügen. Die KI läuft auf entfernten Servern und hat keinen Zugriff auf Ihr lokales Dateisystem."
      },
      {
        "title": "Sofortige Analyse",
        "body": "Sobald ChatGPT die URL hat, verarbeitet es Ihr Bild in Sekunden. Stellen Sie Fragen zum Bild, erhalten Sie Beschreibungen oder extrahieren Sie Text."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum benötigt ChatGPT eine öffentliche Bild-URL?",
        "a": "Die Vision-Funktion von ChatGPT kann nur Bilder analysieren, die mit einer direkten URL im öffentlichen Internet gehostet sind. Sie kann nicht auf lokal auf Ihrem Computer gespeicherte Dateien zugreifen."
      },
      {
        "q": "Kann ich einen lokalen Dateipfad in ChatGPT einfügen?",
        "a": "Nein. ChatGPT kann keine lokalen Dateipfade wie C:/Users/photo.jpg lesen. Sie müssen das Bild zuerst auf einen Hosting-Dienst hochladen."
      },
      {
        "q": "Wie verwende ich eine Bild-URL in ChatGPT?",
        "a": "Laden Sie Ihr Bild bei ImageToURL hoch, kopieren Sie den generierten Link und fügen Sie ihn dann direkt in Ihre ChatGPT-Konversation ein."
      },
      {
        "q": "Muss die Bild-URL HTTPS sein?",
        "a": "Ja. ChatGPT erfordert sichere HTTPS-URLs. Alle ImageToURL-Links werden standardmäßig über HTTPS bereitgestellt."
      },
      {
        "q": "Funktioniert meine Bild-URL auch mit anderen KI-Chatbots?",
        "a": "Ja. Unsere Bild-URLs funktionieren mit jedem KI-Tool, das öffentliche Bild-URLs akzeptiert, einschließlich Claude, Gemini und Perplexity."
      }
    ],
    "ctaTitle": "Holen Sie sich Ihre Bild-URL für ChatGPT",
    "ctaBody": "Bild hochladen, Link kopieren, in ChatGPT einfügen. Dauert weniger als 10 Sekunden.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "ChatGPT Vision用画像URLを即時作成 — 無料 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "画像埋め込みコード生成" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "WhatsApp用画像URL" },
      { "pageKey": "image-to-url-for-html", "label": "HTML用画像URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel用画像ホスティング" }
    ],
    "metaDescription": "ChatGPT Visionには公開画像URLが必要です。画像をアップロードして即座にURLを取得し、ChatGPTに貼り付けるだけ。登録不要で完全無料。",
    "schemaName": "ChatGPT用画像URL",
    "schemaDescription": "画像をアップロードしてChatGPT Vision用の公開URLを取得。登録不要、即時発行、完全無料。",
    "badge": "CHATGPTユーザー向け",
    "h1Pre": "ChatGPT用画像URLを",
    "h1Highlight": "即時・無料で作成。",
    "intro": "ChatGPT Visionで画像を解析するには、公開されている画像URLが必要です。ここでアップロードしてリンクをコピーし、ChatGPTに貼り付けるだけで、数秒で完了します。",
    "howTitle": "使い方は簡単",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "画像をドラッグ＆ドロップするか、クリックして選択してください。JPG、PNG、WebP、GIF、SVG形式（最大25MB）に対応しています。"
      },
      {
        "title": "URLをコピー",
        "body": "画像URLが即座に生成されます。コピーボタンをクリックして、HTTPSリンクをクリップボードに保存してください。"
      },
      {
        "title": "ChatGPTに貼り付け",
        "body": "ChatGPTの会話欄にURLを貼り付けてください。Visionモデルが自動的に画像を読み込み、解析を開始します。"
      }
    ],
    "whyTitle": "なぜChatGPTに画像URLが必要なのか",
    "whyItems": [
      {
        "title": "Vision機能は公開URLが必要",
        "body": "ChatGPTのVisionモデルはウェブ上の画像を取得します。解析を行うには、インターネット上でアクセス可能なURLが必要です。"
      },
      {
        "title": "ローカルファイルは使用不可",
        "body": "パソコン内のファイルパスをChatGPTに貼り付けても機能しません。AIはリモートサーバー上で動作しており、あなたのローカルファイルシステムにはアクセスできないためです。"
      },
      {
        "title": "即座に解析",
        "body": "URLさえあれば、ChatGPTは数秒で画像を処理します。画像に関する質問や説明の生成、テキストの抽出などが可能です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜChatGPTに公開画像URLが必要なのですか？",
        "a": "ChatGPTのVision機能は、インターネット上にホストされ、直接アクセス可能なURLを持つ画像のみを解析できるためです。パソコン内に保存されたファイルには直接アクセスできません。"
      },
      {
        "q": "ローカルのファイルパスをChatGPTに貼り付けられますか？",
        "a": "いいえ。ChatGPTは「C:/Users/photo.jpg」のようなローカルのファイルパスを読み取れません。事前に画像ホスティングサービスにアップロードする必要があります。"
      },
      {
        "q": "ChatGPTで画像URLをどう使いますか？",
        "a": "画像をImageToURLにアップロードして生成されたリンクをコピーし、ChatGPTの会話欄に直接貼り付けてください。"
      },
      {
        "q": "画像URLはHTTPSである必要がありますか？",
        "a": "はい。ChatGPTは安全なHTTPS URLを必要とします。ImageToURLで生成されるリンクは、すべてデフォルトでHTTPSに対応しています。"
      },
      {
        "q": "他のAIチャットボットでも使えますか？",
        "a": "はい。当社の画像URLは、Claude、Gemini、Perplexityなど、公開画像URLを受け入れるすべてのAIツールで使用可能です。"
      }
    ],
    "ctaTitle": "ChatGPT用画像URLを作成する",
    "ctaBody": "画像をアップロードしてリンクをコピーし、ChatGPTに貼り付けるだけ。10秒以内に完了します。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "获取 ChatGPT Vision 所需的图片 URL — 免费且即时 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "图片嵌入代码生成器" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "WhatsApp 图片 URL" },
      { "pageKey": "image-to-url-for-html", "label": "HTML 图片 URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel 图片托管" }
    ],
    "metaDescription": "ChatGPT Vision 需要公开的图片 URL。上传图片，获取即时链接，并将其粘贴到 ChatGPT 中。免费，无需注册。",
    "schemaName": "ChatGPT 图片 URL",
    "schemaDescription": "上传图片并获取 ChatGPT Vision 所需的公开 URL。免费、即时，无需注册。",
    "badge": "CHATGPT 用户",
    "h1Pre": "ChatGPT 图片 URL",
    "h1Highlight": "即时且免费。",
    "intro": "ChatGPT Vision 需要公开的图片 URL 才能分析您的图片。在此上传，复制链接，粘贴到 ChatGPT 中 — 几秒钟即可完成。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖放或点击以选择您的图片。我们支持 JPG、PNG、WebP、GIF 和 SVG 格式，最大 25 MB。"
      },
      {
        "title": "复制 URL",
        "body": "您的公开图片 URL 会立即生成。点击复制按钮，将 HTTPS 链接保存到剪贴板。"
      },
      {
        "title": "粘贴到 ChatGPT",
        "body": "将 URL 粘贴到任何 ChatGPT 对话中。视觉模型将自动获取并分析您的图片。"
      }
    ],
    "whyTitle": "为什么 ChatGPT 需要图片 URL",
    "whyItems": [
      {
        "title": "视觉功能需要公开 URL",
        "body": "ChatGPT 的视觉模型从网络获取图片。它需要一个可公开访问的 URL 来下载并处理您的图片以进行分析。"
      },
      {
        "title": "本地文件无法使用",
        "body": "您无法将计算机上的文件路径粘贴到 ChatGPT 中。AI 在远程服务器上运行，无法访问您的本地文件系统。"
      },
      {
        "title": "即时分析",
        "body": "一旦获得 URL，ChatGPT 会在几秒钟内处理您的图片。您可以询问有关图片的问题、获取描述或提取文本。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么 ChatGPT 需要公开的图片 URL？",
        "a": "ChatGPT 的视觉功能只能分析托管在公共互联网上并具有直接 URL 的图片。它无法访问存储在您计算机本地的文件。"
      },
      {
        "q": "我可以将本地文件路径粘贴到 ChatGPT 中吗？",
        "a": "不可以。ChatGPT 无法读取诸如 C:/Users/photo.jpg 之类的本地文件路径。您需要先将图片上传到托管服务。"
      },
      {
        "q": "如何在 ChatGPT 中使用图片 URL？",
        "a": "将您的图片上传到 ImageToURL，复制生成的链接，然后直接将其粘贴到您的 ChatGPT 对话中。"
      },
      {
        "q": "图片 URL 是否必须是 HTTPS？",
        "a": "是的。ChatGPT 需要安全的 HTTPS URL。所有 ImageToURL 链接默认通过 HTTPS 提供。"
      },
      {
        "q": "我的图片 URL 也适用于其他 AI 聊天机器人吗？",
        "a": "是的。我们的图片 URL 适用于任何接受公开图片 URL 的 AI 工具，包括 Claude、Gemini 和 Perplexity。"
      }
    ],
    "ctaTitle": "获取您的 ChatGPT 图片 URL",
    "ctaBody": "上传图片，复制链接，粘贴到 ChatGPT。只需不到 10 秒。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
