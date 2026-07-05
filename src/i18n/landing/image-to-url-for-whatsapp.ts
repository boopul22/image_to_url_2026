import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL for WhatsApp - Share a Link, Skip Compression | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Image embed code generator" },
      { "pageKey": "image-url-for-chatgpt", "label": "Image URL for ChatGPT" },
      { "pageKey": "image-to-url-for-html", "label": "Image URL for HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Image hosting for Vercel" }
    ],
    "metaDescription": "Turn an image into a URL for WhatsApp instead of sending a compressed attachment. Free, no sign-up. Paste one link in any chat and recipients open the full-quality file.",
    "schemaName": "Image to URL for WhatsApp",
    "schemaDescription": "A free tool that turns any image into a direct link you can paste in a WhatsApp chat, so recipients open the full-quality file in their browser instead of a re-compressed attachment.",
    "badge": "WHATSAPP SHARING",
    "h1Pre": "Image to URL for WhatsApp:",
    "h1Highlight": "share a link, not an attachment",
    "intro": "Want to turn an image to URL for WhatsApp without making an account? Drop your picture in the box above and you get a direct link in a couple of seconds. Paste that link into any chat and WhatsApp shows a preview card; recipients tap it to open the full-quality file in their browser. The point is simple: WhatsApp re-compresses photos you send as attachments, while a hosted link still points at your original file. One link also reaches every chat or group without re-uploading the same photo to each person.",
    "specsTitle": "Image to URL for WhatsApp at a glance",
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
    "howTitle": "How to share an image link in WhatsApp",
    "steps": [
      {
        "title": "Upload your image",
        "body": "Drag a photo, screenshot or graphic onto the box, or tap to pick one from your camera roll. JPG, PNG, WebP, GIF and SVG all work, up to 10MB each."
      },
      {
        "title": "Copy the URL",
        "body": "Your file lands on a fast CDN and a direct link pops out right away. It ends in the real extension, like .jpg or .png. One tap copies it."
      },
      {
        "title": "Paste it in a chat",
        "body": "Paste the link into any WhatsApp chat, group or status. WhatsApp shows a preview card, and recipients tap through to open the full-size file in their browser."
      }
    ],
    "whyTitle": "Why a link beats a WhatsApp attachment",
    "whyItems": [
      {
        "title": "Skips WhatsApp's photo compression",
        "body": "Photos you send as attachments get re-encoded and shrunk so they move fast over mobile data. A link points at the file you uploaded, so whoever opens it sees the original, not a squeezed copy."
      },
      {
        "title": "One link, every chat",
        "body": "Share the same URL across as many one-on-one chats and groups as you like. You upload once instead of attaching the same picture to each conversation."
      },
      {
        "title": "No account, no email",
        "body": "There's nothing to sign up for here. Drop the image in, copy the link, paste it. That's the whole flow, and it costs nothing."
      },
      {
        "title": "Honest about how long links last",
        "body": "Anonymous links stay live for at least a couple of weeks and are cleared on a monthly storage cleanup. Want one that never goes away? Make a free account and pick 'keep forever' when you upload."
      }
    ],
    "comparisonTitle": "Sharing a link vs sending a WhatsApp attachment",
    "comparisonIntro": "Both get a picture in front of someone, but they behave differently. An attachment travels through WhatsApp's compression and lands in each person's chat storage; a hosted link stays at full quality and works the same in every chat. Here's the trade-off.",
    "comparisonColumns": [
      "Method",
      "Quality kept",
      "Re-usable across chats",
      "Recipient sees",
      "Best for"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Image URL (this tool)",
          "Full, original file",
          "Yes, one link everywhere",
          "Preview card, taps to open full file",
          "High-detail photos, reusing one image"
        ]
      },
      {
        "cells": [
          "Photo attachment",
          "Re-compressed by WhatsApp",
          "No, re-send each time",
          "Inline image, saved to their phone",
          "Quick casual snaps"
        ]
      },
      {
        "cells": [
          "Document attachment",
          "Full quality, no compression",
          "No, re-send each time",
          "A file to download and open",
          "Sending the exact file once"
        ]
      },
      {
        "cells": [
          "WhatsApp status link",
          "Full quality at the link",
          "One link, seen by all contacts",
          "Preview, taps to your hosted image",
          "Broadcasting an image to everyone"
        ]
      }
    ],
    "useCasesTitle": "Where an image link helps on WhatsApp",
    "useCasesIntro": "Once your picture has a direct link, it slots into the places WhatsApp attachments fall short:",
    "useCases": [
      {
        "title": "Groups and broadcasts",
        "body": "Drop one link in a family or work group and everyone opens the same full-quality image. No re-sending the file to each chat or each person."
      },
      {
        "title": "Business catalog and status",
        "body": "Put an image link in a product description, a status update or a quick reply. Customers tap through to a clean, full-size shot instead of a blurry attachment."
      },
      {
        "title": "Sending detailed images",
        "body": "Screenshots of text, receipts, design proofs or maps stay readable. The recipient opens the original file in a browser, so fine detail survives."
      }
    ],
    "sections": [
      {
        "heading": "Will the image preview show in a WhatsApp chat?",
        "body": "When you paste a link into a chat, WhatsApp usually fetches a small preview card with a thumbnail before you send. Whether the card appears can depend on the network, the chat and WhatsApp's own caching, so treat it as a nice-to-have rather than a guarantee. Either way, the link itself always works: the recipient taps it and the image opens in their browser at full size. If no preview shows, a quick line of text like 'full-quality photo here' next to the link tells people what they are tapping."
      },
      {
        "heading": "Link vs attachment: what actually changes",
        "body": "Sending a photo as an attachment puts a copy in each recipient's chat, which then counts against their phone storage and can vanish when they switch devices or clear media. WhatsApp also re-encodes that copy to keep transfers small. A link does neither: nothing is stored on their phone, and the file they open is the one you uploaded. The trade-off is that opening a link takes a tap and a moment of data, where an inline photo is already there. For everyday snaps an attachment is fine; for detail or reuse, a link wins."
      },
      {
        "heading": "Is it safe to share image links this way?",
        "body": "Every link is served over HTTPS and points only at your image, with no redirect pages or trackers attached. The thing to remember is that anonymous uploads are public to anyone who has the link, so don't post anything private through a group where the URL could be forwarded. Keep your own copy of the file too, since free links are cleared on a regular schedule. For anything you need to rely on long term, sign in and choose to keep the upload."
      }
    ],
    "faqTitle": "Image to URL for WhatsApp FAQ",
    "faqs": [
      {
        "q": "How do I share an image as a link on WhatsApp?",
        "a": "Upload your image in the box above, copy the direct link it gives you, then paste that link into any WhatsApp chat, group or status. Recipients tap the link to open the full-size file in their browser."
      },
      {
        "q": "Why share a link instead of sending the photo as an attachment?",
        "a": "WhatsApp re-compresses photos sent as attachments so they transfer quickly. A hosted link still points at your original file, so the picture keeps its full quality and you can reuse the same link in every chat."
      },
      {
        "q": "Will the image preview show in the WhatsApp chat?",
        "a": "Usually yes. When you paste the link, WhatsApp tries to fetch a preview card with a thumbnail. It can depend on network and caching, so it isn't guaranteed, but the link always opens the full image when tapped."
      },
      {
        "q": "Does the recipient see the full-quality image?",
        "a": "Yes. Tapping the link opens your original uploaded file in their browser at full resolution. Nothing on our side compresses or resizes it."
      },
      {
        "q": "Does this work in WhatsApp groups?",
        "a": "Yes. A direct image link works the same in one-on-one chats, group chats, WhatsApp status, WhatsApp Business and WhatsApp Web. One link reaches everyone."
      },
      {
        "q": "Can I share the same image link in many chats?",
        "a": "Yes, that's the main advantage. Upload once and paste the same URL into as many chats and groups as you want, without re-uploading the photo each time."
      },
      {
        "q": "What image formats and sizes can I use?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10MB per file. The link ends in the real extension, so it behaves like the original file when opened."
      },
      {
        "q": "Can I share a screenshot or a photo from my camera roll?",
        "a": "Yes. A screenshot or phone photo is just a PNG or JPG, so it uploads the same way. Pick it from your gallery, copy the link, and paste it in WhatsApp."
      },
      {
        "q": "Do the image links expire?",
        "a": "Anonymous links stay live for at least a couple of weeks and are removed on a monthly storage cleanup. For a link that lasts, create a free account and choose 'keep forever' when you upload. Keep your own copy either way."
      },
      {
        "q": "Does the tool compress or watermark my image?",
        "a": "No. You get back the exact file you uploaded, at full resolution, with no re-compression and no watermark. The only compression in the picture is the one WhatsApp would have applied to an attachment, which a link avoids."
      },
      {
        "q": "Is it safe, and who can see the image?",
        "a": "Links use HTTPS and point only at your file, with no trackers. But anonymous uploads are public to anyone with the link, so don't share anything private where the URL could be forwarded on."
      },
      {
        "q": "Can I share multiple images at once?",
        "a": "Yes. Upload several images, copy each direct link, and paste them into your WhatsApp chat. Each one opens its own full-quality file."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Turn your image into a WhatsApp-ready link",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct link in seconds. Paste it in any chat for full quality, no sign-up, no compression.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Comparte imágenes mediante URL en WhatsApp | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Generador de código incrustado de imagen" },
      { "pageKey": "image-url-for-chatgpt", "label": "URL de imagen para ChatGPT" },
      { "pageKey": "image-to-url-for-html", "label": "URL de imagen para HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Hosting de imágenes para Vercel" }
    ],
    "metaDescription": "Comparte imágenes como enlaces en WhatsApp en lugar de archivos adjuntos. Sin compresión, sin pérdida de calidad. Obtén una URL permanente y compártela en cualquier chat.",
    "schemaName": "ImageToURL para WhatsApp",
    "schemaDescription": "Una herramienta para generar URLs de imágenes permanentes para compartir fotos de alta calidad en WhatsApp sin compresión.",
    "badge": "COMPARTIR EN WHATSAPP",
    "h1Pre": "URLs de imágenes para WhatsApp",
    "h1Highlight": "compartir.",
    "intro": "Comparte imágenes como enlaces en lugar de archivos adjuntos. Sin compresión, sin pérdida de calidad y sin límites de almacenamiento. Sube una vez y comparte la URL en cualquier chat de WhatsApp.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta o selecciona cualquier foto, captura de pantalla o gráfico desde tu dispositivo."
      },
      {
        "title": "Copia la URL",
        "body": "Obtén una URL permanente respaldada por CDN. Un toque para copiarla a tu portapapeles."
      },
      {
        "title": "Pega en WhatsApp",
        "body": "Pega el enlace en cualquier chat de WhatsApp. Los destinatarios verán una vista previa y podrán tocar para ver la imagen en calidad original."
      }
    ],
    "whyTitle": "Por qué compartir enlaces en lugar de archivos adjuntos",
    "whyItems": [
      {
        "title": "Sin compresión",
        "body": "WhatsApp comprime agresivamente las imágenes enviadas como archivos adjuntos, reduciendo a menudo la calidad en un 70% o más. Compartir una URL evita la compresión por completo."
      },
      {
        "title": "Calidad total preservada",
        "body": "Comparte fotos de alta resolución, capturas de pantalla detalladas e imágenes profesionales sin degradación de calidad. Cada píxel se mantiene exactamente como lo subiste."
      },
      {
        "title": "Funciona en grupos",
        "body": "Comparte una URL en un chat grupal y todos podrán ver la imagen en calidad original. No es necesario enviar el mismo archivo a varias personas."
      },
      {
        "title": "Sin límite de almacenamiento",
        "body": "Los archivos multimedia de WhatsApp ocupan espacio en el teléfono y pueden perderse al cambiar de dispositivo. Las URLs de imágenes no ocupan espacio y permanecen accesibles permanentemente."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué compartir enlaces de imágenes en lugar de archivos adjuntos en WhatsApp?",
        "a": "WhatsApp comprime las imágenes cuando se envían como archivos adjuntos, reduciendo la calidad significativamente. Compartir una URL preserva la calidad original de la imagen."
      },
      {
        "q": "¿Se mostrará la vista previa de la imagen en el chat de WhatsApp?",
        "a": "Sí. Cuando pegas un enlace de ImageToURL en un chat de WhatsApp, WhatsApp genera una vista previa del enlace con una miniatura de la imagen."
      },
      {
        "q": "¿Funciona esto en grupos de WhatsApp?",
        "a": "Sí. Las URLs de imágenes funcionan en chats individuales, chats grupales, WhatsApp Business y WhatsApp Web."
      },
      {
        "q": "¿Caducan las URLs de las imágenes?",
        "a": "No. ImageToURL genera URLs permanentes. Tus imágenes compartidas permanecen accesibles indefinidamente, a diferencia de los archivos multimedia de WhatsApp."
      },
      {
        "q": "¿Puedo compartir varias imágenes a la vez?",
        "a": "Sí. Sube varias imágenes usando nuestra función de carga masiva, copia las URLs y compártelas en tu chat de WhatsApp."
      }
    ],
    "ctaTitle": "Comparte imágenes sin compresión",
    "ctaBody": "Sube una imagen, copia la URL y pégala en WhatsApp para obtener calidad total, cero compresión y uso compartido gratuito.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Image en URL pour WhatsApp — Gratuit, sans compression | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Générateur de code intégré d'image" },
      { "pageKey": "image-url-for-chatgpt", "label": "URL d'image pour ChatGPT" },
      { "pageKey": "image-to-url-for-html", "label": "URL d'image pour HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Hébergement d'images pour Vercel" }
    ],
    "metaDescription": "Partagez vos images sous forme de liens sur WhatsApp au lieu de pièces jointes. Aucune compression, aucune perte de qualité. Obtenez une URL permanente et partagez-la dans n'importe quelle discussion.",
    "schemaName": "ImageToURL pour WhatsApp",
    "schemaDescription": "Un outil pour générer des URL d'images permanentes afin de partager des photos de haute qualité sur WhatsApp sans compression.",
    "badge": "PARTAGE WHATSAPP",
    "h1Pre": "URL d'images pour WhatsApp",
    "h1Highlight": "partage.",
    "intro": "Partagez vos images sous forme de liens plutôt que de pièces jointes. Aucune compression, aucune perte de qualité, aucune limite de stockage. Téléchargez une fois et partagez l'URL dans n'importe quelle discussion WhatsApp.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez ou sélectionnez n'importe quelle photo, capture d'écran ou graphique depuis votre appareil."
      },
      {
        "title": "Copiez l'URL",
        "body": "Obtenez une URL permanente hébergée sur un CDN. Un seul clic pour la copier dans votre presse-papiers."
      },
      {
        "title": "Collez dans WhatsApp",
        "body": "Collez le lien dans n'importe quelle discussion WhatsApp. Les destinataires verront un aperçu et pourront cliquer pour voir l'image en pleine qualité."
      }
    ],
    "whyTitle": "Pourquoi partager des liens plutôt que des pièces jointes",
    "whyItems": [
      {
        "title": "Aucune compression",
        "body": "WhatsApp compresse agressivement les images envoyées en pièces jointes, réduisant souvent la qualité de 70 % ou plus. Le partage par URL contourne totalement cette compression."
      },
      {
        "title": "Qualité préservée",
        "body": "Partagez des photos haute résolution, des captures d'écran détaillées et des images professionnelles sans aucune dégradation. Chaque pixel reste exactement tel que vous l'avez téléchargé."
      },
      {
        "title": "Fonctionne dans les groupes",
        "body": "Partagez une seule URL dans une discussion de groupe et tout le monde peut voir l'image en pleine qualité. Plus besoin d'envoyer la même pièce jointe à plusieurs personnes."
      },
      {
        "title": "Aucune limite de stockage",
        "body": "Les médias WhatsApp occupent de l'espace de stockage sur le téléphone et peuvent être perdus lors d'un changement d'appareil. Les URL d'images n'occupent aucun espace et restent accessibles en permanence."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi partager des liens d'images plutôt que des pièces jointes sur WhatsApp ?",
        "a": "WhatsApp compresse les images envoyées en pièces jointes, ce qui réduit considérablement la qualité. Partager une URL permet de conserver la qualité originale de l'image."
      },
      {
        "q": "L'aperçu de l'image s'affichera-t-il dans la discussion WhatsApp ?",
        "a": "Oui. Lorsque vous collez un lien ImageToURL dans une discussion WhatsApp, WhatsApp génère un aperçu du lien avec une vignette de l'image."
      },
      {
        "q": "Cela fonctionne-t-il dans les groupes WhatsApp ?",
        "a": "Oui. Les URL d'images fonctionnent dans les discussions individuelles, les groupes, WhatsApp Business et WhatsApp Web."
      },
      {
        "q": "Les URL d'images expirent-elles ?",
        "a": "Non. ImageToURL génère des URL permanentes. Vos images partagées restent accessibles indéfiniment, contrairement aux médias WhatsApp."
      },
      {
        "q": "Puis-je partager plusieurs images à la fois ?",
        "a": "Oui. Téléchargez plusieurs images en utilisant notre fonction de téléchargement groupé, copiez les URL et partagez-les dans votre discussion WhatsApp."
      }
    ],
    "ctaTitle": "Partagez des images sans compression",
    "ctaBody": "Téléchargez une image, copiez l'URL et collez-la dans WhatsApp pour une qualité optimale, zéro compression et un partage gratuit.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bilder per URL auf WhatsApp teilen | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Bild-Embed-Code-Generator" },
      { "pageKey": "image-url-for-chatgpt", "label": "Bild-URL für ChatGPT" },
      { "pageKey": "image-to-url-for-html", "label": "Bild-URL für HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Bild-Hosting für Vercel" }
    ],
    "metaDescription": "Teilen Sie Bilder als Links auf WhatsApp statt als Dateianhänge. Keine Komprimierung, kein Qualitätsverlust. Erhalten Sie eine permanente URL und teilen Sie diese in jedem Chat.",
    "schemaName": "ImageToURL für WhatsApp",
    "schemaDescription": "Ein Tool zur Erstellung permanenter Bild-URLs, um hochwertige Fotos ohne Komprimierung auf WhatsApp zu teilen.",
    "badge": "WHATSAPP SHARING",
    "h1Pre": "Bild-URLs für WhatsApp",
    "h1Highlight": "teilen.",
    "intro": "Teilen Sie Bilder als Links statt als Anhänge. Keine Komprimierung, kein Qualitätsverlust, keine Speicherplatzbegrenzung. Einmal hochladen und die URL in jedem WhatsApp-Chat teilen.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie ein Foto, einen Screenshot oder eine Grafik per Drag-and-Drop hinein oder wählen Sie diese von Ihrem Gerät aus."
      },
      {
        "title": "URL kopieren",
        "body": "Erhalten Sie eine permanente, CDN-gestützte URL. Mit einem Klick in die Zwischenablage kopieren."
      },
      {
        "title": "In WhatsApp einfügen",
        "body": "Fügen Sie den Link in einen beliebigen WhatsApp-Chat ein. Empfänger sehen eine Vorschau und können das Bild in voller Qualität öffnen."
      }
    ],
    "whyTitle": "Warum Links statt Anhänge teilen?",
    "whyItems": [
      {
        "title": "Keine Komprimierung",
        "body": "WhatsApp komprimiert Bilder, die als Anhang gesendet werden, oft um 70 % oder mehr. Das Teilen per URL umgeht diese Komprimierung vollständig."
      },
      {
        "title": "Volle Qualität bleibt erhalten",
        "body": "Teilen Sie hochauflösende Fotos, detaillierte Screenshots und professionelle Bilder ohne Qualitätsverlust. Jedes Pixel bleibt exakt so, wie Sie es hochgeladen haben."
      },
      {
        "title": "Funktioniert in Gruppen",
        "body": "Teilen Sie eine URL in einem Gruppenchat, damit jeder das Bild in voller Qualität sehen kann. Sie müssen nicht denselben Anhang an mehrere Personen senden."
      },
      {
        "title": "Kein Speicherplatzlimit",
        "body": "WhatsApp-Medien belegen Speicherplatz auf dem Telefon und können beim Gerätewechsel verloren gehen. Bild-URLs benötigen keinen Speicherplatz und bleiben dauerhaft abrufbar."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum Bild-Links statt Anhänge auf WhatsApp teilen?",
        "a": "WhatsApp komprimiert Bilder bei Anhängen stark. Das Teilen einer URL bewahrt hingegen die ursprüngliche Bildqualität."
      },
      {
        "q": "Wird eine Bildvorschau im WhatsApp-Chat angezeigt?",
        "a": "Ja. Wenn Sie einen ImageToURL-Link in WhatsApp einfügen, generiert WhatsApp eine Link-Vorschau mit einem Miniaturbild."
      },
      {
        "q": "Funktioniert das in WhatsApp-Gruppen?",
        "a": "Ja. Bild-URLs funktionieren in Einzelchats, Gruppenchats, WhatsApp Business und WhatsApp Web."
      },
      {
        "q": "Laufen die Bild-URLs ab?",
        "a": "Nein. ImageToURL generiert permanente URLs. Ihre geteilten Bilder bleiben unbegrenzt abrufbar, im Gegensatz zu WhatsApp-Medien."
      },
      {
        "q": "Kann ich mehrere Bilder gleichzeitig teilen?",
        "a": "Ja. Laden Sie mehrere Bilder über unsere Massen-Upload-Funktion hoch, kopieren Sie die URLs und teilen Sie diese in Ihrem WhatsApp-Chat."
      }
    ],
    "ctaTitle": "Bilder ohne Komprimierung teilen",
    "ctaBody": "Laden Sie ein Bild hoch, kopieren Sie die URL und fügen Sie sie in WhatsApp ein – für volle Qualität, ohne Komprimierung und kostenlos.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "WhatsAppで画像をURL共有 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "画像埋め込みコード生成" },
      { "pageKey": "image-url-for-chatgpt", "label": "ChatGPT用画像URL" },
      { "pageKey": "image-to-url-for-html", "label": "HTML用画像URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel用画像ホスティング" }
    ],
    "metaDescription": "WhatsAppで画像をファイル添付ではなくリンクとして共有。圧縮なし、画質劣化なし。永久URLを取得して、あらゆるチャットで共有しましょう。",
    "schemaName": "ImageToURL for WhatsApp",
    "schemaDescription": "WhatsAppで高画質な写真を圧縮なしで共有するための、永久画像URL生成ツール。",
    "badge": "WHATSAPP共有",
    "h1Pre": "WhatsAppのための",
    "h1Highlight": "画像URL共有",
    "intro": "画像をファイル添付ではなくリンクとして共有しましょう。圧縮なし、画質劣化なし、ストレージ制限もありません。一度アップロードすれば、WhatsAppのどのチャットでもURLを共有できます。",
    "howTitle": "使い方は簡単",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "デバイスから写真、スクリーンショット、グラフィックをドラッグ＆ドロップまたは選択します。"
      },
      {
        "title": "URLをコピー",
        "body": "CDN対応の永久URLを取得します。ワンタップでクリップボードにコピーできます。"
      },
      {
        "title": "WhatsAppに貼り付け",
        "body": "WhatsAppのチャットにリンクを貼り付けます。受信者はプレビューを確認でき、タップすればフル画質の画像を表示できます。"
      }
    ],
    "whyTitle": "なぜ添付ファイルではなくリンクで共有するのか",
    "whyItems": [
      {
        "title": "圧縮なし",
        "body": "WhatsAppは添付ファイルを強力に圧縮するため、画質が70%以上低下することがあります。URL共有なら圧縮を完全に回避できます。"
      },
      {
        "title": "フル画質を維持",
        "body": "高解像度の写真、詳細なスクリーンショット、プロ仕様の画像を画質劣化なしで共有。アップロードしたそのままのピクセルを維持します。"
      },
      {
        "title": "グループでも利用可能",
        "body": "グループチャットでURLを1つ共有すれば、全員がフル画質の画像を確認できます。同じファイルを複数人に送る必要はありません。"
      },
      {
        "title": "ストレージ制限なし",
        "body": "WhatsAppのメディアはスマホの容量を消費し、機種変更時に消える可能性があります。画像URLならストレージを消費せず、永久にアクセス可能です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "WhatsAppで添付ファイルではなく画像リンクを共有する理由は？",
        "a": "WhatsAppは添付ファイルを送信する際に圧縮を行い、画質が大幅に低下します。URLで共有することで、元の画質を維持できます。"
      },
      {
        "q": "WhatsAppのチャットで画像プレビューは表示されますか？",
        "a": "はい。ImageToURLのリンクをWhatsAppのチャットに貼り付けると、画像のサムネイルを含むリンクプレビューが生成されます。"
      },
      {
        "q": "WhatsAppグループでも使えますか？",
        "a": "はい。画像URLは個人チャット、グループチャット、WhatsApp Business、WhatsApp Webのすべてで利用可能です。"
      },
      {
        "q": "画像URLに有効期限はありますか？",
        "a": "いいえ。ImageToURLは永久URLを生成します。WhatsAppのメディアとは異なり、共有した画像には無期限でアクセスできます。"
      },
      {
        "q": "複数の画像を一度に共有できますか？",
        "a": "はい。一括アップロード機能を使用して複数の画像をアップロードし、それぞれのURLをコピーしてWhatsAppチャットで共有できます。"
      }
    ],
    "ctaTitle": "圧縮なしで画像を共有",
    "ctaBody": "画像をアップロードしてURLをコピーし、WhatsAppに貼り付けるだけで、フル画質・圧縮なしの無料共有が可能です。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "通过 URL 在 WhatsApp 上分享图片 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "图片嵌入代码生成器" },
      { "pageKey": "image-url-for-chatgpt", "label": "ChatGPT 图片 URL" },
      { "pageKey": "image-to-url-for-html", "label": "HTML 图片 URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel 图片托管" }
    ],
    "metaDescription": "在 WhatsApp 上以链接形式分享图片，而非文件附件。无压缩，无画质损失。获取永久 URL 并在任何聊天中分享。",
    "schemaName": "用于 WhatsApp 的 ImageToURL",
    "schemaDescription": "一个用于生成永久图片 URL 的工具，可在 WhatsApp 上分享高质量照片而无需压缩。",
    "badge": "WHATSAPP 分享",
    "h1Pre": "用于 WhatsApp 的图片 URL",
    "h1Highlight": "分享。",
    "intro": "以链接形式而非附件分享图片。无压缩、无画质损失、无存储限制。上传一次，即可在任何 WhatsApp 聊天中分享 URL。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "从您的设备拖放或选择任何照片、截图或图形。"
      },
      {
        "title": "复制 URL",
        "body": "获取一个由 CDN 支持的永久 URL。一键即可复制到剪贴板。"
      },
      {
        "title": "在 WhatsApp 中粘贴",
        "body": "将链接粘贴到任何 WhatsApp 聊天中。接收者可以看到预览，并可点击查看全质量图片。"
      }
    ],
    "whyTitle": "为什么要用链接代替附件分享",
    "whyItems": [
      {
        "title": "无压缩",
        "body": "WhatsApp 会对作为附件发送的图片进行强力压缩，通常会降低 70% 或更多的画质。分享 URL 可完全绕过压缩。"
      },
      {
        "title": "保留完整画质",
        "body": "分享高分辨率照片、详细截图和专业图片，且不会有任何画质损失。每一个像素都保持您上传时的原样。"
      },
      {
        "title": "适用于群组",
        "body": "在群聊中分享一个 URL，每个人都能查看全质量图片。无需向多人发送相同的附件。"
      },
      {
        "title": "无存储限制",
        "body": "WhatsApp 媒体文件会占用手机存储空间，且在更换设备时可能会丢失。图片 URL 不占用任何存储空间，并可永久访问。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么在 WhatsApp 上要用图片链接而不是附件分享？",
        "a": "WhatsApp 在发送附件时会压缩图片，从而显著降低画质。改用 URL 分享可保留原始图片质量。"
      },
      {
        "q": "图片预览会在 WhatsApp 聊天中显示吗？",
        "a": "是的。当您在 WhatsApp 聊天中粘贴 ImageToURL 链接时，WhatsApp 会生成带有图片缩略图的链接预览。"
      },
      {
        "q": "这适用于 WhatsApp 群组吗？",
        "a": "是的。图片 URL 适用于一对一聊天、群聊、WhatsApp Business 和 WhatsApp Web。"
      },
      {
        "q": "图片 URL 会过期吗？",
        "a": "不会。ImageToURL 生成的是永久 URL。与 WhatsApp 媒体不同，您分享的图片可以无限期访问。"
      },
      {
        "q": "我可以一次分享多张图片吗？",
        "a": "可以。使用我们的批量上传功能上传多张图片，复制 URL，然后在 WhatsApp 聊天中分享即可。"
      }
    ],
    "ctaTitle": "无压缩分享图片",
    "ctaBody": "上传图片，复制 URL，并粘贴到 WhatsApp 中，即可享受全画质、零压缩的免费分享体验。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
