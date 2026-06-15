import type { LandingContentMap } from './types';

// Head-term landing page targeting the bare keyword "image to url".
// Distinct from `image-to-url-converter` (the long-tail "image to url converter").
// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL - Free, No Sign-Up, Instant Direct Link | ImageToURL",
    "metaDescription": "Turn any image into a URL for free. Drop a JPG, PNG, WebP, GIF or SVG and get a direct link that works in Discord, Reddit, forums and email. No account, no compression.",
    "schemaName": "Image to URL",
    "schemaDescription": "A free image to URL tool that turns any picture into a direct, full-quality link. No account, no watermark, fast global CDN.",
    "badge": "IMAGE TO URL",
    "h1Pre": "Image to URL:",
    "h1Highlight": "free, no sign-up needed",
    "intro": "Need to turn an image to URL without making an account first? Drop your picture in the box above and you get a direct link in about two seconds. It works on JPG, PNG, WebP, GIF and SVG files, there's no watermark, and nothing gets squeezed or shrunk on the way through. Copy the link and paste it wherever you need it.",
    "howTitle": "How the image to URL tool works",
    "steps": [
      {
        "title": "Drop your file in",
        "body": "Drag an image onto the box or click to pick one from your device. Files can be up to 10MB each, and JPG, PNG, WebP, GIF and SVG all work."
      },
      {
        "title": "Grab the link",
        "body": "Your image goes onto a fast global CDN and a direct link pops out right away. The link ends in the real file extension, so it behaves exactly like the original file."
      },
      {
        "title": "Paste it anywhere",
        "body": "Use the URL in a Discord chat, a Reddit post, a forum thread, an HTML page or an email. It shows up as the actual image, not a download button or a preview card."
      }
    ],
    "whyTitle": "Why people use it instead of Imgur",
    "whyItems": [
      {
        "title": "No account, no email",
        "body": "There's nothing to sign up for. Imgur stopped letting people post anonymously back in 2023, so a lot of folks went looking for a simpler option. Upload, copy, done."
      },
      {
        "title": "Links that actually embed",
        "body": "The URL points straight at the image file, so Discord, Reddit and most forums show it inline instead of opening a gallery page or forcing a download."
      },
      {
        "title": "Full quality, no shrinking",
        "body": "Some hosts quietly resize hotlinked images down to around 1,280px. This one leaves your file alone, so what you upload is exactly what people see."
      },
      {
        "title": "Honest about how long links last",
        "body": "Anonymous links stick around for at least a couple of weeks, usually longer. Want one that never goes away? Make a free account and pick 'keep forever' when you upload."
      }
    ],
    "useCasesTitle": "Where an image to URL link comes in handy",
    "useCasesIntro": "Once your picture has a direct link, it drops into just about anywhere online:",
    "useCases": [
      {
        "title": "Discord and forums",
        "body": "Paste the link into a channel or a thread and the image just appears. No attachment, no extra click to open it."
      },
      {
        "title": "Websites and docs",
        "body": "Drop the URL into your HTML, a Notion page, a README or a site builder and the picture loads inline. No separate hosting to wrangle."
      },
      {
        "title": "Email and chat",
        "body": "Add it to a signature or send it in a message. It hotlinks to the file, so people see the image instead of a broken box."
      }
    ],
    "faqTitle": "Image to URL FAQ",
    "faqs": [
      {
        "q": "How do I convert an image to URL for free?",
        "a": "Upload your image in the box at the top of this page. It lands on our CDN and you get a direct link within a few seconds, ready to copy. No account and no payment, ever."
      },
      {
        "q": "What image formats can I use?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10MB per file. The link you get ends in the real extension, so it hotlinks and embeds the same way the original file would."
      },
      {
        "q": "Will the link work in Discord and Reddit?",
        "a": "Yes. Because the URL points right at the image file, Discord, Reddit and most forums render it as a picture inline instead of showing a download or a gallery page."
      },
      {
        "q": "Do the links expire?",
        "a": "Anonymous uploads stay live until our monthly storage cleanup, so you get a couple of weeks at minimum and often more. Want a link that never expires? Create a free account and choose 'keep forever' when you upload. Either way, keep your own copy as a backup."
      },
      {
        "q": "Does it compress or resize my image?",
        "a": "No. You get back the same file you put in, at full resolution, with no re-compression and no watermark. That's different from hosts that scale hotlinked images down to a smaller size."
      },
      {
        "q": "Is this a good free Imgur alternative?",
        "a": "It is, especially if you just want to turn an image to URL and paste the link somewhere. No app, no email and no gallery page, which is what most people miss from the old anonymous Imgur."
      }
    ],
    "ctaTitle": "Turn your image into a URL now",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct link in seconds. No sign-up, no compression, no watermark.",
    "ctaButton": "Upload Image Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  },
  "es": {
    "metaTitle": "Imagen a URL - Gratis, sin registro, enlace directo instantáneo | ImageToURL",
    "metaDescription": "Convierte cualquier imagen en una URL gratis. Sube un JPG, PNG, WebP, GIF o SVG y obtén un enlace directo que funciona en Discord, Reddit, foros y correo electrónico. Sin cuenta, sin compresión.",
    "schemaName": "Imagen a URL",
    "schemaDescription": "Una herramienta gratuita para convertir imágenes a URL que transforma cualquier foto en un enlace directo de calidad completa. Sin cuenta, sin marcas de agua, CDN global rápido.",
    "badge": "IMAGEN A URL",
    "h1Pre": "Imagen a URL:",
    "h1Highlight": "gratis, sin necesidad de registro",
    "intro": "¿Necesitas convertir una imagen a URL sin crear una cuenta primero? Suelta tu foto en el cuadro de arriba y obtendrás un enlace directo en unos dos segundos. Funciona con archivos JPG, PNG, WebP, GIF y SVG, no tiene marcas de agua y nada se comprime ni se reduce en el proceso. Copia el enlace y pégalo donde lo necesites.",
    "howTitle": "Cómo funciona la herramienta de imagen a URL",
    "steps": [
      {
        "title": "Suelta tu archivo",
        "body": "Arrastra una imagen al cuadro o haz clic para seleccionar una desde tu dispositivo. Los archivos pueden pesar hasta 10MB cada uno, y funcionan formatos JPG, PNG, WebP, GIF y SVG."
      },
      {
        "title": "Obtén el enlace",
        "body": "Tu imagen se sube a una CDN global rápida y aparece un enlace directo al instante. El enlace termina con la extensión real del archivo, por lo que se comporta exactamente igual que el archivo original."
      },
      {
        "title": "Pégalo en cualquier lugar",
        "body": "Usa la URL en un chat de Discord, una publicación de Reddit, un hilo de foro, una página HTML o un correo electrónico. Se mostrará como la imagen real, no como un botón de descarga o una tarjeta de vista previa."
      }
    ],
    "whyTitle": "Por qué la gente lo usa en lugar de Imgur",
    "whyItems": [
      {
        "title": "Sin cuenta, sin correo",
        "body": "No hay nada en lo que registrarse. Imgur dejó de permitir publicaciones anónimas en 2023, por lo que mucha gente buscó una opción más sencilla. Sube, copia, listo."
      },
      {
        "title": "Enlaces que realmente se incrustan",
        "body": "La URL apunta directamente al archivo de imagen, por lo que Discord, Reddit y la mayoría de los foros la muestran en línea en lugar de abrir una página de galería o forzar una descarga."
      },
      {
        "title": "Calidad completa, sin reducción",
        "body": "Algunos servidores redimensionan silenciosamente las imágenes enlazadas a unos 1,280px. Este servicio mantiene tu archivo intacto, por lo que lo que subes es exactamente lo que la gente ve."
      },
      {
        "title": "Transparencia sobre la duración de los enlaces",
        "body": "Los enlaces anónimos permanecen activos al menos un par de semanas, a menudo más. ¿Quieres uno que nunca desaparezca? Crea una cuenta gratuita y elige 'mantener para siempre' al subir."
      }
    ],
    "faqTitle": "Preguntas frecuentes sobre Imagen a URL",
    "faqs": [
      {
        "q": "¿Cómo convierto una imagen a URL gratis?",
        "a": "Sube tu imagen en el cuadro en la parte superior de esta página. Se aloja en nuestra CDN y obtienes un enlace directo en pocos segundos, listo para copiar. Sin cuenta y sin pagos, nunca."
      },
      {
        "q": "¿Qué formatos de imagen puedo usar?",
        "a": "JPG, PNG, WebP, GIF y SVG, hasta 10MB por archivo. El enlace que obtienes termina con la extensión real, por lo que se enlaza e incrusta igual que lo haría el archivo original."
      },
      {
        "q": "¿Funcionará el enlace en Discord y Reddit?",
        "a": "Sí. Debido a que la URL apunta directamente al archivo de imagen, Discord, Reddit y la mayoría de los foros la renderizan como una imagen en línea en lugar de mostrar una descarga o una página de galería."
      },
      {
        "q": "¿Los enlaces caducan?",
        "a": "Las subidas anónimas permanecen activas hasta nuestra limpieza mensual de almacenamiento, por lo que tienes un par de semanas como mínimo y a menudo más. ¿Quieres un enlace que nunca caduque? Crea una cuenta gratuita y elige 'mantener para siempre' al subir. De cualquier manera, guarda tu propia copia como respaldo."
      },
      {
        "q": "¿Comprime o redimensiona mi imagen?",
        "a": "No. Obtienes el mismo archivo que subiste, en resolución completa, sin recompresión y sin marcas de agua. Eso es diferente a otros servidores que escalan las imágenes enlazadas a un tamaño menor."
      },
      {
        "q": "¿Es una buena alternativa gratuita a Imgur?",
        "a": "Lo es, especialmente si solo quieres convertir una imagen a URL y pegar el enlace en algún lugar. Sin aplicaciones, sin correo electrónico y sin páginas de galería, que es lo que la mayoría de la gente extraña del antiguo Imgur anónimo."
      }
    ],
    "ctaTitle": "Convierte tu imagen en una URL ahora",
    "ctaBody": "Sube un JPG, PNG, WebP, GIF o SVG y obtén un enlace directo en segundos. Sin registro, sin compresión, sin marcas de agua.",
    "ctaButton": "Subir imagen ahora",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  },
  "fr": {
    "metaTitle": "Image vers URL - Gratuit, sans inscription, lien direct instantané | ImageToURL",
    "metaDescription": "Transformez n'importe quelle image en URL gratuitement. Déposez un fichier JPG, PNG, WebP, GIF ou SVG et obtenez un lien direct qui fonctionne sur Discord, Reddit, les forums et par e-mail. Sans compte, sans compression.",
    "schemaName": "Image vers URL",
    "schemaDescription": "Un outil gratuit pour transformer une image en URL, créant un lien direct en pleine qualité. Sans compte, sans filigrane, via un CDN mondial rapide.",
    "badge": "IMAGE VERS URL",
    "h1Pre": "Image vers URL :",
    "h1Highlight": "gratuit, aucune inscription requise",
    "intro": "Besoin de transformer une image en URL sans créer de compte au préalable ? Déposez votre image dans la zone ci-dessus et vous obtiendrez un lien direct en deux secondes environ. Cela fonctionne avec les fichiers JPG, PNG, WebP, GIF et SVG, sans filigrane, et sans aucune compression ou réduction de taille. Copiez le lien et collez-le où vous le souhaitez.",
    "howTitle": "Comment fonctionne l'outil Image vers URL",
    "steps": [
      {
        "title": "Déposez votre fichier",
        "body": "Faites glisser une image dans la zone ou cliquez pour en sélectionner une depuis votre appareil. Les fichiers peuvent peser jusqu'à 10 Mo chacun, et les formats JPG, PNG, WebP, GIF et SVG sont tous pris en charge."
      },
      {
        "title": "Récupérez le lien",
        "body": "Votre image est envoyée sur un CDN mondial rapide et un lien direct apparaît immédiatement. Le lien se termine par l'extension réelle du fichier, il se comporte donc exactement comme le fichier original."
      },
      {
        "title": "Collez-le partout",
        "body": "Utilisez l'URL dans un chat Discord, une publication Reddit, un fil de discussion, une page HTML ou un e-mail. Elle s'affiche comme l'image réelle, et non comme un bouton de téléchargement ou une carte de prévisualisation."
      }
    ],
    "whyTitle": "Pourquoi les gens l'utilisent plutôt qu'Imgur",
    "whyItems": [
      {
        "title": "Pas de compte, pas d'e-mail",
        "body": "Il n'y a rien à créer. Imgur a cessé d'autoriser les publications anonymes en 2023, donc beaucoup de gens ont cherché une option plus simple. Téléchargez, copiez, c'est fini."
      },
      {
        "title": "Des liens qui s'intègrent réellement",
        "body": "L'URL pointe directement vers le fichier image, donc Discord, Reddit et la plupart des forums l'affichent en ligne au lieu d'ouvrir une page de galerie ou de forcer un téléchargement."
      },
      {
        "title": "Qualité totale, sans réduction",
        "body": "Certains hébergeurs redimensionnent discrètement les images liées à environ 1 280 px. Ici, votre fichier reste intact, ce que vous téléchargez est exactement ce que les gens voient."
      },
      {
        "title": "Transparence sur la durée de vie des liens",
        "body": "Les liens anonymes restent actifs pendant au moins quelques semaines, souvent plus. Vous en voulez un qui ne disparaisse jamais ? Créez un compte gratuit et choisissez 'conserver pour toujours' lors du téléchargement."
      }
    ],
    "faqTitle": "FAQ Image vers URL",
    "faqs": [
      {
        "q": "Comment convertir une image en URL gratuitement ?",
        "a": "Téléchargez votre image dans la zone en haut de cette page. Elle est envoyée sur notre CDN et vous obtenez un lien direct en quelques secondes, prêt à être copié. Sans compte et sans paiement, jamais."
      },
      {
        "q": "Quels formats d'image puis-je utiliser ?",
        "a": "JPG, PNG, WebP, GIF et SVG, jusqu'à 10 Mo par fichier. Le lien que vous obtenez se termine par l'extension réelle, il permet donc l'intégration directe comme le ferait le fichier original."
      },
      {
        "q": "Le lien fonctionnera-t-il sur Discord et Reddit ?",
        "a": "Oui. Comme l'URL pointe directement vers le fichier image, Discord, Reddit et la plupart des forums l'affichent comme une image en ligne au lieu d'afficher un téléchargement ou une page de galerie."
      },
      {
        "q": "Les liens expirent-ils ?",
        "a": "Les téléchargements anonymes restent en ligne jusqu'à notre nettoyage mensuel du stockage, vous bénéficiez donc d'au moins quelques semaines, souvent plus. Vous voulez un lien qui n'expire jamais ? Créez un compte gratuit et choisissez 'conserver pour toujours' lors du téléchargement. Dans tous les cas, gardez votre propre copie en sauvegarde."
      },
      {
        "q": "Est-ce que cela compresse ou redimensionne mon image ?",
        "a": "Non. Vous récupérez le même fichier que celui que vous avez envoyé, en pleine résolution, sans recompression et sans filigrane. C'est différent des hébergeurs qui réduisent la taille des images liées."
      },
      {
        "q": "Est-ce une bonne alternative gratuite à Imgur ?",
        "a": "Oui, surtout si vous voulez simplement transformer une image en URL et coller le lien quelque part. Pas d'application, pas d'e-mail et pas de page de galerie, ce qui manque à beaucoup d'utilisateurs de l'ancien Imgur anonyme."
      }
    ],
    "ctaTitle": "Transformez votre image en URL maintenant",
    "ctaBody": "Téléchargez un fichier JPG, PNG, WebP, GIF ou SVG et obtenez un lien direct en quelques secondes. Sans inscription, sans compression, sans filigrane.",
    "ctaButton": "Télécharger l'image maintenant",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  },
  "de": {
    "metaTitle": "Bild in URL umwandeln - Kostenlos, ohne Anmeldung, direkter Link | ImageToURL",
    "metaDescription": "Verwandeln Sie jedes Bild kostenlos in eine URL. Laden Sie JPG, PNG, WebP, GIF oder SVG hoch und erhalten Sie einen direkten Link für Discord, Reddit, Foren und E-Mails. Kein Konto, keine Komprimierung.",
    "schemaName": "Bild in URL umwandeln",
    "schemaDescription": "Ein kostenloses Tool, um Bilder in direkte Links in voller Qualität zu verwandeln. Ohne Konto, ohne Wasserzeichen, schnelles globales CDN.",
    "badge": "BILD IN URL",
    "h1Pre": "Bild in URL umwandeln:",
    "h1Highlight": "kostenlos, ohne Anmeldung",
    "intro": "Sie müssen ein Bild in eine URL umwandeln, ohne vorher ein Konto zu erstellen? Ziehen Sie Ihr Bild einfach in das Feld oben und Sie erhalten in etwa zwei Sekunden einen direkten Link. Es funktioniert mit JPG-, PNG-, WebP-, GIF- und SVG-Dateien, es gibt kein Wasserzeichen und die Qualität bleibt unverändert. Kopieren Sie den Link und fügen Sie ihn überall ein, wo Sie ihn benötigen.",
    "howTitle": "So funktioniert das Bild-zu-URL-Tool",
    "steps": [
      {
        "title": "Datei hochladen",
        "body": "Ziehen Sie ein Bild in das Feld oder klicken Sie darauf, um eine Datei von Ihrem Gerät auszuwählen. Dateien können bis zu 10 MB groß sein; JPG, PNG, WebP, GIF und SVG werden unterstützt."
      },
      {
        "title": "Link erhalten",
        "body": "Ihr Bild wird auf ein schnelles globales CDN hochgeladen und Sie erhalten sofort einen direkten Link. Der Link endet mit der tatsächlichen Dateiendung, sodass er sich genau wie die Originaldatei verhält."
      },
      {
        "title": "Überall einfügen",
        "body": "Verwenden Sie die URL in einem Discord-Chat, einem Reddit-Beitrag, einem Foren-Thread, einer HTML-Seite oder einer E-Mail. Das Bild wird direkt angezeigt, nicht als Download-Button oder Vorschau-Karte."
      }
    ],
    "whyTitle": "Warum Nutzer es statt Imgur verwenden",
    "whyItems": [
      {
        "title": "Kein Konto, keine E-Mail",
        "body": "Sie müssen sich nirgendwo registrieren. Da Imgur seit 2023 keine anonymen Beiträge mehr zulässt, suchen viele nach einer einfacheren Alternative. Hochladen, kopieren, fertig."
      },
      {
        "title": "Links, die wirklich eingebettet werden",
        "body": "Die URL verweist direkt auf die Bilddatei, sodass Discord, Reddit und die meisten Foren das Bild inline anzeigen, anstatt eine Galerie-Seite zu öffnen oder einen Download zu erzwingen."
      },
      {
        "title": "Volle Qualität, keine Verkleinerung",
        "body": "Einige Hoster verkleinern verlinkte Bilder automatisch auf ca. 1.280 Pixel. Dieses Tool lässt Ihre Datei unangetastet, sodass das, was Sie hochladen, genau das ist, was andere sehen."
      },
      {
        "title": "Ehrlichkeit bei der Link-Dauer",
        "body": "Anonyme Links bleiben mindestens einige Wochen aktiv, oft auch länger. Möchten Sie einen Link, der für immer bleibt? Erstellen Sie ein kostenloses Konto und wählen Sie beim Hochladen 'für immer behalten'."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen (FAQ)",
    "faqs": [
      {
        "q": "Wie wandle ich ein Bild kostenlos in eine URL um?",
        "a": "Laden Sie Ihr Bild in das Feld oben auf dieser Seite hoch. Es wird auf unserem CDN gespeichert und Sie erhalten innerhalb weniger Sekunden einen direkten Link zum Kopieren. Ohne Konto und ohne Kosten."
      },
      {
        "q": "Welche Bildformate kann ich verwenden?",
        "a": "JPG, PNG, WebP, GIF und SVG bis zu 10 MB pro Datei. Der Link endet mit der echten Dateiendung, sodass er genauso eingebettet wird wie die Originaldatei."
      },
      {
        "q": "Funktioniert der Link in Discord und Reddit?",
        "a": "Ja. Da die URL direkt auf die Bilddatei zeigt, rendern Discord, Reddit und die meisten Foren das Bild inline, anstatt einen Download oder eine Galerie-Seite anzuzeigen."
      },
      {
        "q": "Laufen die Links ab?",
        "a": "Anonyme Uploads bleiben bis zu unserer monatlichen Speicherbereinigung aktiv, also mindestens einige Wochen. Möchten Sie einen dauerhaften Link? Erstellen Sie ein kostenloses Konto und wählen Sie 'für immer behalten'. Bewahren Sie zur Sicherheit immer eine eigene Kopie auf."
      },
      {
        "q": "Wird mein Bild komprimiert oder in der Größe verändert?",
        "a": "Nein. Sie erhalten genau die Datei zurück, die Sie hochgeladen haben, in voller Auflösung, ohne erneute Komprimierung und ohne Wasserzeichen."
      },
      {
        "q": "Ist dies eine gute kostenlose Imgur-Alternative?",
        "a": "Ja, besonders wenn Sie einfach nur ein Bild in eine URL umwandeln und den Link teilen möchten. Keine App, keine E-Mail und keine Galerie-Seite – genau das, was viele am alten anonymen Imgur vermissen."
      }
    ],
    "ctaTitle": "Verwandeln Sie Ihr Bild jetzt in eine URL",
    "ctaBody": "Laden Sie ein JPG, PNG, WebP, GIF oder SVG hoch und erhalten Sie in Sekunden einen direkten Link. Keine Anmeldung, keine Komprimierung, kein Wasserzeichen.",
    "ctaButton": "Jetzt Bild hochladen",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  },
  "ja": {
    "metaTitle": "画像URL変換 - 無料・登録不要・即時直リンク発行 | ImageToURL",
    "metaDescription": "画像を無料でURLに変換。JPG、PNG、WebP、GIF、SVGをドラッグ＆ドロップするだけで、Discord、Reddit、掲示板、メールで使える直リンクを取得。アカウント登録不要、画質劣化なし。",
    "schemaName": "画像URL変換",
    "schemaDescription": "画像を直接表示可能な高品質URLに変換する無料ツール。アカウント不要、透かしなし、高速グローバルCDN対応。",
    "badge": "画像URL変換",
    "h1Pre": "画像URL変換：",
    "h1Highlight": "無料・登録不要",
    "intro": "アカウント作成なしで画像をURLに変換したいですか？上のボックスに画像をドロップするだけで、約2秒で直リンクが発行されます。JPG、PNG、WebP、GIF、SVGに対応しており、透かしや画質の劣化もありません。リンクをコピーして、必要な場所に貼り付けるだけです。",
    "howTitle": "画像URL変換ツールの使い方",
    "steps": [
      {
        "title": "ファイルをドロップ",
        "body": "画像をボックスにドラッグするか、クリックしてデバイスから選択してください。1ファイル最大10MBまで、JPG、PNG、WebP、GIF、SVGに対応しています。"
      },
      {
        "title": "リンクを取得",
        "body": "画像は高速なグローバルCDNにアップロードされ、すぐに直リンクが発行されます。リンクは元のファイル拡張子で終わるため、元のファイルと全く同じように動作します。"
      },
      {
        "title": "どこでも貼り付け",
        "body": "Discordのチャット、Redditの投稿、掲示板のスレッド、HTMLページ、メールなどでURLを使用してください。ダウンロードボタンやプレビューカードではなく、画像そのものが表示されます。"
      }
    ],
    "whyTitle": "Imgurの代わりに選ばれる理由",
    "whyItems": [
      {
        "title": "アカウント・メール不要",
        "body": "登録は一切不要です。Imgurが2023年に匿名投稿を廃止したため、よりシンプルな選択肢を探している多くのユーザーに選ばれています。アップロードしてコピーするだけです。"
      },
      {
        "title": "確実に埋め込めるリンク",
        "body": "URLが画像ファイルに直接リンクしているため、Discord、Reddit、ほとんどの掲示板で、ギャラリーページを開いたりダウンロードを強制したりすることなく、インラインで画像が表示されます。"
      },
      {
        "title": "劣化なしのフル画質",
        "body": "一部のホスティングサービスは、直リンクされた画像を自動的に約1,280pxにリサイズしますが、当サービスはファイルをそのまま保持するため、アップロードしたものがそのまま表示されます。"
      },
      {
        "title": "リンクの有効期限について",
        "body": "匿名アップロードのリンクは少なくとも数週間、通常はそれ以上保持されます。ずっと残したい場合は、無料アカウントを作成し、アップロード時に「永久保存」を選択してください。"
      }
    ],
    "faqTitle": "画像URL変換に関するよくある質問",
    "faqs": [
      {
        "q": "無料で画像をURLに変換するには？",
        "a": "このページ上部のボックスに画像をアップロードしてください。CDNに保存され、数秒以内にコピー可能な直リンクが発行されます。アカウント登録や支払いは一切不要です。"
      },
      {
        "q": "対応している画像形式は？",
        "a": "JPG、PNG、WebP、GIF、SVGに対応しており、1ファイル最大10MBまでです。発行されるリンクは元の拡張子で終わるため、元のファイルと同様に直リンクや埋め込みが可能です。"
      },
      {
        "q": "DiscordやRedditでリンクは使えますか？",
        "a": "はい。URLが画像ファイルに直接リンクしているため、Discord、Reddit、ほとんどの掲示板で、ダウンロードページやギャラリーではなく、画像としてインライン表示されます。"
      },
      {
        "q": "リンクに有効期限はありますか？",
        "a": "匿名アップロードは毎月のストレージ整理まで保持されるため、最低でも数週間は有効です。期限切れを防ぎたい場合は、無料アカウントを作成して「永久保存」を選択してください。念のため、ご自身でもバックアップを保管することをお勧めします。"
      },
      {
        "q": "画像が圧縮やリサイズされることはありますか？",
        "a": "いいえ。アップロードしたファイルがそのままの解像度で保持され、再圧縮や透かしの追加もありません。直リンク画像を縮小する他のホスティングサービスとは異なります。"
      },
      {
        "q": "Imgurの代わりになりますか？",
        "a": "はい。特に画像をURLに変換してどこかに貼り付けたい場合に最適です。アプリやメール、ギャラリーページが不要な、かつての匿名Imgurのような体験を提供します。"
      }
    ],
    "ctaTitle": "今すぐ画像をURLに変換",
    "ctaBody": "JPG、PNG、WebP、GIF、SVGをアップロードして、数秒で直リンクを取得しましょう。登録不要、圧縮なし、透かしなしです。",
    "ctaButton": "今すぐ画像をアップロード",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  },
  "zh-Hans": {
    "metaTitle": "图片转链接 - 免费、无需注册、即时直链 | ImageToURL",
    "metaDescription": "免费将任何图片转换为链接。上传 JPG、PNG、WebP、GIF 或 SVG，即可获得适用于 Discord、Reddit、论坛和电子邮件的直链。无需账户，无压缩。",
    "schemaName": "图片转链接",
    "schemaDescription": "一款免费的图片转链接工具，可将任何图片转换为高质量的直链。无需账户，无水印，采用快速全球 CDN。",
    "badge": "图片转链接",
    "h1Pre": "图片转链接：",
    "h1Highlight": "免费，无需注册",
    "intro": "需要将图片转换为链接却不想注册账户？只需将图片拖入上方的框中，大约两秒钟即可获得直链。它支持 JPG、PNG、WebP、GIF 和 SVG 文件，没有水印，图片也不会在传输过程中被压缩或缩小。复制链接并粘贴到任何需要的地方即可。",
    "howTitle": "图片转链接工具的工作原理",
    "steps": [
      {
        "title": "上传文件",
        "body": "将图片拖入框中或点击选择设备中的文件。每个文件最大支持 10MB，支持 JPG、PNG、WebP、GIF 和 SVG 格式。"
      },
      {
        "title": "获取链接",
        "body": "您的图片将上传至快速的全球 CDN，并立即生成直链。链接以原始文件扩展名结尾，因此其表现与原始文件完全一致。"
      },
      {
        "title": "随处粘贴",
        "body": "将 URL 用于 Discord 聊天、Reddit 帖子、论坛主题、HTML 页面或电子邮件中。它会直接显示为图片，而不是下载按钮或预览卡片。"
      }
    ],
    "whyTitle": "为什么人们选择它而不是 Imgur",
    "whyItems": [
      {
        "title": "无需账户，无需邮箱",
        "body": "无需注册任何信息。Imgur 自 2023 年起停止了匿名发布功能，因此许多人都在寻找更简单的替代方案。上传、复制、完成。"
      },
      {
        "title": "真正可嵌入的链接",
        "body": "该 URL 直接指向图片文件，因此 Discord、Reddit 和大多数论坛会直接内嵌显示图片，而不会跳转到图库页面或强制下载。"
      },
      {
        "title": "全画质，无压缩",
        "body": "一些托管平台会悄悄将外链图片压缩至 1,280px 左右。本工具保留您的原始文件，确保用户看到的内容与您上传的一模一样。"
      },
      {
        "title": "关于链接有效期的诚实说明",
        "body": "匿名链接至少保留几周，通常更久。想要永久有效的链接？注册一个免费账户，并在上传时选择“永久保存”。"
      }
    ],
    "faqTitle": "图片转链接常见问题解答",
    "faqs": [
      {
        "q": "如何免费将图片转换为链接？",
        "a": "在本页面顶部的框中上传您的图片。图片将进入我们的 CDN，您将在几秒钟内获得可直接复制的链接。无需账户，无需付费。"
      },
      {
        "q": "可以使用哪些图片格式？",
        "a": "支持 JPG、PNG、WebP、GIF 和 SVG，每个文件最大 10MB。获得的链接以真实扩展名结尾，因此可以像原始文件一样进行外链和嵌入。"
      },
      {
        "q": "链接在 Discord 和 Reddit 上有效吗？",
        "a": "是的。因为 URL 直接指向图片文件，Discord、Reddit 和大多数论坛会将其渲染为内嵌图片，而不是显示下载或图库页面。"
      },
      {
        "q": "链接会过期吗？",
        "a": "匿名上传的文件会保留到我们每月的存储清理为止，因此至少有几周的有效期，通常更长。想要永不过期的链接？请创建一个免费账户并在上传时选择“永久保存”。无论如何，请务必保留自己的备份。"
      },
      {
        "q": "它会压缩或调整我的图片大小吗？",
        "a": "不会。您将获得与上传时完全一致的文件，保持全分辨率，无二次压缩，无水印。这与那些会自动缩小外链图片的托管平台不同。"
      },
      {
        "q": "这是一个好的免费 Imgur 替代品吗？",
        "a": "是的，特别是如果您只是想将图片转为链接并粘贴到某处。无需应用、无需邮箱、没有图库页面，这正是许多人怀念旧版匿名 Imgur 的原因。"
      }
    ],
    "ctaTitle": "立即将您的图片转换为链接",
    "ctaBody": "上传 JPG、PNG、WebP、GIF 或 SVG，几秒钟内即可获得直链。无需注册，无压缩，无水印。",
    "ctaButton": "立即上传图片",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  }
} as LandingContentMap;
