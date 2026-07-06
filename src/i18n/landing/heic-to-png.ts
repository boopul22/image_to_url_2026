import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "HEIC to PNG Converter | Free, Private, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP to PNG" },
      { "pageKey": "png-to-webp", "label": "PNG to WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG to WebP" }
    ],
    "metaDescription": "Convert HEIC to PNG free, right in your browser. Your iPhone photos never get uploaded. Works on Windows, Mac, iPhone and Android. No signup needed.",
    "schemaName": "HEIC to PNG Converter",
    "schemaDescription": "Convert iPhone HEIC photos to lossless PNG entirely in your browser.",
    "badge": "Browser-only Tool",
    "h1Pre": "HEIC to PNG Converter,",
    "h1Highlight": "100% in Your Browser",
    "intro": "Drop your iPhone HEIC photos here and get PNG files in seconds. The whole conversion runs on your own device, so your photos never get uploaded anywhere. There's no signup, no watermark, and no daily cap. When a PNG is ready you can save it straight to your device, or click 'Get URL' to host the result and get a shareable https link (files up to 50 MB).",
    "specsTitle": "At a glance",
    "specs": [
      {
        "label": "Price",
        "value": "Free"
      },
      {
        "label": "Sign-up",
        "value": "Not required"
      },
      {
        "label": "Converts",
        "value": "HEIC / HEIF to PNG"
      },
      {
        "label": "Privacy",
        "value": "Runs in your browser"
      },
      {
        "label": "Output",
        "value": "PNG download + optional shareable link"
      }
    ],
    "howTitle": "How to convert HEIC to PNG",
    "steps": [
      {
        "title": "Drop HEIC files",
        "body": "Drag .heic or .heif files into the drop zone."
      },
      {
        "title": "Browser decodes via WebAssembly",
        "body": "A WebAssembly decoder does the work right on your device. No files get sent to a server, and you can check that yourself in DevTools."
      },
      {
        "title": "Download the PNG",
        "body": "Save the PNG to your device, or click 'Get URL' to host it on our CDN and get a shareable link."
      }
    ],
    "whyTitle": "Why convert HEIC to PNG?",
    "whyItems": [
      {
        "title": "Editable",
        "body": "PNG re-saves without further quality loss."
      },
      {
        "title": "Transparent capable",
        "body": "You can later erase backgrounds."
      },
      {
        "title": "Universally supported",
        "body": "Every app, OS, and print pipeline accepts PNG."
      },
      {
        "title": "Privacy by default",
        "body": "Other converters upload your photos to their servers. This one doesn't. Your files stay on your device the entire time."
      }
    ],
    "comparisonTitle": "HEIC, PNG and JPG compared",
    "comparisonIntro": "Picking a format is a trade between file size and what you can do with the picture later. Here's how the three main photo formats line up, plus WebP for context.",
    "comparisonColumns": [
      "Format",
      "Compression",
      "Transparency",
      "Typical size",
      "Best for"
    ],
    "comparisonRows": [
      {
        "cells": [
          "HEIC",
          "Lossy, very efficient",
          "Yes",
          "Smallest",
          "Saving space on Apple devices"
        ]
      },
      {
        "cells": [
          "PNG",
          "Lossless",
          "Yes",
          "Largest",
          "Editing, graphics, screenshots"
        ]
      },
      {
        "cells": [
          "JPG",
          "Lossy",
          "No",
          "Small",
          "Photos for the web and sharing"
        ]
      },
      {
        "cells": [
          "WebP",
          "Lossy or lossless",
          "Yes",
          "Small to medium",
          "Modern web pages"
        ]
      }
    ],
    "useCasesTitle": "When PNG is the right pick",
    "useCasesIntro": "PNG is the safe choice any time you plan to keep working on the image or you need exact, crisp pixels:",
    "useCases": [
      {
        "title": "Editing without losing quality",
        "body": "Open the PNG in Photoshop, GIMP or Figma, make changes, and save again. Because PNG is lossless, those repeated saves don't soften the photo the way re-saving a JPG would."
      },
      {
        "title": "Logos, screenshots and graphics",
        "body": "Sharp edges, flat color and text stay clean in PNG. Screenshots from your iPhone, app mockups and logos look crisp instead of blocky around the lines."
      },
      {
        "title": "Apps that reject HEIC",
        "body": "Some upload forms, older design tools and Windows programs won't take a .heic file but need full quality. A PNG gets accepted and keeps every detail."
      }
    ],
    "sections": [
      {
        "heading": "What is HEIC and why convert it to PNG?",
        "body": "HEIC is Apple's High Efficiency Image format, the default since the iPhone 7. It packs a photo into roughly half the size of an equivalent JPG, which is great for your camera roll. The catch is support: plenty of Windows apps, web forms and older programs still can't open a .heic file. PNG goes the other way. It's lossless and almost every app, operating system and printer reads it. Turning an iPhone photo into PNG trades the small file size for something you can open and edit anywhere."
      },
      {
        "heading": "PNG vs JPG for converted iPhone photos",
        "body": "If you only care about a smaller file and the picture is a normal photo, JPG is fine and will be a lot lighter than PNG. The difference shows up when you edit. JPG throws away a little detail every time it's saved, so several rounds of cropping and re-saving slowly degrade the image. PNG keeps every pixel exactly, save after save. JPG also can't hold transparency. So pick JPG for quick photo sharing, and PNG when you plan to edit the image or need a clean background."
      },
      {
        "heading": "Does PNG keep transparency and full quality?",
        "body": "PNG is lossless, so the converted file holds the exact quality of the source photo with no extra compression. On transparency, one thing trips people up: a regular HEIC photo has a solid background, and converting it to PNG doesn't magically make that background see-through. What PNG gives you is the ability to hold transparency later. If you erase the background in an editor and save as PNG, those clear areas stay clear, which a JPG could never do."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Are my photos really private?",
        "a": "Yes. The conversion happens entirely in your browser, so your HEIC photos never leave your computer or phone. Nothing gets uploaded unless you choose to host a file with 'Get URL'."
      },
      {
        "q": "What is HEIC?",
        "a": "HEIC is the format the iPhone uses to save photos. It saves space, but a lot of apps, Windows PCs, and websites can't open it. Converting HEIC to PNG makes your photos work everywhere."
      },
      {
        "q": "How do I convert HEIC to PNG on iPhone, Windows, or Mac?",
        "a": "The same way on every device. Open this page, drop your HEIC files into the box, and download the PNG. It runs in any modern browser, so there's nothing to install on Windows, Mac, iPhone, or Android."
      },
      {
        "q": "Will I lose quality converting HEIC to PNG?",
        "a": "No. PNG is lossless, so your converted photo keeps full quality with no extra compression added."
      },
      {
        "q": "Is this really free?",
        "a": "Yes, it's completely free with no signup and no file limits. Convert as many photos as you like, as often as you like."
      },
      {
        "q": "Why is my PNG bigger than the HEIC?",
        "a": "That's expected. HEIC squeezes a photo down hard, while PNG stores it losslessly with no such compression. So the same picture takes more space as a PNG. You're trading file size for quality and universal support."
      },
      {
        "q": "Should I pick PNG or JPG?",
        "a": "Pick PNG when you plan to edit the image, need crisp text or graphics, or want transparency. Pick JPG when you just want a small file for a photo you're sharing online. JPG is lighter, but it's lossy and can't hold a transparent background."
      },
      {
        "q": "Will my photo become transparent automatically?",
        "a": "No. A normal photo has a solid background, and converting it to PNG keeps that background as is. PNG can hold transparency, but you'd have to erase the background yourself in an editor and save the result as PNG."
      },
      {
        "q": "Can I convert several HEIC files at once?",
        "a": "Yes. Drop multiple .heic or .heif files into the box and each one converts to its own PNG. You can save them one by one or grab a shareable link for any of them."
      },
      {
        "q": "Does this work on Windows and Android?",
        "a": "Yes. It runs in any modern browser, so the same page works on Windows, Android, Mac, iPhone and Linux. There's nothing to install and no HEIC codec to add to your system."
      },
      {
        "q": "Is HEIF the same as HEIC?",
        "a": "Close enough for this. HEIF is the container format, and HEIC is how Apple stores images inside it. Files end in .heic or .heif, and both convert to PNG here the same way."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Want a hosted URL?",
    "ctaBody": "Click Get URL after conversion.",
    "ctaButton": "Try the main uploader",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Convertidor de HEIC a PNG | Gratis, privado, sin subidas",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP a PNG" },
      { "pageKey": "png-to-webp", "label": "PNG a WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG a WebP" }
    ],
    "metaDescription": "Convierte HEIC a PNG gratis directamente en tu navegador. Tus fotos de iPhone nunca se suben. Funciona en Windows, Mac, iPhone y Android. Sin registro.",
    "schemaName": "Convertidor de HEIC a PNG",
    "schemaDescription": "Convierte fotos HEIC de iPhone a PNG sin pérdida directamente en tu navegador.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "Convertidor de HEIC a PNG,",
    "h1Highlight": "100% en tu navegador",
    "intro": "Suelta tus fotos HEIC de iPhone aquí y obtén archivos PNG en segundos. Toda la conversión se ejecuta en tu propio dispositivo, por lo que tus fotos nunca se suben a ningún lugar.",
    "howTitle": "Cómo convertir HEIC a PNG",
    "steps": [
      {
        "title": "Suelta los archivos HEIC",
        "body": "Arrastra archivos .heic o .heif a la zona de carga."
      },
      {
        "title": "El navegador decodifica vía WebAssembly",
        "body": "Un decodificador WebAssembly hace el trabajo directamente en tu dispositivo. No se envían archivos a un servidor, y puedes verificarlo tú mismo en las herramientas de desarrollo."
      },
      {
        "title": "Descarga el PNG",
        "body": "Guarda el PNG en tu dispositivo o haz clic en 'Obtener URL' para alojarlo en nuestra CDN y obtener un enlace para compartir."
      }
    ],
    "whyTitle": "¿Por qué convertir HEIC a PNG?",
    "whyItems": [
      {
        "title": "Editable",
        "body": "El formato PNG permite guardar sin pérdida de calidad adicional."
      },
      {
        "title": "Soporta transparencia",
        "body": "Puedes borrar fondos posteriormente."
      },
      {
        "title": "Soporte universal",
        "body": "Todas las aplicaciones, sistemas operativos y flujos de impresión aceptan PNG."
      },
      {
        "title": "Privacidad por defecto",
        "body": "Otros convertidores suben tus fotos a sus servidores. Este no. Tus archivos permanecen en tu dispositivo todo el tiempo."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Mis fotos son realmente privadas?",
        "a": "Sí. La conversión ocurre completamente en tu navegador, por lo que tus fotos HEIC nunca abandonan tu computadora o teléfono. Nada se sube a menos que elijas alojar un archivo con 'Obtener URL'."
      },
      {
        "q": "¿Qué es HEIC?",
        "a": "HEIC es el formato que usa el iPhone para guardar fotos. Ahorra espacio, pero muchas aplicaciones, PCs con Windows y sitios web no pueden abrirlo. Convertir HEIC a PNG hace que tus fotos funcionen en todas partes."
      },
      {
        "q": "¿Cómo convierto HEIC a PNG en iPhone, Windows o Mac?",
        "a": "De la misma manera en cada dispositivo. Abre esta página, suelta tus archivos HEIC en el cuadro y descarga el PNG. Funciona en cualquier navegador moderno, por lo que no hay nada que instalar en Windows, Mac, iPhone o Android."
      },
      {
        "q": "¿Perderé calidad al convertir HEIC a PNG?",
        "a": "No. PNG no tiene pérdida, por lo que tu foto convertida mantiene la calidad completa sin compresión adicional."
      },
      {
        "q": "¿Es realmente gratis?",
        "a": "Sí, es completamente gratis, sin registro y sin límites de archivos. Convierte tantas fotos como quieras, tan seguido como desees."
      }
    ],
    "ctaTitle": "¿Quieres una URL alojada?",
    "ctaBody": "Haz clic en Obtener URL después de la conversión.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur HEIC en PNG | Gratuit, privé, sans téléchargement",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP vers PNG" },
      { "pageKey": "png-to-webp", "label": "PNG vers WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG vers WebP" }
    ],
    "metaDescription": "Convertissez vos fichiers HEIC en PNG gratuitement, directement dans votre navigateur. Vos photos d'iPhone ne sont jamais téléchargées sur un serveur. Fonctionne sur Windows, Mac, iPhone et Android. Aucune inscription requise.",
    "schemaName": "Convertisseur HEIC en PNG",
    "schemaDescription": "Convertissez vos photos HEIC d'iPhone en PNG sans perte, entièrement dans votre navigateur.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur HEIC en PNG,",
    "h1Highlight": "100% dans votre navigateur",
    "intro": "Déposez vos photos HEIC d'iPhone ici et obtenez des fichiers PNG en quelques secondes. Toute la conversion s'effectue sur votre appareil, vos photos ne sont donc jamais envoyées nulle part.",
    "howTitle": "Comment convertir HEIC en PNG",
    "steps": [
      {
        "title": "Déposez vos fichiers HEIC",
        "body": "Glissez vos fichiers .heic ou .heif dans la zone de dépôt."
      },
      {
        "title": "Décodage via WebAssembly",
        "body": "Un décodeur WebAssembly effectue le travail directement sur votre appareil. Aucun fichier n'est envoyé vers un serveur, vous pouvez le vérifier vous-même dans les outils de développement."
      },
      {
        "title": "Téléchargez le PNG",
        "body": "Enregistrez le PNG sur votre appareil, ou cliquez sur 'Obtenir l'URL' pour l'héberger sur notre CDN et obtenir un lien partageable."
      }
    ],
    "whyTitle": "Pourquoi convertir HEIC en PNG ?",
    "whyItems": [
      {
        "title": "Modifiable",
        "body": "Le format PNG permet de réenregistrer sans perte de qualité supplémentaire."
      },
      {
        "title": "Gestion de la transparence",
        "body": "Vous pouvez facilement supprimer les arrière-plans par la suite."
      },
      {
        "title": "Compatibilité universelle",
        "body": "Toutes les applications, systèmes d'exploitation et outils d'impression acceptent le format PNG."
      },
      {
        "title": "Confidentialité par défaut",
        "body": "Les autres convertisseurs téléchargent vos photos sur leurs serveurs. Celui-ci ne le fait pas. Vos fichiers restent sur votre appareil tout au long du processus."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Mes photos sont-elles vraiment privées ?",
        "a": "Oui. La conversion se fait entièrement dans votre navigateur, vos photos HEIC ne quittent donc jamais votre ordinateur ou votre téléphone. Rien n'est téléchargé à moins que vous ne choisissiez d'héberger un fichier avec 'Obtenir l'URL'."
      },
      {
        "q": "Qu'est-ce que le format HEIC ?",
        "a": "HEIC est le format utilisé par l'iPhone pour enregistrer les photos. Il permet d'économiser de l'espace, mais de nombreuses applications, PC Windows et sites web ne peuvent pas l'ouvrir. Convertir HEIC en PNG rend vos photos compatibles partout."
      },
      {
        "q": "Comment convertir HEIC en PNG sur iPhone, Windows ou Mac ?",
        "a": "La méthode est identique sur tous les appareils. Ouvrez cette page, déposez vos fichiers HEIC dans la zone prévue et téléchargez le PNG. Cela fonctionne dans n'importe quel navigateur moderne, il n'y a donc rien à installer sur Windows, Mac, iPhone ou Android."
      },
      {
        "q": "Vais-je perdre en qualité en convertissant HEIC en PNG ?",
        "a": "Non. Le format PNG est sans perte, votre photo convertie conserve donc sa qualité totale sans compression supplémentaire."
      },
      {
        "q": "Est-ce vraiment gratuit ?",
        "a": "Oui, c'est entièrement gratuit, sans inscription et sans limite de fichiers. Convertissez autant de photos que vous le souhaitez, aussi souvent que vous le voulez."
      }
    ],
    "ctaTitle": "Besoin d'une URL hébergée ?",
    "ctaBody": "Cliquez sur Obtenir l'URL après la conversion.",
    "ctaButton": "Essayer l'outil principal"
  },
  "de": {
    "metaTitle": "HEIC in PNG umwandeln | Kostenlos, privat, kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP zu PNG" },
      { "pageKey": "png-to-webp", "label": "PNG zu WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG zu WebP" }
    ],
    "metaDescription": "Wandeln Sie HEIC kostenlos direkt in Ihrem Browser in PNG um. Ihre iPhone-Fotos werden nie hochgeladen. Funktioniert auf Windows, Mac, iPhone und Android. Keine Anmeldung erforderlich.",
    "schemaName": "HEIC in PNG Konverter",
    "schemaDescription": "Wandeln Sie iPhone HEIC-Fotos verlustfrei direkt in Ihrem Browser in PNG um.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "HEIC in PNG umwandeln,",
    "h1Highlight": "100% in Ihrem Browser",
    "intro": "Ziehen Sie Ihre iPhone HEIC-Fotos hierher und erhalten Sie in Sekunden PNG-Dateien. Die gesamte Konvertierung läuft auf Ihrem eigenen Gerät, sodass Ihre Fotos nirgendwohin hochgeladen werden.",
    "howTitle": "So wandeln Sie HEIC in PNG um",
    "steps": [
      {
        "title": "HEIC-Dateien ablegen",
        "body": "Ziehen Sie .heic- oder .heif-Dateien in den Ablagebereich."
      },
      {
        "title": "Browser-Dekodierung via WebAssembly",
        "body": "Ein WebAssembly-Dekoder erledigt die Arbeit direkt auf Ihrem Gerät. Es werden keine Dateien an einen Server gesendet, was Sie selbst in den DevTools überprüfen können."
      },
      {
        "title": "PNG herunterladen",
        "body": "Speichern Sie das PNG auf Ihrem Gerät oder klicken Sie auf 'URL abrufen', um es auf unserem CDN zu hosten und einen teilbaren Link zu erhalten."
      }
    ],
    "whyTitle": "Warum HEIC in PNG umwandeln?",
    "whyItems": [
      {
        "title": "Bearbeitbar",
        "body": "PNG lässt sich ohne weiteren Qualitätsverlust erneut speichern."
      },
      {
        "title": "Transparenzfähig",
        "body": "Sie können später Hintergründe entfernen."
      },
      {
        "title": "Universell unterstützt",
        "body": "Jede App, jedes Betriebssystem und jeder Druck-Workflow akzeptiert PNG."
      },
      {
        "title": "Datenschutz als Standard",
        "body": "Andere Konverter laden Ihre Fotos auf ihre Server hoch. Dieser nicht. Ihre Dateien bleiben die ganze Zeit auf Ihrem Gerät."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Sind meine Fotos wirklich privat?",
        "a": "Ja. Die Konvertierung findet vollständig in Ihrem Browser statt, sodass Ihre HEIC-Fotos Ihren Computer oder Ihr Telefon nie verlassen. Es wird nichts hochgeladen, es sei denn, Sie entscheiden sich dafür, eine Datei mit 'URL abrufen' zu hosten."
      },
      {
        "q": "Was ist HEIC?",
        "a": "HEIC ist das Format, das das iPhone zum Speichern von Fotos verwendet. Es spart Platz, aber viele Apps, Windows-PCs und Websites können es nicht öffnen. Die Konvertierung von HEIC in PNG sorgt dafür, dass Ihre Fotos überall funktionieren."
      },
      {
        "q": "Wie wandle ich HEIC auf iPhone, Windows oder Mac in PNG um?",
        "a": "Auf jedem Gerät gleich. Öffnen Sie diese Seite, ziehen Sie Ihre HEIC-Dateien in das Feld und laden Sie das PNG herunter. Es läuft in jedem modernen Browser, daher muss auf Windows, Mac, iPhone oder Android nichts installiert werden."
      },
      {
        "q": "Verliere ich bei der Konvertierung von HEIC in PNG an Qualität?",
        "a": "Nein. PNG ist verlustfrei, daher behält Ihr konvertiertes Foto die volle Qualität ohne zusätzliche Komprimierung."
      },
      {
        "q": "Ist das wirklich kostenlos?",
        "a": "Ja, es ist komplett kostenlos, ohne Anmeldung und ohne Dateibeschränkungen. Konvertieren Sie so viele Fotos, wie Sie möchten, so oft Sie möchten."
      }
    ],
    "ctaTitle": "Möchten Sie eine gehostete URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung auf URL abrufen.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "HEIC to PNG 変換 | 無料・プライバシー保護・アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP→PNG" },
      { "pageKey": "png-to-webp", "label": "PNG→WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG→WebP" }
    ],
    "metaDescription": "ブラウザ上でHEICをPNGに無料で変換。iPhoneの写真はサーバーにアップロードされません。Windows、Mac、iPhone、Androidで動作。登録不要。",
    "schemaName": "HEIC to PNG 変換ツール",
    "schemaDescription": "iPhoneのHEIC写真をブラウザ上で完全にロスレスなPNGに変換します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "HEIC to PNG 変換、",
    "h1Highlight": "100%ブラウザ内で完結",
    "intro": "iPhoneのHEIC写真をドラッグ＆ドロップするだけで、数秒でPNGファイルに変換。変換処理はすべてお使いのデバイス内で行われるため、写真が外部にアップロードされることはありません。",
    "howTitle": "HEICからPNGへの変換方法",
    "steps": [
      {
        "title": "HEICファイルをドロップ",
        "body": ".heicまたは.heifファイルをドロップゾーンにドラッグしてください。"
      },
      {
        "title": "WebAssemblyでブラウザ処理",
        "body": "WebAssemblyデコーダーがデバイス上で直接処理を実行します。サーバーにファイルが送信されることはなく、ブラウザのデベロッパーツールで通信を確認できます。"
      },
      {
        "title": "PNGをダウンロード",
        "body": "PNGをデバイスに保存するか、「URLを取得」をクリックしてCDNでホストし、共有リンクを作成できます。"
      }
    ],
    "whyTitle": "HEICをPNGに変換する理由",
    "whyItems": [
      {
        "title": "編集に適している",
        "body": "PNGは再保存しても画質が劣化しません。"
      },
      {
        "title": "透過に対応",
        "body": "後から背景を透過させることが可能です。"
      },
      {
        "title": "高い互換性",
        "body": "あらゆるアプリ、OS、印刷環境でPNGはサポートされています。"
      },
      {
        "title": "プライバシー重視",
        "body": "他の変換ツールとは異なり、サーバーに写真をアップロードしません。ファイルは常にデバイス内に留まります。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "写真は本当にプライベートですか？",
        "a": "はい。変換はすべてブラウザ内で行われるため、HEIC写真がPCやスマホから外部へ送信されることはありません。「URLを取得」機能でファイルをホストしない限り、何もアップロードされません。"
      },
      {
        "q": "HEICとは何ですか？",
        "a": "HEICはiPhoneで写真保存に使用される形式です。容量を節約できますが、多くのアプリやWindows PC、Webサイトでは開けません。PNGに変換することで、どこでも写真を利用できるようになります。"
      },
      {
        "q": "iPhone、Windows、MacでHEICをPNGに変換するには？",
        "a": "どのデバイスでも同じ方法です。このページを開き、HEICファイルをボックスにドロップしてPNGをダウンロードするだけです。モダンなブラウザであれば動作するため、インストールは不要です。"
      },
      {
        "q": "変換で画質は落ちますか？",
        "a": "いいえ。PNGはロスレス形式のため、追加の圧縮なしで元の画質を完全に保持します。"
      },
      {
        "q": "本当に無料ですか？",
        "a": "はい。登録不要でファイル制限もありません。何枚でも、何度でも無料で変換できます。"
      }
    ],
    "ctaTitle": "ホストされたURLが必要ですか？",
    "ctaBody": "変換後に「URLを取得」をクリックしてください。",
    "ctaButton": "アップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "HEIC 转 PNG 转换器 | 免费、隐私、无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "webp-to-png", "label": "WebP 转 PNG" },
      { "pageKey": "png-to-webp", "label": "PNG 转 WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG 转 WebP" }
    ],
    "metaDescription": "直接在浏览器中免费将 HEIC 转换为 PNG。您的 iPhone 照片无需上传。适用于 Windows、Mac、iPhone 和 Android。无需注册。",
    "schemaName": "HEIC 转 PNG 转换器",
    "schemaDescription": "完全在您的浏览器中将 iPhone HEIC 照片转换为无损 PNG。",
    "badge": "纯浏览器工具",
    "h1Pre": "HEIC 转 PNG 转换器，",
    "h1Highlight": "100% 在您的浏览器中完成",
    "intro": "将您的 iPhone HEIC 照片拖放到此处，即可在几秒钟内获得 PNG 文件。整个转换过程在您的设备上运行，因此您的照片永远不会上传到任何地方。",
    "howTitle": "如何将 HEIC 转换为 PNG",
    "steps": [
      {
        "title": "拖放 HEIC 文件",
        "body": "将 .heic 或 .heif 文件拖入放置区域。"
      },
      {
        "title": "浏览器通过 WebAssembly 解码",
        "body": "WebAssembly 解码器直接在您的设备上完成工作。没有任何文件会被发送到服务器，您可以在 DevTools 中自行验证。"
      },
      {
        "title": "下载 PNG",
        "body": "将 PNG 保存到您的设备，或点击“获取 URL”将其托管在我们的 CDN 上并获取可共享的链接。"
      }
    ],
    "whyTitle": "为什么要将 HEIC 转换为 PNG？",
    "whyItems": [
      {
        "title": "可编辑",
        "body": "PNG 再次保存时不会造成进一步的质量损失。"
      },
      {
        "title": "支持透明度",
        "body": "您可以稍后擦除背景。"
      },
      {
        "title": "通用支持",
        "body": "所有应用程序、操作系统和打印流程都接受 PNG。"
      },
      {
        "title": "默认隐私",
        "body": "其他转换器会将您的照片上传到他们的服务器。而此工具不会。您的文件始终保留在您的设备上。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我的照片真的私密吗？",
        "a": "是的。转换完全在您的浏览器中进行，因此您的 HEIC 照片永远不会离开您的电脑或手机。除非您选择使用“获取 URL”托管文件，否则不会上传任何内容。"
      },
      {
        "q": "什么是 HEIC？",
        "a": "HEIC 是 iPhone 用于保存照片的格式。它节省空间，但许多应用程序、Windows PC 和网站无法打开它。将 HEIC 转换为 PNG 可以让您的照片在任何地方都能使用。"
      },
      {
        "q": "如何在 iPhone、Windows 或 Mac 上将 HEIC 转换为 PNG？",
        "a": "在所有设备上的操作方式相同。打开此页面，将您的 HEIC 文件拖入框中，然后下载 PNG。它可以在任何现代浏览器中运行，因此无需在 Windows、Mac、iPhone 或 Android 上安装任何软件。"
      },
      {
        "q": "将 HEIC 转换为 PNG 会损失质量吗？",
        "a": "不会。PNG 是无损的，因此您转换后的照片将保持完整质量，不会增加额外的压缩。"
      },
      {
        "q": "这真的是免费的吗？",
        "a": "是的，完全免费，无需注册，也没有文件限制。您可以根据需要随时转换任意数量的照片。"
      }
    ],
    "ctaTitle": "需要托管 URL？",
    "ctaBody": "转换后点击“获取 URL”。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
