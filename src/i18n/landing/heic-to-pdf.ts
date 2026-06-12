import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "HEIC to PDF Converter | Free, Merge Into One PDF",
    "metaDescription": "Convert HEIC to PDF free in your browser and merge multiple iPhone photos into one PDF. No upload, no signup. Works on iPhone, Windows, and Mac.",
    "schemaName": "HEIC to PDF Converter",
    "schemaDescription": "Convert and merge iPhone HEIC photos into a single PDF in your browser.",
    "badge": "Browser-only Tool",
    "h1Pre": "HEIC to PDF Converter,",
    "h1Highlight": "iPhone Photos in One File",
    "intro": "Drop your iPhone HEIC photos and they get decoded and merged into one shareable PDF, all in your browser. Nothing gets uploaded.",
    "howTitle": "How to convert HEIC to PDF",
    "steps": [
      {
        "title": "Drop HEIC files",
        "body": "Drag iPhone .heic files straight from Photos, Mail, or a USB transfer."
      },
      {
        "title": "Browser decodes and merges",
        "body": "A WebAssembly decoder turns each HEIC into a JPEG, then jsPDF combines them into a single PDF, all on your device."
      },
      {
        "title": "Download the PDF",
        "body": "Save the PDF to your device, or click 'Get URL' to host it and get a shareable link."
      }
    ],
    "whyTitle": "Why convert HEIC to PDF?",
    "whyItems": [
      {
        "title": "Shareable format",
        "body": "PDF is the universal format for sharing multi-page documents."
      },
      {
        "title": "Print-ready",
        "body": "Most print shops and offices accept PDF, so it's ready to print."
      },
      {
        "title": "Merge many photos into one PDF",
        "body": "Combine trip photos or receipts into a single PDF attachment."
      },
      {
        "title": "Local and private",
        "body": "Photos never touch a server."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "How does this handle HEIC?",
        "a": "It reads each HEIC right in your browser, converts it to an image, and places it into the PDF. There is nothing to install."
      },
      {
        "q": "Is anything uploaded?",
        "a": "No. The whole conversion runs on your device. Your photos only leave if you choose to host the PDF with 'Get URL'."
      },
      {
        "q": "Why does HEIC need conversion for PDF?",
        "a": "HEIC is the Apple photo format that most PDF tools and apps can't read directly. Converting it lets you put your iPhone photos into a PDF that opens anywhere."
      },
      {
        "q": "How do I merge multiple HEIC files into one PDF?",
        "a": "Tick 'Merge into one PDF', then drop all your HEIC files at once. They get added one per page, in order, into a single PDF you can download or share."
      },
      {
        "q": "Will I lose quality?",
        "a": "No noticeable loss. Each photo is embedded at full resolution and auto-fit to the page."
      },
      {
        "q": "Does EXIF carry over?",
        "a": "The photos go into the PDF as images, so camera EXIF data isn't kept. Save the original HEIC if you need it."
      },
      {
        "q": "What if a file fails?",
        "a": "Skip it and try again, or re-export the photo from your iPhone. Most failures come from a partly copied or corrupted file."
      },
      {
        "q": "Mix HEIC and JPG?",
        "a": "Yes. You can drop HEIC and JPG together and they all merge into the same PDF."
      },
      {
        "q": "How do I convert HEIC to PDF on iPhone, Windows, or Mac?",
        "a": "The same way on every device. Drop your HEIC files into the box and download the PDF. It runs in any modern browser, so there is nothing to install on iPhone, Windows, or Mac."
      }
    ],
    "ctaTitle": "Host the PDF?",
    "ctaBody": "Convert your HEIC files into a PDF, then click 'Get URL' to host it for free. No signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de HEIC a PDF | Gratis, combinar en un solo PDF",
    "metaDescription": "Convierte HEIC a PDF gratis en tu navegador y combina varias fotos de iPhone en un solo PDF. Sin subidas, sin registro. Funciona en iPhone, Windows y Mac.",
    "schemaName": "Convertidor de HEIC a PDF",
    "schemaDescription": "Convierte y combina fotos HEIC de iPhone en un solo PDF directamente en tu navegador.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "Convertidor de HEIC a PDF,",
    "h1Highlight": "Fotos de iPhone en un solo archivo",
    "intro": "Suelta tus fotos HEIC de iPhone y se decodificarán y combinarán en un PDF compartible, todo dentro de tu navegador. Nada se sube a la nube.",
    "howTitle": "Cómo convertir HEIC a PDF",
    "steps": [
      {
        "title": "Suelta los archivos HEIC",
        "body": "Arrastra archivos .heic de iPhone directamente desde Fotos, Mail o una transferencia USB."
      },
      {
        "title": "El navegador decodifica y combina",
        "body": "Un decodificador WebAssembly convierte cada HEIC en un JPEG, luego jsPDF los combina en un solo PDF, todo en tu dispositivo."
      },
      {
        "title": "Descarga el PDF",
        "body": "Guarda el PDF en tu dispositivo o haz clic en 'Get URL' para alojarlo y obtener un enlace compartible."
      }
    ],
    "whyTitle": "¿Por qué convertir HEIC a PDF?",
    "whyItems": [
      {
        "title": "Formato compartible",
        "body": "El PDF es el formato universal para compartir documentos de varias páginas."
      },
      {
        "title": "Listo para imprimir",
        "body": "La mayoría de las imprentas y oficinas aceptan PDF, por lo que está listo para imprimir."
      },
      {
        "title": "Combina muchas fotos en un solo PDF",
        "body": "Combina fotos de viajes o recibos en un solo archivo PDF adjunto."
      },
      {
        "title": "Local y privado",
        "body": "Las fotos nunca tocan un servidor."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cómo maneja esto el formato HEIC?",
        "a": "Lee cada HEIC directamente en tu navegador, lo convierte en una imagen y lo coloca en el PDF. No hay nada que instalar."
      },
      {
        "q": "¿Se sube algo a la nube?",
        "a": "No. Toda la conversión se ejecuta en tu dispositivo. Tus fotos solo salen si eliges alojar el PDF con 'Get URL'."
      },
      {
        "q": "¿Por qué HEIC necesita conversión para PDF?",
        "a": "HEIC es el formato de foto de Apple que la mayoría de las herramientas y aplicaciones de PDF no pueden leer directamente. Convertirlo te permite poner tus fotos de iPhone en un PDF que se abre en cualquier lugar."
      },
      {
        "q": "¿Cómo combino varios archivos HEIC en un solo PDF?",
        "a": "Marca 'Merge into one PDF', luego suelta todos tus archivos HEIC a la vez. Se añadirán uno por página, en orden, en un solo PDF que puedes descargar o compartir."
      },
      {
        "q": "¿Perderé calidad?",
        "a": "No hay pérdida notable. Cada foto se incrusta a resolución completa y se ajusta automáticamente a la página."
      },
      {
        "q": "¿Se conservan los datos EXIF?",
        "a": "Las fotos se incluyen en el PDF como imágenes, por lo que no se conservan los datos EXIF de la cámara. Guarda el HEIC original si los necesitas."
      },
      {
        "q": "¿Qué pasa si un archivo falla?",
        "a": "Sáltalo e inténtalo de nuevo, o vuelve a exportar la foto desde tu iPhone. La mayoría de los fallos provienen de un archivo copiado parcialmente o dañado."
      },
      {
        "q": "¿Puedo mezclar HEIC y JPG?",
        "a": "Sí. Puedes soltar HEIC y JPG juntos y todos se combinarán en el mismo PDF."
      },
      {
        "q": "¿Cómo convierto HEIC a PDF en iPhone, Windows o Mac?",
        "a": "De la misma manera en cada dispositivo. Suelta tus archivos HEIC en el cuadro y descarga el PDF. Funciona en cualquier navegador moderno, por lo que no hay nada que instalar en iPhone, Windows o Mac."
      }
    ],
    "ctaTitle": "¿Alojar el PDF?",
    "ctaBody": "Convierte tus archivos HEIC en un PDF, luego haz clic en 'Get URL' para alojarlo gratis. Sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur HEIC en PDF | Gratuit, fusionnez en un seul PDF",
    "metaDescription": "Convertissez vos fichiers HEIC en PDF gratuitement dans votre navigateur et fusionnez plusieurs photos d'iPhone en un seul PDF. Aucun téléchargement, aucune inscription. Fonctionne sur iPhone, Windows et Mac.",
    "schemaName": "Convertisseur HEIC en PDF",
    "schemaDescription": "Convertissez et fusionnez des photos HEIC d'iPhone en un seul PDF directement dans votre navigateur.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur HEIC en PDF,",
    "h1Highlight": "vos photos iPhone dans un seul fichier",
    "intro": "Déposez vos photos HEIC d'iPhone : elles sont décodées et fusionnées en un PDF partageable, le tout directement dans votre navigateur. Rien n'est envoyé sur un serveur.",
    "howTitle": "Comment convertir HEIC en PDF",
    "steps": [
      {
        "title": "Déposez vos fichiers HEIC",
        "body": "Faites glisser vos fichiers .heic depuis Photos, Mail ou un transfert USB."
      },
      {
        "title": "Décodage et fusion locale",
        "body": "Un décodeur WebAssembly transforme chaque HEIC en JPEG, puis jsPDF les combine en un seul PDF, le tout sur votre appareil."
      },
      {
        "title": "Téléchargez le PDF",
        "body": "Enregistrez le PDF sur votre appareil ou cliquez sur 'Obtenir l'URL' pour l'héberger et obtenir un lien partageable."
      }
    ],
    "whyTitle": "Pourquoi convertir HEIC en PDF ?",
    "whyItems": [
      {
        "title": "Format partageable",
        "body": "Le PDF est le format universel pour partager des documents multipages."
      },
      {
        "title": "Prêt à imprimer",
        "body": "La plupart des imprimeurs et bureaux acceptent le format PDF, il est donc prêt à être imprimé."
      },
      {
        "title": "Fusionnez plusieurs photos",
        "body": "Combinez vos photos de voyage ou vos reçus en une seule pièce jointe PDF."
      },
      {
        "title": "Local et privé",
        "body": "Vos photos ne quittent jamais votre appareil."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Comment le format HEIC est-il traité ?",
        "a": "Il lit chaque fichier HEIC directement dans votre navigateur, le convertit en image et l'insère dans le PDF. Rien à installer."
      },
      {
        "q": "Est-ce que des fichiers sont envoyés sur un serveur ?",
        "a": "Non. Toute la conversion s'effectue sur votre appareil. Vos photos ne sont envoyées que si vous choisissez d'héberger le PDF avec 'Obtenir l'URL'."
      },
      {
        "q": "Pourquoi convertir HEIC en PDF ?",
        "a": "HEIC est le format photo d'Apple que la plupart des outils PDF ne peuvent pas lire directement. La conversion permet d'intégrer vos photos iPhone dans un PDF lisible partout."
      },
      {
        "q": "Comment fusionner plusieurs fichiers HEIC en un seul PDF ?",
        "a": "Cochez 'Fusionner en un seul PDF', puis déposez tous vos fichiers HEIC en une fois. Ils seront ajoutés page par page dans un seul PDF."
      },
      {
        "q": "Y a-t-il une perte de qualité ?",
        "a": "Aucune perte notable. Chaque photo est intégrée en pleine résolution et ajustée automatiquement à la page."
      },
      {
        "q": "Les données EXIF sont-elles conservées ?",
        "a": "Les photos sont intégrées en tant qu'images, donc les données EXIF de l'appareil photo ne sont pas conservées. Gardez le fichier HEIC original si vous en avez besoin."
      },
      {
        "q": "Que faire si un fichier échoue ?",
        "a": "Ignorez-le et réessayez, ou réexportez la photo depuis votre iPhone. La plupart des échecs proviennent d'un fichier partiellement copié ou corrompu."
      },
      {
        "q": "Peut-on mélanger HEIC et JPG ?",
        "a": "Oui. Vous pouvez déposer des fichiers HEIC et JPG ensemble et ils fusionneront dans le même PDF."
      },
      {
        "q": "Comment convertir HEIC en PDF sur iPhone, Windows ou Mac ?",
        "a": "La procédure est identique sur tous les appareils. Déposez vos fichiers HEIC dans la zone prévue et téléchargez le PDF. Cela fonctionne dans n'importe quel navigateur moderne, sans installation."
      }
    ],
    "ctaTitle": "Héberger le PDF ?",
    "ctaBody": "Convertissez vos fichiers HEIC en PDF, puis cliquez sur 'Obtenir l'URL' pour l'héberger gratuitement. Aucune inscription requise.",
    "ctaButton": "Essayer l'outil de conversion"
  },
  "de": {
    "metaTitle": "HEIC in PDF umwandeln | Kostenlos, in ein PDF zusammenfügen",
    "metaDescription": "Wandeln Sie HEIC kostenlos in Ihrem Browser in PDF um und fügen Sie mehrere iPhone-Fotos zu einem PDF zusammen. Kein Upload, keine Registrierung. Funktioniert auf iPhone, Windows und Mac.",
    "schemaName": "HEIC in PDF Konverter",
    "schemaDescription": "Wandeln Sie iPhone HEIC-Fotos in Ihrem Browser um und fügen Sie sie zu einem einzigen PDF zusammen.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "HEIC in PDF umwandeln,",
    "h1Highlight": "iPhone-Fotos in einer Datei",
    "intro": "Ziehen Sie Ihre iPhone HEIC-Fotos per Drag-and-Drop hinein; sie werden direkt in Ihrem Browser dekodiert und zu einem teilbaren PDF zusammengefügt. Nichts wird hochgeladen.",
    "howTitle": "So wandeln Sie HEIC in PDF um",
    "steps": [
      {
        "title": "HEIC-Dateien ablegen",
        "body": "Ziehen Sie iPhone .heic-Dateien direkt aus Fotos, Mail oder einer USB-Übertragung in das Fenster."
      },
      {
        "title": "Browser dekodiert und fügt zusammen",
        "body": "Ein WebAssembly-Dekoder wandelt jedes HEIC in ein JPEG um, dann kombiniert jsPDF diese zu einem einzigen PDF – alles auf Ihrem Gerät."
      },
      {
        "title": "PDF herunterladen",
        "body": "Speichern Sie das PDF auf Ihrem Gerät oder klicken Sie auf 'Get URL', um es zu hosten und einen teilbaren Link zu erhalten."
      }
    ],
    "whyTitle": "Warum HEIC in PDF umwandeln?",
    "whyItems": [
      {
        "title": "Teilbares Format",
        "body": "PDF ist das universelle Format für den Austausch mehrseitiger Dokumente."
      },
      {
        "title": "Druckfertig",
        "body": "Die meisten Druckereien und Büros akzeptieren PDF, daher ist es sofort druckbereit."
      },
      {
        "title": "Viele Fotos in einem PDF zusammenführen",
        "body": "Kombinieren Sie Reisefotos oder Belege zu einem einzigen PDF-Anhang."
      },
      {
        "title": "Lokal und privat",
        "body": "Fotos berühren niemals einen Server."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Wie wird HEIC verarbeitet?",
        "a": "Es liest jedes HEIC direkt in Ihrem Browser, wandelt es in ein Bild um und fügt es in das PDF ein. Es muss nichts installiert werden."
      },
      {
        "q": "Wird etwas hochgeladen?",
        "a": "Nein. Die gesamte Konvertierung läuft auf Ihrem Gerät. Ihre Fotos verlassen das Gerät nur, wenn Sie sich entscheiden, das PDF mit 'Get URL' zu hosten."
      },
      {
        "q": "Warum muss HEIC für PDF konvertiert werden?",
        "a": "HEIC ist das Apple-Fotoformat, das die meisten PDF-Tools und Apps nicht direkt lesen können. Durch die Konvertierung können Sie Ihre iPhone-Fotos in ein PDF einfügen, das überall geöffnet werden kann."
      },
      {
        "q": "Wie füge ich mehrere HEIC-Dateien zu einem PDF zusammen?",
        "a": "Aktivieren Sie 'In ein PDF zusammenfügen' und legen Sie alle Ihre HEIC-Dateien gleichzeitig ab. Sie werden nacheinander in ein einziges PDF eingefügt, das Sie herunterladen oder teilen können."
      },
      {
        "q": "Verliere ich an Qualität?",
        "a": "Kein spürbarer Verlust. Jedes Foto wird in voller Auflösung eingebettet und automatisch an die Seite angepasst."
      },
      {
        "q": "Bleiben EXIF-Daten erhalten?",
        "a": "Die Fotos werden als Bilder in das PDF eingefügt, daher bleiben die Kamera-EXIF-Daten nicht erhalten. Speichern Sie das ursprüngliche HEIC, falls Sie diese benötigen."
      },
      {
        "q": "Was ist, wenn eine Datei fehlschlägt?",
        "a": "Überspringen Sie sie und versuchen Sie es erneut oder exportieren Sie das Foto erneut von Ihrem iPhone. Die meisten Fehler entstehen durch teilweise kopierte oder beschädigte Dateien."
      },
      {
        "q": "HEIC und JPG mischen?",
        "a": "Ja. Sie können HEIC und JPG zusammen ablegen und sie werden alle im selben PDF zusammengeführt."
      },
      {
        "q": "Wie wandle ich HEIC auf iPhone, Windows oder Mac in PDF um?",
        "a": "Auf jedem Gerät auf die gleiche Weise. Legen Sie Ihre HEIC-Dateien in das Feld und laden Sie das PDF herunter. Es läuft in jedem modernen Browser, daher muss auf iPhone, Windows oder Mac nichts installiert werden."
      }
    ],
    "ctaTitle": "Das PDF hosten?",
    "ctaBody": "Wandeln Sie Ihre HEIC-Dateien in ein PDF um und klicken Sie dann auf 'Get URL', um es kostenlos zu hosten. Keine Registrierung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "HEIC PDF 変換 | 無料で1つのPDFに結合",
    "metaDescription": "ブラウザ上でHEICをPDFに無料で変換し、複数のiPhone写真を1つのPDFに結合します。アップロード不要、登録不要。iPhone、Windows、Macで動作します。",
    "schemaName": "HEIC PDF 変換ツール",
    "schemaDescription": "ブラウザ上でiPhoneのHEIC写真を変換し、1つのPDFに結合します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "HEIC PDF 変換、",
    "h1Highlight": "iPhoneの写真を1つのファイルに",
    "intro": "iPhoneのHEIC写真をドラッグ＆ドロップするだけで、ブラウザ上でデコードされ、共有可能な1つのPDFに結合されます。サーバーへのアップロードは一切ありません。",
    "howTitle": "HEICをPDFに変換する方法",
    "steps": [
      {
        "title": "HEICファイルをドロップ",
        "body": "iPhoneの.heicファイルを、写真アプリ、メール、またはUSB転送から直接ドラッグ＆ドロップします。"
      },
      {
        "title": "ブラウザでデコードと結合",
        "body": "WebAssemblyデコーダーが各HEICをJPEGに変換し、jsPDFがそれらを1つのPDFにまとめます。すべてデバイス上で処理されます。"
      },
      {
        "title": "PDFをダウンロード",
        "body": "PDFをデバイスに保存するか、「URLを取得」をクリックしてホストし、共有リンクを作成します。"
      }
    ],
    "whyTitle": "なぜHEICをPDFに変換するのか？",
    "whyItems": [
      {
        "title": "共有しやすい形式",
        "body": "PDFは、複数ページのドキュメントを共有するための標準的なフォーマットです。"
      },
      {
        "title": "印刷に最適",
        "body": "ほとんどの印刷所やオフィスで受け入れられているため、すぐに印刷できます。"
      },
      {
        "title": "複数の写真を1つのPDFに",
        "body": "旅行の写真や領収書を1つのPDF添付ファイルにまとめられます。"
      },
      {
        "title": "ローカルでプライベート",
        "body": "写真はサーバーに送信されることはありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "HEICはどのように処理されますか？",
        "a": "ブラウザ上で直接HEICを読み込み、画像に変換してPDFに配置します。インストールは不要です。"
      },
      {
        "q": "アップロードはされますか？",
        "a": "いいえ。変換はすべてお使いのデバイス上で行われます。「URLを取得」を選択してPDFをホストする場合を除き、写真が外部に送信されることはありません。"
      },
      {
        "q": "なぜPDF変換が必要なのですか？",
        "a": "HEICはApple独自の写真形式であり、多くのPDFツールやアプリでは直接読み込めません。変換することで、どこでも開けるPDFとしてiPhoneの写真を活用できます。"
      },
      {
        "q": "複数のHEICファイルを1つのPDFに結合するには？",
        "a": "「1つのPDFに結合」にチェックを入れ、すべてのHEICファイルを一度にドロップしてください。順番通りに1ページずつ追加され、1つのPDFとしてダウンロードや共有が可能です。"
      },
      {
        "q": "画質は低下しますか？",
        "a": "目立った劣化はありません。各写真はフル解像度で埋め込まれ、ページに合わせて自動調整されます。"
      },
      {
        "q": "EXIF情報は保持されますか？",
        "a": "写真は画像としてPDFに埋め込まれるため、カメラのEXIFデータは保持されません。必要な場合は元のHEICファイルを保存してください。"
      },
      {
        "q": "ファイル変換に失敗した場合は？",
        "a": "スキップして再試行するか、iPhoneから写真を再エクスポートしてください。失敗の多くは、コピーが不完全な場合やファイルが破損している場合に発生します。"
      },
      {
        "q": "HEICとJPGを混ぜてもいいですか？",
        "a": "はい。HEICとJPGを一緒にドロップすれば、すべて同じPDFに結合されます。"
      },
      {
        "q": "iPhone、Windows、Macでの変換方法は？",
        "a": "どのデバイスでも同じ手順です。HEICファイルをボックスにドロップしてPDFをダウンロードするだけです。モダンなブラウザであれば動作するため、インストールは不要です。"
      }
    ],
    "ctaTitle": "PDFをホストしますか？",
    "ctaBody": "HEICファイルをPDFに変換後、「URLを取得」をクリックすると無料でホストできます。登録不要です。",
    "ctaButton": "アップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "HEIC 转 PDF 转换器 | 免费，合并为单个 PDF",
    "metaDescription": "在浏览器中免费将 HEIC 转换为 PDF，并将多张 iPhone 照片合并为一个 PDF。无需上传，无需注册。适用于 iPhone、Windows 和 Mac。",
    "schemaName": "HEIC 转 PDF 转换器",
    "schemaDescription": "在浏览器中将 iPhone 的 HEIC 照片转换并合并为单个 PDF。",
    "badge": "纯浏览器工具",
    "h1Pre": "HEIC 转 PDF 转换器，",
    "h1Highlight": "将 iPhone 照片合并为单个文件",
    "intro": "拖入您的 iPhone HEIC 照片，它们将在浏览器中自动解码并合并为一个可共享的 PDF。无需上传任何内容。",
    "howTitle": "如何将 HEIC 转换为 PDF",
    "steps": [
      {
        "title": "拖入 HEIC 文件",
        "body": "直接从“照片”、邮件或 USB 传输中拖入 iPhone 的 .heic 文件。"
      },
      {
        "title": "浏览器解码并合并",
        "body": "WebAssembly 解码器会将每张 HEIC 转换为 JPEG，然后 jsPDF 会将它们合并为单个 PDF，所有操作均在您的设备上完成。"
      },
      {
        "title": "下载 PDF",
        "body": "将 PDF 保存到您的设备，或点击“获取 URL”进行托管并生成可共享的链接。"
      }
    ],
    "whyTitle": "为什么要将 HEIC 转换为 PDF？",
    "whyItems": [
      {
        "title": "易于共享的格式",
        "body": "PDF 是共享多页文档的通用格式。"
      },
      {
        "title": "可直接打印",
        "body": "大多数打印店和办公室都接受 PDF，因此它随时可以打印。"
      },
      {
        "title": "将多张照片合并为一个 PDF",
        "body": "将旅行照片或收据合并为一个 PDF 附件。"
      },
      {
        "title": "本地处理，保护隐私",
        "body": "照片永远不会触及服务器。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "它是如何处理 HEIC 的？",
        "a": "它直接在您的浏览器中读取每张 HEIC，将其转换为图像，并放入 PDF 中。无需安装任何软件。"
      },
      {
        "q": "会有内容被上传吗？",
        "a": "不会。整个转换过程都在您的设备上运行。只有当您选择使用“获取 URL”托管 PDF 时，您的照片才会离开设备。"
      },
      {
        "q": "为什么 HEIC 需要转换为 PDF？",
        "a": "HEIC 是大多数 PDF 工具和应用程序无法直接读取的 Apple 照片格式。转换后，您可以将 iPhone 照片放入可在任何地方打开的 PDF 中。"
      },
      {
        "q": "如何将多个 HEIC 文件合并为一个 PDF？",
        "a": "勾选“合并为单个 PDF”，然后一次性拖入所有 HEIC 文件。它们将按顺序每页一张添加到单个 PDF 中，您可以下载或共享。"
      },
      {
        "q": "会损失画质吗？",
        "a": "没有明显的损失。每张照片都以全分辨率嵌入并自动适应页面。"
      },
      {
        "q": "EXIF 数据会保留吗？",
        "a": "照片是以图像形式进入 PDF 的，因此不会保留相机的 EXIF 数据。如果您需要，请保存原始的 HEIC 文件。"
      },
      {
        "q": "如果文件转换失败怎么办？",
        "a": "跳过它并重试，或者从 iPhone 重新导出该照片。大多数失败是由于文件复制不完整或损坏导致的。"
      },
      {
        "q": "可以混合 HEIC 和 JPG 吗？",
        "a": "可以。您可以同时拖入 HEIC 和 JPG，它们都会合并到同一个 PDF 中。"
      },
      {
        "q": "如何在 iPhone、Windows 或 Mac 上将 HEIC 转换为 PDF？",
        "a": "在所有设备上的操作方式相同。将您的 HEIC 文件拖入框中并下载 PDF。它可以在任何现代浏览器中运行，因此在 iPhone、Windows 或 Mac 上无需安装任何东西。"
      }
    ],
    "ctaTitle": "需要托管 PDF？",
    "ctaBody": "将您的 HEIC 文件转换为 PDF，然后点击“获取 URL”即可免费托管。无需注册。",
    "ctaButton": "尝试主要上传工具"
  }
} as LandingContentMap;
