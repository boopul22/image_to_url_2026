import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "JPG to PNG Converter | Free, Lossless, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG to JPG" },
      { "pageKey": "convert-to-jpg", "label": "Convert to JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG to JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG to JPEG" }
    ],
    "metaDescription": "Convert JPG to PNG free, right in your browser. Lossless quality, add transparency, no upload. Works on Windows, Mac, and iPhone, no signup.",
    "schemaName": "JPG to PNG Converter",
    "schemaDescription": "Convert JPG images to PNG entirely in your browser using lossless re-encoding.",
    "badge": "Browser-only Tool",
    "h1Pre": "JPG to PNG Converter,",
    "h1Highlight": "Lossless and Free",
    "intro": "Drop your JPG files and get PNG files you can edit, overlay, or add transparency to. The conversion runs in your browser, so your images never leave your device.",
    "howTitle": "How to convert JPG to PNG",
    "steps": [
      {
        "title": "Drop JPG files",
        "body": "Drag your .jpg or .jpeg files into the drop zone, or click to browse."
      },
      {
        "title": "Browser re-encodes to PNG",
        "body": "Your browser decodes the image and re-encodes it as a lossless PNG using the canvas API. Nothing is sent to a server."
      },
      {
        "title": "Download the PNG",
        "body": "Click Download on each PNG, or use 'Get URL' if you want a hosted link instead."
      }
    ],
    "whyTitle": "Why convert JPG to PNG?",
    "whyItems": [
      {
        "title": "Before editing",
        "body": "Every JPG save loses quality. Convert once to PNG, edit as many times as you want."
      },
      {
        "title": "Transparent backgrounds",
        "body": "You can't add transparency to a JPG, but you can once it's a PNG. Convert first, then erase the background."
      },
      {
        "title": "Logos, UI, screenshots",
        "body": "JPG blurs sharp edges with its compression. Re-save as PNG if the file is a logo or UI screenshot that got compressed by mistake."
      },
      {
        "title": "Platforms that require PNG",
        "body": "Some print pipelines, icon sets, and academic journals accept only PNG/TIFF. Convert once, submit."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Does converting JPG to PNG improve quality?",
        "a": "No. PNG is lossless, so it keeps the JPG exactly as it is, but it can't recover detail the JPG already lost. The benefit is that future edits won't lose any more quality."
      },
      {
        "q": "Why is the PNG bigger than the JPG?",
        "a": "PNG is lossless and stores every pixel, so it's usually larger than the compressed JPG. You get an editable, full-quality file in return."
      },
      {
        "q": "Are my JPGs uploaded anywhere?",
        "a": "No. The conversion runs in your browser. Your files only leave your device if you click 'Get URL' to host one."
      },
      {
        "q": "Can I add transparency after converting?",
        "a": "Yes. Once your file is a PNG, you can erase the background or add transparent areas in any image editor."
      },
      {
        "q": "Does it preserve EXIF metadata?",
        "a": "No. Re-encoding drops the EXIF data, which also helps with privacy when you share images."
      },
      {
        "q": "Any file-size limit?",
        "a": "No fixed limit. Drop a whole folder of JPGs and they convert one after another, right in your browser."
      },
      {
        "q": "Why would I want PNG instead of JPG?",
        "a": "Choose PNG when you need transparency, sharp edges for logos or screenshots, or a lossless file you can edit again later."
      },
      {
        "q": "How do I convert JPG to PNG on Windows, Mac, or iPhone?",
        "a": "It works in any modern browser on Windows, Mac, and iPhone. Open the page, drop your JPG files, and download the PNGs. There is nothing to install."
      }
    ],
    "ctaTitle": "Need a permanent URL for the PNG?",
    "ctaBody": "After converting, click 'Get URL' on any file to host it on our CDN. Free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de JPG a PNG | Gratis, sin pérdida, sin subidas",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG a JPG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir a JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG a JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG a JPEG" }
    ],
    "metaDescription": "Convierte JPG a PNG gratis directamente en tu navegador. Calidad sin pérdida, añade transparencia, sin subir archivos. Funciona en Windows, Mac y iPhone, sin registro.",
    "schemaName": "Convertidor de JPG a PNG",
    "schemaDescription": "Convierte imágenes JPG a PNG completamente en tu navegador usando re-codificación sin pérdida.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "Convertidor de JPG a PNG,",
    "h1Highlight": "gratis y sin pérdida",
    "intro": "Suelta tus archivos JPG y obtén archivos PNG que puedes editar, superponer o añadir transparencia. La conversión se ejecuta en tu navegador, por lo que tus imágenes nunca salen de tu dispositivo.",
    "howTitle": "Cómo convertir JPG a PNG",
    "steps": [
      {
        "title": "Suelta los archivos JPG",
        "body": "Arrastra tus archivos .jpg o .jpeg a la zona de carga, o haz clic para buscarlos."
      },
      {
        "title": "El navegador re-codifica a PNG",
        "body": "Tu navegador decodifica la imagen y la re-codifica como un PNG sin pérdida usando la API canvas. No se envía nada a un servidor."
      },
      {
        "title": "Descarga el PNG",
        "body": "Haz clic en Descargar en cada PNG, o usa 'Obtener URL' si prefieres un enlace alojado."
      }
    ],
    "whyTitle": "¿Por qué convertir JPG a PNG?",
    "whyItems": [
      {
        "title": "Antes de editar",
        "body": "Cada vez que guardas un JPG pierdes calidad. Convierte a PNG una vez y edita tantas veces como quieras."
      },
      {
        "title": "Fondos transparentes",
        "body": "No puedes añadir transparencia a un JPG, pero sí a un PNG. Convierte primero y luego borra el fondo."
      },
      {
        "title": "Logos, UI, capturas de pantalla",
        "body": "El formato JPG difumina los bordes definidos con su compresión. Guarda de nuevo como PNG si el archivo es un logo o una captura de pantalla que se comprimió por error."
      },
      {
        "title": "Plataformas que requieren PNG",
        "body": "Algunos flujos de trabajo de impresión, sets de iconos y revistas académicas solo aceptan PNG/TIFF. Convierte una vez y envía."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Convertir JPG a PNG mejora la calidad?",
        "a": "No. El formato PNG no tiene pérdida, por lo que mantiene el JPG exactamente como está, pero no puede recuperar los detalles que el JPG ya perdió. La ventaja es que futuras ediciones no perderán más calidad."
      },
      {
        "q": "¿Por qué el PNG es más grande que el JPG?",
        "a": "El formato PNG no tiene pérdida y almacena cada píxel, por lo que suele ser más grande que el JPG comprimido. A cambio, obtienes un archivo editable de calidad total."
      },
      {
        "q": "¿Mis JPG se suben a algún lugar?",
        "a": "No. La conversión se ejecuta en tu navegador. Tus archivos solo salen de tu dispositivo si haces clic en 'Obtener URL' para alojar uno."
      },
      {
        "q": "¿Puedo añadir transparencia después de convertir?",
        "a": "Sí. Una vez que tu archivo es un PNG, puedes borrar el fondo o añadir áreas transparentes en cualquier editor de imágenes."
      },
      {
        "q": "¿Conserva los metadatos EXIF?",
        "a": "No. La re-codificación elimina los datos EXIF, lo cual también ayuda con la privacidad al compartir imágenes."
      },
      {
        "q": "¿Hay límite de tamaño de archivo?",
        "a": "No hay límite fijo. Suelta una carpeta entera de JPGs y se convertirán uno tras otro, directamente en tu navegador."
      },
      {
        "q": "¿Por qué querría PNG en lugar de JPG?",
        "a": "Elige PNG cuando necesites transparencia, bordes definidos para logos o capturas de pantalla, o un archivo sin pérdida que puedas editar de nuevo más tarde."
      },
      {
        "q": "¿Cómo convierto JPG a PNG en Windows, Mac o iPhone?",
        "a": "Funciona en cualquier navegador moderno en Windows, Mac y iPhone. Abre la página, suelta tus archivos JPG y descarga los PNG. No hay nada que instalar."
      }
    ],
    "ctaTitle": "¿Necesitas una URL permanente para el PNG?",
    "ctaBody": "Después de convertir, haz clic en 'Obtener URL' en cualquier archivo para alojarlo en nuestra CDN. Gratis, sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur JPG en PNG | Gratuit, sans perte, sans téléchargement",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG vers JPG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir en JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG vers JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG vers JPEG" }
    ],
    "metaDescription": "Convertissez vos JPG en PNG gratuitement, directement dans votre navigateur. Qualité sans perte, ajout de transparence, aucune donnée envoyée. Fonctionne sur Windows, Mac et iPhone, sans inscription.",
    "schemaName": "Convertisseur JPG en PNG",
    "schemaDescription": "Convertissez vos images JPG en PNG entièrement dans votre navigateur grâce à un réencodage sans perte.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur JPG en PNG,",
    "h1Highlight": "sans perte et gratuit",
    "intro": "Déposez vos fichiers JPG et obtenez des fichiers PNG prêts à être modifiés, superposés ou rendus transparents. La conversion s'effectue dans votre navigateur, vos images ne quittent jamais votre appareil.",
    "howTitle": "Comment convertir un JPG en PNG",
    "steps": [
      {
        "title": "Déposez vos fichiers JPG",
        "body": "Faites glisser vos fichiers .jpg ou .jpeg dans la zone de dépôt, ou cliquez pour parcourir vos dossiers."
      },
      {
        "title": "Réencodage en PNG par le navigateur",
        "body": "Votre navigateur décode l'image et la réencode en PNG sans perte via l'API canvas. Aucune donnée n'est envoyée vers un serveur."
      },
      {
        "title": "Téléchargez le PNG",
        "body": "Cliquez sur Télécharger pour chaque PNG, ou utilisez 'Obtenir l'URL' si vous préférez un lien hébergé."
      }
    ],
    "whyTitle": "Pourquoi convertir un JPG en PNG ?",
    "whyItems": [
      {
        "title": "Avant toute modification",
        "body": "Chaque enregistrement en JPG dégrade la qualité. Convertissez une fois en PNG et modifiez autant de fois que nécessaire."
      },
      {
        "title": "Arrière-plans transparents",
        "body": "Le format JPG ne gère pas la transparence, contrairement au PNG. Convertissez d'abord, puis effacez l'arrière-plan."
      },
      {
        "title": "Logos, interfaces et captures",
        "body": "Le JPG floute les bords nets avec sa compression. Réenregistrez en PNG si votre logo ou capture d'écran a été compressé par erreur."
      },
      {
        "title": "Plateformes exigeant le PNG",
        "body": "Certains outils d'impression, jeux d'icônes et revues académiques n'acceptent que le PNG ou le TIFF. Convertissez une fois pour soumettre."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "La conversion JPG vers PNG améliore-t-elle la qualité ?",
        "a": "Non. Le PNG est sans perte, il conserve le JPG tel quel, mais ne peut pas restaurer les détails déjà perdus. L'avantage est que les modifications futures ne dégraderont plus la qualité."
      },
      {
        "q": "Pourquoi le PNG est-il plus lourd que le JPG ?",
        "a": "Le PNG est sans perte et stocke chaque pixel, il est donc généralement plus volumineux qu'un JPG compressé. En échange, vous obtenez un fichier modifiable de haute qualité."
      },
      {
        "q": "Mes JPG sont-ils envoyés sur un serveur ?",
        "a": "Non. La conversion s'exécute localement dans votre navigateur. Vos fichiers ne quittent votre appareil que si vous cliquez sur 'Obtenir l'URL' pour en héberger un."
      },
      {
        "q": "Puis-je ajouter de la transparence après la conversion ?",
        "a": "Oui. Une fois votre fichier au format PNG, vous pouvez effacer l'arrière-plan ou ajouter des zones transparentes dans n'importe quel éditeur d'image."
      },
      {
        "q": "Les métadonnées EXIF sont-elles conservées ?",
        "a": "Non. Le réencodage supprime les données EXIF, ce qui renforce également votre confidentialité lors du partage d'images."
      },
      {
        "q": "Y a-t-il une limite de taille de fichier ?",
        "a": "Aucune limite fixe. Déposez tout un dossier de JPG et ils seront convertis les uns après les autres, directement dans votre navigateur."
      },
      {
        "q": "Pourquoi préférer le PNG au JPG ?",
        "a": "Choisissez le PNG lorsque vous avez besoin de transparence, de bords nets pour des logos ou captures d'écran, ou d'un fichier sans perte modifiable ultérieurement."
      },
      {
        "q": "Comment convertir un JPG en PNG sur Windows, Mac ou iPhone ?",
        "a": "Cela fonctionne dans n'importe quel navigateur moderne sur Windows, Mac et iPhone. Ouvrez la page, déposez vos JPG et téléchargez les PNG. Rien à installer."
      }
    ],
    "ctaTitle": "Besoin d'une URL permanente pour votre PNG ?",
    "ctaBody": "Après la conversion, cliquez sur 'Obtenir l'URL' sur n'importe quel fichier pour l'héberger sur notre CDN. Gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil de conversion"
  },
  "de": {
    "metaTitle": "JPG in PNG konvertieren | Kostenlos, verlustfrei, kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG zu JPG" },
      { "pageKey": "convert-to-jpg", "label": "Zu JPG konvertieren" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG zu JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG zu JPEG" }
    ],
    "metaDescription": "Konvertieren Sie JPG kostenlos direkt in Ihrem Browser in PNG. Verlustfreie Qualität, Transparenz hinzufügen, kein Upload. Funktioniert auf Windows, Mac und iPhone, keine Registrierung.",
    "schemaName": "JPG in PNG Konverter",
    "schemaDescription": "Konvertieren Sie JPG-Bilder vollständig in Ihrem Browser in PNG mittels verlustfreier Neukodierung.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "JPG in PNG konvertieren,",
    "h1Highlight": "verlustfrei und kostenlos",
    "intro": "Ziehen Sie Ihre JPG-Dateien per Drag-and-Drop hinein und erhalten Sie PNG-Dateien, die Sie bearbeiten, überlagern oder mit Transparenz versehen können. Die Konvertierung erfolgt in Ihrem Browser, sodass Ihre Bilder Ihr Gerät niemals verlassen.",
    "howTitle": "So konvertieren Sie JPG in PNG",
    "steps": [
      {
        "title": "JPG-Dateien ablegen",
        "body": "Ziehen Sie Ihre .jpg- oder .jpeg-Dateien in den Ablagebereich oder klicken Sie, um sie auszuwählen."
      },
      {
        "title": "Browser kodiert in PNG um",
        "body": "Ihr Browser dekodiert das Bild und kodiert es mittels Canvas-API als verlustfreies PNG neu. Es werden keine Daten an einen Server gesendet."
      },
      {
        "title": "PNG herunterladen",
        "body": "Klicken Sie bei jedem PNG auf Download oder verwenden Sie 'URL abrufen', falls Sie stattdessen einen gehosteten Link wünschen."
      }
    ],
    "whyTitle": "Warum JPG in PNG konvertieren?",
    "whyItems": [
      {
        "title": "Vor der Bearbeitung",
        "body": "Jedes Speichern als JPG führt zu Qualitätsverlusten. Konvertieren Sie einmalig in PNG und bearbeiten Sie die Datei beliebig oft."
      },
      {
        "title": "Transparente Hintergründe",
        "body": "JPG unterstützt keine Transparenz, PNG hingegen schon. Konvertieren Sie zuerst und entfernen Sie dann den Hintergrund."
      },
      {
        "title": "Logos, UI, Screenshots",
        "body": "JPG verwischt scharfe Kanten durch die Kompression. Speichern Sie Logos oder UI-Screenshots als PNG neu, falls diese versehentlich komprimiert wurden."
      },
      {
        "title": "Plattformen, die PNG erfordern",
        "body": "Einige Druck-Pipelines, Icon-Sets und Fachzeitschriften akzeptieren nur PNG/TIFF. Einmal konvertieren, einreichen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen (FAQ)",
    "faqs": [
      {
        "q": "Verbessert die Konvertierung von JPG in PNG die Qualität?",
        "a": "Nein. PNG ist verlustfrei und behält das JPG exakt bei, kann aber bereits verlorene Details nicht wiederherstellen. Der Vorteil ist, dass zukünftige Bearbeitungen keine weitere Qualität kosten."
      },
      {
        "q": "Warum ist das PNG größer als das JPG?",
        "a": "PNG ist verlustfrei und speichert jedes Pixel, daher ist es meist größer als das komprimierte JPG. Sie erhalten dafür eine bearbeitbare Datei in voller Qualität."
      },
      {
        "q": "Werden meine JPGs irgendwo hochgeladen?",
        "a": "Nein. Die Konvertierung erfolgt in Ihrem Browser. Ihre Dateien verlassen Ihr Gerät nur, wenn Sie auf 'URL abrufen' klicken, um eine Datei zu hosten."
      },
      {
        "q": "Kann ich nach der Konvertierung Transparenz hinzufügen?",
        "a": "Ja. Sobald Ihre Datei ein PNG ist, können Sie den Hintergrund entfernen oder transparente Bereiche in jedem Bildbearbeitungsprogramm hinzufügen."
      },
      {
        "q": "Bleiben EXIF-Metadaten erhalten?",
        "a": "Nein. Die Neukodierung entfernt die EXIF-Daten, was auch den Datenschutz beim Teilen von Bildern verbessert."
      },
      {
        "q": "Gibt es eine Dateigrößenbeschränkung?",
        "a": "Kein festes Limit. Ziehen Sie einen ganzen Ordner mit JPGs hinein; sie werden nacheinander direkt in Ihrem Browser konvertiert."
      },
      {
        "q": "Warum sollte ich PNG statt JPG wählen?",
        "a": "Wählen Sie PNG, wenn Sie Transparenz, scharfe Kanten für Logos oder Screenshots oder eine verlustfreie Datei benötigen, die Sie später erneut bearbeiten können."
      },
      {
        "q": "Wie konvertiere ich JPG in PNG unter Windows, Mac oder iPhone?",
        "a": "Es funktioniert in jedem modernen Browser auf Windows, Mac und iPhone. Öffnen Sie die Seite, ziehen Sie Ihre JPG-Dateien hinein und laden Sie die PNGs herunter. Es muss nichts installiert werden."
      }
    ],
    "ctaTitle": "Benötigen Sie eine dauerhafte URL für das PNG?",
    "ctaBody": "Klicken Sie nach der Konvertierung bei einer beliebigen Datei auf 'URL abrufen', um sie auf unserem CDN zu hosten. Kostenlos, ohne Registrierung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "JPG to PNG 変換 | 無料・ロスレス・アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG→JPG" },
      { "pageKey": "convert-to-jpg", "label": "JPG変換" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG→JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG→JPEG" }
    ],
    "metaDescription": "ブラウザ上でJPGをPNGに無料で変換。ロスレス品質で透明度も追加可能、サーバーへのアップロードもありません。Windows、Mac、iPhoneで動作し、登録も不要です。",
    "schemaName": "JPG to PNG 変換ツール",
    "schemaDescription": "ブラウザ内でロスレス再エンコードを行い、JPG画像をPNGに変換します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "JPG to PNG 変換、",
    "h1Highlight": "ロスレス・無料",
    "intro": "JPGファイルをドロップするだけで、編集やオーバーレイ、透明度の追加が可能なPNGファイルに変換できます。変換はブラウザ内で実行されるため、画像がデバイスから外部へ送信されることはありません。",
    "howTitle": "JPGをPNGに変換する方法",
    "steps": [
      {
        "title": "JPGファイルをドロップ",
        "body": ".jpgまたは.jpegファイルをドロップゾーンにドラッグするか、クリックしてファイルを選択します。"
      },
      {
        "title": "ブラウザでPNGに再エンコード",
        "body": "ブラウザが画像をデコードし、Canvas APIを使用してロスレスのPNGとして再エンコードします。サーバーには何も送信されません。"
      },
      {
        "title": "PNGをダウンロード",
        "body": "各PNGの「ダウンロード」をクリックするか、ホストされたリンクが必要な場合は「URLを取得」を使用してください。"
      }
    ],
    "whyTitle": "なぜJPGをPNGに変換するのか？",
    "whyItems": [
      {
        "title": "編集の前に",
        "body": "JPGは保存するたびに画質が劣化します。一度PNGに変換すれば、何度編集しても画質は落ちません。"
      },
      {
        "title": "背景の透明化",
        "body": "JPGには透明度を追加できませんが、PNGなら可能です。変換してから背景を削除しましょう。"
      },
      {
        "title": "ロゴ、UI、スクリーンショット",
        "body": "JPGの圧縮は輪郭をぼかしてしまいます。ロゴやUIのスクリーンショットが誤って圧縮されてしまった場合は、PNGで再保存してください。"
      },
      {
        "title": "PNG必須のプラットフォーム",
        "body": "印刷工程やアイコンセット、学術誌など、PNG/TIFFのみを受け付ける場合があります。変換して提出しましょう。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "JPGをPNGに変換すると画質は向上しますか？",
        "a": "いいえ。PNGはロスレス形式のため、JPGの状態をそのまま保持しますが、JPGですでに失われた詳細を復元することはできません。メリットは、今後の編集で画質が劣化しなくなることです。"
      },
      {
        "q": "なぜPNGの方がJPGよりサイズが大きいのですか？",
        "a": "PNGはロスレスで全ピクセルを保持するため、通常は圧縮されたJPGより大きくなります。その代わり、編集可能なフルクオリティのファイルが得られます。"
      },
      {
        "q": "JPGはどこかにアップロードされますか？",
        "a": "いいえ。変換はブラウザ内で行われます。ファイルをホストするために「URLを取得」をクリックしない限り、ファイルがデバイスから出ることはありません。"
      },
      {
        "q": "変換後に透明度を追加できますか？",
        "a": "はい。PNGファイルになれば、画像編集ソフトを使って背景を消したり、透明な領域を追加したりできます。"
      },
      {
        "q": "EXIFメタデータは保持されますか？",
        "a": "いいえ。再エンコードによりEXIFデータは削除されます。これは画像を共有する際のプライバシー保護にも役立ちます。"
      },
      {
        "q": "ファイルサイズの制限はありますか？",
        "a": "固定の制限はありません。JPGのフォルダを丸ごとドロップすれば、ブラウザ上で次々と変換されます。"
      },
      {
        "q": "なぜJPGではなくPNGが必要なのですか？",
        "a": "透明度が必要な場合、ロゴやスクリーンショットの輪郭を鮮明に保ちたい場合、または後で再編集できるロスレスファイルが必要な場合にPNGを選択してください。"
      },
      {
        "q": "Windows、Mac、iPhoneでJPGをPNGに変換するには？",
        "a": "Windows、Mac、iPhoneの最新ブラウザであればどれでも動作します。ページを開いてJPGファイルをドロップし、PNGをダウンロードするだけです。インストールは不要です。"
      }
    ],
    "ctaTitle": "PNGの永続的なURLが必要ですか？",
    "ctaBody": "変換後、各ファイルの「URLを取得」をクリックすると、当社のCDNでホストできます。無料、登録不要です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "JPG 转 PNG 转换器 | 免费、无损、无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG 转 JPG" },
      { "pageKey": "convert-to-jpg", "label": "转换为 JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG 转 JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG 转 JPEG" }
    ],
    "metaDescription": "直接在浏览器中免费将 JPG 转换为 PNG。无损画质，支持添加透明度，无需上传。适用于 Windows、Mac 和 iPhone，无需注册。",
    "schemaName": "JPG 转 PNG 转换器",
    "schemaDescription": "使用无损重编码技术，直接在浏览器中将 JPG 图像转换为 PNG。",
    "badge": "纯浏览器工具",
    "h1Pre": "JPG 转 PNG 转换器，",
    "h1Highlight": "无损且免费",
    "intro": "拖入您的 JPG 文件，即可获得可编辑、可叠加或添加透明度的 PNG 文件。转换过程在您的浏览器中运行，因此您的图像永远不会离开您的设备。",
    "howTitle": "如何将 JPG 转换为 PNG",
    "steps": [
      {
        "title": "拖入 JPG 文件",
        "body": "将您的 .jpg 或 .jpeg 文件拖入放置区域，或点击进行浏览选择。"
      },
      {
        "title": "浏览器重编码为 PNG",
        "body": "您的浏览器会解码图像，并使用 canvas API 将其重编码为无损 PNG。没有任何数据会被发送到服务器。"
      },
      {
        "title": "下载 PNG",
        "body": "点击每个 PNG 上的“下载”按钮，或者如果您需要托管链接，请使用“获取 URL”。"
      }
    ],
    "whyTitle": "为什么要将 JPG 转换为 PNG？",
    "whyItems": [
      {
        "title": "编辑前准备",
        "body": "每次保存 JPG 都会损失画质。转换为 PNG 后，您可以根据需要进行多次编辑，而不会产生额外损耗。"
      },
      {
        "title": "透明背景",
        "body": "JPG 不支持透明度，但 PNG 可以。先转换格式，然后即可轻松擦除背景。"
      },
      {
        "title": "Logo、UI 和截图",
        "body": "JPG 的压缩算法会模糊锐利边缘。如果您的 Logo 或 UI 截图因压缩而失真，请将其重新保存为 PNG。"
      },
      {
        "title": "平台格式要求",
        "body": "某些打印流程、图标集和学术期刊仅接受 PNG/TIFF 格式。转换一次，即可提交。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "将 JPG 转换为 PNG 能提高画质吗？",
        "a": "不能。PNG 是无损格式，它会保持 JPG 原有的画质，但无法恢复 JPG 已经丢失的细节。其优势在于后续编辑不会再造成画质损失。"
      },
      {
        "q": "为什么 PNG 文件比 JPG 大？",
        "a": "PNG 是无损格式，存储了每一个像素，因此通常比压缩后的 JPG 文件大。作为回报，您获得了一个可编辑、全画质的文件。"
      },
      {
        "q": "我的 JPG 文件会被上传到任何地方吗？",
        "a": "不会。转换过程完全在您的浏览器中运行。只有当您点击“获取 URL”进行托管时，文件才会离开您的设备。"
      },
      {
        "q": "转换后可以添加透明度吗？",
        "a": "可以。一旦文件转换为 PNG，您就可以在任何图像编辑器中擦除背景或添加透明区域。"
      },
      {
        "q": "它会保留 EXIF 元数据吗？",
        "a": "不会。重编码会移除 EXIF 数据，这也有助于在分享图像时保护您的隐私。"
      },
      {
        "q": "有文件大小限制吗？",
        "a": "没有固定限制。您可以拖入一整文件夹的 JPG 文件，它们会在浏览器中依次完成转换。"
      },
      {
        "q": "为什么我需要 PNG 而不是 JPG？",
        "a": "当您需要透明度、Logo 或截图的锐利边缘，或者需要一个以后可以反复编辑的无损文件时，请选择 PNG。"
      },
      {
        "q": "如何在 Windows、Mac 或 iPhone 上将 JPG 转换为 PNG？",
        "a": "它适用于 Windows、Mac 和 iPhone 上的任何现代浏览器。打开页面，拖入您的 JPG 文件，然后下载 PNG 即可。无需安装任何软件。"
      }
    ],
    "ctaTitle": "需要 PNG 的永久链接？",
    "ctaBody": "转换完成后，点击任意文件上的“获取 URL”，即可将其托管在我们的 CDN 上。免费，无需注册。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
