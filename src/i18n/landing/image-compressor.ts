import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Compressor — 100% in Browser | Free, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-resizer", "label": "Image resizer" },
      { "pageKey": "image-to-base64", "label": "Image to Base64" },
      { "pageKey": "base64-to-image", "label": "Base64 to image" },
      { "pageKey": "favicon-generator", "label": "Favicon generator" }
    ],
    "metaDescription": "Compress JPG, PNG, and WebP images in your browser with adjustable quality and live before/after sizes. Free, batch-friendly, no signup, no upload.",
    "schemaName": "Image Compressor",
    "schemaDescription": "Compress PNG, JPG, and WebP images in your browser. Adjustable quality and format.",
    "badge": "Browser-only Tool",
    "h1Pre": "Image Compressor",
    "h1Highlight": "half the size, same look.",
    "intro": "Shrink JPG, PNG, or WebP files without uploading them anywhere. Live before/after sizes, adjustable quality, batch-friendly.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Drop images",
        "body": "Drag PNG, JPG, or WebP files into the drop zone."
      },
      {
        "title": "Pick format & quality",
        "body": "Match source or force to JPG/WebP; slide quality between 30–100%."
      },
      {
        "title": "Download smaller files",
        "body": "Each result shows before/after size."
      }
    ],
    "whyTitle": "Why compress locally",
    "whyItems": [
      {
        "title": "Faster uploads",
        "body": "Pre-compressed files upload faster everywhere."
      },
      {
        "title": "Better Core Web Vitals",
        "body": "Smaller images improve LCP scores."
      },
      {
        "title": "Email-friendly sizes",
        "body": "Fit under Gmail/Outlook attachment caps."
      },
      {
        "title": "Privacy-first",
        "body": "Your files never leave your browser."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "How much can I compress without visible quality loss?",
        "a": "For photos, quality 80–85 in JPG or WebP drops file size 50–70% and is visually indistinguishable on screens."
      },
      {
        "q": "Is this really compressing, or just converting?",
        "a": "Both. The image is re-encoded at a lower quality target."
      },
      {
        "q": "Does it upload my images?",
        "a": "No. The compressor runs in your browser via canvas."
      },
      {
        "q": "Will PNG transparency be preserved?",
        "a": "Only if you output PNG or WebP. JPG flattens to white."
      },
      {
        "q": "Large images (10 MB+)?",
        "a": "Works. No server roundtrip means you are bounded only by RAM."
      },
      {
        "q": "Does it strip metadata?",
        "a": "Yes. EXIF, GPS, and ICC profiles are dropped."
      },
      {
        "q": "Batch hundreds of images?",
        "a": "Yes — drop as many as you want."
      },
      {
        "q": "Best use case?",
        "a": "Web delivery, email attachments, and marketplace listings."
      }
    ],
    "ctaTitle": "Need a hosted URL?",
    "ctaBody": "Upload the compressed file for a permanent link.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Compresor de imágenes — 100% en el navegador | Gratis, sin subidas",
    "metaDescription": "Comprime imágenes JPG, PNG y WebP en tu navegador con calidad ajustable y vista previa en tiempo real. Gratis, por lotes, sin registro ni subidas a servidores.",
    "schemaName": "Compresor de imágenes",
    "schemaDescription": "Comprime imágenes PNG, JPG y WebP en tu navegador. Calidad y formato ajustables.",
    "badge": "Herramienta exclusiva del navegador",
    "h1Pre": "Compresor de imágenes",
    "h1Highlight": "mitad de tamaño, misma calidad.",
    "intro": "Reduce archivos JPG, PNG o WebP sin subirlos a ningún sitio. Compara tamaños antes y después, ajusta la calidad y procesa por lotes.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Suelta las imágenes",
        "body": "Arrastra tus archivos PNG, JPG o WebP a la zona de carga."
      },
      {
        "title": "Elige formato y calidad",
        "body": "Mantén el formato original o convierte a JPG/WebP; ajusta la calidad entre 30% y 100%."
      },
      {
        "title": "Descarga archivos más ligeros",
        "body": "Cada resultado muestra el tamaño antes y después de la compresión."
      }
    ],
    "whyTitle": "Por qué comprimir localmente",
    "whyItems": [
      {
        "title": "Cargas más rápidas",
        "body": "Los archivos precomprimidos se suben más rápido a cualquier plataforma."
      },
      {
        "title": "Mejores Core Web Vitals",
        "body": "Las imágenes más pequeñas mejoran tus puntuaciones de LCP."
      },
      {
        "title": "Tamaños ideales para email",
        "body": "Cumple con los límites de adjuntos de Gmail y Outlook."
      },
      {
        "title": "Privacidad ante todo",
        "body": "Tus archivos nunca salen de tu navegador."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cuánto puedo comprimir sin pérdida de calidad visible?",
        "a": "Para fotos, una calidad de 80-85 en JPG o WebP reduce el tamaño entre un 50% y 70% sin diferencias visuales perceptibles en pantalla."
      },
      {
        "q": "¿Es compresión real o solo conversión?",
        "a": "Ambas. La imagen se vuelve a codificar con un objetivo de calidad inferior."
      },
      {
        "q": "¿Se suben mis imágenes a algún servidor?",
        "a": "No. El compresor se ejecuta localmente en tu navegador mediante canvas."
      },
      {
        "q": "¿Se conserva la transparencia PNG?",
        "a": "Solo si eliges formato PNG o WebP. JPG aplana la imagen con fondo blanco."
      },
      {
        "q": "¿Qué pasa con imágenes grandes (más de 10 MB)?",
        "a": "Funciona perfectamente. Al no haber comunicación con el servidor, el único límite es la memoria RAM de tu equipo."
      },
      {
        "q": "¿Elimina los metadatos?",
        "a": "Sí. Se eliminan los perfiles EXIF, GPS e ICC."
      },
      {
        "q": "¿Puedo procesar cientos de imágenes a la vez?",
        "a": "Sí, puedes arrastrar tantas como necesites."
      },
      {
        "q": "¿Cuál es el mejor uso?",
        "a": "Optimización web, adjuntos de correo electrónico y listados en marketplaces."
      }
    ],
    "ctaTitle": "¿Necesitas una URL alojada?",
    "ctaBody": "Sube el archivo comprimido para obtener un enlace permanente.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Compresseur d'image — 100% dans le navigateur | Gratuit, sans téléchargement",
    "metaDescription": "Compressez vos images JPG, PNG et WebP directement dans votre navigateur avec une qualité réglable et un aperçu avant/après. Gratuit, par lots, sans inscription, sans envoi sur serveur.",
    "schemaName": "Compresseur d'image",
    "schemaDescription": "Compressez des images PNG, JPG et WebP dans votre navigateur. Qualité et format ajustables.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Compresseur d'image",
    "h1Highlight": "taille réduite, même qualité.",
    "intro": "Réduisez vos fichiers JPG, PNG ou WebP sans jamais les envoyer sur un serveur. Aperçu avant/après en direct, qualité ajustable et traitement par lots.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Déposez vos images",
        "body": "Glissez vos fichiers PNG, JPG ou WebP dans la zone de dépôt."
      },
      {
        "title": "Choisissez le format et la qualité",
        "body": "Conservez le format d'origine ou convertissez en JPG/WebP ; ajustez la qualité entre 30 et 100 %."
      },
      {
        "title": "Téléchargez les fichiers optimisés",
        "body": "Chaque résultat affiche la taille avant et après compression."
      }
    ],
    "whyTitle": "Pourquoi compresser localement",
    "whyItems": [
      {
        "title": "Uploads plus rapides",
        "body": "Les fichiers compressés se chargent plus rapidement partout."
      },
      {
        "title": "Meilleurs Core Web Vitals",
        "body": "Des images plus légères améliorent vos scores LCP."
      },
      {
        "title": "Idéal pour les emails",
        "body": "Respectez les limites de taille des pièces jointes Gmail/Outlook."
      },
      {
        "title": "Confidentialité totale",
        "body": "Vos fichiers ne quittent jamais votre navigateur."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Jusqu'où compresser sans perte de qualité visible ?",
        "a": "Pour les photos, une qualité de 80 à 85 en JPG ou WebP réduit la taille de 50 à 70 % sans perte visuelle notable sur écran."
      },
      {
        "q": "S'agit-il d'une vraie compression ou d'une conversion ?",
        "a": "Les deux. L'image est ré-encodée avec une cible de qualité inférieure."
      },
      {
        "q": "Mes images sont-elles envoyées sur un serveur ?",
        "a": "Non. Le compresseur fonctionne localement dans votre navigateur via canvas."
      },
      {
        "q": "La transparence PNG est-elle préservée ?",
        "a": "Oui, si vous choisissez le format PNG ou WebP. Le format JPG aplatit l'image sur un fond blanc."
      },
      {
        "q": "Qu'en est-il des images volumineuses (10 Mo+) ?",
        "a": "Cela fonctionne. Comme il n'y a pas d'échange serveur, vous n'êtes limité que par la mémoire vive de votre appareil."
      },
      {
        "q": "Les métadonnées sont-elles supprimées ?",
        "a": "Oui. Les profils EXIF, GPS et ICC sont supprimés."
      },
      {
        "q": "Puis-je traiter des centaines d'images par lots ?",
        "a": "Oui, vous pouvez en déposer autant que vous le souhaitez."
      },
      {
        "q": "Quel est le meilleur cas d'utilisation ?",
        "a": "Optimisation web, pièces jointes d'emails et annonces sur les places de marché."
      }
    ],
    "ctaTitle": "Besoin d'une URL hébergée ?",
    "ctaBody": "Envoyez le fichier compressé pour obtenir un lien permanent.",
    "ctaButton": "Essayer l'uploader principal"
  },
  "de": {
    "metaTitle": "Bildkompressor — 100% im Browser | Kostenlos, kein Upload",
    "metaDescription": "Komprimieren Sie JPG-, PNG- und WebP-Bilder direkt in Ihrem Browser mit einstellbarer Qualität und Live-Vorschau. Kostenlos, stapelverarbeitungsfähig, ohne Anmeldung, ohne Upload.",
    "schemaName": "Bildkompressor",
    "schemaDescription": "Komprimieren Sie PNG-, JPG- und WebP-Bilder in Ihrem Browser. Einstellbare Qualität und Formate.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "Bildkompressor",
    "h1Highlight": "halbe Größe, gleiche Optik.",
    "intro": "Verkleinern Sie JPG-, PNG- oder WebP-Dateien, ohne sie irgendwo hochzuladen. Live-Größenvergleich, einstellbare Qualität und Stapelverarbeitung.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bilder ablegen",
        "body": "Ziehen Sie PNG-, JPG- oder WebP-Dateien in den Drop-Bereich."
      },
      {
        "title": "Format & Qualität wählen",
        "body": "Behalten Sie das Quellformat bei oder konvertieren Sie zu JPG/WebP; passen Sie die Qualität zwischen 30–100% an."
      },
      {
        "title": "Kleinere Dateien herunterladen",
        "body": "Jedes Ergebnis zeigt die Größe vor und nach der Komprimierung an."
      }
    ],
    "whyTitle": "Warum lokal komprimieren?",
    "whyItems": [
      {
        "title": "Schnellere Uploads",
        "body": "Vorab komprimierte Dateien laden überall schneller hoch."
      },
      {
        "title": "Bessere Core Web Vitals",
        "body": "Kleinere Bilder verbessern Ihre LCP-Werte."
      },
      {
        "title": "E-Mail-freundliche Größen",
        "body": "Bleiben Sie unter den Größenbeschränkungen für Anhänge bei Gmail/Outlook."
      },
      {
        "title": "Datenschutz zuerst",
        "body": "Ihre Dateien verlassen niemals Ihren Browser."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie stark kann ich komprimieren, ohne sichtbaren Qualitätsverlust?",
        "a": "Bei Fotos reduziert eine Qualität von 80–85 in JPG oder WebP die Dateigröße um 50–70%, ohne dass dies auf Bildschirmen sichtbar ist."
      },
      {
        "q": "Wird hier wirklich komprimiert oder nur konvertiert?",
        "a": "Beides. Das Bild wird mit einem niedrigeren Qualitätsziel neu kodiert."
      },
      {
        "q": "Werden meine Bilder hochgeladen?",
        "a": "Nein. Der Kompressor läuft direkt in Ihrem Browser über Canvas."
      },
      {
        "q": "Bleibt die PNG-Transparenz erhalten?",
        "a": "Nur wenn Sie PNG oder WebP als Ausgabe wählen. JPG füllt den Hintergrund mit Weiß."
      },
      {
        "q": "Große Bilder (10 MB+)?",
        "a": "Funktioniert. Da kein Server-Roundtrip stattfindet, ist die Größe nur durch Ihren Arbeitsspeicher begrenzt."
      },
      {
        "q": "Werden Metadaten entfernt?",
        "a": "Ja. EXIF-, GPS- und ICC-Profile werden gelöscht."
      },
      {
        "q": "Hunderte Bilder in Stapelverarbeitung?",
        "a": "Ja – ziehen Sie so viele Bilder hinein, wie Sie möchten."
      },
      {
        "q": "Bester Anwendungsfall?",
        "a": "Web-Bereitstellung, E-Mail-Anhänge und Marktplatz-Angebote."
      }
    ],
    "ctaTitle": "Benötigen Sie eine gehostete URL?",
    "ctaBody": "Laden Sie die komprimierte Datei hoch, um einen permanenten Link zu erhalten.",
    "ctaButton": "Haupt-Uploader testen"
  },
  "ja": {
    "metaTitle": "画像圧縮ツール — ブラウザで完結 | 無料・アップロード不要",
    "metaDescription": "JPG、PNG、WebP画像をブラウザ上で圧縮。画質調整や圧縮前後のサイズ比較もリアルタイムで確認可能。無料、一括処理対応、登録不要、サーバーへのアップロードもありません。",
    "schemaName": "画像圧縮ツール",
    "schemaDescription": "ブラウザ上でPNG、JPG、WebP画像を圧縮。画質やフォーマットの調整が可能。",
    "badge": "ブラウザ専用ツール",
    "h1Pre": "画像圧縮ツール",
    "h1Highlight": "見た目はそのまま、サイズは半分に。",
    "intro": "ファイルをどこにもアップロードすることなく、JPG、PNG、WebPを圧縮。リアルタイムでサイズ比較ができ、画質調整や一括処理にも対応しています。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "画像をドロップ",
        "body": "PNG、JPG、WebPファイルをドロップゾーンにドラッグ＆ドロップします。"
      },
      {
        "title": "形式と画質を選択",
        "body": "元の形式を維持するか、JPG/WebPに変換するかを選択し、画質スライダーで30〜100%の間で調整します。"
      },
      {
        "title": "圧縮ファイルをダウンロード",
        "body": "圧縮前後のサイズを確認して、ファイルをダウンロードします。"
      }
    ],
    "whyTitle": "ローカル圧縮のメリット",
    "whyItems": [
      {
        "title": "アップロードの高速化",
        "body": "圧縮済みファイルなら、あらゆる場所へのアップロードが高速になります。"
      },
      {
        "title": "Core Web Vitalsの改善",
        "body": "画像サイズを小さくすることで、LCPスコアが向上します。"
      },
      {
        "title": "メール送信に最適",
        "body": "GmailやOutlookの添付ファイル制限内に収まります。"
      },
      {
        "title": "プライバシー重視",
        "body": "ファイルがブラウザの外に出ることは一切ありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "画質を落とさずにどれくらい圧縮できますか？",
        "a": "写真の場合、JPGやWebPで画質を80〜85に設定すると、見た目の劣化をほとんど感じさせずにファイルサイズを50〜70%削減できます。"
      },
      {
        "q": "これは圧縮ですか、それとも変換ですか？",
        "a": "両方です。画像をより低い画質ターゲットで再エンコードします。"
      },
      {
        "q": "画像はアップロードされますか？",
        "a": "いいえ。圧縮処理はブラウザ内のcanvas機能を使用して行われます。"
      },
      {
        "q": "PNGの透明度は保持されますか？",
        "a": "PNGまたはWebPで出力する場合のみ保持されます。JPGに変換すると背景は白く塗りつぶされます。"
      },
      {
        "q": "大きな画像（10MB以上）でも大丈夫ですか？",
        "a": "可能です。サーバーを介さないため、ブラウザのメモリ容量のみが制限となります。"
      },
      {
        "q": "メタデータは削除されますか？",
        "a": "はい。EXIF、GPS、ICCプロファイルはすべて削除されます。"
      },
      {
        "q": "数百枚の画像をまとめて処理できますか？",
        "a": "はい。一度に何枚でもドロップして処理可能です。"
      },
      {
        "q": "どのような用途に最適ですか？",
        "a": "Webサイトへの掲載、メール添付、フリマアプリやECサイトへの出品などに最適です。"
      }
    ],
    "ctaTitle": "ホストされたURLが必要ですか？",
    "ctaBody": "圧縮したファイルをアップロードして、永続的なリンクを作成しましょう。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "图片压缩工具 — 100% 浏览器本地处理 | 免费，无需上传",
    "metaDescription": "在浏览器中压缩 JPG、PNG 和 WebP 图片，支持调节质量并实时预览压缩前后大小。免费、支持批量、无需注册、无需上传。",
    "schemaName": "图片压缩工具",
    "schemaDescription": "在浏览器中压缩 PNG、JPG 和 WebP 图片。支持自定义质量和格式。",
    "badge": "纯浏览器工具",
    "h1Pre": "图片压缩工具",
    "h1Highlight": "体积减半，画质如初。",
    "intro": "无需上传文件，直接在浏览器中压缩 JPG、PNG 或 WebP 图片。支持实时预览压缩前后大小、调节质量，并可批量处理。",
    "howTitle": "使用方法",
    "steps": [
      {
        "title": "拖入图片",
        "body": "将 PNG、JPG 或 WebP 文件拖入指定区域。"
      },
      {
        "title": "选择格式与质量",
        "body": "保持原格式或转换为 JPG/WebP；滑动滑块设置 30%–100% 的质量。"
      },
      {
        "title": "下载压缩后的文件",
        "body": "每张图片都会显示压缩前后的体积对比。"
      }
    ],
    "whyTitle": "为何选择本地压缩",
    "whyItems": [
      {
        "title": "上传速度更快",
        "body": "压缩后的文件在任何平台上传速度都更快。"
      },
      {
        "title": "优化 Core Web Vitals",
        "body": "更小的图片有助于提升 LCP 指标。"
      },
      {
        "title": "适配邮件附件",
        "body": "轻松符合 Gmail/Outlook 的附件大小限制。"
      },
      {
        "title": "隐私至上",
        "body": "您的文件永远不会离开您的浏览器。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "在不明显损失画质的情况下能压缩多少？",
        "a": "对于照片，将 JPG 或 WebP 的质量设为 80–85，文件体积可减少 50%–70%，且在屏幕上视觉效果几乎无差异。"
      },
      {
        "q": "这是真正的压缩还是仅仅转换格式？",
        "a": "两者皆有。图片会以设定的质量目标进行重新编码。"
      },
      {
        "q": "它会上传我的图片吗？",
        "a": "不会。压缩过程完全通过浏览器内的 canvas 完成。"
      },
      {
        "q": "PNG 的透明度会保留吗？",
        "a": "仅在输出为 PNG 或 WebP 时保留。JPG 会将透明背景填充为白色。"
      },
      {
        "q": "大文件（10 MB 以上）可以处理吗？",
        "a": "可以。无需服务器往返，仅受限于您的内存大小。"
      },
      {
        "q": "会移除元数据吗？",
        "a": "是的。EXIF、GPS 和 ICC 配置文件都会被移除。"
      },
      {
        "q": "可以批量处理数百张图片吗？",
        "a": "可以，想拖多少就拖多少。"
      },
      {
        "q": "最佳使用场景是什么？",
        "a": "网页发布、邮件附件以及电商平台商品图。"
      }
    ],
    "ctaTitle": "需要托管链接？",
    "ctaBody": "上传压缩后的文件以获取永久链接。",
    "ctaButton": "尝试主上传工具"
  }
} as LandingContentMap;
