import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Screenshot to URL — Share Screenshots as Links | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-to-url", "label": "Image to URL" },
      { "pageKey": "image-to-url-converter", "label": "Image to URL converter" },
      { "pageKey": "image-to-link", "label": "Image to link" },
      { "pageKey": "image-url-generator", "label": "Image URL generator" }
    ],
    "metaDescription": "Turn screenshots into shareable URLs in seconds. Paste from clipboard, drag & drop, or upload. Perfect for bug reports, tutorials, and quick sharing.",
    "schemaName": "Screenshot to URL Converter",
    "schemaDescription": "A web-based tool that instantly converts screenshots from your clipboard or files into permanent, shareable URLs.",
    "badge": "SCREENSHOT SHARING",
    "h1Pre": "Screenshot to URL",
    "h1Highlight": "— paste and share.",
    "intro": "Turn screenshots into shareable URLs in seconds. Paste from clipboard, drag & drop, or upload — perfect for bug reports, tutorials, and quick sharing.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Capture Your Screen",
        "body": "Take a screenshot using your system shortcut (Cmd+Shift+4 on Mac, Win+Shift+S on Windows, or any tool you prefer)."
      },
      {
        "title": "Upload or Paste",
        "body": "Drag your screenshot file into our uploader, or paste directly from your clipboard. Both methods work instantly."
      },
      {
        "title": "Share the Link",
        "body": "Copy the generated URL and paste it into Slack, email, GitHub issues, Jira tickets, or any conversation."
      }
    ],
    "whyTitle": "Why Screenshot to URL?",
    "whyItems": [
      {
        "title": "Clipboard Paste Support",
        "body": "Paste screenshots directly from your clipboard. No need to save the file first — just Ctrl+V and upload."
      },
      {
        "title": "Instant Bug Reports",
        "body": "Capture an issue, upload the screenshot, share the URL in your bug tracker. The fastest bug reporting workflow."
      },
      {
        "title": "Clean Direct Links",
        "body": "Get clean, direct image URLs — not gallery pages with ads. Perfect for embedding in documentation and tickets."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Can I paste a screenshot from my clipboard?",
        "a": "Yes! After taking a screenshot, you can paste it directly into our uploader using Ctrl+V (or Cmd+V on Mac). No need to save the file first."
      },
      {
        "q": "What screenshot formats are supported?",
        "a": "We support all common screenshot formats: PNG, JPG, WebP, and BMP. Whatever your OS or tool produces, we handle it."
      },
      {
        "q": "How fast is the upload?",
        "a": "Screenshots typically upload in under 2 seconds. Your permanent URL is generated instantly upon upload completion."
      },
      {
        "q": "Can I share screenshots in Slack and Discord?",
        "a": "Yes. Copy your screenshot URL and paste it into any chat platform. Slack, Discord, Teams, and most chat apps will automatically show an image preview."
      },
      {
        "q": "Are screenshot URLs permanent?",
        "a": "Yes. Every screenshot you upload gets a permanent URL that never expires. Share it in documentation today, and it will still work years from now."
      }
    ],
    "ctaTitle": "Share your screenshot as a link",
    "ctaBody": "Upload or paste a screenshot and get a permanent URL in seconds with no signup or ads.",
    "ctaButton": "Upload Screenshot Now"
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
