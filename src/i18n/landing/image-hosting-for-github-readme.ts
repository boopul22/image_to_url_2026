import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for GitHub README Files | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "For Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "For eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" }
    ],
    "metaDescription": "Host images for GitHub README files with permanent URLs. Stop committing binary files to your repo for faster clones and cleaner project history.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A tool to host images for GitHub README files with permanent URLs to prevent repository bloat.",
    "badge": "DEVELOPER TOOLS",
    "h1Pre": "Image Hosting for GitHub",
    "h1Highlight": "README files.",
    "intro": "Committing screenshots and diagrams straight into a repo feels easy until the .git folder is 200 MB and a fresh clone crawls. Upload your image here instead, copy the direct link, and drop it into your README with one line of Markdown. The file sits on a CDN, not in your git history, so the repo stays small and the README still renders the picture inline. It works the same for public and private projects, profile READMEs, wikis and issue threads.",
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
      },
      {
        "title": "One clean link for badges and banners",
        "body": "A direct https link is handy beyond the README too. Reuse the same URL for a project banner, a shields.io style badge background, or a screenshot you reference from the docs and the wiki, without copying the file into three places."
      }
    ],
    "specsTitle": "What you get at a glance",
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
        "label": "Formats",
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "Max size",
        "value": "10 MB per file"
      },
      {
        "label": "Output",
        "value": "Direct CDN link for Markdown"
      }
    ],
    "comparisonTitle": "Hosted link vs committing the image",
    "comparisonIntro": "There are a few ways to get an image into a README. They mostly differ on what happens to your repo size, how fast a clone runs, and whether the link stays put. Here is how the common options compare.",
    "comparisonColumns": [
      "Approach",
      "Repo size",
      "Clone speed",
      "Update without a commit",
      "Stable link"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Hosted link (ImageToURL)",
          "No impact",
          "Unaffected",
          "Yes, swap the file at the URL",
          "Yes, forever when signed in"
        ]
      },
      {
        "cells": [
          "Commit image into the repo",
          "Grows with every edit",
          "Slower over time",
          "No, needs a new commit",
          "Yes, but it bloats history"
        ]
      },
      {
        "cells": [
          "Paste into an issue (githubusercontent)",
          "No impact",
          "Unaffected",
          "No",
          "Can break if the issue changes"
        ]
      },
      {
        "cells": [
          "Git LFS",
          "Smaller checkout",
          "Needs LFS set up",
          "No, needs a new commit",
          "Yes, within storage quotas"
        ]
      },
      {
        "cells": [
          "Imgur link",
          "No impact",
          "Unaffected",
          "Yes",
          "Account-tied, no anon since 2023"
        ]
      }
    ],
    "useCasesTitle": "Where a hosted image link helps",
    "useCasesIntro": "Once your picture has a direct link, it slots into the spots a README usually needs:",
    "useCases": [
      {
        "title": "Banner and logo at the top",
        "body": "Put a project banner or logo above the title with ![](url). HTML works too, so <img src=\"url\" width=\"480\"> keeps it from filling the whole page."
      },
      {
        "title": "Screenshots and demo GIFs",
        "body": "Show the tool actually running. A GIF or a few screenshots make a README far more convincing than a wall of text, and they never touch your clone size."
      },
      {
        "title": "Profile READMEs, wikis and issues",
        "body": "The same link drops into your github.com/username profile README, wiki pages, and issue or pull request comments wherever GitHub renders Markdown."
      }
    ],
    "sections": [
      {
        "heading": "Markdown vs HTML for README images",
        "body": "GitHub READMEs are Markdown, and the plain image syntax is ![alt text](https://your-image-url). That embeds the picture inline as long as the URL points straight at the file. GitHub Markdown also accepts a bit of HTML, which is the trick for sizing and alignment: <img src=\"https://your-image-url\" width=\"480\" alt=\"app screenshot\">. Use the Markdown form for simple images and the <img> tag when you need a fixed width, a banner that does not span the full column, or a centered logo. Both read the same direct link, so you upload once and pick whichever syntax fits."
      },
      {
        "heading": "Why keep binary images out of the repo",
        "body": "Git stores history, and it cannot delta-compress binaries the way it does text. Edit a 1 MB screenshot ten times and you can carry close to 10 MB of dead weight that every clone and fetch has to pull, forever. The README still looks identical either way. Linking to an external file keeps the working tree to code and docs, so pull request diffs stay readable and new contributors get going in seconds. If you already committed big images, an external link is the cheap fix going forward, and history rewriting tools handle the cleanup if you want the old copies gone."
      },
      {
        "heading": "Will the links stay up?",
        "body": "Files are served over HTTPS from a CDN, so they load independently of GitHub and work in private repos too. One honest note on lifetime: anonymous uploads stay live for a couple of weeks at minimum and are cleared on a monthly cleanup, which is fine for a quick issue screenshot. For a README image you want around long term, sign in for free and choose keep forever so the link does not vanish. Either way, keep the original file in hand, and remember anonymous uploads are public to anyone with the URL."
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
        "q": "What is the exact Markdown syntax for a README image?",
        "a": "Use ![alt text](https://your-image-url). The alt text shows if the image fails to load and helps screen readers. As long as the URL points straight at the file, GitHub renders it inline."
      },
      {
        "q": "How do I set the width or center an image in a README?",
        "a": "GitHub Markdown allows HTML, so use an <img> tag: <img src=\"https://your-image-url\" width=\"480\" alt=\"screenshot\">. To center it, wrap it in <p align=\"center\">...</p>. Plain ![](url) has no size control."
      },
      {
        "q": "Can I host a demo GIF for my README?",
        "a": "Yes. GIF is supported up to 10 MB. Upload it, copy the link, and embed it the same way as a static image. A short demo GIF often explains a project faster than paragraphs of text."
      },
      {
        "q": "Do the links expire?",
        "a": "Anonymous uploads last a couple of weeks at minimum and are cleared on a monthly cleanup, which suits a quick issue screenshot. For a README image you want around long term, sign in for free and choose keep forever. Keep the original file as a backup either way."
      },
      {
        "q": "What happens if the host has an outage?",
        "a": "Files are served from a CDN replicated across edge locations, so brief issues are rare and load is spread out. No external host is guaranteed forever, though, so for critical project images sign in and keep the original so you can re-upload if needed."
      },
      {
        "q": "What image formats and sizes are supported?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10 MB per file. The link ends in the real extension, so it embeds in Markdown exactly like the original file would."
      },
      {
        "q": "Does it compress or resize my image?",
        "a": "No. You get back the same file at full quality, with no re-compression and no watermark. A logo or diagram stays crisp in the rendered README."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Keep your repos lean and your READMEs sharp",
    "ctaBody": "Upload screenshots and diagrams to get Markdown-ready links without any repo bloat. No sign-up, no compression, no watermark.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para archivos README de GitHub | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Para Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Para eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" }
    ],
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
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Pour Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Pour eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" }
    ],
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
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Für Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Für eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" }
    ],
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
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Discord用" },
      { "pageKey": "image-hosting-for-ebay", "label": "eBay用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" }
    ],
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
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "用于 Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "用于 eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" }
    ],
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
} as LandingContentMap;
