import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Get Image URLs for ChatGPT Vision — Free & Instant | ImageToURL",
    "metaDescription": "ChatGPT vision needs public image URLs. Upload your image, get an instant URL, and paste it into ChatGPT. Free, no signup required.",
    "schemaName": "Image URLs for ChatGPT",
    "schemaDescription": "Upload images and get public URLs for ChatGPT Vision. Free, instant, no signup required.",
    "badge": "CHATGPT USERS",
    "h1Pre": "Image URLs for ChatGPT",
    "h1Highlight": "instant & free.",
    "intro": "ChatGPT Vision needs a public image URL to analyze your images. Upload here, copy the link, paste it into ChatGPT — done in seconds.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag and drop or click to select your image. We support JPG, PNG, WebP, GIF, and SVG formats up to 25 MB."
      },
      {
        "title": "Copy the URL",
        "body": "Your public image URL is generated instantly. Click the copy button to grab the HTTPS link to your clipboard."
      },
      {
        "title": "Paste in ChatGPT",
        "body": "Paste the URL into any ChatGPT conversation. The vision model will automatically fetch and analyze your image."
      }
    ],
    "whyTitle": "Why ChatGPT Needs Image URLs",
    "whyItems": [
      {
        "title": "Vision Requires Public URLs",
        "body": "ChatGPT's vision model fetches images from the web. It needs a publicly accessible URL to download and process your image for analysis."
      },
      {
        "title": "Local Files Do Not Work",
        "body": "You cannot paste a file path from your computer into ChatGPT. The AI runs on remote servers and has no access to your local filesystem."
      },
      {
        "title": "Instant Analysis",
        "body": "ChatGPT processes your image in seconds once it has the URL. Ask questions about the image, get descriptions, or extract text."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why does ChatGPT need a public image URL?",
        "a": "ChatGPT's vision feature can only analyze images that are hosted on the public internet with a direct URL. It cannot access files stored locally on your computer."
      },
      {
        "q": "Can I paste a local file path into ChatGPT?",
        "a": "No. ChatGPT cannot read local file paths like C:/Users/photo.jpg. You need to upload the image to a hosting service first."
      },
      {
        "q": "How do I use an image URL in ChatGPT?",
        "a": "Upload your image to ImageToURL, copy the generated link, then paste it directly into your ChatGPT conversation."
      },
      {
        "q": "Does the image URL need to be HTTPS?",
        "a": "Yes. ChatGPT requires secure HTTPS URLs. All ImageToURL links are served over HTTPS by default."
      },
      {
        "q": "Will my image URL work with other AI chatbots too?",
        "a": "Yes. Our image URLs work with any AI tool that accepts public image URLs, including Claude, Gemini, and Perplexity."
      }
    ],
    "ctaTitle": "Get your image URL for ChatGPT",
    "ctaBody": "Upload an image, copy the link, paste it into ChatGPT. Takes less than 10 seconds.",
    "ctaButton": "Upload Now"
  },
  "hi": {
    "metaTitle": "ChatGPT Vision के लिए Image URLs प्राप्त करें — मुफ्त और तत्काल | ImageToURL",
    "metaDescription": "ChatGPT vision को सार्वजनिक इमेज URL की आवश्यकता होती है। अपनी इमेज अपलोड करें, तुरंत URL प्राप्त करें और उसे ChatGPT में पेस्ट करें। मुफ्त, किसी साइनअप की आवश्यकता नहीं।",
    "schemaName": "ChatGPT के लिए Image URLs",
    "schemaDescription": "इमेज अपलोड करें और ChatGPT Vision के लिए सार्वजनिक URL प्राप्त करें। मुफ्त, तत्काल, किसी साइनअप की आवश्यकता नहीं।",
    "badge": "CHATGPT उपयोगकर्ता",
    "h1Pre": "ChatGPT के लिए Image URLs",
    "h1Highlight": "तत्काल और मुफ्त।",
    "intro": "ChatGPT Vision को आपकी इमेज का विश्लेषण करने के लिए एक सार्वजनिक इमेज URL की आवश्यकता होती है। यहाँ अपलोड करें, लिंक कॉपी करें, ChatGPT में पेस्ट करें — सेकंडों में काम पूरा।",
    "howTitle": "यह कैसे काम करता है",
    "steps": [
      {
        "title": "अपनी इमेज अपलोड करें",
        "body": "अपनी इमेज को ड्रैग और ड्रॉप करें या चुनने के लिए क्लिक करें। हम 25 MB तक के JPG, PNG, WebP, GIF और SVG फॉर्मेट का समर्थन करते हैं।"
      },
      {
        "title": "URL कॉपी करें",
        "body": "आपका सार्वजनिक इमेज URL तुरंत जनरेट हो जाता है। HTTPS लिंक को अपने क्लिपबोर्ड पर कॉपी करने के लिए कॉपी बटन पर क्लिक करें।"
      },
      {
        "title": "ChatGPT में पेस्ट करें",
        "body": "URL को किसी भी ChatGPT बातचीत में पेस्ट करें। विजन मॉडल स्वचालित रूप से आपकी इमेज को फेच और एनालाइज करेगा।"
      }
    ],
    "whyTitle": "ChatGPT को Image URLs की आवश्यकता क्यों है",
    "whyItems": [
      {
        "title": "Vision को सार्वजनिक URLs की आवश्यकता होती है",
        "body": "ChatGPT का विजन मॉडल वेब से इमेज फेच करता है। विश्लेषण के लिए इमेज को डाउनलोड और प्रोसेस करने हेतु इसे सार्वजनिक रूप से सुलभ URL की आवश्यकता होती है।"
      },
      {
        "title": "लोकल फाइलें काम नहीं करतीं",
        "body": "आप अपने कंप्यूटर से फाइल पाथ को ChatGPT में पेस्ट नहीं कर सकते। AI रिमोट सर्वर पर चलता है और इसकी आपके लोकल फाइल सिस्टम तक कोई पहुंच नहीं होती।"
      },
      {
        "title": "तत्काल विश्लेषण",
        "body": "URL मिलने के बाद ChatGPT सेकंडों में आपकी इमेज को प्रोसेस कर लेता है। इमेज के बारे में प्रश्न पूछें, विवरण प्राप्त करें या टेक्स्ट निकालें।"
      }
    ],
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "faqs": [
      {
        "q": "ChatGPT को सार्वजनिक इमेज URL की आवश्यकता क्यों है?",
        "a": "ChatGPT का विजन फीचर केवल उन इमेज का विश्लेषण कर सकता है जो सीधे URL के साथ सार्वजनिक इंटरनेट पर होस्ट की गई हैं। यह आपके कंप्यूटर पर स्थानीय रूप से संग्रहीत फाइलों तक नहीं पहुंच सकता।"
      },
      {
        "q": "क्या मैं ChatGPT में लोकल फाइल पाथ पेस्ट कर सकता हूँ?",
        "a": "नहीं। ChatGPT C:/Users/photo.jpg जैसे लोकल फाइल पाथ को नहीं पढ़ सकता। आपको पहले इमेज को किसी होस्टिंग सर्विस पर अपलोड करना होगा।"
      },
      {
        "q": "मैं ChatGPT में इमेज URL का उपयोग कैसे करूँ?",
        "a": "अपनी इमेज को ImageToURL पर अपलोड करें, जनरेट किए गए लिंक को कॉपी करें, फिर उसे सीधे अपनी ChatGPT बातचीत में पेस्ट करें।"
      },
      {
        "q": "क्या इमेज URL का HTTPS होना जरूरी है?",
        "a": "हाँ। ChatGPT को सुरक्षित HTTPS URLs की आवश्यकता होती है। सभी ImageToURL लिंक डिफ़ॉल्ट रूप से HTTPS पर सर्व किए जाते हैं।"
      },
      {
        "q": "क्या मेरा इमेज URL अन्य AI चैटबॉट्स के साथ भी काम करेगा?",
        "a": "हाँ। हमारे इमेज URLs किसी भी AI टूल के साथ काम करते हैं जो सार्वजनिक इमेज URLs स्वीकार करते हैं, जिसमें Claude, Gemini और Perplexity शामिल हैं।"
      }
    ],
    "ctaTitle": "ChatGPT के लिए अपना इमेज URL प्राप्त करें",
    "ctaBody": "इमेज अपलोड करें, लिंक कॉपी करें, ChatGPT में पेस्ट करें। 10 सेकंड से भी कम समय लगता है।",
    "ctaButton": "अभी अपलोड करें"
  },
  "es": {
    "metaTitle": "Obtén URLs de imágenes para ChatGPT Vision — Gratis e instantáneo | ImageToURL",
    "metaDescription": "ChatGPT Vision necesita URLs de imágenes públicas. Sube tu imagen, obtén una URL al instante y pégala en ChatGPT. Gratis, sin registro.",
    "schemaName": "URLs de imágenes para ChatGPT",
    "schemaDescription": "Sube imágenes y obtén URLs públicas para ChatGPT Vision. Gratis, instantáneo y sin necesidad de registro.",
    "badge": "USUARIOS DE CHATGPT",
    "h1Pre": "URLs de imágenes para ChatGPT",
    "h1Highlight": "instantáneas y gratis.",
    "intro": "ChatGPT Vision necesita una URL de imagen pública para analizar tus archivos. Súbelos aquí, copia el enlace y pégalo en ChatGPT; listo en segundos.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta o haz clic para seleccionar tu imagen. Admitimos formatos JPG, PNG, WebP, GIF y SVG de hasta 25 MB."
      },
      {
        "title": "Copia la URL",
        "body": "Tu URL de imagen pública se genera al instante. Haz clic en el botón de copiar para guardar el enlace HTTPS en tu portapapeles."
      },
      {
        "title": "Pega en ChatGPT",
        "body": "Pega la URL en cualquier conversación de ChatGPT. El modelo de visión buscará y analizará automáticamente tu imagen."
      }
    ],
    "whyTitle": "Por qué ChatGPT necesita URLs de imágenes",
    "whyItems": [
      {
        "title": "Vision requiere URLs públicas",
        "body": "El modelo de visión de ChatGPT obtiene imágenes de la web. Necesita una URL accesible públicamente para descargar y procesar tu imagen para el análisis."
      },
      {
        "title": "Los archivos locales no funcionan",
        "body": "No puedes pegar una ruta de archivo de tu computadora en ChatGPT. La IA se ejecuta en servidores remotos y no tiene acceso a tu sistema de archivos local."
      },
      {
        "title": "Análisis instantáneo",
        "body": "ChatGPT procesa tu imagen en segundos una vez que tiene la URL. Haz preguntas sobre la imagen, obtén descripciones o extrae texto."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "为什么ChatGPT需要公共图片URL？",
        "a": "La función de visión de ChatGPT solo puede analizar imágenes alojadas en la internet pública con una URL directa. No puede acceder a archivos almacenados localmente en tu computadora."
      },
      {
        "q": "¿Puedo pegar una ruta de archivo local en ChatGPT?",
        "a": "No. ChatGPT no puede leer rutas de archivos locales como C:/Users/foto.jpg. Primero debes subir la imagen a un servicio de alojamiento."
      },
      {
        "q": "¿Cómo uso una URL de imagen en ChatGPT?",
        "a": "Sube tu imagen a ImageToURL, copia el enlace generado y pégalo directamente en tu conversación de ChatGPT."
      },
      {
        "q": "¿La URL de la imagen debe ser HTTPS?",
        "a": "Sí. ChatGPT requiere URLs HTTPS seguras. Todos los enlaces de ImageToURL se sirven a través de HTTPS de forma predeterminada."
      },
      {
        "q": "¿Funcionará mi URL de imagen con otros chatbots de IA?",
        "a": "Sí. Nuestras URLs de imágenes funcionan con cualquier herramienta de IA que acepte URLs de imágenes públicas, incluyendo Claude, Gemini y Perplexity."
      }
    ],
    "ctaTitle": "Obtén tu URL de imagen para ChatGPT",
    "ctaBody": "Sube una imagen, copia el enlace y pégalo en ChatGPT. Toma menos de 10 segundos.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Obtenez des URL d'images pour ChatGPT Vision — Gratuit et instantané | ImageToURL",
    "metaDescription": "ChatGPT Vision nécessite des URL d'images publiques. Téléchargez votre image, obtenez une URL instantanée et collez-la dans ChatGPT. Gratuit, sans inscription.",
    "schemaName": "URL d'images pour ChatGPT",
    "schemaDescription": "Téléchargez des images et obtenez des URL publiques pour ChatGPT Vision. Gratuit, instantané, sans inscription.",
    "badge": "UTILISATEURS CHATGPT",
    "h1Pre": "URL d'images pour ChatGPT",
    "h1Highlight": "instantané et gratuit.",
    "intro": "ChatGPT Vision a besoin d'une URL d'image publique pour analyser vos images. Téléchargez ici, copiez le lien, collez-le dans ChatGPT — fait en quelques secondes.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez ou cliquez pour sélectionner votre image. Nous prenons en charge les formats JPG, PNG, WebP, GIF et SVG jusqu'à 25 Mo."
      },
      {
        "title": "Copiez l'URL",
        "body": "Votre URL d'image publique est générée instantanément. Cliquez sur le bouton de copie pour récupérer le lien HTTPS dans votre presse-papiers."
      },
      {
        "title": "Collez dans ChatGPT",
        "body": "Collez l'URL dans n'importe quelle conversation ChatGPT. Le modèle de vision récupérera et analysera automatiquement votre image."
      }
    ],
    "whyTitle": "Pourquoi ChatGPT a besoin d'URL d'images",
    "whyItems": [
      {
        "title": "La vision nécessite des URL publiques",
        "body": "Le modèle de vision de ChatGPT récupère les images depuis le Web. Il a besoin d'une URL accessible publiquement pour télécharger et traiter votre image pour l'analyse."
      },
      {
        "title": "Les fichiers locaux ne fonctionnent pas",
        "body": "Vous ne pouvez pas coller un chemin de fichier depuis votre ordinateur dans ChatGPT. L'IA fonctionne sur des serveurs distants et n'a pas accès à votre système de fichiers local."
      },
      {
        "title": "Analyse instantanée",
        "body": "ChatGPT traite votre image en quelques secondes une fois qu'il a l'URL. Posez des questions sur l'image, obtenez des descriptions ou extrayez du texte."
      }
    ],
    "faqTitle": "Questions fréquemment posées",
    "faqs": [
      {
        "q": "Pourquoi ChatGPT a-t-il besoin d'une URL d'image publique ?",
        "a": "La fonctionnalité de vision de ChatGPT ne peut analyser que les images hébergées sur l'Internet public avec une URL directe. Elle ne peut pas accéder aux fichiers stockés localement sur votre ordinateur."
      },
      {
        "q": "Puis-je coller un chemin de fichier local dans ChatGPT ?",
        "a": "Non. ChatGPT ne peut pas lire les chemins de fichiers locaux comme C:/Users/photo.jpg. Vous devez d'abord télécharger l'image sur un service d'hébergement."
      },
      {
        "q": "Comment utiliser une URL d'image dans ChatGPT ?",
        "a": "Téléchargez votre image sur ImageToURL, copiez le lien généré, puis collez-le directement dans votre conversation ChatGPT."
      },
      {
        "q": "L'URL de l'image doit-elle être en HTTPS ?",
        "a": "Oui. ChatGPT nécessite des URL HTTPS sécurisées. Tous les liens ImageToURL sont servis via HTTPS par défaut."
      },
      {
        "q": "Mon URL d'image fonctionnera-t-elle aussi avec d'autres chatbots IA ?",
        "a": "Oui. Nos URL d'images fonctionnent avec tout outil d'IA acceptant les URL d'images publiques, y compris Claude, Gemini et Perplexity."
      }
    ],
    "ctaTitle": "Obtenez votre URL d'image pour ChatGPT",
    "ctaBody": "Téléchargez une image, copiez le lien, collez-le dans ChatGPT. Cela prend moins de 10 secondes.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bild-URLs für ChatGPT Vision erhalten — Kostenlos & Sofort | ImageToURL",
    "metaDescription": "ChatGPT Vision benötigt öffentliche Bild-URLs. Laden Sie Ihr Bild hoch, erhalten Sie sofort eine URL und fügen Sie diese in ChatGPT ein. Kostenlos, keine Registrierung erforderlich.",
    "schemaName": "Bild-URLs für ChatGPT",
    "schemaDescription": "Laden Sie Bilder hoch und erhalten Sie öffentliche URLs für ChatGPT Vision. Kostenlos, sofort, keine Registrierung erforderlich.",
    "badge": "CHATGPT-NUTZER",
    "h1Pre": "Bild-URLs für ChatGPT",
    "h1Highlight": "sofort & kostenlos.",
    "intro": "ChatGPT Vision benötigt eine öffentliche Bild-URL, um Ihre Bilder zu analysieren. Hier hochladen, Link kopieren, in ChatGPT einfügen — in Sekunden erledigt.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Ihr Bild per Drag & Drop hinein oder klicken Sie, um es auszuwählen. Wir unterstützen JPG, PNG, WebP, GIF und SVG-Formate bis zu 25 MB."
      },
      {
        "title": "URL kopieren",
        "body": "Ihre öffentliche Bild-URL wird sofort generiert. Klicken Sie auf den Kopieren-Button, um den HTTPS-Link in Ihre Zwischenablage zu übernehmen."
      },
      {
        "title": "In ChatGPT einfügen",
        "body": "Fügen Sie die URL in eine beliebige ChatGPT-Konversation ein. Das Vision-Modell ruft Ihr Bild automatisch ab und analysiert es."
      }
    ],
    "whyTitle": "Warum ChatGPT Bild-URLs benötigt",
    "whyItems": [
      {
        "title": "Vision erfordert öffentliche URLs",
        "body": "Das Vision-Modell von ChatGPT ruft Bilder aus dem Internet ab. Es benötigt eine öffentlich zugängliche URL, um Ihr Bild herunterzuladen und für die Analyse zu verarbeiten."
      },
      {
        "title": "Lokale Dateien funktionieren nicht",
        "body": "Sie können keinen Dateipfad von Ihrem Computer in ChatGPT einfügen. Die KI läuft auf entfernten Servern und hat keinen Zugriff auf Ihr lokales Dateisystem."
      },
      {
        "title": "Sofortige Analyse",
        "body": "Sobald ChatGPT die URL hat, verarbeitet es Ihr Bild in Sekunden. Stellen Sie Fragen zum Bild, erhalten Sie Beschreibungen oder extrahieren Sie Text."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum benötigt ChatGPT eine öffentliche Bild-URL?",
        "a": "Die Vision-Funktion von ChatGPT kann nur Bilder analysieren, die mit einer direkten URL im öffentlichen Internet gehostet sind. Sie kann nicht auf lokal auf Ihrem Computer gespeicherte Dateien zugreifen."
      },
      {
        "q": "Kann ich einen lokalen Dateipfad in ChatGPT einfügen?",
        "a": "Nein. ChatGPT kann keine lokalen Dateipfade wie C:/Users/photo.jpg lesen. Sie müssen das Bild zuerst auf einen Hosting-Dienst hochladen."
      },
      {
        "q": "Wie verwende ich eine Bild-URL in ChatGPT?",
        "a": "Laden Sie Ihr Bild bei ImageToURL hoch, kopieren Sie den generierten Link und fügen Sie ihn dann direkt in Ihre ChatGPT-Konversation ein."
      },
      {
        "q": "Muss die Bild-URL HTTPS sein?",
        "a": "Ja. ChatGPT erfordert sichere HTTPS-URLs. Alle ImageToURL-Links werden standardmäßig über HTTPS bereitgestellt."
      },
      {
        "q": "Funktioniert meine Bild-URL auch mit anderen KI-Chatbots?",
        "a": "Ja. Unsere Bild-URLs funktionieren mit jedem KI-Tool, das öffentliche Bild-URLs akzeptiert, einschließlich Claude, Gemini und Perplexity."
      }
    ],
    "ctaTitle": "Holen Sie sich Ihre Bild-URL für ChatGPT",
    "ctaBody": "Bild hochladen, Link kopieren, in ChatGPT einfügen. Dauert weniger als 10 Sekunden.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "ChatGPT Vision用画像URLを即時作成 — 無料 | ImageToURL",
    "metaDescription": "ChatGPT Visionには公開画像URLが必要です。画像をアップロードして即座にURLを取得し、ChatGPTに貼り付けるだけ。登録不要で完全無料。",
    "schemaName": "ChatGPT用画像URL",
    "schemaDescription": "画像をアップロードしてChatGPT Vision用の公開URLを取得。登録不要、即時発行、完全無料。",
    "badge": "CHATGPTユーザー向け",
    "h1Pre": "ChatGPT用画像URLを",
    "h1Highlight": "即時・無料で作成。",
    "intro": "ChatGPT Visionで画像を解析するには、公開されている画像URLが必要です。ここでアップロードしてリンクをコピーし、ChatGPTに貼り付けるだけで、数秒で完了します。",
    "howTitle": "使い方は簡単",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "画像をドラッグ＆ドロップするか、クリックして選択してください。JPG、PNG、WebP、GIF、SVG形式（最大25MB）に対応しています。"
      },
      {
        "title": "URLをコピー",
        "body": "画像URLが即座に生成されます。コピーボタンをクリックして、HTTPSリンクをクリップボードに保存してください。"
      },
      {
        "title": "ChatGPTに貼り付け",
        "body": "ChatGPTの会話欄にURLを貼り付けてください。Visionモデルが自動的に画像を読み込み、解析を開始します。"
      }
    ],
    "whyTitle": "なぜChatGPTに画像URLが必要なのか",
    "whyItems": [
      {
        "title": "Vision機能は公開URLが必要",
        "body": "ChatGPTのVisionモデルはウェブ上の画像を取得します。解析を行うには、インターネット上でアクセス可能なURLが必要です。"
      },
      {
        "title": "ローカルファイルは使用不可",
        "body": "パソコン内のファイルパスをChatGPTに貼り付けても機能しません。AIはリモートサーバー上で動作しており、あなたのローカルファイルシステムにはアクセスできないためです。"
      },
      {
        "title": "即座に解析",
        "body": "URLさえあれば、ChatGPTは数秒で画像を処理します。画像に関する質問や説明の生成、テキストの抽出などが可能です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜChatGPTに公開画像URLが必要なのですか？",
        "a": "ChatGPTのVision機能は、インターネット上にホストされ、直接アクセス可能なURLを持つ画像のみを解析できるためです。パソコン内に保存されたファイルには直接アクセスできません。"
      },
      {
        "q": "ローカルのファイルパスをChatGPTに貼り付けられますか？",
        "a": "いいえ。ChatGPTは「C:/Users/photo.jpg」のようなローカルのファイルパスを読み取れません。事前に画像ホスティングサービスにアップロードする必要があります。"
      },
      {
        "q": "ChatGPTで画像URLをどう使いますか？",
        "a": "画像をImageToURLにアップロードして生成されたリンクをコピーし、ChatGPTの会話欄に直接貼り付けてください。"
      },
      {
        "q": "画像URLはHTTPSである必要がありますか？",
        "a": "はい。ChatGPTは安全なHTTPS URLを必要とします。ImageToURLで生成されるリンクは、すべてデフォルトでHTTPSに対応しています。"
      },
      {
        "q": "他のAIチャットボットでも使えますか？",
        "a": "はい。当社の画像URLは、Claude、Gemini、Perplexityなど、公開画像URLを受け入れるすべてのAIツールで使用可能です。"
      }
    ],
    "ctaTitle": "ChatGPT用画像URLを作成する",
    "ctaBody": "画像をアップロードしてリンクをコピーし、ChatGPTに貼り付けるだけ。10秒以内に完了します。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "获取 ChatGPT Vision 所需的图片 URL — 免费且即时 | ImageToURL",
    "metaDescription": "ChatGPT Vision 需要公开的图片 URL。上传图片，获取即时链接，并将其粘贴到 ChatGPT 中。免费，无需注册。",
    "schemaName": "ChatGPT 图片 URL",
    "schemaDescription": "上传图片并获取 ChatGPT Vision 所需的公开 URL。免费、即时，无需注册。",
    "badge": "CHATGPT 用户",
    "h1Pre": "ChatGPT 图片 URL",
    "h1Highlight": "即时且免费。",
    "intro": "ChatGPT Vision 需要公开的图片 URL 才能分析您的图片。在此上传，复制链接，粘贴到 ChatGPT 中 — 几秒钟即可完成。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖放或点击以选择您的图片。我们支持 JPG、PNG、WebP、GIF 和 SVG 格式，最大 25 MB。"
      },
      {
        "title": "复制 URL",
        "body": "您的公开图片 URL 会立即生成。点击复制按钮，将 HTTPS 链接保存到剪贴板。"
      },
      {
        "title": "粘贴到 ChatGPT",
        "body": "将 URL 粘贴到任何 ChatGPT 对话中。视觉模型将自动获取并分析您的图片。"
      }
    ],
    "whyTitle": "为什么 ChatGPT 需要图片 URL",
    "whyItems": [
      {
        "title": "视觉功能需要公开 URL",
        "body": "ChatGPT 的视觉模型从网络获取图片。它需要一个可公开访问的 URL 来下载并处理您的图片以进行分析。"
      },
      {
        "title": "本地文件无法使用",
        "body": "您无法将计算机上的文件路径粘贴到 ChatGPT 中。AI 在远程服务器上运行，无法访问您的本地文件系统。"
      },
      {
        "title": "即时分析",
        "body": "一旦获得 URL，ChatGPT 会在几秒钟内处理您的图片。您可以询问有关图片的问题、获取描述或提取文本。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么 ChatGPT 需要公开的图片 URL？",
        "a": "ChatGPT 的视觉功能只能分析托管在公共互联网上并具有直接 URL 的图片。它无法访问存储在您计算机本地的文件。"
      },
      {
        "q": "我可以将本地文件路径粘贴到 ChatGPT 中吗？",
        "a": "不可以。ChatGPT 无法读取诸如 C:/Users/photo.jpg 之类的本地文件路径。您需要先将图片上传到托管服务。"
      },
      {
        "q": "如何在 ChatGPT 中使用图片 URL？",
        "a": "将您的图片上传到 ImageToURL，复制生成的链接，然后直接将其粘贴到您的 ChatGPT 对话中。"
      },
      {
        "q": "图片 URL 是否必须是 HTTPS？",
        "a": "是的。ChatGPT 需要安全的 HTTPS URL。所有 ImageToURL 链接默认通过 HTTPS 提供。"
      },
      {
        "q": "我的图片 URL 也适用于其他 AI 聊天机器人吗？",
        "a": "是的。我们的图片 URL 适用于任何接受公开图片 URL 的 AI 工具，包括 Claude、Gemini 和 Perplexity。"
      }
    ],
    "ctaTitle": "获取您的 ChatGPT 图片 URL",
    "ctaBody": "上传图片，复制链接，粘贴到 ChatGPT。只需不到 10 秒。",
    "ctaButton": "立即上传"
  },
  "id": {
    "metaTitle": "Dapatkan URL Gambar untuk ChatGPT Vision — Gratis & Instan | ImageToURL",
    "metaDescription": "ChatGPT vision memerlukan URL gambar publik. Unggah gambar Anda, dapatkan URL instan, dan tempel ke ChatGPT. Gratis, tanpa perlu mendaftar.",
    "schemaName": "URL Gambar untuk ChatGPT",
    "schemaDescription": "Unggah gambar dan dapatkan URL publik untuk ChatGPT Vision. Gratis, instan, tanpa perlu mendaftar.",
    "badge": "PENGGUNA CHATGPT",
    "h1Pre": "URL Gambar untuk ChatGPT",
    "h1Highlight": "instan & gratis.",
    "intro": "ChatGPT Vision memerlukan URL gambar publik untuk menganalisis gambar Anda. Unggah di sini, salin tautannya, tempel ke ChatGPT — selesai dalam hitungan detik.",
    "howTitle": "Cara Kerja",
    "steps": [
      {
        "title": "Unggah Gambar Anda",
        "body": "Tarik dan lepas atau klik untuk memilih gambar Anda. Kami mendukung format JPG, PNG, WebP, GIF, dan SVG hingga 25 MB."
      },
      {
        "title": "Salin URL",
        "body": "URL gambar publik Anda dibuat secara instan. Klik tombol salin untuk mengambil tautan HTTPS ke papan klip Anda."
      },
      {
        "title": "Tempel di ChatGPT",
        "body": "Tempel URL ke percakapan ChatGPT mana pun. Model vision akan secara otomatis mengambil dan menganalisis gambar Anda."
      }
    ],
    "whyTitle": "Mengapa ChatGPT Memerlukan URL Gambar",
    "whyItems": [
      {
        "title": "Vision Memerlukan URL Publik",
        "body": "Model vision ChatGPT mengambil gambar dari web. Ia memerlukan URL yang dapat diakses publik untuk mengunduh dan memproses gambar Anda guna dianalisis."
      },
      {
        "title": "File Lokal Tidak Berfungsi",
        "body": "Anda tidak dapat menempelkan jalur file dari komputer Anda ke ChatGPT. AI berjalan di server jarak jauh dan tidak memiliki akses ke sistem file lokal Anda."
      },
      {
        "title": "Analisis Instan",
        "body": "ChatGPT memproses gambar Anda dalam hitungan detik setelah memiliki URL. Ajukan pertanyaan tentang gambar, dapatkan deskripsi, atau ekstrak teks."
      }
    ],
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Mengapa ChatGPT memerlukan URL gambar publik?",
        "a": "Fitur vision ChatGPT hanya dapat menganalisis gambar yang dihosting di internet publik dengan URL langsung. Ia tidak dapat mengakses file yang disimpan secara lokal di komputer Anda."
      },
      {
        "q": "Bisakah saya menempelkan jalur file lokal ke ChatGPT?",
        "a": "Tidak. ChatGPT tidak dapat membaca jalur file lokal seperti C:/Users/photo.jpg. Anda harus mengunggah gambar ke layanan hosting terlebih dahulu."
      },
      {
        "q": "Bagaimana cara menggunakan URL gambar di ChatGPT?",
        "a": "Unggah gambar Anda ke ImageToURL, salin tautan yang dihasilkan, lalu tempel langsung ke percakapan ChatGPT Anda."
      },
      {
        "q": "Apakah URL gambar harus HTTPS?",
        "a": "Ya. ChatGPT memerlukan URL HTTPS yang aman. Semua tautan ImageToURL disajikan melalui HTTPS secara default."
      },
      {
        "q": "Apakah URL gambar saya akan berfungsi dengan chatbot AI lain juga?",
        "a": "Ya. URL gambar kami berfungsi dengan alat AI apa pun yang menerima URL gambar publik, termasuk Claude, Gemini, dan Perplexity."
      }
    ],
    "ctaTitle": "Dapatkan URL gambar Anda untuk ChatGPT",
    "ctaBody": "Unggah gambar, salin tautan, tempel ke ChatGPT. Membutuhkan waktu kurang dari 10 detik.",
    "ctaButton": "Unggah Sekarang"
  },
  "vi": {
    "metaTitle": "Lấy URL ảnh cho ChatGPT Vision — Miễn phí & Tức thì | ImageToURL",
    "metaDescription": "ChatGPT Vision cần URL ảnh công khai. Tải ảnh lên, nhận URL tức thì và dán vào ChatGPT. Miễn phí, không cần đăng ký.",
    "schemaName": "URL ảnh cho ChatGPT",
    "schemaDescription": "Tải ảnh lên và nhận URL công khai cho ChatGPT Vision. Miễn phí, tức thì, không cần đăng ký.",
    "badge": "NGƯỜI DÙNG CHATGPT",
    "h1Pre": "URL ảnh cho ChatGPT",
    "h1Highlight": "tức thì & miễn phí.",
    "intro": "ChatGPT Vision cần một URL ảnh công khai để phân tích hình ảnh của bạn. Tải lên tại đây, sao chép liên kết, dán vào ChatGPT — xong trong vài giây.",
    "howTitle": "Cách thức hoạt động",
    "steps": [
      {
        "title": "Tải ảnh của bạn lên",
        "body": "Kéo thả hoặc nhấp để chọn ảnh. Chúng tôi hỗ trợ các định dạng JPG, PNG, WebP, GIF và SVG lên đến 25 MB."
      },
      {
        "title": "Sao chép URL",
        "body": "URL ảnh công khai của bạn được tạo ngay lập tức. Nhấp vào nút sao chép để lấy liên kết HTTPS vào khay nhớ tạm."
      },
      {
        "title": "Dán vào ChatGPT",
        "body": "Dán URL vào bất kỳ cuộc trò chuyện nào trên ChatGPT. Mô hình thị giác sẽ tự động truy xuất và phân tích ảnh của bạn."
      }
    ],
    "whyTitle": "Tại sao ChatGPT cần URL ảnh",
    "whyItems": [
      {
        "title": "Vision yêu cầu URL công khai",
        "body": "Mô hình thị giác của ChatGPT truy xuất ảnh từ web. Nó cần một URL có thể truy cập công khai để tải xuống và xử lý ảnh của bạn."
      },
      {
        "title": "Tệp cục bộ không hoạt động",
        "body": "Bạn không thể dán đường dẫn tệp từ máy tính vào ChatGPT. AI chạy trên máy chủ từ xa và không có quyền truy cập vào hệ thống tệp cục bộ của bạn."
      },
      {
        "title": "Phân tích tức thì",
        "body": "ChatGPT xử lý ảnh của bạn trong vài giây sau khi có URL. Hãy đặt câu hỏi về hình ảnh, nhận mô tả hoặc trích xuất văn bản."
      }
    ],
    "faqTitle": "Câu hỏi thường gặp",
    "faqs": [
      {
        "q": "Tại sao ChatGPT cần URL ảnh công khai?",
        "a": "Tính năng thị giác của ChatGPT chỉ có thể phân tích các hình ảnh được lưu trữ trên internet công khai với URL trực tiếp. Nó không thể truy cập các tệp được lưu cục bộ trên máy tính của bạn."
      },
      {
        "q": "Tôi có thể dán đường dẫn tệp cục bộ vào ChatGPT không?",
        "a": "Không. ChatGPT không thể đọc các đường dẫn tệp cục bộ như C:/Users/photo.jpg. Bạn cần tải ảnh lên một dịch vụ lưu trữ trước."
      },
      {
        "q": "Làm cách nào để sử dụng URL ảnh trong ChatGPT?",
        "a": "Tải ảnh của bạn lên ImageToURL, sao chép liên kết đã tạo, sau đó dán trực tiếp vào cuộc trò chuyện ChatGPT của bạn."
      },
      {
        "q": "URL ảnh có cần phải là HTTPS không?",
        "a": "Có. ChatGPT yêu cầu các URL HTTPS bảo mật. Tất cả các liên kết ImageToURL đều được phục vụ qua HTTPS theo mặc định."
      },
      {
        "q": "URL ảnh của tôi có hoạt động với các chatbot AI khác không?",
        "a": "Có. URL ảnh của chúng tôi hoạt động với bất kỳ công cụ AI nào chấp nhận URL ảnh công khai, bao gồm Claude, Gemini và Perplexity."
      }
    ],
    "ctaTitle": "Lấy URL ảnh cho ChatGPT của bạn",
    "ctaBody": "Tải ảnh lên, sao chép liên kết, dán vào ChatGPT. Mất chưa đầy 10 giây.",
    "ctaButton": "Tải lên ngay"
  },
  "pt-BR": {
    "metaTitle": "Obtenha URLs de Imagem para o ChatGPT Vision — Grátis e Instantâneo | ImageToURL",
    "metaDescription": "O ChatGPT Vision precisa de URLs de imagem públicas. Envie sua imagem, obtenha um link instantâneo e cole no ChatGPT. Grátis, sem necessidade de cadastro.",
    "schemaName": "URLs de Imagem para ChatGPT",
    "schemaDescription": "Envie imagens e obtenha URLs públicas para o ChatGPT Vision. Grátis, instantâneo e sem necessidade de cadastro.",
    "badge": "USUÁRIOS DO CHATGPT",
    "h1Pre": "URLs de Imagem para ChatGPT",
    "h1Highlight": "instantâneas e grátis.",
    "intro": "O ChatGPT Vision precisa de uma URL de imagem pública para analisar suas imagens. Envie aqui, copie o link e cole no ChatGPT — tudo em segundos.",
    "howTitle": "Como funciona",
    "steps": [
      {
        "title": "Envie sua imagem",
        "body": "Arraste e solte ou clique para selecionar sua imagem. Suportamos formatos JPG, PNG, WebP, GIF e SVG de até 25 MB."
      },
      {
        "title": "Copie a URL",
        "body": "Sua URL de imagem pública é gerada instantaneamente. Clique no botão de copiar para salvar o link HTTPS na sua área de transferência."
      },
      {
        "title": "Cole no ChatGPT",
        "body": "Cole a URL em qualquer conversa do ChatGPT. O modelo de visão buscará e analisará sua imagem automaticamente."
      }
    ],
    "whyTitle": "Por que o ChatGPT precisa de URLs de imagem",
    "whyItems": [
      {
        "title": "O Vision requer URLs públicas",
        "body": "O modelo de visão do ChatGPT busca imagens na web. Ele precisa de uma URL acessível publicamente para baixar e processar sua imagem para análise."
      },
      {
        "title": "Arquivos locais não funcionam",
        "body": "Você não pode colar um caminho de arquivo do seu computador no ChatGPT. A IA roda em servidores remotos e não tem acesso ao seu sistema de arquivos local."
      },
      {
        "title": "Análise instantânea",
        "body": "O ChatGPT processa sua imagem em segundos assim que recebe a URL. Faça perguntas sobre a imagem, obtenha descrições ou extraia texto."
      }
    ],
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Por que o ChatGPT precisa de uma URL de imagem pública?",
        "a": "O recurso de visão do ChatGPT só pode analisar imagens hospedadas na internet pública com uma URL direta. Ele não consegue acessar arquivos armazenados localmente no seu computador."
      },
      {
        "q": "Posso colar um caminho de arquivo local no ChatGPT?",
        "a": "Não. O ChatGPT não consegue ler caminhos de arquivos locais como C:/Users/foto.jpg. Você precisa enviar a imagem para um serviço de hospedagem primeiro."
      },
      {
        "q": "Como uso uma URL de imagem no ChatGPT?",
        "a": "Envie sua imagem para o ImageToURL, copie o link gerado e cole-o diretamente na sua conversa do ChatGPT."
      },
      {
        "q": "A URL da imagem precisa ser HTTPS?",
        "a": "Sim. O ChatGPT exige URLs HTTPS seguras. Todos os links do ImageToURL são servidos via HTTPS por padrão."
      },
      {
        "q": "Minha URL de imagem funcionará com outros chatbots de IA também?",
        "a": "Sim. Nossas URLs de imagem funcionam com qualquer ferramenta de IA que aceite URLs de imagem públicas, incluindo Claude, Gemini e Perplexity."
      }
    ],
    "ctaTitle": "Obtenha sua URL de imagem para o ChatGPT",
    "ctaBody": "Envie uma imagem, copie o link e cole no ChatGPT. Leva menos de 10 segundos.",
    "ctaButton": "Enviar agora"
  },
  "tr": {
    "metaTitle": "ChatGPT Vision için Resim URL'leri Alın — Ücretsiz ve Anında | ImageToURL",
    "metaDescription": "ChatGPT vision, herkese açık resim URL'lerine ihtiyaç duyar. Resminizi yükleyin, anında URL alın ve ChatGPT'ye yapıştırın. Ücretsiz, kayıt gerekmez.",
    "schemaName": "ChatGPT için Resim URL'leri",
    "schemaDescription": "Resimlerinizi yükleyin ve ChatGPT Vision için herkese açık URL'ler alın. Ücretsiz, anında, kayıt gerekmez.",
    "badge": "CHATGPT KULLANICILARI",
    "h1Pre": "ChatGPT için Resim URL'leri",
    "h1Highlight": "anında ve ücretsiz.",
    "intro": "ChatGPT Vision, resimlerinizi analiz etmek için herkese açık bir resim URL'sine ihtiyaç duyar. Buraya yükleyin, bağlantıyı kopyalayın, ChatGPT'ye yapıştırın — saniyeler içinde hazır.",
    "howTitle": "Nasıl Çalışır",
    "steps": [
      {
        "title": "Resminizi Yükleyin",
        "body": "Sürükleyip bırakın veya resminizi seçmek için tıklayın. 25 MB'a kadar JPG, PNG, WebP, GIF ve SVG formatlarını destekliyoruz."
      },
      {
        "title": "URL'yi Kopyalayın",
        "body": "Herkese açık resim URL'niz anında oluşturulur. HTTPS bağlantısını panonuza almak için kopyala düğmesine tıklayın."
      },
      {
        "title": "ChatGPT'ye Yapıştırın",
        "body": "URL'yi herhangi bir ChatGPT sohbetine yapıştırın. Vision modeli resminizi otomatik olarak çekecek ve analiz edecektir."
      }
    ],
    "whyTitle": "ChatGPT Neden Resim URL'lerine İhtiyaç Duyar?",
    "whyItems": [
      {
        "title": "Vision Herkese Açık URL'ler Gerektirir",
        "body": "ChatGPT'nin vision modeli resimleri web üzerinden çeker. Analiz için resminizi indirip işleyebilmesi adına herkese açık bir URL'ye ihtiyaç duyar."
      },
      {
        "title": "Yerel Dosyalar Çalışmaz",
        "body": "Bilgisayarınızdaki bir dosya yolunu ChatGPT'ye yapıştıramazsınız. Yapay zeka uzak sunucularda çalışır ve yerel dosya sisteminize erişimi yoktur."
      },
      {
        "title": "Anında Analiz",
        "body": "URL'yi aldıktan sonra ChatGPT resminizi saniyeler içinde işler. Resim hakkında sorular sorun, açıklamalar alın veya metinleri ayıklayın."
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular",
    "faqs": [
      {
        "q": "ChatGPT neden herkese açık bir resim URL'sine ihtiyaç duyar?",
        "a": "ChatGPT'nin vision özelliği, yalnızca doğrudan bir URL ile genel internette barındırılan resimleri analiz edebilir. Bilgisayarınızda yerel olarak depolanan dosyalara erişemez."
      },
      {
        "q": "ChatGPT'ye yerel bir dosya yolu yapıştırabilir miyim?",
        "a": "Hayır. ChatGPT, C:/Users/photo.jpg gibi yerel dosya yollarını okuyamaz. Önce resmi bir barındırma hizmetine yüklemeniz gerekir."
      },
      {
        "q": "ChatGPT'de resim URL'sini nasıl kullanırım?",
        "a": "Resminizi ImageToURL'e yükleyin, oluşturulan bağlantıyı kopyalayın ve ardından doğrudan ChatGPT sohbetinize yapıştırın."
      },
      {
        "q": "Resim URL'sinin HTTPS olması gerekir mi?",
        "a": "Evet. ChatGPT güvenli HTTPS URL'leri gerektirir. Tüm ImageToURL bağlantıları varsayılan olarak HTTPS üzerinden sunulur."
      },
      {
        "q": "Resim URL'm diğer yapay zeka sohbet botlarıyla da çalışır mı?",
        "a": "Evet. Resim URL'lerimiz Claude, Gemini ve Perplexity dahil olmak üzere herkese açık resim URL'lerini kabul eden tüm yapay zeka araçlarıyla çalışır."
      }
    ],
    "ctaTitle": "ChatGPT için resim URL'nizi alın",
    "ctaBody": "Bir resim yükleyin, bağlantıyı kopyalayın, ChatGPT'ye yapıştırın. 10 saniyeden az sürer.",
    "ctaButton": "Şimdi Yükle"
  },
  "tl": {
    "metaTitle": "Kumuha ng Image URL para sa ChatGPT Vision — Libre at Instant | ImageToURL",
    "metaDescription": "Kailangan ng ChatGPT vision ang mga public image URL. I-upload ang iyong larawan, kumuha ng instant URL, at i-paste ito sa ChatGPT. Libre, walang signup na kailangan.",
    "schemaName": "Image URL para sa ChatGPT",
    "schemaDescription": "Mag-upload ng mga larawan at kumuha ng mga public URL para sa ChatGPT Vision. Libre, instant, at walang signup na kailangan.",
    "badge": "MGA USER NG CHATGPT",
    "h1Pre": "Image URL para sa ChatGPT",
    "h1Highlight": "instant at libre.",
    "intro": "Kailangan ng ChatGPT Vision ng public image URL para suriin ang iyong mga larawan. I-upload dito, kopyahin ang link, at i-paste sa ChatGPT — tapos na sa loob ng ilang segundo.",
    "howTitle": "Paano Ito Gumagana",
    "steps": [
      {
        "title": "I-upload ang Iyong Larawan",
        "body": "I-drag at i-drop o i-click para piliin ang iyong larawan. Sinusuportahan namin ang mga format na JPG, PNG, WebP, GIF, at SVG hanggang 25 MB."
      },
      {
        "title": "Kopyahin ang URL",
        "body": "Ang iyong public image URL ay agad na gagawin. I-click ang copy button para makuha ang HTTPS link sa iyong clipboard."
      },
      {
        "title": "I-paste sa ChatGPT",
        "body": "I-paste ang URL sa anumang usapan sa ChatGPT. Awtomatikong kukunin at susuriin ng vision model ang iyong larawan."
      }
    ],
    "whyTitle": "Bakit Kailangan ng ChatGPT ng mga Image URL",
    "whyItems": [
      {
        "title": "Kailangan ng Vision ang mga Public URL",
        "body": "Ang vision model ng ChatGPT ay kumukuha ng mga larawan mula sa web. Kailangan nito ng URL na accessible sa publiko para ma-download at maproseso ang iyong larawan para sa pagsusuri."
      },
      {
        "title": "Hindi Gumagana ang mga Local File",
        "body": "Hindi ka maaaring mag-paste ng file path mula sa iyong computer patungo sa ChatGPT. Ang AI ay tumatakbo sa mga remote server at walang access sa iyong local filesystem."
      },
      {
        "title": "Instant na Pagsusuri",
        "body": "Pinoproseso ng ChatGPT ang iyong larawan sa loob ng ilang segundo kapag mayroon na itong URL. Magtanong tungkol sa larawan, kumuha ng mga deskripsyon, o kumuha ng text."
      }
    ],
    "faqTitle": "Mga Madalas Itanong",
    "faqs": [
      {
        "q": "Bakit kailangan ng ChatGPT ng public image URL?",
        "a": "Ang vision feature ng ChatGPT ay makakasuri lamang ng mga larawang naka-host sa public internet na may direktang URL. Hindi nito ma-access ang mga file na naka-save nang local sa iyong computer."
      },
      {
        "q": "Maaari ba akong mag-paste ng local file path sa ChatGPT?",
        "a": "Hindi. Hindi mababasa ng ChatGPT ang mga local file path gaya ng C:/Users/photo.jpg. Kailangan mo munang i-upload ang larawan sa isang hosting service."
      },
      {
        "q": "Paano ko gagamitin ang image URL sa ChatGPT?",
        "a": "I-upload ang iyong larawan sa ImageToURL, kopyahin ang ginawang link, at i-paste ito nang direkta sa iyong usapan sa ChatGPT."
      },
      {
        "q": "Kailangan ba na HTTPS ang image URL?",
        "a": "Oo. Kailangan ng ChatGPT ng mga secure na HTTPS URL. Lahat ng link sa ImageToURL ay naka-serve sa pamamagitan ng HTTPS bilang default."
      },
      {
        "q": "Gagana ba ang aking image URL sa ibang AI chatbot?",
        "a": "Oo. Ang aming mga image URL ay gumagana sa anumang AI tool na tumatanggap ng mga public image URL, kabilang ang Claude, Gemini, at Perplexity."
      }
    ],
    "ctaTitle": "Kunin ang iyong image URL para sa ChatGPT",
    "ctaBody": "Mag-upload ng larawan, kopyahin ang link, at i-paste sa ChatGPT. Wala pang 10 segundo.",
    "ctaButton": "I-upload Ngayon"
  },
  "pl": {
    "metaTitle": "Uzyskaj URL obrazu dla ChatGPT Vision — darmowe i natychmiastowe | ImageToURL",
    "metaDescription": "ChatGPT Vision wymaga publicznych adresów URL obrazów. Prześlij swój obraz, uzyskaj natychmiastowy link i wklej go do ChatGPT. Za darmo, bez rejestracji.",
    "schemaName": "Adresy URL obrazów dla ChatGPT",
    "schemaDescription": "Przesyłaj obrazy i uzyskuj publiczne adresy URL dla ChatGPT Vision. Darmowe, natychmiastowe, bez rejestracji.",
    "badge": "DLA UŻYTKOWNIKÓW CHATGPT",
    "h1Pre": "Adresy URL obrazów dla ChatGPT",
    "h1Highlight": "natychmiastowe i darmowe.",
    "intro": "ChatGPT Vision potrzebuje publicznego adresu URL, aby przeanalizować Twoje obrazy. Prześlij plik tutaj, skopiuj link i wklej go do ChatGPT — gotowe w kilka sekund.",
    "howTitle": "Jak to działa",
    "steps": [
      {
        "title": "Prześlij swój obraz",
        "body": "Przeciągnij i upuść lub kliknij, aby wybrać obraz. Obsługujemy formaty JPG, PNG, WebP, GIF i SVG do 25 MB."
      },
      {
        "title": "Skopiuj adres URL",
        "body": "Twój publiczny adres URL obrazu zostanie wygenerowany natychmiast. Kliknij przycisk kopiowania, aby zapisać link HTTPS w schowku."
      },
      {
        "title": "Wklej w ChatGPT",
        "body": "Wklej adres URL w dowolnej konwersacji z ChatGPT. Model wizyjny automatycznie pobierze i przeanalizuje Twój obraz."
      }
    ],
    "whyTitle": "Dlaczego ChatGPT potrzebuje adresów URL obrazów",
    "whyItems": [
      {
        "title": "Vision wymaga publicznych adresów URL",
        "body": "Model wizyjny ChatGPT pobiera obrazy z sieci. Potrzebuje publicznie dostępnego adresu URL, aby pobrać i przetworzyć obraz do analizy."
      },
      {
        "title": "Pliki lokalne nie działają",
        "body": "Nie możesz wkleić ścieżki pliku z komputera do ChatGPT. AI działa na zdalnych serwerach i nie ma dostępu do Twojego lokalnego systemu plików."
      },
      {
        "title": "Natychmiastowa analiza",
        "body": "ChatGPT przetwarza obraz w kilka sekund po otrzymaniu adresu URL. Zadawaj pytania dotyczące obrazu, uzyskuj opisy lub wyodrębniaj tekst."
      }
    ],
    "faqTitle": "Najczęściej zadawane pytania",
    "faqs": [
      {
        "q": "Dlaczego ChatGPT potrzebuje publicznego adresu URL obrazu?",
        "a": "Funkcja wizyjna ChatGPT może analizować tylko obrazy hostowane w publicznym internecie z bezpośrednim adresem URL. Nie ma dostępu do plików przechowywanych lokalnie na Twoim komputerze."
      },
      {
        "q": "Czy mogę wkleić lokalną ścieżkę pliku do ChatGPT?",
        "a": "Nie. ChatGPT nie może odczytać lokalnych ścieżek plików, takich jak C:/Users/photo.jpg. Musisz najpierw przesłać obraz do serwisu hostingowego."
      },
      {
        "q": "Jak użyć adresu URL obrazu w ChatGPT?",
        "a": "Prześlij swój obraz do ImageToURL, skopiuj wygenerowany link, a następnie wklej go bezpośrednio w konwersacji z ChatGPT."
      },
      {
        "q": "Czy adres URL obrazu musi być w formacie HTTPS?",
        "a": "Tak. ChatGPT wymaga bezpiecznych adresów URL HTTPS. Wszystkie linki ImageToURL są domyślnie obsługiwane przez HTTPS."
      },
      {
        "q": "Czy mój adres URL obrazu zadziała również z innymi chatbotami AI?",
        "a": "Tak. Nasze adresy URL obrazów działają z każdym narzędziem AI, które akceptuje publiczne linki do obrazów, w tym Claude, Gemini i Perplexity."
      }
    ],
    "ctaTitle": "Uzyskaj adres URL obrazu dla ChatGPT",
    "ctaBody": "Prześlij obraz, skopiuj link, wklej go do ChatGPT. Zajmuje to mniej niż 10 sekund.",
    "ctaButton": "Prześlij teraz"
  },
  "nl": {
    "metaTitle": "Krijg afbeeldings-URL's voor ChatGPT Vision — Gratis & Direct | ImageToURL",
    "metaDescription": "ChatGPT Vision heeft openbare afbeeldings-URL's nodig. Upload je afbeelding, krijg direct een URL en plak deze in ChatGPT. Gratis, geen registratie vereist.",
    "schemaName": "Afbeeldings-URL's voor ChatGPT",
    "schemaDescription": "Upload afbeeldingen en krijg openbare URL's voor ChatGPT Vision. Gratis, direct en zonder registratie.",
    "badge": "CHATGPT GEBRUIKERS",
    "h1Pre": "Afbeeldings-URL's voor ChatGPT",
    "h1Highlight": "direct & gratis.",
    "intro": "ChatGPT Vision heeft een openbare afbeeldings-URL nodig om je afbeeldingen te analyseren. Upload hier, kopieer de link, plak deze in ChatGPT — klaar in seconden.",
    "howTitle": "Hoe het werkt",
    "steps": [
      {
        "title": "Upload je afbeelding",
        "body": "Sleep je afbeelding naar het venster of klik om te selecteren. We ondersteunen JPG, PNG, WebP, GIF en SVG-formaten tot 25 MB."
      },
      {
        "title": "Kopieer de URL",
        "body": "Je openbare afbeeldings-URL wordt direct gegenereerd. Klik op de kopieerknop om de HTTPS-link naar je klembord te kopiëren."
      },
      {
        "title": "Plak in ChatGPT",
        "body": "Plak de URL in een ChatGPT-gesprek. Het vision-model haalt de afbeelding automatisch op en analyseert deze."
      }
    ],
    "whyTitle": "Waarom ChatGPT afbeeldings-URL's nodig heeft",
    "whyItems": [
      {
        "title": "Vision vereist openbare URL's",
        "body": "Het vision-model van ChatGPT haalt afbeeldingen van het internet. Het heeft een openbaar toegankelijke URL nodig om je afbeelding te downloaden en te verwerken voor analyse."
      },
      {
        "title": "Lokale bestanden werken niet",
        "body": "Je kunt geen bestandspad vanaf je computer in ChatGPT plakken. De AI draait op externe servers en heeft geen toegang tot je lokale bestandssysteem."
      },
      {
        "title": "Directe analyse",
        "body": "ChatGPT verwerkt je afbeelding in seconden zodra het de URL heeft. Stel vragen over de afbeelding, krijg beschrijvingen of extraheer tekst."
      }
    ],
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Waarom heeft ChatGPT een openbare afbeeldings-URL nodig?",
        "a": "De vision-functie van ChatGPT kan alleen afbeeldingen analyseren die op het openbare internet staan met een directe URL. Het heeft geen toegang tot bestanden die lokaal op je computer staan."
      },
      {
        "q": "Kan ik een lokaal bestandspad in ChatGPT plakken?",
        "a": "Nee. ChatGPT kan geen lokale bestandspaden zoals C:/Users/foto.jpg lezen. Je moet de afbeelding eerst uploaden naar een hostingservice."
      },
      {
        "q": "Hoe gebruik ik een afbeeldings-URL in ChatGPT?",
        "a": "Upload je afbeelding naar ImageToURL, kopieer de gegenereerde link en plak deze direct in je ChatGPT-gesprek."
      },
      {
        "q": "Moet de afbeeldings-URL HTTPS zijn?",
        "a": "Ja. ChatGPT vereist beveiligde HTTPS-URL's. Alle ImageToURL-links worden standaard via HTTPS geserveerd."
      },
      {
        "q": "Werkt mijn afbeeldings-URL ook met andere AI-chatbots?",
        "a": "Ja. Onze afbeeldings-URL's werken met elke AI-tool die openbare afbeeldings-URL's accepteert, inclusief Claude, Gemini en Perplexity."
      }
    ],
    "ctaTitle": "Krijg je afbeeldings-URL voor ChatGPT",
    "ctaBody": "Upload een afbeelding, kopieer de link, plak deze in ChatGPT. Het duurt minder dan 10 seconden.",
    "ctaButton": "Nu uploaden"
  },
  "it": {
    "metaTitle": "Ottieni URL di immagini per ChatGPT Vision — Gratis e istantaneo | ImageToURL",
    "metaDescription": "ChatGPT Vision richiede URL di immagini pubblici. Carica la tua immagine, ottieni un URL istantaneo e incollalo in ChatGPT. Gratis, nessuna registrazione richiesta.",
    "schemaName": "URL di immagini per ChatGPT",
    "schemaDescription": "Carica immagini e ottieni URL pubblici per ChatGPT Vision. Gratis, istantaneo, nessuna registrazione richiesta.",
    "badge": "UTENTI CHATGPT",
    "h1Pre": "URL di immagini per ChatGPT",
    "h1Highlight": "istantanei e gratuiti.",
    "intro": "ChatGPT Vision ha bisogno di un URL pubblico per analizzare le tue immagini. Caricale qui, copia il link, incollalo in ChatGPT: fatto in pochi secondi.",
    "howTitle": "Come funziona",
    "steps": [
      {
        "title": "Carica la tua immagine",
        "body": "Trascina e rilascia o clicca per selezionare la tua immagine. Supportiamo i formati JPG, PNG, WebP, GIF e SVG fino a 25 MB."
      },
      {
        "title": "Copia l'URL",
        "body": "Il tuo URL pubblico dell'immagine viene generato istantaneamente. Clicca sul pulsante di copia per salvare il link HTTPS negli appunti."
      },
      {
        "title": "Incolla in ChatGPT",
        "body": "Incolla l'URL in qualsiasi conversazione di ChatGPT. Il modello vision recupererà e analizzerà automaticamente la tua immagine."
      }
    ],
    "whyTitle": "Perché ChatGPT ha bisogno di URL di immagini",
    "whyItems": [
      {
        "title": "Vision richiede URL pubblici",
        "body": "Il modello vision di ChatGPT recupera le immagini dal web. Ha bisogno di un URL accessibile pubblicamente per scaricare ed elaborare la tua immagine per l'analisi."
      },
      {
        "title": "I file locali non funzionano",
        "body": "Non puoi incollare un percorso di file dal tuo computer in ChatGPT. L'IA gira su server remoti e non ha accesso al tuo file system locale."
      },
      {
        "title": "Analisi istantanea",
        "body": "ChatGPT elabora la tua immagine in pochi secondi una volta ottenuto l'URL. Fai domande sull'immagine, ottieni descrizioni o estrai testo."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Perché ChatGPT ha bisogno di un URL di immagine pubblico?",
        "a": "La funzione vision di ChatGPT può analizzare solo immagini ospitate su internet pubblico con un URL diretto. Non può accedere ai file salvati localmente sul tuo computer."
      },
      {
        "q": "Posso incollare un percorso di file locale in ChatGPT?",
        "a": "No. ChatGPT non può leggere percorsi di file locali come C:/Users/foto.jpg. Devi prima caricare l'immagine su un servizio di hosting."
      },
      {
        "q": "Come uso un URL di immagine in ChatGPT?",
        "a": "Carica la tua immagine su ImageToURL, copia il link generato, quindi incollalo direttamente nella tua conversazione di ChatGPT."
      },
      {
        "q": "L'URL dell'immagine deve essere HTTPS?",
        "a": "Sì. ChatGPT richiede URL HTTPS sicuri. Tutti i link di ImageToURL sono serviti tramite HTTPS per impostazione predefinita."
      },
      {
        "q": "Il mio URL di immagine funzionerà anche con altri chatbot IA?",
        "a": "Sì. I nostri URL di immagini funzionano con qualsiasi strumento IA che accetti URL di immagini pubblici, inclusi Claude, Gemini e Perplexity."
      }
    ],
    "ctaTitle": "Ottieni il tuo URL di immagine per ChatGPT",
    "ctaBody": "Carica un'immagine, copia il link, incollalo in ChatGPT. Richiede meno di 10 secondi.",
    "ctaButton": "Carica ora"
  },
  "ar": {
    "metaTitle": "احصل على روابط صور لـ ChatGPT Vision — مجاني وفوري | ImageToURL",
    "metaDescription": "تحتاج ميزة ChatGPT vision إلى روابط صور عامة. ارفع صورتك، احصل على رابط فوري، والصقه في ChatGPT. مجاني وبدون تسجيل.",
    "schemaName": "روابط صور لـ ChatGPT",
    "schemaDescription": "ارفع الصور واحصل على روابط عامة لـ ChatGPT Vision. مجاني، فوري، وبدون تسجيل.",
    "badge": "مستخدمو CHATGPT",
    "h1Pre": "روابط صور لـ ChatGPT",
    "h1Highlight": "فورية ومجانية.",
    "intro": "تحتاج ميزة ChatGPT Vision إلى رابط صورة عام لتحليل صورك. ارفع الصورة هنا، انسخ الرابط، والصقه في ChatGPT — الأمر يتم في ثوانٍ.",
    "howTitle": "كيف يعمل",
    "steps": [
      {
        "title": "ارفع صورتك",
        "body": "قم بالسحب والإفلات أو انقر لاختيار صورتك. ندعم صيغ JPG و PNG و WebP و GIF و SVG بحجم يصل إلى 25 ميجابايت."
      },
      {
        "title": "انسخ الرابط",
        "body": "يتم إنشاء رابط الصورة العام الخاص بك فوراً. انقر على زر النسخ للحصول على رابط HTTPS في حافظتك."
      },
      {
        "title": "الصق الرابط في ChatGPT",
        "body": "الصق الرابط في أي محادثة مع ChatGPT. سيقوم نموذج الرؤية بجلب صورتك وتحليلها تلقائياً."
      }
    ],
    "whyTitle": "لماذا يحتاج ChatGPT إلى روابط صور؟",
    "whyItems": [
      {
        "title": "تتطلب الرؤية روابط عامة",
        "body": "يجلب نموذج الرؤية في ChatGPT الصور من الويب. يحتاج إلى رابط يمكن الوصول إليه علنياً لتنزيل صورتك ومعالجتها للتحليل."
      },
      {
        "title": "الملفات المحلية لا تعمل",
        "body": "لا يمكنك لصق مسار ملف من جهاز الكمبيوتر الخاص بك في ChatGPT. يعمل الذكاء الاصطناعي على خوادم بعيدة ولا يمكنه الوصول إلى ملفاتك المحلية."
      },
      {
        "title": "تحليل فوري",
        "body": "يعالج ChatGPT صورتك في ثوانٍ بمجرد حصوله على الرابط. اطرح أسئلة حول الصورة، احصل على أوصاف، أو استخرج النصوص."
      }
    ],
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "لماذا يحتاج ChatGPT إلى رابط صورة عام؟",
        "a": "يمكن لميزة الرؤية في ChatGPT تحليل الصور المستضافة على الإنترنت العام فقط عبر رابط مباشر. لا يمكنه الوصول إلى الملفات المخزنة محلياً على جهازك."
      },
      {
        "q": "هل يمكنني لصق مسار ملف محلي في ChatGPT؟",
        "a": "لا. لا يستطيع ChatGPT قراءة مسارات الملفات المحلية مثل C:/Users/photo.jpg. يجب عليك رفع الصورة إلى خدمة استضافة أولاً."
      },
      {
        "q": "كيف أستخدم رابط الصورة في ChatGPT؟",
        "a": "ارفع صورتك إلى ImageToURL، انسخ الرابط الذي تم إنشاؤه، ثم الصقه مباشرة في محادثة ChatGPT."
      },
      {
        "q": "هل يجب أن يكون رابط الصورة HTTPS؟",
        "a": "نعم. يتطلب ChatGPT روابط HTTPS آمنة. يتم تقديم جميع روابط ImageToURL عبر HTTPS بشكل افتراضي."
      },
      {
        "q": "هل سيعمل رابط صورتي مع روبوتات دردشة ذكاء اصطناعي أخرى؟",
        "a": "نعم. تعمل روابط الصور الخاصة بنا مع أي أداة ذكاء اصطناعي تقبل روابط الصور العامة، بما في ذلك Claude و Gemini و Perplexity."
      }
    ],
    "ctaTitle": "احصل على رابط صورتك لـ ChatGPT",
    "ctaBody": "ارفع صورة، انسخ الرابط، والصقه في ChatGPT. يستغرق الأمر أقل من 10 ثوانٍ.",
    "ctaButton": "ارفع الآن"
  },
  "bn": {
    "metaTitle": "ChatGPT Vision-এর জন্য ইমেজ URL পান — ফ্রি ও তাৎক্ষণিক | ImageToURL",
    "metaDescription": "ChatGPT Vision-এর জন্য পাবলিক ইমেজ URL প্রয়োজন। আপনার ইমেজ আপলোড করুন, তাৎক্ষণিক URL পান এবং ChatGPT-তে পেস্ট করুন। সম্পূর্ণ ফ্রি, কোনো সাইনআপের প্রয়োজন নেই।",
    "schemaName": "ChatGPT-এর জন্য ইমেজ URL",
    "schemaDescription": "ইমেজ আপলোড করুন এবং ChatGPT Vision-এর জন্য পাবলিক URL পান। ফ্রি, তাৎক্ষণিক, কোনো সাইনআপের প্রয়োজন নেই।",
    "badge": "CHATGPT ব্যবহারকারী",
    "h1Pre": "ChatGPT-এর জন্য ইমেজ URL",
    "h1Highlight": "তাৎক্ষণিক ও ফ্রি।",
    "intro": "আপনার ইমেজ বিশ্লেষণ করার জন্য ChatGPT Vision-এর একটি পাবলিক ইমেজ URL প্রয়োজন। এখানে আপলোড করুন, লিঙ্কটি কপি করুন, এবং ChatGPT-তে পেস্ট করুন — কয়েক সেকেন্ডেই কাজ শেষ।",
    "howTitle": "এটি যেভাবে কাজ করে",
    "steps": [
      {
        "title": "আপনার ইমেজ আপলোড করুন",
        "body": "ড্র্যাগ অ্যান্ড ড্রপ করুন অথবা ক্লিক করে আপনার ইমেজটি সিলেক্ট করুন। আমরা ২৫ MB পর্যন্ত JPG, PNG, WebP, GIF এবং SVG ফরম্যাট সাপোর্ট করি।"
      },
      {
        "title": "URL কপি করুন",
        "body": "আপনার পাবলিক ইমেজ URL তাৎক্ষণিকভাবে তৈরি হয়ে যাবে। HTTPS লিঙ্কটি কপি করতে কপি বাটনে ক্লিক করুন।"
      },
      {
        "title": "ChatGPT-তে পেস্ট করুন",
        "body": "যেকোনো ChatGPT কনভারসেশনে URL-টি পেস্ট করুন। ভিশন মডেলটি স্বয়ংক্রিয়ভাবে আপনার ইমেজটি ফেচ করে বিশ্লেষণ করবে।"
      }
    ],
    "whyTitle": "ChatGPT-এর কেন ইমেজ URL প্রয়োজন",
    "whyItems": [
      {
        "title": "ভিশনের জন্য পাবলিক URL প্রয়োজন",
        "body": "ChatGPT-এর ভিশন মডেল ওয়েব থেকে ইমেজ ফেচ করে। বিশ্লেষণের জন্য ইমেজটি ডাউনলোড ও প্রসেস করতে একটি পাবলিকলি অ্যাক্সেসযোগ্য URL প্রয়োজন।"
      },
      {
        "title": "লোকাল ফাইল কাজ করে না",
        "body": "আপনি আপনার কম্পিউটার থেকে কোনো ফাইলের পাথ ChatGPT-তে পেস্ট করতে পারবেন না। AI রিমোট সার্ভারে চলে এবং আপনার লোকাল ফাইল সিস্টেমে এর কোনো অ্যাক্সেস নেই।"
      },
      {
        "title": "তাৎক্ষণিক বিশ্লেষণ",
        "body": "URL পাওয়ার পর ChatGPT কয়েক সেকেন্ডের মধ্যেই আপনার ইমেজ প্রসেস করে। ইমেজ সম্পর্কে প্রশ্ন করুন, বর্ণনা পান অথবা টেক্সট এক্সট্র্যাক্ট করুন।"
      }
    ],
    "faqTitle": "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী",
    "faqs": [
      {
        "q": "ChatGPT-এর কেন পাবলিক ইমেজ URL প্রয়োজন?",
        "a": "ChatGPT-এর ভিশন ফিচার শুধুমাত্র সেই ইমেজগুলো বিশ্লেষণ করতে পারে যা পাবলিক ইন্টারনেটে একটি ডিরেক্ট URL-এর মাধ্যমে হোস্ট করা থাকে। এটি আপনার কম্পিউটারে লোকালভাবে সংরক্ষিত ফাইল অ্যাক্সেস করতে পারে না।"
      },
      {
        "q": "আমি কি ChatGPT-তে লোকাল ফাইলের পাথ পেস্ট করতে পারি?",
        "a": "না। ChatGPT C:/Users/photo.jpg-এর মতো লোকাল ফাইলের পাথ পড়তে পারে না। আপনাকে প্রথমে একটি হোস্টিং সার্ভারে ইমেজটি আপলোড করতে হবে।"
      },
      {
        "q": "ChatGPT-তে ইমেজ URL কীভাবে ব্যবহার করব?",
        "a": "আপনার ইমেজটি ImageToURL-এ আপলোড করুন, তৈরি হওয়া লিঙ্কটি কপি করুন, তারপর সরাসরি আপনার ChatGPT কনভারসেশনে পেস্ট করুন।"
      },
      {
        "q": "ইমেজ URL কি অবশ্যই HTTPS হতে হবে?",
        "a": "হ্যাঁ। ChatGPT-এর জন্য নিরাপদ HTTPS URL প্রয়োজন। সমস্ত ImageToURL লিঙ্ক ডিফল্টভাবে HTTPS-এর মাধ্যমে সার্ভ করা হয়।"
      },
      {
        "q": "আমার ইমেজ URL কি অন্যান্য AI চ্যাটবটের সাথেও কাজ করবে?",
        "a": "হ্যাঁ। আমাদের ইমেজ URL যেকোনো AI টুলের সাথে কাজ করে যা পাবলিক ইমেজ URL সাপোর্ট করে, যার মধ্যে Claude, Gemini এবং Perplexity অন্তর্ভুক্ত।"
      }
    ],
    "ctaTitle": "ChatGPT-এর জন্য আপনার ইমেজ URL পান",
    "ctaBody": "একটি ইমেজ আপলোড করুন, লিঙ্কটি কপি করুন, ChatGPT-তে পেস্ট করুন। ১০ সেকেন্ডেরও কম সময় লাগে।",
    "ctaButton": "এখনই আপলোড করুন"
  },
  "fa": {
    "metaTitle": "دریافت لینک تصویر برای ChatGPT Vision — رایگان و فوری | ImageToURL",
    "metaDescription": "قابلیت ChatGPT Vision به لینک‌های عمومی تصویر نیاز دارد. تصویر خود را آپلود کنید، لینک فوری بگیرید و در ChatGPT جای‌گذاری کنید. رایگان و بدون نیاز به ثبت‌نام.",
    "schemaName": "لینک‌های تصویر برای ChatGPT",
    "schemaDescription": "تصاویر خود را آپلود کنید و لینک‌های عمومی برای ChatGPT Vision دریافت کنید. رایگان، فوری و بدون نیاز به ثبت‌نام.",
    "badge": "کاربران CHATGPT",
    "h1Pre": "لینک‌های تصویر برای ChatGPT",
    "h1Highlight": "فوری و رایگان.",
    "intro": "قابلیت ChatGPT Vision برای تحلیل تصاویر به یک لینک عمومی نیاز دارد. تصویر خود را اینجا آپلود کنید، لینک را کپی کرده و در ChatGPT جای‌گذاری کنید — در چند ثانیه انجام می‌شود.",
    "howTitle": "چگونه کار می‌کند",
    "steps": [
      {
        "title": "تصویر خود را آپلود کنید",
        "body": "تصویر خود را بکشید و رها کنید یا برای انتخاب کلیک کنید. ما از فرمت‌های JPG، PNG، WebP، GIF و SVG تا حجم ۲۵ مگابایت پشتیبانی می‌کنیم."
      },
      {
        "title": "لینک را کپی کنید",
        "body": "لینک عمومی تصویر شما بلافاصله تولید می‌شود. روی دکمه کپی کلیک کنید تا لینک HTTPS در کلیپ‌بورد شما ذخیره شود."
      },
      {
        "title": "در ChatGPT جای‌گذاری کنید",
        "body": "لینک را در هر گفتگوی ChatGPT جای‌گذاری کنید. مدل بینایی به‌طور خودکار تصویر شما را دریافت و تحلیل می‌کند."
      }
    ],
    "whyTitle": "چرا ChatGPT به لینک تصویر نیاز دارد؟",
    "whyItems": [
      {
        "title": "قابلیت Vision به لینک‌های عمومی نیاز دارد",
        "body": "مدل بینایی ChatGPT تصاویر را از وب دریافت می‌کند. این مدل برای دانلود و پردازش تصویر جهت تحلیل، به یک لینک با دسترسی عمومی نیاز دارد."
      },
      {
        "title": "فایل‌های محلی کار نمی‌کنند",
        "body": "شما نمی‌توانید مسیر فایل از کامپیوتر خود را در ChatGPT جای‌گذاری کنید. هوش مصنوعی روی سرورهای راه دور اجرا می‌شود و به فایل‌های محلی شما دسترسی ندارد."
      },
      {
        "title": "تحلیل فوری",
        "body": "به محض دریافت لینک، ChatGPT تصویر شما را در چند ثانیه پردازش می‌کند. درباره تصویر سوال بپرسید، توضیحات دریافت کنید یا متن استخراج کنید."
      }
    ],
    "faqTitle": "سوالات متداول",
    "faqs": [
      {
        "q": "چرا ChatGPT به لینک عمومی تصویر نیاز دارد؟",
        "a": "قابلیت بینایی ChatGPT فقط می‌تواند تصاویری را تحلیل کند که در اینترنت عمومی با یک لینک مستقیم میزبانی شده‌اند. این قابلیت نمی‌تواند به فایل‌های ذخیره شده در کامپیوتر شما دسترسی پیدا کند."
      },
      {
        "q": "آیا می‌توانم مسیر فایل محلی را در ChatGPT جای‌گذاری کنم؟",
        "a": "خیر. ChatGPT نمی‌تواند مسیرهای محلی مانند C:/Users/photo.jpg را بخواند. ابتدا باید تصویر را در یک سرویس میزبانی آپلود کنید."
      },
      {
        "q": "چگونه از لینک تصویر در ChatGPT استفاده کنم؟",
        "a": "تصویر خود را در ImageToURL آپلود کنید، لینک تولید شده را کپی کنید و سپس مستقیماً در گفتگوی ChatGPT خود جای‌گذاری کنید."
      },
      {
        "q": "آیا لینک تصویر باید HTTPS باشد؟",
        "a": "بله. ChatGPT به لینک‌های امن HTTPS نیاز دارد. تمام لینک‌های ImageToURL به‌صورت پیش‌فرض از طریق HTTPS ارائه می‌شوند."
      },
      {
        "q": "آیا لینک تصویر من با سایر چت‌بات‌های هوش مصنوعی هم کار می‌کند؟",
        "a": "بله. لینک‌های تصویر ما با هر ابزار هوش مصنوعی که لینک‌های عمومی تصویر را می‌پذیرد، از جمله Claude، Gemini و Perplexity کار می‌کنند."
      }
    ],
    "ctaTitle": "لینک تصویر خود را برای ChatGPT دریافت کنید",
    "ctaBody": "تصویر را آپلود کنید، لینک را کپی کنید و در ChatGPT جای‌گذاری کنید. کمتر از ۱۰ ثانیه زمان می‌برد.",
    "ctaButton": "همین حالا آپلود کنید"
  },
  "ur": {
    "metaTitle": "ChatGPT Vision کے لیے امیج URL حاصل کریں — مفت اور فوری | ImageToURL",
    "metaDescription": "ChatGPT Vision کو عوامی امیج URL کی ضرورت ہوتی ہے۔ اپنی تصویر اپ لوڈ کریں، فوری URL حاصل کریں، اور اسے ChatGPT میں پیسٹ کریں۔ مفت، کسی سائن اپ کی ضرورت نہیں۔",
    "schemaName": "ChatGPT کے لیے امیج URLs",
    "schemaDescription": "تصاویر اپ لوڈ کریں اور ChatGPT Vision کے لیے عوامی URLs حاصل کریں۔ مفت، فوری، کسی سائن اپ کی ضرورت نہیں۔",
    "badge": "CHATGPT صارفین",
    "h1Pre": "ChatGPT کے لیے امیج URLs",
    "h1Highlight": "فوری اور مفت۔",
    "intro": "ChatGPT Vision کو آپ کی تصاویر کا تجزیہ کرنے کے لیے ایک عوامی امیج URL کی ضرورت ہوتی ہے۔ یہاں اپ لوڈ کریں، لنک کاپی کریں، اور ChatGPT میں پیسٹ کریں — سیکنڈوں میں کام مکمل۔",
    "howTitle": "یہ کیسے کام کرتا ہے",
    "steps": [
      {
        "title": "اپنی تصویر اپ لوڈ کریں",
        "body": "اپنی تصویر کو ڈریگ اینڈ ڈراپ کریں یا منتخب کرنے کے لیے کلک کریں۔ ہم 25 MB تک کے JPG, PNG, WebP, GIF, اور SVG فارمیٹس کو سپورٹ کرتے ہیں۔"
      },
      {
        "title": "URL کاپی کریں",
        "body": "آپ کا عوامی امیج URL فوری طور پر تیار ہو جاتا ہے۔ HTTPS لنک کو اپنے کلپ بورڈ پر کاپی کرنے کے لیے کاپی بٹن پر کلک کریں۔"
      },
      {
        "title": "ChatGPT میں پیسٹ کریں",
        "body": "URL کو کسی بھی ChatGPT گفتگو میں پیسٹ کریں۔ ویژن ماڈل خود بخود آپ کی تصویر کو حاصل کر کے اس کا تجزیہ کرے گا۔"
      }
    ],
    "whyTitle": "ChatGPT کو امیج URLs کی ضرورت کیوں ہے",
    "whyItems": [
      {
        "title": "ویژن کو عوامی URLs درکار ہیں",
        "body": "ChatGPT کا ویژن ماڈل انٹرنیٹ سے تصاویر حاصل کرتا ہے۔ تجزیہ کے لیے تصویر کو ڈاؤن لوڈ اور پروسیس کرنے کے لیے اسے عوامی طور پر قابل رسائی URL کی ضرورت ہوتی ہے۔"
      },
      {
        "title": "مقامی فائلیں کام نہیں کرتیں",
        "body": "آپ اپنے کمپیوٹر سے فائل کا پاتھ ChatGPT میں پیسٹ نہیں کر سکتے۔ AI ریموٹ سرورز پر چلتا ہے اور اسے آپ کے مقامی فائل سسٹم تک رسائی حاصل نہیں ہے۔"
      },
      {
        "title": "فوری تجزیہ",
        "body": "ایک بار URL مل جانے کے بعد ChatGPT سیکنڈوں میں آپ کی تصویر کو پروسیس کر لیتا ہے۔ تصویر کے بارے میں سوالات پوچھیں، تفصیلات حاصل کریں، یا متن نکالیں۔"
      }
    ],
    "faqTitle": "اکثر پوچھے گئے سوالات",
    "faqs": [
      {
        "q": "ChatGPT کو عوامی امیج URL کی ضرورت کیوں ہے؟",
        "a": "ChatGPT کا ویژن فیچر صرف ان تصاویر کا تجزیہ کر سکتا ہے جو براہ راست URL کے ساتھ عوامی انٹرنیٹ پر ہوسٹ کی گئی ہوں۔ یہ آپ کے کمپیوٹر پر مقامی طور پر محفوظ فائلوں تک رسائی حاصل نہیں کر سکتا۔"
      },
      {
        "q": "کیا میں ChatGPT میں مقامی فائل پاتھ پیسٹ کر سکتا ہوں؟",
        "a": "نہیں۔ ChatGPT مقامی فائل پاتھ جیسے C:/Users/photo.jpg کو نہیں پڑھ سکتا۔ آپ کو پہلے تصویر کو ہوسٹنگ سروس پر اپ لوڈ کرنا ہوگا۔"
      },
      {
        "q": "میں ChatGPT میں امیج URL کیسے استعمال کروں؟",
        "a": "اپنی تصویر ImageToURL پر اپ لوڈ کریں، تیار شدہ لنک کاپی کریں، اور پھر اسے براہ راست اپنی ChatGPT گفتگو میں پیسٹ کریں۔"
      },
      {
        "q": "کیا امیج URL کا HTTPS ہونا ضروری ہے؟",
        "a": "جی ہاں۔ ChatGPT کو محفوظ HTTPS URLs کی ضرورت ہوتی ہے۔ تمام ImageToURL لنکس بائی ڈیفالٹ HTTPS پر فراہم کیے جاتے ہیں۔"
      },
      {
        "q": "کیا میرا امیج URL دوسرے AI چیٹ بوٹس کے ساتھ بھی کام کرے گا؟",
        "a": "جی ہاں۔ ہمارے امیج URLs کسی بھی ایسے AI ٹول کے ساتھ کام کرتے ہیں جو عوامی امیج URLs کو قبول کرتے ہیں، بشمول Claude, Gemini, اور Perplexity۔"
      }
    ],
    "ctaTitle": "ChatGPT کے لیے اپنا امیج URL حاصل کریں",
    "ctaBody": "تصویر اپ لوڈ کریں، لنک کاپی کریں، ChatGPT میں پیسٹ کریں۔ 10 سیکنڈ سے بھی کم وقت لگتا ہے۔",
    "ctaButton": "ابھی اپ لوڈ کریں"
  },
  "ru": {
    "metaTitle": "Получить URL изображения для ChatGPT Vision — бесплатно и мгновенно | ImageToURL",
    "metaDescription": "Для ChatGPT Vision нужны публичные URL изображений. Загрузите фото, получите мгновенную ссылку и вставьте её в ChatGPT. Бесплатно, без регистрации.",
    "schemaName": "URL изображений для ChatGPT",
    "schemaDescription": "Загружайте изображения и получайте публичные URL для ChatGPT Vision. Бесплатно, мгновенно, без регистрации.",
    "badge": "ПОЛЬЗОВАТЕЛЯМ CHATGPT",
    "h1Pre": "URL изображений для ChatGPT",
    "h1Highlight": "мгновенно и бесплатно.",
    "intro": "Для анализа изображений ChatGPT Vision требуется публичный URL. Загрузите файл здесь, скопируйте ссылку и вставьте её в ChatGPT — всё готово за секунды.",
    "howTitle": "Как это работает",
    "steps": [
      {
        "title": "Загрузите изображение",
        "body": "Перетащите файл или нажмите, чтобы выбрать его. Мы поддерживаем форматы JPG, PNG, WebP, GIF и SVG размером до 25 МБ."
      },
      {
        "title": "Скопируйте URL",
        "body": "Публичный URL изображения создается мгновенно. Нажмите кнопку копирования, чтобы сохранить HTTPS-ссылку в буфер обмена."
      },
      {
        "title": "Вставьте в ChatGPT",
        "body": "Вставьте URL в любой чат с ChatGPT. Модель зрения автоматически загрузит и проанализирует ваше изображение."
      }
    ],
    "whyTitle": "Почему ChatGPT нужны URL изображений",
    "whyItems": [
      {
        "title": "Vision требует публичные URL",
        "body": "Модель зрения ChatGPT загружает изображения из интернета. Ей нужен публично доступный URL, чтобы скачать и обработать файл для анализа."
      },
      {
        "title": "Локальные файлы не работают",
        "body": "Вы не можете вставить путь к файлу с вашего компьютера в ChatGPT. ИИ работает на удаленных серверах и не имеет доступа к вашей локальной файловой системе."
      },
      {
        "title": "Мгновенный анализ",
        "body": "ChatGPT обрабатывает изображение за секунды после получения ссылки. Задавайте вопросы по картинке, получайте описания или извлекайте текст."
      }
    ],
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Почему ChatGPT нужен публичный URL изображения?",
        "a": "Функция зрения ChatGPT может анализировать только те изображения, которые размещены в публичном интернете и имеют прямой URL. Она не может получить доступ к файлам, хранящимся локально на вашем компьютере."
      },
      {
        "q": "Можно ли вставить путь к локальному файлу в ChatGPT?",
        "a": "Нет. ChatGPT не может прочитать локальные пути вроде C:/Users/photo.jpg. Сначала нужно загрузить изображение на хостинг."
      },
      {
        "q": "Как использовать URL изображения в ChatGPT?",
        "a": "Загрузите изображение в ImageToURL, скопируйте созданную ссылку, а затем вставьте её прямо в диалог с ChatGPT."
      },
      {
        "q": "Должен ли URL изображения быть HTTPS?",
        "a": "Да. ChatGPT требует безопасные HTTPS-ссылки. Все ссылки ImageToURL по умолчанию работают через HTTPS."
      },
      {
        "q": "Будет ли мой URL изображения работать с другими ИИ-чатами?",
        "a": "Да. Наши ссылки работают с любыми ИИ-инструментами, которые принимают публичные URL изображений, включая Claude, Gemini и Perplexity."
      }
    ],
    "ctaTitle": "Получите URL изображения для ChatGPT",
    "ctaBody": "Загрузите изображение, скопируйте ссылку, вставьте в ChatGPT. Это займет менее 10 секунд.",
    "ctaButton": "Загрузить сейчас"
  },
  "th": {
    "metaTitle": "รับ URL รูปภาพสำหรับ ChatGPT Vision — ฟรีและรวดเร็ว | ImageToURL",
    "metaDescription": "ChatGPT Vision ต้องการ URL รูปภาพแบบสาธารณะ อัปโหลดรูปภาพของคุณ รับ URL ทันที แล้ววางลงใน ChatGPT ได้เลย ฟรี ไม่ต้องลงทะเบียน",
    "schemaName": "URL รูปภาพสำหรับ ChatGPT",
    "schemaDescription": "อัปโหลดรูปภาพและรับ URL สาธารณะสำหรับ ChatGPT Vision ฟรี รวดเร็ว ไม่ต้องลงทะเบียน",
    "badge": "สำหรับผู้ใช้ CHATGPT",
    "h1Pre": "URL รูปภาพสำหรับ ChatGPT",
    "h1Highlight": "ฟรีและรวดเร็ว",
    "intro": "ChatGPT Vision จำเป็นต้องใช้ URL รูปภาพแบบสาธารณะเพื่อวิเคราะห์รูปภาพของคุณ อัปโหลดที่นี่ คัดลอกลิงก์ แล้ววางลงใน ChatGPT เสร็จสิ้นภายในไม่กี่วินาที",
    "howTitle": "วิธีการใช้งาน",
    "steps": [
      {
        "title": "อัปโหลดรูปภาพของคุณ",
        "body": "ลากและวางหรือคลิกเพื่อเลือกรูปภาพของคุณ เรารองรับรูปแบบ JPG, PNG, WebP, GIF และ SVG สูงสุด 25 MB"
      },
      {
        "title": "คัดลอก URL",
        "body": "URL รูปภาพสาธารณะของคุณจะถูกสร้างขึ้นทันที คลิกปุ่มคัดลอกเพื่อนำลิงก์ HTTPS ไปไว้ในคลิปบอร์ดของคุณ"
      },
      {
        "title": "วางใน ChatGPT",
        "body": "วาง URL ลงในการสนทนาของ ChatGPT โมเดล Vision จะดึงข้อมูลและวิเคราะห์รูปภาพของคุณโดยอัตโนมัติ"
      }
    ],
    "whyTitle": "ทำไม ChatGPT ถึงต้องใช้ URL รูปภาพ",
    "whyItems": [
      {
        "title": "Vision ต้องการ URL สาธารณะ",
        "body": "โมเดล Vision ของ ChatGPT ดึงรูปภาพจากเว็บ จึงจำเป็นต้องมี URL ที่เข้าถึงได้แบบสาธารณะเพื่อดาวน์โหลดและประมวลผลรูปภาพของคุณ"
      },
      {
        "title": "ไฟล์ในเครื่องใช้งานไม่ได้",
        "body": "คุณไม่สามารถวางที่อยู่ไฟล์จากคอมพิวเตอร์ลงใน ChatGPT ได้ เนื่องจาก AI ทำงานบนเซิร์ฟเวอร์ระยะไกลและไม่สามารถเข้าถึงไฟล์ในเครื่องของคุณได้"
      },
      {
        "title": "วิเคราะห์ได้ทันที",
        "body": "ChatGPT จะประมวลผลรูปภาพของคุณภายในไม่กี่วินาทีเมื่อได้รับ URL คุณสามารถถามคำถามเกี่ยวกับรูปภาพ ขอคำอธิบาย หรือดึงข้อความจากรูปภาพได้"
      }
    ],
    "faqTitle": "คำถามที่พบบ่อย",
    "faqs": [
      {
        "q": "ทำไม ChatGPT ถึงต้องใช้ URL รูปภาพแบบสาธารณะ?",
        "a": "ฟีเจอร์ Vision ของ ChatGPT สามารถวิเคราะห์ได้เฉพาะรูปภาพที่โฮสต์บนอินเทอร์เน็ตสาธารณะด้วย URL โดยตรงเท่านั้น ไม่สามารถเข้าถึงไฟล์ที่เก็บไว้ในคอมพิวเตอร์ของคุณได้"
      },
      {
        "q": "ฉันสามารถวางที่อยู่ไฟล์ในเครื่องลงใน ChatGPT ได้หรือไม่?",
        "a": "ไม่ได้ ChatGPT ไม่สามารถอ่านที่อยู่ไฟล์ในเครื่อง เช่น C:/Users/photo.jpg คุณจำเป็นต้องอัปโหลดรูปภาพไปยังบริการโฮสต์รูปภาพก่อน"
      },
      {
        "q": "ฉันจะใช้ URL รูปภาพใน ChatGPT ได้อย่างไร?",
        "a": "อัปโหลดรูปภาพของคุณไปยัง ImageToURL คัดลอกลิงก์ที่สร้างขึ้น แล้ววางลงในการสนทนา ChatGPT ของคุณได้เลย"
      },
      {
        "q": "URL รูปภาพจำเป็นต้องเป็น HTTPS หรือไม่?",
        "a": "ใช่ ChatGPT ต้องการ URL แบบ HTTPS ที่ปลอดภัย ลิงก์ทั้งหมดของ ImageToURL ให้บริการผ่าน HTTPS โดยค่าเริ่มต้น"
      },
      {
        "q": "URL รูปภาพของฉันจะใช้กับ AI แชทบอทตัวอื่นได้หรือไม่?",
        "a": "ได้ URL รูปภาพของเราสามารถใช้กับเครื่องมือ AI ใดก็ได้ที่รองรับ URL รูปภาพสาธารณะ รวมถึง Claude, Gemini และ Perplexity"
      }
    ],
    "ctaTitle": "รับ URL รูปภาพสำหรับ ChatGPT ของคุณ",
    "ctaBody": "อัปโหลดรูปภาพ คัดลอกลิงก์ แล้ววางลงใน ChatGPT ใช้เวลาไม่ถึง 10 วินาที",
    "ctaButton": "อัปโหลดเลย"
  },
  "ko": {
    "metaTitle": "ChatGPT Vision용 이미지 URL 생성 — 무료 및 즉시 | ImageToURL",
    "metaDescription": "ChatGPT Vision은 공개 이미지 URL이 필요합니다. 이미지를 업로드하고 즉시 URL을 받아 ChatGPT에 붙여넣으세요. 가입 없이 무료로 이용 가능합니다.",
    "schemaName": "ChatGPT용 이미지 URL",
    "schemaDescription": "이미지를 업로드하고 ChatGPT Vision을 위한 공개 URL을 받으세요. 무료, 즉시, 가입 불필요.",
    "badge": "CHATGPT 사용자",
    "h1Pre": "ChatGPT용 이미지 URL",
    "h1Highlight": "즉시 무료로 생성.",
    "intro": "ChatGPT Vision이 이미지를 분석하려면 공개 이미지 URL이 필요합니다. 여기서 업로드하고 링크를 복사하여 ChatGPT에 붙여넣으세요. 몇 초 만에 완료됩니다.",
    "howTitle": "사용 방법",
    "steps": [
      {
        "title": "이미지 업로드",
        "body": "이미지를 드래그 앤 드롭하거나 클릭하여 선택하세요. 최대 25MB까지 JPG, PNG, WebP, GIF, SVG 형식을 지원합니다."
      },
      {
        "title": "URL 복사",
        "body": "공개 이미지 URL이 즉시 생성됩니다. 복사 버튼을 클릭하여 HTTPS 링크를 클립보드에 저장하세요."
      },
      {
        "title": "ChatGPT에 붙여넣기",
        "body": "ChatGPT 대화창에 URL을 붙여넣으세요. Vision 모델이 자동으로 이미지를 가져와 분석합니다."
      }
    ],
    "whyTitle": "ChatGPT에 이미지 URL이 필요한 이유",
    "whyItems": [
      {
        "title": "Vision은 공개 URL이 필요합니다",
        "body": "ChatGPT의 Vision 모델은 웹에서 이미지를 가져옵니다. 분석을 위해 이미지를 다운로드하고 처리하려면 공개적으로 접근 가능한 URL이 필요합니다."
      },
      {
        "title": "로컬 파일은 작동하지 않습니다",
        "body": "컴퓨터의 파일 경로를 ChatGPT에 붙여넣을 수 없습니다. AI는 원격 서버에서 실행되므로 로컬 파일 시스템에 접근할 수 없습니다."
      },
      {
        "title": "즉각적인 분석",
        "body": "URL이 제공되면 ChatGPT가 몇 초 만에 이미지를 처리합니다. 이미지에 대해 질문하거나, 설명을 듣거나, 텍스트를 추출할 수 있습니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "ChatGPT에 왜 공개 이미지 URL이 필요한가요?",
        "a": "ChatGPT의 Vision 기능은 직접적인 URL을 통해 공개 인터넷에 호스팅된 이미지만 분석할 수 있습니다. 컴퓨터에 로컬로 저장된 파일에는 접근할 수 없습니다."
      },
      {
        "q": "로컬 파일 경로를 ChatGPT에 붙여넣을 수 있나요?",
        "a": "아니요. ChatGPT는 C:/Users/photo.jpg와 같은 로컬 파일 경로를 읽을 수 없습니다. 먼저 호스팅 서비스에 이미지를 업로드해야 합니다."
      },
      {
        "q": "ChatGPT에서 이미지 URL을 어떻게 사용하나요?",
        "a": "ImageToURL에 이미지를 업로드하고 생성된 링크를 복사한 다음, ChatGPT 대화창에 직접 붙여넣으세요."
      },
      {
        "q": "이미지 URL은 반드시 HTTPS여야 하나요?",
        "a": "네. ChatGPT는 보안 HTTPS URL을 요구합니다. 모든 ImageToURL 링크는 기본적으로 HTTPS를 통해 제공됩니다."
      },
      {
        "q": "이미지 URL이 다른 AI 챗봇에서도 작동하나요?",
        "a": "네. 저희 이미지 URL은 Claude, Gemini, Perplexity를 포함하여 공개 이미지 URL을 허용하는 모든 AI 도구에서 작동합니다."
      }
    ],
    "ctaTitle": "ChatGPT용 이미지 URL 받기",
    "ctaBody": "이미지를 업로드하고 링크를 복사하여 ChatGPT에 붙여넣으세요. 10초도 걸리지 않습니다.",
    "ctaButton": "지금 업로드하기"
  },
  "sw": {
    "metaTitle": "Pata URL za Picha kwa ChatGPT Vision — Bila Malipo na Papo Hapo | ImageToURL",
    "metaDescription": "ChatGPT vision inahitaji URL za picha za umma. Pakia picha yako, pata URL papo hapo, na uibandike kwenye ChatGPT. Bila malipo, hakuna usajili unaohitajika.",
    "schemaName": "URL za Picha kwa ChatGPT",
    "schemaDescription": "Pakia picha na upate URL za umma kwa ajili ya ChatGPT Vision. Bila malipo, papo hapo, hakuna usajili unaohitajika.",
    "badge": "WATUMIAJI WA CHATGPT",
    "h1Pre": "URL za Picha kwa ChatGPT",
    "h1Highlight": "papo hapo na bila malipo.",
    "intro": "ChatGPT Vision inahitaji URL ya picha ya umma ili kuchanganua picha zako. Pakia hapa, nakili kiungo, ubandike kwenye ChatGPT — imekamilika kwa sekunde.",
    "howTitle": "Jinsi Inavyofanya Kazi",
    "steps": [
      {
        "title": "Pakia Picha Yako",
        "body": "Buruta na udondoshe au bofya ili kuchagua picha yako. Tunatumia miundo ya JPG, PNG, WebP, GIF, na SVG hadi 25 MB."
      },
      {
        "title": "Nakili URL",
        "body": "URL yako ya picha ya umma inatengenezwa papo hapo. Bofya kitufe cha kunakili ili kupata kiungo cha HTTPS kwenye ubao wako wa kunakili."
      },
      {
        "title": "Bandika kwenye ChatGPT",
        "body": "Bandika URL kwenye mazungumzo yoyote ya ChatGPT. Muundo wa vision utachukua na kuchanganua picha yako kiotomatiki."
      }
    ],
    "whyTitle": "Kwa Nini ChatGPT Inahitaji URL za Picha",
    "whyItems": [
      {
        "title": "Vision Inahitaji URL za Umma",
        "body": "Muundo wa vision wa ChatGPT huchukua picha kutoka kwenye mtandao. Inahitaji URL inayoweza kufikiwa na umma ili kupakua na kuchakata picha yako kwa ajili ya uchanganuzi."
      },
      {
        "title": "Faili za Ndani Hazifanyi Kazi",
        "body": "Huwezi kubandika njia ya faili kutoka kwenye kompyuta yako kwenda ChatGPT. AI inaendeshwa kwenye seva za mbali na haina ufikiaji wa mfumo wako wa faili wa ndani."
      },
      {
        "title": "Uchanganuzi wa Papo Hapo",
        "body": "ChatGPT huchakata picha yako kwa sekunde mara tu inapopata URL. Uliza maswali kuhusu picha, pata maelezo, au toa maandishi."
      }
    ],
    "faqTitle": "Maswali Yanayoulizwa Mara Kwa Mara",
    "faqs": [
      {
        "q": "Kwa nini ChatGPT inahitaji URL ya picha ya umma?",
        "a": "Kipengele cha vision cha ChatGPT kinaweza kuchanganua tu picha zilizohifadhiwa kwenye mtandao wa umma na URL ya moja kwa moja. Haiwezi kufikia faili zilizohifadhiwa ndani ya kompyuta yako."
      },
      {
        "q": "Je, ninaweza kubandika njia ya faili ya ndani kwenye ChatGPT?",
        "a": "Hapana. ChatGPT haiwezi kusoma njia za faili za ndani kama C:/Users/photo.jpg. Unahitaji kupakia picha kwenye huduma ya kuhifadhi kwanza."
      },
      {
        "q": "Ninawezaje kutumia URL ya picha kwenye ChatGPT?",
        "a": "Pakia picha yako kwenye ImageToURL, nakili kiungo kilichotengenezwa, kisha ubandike moja kwa moja kwenye mazungumzo yako ya ChatGPT."
      },
      {
        "q": "Je, URL ya picha inahitaji kuwa HTTPS?",
        "a": "Ndiyo. ChatGPT inahitaji URL salama za HTTPS. Viungo vyote vya ImageToURL hutolewa kupitia HTTPS kwa chaguo-msingi."
      },
      {
        "q": "Je, URL yangu ya picha itafanya kazi na chatbots nyingine za AI pia?",
        "a": "Ndiyo. URL zetu za picha hufanya kazi na zana yoyote ya AI inayokubali URL za picha za umma, ikiwa ni pamoja na Claude, Gemini, na Perplexity."
      }
    ],
    "ctaTitle": "Pata URL ya picha yako kwa ChatGPT",
    "ctaBody": "Pakia picha, nakili kiungo, ubandike kwenye ChatGPT. Inachukua chini ya sekunde 10.",
    "ctaButton": "Pakia Sasa"
  },
  "ms": {
    "metaTitle": "Dapatkan URL Imej untuk ChatGPT Vision — Percuma & Segera | ImageToURL",
    "metaDescription": "ChatGPT vision memerlukan URL imej awam. Muat naik imej anda, dapatkan URL segera, dan tampal ke dalam ChatGPT. Percuma, tiada pendaftaran diperlukan.",
    "schemaName": "URL Imej untuk ChatGPT",
    "schemaDescription": "Muat naik imej dan dapatkan URL awam untuk ChatGPT Vision. Percuma, segera, tiada pendaftaran diperlukan.",
    "badge": "PENGGUNA CHATGPT",
    "h1Pre": "URL Imej untuk ChatGPT",
    "h1Highlight": "segera & percuma.",
    "intro": "ChatGPT Vision memerlukan URL imej awam untuk menganalisis imej anda. Muat naik di sini, salin pautan, tampal ke dalam ChatGPT — selesai dalam beberapa saat.",
    "howTitle": "Cara Ia Berfungsi",
    "steps": [
      {
        "title": "Muat Naik Imej Anda",
        "body": "Seret dan lepas atau klik untuk memilih imej anda. Kami menyokong format JPG, PNG, WebP, GIF, dan SVG sehingga 25 MB."
      },
      {
        "title": "Salin URL",
        "body": "URL imej awam anda dijana serta-merta. Klik butang salin untuk mendapatkan pautan HTTPS ke papan keratan anda."
      },
      {
        "title": "Tampal dalam ChatGPT",
        "body": "Tampal URL tersebut ke dalam mana-mana perbualan ChatGPT. Model vision akan mengambil dan menganalisis imej anda secara automatik."
      }
    ],
    "whyTitle": "Mengapa ChatGPT Memerlukan URL Imej",
    "whyItems": [
      {
        "title": "Vision Memerlukan URL Awam",
        "body": "Model vision ChatGPT mengambil imej dari web. Ia memerlukan URL yang boleh diakses secara awam untuk memuat turun dan memproses imej anda bagi tujuan analisis."
      },
      {
        "title": "Fail Tempatan Tidak Berfungsi",
        "body": "Anda tidak boleh menampal laluan fail dari komputer anda ke dalam ChatGPT. AI berjalan pada pelayan jauh dan tidak mempunyai akses kepada sistem fail tempatan anda."
      },
      {
        "title": "Analisis Segera",
        "body": "ChatGPT memproses imej anda dalam beberapa saat sebaik sahaja ia mempunyai URL. Tanya soalan tentang imej, dapatkan penerangan, atau ekstrak teks."
      }
    ],
    "faqTitle": "Soalan Lazim",
    "faqs": [
      {
        "q": "Mengapa ChatGPT memerlukan URL imej awam?",
        "a": "Ciri vision ChatGPT hanya boleh menganalisis imej yang dihoskan di internet awam dengan URL terus. Ia tidak boleh mengakses fail yang disimpan secara tempatan pada komputer anda."
      },
      {
        "q": "Bolehkah saya menampal laluan fail tempatan ke dalam ChatGPT?",
        "a": "Tidak. ChatGPT tidak boleh membaca laluan fail tempatan seperti C:/Users/photo.jpg. Anda perlu memuat naik imej ke perkhidmatan pengehosan terlebih dahulu."
      },
      {
        "q": "Bagaimana saya menggunakan URL imej dalam ChatGPT?",
        "a": "Muat naik imej anda ke ImageToURL, salin pautan yang dijana, kemudian tampal terus ke dalam perbualan ChatGPT anda."
      },
      {
        "q": "Adakah URL imej perlu menggunakan HTTPS?",
        "a": "Ya. ChatGPT memerlukan URL HTTPS yang selamat. Semua pautan ImageToURL dihidangkan melalui HTTPS secara lalai."
      },
      {
        "q": "Adakah URL imej saya akan berfungsi dengan chatbot AI lain juga?",
        "a": "Ya. URL imej kami berfungsi dengan mana-mana alat AI yang menerima URL imej awam, termasuk Claude, Gemini, dan Perplexity."
      }
    ],
    "ctaTitle": "Dapatkan URL imej anda untuk ChatGPT",
    "ctaBody": "Muat naik imej, salin pautan, tampal ke dalam ChatGPT. Mengambil masa kurang daripada 10 saat.",
    "ctaButton": "Muat Naik Sekarang"
  },
  "ta": {
    "metaTitle": "ChatGPT Vision-க்காக பட URL-களைப் பெறுங்கள் — இலவசம் & உடனடி | ImageToURL",
    "metaDescription": "ChatGPT Vision-க்கு பொதுவான பட URL-கள் தேவை. உங்கள் படத்தை பதிவேற்றி, உடனடி URL-ஐப் பெற்று, ChatGPT-இல் ஒட்டவும். இலவசம், பதிவு தேவையில்லை.",
    "schemaName": "ChatGPT-க்கான பட URL-கள்",
    "schemaDescription": "படங்களைப் பதிவேற்றி ChatGPT Vision-க்காக பொது URL-களைப் பெறுங்கள். இலவசம், உடனடி, பதிவு தேவையில்லை.",
    "badge": "CHATGPT பயனர்கள்",
    "h1Pre": "ChatGPT-க்கான பட URL-கள்",
    "h1Highlight": "உடனடி & இலவசம்.",
    "intro": "உங்கள் படங்களை ஆய்வு செய்ய ChatGPT Vision-க்கு பொதுவான பட URL தேவை. இங்கே பதிவேற்றி, இணைப்பை நகலெடுத்து, ChatGPT-இல் ஒட்டவும் — சில நொடிகளில் முடிந்துவிடும்.",
    "howTitle": "இது எப்படி செயல்படுகிறது",
    "steps": [
      {
        "title": "உங்கள் படத்தை பதிவேற்றவும்",
        "body": "உங்கள் படத்தை இழுத்து விடவும் அல்லது கிளிக் செய்து தேர்ந்தெடுக்கவும். JPG, PNG, WebP, GIF மற்றும் SVG வடிவங்களை 25 MB வரை ஆதரிக்கிறோம்."
      },
      {
        "title": "URL-ஐ நகலெடுக்கவும்",
        "body": "உங்கள் பொதுவான பட URL உடனடியாக உருவாக்கப்படும். HTTPS இணைப்பை உங்கள் கிளிப்போர்டில் நகலெடுக்க 'Copy' பொத்தானைக் கிளிக் செய்யவும்."
      },
      {
        "title": "ChatGPT-இல் ஒட்டவும்",
        "body": "எந்தவொரு ChatGPT உரையாடலிலும் URL-ஐ ஒட்டவும். Vision மாடல் தானாகவே உங்கள் படத்தைப் பெற்று ஆய்வு செய்யும்."
      }
    ],
    "whyTitle": "ChatGPT-க்கு ஏன் பட URL-கள் தேவை?",
    "whyItems": [
      {
        "title": "Vision-க்கு பொது URL-கள் தேவை",
        "body": "ChatGPT-இன் Vision மாடல் இணையத்திலிருந்து படங்களைப் பெறுகிறது. ஆய்விற்காக உங்கள் படத்தைப் பதிவிறக்கம் செய்து செயலாக்க, பொதுவில் அணுகக்கூடிய URL தேவை."
      },
      {
        "title": "உள்ளூர் கோப்புகள் வேலை செய்யாது",
        "body": "உங்கள் கணினியிலிருந்து கோப்பு பாதையை (file path) ChatGPT-இல் ஒட்ட முடியாது. AI தொலைதூர சர்வர்களில் இயங்குகிறது மற்றும் உங்கள் உள்ளூர் கோப்பு முறைமையை அணுக முடியாது."
      },
      {
        "title": "உடனடி ஆய்வு",
        "body": "URL கிடைத்தவுடன் ChatGPT சில நொடிகளில் உங்கள் படத்தை ஆய்வு செய்யும். படத்தைப் பற்றி கேள்விகளைக் கேட்கலாம், விளக்கங்களைப் பெறலாம் அல்லது உரையை எடுக்கலாம்."
      }
    ],
    "faqTitle": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faqs": [
      {
        "q": "ChatGPT-க்கு ஏன் பொதுவான பட URL தேவை?",
        "a": "ChatGPT-இன் Vision அம்சம் பொது இணையத்தில் நேரடி URL உடன் ஹோஸ்ட் செய்யப்பட்ட படங்களை மட்டுமே ஆய்வு செய்ய முடியும். உங்கள் கணினியில் உள்ளூர் கோப்புகளை அணுக முடியாது."
      },
      {
        "q": "நான் உள்ளூர் கோப்பு பாதையை ChatGPT-இல் ஒட்டலாமா?",
        "a": "இல்லை. ChatGPT-ஆல் C:/Users/photo.jpg போன்ற உள்ளூர் கோப்பு பாதைகளை வாசிக்க முடியாது. முதலில் படத்தை ஹோஸ்டிங் சேவையில் பதிவேற்ற வேண்டும்."
      },
      {
        "q": "ChatGPT-இல் பட URL-ஐ எப்படி பயன்படுத்துவது?",
        "a": "உங்கள் படத்தை ImageToURL-இல் பதிவேற்றி, உருவாக்கப்பட்ட இணைப்பை நகலெடுத்து, உங்கள் ChatGPT உரையாடலில் நேரடியாக ஒட்டவும்."
      },
      {
        "q": "பட URL HTTPS ஆக இருக்க வேண்டுமா?",
        "a": "ஆம். ChatGPT-க்கு பாதுகாப்பான HTTPS URL-கள் தேவை. அனைத்து ImageToURL இணைப்புகளும் முன்னிருப்பாக HTTPS வழியாகவே வழங்கப்படுகின்றன."
      },
      {
        "q": "எனது பட URL மற்ற AI சாட்போட்களிலும் வேலை செய்யுமா?",
        "a": "ஆம். பொது பட URL-களை ஏற்கும் Claude, Gemini மற்றும் Perplexity உள்ளிட்ட எந்தவொரு AI கருவியிலும் எங்கள் பட URL-கள் வேலை செய்யும்."
      }
    ],
    "ctaTitle": "ChatGPT-க்காக உங்கள் பட URL-ஐப் பெறுங்கள்",
    "ctaBody": "படத்தைப் பதிவேற்றி, இணைப்பை நகலெடுத்து, ChatGPT-இல் ஒட்டவும். 10 நொடிகளுக்கும் குறைவாகவே ஆகும்.",
    "ctaButton": "இப்போதே பதிவேற்றுங்கள்"
  },
  "mr": {
    "metaTitle": "ChatGPT Vision साठी इमेज URLs मिळवा — मोफत आणि त्वरित | ImageToURL",
    "metaDescription": "ChatGPT vision ला सार्वजनिक इमेज URLs ची आवश्यकता असते. तुमची इमेज अपलोड करा, त्वरित URL मिळवा आणि ती ChatGPT मध्ये पेस्ट करा. मोफत, साइनअपची गरज नाही.",
    "schemaName": "ChatGPT साठी इमेज URLs",
    "schemaDescription": "इमेज अपलोड करा आणि ChatGPT Vision साठी सार्वजनिक URLs मिळवा. मोफत, त्वरित, साइनअपची गरज नाही.",
    "badge": "CHATGPT वापरकर्ते",
    "h1Pre": "ChatGPT साठी इमेज URLs",
    "h1Highlight": "त्वरित आणि मोफत.",
    "intro": "तुमच्या इमेजचे विश्लेषण करण्यासाठी ChatGPT Vision ला सार्वजनिक इमेज URL ची आवश्यकता असते. येथे अपलोड करा, लिंक कॉपी करा, ChatGPT मध्ये पेस्ट करा — काही सेकंदात काम पूर्ण.",
    "howTitle": "हे कसे कार्य करते",
    "steps": [
      {
        "title": "तुमची इमेज अपलोड करा",
        "body": "ड्रॅग आणि ड्रॉप करा किंवा तुमची इमेज निवडण्यासाठी क्लिक करा. आम्ही 25 MB पर्यंतचे JPG, PNG, WebP, GIF आणि SVG फॉरमॅट सपोर्ट करतो."
      },
      {
        "title": "URL कॉपी करा",
        "body": "तुमची सार्वजनिक इमेज URL त्वरित तयार केली जाते. HTTPS लिंक तुमच्या क्लिपबोर्डवर घेण्यासाठी कॉपी बटणावर क्लिक करा."
      },
      {
        "title": "ChatGPT मध्ये पेस्ट करा",
        "body": "कोणत्याही ChatGPT संभाषणात URL पेस्ट करा. व्हिजन मॉडेल आपोआप तुमची इमेज फेच करेल आणि त्याचे विश्लेषण करेल."
      }
    ],
    "whyTitle": "ChatGPT ला इमेज URLs ची गरज का आहे",
    "whyItems": [
      {
        "title": "व्हिजनला सार्वजनिक URLs आवश्यक आहेत",
        "body": "ChatGPT चे व्हिजन मॉडेल इंटरनेटवरून इमेजेस फेच करते. विश्लेषणासाठी इमेज डाउनलोड आणि प्रोसेस करण्यासाठी त्याला सार्वजनिकरित्या प्रवेशयोग्य URL ची आवश्यकता असते."
      },
      {
        "title": "लोकल फाइल्स काम करत नाहीत",
        "body": "तुम्ही तुमच्या संगणकावरील फाइल पाथ ChatGPT मध्ये पेस्ट करू शकत नाही. AI रिमोट सर्व्हरवर चालते आणि त्याला तुमच्या लोकल फाइलसिस्टमचा ॲक्सेस नसतो."
      },
      {
        "title": "त्वरित विश्लेषण",
        "body": "URL मिळाल्यावर ChatGPT काही सेकंदात तुमच्या इमेजवर प्रक्रिया करते. इमेजबद्दल प्रश्न विचारा, वर्णन मिळवा किंवा मजकूर एक्सट्रॅक्ट करा."
      }
    ],
    "faqTitle": "वारंवार विचारले जाणारे प्रश्न",
    "faqs": [
      {
        "q": "ChatGPT ला सार्वजनिक इमेज URL ची गरज का आहे?",
        "a": "ChatGPT चे व्हिजन फीचर फक्त अशा इमेजेसचे विश्लेषण करू शकते ज्या सार्वजनिक इंटरनेटवर थेट URL सह होस्ट केलेल्या आहेत. ते तुमच्या संगणकावर स्थानिक पातळीवर साठवलेल्या फाइल्समध्ये प्रवेश करू शकत नाही."
      },
      {
        "q": "मी ChatGPT मध्ये लोकल फाइल पाथ पेस्ट करू शकतो का?",
        "a": "नाही. ChatGPT C:/Users/photo.jpg सारखे लोकल फाइल पाथ वाचू शकत नाही. तुम्हाला प्रथम इमेज होस्टिंग सेवेवर अपलोड करणे आवश्यक आहे."
      },
      {
        "q": "मी ChatGPT मध्ये इमेज URL कशी वापरू?",
        "a": "तुमची इमेज ImageToURL वर अपलोड करा, तयार झालेली लिंक कॉपी करा, त्यानंतर ती थेट तुमच्या ChatGPT संभाषणात पेस्ट करा."
      },
      {
        "q": "इमेज URL HTTPS असणे आवश्यक आहे का?",
        "a": "हो. ChatGPT ला सुरक्षित HTTPS URLs आवश्यक आहेत. सर्व ImageToURL लिंक्स डीफॉल्टनुसार HTTPS द्वारे सर्व्ह केल्या जातात."
      },
      {
        "q": "माझी इमेज URL इतर AI चॅटबॉट्ससोबतही काम करेल का?",
        "a": "हो. आमच्या इमेज URLs सार्वजनिक इमेज URL स्वीकारणाऱ्या कोणत्याही AI टूलसोबत काम करतात, ज्यामध्ये Claude, Gemini आणि Perplexity यांचा समावेश आहे."
      }
    ],
    "ctaTitle": "ChatGPT साठी तुमची इमेज URL मिळवा",
    "ctaBody": "इमेज अपलोड करा, लिंक कॉपी करा, ChatGPT मध्ये पेस्ट करा. 10 सेकंदांपेक्षा कमी वेळ लागतो.",
    "ctaButton": "आता अपलोड करा"
  },
  "te": {
    "metaTitle": "ChatGPT Vision కోసం ఇమేజ్ URLలను పొందండి — ఉచితం & తక్షణమే | ImageToURL",
    "metaDescription": "ChatGPT విజన్‌కు పబ్లిక్ ఇమేజ్ URLలు అవసరం. మీ చిత్రాన్ని అప్‌లోడ్ చేయండి, తక్షణమే URLని పొందండి మరియు దానిని ChatGPTలో పేస్ట్ చేయండి. ఉచితం, సైన్-అప్ అవసరం లేదు.",
    "schemaName": "ChatGPT కోసం ఇమేజ్ URLలు",
    "schemaDescription": "చిత్రాలను అప్‌లోడ్ చేయండి మరియు ChatGPT విజన్ కోసం పబ్లిక్ URLలను పొందండి. ఉచితం, తక్షణమే, సైన్-అప్ అవసరం లేదు.",
    "badge": "CHATGPT వినియోగదారులు",
    "h1Pre": "ChatGPT కోసం ఇమేజ్ URLలు",
    "h1Highlight": "తక్షణమే & ఉచితం.",
    "intro": "ChatGPT విజన్ మీ చిత్రాలను విశ్లేషించడానికి పబ్లిక్ ఇమేజ్ URL అవసరం. ఇక్కడ అప్‌లోడ్ చేయండి, లింక్‌ను కాపీ చేయండి, ChatGPTలో పేస్ట్ చేయండి — సెకన్లలో పూర్తవుతుంది.",
    "howTitle": "ఇది ఎలా పనిచేస్తుంది",
    "steps": [
      {
        "title": "మీ చిత్రాన్ని అప్‌లోడ్ చేయండి",
        "body": "మీ చిత్రాన్ని డ్రాగ్ అండ్ డ్రాప్ చేయండి లేదా ఎంచుకోవడానికి క్లిక్ చేయండి. మేము 25 MB వరకు JPG, PNG, WebP, GIF మరియు SVG ఫార్మాట్‌లకు మద్దతు ఇస్తాము."
      },
      {
        "title": "URLని కాపీ చేయండి",
        "body": "మీ పబ్లిక్ ఇమేజ్ URL తక్షణమే రూపొందించబడుతుంది. HTTPS లింక్‌ను మీ క్లిప్‌బోర్డ్‌కు కాపీ చేయడానికి కాపీ బటన్‌ను క్లిక్ చేయండి."
      },
      {
        "title": "ChatGPTలో పేస్ట్ చేయండి",
        "body": "ఏదైనా ChatGPT సంభాషణలో URLని పేస్ట్ చేయండి. విజన్ మోడల్ స్వయంచాలకంగా మీ చిత్రాన్ని పొంది విశ్లేషిస్తుంది."
      }
    ],
    "whyTitle": "ChatGPTకి ఇమేజ్ URLలు ఎందుకు అవసరం",
    "whyItems": [
      {
        "title": "విజన్‌కు పబ్లిక్ URLలు అవసరం",
        "body": "ChatGPT యొక్క విజన్ మోడల్ వెబ్ నుండి చిత్రాలను పొందుతుంది. విశ్లేషణ కోసం మీ చిత్రాన్ని డౌన్‌లోడ్ చేయడానికి మరియు ప్రాసెస్ చేయడానికి పబ్లిక్‌గా అందుబాటులో ఉన్న URL అవసరం."
      },
      {
        "title": "లోకల్ ఫైల్స్ పనిచేయవు",
        "body": "మీరు మీ కంప్యూటర్ నుండి ఫైల్ పాత్‌ను ChatGPTలో పేస్ట్ చేయలేరు. AI రిమోట్ సర్వర్లలో నడుస్తుంది మరియు మీ లోకల్ ఫైల్‌సిస్టమ్‌కు దానికి యాక్సెస్ ఉండదు."
      },
      {
        "title": "తక్షణ విశ్లేషణ",
        "body": "URL పొందిన తర్వాత ChatGPT మీ చిత్రాన్ని సెకన్లలో ప్రాసెస్ చేస్తుంది. చిత్రం గురించి ప్రశ్నలు అడగండి, వివరణలు పొందండి లేదా టెక్స్ట్‌ను ఎక్స్‌ట్రాక్ట్ చేయండి."
      }
    ],
    "faqTitle": "తరచుగా అడిగే ప్రశ్నలు",
    "faqs": [
      {
        "q": "ChatGPTకి పబ్లిక్ ఇమేజ్ URL ఎందుకు అవసరం?",
        "a": "ChatGPT యొక్క విజన్ ఫీచర్ పబ్లిక్ ఇంటర్నెట్‌లో డైరెక్ట్ URLతో హోస్ట్ చేయబడిన చిత్రాలను మాత్రమే విశ్లేషించగలదు. ఇది మీ కంప్యూటర్‌లో స్థానికంగా నిల్వ చేయబడిన ఫైళ్లను యాక్సెస్ చేయలేదు."
      },
      {
        "q": "నేను లోకల్ ఫైల్ పాత్‌ను ChatGPTలో పేస్ట్ చేయవచ్చా?",
        "a": "లేదు. ChatGPT C:/Users/photo.jpg వంటి లోకల్ ఫైల్ పాత్‌లను చదవలేదు. మీరు ముందుగా చిత్రాన్ని హోస్టింగ్ సర్వీస్‌కు అప్‌లోడ్ చేయాలి."
      },
      {
        "q": "ChatGPTలో ఇమేజ్ URLని ఎలా ఉపయోగించాలి?",
        "a": "మీ చిత్రాన్ని ImageToURLకి అప్‌లోడ్ చేయండి, రూపొందించబడిన లింక్‌ను కాపీ చేయండి, ఆపై దానిని నేరుగా మీ ChatGPT సంభాషణలో పేస్ట్ చేయండి."
      },
      {
        "q": "ఇమేజ్ URL HTTPS అయి ఉండాలా?",
        "a": "అవును. ChatGPTకి సురక్షితమైన HTTPS URLలు అవసరం. అన్ని ImageToURL లింక్‌లు డిఫాల్ట్‌గా HTTPS ద్వారా అందించబడతాయి."
      },
      {
        "q": "నా ఇమేజ్ URL ఇతర AI చాట్‌బాట్‌లతో కూడా పనిచేస్తుందా?",
        "a": "అవును. మా ఇమేజ్ URLలు Claude, Gemini మరియు Perplexityతో సహా పబ్లిక్ ఇమేజ్ URLలను అంగీకరించే ఏదైనా AI టూల్‌తో పనిచేస్తాయి."
      }
    ],
    "ctaTitle": "ChatGPT కోసం మీ ఇమేజ్ URLని పొందండి",
    "ctaBody": "చిత్రాన్ని అప్‌లోడ్ చేయండి, లింక్‌ను కాపీ చేయండి, ChatGPTలో పేస్ట్ చేయండి. 10 సెకన్ల కంటే తక్కువ సమయం పడుతుంది.",
    "ctaButton": "ఇప్పుడే అప్‌లోడ్ చేయండి"
  },
  "zh-Hant": {
    "metaTitle": "為 ChatGPT Vision 取得圖片連結 — 免費且即時 | ImageToURL",
    "metaDescription": "ChatGPT Vision 需要公開的圖片連結。上傳您的圖片，立即取得連結，並貼上到 ChatGPT。免費且無需註冊。",
    "schemaName": "ChatGPT 圖片連結",
    "schemaDescription": "上傳圖片並為 ChatGPT Vision 取得公開連結。免費、即時、無需註冊。",
    "badge": "CHATGPT 用戶",
    "h1Pre": "為 ChatGPT 取得圖片連結",
    "h1Highlight": "即時且免費。",
    "intro": "ChatGPT Vision 需要公開的圖片連結才能分析您的圖片。在此上傳、複製連結並貼上到 ChatGPT — 幾秒鐘即可完成。",
    "howTitle": "運作方式",
    "steps": [
      {
        "title": "上傳您的圖片",
        "body": "拖放或點擊以選擇您的圖片。我們支援 JPG、PNG、WebP、GIF 和 SVG 格式，最大 25 MB。"
      },
      {
        "title": "複製連結",
        "body": "您的公開圖片連結會立即產生。點擊複製按鈕，將 HTTPS 連結存入剪貼簿。"
      },
      {
        "title": "貼上到 ChatGPT",
        "body": "將連結貼上到任何 ChatGPT 對話中。視覺模型將自動擷取並分析您的圖片。"
      }
    ],
    "whyTitle": "為什麼 ChatGPT 需要圖片連結",
    "whyItems": [
      {
        "title": "視覺功能需要公開連結",
        "body": "ChatGPT 的視覺模型從網路上擷取圖片。它需要一個可公開存取的連結，才能下載並處理您的圖片以進行分析。"
      },
      {
        "title": "本機檔案無法運作",
        "body": "您無法將電腦上的檔案路徑貼到 ChatGPT。AI 在遠端伺服器上執行，無法存取您的本機檔案系統。"
      },
      {
        "title": "即時分析",
        "body": "一旦取得連結，ChatGPT 就能在幾秒鐘內處理您的圖片。您可以針對圖片提問、取得描述或擷取文字。"
      }
    ],
    "faqTitle": "常見問題",
    "faqs": [
      {
        "q": "為什麼 ChatGPT 需要公開圖片連結？",
        "a": "ChatGPT 的視覺功能只能分析託管在公開網路上並具有直接連結的圖片。它無法存取您電腦上儲存的本機檔案。"
      },
      {
        "q": "我可以將本機檔案路徑貼到 ChatGPT 嗎？",
        "a": "不行。ChatGPT 無法讀取像 C:/Users/photo.jpg 這樣的本機檔案路徑。您必須先將圖片上傳到託管服務。"
      },
      {
        "q": "如何在 ChatGPT 中使用圖片連結？",
        "a": "將您的圖片上傳到 ImageToURL，複製產生的連結，然後直接貼上到您的 ChatGPT 對話中。"
      },
      {
        "q": "圖片連結必須是 HTTPS 嗎？",
        "a": "是的。ChatGPT 需要安全的 HTTPS 連結。所有 ImageToURL 連結預設皆透過 HTTPS 提供。"
      },
      {
        "q": "我的圖片連結也適用於其他 AI 聊天機器人嗎？",
        "a": "是的。我們的圖片連結適用於任何接受公開圖片連結的 AI 工具，包括 Claude、Gemini 和 Perplexity。"
      }
    ],
    "ctaTitle": "取得您的 ChatGPT 圖片連結",
    "ctaBody": "上傳圖片、複製連結、貼上到 ChatGPT。只需不到 10 秒。",
    "ctaButton": "立即上傳"
  }
} as LandingContentMap;
