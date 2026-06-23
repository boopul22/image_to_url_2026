import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to Link — Free Direct Image Link Generator | ImageToURL",
    "metaDescription": "Turn any image to link free with no signup. Get a direct, hotlinkable link that renders as the image in Discord, Reddit, and forums. Permanent and anonymous.",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-to-url", "label": "Image to URL converter" },
      { "pageKey": "image-embed-code-generator", "label": "Image embed code generator" },
      { "pageKey": "direct-image-link", "label": "Direct image link" },
      { "pageKey": "image-url-generator", "label": "Image URL generator" }
    ],
    "schemaName": "Image to Link Generator",
    "schemaDescription": "Convert any image to a direct, shareable link that loads as the image itself in Discord, Reddit, forums, and chat. Free, no signup, no compression.",
    "badge": "IMAGE TO LINK",
    "h1Pre": "Image to Link — ",
    "h1Highlight": "a direct link that shows your image",
    "intro": "This image to link tool gives you a direct, hotlinkable URL that loads as the picture itself, not a webpage or a gallery page. Paste it into Discord, Reddit, a forum post, or a chat and people see the image inline. No signup, no watermark, nothing to click through.",
    "howTitle": "How the image to link tool works",
    "steps": [
      {
        "title": "Upload your image",
        "body": "Drag in a JPG, PNG, WebP, or GIF up to 10MB, or click to browse. There is no account to create and no email to hand over."
      },
      {
        "title": "Copy the direct link",
        "body": "We store the file on a global CDN and hand back a direct link in a second or two. It points straight at the image file, so it embeds cleanly wherever you drop it."
      },
      {
        "title": "Paste it anywhere",
        "body": "Drop the link into Discord, Reddit, a forum, an email, or a doc. Sites that auto-embed will render it as the actual image instead of a plain attachment."
      }
    ],
    "whyTitle": "Why use this image to link generator",
    "whyItems": [
      {
        "title": "Links that render as the image",
        "body": "The whole point of an image link generator is a URL that ends in the file, so Discord, Reddit, and most forums show the picture inline rather than a link card or download prompt."
      },
      {
        "title": "Anonymous and free",
        "body": "No signup, no login wall. Imgur quietly pulled anonymous uploads and started breaking older links, so people came looking for something steadier. Here you just upload and copy."
      },
      {
        "title": "No compression, fast worldwide",
        "body": "Your image is served at full quality with no re-encoding, off a CDN with edge nodes around the world, so it loads quickly no matter where the viewer is."
      }
    ],
    "useCasesTitle": "Where an image to link converter helps",
    "useCasesIntro": "A direct image link works in the places that expect a real file URL:",
    "useCases": [
      {
        "title": "Discord and chat",
        "body": "Paste the link in a Discord channel or DM and it expands into the image preview. Handy for memes, screenshots, and reference shots you do not want to attach as files."
      },
      {
        "title": "Reddit and forums",
        "body": "Many subreddits and old-school forums accept a direct image link and inline it for you, instead of forcing readers onto a separate gallery or hosting page."
      },
      {
        "title": "Signatures, bug reports, and docs",
        "body": "Use the link in a forum signature, a GitHub issue, a Google Doc, or an email. Because it loads as an image, the reader sees it without downloading anything."
      }
    ],
    "faqTitle": "Image to link FAQ",
    "faqs": [
      {
        "q": "How do I turn an image into a link?",
        "a": "Upload your image in the box above. We generate a direct link in a couple of seconds that you can copy and paste anywhere. No signup is needed."
      },
      {
        "q": "What is an image link generator?",
        "a": "It is a tool that takes your uploaded picture and gives back a direct URL pointing at the file. That link is what you share, and supported sites render it as the image."
      },
      {
        "q": "Will the link show the image in Discord, Reddit, or forums?",
        "a": "Yes. The link points straight at the image file, so Discord, most subreddits, and typical forums embed it as the picture rather than showing a plain attachment or a gallery page."
      },
      {
        "q": "Is it free and anonymous?",
        "a": "Both. There is no charge, no account, and no email required. Upload, copy your link, and go."
      },
      {
        "q": "Is the link permanent?",
        "a": "Your link is permanent and shareable for normal use. Files are kept on the CDN and then eventually cleared, so it is meant for sharing rather than long-term archival storage."
      },
      {
        "q": "What is the difference between an image link and an image URL?",
        "a": "In practice they are the same thing. Both are a direct link that loads the image file itself. People say \"image to link\" when they specifically want a URL that embeds as the picture in Discord, Reddit, and forums."
      }
    ],
    "ctaTitle": "Get your image to link now",
    "ctaBody": "Upload a JPG, PNG, WebP, or GIF and copy a direct link that shows the image. Free, no signup, no watermark.",
    "ctaButton": "Upload Image Now"
  },
  "es": {
    "metaTitle": "Imagen a enlace — Generador gratuito de enlaces directos de imágenes | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-to-url", "label": "Convertidor de imagen a URL" },
      { "pageKey": "image-embed-code-generator", "label": "Generador de código incrustado de imagen" },
      { "pageKey": "direct-image-link", "label": "Enlace directo a imagen" },
      { "pageKey": "image-url-generator", "label": "Generador de URL de imagen" }
    ],
    "metaDescription": "Convierte cualquier imagen a enlace gratis y sin registro. Obtén un enlace directo y hotlinkable que se muestra como la imagen en Discord, Reddit y foros. Permanente y anónimo.",
    "schemaName": "Generador de imagen a enlace",
    "schemaDescription": "Convierte cualquier imagen en un enlace directo y compartible que se carga como la imagen misma en Discord, Reddit, foros y chats. Gratis, sin registro, sin compresión.",
    "badge": "IMAGEN A ENLACE",
    "h1Pre": "Imagen a enlace — ",
    "h1Highlight": "un enlace directo que muestra tu imagen",
    "intro": "Esta herramienta de imagen a enlace te proporciona una URL directa y hotlinkable que se carga como la imagen misma, no como una página web o una galería. Pégala en Discord, Reddit, un foro o un chat y los usuarios verán la imagen directamente. Sin registro, sin marcas de agua, sin clics innecesarios.",
    "howTitle": "Cómo funciona la herramienta de imagen a enlace",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra un archivo JPG, PNG, WebP o GIF de hasta 10MB, o haz clic para buscarlo. No hay cuentas que crear ni correos electrónicos que proporcionar."
      },
      {
        "title": "Copia el enlace directo",
        "body": "Almacenamos el archivo en una CDN global y te entregamos un enlace directo en un segundo o dos. Apunta directamente al archivo de imagen, por lo que se incrusta limpiamente donde lo pegues."
      },
      {
        "title": "Pégalo en cualquier lugar",
        "body": "Suelta el enlace en Discord, Reddit, un foro, un correo electrónico o un documento. Los sitios que permiten auto-incrustación lo mostrarán como la imagen real en lugar de un simple archivo adjunto."
      }
    ],
    "whyTitle": "Por qué usar este generador de imagen a enlace",
    "whyItems": [
      {
        "title": "Enlaces que se muestran como la imagen",
        "body": "El objetivo principal de un generador de enlaces de imagen es obtener una URL que termine en el archivo, para que Discord, Reddit y la mayoría de los foros muestren la imagen directamente en lugar de una tarjeta de enlace o una solicitud de descarga."
      },
      {
        "title": "Anónimo y gratuito",
        "body": "Sin registro, sin muros de inicio de sesión. Imgur eliminó silenciosamente las subidas anónimas y comenzó a romper enlaces antiguos, por lo que la gente buscaba algo más estable. Aquí solo subes y copias."
      },
      {
        "title": "Sin compresión, rápido en todo el mundo",
        "body": "Tu imagen se sirve con calidad completa sin re-codificación, desde una CDN con nodos en todo el mundo, por lo que se carga rápidamente sin importar dónde esté el espectador."
      }
    ],
    "faqTitle": "Preguntas frecuentes sobre imagen a enlace",
    "faqs": [
      {
        "q": "¿Cómo convierto una imagen en un enlace?",
        "a": "Sube tu imagen en el cuadro de arriba. Generamos un enlace directo en un par de segundos que puedes copiar y pegar en cualquier lugar. No se requiere registro."
      },
      {
        "q": "¿Qué es un generador de enlaces de imagen?",
        "a": "Es una herramienta que toma tu imagen subida y te devuelve una URL directa que apunta al archivo. Ese enlace es lo que compartes, y los sitios compatibles lo muestran como la imagen."
      },
      {
        "q": "¿El enlace mostrará la imagen en Discord, Reddit o foros?",
        "a": "Sí. El enlace apunta directamente al archivo de imagen, por lo que Discord, la mayoría de los subreddits y los foros típicos lo incrustan como la imagen en lugar de mostrar un archivo adjunto simple o una página de galería."
      },
      {
        "q": "¿Es gratis y anónimo?",
        "a": "Ambas cosas. No hay costo, no hay cuenta y no se requiere correo electrónico. Sube, copia tu enlace y listo."
      },
      {
        "q": "¿El enlace es permanente?",
        "a": "Tu enlace es permanente y compartible para un uso normal. Los archivos se mantienen en la CDN y eventualmente se limpian, por lo que está destinado a compartir en lugar de almacenamiento de archivo a largo plazo."
      },
      {
        "q": "¿Cuál es la diferencia entre un enlace de imagen y una URL de imagen?",
        "a": "En la práctica son lo mismo. Ambos son un enlace directo que carga el archivo de imagen en sí. La gente dice \"imagen a enlace\" cuando específicamente quieren una URL que se incruste como la imagen en Discord, Reddit y foros."
      }
    ],
    "ctaTitle": "Obtén tu enlace de imagen ahora",
    "ctaBody": "Sube un JPG, PNG, WebP o GIF y copia un enlace directo que muestre la imagen. Gratis, sin registro, sin marcas de agua.",
    "ctaButton": "Subir imagen ahora"
  },
  "fr": {
    "metaTitle": "Image vers lien — Générateur gratuit de liens directs d'images | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-to-url", "label": "Convertisseur d'image en URL" },
      { "pageKey": "image-embed-code-generator", "label": "Générateur de code intégré d'image" },
      { "pageKey": "direct-image-link", "label": "Lien d'image direct" },
      { "pageKey": "image-url-generator", "label": "Générateur d'URL d'image" }
    ],
    "metaDescription": "Transformez n'importe quelle image en lien gratuitement et sans inscription. Obtenez un lien direct et partageable qui s'affiche comme une image sur Discord, Reddit et les forums. Permanent et anonyme.",
    "schemaName": "Générateur d'image vers lien",
    "schemaDescription": "Convertissez n'importe quelle image en un lien direct et partageable qui se charge comme l'image elle-même sur Discord, Reddit, les forums et les chats. Gratuit, sans inscription, sans compression.",
    "badge": "IMAGE VERS LIEN",
    "h1Pre": "Image vers lien — ",
    "h1Highlight": "un lien direct qui affiche votre image",
    "intro": "Cet outil de conversion d'image en lien vous fournit une URL directe et partageable qui se charge comme l'image elle-même, et non comme une page web ou une galerie. Collez-la dans Discord, Reddit, un forum ou un chat et les utilisateurs verront l'image directement. Aucune inscription, aucun filigrane, rien sur quoi cliquer.",
    "howTitle": "Comment fonctionne l'outil d'image vers lien",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Faites glisser un fichier JPG, PNG, WebP ou GIF jusqu'à 10 Mo, ou cliquez pour parcourir vos dossiers. Aucun compte à créer et aucune adresse e-mail à fournir."
      },
      {
        "title": "Copiez le lien direct",
        "body": "Nous stockons le fichier sur un CDN mondial et vous fournissons un lien direct en une seconde ou deux. Il pointe directement vers le fichier image, ce qui permet une intégration propre partout où vous le déposez."
      },
      {
        "title": "Collez-le n'importe où",
        "body": "Déposez le lien dans Discord, Reddit, un forum, un e-mail ou un document. Les sites qui intègrent automatiquement les liens l'afficheront comme l'image réelle au lieu d'une simple pièce jointe."
      }
    ],
    "whyTitle": "Pourquoi utiliser ce générateur d'image vers lien",
    "whyItems": [
      {
        "title": "Des liens qui s'affichent comme des images",
        "body": "L'intérêt principal d'un générateur de liens d'image est d'obtenir une URL qui se termine par le format du fichier, afin que Discord, Reddit et la plupart des forums affichent l'image directement au lieu d'une carte de lien ou d'une invite de téléchargement."
      },
      {
        "title": "Anonyme et gratuit",
        "body": "Pas d'inscription, pas de connexion obligatoire. Imgur a discrètement supprimé les téléchargements anonymes et a commencé à briser les anciens liens, poussant les utilisateurs à chercher une solution plus stable. Ici, vous téléchargez et copiez simplement."
      },
      {
        "title": "Aucune compression, rapide dans le monde entier",
        "body": "Votre image est servie en pleine qualité sans réencodage, via un CDN avec des nœuds de périphérie dans le monde entier, pour un chargement rapide quel que soit l'endroit où se trouve le spectateur."
      }
    ],
    "faqTitle": "FAQ sur l'image vers lien",
    "faqs": [
      {
        "q": "Comment transformer une image en lien ?",
        "a": "Téléchargez votre image dans la zone ci-dessus. Nous générons un lien direct en quelques secondes que vous pouvez copier et coller n'importe où. Aucune inscription n'est nécessaire."
      },
      {
        "q": "Qu'est-ce qu'un générateur de lien d'image ?",
        "a": "C'est un outil qui prend votre image téléchargée et vous donne une URL directe pointant vers le fichier. Ce lien est ce que vous partagez, et les sites compatibles l'affichent comme l'image elle-même."
      },
      {
        "q": "Le lien affichera-t-il l'image sur Discord, Reddit ou les forums ?",
        "a": "Oui. Le lien pointe directement vers le fichier image, donc Discord, la plupart des subreddits et les forums classiques l'intègrent comme une image plutôt que d'afficher une simple pièce jointe ou une page de galerie."
      },
      {
        "q": "Est-ce gratuit et anonyme ?",
        "a": "Les deux. Il n'y a aucun frais, aucun compte et aucun e-mail requis. Téléchargez, copiez votre lien et c'est tout."
      },
      {
        "q": "Le lien est-il permanent ?",
        "a": "Votre lien est permanent et partageable pour une utilisation normale. Les fichiers sont conservés sur le CDN puis éventuellement effacés, il est donc destiné au partage plutôt qu'à l'archivage à long terme."
      },
      {
        "q": "Quelle est la différence entre un lien d'image et une URL d'image ?",
        "a": "En pratique, c'est la même chose. Les deux sont des liens directs qui chargent le fichier image lui-même. Les gens disent \"image vers lien\" lorsqu'ils veulent spécifiquement une URL qui s'intègre comme une image sur Discord, Reddit et les forums."
      }
    ],
    "ctaTitle": "Obtenez votre lien d'image maintenant",
    "ctaBody": "Téléchargez un JPG, PNG, WebP ou GIF et copiez un lien direct qui affiche l'image. Gratuit, sans inscription, sans filigrane.",
    "ctaButton": "Télécharger l'image maintenant"
  },
  "de": {
    "metaTitle": "Bild in Link — Kostenloser Generator für direkte Bild-Links | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-to-url", "label": "Bild-zu-URL-Konverter" },
      { "pageKey": "image-embed-code-generator", "label": "Bild-Embed-Code-Generator" },
      { "pageKey": "direct-image-link", "label": "Direkter Bildlink" },
      { "pageKey": "image-url-generator", "label": "Bild-URL-Generator" }
    ],
    "metaDescription": "Verwandeln Sie jedes Bild kostenlos und ohne Registrierung in einen Link. Erhalten Sie einen direkten, hotlink-fähigen Link, der in Discord, Reddit und Foren als Bild angezeigt wird. Permanent und anonym.",
    "schemaName": "Bild-in-Link-Generator",
    "schemaDescription": "Konvertieren Sie jedes Bild in einen direkten, teilbaren Link, der in Discord, Reddit, Foren und Chats direkt als Bild geladen wird. Kostenlos, ohne Registrierung, ohne Komprimierung.",
    "badge": "BILD IN LINK",
    "h1Pre": "Bild in Link — ",
    "h1Highlight": "ein direkter Link, der Ihr Bild anzeigt",
    "intro": "Dieses Tool zur Bild-in-Link-Umwandlung liefert Ihnen eine direkte, hotlink-fähige URL, die das Bild selbst lädt – keine Webseite oder Galerie-Seite. Fügen Sie den Link in Discord, Reddit, einen Forenbeitrag oder einen Chat ein, und das Bild wird direkt angezeigt. Keine Registrierung, kein Wasserzeichen, kein lästiges Klicken.",
    "howTitle": "So funktioniert das Bild-in-Link-Tool",
    "steps": [
      {
        "title": "Laden Sie Ihr Bild hoch",
        "body": "Ziehen Sie ein JPG, PNG, WebP oder GIF bis zu 10 MB per Drag-and-Drop hinein oder klicken Sie zum Auswählen. Es ist kein Konto erforderlich und Sie müssen keine E-Mail-Adresse angeben."
      },
      {
        "title": "Kopieren Sie den direkten Link",
        "body": "Wir speichern die Datei auf einem globalen CDN und stellen Ihnen innerhalb von Sekunden einen direkten Link bereit. Er verweist direkt auf die Bilddatei, sodass er überall sauber eingebettet wird."
      },
      {
        "title": "Fügen Sie ihn überall ein",
        "body": "Posten Sie den Link in Discord, Reddit, einem Forum, einer E-Mail oder einem Dokument. Seiten mit Auto-Embed-Funktion zeigen das Bild direkt an, statt nur einen Anhang zu verlinken."
      }
    ],
    "whyTitle": "Warum dieser Bild-in-Link-Generator?",
    "whyItems": [
      {
        "title": "Links, die als Bild angezeigt werden",
        "body": "Der Sinn eines Bild-Link-Generators ist eine URL, die auf die Datei selbst endet. So zeigen Discord, Reddit und die meisten Foren das Bild direkt an, statt nur eine Link-Vorschau oder einen Download-Button."
      },
      {
        "title": "Anonym und kostenlos",
        "body": "Keine Registrierung, kein Login-Zwang. Da Imgur anonyme Uploads eingeschränkt und ältere Links deaktiviert hat, suchen viele Nutzer nach einer stabileren Lösung. Hier laden Sie einfach hoch und kopieren den Link."
      },
      {
        "title": "Keine Komprimierung, weltweit schnell",
        "body": "Ihr Bild wird in voller Qualität ohne erneute Enkodierung über ein CDN mit Edge-Nodes weltweit bereitgestellt, sodass es überall schnell lädt."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen (FAQ)",
    "faqs": [
      {
        "q": "Wie wandle ich ein Bild in einen Link um?",
        "a": "Laden Sie Ihr Bild im obigen Feld hoch. Wir generieren in wenigen Sekunden einen direkten Link, den Sie kopieren und überall einfügen können. Eine Registrierung ist nicht erforderlich."
      },
      {
        "q": "Was ist ein Bild-Link-Generator?",
        "a": "Es ist ein Tool, das Ihr hochgeladenes Bild nimmt und eine direkte URL zur Datei zurückgibt. Diesen Link teilen Sie, und unterstützte Plattformen zeigen das Bild direkt an."
      },
      {
        "q": "Wird das Bild in Discord, Reddit oder Foren angezeigt?",
        "a": "Ja. Der Link verweist direkt auf die Bilddatei, sodass Discord, die meisten Subreddits und Foren es als Bild einbetten, anstatt nur einen Anhang oder eine Galerie-Seite anzuzeigen."
      },
      {
        "q": "Ist es kostenlos und anonym?",
        "a": "Beides. Es gibt keine Kosten, kein Konto und keine E-Mail-Pflicht. Hochladen, Link kopieren, fertig."
      },
      {
        "q": "Ist der Link permanent?",
        "a": "Ihr Link ist für den normalen Gebrauch permanent und teilbar. Die Dateien werden auf dem CDN gespeichert und später bereinigt; das Tool ist also für das Teilen gedacht, nicht für die langfristige Archivierung."
      },
      {
        "q": "Was ist der Unterschied zwischen einem Bild-Link und einer Bild-URL?",
        "a": "In der Praxis ist es dasselbe. Beides sind direkte Links, die die Bilddatei selbst laden. Nutzer sagen \"Bild in Link\", wenn sie speziell eine URL möchten, die in Discord, Reddit und Foren als Bild eingebettet wird."
      }
    ],
    "ctaTitle": "Erstellen Sie jetzt Ihren Bild-Link",
    "ctaBody": "Laden Sie ein JPG, PNG, WebP oder GIF hoch und kopieren Sie einen direkten Link, der das Bild anzeigt. Kostenlos, ohne Registrierung, ohne Wasserzeichen.",
    "ctaButton": "Jetzt Bild hochladen"
  },
  "ja": {
    "metaTitle": "画像リンク変換 — 無料の直接画像リンク生成ツール | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-to-url", "label": "画像→URL変換" },
      { "pageKey": "image-embed-code-generator", "label": "画像埋め込みコード生成" },
      { "pageKey": "direct-image-link", "label": "直接画像リンク" },
      { "pageKey": "image-url-generator", "label": "画像URL生成" }
    ],
    "metaDescription": "登録不要で、どんな画像も無料でリンクに変換。Discord、Reddit、掲示板で画像として直接表示されるホットリンク用URLを取得できます。永続的かつ匿名で利用可能です。",
    "schemaName": "画像リンク生成ツール",
    "schemaDescription": "画像をDiscord、Reddit、掲示板、チャットで直接表示される共有リンクに変換します。登録不要、圧縮なしの無料ツールです。",
    "badge": "画像リンク変換",
    "h1Pre": "画像リンク変換 — ",
    "h1Highlight": "画像が直接表示されるリンクを作成",
    "intro": "この画像リンク変換ツールを使えば、Webページやギャラリーページではなく、画像ファイルそのものを読み込む直接的なホットリンク用URLを取得できます。Discord、Reddit、掲示板、チャットに貼り付けるだけで、画像がインラインで表示されます。登録や透かし、クリックの手間は一切ありません。",
    "howTitle": "画像リンク変換ツールの使い方",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "最大10MBまでのJPG、PNG、WebP、GIFファイルをドラッグ＆ドロップするか、クリックして選択してください。アカウント作成やメールアドレスの入力は不要です。"
      },
      {
        "title": "直接リンクをコピー",
        "body": "ファイルはグローバルCDNに保存され、数秒で直接リンクが生成されます。画像ファイルに直接アクセスするため、どこに貼り付けてもきれいに埋め込まれます。"
      },
      {
        "title": "どこにでも貼り付け",
        "body": "Discord、Reddit、掲示板、メール、ドキュメントなどにリンクを貼り付けてください。自動埋め込みに対応したサイトであれば、単なる添付ファイルではなく画像として表示されます。"
      }
    ],
    "whyTitle": "この画像リンク生成ツールが選ばれる理由",
    "whyItems": [
      {
        "title": "画像として表示されるリンク",
        "body": "画像リンク生成ツールの最大の利点は、ファイルで終わるURLを提供することです。これにより、Discord、Reddit、多くの掲示板で、リンクカードやダウンロードボタンではなく、画像そのものがインラインで表示されます。"
      },
      {
        "title": "匿名かつ無料",
        "body": "登録やログインは不要です。Imgurが匿名アップロードを制限し古いリンクが機能しなくなったため、より安定したサービスを求めるユーザーに最適です。アップロードしてコピーするだけです。"
      },
      {
        "title": "圧縮なし、世界中で高速表示",
        "body": "画像は再エンコードなしのフル品質で提供されます。世界中にエッジノードを持つCDNを使用しているため、どこからアクセスしても高速に読み込まれます。"
      }
    ],
    "faqTitle": "画像リンク変換に関するよくある質問",
    "faqs": [
      {
        "q": "画像をリンクに変換するにはどうすればいいですか？",
        "a": "上のボックスに画像をアップロードしてください。数秒で直接リンクが生成されるので、それをコピーしてどこにでも貼り付けられます。登録は不要です。"
      },
      {
        "q": "画像リンク生成ツールとは何ですか？",
        "a": "アップロードされた画像に対して、そのファイルに直接アクセスできるURLを発行するツールです。そのリンクを共有することで、対応サイト上で画像として表示させることができます。"
      },
      {
        "q": "Discord、Reddit、掲示板で画像は表示されますか？",
        "a": "はい。リンクは画像ファイルに直接つながっているため、Discordや多くのRedditサブコミュニティ、一般的な掲示板では、添付ファイルやギャラリーページではなく画像として埋め込まれます。"
      },
      {
        "q": "無料かつ匿名ですか？",
        "a": "はい、どちらも無料です。料金やアカウント、メールアドレスは一切不要です。アップロードしてリンクをコピーするだけで完了です。"
      },
      {
        "q": "リンクは永続的ですか？",
        "a": "リンクは通常の利用において永続的かつ共有可能です。ファイルはCDNに保存されますが、長期間のアーカイブ保存ではなく、共有を目的としています。"
      },
      {
        "q": "画像リンクと画像URLの違いは何ですか？",
        "a": "実質的に同じものです。どちらも画像ファイルそのものを読み込む直接リンクを指します。DiscordやRedditなどで画像として埋め込みたい場合に、「画像リンク変換」という言葉がよく使われます。"
      }
    ],
    "ctaTitle": "今すぐ画像リンクを作成",
    "ctaBody": "JPG、PNG、WebP、GIFをアップロードして、画像が表示される直接リンクをコピーしましょう。無料、登録不要、透かしなしです。",
    "ctaButton": "今すぐ画像をアップロード"
  },
  "zh-Hans": {
    "metaTitle": "图片转链接 — 免费直接图片链接生成器 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-to-url", "label": "图片转 URL 转换器" },
      { "pageKey": "image-embed-code-generator", "label": "图片嵌入代码生成器" },
      { "pageKey": "direct-image-link", "label": "直链" },
      { "pageKey": "image-url-generator", "label": "图片 URL 生成器" }
    ],
    "metaDescription": "无需注册，将任何图片转换为链接。获取可直接嵌入 Discord、Reddit 和论坛的直链，图片将直接显示。永久有效且完全匿名。",
    "schemaName": "图片转链接生成器",
    "schemaDescription": "将任何图片转换为直接、可分享的链接，在 Discord、Reddit、论坛和聊天中直接显示为图片。免费、无需注册、无压缩。",
    "badge": "图片转链接",
    "h1Pre": "图片转链接 — ",
    "h1Highlight": "获取直接显示图片的链接",
    "intro": "此图片转链接工具可为您提供一个直接的、可热链的 URL，它加载的是图片本身，而不是网页或相册页面。将其粘贴到 Discord、Reddit、论坛帖子或聊天中，人们即可直接看到图片。无需注册，无水印，无需点击跳转。",
    "howTitle": "图片转链接工具的工作原理",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "拖入最大 10MB 的 JPG、PNG、WebP 或 GIF 文件，或点击进行浏览。无需创建账户，也无需提供电子邮件。"
      },
      {
        "title": "复制直接链接",
        "body": "我们将文件存储在全局 CDN 上，并在几秒钟内返回一个直接链接。它直接指向图片文件，因此无论您将其粘贴到哪里，都能完美嵌入。"
      },
      {
        "title": "粘贴到任何地方",
        "body": "将链接放入 Discord、Reddit、论坛、电子邮件或文档中。支持自动嵌入的网站会将其渲染为实际图片，而不是普通的附件。"
      }
    ],
    "whyTitle": "为什么使用此图片转链接生成器",
    "whyItems": [
      {
        "title": "直接显示图片的链接",
        "body": "图片链接生成器的核心在于提供一个以文件结尾的 URL，这样 Discord、Reddit 和大多数论坛就能直接显示图片，而不是显示链接卡片或下载提示。"
      },
      {
        "title": "匿名且免费",
        "body": "无需注册，没有登录门槛。Imgur 悄悄取消了匿名上传并开始破坏旧链接，因此人们一直在寻找更稳定的替代方案。在这里，您只需上传并复制即可。"
      },
      {
        "title": "无压缩，全球高速访问",
        "body": "您的图片以全质量提供，无需重新编码，并通过全球边缘节点的 CDN 分发，因此无论观看者身在何处，加载速度都非常快。"
      }
    ],
    "faqTitle": "图片转链接常见问题解答",
    "faqs": [
      {
        "q": "如何将图片转换为链接？",
        "a": "在上面的框中上传您的图片。我们会在几秒钟内生成一个直接链接，您可以将其复制并粘贴到任何地方。无需注册。"
      },
      {
        "q": "什么是图片链接生成器？",
        "a": "这是一个将您上传的图片转换为指向该文件的直接 URL 的工具。您分享的是这个链接，支持的网站会将其渲染为图片。"
      },
      {
        "q": "链接会在 Discord、Reddit 或论坛中显示图片吗？",
        "a": "是的。该链接直接指向图片文件，因此 Discord、大多数 Subreddit 和典型论坛会将其嵌入为图片，而不是显示为普通附件或相册页面。"
      },
      {
        "q": "它是免费且匿名的吗？",
        "a": "两者都是。无需付费，无需账户，也无需电子邮件。上传、复制链接，即可使用。"
      },
      {
        "q": "链接是永久的吗？",
        "a": "您的链接在正常使用下是永久且可分享的。文件保存在 CDN 上，最终会被清理，因此它更适合用于分享，而不是长期存档。"
      },
      {
        "q": "图片链接和图片 URL 有什么区别？",
        "a": "实际上它们是一回事。两者都是直接加载图片文件本身的链接。人们说“图片转链接”时，通常是指他们想要一个能在 Discord、Reddit 和论坛中嵌入显示为图片的 URL。"
      }
    ],
    "ctaTitle": "立即获取您的图片链接",
    "ctaBody": "上传 JPG、PNG、WebP 或 GIF，并复制一个可直接显示图片的链接。免费、无需注册、无水印。",
    "ctaButton": "立即上传图片"
  }
} as LandingContentMap;
