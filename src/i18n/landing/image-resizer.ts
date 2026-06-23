import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Resizer — 100% Browser | Free, Unlimited",
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
    "intro": "Scale images by width, height, or percent. Aspect-ratio lock, batch support, zero upload.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Drop images",
        "body": "Drag PNG / JPG / WebP files into the drop zone."
      },
      {
        "title": "Pick a mode & value",
        "body": "Enter a target width, height, or percentage."
      },
      {
        "title": "Download",
        "body": "Each output shows the new dimensions and file size."
      }
    ],
    "whyTitle": "Why resize in browser",
    "whyItems": [
      {
        "title": "Exact sizes for platforms",
        "body": "Instagram 1080, eBay 1600, LinkedIn 1200 — hit the spec."
      },
      {
        "title": "Batch shrinking",
        "body": "Percent-scale many photos at once before upload."
      },
      {
        "title": "No quality drop from uploading",
        "body": "Resize first; services recompress less."
      },
      {
        "title": "Privacy",
        "body": "Files never leave your device."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Does it preserve aspect ratio?",
        "a": "By default, yes. Lock Ratio is on."
      },
      {
        "q": "What resampling is used?",
        "a": "The browser's high-quality image smoothing — bicubic or Lanczos-like."
      },
      {
        "q": "Can I upscale?",
        "a": "Yes, but browser resampling cannot invent detail."
      },
      {
        "q": "Does it upload anything?",
        "a": "No. All resizing happens in-browser via canvas."
      },
      {
        "q": "Does it preserve format?",
        "a": "Yes — PNG stays PNG, JPG stays JPG, WebP stays WebP."
      },
      {
        "q": "What happens to EXIF?",
        "a": "Stripped — canvas re-encoding drops all metadata."
      },
      {
        "q": "Percent or pixels?",
        "a": "Pixels when a platform has a spec. Percent for batch-shrinking."
      },
      {
        "q": "Batch different sizes?",
        "a": "Not at once — this tool applies one rule. Run twice for split outputs."
      }
    ],
    "ctaTitle": "Host the resized image?",
    "ctaBody": "Click Get URL on the main uploader.",
    "ctaButton": "Try the main uploader"
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
