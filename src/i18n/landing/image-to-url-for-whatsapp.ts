import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Share Images via URL on WhatsApp | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Image embed code generator" },
      { "pageKey": "image-url-for-chatgpt", "label": "Image URL for ChatGPT" },
      { "pageKey": "image-to-url-for-html", "label": "Image URL for HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Image hosting for Vercel" }
    ],
    "metaDescription": "Share images as links on WhatsApp instead of file attachments. No compression, no quality loss. Get a permanent URL and share it in any chat.",
    "schemaName": "ImageToURL for WhatsApp",
    "schemaDescription": "A tool to generate permanent image URLs for sharing high-quality photos on WhatsApp without compression.",
    "badge": "WHATSAPP SHARING",
    "h1Pre": "Image URLs for WhatsApp",
    "h1Highlight": "sharing.",
    "intro": "Share images as links instead of attachments. No compression, no quality loss, no storage limits. Upload once and share the URL in any WhatsApp chat.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag and drop or select any photo, screenshot, or graphic from your device."
      },
      {
        "title": "Copy the URL",
        "body": "Get a permanent, CDN-backed URL. One tap to copy it to your clipboard."
      },
      {
        "title": "Paste in WhatsApp",
        "body": "Paste the link in any WhatsApp chat. Recipients see a preview and can tap to view the full-quality image."
      }
    ],
    "whyTitle": "Why Share Links Instead of Attachments",
    "whyItems": [
      {
        "title": "No Compression",
        "body": "WhatsApp aggressively compresses images sent as attachments, often reducing quality by 70% or more. Sharing a URL bypasses compression entirely."
      },
      {
        "title": "Full Quality Preserved",
        "body": "Share high-resolution photos, detailed screenshots, and professional images without any quality degradation. Every pixel stays exactly as you uploaded it."
      },
      {
        "title": "Works in Groups",
        "body": "Share one URL in a group chat and everyone can view the full-quality image. No need to send the same attachment to multiple people."
      },
      {
        "title": "No Storage Limit",
        "body": "WhatsApp media takes up phone storage and can be lost when switching devices. Image URLs take zero storage and remain accessible permanently."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why share image links instead of attachments on WhatsApp?",
        "a": "WhatsApp compresses images when sent as attachments, reducing quality significantly. Sharing a URL instead preserves the original image quality."
      },
      {
        "q": "Will the image preview show in the WhatsApp chat?",
        "a": "Yes. When you paste an ImageToURL link in a WhatsApp chat, WhatsApp generates a link preview with a thumbnail of the image."
      },
      {
        "q": "Does this work in WhatsApp groups?",
        "a": "Yes. Image URLs work in one-on-one chats, group chats, WhatsApp Business, and WhatsApp Web."
      },
      {
        "q": "Do the image URLs expire?",
        "a": "No. ImageToURL generates permanent URLs. Your shared images remain accessible indefinitely, unlike WhatsApp media."
      },
      {
        "q": "Can I share multiple images at once?",
        "a": "Yes. Upload multiple images using our bulk upload feature, copy the URLs, and share them in your WhatsApp chat."
      }
    ],
    "ctaTitle": "Share images without compression",
    "ctaBody": "Upload an image, copy the URL, and paste it in WhatsApp for full quality, zero compression, and free sharing.",
    "ctaButton": "Upload Now"
  },
  "es": {
    "metaTitle": "Comparte imágenes mediante URL en WhatsApp | ImageToURL",
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
    "metaTitle": "Partagez des images via URL sur WhatsApp | ImageToURL",
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
