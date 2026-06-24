import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Bulk Image Upload - Upload Multiple Images at Once",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Free image hosting" },
      { "pageKey": "free-image-cdn", "label": "Free image CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI image hosting" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymous image upload" }
    ],
    "metaDescription": "Upload multiple images at once and get instant URLs for all of them. Perfect for e-commerce, agencies, and content creators. Free, no signup needed.",
    "schemaName": "ImageToURL Bulk Uploader",
    "schemaDescription": "A web-based tool for uploading multiple images simultaneously to generate instant, shareable URLs.",
    "badge": "BULK UPLOAD",
    "h1Pre": "Bulk Image Upload",
    "h1Highlight": "made simple.",
    "intro": "Got a folder of product shots or screenshots to share? Select them all at once and get a separate direct link for every file, instead of uploading one at a time. No signup to start, and each link is a clean direct URL that embeds anywhere. There's a daily cap to keep the free tier sane - a handful of files for guests, more when you sign in - so it suits everyday batches rather than thousand-image dumps.",
    "howTitle": "How Bulk Upload Works",
    "steps": [
      {
        "title": "Select Images",
        "body": "Choose multiple files from your device - select as many as you need to process at once."
      },
      {
        "title": "Batch Processing",
        "body": "All your selected images are processed simultaneously on our high-speed, reliable servers."
      },
      {
        "title": "URL Generation",
        "body": "Each image receives its own permanent, shareable URL instantly upon completion."
      }
    ],
    "whyTitle": "Why Use Bulk Upload",
    "whyItems": [
      {
        "title": "Multiple Image Upload",
        "body": "Select dozens of files at once. Drag and drop entire folders or pick specific images with ease."
      },
      {
        "title": "Batch URL Generation",
        "body": "URLs are generated in parallel, ensuring you get all your links back in seconds, not minutes."
      },
      {
        "title": "Progress Tracking",
        "body": "Monitor real-time upload progress for every file so you know exactly when your assets are ready."
      },
      {
        "title": "Bulk Export Options",
        "body": "Copy all URLs to your clipboard with one click or export them as a list for your spreadsheets."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "How many images can I upload at once?",
        "a": "You can select a batch in one go, but there's a daily upload cap on the free tier: a small number for anonymous users and a higher allowance when you sign in. It's built for everyday batches, not bulk dumps of hundreds of files."
      },
      {
        "q": "Do I need to sign up for bulk upload?",
        "a": "No. You can batch-upload anonymously. Signing in with a free account raises your daily limit and lets you mark files 'keep forever'."
      },
      {
        "q": "Do I get one link or one link per image?",
        "a": "One direct URL per file. Each image is uploaded and linked separately, so you end up with a list of links you can copy in one go."
      },
      {
        "q": "Can I copy all the links at once?",
        "a": "Yes. Once the batch finishes you can copy every generated URL together, which makes it easy to paste them straight into a spreadsheet or a doc."
      },
      {
        "q": "Are the bulk-uploaded links permanent?",
        "a": "Anonymous uploads last until the monthly storage cleanup, so at least a couple of weeks. For links you need to keep, sign in and choose 'keep forever' before you upload the batch."
      },
      {
        "q": "Does each file keep its full quality?",
        "a": "Yes. Every image in the batch is served at its original resolution, with no compression and no watermark, exactly like a single upload."
      },
      {
        "q": "What formats and size limits apply to a batch?",
        "a": "Each file can be JPG, PNG, WebP, GIF or SVG, up to 10 MB. Mixed formats in one batch are fine."
      },
      {
        "q": "Can I drag a whole folder in?",
        "a": "Yes. Drag and drop multiple files or a folder onto the uploader, or use the file picker and select several at once."
      },
      {
        "q": "What if I have more images than the daily limit?",
        "a": "Sign in for the higher allowance, or split the work across days. Either way, keep your originals so you can re-upload anything that needs a fresh link later."
      }
    ],
    "ctaTitle": "Upload your images in bulk",
    "ctaBody": "Free, fast, and no signup required; select multiple images and get all your URLs instantly.",
    "ctaButton": "Start Bulk Upload",
    "specsTitle": "Bulk upload at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Optional (higher daily limit)" },
      { "label": "Formats", "value": "JPG, PNG, WebP, GIF, SVG" },
      { "label": "Per file", "value": "10 MB" },
      { "label": "Output", "value": "One direct link per image" }
    ],
    "comparisonTitle": "Free hosts for batch uploads",
    "comparisonIntro": "When you're uploading a stack of files, the things that matter are per-file size, whether each link hotlinks cleanly, and how long the links last. Here's how the common hosts compare.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Direct hotlink",
      "Keeps full quality",
      "Link lifetime"
    ],
    "comparisonRows": [
      { "cells": ["ImageToURL", "Yes", "10 MB", "Yes", "Yes", "Weeks free, forever when signed in"] },
      { "cells": ["Catbox", "Yes", "200 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["ImgBB", "Yes", "32 MB", "Yes", "Yes", "Optional expiry"] },
      { "cells": ["Postimages", "Yes", "24 MB", "Yes", "No (resized to 1280px)", "Permanent"] },
      { "cells": ["Imgur", "No (since 2023)", "20 MB", "Limited", "Yes", "Tied to your account"] }
    ],
    "useCasesTitle": "Who reaches for batch upload",
    "useCasesIntro": "Anyone juggling more than a couple of images at a time gets the most out of uploading in bulk:",
    "useCases": [
      { "title": "Online sellers", "body": "Turn a folder of product photos into a list of direct links for your listings, marketplace posts or a price sheet, all in one pass." },
      { "title": "Agencies and freelancers", "body": "Hand a client a tidy set of image URLs for a mockup, a deck or a content calendar without emailing files back and forth." },
      { "title": "Writers and creators", "body": "Get links for every screenshot or graphic in an article at once, then paste them into your CMS or Markdown as you write." }
    ],
    "sections": [
      { "heading": "How batch uploading saves time", "body": "Uploading images one by one means repeating the same click, wait and copy for every file. Batch upload collapses that into a single step: pick the whole set, let them go up together, and collect all the links at the end. For a product catalog or a folder of screenshots that's the difference between a couple of minutes and a tedious afternoon. Each file still gets its own direct URL, so you keep the flexibility of individual links while skipping the repetitive part." },
      { "heading": "Getting your links into a spreadsheet", "body": "The handy part of a batch is the list of URLs you get back. Copy them all at once and paste the column straight into Google Sheets or Excel next to product names, SKUs or alt text. From there it's easy to map each image to wherever it belongs - a listing template, a CMS import, a content brief. Because every URL points directly at the file, the same list works in HTML, Markdown and most site builders without any reformatting." },
      { "heading": "Working with the daily limit", "body": "To keep the free tier from being abused, uploads are capped per day - a handful for anonymous users and a larger allowance once you sign in with a free account. For most everyday batches that's plenty. If you've got more than the cap allows, sign in for the higher limit or split the job across a couple of days. And keep your original files: anonymous links are temporary, so a local copy means you can always re-upload a batch later if you need fresh links." }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Carga masiva de imágenes - Sube varias imágenes a la vez | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hosting gratuito de imágenes" },
      { "pageKey": "free-image-cdn", "label": "CDN de imágenes gratuito" },
      { "pageKey": "ai-image-hosting", "label": "Hosting de imágenes con IA" },
      { "pageKey": "anonymous-image-upload", "label": "Carga anónima de imágenes" }
    ],
    "metaDescription": "Sube varias imágenes simultáneamente con la función de carga masiva de ImageToURL. Obtén URLs instantáneas para todas tus imágenes. Ideal para e-commerce, agencias y creadores de contenido.",
    "schemaName": "Cargador masivo de ImageToURL",
    "schemaDescription": "Una herramienta web para subir múltiples imágenes simultáneamente y generar URLs instantáneas y compartibles.",
    "badge": "CARGA MASIVA",
    "h1Pre": "Carga masiva de imágenes",
    "h1Highlight": "hecha simple.",
    "intro": "Sube docenas de imágenes a la vez y obtén URLs instantáneas y compartibles para cada una. Sin registro, sin límites.",
    "howTitle": "Cómo funciona la carga masiva",
    "steps": [
      {
        "title": "Selecciona imágenes",
        "body": "Elige varios archivos desde tu dispositivo; selecciona tantos como necesites procesar a la vez."
      },
      {
        "title": "Procesamiento por lotes",
        "body": "Todas tus imágenes seleccionadas se procesan simultáneamente en nuestros servidores de alta velocidad y fiabilidad."
      },
      {
        "title": "Generación de URLs",
        "body": "Cada imagen recibe su propia URL permanente y compartible al instante tras finalizar el proceso."
      }
    ],
    "whyTitle": "Por qué usar la carga masiva",
    "whyItems": [
      {
        "title": "Carga de múltiples imágenes",
        "body": "Selecciona docenas de archivos a la vez. Arrastra y suelta carpetas completas o elige imágenes específicas con facilidad."
      },
      {
        "title": "Generación de URLs por lotes",
        "body": "Las URLs se generan en paralelo, asegurando que obtengas todos tus enlaces en segundos, no en minutos."
      },
      {
        "title": "Seguimiento del progreso",
        "body": "Monitorea el progreso de carga en tiempo real para cada archivo y así saber exactamente cuándo tus activos están listos."
      },
      {
        "title": "Opciones de exportación masiva",
        "body": "Copia todas las URLs a tu portapapeles con un solo clic o expórtalas como una lista para tus hojas de cálculo."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Hay un límite en la cantidad de imágenes que puedo subir?",
        "a": "No, puedes subir tantas imágenes como necesites en un solo lote sin límites artificiales."
      },
      {
        "q": "¿Necesito registrarme para usar el cargador masivo?",
        "a": "En absoluto. Puedes usar nuestra herramienta de carga masiva de forma totalmente anónima sin crear una cuenta."
      },
      {
        "q": "¿Son permanentes las URLs generadas?",
        "a": "Sí, una vez que tus imágenes se han subido, las URLs son permanentes y están listas para usarse en tus proyectos."
      },
      {
        "q": "¿Puedo exportar los enlaces a una hoja de cálculo?",
        "a": "Absolutamente. Puedes copiar todas las URLs generadas a la vez o exportarlas como una lista formateada para una fácil integración."
      }
    ],
    "ctaTitle": "Sube tus imágenes de forma masiva",
    "ctaBody": "Gratis, rápido y sin necesidad de registro; selecciona varias imágenes y obtén todas tus URLs al instante.",
    "ctaButton": "Iniciar carga masiva"
  },
  "fr": {
    "metaTitle": "Téléchargement d'images en masse - Importez plusieurs images à la fois | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hébergement d'images gratuit" },
      { "pageKey": "free-image-cdn", "label": "CDN d'images gratuit" },
      { "pageKey": "ai-image-hosting", "label": "Hébergement d'images IA" },
      { "pageKey": "anonymous-image-upload", "label": "Téléchargement d'image anonyme" }
    ],
    "metaDescription": "Importez plusieurs images simultanément avec la fonction de téléchargement en masse d'ImageToURL. Obtenez des URL instantanées pour toutes vos images. Idéal pour l'e-commerce, les agences et les créateurs de contenu.",
    "schemaName": "ImageToURL Bulk Uploader",
    "schemaDescription": "Un outil web pour importer plusieurs images simultanément afin de générer des URL instantanées et partageables.",
    "badge": "TÉLÉCHARGEMENT EN MASSE",
    "h1Pre": "Téléchargement d'images en masse",
    "h1Highlight": "simplifié.",
    "intro": "Importez des dizaines d'images à la fois et obtenez des URL instantanées et partageables pour chacune d'entre elles. Sans inscription, sans limites.",
    "howTitle": "Comment fonctionne le téléchargement en masse",
    "steps": [
      {
        "title": "Sélectionnez vos images",
        "body": "Choisissez plusieurs fichiers depuis votre appareil : sélectionnez autant d'images que nécessaire pour les traiter en une seule fois."
      },
      {
        "title": "Traitement par lots",
        "body": "Toutes vos images sélectionnées sont traitées simultanément sur nos serveurs haute performance et fiables."
      },
      {
        "title": "Génération d'URL",
        "body": "Chaque image reçoit sa propre URL permanente et partageable instantanément une fois le traitement terminé."
      }
    ],
    "whyTitle": "Pourquoi utiliser le téléchargement en masse",
    "whyItems": [
      {
        "title": "Importation d'images multiples",
        "body": "Sélectionnez des dizaines de fichiers à la fois. Glissez-déposez des dossiers entiers ou choisissez des images spécifiques en toute simplicité."
      },
      {
        "title": "Génération d'URL par lots",
        "body": "Les URL sont générées en parallèle, vous garantissant d'obtenir tous vos liens en quelques secondes, pas en minutes."
      },
      {
        "title": "Suivi de progression",
        "body": "Surveillez la progression de l'importation en temps réel pour chaque fichier afin de savoir exactement quand vos ressources sont prêtes."
      },
      {
        "title": "Options d'exportation en masse",
        "body": "Copiez toutes les URL dans votre presse-papiers en un clic ou exportez-les sous forme de liste pour vos tableurs."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Non, vous pouvez importer autant d'images que nécessaire dans un seul lot sans aucune limite artificielle.",
        "a": "Non, vous pouvez importer autant d'images que nécessaire dans un seul lot sans aucune limite artificielle."
      },
      {
        "q": "Dois-je m'inscrire pour utiliser l'outil de téléchargement en masse ?",
        "a": "Pas du tout. Vous pouvez utiliser notre outil de téléchargement en masse de manière totalement anonyme sans créer de compte."
      },
      {
        "q": "Les URL générées sont-elles permanentes ?",
        "a": "Oui, une fois vos images importées, les URL sont permanentes et prêtes à être utilisées dans vos projets."
      },
      {
        "q": "Puis-je exporter les liens vers un tableur ?",
        "a": "Absolument. Vous pouvez copier toutes les URL générées en une seule fois ou les exporter sous forme de liste formatée pour une intégration facile."
      }
    ],
    "ctaTitle": "Importez vos images en masse",
    "ctaBody": "Gratuit, rapide et sans inscription requise ; sélectionnez plusieurs images et obtenez toutes vos URL instantanément.",
    "ctaButton": "Démarrer l'importation"
  },
  "de": {
    "metaTitle": "Bulk-Bild-Upload - Mehrere Bilder gleichzeitig hochladen | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Kostenloses Bild-Hosting" },
      { "pageKey": "free-image-cdn", "label": "Kostenloses Bild-CDN" },
      { "pageKey": "ai-image-hosting", "label": "KI-Bild-Hosting" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymes Bild-Upload" }
    ],
    "metaDescription": "Laden Sie mehrere Bilder gleichzeitig mit der Bulk-Upload-Funktion von ImageToURL hoch. Erhalten Sie sofort URLs für alle Ihre Bilder. Perfekt für E-Commerce, Agenturen und Content Creator.",
    "schemaName": "ImageToURL Bulk-Uploader",
    "schemaDescription": "Ein webbasiertes Tool zum gleichzeitigen Hochladen mehrerer Bilder, um sofort teilbare URLs zu generieren.",
    "badge": "BULK-UPLOAD",
    "h1Pre": "Bulk-Bild-Upload",
    "h1Highlight": "einfach gemacht.",
    "intro": "Laden Sie Dutzende Bilder auf einmal hoch und erhalten Sie sofort teilbare URLs für jedes einzelne. Keine Registrierung, keine Limits.",
    "howTitle": "So funktioniert der Bulk-Upload",
    "steps": [
      {
        "title": "Bilder auswählen",
        "body": "Wählen Sie mehrere Dateien von Ihrem Gerät aus – wählen Sie so viele aus, wie Sie gleichzeitig verarbeiten möchten."
      },
      {
        "title": "Stapelverarbeitung",
        "body": "Alle ausgewählten Bilder werden gleichzeitig auf unseren schnellen und zuverlässigen Servern verarbeitet."
      },
      {
        "title": "URL-Generierung",
        "body": "Jedes Bild erhält nach Abschluss sofort seine eigene, dauerhafte und teilbare URL."
      }
    ],
    "whyTitle": "Warum den Bulk-Upload nutzen?",
    "whyItems": [
      {
        "title": "Mehrfacher Bild-Upload",
        "body": "Wählen Sie Dutzende Dateien auf einmal aus. Ziehen Sie ganze Ordner per Drag-and-Drop hinein oder wählen Sie gezielt einzelne Bilder aus."
      },
      {
        "title": "Stapel-URL-Generierung",
        "body": "URLs werden parallel generiert, sodass Sie alle Ihre Links in Sekunden statt in Minuten erhalten."
      },
      {
        "title": "Fortschrittsanzeige",
        "body": "Überwachen Sie den Upload-Fortschritt jeder Datei in Echtzeit, damit Sie genau wissen, wann Ihre Assets bereit sind."
      },
      {
        "title": "Bulk-Export-Optionen",
        "body": "Kopieren Sie alle URLs mit einem Klick in Ihre Zwischenablage oder exportieren Sie diese als Liste für Ihre Tabellenkalkulationen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Gibt es ein Limit für die Anzahl der Bilder, die ich hochladen kann?",
        "a": "Nein, Sie können so viele Bilder wie nötig in einem Stapel hochladen, ohne künstliche Begrenzungen."
      },
      {
        "q": "Muss ich mich registrieren, um den Bulk-Uploader zu nutzen?",
        "a": "Überhaupt nicht. Sie können unser Bulk-Upload-Tool völlig anonym nutzen, ohne ein Konto zu erstellen."
      },
      {
        "q": "Sind die generierten URLs dauerhaft?",
        "a": "Ja, sobald Ihre Bilder hochgeladen sind, sind die URLs dauerhaft und bereit für die Verwendung in Ihren Projekten."
      },
      {
        "q": "Kann ich die Links in eine Tabelle exportieren?",
        "a": "Absolut. Sie können alle generierten URLs auf einmal kopieren oder als formatierte Liste für eine einfache Integration exportieren."
      }
    ],
    "ctaTitle": "Laden Sie Ihre Bilder in großen Mengen hoch",
    "ctaBody": "Kostenlos, schnell und ohne Registrierung; wählen Sie mehrere Bilder aus und erhalten Sie sofort alle Ihre URLs.",
    "ctaButton": "Bulk-Upload starten"
  },
  "ja": {
    "metaTitle": "一括画像アップロード - 複数の画像を一度にアップロード | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "free-image-hosting", "label": "無料画像ホスティング" },
      { "pageKey": "free-image-cdn", "label": "無料画像CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI画像ホスティング" },
      { "pageKey": "anonymous-image-upload", "label": "匿名画像アップロード" }
    ],
    "metaDescription": "ImageToURLの一括アップロード機能で、複数の画像を一度にアップロードしましょう。すべての画像に対して即座にURLを発行します。Eコマース、代理店、コンテンツクリエイターに最適です。",
    "schemaName": "ImageToURL 一括アップローダー",
    "schemaDescription": "複数の画像を同時にアップロードし、共有可能なURLを即座に生成するためのWebベースのツールです。",
    "badge": "一括アップロード",
    "h1Pre": "一括画像アップロードを",
    "h1Highlight": "シンプルに。",
    "intro": "一度に数十枚の画像をアップロードし、それぞれの共有用URLを即座に取得できます。登録不要、制限なし。",
    "howTitle": "一括アップロードの仕組み",
    "steps": [
      {
        "title": "画像を選択",
        "body": "デバイスから複数のファイルを選択します。必要な枚数を一度に処理できます。"
      },
      {
        "title": "バッチ処理",
        "body": "選択したすべての画像は、高速で信頼性の高いサーバー上で同時に処理されます。"
      },
      {
        "title": "URL生成",
        "body": "完了後、各画像に固有の永続的な共有用URLが即座に発行されます。"
      }
    ],
    "whyTitle": "一括アップロードを選ぶ理由",
    "whyItems": [
      {
        "title": "複数画像アップロード",
        "body": "一度に数十枚のファイルを選択可能。フォルダごとのドラッグ＆ドロップや、特定の画像の選択も簡単です。"
      },
      {
        "title": "バッチURL生成",
        "body": "URLは並列で生成されるため、数分ではなく数秒ですべてのリンクを取得できます。"
      },
      {
        "title": "進捗状況の追跡",
        "body": "各ファイルのアップロード状況をリアルタイムで監視できるため、いつ準備が完了したかが正確にわかります。"
      },
      {
        "title": "一括エクスポートオプション",
        "body": "ワンクリックですべてのURLをクリップボードにコピーしたり、スプレッドシート用にリストとしてエクスポートしたりできます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "アップロードできる画像枚数に制限はありますか？",
        "a": "いいえ、1回のバッチで必要な枚数だけアップロード可能です。人為的な制限はありません。"
      },
      {
        "q": "一括アップローダーを使うのに登録は必要ですか？",
        "a": "全く必要ありません。アカウントを作成することなく、完全に匿名で一括アップロードツールを利用できます。"
      },
      {
        "q": "生成されたURLは永続的ですか？",
        "a": "はい、画像がアップロードされると、そのURLは永続的となり、プロジェクトですぐに使用できます。"
      },
      {
        "q": "リンクをスプレッドシートにエクスポートできますか？",
        "a": "もちろんです。生成されたすべてのURLを一度にコピーしたり、簡単に統合できるようフォーマットされたリストとしてエクスポートしたりできます。"
      }
    ],
    "ctaTitle": "画像をまとめてアップロード",
    "ctaBody": "無料、高速、登録不要。複数の画像を選択して、すべてのURLを即座に取得しましょう。",
    "ctaButton": "一括アップロードを開始"
  },
  "zh-Hans": {
    "metaTitle": "批量图片上传 - 一次上传多张图片 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "free-image-hosting", "label": "免费图片托管" },
      { "pageKey": "free-image-cdn", "label": "免费图片 CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI 图片托管" },
      { "pageKey": "anonymous-image-upload", "label": "匿名图片上传" }
    ],
    "metaDescription": "使用 ImageToURL 的批量上传功能，一次性上传多张图片。立即获取所有图片的 URL。非常适合电子商务、代理机构和内容创作者。",
    "schemaName": "ImageToURL 批量上传工具",
    "schemaDescription": "一个基于网络的工具，可同时上传多张图片并生成即时、可共享的 URL。",
    "badge": "批量上传",
    "h1Pre": "批量图片上传",
    "h1Highlight": "化繁为简。",
    "intro": "一次上传数十张图片，并为每一张图片获取即时、可共享的 URL。无需注册，没有限制。",
    "howTitle": "批量上传的工作原理",
    "steps": [
      {
        "title": "选择图片",
        "body": "从您的设备中选择多个文件——根据需要一次性处理任意数量的图片。"
      },
      {
        "title": "批量处理",
        "body": "您选择的所有图片都会在我们高速、可靠的服务器上同时进行处理。"
      },
      {
        "title": "生成 URL",
        "body": "每张图片在处理完成后都会立即获得其专属的、可共享的 URL。"
      }
    ],
    "whyTitle": "为什么要使用批量上传",
    "whyItems": [
      {
        "title": "多图片上传",
        "body": "一次选择数十个文件。轻松拖放整个文件夹或挑选特定图片。"
      },
      {
        "title": "批量生成 URL",
        "body": "URL 并行生成，确保您在几秒钟内即可获得所有链接，无需等待数分钟。"
      },
      {
        "title": "进度跟踪",
        "body": "实时监控每个文件的上传进度，准确掌握资源何时准备就绪。"
      },
      {
        "title": "批量导出选项",
        "body": "一键将所有 URL 复制到剪贴板，或将其导出为列表以供电子表格使用。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我可以上传的图片数量有限制吗？",
        "a": "没有，您可以在单个批次中上传任意数量的图片，没有任何人为限制。"
      },
      {
        "q": "使用批量上传工具需要注册吗？",
        "a": "完全不需要。您可以完全匿名使用我们的批量上传工具，无需创建账户。"
      },
      {
        "q": "生成的 URL 是永久的吗？",
        "a": "是的，图片上传后，URL 即为永久有效，可随时用于您的项目中。"
      },
      {
        "q": "我可以将链接导出到电子表格吗？",
        "a": "当然可以。您可以一次性复制所有生成的 URL，或将其导出为格式化列表以便轻松集成。"
      }
    ],
    "ctaTitle": "批量上传您的图片",
    "ctaBody": "免费、快速且无需注册；选择多张图片并立即获取所有 URL。",
    "ctaButton": "开始批量上传"
  },
} as LandingContentMap;
