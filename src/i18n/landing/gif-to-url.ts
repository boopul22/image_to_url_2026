import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "GIF to URL — Get a Direct Link That Stays Animated | ImageToURL",
    "metaDescription": "Turn a GIF to URL or a GIF to link in seconds. The direct link plays the animation inline in Discord, Reddit, and forums. Free, no signup, GIFs up to 10MB.",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-to-url", "label": "Turn any image into a link" },
      { "pageKey": "png-to-url", "label": "PNG to URL" },
      { "pageKey": "jpg-to-url", "label": "JPG to URL" },
      { "pageKey": "webp-to-url", "label": "WebP to URL" }
    ],
    "schemaName": "GIF to URL Converter",
    "schemaDescription": "Convert a GIF to a URL or direct link that stays animated. Free hosting with no signup, no watermark, and inline playback in Discord, Reddit, and forums.",
    "badge": "GIF HOSTING",
    "h1Pre": "GIF to URL — ",
    "h1Highlight": "a direct link that stays animated",
    "intro": "Our GIF to URL tool hands you a direct link that still plays the animation, not a frozen first frame. Drop the GIF to link straight into Discord, Reddit, or a forum and it loops inline like it should. No signup, no watermark, and nothing gets compressed.",
    "howTitle": "How the GIF to URL tool works",
    "steps": [
      {
        "title": "Drop in your GIF",
        "body": "Drag the animated GIF onto the box or click to browse. Anything up to 10MB works, and you stay anonymous - no account needed."
      },
      {
        "title": "Grab the direct link",
        "body": "Upload finishes in a couple of seconds and you get a direct .gif URL on our CDN. Copy it with one tap."
      },
      {
        "title": "Paste it where you chat",
        "body": "Drop the link into Discord, Reddit, Slack, a forum, or raw HTML. The GIF plays right there in the message instead of sitting as a flat thumbnail."
      }
    ],
    "whyTitle": "Why use this GIF to URL tool",
    "whyItems": [
      {
        "title": "The animation survives",
        "body": "We don't re-encode or flatten anything. Every frame in your GIF stays put, so the link animates exactly like the file on your machine."
      },
      {
        "title": "One direct GIF to link, ready to embed",
        "body": "You get a clean .gif link that hotlinks anywhere. Forums, wikis, Discord, Reddit - paste it and the GIF loads as a real moving image."
      },
      {
        "title": "Free with room to breathe",
        "body": "Upload GIFs up to 10MB at no cost. No watermark stamped on top, no signup wall, no compression eating your colors."
      }
    ],
    "useCasesTitle": "What you can do with a GIF to URL link",
    "useCasesIntro": "Once your GIF has a direct link, it travels anywhere that reads a URL:",
    "useCases": [
      {
        "title": "React in Discord and Slack",
        "body": "Paste the GIF to link in a channel and it loops inline. Handy for reaction GIFs, quick demos, or a bug repro your team can watch without downloading anything."
      },
      {
        "title": "Post moving images on Reddit and forums",
        "body": "Most forums won't host a GIF for you. Drop in the direct link instead and the animation shows up in your post, not a dead attachment icon."
      },
      {
        "title": "Embed in HTML, wikis, and READMEs",
        "body": "Use the .gif URL in an img tag or Markdown and the animation plays on the page. Good for docs, tutorials, and project pages that need a short looping clip."
      }
    ],
    "specsTitle": "GIF to URL at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Formats", "value": "Animated and static GIF" },
      { "label": "Max size", "value": "10 MB" },
      { "label": "Output", "value": "Direct .gif CDN link" }
    ],
    "comparisonTitle": "GIF hosts compared",
    "comparisonIntro": "Plenty of hosts will take a GIF and hand back a link. Where they part ways is whether you need an account, how big a file you can drop, and whether the link still moves. Some quietly turn a GIF into a video to save space, which breaks a plain img tag. Here's how the common ones line up.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Keeps animation",
      "Direct hotlink",
      "Link lifetime"
    ],
    "comparisonRows": [
      { "cells": ["ImageToURL", "Yes", "10 MB", "Yes", "Yes", "Weeks free, forever when signed in"] },
      { "cells": ["Imgur", "No (since 2023)", "20 MB", "Converts to MP4/GIFV", "Limited", "Tied to your account"] },
      { "cells": ["ImgBB", "Yes", "32 MB", "Yes", "Yes", "Optional expiry"] },
      { "cells": ["Catbox", "Yes", "200 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["Postimages", "Yes", "24 MB", "Yes (resized)", "No (resized to 1280px)", "Permanent"] }
    ],
    "sections": [
      {
        "heading": "What is a GIF URL?",
        "body": "A GIF URL is a direct web address that ends in .gif and points at the animated file itself, not a page that wraps around it. Because it links to the raw file, a browser, a Discord channel, or a forum loads it and the loop starts on its own. A normal page link does the opposite: it opens a gallery or a download screen you have to click through. The link you get here is the direct kind. Paste it in an img tag, a Markdown image, or a chat box and the animation runs in place, exactly the way it does on your own machine."
      },
      {
        "heading": "Does the animation still play from the link?",
        "body": "Yes. The file goes onto our CDN byte for byte, with no re-encoding, so every frame stays intact and the loop runs the moment the link loads. Some hosts quietly turn larger GIFs into MP4 or a custom video wrapper to save space, which can strip the loop or break a plain img tag. We don't touch the file. The real catch with GIF is its own weight: the format is old and inefficient, so a few seconds of footage can run several megabytes. Keep it under 10MB and the link hotlinks cleanly everywhere you drop it."
      },
      {
        "heading": "GIF vs WebP and MP4 for animation",
        "body": "GIF is the most compatible animated format, but it is not the smallest. It caps out at 256 colors per frame, so gradients and video-style clips can look banded, and the files get heavy fast. Animated WebP and MP4 both compress far better at higher quality, often a fifth of the size. The trade-off is reach: a raw GIF link plays in nearly every chat app, forum, and email client, while WebP and MP4 still trip up a few older tools. If you need it to work everywhere with zero fuss, GIF is still the safe pick."
      }
    ],
    "faqTitle": "GIF to URL questions, answered",
    "faqs": [
      {
        "q": "How do I convert a GIF to a link?",
        "a": "Drop your GIF into the box above or click to browse. In a couple of seconds you get a direct GIF to link you can copy and paste anywhere. No signup, no watermark."
      },
      {
        "q": "Does the GIF stay animated after I get the URL?",
        "a": "Yes. We keep every frame and never re-encode the file, so the link plays the full animation, not a single still frame."
      },
      {
        "q": "Will the GIF link play inline in Discord and Reddit?",
        "a": "It does. The direct .gif URL embeds and loops right in the message or post on Discord, Reddit, Slack, and most forums."
      },
      {
        "q": "Can I use the GIF URL in an img tag or Markdown?",
        "a": "Yes. It's a plain direct .gif link, so it works in an HTML <img src> tag, Markdown image syntax, a wiki, or a forum signature, and the animation plays right on the page."
      },
      {
        "q": "What's the largest GIF I can upload?",
        "a": "Up to 10MB per GIF. That covers most reaction clips and short loops. GIF is a heavy format, so longer or full-screen clips can blow past the limit fast."
      },
      {
        "q": "Why is my GIF file so large?",
        "a": "GIF stores each frame as a near-full image and tops out at 256 colors, so it has no real video compression. A short, smooth clip can easily run several megabytes. Trimming the length, dropping the frame rate, or cropping the canvas is the usual fix before uploading."
      },
      {
        "q": "Does the tool compress the GIF or change its colors?",
        "a": "No. You get back the same file you put in, with the same frames, timing, and palette. Nothing is re-encoded and there's no watermark, which is different from hosts that re-render or resize hotlinked GIFs."
      },
      {
        "q": "How long does the GIF link stay live?",
        "a": "Anonymous links last at least a couple of weeks and are cleared on a monthly storage cleanup. Want one that never expires? Make a free account and choose 'keep forever' when you upload. Either way, keep your own copy of the GIF as a backup."
      },
      {
        "q": "Is the GIF to URL tool really free?",
        "a": "Yes, completely free. No account, no watermark, and nothing gets compressed on the way through."
      },
      {
        "q": "Should I use WebP or MP4 instead of GIF?",
        "a": "If you control where it's posted and want smaller files at better quality, animated WebP or MP4 win easily. But a raw GIF link plays in the most places with no fallback needed, so for chats, forums, and email it's still the most reliable choice."
      },
      {
        "q": "Can I hotlink the GIF on my own website?",
        "a": "Go ahead. The link is hotlink-friendly, so you can use it in an img tag, a wiki, or a forum signature and the GIF loads straight from our CDN."
      }
    ],
    "ctaTitle": "Convert your GIF to URL now",
    "ctaBody": "Upload an animated GIF and get a direct link that keeps moving, free and with no signup. Paste it into Discord, Reddit, or any forum and watch it loop.",
    "ctaButton": "Upload GIF Now",
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "GIF a URL — Aloja GIFs animados y obtén enlaces directos | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-to-url", "label": "Convertir cualquier imagen en enlace" },
      { "pageKey": "png-to-url", "label": "PNG a URL" },
      { "pageKey": "jpg-to-url", "label": "JPG a URL" },
      { "pageKey": "webp-to-url", "label": "WebP a URL" }
    ],
    "metaDescription": "Aloja GIFs animados y obtén enlaces compartibles al instante. Animación completa preservada, enlaces directos para incrustar en cualquier lugar. Alojamiento de GIF gratuito, sin registro.",
    "schemaName": "GIF a URL",
    "schemaDescription": "Aloja GIFs animados y obtén enlaces directos al instante con preservación total de la animación y enlaces para incrustar.",
    "badge": "ALOJAMIENTO DE GIF",
    "h1Pre": "GIF a URL",
    "h1Highlight": "— animaciones preservadas.",
    "intro": "Sube tus GIFs animados y obtén URLs directas y permanentes al instante. Cada fotograma se conserva con entrega rápida vía CDN para incrustar gratis en cualquier lugar.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu GIF",
        "body": "Arrastra y suelta o haz clic para seleccionar tu GIF animado. Admitimos todos los recuentos de fotogramas y animaciones de hasta 10MB."
      },
      {
        "title": "Obtén tu URL",
        "body": "Tu GIF se sube a nuestra CDN global al instante. Se genera automáticamente una URL .gif directa y permanente."
      },
      {
        "title": "Incrusta en cualquier lugar",
        "body": "Copia tu URL e incrustala en Discord, Reddit, foros, páginas HTML o compártela directamente en mensajes."
      }
    ],
    "whyTitle": "¿Por qué alojar GIFs con nosotros?",
    "whyItems": [
      {
        "title": "Soporte completo de animación",
        "body": "Cada fotograma de tu GIF animado se conserva. Sin conversiones, sin pérdida de calidad y sin eliminar fotogramas."
      },
      {
        "title": "Incrustación directa",
        "body": "Obtén URLs .gif directas que se incrustan perfectamente en foros, Discord, Reddit y páginas HTML."
      },
      {
        "title": "Sin sorpresas de tamaño",
        "body": "Sube GIFs de hasta 10MB. Nosotros gestionamos el ancho de banda para que tus animaciones carguen rápido en todas partes."
      },
      {
        "title": "Compatible con hotlinking",
        "body": "Nuestras URLs admiten hotlinking, lo que te permite incrustar GIFs en cualquier sitio web, wiki o foro sin restricciones."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿ImageToURL preserva las animaciones GIF?",
        "a": "Sí, cada fotograma de tu GIF animado se conserva exactamente como se subió. Nunca convertimos, comprimimos ni eliminamos fotogramas de tus animaciones."
      },
      {
        "q": "¿Hay un límite en el número de fotogramas de un GIF?",
        "a": "No hay límite de fotogramas. Mientras tu archivo GIF esté dentro del límite de tamaño, todos los fotogramas se conservarán."
      },
      {
        "q": "¿Puedo incrustar mi GIF en Discord o Reddit?",
        "a": "Absolutamente. Tu URL de GIF es un enlace directo que se incrusta automáticamente en Discord, Reddit, Slack y la mayoría de las otras plataformas."
      },
      {
        "q": "¿Las URLs de los GIF son permanentes?",
        "a": "Sí. Una vez subido, tu URL de GIF nunca caduca. Permanece accesible y compartible indefinidamente."
      },
      {
        "q": "¿Puedo subir archivos GIF grandes?",
        "a": "Las subidas anónimas gratuitas admiten GIFs de hasta 2MB. Crea una cuenta gratuita para subir GIFs de hasta 10MB."
      }
    ],
    "ctaTitle": "Aloja tu GIF animado en segundos",
    "ctaBody": "Sube tu GIF y obtén un enlace permanente e incrustable sin registro, sin pérdida de fotogramas y sin trucos.",
    "ctaButton": "Subir GIF ahora"
  },
  "fr": {
    "metaTitle": "GIF vers URL — Hébergez vos GIF animés et obtenez des liens directs | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-to-url", "label": "Convertir n'importe quelle image en lien" },
      { "pageKey": "png-to-url", "label": "PNG vers URL" },
      { "pageKey": "jpg-to-url", "label": "JPG vers URL" },
      { "pageKey": "webp-to-url", "label": "WebP vers URL" }
    ],
    "metaDescription": "Hébergez vos GIF animés et obtenez instantanément des URL partageables. Animation préservée, liens directs pour intégration partout. Hébergement GIF gratuit, sans inscription.",
    "schemaName": "GIF vers URL",
    "schemaDescription": "Hébergez vos GIF animés et obtenez des URL directes instantanées avec préservation totale de l'animation pour l'intégration.",
    "badge": "HÉBERGEMENT GIF",
    "h1Pre": "GIF vers URL",
    "h1Highlight": "— animations préservées.",
    "intro": "Téléchargez vos GIF animés et obtenez instantanément des URL directes et permanentes. Chaque image est préservée avec une diffusion CDN rapide pour une intégration gratuite partout.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre GIF",
        "body": "Glissez-déposez ou cliquez pour sélectionner votre GIF animé. Nous prenons en charge tous les nombres d'images et les animations jusqu'à 10 Mo."
      },
      {
        "title": "Obtenez votre URL",
        "body": "Votre GIF est instantanément téléchargé sur notre CDN mondial. Une URL .gif directe et permanente est générée automatiquement."
      },
      {
        "title": "Intégrez partout",
        "body": "Copiez votre URL et intégrez-la sur Discord, Reddit, des forums, des pages HTML, ou partagez-la directement dans vos messages."
      }
    ],
    "whyTitle": "Pourquoi héberger vos GIF chez nous ?",
    "whyItems": [
      {
        "title": "Support complet de l'animation",
        "body": "Chaque image de votre GIF animé est préservée. Aucune conversion, aucune perte de qualité et aucune suppression d'image."
      },
      {
        "title": "Intégration directe",
        "body": "Obtenez des URL .gif directes qui s'intègrent parfaitement sur les forums, Discord, Reddit et les pages HTML."
      },
      {
        "title": "Pas de surprise sur la taille",
        "body": "Téléchargez des GIF jusqu'à 10 Mo. Nous gérons la bande passante pour que vos animations se chargent rapidement partout."
      },
      {
        "title": "Compatible avec le hotlinking",
        "body": "Nos URL supportent le hotlinking, vous permettant d'intégrer des GIF sur n'importe quel site web, wiki ou forum sans restriction."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "ImageToURL préserve-t-il les animations GIF ?",
        "a": "Oui, chaque image de votre GIF animé est préservée exactement comme lors du téléchargement. Nous ne convertissons, ne compressons et ne supprimons jamais d'images de vos animations."
      },
      {
        "q": "Y a-t-il une limite au nombre d'images dans un GIF ?",
        "a": "Aucune limite d'images. Tant que votre fichier GIF respecte la limite de taille, toutes les images sont conservées."
      },
      {
        "q": "Puis-je intégrer mon GIF sur Discord ou Reddit ?",
        "a": "Absolument. Votre URL GIF est un lien direct qui s'intègre automatiquement sur Discord, Reddit, Slack et la plupart des autres plateformes."
      },
      {
        "q": "Les URL GIF sont-elles permanentes ?",
        "a": "Oui. Une fois téléchargé, votre URL GIF n'expire jamais. Elle reste accessible et partageable indéfiniment."
      },
      {
        "q": "Puis-je télécharger de gros fichiers GIF ?",
        "a": "Les téléchargements anonymes gratuits supportent les GIF jusqu'à 2 Mo. Créez un compte gratuit pour télécharger des GIF jusqu'à 10 Mo."
      }
    ],
    "ctaTitle": "Hébergez votre GIF animé en quelques secondes",
    "ctaBody": "Téléchargez votre GIF et obtenez un lien permanent et intégrable sans inscription, sans perte d'image et sans piège.",
    "ctaButton": "Télécharger le GIF maintenant"
  },
  "de": {
    "metaTitle": "GIF zu URL — Animierte GIFs hosten & Direktlinks erhalten | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-to-url", "label": "Jedes Bild in einen Link umwandeln" },
      { "pageKey": "png-to-url", "label": "PNG zu URL" },
      { "pageKey": "jpg-to-url", "label": "JPG zu URL" },
      { "pageKey": "webp-to-url", "label": "WebP zu URL" }
    ],
    "metaDescription": "Hosten Sie animierte GIFs und erhalten Sie sofort teilbare URLs. Volle Animation bleibt erhalten, Direktlinks zum Einbetten überall. Kostenloses GIF-Hosting, keine Registrierung erforderlich.",
    "schemaName": "GIF zu URL",
    "schemaDescription": "Hosten Sie animierte GIFs und erhalten Sie sofort teilbare URLs mit voller Animationserhaltung und Direktlinks zum Einbetten.",
    "badge": "GIF-HOSTING",
    "h1Pre": "GIF zu URL",
    "h1Highlight": "— Animationen bleiben erhalten.",
    "intro": "Laden Sie Ihre animierten GIFs hoch und erhalten Sie sofort permanente Direkt-URLs. Jeder Frame bleibt erhalten, mit schneller CDN-Bereitstellung für kostenloses Einbetten überall.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Laden Sie Ihr GIF hoch",
        "body": "Ziehen Sie Ihr animiertes GIF per Drag & Drop oder klicken Sie, um es auszuwählen. Wir unterstützen alle Frame-Anzahlen und Animationen bis zu 10 MB."
      },
      {
        "title": "Erhalten Sie Ihre URL",
        "body": "Ihr GIF wird sofort auf unser globales CDN hochgeladen. Eine permanente, direkte .gif-URL wird automatisch generiert."
      },
      {
        "title": "Überall einbetten",
        "body": "Kopieren Sie Ihre URL und betten Sie sie in Discord, Reddit, Foren, HTML-Seiten ein oder teilen Sie sie direkt in Nachrichten."
      }
    ],
    "whyTitle": "Warum GIFs bei uns hosten?",
    "whyItems": [
      {
        "title": "Volle Animationsunterstützung",
        "body": "Jeder Frame Ihres animierten GIFs bleibt erhalten. Keine Konvertierung, kein Qualitätsverlust und kein Weglassen von Frames."
      },
      {
        "title": "Direktes Einbetten",
        "body": "Erhalten Sie direkte .gif-URLs, die perfekt in Foren, Discord, Reddit und HTML-Seiten eingebettet werden können."
      },
      {
        "title": "Keine Überraschungen bei der Dateigröße",
        "body": "Laden Sie GIFs bis zu 10 MB hoch. Wir kümmern uns um die Bandbreite, damit Ihre Animationen überall schnell laden."
      },
      {
        "title": "Hotlink-freundlich",
        "body": "Unsere URLs unterstützen Hotlinking, sodass Sie GIFs ohne Einschränkungen auf jeder Website, jedem Wiki oder Forum einbetten können."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Bewahrt ImageToURL GIF-Animationen?",
        "a": "Ja, jeder Frame Ihres animierten GIFs bleibt exakt so erhalten, wie er hochgeladen wurde. Wir konvertieren, komprimieren oder entfernen niemals Frames aus Ihren Animationen."
      },
      {
        "q": "Gibt es ein Limit für die Anzahl der Frames in einem GIF?",
        "a": "Kein Frame-Limit. Solange Ihre GIF-Datei innerhalb des Größenlimits liegt, bleiben alle Frames erhalten."
      },
      {
        "q": "Kann ich mein GIF in Discord oder Reddit einbetten?",
        "a": "Absolut. Ihre GIF-URL ist ein Direktlink, der automatisch in Discord, Reddit, Slack und den meisten anderen Plattformen eingebettet wird."
      },
      {
        "q": "Sind GIF-URLs permanent?",
        "a": "Ja. Sobald sie hochgeladen wurden, laufen Ihre GIF-URLs niemals ab. Sie bleiben unbegrenzt zugänglich und teilbar."
      },
      {
        "q": "Kann ich große GIF-Dateien hochladen?",
        "a": "Kostenlose anonyme Uploads unterstützen GIFs bis zu 2 MB. Erstellen Sie ein kostenloses Konto, um GIFs bis zu 10 MB hochzuladen."
      }
    ],
    "ctaTitle": "Hosten Sie Ihr animiertes GIF in Sekunden",
    "ctaBody": "Laden Sie Ihr GIF hoch und erhalten Sie einen permanenten, einbettbaren Link ohne Registrierung, ohne Frame-Verlust und ohne Haken.",
    "ctaButton": "Jetzt GIF hochladen"
  },
  "ja": {
    "metaTitle": "GIF to URL — アニメーションGIFのホスティングと直リンク取得 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-to-url", "label": "画像をリンクに変換" },
      { "pageKey": "png-to-url", "label": "PNG→URL" },
      { "pageKey": "jpg-to-url", "label": "JPG→URL" },
      { "pageKey": "webp-to-url", "label": "WebP→URL" }
    ],
    "metaDescription": "アニメーションGIFをアップロードして、すぐに共有可能なURLを取得。アニメーションを完全に保持し、どこでも埋め込み可能な直リンクを提供します。登録不要の無料GIFホスティング。",
    "schemaName": "GIF to URL",
    "schemaDescription": "アニメーションGIFをアップロードして、アニメーションを完全に保持したまま、すぐに共有可能な直リンクを取得できます。",
    "badge": "GIFホスティング",
    "h1Pre": "GIF to URL",
    "h1Highlight": "— アニメーションをそのまま保持。",
    "intro": "アニメーションGIFをアップロードして、永続的な直リンクを即座に取得。すべてのフレームが保持され、高速なCDN配信により、どこでも無料で埋め込み可能です。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "GIFをアップロード",
        "body": "ドラッグ＆ドロップ、またはクリックしてアニメーションGIFを選択してください。最大10MBまでのあらゆるフレーム数とアニメーションに対応しています。"
      },
      {
        "title": "URLを取得",
        "body": "GIFは即座にグローバルCDNへアップロードされます。永続的な.gif直リンクが自動的に生成されます。"
      },
      {
        "title": "どこでも埋め込み",
        "body": "URLをコピーして、Discord、Reddit、掲示板、HTMLページに埋め込んだり、メッセージで直接共有したりできます。"
      }
    ],
    "whyTitle": "当社のGIFホスティングが選ばれる理由",
    "whyItems": [
      {
        "title": "完全なアニメーション対応",
        "body": "アニメーションGIFのすべてのフレームを保持します。変換や画質の劣化、フレームの欠落は一切ありません。"
      },
      {
        "title": "直接埋め込み",
        "body": "掲示板、Discord、Reddit、HTMLページで完璧に表示される.gif直リンクを提供します。"
      },
      {
        "title": "ファイルサイズ制限も安心",
        "body": "最大10MBまでのGIFをアップロード可能。帯域幅は当社が管理するため、どこでも高速に読み込まれます。"
      },
      {
        "title": "ホットリンク対応",
        "body": "当社のURLはホットリンクをサポートしており、制限なしでウェブサイト、Wiki、掲示板にGIFを埋め込めます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "ImageToURLはGIFのアニメーションを保持しますか？",
        "a": "はい。アップロードされたアニメーションGIFのすべてのフレームがそのまま保持されます。変換や圧縮、フレームの削除は行いません。"
      },
      {
        "q": "GIFのフレーム数に制限はありますか？",
        "a": "フレーム数に制限はありません。ファイルサイズ制限内であれば、すべてのフレームが保持されます。"
      },
      {
        "q": "DiscordやRedditにGIFを埋め込めますか？",
        "a": "もちろんです。取得したGIF URLは直リンクであり、Discord、Reddit、Slackなどのプラットフォームで自動的に埋め込まれます。"
      },
      {
        "q": "GIFのURLは永続的ですか？",
        "a": "はい。一度アップロードされたGIF URLの有効期限はありません。無期限でアクセスおよび共有が可能です。"
      },
      {
        "q": "大きなGIFファイルをアップロードできますか？",
        "a": "匿名での無料アップロードは最大2MBまで対応しています。無料アカウントを作成すると、最大10MBまでのGIFをアップロード可能です。"
      }
    ],
    "ctaTitle": "数秒でアニメーションGIFをホスト",
    "ctaBody": "登録不要、フレーム欠落なし。GIFをアップロードして、永続的で埋め込み可能なリンクを取得しましょう。",
    "ctaButton": "今すぐGIFをアップロード"
  },
  "zh-Hans": {
    "metaTitle": "GIF 转 URL — 托管动态 GIF 并获取直链 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-to-url", "label": "将任意图片转为链接" },
      { "pageKey": "png-to-url", "label": "PNG 转 URL" },
      { "pageKey": "jpg-to-url", "label": "JPG 转 URL" },
      { "pageKey": "webp-to-url", "label": "WebP 转 URL" }
    ],
    "metaDescription": "托管动态 GIF 并立即获取可分享的 URL。完整保留动画效果，提供适用于任何地方嵌入的直链。免费 GIF 托管，无需注册。",
    "schemaName": "GIF to URL",
    "schemaDescription": "托管动态 GIF 并立即获取可完整保留动画效果的直链，方便嵌入到任何地方。",
    "badge": "GIF 托管",
    "h1Pre": "GIF 转 URL",
    "h1Highlight": "— 完整保留动画。",
    "intro": "上传您的动态 GIF 并立即获取永久直链。每一帧都将得到保留，并通过快速 CDN 分发，免费嵌入到任何地方。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的 GIF",
        "body": "拖放或点击选择您的动态 GIF。我们支持所有帧数，最大支持 10MB 的动画文件。"
      },
      {
        "title": "获取您的 URL",
        "body": "您的 GIF 将立即上传到我们的全球 CDN。系统会自动生成一个永久的 .gif 直链。"
      },
      {
        "title": "随处嵌入",
        "body": "复制您的 URL，即可将其嵌入到 Discord、Reddit、论坛、HTML 页面中，或直接在消息中分享。"
      }
    ],
    "whyTitle": "为什么选择我们托管 GIF？",
    "whyItems": [
      {
        "title": "完整动画支持",
        "body": "完整保留动态 GIF 的每一帧。无需转换，无质量损失，不丢帧。"
      },
      {
        "title": "直接嵌入",
        "body": "获取可完美嵌入论坛、Discord、Reddit 和 HTML 页面的 .gif 直链。"
      },
      {
        "title": "无文件大小烦恼",
        "body": "支持上传最大 10MB 的 GIF。我们处理带宽问题，确保您的动画在任何地方都能快速加载。"
      },
      {
        "title": "支持外链",
        "body": "我们的 URL 支持外链，允许您在任何网站、维基或论坛中无限制地嵌入 GIF。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "ImageToURL 是否保留 GIF 动画？",
        "a": "是的，动态 GIF 的每一帧都将按照上传时的原样保留。我们绝不会转换、压缩或丢弃动画中的任何帧。"
      },
      {
        "q": "GIF 的帧数有限制吗？",
        "a": "没有帧数限制。只要您的 GIF 文件在大小限制内，所有帧都会被保留。"
      },
      {
        "q": "我可以将 GIF 嵌入到 Discord 或 Reddit 吗？",
        "a": "当然可以。您的 GIF URL 是一个直链，可以在 Discord、Reddit、Slack 和大多数其他平台中自动嵌入。"
      },
      {
        "q": "GIF URL 是永久的吗？",
        "a": "是的。一旦上传，您的 GIF URL 永不过期。它将无限期保持可访问和可分享状态。"
      },
      {
        "q": "我可以上传大型 GIF 文件吗？",
        "a": "免费匿名上传支持最大 2MB 的 GIF。注册免费账户即可上传最大 10MB 的 GIF。"
      }
    ],
    "ctaTitle": "几秒钟内托管您的动态 GIF",
    "ctaBody": "上传您的 GIF，获取永久、可嵌入的链接，无需注册，无帧丢失，没有任何附加条件。",
    "ctaButton": "立即上传 GIF"
  }
} as LandingContentMap;
