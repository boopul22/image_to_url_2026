import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Screenshot to URL - share a screenshot as a link, free | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-to-url", "label": "Image to URL" },
      { "pageKey": "image-to-url-converter", "label": "Image to URL converter" },
      { "pageKey": "image-to-link", "label": "Image to link" },
      { "pageKey": "image-url-generator", "label": "Image URL generator" }
    ],
    "metaDescription": "Turn a screenshot into a shareable link for free. Paste a copied capture or pick the saved PNG and get a direct URL for Slack, Jira, GitHub, Discord and email. No sign-up, no compression, 50MB.",
    "schemaName": "Screenshot to URL",
    "schemaDescription": "A free tool that turns a screenshot into a direct, full-quality link you can paste into a chat, ticket or issue. No account, no watermark, fast global CDN.",
    "badge": "SCREENSHOT TO URL",
    "h1Pre": "Screenshot to URL:",
    "h1Highlight": "paste it, share it",
    "intro": "A screenshot is just a PNG (or sometimes a JPG), so turning one into a link works the same way any image does. Paste a capture straight from your clipboard or pick the saved file, and you get a direct https link in about two seconds. Nothing is compressed or resized, so the text in your capture stays crisp and readable. Copy the link into a Slack message, a Jira ticket or a GitHub issue and it shows up inline instead of as a file attachment.",
    "specsTitle": "Screenshot to URL at a glance",
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
        "value": "PNG, JPG, WebP, GIF, SVG"
      },
      {
        "label": "Max size",
        "value": "50 MB"
      },
      {
        "label": "Output",
        "value": "Direct CDN link"
      }
    ],
    "howTitle": "How to turn a screenshot into a link",
    "steps": [
      {
        "title": "Capture your screen",
        "body": "Grab the shot with your usual shortcut: Cmd+Shift+4 on a Mac, Win+Shift+S on Windows, or whatever capture tool you like. Most of these copy a PNG to your clipboard and can also save a file."
      },
      {
        "title": "Paste or pick the file",
        "body": "Paste the copied screenshot straight into the box above, or drag the saved PNG onto it. Files up to 50MB work, which covers any full-screen capture from a 4K display."
      },
      {
        "title": "Copy the link and share",
        "body": "A direct link pops out right away, ending in the real file extension. Drop it into Slack, a support ticket, a forum post or an email and the image renders inline."
      }
    ],
    "whyTitle": "Why share a screenshot as a link",
    "whyItems": [
      {
        "title": "No attachment to wrangle",
        "body": "A link beats a file attachment in a lot of places. Forums, bug trackers and older ticketing tools often choke on uploads or strip them out. A URL just works, and anyone can open it without downloading anything."
      },
      {
        "title": "Text stays sharp",
        "body": "Screenshots are usually PNG because it's lossless, so error messages and code stay readable. This tool doesn't re-compress your file, so the link shows exactly the same pixels you captured - no JPEG mush around small text."
      },
      {
        "title": "It embeds where you paste it",
        "body": "Because the URL points right at the image, Discord, Slack, Reddit and most issue trackers show it inline instead of as a download button. Reviewers see the bug without an extra click."
      },
      {
        "title": "No account, no email",
        "body": "There's nothing to sign up for. Paste, copy, done. Imgur dropped anonymous uploads in 2023, so a lot of people now reach for a simpler box like this one."
      }
    ],
    "comparisonTitle": "Sharing a screenshot link vs sending the file",
    "comparisonIntro": "You can hand someone a screenshot a few different ways. Here's how a direct link compares to attaching the raw file or using a built-in OS share menu, based on what actually happens in a chat or a ticket.",
    "comparisonColumns": [
      "Method",
      "Keeps text sharp",
      "Needs an app",
      "Embeds inline",
      "Best for"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Direct URL (this tool)",
          "Yes (no re-compression)",
          "No",
          "Yes, almost everywhere",
          "Bug reports, tickets, forums"
        ]
      },
      {
        "cells": [
          "File attachment",
          "Yes",
          "Sometimes (size limits)",
          "Chat only, not all trackers",
          "One-off email or DM"
        ]
      },
      {
        "cells": [
          "OS screenshot share menu",
          "Yes",
          "Yes (the share target)",
          "Depends on target app",
          "Quick send to one contact"
        ]
      },
      {
        "cells": [
          "Paste into a doc",
          "Usually downscaled",
          "Yes (the editor)",
          "Inside that doc only",
          "Private notes"
        ]
      },
      {
        "cells": [
          "Cloud drive link",
          "Yes",
          "Often",
          "No (opens a viewer page)",
          "Large batches of files"
        ]
      }
    ],
    "useCasesTitle": "Where a screenshot link comes in handy",
    "useCasesIntro": "Once your capture has a direct link, it slots into the places where people actually report and discuss things:",
    "useCases": [
      {
        "title": "Bug reports and tickets",
        "body": "Paste the link into a Jira ticket, a GitHub issue or a support thread and the error shows inline. No 'see attached' that nobody can open."
      },
      {
        "title": "Slack, Discord and forums",
        "body": "Share a design, a chat, a game score or a console error in a channel or thread. The image appears in the message instead of as a download."
      },
      {
        "title": "Docs and guides",
        "body": "Drop the URL into a README, a Notion page or a how-to and the screenshot loads inline, so your steps are easy to follow."
      }
    ],
    "sections": [
      {
        "heading": "Why a link instead of the raw screenshot file?",
        "body": "Sending the file works fine in a quick DM, but it falls apart in a lot of common spots. Bug trackers, forums and email threads often block attachments, cap the size, or bury them behind a download. A direct link sidesteps all of that. The recipient clicks once and sees the image, and the same URL works in a chat, a ticket and a doc without re-uploading. It also keeps a long thread readable: you paste a short link instead of stuffing a multi-megabyte PNG into every reply."
      },
      {
        "heading": "PNG vs JPG for screenshots",
        "body": "Most screen-capture tools save PNG, and that's the right call for screenshots. PNG is lossless, so straight edges, small UI text and code stay crisp with no blocky artifacts. JPG is built for photos and tends to smear the fine detail that makes a screenshot useful. This tool keeps whatever you upload exactly as-is, with no extra compression, so a PNG capture stays pixel-perfect. If your shot happens to be a JPG, that's fine too - it just hosts the file you give it and hands back a link that ends in the matching extension."
      },
      {
        "heading": "Are screenshot links safe to share?",
        "body": "Every link is served over HTTPS and points only at your image, with no redirect pages or trackers attached. One thing to keep in mind: anonymous uploads are public to anyone who has the link, so think twice before posting a capture that shows passwords, private messages or personal data. Crop those out first. Free links are cleared on a regular storage cleanup, so keep your own copy of anything you want long-term, or sign in and choose 'keep forever' so the URL doesn't disappear."
      }
    ],
    "faqTitle": "Screenshot to URL FAQ",
    "faqs": [
      {
        "q": "How do I turn a screenshot into a URL?",
        "a": "Take your screenshot, then either paste it from the clipboard into the box above or drag the saved file in. You get a direct link ending in the real extension within a couple of seconds. Copy it and paste it wherever you need the image to appear."
      },
      {
        "q": "Can I paste a screenshot straight from my clipboard?",
        "a": "Yes. After you capture (Cmd+Shift+4 on Mac, Win+Shift+S on Windows), the image usually sits on your clipboard. Click the upload box and press Ctrl+V (Cmd+V on Mac) to drop it in without saving a file first. You can also pick the saved PNG if you prefer."
      },
      {
        "q": "What screenshot formats work?",
        "a": "PNG, JPG, WebP, GIF and SVG, up to 50MB each. Screen captures are almost always PNG, which is exactly what you want for sharp text, and they upload the same as any other image."
      },
      {
        "q": "Will it compress my screenshot or blur the text?",
        "a": "No. You get back the same file you put in, at full resolution, with no re-compression and no watermark. That matters for screenshots because the text and lines stay crisp instead of getting fuzzy."
      },
      {
        "q": "Will the link show up inline in Slack, Discord and GitHub?",
        "a": "Yes. The URL points right at the image file, so Slack, Discord, Teams, Reddit and most issue trackers render it as a picture in the message instead of a download link or a gallery page."
      },
      {
        "q": "Can I paste the link into a Jira ticket or a GitHub issue?",
        "a": "Yes. Paste the URL into the ticket or issue body and the screenshot embeds inline, so whoever picks up the bug sees it without opening an attachment. It also works in a support ticket or a forum post."
      },
      {
        "q": "Is there a file size limit?",
        "a": "50MB per image, which covers virtually any screen capture, even a full 4K or multi-monitor shot. If a file somehow runs larger, save it as PNG or crop it down and try again."
      },
      {
        "q": "Do I need an account?",
        "a": "No. There's no sign-up, no email and no app to install. Upload or paste, copy the link, and you're done."
      },
      {
        "q": "Do the links expire?",
        "a": "Anonymous links stay live until our regular storage cleanup, so you get at least a couple of weeks and often longer. Want one that sticks around for good? Create a free account and pick 'keep forever' when you upload. Either way, keep your own copy as a backup."
      },
      {
        "q": "Can I use the link in an <img> tag or Markdown?",
        "a": "Yes. It's a normal direct image URL, so it works in HTML <img src> tags, Markdown image syntax, CSS background-image and any site builder or docs tool that accepts an image link."
      },
      {
        "q": "Is it safe to share a screenshot of something private?",
        "a": "Treat anonymous uploads as public, since anyone with the link can open the image. Crop out passwords, tokens, private chats or personal details before you upload, or sign in to manage your own files."
      },
      {
        "q": "How fast is it?",
        "a": "A typical screenshot uploads in under two seconds, and the link is ready the moment the upload finishes. There's nothing to wait for and no processing queue."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Share your screenshot as a link",
    "ctaBody": "Paste a copied capture or upload the saved PNG and get a direct link in seconds. No sign-up, no compression, no watermark.",
    "ctaButton": "Upload Screenshot Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Captura de pantalla a URL — Comparte capturas como enlaces | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-to-url", "label": "Imagen a URL" },
      { "pageKey": "image-to-url-converter", "label": "Convertidor de imagen a URL" },
      { "pageKey": "image-to-link", "label": "Imagen a enlace" },
      { "pageKey": "image-url-generator", "label": "Generador de URL de imagen" }
    ],
    "metaDescription": "Convierte capturas de pantalla en URLs compartibles en segundos. Pega desde el portapapeles, arrastra y suelta, o sube archivos. Ideal para reportes de errores, tutoriales y compartir rápidamente.",
    "schemaName": "Convertidor de captura de pantalla a URL",
    "schemaDescription": "Una herramienta web que convierte instantáneamente capturas de pantalla desde tu portapapeles o archivos en URLs permanentes y compartibles.",
    "badge": "COMPARTIR CAPTURAS",
    "h1Pre": "Captura de pantalla a URL",
    "h1Highlight": "— pega y comparte.",
    "intro": "Convierte capturas de pantalla en URLs compartibles en segundos. Pega desde el portapapeles, arrastra y suelta, o sube archivos; es perfecto para reportes de errores, tutoriales y compartir rápidamente.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Captura tu pantalla",
        "body": "Toma una captura de pantalla usando el atajo de tu sistema (Cmd+Shift+4 en Mac, Win+Shift+S en Windows, o cualquier herramienta que prefieras)."
      },
      {
        "title": "Sube o pega",
        "body": "Arrastra tu archivo de captura a nuestro cargador o pégalo directamente desde tu portapapeles. Ambos métodos funcionan al instante."
      },
      {
        "title": "Comparte el enlace",
        "body": "Copia la URL generada y pégala en Slack, correo electrónico, GitHub issues, tickets de Jira o cualquier conversación."
      }
    ],
    "whyTitle": "¿Por qué usar Captura de pantalla a URL?",
    "whyItems": [
      {
        "title": "Soporte para pegar desde el portapapeles",
        "body": "Pega capturas de pantalla directamente desde tu portapapeles. No necesitas guardar el archivo primero; solo presiona Ctrl+V y sube."
      },
      {
        "title": "Reportes de errores instantáneos",
        "body": "Captura un problema, sube la imagen y comparte la URL en tu gestor de errores. El flujo de trabajo más rápido para reportar bugs."
      },
      {
        "title": "Enlaces directos y limpios",
        "body": "Obtén URLs de imagen directas y limpias, sin páginas de galería con anuncios. Perfecto para incrustar en documentación y tickets."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Puedo pegar una captura de pantalla desde mi portapapeles?",
        "a": "¡Sí! Después de tomar una captura, puedes pegarla directamente en nuestro cargador usando Ctrl+V (o Cmd+V en Mac). No es necesario guardar el archivo primero."
      },
      {
        "q": "¿Qué formatos de captura de pantalla son compatibles?",
        "a": "Soportamos todos los formatos comunes: PNG, JPG, WebP y BMP. Sea cual sea el formato que genere tu sistema operativo o herramienta, lo procesamos."
      },
      {
        "q": "¿Qué tan rápida es la carga?",
        "a": "Las capturas suelen subirse en menos de 2 segundos. Tu URL permanente se genera instantáneamente al finalizar la carga."
      },
      {
        "q": "¿Puedo compartir capturas en Slack y Discord?",
        "a": "Sí. Copia la URL de tu captura y pégala en cualquier plataforma de chat. Slack, Discord, Teams y la mayoría de las aplicaciones de chat mostrarán automáticamente una vista previa de la imagen."
      },
      {
        "q": "¿Las URLs de las capturas son permanentes?",
        "a": "Sí. Cada captura que subes obtiene una URL permanente que nunca caduca. Compártela en tu documentación hoy y seguirá funcionando años después."
      }
    ],
    "ctaTitle": "Comparte tu captura de pantalla como un enlace",
    "ctaBody": "Sube o pega una captura de pantalla y obtén una URL permanente en segundos, sin registros ni anuncios.",
    "ctaButton": "Subir captura ahora"
  },
  "fr": {
    "metaTitle": "Capture d'écran vers URL — Partagez vos captures sous forme de liens | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-to-url", "label": "Image vers URL" },
      { "pageKey": "image-to-url-converter", "label": "Convertisseur d'image en URL" },
      { "pageKey": "image-to-link", "label": "Image vers lien" },
      { "pageKey": "image-url-generator", "label": "Générateur d'URL d'image" }
    ],
    "metaDescription": "Transformez vos captures d'écran en URL partageables en quelques secondes. Collez depuis le presse-papiers, glissez-déposez ou téléchargez. Idéal pour les rapports de bugs, tutoriels et partages rapides.",
    "schemaName": "Convertisseur de capture d'écran en URL",
    "schemaDescription": "Un outil web qui convertit instantanément les captures d'écran de votre presse-papiers ou de vos fichiers en URL permanentes et partageables.",
    "badge": "PARTAGE DE CAPTURES D'ÉCRAN",
    "h1Pre": "Capture d'écran vers URL",
    "h1Highlight": "— collez et partagez.",
    "intro": "Transformez vos captures d'écran en URL partageables en quelques secondes. Collez depuis le presse-papiers, glissez-déposez ou téléchargez — idéal pour les rapports de bugs, tutoriels et partages rapides.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Capturez votre écran",
        "body": "Prenez une capture d'écran avec le raccourci de votre système (Cmd+Shift+4 sur Mac, Win+Shift+S sur Windows, ou tout autre outil de votre choix)."
      },
      {
        "title": "Téléchargez ou collez",
        "body": "Glissez votre fichier de capture d'écran dans notre outil, ou collez-le directement depuis votre presse-papiers. Les deux méthodes fonctionnent instantanément."
      },
      {
        "title": "Partagez le lien",
        "body": "Copiez l'URL générée et collez-la dans Slack, par e-mail, dans des tickets GitHub, Jira, ou toute autre conversation."
      }
    ],
    "whyTitle": "Pourquoi utiliser Capture d'écran vers URL ?",
    "whyItems": [
      {
        "title": "Support du presse-papiers",
        "body": "Collez vos captures d'écran directement depuis votre presse-papiers. Pas besoin d'enregistrer le fichier au préalable — faites simplement Ctrl+V et téléchargez."
      },
      {
        "title": "Rapports de bugs instantanés",
        "body": "Capturez un problème, téléchargez la capture d'écran, partagez l'URL dans votre outil de suivi de bugs. Le flux de travail le plus rapide pour signaler des bugs."
      },
      {
        "title": "Liens directs et propres",
        "body": "Obtenez des URL d'images directes et propres — pas de pages de galerie avec des publicités. Parfait pour l'intégration dans la documentation et les tickets."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Puis-je coller une capture d'écran depuis mon presse-papiers ?",
        "a": "Oui ! Après avoir pris une capture d'écran, vous pouvez la coller directement dans notre outil en utilisant Ctrl+V (ou Cmd+V sur Mac). Pas besoin d'enregistrer le fichier au préalable."
      },
      {
        "q": "Quels formats de capture d'écran sont pris en charge ?",
        "a": "Nous prenons en charge tous les formats courants : PNG, JPG, WebP et BMP. Quel que soit votre système d'exploitation ou votre outil, nous le gérons."
      },
      {
        "q": "Quelle est la vitesse de téléchargement ?",
        "a": "Les captures d'écran sont généralement téléchargées en moins de 2 secondes. Votre URL permanente est générée instantanément une fois le téléchargement terminé."
      },
      {
        "q": "Puis-je partager des captures d'écran dans Slack et Discord ?",
        "a": "Oui. Copiez l'URL de votre capture d'écran et collez-la dans n'importe quelle plateforme de chat. Slack, Discord, Teams et la plupart des applications de messagerie afficheront automatiquement un aperçu de l'image."
      },
      {
        "q": "Les URL des captures d'écran sont-elles permanentes ?",
        "a": "Oui. Chaque capture d'écran que vous téléchargez obtient une URL permanente qui n'expire jamais. Partagez-la dans votre documentation aujourd'hui, et elle fonctionnera toujours dans des années."
      }
    ],
    "ctaTitle": "Partagez votre capture d'écran sous forme de lien",
    "ctaBody": "Téléchargez ou collez une capture d'écran et obtenez une URL permanente en quelques secondes, sans inscription ni publicité.",
    "ctaButton": "Télécharger la capture d'écran maintenant"
  },
  "de": {
    "metaTitle": "Screenshot in URL umwandeln — Screenshots als Link teilen | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-to-url", "label": "Bild zu URL" },
      { "pageKey": "image-to-url-converter", "label": "Bild-zu-URL-Konverter" },
      { "pageKey": "image-to-link", "label": "Bild zu Link" },
      { "pageKey": "image-url-generator", "label": "Bild-URL-Generator" }
    ],
    "metaDescription": "Verwandeln Sie Screenshots in Sekunden in teilbare URLs. Einfach aus der Zwischenablage einfügen, per Drag & Drop hochladen oder auswählen. Perfekt für Bug-Reports, Tutorials und schnelles Teilen.",
    "schemaName": "Screenshot-zu-URL-Konverter",
    "schemaDescription": "Ein webbasiertes Tool, das Screenshots aus der Zwischenablage oder von Dateien sofort in dauerhafte, teilbare URLs umwandelt.",
    "badge": "SCREENSHOT-SHARING",
    "h1Pre": "Screenshot in URL",
    "h1Highlight": "— einfügen und teilen.",
    "intro": "Verwandeln Sie Screenshots in Sekunden in teilbare URLs. Einfach aus der Zwischenablage einfügen, per Drag & Drop hochladen oder auswählen — perfekt für Bug-Reports, Tutorials und schnelles Teilen.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Screenshot erstellen",
        "body": "Erstellen Sie einen Screenshot mit Ihrem System-Shortcut (Cmd+Shift+4 auf Mac, Win+Shift+S unter Windows oder einem Tool Ihrer Wahl)."
      },
      {
        "title": "Hochladen oder Einfügen",
        "body": "Ziehen Sie Ihre Screenshot-Datei in unseren Uploader oder fügen Sie sie direkt aus der Zwischenablage ein. Beide Methoden funktionieren sofort."
      },
      {
        "title": "Link teilen",
        "body": "Kopieren Sie die generierte URL und fügen Sie sie in Slack, E-Mails, GitHub Issues, Jira-Tickets oder jedes andere Gespräch ein."
      }
    ],
    "whyTitle": "Warum Screenshot in URL?",
    "whyItems": [
      {
        "title": "Unterstützung für Zwischenablage",
        "body": "Fügen Sie Screenshots direkt aus der Zwischenablage ein. Sie müssen die Datei nicht erst speichern — einfach Strg+V und hochladen."
      },
      {
        "title": "Sofortige Bug-Reports",
        "body": "Erfassen Sie einen Fehler, laden Sie den Screenshot hoch und teilen Sie die URL in Ihrem Bug-Tracker. Der schnellste Workflow für Fehlerberichte."
      },
      {
        "title": "Saubere Direktlinks",
        "body": "Erhalten Sie saubere, direkte Bild-URLs — keine Galerie-Seiten mit Werbung. Perfekt zum Einbetten in Dokumentationen und Tickets."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Kann ich einen Screenshot aus der Zwischenablage einfügen?",
        "a": "Ja! Nachdem Sie einen Screenshot erstellt haben, können Sie ihn mit Strg+V (oder Cmd+V auf dem Mac) direkt in unseren Uploader einfügen. Sie müssen die Datei nicht vorher speichern."
      },
      {
        "q": "Welche Screenshot-Formate werden unterstützt?",
        "a": "Wir unterstützen alle gängigen Screenshot-Formate: PNG, JPG, WebP und BMP. Egal, was Ihr Betriebssystem oder Tool produziert, wir verarbeiten es."
      },
      {
        "q": "Wie schnell ist der Upload?",
        "a": "Screenshots werden in der Regel in unter 2 Sekunden hochgeladen. Ihre dauerhafte URL wird sofort nach Abschluss des Uploads generiert."
      },
      {
        "q": "Kann ich Screenshots in Slack und Discord teilen?",
        "a": "Ja. Kopieren Sie Ihre Screenshot-URL und fügen Sie sie in eine beliebige Chat-Plattform ein. Slack, Discord, Teams und die meisten Chat-Apps zeigen automatisch eine Bildvorschau an."
      },
      {
        "q": "Sind Screenshot-URLs dauerhaft?",
        "a": "Ja. Jeder hochgeladene Screenshot erhält eine dauerhafte URL, die niemals abläuft. Teilen Sie sie heute in Ihrer Dokumentation, und sie wird auch in Jahren noch funktionieren."
      }
    ],
    "ctaTitle": "Teilen Sie Ihren Screenshot als Link",
    "ctaBody": "Laden Sie einen Screenshot hoch oder fügen Sie ihn ein und erhalten Sie in Sekunden eine dauerhafte URL — ohne Anmeldung oder Werbung.",
    "ctaButton": "Jetzt Screenshot hochladen"
  },
  "ja": {
    "metaTitle": "スクリーンショットをURLに変換 — 画像をリンクとして共有 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-to-url", "label": "画像→URL" },
      { "pageKey": "image-to-url-converter", "label": "画像→URL変換" },
      { "pageKey": "image-to-link", "label": "画像→リンク" },
      { "pageKey": "image-url-generator", "label": "画像URL生成" }
    ],
    "metaDescription": "スクリーンショットを数秒で共有可能なURLに変換。クリップボードからの貼り付け、ドラッグ＆ドロップ、アップロードに対応。バグ報告やチュートリアル、素早い共有に最適です。",
    "schemaName": "スクリーンショットURL変換ツール",
    "schemaDescription": "クリップボードやファイルからスクリーンショットを即座に永続的な共有URLに変換するWebツール。",
    "badge": "スクリーンショット共有",
    "h1Pre": "スクリーンショットをURLに",
    "h1Highlight": "— 貼り付けて共有。",
    "intro": "スクリーンショットを数秒で共有可能なURLに変換。クリップボードからの貼り付け、ドラッグ＆ドロップ、アップロードに対応しており、バグ報告やチュートリアル、素早い共有に最適です。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "スクリーンショットを撮影",
        "body": "OSのショートカット（MacはCmd+Shift+4、WindowsはWin+Shift+Sなど）や、お好みのツールを使用してスクリーンショットを撮影します。"
      },
      {
        "title": "アップロードまたは貼り付け",
        "body": "ファイルをアップローダーにドラッグ＆ドロップするか、クリップボードから直接貼り付けます。どちらの方法でも即座に処理されます。"
      },
      {
        "title": "リンクを共有",
        "body": "生成されたURLをコピーして、Slack、メール、GitHubのIssue、Jiraチケットなど、あらゆる場所で共有しましょう。"
      }
    ],
    "whyTitle": "なぜ「スクリーンショットをURLに」を使うのか？",
    "whyItems": [
      {
        "title": "クリップボード貼り付け対応",
        "body": "スクリーンショットをクリップボードから直接貼り付け可能。ファイルを保存する手間は不要です。Ctrl+Vでアップロードするだけ。"
      },
      {
        "title": "迅速なバグ報告",
        "body": "問題をキャプチャし、アップロードしてURLをバグトラッカーに貼るだけ。最も効率的なバグ報告ワークフローを実現します。"
      },
      {
        "title": "クリーンな直接リンク",
        "body": "広告付きのギャラリーページではなく、クリーンな画像直接URLを取得できます。ドキュメントやチケットへの埋め込みに最適です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "クリップボードからスクリーンショットを貼り付けられますか？",
        "a": "はい。スクリーンショット撮影後、Ctrl+V（Macの場合はCmd+V）でアップローダーに直接貼り付けられます。ファイルを保存する必要はありません。"
      },
      {
        "q": "対応しているスクリーンショットの形式は？",
        "a": "PNG、JPG、WebP、BMPなど、一般的なすべての形式に対応しています。OSやツールを問わず処理可能です。"
      },
      {
        "q": "アップロードはどれくらい速いですか？",
        "a": "通常2秒以内にアップロードが完了します。完了と同時に永続的なURLが即座に生成されます。"
      },
      {
        "q": "SlackやDiscordで共有できますか？",
        "a": "はい。生成されたURLをチャットツールに貼り付けるだけで、Slack、Discord、Teamsなどのほとんどのプラットフォームで画像プレビューが自動的に表示されます。"
      },
      {
        "q": "スクリーンショットのURLは永続的ですか？",
        "a": "はい。アップロードされたすべてのスクリーンショットには、期限切れのない永続的なURLが発行されます。ドキュメントに貼れば、数年後もそのまま機能します。"
      }
    ],
    "ctaTitle": "スクリーンショットをリンクとして共有",
    "ctaBody": "サインアップや広告なしで、スクリーンショットをアップロードまたは貼り付けて、数秒で永続的なURLを取得しましょう。",
    "ctaButton": "今すぐスクリーンショットをアップロード"
  },
  "zh-Hans": {
    "metaTitle": "截图转链接 — 将截图转换为链接分享 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-to-url", "label": "图片转 URL" },
      { "pageKey": "image-to-url-converter", "label": "图片转 URL 转换器" },
      { "pageKey": "image-to-link", "label": "图片转链接" },
      { "pageKey": "image-url-generator", "label": "图片 URL 生成器" }
    ],
    "metaDescription": "几秒钟内将截图转换为可分享的链接。支持剪贴板粘贴、拖拽或上传。非常适合错误报告、教程和快速分享。",
    "schemaName": "截图转链接转换器",
    "schemaDescription": "一款基于网页的工具，可立即将剪贴板或文件中的截图转换为永久、可分享的链接。",
    "badge": "截图分享",
    "h1Pre": "截图转链接",
    "h1Highlight": "— 粘贴即刻分享。",
    "intro": "几秒钟内将截图转换为可分享的链接。支持剪贴板粘贴、拖拽或上传 — 非常适合错误报告、教程和快速分享。",
    "howTitle": "使用方法",
    "steps": [
      {
        "title": "截取屏幕",
        "body": "使用系统快捷键截取屏幕（Mac 上为 Cmd+Shift+4，Windows 上为 Win+Shift+S，或使用您偏好的任何工具）。"
      },
      {
        "title": "上传或粘贴",
        "body": "将截图文件拖入我们的上传器，或直接从剪贴板粘贴。两种方式均可立即生效。"
      },
      {
        "title": "分享链接",
        "body": "复制生成的 URL 并将其粘贴到 Slack、电子邮件、GitHub issues、Jira 工单或任何对话中。"
      }
    ],
    "whyTitle": "为什么选择截图转链接？",
    "whyItems": [
      {
        "title": "支持剪贴板粘贴",
        "body": "直接从剪贴板粘贴截图。无需先保存文件 — 只需 Ctrl+V 即可上传。"
      },
      {
        "title": "即时错误报告",
        "body": "捕获问题、上传截图、在错误追踪系统中分享链接。这是最高效的错误报告工作流。"
      },
      {
        "title": "纯净直链",
        "body": "获取纯净的图片直链 — 而非带有广告的图库页面。非常适合嵌入文档和工单中。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我可以从剪贴板粘贴截图吗？",
        "a": "可以！截屏后，您可以使用 Ctrl+V（Mac 上为 Cmd+V）直接粘贴到我们的上传器中。无需先保存文件。"
      },
      {
        "q": "支持哪些截图格式？",
        "a": "我们支持所有常见的截图格式：PNG、JPG、WebP 和 BMP。无论您的操作系统或工具生成什么格式，我们都能处理。"
      },
      {
        "q": "上传速度有多快？",
        "a": "截图通常在 2 秒内完成上传。上传完成后，您的永久链接会立即生成。"
      },
      {
        "q": "我可以在 Slack 和 Discord 中分享截图吗？",
        "a": "可以。复制您的截图链接并将其粘贴到任何聊天平台。Slack、Discord、Teams 以及大多数聊天应用都会自动显示图片预览。"
      },
      {
        "q": "截图链接是永久的吗？",
        "a": "是的。您上传的每张截图都会获得一个永不过期的永久链接。今天将其分享到文档中，多年后它依然有效。"
      }
    ],
    "ctaTitle": "将您的截图作为链接分享",
    "ctaBody": "上传或粘贴截图，几秒钟内即可获得永久链接，无需注册，没有广告。",
    "ctaButton": "立即上传截图"
  },
} as LandingContentMap;
