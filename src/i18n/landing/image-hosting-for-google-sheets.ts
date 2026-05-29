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
} as LandingContentMap;
