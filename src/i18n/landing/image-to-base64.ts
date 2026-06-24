import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to Base64 - 100% Browser | Free Encoder",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-compressor", "label": "Image compressor" },
      { "pageKey": "image-resizer", "label": "Image resizer" },
      { "pageKey": "base64-to-image", "label": "Base64 to image" },
      { "pageKey": "favicon-generator", "label": "Favicon generator" }
    ],
    "metaDescription": "Convert any PNG, JPG, GIF, SVG, or WebP image to a base64 data URI you can paste into CSS, HTML, or JSON. Instant, free, runs in your browser, no upload.",
    "schemaName": "Image to Base64 Encoder",
    "schemaDescription": "Encode images as base64 data URIs locally in your browser.",
    "badge": "Browser-only Tool",
    "h1Pre": "Image to Base64",
    "h1Highlight": "instant data URI.",
    "intro": "Drop an image and you get back a Base64 data URI you can paste straight into CSS, an HTML <img src>, a JSON config, an SVG, or an email template. The string starts with data:image/png;base64, and contains the whole picture as text, so the browser reads it without a separate file request. Everything runs in your browser, so nothing is uploaded and the encoding is instant. This is the encode direction: image goes in, a data URI comes out.",
    "specsTitle": "Image to Base64 at a glance",
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
        "value": "Base64 data URI"
      }
    ],
    "howTitle": "How to convert an image to Base64",
    "steps": [
      {
        "title": "Drop an image",
        "body": "Drag a PNG, JPG, WebP, GIF or SVG onto the box, or click to pick one. It stays on your device - the file is read locally, not sent to a server."
      },
      {
        "title": "Copy the data URI",
        "body": "The full data:image/...;base64,... string appears in the output box. Hit copy and the whole encoded image lands on your clipboard as plain text."
      },
      {
        "title": "Paste it where you need it",
        "body": "Drop the string into a CSS url(), an HTML <img src>, a JSON value, an inline SVG or an email template. The image shows up with no extra request."
      }
    ],
    "whyTitle": "When Base64 is the right call",
    "whyItems": [
      {
        "title": "Tiny inline icons",
        "body": "For a sub-1KB icon or a small UI sprite, inlining the data URI saves a round trip to the server. The image is part of the file that already loaded."
      },
      {
        "title": "Email HTML",
        "body": "Many email clients block linked external images. A data URI travels inside the message, so a small logo or signature graphic renders without a remote fetch."
      },
      {
        "title": "Single-file embeds",
        "body": "When you want one self-contained HTML or SVG with no separate asset folder, Base64 lets you fold the picture into the source. Handy for a quick demo or a bookmarklet."
      },
      {
        "title": "Critical background images",
        "body": "A small CSS background that has to paint immediately can be inlined as background-image: url('data:...') so it does not wait on a second request."
      }
    ],
    "comparisonTitle": "Base64 data URI vs a hosted URL",
    "comparisonIntro": "Encoding an image as Base64 and hosting it somewhere both put a picture in your page, but they suit very different jobs. The data URI lives inside your code; a hosted link is a separate file the browser fetches and caches. Here is when each one wins.",
    "comparisonColumns": [
      "Method",
      "Needs hosting",
      "Good for",
      "Downsides"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Base64 data URI",
          "No hosting",
          "Tiny inline icons, email, single-file embeds",
          "Bloats HTML, ~33% bigger, not cached separately"
        ]
      },
      {
        "cells": [
          "Hosted image URL",
          "Needs a host",
          "Large or repeated images, sharing a link",
          "One extra request, but the file is cacheable"
        ]
      },
      {
        "cells": [
          "Inline SVG (no Base64)",
          "No hosting",
          "Vector icons and logos",
          "Only works for SVG, clutters markup"
        ]
      }
    ],
    "useCasesTitle": "Where a Base64 data URI fits",
    "useCasesIntro": "Once an image is a string of text, it drops into places a file path cannot reach:",
    "useCases": [
      {
        "title": "CSS and stylesheets",
        "body": "Inline a small background or a custom cursor with background-image: url('data:image/png;base64,...'). One fewer request, and the style ships with the rule."
      },
      {
        "title": "HTML and email",
        "body": "Put the string in <img src=\"data:image/...\"> so the picture is baked into the page or the message. Good for a logo that must show even when remote images are blocked."
      },
      {
        "title": "JSON and config files",
        "body": "Store a small avatar or icon as a Base64 value inside a JSON payload or a config object, so the data travels with the rest of your settings."
      }
    ],
    "sections": [
      {
        "heading": "What is a Base64 image?",
        "body": "A Base64 image is the binary contents of a picture rewritten as plain text. The encoder reads the raw bytes of your PNG, JPG or SVG and maps them to a 64-character alphabet of letters, digits, plus and slash. The result is wrapped in a data URI that names the type, like data:image/png;base64, followed by the encoded text. Because it is text, you can paste it anywhere a string is allowed - CSS, an HTML attribute, a JSON field. The browser decodes it back to the original image when it renders, so there is no separate file and no extra network request."
      },
      {
        "heading": "When to use Base64 vs a URL",
        "body": "Reach for Base64 when the image is small and tied to one place: a sub-1KB icon, an email logo, a single self-contained HTML file. Inlining saves a request and keeps everything in one piece. Reach for a hosted URL when the image is large, shared across many pages, or something you want to send as a link. A hosted file is cached by the browser, so it loads once and is reused, while a data URI is re-parsed everywhere it appears. If you mainly want a short link to share, the main uploader gives you a direct https URL instead."
      },
      {
        "heading": "Why Base64 makes files about 33% bigger",
        "body": "Base64 trades size for portability. It takes every 3 bytes of binary data and writes them as 4 ASCII characters, so the encoded text is roughly one-third larger than the original file. A 9 KB image becomes about 12 KB of string. That overhead is fine for a tiny icon but adds up fast for photos, and unlike a real file the inline string is not cached on its own. This is why Base64 is a poor fit for large or repeated images: it bloats the HTML, slows down parsing, and the browser cannot reuse it the way it reuses a hosted file."
      }
    ],
    "faqTitle": "Image to Base64 FAQ",
    "faqs": [
      {
        "q": "What is a Base64 image data URI?",
        "a": "It is an image rewritten as text and wrapped in a data: URI, like data:image/png;base64,iVBORw0KGgo... The prefix tells the browser the type, and the long string is the picture encoded in Base64. You can paste it anywhere a string is accepted instead of linking to a file."
      },
      {
        "q": "How do I convert an image to Base64?",
        "a": "Drop your PNG, JPG, WebP, GIF or SVG in the box above. The tool reads it in your browser and shows the full data:image/...;base64,... string in the output box. Copy it and paste it into your CSS, HTML, JSON or email."
      },
      {
        "q": "Is my image uploaded anywhere?",
        "a": "No. The encoding happens locally in your browser with the FileReader API, so the file never leaves your device. That makes it safe for private or work images and means it works offline once the page has loaded."
      },
      {
        "q": "When should I use Base64 instead of a hosted URL?",
        "a": "Use Base64 for tiny inline assets - small icons, an email logo, a single self-contained file. Use a hosted URL for large images, anything repeated across pages, or a link you want to share, since hosted files are cached and do not bloat your markup."
      },
      {
        "q": "Why is the Base64 string so long?",
        "a": "Base64 encodes 3 bytes of binary as 4 text characters, so the output is about 33% larger than the original file. That is the cost of turning binary into something you can paste as text. For big images the string gets unwieldy fast."
      },
      {
        "q": "How do I use a data URI in CSS?",
        "a": "Paste it inside url(), for example background-image: url('data:image/png;base64,...'). It works for backgrounds, list markers, custom cursors and mask images, and saves one network request for small graphics."
      },
      {
        "q": "How do I use a data URI in HTML?",
        "a": "Put the whole string in the src attribute: <img src=\"data:image/png;base64,...\" alt=\"...\">. The browser decodes and shows the image without fetching a separate file."
      },
      {
        "q": "Can I encode an SVG to Base64?",
        "a": "Yes, SVG works like any other format. For SVG you often get a smaller result with URL-encoding (data:image/svg+xml,...) than Base64, since SVG is already text, but Base64 is the safer choice if the markup contains characters that need escaping."
      },
      {
        "q": "Is there a size limit for data URIs?",
        "a": "The tool handles files up to 10 MB, but in practice keep inline data URIs small - a few KB at most. Large strings slow down HTML parsing and are not cached, so a real file URL is faster for anything sizeable."
      },
      {
        "q": "Does Base64 compress or shrink my image?",
        "a": "No. Base64 is an encoding, not compression. It actually makes the data about a third larger. If you need a smaller file, compress or resize the image first, then encode the result."
      },
      {
        "q": "Can I turn the data URI back into an image?",
        "a": "Yes. The Base64 to image tool decodes a data:image/... string back into a downloadable file. The two tools are the reverse of each other."
      },
      {
        "q": "Will a Base64 image work in email?",
        "a": "Often, for small images. A data URI travels inside the message, so it can render when a client blocks external images, though some clients (notably parts of Outlook) strip data URIs, so test before relying on it for an important send."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Need a hosted URL instead?",
    "ctaBody": "For anything bigger than a small icon, a direct CDN link is faster and stays cached. Upload your image and get a shareable https URL in seconds.",
    "ctaButton": "Try the main uploader",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Imagen a Base64 — 100% en navegador | Codificador gratuito",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-compressor", "label": "Compresor de imágenes" },
      { "pageKey": "image-resizer", "label": "Redimensionador de imágenes" },
      { "pageKey": "base64-to-image", "label": "Base64 a imagen" },
      { "pageKey": "favicon-generator", "label": "Generador de favicon" }
    ],
    "metaDescription": "Convierte cualquier imagen PNG, JPG, GIF, SVG o WebP a una URI de datos base64 para pegar en CSS, HTML o JSON. Instantáneo, gratuito, funciona en tu navegador, sin subidas.",
    "schemaName": "Codificador de imagen a Base64",
    "schemaDescription": "Codifica imágenes como URIs de datos base64 localmente en tu navegador.",
    "badge": "Herramienta solo en navegador",
    "h1Pre": "Imagen a Base64",
    "h1Highlight": "URI de datos instantánea.",
    "intro": "Suelta una imagen y obtén una URI de datos lista para pegar en CSS, HTML, JSON o correo electrónico. Se ejecuta en tu navegador.",
    "howTitle": "Cómo convertir",
    "steps": [
      {
        "title": "Suelta una imagen",
        "body": "Suelta cualquier archivo PNG, JPG, GIF, SVG o WebP."
      },
      {
        "title": "Copia la URI de datos",
        "body": "La cadena completa data:image/...;base64,... aparecerá en el cuadro de salida."
      },
      {
        "title": "Pega donde quieras",
        "body": "Úsala en url() de CSS, <img src> de HTML o configuraciones JSON."
      }
    ],
    "whyTitle": "Cuándo usar base64",
    "whyItems": [
      {
        "title": "Iconos pequeños",
        "body": "Inserta iconos de menos de 1 KB para evitar una solicitud de red."
      },
      {
        "title": "HTML para correo",
        "body": "Cuando no puedes enlazar recursos externos."
      },
      {
        "title": "CSS en línea",
        "body": "Elimina la solicitud HTTP adicional para imágenes de fondo críticas."
      },
      {
        "title": "Apps sin conexión",
        "body": "Incluye imágenes en el código fuente para un uso totalmente offline."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Qué es la codificación de imagen base64?",
        "a": "Base64 codifica datos binarios como texto ASCII, permitiéndote insertar imágenes directamente dentro de CSS, HTML o JSON."
      },
      {
        "q": "¿Cuándo debería usar base64 en lugar de una URL?",
        "a": "Para imágenes diminutas, correos electrónicos o CSS en línea. Para archivos más grandes, usa una URL alojada, ya que base64 aumenta el tamaño en un 33% aproximadamente."
      },
      {
        "q": "¿Por qué la cadena base64 es tan larga?",
        "a": "Base64 utiliza 4 caracteres por cada 3 bytes, lo que supone un incremento de tamaño del 33%."
      },
      {
        "q": "¿Se sube algo a un servidor?",
        "a": "No. Se utiliza la llamada local FileReader.readAsDataURL."
      },
      {
        "q": "¿Codificación SVG?",
        "a": "Funciona. La codificación de URL puede ser más eficiente para archivos SVG."
      },
      {
        "q": "¿Cómo usarlo en CSS?",
        "a": "Pégalo dentro de url() — background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "¿Cómo usarlo en HTML?",
        "a": "Ponlo en el src de la imagen: <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "¿Hay límite de tamaño de archivo?",
        "a": "Los límites prácticos del navegador rondan los 2 MB para URIs de datos en línea."
      }
    ],
    "ctaTitle": "¿Necesitas una URL alojada en su lugar?",
    "ctaBody": "Para imágenes de más de 2 KB, una URL de CDN es más rápida.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Image en Base64 — 100% navigateur | Encodeur gratuit",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-compressor", "label": "Compresseur d'images" },
      { "pageKey": "image-resizer", "label": "Outil de redimensionnement d'images" },
      { "pageKey": "base64-to-image", "label": "Base64 vers image" },
      { "pageKey": "favicon-generator", "label": "Générateur de favicon" }
    ],
    "metaDescription": "Convertissez n'importe quelle image PNG, JPG, GIF, SVG ou WebP en URI de données base64 à coller dans votre CSS, HTML ou JSON. Instantané, gratuit, s'exécute dans votre navigateur, aucun téléchargement.",
    "schemaName": "Encodeur d'image en Base64",
    "schemaDescription": "Encodez vos images en URI de données base64 localement dans votre navigateur.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Image en Base64",
    "h1Highlight": "URI de données instantané.",
    "intro": "Déposez une image et obtenez une URI de données prête à l'emploi pour CSS, HTML, JSON ou e-mail. S'exécute directement dans votre navigateur.",
    "howTitle": "Comment convertir",
    "steps": [
      {
        "title": "Déposez une image",
        "body": "Déposez n'importe quel fichier PNG, JPG, GIF, SVG ou WebP."
      },
      {
        "title": "Copiez l'URI de données",
        "body": "La chaîne complète data:image/...;base64,... apparaît dans la zone de sortie."
      },
      {
        "title": "Collez partout",
        "body": "Utilisez-la dans un url() CSS, une balise <img src> HTML ou une configuration JSON."
      }
    ],
    "whyTitle": "Quand utiliser le base64",
    "whyItems": [
      {
        "title": "Petites icônes",
        "body": "Intégrez des icônes de moins de 1 Ko pour éviter une requête réseau."
      },
      {
        "title": "E-mails HTML",
        "body": "Lorsque vous ne pouvez pas lier des ressources externes."
      },
      {
        "title": "CSS en ligne",
        "body": "Éliminez la requête HTTP supplémentaire pour les images d'arrière-plan critiques."
      },
      {
        "title": "Applications hors ligne",
        "body": "Intégrez les images dans le code source pour une utilisation totalement hors ligne."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Qu'est-ce que l'encodage d'image en base64 ?",
        "a": "Le base64 encode les données binaires sous forme de texte ASCII, ce qui permet d'intégrer des images directement dans le CSS, le HTML ou le JSON."
      },
      {
        "q": "Quand utiliser le base64 plutôt qu'une URL ?",
        "a": "Pour les très petites images, les e-mails ou le CSS en ligne. Pour tout ce qui est plus volumineux, utilisez une URL hébergée — le base64 augmente la taille d'environ 33 %."
      },
      {
        "q": "Pourquoi la chaîne base64 est-elle si longue ?",
        "a": "Le base64 utilise 4 caractères pour 3 octets, soit une surcharge d'environ 33 %."
      },
      {
        "q": "Y a-t-il un téléchargement de fichier ?",
        "a": "Non. Tout est traité localement via FileReader.readAsDataURL."
      },
      {
        "q": "Encodage SVG ?",
        "a": "Cela fonctionne. L'encodage d'URL peut parfois être plus léger pour les SVG."
      },
      {
        "q": "Comment l'utiliser en CSS ?",
        "a": "Collez-le dans un url() — background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "Comment l'utiliser en HTML ?",
        "a": "Placez-le dans un src d'image : <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "Y a-t-il une limite de taille ?",
        "a": "Les limites pratiques des navigateurs se situent autour de 2 Mo pour les URI de données en ligne."
      }
    ],
    "ctaTitle": "Besoin d'une URL hébergée ?",
    "ctaBody": "Pour les images de plus de 2 Ko, une URL CDN est plus rapide.",
    "ctaButton": "Essayer l'outil d'upload principal"
  },
  "de": {
    "metaTitle": "Bild zu Base64 — 100% Browser | Kostenloser Encoder",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-compressor", "label": "Bildkompressor" },
      { "pageKey": "image-resizer", "label": "Bildgrößenänderungstool" },
      { "pageKey": "base64-to-image", "label": "Base64 zu Bild" },
      { "pageKey": "favicon-generator", "label": "Favicon-Generator" }
    ],
    "metaDescription": "Konvertieren Sie jedes PNG, JPG, GIF, SVG oder WebP Bild in einen Base64 Data URI für CSS, HTML oder JSON. Sofort, kostenlos, direkt im Browser, kein Upload.",
    "schemaName": "Bild zu Base64 Encoder",
    "schemaDescription": "Kodieren Sie Bilder lokal in Ihrem Browser als Base64 Data URIs.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "Bild zu Base64",
    "h1Highlight": "sofortiger Data URI.",
    "intro": "Bild ablegen – erhalten Sie einen sofort einsatzbereiten Data URI für CSS, HTML, JSON oder E-Mails. Läuft direkt in Ihrem Browser.",
    "howTitle": "So konvertieren Sie",
    "steps": [
      {
        "title": "Bild ablegen",
        "body": "Ziehen Sie ein beliebiges PNG, JPG, GIF, SVG oder WebP in das Fenster."
      },
      {
        "title": "Data URI kopieren",
        "body": "Der vollständige data:image/...;base64,... String erscheint im Ausgabefeld."
      },
      {
        "title": "Überall einfügen",
        "body": "Verwenden Sie ihn in CSS url(), HTML <img src> oder JSON-Konfigurationen."
      }
    ],
    "whyTitle": "Wann man Base64 verwendet",
    "whyItems": [
      {
        "title": "Kleine Icons",
        "body": "Betten Sie Icons unter 1 KB direkt ein, um Netzwerkanfragen zu vermeiden."
      },
      {
        "title": "E-Mail HTML",
        "body": "Wenn Sie keine externen Assets verlinken können."
      },
      {
        "title": "Inline CSS",
        "body": "Eliminieren Sie zusätzliche HTTP-Anfragen für kritische Hintergrundbilder."
      },
      {
        "title": "Offline-Apps",
        "body": "Bündeln Sie Bilder direkt im Quellcode für die vollständige Offline-Nutzung."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Was ist Base64-Bildkodierung?",
        "a": "Base64 kodiert Binärdaten als ASCII-Text – so können Sie Bilder direkt in CSS, HTML oder JSON einbetten."
      },
      {
        "q": "Wann sollte ich Base64 statt einer URL verwenden?",
        "a": "Für winzige Bilder, E-Mails oder Inline-CSS. Für alles Größere verwenden Sie eine gehostete URL – Base64 erhöht die Dateigröße um ca. 33%."
      },
      {
        "q": "Warum ist der Base64-String so groß?",
        "a": "Base64 benötigt 4 Zeichen pro 3 Bytes – das entspricht einem Overhead von ca. 33%."
      },
      {
        "q": "Wird etwas hochgeladen?",
        "a": "Nein. Es wird lokal über FileReader.readAsDataURL verarbeitet."
      },
      {
        "q": "SVG-Kodierung?",
        "a": "Funktioniert. URL-Kodierung kann bei SVGs jedoch kleiner sein."
      },
      {
        "q": "Wie verwende ich es in CSS?",
        "a": "Fügen Sie es in url() ein – background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "Wie in HTML?",
        "a": "Fügen Sie es in das img src Attribut ein: <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "Gibt es eine Dateigrößenbeschränkung?",
        "a": "Praktische Browser-Limits liegen bei etwa 2 MB für Inline Data URIs."
      }
    ],
    "ctaTitle": "Benötigen Sie stattdessen eine gehostete URL?",
    "ctaBody": "Für Bilder über 2 KB ist eine CDN-URL schneller.",
    "ctaButton": "Haupt-Uploader testen"
  },
  "ja": {
    "metaTitle": "画像からBase64へ変換 — ブラウザ完結型 | 無料エンコーダー",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-compressor", "label": "画像圧縮" },
      { "pageKey": "image-resizer", "label": "画像リサイザー" },
      { "pageKey": "base64-to-image", "label": "Base64→画像" },
      { "pageKey": "favicon-generator", "label": "ファビコン生成" }
    ],
    "metaDescription": "PNG、JPG、GIF、SVG、WebP画像をCSS、HTML、JSONに貼り付け可能なbase64データURIに変換します。ブラウザ上で即座に変換、アップロード不要の無料ツールです。",
    "schemaName": "画像からBase64へのエンコーダー",
    "schemaDescription": "ブラウザ上でローカルに画像をbase64データURIへエンコードします。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "画像からBase64へ",
    "h1Highlight": "即座にデータURI化",
    "intro": "画像をドロップするだけで、CSS、HTML、JSON、メールですぐに使えるデータURIを取得できます。すべてブラウザ内で処理されます。",
    "howTitle": "変換方法",
    "steps": [
      {
        "title": "画像をドロップ",
        "body": "PNG、JPG、GIF、SVG、WebPファイルをドロップしてください。"
      },
      {
        "title": "データURIをコピー",
        "body": "data:image/...;base64,... 形式の文字列がすぐに出力ボックスに表示されます。"
      },
      {
        "title": "どこでも貼り付け",
        "body": "CSSのurl()、HTMLの<img src>、またはJSON設定ファイルで使用できます。"
      }
    ],
    "whyTitle": "base64の活用シーン",
    "whyItems": [
      {
        "title": "小さなアイコン",
        "body": "1KB未満のアイコンをインライン化し、ネットワークリクエストを削減します。"
      },
      {
        "title": "HTMLメール",
        "body": "外部アセットへのリンクが制限されている場合に最適です。"
      },
      {
        "title": "インラインCSS",
        "body": "重要な背景画像のリクエストを減らし、読み込みを最適化します。"
      },
      {
        "title": "オフラインアプリ",
        "body": "画像をソースコードに含めることで、完全なオフライン動作を実現します。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "base64画像エンコーディングとは？",
        "a": "バイナリデータをASCIIテキストに変換する手法です。CSS、HTML、JSON内に画像を直接埋め込むことができます。"
      },
      {
        "q": "URLの代わりにbase64を使うべき時は？",
        "a": "小さな画像、メール、インラインCSSに適しています。大きな画像はファイルサイズが約33%増加するため、ホストされたURLの使用を推奨します。"
      },
      {
        "q": "なぜbase64文字列は長くなるのですか？",
        "a": "3バイトのデータを4文字で表現するため、約33%のオーバーヘッドが発生します。"
      },
      {
        "q": "ファイルはどこかにアップロードされますか？",
        "a": "いいえ。FileReader.readAsDataURLを使用してブラウザ内でローカル処理されます。"
      },
      {
        "q": "SVGのエンコードは可能ですか？",
        "a": "可能です。ただし、SVGの場合はURLエンコードの方がサイズが小さくなる場合があります。"
      },
      {
        "q": "CSSでの使い方は？",
        "a": "url()の中に貼り付けます。例：background-image: url('data:image/png;base64,...');"
      },
      {
        "q": "HTMLでの使い方は？",
        "a": "imgタグのsrc属性に指定します：<img src=\"data:image/png;base64,...\">"
      },
      {
        "q": "ファイルサイズの制限はありますか？",
        "a": "ブラウザの仕様上、インラインデータURIとしては2MB程度が実用的な上限です。"
      }
    ],
    "ctaTitle": "ホストされたURLが必要ですか？",
    "ctaBody": "2KBを超える画像には、CDN経由のURLの方が高速です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "图片转 Base64 — 100% 浏览器运行 | 免费编码器",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-compressor", "label": "图片压缩工具" },
      { "pageKey": "image-resizer", "label": "图片缩放工具" },
      { "pageKey": "base64-to-image", "label": "Base64 转图片" },
      { "pageKey": "favicon-generator", "label": "Favicon 生成器" }
    ],
    "metaDescription": "将任何 PNG、JPG、GIF、SVG 或 WebP 图片转换为可粘贴到 CSS、HTML 或 JSON 中的 base64 数据 URI。即时、免费、在浏览器中运行，无需上传。",
    "schemaName": "图片转 Base64 编码器",
    "schemaDescription": "在浏览器中本地将图片编码为 base64 数据 URI。",
    "badge": "纯浏览器工具",
    "h1Pre": "图片转 Base64",
    "h1Highlight": "即时数据 URI。",
    "intro": "拖入图片，即可获得适用于 CSS、HTML、JSON 或电子邮件的即用型数据 URI。完全在您的浏览器中运行。",
    "howTitle": "如何转换",
    "steps": [
      {
        "title": "拖入图片",
        "body": "拖入任何 PNG、JPG、GIF、SVG 或 WebP 文件。"
      },
      {
        "title": "复制数据 URI",
        "body": "完整的 data:image/...;base64,... 字符串将出现在输出框中。"
      },
      {
        "title": "随处粘贴",
        "body": "用于 CSS url()、HTML <img src> 或 JSON 配置中。"
      }
    ],
    "whyTitle": "何时使用 base64",
    "whyItems": [
      {
        "title": "微型图标",
        "body": "嵌入 1KB 以下的图标，避免额外的网络请求。"
      },
      {
        "title": "HTML 邮件",
        "body": "在无法链接外部资源时使用。"
      },
      {
        "title": "内联 CSS",
        "body": "消除关键背景图片的额外 HTTP 请求。"
      },
      {
        "title": "离线应用",
        "body": "将图片打包到源代码中，实现完全离线使用。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "什么是 base64 图片编码？",
        "a": "Base64 将二进制数据编码为 ASCII 文本，允许您直接将图片嵌入 CSS、HTML 或 JSON 中。"
      },
      {
        "q": "何时应该使用 base64 而不是 URL？",
        "a": "适用于微型图片、电子邮件或内联 CSS。对于较大的图片，请使用托管 URL，因为 base64 会使文件大小增加约 33%。"
      },
      {
        "q": "为什么 base64 字符串这么长？",
        "a": "Base64 每 3 个字节占用 4 个字符，会有约 33% 的额外开销。"
      },
      {
        "q": "文件会上传吗？",
        "a": "不会。使用本地 FileReader.readAsDataURL 调用。"
      },
      {
        "q": "支持 SVG 编码吗？",
        "a": "支持。对于 SVG，URL 编码有时体积更小。"
      },
      {
        "q": "如何在 CSS 中使用？",
        "a": "粘贴到 url() 中 — background-image: url('data:image/png;base64,...')。"
      },
      {
        "q": "如何在 HTML 中使用？",
        "a": "放入 img src 中：<img src=\"data:image/png;base64,...\">。"
      },
      {
        "q": "有文件大小限制吗？",
        "a": "浏览器对内联数据 URI 的实际限制约为 2 MB。"
      }
    ],
    "ctaTitle": "需要托管的 URL？",
    "ctaBody": "对于大于 2 KB 的图片，使用 CDN URL 速度更快。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
