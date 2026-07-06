import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Resizer - 100% Browser | Free, Unlimited",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-compressor", "label": "Image compressor" },
      { "pageKey": "image-to-base64", "label": "Image to Base64" },
      { "pageKey": "base64-to-image", "label": "Base64 to image" },
      { "pageKey": "favicon-generator", "label": "Favicon generator" }
    ],
    "metaDescription": "Resize JPG, PNG, and WebP images in your browser by exact pixels or percentage, with aspect-ratio lock and batch support. Free, unlimited, no upload.",
    "schemaName": "Image Resizer",
    "schemaDescription": "Resize images by pixel width, height, or percentage in your browser.",
    "badge": "Browser-only Tool",
    "h1Pre": "Image Resizer",
    "h1Highlight": "exact pixels, exact ratio.",
    "intro": "Need a photo at a specific pixel size? Drop it in the box above, type a width or a height, and the picture scales to fit while the other side adjusts on its own so nothing looks stretched. It runs in your browser on JPG, PNG, WebP and GIF files up to 50 MB. Download the result, and if you want a link to share, send it through the main uploader to get an https URL.",
    "specsTitle": "Image resizer at a glance",
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
        "value": "Resized image (+ optional link)"
      }
    ],
    "howTitle": "How to resize an image",
    "steps": [
      {
        "title": "Drop your file in",
        "body": "Drag a photo onto the box or click to pick one. JPG, PNG, WebP and GIF all work, up to 50 MB each. The original stays untouched on your device."
      },
      {
        "title": "Set a width or height",
        "body": "Type the size you want in pixels, or use a percentage to shrink by a set amount. With aspect ratio locked, the other dimension fills in automatically so the image keeps its shape."
      },
      {
        "title": "Download or get a link",
        "body": "Save the resized file to your device. Want to share it? Send it through the main uploader and you get a direct https link you can paste anywhere."
      }
    ],
    "whyTitle": "Why resize before you post",
    "whyItems": [
      {
        "title": "Hit a platform's exact size",
        "body": "Instagram wants 1080 px square, YouTube thumbnails are 1280x720, an Open Graph card is 1200x630. Matching the spec yourself beats letting a site crop or squash your image for you."
      },
      {
        "title": "Smaller files load faster",
        "body": "A 4000 px phone photo is overkill for a 800 px blog column. Scaling it down first cuts the file size and the page loads quicker."
      },
      {
        "title": "Nothing leaves your device",
        "body": "The resizing happens in your browser, so the photo is not sent to a server just to change its dimensions. That keeps private shots private."
      },
      {
        "title": "Keep the whole picture",
        "body": "Resizing scales the full frame down. Unlike cropping, you do not lose the edges, so the composition stays the same, just smaller."
      }
    ],
    "comparisonTitle": "Common target sizes and what they are for",
    "comparisonIntro": "Most resizing jobs are about hitting a known size for a platform. Here are sizes people reach for most often, with the dimensions and where each one fits.",
    "comparisonColumns": [
      "Target size",
      "Dimensions",
      "Common use"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Instagram square",
          "1080x1080",
          "Square feed post or profile-friendly image"
        ]
      },
      {
        "cells": [
          "YouTube thumbnail",
          "1280x720",
          "Video thumbnail, also standard 720p"
        ]
      },
      {
        "cells": [
          "Full HD",
          "1920x1080",
          "Wallpaper, slide background, 1080p screen"
        ]
      },
      {
        "cells": [
          "Social share card",
          "1200x630",
          "Open Graph and Twitter link previews"
        ]
      },
      {
        "cells": [
          "Facebook cover",
          "851x315",
          "Page cover banner"
        ]
      }
    ],
    "useCasesTitle": "When resizing helps",
    "useCasesIntro": "A quick size change solves a lot of everyday image problems:",
    "useCases": [
      {
        "title": "Social posts and thumbnails",
        "body": "Get a photo to 1080x1080 for Instagram or 1280x720 for a YouTube thumbnail so the platform shows it the way you intended instead of auto-cropping it."
      },
      {
        "title": "Faster web pages",
        "body": "Shrink large camera images down to the width your layout actually uses. The page weighs less and visitors are not downloading pixels they never see."
      },
      {
        "title": "Profile and avatar images",
        "body": "Many sites want a small square avatar. Scale a photo down to something like 400x400 before you upload so it stays sharp at the size it is shown."
      }
    ],
    "sections": [
      {
        "heading": "What does resizing an image do?",
        "body": "Resizing changes how many pixels an image is made of. When you set a new width or height, the tool redraws the whole picture at that size, so a 4000x3000 photo can become 800x600 or 1600x1200. Every part of the frame is still there, just rendered with more or fewer pixels. With aspect ratio locked, the width and height shrink together, so a wide photo stays wide and a portrait stays tall. That lock is what keeps people and objects looking normal instead of squashed. You can unlock it if you genuinely need an exact size and do not mind some stretching."
      },
      {
        "heading": "Resize vs crop vs compress",
        "body": "These three get mixed up a lot. Resizing changes the pixel dimensions while keeping the entire image, so the whole scene stays visible at a new size. Cropping cuts pixels off the edges to change the framing or the shape, so you lose whatever was outside the crop. Compressing lowers the file size at the same dimensions by storing the image more efficiently, which can soften fine detail but does not change width or height. If you want a specific size, resize. If you want to remove distracting edges, crop. If the file is just too heavy, compress."
      },
      {
        "heading": "Will resizing reduce quality?",
        "body": "Making an image smaller is generally safe and looks crisp, because you are throwing away pixels you did not need and the result stays sharp. Going the other way is the problem. Upscaling past the original resolution looks soft because there is no extra detail to add, so the tool can only guess at the in-between pixels and the edges go fuzzy. A 500 px image blown up to 2000 px will never match a photo shot at 2000 px. For best results, start from the largest version you have and scale down to the size you need rather than up."
      }
    ],
    "faqTitle": "Image resizer FAQ",
    "faqs": [
      {
        "q": "How do I resize an image without distorting it?",
        "a": "Keep aspect ratio locked, which is on by default. Set just the width or just the height and let the other side adjust on its own. That way the proportions stay the same and nothing looks stretched."
      },
      {
        "q": "Can I resize to exact dimensions?",
        "a": "Yes. Type the width and height you want in pixels. If you need an exact size that does not match the original proportions, unlock the aspect ratio, but be aware the image may stretch slightly to fill those dimensions."
      },
      {
        "q": "Does it keep the aspect ratio?",
        "a": "By default, yes. When you change one dimension the other scales to match, so a 3:2 photo stays 3:2. You can turn the lock off if you want to force an exact width and height."
      },
      {
        "q": "Will resizing blur my image?",
        "a": "Scaling down stays sharp. Scaling up past the original size looks soft, because there is no extra detail to fill in. Start from the biggest version of the image you have and resize down for the cleanest result."
      },
      {
        "q": "What formats can I resize?",
        "a": "JPG, PNG, WebP and GIF, up to 50 MB per file. The output keeps the same format, so a PNG stays a PNG and a JPG stays a JPG."
      },
      {
        "q": "How do I resize a photo for Instagram?",
        "a": "Instagram square posts are 1080x1080. Set the width to 1080 with the ratio locked, then crop beforehand if your photo is not already square. For portrait posts, 1080x1350 is the taller option."
      },
      {
        "q": "How do I make a 1280x720 YouTube thumbnail?",
        "a": "Set the width to 1280 and the height to 720. If your image is not already 16:9, crop it to that shape first so it does not stretch when you hit the exact size."
      },
      {
        "q": "Does the tool upload my image anywhere?",
        "a": "No. The resizing runs in your browser, so the photo is not sent to a server. If you later want a shareable link, you choose to send the result through the main uploader."
      },
      {
        "q": "Can I get a link to the resized image?",
        "a": "Yes. After resizing, download the file and run it through the main uploader on this site. You get a direct https link that embeds in Discord, Reddit, forums and HTML."
      },
      {
        "q": "Should I resize by pixels or percentage?",
        "a": "Use pixels when a platform gives you a specific size to hit. Use a percentage when you just want everything smaller, like shrinking a batch of camera photos to half their size."
      },
      {
        "q": "Is there a file size limit?",
        "a": "50 MB per image, which covers almost any photo, screenshot or graphic. If a file is bigger, compress it first and then resize."
      },
      {
        "q": "What happens to EXIF data?",
        "a": "It is dropped. Re-encoding the image during resize removes camera metadata like location and shutter settings, which is handy if you would rather not share that."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Host the resized image?",
    "ctaBody": "Click Get URL on the main uploader.",
    "ctaButton": "Try the main uploader",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Redimensionador de imágenes — 100% en navegador | Gratis, ilimitado",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-compressor", "label": "Compresor de imágenes" },
      { "pageKey": "image-to-base64", "label": "Imagen a Base64" },
      { "pageKey": "base64-to-image", "label": "Base64 a imagen" },
      { "pageKey": "favicon-generator", "label": "Generador de favicon" }
    ],
    "metaDescription": "Cambia el tamaño de imágenes JPG, PNG y WebP en tu navegador por píxeles exactos o porcentaje, con bloqueo de relación de aspecto y soporte por lotes. Gratis, ilimitado, sin subidas.",
    "schemaName": "Redimensionador de imágenes",
    "schemaDescription": "Cambia el tamaño de imágenes por ancho, alto o porcentaje en tu navegador.",
    "badge": "Herramienta solo en navegador",
    "h1Pre": "Redimensionador de imágenes",
    "h1Highlight": "píxeles exactos, relación exacta.",
    "intro": "Escala imágenes por ancho, alto o porcentaje. Bloqueo de relación de aspecto, soporte por lotes, cero subidas.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Suelta las imágenes",
        "body": "Arrastra archivos PNG / JPG / WebP a la zona de carga."
      },
      {
        "title": "Elige modo y valor",
        "body": "Introduce un ancho, alto o porcentaje objetivo."
      },
      {
        "title": "Descarga",
        "body": "Cada resultado muestra las nuevas dimensiones y el tamaño del archivo."
      }
    ],
    "whyTitle": "Por qué redimensionar en el navegador",
    "whyItems": [
      {
        "title": "Tamaños exactos para plataformas",
        "body": "Instagram 1080, eBay 1600, LinkedIn 1200 — cumple con las especificaciones."
      },
      {
        "title": "Reducción por lotes",
        "body": "Escala muchas fotos a la vez por porcentaje antes de subirlas."
      },
      {
        "title": "Sin pérdida de calidad por subida",
        "body": "Redimensiona primero; los servicios recomprimen menos."
      },
      {
        "title": "Privacidad",
        "body": "Los archivos nunca salen de tu dispositivo."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Preserva la relación de aspecto?",
        "a": "Por defecto, sí. El bloqueo de relación está activado."
      },
      {
        "q": "¿Qué remuestreo utiliza?",
        "a": "El suavizado de imágenes de alta calidad del navegador: bicúbico o similar a Lanczos."
      },
      {
        "q": "¿Puedo ampliar?",
        "a": "Sí, pero el remuestreo del navegador no puede inventar detalles."
      },
      {
        "q": "¿Sube algo a la red?",
        "a": "No. Todo el redimensionamiento ocurre en el navegador mediante canvas."
      },
      {
        "q": "¿Preserva el formato?",
        "a": "Sí: PNG sigue siendo PNG, JPG sigue siendo JPG, WebP sigue siendo WebP."
      },
      {
        "q": "¿Qué pasa con los datos EXIF?",
        "a": "Se eliminan: la recodificación de canvas descarta todos los metadatos."
      },
      {
        "q": "¿Porcentaje o píxeles?",
        "a": "Píxeles cuando una plataforma tiene una especificación. Porcentaje para reducir por lotes."
      },
      {
        "q": "¿Lotes de diferentes tamaños?",
        "a": "No a la vez: esta herramienta aplica una regla. Ejecútala dos veces para resultados distintos."
      }
    ],
    "ctaTitle": "¿Alojar la imagen redimensionada?",
    "ctaBody": "Haz clic en Obtener URL en el cargador principal.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Redimensionner une image — 100% navigateur | Gratuit, illimité",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-compressor", "label": "Compresseur d'images" },
      { "pageKey": "image-to-base64", "label": "Image vers Base64" },
      { "pageKey": "base64-to-image", "label": "Base64 vers image" },
      { "pageKey": "favicon-generator", "label": "Générateur de favicon" }
    ],
    "metaDescription": "Redimensionnez vos images JPG, PNG et WebP directement dans votre navigateur par pixels ou pourcentage, avec verrouillage du ratio et support par lots. Gratuit, illimité, sans téléchargement.",
    "schemaName": "Redimensionneur d'image",
    "schemaDescription": "Redimensionnez vos images par largeur, hauteur ou pourcentage dans votre navigateur.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Redimensionneur d'image",
    "h1Highlight": "pixels exacts, ratio parfait.",
    "intro": "Redimensionnez vos images par largeur, hauteur ou pourcentage. Verrouillage du ratio, traitement par lots, aucune donnée envoyée.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Déposez vos images",
        "body": "Glissez vos fichiers PNG / JPG / WebP dans la zone prévue."
      },
      {
        "title": "Choisissez un mode et une valeur",
        "body": "Entrez une largeur, une hauteur ou un pourcentage cible."
      },
      {
        "title": "Téléchargez",
        "body": "Chaque résultat affiche les nouvelles dimensions et le poids du fichier."
      }
    ],
    "whyTitle": "Pourquoi redimensionner dans le navigateur",
    "whyItems": [
      {
        "title": "Tailles exactes pour les plateformes",
        "body": "Instagram 1080, eBay 1600, LinkedIn 1200 — respectez les spécifications."
      },
      {
        "title": "Réduction par lots",
        "body": "Redimensionnez plusieurs photos en pourcentage avant de les publier."
      },
      {
        "title": "Aucune perte liée au transfert",
        "body": "Redimensionnez d'abord ; les services recompresseront moins vos fichiers."
      },
      {
        "title": "Confidentialité",
        "body": "Vos fichiers ne quittent jamais votre appareil."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Le ratio est-il préservé ?",
        "a": "Oui, par défaut. Le verrouillage du ratio est activé."
      },
      {
        "q": "Quel rééchantillonnage est utilisé ?",
        "a": "Le lissage haute qualité du navigateur — type bicubique ou Lanczos."
      },
      {
        "q": "Puis-je agrandir une image ?",
        "a": "Oui, mais le rééchantillonnage du navigateur ne peut pas inventer de détails."
      },
      {
        "q": "Est-ce qu'il y a un envoi de données ?",
        "a": "Non. Tout le traitement se fait dans le navigateur via canvas."
      },
      {
        "q": "Le format est-il préservé ?",
        "a": "Oui — PNG reste PNG, JPG reste JPG, WebP reste WebP."
      },
      {
        "q": "Qu'advient-il des données EXIF ?",
        "a": "Elles sont supprimées — le réencodage via canvas efface toutes les métadonnées."
      },
      {
        "q": "Pourcentage ou pixels ?",
        "a": "Pixels pour respecter une spécification. Pourcentage pour réduire plusieurs images."
      },
      {
        "q": "Traiter des tailles différentes par lots ?",
        "a": "Pas simultanément — cet outil applique une règle unique. Relancez pour des sorties distinctes."
      }
    ],
    "ctaTitle": "Héberger l'image redimensionnée ?",
    "ctaBody": "Cliquez sur Obtenir l'URL sur l'outil d'upload principal.",
    "ctaButton": "Essayer l'outil d'upload"
  },
  "de": {
    "metaTitle": "Bildgrößen-Änderung — 100% im Browser | Kostenlos, unbegrenzt",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-compressor", "label": "Bildkompressor" },
      { "pageKey": "image-to-base64", "label": "Bild zu Base64" },
      { "pageKey": "base64-to-image", "label": "Base64 zu Bild" },
      { "pageKey": "favicon-generator", "label": "Favicon-Generator" }
    ],
    "metaDescription": "Ändern Sie die Größe von JPG-, PNG- und WebP-Bildern direkt im Browser nach exakten Pixeln oder Prozenten, mit Seitenverhältnis-Sperre und Batch-Unterstützung. Kostenlos, unbegrenzt, kein Upload.",
    "schemaName": "Bildgrößen-Änderung",
    "schemaDescription": "Ändern Sie die Bildgröße nach Pixelbreite, -höhe oder Prozentsatz direkt in Ihrem Browser.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "Bildgrößen-Änderung",
    "h1Highlight": "exakte Pixel, exaktes Verhältnis.",
    "intro": "Skalieren Sie Bilder nach Breite, Höhe oder Prozent. Seitenverhältnis-Sperre, Batch-Unterstützung, kein Upload erforderlich.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bilder ablegen",
        "body": "Ziehen Sie PNG-, JPG- oder WebP-Dateien in den Drop-Bereich."
      },
      {
        "title": "Modus & Wert wählen",
        "body": "Geben Sie eine Zielbreite, -höhe oder einen Prozentsatz ein."
      },
      {
        "title": "Herunterladen",
        "body": "Jedes Ergebnis zeigt die neuen Abmessungen und die Dateigröße an."
      }
    ],
    "whyTitle": "Warum die Größe im Browser ändern?",
    "whyItems": [
      {
        "title": "Exakte Größen für Plattformen",
        "body": "Instagram 1080, eBay 1600, LinkedIn 1200 — erfüllen Sie die Vorgaben."
      },
      {
        "title": "Batch-Verkleinerung",
        "body": "Skalieren Sie viele Fotos gleichzeitig prozentual vor dem Upload."
      },
      {
        "title": "Kein Qualitätsverlust durch Uploads",
        "body": "Ändern Sie die Größe zuerst; Dienste komprimieren dann weniger stark."
      },
      {
        "title": "Datenschutz",
        "body": "Dateien verlassen niemals Ihr Gerät."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wird das Seitenverhältnis beibehalten?",
        "a": "Standardmäßig ja. Die Seitenverhältnis-Sperre ist aktiviert."
      },
      {
        "q": "Welches Resampling wird verwendet?",
        "a": "Die hochwertige Bildglättung des Browsers — bikubisch oder ähnlich wie Lanczos."
      },
      {
        "q": "Kann ich Bilder vergrößern?",
        "a": "Ja, aber das Resampling im Browser kann keine Details hinzuerfinden."
      },
      {
        "q": "Wird etwas hochgeladen?",
        "a": "Nein. Die gesamte Größenänderung erfolgt im Browser über Canvas."
      },
      {
        "q": "Bleibt das Format erhalten?",
        "a": "Ja — PNG bleibt PNG, JPG bleibt JPG, WebP bleibt WebP."
      },
      {
        "q": "Was passiert mit EXIF-Daten?",
        "a": "Sie werden entfernt — die Neukodierung über Canvas verwirft alle Metadaten."
      },
      {
        "q": "Prozent oder Pixel?",
        "a": "Pixel, wenn eine Plattform Vorgaben hat. Prozent für die Batch-Verkleinerung."
      },
      {
        "q": "Unterschiedliche Größen im Batch?",
        "a": "Nicht gleichzeitig — dieses Tool wendet eine Regel an. Führen Sie es zweimal aus, um unterschiedliche Ergebnisse zu erhalten."
      }
    ],
    "ctaTitle": "Das geänderte Bild hosten?",
    "ctaBody": "Klicken Sie im Haupt-Uploader auf URL abrufen.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "画像リサイズ — ブラウザで完結 | 無料・無制限",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-compressor", "label": "画像圧縮" },
      { "pageKey": "image-to-base64", "label": "画像→Base64" },
      { "pageKey": "base64-to-image", "label": "Base64→画像" },
      { "pageKey": "favicon-generator", "label": "ファビコン生成" }
    ],
    "metaDescription": "JPG、PNG、WebP画像をブラウザ上でピクセルやパーセンテージ指定でリサイズ。アスペクト比固定、一括処理対応。アップロード不要で完全無料。",
    "schemaName": "画像リサイズツール",
    "schemaDescription": "ブラウザ上で画像の幅、高さ、またはパーセンテージを指定してリサイズします。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "画像リサイズ",
    "h1Highlight": "正確なピクセルと比率で。",
    "intro": "幅、高さ、パーセンテージで画像を拡大・縮小。アスペクト比固定、一括処理対応、アップロード不要。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "画像をドロップ",
        "body": "PNG / JPG / WebPファイルをドロップゾーンにドラッグ＆ドロップします。"
      },
      {
        "title": "モードと値を指定",
        "body": "目標とする幅、高さ、またはパーセンテージを入力します。"
      },
      {
        "title": "ダウンロード",
        "body": "リサイズ後の寸法とファイルサイズを確認してダウンロードします。"
      }
    ],
    "whyTitle": "ブラウザでリサイズする理由",
    "whyItems": [
      {
        "title": "プラットフォームに最適なサイズ",
        "body": "Instagram 1080、eBay 1600、LinkedIn 1200など、各仕様に正確に合わせられます。"
      },
      {
        "title": "一括縮小",
        "body": "アップロード前に複数の写真をまとめてパーセンテージで縮小できます。"
      },
      {
        "title": "アップロードによる画質低下なし",
        "body": "先にリサイズすることで、サービス側での再圧縮を最小限に抑えられます。"
      },
      {
        "title": "プライバシー",
        "body": "ファイルはデバイスから一切外部へ送信されません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "アスペクト比は維持されますか？",
        "a": "はい、デフォルトでアスペクト比固定が有効になっています。"
      },
      {
        "q": "どのようなリサンプリングが使われますか？",
        "a": "ブラウザの高品質な画像スムージング（バイキュービックまたはLanczosに近い手法）が使用されます。"
      },
      {
        "q": "拡大はできますか？",
        "a": "可能ですが、ブラウザのリサンプリングでは詳細なディテールを補完することはできません。"
      },
      {
        "q": "サーバーにアップロードされますか？",
        "a": "いいえ。すべてのリサイズ処理はブラウザ内のcanvasで行われます。"
      },
      {
        "q": "フォーマットは維持されますか？",
        "a": "はい。PNGはPNG、JPGはJPG、WebPはWebPのまま出力されます。"
      },
      {
        "q": "EXIFデータはどうなりますか？",
        "a": "削除されます。canvasでの再エンコード時にすべてのメタデータが破棄されます。"
      },
      {
        "q": "パーセントとピクセルどちらを使うべき？",
        "a": "プラットフォームに仕様がある場合はピクセルを、一括縮小にはパーセントを使用してください。"
      },
      {
        "q": "異なるサイズを一括で処理できますか？",
        "a": "一度にはできません。このツールは一つのルールを適用します。異なるサイズが必要な場合は2回に分けて実行してください。"
      }
    ],
    "ctaTitle": "リサイズした画像をホストしますか？",
    "ctaBody": "メインアップローダーの「URLを取得」をクリックしてください。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "图片调整大小工具 — 100% 浏览器处理 | 免费、无限制",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-compressor", "label": "图片压缩工具" },
      { "pageKey": "image-to-base64", "label": "图片转 Base64" },
      { "pageKey": "base64-to-image", "label": "Base64 转图片" },
      { "pageKey": "favicon-generator", "label": "Favicon 生成器" }
    ],
    "metaDescription": "在浏览器中按精确像素或百分比调整 JPG、PNG 和 WebP 图片大小，支持锁定宽高比和批量处理。免费、无限制、无需上传。",
    "schemaName": "图片调整大小工具",
    "schemaDescription": "在浏览器中按像素宽度、高度或百分比调整图片大小。",
    "badge": "纯浏览器工具",
    "h1Pre": "图片调整大小工具",
    "h1Highlight": "精确像素，完美比例。",
    "intro": "按宽度、高度或百分比缩放图片。支持锁定宽高比、批量处理，无需上传。",
    "howTitle": "使用方法",
    "steps": [
      {
        "title": "拖入图片",
        "body": "将 PNG / JPG / WebP 文件拖入指定区域。"
      },
      {
        "title": "选择模式与数值",
        "body": "输入目标宽度、高度或百分比。"
      },
      {
        "title": "下载",
        "body": "每个输出结果都会显示新的尺寸和文件大小。"
      }
    ],
    "whyTitle": "为什么选择在浏览器中调整大小",
    "whyItems": [
      {
        "title": "符合平台精确尺寸",
        "body": "Instagram 1080、eBay 1600、LinkedIn 1200 — 轻松达到规格要求。"
      },
      {
        "title": "批量缩放",
        "body": "上传前一次性按百分比缩放多张照片。"
      },
      {
        "title": "避免上传导致的质量损失",
        "body": "先调整大小，减少服务端的二次压缩。"
      },
      {
        "title": "隐私保护",
        "body": "文件永远不会离开您的设备。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "是否保留宽高比？",
        "a": "默认开启，支持锁定宽高比。"
      },
      {
        "q": "使用什么重采样算法？",
        "a": "使用浏览器的高质量图像平滑处理，类似于双三次或 Lanczos 算法。"
      },
      {
        "q": "可以放大图片吗？",
        "a": "可以，但浏览器重采样无法凭空增加细节。"
      },
      {
        "q": "会上传任何文件吗？",
        "a": "不会。所有调整都在浏览器中通过 canvas 完成。"
      },
      {
        "q": "会保留原格式吗？",
        "a": "是的，PNG 保持为 PNG，JPG 保持为 JPG，WebP 保持为 WebP。"
      },
      {
        "q": "EXIF 信息会怎样？",
        "a": "会被移除，canvas 重新编码会丢弃所有元数据。"
      },
      {
        "q": "使用百分比还是像素？",
        "a": "平台有明确规格时使用像素，批量缩小时使用百分比。"
      },
      {
        "q": "可以批量处理不同尺寸吗？",
        "a": "不能一次性完成，此工具应用统一规则。如需不同输出，请分批运行。"
      }
    ],
    "ctaTitle": "需要托管调整后的图片？",
    "ctaBody": "点击主上传器上的“获取 URL”。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
