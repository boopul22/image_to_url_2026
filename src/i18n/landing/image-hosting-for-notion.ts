import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for Notion Pages — Permanent URLs | ImageToURL",
    "metaDescription": "Notion's built-in image URLs expire on published pages. Use ImageToURL for permanent image URLs that never break in your Notion workspace.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A tool that provides permanent, reliable image URLs for Notion pages to prevent broken links on published content.",
    "badge": "NOTION USERS",
    "h1Pre": "Image Hosting for Notion",
    "h1Highlight": "that never breaks.",
    "intro": "Notion's internal image URLs expire on published pages and shared links. Upload to ImageToURL and get permanent image links that work everywhere Notion does.",
    "howTitle": "How to Fix It",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag and drop your image or click to browse. We support JPG, PNG, WebP, GIF, and SVG with no quality loss."
      },
      {
        "title": "Copy the Permanent URL",
        "body": "Your image gets a permanent URL instantly. Click to copy it to your clipboard. This URL will never expire or change."
      },
      {
        "title": "Embed in Notion",
        "body": "In Notion, type /image, choose 'Embed link', and paste the URL. Your image loads from ImageToURL and never expires."
      }
    ],
    "whyTitle": "The Notion Image Problem",
    "whyItems": [
      {
        "title": "URLs Expire Silently",
        "body": "Notion generates temporary signed URLs that expire without warning, leaving blank spaces where your images used to be."
      },
      {
        "title": "Published Pages Break",
        "body": "When you publish a Notion page to the web, images that looked fine in your workspace can stop loading for visitors."
      },
      {
        "title": "Shared Links Fail",
        "body": "Sharing a Notion page link with a client or colleague works initially, but images can expire before they view it."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why do images break on published Notion pages?",
        "a": "Notion uses temporary signed URLs with authentication tokens that expire. External hosting with permanent URLs solves this."
      },
      {
        "q": "How do I use an external image in Notion?",
        "a": "Upload to ImageToURL, copy the permanent link, then use the /image command in Notion to embed the URL."
      },
      {
        "q": "Will externally hosted images work in Notion's API?",
        "a": "Yes, external URLs are treated as 'external' type in the API, making them stable for integrations and automations."
      },
      {
        "q": "Do ImageToURL images work in Notion templates?",
        "a": "Yes, they carry over perfectly when a template is duplicated, unlike internal Notion images which can break."
      },
      {
        "q": "Can I use this for a Notion website built with Super or Fruition?",
        "a": "Absolutely. These tools render your pages as websites, and permanent URLs ensure your site's images never break."
      }
    ],
    "ctaTitle": "Fix your Notion images permanently",
    "ctaBody": "Upload an image, get a permanent URL, and embed it in Notion to ensure your content never breaks.",
    "ctaButton": "Upload Now"
  },
  "hi": {
    "metaTitle": "Notion पेजों के लिए इमेज होस्टिंग — स्थायी URLs | ImageToURL",
    "metaDescription": "Notion के इन-बिल्ट इमेज URLs पब्लिश किए गए पेजों पर एक्सपायर हो जाते हैं। अपने Notion वर्कस्पेस में कभी न टूटने वाले स्थायी इमेज URLs के लिए ImageToURL का उपयोग करें।",
    "schemaName": "ImageToURL",
    "schemaDescription": "एक टूल जो Notion पेजों के लिए स्थायी और विश्वसनीय इमेज URLs प्रदान करता है ताकि पब्लिश किए गए कंटेंट पर लिंक टूटने से बचा जा सके।",
    "badge": "NOTION उपयोगकर्ता",
    "h1Pre": "Notion के लिए इमेज होस्टिंग",
    "h1Highlight": "जो कभी नहीं टूटती।",
    "intro": "Notion के इंटरनल इमेज URLs पब्लिश किए गए पेजों और शेयर किए गए लिंक पर एक्सपायर हो जाते हैं। ImageToURL पर अपलोड करें और स्थायी इमेज लिंक प्राप्त करें जो Notion के हर जगह काम करते हैं।",
    "howTitle": "इसे कैसे ठीक करें",
    "steps": [
      {
        "title": "अपनी इमेज अपलोड करें",
        "body": "अपनी इमेज को ड्रैग और ड्रॉप करें या ब्राउज़ करने के लिए क्लिक करें। हम बिना किसी क्वालिटी लॉस के JPG, PNG, WebP, GIF और SVG को सपोर्ट करते हैं।"
      },
      {
        "title": "स्थायी URL कॉपी करें",
        "body": "आपकी इमेज को तुरंत एक स्थायी URL मिल जाता है। इसे अपने क्लिपबोर्ड पर कॉपी करने के लिए क्लिक करें। यह URL कभी एक्सपायर या चेंज नहीं होगा।"
      },
      {
        "title": "Notion में एम्बेड करें",
        "body": "Notion में, /image टाइप करें, 'Embed link' चुनें और URL पेस्ट करें। आपकी इमेज ImageToURL से लोड होती है और कभी एक्सपायर नहीं होती।"
      }
    ],
    "whyTitle": "Notion इमेज की समस्या",
    "whyItems": [
      {
        "title": "URLs चुपचाप एक्सपायर हो जाते हैं",
        "body": "Notion अस्थायी साइन्ड URLs जनरेट करता है जो बिना किसी चेतावनी के एक्सपायर हो जाते हैं, जिससे वहां खाली जगह रह जाती है जहां आपकी इमेज हुआ करती थी।"
      },
      {
        "title": "पब्लिश किए गए पेज टूट जाते हैं",
        "body": "जब आप किसी Notion पेज को वेब पर पब्लिश करते हैं, तो जो इमेज आपके वर्कस्पेस में ठीक दिख रही थीं, वे विजिटर्स के लिए लोड होना बंद हो सकती हैं।"
      },
      {
        "title": "शेयर किए गए लिंक फेल हो जाते हैं",
        "body": "किसी क्लाइंट या सहकर्मी के साथ Notion पेज का लिंक शेयर करना शुरुआत में काम करता है, लेकिन उनके देखने से पहले ही इमेज एक्सपायर हो सकती हैं।"
      }
    ],
    "faqTitle": "अक्सर पूछे जाने वाले सवाल",
    "faqs": [
      {
        "q": "पब्लिश किए गए Notion पेजों पर इमेज क्यों टूट जाती हैं?",
        "a": "Notion ऑथेंटिकेशन टोकन के साथ अस्थायी साइन्ड URLs का उपयोग करता है जो एक्सपायर हो जाते हैं। स्थायी URLs के साथ एक्सटर्नल होस्टिंग इस समस्या को हल करती है।"
      },
      {
        "q": "मैं Notion में एक्सटर्नल इमेज का उपयोग कैसे करूं?",
        "a": "ImageToURL पर अपलोड करें, स्थायी लिंक कॉपी करें, फिर URL को एम्बेड करने के लिए Notion में /image कमांड का उपयोग करें।"
      },
      {
        "q": "क्या एक्सटर्नल रूप से होस्ट की गई इमेज Notion के API में काम करेंगी?",
        "a": "हां, एक्सटर्नल URLs को API में 'external' टाइप के रूप में माना जाता है, जिससे वे इंटीग्रेशन और ऑटोमेशन के लिए स्टेबल हो जाते हैं।"
      },
      {
        "q": "क्या ImageToURL की इमेज Notion टेम्पलेट्स में काम करती हैं?",
        "a": "हां, जब कोई टेम्पलेट डुप्लिकेट किया जाता है तो वे पूरी तरह से काम करती हैं, Notion की इंटरनल इमेज के विपरीत जो टूट सकती हैं।"
      },
      {
        "q": "क्या मैं इसका उपयोग Super या Fruition के साथ बनी Notion वेबसाइट के लिए कर सकता हूं?",
        "a": "बिल्कुल। ये टूल आपके पेजों को वेबसाइट के रूप में रेंडर करते हैं, और स्थायी URLs यह सुनिश्चित करते हैं कि आपकी साइट की इमेज कभी न टूटें।"
      }
    ],
    "ctaTitle": "अपनी Notion इमेज को स्थायी रूप से ठीक करें",
    "ctaBody": "एक इमेज अपलोड करें, एक स्थायी URL प्राप्त करें, और यह सुनिश्चित करने के लिए कि आपका कंटेंट कभी न टूटे, इसे Notion में एम्बेड करें।",
    "ctaButton": "अभी अपलोड करें"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para páginas de Notion — URLs permanentes | ImageToURL",
    "metaDescription": "Las URLs de imágenes de Notion caducan en páginas publicadas. Usa ImageToURL para obtener enlaces permanentes que nunca fallan en tu espacio de trabajo de Notion.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Una herramienta que proporciona URLs de imágenes permanentes y fiables para páginas de Notion, evitando enlaces rotos en contenido publicado.",
    "badge": "USUARIOS DE NOTION",
    "h1Pre": "Alojamiento de imágenes para Notion",
    "h1Highlight": "que nunca falla.",
    "intro": "Las URLs internas de las imágenes de Notion caducan en páginas publicadas y enlaces compartidos. Súbelas a ImageToURL y obtén enlaces permanentes que funcionan dondequiera que funcione Notion.",
    "howTitle": "Cómo solucionarlo",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta tu imagen o haz clic para buscarla. Admitimos JPG, PNG, WebP, GIF y SVG sin pérdida de calidad."
      },
      {
        "title": "Copia la URL permanente",
        "body": "Tu imagen obtiene una URL permanente al instante. Haz clic para copiarla al portapapeles. Esta URL nunca caducará ni cambiará."
      },
      {
        "title": "Inserta en Notion",
        "body": "En Notion, escribe /image, elige 'Embed link' (Insertar enlace) y pega la URL. Tu imagen se cargará desde ImageToURL y nunca caducará."
      }
    ],
    "whyTitle": "El problema de las imágenes en Notion",
    "whyItems": [
      {
        "title": "Las URLs caducan silenciosamente",
        "body": "Notion genera URLs temporales firmadas que caducan sin previo aviso, dejando espacios en blanco donde solían estar tus imágenes."
      },
      {
        "title": "Las páginas publicadas se rompen",
        "body": "Cuando publicas una página de Notion en la web, las imágenes que se veían bien en tu espacio de trabajo pueden dejar de cargarse para los visitantes."
      },
      {
        "title": "Los enlaces compartidos fallan",
        "body": "Compartir un enlace de una página de Notion con un cliente o colega funciona al principio, pero las imágenes pueden caducar antes de que las vean."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué se rompen las imágenes en las páginas publicadas de Notion?",
        "a": "Notion utiliza URLs temporales firmadas con tokens de autenticación que caducan. El alojamiento externo con URLs permanentes soluciona esto."
      },
      {
        "q": "¿Cómo uso una imagen externa en Notion?",
        "a": "Súbela a ImageToURL, copia el enlace permanente y luego usa el comando /image en Notion para insertar la URL."
      },
      {
        "q": "¿Funcionarán las imágenes alojadas externamente en la API de Notion?",
        "a": "Sí, las URLs externas se tratan como tipo 'external' en la API, lo que las hace estables para integraciones y automatizaciones."
      },
      {
        "q": "¿Funcionan las imágenes de ImageToURL en las plantillas de Notion?",
        "a": "Sí, se transfieren perfectamente cuando se duplica una plantilla, a diferencia de las imágenes internas de Notion que pueden romperse."
      },
      {
        "q": "¿Puedo usar esto para un sitio web de Notion creado con Super o Fruition?",
        "a": "Absolutamente. Estas herramientas renderizan tus páginas como sitios web, y las URLs permanentes aseguran que las imágenes de tu sitio nunca fallen."
      }
    ],
    "ctaTitle": "Arregla tus imágenes de Notion de forma permanente",
    "ctaBody": "Sube una imagen, obtén una URL permanente e insértala en Notion para asegurar que tu contenido nunca se rompa.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images pour Notion — URLs permanentes | ImageToURL",
    "metaDescription": "Les URLs d'images de Notion expirent sur les pages publiées. Utilisez ImageToURL pour obtenir des liens permanents qui ne se briseront jamais dans votre espace Notion.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Un outil qui fournit des URLs d'images permanentes et fiables pour les pages Notion afin d'éviter les liens brisés sur le contenu publié.",
    "badge": "UTILISATEURS NOTION",
    "h1Pre": "Hébergement d'images pour Notion",
    "h1Highlight": "qui ne se brise jamais.",
    "intro": "Les URLs d'images internes de Notion expirent sur les pages publiées et les liens partagés. Téléchargez vos images sur ImageToURL et obtenez des liens permanents qui fonctionnent partout où Notion est utilisé.",
    "howTitle": "Comment corriger ce problème",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez votre image ou cliquez pour parcourir vos fichiers. Nous prenons en charge les formats JPG, PNG, WebP, GIF et SVG sans perte de qualité."
      },
      {
        "title": "Copiez l'URL permanente",
        "body": "Votre image obtient instantanément une URL permanente. Cliquez pour la copier dans votre presse-papiers. Cette URL n'expirera et ne changera jamais."
      },
      {
        "title": "Intégrez dans Notion",
        "body": "Dans Notion, tapez /image, choisissez 'Intégrer un lien' et collez l'URL. Votre image se chargera depuis ImageToURL et n'expirera jamais."
      }
    ],
    "whyTitle": "Le problème des images sur Notion",
    "whyItems": [
      {
        "title": "Les URLs expirent silencieusement",
        "body": "Notion génère des URLs temporaires signées qui expirent sans avertissement, laissant des espaces vides là où se trouvaient vos images."
      },
      {
        "title": "Les pages publiées se brisent",
        "body": "Lorsque vous publiez une page Notion sur le web, les images qui semblaient correctes dans votre espace de travail peuvent cesser de s'afficher pour vos visiteurs."
      },
      {
        "title": "Les liens partagés échouent",
        "body": "Partager un lien de page Notion avec un client ou un collègue fonctionne au début, mais les images peuvent expirer avant qu'ils ne les consultent."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi les images se brisent-elles sur les pages Notion publiées ?",
        "a": "Notion utilise des URLs temporaires signées avec des jetons d'authentification qui expirent. Un hébergement externe avec des URLs permanentes résout ce problème."
      },
      {
        "q": "Comment utiliser une image externe dans Notion ?",
        "a": "Téléchargez-la sur ImageToURL, copiez le lien permanent, puis utilisez la commande /image dans Notion pour intégrer l'URL."
      },
      {
        "q": "Les images hébergées en externe fonctionnent-elles avec l'API Notion ?",
        "a": "Oui, les URLs externes sont traitées comme des types 'externes' dans l'API, ce qui les rend stables pour les intégrations et les automatisations."
      },
      {
        "q": "Les images ImageToURL fonctionnent-elles dans les modèles Notion ?",
        "a": "Oui, elles sont parfaitement conservées lorsqu'un modèle est dupliqué, contrairement aux images internes de Notion qui peuvent se briser."
      },
      {
        "q": "Puis-je utiliser ceci pour un site web Notion créé avec Super ou Fruition ?",
        "a": "Absolument. Ces outils transforment vos pages en sites web, et les URLs permanentes garantissent que les images de votre site ne se briseront jamais."
      }
    ],
    "ctaTitle": "Réparez vos images Notion de façon permanente",
    "ctaBody": "Téléchargez une image, obtenez une URL permanente et intégrez-la dans Notion pour garantir que votre contenu ne se brise jamais.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bild-Hosting für Notion-Seiten — Dauerhafte URLs | ImageToURL",
    "metaDescription": "Die internen Bild-URLs von Notion laufen auf veröffentlichten Seiten ab. Nutzen Sie ImageToURL für dauerhafte Bild-URLs, die in Ihrem Notion-Workspace nie kaputtgehen.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Ein Tool, das dauerhafte, zuverlässige Bild-URLs für Notion-Seiten bereitstellt, um defekte Links auf veröffentlichten Inhalten zu vermeiden.",
    "badge": "NOTION-NUTZER",
    "h1Pre": "Bild-Hosting für Notion,",
    "h1Highlight": "das niemals ausfällt.",
    "intro": "Die internen Bild-URLs von Notion laufen auf veröffentlichten Seiten und geteilten Links ab. Laden Sie Bilder bei ImageToURL hoch und erhalten Sie dauerhafte Bild-Links, die überall dort funktionieren, wo Notion genutzt wird.",
    "howTitle": "So beheben Sie das Problem",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Ihr Bild per Drag & Drop hinein oder klicken Sie zum Auswählen. Wir unterstützen JPG, PNG, WebP, GIF und SVG ohne Qualitätsverlust."
      },
      {
        "title": "Dauerhafte URL kopieren",
        "body": "Ihr Bild erhält sofort eine dauerhafte URL. Klicken Sie darauf, um sie in Ihre Zwischenablage zu kopieren. Diese URL läuft nie ab und ändert sich nicht."
      },
      {
        "title": "In Notion einbetten",
        "body": "Geben Sie in Notion /image ein, wählen Sie 'Link einbetten' und fügen Sie die URL ein. Ihr Bild wird von ImageToURL geladen und läuft nie ab."
      }
    ],
    "whyTitle": "Das Notion-Bild-Problem",
    "whyItems": [
      {
        "title": "URLs laufen unbemerkt ab",
        "body": "Notion generiert temporäre, signierte URLs, die ohne Vorwarnung ablaufen und leere Stellen hinterlassen, wo früher Ihre Bilder waren."
      },
      {
        "title": "Veröffentlichte Seiten brechen zusammen",
        "body": "Wenn Sie eine Notion-Seite im Web veröffentlichen, können Bilder, die in Ihrem Workspace einwandfrei aussahen, für Besucher plötzlich nicht mehr laden."
      },
      {
        "title": "Geteilte Links funktionieren nicht",
        "body": "Das Teilen eines Notion-Seitenlinks mit Kunden oder Kollegen funktioniert anfangs, aber Bilder können ablaufen, bevor diese sie sehen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum gehen Bilder auf veröffentlichten Notion-Seiten kaputt?",
        "a": "Notion verwendet temporäre, signierte URLs mit Authentifizierungs-Tokens, die ablaufen. Externes Hosting mit dauerhaften URLs löst dieses Problem."
      },
      {
        "q": "Wie verwende ich ein externes Bild in Notion?",
        "a": "Laden Sie es bei ImageToURL hoch, kopieren Sie den dauerhaften Link und verwenden Sie dann den /image-Befehl in Notion, um die URL einzubetten."
      },
      {
        "q": "Funktionieren extern gehostete Bilder in der Notion-API?",
        "a": "Ja, externe URLs werden in der API als 'externer' Typ behandelt, was sie stabil für Integrationen und Automatisierungen macht."
      },
      {
        "q": "Funktionieren ImageToURL-Bilder in Notion-Templates?",
        "a": "Ja, sie bleiben beim Duplizieren eines Templates perfekt erhalten, im Gegensatz zu internen Notion-Bildern, die dabei kaputtgehen können."
      },
      {
        "q": "Kann ich dies für eine mit Super oder Fruition erstellte Notion-Website nutzen?",
        "a": "Absolut. Diese Tools rendern Ihre Seiten als Websites, und dauerhafte URLs stellen sicher, dass die Bilder Ihrer Website niemals ausfallen."
      }
    ],
    "ctaTitle": "Reparieren Sie Ihre Notion-Bilder dauerhaft",
    "ctaBody": "Laden Sie ein Bild hoch, erhalten Sie eine dauerhafte URL und betten Sie diese in Notion ein, damit Ihre Inhalte immer korrekt angezeigt werden.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "Notionページ向け画像ホスティング — 永続的なURL | ImageToURL",
    "metaDescription": "Notionの標準画像URLは公開ページで期限切れになります。ImageToURLを使って、Notionワークスペースでリンク切れを起こさない永続的な画像URLを作成しましょう。",
    "schemaName": "ImageToURL",
    "schemaDescription": "Notionページでリンク切れを防ぐため、信頼性の高い永続的な画像URLを提供するツール。",
    "badge": "NOTIONユーザー向け",
    "h1Pre": "Notionの画像ホスティング",
    "h1Highlight": "リンク切れを永久に解消。",
    "intro": "Notionの内部画像URLは、公開ページや共有リンクで期限切れになります。ImageToURLにアップロードすれば、Notionのあらゆる場所で機能する永続的な画像リンクを取得できます。",
    "howTitle": "解決方法",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "画像をドラッグ＆ドロップするか、クリックして選択します。JPG、PNG、WebP、GIF、SVGに対応しており、画質劣化はありません。"
      },
      {
        "title": "永続URLをコピー",
        "body": "画像は即座に永続的なURLに変換されます。クリックしてクリップボードにコピーしてください。このURLは期限切れや変更がありません。"
      },
      {
        "title": "Notionに埋め込む",
        "body": "Notionで「/image」と入力し、「リンクを埋め込む」を選択してURLを貼り付けます。画像はImageToURLから読み込まれ、期限切れになることはありません。"
      }
    ],
    "whyTitle": "Notionの画像に関する問題",
    "whyItems": [
      {
        "title": "URLが予告なく期限切れに",
        "body": "Notionは一時的な署名付きURLを生成するため、警告なしに期限切れとなり、画像が表示されていた場所に空白が残ります。"
      },
      {
        "title": "公開ページでのリンク切れ",
        "body": "NotionページをWeb公開すると、ワークスペース内では正常に見えていた画像が、訪問者に対して表示されなくなることがあります。"
      },
      {
        "title": "共有リンクの失敗",
        "body": "クライアントや同僚とNotionページを共有しても、相手が閲覧する前に画像が期限切れになる可能性があります。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜ公開されたNotionページで画像がリンク切れになるのですか？",
        "a": "Notionは認証トークン付きの一時的な署名付きURLを使用しているためです。永続的なURLを持つ外部ホスティングを利用することで解決します。"
      },
      {
        "q": "Notionで外部画像を使用するにはどうすればよいですか？",
        "a": "ImageToURLにアップロードして永続リンクをコピーし、Notionの「/image」コマンドでそのURLを埋め込んでください。"
      },
      {
        "q": "外部ホストされた画像はNotion APIで機能しますか？",
        "a": "はい、外部URLはAPI上で「外部」タイプとして扱われるため、統合や自動化においても安定して動作します。"
      },
      {
        "q": "ImageToURLの画像はNotionテンプレートでも使えますか？",
        "a": "はい、テンプレートが複製されても画像はそのまま保持されます。Notion内部の画像のようにリンク切れを起こすことはありません。"
      },
      {
        "q": "SuperやFruitionで構築したNotionサイトでも使えますか？",
        "a": "もちろんです。これらのツールはページをWebサイトとしてレンダリングするため、永続的なURLを使用することでサイトの画像がリンク切れを起こさないようにできます。"
      }
    ],
    "ctaTitle": "Notionの画像を永続的に修正",
    "ctaBody": "画像をアップロードして永続的なURLを取得し、Notionに埋め込むことで、コンテンツのリンク切れを確実に防ぎましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "Notion 页面图片托管 — 永久链接 | ImageToURL",
    "metaDescription": "Notion 内置的图片链接在发布页面后会失效。使用 ImageToURL 获取永久有效的图片链接，确保您的 Notion 工作区图片永不损坏。",
    "schemaName": "ImageToURL",
    "schemaDescription": "一个为 Notion 页面提供永久、可靠图片链接的工具，防止已发布内容出现图片损坏。",
    "badge": "NOTION 用户",
    "h1Pre": "Notion 图片托管",
    "h1Highlight": "永不失效。",
    "intro": "Notion 的内部图片链接在发布页面和分享链接后会过期。上传至 ImageToURL，获取在任何 Notion 环境下都能正常显示的永久图片链接。",
    "howTitle": "如何解决",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖放图片或点击浏览。我们支持 JPG、PNG、WebP、GIF 和 SVG，且无画质损失。"
      },
      {
        "title": "复制永久 URL",
        "body": "您的图片将立即获得一个永久 URL。点击即可复制到剪贴板。此链接永不过期或变更。"
      },
      {
        "title": "嵌入到 Notion",
        "body": "在 Notion 中输入 /image，选择“嵌入链接 (Embed link)”，然后粘贴 URL。您的图片将通过 ImageToURL 加载，且永不过期。"
      }
    ],
    "whyTitle": "Notion 图片失效问题",
    "whyItems": [
      {
        "title": "链接静默过期",
        "body": "Notion 生成的临时签名 URL 会在不经意间过期，导致原本显示图片的地方变成空白。"
      },
      {
        "title": "发布页面损坏",
        "body": "当您将 Notion 页面发布到网络时，在工作区看起来正常的图片可能会对访客停止加载。"
      },
      {
        "title": "分享链接失效",
        "body": "将 Notion 页面链接分享给客户或同事时，图片可能在对方查看之前就已经过期。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么 Notion 发布页面上的图片会损坏？",
        "a": "Notion 使用带有身份验证令牌的临时签名 URL，这些令牌会过期。使用具有永久 URL 的外部托管服务可以解决此问题。"
      },
      {
        "q": "如何在 Notion 中使用外部图片？",
        "a": "上传至 ImageToURL，复制永久链接，然后在 Notion 中使用 /image 命令嵌入该 URL。"
      },
      {
        "q": "外部托管的图片在 Notion API 中有效吗？",
        "a": "有效。外部 URL 在 API 中被视为“外部”类型，这使得它们对于集成和自动化非常稳定。"
      },
      {
        "q": "ImageToURL 的图片在 Notion 模板中有效吗？",
        "a": "有效。当模板被复制时，它们可以完美迁移，不像 Notion 内部图片那样容易损坏。"
      },
      {
        "q": "我可以使用它来构建 Super 或 Fruition 的 Notion 网站吗？",
        "a": "当然可以。这些工具将您的页面渲染为网站，而永久 URL 可确保您网站的图片永不损坏。"
      }
    ],
    "ctaTitle": "永久修复您的 Notion 图片",
    "ctaBody": "上传图片，获取永久 URL，并将其嵌入 Notion，确保您的内容永不损坏。",
    "ctaButton": "立即上传"
  },
  "id": {
    "metaTitle": "Hosting Gambar untuk Halaman Notion — URL Permanen | ImageToURL",
    "metaDescription": "URL gambar bawaan Notion kedaluwarsa pada halaman yang dipublikasikan. Gunakan ImageToURL untuk mendapatkan URL gambar permanen yang tidak akan rusak di ruang kerja Notion Anda.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Alat yang menyediakan URL gambar permanen dan andal untuk halaman Notion guna mencegah tautan rusak pada konten yang dipublikasikan.",
    "badge": "PENGGUNA NOTION",
    "h1Pre": "Hosting Gambar untuk Notion",
    "h1Highlight": "yang tidak pernah rusak.",
    "intro": "URL gambar internal Notion kedaluwarsa pada halaman yang dipublikasikan dan tautan yang dibagikan. Unggah ke ImageToURL dan dapatkan tautan gambar permanen yang berfungsi di mana pun Notion digunakan.",
    "howTitle": "Cara Memperbaikinya",
    "steps": [
      {
        "title": "Unggah Gambar Anda",
        "body": "Seret dan lepas gambar Anda atau klik untuk memilih file. Kami mendukung JPG, PNG, WebP, GIF, dan SVG tanpa penurunan kualitas."
      },
      {
        "title": "Salin URL Permanen",
        "body": "Gambar Anda mendapatkan URL permanen secara instan. Klik untuk menyalinnya ke papan klip Anda. URL ini tidak akan pernah kedaluwarsa atau berubah."
      },
      {
        "title": "Sematkan di Notion",
        "body": "Di Notion, ketik /image, pilih 'Embed link', lalu tempel URL tersebut. Gambar Anda akan dimuat dari ImageToURL dan tidak akan pernah kedaluwarsa."
      }
    ],
    "whyTitle": "Masalah Gambar di Notion",
    "whyItems": [
      {
        "title": "URL Kedaluwarsa Tanpa Pemberitahuan",
        "body": "Notion menghasilkan URL sementara yang kedaluwarsa tanpa peringatan, meninggalkan ruang kosong di tempat gambar Anda sebelumnya berada."
      },
      {
        "title": "Halaman yang Dipublikasikan Rusak",
        "body": "Saat Anda memublikasikan halaman Notion ke web, gambar yang terlihat baik di ruang kerja Anda bisa berhenti dimuat bagi pengunjung."
      },
      {
        "title": "Tautan yang Dibagikan Gagal",
        "body": "Membagikan tautan halaman Notion kepada klien atau rekan kerja mungkin berhasil pada awalnya, tetapi gambar bisa kedaluwarsa sebelum mereka melihatnya."
      }
    ],
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Mengapa gambar rusak pada halaman Notion yang dipublikasikan?",
        "a": "Notion menggunakan URL sementara dengan token autentikasi yang kedaluwarsa. Hosting eksternal dengan URL permanen dapat mengatasi masalah ini."
      },
      {
        "q": "Bagaimana cara menggunakan gambar eksternal di Notion?",
        "a": "Unggah ke ImageToURL, salin tautan permanen, lalu gunakan perintah /image di Notion untuk menyematkan URL tersebut."
      },
      {
        "q": "Apakah gambar yang dihosting secara eksternal berfungsi di API Notion?",
        "a": "Ya, URL eksternal dianggap sebagai tipe 'eksternal' di API, sehingga stabil untuk integrasi dan otomatisasi."
      },
      {
        "q": "Apakah gambar ImageToURL berfungsi di template Notion?",
        "a": "Ya, gambar tersebut akan terbawa dengan sempurna saat template diduplikasi, tidak seperti gambar internal Notion yang bisa rusak."
      },
      {
        "q": "Bisakah saya menggunakan ini untuk situs web Notion yang dibuat dengan Super atau Fruition?",
        "a": "Tentu saja. Alat-alat ini merender halaman Anda sebagai situs web, dan URL permanen memastikan gambar situs Anda tidak akan pernah rusak."
      }
    ],
    "ctaTitle": "Perbaiki gambar Notion Anda secara permanen",
    "ctaBody": "Unggah gambar, dapatkan URL permanen, dan sematkan di Notion untuk memastikan konten Anda tidak pernah rusak.",
    "ctaButton": "Unggah Sekarang"
  },
  "vi": {
    "metaTitle": "Lưu trữ ảnh cho trang Notion — URL vĩnh viễn | ImageToURL",
    "metaDescription": "URL ảnh mặc định của Notion sẽ hết hạn trên các trang đã xuất bản. Sử dụng ImageToURL để có URL ảnh vĩnh viễn, không bao giờ bị lỗi trong không gian làm việc Notion của bạn.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Công cụ cung cấp URL ảnh vĩnh viễn, đáng tin cậy cho các trang Notion để ngăn chặn lỗi hiển thị ảnh trên nội dung đã xuất bản.",
    "badge": "DÀNH CHO NGƯỜI DÙNG NOTION",
    "h1Pre": "Lưu trữ ảnh cho Notion",
    "h1Highlight": "không bao giờ bị lỗi.",
    "intro": "URL ảnh nội bộ của Notion sẽ hết hạn trên các trang đã xuất bản và liên kết chia sẻ. Hãy tải lên ImageToURL để nhận liên kết ảnh vĩnh viễn hoạt động ổn định ở mọi nơi có Notion.",
    "howTitle": "Cách khắc phục",
    "steps": [
      {
        "title": "Tải ảnh của bạn lên",
        "body": "Kéo và thả ảnh hoặc nhấp để chọn tệp. Chúng tôi hỗ trợ JPG, PNG, WebP, GIF và SVG mà không làm giảm chất lượng."
      },
      {
        "title": "Sao chép URL vĩnh viễn",
        "body": "Ảnh của bạn sẽ nhận được URL vĩnh viễn ngay lập tức. Nhấp để sao chép vào khay nhớ tạm. URL này sẽ không bao giờ hết hạn hoặc thay đổi."
      },
      {
        "title": "Nhúng vào Notion",
        "body": "Trong Notion, nhập /image, chọn 'Embed link' (Nhúng liên kết) và dán URL vào. Ảnh của bạn sẽ được tải từ ImageToURL và không bao giờ hết hạn."
      }
    ],
    "whyTitle": "Vấn đề về ảnh trên Notion",
    "whyItems": [
      {
        "title": "URL tự động hết hạn",
        "body": "Notion tạo ra các URL tạm thời có chữ ký và sẽ hết hạn mà không báo trước, để lại những khoảng trống nơi ảnh của bạn từng hiển thị."
      },
      {
        "title": "Trang đã xuất bản bị lỗi",
        "body": "Khi bạn xuất bản trang Notion lên web, những hình ảnh hiển thị bình thường trong không gian làm việc có thể ngừng tải đối với khách truy cập."
      },
      {
        "title": "Liên kết chia sẻ bị hỏng",
        "body": "Việc chia sẻ liên kết trang Notion với khách hàng hoặc đồng nghiệp có thể hoạt động lúc đầu, nhưng ảnh có thể hết hạn trước khi họ kịp xem."
      }
    ],
    "faqTitle": "Câu hỏi thường gặp",
    "faqs": [
      {
        "q": "Tại sao ảnh bị lỗi trên các trang Notion đã xuất bản?",
        "a": "Notion sử dụng các URL tạm thời có mã xác thực sẽ hết hạn. Lưu trữ bên ngoài với URL vĩnh viễn sẽ giải quyết vấn đề này."
      },
      {
        "q": "Làm thế nào để sử dụng ảnh bên ngoài trong Notion?",
        "a": "Tải lên ImageToURL, sao chép liên kết vĩnh viễn, sau đó sử dụng lệnh /image trong Notion để nhúng URL đó."
      },
      {
        "q": "Ảnh lưu trữ bên ngoài có hoạt động với API của Notion không?",
        "a": "Có, các URL bên ngoài được coi là loại 'external' trong API, giúp chúng ổn định cho các tích hợp và tự động hóa."
      },
      {
        "q": "Ảnh từ ImageToURL có hoạt động trong các template Notion không?",
        "a": "Có, chúng vẫn giữ nguyên khi template được sao chép, không giống như ảnh nội bộ của Notion có thể bị lỗi."
      },
      {
        "q": "Tôi có thể sử dụng công cụ này cho trang web Notion xây dựng bằng Super hoặc Fruition không?",
        "a": "Chắc chắn rồi. Các công cụ này hiển thị trang của bạn dưới dạng trang web, và URL vĩnh viễn đảm bảo ảnh trên trang web của bạn không bao giờ bị lỗi."
      }
    ],
    "ctaTitle": "Khắc phục lỗi ảnh Notion vĩnh viễn",
    "ctaBody": "Tải ảnh lên, nhận URL vĩnh viễn và nhúng vào Notion để đảm bảo nội dung của bạn không bao giờ bị lỗi.",
    "ctaButton": "Tải lên ngay"
  },
  "pt-BR": {
    "metaTitle": "Hospedagem de Imagens para Páginas Notion — URLs Permanentes | ImageToURL",
    "metaDescription": "As URLs de imagem nativas do Notion expiram em páginas publicadas. Use o ImageToURL para obter links permanentes que nunca quebram no seu workspace.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Uma ferramenta que fornece URLs de imagem permanentes e confiáveis para páginas do Notion, evitando links quebrados em conteúdos publicados.",
    "badge": "USUÁRIOS DO NOTION",
    "h1Pre": "Hospedagem de Imagens para Notion",
    "h1Highlight": "que nunca quebra.",
    "intro": "As URLs internas de imagem do Notion expiram em páginas publicadas e links compartilhados. Faça o upload no ImageToURL e obtenha links permanentes que funcionam onde quer que o Notion funcione.",
    "howTitle": "Como Resolver",
    "steps": [
      {
        "title": "Faça o upload da sua imagem",
        "body": "Arraste e solte sua imagem ou clique para procurar. Suportamos JPG, PNG, WebP, GIF e SVG sem perda de qualidade."
      },
      {
        "title": "Copie a URL permanente",
        "body": "Sua imagem recebe uma URL permanente instantaneamente. Clique para copiar para sua área de transferência. Esta URL nunca expirará ou mudará."
      },
      {
        "title": "Incorpore no Notion",
        "body": "No Notion, digite /image, escolha 'Incorporar link' e cole a URL. Sua imagem será carregada a partir do ImageToURL e nunca expirará."
      }
    ],
    "whyTitle": "O problema das imagens no Notion",
    "whyItems": [
      {
        "title": "URLs expiram silenciosamente",
        "body": "O Notion gera URLs temporárias assinadas que expiram sem aviso, deixando espaços em branco onde suas imagens costumavam estar."
      },
      {
        "title": "Páginas publicadas quebram",
        "body": "Ao publicar uma página do Notion na web, imagens que pareciam normais no seu workspace podem parar de carregar para os visitantes."
      },
      {
        "title": "Links compartilhados falham",
        "body": "Compartilhar um link de página do Notion com um cliente ou colega funciona inicialmente, mas as imagens podem expirar antes que eles visualizem."
      }
    ],
    "faqTitle": "Perguntas Frequentes",
    "faqs": [
      {
        "q": "Por que as imagens quebram em páginas publicadas do Notion?",
        "a": "O Notion usa URLs temporárias assinadas com tokens de autenticação que expiram. A hospedagem externa com URLs permanentes resolve isso."
      },
      {
        "q": "Como uso uma imagem externa no Notion?",
        "a": "Faça o upload no ImageToURL, copie o link permanente e use o comando /image no Notion para incorporar a URL."
      },
      {
        "q": "Imagens hospedadas externamente funcionam na API do Notion?",
        "a": "Sim, URLs externas são tratadas como tipo 'external' na API, tornando-as estáveis para integrações e automações."
      },
      {
        "q": "As imagens do ImageToURL funcionam em templates do Notion?",
        "a": "Sim, elas são transferidas perfeitamente quando um template é duplicado, ao contrário das imagens internas do Notion que podem quebrar."
      },
      {
        "q": "Posso usar isso para um site Notion criado com Super ou Fruition?",
        "a": "Com certeza. Essas ferramentas renderizam suas páginas como sites, e URLs permanentes garantem que as imagens do seu site nunca quebrem."
      }
    ],
    "ctaTitle": "Corrija suas imagens do Notion permanentemente",
    "ctaBody": "Faça o upload de uma imagem, obtenha uma URL permanente e incorpore-a no Notion para garantir que seu conteúdo nunca quebre.",
    "ctaButton": "Fazer upload agora"
  },
  "tr": {
    "metaTitle": "Notion Sayfaları için Görsel Barındırma — Kalıcı URL'ler | ImageToURL",
    "metaDescription": "Notion'ın yerleşik görsel URL'leri yayınlanan sayfalarda zamanla geçersiz olur. Notion çalışma alanınızda asla bozulmayan kalıcı görsel URL'leri için ImageToURL kullanın.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Yayınlanan içeriklerdeki bozuk bağlantıları önlemek için Notion sayfalarına kalıcı ve güvenilir görsel URL'leri sağlayan bir araç.",
    "badge": "NOTION KULLANICILARI",
    "h1Pre": "Notion için Görsel Barındırma",
    "h1Highlight": "asla bozulmaz.",
    "intro": "Notion'ın dahili görsel URL'leri, yayınlanan sayfalarda ve paylaşılan bağlantılarda zamanla geçersiz olur. ImageToURL'e yükleyin ve Notion'ın çalıştığı her yerde işe yarayan kalıcı görsel bağlantıları elde edin.",
    "howTitle": "Nasıl Düzeltilir",
    "steps": [
      {
        "title": "Görselinizi Yükleyin",
        "body": "Görselinizi sürükleyip bırakın veya göz atmak için tıklayın. Kalite kaybı olmadan JPG, PNG, WebP, GIF ve SVG formatlarını destekliyoruz."
      },
      {
        "title": "Kalıcı URL'yi Kopyalayın",
        "body": "Görseliniz anında kalıcı bir URL alır. Panonuza kopyalamak için tıklayın. Bu URL asla süresi dolmayacak veya değişmeyecektir."
      },
      {
        "title": "Notion'a Yerleştirin",
        "body": "Notion'da /image yazın, 'Embed link' (Bağlantı yerleştir) seçeneğini seçin ve URL'yi yapıştırın. Görseliniz ImageToURL üzerinden yüklenir ve süresi asla dolmaz."
      }
    ],
    "whyTitle": "Notion Görsel Sorunu",
    "whyItems": [
      {
        "title": "URL'lerin Süresi Sessizce Dolar",
        "body": "Notion, uyarı vermeden süresi dolan geçici imzalı URL'ler oluşturur ve bu da görsellerinizin olduğu yerlerde boş alanlar bırakır."
      },
      {
        "title": "Yayınlanan Sayfalar Bozulur",
        "body": "Bir Notion sayfasını web'de yayınladığınızda, çalışma alanınızda düzgün görünen görseller ziyaretçiler için yüklenmeyi durdurabilir."
      },
      {
        "title": "Paylaşılan Bağlantılar Başarısız Olur",
        "body": "Bir Notion sayfası bağlantısını bir müşteri veya iş arkadaşınızla paylaşmak başlangıçta işe yarar, ancak görseller onlar görüntülemeden önce geçersiz hale gelebilir."
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular",
    "faqs": [
      {
        "q": "Yayınlanan Notion sayfalarında görseller neden bozulur?",
        "a": "Notion, süresi dolan kimlik doğrulama belirteçlerine sahip geçici imzalı URL'ler kullanır. Kalıcı URL'lere sahip harici barındırma bu sorunu çözer."
      },
      {
        "q": "Notion'da harici bir görseli nasıl kullanırım?",
        "a": "ImageToURL'e yükleyin, kalıcı bağlantıyı kopyalayın ve ardından URL'yi yerleştirmek için Notion'daki /image komutunu kullanın."
      },
      {
        "q": "Harici olarak barındırılan görseller Notion API'sinde çalışır mı?",
        "a": "Evet, harici URL'ler API'de 'harici' tür olarak kabul edilir, bu da onları entegrasyonlar ve otomasyonlar için kararlı hale getirir."
      },
      {
        "q": "ImageToURL görselleri Notion şablonlarında çalışır mı?",
        "a": "Evet, bozulabilen dahili Notion görsellerinin aksine, bir şablon kopyalandığında mükemmel bir şekilde aktarılırlar."
      },
      {
        "q": "Bunu Super veya Fruition ile oluşturulmuş bir Notion web sitesi için kullanabilir miyim?",
        "a": "Kesinlikle. Bu araçlar sayfalarınızı web sitesi olarak oluşturur ve kalıcı URL'ler sitenizin görsellerinin asla bozulmamasını sağlar."
      }
    ],
    "ctaTitle": "Notion görsellerinizi kalıcı olarak düzeltin",
    "ctaBody": "Bir görsel yükleyin, kalıcı bir URL alın ve içeriğinizin asla bozulmamasını sağlamak için Notion'a yerleştirin.",
    "ctaButton": "Şimdi Yükle"
  },
  "tl": {
    "metaTitle": "Image Hosting para sa Notion Pages — Permanenteng URL | ImageToURL",
    "metaDescription": "Ang mga built-in na image URL ng Notion ay nag-e-expire sa mga published page. Gamitin ang ImageToURL para sa mga permanenteng image URL na hindi masisira sa iyong Notion workspace.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Isang tool na nagbibigay ng permanente at maaasahang image URL para sa mga Notion page upang maiwasan ang mga sirang link sa mga published content.",
    "badge": "PARA SA MGA USER NG NOTION",
    "h1Pre": "Image Hosting para sa Notion",
    "h1Highlight": "na hindi kailanman masisira.",
    "intro": "Ang mga internal image URL ng Notion ay nag-e-expire sa mga published page at shared link. Mag-upload sa ImageToURL at kumuha ng mga permanenteng image link na gumagana saanman ginagamit ang Notion.",
    "howTitle": "Paano Ito Ayusin",
    "steps": [
      {
        "title": "I-upload ang Iyong Larawan",
        "body": "I-drag at i-drop ang iyong larawan o mag-click para mag-browse. Sinusuportahan namin ang JPG, PNG, WebP, GIF, at SVG nang walang bawas sa kalidad."
      },
      {
        "title": "Kopyahin ang Permanenteng URL",
        "body": "Makakakuha ka agad ng permanenteng URL para sa iyong larawan. I-click para kopyahin ito sa iyong clipboard. Ang URL na ito ay hindi kailanman mag-e-expire o magbabago."
      },
      {
        "title": "I-embed sa Notion",
        "body": "Sa Notion, i-type ang /image, piliin ang 'Embed link', at i-paste ang URL. Ang iyong larawan ay maglo-load mula sa ImageToURL at hindi kailanman mag-e-expire."
      }
    ],
    "whyTitle": "Ang Problema sa Larawan sa Notion",
    "whyItems": [
      {
        "title": "Nag-e-expire ang mga URL nang Hindi Napapansin",
        "body": "Gumagawa ang Notion ng mga temporary signed URL na nag-e-expire nang walang babala, na nag-iiwan ng mga blangkong espasyo kung nasaan ang iyong mga larawan."
      },
      {
        "title": "Nasisisira ang mga Published Page",
        "body": "Kapag nag-publish ka ng Notion page sa web, ang mga larawang mukhang maayos sa iyong workspace ay maaaring huminto sa pag-load para sa mga bisita."
      },
      {
        "title": "Nabibigo ang mga Shared Link",
        "body": "Ang pagbabahagi ng link ng Notion page sa isang kliyente o kasamahan ay gumagana sa simula, ngunit ang mga larawan ay maaaring mag-expire bago pa nila ito makita."
      }
    ],
    "faqTitle": "Mga Madalas Itanong",
    "faqs": [
      {
        "q": "Bakit nasisisira ang mga larawan sa mga published Notion page?",
        "a": "Gumagamit ang Notion ng mga temporary signed URL na may authentication token na nag-e-expire. Ang external hosting na may permanenteng URL ang solusyon dito."
      },
      {
        "q": "Paano ako gagamit ng external na larawan sa Notion?",
        "a": "Mag-upload sa ImageToURL, kopyahin ang permanenteng link, at gamitin ang /image command sa Notion para i-embed ang URL."
      },
      {
        "q": "Gagana ba ang mga externally hosted na larawan sa API ng Notion?",
        "a": "Oo, ang mga external URL ay itinuturing na 'external' type sa API, kaya stable ang mga ito para sa mga integration at automation."
      },
      {
        "q": "Gagana ba ang mga larawan mula sa ImageToURL sa mga Notion template?",
        "a": "Oo, perpekto ang paglipat ng mga ito kapag na-duplicate ang isang template, hindi tulad ng mga internal na larawan sa Notion na maaaring masira."
      },
      {
        "q": "Magagamit ko ba ito para sa Notion website na binuo gamit ang Super o Fruition?",
        "a": "Siyempre. Ang mga tool na ito ay nagre-render ng iyong mga page bilang mga website, at tinitiyak ng mga permanenteng URL na hindi kailanman masisira ang mga larawan ng iyong site."
      }
    ],
    "ctaTitle": "Ayusin nang permanente ang iyong mga larawan sa Notion",
    "ctaBody": "Mag-upload ng larawan, kumuha ng permanenteng URL, at i-embed ito sa Notion para matiyak na hindi kailanman masisira ang iyong content.",
    "ctaButton": "I-upload Ngayon"
  },
  "pl": {
    "metaTitle": "Hosting obrazów dla stron Notion — stałe adresy URL | ImageToURL",
    "metaDescription": "Wbudowane adresy URL obrazów w Notion wygasają na opublikowanych stronach. Użyj ImageToURL, aby uzyskać stałe linki, które nigdy nie przestaną działać w Twoim obszarze roboczym Notion.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Narzędzie zapewniające stałe i niezawodne adresy URL obrazów dla stron Notion, zapobiegające niedziałającym linkom w opublikowanych treściach.",
    "badge": "DLA UŻYTKOWNIKÓW NOTION",
    "h1Pre": "Hosting obrazów dla Notion",
    "h1Highlight": "który nigdy nie zawodzi.",
    "intro": "Wewnętrzne adresy URL obrazów w Notion wygasają na opublikowanych stronach i udostępnionych linkach. Prześlij pliki do ImageToURL i uzyskaj stałe linki, które działają wszędzie tam, gdzie Notion.",
    "howTitle": "Jak to naprawić",
    "steps": [
      {
        "title": "Prześlij swój obraz",
        "body": "Przeciągnij i upuść obraz lub kliknij, aby wybrać plik. Obsługujemy formaty JPG, PNG, WebP, GIF i SVG bez utraty jakości."
      },
      {
        "title": "Skopiuj stały adres URL",
        "body": "Twój obraz natychmiast otrzymuje stały adres URL. Kliknij, aby skopiować go do schowka. Ten link nigdy nie wygaśnie ani się nie zmieni."
      },
      {
        "title": "Osadź w Notion",
        "body": "W Notion wpisz /image, wybierz 'Embed link' (Osadź link) i wklej adres URL. Twój obraz będzie ładowany z ImageToURL i nigdy nie wygaśnie."
      }
    ],
    "whyTitle": "Problem z obrazami w Notion",
    "whyItems": [
      {
        "title": "Adresy URL wygasają po cichu",
        "body": "Notion generuje tymczasowe, podpisane adresy URL, które wygasają bez ostrzeżenia, pozostawiając puste miejsca w miejscu Twoich obrazów."
      },
      {
        "title": "Opublikowane strony przestają działać",
        "body": "Gdy publikujesz stronę Notion w sieci, obrazy, które wyglądały poprawnie w Twoim obszarze roboczym, mogą przestać się ładować dla odwiedzających."
      },
      {
        "title": "Udostępnione linki zawodzą",
        "body": "Udostępnienie linku do strony Notion klientowi lub współpracownikowi działa początkowo, ale obrazy mogą wygasnąć, zanim zdążą je zobaczyć."
      }
    ],
    "faqTitle": "Najczęściej zadawane pytania",
    "faqs": [
      {
        "q": "Dlaczego obrazy na opublikowanych stronach Notion przestają działać?",
        "a": "Notion używa tymczasowych, podpisanych adresów URL z tokenami uwierzytelniającymi, które wygasają. Zewnętrzny hosting ze stałymi adresami URL rozwiązuje ten problem."
      },
      {
        "q": "Jak użyć zewnętrznego obrazu w Notion?",
        "a": "Prześlij go do ImageToURL, skopiuj stały link, a następnie użyj komendy /image w Notion, aby osadzić adres URL."
      },
      {
        "q": "Czy zewnętrznie hostowane obrazy działają w API Notion?",
        "a": "Tak, zewnętrzne adresy URL są traktowane jako typ 'external' w API, co czyni je stabilnymi dla integracji i automatyzacji."
      },
      {
        "q": "Czy obrazy z ImageToURL działają w szablonach Notion?",
        "a": "Tak, przenoszą się idealnie podczas duplikowania szablonu, w przeciwieństwie do wewnętrznych obrazów Notion, które mogą przestać działać."
      },
      {
        "q": "Czy mogę użyć tego dla strony Notion zbudowanej za pomocą Super lub Fruition?",
        "a": "Oczywiście. Te narzędzia renderują Twoje strony jako witryny, a stałe adresy URL gwarantują, że obrazy na Twojej stronie nigdy nie znikną."
      }
    ],
    "ctaTitle": "Napraw swoje obrazy w Notion na stałe",
    "ctaBody": "Prześlij obraz, uzyskaj stały adres URL i osadź go w Notion, aby mieć pewność, że Twoje treści zawsze będą wyświetlane poprawnie.",
    "ctaButton": "Prześlij teraz"
  },
  "nl": {
    "metaTitle": "Afbeeldinghosting voor Notion-pagina's — Permanente URL's | ImageToURL",
    "metaDescription": "De ingebouwde afbeeldings-URL's van Notion verlopen op gepubliceerde pagina's. Gebruik ImageToURL voor permanente afbeeldings-URL's die nooit kapot gaan in je Notion-werkruimte.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Een tool die permanente, betrouwbare afbeeldings-URL's biedt voor Notion-pagina's om kapotte links op gepubliceerde inhoud te voorkomen.",
    "badge": "NOTION-GEBRUIKERS",
    "h1Pre": "Afbeeldinghosting voor Notion",
    "h1Highlight": "die nooit kapot gaat.",
    "intro": "De interne afbeeldings-URL's van Notion verlopen op gepubliceerde pagina's en gedeelde links. Upload naar ImageToURL en ontvang permanente afbeeldingslinks die overal werken waar Notion werkt.",
    "howTitle": "Hoe los je dit op",
    "steps": [
      {
        "title": "Upload je afbeelding",
        "body": "Sleep je afbeelding naar het venster of klik om te bladeren. We ondersteunen JPG, PNG, WebP, GIF en SVG zonder kwaliteitsverlies."
      },
      {
        "title": "Kopieer de permanente URL",
        "body": "Je afbeelding krijgt direct een permanente URL. Klik om deze naar je klembord te kopiëren. Deze URL zal nooit verlopen of veranderen."
      },
      {
        "title": "Insluiten in Notion",
        "body": "Typ in Notion /image, kies 'Embed link' (link insluiten) en plak de URL. Je afbeelding wordt geladen vanaf ImageToURL en verloopt nooit."
      }
    ],
    "whyTitle": "Het Notion-afbeeldingsprobleem",
    "whyItems": [
      {
        "title": "URL's verlopen stilletjes",
        "body": "Notion genereert tijdelijke, ondertekende URL's die zonder waarschuwing verlopen, waardoor er lege plekken ontstaan waar je afbeeldingen stonden."
      },
      {
        "title": "Gepubliceerde pagina's gaan kapot",
        "body": "Wanneer je een Notion-pagina publiceert op het web, kunnen afbeeldingen die er in je werkruimte goed uitzagen, stoppen met laden voor bezoekers."
      },
      {
        "title": "Gedeelde links falen",
        "body": "Het delen van een Notion-paginalink met een klant of collega werkt in eerste instantie, maar afbeeldingen kunnen verlopen voordat ze de pagina bekijken."
      }
    ],
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Waarom gaan afbeeldingen kapot op gepubliceerde Notion-pagina's?",
        "a": "Notion gebruikt tijdelijke, ondertekende URL's met authenticatietokens die verlopen. Externe hosting met permanente URL's lost dit op."
      },
      {
        "q": "Hoe gebruik ik een externe afbeelding in Notion?",
        "a": "Upload naar ImageToURL, kopieer de permanente link en gebruik vervolgens het /image-commando in Notion om de URL in te sluiten."
      },
      {
        "q": "Werken extern gehoste afbeeldingen in de API van Notion?",
        "a": "Ja, externe URL's worden in de API behandeld als 'extern' type, waardoor ze stabiel zijn voor integraties en automatiseringen."
      },
      {
        "q": "Werken ImageToURL-afbeeldingen in Notion-templates?",
        "a": "Ja, ze worden perfect overgenomen wanneer een template wordt gedupliceerd, in tegenstelling tot interne Notion-afbeeldingen die kapot kunnen gaan."
      },
      {
        "q": "Kan ik dit gebruiken voor een Notion-website gebouwd met Super of Fruition?",
        "a": "Absoluut. Deze tools renderen je pagina's als websites, en permanente URL's zorgen ervoor dat de afbeeldingen van je site nooit kapot gaan."
      }
    ],
    "ctaTitle": "Repareer je Notion-afbeeldingen permanent",
    "ctaBody": "Upload een afbeelding, ontvang een permanente URL en sluit deze in Notion in om ervoor te zorgen dat je inhoud nooit kapot gaat.",
    "ctaButton": "Upload nu"
  },
  "it": {
    "metaTitle": "Hosting immagini per pagine Notion — URL permanenti | ImageToURL",
    "metaDescription": "Gli URL delle immagini di Notion scadono sulle pagine pubblicate. Usa ImageToURL per ottenere URL permanenti che non si interrompono mai nel tuo spazio di lavoro Notion.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Uno strumento che fornisce URL di immagini permanenti e affidabili per le pagine Notion, per evitare link interrotti sui contenuti pubblicati.",
    "badge": "UTENTI NOTION",
    "h1Pre": "Hosting immagini per Notion",
    "h1Highlight": "che non si interrompe mai.",
    "intro": "Gli URL interni delle immagini di Notion scadono sulle pagine pubblicate e sui link condivisi. Carica su ImageToURL e ottieni link permanenti che funzionano ovunque funzioni Notion.",
    "howTitle": "Come risolvere il problema",
    "steps": [
      {
        "title": "Carica la tua immagine",
        "body": "Trascina l'immagine o clicca per sfogliare i file. Supportiamo JPG, PNG, WebP, GIF e SVG senza perdita di qualità."
      },
      {
        "title": "Copia l'URL permanente",
        "body": "La tua immagine ottiene istantaneamente un URL permanente. Clicca per copiarlo negli appunti. Questo URL non scadrà né cambierà mai."
      },
      {
        "title": "Incorpora in Notion",
        "body": "In Notion, digita /image, scegli 'Incorpora link' e incolla l'URL. La tua immagine verrà caricata da ImageToURL e non scadrà mai."
      }
    ],
    "whyTitle": "Il problema delle immagini in Notion",
    "whyItems": [
      {
        "title": "Gli URL scadono silenziosamente",
        "body": "Notion genera URL temporanei firmati che scadono senza preavviso, lasciando spazi vuoti dove prima c'erano le tue immagini."
      },
      {
        "title": "Le pagine pubblicate si rompono",
        "body": "Quando pubblichi una pagina Notion sul web, le immagini che sembravano a posto nel tuo spazio di lavoro possono smettere di caricarsi per i visitatori."
      },
      {
        "title": "I link condivisi falliscono",
        "body": "Condividere il link di una pagina Notion con un cliente o un collega funziona inizialmente, ma le immagini possono scadere prima che loro le visualizzino."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Perché le immagini si rompono sulle pagine Notion pubblicate?",
        "a": "Notion utilizza URL temporanei firmati con token di autenticazione che scadono. L'hosting esterno con URL permanenti risolve questo problema."
      },
      {
        "q": "Come uso un'immagine esterna in Notion?",
        "a": "Caricala su ImageToURL, copia il link permanente, quindi usa il comando /image in Notion per incorporare l'URL."
      },
      {
        "q": "Le immagini ospitate esternamente funzionano con l'API di Notion?",
        "a": "Sì, gli URL esterni sono trattati come tipo 'external' nell'API, rendendoli stabili per integrazioni e automazioni."
      },
      {
        "q": "Le immagini di ImageToURL funzionano nei template di Notion?",
        "a": "Sì, vengono trasferite perfettamente quando un template viene duplicato, a differenza delle immagini interne di Notion che possono rompersi."
      },
      {
        "q": "Posso usarlo per un sito web Notion creato con Super o Fruition?",
        "a": "Assolutamente. Questi strumenti rendono le tue pagine come siti web e gli URL permanenti assicurano che le immagini del tuo sito non si interrompano mai."
      }
    ],
    "ctaTitle": "Risolvi definitivamente le tue immagini Notion",
    "ctaBody": "Carica un'immagine, ottieni un URL permanente e incorporalo in Notion per assicurarti che i tuoi contenuti non si interrompano mai.",
    "ctaButton": "Carica ora"
  },
  "ar": {
    "metaTitle": "استضافة صور لصفحات Notion — روابط دائمة | ImageToURL",
    "metaDescription": "تنتهي صلاحية روابط صور Notion المدمجة في الصفحات المنشورة. استخدم ImageToURL للحصول على روابط صور دائمة لا تتعطل أبداً في مساحة عمل Notion الخاصة بك.",
    "schemaName": "ImageToURL",
    "schemaDescription": "أداة توفر روابط صور دائمة وموثوقة لصفحات Notion لمنع تعطل الروابط في المحتوى المنشور.",
    "badge": "مستخدمو NOTION",
    "h1Pre": "استضافة صور لـ Notion",
    "h1Highlight": "لا تتعطل أبداً.",
    "intro": "تنتهي صلاحية روابط الصور الداخلية في Notion عند نشر الصفحات أو مشاركة الروابط. ارفع صورك إلى ImageToURL واحصل على روابط دائمة تعمل في كل مكان يعمل فيه Notion.",
    "howTitle": "كيفية إصلاح المشكلة",
    "steps": [
      {
        "title": "ارفع صورتك",
        "body": "قم بسحب وإفلات صورتك أو انقر للتصفح. ندعم صيغ JPG و PNG و WebP و GIF و SVG دون فقدان الجودة."
      },
      {
        "title": "انسخ الرابط الدائم",
        "body": "تحصل صورتك على رابط دائم فوراً. انقر لنسخه إلى الحافظة. هذا الرابط لن تنتهي صلاحيته ولن يتغير أبداً."
      },
      {
        "title": "قم بالتضمين في Notion",
        "body": "في Notion، اكتب /image، واختر 'Embed link'، ثم الصق الرابط. سيتم تحميل صورتك من ImageToURL ولن تنتهي صلاحيتها."
      }
    ],
    "whyTitle": "مشكلة الصور في Notion",
    "whyItems": [
      {
        "title": "الروابط تنتهي صلاحيتها بصمت",
        "body": "ينشئ Notion روابط مؤقتة تنتهي صلاحيتها دون سابق إنذار، مما يترك مساحات فارغة حيث كانت صورك موجودة."
      },
      {
        "title": "تعطل الصفحات المنشورة",
        "body": "عند نشر صفحة Notion على الويب، قد تتوقف الصور التي كانت تظهر بشكل جيد في مساحة عملك عن التحميل للزوار."
      },
      {
        "title": "فشل الروابط المشتركة",
        "body": "مشاركة رابط صفحة Notion مع عميل أو زميل تعمل في البداية، لكن الصور قد تنتهي صلاحيتها قبل أن يتمكنوا من رؤيتها."
      }
    ],
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "لماذا تتعطل الصور في صفحات Notion المنشورة؟",
        "a": "يستخدم Notion روابط مؤقتة مع رموز مصادقة تنتهي صلاحيتها. الاستضافة الخارجية بروابط دائمة تحل هذه المشكلة."
      },
      {
        "q": "كيف أستخدم صورة خارجية في Notion؟",
        "a": "ارفع الصورة إلى ImageToURL، انسخ الرابط الدائم، ثم استخدم أمر /image في Notion لتضمين الرابط."
      },
      {
        "q": "هل تعمل الصور المستضافة خارجياً في Notion API؟",
        "a": "نعم، يتم التعامل مع الروابط الخارجية كنوع 'external' في API، مما يجعلها مستقرة لعمليات الربط والأتمتة."
      },
      {
        "q": "هل تعمل صور ImageToURL في قوالب Notion؟",
        "a": "نعم، تنتقل بشكل مثالي عند نسخ القالب، على عكس صور Notion الداخلية التي قد تتعطل."
      },
      {
        "q": "هل يمكنني استخدام هذا لموقع Notion مبني بواسطة Super أو Fruition؟",
        "a": "بالتأكيد. هذه الأدوات تعرض صفحاتك كمواقع ويب، والروابط الدائمة تضمن عدم تعطل صور موقعك أبداً."
      }
    ],
    "ctaTitle": "أصلح صور Notion الخاصة بك بشكل دائم",
    "ctaBody": "ارفع صورة، واحصل على رابط دائم، وقم بتضمينه في Notion لضمان عدم تعطل محتواك أبداً.",
    "ctaButton": "ارفع الآن"
  },
  "bn": {
    "metaTitle": "Notion পেজের জন্য ইমেজ হোস্টিং — স্থায়ী URL | ImageToURL",
    "metaDescription": "Notion-এর বিল্ট-ইন ইমেজ URL পাবলিশ করা পেজে কাজ করে না। আপনার Notion ওয়ার্কস্পেসে ইমেজ লিঙ্ক নষ্ট হওয়া রোধ করতে ImageToURL ব্যবহার করুন।",
    "schemaName": "ImageToURL",
    "schemaDescription": "একটি টুল যা Notion পেজের জন্য স্থায়ী এবং নির্ভরযোগ্য ইমেজ URL প্রদান করে, যাতে পাবলিশ করা কন্টেন্টে লিঙ্ক নষ্ট না হয়।",
    "badge": "NOTION ব্যবহারকারী",
    "h1Pre": "Notion-এর জন্য ইমেজ হোস্টিং",
    "h1Highlight": "যা কখনো নষ্ট হয় না।",
    "intro": "Notion-এর অভ্যন্তরীণ ইমেজ URL পাবলিশ করা পেজ এবং শেয়ার করা লিঙ্কে কাজ করে না। ImageToURL-এ আপলোড করুন এবং স্থায়ী ইমেজ লিঙ্ক পান যা Notion-এর সব জায়গায় কাজ করে।",
    "howTitle": "এটি যেভাবে ঠিক করবেন",
    "steps": [
      {
        "title": "আপনার ইমেজ আপলোড করুন",
        "body": "আপনার ইমেজ ড্র্যাগ এবং ড্রপ করুন অথবা ব্রাউজ করতে ক্লিক করুন। আমরা কোনো কোয়ালিটি লস ছাড়াই JPG, PNG, WebP, GIF এবং SVG সাপোর্ট করি।"
      },
      {
        "title": "স্থায়ী URL কপি করুন",
        "body": "আপনার ইমেজটি তাৎক্ষণিকভাবে একটি স্থায়ী URL পাবে। এটি আপনার ক্লিপবোর্ডে কপি করতে ক্লিক করুন। এই URL কখনো মেয়াদোত্তীর্ণ বা পরিবর্তন হবে না।"
      },
      {
        "title": "Notion-এ এমবেড করুন",
        "body": "Notion-এ /image টাইপ করুন, 'Embed link' নির্বাচন করুন এবং URL-টি পেস্ট করুন। আপনার ইমেজ ImageToURL থেকে লোড হবে এবং কখনো মেয়াদোত্তীর্ণ হবে না।"
      }
    ],
    "whyTitle": "Notion ইমেজ সমস্যা",
    "whyItems": [
      {
        "title": "URL নীরবে মেয়াদোত্তীর্ণ হয়",
        "body": "Notion অস্থায়ী সাইনড URL তৈরি করে যা কোনো সতর্কতা ছাড়াই মেয়াদোত্তীর্ণ হয়ে যায়, ফলে আপনার ইমেজের জায়গায় ফাঁকা জায়গা দেখা যায়।"
      },
      {
        "title": "পাবলিশ করা পেজ নষ্ট হয়ে যায়",
        "body": "আপনি যখন কোনো Notion পেজ ওয়েব-এ পাবলিশ করেন, তখন আপনার ওয়ার্কস্পেসে ঠিকঠাক দেখালেও ভিজিটরদের জন্য ইমেজ লোড হওয়া বন্ধ হয়ে যেতে পারে।"
      },
      {
        "title": "শেয়ার করা লিঙ্ক কাজ করে না",
        "body": "ক্লায়েন্ট বা সহকর্মীর সাথে Notion পেজের লিঙ্ক শেয়ার করলে শুরুতে কাজ করলেও, তারা দেখার আগেই ইমেজ মেয়াদোত্তীর্ণ হয়ে যেতে পারে।"
      }
    ],
    "faqTitle": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "faqs": [
      {
        "q": "পাবলিশ করা Notion পেজে ইমেজ কেন নষ্ট হয়ে যায়?",
        "a": "Notion অস্থায়ী সাইনড URL ব্যবহার করে যাতে অথেন্টিকেশন টোকেন থাকে যা মেয়াদোত্তীর্ণ হয়ে যায়। স্থায়ী URL সহ এক্সটার্নাল হোস্টিং এই সমস্যার সমাধান করে।"
      },
      {
        "q": "Notion-এ এক্সটার্নাল ইমেজ কীভাবে ব্যবহার করব?",
        "a": "ImageToURL-এ আপলোড করুন, স্থায়ী লিঙ্ক কপি করুন, তারপর Notion-এ /image কমান্ড ব্যবহার করে URL-টি এমবেড করুন।"
      },
      {
        "q": "এক্সটার্নাল হোস্টিং করা ইমেজ কি Notion API-তে কাজ করবে?",
        "a": "হ্যাঁ, এক্সটার্নাল URL-গুলোকে API-তে 'external' টাইপ হিসেবে গণ্য করা হয়, যা ইন্টিগ্রেশন এবং অটোমেশনের জন্য স্থিতিশীল।"
      },
      {
        "q": "ImageToURL-এর ইমেজ কি Notion টেমপ্লেটে কাজ করবে?",
        "a": "হ্যাঁ, টেমপ্লেট ডুপ্লিকেট করার সময় এগুলো নিখুঁতভাবে কাজ করে, যা অভ্যন্তরীণ Notion ইমেজের ক্ষেত্রে হয় না।"
      },
      {
        "q": "আমি কি এটি Super বা Fruition দিয়ে তৈরি Notion ওয়েবসাইটের জন্য ব্যবহার করতে পারি?",
        "a": "অবশ্যই। এই টুলগুলো আপনার পেজগুলোকে ওয়েবসাইট হিসেবে রেন্ডার করে, এবং স্থায়ী URL নিশ্চিত করে যে আপনার সাইটের ইমেজ কখনো নষ্ট হবে না।"
      }
    ],
    "ctaTitle": "আপনার Notion ইমেজ স্থায়ীভাবে ঠিক করুন",
    "ctaBody": "একটি ইমেজ আপলোড করুন, স্থায়ী URL পান এবং Notion-এ এমবেড করুন যাতে আপনার কন্টেন্ট কখনো নষ্ট না হয়।",
    "ctaButton": "এখনই আপলোড করুন"
  },
  "fa": {
    "metaTitle": "میزبانی تصویر برای صفحات Notion — لینک‌های دائمی | ImageToURL",
    "metaDescription": "لینک‌های داخلی تصاویر در Notion پس از مدتی منقضی می‌شوند. از ImageToURL برای دریافت لینک‌های دائمی استفاده کنید که هرگز در فضای کاری Notion شما از کار نمی‌افتند.",
    "schemaName": "ImageToURL",
    "schemaDescription": "ابزاری برای ارائه لینک‌های دائمی و قابل اعتماد برای تصاویر در صفحات Notion جهت جلوگیری از خرابی لینک‌ها در محتوای منتشر شده.",
    "badge": "کاربران NOTION",
    "h1Pre": "میزبانی تصویر برای Notion",
    "h1Highlight": "که هرگز خراب نمی‌شود.",
    "intro": "لینک‌های داخلی تصاویر در Notion در صفحات منتشر شده و لینک‌های اشتراک‌گذاری شده منقضی می‌شوند. تصاویر خود را در ImageToURL آپلود کنید و لینک‌های دائمی دریافت کنید که در هر جایی که Notion کار می‌کند، فعال باشند.",
    "howTitle": "چگونه آن را اصلاح کنیم",
    "steps": [
      {
        "title": "تصویر خود را آپلود کنید",
        "body": "تصویر خود را بکشید و رها کنید یا برای انتخاب فایل کلیک کنید. ما از فرمت‌های JPG، PNG، WebP، GIF و SVG بدون افت کیفیت پشتیبانی می‌کنیم."
      },
      {
        "title": "لینک دائمی را کپی کنید",
        "body": "تصویر شما بلافاصله یک لینک دائمی دریافت می‌کند. برای کپی کردن آن در کلیپ‌بورد کلیک کنید. این لینک هرگز منقضی یا تغییر نمی‌کند."
      },
      {
        "title": "در Notion جای‌گذاری کنید",
        "body": "در Notion، عبارت /image را تایپ کنید، گزینه 'Embed link' را انتخاب کرده و لینک را جای‌گذاری کنید. تصویر شما از ImageToURL بارگذاری شده و هرگز منقضی نمی‌شود."
      }
    ],
    "whyTitle": "مشکل تصاویر در Notion",
    "whyItems": [
      {
        "title": "لینک‌ها بی‌سروصدا منقضی می‌شوند",
        "body": "Notion لینک‌های موقت امضا شده‌ای تولید می‌کند که بدون هشدار منقضی می‌شوند و فضاهای خالی را به جای تصاویر شما باقی می‌گذارند."
      },
      {
        "title": "صفحات منتشر شده خراب می‌شوند",
        "body": "هنگامی که یک صفحه Notion را در وب منتشر می‌کنید، تصاویری که در فضای کاری شما به درستی نمایش داده می‌شدند، ممکن است برای بازدیدکنندگان بارگذاری نشوند."
      },
      {
        "title": "لینک‌های اشتراک‌گذاری شده از کار می‌افتند",
        "body": "اشتراک‌گذاری لینک صفحه Notion با یک مشتری یا همکار در ابتدا کار می‌کند، اما تصاویر ممکن است قبل از مشاهده آن‌ها توسط مخاطب منقضی شوند."
      }
    ],
    "faqTitle": "سوالات متداول",
    "faqs": [
      {
        "q": "چرا تصاویر در صفحات منتشر شده Notion خراب می‌شوند؟",
        "a": "Notion از لینک‌های موقت امضا شده با توکن‌های احراز هویت استفاده می‌کند که منقضی می‌شوند. میزبانی خارجی با لینک‌های دائمی این مشکل را حل می‌کند."
      },
      {
        "q": "چگونه از یک تصویر خارجی در Notion استفاده کنم؟",
        "a": "تصویر را در ImageToURL آپلود کنید، لینک دائمی را کپی کنید و سپس از دستور /image در Notion برای جای‌گذاری لینک استفاده کنید."
      },
      {
        "q": "آیا تصاویر میزبانی شده در خارج از Notion در API کار می‌کنند؟",
        "a": "بله، لینک‌های خارجی در API به عنوان نوع 'external' در نظر گرفته می‌شوند که آن‌ها را برای یکپارچه‌سازی‌ها و اتوماسیون‌ها پایدار می‌کند."
      },
      {
        "q": "آیا تصاویر ImageToURL در قالب‌های Notion کار می‌کنند؟",
        "a": "بله، برخلاف تصاویر داخلی Notion که ممکن است خراب شوند، این تصاویر هنگام کپی کردن قالب به درستی منتقل می‌شوند."
      },
      {
        "q": "آیا می‌توانم از این برای وب‌سایت Notion ساخته شده با Super یا Fruition استفاده کنم؟",
        "a": "قطعاً. این ابزارها صفحات شما را به عنوان وب‌سایت نمایش می‌دهند و لینک‌های دائمی تضمین می‌کنند که تصاویر سایت شما هرگز خراب نشوند."
      }
    ],
    "ctaTitle": "تصاویر Notion خود را برای همیشه اصلاح کنید",
    "ctaBody": "یک تصویر آپلود کنید، لینک دائمی بگیرید و آن را در Notion جای‌گذاری کنید تا مطمئن شوید محتوای شما هرگز خراب نمی‌شود.",
    "ctaButton": "همین حالا آپلود کنید"
  },
  "ur": {
    "metaTitle": "Notion صفحات کے لیے امیج ہوسٹنگ — مستقل URLs | ImageToURL",
    "metaDescription": "Notion کے بلٹ ان امیج URLs پبلش شدہ صفحات پر ختم ہو جاتے ہیں۔ اپنے Notion ورک اسپیس میں کبھی نہ ٹوٹنے والے مستقل امیج URLs کے لیے ImageToURL استعمال کریں۔",
    "schemaName": "ImageToURL",
    "schemaDescription": "ایک ٹول جو Notion صفحات کے لیے مستقل اور قابل اعتماد امیج URLs فراہم کرتا ہے تاکہ پبلش شدہ مواد پر ٹوٹے ہوئے لنکس سے بچا جا سکے۔",
    "badge": "NOTION صارفین",
    "h1Pre": "Notion کے لیے امیج ہوسٹنگ",
    "h1Highlight": "جو کبھی نہیں ٹوٹتی۔",
    "intro": "Notion کے اندرونی امیج URLs پبلش شدہ صفحات اور شیئر کردہ لنکس پر ختم ہو جاتے ہیں۔ ImageToURL پر اپ لوڈ کریں اور مستقل امیج لنکس حاصل کریں جو ہر جگہ کام کرتے ہیں جہاں Notion کام کرتا ہے۔",
    "howTitle": "اسے کیسے ٹھیک کریں",
    "steps": [
      {
        "title": "اپنی تصویر اپ لوڈ کریں",
        "body": "اپنی تصویر کو ڈریگ اینڈ ڈراپ کریں یا براؤز کرنے کے لیے کلک کریں۔ ہم بغیر کسی کوالٹی کے نقصان کے JPG, PNG, WebP, GIF, اور SVG کو سپورٹ کرتے ہیں۔"
      },
      {
        "title": "مستقل URL کاپی کریں",
        "body": "آپ کی تصویر کو فوری طور پر ایک مستقل URL مل جاتا ہے۔ اسے اپنے کلپ بورڈ پر کاپی کرنے کے لیے کلک کریں۔ یہ URL کبھی ختم یا تبدیل نہیں ہوگا۔"
      },
      {
        "title": "Notion میں ایمبیڈ کریں",
        "body": "Notion میں، /image ٹائپ کریں، 'Embed link' منتخب کریں، اور URL پیسٹ کریں۔ آپ کی تصویر ImageToURL سے لوڈ ہوگی اور کبھی ختم نہیں ہوگی۔"
      }
    ],
    "whyTitle": "Notion امیج کا مسئلہ",
    "whyItems": [
      {
        "title": "URLs خاموشی سے ختم ہو جاتے ہیں",
        "body": "Notion عارضی سائنڈ URLs تیار کرتا ہے جو بغیر کسی انتباہ کے ختم ہو جاتے ہیں، جس سے وہاں خالی جگہیں رہ جاتی ہیں جہاں آپ کی تصاویر ہوتی تھیں۔"
      },
      {
        "title": "پبلش شدہ صفحات ٹوٹ جاتے ہیں",
        "body": "جب آپ کسی Notion صفحہ کو ویب پر پبلش کرتے ہیں، تو وہ تصاویر جو آپ کے ورک اسپیس میں ٹھیک نظر آتی تھیں، وزیٹرز کے لیے لوڈ ہونا بند ہو سکتی ہیں۔"
      },
      {
        "title": "شیئر کردہ لنکس ناکام ہو جاتے ہیں",
        "body": "کسی کلائنٹ یا ساتھی کے ساتھ Notion صفحہ کا لنک شیئر کرنا شروع میں کام کرتا ہے، لیکن تصاویر ان کے دیکھنے سے پہلے ختم ہو سکتی ہیں۔"
      }
    ],
    "faqTitle": "اکثر پوچھے گئے سوالات",
    "faqs": [
      {
        "q": "پبلش شدہ Notion صفحات پر تصاویر کیوں ٹوٹ جاتی ہیں؟",
        "a": "Notion تصدیقی ٹوکنز کے ساتھ عارضی سائنڈ URLs استعمال کرتا ہے جو ختم ہو جاتے ہیں۔ مستقل URLs کے ساتھ بیرونی ہوسٹنگ اس مسئلے کو حل کرتی ہے۔"
      },
      {
        "q": "میں Notion میں بیرونی تصویر کیسے استعمال کروں؟",
        "a": "ImageToURL پر اپ لوڈ کریں، مستقل لنک کاپی کریں، پھر URL کو ایمبیڈ کرنے کے لیے Notion میں /image کمانڈ استعمال کریں۔"
      },
      {
        "q": "کیا بیرونی طور پر ہوسٹ کی گئی تصاویر Notion کی API میں کام کریں گی؟",
        "a": "جی ہاں، بیرونی URLs کو API میں 'external' قسم کے طور پر سمجھا جاتا ہے، جو انہیں انٹیگریشنز اور آٹومیشنز کے لیے مستحکم بناتا ہے۔"
      },
      {
        "q": "کیا ImageToURL کی تصاویر Notion ٹیمپلیٹس میں کام کرتی ہیں؟",
        "a": "جی ہاں، جب کوئی ٹیمپلیٹ ڈپلیکیٹ کیا جاتا ہے تو وہ بالکل منتقل ہو جاتی ہیں، Notion کی اندرونی تصاویر کے برعکس جو ٹوٹ سکتی ہیں۔"
      },
      {
        "q": "کیا میں اسے Super یا Fruition کے ساتھ بنائے گئے Notion ویب سائٹ کے لیے استعمال کر سکتا ہوں؟",
        "a": "بالکل۔ یہ ٹولز آپ کے صفحات کو ویب سائٹس کے طور پر رینڈر کرتے ہیں، اور مستقل URLs اس بات کو یقینی بناتے ہیں کہ آپ کی سائٹ کی تصاویر کبھی نہ ٹوٹیں۔"
      }
    ],
    "ctaTitle": "اپنی Notion تصاویر کو مستقل طور پر ٹھیک کریں",
    "ctaBody": "ایک تصویر اپ لوڈ کریں، مستقل URL حاصل کریں، اور اسے Notion میں ایمبیڈ کریں تاکہ اس بات کو یقینی بنایا جا سکے کہ آپ کا مواد کبھی نہ ٹوٹے۔",
    "ctaButton": "ابھی اپ لوڈ کریں"
  },
  "ru": {
    "metaTitle": "Хостинг изображений для Notion — постоянные URL | ImageToURL",
    "metaDescription": "Встроенные URL изображений в Notion перестают работать на опубликованных страницах. Используйте ImageToURL для получения постоянных ссылок, которые никогда не сломаются в вашем рабочем пространстве Notion.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Инструмент, предоставляющий постоянные и надежные URL изображений для страниц Notion, чтобы предотвратить появление битых ссылок в опубликованном контенте.",
    "badge": "ДЛЯ ПОЛЬЗОВАТЕЛЕЙ NOTION",
    "h1Pre": "Хостинг изображений для Notion,",
    "h1Highlight": "которые никогда не ломаются.",
    "intro": "Внутренние URL изображений в Notion имеют срок действия на опубликованных страницах и в общих ссылках. Загрузите их в ImageToURL и получите постоянные ссылки, которые работают везде, где работает Notion.",
    "howTitle": "Как это исправить",
    "steps": [
      {
        "title": "Загрузите изображение",
        "body": "Перетащите изображение или нажмите, чтобы выбрать файл. Мы поддерживаем JPG, PNG, WebP, GIF и SVG без потери качества."
      },
      {
        "title": "Скопируйте постоянный URL",
        "body": "Ваше изображение мгновенно получит постоянный URL. Нажмите, чтобы скопировать его в буфер обмена. Этот URL никогда не истечет и не изменится."
      },
      {
        "title": "Вставьте в Notion",
        "body": "В Notion введите /image, выберите 'Embed link' (Вставить ссылку) и вставьте URL. Ваше изображение будет загружаться через ImageToURL и никогда не исчезнет."
      }
    ],
    "whyTitle": "Проблема с изображениями в Notion",
    "whyItems": [
      {
        "title": "URL перестают работать без предупреждения",
        "body": "Notion генерирует временные подписанные URL, которые истекают без уведомления, оставляя пустые места там, где раньше были ваши изображения."
      },
      {
        "title": "Опубликованные страницы ломаются",
        "body": "Когда вы публикуете страницу Notion в интернете, изображения, которые отлично выглядели в вашем рабочем пространстве, могут перестать загружаться у посетителей."
      },
      {
        "title": "Общие ссылки не работают",
        "body": "Обмен ссылкой на страницу Notion с клиентом или коллегой работает поначалу, но изображения могут истечь до того, как они их увидят."
      }
    ],
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Почему изображения ломаются на опубликованных страницах Notion?",
        "a": "Notion использует временные подписанные URL с токенами аутентификации, которые имеют срок действия. Внешний хостинг с постоянными URL решает эту проблему."
      },
      {
        "q": "Как использовать внешнее изображение в Notion?",
        "a": "Загрузите его в ImageToURL, скопируйте постоянную ссылку, а затем используйте команду /image в Notion, чтобы вставить URL."
      },
      {
        "q": "Будут ли внешние изображения работать в API Notion?",
        "a": "Да, внешние URL обрабатываются как тип 'external' в API, что делает их стабильными для интеграций и автоматизаций."
      },
      {
        "q": "Работают ли изображения ImageToURL в шаблонах Notion?",
        "a": "Да, они отлично переносятся при дублировании шаблона, в отличие от внутренних изображений Notion, которые могут сломаться."
      },
      {
        "q": "Могу ли я использовать это для сайта на Notion, созданного с помощью Super или Fruition?",
        "a": "Безусловно. Эти инструменты отображают ваши страницы как веб-сайты, а постоянные URL гарантируют, что изображения на вашем сайте никогда не сломаются."
      }
    ],
    "ctaTitle": "Исправьте свои изображения в Notion навсегда",
    "ctaBody": "Загрузите изображение, получите постоянный URL и вставьте его в Notion, чтобы ваш контент никогда не ломался.",
    "ctaButton": "Загрузить сейчас"
  },
  "th": {
    "metaTitle": "โฮสต์รูปภาพสำหรับ Notion — ลิงก์ถาวร | ImageToURL",
    "metaDescription": "ลิงก์รูปภาพใน Notion มักหมดอายุเมื่อเผยแพร่หน้าเว็บ ใช้ ImageToURL เพื่อรับลิงก์รูปภาพถาวรที่ไม่เสียในพื้นที่ทำงาน Notion ของคุณ",
    "schemaName": "ImageToURL",
    "schemaDescription": "เครื่องมือสำหรับสร้างลิงก์รูปภาพที่ถาวรและเชื่อถือได้สำหรับ Notion เพื่อป้องกันปัญหาลิงก์เสียบนเนื้อหาที่เผยแพร่",
    "badge": "สำหรับผู้ใช้ NOTION",
    "h1Pre": "โฮสต์รูปภาพสำหรับ Notion",
    "h1Highlight": "ที่ไม่มีวันเสีย",
    "intro": "ลิงก์รูปภาพภายในของ Notion จะหมดอายุเมื่อเผยแพร่หน้าเว็บหรือแชร์ลิงก์ อัปโหลดไปยัง ImageToURL เพื่อรับลิงก์รูปภาพถาวรที่ใช้งานได้ทุกที่ที่ Notion รองรับ",
    "howTitle": "วิธีแก้ไข",
    "steps": [
      {
        "title": "อัปโหลดรูปภาพของคุณ",
        "body": "ลากและวางรูปภาพของคุณหรือคลิกเพื่อเลือกไฟล์ เรารองรับ JPG, PNG, WebP, GIF และ SVG โดยไม่มีการลดทอนคุณภาพ"
      },
      {
        "title": "คัดลอกลิงก์ถาวร",
        "body": "รูปภาพของคุณจะได้รับลิงก์ถาวรทันที คลิกเพื่อคัดลอกไปยังคลิปบอร์ด ลิงก์นี้จะไม่มีวันหมดอายุหรือเปลี่ยนแปลง"
      },
      {
        "title": "ฝังใน Notion",
        "body": "ใน Notion ให้พิมพ์ /image เลือก 'Embed link' แล้ววางลิงก์ รูปภาพของคุณจะโหลดผ่าน ImageToURL และไม่มีวันหมดอายุ"
      }
    ],
    "whyTitle": "ปัญหาเรื่องรูปภาพใน Notion",
    "whyItems": [
      {
        "title": "ลิงก์หมดอายุโดยไม่แจ้งเตือน",
        "body": "Notion สร้างลิงก์ชั่วคราวที่มีการลงนามซึ่งจะหมดอายุโดยไม่มีการเตือน ทำให้เกิดพื้นที่ว่างแทนที่รูปภาพของคุณ"
      },
      {
        "title": "หน้าเว็บที่เผยแพร่แสดงผลไม่ได้",
        "body": "เมื่อคุณเผยแพร่หน้า Notion สู่สาธารณะ รูปภาพที่ดูปกติในพื้นที่ทำงานของคุณอาจไม่แสดงผลสำหรับผู้เข้าชม"
      },
      {
        "title": "ลิงก์ที่แชร์ใช้งานไม่ได้",
        "body": "การแชร์ลิงก์หน้า Notion กับลูกค้าหรือเพื่อนร่วมงานอาจใช้งานได้ในตอนแรก แต่รูปภาพอาจหมดอายุก่อนที่พวกเขาจะเปิดดู"
      }
    ],
    "faqTitle": "คำถามที่พบบ่อย",
    "faqs": [
      {
        "q": "ทำไมรูปภาพถึงเสียบนหน้า Notion ที่เผยแพร่?",
        "a": "Notion ใช้ลิงก์ชั่วคราวที่มีโทเค็นยืนยันตัวตนซึ่งมีวันหมดอายุ การโฮสต์ภายนอกด้วยลิงก์ถาวรจะช่วยแก้ปัญหานี้ได้"
      },
      {
        "q": "ฉันจะใช้รูปภาพจากภายนอกใน Notion ได้อย่างไร?",
        "a": "อัปโหลดไปยัง ImageToURL คัดลอกลิงก์ถาวร จากนั้นใช้คำสั่ง /image ใน Notion เพื่อฝังลิงก์"
      },
      {
        "q": "รูปภาพที่โฮสต์ภายนอกจะทำงานกับ Notion API ได้หรือไม่?",
        "a": "ได้ ลิงก์ภายนอกจะถูกมองว่าเป็นประเภท 'external' ใน API ทำให้มีความเสถียรสำหรับการเชื่อมต่อและระบบอัตโนมัติ"
      },
      {
        "q": "รูปภาพจาก ImageToURL ใช้กับเทมเพลต Notion ได้ไหม?",
        "a": "ได้ รูปภาพเหล่านี้จะคงอยู่สมบูรณ์เมื่อมีการคัดลอกเทมเพลต ต่างจากรูปภาพภายในของ Notion ที่อาจเสียได้"
      },
      {
        "q": "ฉันสามารถใช้สิ่งนี้กับเว็บไซต์ Notion ที่สร้างด้วย Super หรือ Fruition ได้หรือไม่?",
        "a": "ได้แน่นอน เครื่องมือเหล่านี้แสดงผลหน้าเว็บของคุณเป็นเว็บไซต์ และลิงก์ถาวรจะช่วยให้มั่นใจว่ารูปภาพบนเว็บไซต์ของคุณจะไม่เสีย"
      }
    ],
    "ctaTitle": "แก้ไขรูปภาพใน Notion ของคุณอย่างถาวร",
    "ctaBody": "อัปโหลดรูปภาพ รับลิงก์ถาวร และฝังใน Notion เพื่อให้แน่ใจว่าเนื้อหาของคุณจะไม่เสียอีกต่อไป",
    "ctaButton": "อัปโหลดเลย"
  },
  "ko": {
    "metaTitle": "Notion 페이지용 이미지 호스팅 — 영구 URL | ImageToURL",
    "metaDescription": "Notion의 기본 이미지 URL은 게시된 페이지에서 만료됩니다. ImageToURL을 사용하여 Notion 워크스페이스에서 절대 깨지지 않는 영구적인 이미지 URL을 사용하세요.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Notion 페이지의 게시된 콘텐츠에서 링크가 깨지는 것을 방지하기 위해 영구적이고 안정적인 이미지 URL을 제공하는 도구입니다.",
    "badge": "NOTION 사용자",
    "h1Pre": "Notion을 위한 이미지 호스팅",
    "h1Highlight": "절대 깨지지 않습니다.",
    "intro": "Notion의 내부 이미지 URL은 게시된 페이지나 공유 링크에서 만료됩니다. ImageToURL에 업로드하고 Notion이 작동하는 모든 곳에서 사용할 수 있는 영구적인 이미지 링크를 받으세요.",
    "howTitle": "해결 방법",
    "steps": [
      {
        "title": "이미지 업로드",
        "body": "이미지를 드래그 앤 드롭하거나 클릭하여 선택하세요. 품질 저하 없이 JPG, PNG, WebP, GIF, SVG를 지원합니다."
      },
      {
        "title": "영구 URL 복사",
        "body": "이미지에 대한 영구 URL이 즉시 생성됩니다. 클릭하여 클립보드에 복사하세요. 이 URL은 절대 만료되거나 변경되지 않습니다."
      },
      {
        "title": "Notion에 삽입",
        "body": "Notion에서 /image를 입력하고 '링크 삽입(Embed link)'을 선택한 뒤 URL을 붙여넣으세요. 이미지가 ImageToURL에서 로드되며 절대 만료되지 않습니다."
      }
    ],
    "whyTitle": "Notion 이미지 문제",
    "whyItems": [
      {
        "title": "URL의 자동 만료",
        "body": "Notion은 경고 없이 만료되는 임시 서명된 URL을 생성하여, 이미지 자리에 빈 공간만 남게 만듭니다."
      },
      {
        "title": "게시된 페이지의 오류",
        "body": "Notion 페이지를 웹에 게시하면 워크스페이스에서는 잘 보이던 이미지가 방문자에게는 표시되지 않을 수 있습니다."
      },
      {
        "title": "공유 링크 실패",
        "body": "클라이언트나 동료와 Notion 페이지 링크를 공유하면 처음에는 잘 작동하지만, 상대방이 확인하기 전에 이미지가 만료될 수 있습니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "게시된 Notion 페이지에서 이미지가 왜 깨지나요?",
        "a": "Notion은 만료되는 인증 토큰이 포함된 임시 서명 URL을 사용하기 때문입니다. 영구 URL을 제공하는 외부 호스팅을 사용하면 이 문제가 해결됩니다."
      },
      {
        "q": "Notion에서 외부 이미지는 어떻게 사용하나요?",
        "a": "ImageToURL에 업로드하고 영구 링크를 복사한 뒤, Notion에서 /image 명령어를 사용하여 URL을 삽입하세요."
      },
      {
        "q": "외부 호스팅 이미지는 Notion API에서도 작동하나요?",
        "a": "네, 외부 URL은 API에서 'external' 타입으로 처리되므로 통합 및 자동화에 안정적으로 사용할 수 있습니다."
      },
      {
        "q": "ImageToURL 이미지는 Notion 템플릿에서도 작동하나요?",
        "a": "네, 깨질 수 있는 Notion 내부 이미지와 달리 템플릿을 복제해도 완벽하게 유지됩니다."
      },
      {
        "q": "Super나 Fruition으로 만든 Notion 웹사이트에도 사용할 수 있나요?",
        "a": "물론입니다. 이러한 도구들은 페이지를 웹사이트로 렌더링하며, 영구 URL을 사용하면 사이트 이미지가 절대 깨지지 않습니다."
      }
    ],
    "ctaTitle": "Notion 이미지를 영구적으로 해결하세요",
    "ctaBody": "이미지를 업로드하고 영구 URL을 받아 Notion에 삽입하여 콘텐츠가 절대 깨지지 않도록 하세요.",
    "ctaButton": "지금 업로드하기"
  },
  "sw": {
    "metaTitle": "Ukaribishaji wa Picha kwa Kurasa za Notion — URL za Kudumu | ImageToURL",
    "metaDescription": "URL za picha za Notion huisha muda wake kwenye kurasa zilizochapishwa. Tumia ImageToURL kwa URL za picha za kudumu ambazo hazitaharibika kamwe kwenye Notion workspace yako.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Zana inayotoa URL za picha za kudumu na za kuaminika kwa kurasa za Notion ili kuzuia viungo vilivyoharibika kwenye maudhui yaliyochapishwa.",
    "badge": "WATUMIAJI WA NOTION",
    "h1Pre": "Ukaribishaji wa Picha kwa Notion",
    "h1Highlight": "ambazo haziharibiki.",
    "intro": "URL za picha za ndani za Notion huisha muda wake kwenye kurasa zilizochapishwa na viungo vilivyoshirikiwa. Pakia kwenye ImageToURL na upate viungo vya picha vya kudumu vinavyofanya kazi popote Notion inapofanya kazi.",
    "howTitle": "Jinsi ya Kurekebisha",
    "steps": [
      {
        "title": "Pakia Picha Yako",
        "body": "Buruta na udondoshe picha yako au bofya ili kuvinjari. Tunatumia JPG, PNG, WebP, GIF, na SVG bila kupoteza ubora."
      },
      {
        "title": "Nakili URL ya Kudumu",
        "body": "Picha yako inapata URL ya kudumu papo hapo. Bofya ili kuinakili kwenye clipboard yako. URL hii haitaisha muda wake au kubadilika kamwe."
      },
      {
        "title": "Embed kwenye Notion",
        "body": "Katika Notion, chapa /image, chagua 'Embed link', na ubandike URL. Picha yako itapakia kutoka ImageToURL na haitaisha muda wake kamwe."
      }
    ],
    "whyTitle": "Tatizo la Picha za Notion",
    "whyItems": [
      {
        "title": "URL Huisha Muda Wake Kimya Kimya",
        "body": "Notion hutengeneza URL za muda zilizotiwa saini ambazo huisha muda wake bila onyo, na kuacha nafasi tupu ambapo picha zako zilikuwa."
      },
      {
        "title": "Kurasa Zilizochapishwa Huharibika",
        "body": "Unapochapisha ukurasa wa Notion kwenye wavuti, picha zilizokuwa zikionekana vizuri kwenye workspace yako zinaweza kuacha kupakia kwa wageni."
      },
      {
        "title": "Viungo Vilivyoshirikiwa Hushindwa",
        "body": "Kushiriki kiungo cha ukurasa wa Notion na mteja au mfanyakazi mwenzako hufanya kazi mwanzoni, lakini picha zinaweza kuisha muda wake kabla hawajaitazama."
      }
    ],
    "faqTitle": "Maswali Yanayoulizwa Mara kwa Mara",
    "faqs": [
      {
        "q": "Kwa nini picha huharibika kwenye kurasa za Notion zilizochapishwa?",
        "a": "Notion hutumia URL za muda zilizotiwa saini na tokeni za uthibitishaji zinazoisha muda wake. Ukaribishaji wa nje wenye URL za kudumu hutatua hili."
      },
      {
        "q": "Ninawezaje kutumia picha ya nje kwenye Notion?",
        "a": "Pakia kwenye ImageToURL, nakili kiungo cha kudumu, kisha tumia amri ya /image kwenye Notion ili ku-embed URL hiyo."
      },
      {
        "q": "Je, picha zilizokaribishwa nje zitafanya kazi kwenye API ya Notion?",
        "a": "Ndiyo, URL za nje huchukuliwa kama aina ya 'external' kwenye API, na kuzifanya kuwa thabiti kwa ajili ya miunganisho na otomatiki."
      },
      {
        "q": "Je, picha za ImageToURL hufanya kazi kwenye template za Notion?",
        "a": "Ndiyo, huhamishika kikamilifu wakati template inaponakiliwa, tofauti na picha za ndani za Notion ambazo zinaweza kuharibika."
      },
      {
        "q": "Je, ninaweza kutumia hii kwa tovuti ya Notion iliyojengwa kwa Super au Fruition?",
        "a": "Bila shaka. Zana hizi hutoa kurasa zako kama tovuti, na URL za kudumu huhakikisha picha za tovuti yako haziharibiki kamwe."
      }
    ],
    "ctaTitle": "Rekebisha picha zako za Notion kabisa",
    "ctaBody": "Pakia picha, pata URL ya kudumu, na u-embed kwenye Notion ili kuhakikisha maudhui yako hayaharibiki kamwe.",
    "ctaButton": "Pakia Sasa"
  },
  "ms": {
    "metaTitle": "Hos Imej untuk Halaman Notion — URL Kekal | ImageToURL",
    "metaDescription": "URL imej terbina dalam Notion akan tamat tempoh pada halaman yang diterbitkan. Gunakan ImageToURL untuk URL imej kekal yang tidak akan rosak dalam ruang kerja Notion anda.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Alat yang menyediakan URL imej yang kekal dan boleh dipercayai untuk halaman Notion bagi mengelakkan pautan rosak pada kandungan yang diterbitkan.",
    "badge": "PENGGUNA NOTION",
    "h1Pre": "Hos Imej untuk Notion",
    "h1Highlight": "yang tidak akan rosak.",
    "intro": "URL imej dalaman Notion akan tamat tempoh pada halaman yang diterbitkan dan pautan yang dikongsi. Muat naik ke ImageToURL dan dapatkan pautan imej kekal yang berfungsi di mana-mana Notion digunakan.",
    "howTitle": "Cara Membaikinya",
    "steps": [
      {
        "title": "Muat Naik Imej Anda",
        "body": "Seret dan lepas imej anda atau klik untuk melayari. Kami menyokong JPG, PNG, WebP, GIF, dan SVG tanpa kehilangan kualiti."
      },
      {
        "title": "Salin URL Kekal",
        "body": "Imej anda mendapat URL kekal serta-merta. Klik untuk menyalinnya ke papan keratan anda. URL ini tidak akan tamat tempoh atau berubah."
      },
      {
        "title": "Benamkan dalam Notion",
        "body": "Dalam Notion, taip /image, pilih 'Embed link', dan tampal URL tersebut. Imej anda dimuatkan daripada ImageToURL dan tidak akan tamat tempoh."
      }
    ],
    "whyTitle": "Masalah Imej Notion",
    "whyItems": [
      {
        "title": "URL Tamat Tempoh Tanpa Sedar",
        "body": "Notion menjana URL sementara yang ditandatangani yang tamat tempoh tanpa amaran, meninggalkan ruang kosong di tempat imej anda sepatutnya berada."
      },
      {
        "title": "Halaman Diterbitkan Rosak",
        "body": "Apabila anda menerbitkan halaman Notion ke web, imej yang kelihatan baik dalam ruang kerja anda boleh berhenti dimuatkan untuk pelawat."
      },
      {
        "title": "Pautan Dikongsi Gagal",
        "body": "Berkongsi pautan halaman Notion dengan pelanggan atau rakan sekerja berfungsi pada mulanya, tetapi imej boleh tamat tempoh sebelum mereka melihatnya."
      }
    ],
    "faqTitle": "Soalan Lazim",
    "faqs": [
      {
        "q": "Mengapa imej rosak pada halaman Notion yang diterbitkan?",
        "a": "Notion menggunakan URL sementara yang ditandatangani dengan token pengesahan yang tamat tempoh. Pengehosan luaran dengan URL kekal menyelesaikan masalah ini."
      },
      {
        "q": "Bagaimanakah cara saya menggunakan imej luaran dalam Notion?",
        "a": "Muat naik ke ImageToURL, salin pautan kekal, kemudian gunakan arahan /image dalam Notion untuk membenamkan URL tersebut."
      },
      {
        "q": "Adakah imej yang dihoskan secara luaran berfungsi dalam API Notion?",
        "a": "Ya, URL luaran dianggap sebagai jenis 'external' dalam API, menjadikannya stabil untuk integrasi dan automasi."
      },
      {
        "q": "Adakah imej ImageToURL berfungsi dalam templat Notion?",
        "a": "Ya, ia dibawa dengan sempurna apabila templat diduplikasi, tidak seperti imej Notion dalaman yang boleh rosak."
      },
      {
        "q": "Bolehkah saya menggunakan ini untuk laman web Notion yang dibina dengan Super atau Fruition?",
        "a": "Sudah tentu. Alat ini memaparkan halaman anda sebagai laman web, dan URL kekal memastikan imej laman anda tidak akan rosak."
      }
    ],
    "ctaTitle": "Baiki imej Notion anda secara kekal",
    "ctaBody": "Muat naik imej, dapatkan URL kekal, dan benamkan dalam Notion untuk memastikan kandungan anda tidak akan rosak.",
    "ctaButton": "Muat Naik Sekarang"
  },
  "ta": {
    "metaTitle": "Notion பக்கங்களுக்கான பட ஹோஸ்டிங் — நிரந்தர URL-கள் | ImageToURL",
    "metaDescription": "Notion-ன் உள்ளமைக்கப்பட்ட பட URL-கள் வெளியிடப்பட்ட பக்கங்களில் காலாவதியாகிவிடும். உங்கள் Notion பணியிடத்தில் எப்போதும் செயல்படும் நிரந்தர பட URL-களுக்கு ImageToURL-ஐப் பயன்படுத்தவும்.",
    "schemaName": "ImageToURL",
    "schemaDescription": "வெளியிடப்பட்ட உள்ளடக்கத்தில் உடைந்த இணைப்புகளைத் தவிர்க்க, Notion பக்கங்களுக்கு நிரந்தரமான, நம்பகமான பட URL-களை வழங்கும் ஒரு கருவி.",
    "badge": "NOTION பயனர்கள்",
    "h1Pre": "Notion-க்கான பட ஹோஸ்டிங்",
    "h1Highlight": "இது ஒருபோதும் உடையாது.",
    "intro": "Notion-ன் உள் பட URL-கள் வெளியிடப்பட்ட பக்கங்களிலும் பகிரப்பட்ட இணைப்புகளிலும் காலாவதியாகிவிடும். ImageToURL-இல் பதிவேற்றி, Notion செயல்படும் எல்லா இடங்களிலும் வேலை செய்யும் நிரந்தர பட இணைப்புகளைப் பெறுங்கள்.",
    "howTitle": "இதை எப்படி சரி செய்வது",
    "steps": [
      {
        "title": "உங்கள் படத்தை பதிவேற்றவும்",
        "body": "உங்கள் படத்தை இழுத்து விடவும் (Drag and drop) அல்லது உலாவ கிளிக் செய்யவும். நாங்கள் JPG, PNG, WebP, GIF மற்றும் SVG கோப்புகளைத் தர இழப்பின்றி ஆதரிக்கிறோம்."
      },
      {
        "title": "நிரந்தர URL-ஐ நகலெடுக்கவும்",
        "body": "உங்கள் படத்திற்கு உடனடியாக ஒரு நிரந்தர URL கிடைக்கும். அதை உங்கள் கிளிப்போர்டில் நகலெடுக்க கிளிக் செய்யவும். இந்த URL ஒருபோதும் காலாவதியாகாது அல்லது மாறாது."
      },
      {
        "title": "Notion-இல் உட்பொதிக்கவும்",
        "body": "Notion-இல், /image என்று தட்டச்சு செய்து, 'Embed link' என்பதைத் தேர்ந்தெடுத்து, URL-ஐ ஒட்டவும். உங்கள் படம் ImageToURL-லிருந்து ஏற்றப்படும் மற்றும் ஒருபோதும் காலாவதியாகாது."
      }
    ],
    "whyTitle": "Notion படச் சிக்கல்",
    "whyItems": [
      {
        "title": "URL-கள் அமைதியாக காலாவதியாகின்றன",
        "body": "Notion தற்காலிகமாக கையொப்பமிடப்பட்ட URL-களை உருவாக்குகிறது, அவை எச்சரிக்கையின்றி காலாவதியாகிவிடும், இதனால் உங்கள் படங்கள் இருந்த இடத்தில் வெற்று இடங்கள் தோன்றும்."
      },
      {
        "title": "வெளியிடப்பட்ட பக்கங்கள் உடைகின்றன",
        "body": "நீங்கள் ஒரு Notion பக்கத்தை இணையத்தில் வெளியிடும்போது, உங்கள் பணியிடத்தில் சரியாகத் தெரிந்த படங்கள் பார்வையாளர்களுக்குத் தெரியாமல் போகலாம்."
      },
      {
        "title": "பகிரப்பட்ட இணைப்புகள் தோல்வியடைகின்றன",
        "body": "ஒரு Notion பக்க இணைப்பை வாடிக்கையாளர் அல்லது சக ஊழியருடன் பகிர்வது ஆரம்பத்தில் வேலை செய்யும், ஆனால் அவர்கள் பார்ப்பதற்கு முன்பே படங்கள் காலாவதியாகிவிடலாம்."
      }
    ],
    "faqTitle": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faqs": [
      {
        "q": "வெளியிடப்பட்ட Notion பக்கங்களில் படங்கள் ஏன் உடைகின்றன?",
        "a": "Notion காலாவதியாகும் அங்கீகார டோக்கன்களைக் கொண்ட தற்காலிக கையொப்பமிடப்பட்ட URL-களைப் பயன்படுத்துகிறது. நிரந்தர URL-களுடன் கூடிய வெளிப்புற ஹோஸ்டிங் இதைச் சரிசெய்கிறது."
      },
      {
        "q": "Notion-இல் வெளிப்புறப் படத்தை எப்படிப் பயன்படுத்துவது?",
        "a": "ImageToURL-இல் பதிவேற்றி, நிரந்தர இணைப்பை நகலெடுத்து, Notion-இல் உள்ள /image கட்டளையைப் பயன்படுத்தி URL-ஐ உட்பொதிக்கவும்."
      },
      {
        "q": "வெளிப்புறமாக ஹோஸ்ட் செய்யப்பட்ட படங்கள் Notion API-இல் வேலை செய்யுமா?",
        "a": "ஆம், வெளிப்புற URL-கள் API-இல் 'external' வகையாகக் கருதப்படுகின்றன, இது ஒருங்கிணைப்புகள் மற்றும் ஆட்டோமேஷன்களுக்கு அவற்றை நிலையானதாக மாற்றுகிறது."
      },
      {
        "q": "ImageToURL படங்கள் Notion டெம்ப்ளேட்களில் வேலை செய்யுமா?",
        "a": "ஆம், ஒரு டெம்ப்ளேட் நகலெடுக்கப்படும்போது அவை அப்படியே இருக்கும், இது உடையக்கூடிய உள் Notion படங்களிலிருந்து மாறுபட்டது."
      },
      {
        "q": "Super அல்லது Fruition மூலம் உருவாக்கப்பட்ட Notion இணையதளத்திற்கு இதைப் பயன்படுத்தலாமா?",
        "a": "நிச்சயமாக. இந்த கருவிகள் உங்கள் பக்கங்களை இணையதளங்களாக மாற்றுகின்றன, மேலும் நிரந்தர URL-கள் உங்கள் தளத்தின் படங்கள் ஒருபோதும் உடையாமல் இருப்பதை உறுதி செய்கின்றன."
      }
    ],
    "ctaTitle": "உங்கள் Notion படங்களை நிரந்தரமாகச் சரிசெய்யவும்",
    "ctaBody": "ஒரு படத்தை பதிவேற்றி, நிரந்தர URL-ஐப் பெற்று, உங்கள் உள்ளடக்கம் ஒருபோதும் உடையாமல் இருப்பதை உறுதிசெய்ய Notion-இல் உட்பொதிக்கவும்.",
    "ctaButton": "இப்போது பதிவேற்றவும்"
  },
  "mr": {
    "metaTitle": "Notion पेजेससाठी इमेज होस्टिंग — कायमस्वरूपी URLs | ImageToURL",
    "metaDescription": "Notion चे इन-बिल्ट इमेज URLs पब्लिश केलेल्या पेजेसवर एक्सपायर होतात. तुमच्या Notion वर्कस्पेसमध्ये कधीही न तुटणाऱ्या कायमस्वरूपी इमेज URLs साठी ImageToURL वापरा.",
    "schemaName": "ImageToURL",
    "schemaDescription": "पब्लिश केलेल्या कंटेंटवर तुटलेल्या लिंक्स टाळण्यासाठी Notion पेजेसना कायमस्वरूपी आणि विश्वासार्ह इमेज URLs देणारे साधन.",
    "badge": "NOTION वापरकर्ते",
    "h1Pre": "Notion साठी इमेज होस्टिंग",
    "h1Highlight": "जे कधीही तुटत नाही.",
    "intro": "Notion चे अंतर्गत इमेज URLs पब्लिश केलेल्या पेजेसवर आणि शेअर केलेल्या लिंक्सवर एक्सपायर होतात. ImageToURL वर अपलोड करा आणि कायमस्वरूपी इमेज लिंक्स मिळवा ज्या Notion जिथे चालते तिथे सर्वत्र काम करतात.",
    "howTitle": "हे कसे दुरुस्त करावे",
    "steps": [
      {
        "title": "तुमची इमेज अपलोड करा",
        "body": "तुमची इमेज ड्रॅग आणि ड्रॉप करा किंवा ब्राउझ करण्यासाठी क्लिक करा. आम्ही JPG, PNG, WebP, GIF आणि SVG ला सपोर्ट करतो, ज्यामध्ये क्वालिटी कमी होत नाही."
      },
      {
        "title": "कायमस्वरूपी URL कॉपी करा",
        "body": "तुमच्या इमेजला त्वरित एक कायमस्वरूपी URL मिळते. ती तुमच्या क्लिपबोर्डवर कॉपी करण्यासाठी क्लिक करा. ही URL कधीही एक्सपायर होणार नाही किंवा बदलणार नाही."
      },
      {
        "title": "Notion मध्ये एम्बेड करा",
        "body": "Notion मध्ये, /image टाईप करा, 'Embed link' निवडा आणि URL पेस्ट करा. तुमची इमेज ImageToURL वरून लोड होईल आणि कधीही एक्सपायर होणार नाही."
      }
    ],
    "whyTitle": "Notion इमेजची समस्या",
    "whyItems": [
      {
        "title": "URLs शांतपणे एक्सपायर होतात",
        "body": "Notion तात्पुरते साईन केलेले URLs तयार करते जे कोणत्याही सूचनेशिवाय एक्सपायर होतात, ज्यामुळे तुमच्या इमेजच्या जागी रिकाम्या जागा राहतात."
      },
      {
        "title": "पब्लिश केलेली पेजेस तुटतात",
        "body": "जेव्हा तुम्ही Notion पेज वेबवर पब्लिश करता, तेव्हा तुमच्या वर्कस्पेसमध्ये व्यवस्थित दिसणाऱ्या इमेजेस अभ्यागतांसाठी लोड होणे बंद होऊ शकतात."
      },
      {
        "title": "शेअर केलेल्या लिंक्स निकामी ठरतात",
        "body": "क्लायंट किंवा सहकाऱ्यासोबत Notion पेजची लिंक शेअर करणे सुरुवातीला काम करते, परंतु ते पाहण्यापूर्वीच इमेजेस एक्सपायर होऊ शकतात."
      }
    ],
    "faqTitle": "वारंवार विचारले जाणारे प्रश्न",
    "faqs": [
      {
        "q": "पब्लिश केलेल्या Notion पेजेसवर इमेजेस का तुटतात?",
        "a": "Notion ऑथेंटिकेशन टोकन्ससह तात्पुरते साईन केलेले URLs वापरते जे एक्सपायर होतात. कायमस्वरूपी URLs सह बाह्य होस्टिंग ही समस्या सोडवते."
      },
      {
        "q": "मी Notion मध्ये बाह्य इमेज कशी वापरू?",
        "a": "ImageToURL वर अपलोड करा, कायमस्वरूपी लिंक कॉपी करा, त्यानंतर URL एम्बेड करण्यासाठी Notion मध्ये /image कमांड वापरा."
      },
      {
        "q": "बाह्यरित्या होस्ट केलेल्या इमेजेस Notion च्या API मध्ये काम करतील का?",
        "a": "हो, बाह्य URLs ना API मध्ये 'external' प्रकार म्हणून मानले जाते, ज्यामुळे ते इंटिग्रेशन आणि ऑटोमेशनसाठी स्थिर राहतात."
      },
      {
        "q": "ImageToURL इमेजेस Notion टेम्पलेट्समध्ये काम करतील का?",
        "a": "हो, जेव्हा टेम्पलेट डुप्लिकेट केले जाते तेव्हा त्या उत्तम प्रकारे हस्तांतरित होतात, अंतर्गत Notion इमेजेसच्या विपरीत ज्या तुटू शकतात."
      },
      {
        "q": "मी हे Super किंवा Fruition सह बनवलेल्या Notion वेबसाइटसाठी वापरू शकतो का?",
        "a": "नक्कीच. ही साधने तुमची पेजेस वेबसाइट म्हणून रेंडर करतात आणि कायमस्वरूपी URLs हे सुनिश्चित करतात की तुमच्या साइटच्या इमेजेस कधीही तुटणार नाहीत."
      }
    ],
    "ctaTitle": "तुमच्या Notion इमेजेस कायमस्वरूपी दुरुस्त करा",
    "ctaBody": "इमेज अपलोड करा, कायमस्वरूपी URL मिळवा आणि तुमचा कंटेंट कधीही तुटणार नाही याची खात्री करण्यासाठी ती Notion मध्ये एम्बेड करा.",
    "ctaButton": "आता अपलोड करा"
  },
  "te": {
    "metaTitle": "Notion పేజీల కోసం ఇమేజ్ హోస్టింగ్ — శాశ్వత URLs | ImageToURL",
    "metaDescription": "Notion యొక్క అంతర్నిర్మిత ఇమేజ్ URLs ప్రచురించబడిన పేజీలలో గడువు ముగుస్తాయి. మీ Notion వర్క్‌స్పేస్‌లో ఎప్పటికీ పాడవని శాశ్వత ఇమేజ్ URLs కోసం ImageToURLని ఉపయోగించండి.",
    "schemaName": "ImageToURL",
    "schemaDescription": "ప్రచురించబడిన కంటెంట్‌లో లింక్‌లు పాడవకుండా నిరోధించడానికి Notion పేజీల కోసం శాశ్వతమైన, నమ్మదగిన ఇమేజ్ URLsని అందించే సాధనం.",
    "badge": "NOTION వినియోగదారులు",
    "h1Pre": "Notion కోసం ఇమేజ్ హోస్టింగ్",
    "h1Highlight": "ఇది ఎప్పటికీ పాడవదు.",
    "intro": "Notion యొక్క అంతర్గత ఇమేజ్ URLs ప్రచురించబడిన పేజీలు మరియు షేర్ చేసిన లింక్‌లలో గడువు ముగుస్తాయి. ImageToURLకి అప్‌లోడ్ చేయండి మరియు Notion పనిచేసే ప్రతిచోటా పనిచేసే శాశ్వత ఇమేజ్ లింక్‌లను పొందండి.",
    "howTitle": "దీనిని ఎలా పరిష్కరించాలి",
    "steps": [
      {
        "title": "మీ చిత్రాన్ని అప్‌లోడ్ చేయండి",
        "body": "మీ చిత్రాన్ని డ్రాగ్ అండ్ డ్రాప్ చేయండి లేదా బ్రౌజ్ చేయడానికి క్లిక్ చేయండి. మేము నాణ్యత తగ్గకుండా JPG, PNG, WebP, GIF మరియు SVG ఫార్మాట్‌లకు మద్దతు ఇస్తాము."
      },
      {
        "title": "శాశ్వత URLని కాపీ చేయండి",
        "body": "మీ చిత్రానికి తక్షణమే శాశ్వత URL లభిస్తుంది. మీ క్లిప్‌బోర్డ్‌కు కాపీ చేయడానికి క్లిక్ చేయండి. ఈ URL ఎప్పటికీ గడువు ముగియదు లేదా మారదు."
      },
      {
        "title": "Notionలో ఎంబెడ్ చేయండి",
        "body": "Notionలో, /image అని టైప్ చేసి, 'Embed link' ఎంచుకుని, URLని పేస్ట్ చేయండి. మీ చిత్రం ImageToURL నుండి లోడ్ అవుతుంది మరియు ఎప్పటికీ గడువు ముగియదు."
      }
    ],
    "whyTitle": "Notion ఇమేజ్ సమస్య",
    "whyItems": [
      {
        "title": "URLs నిశ్శబ్దంగా గడువు ముగుస్తాయి",
        "body": "Notion తాత్కాలిక సైన్డ్ URLsని రూపొందిస్తుంది, ఇవి హెచ్చరిక లేకుండా గడువు ముగుస్తాయి, దీనివల్ల మీ చిత్రాలు ఉన్న చోట ఖాళీ స్థలాలు కనిపిస్తాయి."
      },
      {
        "title": "ప్రచురించబడిన పేజీలు పాడవుతాయి",
        "body": "మీరు Notion పేజీని వెబ్‌లో ప్రచురించినప్పుడు, మీ వర్క్‌స్పేస్‌లో బాగున్న చిత్రాలు సందర్శకుల కోసం లోడ్ కావడం ఆగిపోవచ్చు."
      },
      {
        "title": "షేర్ చేసిన లింక్‌లు విఫలమవుతాయి",
        "body": "క్లయింట్ లేదా సహోద్యోగితో Notion పేజీ లింక్‌ను షేర్ చేయడం మొదట్లో పనిచేస్తుంది, కానీ వారు చూసేలోపు చిత్రాల గడువు ముగియవచ్చు."
      }
    ],
    "faqTitle": "తరచుగా అడిగే ప్రశ్నలు",
    "faqs": [
      {
        "q": "ప్రచురించబడిన Notion పేజీలలో చిత్రాలు ఎందుకు పాడవుతాయి?",
        "a": "Notion గడువు ముగిసే ప్రమాణీకరణ టోకెన్‌లతో కూడిన తాత్కాలిక సైన్డ్ URLsని ఉపయోగిస్తుంది. శాశ్వత URLsతో కూడిన ఎక్స్‌టర్నల్ హోస్టింగ్ దీనిని పరిష్కరిస్తుంది."
      },
      {
        "q": "Notionలో ఎక్స్‌టర్నల్ చిత్రాన్ని ఎలా ఉపయోగించాలి?",
        "a": "ImageToURLకి అప్‌లోడ్ చేయండి, శాశ్వత లింక్‌ను కాపీ చేయండి, ఆపై URLని ఎంబెడ్ చేయడానికి Notionలో /image కమాండ్‌ని ఉపయోగించండి."
      },
      {
        "q": "ఎక్స్‌టర్నల్‌గా హోస్ట్ చేసిన చిత్రాలు Notion APIలో పనిచేస్తాయా?",
        "a": "అవును, ఎక్స్‌టర్నల్ URLs APIలో 'external' రకంగా పరిగణించబడతాయి, ఇది ఇంటిగ్రేషన్లు మరియు ఆటోమేషన్‌ల కోసం వాటిని స్థిరంగా ఉంచుతుంది."
      },
      {
        "q": "ImageToURL చిత్రాలు Notion టెంప్లేట్‌లలో పనిచేస్తాయా?",
        "a": "అవును, టెంప్లేట్ డూప్లికేట్ అయినప్పుడు అవి ఖచ్చితంగా బదిలీ అవుతాయి, అంతర్గత Notion చిత్రాల వలె ఇవి పాడవవు."
      },
      {
        "q": "Super లేదా Fruitionతో నిర్మించిన Notion వెబ్‌సైట్ కోసం నేను దీనిని ఉపయోగించవచ్చా?",
        "a": "ఖచ్చితంగా. ఈ సాధనాలు మీ పేజీలను వెబ్‌సైట్‌లుగా మారుస్తాయి మరియు శాశ్వత URLs మీ సైట్ చిత్రాలు ఎప్పటికీ పాడవకుండా చూస్తాయి."
      }
    ],
    "ctaTitle": "మీ Notion చిత్రాలను శాశ్వతంగా పరిష్కరించండి",
    "ctaBody": "చిత్రాన్ని అప్‌లోడ్ చేయండి, శాశ్వత URLని పొందండి మరియు మీ కంటెంట్ ఎప్పటికీ పాడవకుండా ఉండేలా Notionలో ఎంబెడ్ చేయండి.",
    "ctaButton": "ఇప్పుడే అప్‌లోడ్ చేయండి"
  },
  "zh-Hant": {
    "metaTitle": "Notion 頁面圖片託管 — 永久連結 | ImageToURL",
    "metaDescription": "Notion 內建的圖片連結在發布頁面上會過期。使用 ImageToURL 獲取永久有效的圖片連結，確保您的 Notion 工作區圖片永不失效。",
    "schemaName": "ImageToURL",
    "schemaDescription": "一個為 Notion 頁面提供永久、可靠圖片連結的工具，防止已發布內容出現連結失效問題。",
    "badge": "NOTION 用戶專屬",
    "h1Pre": "Notion 圖片託管",
    "h1Highlight": "永不失效。",
    "intro": "Notion 的內部圖片連結在發布頁面和共享連結中會過期。上傳至 ImageToURL 即可獲得在任何 Notion 頁面皆可運作的永久圖片連結。",
    "howTitle": "如何解決此問題",
    "steps": [
      {
        "title": "上傳您的圖片",
        "body": "拖放您的圖片或點擊瀏覽。我們支援 JPG、PNG、WebP、GIF 和 SVG，且保證畫質無損。"
      },
      {
        "title": "複製永久連結",
        "body": "您的圖片將立即獲得一個永久 URL。點擊即可複製到剪貼簿。此連結永遠不會過期或變更。"
      },
      {
        "title": "嵌入至 Notion",
        "body": "在 Notion 中輸入 /image，選擇「嵌入連結」(Embed link)，然後貼上該 URL。您的圖片將從 ImageToURL 載入，且永不過期。"
      }
    ],
    "whyTitle": "Notion 圖片失效問題",
    "whyItems": [
      {
        "title": "連結無預警過期",
        "body": "Notion 會產生帶有時效性的簽名 URL，這些連結會在沒有警告的情況下過期，導致您原本的圖片位置變成空白。"
      },
      {
        "title": "發布頁面連結失效",
        "body": "當您將 Notion 頁面發布到網路上時，在工作區看起來正常的圖片，可能會對訪客停止載入。"
      },
      {
        "title": "共享連結失敗",
        "body": "與客戶或同事共享 Notion 頁面連結時，起初運作正常，但圖片可能會在對方查看之前就已過期。"
      }
    ],
    "faqTitle": "常見問題",
    "faqs": [
      {
        "q": "為什麼 Notion 發布頁面上的圖片會失效？",
        "a": "Notion 使用帶有驗證權杖的臨時簽名 URL，這些權杖會過期。使用具有永久連結的外部託管服務即可解決此問題。"
      },
      {
        "q": "如何在 Notion 中使用外部圖片？",
        "a": "上傳至 ImageToURL，複製永久連結，然後在 Notion 中使用 /image 指令嵌入該 URL。"
      },
      {
        "q": "外部託管的圖片能在 Notion API 中運作嗎？",
        "a": "可以，外部 URL 在 API 中被視為「外部」(external) 類型，這使其對於整合與自動化應用非常穩定。"
      },
      {
        "q": "ImageToURL 的圖片能在 Notion 模板中使用嗎？",
        "a": "可以，當模板被複製時，這些圖片會完美保留，不像 Notion 內部圖片可能會失效。"
      },
      {
        "q": "我可以使用此工具來製作 Super 或 Fruition 的 Notion 網站嗎？",
        "a": "絕對可以。這些工具會將您的頁面渲染為網站，而永久連結可確保您網站的圖片永遠不會失效。"
      }
    ],
    "ctaTitle": "永久修復您的 Notion 圖片",
    "ctaBody": "上傳圖片，獲取永久連結，並將其嵌入 Notion，確保您的內容永不失效。",
    "ctaButton": "立即上傳"
  }
} as LandingContentMap;
