import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Free Image URL Generator - Get a Direct Image Link",
    "metaDescription": "Free image URL generator and image link generator. Upload a JPG, PNG, WebP or GIF and get a direct, permanent link in seconds. No signup, no watermark.",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-to-url", "label": "Image to URL" },
      { "pageKey": "image-embed-code-generator", "label": "Embed code generator" },
      { "pageKey": "image-to-link", "label": "Image to link" },
      { "pageKey": "bulk-image-upload", "label": "Bulk image upload" }
    ],
    "schemaName": "Free Image URL Generator",
    "schemaDescription": "Upload an image and get a direct, permanent URL in seconds. Free image url generator and image link generator with no signup or watermark.",
    "badge": "URL GENERATOR",
    "h1Pre": "Free Image URL Generator and ",
    "h1Highlight": "Image Link Generator",
    "intro": "This free image url generator turns any photo into a direct, hotlinkable link you can paste anywhere. Drop in a JPG, PNG, WebP or GIF up to 10MB and the image link generator hands back a clean URL in seconds. No account, no watermark, no software to install. The link points straight at your file, so it embeds in HTML, Markdown, Discord, Reddit and forum posts without breaking.",
    "howTitle": "How the Image URL Generator Works",
    "steps": [
      {
        "title": "Drop in your file",
        "body": "Drag an image onto the box or click to browse. JPG, PNG, WebP and GIF are supported, up to 10MB each. Nothing is compressed, so the file you upload is the file people see."
      },
      {
        "title": "Get a direct link",
        "body": "The moment the upload finishes, the image url generator returns a direct URL ending in the real file extension. There is no processing queue and no waiting screen."
      },
      {
        "title": "Copy and paste it anywhere",
        "body": "Copy the link with one click. Paste it into an img tag, a Markdown file, a Discord message or an API call. Because it is a direct link, it renders as an actual image rather than a download."
      }
    ],
    "whyTitle": "Why Use This Image URL Generator",
    "whyItems": [
      {
        "title": "Direct, hotlinkable URLs",
        "body": "Every link points straight at the image file, not a viewer page. That is what lets it embed in HTML, Markdown, Discord and Reddit. Many hosts wrap your image in an ad page, which breaks hotlinking. This one does not."
      },
      {
        "title": "Image link generator with no account",
        "body": "The image link generator runs anonymously. You never sign up, log in or hand over an email. Open the page, upload, copy your link, done. Good for quick shares and good for scripts."
      },
      {
        "title": "Built for dev and API use",
        "body": "Files load from a fast global CDN, the URLs are clean and predictable, and nothing is re-encoded. Wire the link into a README, a webhook payload or a config file and it behaves like any other static asset."
      }
    ],
    "useCasesTitle": "What People Build With the Image URL Generator",
    "useCasesIntro": "Once you have a link from the image url generator, it slots into most places that expect a plain image URL:",
    "useCases": [
      {
        "title": "Embed in HTML and Markdown",
        "body": "Paste the URL into an img src tag or Markdown image syntax. It loads inline in docs, READMEs and static sites with no extra hosting to configure."
      },
      {
        "title": "Post in Discord, Reddit and forums",
        "body": "Drop the link into a Discord channel, a Reddit comment or a forum thread and it unfurls as a real image. The image link generator output is plain enough that these platforms preview it automatically."
      },
      {
        "title": "Feed it to an API or webhook",
        "body": "Need a public image URL for an API request, a bot or an automation? Generate one here and reference it directly. No auth token is attached to the link."
      }
    ],
    "faqTitle": "Image URL Generator FAQ",
    "faqs": [
      {
        "q": "What is an image link generator, and how do I generate a link for an image?",
        "a": "An image link generator takes a file off your device and gives it a public web address. Upload your image in the box above and you get a direct link back within seconds. Copy that link and paste it wherever you need the image to appear."
      },
      {
        "q": "Is the image url generator free?",
        "a": "Yes. Generating links is free with no hidden fees, no subscription and no watermark stamped on your image."
      },
      {
        "q": "Do I need an account?",
        "a": "No. The tool is anonymous. There is no signup and no login, so you can generate a link without creating an account or sharing an email."
      },
      {
        "q": "Will the link embed in Discord or Reddit?",
        "a": "Yes. The URL points straight at the image file, so Discord, Reddit and most forums show it as a real image preview instead of a plain text link or an attachment."
      },
      {
        "q": "Is the image link permanent?",
        "a": "Anonymous links stay live for at least a couple of weeks, then clear on a routine storage cleanup. Want a generated link that never expires? Create a free account and choose 'keep forever' when you upload. For a site or README you control, keep the original file so you can re-generate if a link ever ages out."
      },
      {
        "q": "Which image formats and file sizes work?",
        "a": "JPG, PNG, WebP and GIF are supported, up to 10MB per file. Nothing is compressed or re-encoded, so the generated link serves your image at full quality."
      },
      {
        "q": "What does a generated image URL look like?",
        "a": "A short https address that ends in the file extension, like https://imagetourl.cloud/abc123.jpg. That extension is the part that makes it embed as an image. There is no viewer page, no ad wrapper and no redirect sitting between the link and your file."
      },
      {
        "q": "Can I generate links for several images at once?",
        "a": "Yes. Upload your images one after another and copy each link as it comes back, or use the bulk upload tool when you have a whole batch. Every file gets its own direct URL."
      },
      {
        "q": "Can I use the generated URL in an <img> tag or Markdown?",
        "a": "Yes. It is a plain direct image link, so it works in an HTML <img src> tag, Markdown image syntax, a CSS background-image rule and any site builder that accepts an image URL."
      },
      {
        "q": "Does generating a URL compress or change my image?",
        "a": "No. The file is stored and served exactly as you uploaded it, at full resolution, with no re-encoding and no watermark. The link points at the original, not a copy."
      },
      {
        "q": "Is it safe to share a generated link?",
        "a": "The link runs over HTTPS and points only at your image. Just remember an anonymous link is public to anyone who has it, so don't generate one for anything private, and keep your own copy of the file as a backup."
      }
    ],
    "ctaTitle": "Try the image url generator",
    "ctaBody": "Upload a JPG, PNG, WebP or GIF and get a direct, shareable link in seconds. No signup, no watermark.",
    "ctaButton": "Generate Image URL",
    "specsTitle": "Image URL generator at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Formats", "value": "JPG, PNG, WebP, GIF" },
      { "label": "Max size", "value": "10 MB" },
      { "label": "Output", "value": "Direct CDN link (.jpg/.png)" }
    ],
    "comparisonTitle": "Image URL generators compared",
    "comparisonIntro": "Plenty of tools will generate an image link. The differences show up in whether you need an account first, how large a file you can drop, and whether the link points straight at your image or at a viewer page. Here is how the common ones compare.",
    "comparisonColumns": [
      "Tool",
      "No sign-up",
      "Max file size",
      "Direct hotlink",
      "Keeps full quality",
      "Link lifetime"
    ],
    "comparisonRows": [
      { "cells": ["ImageToURL", "Yes", "10 MB", "Yes", "Yes", "Weeks free, forever when signed in"] },
      { "cells": ["Imgur", "No (since 2023)", "20 MB", "Limited", "Yes", "Tied to your account"] },
      { "cells": ["Catbox", "Yes", "200 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["ImgBB", "Yes", "32 MB", "Yes", "Yes", "Optional expiry"] },
      { "cells": ["Postimages", "Yes", "24 MB", "Yes", "No (resized to 1280px)", "Permanent"] }
    ],
    "sections": [
      {
        "heading": "What is an image URL generator?",
        "body": "An image URL generator takes a file off your device, stores it on a web server, and hands back a public address that points at the image. Before that step your photo only exists locally, so nothing online can load it. After it, the image has a real https link that ends in .jpg, .png or .webp. The generator does the upload and the addressing in one move, so you skip FTP, cloud dashboards and any hosting setup. You drop the file, you copy the link. From there, anything that reads a URL can show your picture."
      },
      {
        "heading": "What a generated image URL looks like",
        "body": "A link from here looks like https://imagetourl.cloud/abc123.jpg, a short path that ends in the real file extension. That ending matters. It tells browsers, Discord and Reddit that the address is an image, so they render it inline instead of offering a download or a card. Compare that to a gallery link like imgur.com/a/xyz, which opens a page wrapped around the picture and often won't hotlink at all. A direct generated URL has no viewer page, no ads and no redirect. Paste it into an img tag and it just loads."
      },
      {
        "heading": "Are generated links safe to share?",
        "body": "Every link is served over HTTPS and points only at your file, with no tracker or redirect bolted on. The thing to keep in mind is that an anonymous link is public to anyone who has it, with no password on it. So don't generate links for private documents or anything you would not want seen, and hold onto your own copy of the original. Free links also clear on a regular cleanup, so for a site or README you control, keep the source file and re-generate if a link ever ages out."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Generador de URL de imagen gratuito — Convierte imágenes a URL al instante | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-to-url", "label": "Imagen a URL" },
      { "pageKey": "image-embed-code-generator", "label": "Generador de código incrustado" },
      { "pageKey": "image-to-link", "label": "Imagen a enlace" },
      { "pageKey": "bulk-image-upload", "label": "Carga masiva de imágenes" }
    ],
    "metaDescription": "Generador de URL de imagen gratuito. Sube cualquier imagen y obtén un enlace permanente y compartible en segundos. Sin registro, sin marcas de agua, sin costo. Creado para desarrolladores.",
    "schemaName": "Generador de URL de imagen gratuito",
    "schemaDescription": "Sube cualquier imagen y obtén un enlace permanente y compartible en segundos sin registros ni tarifas.",
    "badge": "GENERADOR DE URL",
    "h1Pre": "Generador de URL de imagen gratuito",
    "h1Highlight": "en segundos.",
    "intro": "Sube cualquier imagen y conviértela al instante en una URL permanente y compartible. Sin software que instalar, sin cuentas que crear, solo generación de enlaces rápida y confiable.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta tu imagen o haz clic para buscar en tus archivos. Admitimos formatos JPG, PNG, WebP, GIF y SVG."
      },
      {
        "title": "Generación de URL instantánea",
        "body": "Tu URL de imagen única se genera en milisegundos. Sin esperas ni colas de procesamiento: está lista en el momento en que se completa la carga."
      },
      {
        "title": "Copia y comparte",
        "body": "Usa tu URL de imagen en cualquier lugar de la web. Pégala en correos electrónicos, insértala en sitios web o compártela en redes sociales."
      }
    ],
    "whyTitle": "Por qué usar nuestro generador",
    "whyItems": [
      {
        "title": "Generación instantánea",
        "body": "Las URL están listas en menos de un segundo. Nuestra infraestructura procesa tu carga y genera un enlace permanente casi al instante."
      },
      {
        "title": "URL permanentes",
        "body": "Enlaces que nunca caducan ni se rompen. Una vez generada, la URL de tu imagen funcionará para siempre, sin límites de tiempo ni fechas de caducidad."
      },
      {
        "title": "Generador de URL masivo",
        "body": "¿Necesitas URL para varias imágenes? Sube un lote y genera todos tus enlaces a la vez, perfecto para proyectos grandes."
      },
      {
        "title": "Compartir fácilmente",
        "body": "Copia tu URL con un clic u obtén un código de inserción. Cada URL funciona en todas partes: sitios web, foros y aplicaciones de mensajería."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Este generador de URL de imagen es realmente gratuito?",
        "a": "Sí, nuestro servicio es completamente gratuito. No hay tarifas ocultas, suscripciones ni marcas de agua añadidas a tus imágenes."
      },
      {
        "q": "¿Necesito crear una cuenta?",
        "a": "No se requiere cuenta. Puedes subir y generar URL de imágenes al instante sin registrarte ni proporcionar información personal."
      },
      {
        "q": "¿Cuánto duran los enlaces de imagen?",
        "a": "Los enlaces que generamos son permanentes. No eliminamos tus imágenes, por lo que tus enlaces permanecerán activos indefinidamente."
      },
      {
        "q": "¿Qué formatos de archivo son compatibles?",
        "a": "Admitimos todos los formatos de imagen comunes, incluidos JPG, PNG, WebP, GIF y SVG."
      },
      {
        "q": "¿Puedo usar estos enlaces para mi sitio web?",
        "a": "Absolutamente. Nuestras URL generadas son perfectas para insertar imágenes en sitios web, blogs, documentación y archivos README."
      }
    ],
    "ctaTitle": "Genera tu primera URL de imagen",
    "ctaBody": "Sube una imagen y obtén un enlace permanente y compartible en segundos sin necesidad de registro.",
    "ctaButton": "Comenzar gratis"
  },
  "fr": {
    "metaTitle": "Générateur d'URL d'image gratuit — Convertissez vos images en URL instantanément | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-to-url", "label": "Image vers URL" },
      { "pageKey": "image-embed-code-generator", "label": "Générateur de code intégré" },
      { "pageKey": "image-to-link", "label": "Image vers lien" },
      { "pageKey": "bulk-image-upload", "label": "Téléchargement d'images en masse" }
    ],
    "metaDescription": "Générateur d'URL d'image gratuit. Téléchargez n'importe quelle image et obtenez un lien permanent et partageable en quelques secondes. Sans inscription, sans filigrane, sans frais. Conçu pour les développeurs.",
    "schemaName": "Générateur d'URL d'image gratuit",
    "schemaDescription": "Téléchargez n'importe quelle image et obtenez un lien permanent et partageable en quelques secondes, sans inscription ni frais.",
    "badge": "GÉNÉRATEUR D'URL",
    "h1Pre": "Générateur d'URL d'image gratuit",
    "h1Highlight": "en quelques secondes.",
    "intro": "Téléchargez n'importe quelle image et convertissez-la instantanément en une URL permanente et partageable. Aucun logiciel à installer, aucun compte à créer, juste une génération de liens rapide et fiable.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez votre image ou cliquez pour parcourir vos fichiers. Nous prenons en charge les formats JPG, PNG, WebP, GIF et SVG."
      },
      {
        "title": "Génération d'URL instantanée",
        "body": "Votre URL d'image unique est générée en quelques millisecondes. Pas d'attente ni de file de traitement : elle est prête dès que votre téléchargement est terminé."
      },
      {
        "title": "Copiez et partagez",
        "body": "Utilisez l'URL de votre image partout sur le web. Collez-la dans des e-mails, intégrez-la sur des sites web ou partagez-la sur les réseaux sociaux."
      }
    ],
    "whyTitle": "Pourquoi utiliser notre générateur",
    "whyItems": [
      {
        "title": "Génération instantanée",
        "body": "Les URL sont prêtes en moins d'une seconde. Notre infrastructure traite votre téléchargement et génère un lien permanent presque instantanément."
      },
      {
        "title": "URL permanentes",
        "body": "Des liens qui n'expirent jamais et ne se brisent pas. Une fois générée, l'URL de votre image fonctionnera pour toujours, sans limite de temps ni date d'expiration."
      },
      {
        "title": "Générateur d'URL en masse",
        "body": "Besoin d'URL pour plusieurs images ? Téléchargez un lot et générez tous vos liens en une seule fois, idéal pour les grands projets."
      },
      {
        "title": "Partage facile",
        "body": "Copiez votre URL en un clic ou récupérez un code d'intégration. Chaque URL fonctionne partout : sites web, forums et applications de messagerie."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Ce générateur d'URL d'image est-il vraiment gratuit ?",
        "a": "Oui, notre service est entièrement gratuit. Il n'y a pas de frais cachés, d'abonnements ou de filigranes ajoutés à vos images."
      },
      {
        "q": "Dois-je créer un compte ?",
        "a": "Aucun compte n'est requis. Vous pouvez télécharger et générer des URL d'image instantanément sans vous inscrire ni fournir d'informations personnelles."
      },
      {
        "q": "Combien de temps les liens d'image restent-ils valides ?",
        "a": "Les liens que nous générons sont permanents. Nous ne supprimons pas vos images, vos liens resteront donc actifs indéfiniment."
      },
      {
        "q": "Quels formats de fichiers sont pris en charge ?",
        "a": "Nous prenons en charge tous les formats d'image courants, y compris JPG, PNG, WebP, GIF et SVG."
      },
      {
        "q": "Puis-je utiliser ces liens pour mon site web ?",
        "a": "Absolument. Nos URL générées sont parfaites pour intégrer des images dans des sites web, des blogs, de la documentation et des fichiers README."
      }
    ],
    "ctaTitle": "Générez votre première URL d'image",
    "ctaBody": "Téléchargez une image et obtenez un lien permanent et partageable en quelques secondes, sans inscription requise.",
    "ctaButton": "Commencer gratuitement"
  },
  "de": {
    "metaTitle": "Kostenloser Bild-zu-URL-Generator — Bilder sofort in URLs umwandeln | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-to-url", "label": "Bild zu URL" },
      { "pageKey": "image-embed-code-generator", "label": "Embed-Code-Generator" },
      { "pageKey": "image-to-link", "label": "Bild zu Link" },
      { "pageKey": "bulk-image-upload", "label": "Massen-Bild-Upload" }
    ],
    "metaDescription": "Kostenloser Bild-zu-URL-Generator. Laden Sie jedes Bild hoch und erhalten Sie in Sekunden einen permanenten, teilbaren Link. Keine Registrierung, kein Wasserzeichen, keine Gebühren. Für Entwickler gemacht.",
    "schemaName": "Kostenloser Bild-zu-URL-Generator",
    "schemaDescription": "Laden Sie jedes Bild hoch und erhalten Sie in Sekunden einen permanenten, teilbaren Link ohne Registrierung oder Gebühren.",
    "badge": "URL-GENERATOR",
    "h1Pre": "Kostenloser Bild-zu-URL-Generator",
    "h1Highlight": "in Sekunden.",
    "intro": "Laden Sie jedes Bild hoch und wandeln Sie es sofort in eine permanente, teilbare URL um. Keine Software-Installation, kein Konto erforderlich – einfach schnelle und zuverlässige Link-Generierung.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Ihr Bild per Drag-and-Drop hinein oder klicken Sie, um Ihre Dateien zu durchsuchen. Wir unterstützen die Formate JPG, PNG, WebP, GIF und SVG."
      },
      {
        "title": "Sofortige URL-Generierung",
        "body": "Ihre eindeutige Bild-URL wird in Millisekunden erstellt. Kein Warten oder Warteschlangen – der Link ist sofort nach Abschluss des Uploads bereit."
      },
      {
        "title": "Kopieren & Teilen",
        "body": "Verwenden Sie Ihre Bild-URL überall im Web. Fügen Sie sie in E-Mails ein, betten Sie sie in Websites ein oder teilen Sie sie in sozialen Medien."
      }
    ],
    "whyTitle": "Warum unser Generator?",
    "whyItems": [
      {
        "title": "Sofortige Generierung",
        "body": "URLs sind in unter einer Sekunde fertig. Unsere Infrastruktur verarbeitet Ihren Upload und generiert den permanenten Link nahezu verzögerungsfrei."
      },
      {
        "title": "Permanente URLs",
        "body": "Links, die niemals ablaufen oder kaputtgehen. Sobald sie generiert sind, funktioniert Ihre Bild-URL für immer – ohne Zeitlimits oder Ablaufdaten."
      },
      {
        "title": "Massen-URL-Generator",
        "body": "Benötigen Sie URLs für mehrere Bilder? Laden Sie eine ganze Gruppe hoch und generieren Sie alle Links auf einmal – perfekt für große Projekte."
      },
      {
        "title": "Einfaches Teilen",
        "body": "Kopieren Sie Ihre URL mit einem Klick oder nutzen Sie den Einbettungscode. Jede URL funktioniert überall – auf Websites, in Foren und Messaging-Apps."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Ist dieser Bild-zu-URL-Generator wirklich kostenlos?",
        "a": "Ja, unser Service ist komplett kostenlos. Es gibt keine versteckten Gebühren, Abonnements oder Wasserzeichen auf Ihren Bildern."
      },
      {
        "q": "Muss ich ein Konto erstellen?",
        "a": "Nein, es ist kein Konto erforderlich. Sie können Bilder sofort hochladen und URLs generieren, ohne sich anzumelden oder persönliche Daten anzugeben."
      },
      {
        "q": "Wie lange sind die Bild-Links gültig?",
        "a": "Die von uns generierten Links sind permanent. Wir löschen Ihre Bilder nicht, daher bleiben Ihre Links auf unbestimmte Zeit aktiv."
      },
      {
        "q": "Welche Dateiformate werden unterstützt?",
        "a": "Wir unterstützen alle gängigen Bildformate, einschließlich JPG, PNG, WebP, GIF und SVG."
      },
      {
        "q": "Kann ich diese Links für meine Website verwenden?",
        "a": "Absolut. Unsere generierten URLs eignen sich perfekt zum Einbetten von Bildern in Websites, Blogs, Dokumentationen und README-Dateien."
      }
    ],
    "ctaTitle": "Generieren Sie Ihre erste Bild-URL",
    "ctaBody": "Laden Sie ein Bild hoch und erhalten Sie in Sekunden einen permanenten, teilbaren Link – ganz ohne Registrierung.",
    "ctaButton": "Kostenlos starten"
  },
  "ja": {
    "metaTitle": "無料画像URL生成ツール — 画像を瞬時にURLへ変換 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-to-url", "label": "画像→URL" },
      { "pageKey": "image-embed-code-generator", "label": "埋め込みコード生成" },
      { "pageKey": "image-to-link", "label": "画像→リンク" },
      { "pageKey": "bulk-image-upload", "label": "一括画像アップロード" }
    ],
    "metaDescription": "無料の画像URL生成ツール。画像をアップロードして、数秒で永続的な共有リンクを取得。登録不要、透かしなし、完全無料。開発者向け。",
    "schemaName": "無料画像URL生成ツール",
    "schemaDescription": "画像をアップロードして、登録や料金なしで数秒で永続的な共有リンクを取得できます。",
    "badge": "URL生成ツール",
    "h1Pre": "無料画像URL生成ツール",
    "h1Highlight": "瞬時に作成。",
    "intro": "画像をアップロードして、永続的な共有可能URLに瞬時に変換。ソフトウェアのインストールやアカウント作成は不要。高速で信頼性の高いリンク生成を提供します。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "画像をドラッグ＆ドロップするか、クリックしてファイルを選択してください。JPG、PNG、WebP、GIF、SVG形式に対応しています。"
      },
      {
        "title": "URLを瞬時に生成",
        "body": "独自の画像URLがミリ秒単位で生成されます。待ち時間や処理待ちのキューはなく、アップロード完了と同時に利用可能です。"
      },
      {
        "title": "コピーして共有",
        "body": "生成された画像URLをWeb上のどこでも使用できます。メールへの貼り付け、Webサイトへの埋め込み、SNSでの共有が可能です。"
      }
    ],
    "whyTitle": "当社の生成ツールが選ばれる理由",
    "whyItems": [
      {
        "title": "高速生成",
        "body": "URLは1秒以内に準備完了。インフラがアップロードを処理し、永続的なリンクをほぼ瞬時に生成します。"
      },
      {
        "title": "永続的なURL",
        "body": "期限切れやリンク切れのないURL。一度生成すれば、時間制限なしで永続的に機能します。"
      },
      {
        "title": "一括URL生成",
        "body": "複数の画像のURLが必要ですか？まとめてアップロードして一度にリンクを生成できるため、大規模なプロジェクトに最適です。"
      },
      {
        "title": "簡単な共有",
        "body": "ワンクリックでURLをコピーしたり、埋め込みコードを取得したりできます。Webサイト、フォーラム、メッセージアプリなど、どこでも利用可能です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "この画像URL生成ツールは本当に無料ですか？",
        "a": "はい、当社のサービスは完全に無料です。隠れた料金やサブスクリプションはなく、画像に透かしが入ることもありません。"
      },
      {
        "q": "アカウント作成は必要ですか？",
        "a": "アカウントは不要です。登録や個人情報の提供なしで、すぐに画像をアップロードしてURLを生成できます。"
      },
      {
        "q": "画像リンクの有効期限はありますか？",
        "a": "生成されるリンクは永続的です。画像を削除することはないため、リンクは無期限で有効です。"
      },
      {
        "q": "対応しているファイル形式は何ですか？",
        "a": "JPG、PNG、WebP、GIF、SVGなど、一般的なすべての画像形式に対応しています。"
      },
      {
        "q": "生成したリンクを自分のWebサイトで使用できますか？",
        "a": "もちろんです。生成されたURLは、Webサイト、ブログ、ドキュメント、READMEファイルへの画像埋め込みに最適です。"
      }
    ],
    "ctaTitle": "最初の画像URLを生成する",
    "ctaBody": "画像をアップロードして、登録不要で数秒で永続的な共有リンクを取得しましょう。",
    "ctaButton": "無料で始める"
  },
  "zh-Hans": {
    "metaTitle": "免费图片转链接生成器 — 立即将图片转换为URL | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-to-url", "label": "图片转 URL" },
      { "pageKey": "image-embed-code-generator", "label": "嵌入代码生成器" },
      { "pageKey": "image-to-link", "label": "图片转链接" },
      { "pageKey": "bulk-image-upload", "label": "批量上传图片" }
    ],
    "metaDescription": "免费图片URL生成器。上传任何图片，几秒钟内即可获得永久、可共享的链接。无需注册，无水印，完全免费。专为开发者打造。",
    "schemaName": "免费图片URL生成器",
    "schemaDescription": "上传任何图片，无需注册或付费，几秒钟内即可获得永久、可共享的链接。",
    "badge": "URL生成器",
    "h1Pre": "免费图片URL生成器",
    "h1Highlight": "秒级生成。",
    "intro": "上传任何图片并立即将其转换为永久、可共享的URL。无需安装软件，无需创建账户，快速且可靠的链接生成服务。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖放图片或点击浏览您的文件。我们支持JPG、PNG、WebP、GIF和SVG格式。"
      },
      {
        "title": "即时生成URL",
        "body": "您的专属图片URL将在毫秒内生成。无需等待或排队，上传完成后即可使用。"
      },
      {
        "title": "复制并分享",
        "body": "在网络上的任何地方使用您的图片URL。将其粘贴到电子邮件中、嵌入网站或在社交媒体上分享。"
      }
    ],
    "whyTitle": "为什么选择我们的生成器",
    "whyItems": [
      {
        "title": "即时生成",
        "body": "URL生成时间不到一秒。我们的基础设施处理您的上传并几乎瞬间生成永久链接。"
      },
      {
        "title": "永久链接",
        "body": "链接永不过期或失效。一旦生成，您的图片URL将永久有效，没有时间限制。"
      },
      {
        "title": "批量URL生成",
        "body": "需要为多张图片生成URL？批量上传并一次性生成所有链接，非常适合大型项目。"
      },
      {
        "title": "轻松分享",
        "body": "一键复制您的URL或获取嵌入代码。每个URL都适用于任何地方，包括网站、论坛和通讯应用。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "这个图片URL生成器真的是免费的吗？",
        "a": "是的，我们的服务完全免费。没有任何隐藏费用、订阅要求，也不会在您的图片上添加水印。"
      },
      {
        "q": "我需要创建账户吗？",
        "a": "无需账户。您可以立即上传并生成图片URL，无需注册或提供个人信息。"
      },
      {
        "q": "图片链接有效期多久？",
        "a": "我们生成的链接是永久的。我们不会删除您的图片，因此您的链接将无限期保持有效。"
      },
      {
        "q": "支持哪些文件格式？",
        "a": "我们支持所有常见的图片格式，包括JPG、PNG、WebP、GIF和SVG。"
      },
      {
        "q": "我可以在我的网站上使用这些链接吗？",
        "a": "当然可以。我们生成的URL非常适合将图片嵌入到网站、博客、文档和README文件中。"
      }
    ],
    "ctaTitle": "生成您的第一个图片URL",
    "ctaBody": "上传图片，几秒钟内即可获得永久、可共享的链接，无需注册。",
    "ctaButton": "免费开始"
  }
} as LandingContentMap;
