import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image URLs for Google Sheets — =IMAGE() Function | ImageToURL",
    "metaDescription": "Get image URLs that work with Google Sheets =IMAGE() function. Upload images, get direct URLs, and display them in your spreadsheets instantly.",
    "schemaName": "Image URLs for Google Sheets",
    "schemaDescription": "A tool to generate direct image URLs compatible with the Google Sheets =IMAGE() function for seamless spreadsheet integration.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Image URLs for Google",
    "h1Highlight": "Sheets.",
    "intro": "Upload images and get direct URLs that work with Google Sheets' =IMAGE() function. Display product photos, icons, and visuals right inside your spreadsheet cells.",
    "howTitle": "How It Works with Google Sheets",
    "steps": [
      {
        "title": "Upload your image",
        "body": "Upload your image to ImageToURL and copy the generated direct URL."
      },
      {
        "title": "Select your cell",
        "body": "In Google Sheets, click the cell where you want the image to appear."
      },
      {
        "title": "Use the function",
        "body": "Type =IMAGE(\"paste-your-url-here\") and press Enter to display the image."
      }
    ],
    "whyTitle": "Why You Need External URLs",
    "whyItems": [
      {
        "title": "=IMAGE() Needs Public URLs",
        "body": "The =IMAGE() function only works with publicly accessible, direct image URLs; private links or HTML pages will not render."
      },
      {
        "title": "Google Drive Links Fail",
        "body": "Google Drive sharing links point to preview pages, not raw image files, causing errors in your spreadsheet."
      },
      {
        "title": "Permanent URLs",
        "body": "Our CDN-backed URLs never expire, ensuring your reports and dashboards remain functional long-term."
      },
      {
        "title": "Team-Accessible",
        "body": "Public CDN links mean every collaborator sees your images instantly without needing complex permission management."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "How do I display an image in Google Sheets?",
        "a": "Use the =IMAGE() function with a direct image URL. For example: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Why don't Google Drive image links work in =IMAGE()?",
        "a": "Google Drive links point to a preview page, not the raw image file. The =IMAGE() function requires a direct URL that serves the image file directly."
      },
      {
        "q": "Can I resize images inside Google Sheets cells?",
        "a": "Yes, you can use the mode parameter in =IMAGE() to fit, stretch, or keep the original size, or define custom dimensions."
      },
      {
        "q": "Will the images load for everyone who views my spreadsheet?",
        "a": "Yes. Since ImageToURL provides public, CDN-backed URLs, anyone with access to your spreadsheet will see the images load instantly."
      },
      {
        "q": "Is there a limit on how many images I can add?",
        "a": "There is no limit from our side. While Google Sheets may slow down with thousands of images, typical catalogs and dashboards work perfectly."
      }
    ],
    "ctaTitle": "Add images to your spreadsheets today",
    "ctaBody": "Upload an image, copy the URL, and use =IMAGE() in Google Sheets in seconds.",
    "ctaButton": "Upload Now"
  },
  "hi": {
    "metaTitle": "Google Sheets के लिए Image URLs — =IMAGE() फ़ंक्शन | ImageToURL",
    "metaDescription": "Google Sheets के =IMAGE() फ़ंक्शन के साथ काम करने वाले इमेज URL प्राप्त करें। इमेज अपलोड करें, डायरेक्ट URL पाएं और उन्हें अपनी स्प्रेडशीट में तुरंत प्रदर्शित करें।",
    "schemaName": "Google Sheets के लिए Image URLs",
    "schemaDescription": "Google Sheets के =IMAGE() फ़ंक्शन के साथ संगत डायरेक्ट इमेज URL बनाने के लिए एक टूल, जो स्प्रेडशीट में सहज एकीकरण की सुविधा देता है।",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets के लिए",
    "h1Highlight": "Image URLs",
    "intro": "इमेज अपलोड करें और ऐसे डायरेक्ट URL प्राप्त करें जो Google Sheets के =IMAGE() फ़ंक्शन के साथ काम करते हैं। अपनी स्प्रेडशीट सेल्स के अंदर ही प्रोडक्ट फ़ोटो, आइकन और विज़ुअल्स प्रदर्शित करें।",
    "howTitle": "Google Sheets के साथ यह कैसे काम करता है",
    "steps": [
      {
        "title": "अपनी इमेज अपलोड करें",
        "body": "ImageToURL पर अपनी इमेज अपलोड करें और जनरेट किए गए डायरेक्ट URL को कॉपी करें।"
      },
      {
        "title": "अपनी सेल चुनें",
        "body": "Google Sheets में, उस सेल पर क्लिक करें जहाँ आप इमेज दिखाना चाहते हैं।"
      },
      {
        "title": "फ़ंक्शन का उपयोग करें",
        "body": "=IMAGE(\"अपना-url-यहाँ-पेस्ट-करें\") टाइप करें और इमेज प्रदर्शित करने के लिए Enter दबाएं।"
      }
    ],
    "whyTitle": "आपको एक्सटर्नल URL की आवश्यकता क्यों है",
    "whyItems": [
      {
        "title": "=IMAGE() को पब्लिक URL चाहिए",
        "body": "=IMAGE() फ़ंक्शन केवल सार्वजनिक रूप से सुलभ, डायरेक्ट इमेज URL के साथ काम करता है; प्राइवेट लिंक या HTML पेज रेंडर नहीं होंगे।"
      },
      {
        "title": "Google Drive लिंक काम नहीं करते",
        "body": "Google Drive शेयरिंग लिंक प्रीव्यू पेज की ओर इशारा करते हैं, न कि रॉ इमेज फ़ाइलों की ओर, जिससे आपकी स्प्रेडशीट में एरर आते हैं।"
      },
      {
        "title": "परमानेंट URL",
        "body": "हमारे CDN-आधारित URL कभी समाप्त नहीं होते, यह सुनिश्चित करते हुए कि आपकी रिपोर्ट और डैशबोर्ड लंबे समय तक काम करते रहें।"
      },
      {
        "title": "टीम के लिए सुलभ",
        "body": "पब्लिक CDN लिंक का मतलब है कि हर सहयोगी आपकी इमेज को बिना किसी जटिल अनुमति प्रबंधन के तुरंत देख सकता है।"
      }
    ],
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "faqs": [
      {
        "q": "मैं Google Sheets में इमेज कैसे प्रदर्शित करूं?",
        "a": "डायरेक्ट इमेज URL के साथ =IMAGE() फ़ंक्शन का उपयोग करें। उदाहरण के लिए: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")।"
      },
      {
        "q": "Google Drive इमेज लिंक =IMAGE() में काम क्यों नहीं करते?",
        "a": "Google Drive लिंक एक प्रीव्यू पेज पर ले जाते हैं, न कि रॉ इमेज फ़ाइल पर। =IMAGE() फ़ंक्शन को एक ऐसे डायरेक्ट URL की आवश्यकता होती है जो सीधे इमेज फ़ाइल प्रदान करे।"
      },
      {
        "q": "क्या मैं Google Sheets सेल्स के अंदर इमेज का आकार बदल सकता हूँ?",
        "a": "हाँ, आप =IMAGE() में मोड पैरामीटर का उपयोग करके इमेज को फिट, स्ट्रेच या ओरिजिनल साइज़ में रख सकते हैं, या कस्टम आयाम निर्धारित कर सकते हैं।"
      },
      {
        "q": "क्या मेरी स्प्रेडशीट देखने वाले सभी लोगों के लिए इमेज लोड होंगी?",
        "a": "हाँ। चूंकि ImageToURL पब्लिक, CDN-आधारित URL प्रदान करता है, इसलिए आपकी स्प्रेडशीट तक पहुंच रखने वाला कोई भी व्यक्ति इमेज को तुरंत लोड होते हुए देख सकेगा।"
      },
      {
        "q": "क्या मैं कितनी भी इमेज जोड़ सकता हूँ, क्या कोई सीमा है?",
        "a": "हमारी तरफ से कोई सीमा नहीं है। हालांकि हज़ारों इमेज होने पर Google Sheets धीमी हो सकती है, लेकिन सामान्य कैटलॉग और डैशबोर्ड पूरी तरह से काम करते हैं।"
      }
    ],
    "ctaTitle": "आज ही अपनी स्प्रेडशीट में इमेज जोड़ें",
    "ctaBody": "एक इमेज अपलोड करें, URL कॉपी करें और सेकंडों में Google Sheets में =IMAGE() का उपयोग करें।",
    "ctaButton": "अभी अपलोड करें"
  },
  "es": {
    "metaTitle": "URLs de imágenes para Google Sheets — Función =IMAGE() | ImageToURL",
    "metaDescription": "Obtén URLs de imágenes compatibles con la función =IMAGE() de Google Sheets. Sube imágenes, obtén URLs directas y muéstralas en tus hojas de cálculo al instante.",
    "schemaName": "URLs de imágenes para Google Sheets",
    "schemaDescription": "Una herramienta para generar URLs directas de imágenes compatibles con la función =IMAGE() de Google Sheets para una integración perfecta en hojas de cálculo.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URLs de imágenes para Google",
    "h1Highlight": "Sheets.",
    "intro": "Sube imágenes y obtén URLs directas que funcionan con la función =IMAGE() de Google Sheets. Muestra fotos de productos, iconos y elementos visuales directamente dentro de las celdas de tu hoja de cálculo.",
    "howTitle": "Cómo funciona con Google Sheets",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Sube tu imagen a ImageToURL y copia la URL directa generada."
      },
      {
        "title": "Selecciona tu celda",
        "body": "En Google Sheets, haz clic en la celda donde quieres que aparezca la imagen."
      },
      {
        "title": "Usa la función",
        "body": "Escribe =IMAGE(\"pega-tu-url-aqui\") y presiona Enter para mostrar la imagen."
      }
    ],
    "whyTitle": "Por qué necesitas URLs externas",
    "whyItems": [
      {
        "title": "=IMAGE() necesita URLs públicas",
        "body": "La función =IMAGE() solo funciona con URLs de imágenes directas y accesibles públicamente; los enlaces privados o páginas HTML no se visualizarán."
      },
      {
        "title": "Los enlaces de Google Drive fallan",
        "body": "Los enlaces para compartir de Google Drive apuntan a páginas de vista previa, no a archivos de imagen sin procesar, lo que causa errores en tu hoja de cálculo."
      },
      {
        "title": "URLs permanentes",
        "body": "Nuestras URLs respaldadas por CDN nunca caducan, asegurando que tus informes y paneles sigan funcionando a largo plazo."
      },
      {
        "title": "Accesible para el equipo",
        "body": "Los enlaces CDN públicos significan que cada colaborador ve tus imágenes al instante sin necesidad de una gestión de permisos compleja."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cómo muestro una imagen en Google Sheets?",
        "a": "Usa la función =IMAGE() con una URL de imagen directa. Por ejemplo: =IMAGE(\"https://imagetourl.cloud/tu-imagen.jpg\")."
      },
      {
        "q": "¿Por qué los enlaces de imágenes de Google Drive no funcionan en =IMAGE()?",
        "a": "Los enlaces de Google Drive apuntan a una página de vista previa, no al archivo de imagen original. La función =IMAGE() requiere una URL directa que sirva el archivo de imagen directamente."
      },
      {
        "q": "¿Puedo cambiar el tamaño de las imágenes dentro de las celdas de Google Sheets?",
        "a": "Sí, puedes usar el parámetro mode en =IMAGE() para ajustar, estirar o mantener el tamaño original, o definir dimensiones personalizadas."
      },
      {
        "q": "¿Las imágenes se cargarán para todos los que vean mi hoja de cálculo?",
        "a": "Sí. Como ImageToURL proporciona URLs públicas respaldadas por CDN, cualquier persona con acceso a tu hoja de cálculo verá las imágenes cargarse al instante."
      },
      {
        "q": "¿Hay un límite en cuántas imágenes puedo añadir?",
        "a": "No hay límite por nuestra parte. Aunque Google Sheets puede ralentizarse con miles de imágenes, los catálogos y paneles típicos funcionan perfectamente."
      }
    ],
    "ctaTitle": "Añade imágenes a tus hojas de cálculo hoy mismo",
    "ctaBody": "Sube una imagen, copia la URL y usa =IMAGE() en Google Sheets en segundos.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "URLs d'images pour Google Sheets — Fonction =IMAGE() | ImageToURL",
    "metaDescription": "Obtenez des URLs d'images compatibles avec la fonction =IMAGE() de Google Sheets. Téléchargez vos images, récupérez des URLs directes et affichez-les instantanément dans vos feuilles de calcul.",
    "schemaName": "URLs d'images pour Google Sheets",
    "schemaDescription": "Un outil pour générer des URLs d'images directes compatibles avec la fonction =IMAGE() de Google Sheets pour une intégration fluide dans vos feuilles de calcul.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URLs d'images pour Google",
    "h1Highlight": "Sheets.",
    "intro": "Téléchargez vos images et obtenez des URLs directes qui fonctionnent avec la fonction =IMAGE() de Google Sheets. Affichez des photos de produits, des icônes et des visuels directement dans vos cellules.",
    "howTitle": "Comment utiliser avec Google Sheets",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Téléchargez votre image sur ImageToURL et copiez l'URL directe générée."
      },
      {
        "title": "Sélectionnez votre cellule",
        "body": "Dans Google Sheets, cliquez sur la cellule où vous souhaitez faire apparaître l'image."
      },
      {
        "title": "Utilisez la fonction",
        "body": "Tapez =IMAGE(\"collez-votre-url-ici\") et appuyez sur Entrée pour afficher l'image."
      }
    ],
    "whyTitle": "Pourquoi avez-vous besoin d'URLs externes",
    "whyItems": [
      {
        "title": "=IMAGE() nécessite des URLs publiques",
        "body": "La fonction =IMAGE() ne fonctionne qu'avec des URLs d'images directes et accessibles publiquement ; les liens privés ou les pages HTML ne s'afficheront pas."
      },
      {
        "title": "Les liens Google Drive ne fonctionnent pas",
        "body": "Les liens de partage Google Drive pointent vers des pages de prévisualisation et non vers des fichiers image bruts, ce qui provoque des erreurs dans votre feuille de calcul."
      },
      {
        "title": "URLs permanentes",
        "body": "Nos URLs hébergées sur CDN n'expirent jamais, garantissant que vos rapports et tableaux de bord restent fonctionnels sur le long terme."
      },
      {
        "title": "Accessibles par l'équipe",
        "body": "Les liens CDN publics signifient que chaque collaborateur voit vos images instantanément sans gestion complexe des permissions."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment afficher une image dans Google Sheets ?",
        "a": "Utilisez la fonction =IMAGE() avec une URL d'image directe. Par exemple : =IMAGE(\"https://imagetourl.cloud/votre-image.jpg\")."
      },
      {
        "q": "Pourquoi les liens d'images Google Drive ne fonctionnent-ils pas dans =IMAGE() ?",
        "a": "Les liens Google Drive pointent vers une page de prévisualisation, pas vers le fichier image brut. La fonction =IMAGE() nécessite une URL directe qui sert directement le fichier image."
      },
      {
        "q": "Puis-je redimensionner les images dans les cellules Google Sheets ?",
        "a": "Oui, vous pouvez utiliser le paramètre mode dans =IMAGE() pour ajuster, étirer ou conserver la taille originale, ou définir des dimensions personnalisées."
      },
      {
        "q": "Les images se chargeront-elles pour tous ceux qui consultent ma feuille de calcul ?",
        "a": "Oui. Comme ImageToURL fournit des URLs publiques via CDN, toute personne ayant accès à votre feuille de calcul verra les images se charger instantanément."
      },
      {
        "q": "Y a-t-il une limite au nombre d'images que je peux ajouter ?",
        "a": "Il n'y a aucune limite de notre côté. Bien que Google Sheets puisse ralentir avec des milliers d'images, les catalogues et tableaux de bord classiques fonctionnent parfaitement."
      }
    ],
    "ctaTitle": "Ajoutez des images à vos feuilles de calcul dès aujourd'hui",
    "ctaBody": "Téléchargez une image, copiez l'URL et utilisez =IMAGE() dans Google Sheets en quelques secondes.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bild-URLs für Google Sheets — =IMAGE() Funktion | ImageToURL",
    "metaDescription": "Erhalten Sie Bild-URLs, die mit der =IMAGE() Funktion in Google Sheets funktionieren. Laden Sie Bilder hoch, erhalten Sie direkte URLs und zeigen Sie diese sofort in Ihren Tabellen an.",
    "schemaName": "Bild-URLs für Google Sheets",
    "schemaDescription": "Ein Tool zur Generierung direkter Bild-URLs, die mit der Google Sheets =IMAGE() Funktion für eine nahtlose Tabellenintegration kompatibel sind.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Bild-URLs für Google",
    "h1Highlight": "Sheets.",
    "intro": "Laden Sie Bilder hoch und erhalten Sie direkte URLs, die mit der =IMAGE() Funktion von Google Sheets funktionieren. Zeigen Sie Produktfotos, Icons und Grafiken direkt in Ihren Tabellenzellen an.",
    "howTitle": "So funktioniert es mit Google Sheets",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Laden Sie Ihr Bild bei ImageToURL hoch und kopieren Sie die generierte direkte URL."
      },
      {
        "title": "Zelle auswählen",
        "body": "Klicken Sie in Google Sheets auf die Zelle, in der das Bild erscheinen soll."
      },
      {
        "title": "Funktion verwenden",
        "body": "Geben Sie =IMAGE(\"fügen-sie-ihre-url-hier-ein\") ein und drücken Sie die Eingabetaste, um das Bild anzuzeigen."
      }
    ],
    "whyTitle": "Warum Sie externe URLs benötigen",
    "whyItems": [
      {
        "title": "=IMAGE() benötigt öffentliche URLs",
        "body": "Die =IMAGE() Funktion funktioniert nur mit öffentlich zugänglichen, direkten Bild-URLs; private Links oder HTML-Seiten werden nicht geladen."
      },
      {
        "title": "Google Drive Links funktionieren nicht",
        "body": "Google Drive Freigabelinks verweisen auf Vorschauseiten, nicht auf die eigentlichen Bilddateien, was zu Fehlern in Ihrer Tabelle führt."
      },
      {
        "title": "Permanente URLs",
        "body": "Unsere CDN-gestützten URLs laufen nie ab und stellen sicher, dass Ihre Berichte und Dashboards langfristig funktionieren."
      },
      {
        "title": "Für Teams zugänglich",
        "body": "Öffentliche CDN-Links bedeuten, dass jeder Mitarbeiter Ihre Bilder sofort sieht, ohne komplexe Berechtigungsverwaltung."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie zeige ich ein Bild in Google Sheets an?",
        "a": "Verwenden Sie die =IMAGE() Funktion mit einer direkten Bild-URL. Zum Beispiel: =IMAGE(\"https://imagetourl.cloud/ihr-bild.jpg\")."
      },
      {
        "q": "Warum funktionieren Google Drive Bildlinks nicht in =IMAGE()?",
        "a": "Google Drive Links verweisen auf eine Vorschauseite, nicht auf die Rohdatei des Bildes. Die =IMAGE() Funktion erfordert eine direkte URL, die das Bild direkt ausliefert."
      },
      {
        "q": "Kann ich die Größe von Bildern in Google Sheets Zellen ändern?",
        "a": "Ja, Sie können den Modus-Parameter in =IMAGE() verwenden, um das Bild anzupassen, zu strecken, die Originalgröße beizubehalten oder benutzerdefinierte Abmessungen festzulegen."
      },
      {
        "q": "Werden die Bilder für jeden geladen, der meine Tabelle ansieht?",
        "a": "Ja. Da ImageToURL öffentliche, CDN-gestützte URLs bereitstellt, sieht jeder mit Zugriff auf Ihre Tabelle die Bilder sofort."
      },
      {
        "q": "Gibt es ein Limit für die Anzahl der Bilder, die ich hinzufügen kann?",
        "a": "Von unserer Seite gibt es kein Limit. Während Google Sheets bei Tausenden von Bildern langsamer werden kann, funktionieren typische Kataloge und Dashboards einwandfrei."
      }
    ],
    "ctaTitle": "Fügen Sie noch heute Bilder zu Ihren Tabellen hinzu",
    "ctaBody": "Laden Sie ein Bild hoch, kopieren Sie die URL und verwenden Sie =IMAGE() in Google Sheets in Sekundenschnelle.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "Google Sheets用画像URL — =IMAGE()関数対応 | ImageToURL",
    "metaDescription": "Google Sheetsの=IMAGE()関数で使える画像URLを作成。画像をアップロードして直接リンクを取得し、スプレッドシートに即座に表示させましょう。",
    "schemaName": "Google Sheets用画像URL",
    "schemaDescription": "Google Sheetsの=IMAGE()関数と互換性のある直接画像URLを生成し、スプレッドシートへのシームレスな統合を実現するツールです。",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets用",
    "h1Highlight": "画像URL",
    "intro": "画像をアップロードして、Google Sheetsの=IMAGE()関数で動作する直接URLを取得しましょう。商品写真やアイコン、ビジュアルをスプレッドシートのセル内に直接表示できます。",
    "howTitle": "Google Sheetsでの使い方",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "ImageToURLに画像をアップロードし、生成された直接URLをコピーします。"
      },
      {
        "title": "セルを選択",
        "body": "Google Sheetsで、画像を表示したいセルをクリックします。"
      },
      {
        "title": "関数を使用",
        "body": "=IMAGE(\"コピーしたURL\")と入力してEnterキーを押すと、画像が表示されます。"
      }
    ],
    "whyTitle": "外部URLが必要な理由",
    "whyItems": [
      {
        "title": "=IMAGE()には公開URLが必要",
        "body": "=IMAGE()関数は、公開されている直接画像URLでのみ動作します。プライベートリンクやHTMLページでは表示されません。"
      },
      {
        "title": "Google Driveのリンクは使えない",
        "body": "Google Driveの共有リンクはプレビューページを指しており、生の画像ファイルではないため、スプレッドシートでエラーが発生します。"
      },
      {
        "title": "永続的なURL",
        "body": "当社のCDN経由のURLは期限切れにならないため、レポートやダッシュボードを長期間安定して運用できます。"
      },
      {
        "title": "チームで共有可能",
        "body": "公開CDNリンクを使用するため、複雑な権限管理なしで、共同編集者全員が即座に画像を確認できます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "Google Sheetsで画像を表示するにはどうすればいいですか？",
        "a": "直接画像URLを指定して=IMAGE()関数を使用してください。例: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")"
      },
      {
        "q": "なぜGoogle Driveの画像リンクは=IMAGE()で使えないのですか？",
        "a": "Google Driveのリンクはプレビューページを指しており、画像ファイルそのものではないためです。=IMAGE()関数には、画像ファイルを直接配信するURLが必要です。"
      },
      {
        "q": "Google Sheetsのセル内で画像のサイズを変更できますか？",
        "a": "はい、=IMAGE()関数のモードパラメータを使用して、フィット、ストレッチ、元のサイズ維持、またはカスタムサイズ指定が可能です。"
      },
      {
        "q": "スプレッドシートを閲覧する全員に画像が表示されますか？",
        "a": "はい。ImageToURLは公開CDNベースのURLを提供するため、スプレッドシートにアクセスできる全員が即座に画像を表示できます。"
      },
      {
        "q": "追加できる画像数に制限はありますか？",
        "a": "当社側での制限はありません。Google Sheetsの仕様上、数千枚の画像を追加すると動作が重くなる場合がありますが、一般的なカタログやダッシュボードであれば問題なく動作します。"
      }
    ],
    "ctaTitle": "スプレッドシートに画像を追加しましょう",
    "ctaBody": "画像をアップロードしてURLをコピーし、Google Sheetsで=IMAGE()関数をすぐに使い始めましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "Google Sheets 图片链接 — =IMAGE() 函数 | ImageToURL",
    "metaDescription": "获取适用于 Google Sheets =IMAGE() 函数的图片链接。上传图片，获取直链，并在电子表格中即时显示。",
    "schemaName": "Google Sheets 图片链接",
    "schemaDescription": "一个用于生成与 Google Sheets =IMAGE() 函数兼容的直链工具，实现电子表格的无缝集成。",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google",
    "h1Highlight": "Sheets 图片链接。",
    "intro": "上传图片并获取适用于 Google Sheets =IMAGE() 函数的直链。直接在电子表格单元格中显示产品照片、图标和视觉内容。",
    "howTitle": "如何与 Google Sheets 配合使用",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "将图片上传到 ImageToURL 并复制生成的直链。"
      },
      {
        "title": "选择单元格",
        "body": "在 Google Sheets 中，点击您想要显示图片的单元格。"
      },
      {
        "title": "使用函数",
        "body": "输入 =IMAGE(\"粘贴您的链接\") 并按回车键即可显示图片。"
      }
    ],
    "whyTitle": "为什么需要外部链接",
    "whyItems": [
      {
        "title": "=IMAGE() 需要公共链接",
        "body": "=IMAGE() 函数仅适用于可公开访问的直接图片链接；私有链接或 HTML 页面无法正常渲染。"
      },
      {
        "title": "Google Drive 链接无效",
        "body": "Google Drive 分享链接指向的是预览页面而非原始图片文件，这会导致电子表格报错。"
      },
      {
        "title": "永久链接",
        "body": "我们基于 CDN 的链接永不过期，确保您的报告和仪表板长期保持正常运行。"
      },
      {
        "title": "团队共享",
        "body": "公共 CDN 链接意味着每位协作者都能即时看到图片，无需复杂的权限管理。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "如何在 Google Sheets 中显示图片？",
        "a": "使用 =IMAGE() 函数并配合直接图片链接。例如：=IMAGE(\"https://imagetourl.cloud/your-image.jpg\")。"
      },
      {
        "q": "为什么 Google Drive 图片链接在 =IMAGE() 中无法使用？",
        "a": "Google Drive 链接指向的是预览页面，而不是原始图片文件。=IMAGE() 函数需要直接提供图片文件的 URL。"
      },
      {
        "q": "我可以在 Google Sheets 单元格内调整图片大小吗？",
        "a": "可以，您可以使用 =IMAGE() 中的模式参数来调整图片以适应、拉伸、保持原始尺寸或定义自定义尺寸。"
      },
      {
        "q": "查看我电子表格的每个人都能加载图片吗？",
        "a": "是的。由于 ImageToURL 提供的是公共的、基于 CDN 的链接，任何有权访问您电子表格的人都能即时加载图片。"
      },
      {
        "q": "我可以添加的图片数量有限制吗？",
        "a": "我们这边没有限制。虽然 Google Sheets 在处理数千张图片时可能会变慢，但常规的目录和仪表板使用完全没问题。"
      }
    ],
    "ctaTitle": "立即为您的电子表格添加图片",
    "ctaBody": "上传图片，复制链接，并在几秒钟内于 Google Sheets 中使用 =IMAGE() 函数。",
    "ctaButton": "立即上传"
  },
  "id": {
    "metaTitle": "URL Gambar untuk Google Sheets — Fungsi =IMAGE() | ImageToURL",
    "metaDescription": "Dapatkan URL gambar yang berfungsi dengan fungsi =IMAGE() di Google Sheets. Unggah gambar, dapatkan URL langsung, dan tampilkan di spreadsheet Anda secara instan.",
    "schemaName": "URL Gambar untuk Google Sheets",
    "schemaDescription": "Alat untuk menghasilkan URL gambar langsung yang kompatibel dengan fungsi =IMAGE() di Google Sheets untuk integrasi spreadsheet yang mulus.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL Gambar untuk Google",
    "h1Highlight": "Sheets.",
    "intro": "Unggah gambar dan dapatkan URL langsung yang berfungsi dengan fungsi =IMAGE() di Google Sheets. Tampilkan foto produk, ikon, dan visual langsung di dalam sel spreadsheet Anda.",
    "howTitle": "Cara Menggunakannya dengan Google Sheets",
    "steps": [
      {
        "title": "Unggah gambar Anda",
        "body": "Unggah gambar Anda ke ImageToURL dan salin URL langsung yang dihasilkan."
      },
      {
        "title": "Pilih sel Anda",
        "body": "Di Google Sheets, klik sel tempat Anda ingin gambar muncul."
      },
      {
        "title": "Gunakan fungsi",
        "body": "Ketik =IMAGE(\"tempel-url-anda-di-sini\") lalu tekan Enter untuk menampilkan gambar."
      }
    ],
    "whyTitle": "Mengapa Anda Membutuhkan URL Eksternal",
    "whyItems": [
      {
        "title": "=IMAGE() Membutuhkan URL Publik",
        "body": "Fungsi =IMAGE() hanya berfungsi dengan URL gambar langsung yang dapat diakses publik; tautan pribadi atau halaman HTML tidak akan muncul."
      },
      {
        "title": "Tautan Google Drive Gagal",
        "body": "Tautan berbagi Google Drive mengarah ke halaman pratinjau, bukan file gambar mentah, sehingga menyebabkan kesalahan pada spreadsheet Anda."
      },
      {
        "title": "URL Permanen",
        "body": "URL berbasis CDN kami tidak pernah kedaluwarsa, memastikan laporan dan dasbor Anda tetap berfungsi dalam jangka panjang."
      },
      {
        "title": "Dapat Diakses Tim",
        "body": "Tautan CDN publik berarti setiap kolaborator melihat gambar Anda secara instan tanpa perlu manajemen izin yang rumit."
      }
    ],
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Bagaimana cara menampilkan gambar di Google Sheets?",
        "a": "Gunakan fungsi =IMAGE() dengan URL gambar langsung. Contoh: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Mengapa tautan gambar Google Drive tidak berfungsi di =IMAGE()?",
        "a": "Tautan Google Drive mengarah ke halaman pratinjau, bukan file gambar mentah. Fungsi =IMAGE() memerlukan URL langsung yang menyajikan file gambar secara langsung."
      },
      {
        "q": "Bisakah saya mengubah ukuran gambar di dalam sel Google Sheets?",
        "a": "Ya, Anda dapat menggunakan parameter mode di =IMAGE() untuk menyesuaikan, meregangkan, atau mempertahankan ukuran asli, atau menentukan dimensi khusus."
      },
      {
        "q": "Apakah gambar akan dimuat untuk semua orang yang melihat spreadsheet saya?",
        "a": "Ya. Karena ImageToURL menyediakan URL publik berbasis CDN, siapa pun yang memiliki akses ke spreadsheet Anda akan melihat gambar dimuat secara instan."
      },
      {
        "q": "Apakah ada batasan jumlah gambar yang bisa saya tambahkan?",
        "a": "Tidak ada batasan dari pihak kami. Meskipun Google Sheets mungkin melambat jika memuat ribuan gambar, katalog dan dasbor standar akan berfungsi dengan sempurna."
      }
    ],
    "ctaTitle": "Tambahkan gambar ke spreadsheet Anda hari ini",
    "ctaBody": "Unggah gambar, salin URL-nya, dan gunakan =IMAGE() di Google Sheets dalam hitungan detik.",
    "ctaButton": "Unggah Sekarang"
  },
  "vi": {
    "metaTitle": "URL ảnh cho Google Sheets — Hàm =IMAGE() | ImageToURL",
    "metaDescription": "Nhận URL ảnh hoạt động với hàm =IMAGE() trong Google Sheets. Tải ảnh lên, lấy URL trực tiếp và hiển thị chúng trong bảng tính của bạn ngay lập tức.",
    "schemaName": "URL ảnh cho Google Sheets",
    "schemaDescription": "Công cụ tạo URL ảnh trực tiếp tương thích với hàm =IMAGE() trong Google Sheets để tích hợp bảng tính liền mạch.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL ảnh cho Google",
    "h1Highlight": "Sheets.",
    "intro": "Tải ảnh lên và nhận URL trực tiếp hoạt động với hàm =IMAGE() của Google Sheets. Hiển thị ảnh sản phẩm, biểu tượng và hình ảnh ngay trong các ô bảng tính của bạn.",
    "howTitle": "Cách hoạt động với Google Sheets",
    "steps": [
      {
        "title": "Tải ảnh của bạn lên",
        "body": "Tải ảnh lên ImageToURL và sao chép URL trực tiếp được tạo."
      },
      {
        "title": "Chọn ô của bạn",
        "body": "Trong Google Sheets, nhấp vào ô nơi bạn muốn hình ảnh xuất hiện."
      },
      {
        "title": "Sử dụng hàm",
        "body": "Nhập =IMAGE(\"dán-url-của-bạn-vào-đây\") và nhấn Enter để hiển thị hình ảnh."
      }
    ],
    "whyTitle": "Tại sao bạn cần URL bên ngoài",
    "whyItems": [
      {
        "title": "=IMAGE() cần URL công khai",
        "body": "Hàm =IMAGE() chỉ hoạt động với các URL ảnh trực tiếp, có thể truy cập công khai; các liên kết riêng tư hoặc trang HTML sẽ không hiển thị được."
      },
      {
        "title": "Liên kết Google Drive không hoạt động",
        "body": "Các liên kết chia sẻ từ Google Drive trỏ đến trang xem trước, không phải tệp ảnh gốc, gây ra lỗi trong bảng tính của bạn."
      },
      {
        "title": "URL vĩnh viễn",
        "body": "Các URL được hỗ trợ bởi CDN của chúng tôi không bao giờ hết hạn, đảm bảo các báo cáo và bảng điều khiển của bạn luôn hoạt động lâu dài."
      },
      {
        "title": "Dễ dàng chia sẻ với nhóm",
        "body": "Các liên kết CDN công khai giúp mọi cộng tác viên nhìn thấy hình ảnh của bạn ngay lập tức mà không cần quản lý quyền phức tạp."
      }
    ],
    "faqTitle": "Các câu hỏi thường gặp",
    "faqs": [
      {
        "q": "Làm cách nào để hiển thị hình ảnh trong Google Sheets?",
        "a": "Sử dụng hàm =IMAGE() với URL ảnh trực tiếp. Ví dụ: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Tại sao liên kết ảnh Google Drive không hoạt động trong =IMAGE()?",
        "a": "Liên kết Google Drive trỏ đến trang xem trước, không phải tệp ảnh gốc. Hàm =IMAGE() yêu cầu một URL trực tiếp phục vụ tệp ảnh đó."
      },
      {
        "q": "Tôi có thể thay đổi kích thước ảnh trong ô Google Sheets không?",
        "a": "Có, bạn có thể sử dụng tham số mode trong =IMAGE() để vừa khít, kéo giãn, giữ nguyên kích thước gốc hoặc xác định kích thước tùy chỉnh."
      },
      {
        "q": "Hình ảnh có tải cho tất cả những người xem bảng tính của tôi không?",
        "a": "Có. Vì ImageToURL cung cấp các URL công khai được hỗ trợ bởi CDN, bất kỳ ai có quyền truy cập vào bảng tính của bạn đều sẽ thấy hình ảnh tải ngay lập tức."
      },
      {
        "q": "Có giới hạn số lượng ảnh tôi có thể thêm không?",
        "a": "Không có giới hạn từ phía chúng tôi. Mặc dù Google Sheets có thể chạy chậm nếu có hàng nghìn hình ảnh, nhưng các danh mục và bảng điều khiển thông thường vẫn hoạt động hoàn hảo."
      }
    ],
    "ctaTitle": "Thêm hình ảnh vào bảng tính của bạn ngay hôm nay",
    "ctaBody": "Tải ảnh lên, sao chép URL và sử dụng =IMAGE() trong Google Sheets chỉ trong vài giây.",
    "ctaButton": "Tải lên ngay"
  },
  "pt-BR": {
    "metaTitle": "URLs de imagem para Google Sheets — Função =IMAGE() | ImageToURL",
    "metaDescription": "Obtenha URLs de imagem que funcionam com a função =IMAGE() do Google Sheets. Faça upload de imagens, obtenha URLs diretas e exiba-as em suas planilhas instantaneamente.",
    "schemaName": "URLs de imagem para Google Sheets",
    "schemaDescription": "Uma ferramenta para gerar URLs de imagem diretas compatíveis com a função =IMAGE() do Google Sheets para integração perfeita em planilhas.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URLs de imagem para Google",
    "h1Highlight": "Sheets.",
    "intro": "Faça upload de imagens e obtenha URLs diretas que funcionam com a função =IMAGE() do Google Sheets. Exiba fotos de produtos, ícones e visuais diretamente nas células da sua planilha.",
    "howTitle": "Como funciona com o Google Sheets",
    "steps": [
      {
        "title": "Faça upload da sua imagem",
        "body": "Faça upload da sua imagem para o ImageToURL e copie a URL direta gerada."
      },
      {
        "title": "Selecione sua célula",
        "body": "No Google Sheets, clique na célula onde você deseja que a imagem apareça."
      },
      {
        "title": "Use a função",
        "body": "Digite =IMAGE(\"cole-sua-url-aqui\") e pressione Enter para exibir a imagem."
      }
    ],
    "whyTitle": "Por que você precisa de URLs externas",
    "whyItems": [
      {
        "title": "A função =IMAGE() precisa de URLs públicas",
        "body": "A função =IMAGE() só funciona com URLs de imagem diretas e acessíveis publicamente; links privados ou páginas HTML não serão renderizados."
      },
      {
        "title": "Links do Google Drive falham",
        "body": "Os links de compartilhamento do Google Drive apontam para páginas de visualização, não para arquivos de imagem brutos, causando erros na sua planilha."
      },
      {
        "title": "URLs permanentes",
        "body": "Nossas URLs baseadas em CDN nunca expiram, garantindo que seus relatórios e dashboards permaneçam funcionais a longo prazo."
      },
      {
        "title": "Acessível para a equipe",
        "body": "Links públicos de CDN significam que todos os colaboradores veem suas imagens instantaneamente, sem necessidade de gerenciamento complexo de permissões."
      }
    ],
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Como exibir uma imagem no Google Sheets?",
        "a": "Use a função =IMAGE() com uma URL de imagem direta. Por exemplo: =IMAGE(\"https://imagetourl.cloud/sua-imagem.jpg\")."
      },
      {
        "q": "Por que os links de imagem do Google Drive não funcionam no =IMAGE()?",
        "a": "Os links do Google Drive apontam para uma página de visualização, não para o arquivo de imagem bruto. A função =IMAGE() requer uma URL direta que sirva o arquivo de imagem diretamente."
      },
      {
        "q": "Posso redimensionar imagens dentro das células do Google Sheets?",
        "a": "Sim, você pode usar o parâmetro de modo na função =IMAGE() para ajustar, esticar ou manter o tamanho original, ou definir dimensões personalizadas."
      },
      {
        "q": "As imagens carregarão para todos que visualizarem minha planilha?",
        "a": "Sim. Como o ImageToURL fornece URLs públicas baseadas em CDN, qualquer pessoa com acesso à sua planilha verá as imagens carregarem instantaneamente."
      },
      {
        "q": "Existe um limite de quantas imagens posso adicionar?",
        "a": "Não há limite da nossa parte. Embora o Google Sheets possa ficar lento com milhares de imagens, catálogos e dashboards típicos funcionam perfeitamente."
      }
    ],
    "ctaTitle": "Adicione imagens às suas planilhas hoje mesmo",
    "ctaBody": "Faça upload de uma imagem, copie a URL e use =IMAGE() no Google Sheets em segundos.",
    "ctaButton": "Fazer upload agora"
  },
  "tr": {
    "metaTitle": "Google Sheets için Resim URL'leri — =IMAGE() Fonksiyonu | ImageToURL",
    "metaDescription": "Google Sheets =IMAGE() fonksiyonu ile çalışan resim URL'leri alın. Resimlerinizi yükleyin, doğrudan URL'leri alın ve e-tablolarınızda anında görüntüleyin.",
    "schemaName": "Google Sheets için Resim URL'leri",
    "schemaDescription": "Sorunsuz e-tablo entegrasyonu için Google Sheets =IMAGE() fonksiyonu ile uyumlu doğrudan resim URL'leri oluşturan bir araç.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets için",
    "h1Highlight": "Resim URL'leri.",
    "intro": "Resimlerinizi yükleyin ve Google Sheets'in =IMAGE() fonksiyonu ile çalışan doğrudan URL'leri alın. Ürün fotoğraflarını, simgeleri ve görselleri doğrudan e-tablo hücrelerinizde görüntüleyin.",
    "howTitle": "Google Sheets ile Nasıl Çalışır",
    "steps": [
      {
        "title": "Resminizi yükleyin",
        "body": "Resminizi ImageToURL'e yükleyin ve oluşturulan doğrudan URL'yi kopyalayın."
      },
      {
        "title": "Hücrenizi seçin",
        "body": "Google Sheets'te, resmin görünmesini istediğiniz hücreye tıklayın."
      },
      {
        "title": "Fonksiyonu kullanın",
        "body": "=IMAGE(\"url-adresinizi-buraya-yapistirin\") yazın ve resmi görüntülemek için Enter tuşuna basın."
      }
    ],
    "whyTitle": "Neden Harici URL'lere İhtiyacınız Var?",
    "whyItems": [
      {
        "title": "=IMAGE() Halka Açık URL'lere İhtiyaç Duyar",
        "body": "=IMAGE() fonksiyonu yalnızca herkese açık, doğrudan resim URL'leri ile çalışır; özel bağlantılar veya HTML sayfaları görüntülenmez."
      },
      {
        "title": "Google Drive Bağlantıları Çalışmaz",
        "body": "Google Drive paylaşım bağlantıları ham resim dosyalarına değil, önizleme sayfalarına yönlendirir, bu da e-tablonuzda hatalara neden olur."
      },
      {
        "title": "Kalıcı URL'ler",
        "body": "CDN destekli URL'lerimiz asla süresi dolmaz, böylece raporlarınızın ve panolarınızın uzun vadede işlevsel kalmasını sağlar."
      },
      {
        "title": "Ekip Tarafından Erişilebilir",
        "body": "Halka açık CDN bağlantıları, karmaşık izin yönetimine gerek kalmadan tüm işbirlikçilerinizin resimlerinizi anında görmesi anlamına gelir."
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular",
    "faqs": [
      {
        "q": "Google Sheets'te nasıl resim görüntülerim?",
        "a": "Doğrudan bir resim URL'si ile =IMAGE() fonksiyonunu kullanın. Örneğin: =IMAGE(\"https://imagetourl.cloud/resminiz.jpg\")."
      },
      {
        "q": "Google Drive resim bağlantıları neden =IMAGE() içinde çalışmıyor?",
        "a": "Google Drive bağlantıları ham resim dosyasına değil, bir önizleme sayfasına yönlendirir. =IMAGE() fonksiyonu, resmi doğrudan sunan bir URL gerektirir."
      },
      {
        "q": "Google Sheets hücrelerindeki resimleri yeniden boyutlandırabilir miyim?",
        "a": "Evet, =IMAGE() içindeki mod parametresini kullanarak resmi sığdırabilir, esnetebilir, orijinal boyutunda tutabilir veya özel boyutlar tanımlayabilirsiniz."
      },
      {
        "q": "E-tablomu görüntüleyen herkes için resimler yüklenir mi?",
        "a": "Evet. ImageToURL halka açık, CDN destekli URL'ler sağladığı için, e-tablonuza erişimi olan herkes resimlerin anında yüklendiğini görecektir."
      },
      {
        "q": "Ekleyebileceğim resim sayısında bir sınır var mı?",
        "a": "Bizim tarafımızdan bir sınır yoktur. Google Sheets binlerce resimle yavaşlayabilse de, tipik kataloglar ve panolar mükemmel şekilde çalışır."
      }
    ],
    "ctaTitle": "E-tablolarınıza bugün resim ekleyin",
    "ctaBody": "Bir resim yükleyin, URL'yi kopyalayın ve saniyeler içinde Google Sheets'te =IMAGE() fonksiyonunu kullanın.",
    "ctaButton": "Şimdi Yükle"
  },
  "tl": {
    "metaTitle": "Mga Image URL para sa Google Sheets — =IMAGE() Function | ImageToURL",
    "metaDescription": "Kumuha ng mga image URL na gumagana sa =IMAGE() function ng Google Sheets. Mag-upload ng mga larawan, kumuha ng direct URL, at ipakita ang mga ito sa iyong mga spreadsheet nang mabilisan.",
    "schemaName": "Mga Image URL para sa Google Sheets",
    "schemaDescription": "Isang tool para gumawa ng mga direct image URL na compatible sa =IMAGE() function ng Google Sheets para sa maayos na integration sa spreadsheet.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Mga Image URL para sa Google",
    "h1Highlight": "Sheets.",
    "intro": "Mag-upload ng mga larawan at kumuha ng mga direct URL na gumagana sa =IMAGE() function ng Google Sheets. Ipakita ang mga larawan ng produkto, icon, at visual nang direkta sa loob ng iyong mga cell sa spreadsheet.",
    "howTitle": "Paano ito gamitin sa Google Sheets",
    "steps": [
      {
        "title": "I-upload ang iyong larawan",
        "body": "I-upload ang iyong larawan sa ImageToURL at kopyahin ang nabuong direct URL."
      },
      {
        "title": "Piliin ang iyong cell",
        "body": "Sa Google Sheets, i-click ang cell kung saan mo gustong lumabas ang larawan."
      },
      {
        "title": "Gamitin ang function",
        "body": "I-type ang =IMAGE(\"i-paste-ang-iyong-url-dito\") at pindutin ang Enter para ipakita ang larawan."
      }
    ],
    "whyTitle": "Bakit kailangan mo ng mga external URL",
    "whyItems": [
      {
        "title": "Kailangan ng =IMAGE() ng mga public URL",
        "body": "Ang =IMAGE() function ay gumagana lamang sa mga public at direct image URL; ang mga private link o HTML page ay hindi gagana."
      },
      {
        "title": "Hindi gumagana ang mga link mula sa Google Drive",
        "body": "Ang mga sharing link ng Google Drive ay tumuturo sa mga preview page, hindi sa raw image file, kaya nagdudulot ito ng error sa iyong spreadsheet."
      },
      {
        "title": "Permanenteng mga URL",
        "body": "Ang aming mga URL na suportado ng CDN ay hindi nag-e-expire, kaya siguradong mananatiling gumagana ang iyong mga report at dashboard sa mahabang panahon."
      },
      {
        "title": "Accessible sa team",
        "body": "Dahil public CDN link ang gamit, makikita agad ng lahat ng collaborator ang iyong mga larawan nang hindi na kailangan ng komplikadong permission management."
      }
    ],
    "faqTitle": "Mga Madalas Itanong",
    "faqs": [
      {
        "q": "Paano ako magpapakita ng larawan sa Google Sheets?",
        "a": "Gamitin ang =IMAGE() function na may kasamang direct image URL. Halimbawa: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Bakit hindi gumagana ang mga image link mula sa Google Drive sa =IMAGE()?",
        "a": "Ang mga link ng Google Drive ay tumuturo sa preview page, hindi sa mismong image file. Kailangan ng =IMAGE() function ng direct URL na direktang nagse-serve ng image file."
      },
      {
        "q": "Maaari ko bang baguhin ang laki ng mga larawan sa loob ng mga cell ng Google Sheets?",
        "a": "Oo, maaari mong gamitin ang mode parameter sa =IMAGE() para i-fit, i-stretch, o panatilihin ang orihinal na laki, o magtakda ng custom na sukat."
      },
      {
        "q": "Maglo-load ba ang mga larawan para sa lahat ng tumitingin sa aking spreadsheet?",
        "a": "Oo. Dahil ang ImageToURL ay nagbibigay ng mga public, CDN-backed URL, makikita agad ng sinumang may access sa iyong spreadsheet ang mga larawan."
      },
      {
        "q": "May limitasyon ba kung ilang larawan ang maaari kong idagdag?",
        "a": "Walang limitasyon mula sa amin. Bagama't maaaring bumagal ang Google Sheets kung libu-libo ang larawan, ang mga karaniwang catalog at dashboard ay gumagana nang maayos."
      }
    ],
    "ctaTitle": "Magdagdag ng mga larawan sa iyong mga spreadsheet ngayon",
    "ctaBody": "Mag-upload ng larawan, kopyahin ang URL, at gamitin ang =IMAGE() sa Google Sheets sa loob lamang ng ilang segundo.",
    "ctaButton": "I-upload Ngayon"
  },
  "pl": {
    "metaTitle": "URL obrazów dla Google Sheets — funkcja =IMAGE() | ImageToURL",
    "metaDescription": "Uzyskaj bezpośrednie linki do obrazów, które działają z funkcją =IMAGE() w Google Sheets. Prześlij obrazy, pobierz bezpośrednie adresy URL i wyświetlaj je w swoich arkuszach.",
    "schemaName": "URL obrazów dla Google Sheets",
    "schemaDescription": "Narzędzie do generowania bezpośrednich adresów URL obrazów, kompatybilnych z funkcją =IMAGE() w Google Sheets, zapewniające płynną integrację z arkuszami kalkulacyjnymi.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL obrazów dla Google",
    "h1Highlight": "Sheets.",
    "intro": "Prześlij obrazy i uzyskaj bezpośrednie adresy URL, które działają z funkcją =IMAGE() w Google Sheets. Wyświetlaj zdjęcia produktów, ikony i wizualizacje bezpośrednio w komórkach arkusza.",
    "howTitle": "Jak to działa w Google Sheets",
    "steps": [
      {
        "title": "Prześlij swój obraz",
        "body": "Prześlij obraz do ImageToURL i skopiuj wygenerowany bezpośredni adres URL."
      },
      {
        "title": "Wybierz komórkę",
        "body": "W Google Sheets kliknij komórkę, w której chcesz wyświetlić obraz."
      },
      {
        "title": "Użyj funkcji",
        "body": "Wpisz =IMAGE(\"wklej-swój-url-tutaj\") i naciśnij Enter, aby wyświetlić obraz."
      }
    ],
    "whyTitle": "Dlaczego potrzebujesz zewnętrznych adresów URL",
    "whyItems": [
      {
        "title": "Funkcja =IMAGE() wymaga publicznych URL",
        "body": "Funkcja =IMAGE() działa tylko z publicznie dostępnymi, bezpośrednimi linkami do obrazów; prywatne linki lub strony HTML nie będą wyświetlane."
      },
      {
        "title": "Linki z Google Drive nie działają",
        "body": "Linki udostępniania z Google Drive prowadzą do stron podglądu, a nie do surowych plików graficznych, co powoduje błędy w arkuszu."
      },
      {
        "title": "Stałe adresy URL",
        "body": "Nasze adresy URL oparte na CDN nigdy nie wygasają, dzięki czemu Twoje raporty i pulpity nawigacyjne pozostają funkcjonalne przez długi czas."
      },
      {
        "title": "Dostępne dla zespołu",
        "body": "Publiczne linki CDN oznaczają, że każdy współpracownik widzi Twoje obrazy natychmiast, bez konieczności skomplikowanego zarządzania uprawnieniami."
      }
    ],
    "faqTitle": "Najczęściej zadawane pytania",
    "faqs": [
      {
        "q": "Jak wyświetlić obraz w Google Sheets?",
        "a": "Użyj funkcji =IMAGE() z bezpośrednim adresem URL obrazu. Na przykład: =IMAGE(\"https://imagetourl.cloud/twoj-obraz.jpg\")."
      },
      {
        "q": "Dlaczego linki do obrazów z Google Drive nie działają w =IMAGE()?",
        "a": "Linki z Google Drive prowadzą do strony podglądu, a nie do pliku graficznego. Funkcja =IMAGE() wymaga bezpośredniego adresu URL, który serwuje plik obrazu."
      },
      {
        "q": "Czy mogę zmieniać rozmiar obrazów w komórkach Google Sheets?",
        "a": "Tak, możesz użyć parametru mode w funkcji =IMAGE(), aby dopasować, rozciągnąć lub zachować oryginalny rozmiar, albo zdefiniować własne wymiary."
      },
      {
        "q": "Czy obrazy załadują się każdemu, kto przegląda mój arkusz?",
        "a": "Tak. Ponieważ ImageToURL zapewnia publiczne adresy URL oparte na CDN, każdy, kto ma dostęp do Twojego arkusza, zobaczy natychmiastowe załadowanie obrazów."
      },
      {
        "q": "Czy istnieje limit liczby obrazów, które mogę dodać?",
        "a": "Z naszej strony nie ma żadnego limitu. Chociaż Google Sheets może zwolnić przy tysiącach obrazów, typowe katalogi i pulpity nawigacyjne działają bez zarzutu."
      }
    ],
    "ctaTitle": "Dodaj obrazy do swoich arkuszy już dziś",
    "ctaBody": "Prześlij obraz, skopiuj URL i użyj =IMAGE() w Google Sheets w kilka sekund.",
    "ctaButton": "Prześlij teraz"
  },
  "nl": {
    "metaTitle": "Afbeeldings-URL's voor Google Sheets — =IMAGE() functie | ImageToURL",
    "metaDescription": "Krijg afbeeldings-URL's die werken met de =IMAGE() functie van Google Sheets. Upload afbeeldingen, ontvang directe URL's en toon ze direct in je spreadsheets.",
    "schemaName": "Afbeeldings-URL's voor Google Sheets",
    "schemaDescription": "Een tool voor het genereren van directe afbeeldings-URL's die compatibel zijn met de Google Sheets =IMAGE() functie voor naadloze spreadsheet-integratie.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Afbeeldings-URL's voor Google",
    "h1Highlight": "Sheets.",
    "intro": "Upload afbeeldingen en ontvang directe URL's die werken met de =IMAGE() functie van Google Sheets. Toon productfoto's, iconen en visuals direct in je spreadsheetcellen.",
    "howTitle": "Hoe het werkt met Google Sheets",
    "steps": [
      {
        "title": "Upload je afbeelding",
        "body": "Upload je afbeelding naar ImageToURL en kopieer de gegenereerde directe URL."
      },
      {
        "title": "Selecteer je cel",
        "body": "Klik in Google Sheets op de cel waar je de afbeelding wilt laten verschijnen."
      },
      {
        "title": "Gebruik de functie",
        "body": "Typ =IMAGE(\"plak-hier-je-url\") en druk op Enter om de afbeelding weer te geven."
      }
    ],
    "whyTitle": "Waarom je externe URL's nodig hebt",
    "whyItems": [
      {
        "title": "=IMAGE() heeft publieke URL's nodig",
        "body": "De =IMAGE() functie werkt alleen met publiek toegankelijke, directe afbeeldings-URL's; privélinks of HTML-pagina's worden niet geladen."
      },
      {
        "title": "Google Drive-links werken niet",
        "body": "Google Drive-deellinks verwijzen naar voorbeeldpagina's, niet naar ruwe afbeeldingsbestanden, wat fouten veroorzaakt in je spreadsheet."
      },
      {
        "title": "Permanente URL's",
        "body": "Onze CDN-gebaseerde URL's verlopen nooit, waardoor je rapporten en dashboards op de lange termijn functioneel blijven."
      },
      {
        "title": "Toegankelijk voor het team",
        "body": "Publieke CDN-links betekenen dat elke medewerker je afbeeldingen direct ziet zonder ingewikkeld rechtenbeheer."
      }
    ],
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Hoe toon ik een afbeelding in Google Sheets?",
        "a": "Gebruik de =IMAGE() functie met een directe afbeeldings-URL. Bijvoorbeeld: =IMAGE(\"https://imagetourl.cloud/jouw-afbeelding.jpg\")."
      },
      {
        "q": "Waarom werken Google Drive-afbeeldingslinks niet in =IMAGE()?",
        "a": "Google Drive-links verwijzen naar een voorbeeldpagina, niet naar het ruwe afbeeldingsbestand. De =IMAGE() functie vereist een directe URL die het afbeeldingsbestand direct serveert."
      },
      {
        "q": "Kan ik afbeeldingen in Google Sheets-cellen aanpassen?",
        "a": "Ja, je kunt de modus-parameter in =IMAGE() gebruiken om de afbeelding passend te maken, uit te rekken, de originele grootte te behouden of aangepaste afmetingen in te stellen."
      },
      {
        "q": "Laden de afbeeldingen voor iedereen die mijn spreadsheet bekijkt?",
        "a": "Ja. Omdat ImageToURL publieke, CDN-gebaseerde URL's levert, ziet iedereen met toegang tot je spreadsheet de afbeeldingen direct laden."
      },
      {
        "q": "Is er een limiet aan het aantal afbeeldingen dat ik kan toevoegen?",
        "a": "Er is van onze kant geen limiet. Hoewel Google Sheets trager kan worden bij duizenden afbeeldingen, werken typische catalogi en dashboards perfect."
      }
    ],
    "ctaTitle": "Voeg vandaag nog afbeeldingen toe aan je spreadsheets",
    "ctaBody": "Upload een afbeelding, kopieer de URL en gebruik =IMAGE() in Google Sheets binnen enkele seconden.",
    "ctaButton": "Nu uploaden"
  },
  "it": {
    "metaTitle": "URL immagini per Google Sheets — Funzione =IMAGE() | ImageToURL",
    "metaDescription": "Ottieni URL di immagini compatibili con la funzione =IMAGE() di Google Sheets. Carica immagini, ottieni URL diretti e visualizzale istantaneamente nei tuoi fogli di calcolo.",
    "schemaName": "URL immagini per Google Sheets",
    "schemaDescription": "Uno strumento per generare URL di immagini diretti compatibili con la funzione =IMAGE() di Google Sheets per un'integrazione perfetta nei fogli di calcolo.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL immagini per Google",
    "h1Highlight": "Sheets.",
    "intro": "Carica le tue immagini e ottieni URL diretti che funzionano con la funzione =IMAGE() di Google Sheets. Visualizza foto di prodotti, icone e grafiche direttamente nelle celle del tuo foglio di calcolo.",
    "howTitle": "Come funziona con Google Sheets",
    "steps": [
      {
        "title": "Carica la tua immagine",
        "body": "Carica la tua immagine su ImageToURL e copia l'URL diretto generato."
      },
      {
        "title": "Seleziona la cella",
        "body": "In Google Sheets, clicca sulla cella in cui vuoi che appaia l'immagine."
      },
      {
        "title": "Usa la funzione",
        "body": "Digita =IMAGE(\"incolla-qui-il-tuo-url\") e premi Invio per visualizzare l'immagine."
      }
    ],
    "whyTitle": "Perché hai bisogno di URL esterni",
    "whyItems": [
      {
        "title": "=IMAGE() richiede URL pubblici",
        "body": "La funzione =IMAGE() funziona solo con URL di immagini diretti e accessibili pubblicamente; i link privati o le pagine HTML non verranno visualizzati."
      },
      {
        "title": "I link di Google Drive non funzionano",
        "body": "I link di condivisione di Google Drive puntano a pagine di anteprima, non ai file immagine grezzi, causando errori nel foglio di calcolo."
      },
      {
        "title": "URL permanenti",
        "body": "I nostri URL basati su CDN non scadono mai, garantendo che i tuoi report e dashboard rimangano funzionali a lungo termine."
      },
      {
        "title": "Accessibili al team",
        "body": "I link CDN pubblici consentono a ogni collaboratore di vedere le immagini istantaneamente senza complesse gestioni dei permessi."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Come visualizzo un'immagine in Google Sheets?",
        "a": "Usa la funzione =IMAGE() con un URL diretto dell'immagine. Ad esempio: =IMAGE(\"https://imagetourl.cloud/la-tua-immagine.jpg\")."
      },
      {
        "q": "Perché i link di Google Drive non funzionano in =IMAGE()?",
        "a": "I link di Google Drive puntano a una pagina di anteprima, non al file immagine. La funzione =IMAGE() richiede un URL diretto che fornisca direttamente il file immagine."
      },
      {
        "q": "Posso ridimensionare le immagini nelle celle di Google Sheets?",
        "a": "Sì, puoi usare il parametro mode in =IMAGE() per adattare, stirare o mantenere le dimensioni originali, oppure definire dimensioni personalizzate."
      },
      {
        "q": "Le immagini verranno caricate per chiunque visualizzi il mio foglio?",
        "a": "Sì. Poiché ImageToURL fornisce URL pubblici basati su CDN, chiunque abbia accesso al tuo foglio di calcolo vedrà le immagini caricarsi istantaneamente."
      },
      {
        "q": "C'è un limite al numero di immagini che posso aggiungere?",
        "a": "Non c'è alcun limite da parte nostra. Sebbene Google Sheets possa rallentare con migliaia di immagini, cataloghi e dashboard tipici funzionano perfettamente."
      }
    ],
    "ctaTitle": "Aggiungi immagini ai tuoi fogli di calcolo oggi stesso",
    "ctaBody": "Carica un'immagine, copia l'URL e usa =IMAGE() in Google Sheets in pochi secondi.",
    "ctaButton": "Carica ora"
  },
  "ar": {
    "metaTitle": "روابط صور لجداول بيانات Google — دالة =IMAGE() | ImageToURL",
    "metaDescription": "احصل على روابط صور تعمل مع دالة =IMAGE() في جداول بيانات Google. ارفع الصور، واحصل على روابط مباشرة، واعرضها في جداولك فوراً.",
    "schemaName": "روابط صور لجداول بيانات Google",
    "schemaDescription": "أداة لإنشاء روابط صور مباشرة متوافقة مع دالة =IMAGE() في جداول بيانات Google لتكامل سلس مع جداول البيانات.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "روابط صور لـ Google",
    "h1Highlight": "Sheets.",
    "intro": "ارفع الصور واحصل على روابط مباشرة تعمل مع دالة =IMAGE() في جداول بيانات Google. اعرض صور المنتجات، والأيقونات، والمرئيات مباشرة داخل خلايا جدول البيانات الخاص بك.",
    "howTitle": "كيفية العمل مع جداول بيانات Google",
    "steps": [
      {
        "title": "ارفع صورتك",
        "body": "ارفع صورتك إلى ImageToURL وانسخ الرابط المباشر الذي تم إنشاؤه."
      },
      {
        "title": "حدد خليتك",
        "body": "في جداول بيانات Google، انقر فوق الخلية التي تريد ظهور الصورة فيها."
      },
      {
        "title": "استخدم الدالة",
        "body": "اكتب =IMAGE(\"paste-your-url-here\") واضغط على Enter لعرض الصورة."
      }
    ],
    "whyTitle": "لماذا تحتاج إلى روابط خارجية",
    "whyItems": [
      {
        "title": "دالة =IMAGE() تحتاج إلى روابط عامة",
        "body": "تعمل دالة =IMAGE() فقط مع روابط الصور المباشرة والمتاحة للجمهور؛ الروابط الخاصة أو صفحات HTML لن تعمل."
      },
      {
        "title": "روابط Google Drive لا تعمل",
        "body": "روابط مشاركة Google Drive تشير إلى صفحات معاينة وليس إلى ملفات الصور الخام، مما يسبب أخطاء في جدول البيانات الخاص بك."
      },
      {
        "title": "روابط دائمة",
        "body": "روابطنا المدعومة بشبكة CDN لا تنتهي صلاحيتها أبداً، مما يضمن بقاء تقاريرك ولوحات التحكم الخاصة بك تعمل على المدى الطويل."
      },
      {
        "title": "متاحة للفريق",
        "body": "روابط CDN العامة تعني أن كل متعاون يرى صورك فوراً دون الحاجة إلى إدارة أذونات معقدة."
      }
    ],
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "كيف أعرض صورة في جداول بيانات Google؟",
        "a": "استخدم دالة =IMAGE() مع رابط صورة مباشر. على سبيل المثال: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "لماذا لا تعمل روابط صور Google Drive في =IMAGE()؟",
        "a": "روابط Google Drive تشير إلى صفحة معاينة، وليس إلى ملف الصورة الخام. تتطلب دالة =IMAGE() رابطاً مباشراً يخدم ملف الصورة مباشرة."
      },
      {
        "q": "هل يمكنني تغيير حجم الصور داخل خلايا جداول بيانات Google؟",
        "a": "نعم، يمكنك استخدام معامل الوضع (mode) في دالة =IMAGE() للملاءمة، أو التمديد، أو الحفاظ على الحجم الأصلي، أو تحديد أبعاد مخصصة."
      },
      {
        "q": "هل سيتم تحميل الصور لكل من يشاهد جدول البيانات الخاص بي؟",
        "a": "نعم. بما أن ImageToURL توفر روابط عامة مدعومة بشبكة CDN، فإن أي شخص لديه حق الوصول إلى جدول البيانات الخاص بك سيرى الصور يتم تحميلها فوراً."
      },
      {
        "q": "هل هناك حد لعدد الصور التي يمكنني إضافتها؟",
        "a": "لا يوجد حد من جانبنا. بينما قد تتباطأ جداول بيانات Google مع آلاف الصور، إلا أن الكتالوجات ولوحات التحكم النموذجية تعمل بشكل مثالي."
      }
    ],
    "ctaTitle": "أضف الصور إلى جداول بياناتك اليوم",
    "ctaBody": "ارفع صورة، وانسخ الرابط، واستخدم =IMAGE() في جداول بيانات Google في ثوانٍ.",
    "ctaButton": "ارفع الآن"
  },
  "bn": {
    "metaTitle": "Google Sheets-এর জন্য ইমেজ URL — =IMAGE() ফাংশন | ImageToURL",
    "metaDescription": "Google Sheets-এর =IMAGE() ফাংশনের সাথে কাজ করে এমন ইমেজ URL পান। ছবি আপলোড করুন, সরাসরি URL নিন এবং আপনার স্প্রেডশীটে তাৎক্ষণিকভাবে প্রদর্শন করুন।",
    "schemaName": "Google Sheets-এর জন্য ইমেজ URL",
    "schemaDescription": "Google Sheets-এর =IMAGE() ফাংশনের সাথে সামঞ্জস্যপূর্ণ সরাসরি ইমেজ URL তৈরি করার একটি টুল, যা স্প্রেডশীটে সহজে ব্যবহারের উপযোগী।",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets-এর জন্য",
    "h1Highlight": "ইমেজ URL।",
    "intro": "ছবি আপলোড করুন এবং Google Sheets-এর =IMAGE() ফাংশনের সাথে কাজ করে এমন সরাসরি URL পান। আপনার স্প্রেডশীটের সেলের ভেতরেই পণ্যের ছবি, আইকন এবং ভিজ্যুয়াল প্রদর্শন করুন।",
    "howTitle": "Google Sheets-এ যেভাবে কাজ করে",
    "steps": [
      {
        "title": "আপনার ছবি আপলোড করুন",
        "body": "ImageToURL-এ আপনার ছবি আপলোড করুন এবং তৈরি হওয়া সরাসরি URL-টি কপি করুন।"
      },
      {
        "title": "আপনার সেল নির্বাচন করুন",
        "body": "Google Sheets-এ যে সেলে ছবিটি দেখাতে চান, সেখানে ক্লিক করুন।"
      },
      {
        "title": "ফাংশনটি ব্যবহার করুন",
        "body": "=IMAGE(\"paste-your-url-here\") টাইপ করুন এবং ছবিটি প্রদর্শন করতে Enter চাপুন।"
      }
    ],
    "whyTitle": "কেন আপনার এক্সটার্নাল URL প্রয়োজন",
    "whyItems": [
      {
        "title": "=IMAGE() ফাংশনের জন্য পাবলিক URL প্রয়োজন",
        "body": "=IMAGE() ফাংশন শুধুমাত্র সর্বজনীনভাবে অ্যাক্সেসযোগ্য, সরাসরি ইমেজ URL-এর সাথেই কাজ করে; ব্যক্তিগত লিঙ্ক বা HTML পেজ এখানে কাজ করবে না।"
      },
      {
        "title": "Google Drive লিঙ্ক কাজ করে না",
        "body": "Google Drive-এর শেয়ারিং লিঙ্কগুলো প্রিভিউ পেজের দিকে নির্দেশ করে, সরাসরি ইমেজ ফাইলের দিকে নয়, যার ফলে স্প্রেডশীটে ত্রুটি দেখা দেয়।"
      },
      {
        "title": "স্থায়ী URL",
        "body": "আমাদের CDN-সমর্থিত URL-এর মেয়াদ কখনো শেষ হয় না, যা নিশ্চিত করে যে আপনার রিপোর্ট এবং ড্যাশবোর্ড দীর্ঘমেয়াদে কার্যকর থাকবে।"
      },
      {
        "title": "টিম-অ্যাক্সেসযোগ্য",
        "body": "পাবলিক CDN লিঙ্ক থাকার ফলে আপনার টিমের সবাই জটিল অনুমতি ব্যবস্থাপনা ছাড়াই তাৎক্ষণিকভাবে ছবিগুলো দেখতে পাবে।"
      }
    ],
    "faqTitle": "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী",
    "faqs": [
      {
        "q": "আমি কীভাবে Google Sheets-এ একটি ছবি প্রদর্শন করব?",
        "a": "একটি সরাসরি ইমেজ URL সহ =IMAGE() ফাংশন ব্যবহার করুন। উদাহরণস্বরূপ: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")।"
      },
      {
        "q": "Google Drive-এর ইমেজ লিঙ্কগুলো =IMAGE()-এ কাজ করে না কেন?",
        "a": "Google Drive-এর লিঙ্কগুলো একটি প্রিভিউ পেজের দিকে নির্দেশ করে, সরাসরি ইমেজ ফাইলের দিকে নয়। =IMAGE() ফাংশনের জন্য এমন একটি সরাসরি URL প্রয়োজন যা সরাসরি ইমেজ ফাইলটি সার্ভ করে।"
      },
      {
        "q": "আমি কি Google Sheets-এর সেলের ভেতরে ছবির আকার পরিবর্তন করতে পারি?",
        "a": "হ্যাঁ, আপনি =IMAGE()-এ মোড প্যারামিটার ব্যবহার করে ছবি ফিট, স্ট্রেচ বা আসল আকারে রাখতে পারেন, অথবা কাস্টম ডাইমেনশন নির্ধারণ করতে পারেন।"
      },
      {
        "q": "আমার স্প্রেডশীট যারা দেখবেন তারা কি সবাই ছবিগুলো দেখতে পাবেন?",
        "a": "হ্যাঁ। যেহেতু ImageToURL পাবলিক, CDN-সমর্থিত URL প্রদান করে, তাই আপনার স্প্রেডশীটে অ্যাক্সেস থাকা যে কেউ তাৎক্ষণিকভাবে ছবিগুলো লোড হতে দেখবেন।"
      },
      {
        "q": "আমি কতগুলো ছবি যোগ করতে পারব তার কি কোনো সীমা আছে?",
        "a": "আমাদের দিক থেকে কোনো সীমা নেই। যদিও হাজার হাজার ছবি থাকলে Google Sheets কিছুটা ধীর হতে পারে, তবে সাধারণ ক্যাটালগ এবং ড্যাশবোর্ডগুলো নিখুঁতভাবে কাজ করে।"
      }
    ],
    "ctaTitle": "আজই আপনার স্প্রেডশীটে ছবি যোগ করুন",
    "ctaBody": "একটি ছবি আপলোড করুন, URL কপি করুন এবং কয়েক সেকেন্ডের মধ্যে Google Sheets-এ =IMAGE() ব্যবহার করুন।",
    "ctaButton": "এখনই আপলোড করুন"
  },
  "fa": {
    "metaTitle": "لینک‌های تصویر برای Google Sheets — تابع =IMAGE() | ImageToURL",
    "metaDescription": "لینک‌های تصویری دریافت کنید که با تابع =IMAGE() در Google Sheets کار می‌کنند. تصاویر را آپلود کنید، لینک‌های مستقیم بگیرید و آن‌ها را فوراً در صفحات گسترده خود نمایش دهید.",
    "schemaName": "لینک‌های تصویر برای Google Sheets",
    "schemaDescription": "ابزاری برای تولید لینک‌های مستقیم تصویر که با تابع =IMAGE() در Google Sheets برای ادغام یکپارچه در صفحات گسترده سازگار است.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "لینک‌های تصویر برای",
    "h1Highlight": "Google Sheets.",
    "intro": "تصاویر را آپلود کنید و لینک‌های مستقیمی دریافت کنید که با تابع =IMAGE() در Google Sheets کار می‌کنند. عکس‌های محصولات، آیکون‌ها و تصاویر بصری را مستقیماً در سلول‌های صفحه گسترده خود نمایش دهید.",
    "howTitle": "نحوه کار با Google Sheets",
    "steps": [
      {
        "title": "تصویر خود را آپلود کنید",
        "body": "تصویر خود را در ImageToURL آپلود کرده و لینک مستقیم تولید شده را کپی کنید."
      },
      {
        "title": "سلول خود را انتخاب کنید",
        "body": "در Google Sheets، روی سلولی که می‌خواهید تصویر در آن ظاهر شود کلیک کنید."
      },
      {
        "title": "از تابع استفاده کنید",
        "body": "عبارت =IMAGE(\"لینک-خود-را-اینجا-پیست-کنید\") را تایپ کرده و Enter را بزنید تا تصویر نمایش داده شود."
      }
    ],
    "whyTitle": "چرا به لینک‌های خارجی نیاز دارید",
    "whyItems": [
      {
        "title": "تابع =IMAGE() به لینک‌های عمومی نیاز دارد",
        "body": "تابع =IMAGE() فقط با لینک‌های مستقیم و قابل دسترس برای عموم کار می‌کند؛ لینک‌های خصوصی یا صفحات HTML نمایش داده نمی‌شوند."
      },
      {
        "title": "لینک‌های Google Drive کار نمی‌کنند",
        "body": "لینک‌های اشتراک‌گذاری Google Drive به صفحات پیش‌نمایش اشاره دارند، نه فایل‌های خام تصویر، که باعث ایجاد خطا در صفحه گسترده شما می‌شود."
      },
      {
        "title": "لینک‌های دائمی",
        "body": "لینک‌های ما که توسط CDN پشتیبانی می‌شوند هرگز منقضی نمی‌شوند و اطمینان حاصل می‌کنند که گزارش‌ها و داشبوردهای شما در درازمدت کاربردی باقی می‌مانند."
      },
      {
        "title": "قابل دسترسی برای تیم",
        "body": "لینک‌های عمومی CDN به این معنی است که هر همکار می‌تواند تصاویر شما را فوراً بدون نیاز به مدیریت پیچیده مجوزها مشاهده کند."
      }
    ],
    "faqTitle": "سوالات متداول",
    "faqs": [
      {
        "q": "چگونه یک تصویر را در Google Sheets نمایش دهم؟",
        "a": "از تابع =IMAGE() با یک لینک مستقیم تصویر استفاده کنید. برای مثال: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "چرا لینک‌های تصویر Google Drive در =IMAGE() کار نمی‌کنند؟",
        "a": "لینک‌های Google Drive به صفحه پیش‌نمایش اشاره دارند، نه فایل خام تصویر. تابع =IMAGE() به یک لینک مستقیم نیاز دارد که فایل تصویر را مستقیماً ارائه دهد."
      },
      {
        "q": "آیا می‌توانم اندازه تصاویر را در سلول‌های Google Sheets تغییر دهم؟",
        "a": "بله، می‌توانید از پارامتر mode در =IMAGE() برای متناسب کردن، کشیدن، یا حفظ اندازه اصلی، یا تعیین ابعاد سفارشی استفاده کنید."
      },
      {
        "q": "آیا تصاویر برای هر کسی که صفحه گسترده من را می‌بیند بارگذاری می‌شود؟",
        "a": "بله. از آنجایی که ImageToURL لینک‌های عمومی و مبتنی بر CDN ارائه می‌دهد، هر کسی که به صفحه گسترده شما دسترسی داشته باشد، تصاویر را فوراً مشاهده خواهد کرد."
      },
      {
        "q": "آیا محدودیتی برای تعداد تصاویری که می‌توانم اضافه کنم وجود دارد؟",
        "a": "از سمت ما هیچ محدودیتی وجود ندارد. اگرچه ممکن است Google Sheets با هزاران تصویر کند شود، اما کاتالوگ‌ها و داشبوردهای معمولی به خوبی کار می‌کنند."
      }
    ],
    "ctaTitle": "همین امروز تصاویر را به صفحات گسترده خود اضافه کنید",
    "ctaBody": "تصویر را آپلود کنید، لینک را کپی کنید و در عرض چند ثانیه از =IMAGE() در Google Sheets استفاده کنید.",
    "ctaButton": "همین حالا آپلود کنید"
  },
  "ur": {
    "metaTitle": "Google Sheets کے لیے امیج URLs — =IMAGE() فنکشن | ImageToURL",
    "metaDescription": "Google Sheets کے =IMAGE() فنکشن کے ساتھ کام کرنے والے امیج URLs حاصل کریں۔ تصاویر اپ لوڈ کریں، براہ راست URLs حاصل کریں، اور انہیں اپنی اسپریڈ شیٹس میں فوری طور پر دکھائیں۔",
    "schemaName": "Google Sheets کے لیے امیج URLs",
    "schemaDescription": "Google Sheets کے =IMAGE() فنکشن کے ساتھ مطابقت رکھنے والے براہ راست امیج URLs بنانے کے لیے ایک ٹول، تاکہ اسپریڈ شیٹ میں آسانی سے انضمام ہو سکے۔",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets کے لیے",
    "h1Highlight": "امیج URLs",
    "intro": "تصاویر اپ لوڈ کریں اور ایسے براہ راست URLs حاصل کریں جو Google Sheets کے =IMAGE() فنکشن کے ساتھ کام کرتے ہیں۔ پروڈکٹ کی تصاویر، آئیکنز، اور ویژولز کو اپنی اسپریڈ شیٹ کے سیلز میں دکھائیں۔",
    "howTitle": "Google Sheets کے ساتھ یہ کیسے کام کرتا ہے",
    "steps": [
      {
        "title": "اپنی تصویر اپ لوڈ کریں",
        "body": "اپنی تصویر ImageToURL پر اپ لوڈ کریں اور تیار کردہ براہ راست URL کاپی کریں۔"
      },
      {
        "title": "اپنا سیل منتخب کریں",
        "body": "Google Sheets میں، اس سیل پر کلک کریں جہاں آپ تصویر دکھانا چاہتے ہیں۔"
      },
      {
        "title": "فنکشن استعمال کریں",
        "body": "=IMAGE(\"paste-your-url-here\") ٹائپ کریں اور تصویر دکھانے کے لیے Enter دبائیں۔"
      }
    ],
    "whyTitle": "آپ کو بیرونی URLs کی ضرورت کیوں ہے",
    "whyItems": [
      {
        "title": "=IMAGE() کو عوامی URLs کی ضرورت ہوتی ہے",
        "body": "=IMAGE() فنکشن صرف عوامی طور پر قابل رسائی، براہ راست امیج URLs کے ساتھ کام کرتا ہے؛ نجی لنکس یا HTML صفحات رینڈر نہیں ہوں گے۔"
      },
      {
        "title": "Google Drive لنکس ناکام ہو جاتے ہیں",
        "body": "Google Drive کے شیئرنگ لنکس پریویو صفحات کی طرف اشارہ کرتے ہیں، نہ کہ خام امیج فائلز کی طرف، جس سے آپ کی اسپریڈ شیٹ میں غلطیاں پیدا ہوتی ہیں۔"
      },
      {
        "title": "مستقل URLs",
        "body": "ہمارے CDN-بیکڈ URLs کبھی ختم نہیں ہوتے، اس بات کو یقینی بناتے ہوئے کہ آپ کی رپورٹس اور ڈیش بورڈز طویل مدت تک فعال رہیں۔"
      },
      {
        "title": "ٹیم کے لیے قابل رسائی",
        "body": "عوامی CDN لنکس کا مطلب ہے کہ ہر تعاون کرنے والا آپ کی تصاویر کو فوری طور پر دیکھ سکتا ہے، بغیر کسی پیچیدہ اجازت کے انتظام کے۔"
      }
    ],
    "faqTitle": "اکثر پوچھے گئے سوالات",
    "faqs": [
      {
        "q": "میں Google Sheets میں تصویر کیسے دکھاؤں؟",
        "a": "براہ راست امیج URL کے ساتھ =IMAGE() فنکشن استعمال کریں۔ مثال کے طور پر: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")۔"
      },
      {
        "q": "Google Drive کے امیج لنکس =IMAGE() میں کیوں کام نہیں کرتے؟",
        "a": "Google Drive لنکس ایک پریویو صفحے کی طرف اشارہ کرتے ہیں، نہ کہ خام امیج فائل کی طرف۔ =IMAGE() فنکشن کو ایک ایسے براہ راست URL کی ضرورت ہوتی ہے جو براہ راست امیج فائل فراہم کرے۔"
      },
      {
        "q": "کیا میں Google Sheets کے سیلز کے اندر تصاویر کا سائز تبدیل کر سکتا ہوں؟",
        "a": "جی ہاں، آپ =IMAGE() میں موڈ پیرامیٹر کا استعمال کر کے تصویر کو فٹ، اسٹریچ، یا اصل سائز میں رکھ سکتے ہیں، یا اپنی مرضی کے مطابق طول و عرض متعین کر سکتے ہیں۔"
      },
      {
        "q": "کیا تصاویر ان سب کے لیے لوڈ ہوں گی جو میری اسپریڈ شیٹ دیکھتے ہیں؟",
        "a": "جی ہاں۔ چونکہ ImageToURL عوامی، CDN-بیکڈ URLs فراہم کرتا ہے، اس لیے آپ کی اسپریڈ شیٹ تک رسائی رکھنے والا کوئی بھی شخص تصاویر کو فوری طور پر لوڈ ہوتے ہوئے دیکھے گا۔"
      },
      {
        "q": "کیا میں کتنی تصاویر شامل کر سکتا ہوں اس پر کوئی حد ہے؟",
        "a": "ہماری طرف سے کوئی حد نہیں ہے۔ اگرچہ ہزاروں تصاویر کے ساتھ Google Sheets سست ہو سکتی ہے، لیکن عام کیٹلاگ اور ڈیش بورڈز بالکل ٹھیک کام کرتے ہیں۔"
      }
    ],
    "ctaTitle": "آج ہی اپنی اسپریڈ شیٹس میں تصاویر شامل کریں",
    "ctaBody": "ایک تصویر اپ لوڈ کریں، URL کاپی کریں، اور سیکنڈوں میں Google Sheets میں =IMAGE() استعمال کریں۔",
    "ctaButton": "ابھی اپ لوڈ کریں"
  },
  "ru": {
    "metaTitle": "URL изображений для Google Sheets — функция =IMAGE() | ImageToURL",
    "metaDescription": "Получите URL изображений, которые работают с функцией =IMAGE() в Google Sheets. Загружайте изображения, получайте прямые ссылки и мгновенно отображайте их в своих таблицах.",
    "schemaName": "URL изображений для Google Sheets",
    "schemaDescription": "Инструмент для генерации прямых URL изображений, совместимых с функцией =IMAGE() в Google Sheets для легкой интеграции в таблицы.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL изображений для Google",
    "h1Highlight": "Sheets.",
    "intro": "Загружайте изображения и получайте прямые URL, которые работают с функцией =IMAGE() в Google Sheets. Отображайте фотографии товаров, иконки и визуальные элементы прямо в ячейках вашей таблицы.",
    "howTitle": "Как это работает с Google Sheets",
    "steps": [
      {
        "title": "Загрузите изображение",
        "body": "Загрузите изображение в ImageToURL и скопируйте созданный прямой URL."
      },
      {
        "title": "Выберите ячейку",
        "body": "В Google Sheets нажмите на ячейку, в которой должно появиться изображение."
      },
      {
        "title": "Используйте функцию",
        "body": "Введите =IMAGE(\"вставьте-ваш-url-сюда\") и нажмите Enter, чтобы отобразить изображение."
      }
    ],
    "whyTitle": "Зачем нужны внешние URL",
    "whyItems": [
      {
        "title": "=IMAGE() требует публичные URL",
        "body": "Функция =IMAGE() работает только с общедоступными прямыми URL изображений; приватные ссылки или HTML-страницы не будут отображаться."
      },
      {
        "title": "Ссылки Google Drive не работают",
        "body": "Ссылки на общий доступ Google Drive ведут на страницы предварительного просмотра, а не на исходные файлы изображений, что вызывает ошибки в таблице."
      },
      {
        "title": "Постоянные URL",
        "body": "Наши URL на базе CDN никогда не истекают, гарантируя, что ваши отчеты и дашборды будут работать долгое время."
      },
      {
        "title": "Доступно для команды",
        "body": "Публичные CDN-ссылки означают, что каждый соавтор мгновенно увидит ваши изображения без необходимости сложного управления правами доступа."
      }
    ],
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Как отобразить изображение в Google Sheets?",
        "a": "Используйте функцию =IMAGE() с прямым URL изображения. Например: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Почему ссылки на изображения из Google Drive не работают в =IMAGE()?",
        "a": "Ссылки Google Drive ведут на страницу предварительного просмотра, а не на сам файл изображения. Функция =IMAGE() требует прямой URL, который отдает файл изображения напрямую."
      },
      {
        "q": "Можно ли изменять размер изображений в ячейках Google Sheets?",
        "a": "Да, вы можете использовать параметр mode в функции =IMAGE(), чтобы подогнать, растянуть или сохранить исходный размер, либо задать собственные размеры."
      },
      {
        "q": "Будут ли изображения загружаться у всех, кто просматривает мою таблицу?",
        "a": "Да. Поскольку ImageToURL предоставляет публичные URL на базе CDN, любой, у кого есть доступ к вашей таблице, мгновенно увидит загруженные изображения."
      },
      {
        "q": "Есть ли ограничение на количество добавляемых изображений?",
        "a": "С нашей стороны ограничений нет. Хотя Google Sheets может замедляться при работе с тысячами изображений, типичные каталоги и дашборды работают отлично."
      }
    ],
    "ctaTitle": "Добавляйте изображения в свои таблицы уже сегодня",
    "ctaBody": "Загрузите изображение, скопируйте URL и используйте =IMAGE() в Google Sheets за считанные секунды.",
    "ctaButton": "Загрузить сейчас"
  },
  "th": {
    "metaTitle": "ลิงก์รูปภาพสำหรับ Google Sheets — ฟังก์ชัน =IMAGE() | ImageToURL",
    "metaDescription": "รับลิงก์รูปภาพที่ใช้งานได้กับฟังก์ชัน =IMAGE() ใน Google Sheets อัปโหลดรูปภาพ รับลิงก์โดยตรง และแสดงผลในสเปรดชีตของคุณได้ทันที",
    "schemaName": "ลิงก์รูปภาพสำหรับ Google Sheets",
    "schemaDescription": "เครื่องมือสำหรับสร้างลิงก์รูปภาพโดยตรงที่เข้ากันได้กับฟังก์ชัน =IMAGE() ใน Google Sheets เพื่อการใช้งานในสเปรดชีตที่ราบรื่น",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "ลิงก์รูปภาพสำหรับ Google",
    "h1Highlight": "Sheets",
    "intro": "อัปโหลดรูปภาพและรับลิงก์โดยตรงที่ใช้งานได้กับฟังก์ชัน =IMAGE() ของ Google Sheets แสดงรูปภาพสินค้า ไอคอน และภาพประกอบภายในเซลล์สเปรดชีตของคุณได้ทันที",
    "howTitle": "วิธีใช้งานกับ Google Sheets",
    "steps": [
      {
        "title": "อัปโหลดรูปภาพของคุณ",
        "body": "อัปโหลดรูปภาพของคุณไปที่ ImageToURL แล้วคัดลอกลิงก์โดยตรงที่สร้างขึ้น"
      },
      {
        "title": "เลือกเซลล์ของคุณ",
        "body": "ใน Google Sheets ให้คลิกที่เซลล์ที่คุณต้องการให้รูปภาพปรากฏ"
      },
      {
        "title": "ใช้ฟังก์ชัน",
        "body": "พิมพ์ =IMAGE(\"วาง-url-ของคุณที่นี่\") แล้วกด Enter เพื่อแสดงรูปภาพ"
      }
    ],
    "whyTitle": "ทำไมคุณถึงต้องใช้ URL ภายนอก",
    "whyItems": [
      {
        "title": "ฟังก์ชัน =IMAGE() ต้องการ URL สาธารณะ",
        "body": "ฟังก์ชัน =IMAGE() จะทำงานได้กับ URL รูปภาพโดยตรงที่เข้าถึงได้แบบสาธารณะเท่านั้น ลิงก์ส่วนตัวหรือหน้า HTML จะไม่สามารถแสดงผลได้"
      },
      {
        "title": "ลิงก์จาก Google Drive ใช้ไม่ได้",
        "body": "ลิงก์แชร์จาก Google Drive จะชี้ไปยังหน้าตัวอย่าง ไม่ใช่ไฟล์รูปภาพต้นฉบับ ทำให้เกิดข้อผิดพลาดในสเปรดชีตของคุณ"
      },
      {
        "title": "URL ถาวร",
        "body": "URL ที่รองรับโดย CDN ของเราไม่มีวันหมดอายุ ทำให้รายงานและแดชบอร์ดของคุณใช้งานได้ในระยะยาว"
      },
      {
        "title": "ทีมงานเข้าถึงได้ทุกคน",
        "body": "ลิงก์ CDN สาธารณะช่วยให้ทุกคนที่ทำงานร่วมกับคุณเห็นรูปภาพได้ทันทีโดยไม่ต้องจัดการสิทธิ์ที่ซับซ้อน"
      }
    ],
    "faqTitle": "คำถามที่พบบ่อย",
    "faqs": [
      {
        "q": "ฉันจะแสดงรูปภาพใน Google Sheets ได้อย่างไร?",
        "a": "ใช้ฟังก์ชัน =IMAGE() ร่วมกับ URL รูปภาพโดยตรง ตัวอย่างเช่น: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")"
      },
      {
        "q": "ทำไมลิงก์รูปภาพจาก Google Drive ถึงใช้กับ =IMAGE() ไม่ได้?",
        "a": "ลิงก์ของ Google Drive ชี้ไปยังหน้าตัวอย่าง ไม่ใช่ไฟล์รูปภาพต้นฉบับ ฟังก์ชัน =IMAGE() ต้องการ URL โดยตรงที่แสดงไฟล์รูปภาพนั้นๆ"
      },
      {
        "q": "ฉันสามารถปรับขนาดรูปภาพในเซลล์ Google Sheets ได้ไหม?",
        "a": "ได้ คุณสามารถใช้พารามิเตอร์ mode ใน =IMAGE() เพื่อปรับให้พอดี ยืด หรือคงขนาดเดิมไว้ หรือกำหนดขนาดเองได้"
      },
      {
        "q": "รูปภาพจะโหลดให้ทุกคนที่ดูสเปรดชีตของฉันเห็นหรือไม่?",
        "a": "ใช่ เนื่องจาก ImageToURL ให้บริการ URL สาธารณะผ่าน CDN ทุกคนที่เข้าถึงสเปรดชีตของคุณจะเห็นรูปภาพโหลดขึ้นมาทันที"
      },
      {
        "q": "มีการจำกัดจำนวนรูปภาพที่ฉันสามารถเพิ่มได้หรือไม่?",
        "a": "เราไม่มีการจำกัดจำนวน แม้ว่า Google Sheets อาจทำงานช้าลงหากมีรูปภาพจำนวนหลายพันรูป แต่สำหรับการทำแคตตาล็อกและแดชบอร์ดทั่วไปสามารถใช้งานได้ดีเยี่ยม"
      }
    ],
    "ctaTitle": "เพิ่มรูปภาพลงในสเปรดชีตของคุณวันนี้",
    "ctaBody": "อัปโหลดรูปภาพ คัดลอก URL และใช้ =IMAGE() ใน Google Sheets ได้ภายในไม่กี่วินาที",
    "ctaButton": "อัปโหลดเลย"
  },
  "ko": {
    "metaTitle": "구글 스프레드시트용 이미지 URL — =IMAGE() 함수 | ImageToURL",
    "metaDescription": "구글 스프레드시트 =IMAGE() 함수와 호환되는 이미지 URL을 생성하세요. 이미지를 업로드하고 직접 연결되는 URL을 받아 스프레드시트에 즉시 표시하세요.",
    "schemaName": "구글 스프레드시트용 이미지 URL",
    "schemaDescription": "구글 스프레드시트 =IMAGE() 함수와 호환되는 직접 이미지 URL을 생성하여 스프레드시트에 원활하게 통합할 수 있는 도구입니다.",
    "badge": "구글 스프레드시트",
    "h1Pre": "구글 스프레드시트용",
    "h1Highlight": "이미지 URL",
    "intro": "이미지를 업로드하고 구글 스프레드시트의 =IMAGE() 함수에서 작동하는 직접 URL을 받으세요. 제품 사진, 아이콘, 시각 자료를 스프레드시트 셀 안에 바로 표시할 수 있습니다.",
    "howTitle": "구글 스프레드시트 사용 방법",
    "steps": [
      {
        "title": "이미지 업로드",
        "body": "ImageToURL에 이미지를 업로드하고 생성된 직접 URL을 복사하세요."
      },
      {
        "title": "셀 선택",
        "body": "구글 스프레드시트에서 이미지를 표시할 셀을 클릭하세요."
      },
      {
        "title": "함수 사용",
        "body": "=IMAGE(\"여기에-URL-붙여넣기\")를 입력하고 Enter를 누르면 이미지가 표시됩니다."
      }
    ],
    "whyTitle": "외부 URL이 필요한 이유",
    "whyItems": [
      {
        "title": "=IMAGE()는 공개 URL이 필요합니다",
        "body": "=IMAGE() 함수는 공개적으로 접근 가능한 직접 이미지 URL에서만 작동합니다. 비공개 링크나 HTML 페이지는 렌더링되지 않습니다."
      },
      {
        "title": "구글 드라이브 링크는 작동하지 않습니다",
        "body": "구글 드라이브 공유 링크는 원본 이미지 파일이 아닌 미리보기 페이지를 가리키므로 스프레드시트에서 오류가 발생합니다."
      },
      {
        "title": "영구적인 URL",
        "body": "당사의 CDN 기반 URL은 만료되지 않으므로 보고서와 대시보드가 장기간 안정적으로 작동합니다."
      },
      {
        "title": "팀 공유 가능",
        "body": "공개 CDN 링크를 사용하면 복잡한 권한 관리 없이도 모든 공동 작업자가 이미지를 즉시 볼 수 있습니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "구글 스프레드시트에 이미지를 어떻게 표시하나요?",
        "a": "직접 이미지 URL과 함께 =IMAGE() 함수를 사용하세요. 예: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "왜 구글 드라이브 이미지 링크는 =IMAGE()에서 작동하지 않나요?",
        "a": "구글 드라이브 링크는 원본 이미지 파일이 아닌 미리보기 페이지를 가리킵니다. =IMAGE() 함수는 이미지 파일을 직접 제공하는 URL이 필요합니다."
      },
      {
        "q": "구글 스프레드시트 셀 안에서 이미지 크기를 조절할 수 있나요?",
        "a": "네, =IMAGE()의 모드 매개변수를 사용하여 이미지 맞춤, 늘리기, 원본 크기 유지 또는 사용자 지정 크기 설정을 할 수 있습니다."
      },
      {
        "q": "스프레드시트를 보는 모든 사람에게 이미지가 로드되나요?",
        "a": "네. ImageToURL은 공개 CDN 기반 URL을 제공하므로 스프레드시트에 접근 권한이 있는 사람은 누구나 이미지를 즉시 볼 수 있습니다."
      },
      {
        "q": "추가할 수 있는 이미지 수에 제한이 있나요?",
        "a": "저희 측에서 제한하는 수량은 없습니다. 구글 스프레드시트가 수천 개의 이미지로 인해 느려질 수는 있지만, 일반적인 카탈로그나 대시보드는 완벽하게 작동합니다."
      }
    ],
    "ctaTitle": "지금 스프레드시트에 이미지를 추가하세요",
    "ctaBody": "이미지를 업로드하고 URL을 복사한 뒤, 구글 스프레드시트에서 =IMAGE() 함수를 즉시 사용해 보세요.",
    "ctaButton": "지금 업로드하기"
  },
  "sw": {
    "metaTitle": "URL za Picha kwa Google Sheets — Kitendaji cha =IMAGE() | ImageToURL",
    "metaDescription": "Pata URL za picha zinazofanya kazi na kitendaji cha =IMAGE() cha Google Sheets. Pakia picha, pata URL za moja kwa moja, na uzionyeshe kwenye lahajedwali zako papo hapo.",
    "schemaName": "URL za Picha kwa Google Sheets",
    "schemaDescription": "Zana ya kutengeneza URL za picha za moja kwa moja zinazoendana na kitendaji cha =IMAGE() cha Google Sheets kwa ajili ya kuunganisha lahajedwali bila mshono.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL za Picha kwa Google",
    "h1Highlight": "Sheets.",
    "intro": "Pakia picha na upate URL za moja kwa moja zinazofanya kazi na kitendaji cha =IMAGE() cha Google Sheets. Onyesha picha za bidhaa, aikoni, na taswira moja kwa moja ndani ya seli za lahajedwali yako.",
    "howTitle": "Jinsi Inavyofanya Kazi na Google Sheets",
    "steps": [
      {
        "title": "Pakia picha yako",
        "body": "Pakia picha yako kwenye ImageToURL na unakili URL ya moja kwa moja iliyotengenezwa."
      },
      {
        "title": "Chagua seli yako",
        "body": "Katika Google Sheets, bofya seli unayotaka picha ionekane."
      },
      {
        "title": "Tumia kitendaji",
        "body": "Andika =IMAGE(\"bandika-url-yako-hapa\") na ubonyeze Enter ili kuonyesha picha."
      }
    ],
    "whyTitle": "Kwa Nini Unahitaji URL za Nje",
    "whyItems": [
      {
        "title": "=IMAGE() Inahitaji URL za Umma",
        "body": "Kitendaji cha =IMAGE() hufanya kazi tu na URL za picha za moja kwa moja zinazoweza kufikiwa na umma; viungo vya faragha au kurasa za HTML hazitaonyesha picha."
      },
      {
        "title": "Viungo vya Google Drive Vinashindwa",
        "body": "Viungo vya kushiriki vya Google Drive huelekeza kwenye kurasa za hakikisho, si faili za picha ghafi, jambo linalosababisha hitilafu kwenye lahajedwali yako."
      },
      {
        "title": "URL za Kudumu",
        "body": "URL zetu zinazotumia CDN hazimalizi muda wake, kuhakikisha ripoti na dashibodi zako zinaendelea kufanya kazi kwa muda mrefu."
      },
      {
        "title": "Inafikika kwa Timu",
        "body": "Viungo vya CDN vya umma vinamaanisha kila mshiriki anaona picha zako papo hapo bila kuhitaji usimamizi mgumu wa ruhusa."
      }
    ],
    "faqTitle": "Maswali Yanayoulizwa Mara kwa Mara",
    "faqs": [
      {
        "q": "Ninawezaje kuonyesha picha katika Google Sheets?",
        "a": "Tumia kitendaji cha =IMAGE() na URL ya moja kwa moja ya picha. Kwa mfano: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Kwa nini viungo vya picha vya Google Drive havifanyi kazi kwenye =IMAGE()?",
        "a": "Viungo vya Google Drive huelekeza kwenye ukurasa wa hakikisho, si faili ya picha yenyewe. Kitendaji cha =IMAGE() kinahitaji URL ya moja kwa moja inayotoa faili ya picha."
      },
      {
        "q": "Je, ninaweza kubadilisha ukubwa wa picha ndani ya seli za Google Sheets?",
        "a": "Ndiyo, unaweza kutumia kigezo cha mode katika =IMAGE() ili kutosheleza, kunyoosha, au kuhifadhi ukubwa wa asili, au kufafanua vipimo maalum."
      },
      {
        "q": "Je, picha zitapakia kwa kila mtu anayetazama lahajedwali yangu?",
        "a": "Ndiyo. Kwa kuwa ImageToURL hutoa URL za umma zinazotumia CDN, yeyote mwenye ufikiaji wa lahajedwali yako ataona picha zikipakia papo hapo."
      },
      {
        "q": "Je, kuna kikomo cha idadi ya picha ninazoweza kuongeza?",
        "a": "Hakuna kikomo kwa upande wetu. Ingawa Google Sheets inaweza kupungua kasi na maelfu ya picha, katalogi na dashibodi za kawaida hufanya kazi kikamilifu."
      }
    ],
    "ctaTitle": "Ongeza picha kwenye lahajedwali zako leo",
    "ctaBody": "Pakia picha, nakili URL, na utumie =IMAGE() katika Google Sheets kwa sekunde chache.",
    "ctaButton": "Pakia Sasa"
  },
  "ms": {
    "metaTitle": "URL Gambar untuk Google Sheets — Fungsi =IMAGE() | ImageToURL",
    "metaDescription": "Dapatkan URL gambar yang berfungsi dengan fungsi =IMAGE() Google Sheets. Muat naik gambar, dapatkan URL terus, dan paparkan dalam hamparan kerja anda dengan serta-merta.",
    "schemaName": "URL Gambar untuk Google Sheets",
    "schemaDescription": "Alat untuk menjana URL gambar terus yang serasi dengan fungsi =IMAGE() Google Sheets untuk integrasi hamparan kerja yang lancar.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "URL Gambar untuk Google",
    "h1Highlight": "Sheets.",
    "intro": "Muat naik gambar dan dapatkan URL terus yang berfungsi dengan fungsi =IMAGE() Google Sheets. Paparkan foto produk, ikon, dan visual terus di dalam sel hamparan kerja anda.",
    "howTitle": "Cara Ia Berfungsi dengan Google Sheets",
    "steps": [
      {
        "title": "Muat naik gambar anda",
        "body": "Muat naik gambar anda ke ImageToURL dan salin URL terus yang dijana."
      },
      {
        "title": "Pilih sel anda",
        "body": "Dalam Google Sheets, klik sel di mana anda mahu gambar itu dipaparkan."
      },
      {
        "title": "Gunakan fungsi",
        "body": "Taip =IMAGE(\"tampal-url-anda-di-sini\") dan tekan Enter untuk memaparkan gambar."
      }
    ],
    "whyTitle": "Mengapa Anda Memerlukan URL Luaran",
    "whyItems": [
      {
        "title": "=IMAGE() Memerlukan URL Awam",
        "body": "Fungsi =IMAGE() hanya berfungsi dengan URL gambar terus yang boleh diakses secara awam; pautan peribadi atau halaman HTML tidak akan dipaparkan."
      },
      {
        "title": "Pautan Google Drive Gagal",
        "body": "Pautan perkongsian Google Drive menghala ke halaman pratonton, bukan fail gambar mentah, yang menyebabkan ralat dalam hamparan kerja anda."
      },
      {
        "title": "URL Kekal",
        "body": "URL disokong CDN kami tidak akan tamat tempoh, memastikan laporan dan papan pemuka anda kekal berfungsi untuk jangka masa panjang."
      },
      {
        "title": "Boleh Diakses Pasukan",
        "body": "Pautan CDN awam bermakna setiap kolaborator melihat gambar anda serta-merta tanpa memerlukan pengurusan kebenaran yang rumit."
      }
    ],
    "faqTitle": "Soalan Lazim",
    "faqs": [
      {
        "q": "Bagaimanakah cara saya memaparkan gambar dalam Google Sheets?",
        "a": "Gunakan fungsi =IMAGE() dengan URL gambar terus. Contohnya: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Mengapa pautan gambar Google Drive tidak berfungsi dalam =IMAGE()?",
        "a": "Pautan Google Drive menghala ke halaman pratonton, bukan fail gambar mentah. Fungsi =IMAGE() memerlukan URL terus yang menghidangkan fail gambar secara langsung."
      },
      {
        "q": "Bolehkah saya mengubah saiz gambar di dalam sel Google Sheets?",
        "a": "Ya, anda boleh menggunakan parameter mod dalam =IMAGE() untuk memuatkan, meregangkan, atau mengekalkan saiz asal, atau menentukan dimensi tersuai."
      },
      {
        "q": "Adakah gambar akan dimuatkan untuk semua orang yang melihat hamparan kerja saya?",
        "a": "Ya. Memandangkan ImageToURL menyediakan URL awam yang disokong CDN, sesiapa sahaja yang mempunyai akses kepada hamparan kerja anda akan melihat gambar dimuatkan serta-merta."
      },
      {
        "q": "Adakah terdapat had untuk bilangan gambar yang boleh saya tambah?",
        "a": "Tiada had daripada pihak kami. Walaupun Google Sheets mungkin menjadi perlahan dengan beribu-ribu gambar, katalog dan papan pemuka biasa berfungsi dengan sempurna."
      }
    ],
    "ctaTitle": "Tambah gambar ke hamparan kerja anda hari ini",
    "ctaBody": "Muat naik gambar, salin URL, dan gunakan =IMAGE() dalam Google Sheets dalam beberapa saat.",
    "ctaButton": "Muat Naik Sekarang"
  },
  "ta": {
    "metaTitle": "Google Sheets-க்கான பட URLகள் — =IMAGE() செயல்பாடு | ImageToURL",
    "metaDescription": "Google Sheets =IMAGE() செயல்பாட்டுடன் வேலை செய்யும் பட URLகளைப் பெறுங்கள். படங்களைப் பதிவேற்றி, நேரடி URLகளைப் பெற்று, அவற்றை உங்கள் விரிதாள்களில் உடனடியாகக் காட்டுங்கள்.",
    "schemaName": "Google Sheets-க்கான பட URLகள்",
    "schemaDescription": "Google Sheets =IMAGE() செயல்பாட்டுடன் இணக்கமான நேரடி பட URLகளை உருவாக்கி, விரிதாள்களில் தடையின்றி ஒருங்கிணைப்பதற்கான ஒரு கருவி.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets-க்கான",
    "h1Highlight": "பட URLகள்.",
    "intro": "படங்களைப் பதிவேற்றி, Google Sheets-ன் =IMAGE() செயல்பாட்டுடன் வேலை செய்யும் நேரடி URLகளைப் பெறுங்கள். தயாரிப்பு புகைப்படங்கள், ஐகான்கள் மற்றும் காட்சிகளை உங்கள் விரிதாள் கட்டங்களுக்குள்ளேயே காட்டுங்கள்.",
    "howTitle": "Google Sheets-ல் இது எவ்வாறு செயல்படுகிறது",
    "steps": [
      {
        "title": "உங்கள் படத்தை பதிவேற்றவும்",
        "body": "ImageToURL-ல் உங்கள் படத்தை பதிவேற்றி, உருவாக்கப்பட்ட நேரடி URL-ஐ நகலெடுக்கவும்."
      },
      {
        "title": "உங்கள் கட்டத்தைத் தேர்ந்தெடுக்கவும்",
        "body": "Google Sheets-ல், படம் தோன்ற வேண்டிய கட்டத்தை கிளிக் செய்யவும்."
      },
      {
        "title": "செயல்பாட்டைப் பயன்படுத்தவும்",
        "body": "=IMAGE(\"உங்கள்-url-ஐ-இங்கே-ஒட்டவும்\") என்று தட்டச்சு செய்து, படத்தைக்காட்ட Enter அழுத்தவும்."
      }
    ],
    "whyTitle": "உங்களுக்கு ஏன் வெளிப்புற URLகள் தேவை?",
    "whyItems": [
      {
        "title": "=IMAGE() செயல்பாட்டிற்கு பொது URLகள் தேவை",
        "body": "=IMAGE() செயல்பாடு பொதுவில் அணுகக்கூடிய, நேரடி பட URLகளுடன் மட்டுமே வேலை செய்யும்; தனிப்பட்ட இணைப்புகள் அல்லது HTML பக்கங்கள் காட்டப்படாது."
      },
      {
        "title": "Google Drive இணைப்புகள் வேலை செய்யாது",
        "body": "Google Drive பகிர்வு இணைப்புகள் முன்னோட்டப் பக்கங்களைக் குறிக்கின்றன, மூலப் படக் கோப்புகளை அல்ல, இது உங்கள் விரிதாளில் பிழைகளை ஏற்படுத்தும்."
      },
      {
        "title": "நிரந்தர URLகள்",
        "body": "எங்கள் CDN-ஆதரவு கொண்ட URLகள் காலாவதியாகாது, இது உங்கள் அறிக்கைகள் மற்றும் டாஷ்போர்டுகள் நீண்ட காலத்திற்குச் செயல்படுவதை உறுதி செய்கிறது."
      },
      {
        "title": "குழுவினர் அணுகக்கூடியது",
        "body": "பொது CDN இணைப்புகள் என்றால், சிக்கலான அனுமதி மேலாண்மை இல்லாமலேயே உங்கள் குழுவினர் அனைவரும் படங்களை உடனடியாகப் பார்க்க முடியும்."
      }
    ],
    "faqTitle": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faqs": [
      {
        "q": "Google Sheets-ல் ஒரு படத்தை எப்படி காட்டுவது?",
        "a": "நேரடி பட URL உடன் =IMAGE() செயல்பாட்டைப் பயன்படுத்தவும். உதாரணமாக: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Google Drive பட இணைப்புகள் ஏன் =IMAGE()-ல் வேலை செய்யவில்லை?",
        "a": "Google Drive இணைப்புகள் முன்னோட்டப் பக்கத்தைக் குறிக்கின்றன, மூலப் படக் கோப்பை அல்ல. =IMAGE() செயல்பாட்டிற்கு நேரடியாகப் படக் கோப்பை வழங்கும் நேரடி URL தேவை."
      },
      {
        "q": "Google Sheets கட்டங்களுக்குள் படங்களின் அளவை மாற்ற முடியுமா?",
        "a": "ஆம், =IMAGE()-ல் உள்ள mode அளவுருவைப் பயன்படுத்தி படத்தை பொருத்தலாம், நீட்டலாம் அல்லது அசல் அளவை வைத்திருக்கலாம், அல்லது தனிப்பயன் பரிமாணங்களை வரையறுக்கலாம்."
      },
      {
        "q": "எனது விரிதாளைப் பார்க்கும் அனைவருக்கும் படங்கள் ஏற்றப்படுமா?",
        "a": "ஆம். ImageToURL பொதுவான, CDN-ஆதரவு கொண்ட URLகளை வழங்குவதால், உங்கள் விரிதாளை அணுகும் எவரும் படங்கள் உடனடியாக ஏற்றப்படுவதைக் காண்பார்கள்."
      },
      {
        "q": "நான் எத்தனை படங்களைச் சேர்க்கலாம் என்பதற்கு வரம்பு உள்ளதா?",
        "a": "எங்கள் தரப்பில் எந்த வரம்பும் இல்லை. ஆயிரக்கணக்கான படங்களால் Google Sheets வேகம் குறையலாம் என்றாலும், வழக்கமான பட்டியல்கள் மற்றும் டாஷ்போர்டுகள் சரியாகச் செயல்படும்."
      }
    ],
    "ctaTitle": "இன்றே உங்கள் விரிதாள்களில் படங்களைச் சேர்க்கவும்",
    "ctaBody": "ஒரு படத்தை பதிவேற்றி, URL-ஐ நகலெடுத்து, சில நொடிகளில் Google Sheets-ல் =IMAGE() செயல்பாட்டைப் பயன்படுத்தவும்.",
    "ctaButton": "இப்போது பதிவேற்றவும்"
  },
  "mr": {
    "metaTitle": "Google Sheets साठी इमेज URLs — =IMAGE() फंक्शन | ImageToURL",
    "metaDescription": "Google Sheets च्या =IMAGE() फंक्शनसोबत काम करणारे इमेज URLs मिळवा. इमेज अपलोड करा, थेट URLs मिळवा आणि तुमच्या स्प्रेडशीटमध्ये त्वरित प्रदर्शित करा.",
    "schemaName": "Google Sheets साठी इमेज URLs",
    "schemaDescription": "Google Sheets च्या =IMAGE() फंक्शनशी सुसंगत थेट इमेज URLs तयार करण्यासाठी एक साधन, ज्यामुळे स्प्रेडशीटमध्ये इमेज सहज जोडता येतात.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets साठी",
    "h1Highlight": "इमेज URLs.",
    "intro": "इमेज अपलोड करा आणि Google Sheets च्या =IMAGE() फंक्शनसोबत काम करणारे थेट URLs मिळवा. तुमच्या स्प्रेडशीटच्या सेल्समध्ये उत्पादनांचे फोटो, आयकॉन्स आणि व्हिज्युअल्स प्रदर्शित करा.",
    "howTitle": "Google Sheets सोबत हे कसे काम करते",
    "steps": [
      {
        "title": "तुमची इमेज अपलोड करा",
        "body": "ImageToURL वर तुमची इमेज अपलोड करा आणि तयार झालेला थेट URL कॉपी करा."
      },
      {
        "title": "तुमचा सेल निवडा",
        "body": "Google Sheets मध्ये, ज्या सेलमध्ये तुम्हाला इमेज हवी आहे त्यावर क्लिक करा."
      },
      {
        "title": "फंक्शन वापरा",
        "body": "=IMAGE(\"paste-your-url-here\") टाइप करा आणि इमेज प्रदर्शित करण्यासाठी Enter दाबा."
      }
    ],
    "whyTitle": "तुम्हाला बाह्य URLs ची गरज का आहे",
    "whyItems": [
      {
        "title": "=IMAGE() ला पब्लिक URLs ची गरज असते",
        "body": "=IMAGE() फंक्शन फक्त सार्वजनिकरित्या उपलब्ध असलेल्या, थेट इमेज URLs सोबतच काम करते; खाजगी लिंक्स किंवा HTML पेजेस रेंडर होणार नाहीत."
      },
      {
        "title": "Google Drive लिंक्स काम करत नाहीत",
        "body": "Google Drive शेअरिंग लिंक्स हे प्रिव्ह्यू पेजेसकडे निर्देश करतात, रॉ इमेज फाइल्सकडे नाही, ज्यामुळे तुमच्या स्प्रेडशीटमध्ये एरर येतात."
      },
      {
        "title": "कायमस्वरूपी URLs",
        "body": "आमचे CDN-आधारित URLs कधीही एक्सपायर होत नाहीत, ज्यामुळे तुमचे रिपोर्ट्स आणि डॅशबोर्ड्स दीर्घकाळ कार्यरत राहतात."
      },
      {
        "title": "टीमसाठी सुलभ",
        "body": "पब्लिक CDN लिंक्सचा अर्थ असा की प्रत्येक कोलॅबोरेटरला तुमची इमेज त्वरित दिसते, त्यासाठी कोणतीही जटिल परवानगी व्यवस्थापनाची गरज नसते."
      }
    ],
    "faqTitle": "वारंवार विचारले जाणारे प्रश्न",
    "faqs": [
      {
        "q": "मी Google Sheets मध्ये इमेज कशी प्रदर्शित करू?",
        "a": "थेट इमेज URL सह =IMAGE() फंक्शन वापरा. उदाहरणार्थ: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "Google Drive इमेज लिंक्स =IMAGE() मध्ये का काम करत नाहीत?",
        "a": "Google Drive लिंक्स हे प्रिव्ह्यू पेजकडे निर्देश करतात, रॉ इमेज फाइलकडे नाही. =IMAGE() फंक्शनला थेट URL ची आवश्यकता असते जी थेट इमेज फाइल सर्व्ह करते."
      },
      {
        "q": "मी Google Sheets सेल्समधील इमेजचा आकार बदलू शकतो का?",
        "a": "हो, तुम्ही =IMAGE() मधील मोड पॅरामीटर वापरून इमेज फिट, स्ट्रेच किंवा मूळ आकारात ठेवू शकता किंवा कस्टम डायमेन्शन्स सेट करू शकता."
      },
      {
        "q": "माझी स्प्रेडशीट पाहणाऱ्या प्रत्येकासाठी इमेज लोड होतील का?",
        "a": "हो. ImageToURL सार्वजनिक, CDN-आधारित URLs प्रदान करत असल्याने, ज्यांच्याकडे तुमच्या स्प्रेडशीटचा ॲक्सेस आहे त्यांना इमेज त्वरित लोड होताना दिसतील."
      },
      {
        "q": "मी किती इमेज जोडू शकतो यावर काही मर्यादा आहे का?",
        "a": "आमच्या बाजूने कोणतीही मर्यादा नाही. जरी हजारो इमेजेसमुळे Google Sheets थोडे संथ होऊ शकते, तरीही सामान्य कॅटलॉग आणि डॅशबोर्ड्स उत्तम प्रकारे काम करतात."
      }
    ],
    "ctaTitle": "आजच तुमच्या स्प्रेडशीटमध्ये इमेज जोडा",
    "ctaBody": "इमेज अपलोड करा, URL कॉपी करा आणि काही सेकंदात Google Sheets मध्ये =IMAGE() वापरा.",
    "ctaButton": "आता अपलोड करा"
  },
  "te": {
    "metaTitle": "Google Sheets కోసం ఇమేజ్ URLలు — =IMAGE() ఫంక్షన్ | ImageToURL",
    "metaDescription": "Google Sheets =IMAGE() ఫంక్షన్‌తో పనిచేసే ఇమేజ్ URLలను పొందండి. చిత్రాలను అప్‌లోడ్ చేయండి, డైరెక్ట్ URLలను పొందండి మరియు వాటిని మీ స్ప్రెడ్‌షీట్‌లలో వెంటనే ప్రదర్శించండి.",
    "schemaName": "Google Sheets కోసం ఇమేజ్ URLలు",
    "schemaDescription": "Google Sheets =IMAGE() ఫంక్షన్‌కు అనుకూలమైన డైరెక్ట్ ఇమేజ్ URLలను రూపొందించడానికి ఒక సాధనం.",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google Sheets కోసం",
    "h1Highlight": "ఇమేజ్ URLలు.",
    "intro": "చిత్రాలను అప్‌లోడ్ చేయండి మరియు Google Sheets యొక్క =IMAGE() ఫంక్షన్‌తో పనిచేసే డైరెక్ట్ URLలను పొందండి. మీ స్ప్రెడ్‌షీట్ సెల్‌లలోనే ప్రొడక్ట్ ఫోటోలు, ఐకాన్‌లు మరియు విజువల్స్‌ను ప్రదర్శించండి.",
    "howTitle": "Google Sheetsతో ఇది ఎలా పనిచేస్తుంది",
    "steps": [
      {
        "title": "మీ చిత్రాన్ని అప్‌లోడ్ చేయండి",
        "body": "మీ చిత్రాన్ని ImageToURLకి అప్‌లోడ్ చేయండి మరియు రూపొందించబడిన డైరెక్ట్ URLని కాపీ చేయండి."
      },
      {
        "title": "మీ సెల్‌ను ఎంచుకోండి",
        "body": "Google Sheetsలో, చిత్రం కనిపించాలనుకుంటున్న సెల్‌పై క్లిక్ చేయండి."
      },
      {
        "title": "ఫంక్షన్‌ను ఉపయోగించండి",
        "body": "=IMAGE(\"paste-your-url-here\") అని టైప్ చేసి, చిత్రాన్ని ప్రదర్శించడానికి Enter నొక్కండి."
      }
    ],
    "whyTitle": "మీకు ఎక్స్‌టర్నల్ URLలు ఎందుకు అవసరం",
    "whyItems": [
      {
        "title": "=IMAGE()కి పబ్లిక్ URLలు అవసరం",
        "body": "=IMAGE() ఫంక్షన్ కేవలం పబ్లిక్‌గా అందుబాటులో ఉండే, డైరెక్ట్ ఇమేజ్ URLలతో మాత్రమే పనిచేస్తుంది; ప్రైవేట్ లింక్‌లు లేదా HTML పేజీలు పని చేయవు."
      },
      {
        "title": "Google Drive లింక్‌లు పనిచేయవు",
        "body": "Google Drive షేరింగ్ లింక్‌లు ప్రివ్యూ పేజీలకు దారితీస్తాయి, రా ఇమేజ్ ఫైళ్లకు కాదు, దీనివల్ల మీ స్ప్రెడ్‌షీట్‌లో ఎర్రర్స్ వస్తాయి."
      },
      {
        "title": "శాశ్వత URLలు",
        "body": "మా CDN-ఆధారిత URLలు ఎప్పటికీ ఎక్స్‌పైర్ అవ్వవు, మీ రిపోర్ట్‌లు మరియు డాష్‌బోర్డ్‌లు దీర్ఘకాలం పాటు పనిచేస్తాయని నిర్ధారిస్తాయి."
      },
      {
        "title": "టీమ్-యాక్సెస్",
        "body": "పబ్లిక్ CDN లింక్‌ల వల్ల, సంక్లిష్టమైన అనుమతులు లేకుండానే మీ టీమ్ సభ్యులందరూ చిత్రాలను వెంటనే చూడగలరు."
      }
    ],
    "faqTitle": "తరచుగా అడిగే ప్రశ్నలు",
    "faqs": [
      {
        "q": "Google Sheetsలో చిత్రాన్ని ఎలా ప్రదర్శించాలి?",
        "a": "డైరెక్ట్ ఇమేజ్ URLతో =IMAGE() ఫంక్షన్‌ను ఉపయోగించండి. ఉదాహరణకు: =IMAGE(\"https://imagetourl.cloud/your-image.jpg\")."
      },
      {
        "q": "=IMAGE()లో Google Drive ఇమేజ్ లింక్‌లు ఎందుకు పనిచేయవు?",
        "a": "Google Drive లింక్‌లు ప్రివ్యూ పేజీని చూపుతాయి, ఇమేజ్ ఫైల్‌ను కాదు. =IMAGE() ఫంక్షన్‌కు నేరుగా ఇమేజ్ ఫైల్‌ను అందించే డైరెక్ట్ URL అవసరం."
      },
      {
        "q": "Google Sheets సెల్‌లలో చిత్రాల పరిమాణాన్ని మార్చవచ్చా?",
        "a": "అవును, మీరు =IMAGE()లో మోడ్ పారామీటర్‌ని ఉపయోగించి చిత్రాన్ని ఫిట్ చేయడం, సాగదీయడం లేదా అసలు పరిమాణంలో ఉంచడం వంటివి చేయవచ్చు."
      },
      {
        "q": "నా స్ప్రెడ్‌షీట్‌ను చూసే వారందరికీ చిత్రాలు లోడ్ అవుతాయా?",
        "a": "అవును. ImageToURL పబ్లిక్, CDN-ఆధారిత URLలను అందిస్తుంది కాబట్టి, మీ స్ప్రెడ్‌షీట్‌ను చూసే ఎవరైనా చిత్రాలను వెంటనే చూడగలరు."
      },
      {
        "q": "నేను ఎన్ని చిత్రాలను జోడించవచ్చు?",
        "a": "మా వైపు నుండి ఎటువంటి పరిమితి లేదు. వేలకొద్దీ చిత్రాలతో Google Sheets నెమ్మదించవచ్చు, కానీ సాధారణ కేటలాగ్‌లు మరియు డాష్‌బోర్డ్‌లు అద్భుతంగా పనిచేస్తాయి."
      }
    ],
    "ctaTitle": "ఈరోజే మీ స్ప్రెడ్‌షీట్‌లకు చిత్రాలను జోడించండి",
    "ctaBody": "ఒక చిత్రాన్ని అప్‌లోడ్ చేయండి, URLని కాపీ చేయండి మరియు సెకన్లలో Google Sheetsలో =IMAGE()ని ఉపయోగించండి.",
    "ctaButton": "ఇప్పుడే అప్‌లోడ్ చేయండి"
  },
  "zh-Hant": {
    "metaTitle": "Google Sheets 圖片連結 — =IMAGE() 函數 | ImageToURL",
    "metaDescription": "獲取適用於 Google Sheets =IMAGE() 函數的圖片連結。上傳圖片、獲取直接連結，並立即在試算表中顯示。",
    "schemaName": "Google Sheets 圖片連結",
    "schemaDescription": "一個用於生成與 Google Sheets =IMAGE() 函數相容的直接圖片連結工具，實現無縫試算表整合。",
    "badge": "GOOGLE SHEETS",
    "h1Pre": "Google ",
    "h1Highlight": "Sheets 圖片連結。",
    "intro": "上傳圖片並獲取適用於 Google Sheets =IMAGE() 函數的直接連結。直接在試算表儲存格中顯示產品照片、圖示和視覺內容。",
    "howTitle": "如何與 Google Sheets 搭配使用",
    "steps": [
      {
        "title": "上傳您的圖片",
        "body": "將圖片上傳至 ImageToURL 並複製生成的直接連結。"
      },
      {
        "title": "選擇儲存格",
        "body": "在 Google Sheets 中，點擊您想要顯示圖片的儲存格。"
      },
      {
        "title": "使用函數",
        "body": "輸入 =IMAGE(\"貼上您的連結\") 並按下 Enter 鍵即可顯示圖片。"
      }
    ],
    "whyTitle": "為什麼需要外部連結",
    "whyItems": [
      {
        "title": "=IMAGE() 需要公開連結",
        "body": "=IMAGE() 函數僅適用於公開存取的直接圖片連結；私人連結或 HTML 頁面將無法顯示。"
      },
      {
        "title": "Google Drive 連結無效",
        "body": "Google Drive 的共用連結指向的是預覽頁面而非原始圖片檔案，這會導致試算表出現錯誤。"
      },
      {
        "title": "永久連結",
        "body": "我們由 CDN 支援的連結永不過期，確保您的報表和儀表板長期運作正常。"
      },
      {
        "title": "團隊可存取",
        "body": "公開的 CDN 連結意味著每位協作者都能立即看到圖片，無需進行複雜的權限管理。"
      }
    ],
    "faqTitle": "常見問題",
    "faqs": [
      {
        "q": "如何在 Google Sheets 中顯示圖片？",
        "a": "使用 =IMAGE() 函數並搭配直接圖片連結。例如：=IMAGE(\"https://imagetourl.cloud/your-image.jpg\")。"
      },
      {
        "q": "為什麼 Google Drive 的圖片連結在 =IMAGE() 中無法使用？",
        "a": "Google Drive 連結指向的是預覽頁面，而非原始圖片檔案。=IMAGE() 函數需要直接提供圖片檔案的連結。"
      },
      {
        "q": "我可以在 Google Sheets 儲存格內調整圖片大小嗎？",
        "a": "可以，您可以使用 =IMAGE() 中的模式參數來調整圖片以符合、拉伸、保持原始大小或定義自訂尺寸。"
      },
      {
        "q": "查看我試算表的每個人都能載入圖片嗎？",
        "a": "是的。由於 ImageToURL 提供公開且由 CDN 支援的連結，任何有權存取您試算表的人都能立即看到圖片載入。"
      },
      {
        "q": "我可以新增的圖片數量有限制嗎？",
        "a": "我們這邊沒有限制。雖然 Google Sheets 在處理數千張圖片時可能會變慢，但一般的目錄和儀表板都能完美運作。"
      }
    ],
    "ctaTitle": "立即將圖片加入您的試算表",
    "ctaBody": "上傳圖片、複製連結，並在幾秒鐘內於 Google Sheets 中使用 =IMAGE()。",
    "ctaButton": "立即上傳"
  }
} as LandingContentMap;
