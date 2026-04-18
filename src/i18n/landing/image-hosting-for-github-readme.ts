import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for GitHub README Files | ImageToURL",
    "metaDescription": "Host images for GitHub README files with permanent URLs. Stop committing binary files to your repo for faster clones and cleaner project history.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A tool to host images for GitHub README files with permanent URLs to prevent repository bloat.",
    "badge": "DEVELOPER TOOLS",
    "h1Pre": "Image Hosting for GitHub",
    "h1Highlight": "README files.",
    "intro": "Stop committing binary images to your repos. Upload to ImageToURL, get a permanent URL, and keep your repositories lean and your clones fast.",
    "howTitle": "How to Use in Markdown",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag and drop your screenshot or diagram into our uploader to get a permanent, CDN-backed URL instantly."
      },
      {
        "title": "Copy the URL",
        "body": "Once the upload completes, copy the generated link to your clipboard for use in any Markdown file."
      },
      {
        "title": "Paste into README",
        "body": "Use standard Markdown syntax like ![Alt text](url) to display your image directly in your GitHub README."
      }
    ],
    "whyTitle": "Why Not Commit Images to Repos",
    "whyItems": [
      {
        "title": "Bloats Your Repository",
        "body": "Git tracks every version of every file. Binary images cannot be delta-compressed, causing your .git folder to balloon in size."
      },
      {
        "title": "Slows Down Clones",
        "body": "Every git clone downloads the entire history. Large image files force contributors to wait minutes just to get started."
      },
      {
        "title": "Clutters Your Diffs",
        "body": "Binary files add noise to pull requests and cannot be meaningfully reviewed, making it harder to track actual code changes."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why should I not commit images directly to my GitHub repo?",
        "a": "Git tracks every version of every file. Binary image files cannot be diffed efficiently, so every change adds the full file size to your repo history, bloating your .git directory."
      },
      {
        "q": "How do I add an externally hosted image to a GitHub README?",
        "a": "Upload your image to ImageToURL, copy the permanent URL, then add it to your README using standard Markdown syntax: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Will the images load on private repositories too?",
        "a": "Yes. Since the images are hosted externally on our CDN, they load independently of GitHub's access controls, working perfectly in both public and private repos."
      },
      {
        "q": "Do ImageToURL links work in GitHub wikis and issues?",
        "a": "Absolutely. ImageToURL links work anywhere GitHub renders Markdown, including wiki pages, issue comments, and pull request descriptions."
      },
      {
        "q": "What happens if ImageToURL goes down?",
        "a": "We use a globally distributed CDN with high availability. Images are replicated across multiple edge servers to ensure your URLs remain permanent and reliable."
      }
    ],
    "ctaTitle": "Keep your repos lean and your READMEs sharp",
    "ctaBody": "Upload screenshots and diagrams to get permanent Markdown-ready URLs without any repo bloat.",
    "ctaButton": "Upload Now"
  },
  "hi": {
    "metaTitle": "GitHub README फ़ाइलों के लिए इमेज होस्टिंग | ImageToURL",
    "metaDescription": "स्थायी URL के साथ GitHub README फ़ाइलों के लिए इमेज होस्ट करें। तेज़ क्लोन और साफ़ प्रोजेक्ट हिस्ट्री के लिए अपनी रिपॉजिटरी में बाइनरी फ़ाइलें डालना बंद करें।",
    "schemaName": "ImageToURL",
    "schemaDescription": "रिपॉजिटरी के आकार को बढ़ने से रोकने के लिए GitHub README फ़ाइलों के लिए इमेज होस्ट करने का एक टूल।",
    "badge": "डेवलपर टूल्स",
    "h1Pre": "GitHub README फ़ाइलों के लिए",
    "h1Highlight": "इमेज होस्टिंग।",
    "intro": "अपनी रिपॉजिटरी में बाइनरी इमेज डालना बंद करें। ImageToURL पर अपलोड करें, एक स्थायी URL प्राप्त करें, और अपनी रिपॉजिटरी को हल्का और क्लोन को तेज़ रखें।",
    "howTitle": "Markdown में उपयोग कैसे करें",
    "steps": [
      {
        "title": "अपनी इमेज अपलोड करें",
        "body": "तुरंत एक स्थायी, CDN-आधारित URL प्राप्त करने के लिए अपने स्क्रीनशॉट या डायग्राम को हमारे अपलोडर में ड्रैग और ड्रॉप करें।"
      },
      {
        "title": "URL कॉपी करें",
        "body": "अपलोड पूरा होने के बाद, किसी भी Markdown फ़ाइल में उपयोग करने के लिए जनरेट किए गए लिंक को अपने क्लिपबोर्ड पर कॉपी करें।"
      },
      {
        "title": "README में पेस्ट करें",
        "body": "अपनी इमेज को सीधे अपने GitHub README में प्रदर्शित करने के लिए ![Alt text](url) जैसे मानक Markdown सिंटैक्स का उपयोग करें।"
      }
    ],
    "whyTitle": "रिपॉजिटरी में इमेज क्यों न डालें",
    "whyItems": [
      {
        "title": "रिपॉजिटरी का आकार बढ़ाता है",
        "body": "Git हर फ़ाइल के हर वर्ज़न को ट्रैक करता है। बाइनरी इमेज को डेल्टा-कंप्रेस नहीं किया जा सकता, जिससे आपके .git फ़ोल्डर का आकार बहुत बढ़ जाता है।"
      },
      {
        "title": "क्लोन को धीमा करता है",
        "body": "हर git clone पूरी हिस्ट्री डाउनलोड करता है। बड़ी इमेज फ़ाइलें योगदानकर्ताओं को काम शुरू करने के लिए मिनटों तक इंतज़ार करने पर मजबूर करती हैं।"
      },
      {
        "title": "डिफ़्स (Diffs) को उलझाता है",
        "body": "बाइनरी फ़ाइलें पुल रिक्वेस्ट में शोर बढ़ाती हैं और उनकी सार्थक समीक्षा नहीं की जा सकती, जिससे वास्तविक कोड परिवर्तनों को ट्रैक करना कठिन हो जाता है।"
      }
    ],
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "faqs": [
      {
        "q": "मुझे सीधे अपनी GitHub रिपॉजिटरी में इमेज क्यों नहीं डालनी चाहिए?",
        "a": "Git हर फ़ाइल के हर वर्ज़न को ट्रैक करता है। बाइनरी इमेज फ़ाइलों को कुशलतापूर्वक डिफ (diff) नहीं किया जा सकता है, इसलिए हर बदलाव आपकी रिपॉजिटरी हिस्ट्री में पूरी फ़ाइल का आकार जोड़ देता है, जिससे आपकी .git डायरेक्टरी का आकार बढ़ जाता है।"
      },
      {
        "q": "मैं GitHub README में बाहरी रूप से होस्ट की गई इमेज कैसे जोड़ूँ?",
        "a": "अपनी इमेज को ImageToURL पर अपलोड करें, स्थायी URL कॉपी करें, और फिर इसे मानक Markdown सिंटैक्स का उपयोग करके अपने README में जोड़ें: ![Alt text](https://your-image-url)।"
      },
      {
        "q": "क्या इमेज प्राइवेट रिपॉजिटरी में भी लोड होंगी?",
        "a": "हाँ। चूंकि इमेज हमारे CDN पर बाहरी रूप से होस्ट की जाती हैं, इसलिए वे GitHub के एक्सेस कंट्रोल से स्वतंत्र रूप से लोड होती हैं, और पब्लिक और प्राइवेट दोनों रिपॉजिटरी में पूरी तरह से काम करती हैं।"
      },
      {
        "q": "क्या ImageToURL लिंक GitHub विकी और इश्यू में काम करते हैं?",
        "a": "बिल्कुल। ImageToURL लिंक वहाँ काम करते हैं जहाँ भी GitHub Markdown रेंडर करता है, जिसमें विकी पेज, इश्यू कमेंट्स और पुल रिक्वेस्ट विवरण शामिल हैं।"
      },
      {
        "q": "अगर ImageToURL डाउन हो जाए तो क्या होगा?",
        "a": "हम उच्च उपलब्धता वाले विश्व स्तर पर वितरित CDN का उपयोग करते हैं। यह सुनिश्चित करने के लिए कि आपके URL स्थायी और विश्वसनीय बने रहें, इमेज को कई एज सर्वर पर रेप्लिकेट किया जाता है।"
      }
    ],
    "ctaTitle": "अपनी रिपॉजिटरी को हल्का और READMEs को शानदार रखें",
    "ctaBody": "बिना किसी रिपॉजिटरी ब्लोट के स्थायी Markdown-तैयार URL प्राप्त करने के लिए स्क्रीनशॉट और डायग्राम अपलोड करें।",
    "ctaButton": "अभी अपलोड करें"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para archivos README de GitHub | ImageToURL",
    "metaDescription": "Aloja imágenes para archivos README de GitHub con URLs permanentes. Deja de subir archivos binarios a tu repositorio para obtener clones más rápidos y un historial de proyecto más limpio.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Una herramienta para alojar imágenes para archivos README de GitHub con URLs permanentes para evitar el exceso de peso en el repositorio.",
    "badge": "HERRAMIENTAS PARA DESARROLLADORES",
    "h1Pre": "Alojamiento de imágenes para archivos",
    "h1Highlight": "README de GitHub.",
    "intro": "Deja de subir imágenes binarias a tus repositorios. Súbelas a ImageToURL, obtén una URL permanente y mantén tus repositorios ligeros y tus clones rápidos.",
    "howTitle": "Cómo usar en Markdown",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta tu captura de pantalla o diagrama en nuestro cargador para obtener una URL permanente respaldada por CDN al instante."
      },
      {
        "title": "Copia la URL",
        "body": "Una vez que se complete la carga, copia el enlace generado en tu portapapeles para usarlo en cualquier archivo Markdown."
      },
      {
        "title": "Pega en el README",
        "body": "Usa la sintaxis estándar de Markdown como ![Texto alternativo](url) para mostrar tu imagen directamente en tu README de GitHub."
      }
    ],
    "whyTitle": "Por qué no subir imágenes a los repositorios",
    "whyItems": [
      {
        "title": "Sobrecarga tu repositorio",
        "body": "Git rastrea cada versión de cada archivo. Las imágenes binarias no se pueden comprimir mediante delta, lo que hace que tu carpeta .git aumente de tamaño drásticamente."
      },
      {
        "title": "Ralentiza los clones",
        "body": "Cada git clone descarga todo el historial. Los archivos de imagen grandes obligan a los colaboradores a esperar minutos solo para empezar."
      },
      {
        "title": "Desordena tus Diffs",
        "body": "Los archivos binarios añaden ruido a las pull requests y no se pueden revisar de manera significativa, lo que dificulta el seguimiento de los cambios de código reales."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué no debería subir imágenes directamente a mi repositorio de GitHub?",
        "a": "Git rastrea cada versión de cada archivo. Los archivos de imagen binarios no se pueden comparar (diff) de manera eficiente, por lo que cada cambio añade el tamaño total del archivo al historial de tu repositorio, inflando tu directorio .git."
      },
      {
        "q": "¿Cómo añado una imagen alojada externamente a un README de GitHub?",
        "a": "Sube tu imagen a ImageToURL, copia la URL permanente y luego añádela a tu README usando la sintaxis estándar de Markdown: ![Texto alternativo](https://tu-url-de-imagen)."
      },
      {
        "q": "¿Las imágenes se cargarán también en repositorios privados?",
        "a": "Sí. Como las imágenes están alojadas externamente en nuestra CDN, se cargan independientemente de los controles de acceso de GitHub, funcionando perfectamente tanto en repositorios públicos como privados."
      },
      {
        "q": "¿Los enlaces de ImageToURL funcionan en wikis e issues de GitHub?",
        "a": "Absolutamente. Los enlaces de ImageToURL funcionan en cualquier lugar donde GitHub renderice Markdown, incluyendo páginas wiki, comentarios de issues y descripciones de pull requests."
      },
      {
        "q": "¿Qué pasa si ImageToURL deja de funcionar?",
        "a": "Utilizamos una CDN distribuida globalmente con alta disponibilidad. Las imágenes se replican en múltiples servidores perimetrales para garantizar que tus URLs sigan siendo permanentes y fiables."
      }
    ],
    "ctaTitle": "Mantén tus repositorios ligeros y tus READMEs impecables",
    "ctaBody": "Sube capturas de pantalla y diagramas para obtener URLs permanentes listas para Markdown sin sobrecargar tu repositorio.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images pour fichiers README GitHub | ImageToURL",
    "metaDescription": "Hébergez vos images pour fichiers README GitHub avec des URL permanentes. Évitez de commiter des fichiers binaires pour des clones plus rapides et un historique de projet propre.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Un outil pour héberger des images pour les fichiers README GitHub avec des URL permanentes afin d'éviter l'alourdissement des dépôts.",
    "badge": "OUTILS DÉVELOPPEUR",
    "h1Pre": "Hébergement d'images pour GitHub",
    "h1Highlight": "fichiers README.",
    "intro": "Arrêtez de commiter des images binaires dans vos dépôts. Téléversez sur ImageToURL, obtenez une URL permanente, et gardez vos dépôts légers et vos clones rapides.",
    "howTitle": "Comment utiliser en Markdown",
    "steps": [
      {
        "title": "Téléversez votre image",
        "body": "Glissez-déposez votre capture d'écran ou schéma dans notre outil pour obtenir instantanément une URL permanente via CDN."
      },
      {
        "title": "Copiez l'URL",
        "body": "Une fois le téléversement terminé, copiez le lien généré dans votre presse-papier pour l'utiliser dans n'importe quel fichier Markdown."
      },
      {
        "title": "Collez dans le README",
        "body": "Utilisez la syntaxe Markdown standard comme ![Texte alternatif](url) pour afficher votre image directement dans votre README GitHub."
      }
    ],
    "whyTitle": "Pourquoi ne pas commiter d'images dans les dépôts",
    "whyItems": [
      {
        "title": "Alourdit votre dépôt",
        "body": "Git suit chaque version de chaque fichier. Les images binaires ne peuvent pas être compressées par delta, ce qui fait gonfler la taille de votre dossier .git."
      },
      {
        "title": "Ralentit les clones",
        "body": "Chaque git clone télécharge l'historique complet. Les fichiers images volumineux obligent les contributeurs à attendre des minutes avant de pouvoir commencer."
      },
      {
        "title": "Encombre vos diffs",
        "body": "Les fichiers binaires ajoutent du bruit aux pull requests et ne peuvent pas être examinés efficacement, rendant le suivi des changements de code plus difficile."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi ne devrais-je pas commiter des images directement dans mon dépôt GitHub ?",
        "a": "Git suit chaque version de chaque fichier. Les fichiers images binaires ne peuvent pas être comparés efficacement, donc chaque modification ajoute la taille totale du fichier à l'historique de votre dépôt, alourdissant votre répertoire .git."
      },
      {
        "q": "Comment ajouter une image hébergée en externe à un README GitHub ?",
        "a": "Téléversez votre image sur ImageToURL, copiez l'URL permanente, puis ajoutez-la à votre README en utilisant la syntaxe Markdown standard : ![Texte alternatif](https://votre-url-image)."
      },
      {
        "q": "Les images se chargeront-elles aussi sur les dépôts privés ?",
        "a": "Oui. Comme les images sont hébergées en externe sur notre CDN, elles se chargent indépendamment des contrôles d'accès de GitHub, fonctionnant parfaitement dans les dépôts publics et privés."
      },
      {
        "q": "Les liens ImageToURL fonctionnent-ils dans les wikis et les issues GitHub ?",
        "a": "Absolument. Les liens ImageToURL fonctionnent partout où GitHub affiche du Markdown, y compris les pages wiki, les commentaires d'issues et les descriptions de pull requests."
      },
      {
        "q": "Que se passe-t-il si ImageToURL tombe en panne ?",
        "a": "Nous utilisons un CDN distribué mondialement avec une haute disponibilité. Les images sont répliquées sur plusieurs serveurs périphériques pour garantir que vos URL restent permanentes et fiables."
      }
    ],
    "ctaTitle": "Gardez vos dépôts légers et vos README impeccables",
    "ctaBody": "Téléversez vos captures d'écran et schémas pour obtenir des URL permanentes prêtes pour le Markdown sans alourdir votre dépôt.",
    "ctaButton": "Téléverser maintenant"
  },
  "de": {
    "metaTitle": "Bildhosting für GitHub README-Dateien | ImageToURL",
    "metaDescription": "Hosten Sie Bilder für GitHub README-Dateien mit permanenten URLs. Vermeiden Sie das Committen von Binärdateien in Ihr Repo für schnellere Clones und eine saubere Projekthistorie.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Ein Tool zum Hosten von Bildern für GitHub README-Dateien mit permanenten URLs, um Repository-Bloat zu vermeiden.",
    "badge": "ENTWICKLER-TOOLS",
    "h1Pre": "Bildhosting für GitHub",
    "h1Highlight": "README-Dateien.",
    "intro": "Hören Sie auf, binäre Bilder in Ihre Repos zu committen. Laden Sie sie bei ImageToURL hoch, erhalten Sie eine permanente URL und halten Sie Ihre Repositories schlank und Ihre Clones schnell.",
    "howTitle": "Verwendung in Markdown",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Ihren Screenshot oder Ihr Diagramm per Drag-and-Drop in unseren Uploader, um sofort eine permanente, CDN-gestützte URL zu erhalten."
      },
      {
        "title": "URL kopieren",
        "body": "Sobald der Upload abgeschlossen ist, kopieren Sie den generierten Link in Ihre Zwischenablage, um ihn in jeder Markdown-Datei zu verwenden."
      },
      {
        "title": "In README einfügen",
        "body": "Verwenden Sie die Standard-Markdown-Syntax wie ![Alt-Text](url), um Ihr Bild direkt in Ihrer GitHub README anzuzeigen."
      }
    ],
    "whyTitle": "Warum keine Bilder in Repos committen?",
    "whyItems": [
      {
        "title": "Bläht Ihr Repository auf",
        "body": "Git verfolgt jede Version jeder Datei. Binäre Bilder können nicht delta-komprimiert werden, was dazu führt, dass Ihr .git-Ordner massiv an Größe zunimmt."
      },
      {
        "title": "Verlangsamt Clones",
        "body": "Jeder git clone lädt die gesamte Historie herunter. Große Bilddateien zwingen Mitwirkende dazu, Minuten zu warten, nur um loslegen zu können."
      },
      {
        "title": "Überfüllt Ihre Diffs",
        "body": "Binärdateien sorgen für Rauschen in Pull Requests und können nicht sinnvoll überprüft werden, was es schwieriger macht, tatsächliche Codeänderungen nachzuvollziehen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum sollte ich Bilder nicht direkt in mein GitHub-Repo committen?",
        "a": "Git verfolgt jede Version jeder Datei. Binäre Bilddateien können nicht effizient verglichen werden, sodass jede Änderung die volle Dateigröße zur Repo-Historie hinzufügt und Ihr .git-Verzeichnis aufbläht."
      },
      {
        "q": "Wie füge ich ein extern gehostetes Bild zu einer GitHub README hinzu?",
        "a": "Laden Sie Ihr Bild bei ImageToURL hoch, kopieren Sie die permanente URL und fügen Sie sie mit der Standard-Markdown-Syntax zu Ihrer README hinzu: ![Alt-Text](https://your-image-url)."
      },
      {
        "q": "Werden die Bilder auch in privaten Repositories geladen?",
        "a": "Ja. Da die Bilder extern auf unserem CDN gehostet werden, laden sie unabhängig von den Zugriffskontrollen von GitHub und funktionieren perfekt in öffentlichen wie privaten Repos."
      },
      {
        "q": "Funktionieren ImageToURL-Links auch in GitHub-Wikis und Issues?",
        "a": "Absolut. ImageToURL-Links funktionieren überall dort, wo GitHub Markdown rendert, einschließlich Wiki-Seiten, Issue-Kommentaren und Pull-Request-Beschreibungen."
      },
      {
        "q": "Was passiert, wenn ImageToURL ausfällt?",
        "a": "Wir nutzen ein global verteiltes CDN mit hoher Verfügbarkeit. Bilder werden auf mehreren Edge-Servern repliziert, um sicherzustellen, dass Ihre URLs permanent und zuverlässig bleiben."
      }
    ],
    "ctaTitle": "Halten Sie Ihre Repos schlank und Ihre READMEs professionell",
    "ctaBody": "Laden Sie Screenshots und Diagramme hoch, um permanente, Markdown-fähige URLs ohne Repo-Bloat zu erhalten.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "GitHub README用画像ホスティング | ImageToURL",
    "metaDescription": "GitHub README用の画像を永続的なURLでホストしましょう。バイナリファイルをリポジトリにコミットせず、クローンを高速化し、プロジェクト履歴をクリーンに保ちます。",
    "schemaName": "ImageToURL",
    "schemaDescription": "リポジトリの肥大化を防ぐため、GitHub README用の画像を永続的なURLでホストするツールです。",
    "badge": "開発者ツール",
    "h1Pre": "GitHub README用",
    "h1Highlight": "画像ホスティング",
    "intro": "バイナリ画像をリポジトリにコミットするのはやめましょう。ImageToURLにアップロードして永続的なURLを取得すれば、リポジトリを軽量に保ち、クローンも高速化できます。",
    "howTitle": "Markdownでの使い方",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "スクリーンショットや図をアップローダーにドラッグ＆ドロップするだけで、CDN対応の永続的なURLが即座に発行されます。"
      },
      {
        "title": "URLをコピー",
        "body": "アップロード完了後、生成されたリンクをクリップボードにコピーし、Markdownファイルで使用します。"
      },
      {
        "title": "READMEに貼り付け",
        "body": "![Alt text](url) のような標準的なMarkdown構文を使用して、GitHub READMEに画像を表示させます。"
      }
    ],
    "whyTitle": "画像をリポジトリにコミットすべきでない理由",
    "whyItems": [
      {
        "title": "リポジトリの肥大化",
        "body": "Gitはすべてのファイルの全バージョンを追跡します。バイナリ画像は差分圧縮ができないため、.gitフォルダのサイズが急激に増大します。"
      },
      {
        "title": "クローンの低速化",
        "body": "git cloneを実行すると全履歴がダウンロードされます。大きな画像ファイルがあると、開発者が作業を開始するまでに数分待たされることになります。"
      },
      {
        "title": "差分（Diff）のノイズ",
        "body": "バイナリファイルはプルリクエストにノイズを加え、内容のレビューができないため、実際のコード変更の追跡が困難になります。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜGitHubリポジトリに直接画像をコミットしてはいけないのですか？",
        "a": "Gitはファイルの全バージョンを追跡します。バイナリ画像は効率的に差分を取れないため、変更のたびにファイルサイズ全体がリポジトリ履歴に追加され、.gitディレクトリが肥大化するためです。"
      },
      {
        "q": "外部ホストされた画像をGitHub READMEに追加するにはどうすればよいですか？",
        "a": "画像をImageToURLにアップロードし、永続的なURLをコピーして、標準的なMarkdown構文 ![Alt text](https://your-image-url) を使用してREADMEに追加してください。"
      },
      {
        "q": "プライベートリポジトリでも画像は読み込まれますか？",
        "a": "はい。画像は当社のCDN上で外部ホストされているため、GitHubのアクセス制御とは独立して読み込まれ、パブリック・プライベート両方のリポジトリで問題なく動作します。"
      },
      {
        "q": "ImageToURLのリンクはGitHubのWikiやIssueでも使えますか？",
        "a": "もちろんです。ImageToURLのリンクは、Wikiページ、Issueのコメント、プルリクエストの説明など、GitHubがMarkdownをレンダリングする場所ならどこでも使用可能です。"
      },
      {
        "q": "ImageToURLがダウンした場合はどうなりますか？",
        "a": "当社は高可用性を備えたグローバル分散CDNを使用しています。画像は複数のエッジサーバーに複製されており、URLの永続性と信頼性を確保しています。"
      }
    ],
    "ctaTitle": "リポジトリを軽量に、READMEを鮮明に",
    "ctaBody": "スクリーンショットや図をアップロードして、リポジトリを肥大化させることなく、Markdown対応の永続的なURLを取得しましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "GitHub README 文件图片托管 | ImageToURL",
    "metaDescription": "为 GitHub README 文件托管图片并获取永久链接。无需将二进制文件提交到仓库，让克隆速度更快，项目历史更整洁。",
    "schemaName": "ImageToURL",
    "schemaDescription": "一个为 GitHub README 文件托管图片并提供永久链接的工具，旨在防止仓库臃肿。",
    "badge": "开发者工具",
    "h1Pre": "GitHub",
    "h1Highlight": "README 文件图片托管。",
    "intro": "停止将二进制图片提交到你的仓库。上传至 ImageToURL，获取永久链接，保持仓库精简并加快克隆速度。",
    "howTitle": "如何在 Markdown 中使用",
    "steps": [
      {
        "title": "上传图片",
        "body": "将截图或图表拖放到我们的上传器中，即可立即获得由 CDN 支持的永久链接。"
      },
      {
        "title": "复制链接",
        "body": "上传完成后，将生成的链接复制到剪贴板，以便在任何 Markdown 文件中使用。"
      },
      {
        "title": "粘贴到 README",
        "body": "使用标准的 Markdown 语法，如 ![Alt text](url)，即可直接在 GitHub README 中显示图片。"
      }
    ],
    "whyTitle": "为什么不建议将图片提交到仓库",
    "whyItems": [
      {
        "title": "导致仓库臃肿",
        "body": "Git 会跟踪每个文件的每个版本。二进制图片无法进行增量压缩，会导致 .git 文件夹体积迅速膨胀。"
      },
      {
        "title": "拖慢克隆速度",
        "body": "每次 git clone 都会下载整个历史记录。大型图片文件会让贡献者在开始工作前等待数分钟。"
      },
      {
        "title": "干扰代码差异对比",
        "body": "二进制文件会给 Pull Request 增加干扰，且无法进行有效的代码审查，使得跟踪实际代码变更变得更加困难。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么我不应该直接将图片提交到 GitHub 仓库？",
        "a": "Git 会跟踪每个文件的每个版本。二进制图片文件无法高效地进行差异对比，因此每次更改都会将完整的文件大小添加到仓库历史中，从而导致 .git 目录臃肿。"
      },
      {
        "q": "如何将外部托管的图片添加到 GitHub README？",
        "a": "将图片上传到 ImageToURL，复制永久链接，然后使用标准的 Markdown 语法将其添加到 README 中：![Alt text](https://your-image-url)。"
      },
      {
        "q": "图片在私有仓库中也能加载吗？",
        "a": "是的。由于图片托管在我们的 CDN 上，它们独立于 GitHub 的访问控制，在公共和私有仓库中均可完美运行。"
      },
      {
        "q": "ImageToURL 的链接可以在 GitHub Wiki 和 Issue 中使用吗？",
        "a": "当然可以。ImageToURL 的链接适用于任何渲染 Markdown 的 GitHub 页面，包括 Wiki 页面、Issue 评论和 Pull Request 描述。"
      },
      {
        "q": "如果 ImageToURL 宕机了怎么办？",
        "a": "我们使用具有高可用性的全球分布式 CDN。图片会在多个边缘服务器上进行复制，以确保你的链接始终永久且可靠。"
      }
    ],
    "ctaTitle": "保持仓库精简，让 README 更专业",
    "ctaBody": "上传截图和图表，获取永久的 Markdown 专用链接，告别仓库臃肿。",
    "ctaButton": "立即上传"
  },
  "id": {
    "metaTitle": "Hosting Gambar untuk File GitHub README | ImageToURL",
    "metaDescription": "Host gambar untuk file GitHub README dengan URL permanen. Berhenti melakukan commit file biner ke repositori Anda agar clone lebih cepat dan riwayat proyek lebih bersih.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Alat untuk menghosting gambar bagi file GitHub README dengan URL permanen guna mencegah repositori membengkak.",
    "badge": "ALAT PENGEMBANG",
    "h1Pre": "Hosting Gambar untuk",
    "h1Highlight": "File README GitHub.",
    "intro": "Berhenti melakukan commit gambar biner ke repositori Anda. Unggah ke ImageToURL, dapatkan URL permanen, dan jaga repositori Anda tetap ringan serta clone tetap cepat.",
    "howTitle": "Cara Menggunakan di Markdown",
    "steps": [
      {
        "title": "Unggah Gambar Anda",
        "body": "Tarik dan lepas screenshot atau diagram Anda ke pengunggah kami untuk mendapatkan URL permanen berbasis CDN secara instan."
      },
      {
        "title": "Salin URL",
        "body": "Setelah unggahan selesai, salin tautan yang dihasilkan ke clipboard Anda untuk digunakan di file Markdown apa pun."
      },
      {
        "title": "Tempel ke README",
        "body": "Gunakan sintaks Markdown standar seperti ![Alt text](url) untuk menampilkan gambar Anda secara langsung di GitHub README."
      }
    ],
    "whyTitle": "Mengapa Tidak Perlu Commit Gambar ke Repositori",
    "whyItems": [
      {
        "title": "Membuat Repositori Membengkak",
        "body": "Git melacak setiap versi dari setiap file. File gambar biner tidak dapat dikompresi secara delta, yang menyebabkan folder .git Anda membengkak ukurannya."
      },
      {
        "title": "Memperlambat Clone",
        "body": "Setiap git clone mengunduh seluruh riwayat. File gambar yang besar memaksa kontributor menunggu bermenit-menit hanya untuk memulai."
      },
      {
        "title": "Mengotori Diffs Anda",
        "body": "File biner menambah kebisingan pada pull request dan tidak dapat ditinjau secara bermakna, sehingga menyulitkan pelacakan perubahan kode yang sebenarnya."
      }
    ],
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Mengapa saya tidak boleh melakukan commit gambar langsung ke repositori GitHub saya?",
        "a": "Git melacak setiap versi dari setiap file. File gambar biner tidak dapat di-diff secara efisien, sehingga setiap perubahan menambah ukuran file penuh ke riwayat repositori Anda, yang membengkakkan direktori .git Anda."
      },
      {
        "q": "Bagaimana cara menambahkan gambar yang dihosting secara eksternal ke GitHub README?",
        "a": "Unggah gambar Anda ke ImageToURL, salin URL permanennya, lalu tambahkan ke README Anda menggunakan sintaks Markdown standar: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Apakah gambar akan dimuat di repositori pribadi juga?",
        "a": "Ya. Karena gambar dihosting secara eksternal di CDN kami, gambar tersebut dimuat secara independen dari kontrol akses GitHub, sehingga berfungsi sempurna di repositori publik maupun pribadi."
      },
      {
        "q": "Apakah tautan ImageToURL berfungsi di wiki dan issue GitHub?",
        "a": "Tentu saja. Tautan ImageToURL berfungsi di mana pun GitHub merender Markdown, termasuk halaman wiki, komentar issue, dan deskripsi pull request."
      },
      {
        "q": "Apa yang terjadi jika ImageToURL mengalami gangguan?",
        "a": "Kami menggunakan CDN yang didistribusikan secara global dengan ketersediaan tinggi. Gambar direplikasi di beberapa edge server untuk memastikan URL Anda tetap permanen dan andal."
      }
    ],
    "ctaTitle": "Jaga repositori tetap ringan dan README tetap rapi",
    "ctaBody": "Unggah screenshot dan diagram untuk mendapatkan URL siap-pakai Markdown yang permanen tanpa membuat repositori membengkak.",
    "ctaButton": "Unggah Sekarang"
  },
  "vi": {
    "metaTitle": "Lưu trữ ảnh cho tệp README trên GitHub | ImageToURL",
    "metaDescription": "Lưu trữ ảnh cho tệp README trên GitHub với URL vĩnh viễn. Ngừng commit các tệp nhị phân vào repo để clone nhanh hơn và giữ lịch sử dự án gọn gàng.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Công cụ lưu trữ ảnh cho tệp README trên GitHub với URL vĩnh viễn giúp tránh làm nặng kho lưu trữ.",
    "badge": "CÔNG CỤ DÀNH CHO LẬP TRÌNH VIÊN",
    "h1Pre": "Lưu trữ ảnh cho GitHub",
    "h1Highlight": "tệp README.",
    "intro": "Đừng commit các tệp ảnh nhị phân vào repo của bạn nữa. Hãy tải lên ImageToURL, nhận URL vĩnh viễn để giữ cho kho lưu trữ luôn nhẹ và clone nhanh chóng.",
    "howTitle": "Cách sử dụng trong Markdown",
    "steps": [
      {
        "title": "Tải ảnh của bạn lên",
        "body": "Kéo và thả ảnh chụp màn hình hoặc sơ đồ của bạn vào trình tải lên để nhận ngay URL vĩnh viễn được hỗ trợ bởi CDN."
      },
      {
        "title": "Sao chép URL",
        "body": "Sau khi tải lên hoàn tất, hãy sao chép liên kết đã tạo vào khay nhớ tạm để sử dụng trong bất kỳ tệp Markdown nào."
      },
      {
        "title": "Dán vào README",
        "body": "Sử dụng cú pháp Markdown tiêu chuẩn như ![Alt text](url) để hiển thị ảnh trực tiếp trong tệp README trên GitHub của bạn."
      }
    ],
    "whyTitle": "Tại sao không nên commit ảnh vào Repo",
    "whyItems": [
      {
        "title": "Làm nặng kho lưu trữ",
        "body": "Git theo dõi mọi phiên bản của từng tệp. Các tệp ảnh nhị phân không thể nén delta, khiến thư mục .git của bạn phình to nhanh chóng."
      },
      {
        "title": "Làm chậm quá trình clone",
        "body": "Mỗi lệnh git clone đều tải xuống toàn bộ lịch sử. Các tệp ảnh lớn khiến người đóng góp phải chờ đợi hàng phút chỉ để bắt đầu."
      },
      {
        "title": "Gây rối các bản diff",
        "body": "Các tệp nhị phân gây nhiễu cho các pull request và không thể xem xét một cách hiệu quả, khiến việc theo dõi các thay đổi mã nguồn thực tế trở nên khó khăn hơn."
      }
    ],
    "faqTitle": "Câu hỏi thường gặp",
    "faqs": [
      {
        "q": "Tại sao tôi không nên commit ảnh trực tiếp vào repo GitHub?",
        "a": "Git theo dõi mọi phiên bản của từng tệp. Các tệp ảnh nhị phân không thể so sánh (diff) hiệu quả, vì vậy mỗi thay đổi sẽ thêm toàn bộ dung lượng tệp vào lịch sử repo, làm nặng thư mục .git của bạn."
      },
      {
        "q": "Làm thế nào để thêm ảnh được lưu trữ bên ngoài vào GitHub README?",
        "a": "Tải ảnh của bạn lên ImageToURL, sao chép URL vĩnh viễn, sau đó thêm vào README bằng cú pháp Markdown tiêu chuẩn: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Ảnh có tải được trên các kho lưu trữ riêng tư (private) không?",
        "a": "Có. Vì ảnh được lưu trữ bên ngoài trên CDN của chúng tôi, chúng tải độc lập với quyền truy cập của GitHub, hoạt động hoàn hảo trong cả repo công khai và riêng tư."
      },
      {
        "q": "Liên kết ImageToURL có hoạt động trong GitHub wiki và issues không?",
        "a": "Chắc chắn rồi. Liên kết ImageToURL hoạt động ở bất cứ đâu GitHub hiển thị Markdown, bao gồm các trang wiki, bình luận issue và mô tả pull request."
      },
      {
        "q": "Điều gì xảy ra nếu ImageToURL gặp sự cố?",
        "a": "Chúng tôi sử dụng CDN phân tán toàn cầu với tính sẵn sàng cao. Ảnh được sao chép trên nhiều máy chủ biên để đảm bảo URL của bạn luôn vĩnh viễn và đáng tin cậy."
      }
    ],
    "ctaTitle": "Giữ cho repo luôn nhẹ và README luôn chuyên nghiệp",
    "ctaBody": "Tải lên ảnh chụp màn hình và sơ đồ để nhận URL vĩnh viễn sẵn sàng cho Markdown mà không làm nặng repo.",
    "ctaButton": "Tải lên ngay"
  },
  "pt-BR": {
    "metaTitle": "Hospedagem de Imagens para README do GitHub | ImageToURL",
    "metaDescription": "Hospede imagens para arquivos README do GitHub com URLs permanentes. Pare de enviar arquivos binários para seu repositório para obter clones mais rápidos e um histórico de projeto mais limpo.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Uma ferramenta para hospedar imagens para arquivos README do GitHub com URLs permanentes para evitar o inchaço do repositório.",
    "badge": "FERRAMENTAS PARA DESENVOLVEDORES",
    "h1Pre": "Hospedagem de Imagens para",
    "h1Highlight": "arquivos README do GitHub.",
    "intro": "Pare de enviar imagens binárias para seus repositórios. Faça upload para o ImageToURL, obtenha uma URL permanente e mantenha seus repositórios leves e seus clones rápidos.",
    "howTitle": "Como usar no Markdown",
    "steps": [
      {
        "title": "Faça upload da sua imagem",
        "body": "Arraste e solte sua captura de tela ou diagrama em nosso carregador para obter instantaneamente uma URL permanente com suporte de CDN."
      },
      {
        "title": "Copie a URL",
        "body": "Assim que o upload for concluído, copie o link gerado para sua área de transferência para usar em qualquer arquivo Markdown."
      },
      {
        "title": "Cole no README",
        "body": "Use a sintaxe padrão do Markdown como ![Texto alternativo](url) para exibir sua imagem diretamente no seu README do GitHub."
      }
    ],
    "whyTitle": "Por que não enviar imagens para repositórios",
    "whyItems": [
      {
        "title": "Incha seu repositório",
        "body": "O Git rastreia cada versão de cada arquivo. Imagens binárias não podem ser compactadas por delta, fazendo com que sua pasta .git aumente de tamanho rapidamente."
      },
      {
        "title": "Torna os clones lentos",
        "body": "Cada git clone baixa todo o histórico. Arquivos de imagem grandes forçam os colaboradores a esperar minutos apenas para começar."
      },
      {
        "title": "Polui seus Diffs",
        "body": "Arquivos binários adicionam ruído aos pull requests e não podem ser revisados de forma significativa, tornando mais difícil rastrear as alterações reais no código."
      }
    ],
    "faqTitle": "Perguntas Frequentes",
    "faqs": [
      {
        "q": "Por que não devo enviar imagens diretamente para meu repositório GitHub?",
        "a": "O Git rastreia cada versão de cada arquivo. Arquivos de imagem binários não podem ser comparados (diff) de forma eficiente, então cada alteração adiciona o tamanho total do arquivo ao histórico do seu repositório, inchando seu diretório .git."
      },
      {
        "q": "Como adiciono uma imagem hospedada externamente a um README do GitHub?",
        "a": "Faça upload da sua imagem para o ImageToURL, copie a URL permanente e adicione-a ao seu README usando a sintaxe padrão do Markdown: ![Texto alternativo](https://sua-url-de-imagem)."
      },
      {
        "q": "As imagens carregarão em repositórios privados também?",
        "a": "Sim. Como as imagens são hospedadas externamente em nossa CDN, elas carregam independentemente dos controles de acesso do GitHub, funcionando perfeitamente tanto em repositórios públicos quanto privados."
      },
      {
        "q": "Os links do ImageToURL funcionam em wikis e issues do GitHub?",
        "a": "Com certeza. Os links do ImageToURL funcionam em qualquer lugar onde o GitHub renderiza Markdown, incluindo páginas wiki, comentários de issues e descrições de pull requests."
      },
      {
        "q": "O que acontece se o ImageToURL sair do ar?",
        "a": "Usamos uma CDN distribuída globalmente com alta disponibilidade. As imagens são replicadas em vários servidores de borda para garantir que suas URLs permaneçam permanentes e confiáveis."
      }
    ],
    "ctaTitle": "Mantenha seus repositórios leves e seus READMEs impecáveis",
    "ctaBody": "Faça upload de capturas de tela e diagramas para obter URLs permanentes prontas para Markdown sem inchar seu repositório.",
    "ctaButton": "Fazer upload agora"
  },
  "tr": {
    "metaTitle": "GitHub README Dosyaları için Görsel Barındırma | ImageToURL",
    "metaDescription": "GitHub README dosyalarınız için kalıcı URL'lerle görseller barındırın. Depolarınızı şişirmemek ve daha hızlı klonlama sağlamak için ikili dosyaları commit etmeyi bırakın.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Depo şişmesini önlemek amacıyla GitHub README dosyaları için kalıcı URL'lerle görsel barındırma aracı.",
    "badge": "GELİŞTİRİCİ ARAÇLARI",
    "h1Pre": "GitHub için Görsel Barındırma",
    "h1Highlight": "README dosyaları.",
    "intro": "İkili (binary) görselleri depolarınıza commit etmeyi bırakın. ImageToURL'e yükleyin, kalıcı bir URL alın ve depolarınızı hafif, klonlama işlemlerinizi hızlı tutun.",
    "howTitle": "Markdown İçinde Nasıl Kullanılır",
    "steps": [
      {
        "title": "Görselinizi Yükleyin",
        "body": "Ekran görüntünüzü veya diyagramınızı yükleyicimize sürükleyip bırakarak anında CDN destekli kalıcı bir URL elde edin."
      },
      {
        "title": "URL'i Kopyalayın",
        "body": "Yükleme tamamlandığında, oluşturulan bağlantıyı herhangi bir Markdown dosyasında kullanmak üzere panonuza kopyalayın."
      },
      {
        "title": "README'e Yapıştırın",
        "body": "Görselinizi doğrudan GitHub README dosyanızda görüntülemek için ![Alt text](url) gibi standart Markdown sözdizimini kullanın."
      }
    ],
    "whyTitle": "Neden Görselleri Depolara Commit Etmemelisiniz",
    "whyItems": [
      {
        "title": "Deponuzu Şişirir",
        "body": "Git, her dosyanın her sürümünü takip eder. İkili görseller delta-sıkıştırma yapılamadığı için .git klasörünüzün boyutunun hızla büyümesine neden olur."
      },
      {
        "title": "Klonlamayı Yavaşlatır",
        "body": "Her git clone işlemi tüm geçmişi indirir. Büyük görsel dosyaları, katkıda bulunanların çalışmaya başlamak için dakikalarca beklemesine neden olur."
      },
      {
        "title": "Diff'lerinizi Karmaşıklaştırır",
        "body": "İkili dosyalar pull request'lerde gürültü yaratır ve anlamlı bir şekilde incelenemezler, bu da gerçek kod değişikliklerini takip etmeyi zorlaştırır."
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular",
    "faqs": [
      {
        "q": "Neden görselleri doğrudan GitHub depoma commit etmemeliyim?",
        "a": "Git, her dosyanın her sürümünü takip eder. İkili görsel dosyaları verimli bir şekilde diff edilemez, bu nedenle her değişiklik depo geçmişinize dosyanın tam boyutunu ekleyerek .git dizininizi şişirir."
      },
      {
        "q": "GitHub README dosyasına harici olarak barındırılan bir görseli nasıl eklerim?",
        "a": "Görselinizi ImageToURL'e yükleyin, kalıcı URL'i kopyalayın ve ardından standart Markdown sözdizimini kullanarak README dosyanıza ekleyin: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Görseller özel (private) depolarda da yüklenir mi?",
        "a": "Evet. Görseller harici olarak CDN'imizde barındırıldığı için GitHub'ın erişim kontrollerinden bağımsız olarak yüklenirler ve hem genel hem de özel depolarda mükemmel şekilde çalışırlar."
      },
      {
        "q": "ImageToURL bağlantıları GitHub wiki ve issue sayfalarında çalışır mı?",
        "a": "Kesinlikle. ImageToURL bağlantıları, wiki sayfaları, issue yorumları ve pull request açıklamaları dahil olmak üzere GitHub'ın Markdown oluşturduğu her yerde çalışır."
      },
      {
        "q": "ImageToURL çökerse ne olur?",
        "a": "Yüksek erişilebilirlik sağlayan, küresel olarak dağıtılmış bir CDN kullanıyoruz. Görseller, URL'lerinizin kalıcı ve güvenilir kalmasını sağlamak için birden fazla uç sunucuda çoğaltılır."
      }
    ],
    "ctaTitle": "Depolarınızı hafif, README'lerinizi keskin tutun",
    "ctaBody": "Depo şişmesi yaşamadan, Markdown'a hazır kalıcı URL'ler almak için ekran görüntülerinizi ve diyagramlarınızı yükleyin.",
    "ctaButton": "Şimdi Yükle"
  },
  "tl": {
    "metaTitle": "Image Hosting para sa GitHub README Files | ImageToURL",
    "metaDescription": "Mag-host ng mga imahe para sa GitHub README files na may permanenteng URL. Iwasan ang pag-commit ng binary files sa iyong repo para sa mas mabilis na clone at mas malinis na project history.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Isang tool para mag-host ng mga imahe para sa GitHub README files na may permanenteng URL upang maiwasan ang paglaki ng repository.",
    "badge": "DEVELOPER TOOLS",
    "h1Pre": "Image Hosting para sa GitHub",
    "h1Highlight": "README files.",
    "intro": "Itigil ang pag-commit ng mga binary image sa iyong mga repo. Mag-upload sa ImageToURL, kumuha ng permanenteng URL, at panatilihing magaan ang iyong mga repository at mabilis ang mga clone.",
    "howTitle": "Paano Gamitin sa Markdown",
    "steps": [
      {
        "title": "I-upload ang Iyong Imahe",
        "body": "I-drag at i-drop ang iyong screenshot o diagram sa aming uploader para makakuha agad ng permanenteng URL na suportado ng CDN."
      },
      {
        "title": "Kopyahin ang URL",
        "body": "Kapag tapos na ang upload, kopyahin ang nabuong link sa iyong clipboard para magamit sa anumang Markdown file."
      },
      {
        "title": "I-paste sa README",
        "body": "Gamitin ang standard Markdown syntax na ![Alt text](url) para ipakita ang iyong imahe nang direkta sa iyong GitHub README."
      }
    ],
    "whyTitle": "Bakit Hindi Dapat I-commit ang mga Imahe sa Repos",
    "whyItems": [
      {
        "title": "Pinapalaki ang Iyong Repository",
        "body": "Sinusubaybayan ng Git ang bawat bersyon ng bawat file. Ang mga binary image ay hindi maaaring i-delta-compress, na nagiging sanhi ng paglaki ng laki ng iyong .git folder."
      },
      {
        "title": "Pinapabagal ang mga Clone",
        "body": "Ang bawat git clone ay nagda-download ng buong history. Ang malalaking image file ay nagpapahintay sa mga contributor ng ilang minuto bago makapagsimula."
      },
      {
        "title": "Ginagawang Magulo ang Iyong Diffs",
        "body": "Ang mga binary file ay nagdaragdag ng ingay sa mga pull request at hindi maaaring suriin nang maayos, kaya mas mahirap subaybayan ang mga aktwal na pagbabago sa code."
      }
    ],
    "faqTitle": "Mga Madalas Itanong",
    "faqs": [
      {
        "q": "Bakit hindi ko dapat i-commit ang mga imahe nang direkta sa aking GitHub repo?",
        "a": "Sinusubaybayan ng Git ang bawat bersyon ng bawat file. Ang mga binary image file ay hindi maaaring i-diff nang episyente, kaya ang bawat pagbabago ay nagdaragdag ng buong laki ng file sa iyong repo history, na nagpapalaki sa iyong .git directory."
      },
      {
        "q": "Paano ako magdaragdag ng externally hosted na imahe sa isang GitHub README?",
        "a": "I-upload ang iyong imahe sa ImageToURL, kopyahin ang permanenteng URL, pagkatapos ay idagdag ito sa iyong README gamit ang standard Markdown syntax: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Maglo-load ba ang mga imahe sa mga private repository?",
        "a": "Oo. Dahil ang mga imahe ay naka-host nang externally sa aming CDN, naglo-load ang mga ito nang hiwalay sa access controls ng GitHub, kaya gumagana ang mga ito nang perpekto sa parehong public at private repos."
      },
      {
        "q": "Gumagana ba ang mga link ng ImageToURL sa mga GitHub wiki at issue?",
        "a": "Siyempre. Ang mga link ng ImageToURL ay gumagana kahit saan nagre-render ang GitHub ng Markdown, kabilang ang mga wiki page, issue comment, at pull request description."
      },
      {
        "q": "Ano ang mangyayari kung mag-down ang ImageToURL?",
        "a": "Gumagamit kami ng globally distributed CDN na may high availability. Ang mga imahe ay kinokopya sa maraming edge server upang matiyak na ang iyong mga URL ay mananatiling permanente at maaasahan."
      }
    ],
    "ctaTitle": "Panatilihing magaan ang iyong mga repo at maayos ang iyong mga README",
    "ctaBody": "Mag-upload ng mga screenshot at diagram para makakuha ng mga permanenteng Markdown-ready URL nang walang anumang bloat sa repo.",
    "ctaButton": "I-upload Ngayon"
  },
  "pl": {
    "metaTitle": "Hosting obrazów dla plików GitHub README | ImageToURL",
    "metaDescription": "Hostuj obrazy do plików GitHub README z trwałymi adresami URL. Przestań dodawać pliki binarne do repozytorium, aby przyspieszyć klonowanie i zachować czystą historię projektu.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Narzędzie do hostowania obrazów dla plików GitHub README z trwałymi adresami URL, aby zapobiec rozrostowi repozytorium.",
    "badge": "NARZĘDZIA DLA PROGRAMISTÓW",
    "h1Pre": "Hosting obrazów dla plików GitHub",
    "h1Highlight": "README.",
    "intro": "Przestań dodawać binarne obrazy do swoich repozytoriów. Prześlij je do ImageToURL, uzyskaj trwały adres URL i utrzymuj swoje repozytoria lekkimi, a klonowanie szybkim.",
    "howTitle": "Jak używać w Markdown",
    "steps": [
      {
        "title": "Prześlij swój obraz",
        "body": "Przeciągnij i upuść zrzut ekranu lub diagram do naszego narzędzia, aby natychmiast uzyskać trwały adres URL wspierany przez CDN."
      },
      {
        "title": "Skopiuj adres URL",
        "body": "Po zakończeniu przesyłania skopiuj wygenerowany link do schowka, aby użyć go w dowolnym pliku Markdown."
      },
      {
        "title": "Wklej do README",
        "body": "Użyj standardowej składni Markdown, takiej jak ![Alt text](url), aby wyświetlić obraz bezpośrednio w swoim pliku GitHub README."
      }
    ],
    "whyTitle": "Dlaczego nie warto dodawać obrazów do repozytoriów",
    "whyItems": [
      {
        "title": "Rozdyma repozytorium",
        "body": "Git śledzi każdą wersję każdego pliku. Obrazy binarne nie mogą być kompresowane różnicowo, co powoduje, że folder .git gwałtownie zwiększa swój rozmiar."
      },
      {
        "title": "Spowalnia klonowanie",
        "body": "Każde polecenie git clone pobiera całą historię. Duże pliki graficzne zmuszają współpracowników do czekania minutami, zanim będą mogli rozpocząć pracę."
      },
      {
        "title": "Zaśmieca diffy",
        "body": "Pliki binarne wprowadzają szum do pull requestów i nie mogą być sensownie recenzowane, co utrudnia śledzenie rzeczywistych zmian w kodzie."
      }
    ],
    "faqTitle": "Najczęściej zadawane pytania",
    "faqs": [
      {
        "q": "Dlaczego nie powinienem dodawać obrazów bezpośrednio do mojego repozytorium GitHub?",
        "a": "Git śledzi każdą wersję każdego pliku. Pliki binarne nie mogą być efektywnie porównywane, więc każda zmiana dodaje pełny rozmiar pliku do historii repozytorium, rozdymając katalog .git."
      },
      {
        "q": "Jak dodać zewnętrznie hostowany obraz do pliku GitHub README?",
        "a": "Prześlij obraz do ImageToURL, skopiuj trwały adres URL, a następnie dodaj go do swojego README za pomocą standardowej składni Markdown: ![Alt text](https://twoj-adres-url-obrazu)."
      },
      {
        "q": "Czy obrazy będą się ładować również w prywatnych repozytoriach?",
        "a": "Tak. Ponieważ obrazy są hostowane zewnętrznie na naszym CDN, ładują się niezależnie od kontroli dostępu GitHub, działając idealnie zarówno w publicznych, jak i prywatnych repozytoriach."
      },
      {
        "q": "Czy linki ImageToURL działają w wiki i issues na GitHubie?",
        "a": "Oczywiście. Linki ImageToURL działają wszędzie tam, gdzie GitHub renderuje Markdown, w tym na stronach wiki, w komentarzach do zgłoszeń (issues) oraz w opisach pull requestów."
      },
      {
        "q": "Co się stanie, jeśli ImageToURL przestanie działać?",
        "a": "Korzystamy z globalnie rozproszonej sieci CDN o wysokiej dostępności. Obrazy są replikowane na wielu serwerach brzegowych, aby zapewnić, że Twoje adresy URL pozostaną trwałe i niezawodne."
      }
    ],
    "ctaTitle": "Utrzymuj swoje repozytoria lekkimi, a README profesjonalnymi",
    "ctaBody": "Przesyłaj zrzuty ekranu i diagramy, aby uzyskać trwałe adresy URL gotowe do użycia w Markdown bez rozdymania repozytorium.",
    "ctaButton": "Prześlij teraz"
  },
  "nl": {
    "metaTitle": "Afbeeldingen hosten voor GitHub README-bestanden | ImageToURL",
    "metaDescription": "Host afbeeldingen voor GitHub README-bestanden met permanente URL's. Stop met het committen van binaire bestanden naar je repo voor snellere clones en een schonere projectgeschiedenis.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Een tool om afbeeldingen voor GitHub README-bestanden te hosten met permanente URL's om repository-bloat te voorkomen.",
    "badge": "DEVELOPER TOOLS",
    "h1Pre": "Afbeeldingen hosten voor GitHub",
    "h1Highlight": "README-bestanden.",
    "intro": "Stop met het committen van binaire afbeeldingen naar je repo's. Upload naar ImageToURL, ontvang een permanente URL en houd je repositories slank en je clones snel.",
    "howTitle": "Hoe te gebruiken in Markdown",
    "steps": [
      {
        "title": "Upload je afbeelding",
        "body": "Sleep je screenshot of diagram naar onze uploader om direct een permanente, CDN-gehoste URL te krijgen."
      },
      {
        "title": "Kopieer de URL",
        "body": "Zodra de upload is voltooid, kopieer je de gegenereerde link naar je klembord voor gebruik in elk Markdown-bestand."
      },
      {
        "title": "Plak in README",
        "body": "Gebruik de standaard Markdown-syntaxis zoals ![Alt text](url) om je afbeelding direct in je GitHub README weer te geven."
      }
    ],
    "whyTitle": "Waarom geen afbeeldingen committen naar repo's",
    "whyItems": [
      {
        "title": "Vervuilt je repository",
        "body": "Git houdt elke versie van elk bestand bij. Binaire afbeeldingen kunnen niet delta-gecomprimeerd worden, waardoor je .git-map enorm in omvang toeneemt."
      },
      {
        "title": "Vertraagt clones",
        "body": "Elke git clone downloadt de volledige geschiedenis. Grote afbeeldingsbestanden zorgen ervoor dat contributors minuten moeten wachten om aan de slag te gaan."
      },
      {
        "title": "Vervuilt je diffs",
        "body": "Binaire bestanden voegen ruis toe aan pull requests en kunnen niet zinvol worden beoordeeld, waardoor het moeilijker wordt om daadwerkelijke codewijzigingen te volgen."
      }
    ],
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Waarom zou ik geen afbeeldingen direct naar mijn GitHub-repo committen?",
        "a": "Git houdt elke versie van elk bestand bij. Binaire afbeeldingsbestanden kunnen niet efficiënt worden vergeleken (diffed), dus elke wijziging voegt de volledige bestandsgrootte toe aan je repo-geschiedenis, wat je .git-directory opblaast."
      },
      {
        "q": "Hoe voeg ik een extern gehoste afbeelding toe aan een GitHub README?",
        "a": "Upload je afbeelding naar ImageToURL, kopieer de permanente URL en voeg deze toe aan je README met de standaard Markdown-syntaxis: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Laden de afbeeldingen ook in privé-repositories?",
        "a": "Ja. Omdat de afbeeldingen extern op ons CDN worden gehost, laden ze onafhankelijk van de toegangscontroles van GitHub, waardoor ze perfect werken in zowel publieke als private repo's."
      },
      {
        "q": "Werken ImageToURL-links in GitHub-wiki's en issues?",
        "a": "Absoluut. ImageToURL-links werken overal waar GitHub Markdown rendert, inclusief wiki-pagina's, issue-comments en pull request-beschrijvingen."
      },
      {
        "q": "Wat gebeurt er als ImageToURL offline gaat?",
        "a": "We gebruiken een wereldwijd gedistribueerd CDN met hoge beschikbaarheid. Afbeeldingen worden gerepliceerd over meerdere edge-servers om ervoor te zorgen dat je URL's permanent en betrouwbaar blijven."
      }
    ],
    "ctaTitle": "Houd je repo's slank en je README's scherp",
    "ctaBody": "Upload screenshots en diagrammen om permanente, Markdown-ready URL's te krijgen zonder repo-bloat.",
    "ctaButton": "Upload nu"
  },
  "it": {
    "metaTitle": "Hosting di immagini per file README di GitHub | ImageToURL",
    "metaDescription": "Ospita immagini per i file README di GitHub con URL permanenti. Smetti di aggiungere file binari al tuo repository per cloni più veloci e una cronologia del progetto più pulita.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Uno strumento per ospitare immagini per i file README di GitHub con URL permanenti per evitare l'appesantimento del repository.",
    "badge": "STRUMENTI PER SVILUPPATORI",
    "h1Pre": "Hosting di immagini per",
    "h1Highlight": "file README di GitHub.",
    "intro": "Smetti di aggiungere immagini binarie ai tuoi repository. Caricale su ImageToURL, ottieni un URL permanente e mantieni i tuoi repository leggeri e i cloni veloci.",
    "howTitle": "Come utilizzare in Markdown",
    "steps": [
      {
        "title": "Carica la tua immagine",
        "body": "Trascina il tuo screenshot o diagramma nel nostro caricatore per ottenere istantaneamente un URL permanente supportato da CDN."
      },
      {
        "title": "Copia l'URL",
        "body": "Una volta completato il caricamento, copia il link generato negli appunti per utilizzarlo in qualsiasi file Markdown."
      },
      {
        "title": "Incolla nel README",
        "body": "Usa la sintassi Markdown standard come ![Alt text](url) per visualizzare la tua immagine direttamente nel tuo README di GitHub."
      }
    ],
    "whyTitle": "Perché non aggiungere immagini ai repository",
    "whyItems": [
      {
        "title": "Appesantisce il repository",
        "body": "Git tiene traccia di ogni versione di ogni file. Le immagini binarie non possono essere compresse tramite delta, causando un aumento esponenziale delle dimensioni della cartella .git."
      },
      {
        "title": "Rallenta i cloni",
        "body": "Ogni git clone scarica l'intera cronologia. I file di grandi dimensioni costringono i collaboratori ad attendere minuti solo per iniziare."
      },
      {
        "title": "Ingombra i diff",
        "body": "I file binari aggiungono rumore alle pull request e non possono essere revisionati in modo significativo, rendendo più difficile tracciare le reali modifiche al codice."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Perché non dovrei aggiungere immagini direttamente al mio repository GitHub?",
        "a": "Git tiene traccia di ogni versione di ogni file. I file immagine binari non possono essere confrontati in modo efficiente, quindi ogni modifica aggiunge l'intera dimensione del file alla cronologia del repository, appesantendo la directory .git."
      },
      {
        "q": "Come aggiungo un'immagine ospitata esternamente a un README di GitHub?",
        "a": "Carica la tua immagine su ImageToURL, copia l'URL permanente, quindi aggiungila al tuo README usando la sintassi Markdown standard: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Le immagini verranno caricate anche nei repository privati?",
        "a": "Sì. Poiché le immagini sono ospitate esternamente sulla nostra CDN, vengono caricate indipendentemente dai controlli di accesso di GitHub, funzionando perfettamente sia nei repository pubblici che in quelli privati."
      },
      {
        "q": "I link di ImageToURL funzionano nelle wiki e nelle issue di GitHub?",
        "a": "Assolutamente. I link di ImageToURL funzionano ovunque GitHub esegua il rendering di Markdown, incluse pagine wiki, commenti alle issue e descrizioni delle pull request."
      },
      {
        "q": "Cosa succede se ImageToURL non è disponibile?",
        "a": "Utilizziamo una CDN distribuita a livello globale con alta disponibilità. Le immagini vengono replicate su più server edge per garantire che i tuoi URL rimangano permanenti e affidabili."
      }
    ],
    "ctaTitle": "Mantieni i tuoi repository leggeri e i tuoi README nitidi",
    "ctaBody": "Carica screenshot e diagrammi per ottenere URL permanenti pronti per Markdown senza appesantire il repository.",
    "ctaButton": "Carica ora"
  },
  "ar": {
    "metaTitle": "استضافة صور لملفات GitHub README | ImageToURL",
    "metaDescription": "استضف صورك لملفات GitHub README بروابط دائمة. توقف عن رفع الملفات الثنائية إلى مستودعك للحصول على استنساخ أسرع وسجل مشروع أنظف.",
    "schemaName": "ImageToURL",
    "schemaDescription": "أداة لاستضافة الصور لملفات GitHub README بروابط دائمة لمنع تضخم المستودع.",
    "badge": "أدوات المطورين",
    "h1Pre": "استضافة الصور لملفات",
    "h1Highlight": "GitHub README.",
    "intro": "توقف عن رفع الصور الثنائية إلى مستودعاتك. ارفعها إلى ImageToURL، واحصل على رابط دائم، وحافظ على خفة مستودعاتك وسرعة استنساخها.",
    "howTitle": "كيفية الاستخدام في Markdown",
    "steps": [
      {
        "title": "ارفع صورتك",
        "body": "قم بسحب وإفلات لقطة الشاشة أو الرسم التخطيطي الخاص بك في أداة الرفع للحصول على رابط دائم مدعوم بشبكة CDN فوراً."
      },
      {
        "title": "انسخ الرابط",
        "body": "بمجرد اكتمال الرفع، انسخ الرابط الذي تم إنشاؤه لاستخدامه في أي ملف Markdown."
      },
      {
        "title": "ألصقه في README",
        "body": "استخدم صيغة Markdown القياسية مثل ![Alt text](url) لعرض صورتك مباشرة في ملف GitHub README الخاص بك."
      }
    ],
    "whyTitle": "لماذا لا يجب رفع الصور إلى المستودعات",
    "whyItems": [
      {
        "title": "تضخم المستودع",
        "body": "يتتبع Git كل إصدار من كل ملف. لا يمكن ضغط الصور الثنائية، مما يؤدي إلى تضخم حجم مجلد .git الخاص بك."
      },
      {
        "title": "إبطاء عملية الاستنساخ",
        "body": "يقوم أمر git clone بتحميل السجل بالكامل. ملفات الصور الكبيرة تجبر المساهمين على الانتظار لدقائق فقط للبدء."
      },
      {
        "title": "تشتيت الانتباه في الفروقات (Diffs)",
        "body": "تضيف الملفات الثنائية ضجيجاً إلى طلبات السحب (pull requests) ولا يمكن مراجعتها بشكل مفيد، مما يصعب تتبع تغييرات الكود الفعلية."
      }
    ],
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "لماذا لا يجب أن أرفع الصور مباشرة إلى مستودع GitHub الخاص بي؟",
        "a": "يتتبع Git كل إصدار من كل ملف. لا يمكن مقارنة ملفات الصور الثنائية بكفاءة، لذا فإن كل تغيير يضيف حجم الملف بالكامل إلى سجل المستودع، مما يؤدي إلى تضخم دليل .git."
      },
      {
        "q": "كيف أضيف صورة مستضافة خارجياً إلى GitHub README؟",
        "a": "ارفع صورتك إلى ImageToURL، وانسخ الرابط الدائم، ثم أضفه إلى ملف README باستخدام صيغة Markdown القياسية: ![Alt text](https://your-image-url)."
      },
      {
        "q": "هل ستعمل الصور في المستودعات الخاصة أيضاً؟",
        "a": "نعم. بما أن الصور مستضافة خارجياً على شبكة CDN الخاصة بنا، فهي تعمل بشكل مستقل عن ضوابط الوصول في GitHub، وتعمل بشكل مثالي في المستودعات العامة والخاصة."
      },
      {
        "q": "هل تعمل روابط ImageToURL في صفحات الويكي وقضايا GitHub؟",
        "a": "بالتأكيد. تعمل روابط ImageToURL في أي مكان يدعم GitHub فيه Markdown، بما في ذلك صفحات الويكي، وتعليقات القضايا، وأوصاف طلبات السحب."
      },
      {
        "q": "ماذا يحدث إذا تعطل موقع ImageToURL؟",
        "a": "نحن نستخدم شبكة CDN موزعة عالمياً ذات توافر عالٍ. يتم نسخ الصور عبر خوادم طرفية متعددة لضمان بقاء روابطك دائمة وموثوقة."
      }
    ],
    "ctaTitle": "حافظ على خفة مستودعاتك وتألق ملفات README",
    "ctaBody": "ارفع لقطات الشاشة والرسوم التخطيطية للحصول على روابط دائمة جاهزة لـ Markdown دون أي تضخم في المستودع.",
    "ctaButton": "ارفع الآن"
  },
  "fa": {
    "metaTitle": "میزبانی تصویر برای فایل‌های README گیت‌هاب | ImageToURL",
    "metaDescription": "تصاویر خود را برای فایل‌های README گیت‌هاب با لینک‌های دائمی میزبانی کنید. با حذف فایل‌های باینری از مخزن خود، سرعت کلون را افزایش داده و تاریخچه پروژه را تمیز نگه دارید.",
    "schemaName": "ImageToURL",
    "schemaDescription": "ابزاری برای میزبانی تصاویر فایل‌های README گیت‌هاب با لینک‌های دائمی جهت جلوگیری از حجیم شدن مخزن.",
    "badge": "ابزارهای توسعه‌دهنده",
    "h1Pre": "میزبانی تصویر برای",
    "h1Highlight": "فایل‌های README گیت‌هاب.",
    "intro": "از قرار دادن تصاویر باینری در مخازن خود دست بردارید. آن‌ها را در ImageToURL آپلود کنید، یک لینک دائمی بگیرید و مخازن خود را سبک و سرعت کلون را بالا نگه دارید.",
    "howTitle": "نحوه استفاده در Markdown",
    "steps": [
      {
        "title": "تصویر خود را آپلود کنید",
        "body": "اسکرین‌شات یا نمودار خود را بکشید و در آپلودر ما رها کنید تا بلافاصله یک لینک دائمی مبتنی بر CDN دریافت کنید."
      },
      {
        "title": "لینک را کپی کنید",
        "body": "پس از تکمیل آپلود، لینک تولید شده را برای استفاده در هر فایل Markdown کپی کنید."
      },
      {
        "title": "در README جای‌گذاری کنید",
        "body": "از سینتکس استاندارد Markdown مانند ![Alt text](url) استفاده کنید تا تصویر خود را مستقیماً در GitHub README نمایش دهید."
      }
    ],
    "whyTitle": "چرا نباید تصاویر را در مخازن Commit کرد",
    "whyItems": [
      {
        "title": "مخزن شما را حجیم می‌کند",
        "body": "گیت تمام نسخه‌های هر فایل را ردیابی می‌کند. تصاویر باینری قابل فشرده‌سازی دلتا نیستند و باعث می‌شوند حجم پوشه .git شما به شدت افزایش یابد."
      },
      {
        "title": "سرعت کلون را کاهش می‌دهد",
        "body": "هر git clone کل تاریخچه را دانلود می‌کند. فایل‌های تصویری بزرگ باعث می‌شوند مشارکت‌کنندگان برای شروع کار، دقایق زیادی منتظر بمانند."
      },
      {
        "title": "باعث شلوغی Diffs می‌شود",
        "body": "فایل‌های باینری باعث ایجاد نویز در Pull Requestها می‌شوند و نمی‌توان آن‌ها را به درستی بررسی کرد، که این امر پیگیری تغییرات واقعی کد را دشوار می‌کند."
      }
    ],
    "faqTitle": "سوالات متداول",
    "faqs": [
      {
        "q": "چرا نباید تصاویر را مستقیماً در مخزن گیت‌هاب خود Commit کنم؟",
        "a": "گیت تمام نسخه‌های هر فایل را ردیابی می‌کند. فایل‌های تصویری باینری قابل مقایسه (diff) نیستند، بنابراین هر تغییر، حجم کامل فایل را به تاریخچه مخزن شما اضافه کرده و دایرکتوری .git را حجیم می‌کند."
      },
      {
        "q": "چگونه یک تصویر میزبانی شده خارجی را به GitHub README اضافه کنم؟",
        "a": "تصویر خود را در ImageToURL آپلود کنید، لینک دائمی را کپی کنید و سپس با استفاده از سینتکس استاندارد Markdown آن را به README خود اضافه کنید: ![Alt text](https://your-image-url)."
      },
      {
        "q": "آیا تصاویر در مخازن خصوصی هم بارگذاری می‌شوند؟",
        "a": "بله. از آنجایی که تصاویر به صورت خارجی روی CDN ما میزبانی می‌شوند، مستقل از کنترل‌های دسترسی گیت‌هاب بارگذاری شده و در مخازن عمومی و خصوصی به خوبی کار می‌کنند."
      },
      {
        "q": "آیا لینک‌های ImageToURL در ویکی‌ها و Issues گیت‌هاب کار می‌کنند؟",
        "a": "قطعاً. لینک‌های ImageToURL در هر جایی که گیت‌هاب Markdown را رندر می‌کند، از جمله صفحات ویکی، نظرات Issues و توضیحات Pull Request کار می‌کنند."
      },
      {
        "q": "اگر ImageToURL از دسترس خارج شود چه اتفاقی می‌افتد؟",
        "a": "ما از یک CDN توزیع‌شده جهانی با در دسترس بودن بالا استفاده می‌کنیم. تصاویر در چندین سرور لبه (edge server) کپی می‌شوند تا اطمینان حاصل شود که لینک‌های شما دائمی و قابل اعتماد باقی می‌مانند."
      }
    ],
    "ctaTitle": "مخازن خود را سبک و READMEهای خود را حرفه‌ای نگه دارید",
    "ctaBody": "اسکرین‌شات‌ها و نمودارها را آپلود کنید تا لینک‌های دائمی آماده برای Markdown بدون هیچ‌گونه حجیم‌سازی مخزن دریافت کنید.",
    "ctaButton": "همین حالا آپلود کنید"
  },
  "ur": {
    "metaTitle": "GitHub README فائلوں کے لیے امیج ہوسٹنگ | ImageToURL",
    "metaDescription": "مستقل URLs کے ساتھ GitHub README فائلوں کے لیے تصاویر ہوسٹ کریں۔ اپنی ریپوزٹری میں بائنری فائلیں شامل کرنا بند کریں تاکہ کلوننگ تیز ہو اور پروجیکٹ ہسٹری صاف رہے۔",
    "schemaName": "ImageToURL",
    "schemaDescription": "GitHub README فائلوں کے لیے مستقل URLs کے ساتھ تصاویر ہوسٹ کرنے کا ایک ٹول تاکہ ریپوزٹری کا سائز نہ بڑھے۔",
    "badge": "ڈویلپر ٹولز",
    "h1Pre": "GitHub کے لیے امیج ہوسٹنگ",
    "h1Highlight": "README فائلیں۔",
    "intro": "اپنی ریپوزٹریز میں بائنری تصاویر شامل کرنا بند کریں۔ ImageToURL پر اپ لوڈ کریں، ایک مستقل URL حاصل کریں، اور اپنی ریپوزٹریز کو ہلکا اور کلوننگ کو تیز رکھیں۔",
    "howTitle": "Markdown میں کیسے استعمال کریں",
    "steps": [
      {
        "title": "اپنی تصویر اپ لوڈ کریں",
        "body": "اپنے اسکرین شاٹ یا ڈایاگرام کو ہمارے اپ لوڈر میں ڈریگ اینڈ ڈراپ کریں تاکہ فوری طور پر ایک مستقل، CDN-بیکڈ URL حاصل کر سکیں۔"
      },
      {
        "title": "URL کاپی کریں",
        "body": "اپ لوڈ مکمل ہونے کے بعد، تیار کردہ لنک کو اپنے کلپ بورڈ پر کاپی کریں تاکہ کسی بھی Markdown فائل میں استعمال کر سکیں۔"
      },
      {
        "title": "README میں پیسٹ کریں",
        "body": "اپنی تصویر کو براہ راست اپنے GitHub README میں دکھانے کے لیے معیاری Markdown نحو جیسے ![Alt text](url) کا استعمال کریں۔"
      }
    ],
    "whyTitle": "تصاویر کو ریپوزٹری میں کیوں شامل نہ کریں",
    "whyItems": [
      {
        "title": "ریپوزٹری کا سائز بڑھاتا ہے",
        "body": "Git ہر فائل کے ہر ورژن کو ٹریک کرتا ہے۔ بائنری تصاویر کو ڈیلٹا کمپریس نہیں کیا جا سکتا، جس سے آپ کے .git فولڈر کا سائز بہت بڑھ جاتا ہے۔"
      },
      {
        "title": "کلوننگ کو سست کرتا ہے",
        "body": "ہر git clone پوری ہسٹری ڈاؤن لوڈ کرتا ہے۔ بڑی تصویری فائلیں تعاون کرنے والوں کو کام شروع کرنے کے لیے منٹوں انتظار کرنے پر مجبور کرتی ہیں۔"
      },
      {
        "title": "Diffs کو الجھا دیتا ہے",
        "body": "بائنری فائلیں پل ریکویسٹس میں شور پیدا کرتی ہیں اور ان کا بامعنی جائزہ نہیں لیا جا سکتا، جس سے کوڈ میں ہونے والی اصل تبدیلیوں کو ٹریک کرنا مشکل ہو جاتا ہے۔"
      }
    ],
    "faqTitle": "اکثر پوچھے گئے سوالات",
    "faqs": [
      {
        "q": "مجھے تصاویر براہ راست اپنی GitHub ریپوزٹری میں کیوں شامل نہیں کرنی چاہئیں؟",
        "a": "Git ہر فائل کے ہر ورژن کو ٹریک کرتا ہے۔ بائنری تصویری فائلوں کا مؤثر طریقے سے موازنہ (diff) نہیں کیا جا سکتا، اس لیے ہر تبدیلی آپ کی ریپوزٹری ہسٹری میں فائل کا پورا سائز شامل کر دیتی ہے، جس سے آپ کی .git ڈائریکٹری کا سائز بڑھ جاتا ہے۔"
      },
      {
        "q": "میں GitHub README میں بیرونی طور پر ہوسٹ کردہ تصویر کیسے شامل کروں؟",
        "a": "اپنی تصویر کو ImageToURL پر اپ لوڈ کریں، مستقل URL کاپی کریں، اور پھر اسے معیاری Markdown نحو کا استعمال کرتے ہوئے اپنے README میں شامل کریں: ![Alt text](https://your-image-url)۔"
      },
      {
        "q": "کیا تصاویر نجی (private) ریپوزٹریز پر بھی لوڈ ہوں گی؟",
        "a": "جی ہاں۔ چونکہ تصاویر ہمارے CDN پر بیرونی طور پر ہوسٹ کی جاتی ہیں، اس لیے وہ GitHub کے ایکسس کنٹرولز سے آزادانہ طور پر لوڈ ہوتی ہیں، اور عوامی اور نجی دونوں ریپوزٹریز میں بالکل کام کرتی ہیں۔"
      },
      {
        "q": "کیا ImageToURL کے لنکس GitHub وکی اور ایشوز میں کام کرتے ہیں؟",
        "a": "بالکل۔ ImageToURL کے لنکس وہاں کام کرتے ہیں جہاں GitHub Markdown رینڈر کرتا ہے، بشمول وکی صفحات، ایشو کمنٹس، اور پل ریکویسٹ کی تفصیلات۔"
      },
      {
        "q": "اگر ImageToURL ڈاؤن ہو جائے تو کیا ہوگا؟",
        "a": "ہم ہائی اویلیبلٹی کے ساتھ عالمی سطح پر تقسیم شدہ CDN استعمال کرتے ہیں۔ تصاویر کو متعدد ایج سرورز پر ریپلیکیٹ کیا جاتا ہے تاکہ یہ یقینی بنایا جا سکے کہ آپ کے URLs مستقل اور قابل اعتماد رہیں۔"
      }
    ],
    "ctaTitle": "اپنی ریپوزٹریز کو ہلکا اور READMEs کو بہترین رکھیں",
    "ctaBody": "اسکرین شاٹس اور ڈایاگرام اپ لوڈ کریں تاکہ ریپوزٹری کو بھاری کیے بغیر مستقل Markdown-تیار URLs حاصل کر سکیں۔",
    "ctaButton": "ابھی اپ لوڈ کریں"
  },
  "ru": {
    "metaTitle": "Хостинг изображений для GitHub README | ImageToURL",
    "metaDescription": "Размещайте изображения для GitHub README с постоянными URL. Перестаньте добавлять бинарные файлы в репозиторий для ускорения клонирования и чистоты истории проекта.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Инструмент для размещения изображений для GitHub README с постоянными URL, чтобы избежать раздувания репозитория.",
    "badge": "ИНСТРУМЕНТЫ РАЗРАБОТЧИКА",
    "h1Pre": "Хостинг изображений для GitHub",
    "h1Highlight": "README файлов.",
    "intro": "Перестаньте добавлять бинарные изображения в свои репозитории. Загружайте их в ImageToURL, получайте постоянный URL и сохраняйте свои репозитории легкими, а клонирование — быстрым.",
    "howTitle": "Как использовать в Markdown",
    "steps": [
      {
        "title": "Загрузите изображение",
        "body": "Перетащите скриншот или диаграмму в наш загрузчик, чтобы мгновенно получить постоянный URL через CDN."
      },
      {
        "title": "Скопируйте URL",
        "body": "После завершения загрузки скопируйте полученную ссылку в буфер обмена для использования в любом Markdown-файле."
      },
      {
        "title": "Вставьте в README",
        "body": "Используйте стандартный синтаксис Markdown, например ![Alt text](url), чтобы отобразить изображение прямо в вашем GitHub README."
      }
    ],
    "whyTitle": "Почему не стоит добавлять изображения в репозитории",
    "whyItems": [
      {
        "title": "Раздувает репозиторий",
        "body": "Git отслеживает каждую версию каждого файла. Бинарные изображения нельзя сжать с помощью дельта-сжатия, из-за чего папка .git стремительно увеличивается в размере."
      },
      {
        "title": "Замедляет клонирование",
        "body": "Каждый git clone загружает всю историю. Большие файлы изображений заставляют участников ждать минутами, прежде чем они смогут начать работу."
      },
      {
        "title": "Засоряет diff-ы",
        "body": "Бинарные файлы создают шум в pull request-ах и их невозможно полноценно просмотреть, что затрудняет отслеживание реальных изменений в коде."
      }
    ],
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Почему не стоит добавлять изображения напрямую в репозиторий GitHub?",
        "a": "Git отслеживает каждую версию каждого файла. Бинарные файлы изображений нельзя эффективно сравнивать (diff), поэтому каждое изменение добавляет полный размер файла в историю репозитория, раздувая директорию .git."
      },
      {
        "q": "Как добавить внешнее изображение в GitHub README?",
        "a": "Загрузите изображение в ImageToURL, скопируйте постоянный URL, затем добавьте его в README, используя стандартный синтаксис Markdown: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Будут ли изображения загружаться в приватных репозиториях?",
        "a": "Да. Поскольку изображения размещаются на нашем CDN, они загружаются независимо от прав доступа GitHub и отлично работают как в публичных, так и в приватных репозиториях."
      },
      {
        "q": "Работают ли ссылки ImageToURL в GitHub wiki и issues?",
        "a": "Безусловно. Ссылки ImageToURL работают везде, где GitHub отображает Markdown, включая страницы wiki, комментарии к issue и описания pull request-ов."
      },
      {
        "q": "Что произойдет, если ImageToURL перестанет работать?",
        "a": "Мы используем глобально распределенную сеть CDN с высокой доступностью. Изображения реплицируются на нескольких пограничных серверах, чтобы гарантировать, что ваши URL останутся постоянными и надежными."
      }
    ],
    "ctaTitle": "Сохраняйте репозитории легкими, а README — аккуратными",
    "ctaBody": "Загружайте скриншоты и диаграммы, чтобы получить постоянные ссылки для Markdown без раздувания репозитория.",
    "ctaButton": "Загрузить сейчас"
  },
  "th": {
    "metaTitle": "บริการโฮสต์รูปภาพสำหรับ GitHub README | ImageToURL",
    "metaDescription": "โฮสต์รูปภาพสำหรับไฟล์ GitHub README ด้วย URL ถาวร เลิกคอมมิตไฟล์ไบนารีลงใน repo เพื่อให้การ clone รวดเร็วและประวัติโปรเจกต์สะอาดตา",
    "schemaName": "ImageToURL",
    "schemaDescription": "เครื่องมือสำหรับโฮสต์รูปภาพสำหรับไฟล์ GitHub README ด้วย URL ถาวร เพื่อป้องกันไม่ให้ repository มีขนาดใหญ่เกินไป",
    "badge": "เครื่องมือสำหรับนักพัฒนา",
    "h1Pre": "บริการโฮสต์รูปภาพสำหรับ GitHub",
    "h1Highlight": "ไฟล์ README",
    "intro": "หยุดคอมมิตไฟล์รูปภาพไบนารีลงใน repo ของคุณ อัปโหลดไปยัง ImageToURL รับ URL ถาวร และรักษา repository ของคุณให้เบาและ clone ได้รวดเร็ว",
    "howTitle": "วิธีใช้งานใน Markdown",
    "steps": [
      {
        "title": "อัปโหลดรูปภาพของคุณ",
        "body": "ลากและวางภาพหน้าจอหรือแผนภาพของคุณลงในตัวอัปโหลดเพื่อรับ URL ถาวรที่รองรับโดย CDN ได้ทันที"
      },
      {
        "title": "คัดลอก URL",
        "body": "เมื่อการอัปโหลดเสร็จสิ้น ให้คัดลอกลิงก์ที่สร้างขึ้นไปยังคลิปบอร์ดเพื่อนำไปใช้ในไฟล์ Markdown ใดก็ได้"
      },
      {
        "title": "วางลงใน README",
        "body": "ใช้ไวยากรณ์ Markdown มาตรฐาน เช่น ![Alt text](url) เพื่อแสดงรูปภาพของคุณโดยตรงใน GitHub README"
      }
    ],
    "whyTitle": "ทำไมไม่ควรคอมมิตรูปภาพลงใน Repos",
    "whyItems": [
      {
        "title": "ทำให้ Repository ของคุณบวม",
        "body": "Git ติดตามทุกเวอร์ชันของทุกไฟล์ ไฟล์รูปภาพไบนารีไม่สามารถบีบอัดแบบ delta ได้ ทำให้โฟลเดอร์ .git ของคุณมีขนาดใหญ่ขึ้นเรื่อยๆ"
      },
      {
        "title": "ทำให้การ Clone ช้าลง",
        "body": "การ git clone ทุกครั้งจะดาวน์โหลดประวัติทั้งหมด ไฟล์รูปภาพขนาดใหญ่ทำให้ผู้ร่วมพัฒนาต้องรอหลายนาทีกว่าจะเริ่มทำงานได้"
      },
      {
        "title": "ทำให้ Diffs รก",
        "body": "ไฟล์ไบนารีเพิ่มความวุ่นวายให้กับ pull requests และไม่สามารถตรวจสอบได้อย่างมีความหมาย ทำให้ติดตามการเปลี่ยนแปลงของโค้ดจริงได้ยากขึ้น"
      }
    ],
    "faqTitle": "คำถามที่พบบ่อย",
    "faqs": [
      {
        "q": "ทำไมฉันไม่ควรคอมมิตรูปภาพลงใน GitHub repo โดยตรง?",
        "a": "Git ติดตามทุกเวอร์ชันของทุกไฟล์ ไฟล์รูปภาพไบนารีไม่สามารถเปรียบเทียบความแตกต่าง (diff) ได้อย่างมีประสิทธิภาพ ดังนั้นทุกการเปลี่ยนแปลงจะเพิ่มขนาดไฟล์เต็มลงในประวัติ repo ของคุณ ทำให้ไดเรกทอรี .git บวม"
      },
      {
        "q": "ฉันจะเพิ่มรูปภาพที่โฮสต์ภายนอกลงใน GitHub README ได้อย่างไร?",
        "a": "อัปโหลดรูปภาพของคุณไปยัง ImageToURL คัดลอก URL ถาวร จากนั้นเพิ่มลงใน README ของคุณโดยใช้ไวยากรณ์ Markdown มาตรฐาน: ![Alt text](https://your-image-url)"
      },
      {
        "q": "รูปภาพจะโหลดใน private repositories ด้วยหรือไม่?",
        "a": "ใช่ เนื่องจากรูปภาพถูกโฮสต์ภายนอกบน CDN ของเรา จึงโหลดแยกต่างหากจากการควบคุมการเข้าถึงของ GitHub ทำให้ใช้งานได้ดีทั้งใน repo สาธารณะและส่วนตัว"
      },
      {
        "q": "ลิงก์ ImageToURL ใช้ใน GitHub wikis และ issues ได้หรือไม่?",
        "a": "ได้แน่นอน ลิงก์ ImageToURL ใช้งานได้ทุกที่ที่ GitHub แสดงผล Markdown รวมถึงหน้า wiki, ความคิดเห็นใน issue และคำอธิบาย pull request"
      },
      {
        "q": "จะเกิดอะไรขึ้นหาก ImageToURL ใช้งานไม่ได้?",
        "a": "เราใช้ CDN ที่กระจายอยู่ทั่วโลกพร้อมความพร้อมใช้งานสูง รูปภาพจะถูกจำลองไปยังเซิร์ฟเวอร์ edge หลายแห่งเพื่อให้แน่ใจว่า URL ของคุณยังคงถาวรและเชื่อถือได้"
      }
    ],
    "ctaTitle": "รักษา repo ของคุณให้เบาและ README ของคุณให้คมชัด",
    "ctaBody": "อัปโหลดภาพหน้าจอและแผนภาพเพื่อรับ URL ถาวรที่พร้อมใช้งานใน Markdown โดยไม่มีปัญหา repo บวม",
    "ctaButton": "อัปโหลดเลย"
  },
  "ko": {
    "metaTitle": "GitHub README 파일용 이미지 호스팅 | ImageToURL",
    "metaDescription": "영구적인 URL로 GitHub README용 이미지를 호스팅하세요. 바이너리 파일을 리포지토리에 커밋하지 않아 더 빠른 클론과 깔끔한 프로젝트 기록을 유지할 수 있습니다.",
    "schemaName": "ImageToURL",
    "schemaDescription": "리포지토리 비대화를 방지하기 위해 영구적인 URL로 GitHub README용 이미지를 호스팅하는 도구입니다.",
    "badge": "개발자 도구",
    "h1Pre": "GitHub README 파일을 위한",
    "h1Highlight": "이미지 호스팅.",
    "intro": "바이너리 이미지를 리포지토리에 커밋하지 마세요. ImageToURL에 업로드하여 영구적인 URL을 받고, 리포지토리를 가볍게 유지하며 클론 속도를 높이세요.",
    "howTitle": "Markdown에서 사용하는 방법",
    "steps": [
      {
        "title": "이미지 업로드",
        "body": "스크린샷이나 다이어그램을 업로더에 드래그 앤 드롭하여 CDN 기반의 영구적인 URL을 즉시 받으세요."
      },
      {
        "title": "URL 복사",
        "body": "업로드가 완료되면 생성된 링크를 클립보드에 복사하여 모든 Markdown 파일에서 사용하세요."
      },
      {
        "title": "README에 붙여넣기",
        "body": "![Alt text](url)과 같은 표준 Markdown 구문을 사용하여 GitHub README에 이미지를 직접 표시하세요."
      }
    ],
    "whyTitle": "이미지를 리포지토리에 커밋하면 안 되는 이유",
    "whyItems": [
      {
        "title": "리포지토리 비대화",
        "body": "Git은 모든 파일의 모든 버전을 추적합니다. 바이너리 이미지는 델타 압축이 불가능하여 .git 폴더의 크기를 급격히 증가시킵니다."
      },
      {
        "title": "클론 속도 저하",
        "body": "git clone을 할 때마다 전체 기록을 다운로드합니다. 대용량 이미지 파일은 기여자가 작업을 시작하기까지 몇 분씩 기다리게 만듭니다."
      },
      {
        "title": "Diff의 복잡성 증가",
        "body": "바이너리 파일은 풀 리퀘스트에 불필요한 노이즈를 추가하며 의미 있는 검토가 불가능하여 실제 코드 변경 사항을 추적하기 어렵게 만듭니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "왜 이미지를 GitHub 리포지토리에 직접 커밋하면 안 되나요?",
        "a": "Git은 모든 파일의 모든 버전을 추적합니다. 바이너리 이미지 파일은 효율적인 diff가 불가능하므로, 변경할 때마다 전체 파일 크기가 리포지토리 기록에 추가되어 .git 디렉토리가 비대해집니다."
      },
      {
        "q": "외부 호스팅 이미지를 GitHub README에 어떻게 추가하나요?",
        "a": "이미지를 ImageToURL에 업로드하고 영구적인 URL을 복사한 다음, 표준 Markdown 구문인 ![Alt text](https://your-image-url)을 사용하여 README에 추가하세요."
      },
      {
        "q": "비공개 리포지토리에서도 이미지가 로드되나요?",
        "a": "네. 이미지는 당사의 CDN에 외부 호스팅되므로 GitHub의 액세스 제어와 독립적으로 로드되며, 공개 및 비공개 리포지토리 모두에서 완벽하게 작동합니다."
      },
      {
        "q": "ImageToURL 링크는 GitHub 위키와 이슈에서도 작동하나요?",
        "a": "물론입니다. ImageToURL 링크는 위키 페이지, 이슈 댓글, 풀 리퀘스트 설명을 포함하여 GitHub에서 Markdown이 렌더링되는 모든 곳에서 작동합니다."
      },
      {
        "q": "ImageToURL 서비스가 중단되면 어떻게 되나요?",
        "a": "당사는 고가용성을 갖춘 글로벌 분산 CDN을 사용합니다. 이미지는 여러 엣지 서버에 복제되어 URL이 영구적이고 안정적으로 유지되도록 보장합니다."
      }
    ],
    "ctaTitle": "리포지토리는 가볍게, README는 깔끔하게",
    "ctaBody": "스크린샷과 다이어그램을 업로드하여 리포지토리 비대화 없이 Markdown용 영구 URL을 받으세요.",
    "ctaButton": "지금 업로드하기"
  },
  "sw": {
    "metaTitle": "Uhifadhi wa Picha kwa Faili za GitHub README | ImageToURL",
    "metaDescription": "Hifadhi picha kwa ajili ya faili za GitHub README ukitumia URL za kudumu. Acha kuweka faili za binary kwenye repo yako ili kupata clones za haraka na historia safi ya mradi.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Zana ya kuhifadhi picha kwa ajili ya faili za GitHub README ukitumia URL za kudumu ili kuzuia repo kuwa nzito.",
    "badge": "ZANA ZA WATENGENEZAJI",
    "h1Pre": "Uhifadhi wa Picha kwa ajili ya GitHub",
    "h1Highlight": "faili za README.",
    "intro": "Acha kuweka picha za binary kwenye repo zako. Pakia kwenye ImageToURL, pata URL ya kudumu, na uweke hazina zako zikiwa nyepesi na clones zako zikiwa za haraka.",
    "howTitle": "Jinsi ya Kutumia katika Markdown",
    "steps": [
      {
        "title": "Pakia Picha Yako",
        "body": "Buruta na udondoshe picha yako ya skrini au mchoro kwenye kipakiaji chetu ili kupata URL ya kudumu inayoungwa mkono na CDN papo hapo."
      },
      {
        "title": "Nakili URL",
        "body": "Baada ya upakiaji kukamilika, nakili kiungo kilichotengenezwa kwenye ubao wako wa kunakili ili utumie katika faili yoyote ya Markdown."
      },
      {
        "title": "Bandika kwenye README",
        "body": "Tumia sintaksia ya kawaida ya Markdown kama ![Alt text](url) ili kuonyesha picha yako moja kwa moja kwenye GitHub README yako."
      }
    ],
    "whyTitle": "Kwa nini Usiweke Picha kwenye Repos",
    "whyItems": [
      {
        "title": "Hufanya Hazina Yako Kuwa Nzito",
        "body": "Git hufuatilia kila toleo la kila faili. Picha za binary haziwezi kubanwa kwa delta, jambo linalosababisha folda yako ya .git kuongezeka kwa ukubwa."
      },
      {
        "title": "Hupunguza Kasi ya Clones",
        "body": "Kila git clone hupakua historia nzima. Faili kubwa za picha huwalazimisha wachangiaji kusubiri dakika nyingi ili kuanza kazi."
      },
      {
        "title": "Huchanganya Diffs Zako",
        "body": "Faili za binary huongeza kelele kwenye maombi ya kuvuta (pull requests) na haziwezi kukaguliwa kwa maana, jambo linalofanya iwe vigumu kufuatilia mabadiliko halisi ya msimbo."
      }
    ],
    "faqTitle": "Maswali Yanayoulizwa Mara kwa Mara",
    "faqs": [
      {
        "q": "Kwa nini nisipakie picha moja kwa moja kwenye GitHub repo yangu?",
        "a": "Git hufuatilia kila toleo la kila faili. Faili za picha za binary haziwezi kulinganishwa kwa ufanisi, kwa hivyo kila mabadiliko huongeza ukubwa kamili wa faili kwenye historia ya repo yako, na kuifanya folda yako ya .git kuwa nzito."
      },
      {
        "q": "Ninawezaje kuongeza picha iliyohifadhiwa nje kwenye GitHub README?",
        "a": "Pakia picha yako kwenye ImageToURL, nakili URL ya kudumu, kisha uiongeze kwenye README yako kwa kutumia sintaksia ya kawaida ya Markdown: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Je, picha zitapakia kwenye hazina za faragha pia?",
        "a": "Ndiyo. Kwa kuwa picha zinahifadhiwa nje kwenye CDN yetu, zinapakia bila kutegemea vidhibiti vya ufikiaji vya GitHub, na zinafanya kazi kikamilifu katika repo za umma na za faragha."
      },
      {
        "q": "Je, viungo vya ImageToURL hufanya kazi kwenye wiki na masuala ya GitHub?",
        "a": "Bila shaka. Viungo vya ImageToURL hufanya kazi popote GitHub inapoonyesha Markdown, ikiwa ni pamoja na kurasa za wiki, maoni ya masuala, na maelezo ya maombi ya kuvuta."
      },
      {
        "q": "Nini kitatokea ikiwa ImageToURL itashindwa kufanya kazi?",
        "a": "Tunatumia CDN iliyosambazwa kimataifa yenye upatikanaji wa juu. Picha hurudiwa kwenye seva nyingi za pembeni ili kuhakikisha URL zako zinabaki kuwa za kudumu na za kutegemewa."
      }
    ],
    "ctaTitle": "Weka hazina zako zikiwa nyepesi na README zako zikiwa safi",
    "ctaBody": "Pakia picha za skrini na michoro ili kupata URL za kudumu tayari kwa Markdown bila uzito wowote kwenye repo.",
    "ctaButton": "Pakia Sasa"
  },
  "ms": {
    "metaTitle": "Hos Imej untuk Fail README GitHub | ImageToURL",
    "metaDescription": "Hos imej untuk fail README GitHub dengan URL kekal. Berhenti memuat naik fail binari ke repo anda untuk klon yang lebih pantas dan sejarah projek yang lebih bersih.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Alat untuk mengehos imej bagi fail README GitHub dengan URL kekal bagi mengelakkan repo menjadi berat.",
    "badge": "ALAT PEMBANGUN",
    "h1Pre": "Hos Imej untuk",
    "h1Highlight": "fail README GitHub.",
    "intro": "Berhenti memuat naik imej binari ke repo anda. Muat naik ke ImageToURL, dapatkan URL kekal, dan pastikan repositori anda ringan serta klon anda pantas.",
    "howTitle": "Cara Menggunakan dalam Markdown",
    "steps": [
      {
        "title": "Muat Naik Imej Anda",
        "body": "Seret dan lepas tangkapan skrin atau gambar rajah anda ke dalam pemuat naik kami untuk mendapatkan URL kekal yang disokong oleh CDN dengan serta-merta."
      },
      {
        "title": "Salin URL",
        "body": "Setelah muat naik selesai, salin pautan yang dijana ke papan keratan anda untuk digunakan dalam mana-mana fail Markdown."
      },
      {
        "title": "Tampal ke dalam README",
        "body": "Gunakan sintaks Markdown standard seperti ![Alt text](url) untuk memaparkan imej anda secara terus dalam README GitHub anda."
      }
    ],
    "whyTitle": "Mengapa Tidak Perlu Memuat Naik Imej ke Repo",
    "whyItems": [
      {
        "title": "Membesarkan Saiz Repositori",
        "body": "Git menjejaki setiap versi bagi setiap fail. Imej binari tidak boleh dimampatkan secara delta, menyebabkan folder .git anda menjadi terlalu besar."
      },
      {
        "title": "Melambatkan Proses Klon",
        "body": "Setiap git clone memuat turun keseluruhan sejarah. Fail imej yang besar memaksa penyumbang menunggu lama hanya untuk bermula."
      },
      {
        "title": "Mengganggu Diffs Anda",
        "body": "Fail binari menambah kekacauan pada pull request dan tidak boleh disemak dengan berkesan, menjadikannya sukar untuk menjejaki perubahan kod yang sebenar."
      }
    ],
    "faqTitle": "Soalan Lazim",
    "faqs": [
      {
        "q": "Mengapa saya tidak patut memuat naik imej secara terus ke repo GitHub saya?",
        "a": "Git menjejaki setiap versi bagi setiap fail. Fail imej binari tidak boleh disemak perbezaannya (diff) dengan cekap, jadi setiap perubahan menambah saiz fail penuh ke dalam sejarah repo anda, yang membesarkan direktori .git anda."
      },
      {
        "q": "Bagaimanakah cara saya menambah imej yang dihoskan secara luaran ke README GitHub?",
        "a": "Muat naik imej anda ke ImageToURL, salin URL kekal, kemudian tambahkannya ke README anda menggunakan sintaks Markdown standard: ![Alt text](https://your-image-url)."
      },
      {
        "q": "Adakah imej akan dimuatkan pada repositori peribadi juga?",
        "a": "Ya. Memandangkan imej dihoskan secara luaran pada CDN kami, ia dimuatkan secara bebas daripada kawalan akses GitHub, berfungsi dengan sempurna dalam repo awam dan peribadi."
      },
      {
        "q": "Adakah pautan ImageToURL berfungsi dalam wiki dan isu GitHub?",
        "a": "Sudah tentu. Pautan ImageToURL berfungsi di mana-mana sahaja GitHub memaparkan Markdown, termasuk halaman wiki, komen isu, dan deskripsi pull request."
      },
      {
        "q": "Apa yang berlaku jika ImageToURL tidak dapat diakses?",
        "a": "Kami menggunakan CDN yang diedarkan secara global dengan ketersediaan tinggi. Imej direplikasi merentasi berbilang pelayan edge untuk memastikan URL anda kekal dan boleh dipercayai."
      }
    ],
    "ctaTitle": "Pastikan repo anda ringan dan README anda kemas",
    "ctaBody": "Muat naik tangkapan skrin dan gambar rajah untuk mendapatkan URL sedia-Markdown yang kekal tanpa membebankan repo anda.",
    "ctaButton": "Muat Naik Sekarang"
  },
  "ta": {
    "metaTitle": "GitHub README கோப்புகளுக்கான பட ஹோஸ்டிங் | ImageToURL",
    "metaDescription": "GitHub README கோப்புகளுக்கு நிரந்தர URL-களுடன் படங்களை ஹோஸ்ட் செய்யுங்கள். உங்கள் களஞ்சியத்தில் பைனரி கோப்புகளைச் சேர்ப்பதை நிறுத்தி, வேகமான குளோன்கள் மற்றும் தெளிவான திட்ட வரலாற்றைப் பெறுங்கள்.",
    "schemaName": "ImageToURL",
    "schemaDescription": "GitHub README கோப்புகளுக்கான படங்களை நிரந்தர URL-களுடன் ஹோஸ்ட் செய்து, களஞ்சியத்தின் அளவைக் குறைக்க உதவும் ஒரு கருவி.",
    "badge": "டெவலப்பர் கருவிகள்",
    "h1Pre": "GitHub-க்கான பட ஹோஸ்டிங்",
    "h1Highlight": "README கோப்புகள்.",
    "intro": "உங்கள் களஞ்சியங்களில் பைனரி படங்களைச் சேர்ப்பதை நிறுத்துங்கள். ImageToURL-இல் பதிவேற்றி, நிரந்தர URL-ஐப் பெறுங்கள். உங்கள் களஞ்சியங்களைச் சிறியதாகவும், குளோன்களை வேகமாகவும் வைத்திருங்கள்.",
    "howTitle": "Markdown-இல் பயன்படுத்துவது எப்படி",
    "steps": [
      {
        "title": "உங்கள் படத்தை பதிவேற்றவும்",
        "body": "உங்கள் ஸ்கிரீன்ஷாட் அல்லது வரைபடத்தை எங்கள் பதிவேற்றியில் இழுத்து விடுவதன் மூலம், உடனடியாக நிரந்தரமான, CDN-ஆதரவு கொண்ட URL-ஐப் பெறுங்கள்."
      },
      {
        "title": "URL-ஐ நகலெடுக்கவும்",
        "body": "பதிவேற்றம் முடிந்ததும், உருவாக்கப்பட்ட இணைப்பை உங்கள் கிளிப்போர்டில் நகலெடுத்து, எந்த Markdown கோப்பிலும் பயன்படுத்தலாம்."
      },
      {
        "title": "README-இல் ஒட்டவும்",
        "body": "உங்கள் GitHub README-இல் படத்தை நேரடியாகக் காட்ட ![Alt text](url) போன்ற நிலையான Markdown தொடரியலைப் பயன்படுத்தவும்."
      }
    ],
    "whyTitle": "படங்களை ஏன் களஞ்சியத்தில் சேர்க்கக்கூடாது",
    "whyItems": [
      {
        "title": "களஞ்சியத்தின் அளவை அதிகரிக்கிறது",
        "body": "Git ஒவ்வொரு கோப்பின் ஒவ்வொரு பதிப்பையும் கண்காணிக்கிறது. பைனரி படங்களை டெல்டா-கம்ப்ரஸ் செய்ய முடியாது, இதனால் உங்கள் .git கோப்புறை அளவு பெரிதாகிறது."
      },
      {
        "title": "குளோனிங் வேகத்தை குறைக்கிறது",
        "body": "ஒவ்வொரு git clone-ம் முழு வரலாற்றையும் பதிவிறக்குகிறது. பெரிய படக் கோப்புகள் பங்களிப்பாளர்கள் தொடங்குவதற்கு முன்பே நீண்ட நேரம் காத்திருக்க வைக்கின்றன."
      },
      {
        "title": "Diffs-இல் குழப்பத்தை ஏற்படுத்துகிறது",
        "body": "பைனரி கோப்புகள் புல் ரெக்வெஸ்ட்களில் தேவையற்ற இரைச்சலைச் சேர்க்கின்றன மற்றும் அவற்றைச் சரியாக ஆய்வு செய்ய முடியாது, இது உண்மையான குறியீடு மாற்றங்களைக் கண்காணிப்பதைக் கடினமாக்குகிறது."
      }
    ],
    "faqTitle": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faqs": [
      {
        "q": "GitHub களஞ்சியத்தில் நேரடியாகப் படங்களை ஏன் சேர்க்கக்கூடாது?",
        "a": "Git ஒவ்வொரு கோப்பின் ஒவ்வொரு பதிப்பையும் கண்காணிக்கிறது. பைனரி படக் கோப்புகளை திறமையாக ஒப்பிட முடியாது, எனவே ஒவ்வொரு மாற்றமும் முழு கோப்பு அளவையும் உங்கள் களஞ்சிய வரலாற்றில் சேர்க்கிறது, இது .git கோப்பகத்தை வீங்கச் செய்கிறது."
      },
      {
        "q": "GitHub README-இல் வெளிப்புறமாக ஹோஸ்ட் செய்யப்பட்ட படத்தை எவ்வாறு சேர்ப்பது?",
        "a": "உங்கள் படத்தை ImageToURL-இல் பதிவேற்றி, நிரந்தர URL-ஐ நகலெடுத்து, நிலையான Markdown தொடரியலைப் பயன்படுத்தி உங்கள் README-இல் சேர்க்கவும்: ![Alt text](https://your-image-url)."
      },
      {
        "q": "தனியார் களஞ்சியங்களிலும் படங்கள் ஏற்றப்படுமா?",
        "a": "ஆம். படங்கள் எங்கள் CDN-இல் வெளிப்புறமாக ஹோஸ்ட் செய்யப்படுவதால், அவை GitHub-இன் அணுகல் கட்டுப்பாடுகளிலிருந்து சுயாதீனமாக ஏற்றப்படுகின்றன, இது பொது மற்றும் தனியார் களஞ்சியங்களில் சரியாகச் செயல்படும்."
      },
      {
        "q": "ImageToURL இணைப்புகள் GitHub விக்கிகள் மற்றும் சிக்கல்களில் (issues) செயல்படுமா?",
        "a": "நிச்சயமாக. GitHub Markdown-ஐ வழங்கும் இடங்களில், விக்கி பக்கங்கள், சிக்கல் கருத்துகள் மற்றும் புல் ரெக்வெஸ்ட் விளக்கங்கள் உட்பட அனைத்திலும் ImageToURL இணைப்புகள் செயல்படும்."
      },
      {
        "q": "ImageToURL செயலிழந்தால் என்ன நடக்கும்?",
        "a": "நாங்கள் அதிக கிடைக்கும் தன்மை கொண்ட உலகளாவிய விநியோகிக்கப்பட்ட CDN-ஐப் பயன்படுத்துகிறோம். உங்கள் URL-கள் நிரந்தரமாகவும் நம்பகமானதாகவும் இருப்பதை உறுதிசெய்ய படங்கள் பல எட்ஜ் சர்வர்களில் நகலெடுக்கப்படுகின்றன."
      }
    ],
    "ctaTitle": "உங்கள் களஞ்சியங்களைச் சிறியதாகவும், README-களைத் தெளிவாகவும் வைத்திருங்கள்",
    "ctaBody": "ஸ்கிரீன்ஷாட்கள் மற்றும் வரைபடங்களைப் பதிவேற்றி, களஞ்சிய அளவு அதிகரிக்காமல் நிரந்தரமான Markdown-க்குத் தயாரான URL-களைப் பெறுங்கள்.",
    "ctaButton": "இப்போது பதிவேற்றவும்"
  },
  "mr": {
    "metaTitle": "GitHub README फाइल्ससाठी इमेज होस्टिंग | ImageToURL",
    "metaDescription": "GitHub README फाइल्ससाठी कायमस्वरूपी URL सह इमेज होस्ट करा. रिपॉझिटरी जलद क्लोन करण्यासाठी आणि प्रोजेक्ट हिस्ट्री स्वच्छ ठेवण्यासाठी बायनरी फाइल्स कमिट करणे थांबवा.",
    "schemaName": "ImageToURL",
    "schemaDescription": "रिपॉझिटरीचा आकार वाढण्यापासून रोखण्यासाठी GitHub README फाइल्ससाठी इमेज होस्ट करण्याचे साधन.",
    "badge": "डेव्हलपर टूल्स",
    "h1Pre": "GitHub साठी इमेज होस्टिंग",
    "h1Highlight": "README फाइल्स.",
    "intro": "तुमच्या रिपॉझिटरीमध्ये बायनरी इमेजेस कमिट करणे थांबवा. ImageToURL वर अपलोड करा, कायमस्वरूपी URL मिळवा आणि तुमची रिपॉझिटरी सुटसुटीत आणि क्लोन जलद ठेवा.",
    "howTitle": "Markdown मध्ये कसे वापरावे",
    "steps": [
      {
        "title": "तुमची इमेज अपलोड करा",
        "body": "तुमचा स्क्रीनशॉट किंवा डायग्राम आमच्या अपलोडरमध्ये ड्रॅग आणि ड्रॉप करा आणि त्वरित कायमस्वरूपी, CDN-आधारित URL मिळवा."
      },
      {
        "title": "URL कॉपी करा",
        "body": "अपलोड पूर्ण झाल्यावर, कोणत्याही Markdown फाइलमध्ये वापरण्यासाठी तयार झालेली लिंक कॉपी करा."
      },
      {
        "title": "README मध्ये पेस्ट करा",
        "body": "तुमची इमेज थेट GitHub README मध्ये दाखवण्यासाठी ![Alt text](url) सारख्या मानक Markdown सिंटॅक्सचा वापर करा."
      }
    ],
    "whyTitle": "इमेजेस रिपॉझिटरीमध्ये का कमिट करू नयेत",
    "whyItems": [
      {
        "title": "रिपॉझिटरीचा आकार वाढतो",
        "body": "Git प्रत्येक फाइलची प्रत्येक आवृत्ती ट्रॅक करते. बायनरी इमेजेस डेल्टा-कॉम्प्रेस होऊ शकत नाहीत, ज्यामुळे तुमच्या .git फोल्डरचा आकार खूप वाढतो."
      },
      {
        "title": "क्लोन करणे संथ होते",
        "body": "प्रत्येक git clone संपूर्ण इतिहास डाउनलोड करते. मोठ्या इमेज फाइल्समुळे योगदानकर्त्यांना काम सुरू करण्यासाठी काही मिनिटे वाट पाहावी लागते."
      },
      {
        "title": "डिफ्स (Diffs) मध्ये गोंधळ होतो",
        "body": "बायनरी फाइल्स पुल रिक्वेस्टमध्ये अनावश्यक गोंधळ निर्माण करतात आणि त्यांचे योग्य पुनरावलोकन करता येत नाही, ज्यामुळे प्रत्यक्ष कोडमधील बदल ट्रॅक करणे कठीण होते."
      }
    ],
    "faqTitle": "वारंवार विचारले जाणारे प्रश्न",
    "faqs": [
      {
        "q": "मी माझ्या GitHub रिपॉझिटरीमध्ये थेट इमेजेस का कमिट करू नये?",
        "a": "Git प्रत्येक फाइलची प्रत्येक आवृत्ती ट्रॅक करते. बायनरी इमेज फाइल्सचे डिफ (diff) कार्यक्षमतेने काढता येत नाही, त्यामुळे प्रत्येक बदलामुळे तुमच्या रिपॉझिटरीच्या इतिहासात पूर्ण फाइलचा आकार जोडला जातो आणि तुमची .git डिरेक्टरी फुगते."
      },
      {
        "q": "GitHub README मध्ये बाह्यरित्या होस्ट केलेली इमेज कशी जोडावी?",
        "a": "तुमची इमेज ImageToURL वर अपलोड करा, कायमस्वरूपी URL कॉपी करा आणि नंतर मानक Markdown सिंटॅक्स वापरून तुमच्या README मध्ये जोडा: ![Alt text](https://your-image-url)."
      },
      {
        "q": "इमेजेस खाजगी रिपॉझिटरीमध्येही लोड होतील का?",
        "a": "हो. इमेजेस आमच्या CDN वर बाह्यरित्या होस्ट केल्या जात असल्याने, त्या GitHub च्या ॲक्सेस कंट्रोल्सपासून स्वतंत्रपणे लोड होतात आणि सार्वजनिक व खाजगी अशा दोन्ही रिपॉझिटरीमध्ये उत्तम काम करतात."
      },
      {
        "q": "ImageToURL लिंक्स GitHub विकी आणि इश्यूजमध्ये काम करतात का?",
        "a": "नक्कीच. ImageToURL लिंक्स जिथे जिथे GitHub Markdown रेंडर करते, तिथे काम करतात, ज्यात विकी पेजेस, इश्यू कमेंट्स आणि पुल रिक्वेस्ट डिस्क्रिप्शनचा समावेश आहे."
      },
      {
        "q": "जर ImageToURL डाउन झाले तर काय होईल?",
        "a": "आम्ही उच्च उपलब्धतेसह जागतिक स्तरावर वितरित CDN वापरतो. तुमच्या URL कायमस्वरूपी आणि विश्वासार्ह राहतील याची खात्री करण्यासाठी इमेजेस अनेक एज सर्व्हरवर रेप्लिकेट केल्या जातात."
      }
    ],
    "ctaTitle": "तुमच्या रिपॉझिटरी सुटसुटीत आणि READMEs प्रभावी ठेवा",
    "ctaBody": "कोणत्याही रिपॉझिटरी ब्लोटशिवाय कायमस्वरूपी Markdown-रेडी URL मिळवण्यासाठी स्क्रीनशॉट्स आणि डायग्राम अपलोड करा.",
    "ctaButton": "आता अपलोड करा"
  },
  "te": {
    "metaTitle": "GitHub README ఫైళ్ల కోసం Image Hosting | ImageToURL",
    "metaDescription": "GitHub README ఫైళ్ల కోసం పర్మనెంట్ URLలతో ఇమేజ్‌లను హోస్ట్ చేయండి. మీ రిపోలో బైనరీ ఫైళ్లను కమిట్ చేయడం ఆపివేసి, వేగవంతమైన క్లోన్‌లు మరియు క్లీనర్ ప్రాజెక్ట్ హిస్టరీని పొందండి.",
    "schemaName": "ImageToURL",
    "schemaDescription": "రిపోజిటరీ బ్లోట్‌ను నివారించడానికి GitHub README ఫైళ్ల కోసం పర్మనెంట్ URLలతో ఇమేజ్‌లను హోస్ట్ చేసే సాధనం.",
    "badge": "డెవలపర్ టూల్స్",
    "h1Pre": "GitHub కోసం ఇమేజ్ హోస్టింగ్",
    "h1Highlight": "README ఫైళ్లు.",
    "intro": "మీ రిపోలలో బైనరీ ఇమేజ్‌లను కమిట్ చేయడం ఆపండి. ImageToURLకి అప్‌లోడ్ చేయండి, పర్మనెంట్ URLని పొందండి మరియు మీ రిపోజిటరీలను తక్కువ సైజులో, క్లోన్‌లను వేగంగా ఉంచండి.",
    "howTitle": "Markdownలో ఎలా ఉపయోగించాలి",
    "steps": [
      {
        "title": "మీ ఇమేజ్‌ని అప్‌లోడ్ చేయండి",
        "body": "మీ స్క్రీన్‌షాట్ లేదా డయాగ్రామ్‌ను మా అప్‌లోడర్‌లోకి డ్రాగ్ అండ్ డ్రాప్ చేసి, వెంటనే పర్మనెంట్, CDN-ఆధారిత URLని పొందండి."
      },
      {
        "title": "URLని కాపీ చేయండి",
        "body": "అప్‌లోడ్ పూర్తయిన తర్వాత, ఏదైనా Markdown ఫైల్‌లో ఉపయోగించడానికి రూపొందించబడిన లింక్‌ను మీ క్లిప్‌బోర్డ్‌కు కాపీ చేయండి."
      },
      {
        "title": "READMEలో పేస్ట్ చేయండి",
        "body": "మీ GitHub READMEలో మీ ఇమేజ్‌ని నేరుగా ప్రదర్శించడానికి ![Alt text](url) వంటి ప్రామాణిక Markdown సింటాక్స్‌ని ఉపయోగించండి."
      }
    ],
    "whyTitle": "రిపోలలో ఇమేజ్‌లను ఎందుకు కమిట్ చేయకూడదు",
    "whyItems": [
      {
        "title": "రిపోజిటరీ సైజు పెరుగుతుంది",
        "body": "Git ప్రతి ఫైల్ యొక్క ప్రతి వెర్షన్‌ను ట్రాక్ చేస్తుంది. బైనరీ ఇమేజ్‌లను డెల్టా-కంప్రెస్ చేయలేము, దీనివల్ల మీ .git ఫోల్డర్ సైజు భారీగా పెరుగుతుంది."
      },
      {
        "title": "క్లోన్‌లు నెమ్మదిస్తాయి",
        "body": "ప్రతి git clone మొత్తం హిస్టరీని డౌన్‌లోడ్ చేస్తుంది. పెద్ద ఇమేజ్ ఫైళ్ల వల్ల డెవలపర్లు పని ప్రారంభించడానికి నిమిషాల సమయం వేచి ఉండాల్సి వస్తుంది."
      },
      {
        "title": "డిఫ్స్ (Diffs) గందరగోళంగా మారుతాయి",
        "body": "బైనరీ ఫైళ్లు పుల్ రిక్వెస్ట్‌లలో అనవసరమైన సమాచారాన్ని చేరుస్తాయి మరియు వీటిని సరిగ్గా రివ్యూ చేయలేము, దీనివల్ల అసలైన కోడ్ మార్పులను ట్రాక్ చేయడం కష్టమవుతుంది."
      }
    ],
    "faqTitle": "తరచుగా అడిగే ప్రశ్నలు",
    "faqs": [
      {
        "q": "నేను ఇమేజ్‌లను నేరుగా నా GitHub రిపోలో ఎందుకు కమిట్ చేయకూడదు?",
        "a": "Git ప్రతి ఫైల్ యొక్క ప్రతి వెర్షన్‌ను ట్రాక్ చేస్తుంది. బైనరీ ఇమేజ్ ఫైళ్లను సమర్థవంతంగా డిఫ్ (diff) చేయలేము, కాబట్టి ప్రతి మార్పు పూర్తి ఫైల్ సైజును మీ రిపో హిస్టరీకి జోడిస్తుంది, ఇది మీ .git డైరెక్టరీని భారీగా మారుస్తుంది."
      },
      {
        "q": "GitHub READMEకి బాహ్యంగా హోస్ట్ చేసిన ఇమేజ్‌ని ఎలా జోడించాలి?",
        "a": "మీ ఇమేజ్‌ని ImageToURLకి అప్‌లోడ్ చేయండి, పర్మనెంట్ URLని కాపీ చేయండి, ఆపై ప్రామాణిక Markdown సింటాక్స్‌ని ఉపయోగించి మీ READMEకి జోడించండి: ![Alt text](https://your-image-url)."
      },
      {
        "q": "ప్రైవేట్ రిపోజిటరీలలో కూడా ఇమేజ్‌లు లోడ్ అవుతాయా?",
        "a": "అవును. ఇమేజ్‌లు మా CDNలో బాహ్యంగా హోస్ట్ చేయబడతాయి కాబట్టి, అవి GitHub యాక్సెస్ కంట్రోల్స్‌తో సంబంధం లేకుండా లోడ్ అవుతాయి, ఇవి పబ్లిక్ మరియు ప్రైవేట్ రిపోలలో ఖచ్చితంగా పనిచేస్తాయి."
      },
      {
        "q": "ImageToURL లింక్‌లు GitHub వికీలు మరియు ఇష్యూలలో పనిచేస్తాయా?",
        "a": "ఖచ్చితంగా. ImageToURL లింక్‌లు వికీ పేజీలు, ఇష్యూ కామెంట్లు మరియు పుల్ రిక్వెస్ట్ డిస్క్రిప్షన్‌లతో సహా GitHubలో Markdown రెండర్ అయ్యే ఎక్కడైనా పనిచేస్తాయి."
      },
      {
        "q": "ImageToURL పని చేయకపోతే ఏమవుతుంది?",
        "a": "మేము హై-అవైలబిలిటీ ఉన్న గ్లోబల్ డిస్ట్రిబ్యూటెడ్ CDNని ఉపయోగిస్తాము. మీ URLలు పర్మనెంట్‌గా మరియు నమ్మదగినవిగా ఉండేలా ఇమేజ్‌లు బహుళ ఎడ్జ్ సర్వర్లలో రెప్లికేట్ చేయబడతాయి."
      }
    ],
    "ctaTitle": "మీ రిపోలను తక్కువ సైజులో మరియు READMEలను మెరుగ్గా ఉంచండి",
    "ctaBody": "రిపో బ్లోట్ లేకుండా పర్మనెంట్ Markdown-రెడీ URLలను పొందడానికి స్క్రీన్‌షాట్‌లు మరియు డయాగ్రామ్‌లను అప్‌లోడ్ చేయండి.",
    "ctaButton": "ఇప్పుడే అప్‌లోడ్ చేయండి"
  },
  "zh-Hant": {
    "metaTitle": "GitHub README 檔案圖片託管 | ImageToURL",
    "metaDescription": "為 GitHub README 檔案託管圖片並獲取永久連結。無需將二進位檔案提交至儲存庫，讓專案複製更快速、歷史紀錄更乾淨。",
    "schemaName": "ImageToURL",
    "schemaDescription": "一個為 GitHub README 檔案託管圖片並提供永久連結的工具，旨在防止儲存庫臃腫。",
    "badge": "開發者工具",
    "h1Pre": "GitHub",
    "h1Highlight": "README 檔案圖片託管。",
    "intro": "別再將二進位圖片提交到你的儲存庫了。上傳至 ImageToURL，獲取永久連結，保持儲存庫輕量並加快複製速度。",
    "howTitle": "如何在 Markdown 中使用",
    "steps": [
      {
        "title": "上傳你的圖片",
        "body": "將截圖或圖表拖放到我們的上傳器中，即可立即獲得由 CDN 支援的永久連結。"
      },
      {
        "title": "複製連結",
        "body": "上傳完成後，複製生成的連結到剪貼簿，即可在任何 Markdown 檔案中使用。"
      },
      {
        "title": "貼上至 README",
        "body": "使用標準 Markdown 語法如 ![Alt text](url)，即可直接在 GitHub README 中顯示圖片。"
      }
    ],
    "whyTitle": "為什麼不該將圖片提交到儲存庫",
    "whyItems": [
      {
        "title": "導致儲存庫臃腫",
        "body": "Git 會追蹤每個檔案的每個版本。二進位圖片無法進行差異壓縮，導致你的 .git 資料夾體積迅速膨脹。"
      },
      {
        "title": "拖慢複製速度",
        "body": "每次 git clone 都會下載整個歷史紀錄。大型圖片檔案會讓貢獻者需要等待數分鐘才能開始工作。"
      },
      {
        "title": "干擾差異比對 (Diffs)",
        "body": "二進位檔案會增加 Pull Request 的雜訊且無法進行有效的審查，使追蹤實際程式碼變更變得更加困難。"
      }
    ],
    "faqTitle": "常見問題",
    "faqs": [
      {
        "q": "為什麼我不應該直接將圖片提交到 GitHub 儲存庫？",
        "a": "Git 會追蹤每個檔案的每個版本。二進位圖片檔案無法有效進行差異比對，因此每次變更都會將完整的檔案大小加入儲存庫歷史中，導致 .git 目錄臃腫。"
      },
      {
        "q": "如何將外部託管的圖片加入 GitHub README？",
        "a": "將圖片上傳至 ImageToURL，複製永久連結，然後使用標準 Markdown 語法將其加入 README：![Alt text](https://your-image-url)。"
      },
      {
        "q": "圖片在私人儲存庫中也能載入嗎？",
        "a": "是的。由於圖片託管在我們的 CDN 上，它們的載入與 GitHub 的存取控制無關，在公開和私人儲存庫中皆可完美運作。"
      },
      {
        "q": "ImageToURL 的連結在 GitHub Wiki 和 Issue 中有效嗎？",
        "a": "絕對有效。ImageToURL 的連結適用於任何支援 Markdown 的 GitHub 頁面，包括 Wiki 頁面、Issue 評論以及 Pull Request 描述。"
      },
      {
        "q": "如果 ImageToURL 當機了會怎樣？",
        "a": "我們使用高可用性的全球分散式 CDN。圖片會複製到多個邊緣伺服器，確保你的連結保持永久且可靠。"
      }
    ],
    "ctaTitle": "保持儲存庫輕量，讓 README 更專業",
    "ctaBody": "上傳截圖和圖表以獲取永久的 Markdown 連結，無需擔心儲存庫臃腫。",
    "ctaButton": "立即上傳"
  }
} as LandingContentMap;
