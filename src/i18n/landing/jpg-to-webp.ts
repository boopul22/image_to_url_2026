import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "JPG to WebP Converter | Free, 25-35% Smaller",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP to PNG" },
      { "pageKey": "png-to-webp", "label": "PNG to WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC to PNG" }
    ],
    "metaDescription": "Convert JPG to WebP free in your browser for lighter, faster pages. Shrink files 25 to 35% with no upload and no signup. Works on Windows, Mac, and iPhone.",
    "schemaName": "JPG to WebP Converter",
    "schemaDescription": "Convert JPG to WebP in your browser for 25–35% size reduction at same visual quality.",
    "badge": "Browser-only Tool",
    "h1Pre": "JPG to WebP Converter,",
    "h1Highlight": "Lighter Pages, Same Look",
    "intro": "Need a lighter version of a photo for the web? Drop your JPGs in the box above and they re-encode to WebP in your browser, usually 25 to 35% smaller at the same visual quality. There is no upload, no signup, and no watermark, and files up to 10 MB work. Once a file is converted you can download it or click 'Get URL' to get a shareable https link.",
    "specsTitle": "JPG to WebP at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input", "value": "JPG / JPEG" },
      { "label": "Max size", "value": "10 MB" },
      { "label": "Output", "value": "WebP (with optional hosted link)" }
    ],
    "howTitle": "How to convert JPG to WebP",
    "steps": [
      {
        "title": "Drop JPGs",
        "body": "Drag .jpg files into the drop zone."
      },
      {
        "title": "Pick quality",
        "body": "The default quality of 92 matches the original. Drop it to 75 to 80 for noticeably smaller files."
      },
      {
        "title": "Download WebP",
        "body": "Save each WebP file to your device, or click 'Get URL' to host it."
      }
    ],
    "whyTitle": "Why convert JPG to WebP?",
    "whyItems": [
      {
        "title": "25–35% smaller than JPG",
        "body": "At the same visual quality."
      },
      {
        "title": "Better Lighthouse scores",
        "body": "Google has recommended WebP over JPG for years, and it lifts your Lighthouse score."
      },
      {
        "title": "98% browser support",
        "body": "Over 98% of modern browsers support WebP."
      },
      {
        "title": "Free and local",
        "body": "No upload. Everything runs on your device."
      }
    ],
    "comparisonTitle": "JPG vs WebP at the same photo",
    "comparisonIntro": "JPG and WebP are both built for photographs, but WebP is the newer codec and it packs the same picture into less space. Here is how the two formats line up for a typical photo on a web page.",
    "comparisonColumns": [
      "Format",
      "Compression",
      "Typical file size",
      "Transparency",
      "Browser support",
      "Best for"
    ],
    "comparisonRows": [
      {
        "cells": [
          "JPG",
          "Lossy only",
          "Baseline",
          "No",
          "Everywhere, including old clients",
          "Photos for the widest reach"
        ]
      },
      {
        "cells": [
          "WebP (lossy)",
          "Lossy",
          "25 to 35% smaller",
          "Yes (alpha)",
          "All current browsers",
          "Photos on modern web pages"
        ]
      },
      {
        "cells": [
          "WebP (lossless)",
          "Lossless",
          "Bigger than lossy WebP",
          "Yes (alpha)",
          "All current browsers",
          "Flat graphics, not photos"
        ]
      },
      {
        "cells": [
          "PNG",
          "Lossless",
          "Much larger for photos",
          "Yes (alpha)",
          "Everywhere",
          "Logos, screenshots, line art"
        ]
      }
    ],
    "useCasesTitle": "When JPG to WebP pays off",
    "useCasesIntro": "Shaving a third off every photo adds up fast. These are the spots where it helps the most:",
    "useCases": [
      {
        "title": "Speeding up a web page",
        "body": "Photos are usually the heaviest thing on a page. Swapping JPG hero shots and galleries for WebP cuts image weight, which is one of the easier ways to move your Largest Contentful Paint in the right direction."
      },
      {
        "title": "Photo-heavy galleries and blogs",
        "body": "If a post has a dozen photos, the savings stack up. Smaller files mean less data on mobile connections and quicker scrolling without any visible drop in quality."
      },
      {
        "title": "Email and storage trimming",
        "body": "When you just need a lighter copy of a photo to attach or archive, WebP gives you the same image in less space. Keep the original JPG if a recipient might be on very old software."
      }
    ],
    "sections": [
      {
        "heading": "Why convert JPG to WebP?",
        "body": "JPG is the default for photos, but it was designed in the early 1990s. WebP came out of Google later and uses smarter compression, so the same photo lands 25 to 35% smaller at a quality you can't tell apart by eye. On a page full of images that is real bandwidth saved and a faster load, which is why image weight shows up directly in Core Web Vitals and Lighthouse scoring. If your photos are currently JPG, this is close to free performance."
      },
      {
        "heading": "Does converting lose quality?",
        "body": "JPG is already a lossy format, so some detail was thrown away the first time the photo was saved. Converting to WebP doesn't bring any of that back, and re-encoding a lossy file always loses a little more. The trick is to keep the quality high. At a setting around 92 the WebP looks the same as the source while still coming out smaller. Drop to 75 or 80 only when you want the tiniest file and can accept a faint softening on close inspection."
      },
      {
        "heading": "Is WebP supported everywhere?",
        "body": "On the web, effectively yes. Chrome, Firefox, Edge and Safari all render WebP, which covers well over 98% of browsers in use. The gaps are old devices, a few legacy desktop apps, and some older email clients that still expect JPG or PNG. For a public web page that is a non-issue. If you are sending a file to someone on unknown software, keeping the original JPG as a fallback is the safe move."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Why convert JPG to WebP?",
        "a": "WebP files are 25 to 35% smaller than JPG at the same quality, so your pages load faster and use less bandwidth."
      },
      {
        "q": "How much smaller?",
        "a": "Usually 25 to 35% smaller than the same JPG, depending on the image and the quality setting."
      },
      {
        "q": "Will I lose quality?",
        "a": "Not visibly at the default quality of 92. Lower it only if you want a smaller file and can accept a slight drop."
      },
      {
        "q": "How do I convert JPG to WebP on Windows, Mac, or iPhone?",
        "a": "It works in any modern browser on Windows, Mac, and iPhone. Over 98% of browsers display WebP, so it is safe to use on the web."
      },
      {
        "q": "Are files uploaded?",
        "a": "No. The conversion runs in your browser. Your files only leave your device if you click 'Get URL' to host one."
      },
      {
        "q": "Batch limits?",
        "a": "No fixed limit. Drop a whole folder of JPGs and they convert one after another, right in your browser."
      },
      {
        "q": "EXIF and color profile?",
        "a": "Re-encoding drops the EXIF metadata. Colors are kept close to the original so your images look the same."
      },
      {
        "q": "Folder drop?",
        "a": "Yes. Drop a whole folder and every JPG inside converts to WebP, one after another."
      },
      {
        "q": "Can I get a shareable link for the WebP?",
        "a": "Yes. After a file converts, click 'Get URL' and it is hosted for free with a direct https link you can paste into a page, a chat or an email. Without that click, nothing leaves your device."
      },
      {
        "q": "Is there a file size limit?",
        "a": "Up to 10 MB per file, which covers nearly any photo. If a JPG is larger than that, compress or resize it first and then convert."
      },
      {
        "q": "Does WebP show up in email?",
        "a": "Most modern mail apps display WebP fine, but a few older ones still expect JPG or PNG. If you are unsure who is on the other end, attach the original JPG to be safe."
      },
      {
        "q": "Is it really free with no account?",
        "a": "Yes. The converter is free, there is no signup, and there is no watermark on the result. You only need an account if you later want a hosted link that you choose to keep forever."
      }
    ],
    "ctaTitle": "Want a hosted URL?",
    "ctaBody": "Convert your JPG files, then click 'Get URL' to host any WebP for free. No signup.",
    "ctaButton": "Try the main uploader",
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Convertidor de JPG a WebP | Gratis, 25-35% más ligero",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP a PNG" },
      { "pageKey": "png-to-webp", "label": "PNG a WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC a PNG" }
    ],
    "metaDescription": "Convierte JPG a WebP gratis en tu navegador para páginas más ligeras y rápidas. Reduce archivos un 25-35% sin subidas ni registros. Funciona en Windows, Mac y iPhone.",
    "schemaName": "Convertidor de JPG a WebP",
    "schemaDescription": "Convierte JPG a WebP en tu navegador para una reducción de tamaño del 25-35% con la misma calidad visual.",
    "badge": "Herramienta solo para navegador",
    "h1Pre": "Convertidor de JPG a WebP,",
    "h1Highlight": "Páginas más ligeras, misma apariencia",
    "intro": "Convierte tus archivos JPG a WebP y reduce su tamaño entre un 25 y un 35% para que tus páginas carguen más rápido. Todo se ejecuta en tu navegador, sin subidas ni registros.",
    "howTitle": "Cómo convertir JPG a WebP",
    "steps": [
      {
        "title": "Suelta tus JPG",
        "body": "Arrastra los archivos .jpg a la zona de carga."
      },
      {
        "title": "Elige la calidad",
        "body": "La calidad predeterminada de 92 iguala al original. Bájala a 75-80 para archivos notablemente más pequeños."
      },
      {
        "title": "Descarga WebP",
        "body": "Guarda cada archivo WebP en tu dispositivo o haz clic en 'Get URL' para alojarlo."
      }
    ],
    "whyTitle": "¿Por qué convertir JPG a WebP?",
    "whyItems": [
      {
        "title": "25–35% más pequeño que JPG",
        "body": "Manteniendo la misma calidad visual."
      },
      {
        "title": "Mejores puntuaciones en Lighthouse",
        "body": "Google ha recomendado WebP sobre JPG durante años, y mejora tu puntuación en Lighthouse."
      },
      {
        "title": "98% de compatibilidad",
        "body": "Más del 98% de los navegadores modernos soportan WebP."
      },
      {
        "title": "Gratis y local",
        "body": "Sin subidas. Todo se procesa en tu dispositivo."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué convertir JPG a WebP?",
        "a": "Los archivos WebP son entre un 25 y un 35% más pequeños que los JPG con la misma calidad, por lo que tus páginas cargan más rápido y consumen menos ancho de banda."
      },
      {
        "q": "¿Cuánto más pequeños?",
        "a": "Generalmente entre un 25 y un 35% más pequeños que el mismo JPG, dependiendo de la imagen y el ajuste de calidad."
      },
      {
        "q": "¿Perderé calidad?",
        "a": "No de forma visible con la calidad predeterminada de 92. Redúcela solo si buscas un archivo más pequeño y aceptas una ligera pérdida."
      },
      {
        "q": "¿Cómo convierto JPG a WebP en Windows, Mac o iPhone?",
        "a": "Funciona en cualquier navegador moderno en Windows, Mac y iPhone. Más del 98% de los navegadores muestran WebP, por lo que es seguro usarlo en la web."
      },
      {
        "q": "¿Se suben los archivos?",
        "a": "No. La conversión se ejecuta en tu navegador. Tus archivos solo salen de tu dispositivo si haces clic en 'Get URL' para alojar uno."
      },
      {
        "q": "¿Límites por lotes?",
        "a": "No hay límite fijo. Suelta una carpeta llena de JPGs y se convertirán uno tras otro, directamente en tu navegador."
      },
      {
        "q": "¿Qué pasa con EXIF y el perfil de color?",
        "a": "La re-codificación elimina los metadatos EXIF. Los colores se mantienen fieles al original para que tus imágenes luzcan igual."
      },
      {
        "q": "¿Puedo soltar carpetas?",
        "a": "Sí. Suelta una carpeta completa y cada JPG dentro se convertirá a WebP, uno tras otro."
      }
    ],
    "ctaTitle": "¿Quieres una URL alojada?",
    "ctaBody": "Convierte tus archivos JPG y luego haz clic en 'Get URL' para alojar cualquier WebP gratis. Sin registros.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur JPG en WebP | Gratuit, 25-35% plus léger",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP vers PNG" },
      { "pageKey": "png-to-webp", "label": "PNG vers WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC vers PNG" }
    ],
    "metaDescription": "Convertissez vos JPG en WebP gratuitement dans votre navigateur pour des pages plus légères et rapides. Réduisez la taille de 25 à 35% sans téléchargement ni inscription. Fonctionne sur Windows, Mac et iPhone.",
    "schemaName": "Convertisseur JPG en WebP",
    "schemaDescription": "Convertissez vos JPG en WebP dans votre navigateur pour une réduction de taille de 25 à 35% à qualité visuelle égale.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur JPG en WebP,",
    "h1Highlight": "Pages plus légères, même rendu",
    "intro": "Convertissez vos fichiers JPG en WebP et réduisez leur taille de 25 à 35% pour des pages qui chargent plus vite. Tout se passe dans votre navigateur, sans envoi sur un serveur et sans inscription.",
    "howTitle": "Comment convertir un JPG en WebP",
    "steps": [
      {
        "title": "Déposez vos JPG",
        "body": "Glissez vos fichiers .jpg dans la zone de dépôt."
      },
      {
        "title": "Choisissez la qualité",
        "body": "La qualité par défaut de 92 correspond à l'original. Baissez-la entre 75 et 80 pour des fichiers nettement plus légers."
      },
      {
        "title": "Téléchargez le WebP",
        "body": "Enregistrez chaque fichier WebP sur votre appareil ou cliquez sur 'Get URL' pour l'héberger."
      }
    ],
    "whyTitle": "Pourquoi convertir vos JPG en WebP ?",
    "whyItems": [
      {
        "title": "25–35% plus petit que le JPG",
        "body": "À qualité visuelle identique."
      },
      {
        "title": "Meilleurs scores Lighthouse",
        "body": "Google recommande WebP plutôt que JPG depuis des années, ce qui améliore votre score Lighthouse."
      },
      {
        "title": "98% de compatibilité",
        "body": "Plus de 98% des navigateurs modernes supportent le format WebP."
      },
      {
        "title": "Gratuit et local",
        "body": "Aucun envoi de fichier. Tout est traité directement sur votre appareil."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Pourquoi convertir un JPG en WebP ?",
        "a": "Les fichiers WebP sont 25 à 35% plus légers que les JPG à qualité égale, ce qui permet à vos pages de charger plus vite et d'économiser de la bande passante."
      },
      {
        "q": "Quelle réduction de taille ?",
        "a": "Généralement 25 à 35% de moins qu'un JPG équivalent, selon l'image et le réglage de qualité choisi."
      },
      {
        "q": "Vais-je perdre en qualité ?",
        "a": "Pas de manière visible avec la qualité par défaut de 92. Ne la baissez que si vous souhaitez un fichier plus léger et acceptez une légère perte."
      },
      {
        "q": "Comment convertir un JPG en WebP sur Windows, Mac ou iPhone ?",
        "a": "Cela fonctionne dans n'importe quel navigateur moderne sur Windows, Mac et iPhone. Plus de 98% des navigateurs affichent le WebP, c'est donc un format sûr pour le web."
      },
      {
        "q": "Mes fichiers sont-ils envoyés sur un serveur ?",
        "a": "Non. La conversion se fait dans votre navigateur. Vos fichiers ne quittent votre appareil que si vous cliquez sur 'Get URL' pour en héberger un."
      },
      {
        "q": "Limites de traitement par lot ?",
        "a": "Aucune limite fixe. Déposez tout un dossier de JPG et ils seront convertis les uns après les autres, directement dans votre navigateur."
      },
      {
        "q": "Quid des métadonnées EXIF et du profil couleur ?",
        "a": "Le réencodage supprime les métadonnées EXIF. Les couleurs sont conservées au plus proche de l'original pour que vos images restent identiques."
      },
      {
        "q": "Glisser-déposer de dossier ?",
        "a": "Oui. Déposez un dossier entier et chaque JPG sera converti en WebP, l'un après l'autre."
      }
    ],
    "ctaTitle": "Besoin d'une URL hébergée ?",
    "ctaBody": "Convertissez vos fichiers JPG, puis cliquez sur 'Get URL' pour héberger gratuitement n'importe quel WebP. Aucune inscription requise.",
    "ctaButton": "Essayer l'outil de conversion"
  },
  "de": {
    "metaTitle": "JPG in WebP umwandeln | Kostenlos, 25-35% kleiner",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP zu PNG" },
      { "pageKey": "png-to-webp", "label": "PNG zu WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC zu PNG" }
    ],
    "metaDescription": "Wandeln Sie JPG kostenlos direkt im Browser in WebP um für leichtere, schnellere Webseiten. Dateigröße um 25 bis 35% reduzieren, ohne Upload und ohne Registrierung. Funktioniert auf Windows, Mac und iPhone.",
    "schemaName": "JPG in WebP Umwandler",
    "schemaDescription": "Wandeln Sie JPG in WebP direkt im Browser um für 25–35% weniger Dateigröße bei gleicher visueller Qualität.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "JPG in WebP umwandeln,",
    "h1Highlight": "Leichtere Seiten, gleiche Optik",
    "intro": "Wandeln Sie Ihre JPG-Dateien in WebP um und reduzieren Sie die Größe um 25 bis 35% für schneller ladende Webseiten. Alles läuft direkt in Ihrem Browser, ohne Upload und ohne Registrierung.",
    "howTitle": "So wandeln Sie JPG in WebP um",
    "steps": [
      {
        "title": "JPGs ablegen",
        "body": "Ziehen Sie Ihre .jpg-Dateien in den Ablagebereich."
      },
      {
        "title": "Qualität wählen",
        "body": "Die Standardqualität von 92 entspricht dem Original. Senken Sie den Wert auf 75 bis 80 für deutlich kleinere Dateien."
      },
      {
        "title": "WebP herunterladen",
        "body": "Speichern Sie jede WebP-Datei auf Ihrem Gerät oder klicken Sie auf 'URL abrufen', um sie zu hosten."
      }
    ],
    "whyTitle": "Warum JPG in WebP umwandeln?",
    "whyItems": [
      {
        "title": "25–35% kleiner als JPG",
        "body": "Bei gleichbleibender visueller Qualität."
      },
      {
        "title": "Bessere Lighthouse-Werte",
        "body": "Google empfiehlt WebP schon seit Jahren gegenüber JPG, was Ihren Lighthouse-Score verbessert."
      },
      {
        "title": "98% Browser-Unterstützung",
        "body": "Über 98% der modernen Browser unterstützen WebP."
      },
      {
        "title": "Kostenlos und lokal",
        "body": "Kein Upload. Alles wird direkt auf Ihrem Gerät verarbeitet."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum JPG in WebP umwandeln?",
        "a": "WebP-Dateien sind bei gleicher Qualität 25 bis 35% kleiner als JPG, wodurch Ihre Seiten schneller laden und weniger Bandbreite verbrauchen."
      },
      {
        "q": "Wie viel kleiner?",
        "a": "Normalerweise 25 bis 35% kleiner als das entsprechende JPG, abhängig vom Bild und der Qualitätseinstellung."
      },
      {
        "q": "Verliere ich an Qualität?",
        "a": "Bei der Standardqualität von 92 ist kein Unterschied sichtbar. Senken Sie die Qualität nur, wenn Sie eine kleinere Datei benötigen und einen leichten Qualitätsverlust in Kauf nehmen können."
      },
      {
        "q": "Wie wandle ich JPG auf Windows, Mac oder iPhone in WebP um?",
        "a": "Es funktioniert in jedem modernen Browser auf Windows, Mac und iPhone. Über 98% der Browser zeigen WebP an, daher ist es sicher für das Web."
      },
      {
        "q": "Werden Dateien hochgeladen?",
        "a": "Nein. Die Konvertierung erfolgt in Ihrem Browser. Ihre Dateien verlassen Ihr Gerät nur, wenn Sie auf 'URL abrufen' klicken, um ein Bild zu hosten."
      },
      {
        "q": "Gibt es Stapelverarbeitungs-Limits?",
        "a": "Kein festes Limit. Ziehen Sie einen ganzen Ordner mit JPGs hinein und sie werden nacheinander direkt in Ihrem Browser konvertiert."
      },
      {
        "q": "Was passiert mit EXIF und Farbprofilen?",
        "a": "Durch die Neukodierung werden EXIF-Metadaten entfernt. Die Farben bleiben nah am Original, sodass Ihre Bilder identisch aussehen."
      },
      {
        "q": "Kann ich ganze Ordner ablegen?",
        "a": "Ja. Ziehen Sie einen ganzen Ordner hinein und jedes enthaltene JPG wird nacheinander in WebP umgewandelt."
      }
    ],
    "ctaTitle": "Benötigen Sie eine gehostete URL?",
    "ctaBody": "Wandeln Sie Ihre JPG-Dateien um und klicken Sie dann auf 'URL abrufen', um ein WebP kostenlos zu hosten. Keine Registrierung erforderlich.",
    "ctaButton": "Zum Haupt-Uploader"
  },
  "ja": {
    "metaTitle": "JPGからWebPへの変換ツール | 無料で25〜35%軽量化",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP→PNG" },
      { "pageKey": "png-to-webp", "label": "PNG→WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC→PNG" }
    ],
    "metaDescription": "ブラウザでJPGをWebPに無料で変換。アップロード不要、登録不要でファイルサイズを25〜35%削減し、Webサイトを高速化します。Windows、Mac、iPhoneに対応。",
    "schemaName": "JPGからWebPへの変換ツール",
    "schemaDescription": "ブラウザ上でJPGをWebPに変換し、画質を維持したままファイルサイズを25〜35%削減します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "JPGからWebPへの変換、",
    "h1Highlight": "画質そのまま、ページを軽量化",
    "intro": "JPGファイルをWebPに変換して、ファイルサイズを25〜35%削減しましょう。すべてブラウザ上で処理されるため、アップロードや登録は一切不要です。",
    "howTitle": "JPGをWebPに変換する方法",
    "steps": [
      {
        "title": "JPGをドロップ",
        "body": ".jpgファイルをドロップゾーンにドラッグ＆ドロップします。"
      },
      {
        "title": "画質を選択",
        "body": "デフォルトの画質92は元画像と同等です。75〜80に下げると、より軽量なファイルになります。"
      },
      {
        "title": "WebPをダウンロード",
        "body": "WebPファイルをデバイスに保存するか、「URLを取得」をクリックしてホストします。"
      }
    ],
    "whyTitle": "なぜJPGをWebPに変換するのか？",
    "whyItems": [
      {
        "title": "JPGより25〜35%軽量",
        "body": "同等の画質を維持したまま、サイズを大幅に削減できます。"
      },
      {
        "title": "Lighthouseスコアの向上",
        "body": "Googleが長年推奨しているWebP形式を採用することで、Lighthouseスコアが改善します。"
      },
      {
        "title": "98%のブラウザ対応",
        "body": "現代のブラウザの98%以上がWebPをサポートしています。"
      },
      {
        "title": "完全無料・ローカル処理",
        "body": "アップロード不要。すべての処理がデバイス内で行われます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜJPGをWebPに変換するのですか？",
        "a": "WebPは同等の画質でもJPGより25〜35%小さいため、ページの読み込みが速くなり、帯域幅を節約できます。"
      },
      {
        "q": "どれくらい小さくなりますか？",
        "a": "画像や画質設定にもよりますが、通常は元のJPGより25〜35%小さくなります。"
      },
      {
        "q": "画質は落ちますか？",
        "a": "デフォルトの画質92であれば、見た目の変化はほとんどありません。さらにサイズを小さくしたい場合は、画質を下げて調整してください。"
      },
      {
        "q": "Windows、Mac、iPhoneで変換できますか？",
        "a": "はい。Windows、Mac、iPhoneの最新ブラウザであればどれでも動作します。ブラウザの98%以上が対応しているため、Webでの利用も安全です。"
      },
      {
        "q": "ファイルはアップロードされますか？",
        "a": "いいえ。変換はブラウザ内で行われます。「URLを取得」をクリックしてホストする場合を除き、ファイルがデバイスから外部へ送信されることはありません。"
      },
      {
        "q": "バッチ処理の制限はありますか？",
        "a": "固定の制限はありません。フォルダごとドロップすれば、ブラウザ内で次々と変換されます。"
      },
      {
        "q": "EXIFやカラープロファイルはどうなりますか？",
        "a": "再エンコード時にEXIFメタデータは削除されます。色は元画像に忠実に再現されるため、見た目は変わりません。"
      },
      {
        "q": "フォルダごとのドロップに対応していますか？",
        "a": "はい。フォルダをドロップすれば、中のすべてのJPGが次々とWebPに変換されます。"
      }
    ],
    "ctaTitle": "ホストされたURLが必要ですか？",
    "ctaBody": "JPGを変換した後、「URLを取得」をクリックすれば、WebPファイルを無料でホストできます。登録は不要です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "JPG 转 WebP 转换器 | 免费，体积缩小 25-35%",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP 转 PNG" },
      { "pageKey": "png-to-webp", "label": "PNG 转 WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC 转 PNG" }
    ],
    "metaDescription": "在浏览器中免费将 JPG 转换为 WebP，让网页更轻量、加载更快。无需上传，无需注册，文件体积可缩小 25% 至 35%。支持 Windows、Mac 和 iPhone。",
    "schemaName": "JPG 转 WebP 转换器",
    "schemaDescription": "在浏览器中将 JPG 转换为 WebP，在保持视觉质量的同时将体积减少 25–35%。",
    "badge": "纯浏览器工具",
    "h1Pre": "JPG 转 WebP 转换器，",
    "h1Highlight": "页面更轻，画质不变",
    "intro": "将您的 JPG 文件转换为 WebP，体积可减少 25% 至 35%，从而加快页面加载速度。所有处理均在您的浏览器中完成，无需上传，无需注册。",
    "howTitle": "如何将 JPG 转换为 WebP",
    "steps": [
      {
        "title": "拖入 JPG",
        "body": "将 .jpg 文件拖入放置区域。"
      },
      {
        "title": "选择质量",
        "body": "默认质量 92 与原图一致。将其降至 75 到 80 可获得明显更小的文件。"
      },
      {
        "title": "下载 WebP",
        "body": "将每个 WebP 文件保存到您的设备，或点击“获取 URL”进行托管。"
      }
    ],
    "whyTitle": "为什么要将 JPG 转换为 WebP？",
    "whyItems": [
      {
        "title": "比 JPG 小 25–35%",
        "body": "在保持相同视觉质量的前提下。"
      },
      {
        "title": "提升 Lighthouse 分数",
        "body": "Google 多年来一直推荐使用 WebP 代替 JPG，它能有效提升您的 Lighthouse 分数。"
      },
      {
        "title": "98% 的浏览器支持",
        "body": "超过 98% 的现代浏览器支持 WebP。"
      },
      {
        "title": "免费且本地化",
        "body": "无需上传。所有操作都在您的设备上运行。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "为什么要将 JPG 转换为 WebP？",
        "a": "在相同质量下，WebP 文件比 JPG 小 25% 到 35%，因此您的页面加载速度更快，带宽占用更少。"
      },
      {
        "q": "体积能缩小多少？",
        "a": "通常比同等 JPG 小 25% 到 35%，具体取决于图像内容和质量设置。"
      },
      {
        "q": "会损失画质吗？",
        "a": "在默认 92 的质量下，肉眼几乎看不出差异。只有在您需要更小文件且能接受轻微画质下降时，才建议调低质量。"
      },
      {
        "q": "如何在 Windows、Mac 或 iPhone 上将 JPG 转换为 WebP？",
        "a": "它适用于 Windows、Mac 和 iPhone 上的任何现代浏览器。超过 98% 的浏览器支持显示 WebP，因此在网页上使用非常安全。"
      },
      {
        "q": "文件会上传吗？",
        "a": "不会。转换过程在您的浏览器中运行。只有当您点击“获取 URL”进行托管时，文件才会离开您的设备。"
      },
      {
        "q": "有批量限制吗？",
        "a": "没有固定限制。拖入整个 JPG 文件夹，它们会在浏览器中依次完成转换。"
      },
      {
        "q": "EXIF 和色彩配置文件会保留吗？",
        "a": "重新编码会删除 EXIF 元数据。色彩会尽可能接近原图，确保图像外观一致。"
      },
      {
        "q": "支持拖入文件夹吗？",
        "a": "是的。拖入整个文件夹，其中的每个 JPG 都会依次转换为 WebP。"
      }
    ],
    "ctaTitle": "需要托管 URL？",
    "ctaBody": "转换您的 JPG 文件，然后点击“获取 URL”即可免费托管任何 WebP 文件。无需注册。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
