import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Embed Code Generator - HTML, Markdown, BBCode | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-url-for-chatgpt", "label": "Image URL for ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Image URL for WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "Image URL for HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Image hosting for Vercel" }
    ],
    "metaDescription": "Upload an image and get ready-to-use embed codes in HTML, BBCode, and Markdown. Free embed code generator for websites, forums, and documentation.",
    "schemaName": "Image Embed Code Generator",
    "schemaDescription": "Upload an image and get ready-to-use embed codes in HTML, BBCode, and Markdown.",
    "badge": "EMBED CODES",
    "h1Pre": "Image Embed Code",
    "h1Highlight": "Generator.",
    "intro": "Host an image here and you get the link wrapped in ready-to-paste embed code, not just a bare URL. The same upload gives you an HTML img tag for websites and email, Markdown for GitHub and docs, and BBCode for older forums. Each snippet has a copy button, so you grab the one your platform speaks and paste it straight in. Files up to 50 MB, no account, no watermark, full quality kept.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag and drop any image file or click to browse. We support JPG, PNG, WebP, GIF, and SVG formats."
      },
      {
        "title": "Choose Your Format",
        "body": "Pick the embed code format you need: HTML for websites, BBCode for forums, or Markdown for docs and READMEs."
      },
      {
        "title": "Copy & Paste",
        "body": "Click to copy the embed code to your clipboard, then paste it wherever you need it. The image displays inline automatically."
      }
    ],
    "whyTitle": "Perfect For",
    "whyItems": [
      {
        "title": "Bloggers",
        "body": "Embed images in blog posts with proper HTML tags. Works with WordPress, Ghost, Hugo, and every blogging platform."
      },
      {
        "title": "Forum Users",
        "body": "Get BBCode image tags ready to paste into any forum post. Your images display inline without external links."
      },
      {
        "title": "Developers",
        "body": "Markdown image syntax for README files, pull request descriptions, and project documentation on GitHub and GitLab."
      },
      {
        "title": "Wiki Editors",
        "body": "Add images to wiki articles, knowledge bases, and collaborative documentation with the right embed format."
      }
    ],
    "faqTitle": "Image embed code FAQ",
    "faqs": [
      {
        "q": "What embed code formats do I get?",
        "a": "Three: an HTML img tag for websites and email, Markdown for GitHub, Reddit, Notion and docs, and BBCode for phpBB-style forums. You also get the plain direct URL on its own, in case you just need the link to drop into Discord or a chat box."
      },
      {
        "q": "What does the HTML embed code look like?",
        "a": "It is a standard image tag pointing at your hosted file, for example <img src='https://imagetourl.cloud/abc123.jpg' alt=''>. Add a few words to the alt attribute for accessibility and SEO, and the browser renders the picture inline wherever the tag sits."
      },
      {
        "q": "How do I embed an image in Markdown?",
        "a": "Use the image syntax ![alt](https://imagetourl.cloud/abc123.jpg). The exclamation mark is what tells Markdown to show the image instead of a clickable text link. This is the format GitHub READMEs, Reddit, Notion and most static-site generators expect."
      },
      {
        "q": "What is BBCode and where do I use it?",
        "a": "BBCode is the old forum markup that wraps a URL in square-bracket tags, like [img]https://imagetourl.cloud/abc123.jpg[/img]. phpBB, vBulletin, XenForo and many gaming or hobby forums still run on it. Paste that snippet into a post and the board renders your image inline."
      },
      {
        "q": "Which format should I pick?",
        "a": "Match it to where you are pasting. HTML for a website, email template or anything you control the page source of. Markdown for GitHub, Reddit, Notion and documentation. BBCode for forums that use [img] tags. If none of those apply, the plain direct URL works in Discord, Slack and chat apps that auto-preview links."
      },
      {
        "q": "Can I edit the generated embed code?",
        "a": "Yes. The snippets are plain text, so you can fill in the alt attribute, add a width or height, or wrap the HTML tag in a link before you paste. The image URL itself stays the same no matter how you format around it."
      },
      {
        "q": "Why is the alt text empty in the HTML snippet?",
        "a": "It ships as alt='' so the tag is valid out of the box, but you should add a short description of the image. Good alt text helps screen readers and gives search engines context. Decorative images can keep the empty alt on purpose."
      },
      {
        "q": "What image formats and sizes are supported?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 50 MB per file. The hosted link ends in the real extension, so the embed code points at a genuine image file and renders the same way the original would."
      },
      {
        "q": "Do the embedded images stay up?",
        "a": "Anonymous uploads stay live until the monthly storage cleanup, so you get a couple of weeks at least, often longer. If you need an embed that never breaks, create a free account and choose 'keep forever' when you upload. Keep your own copy of the file either way."
      },
      {
        "q": "Does the embed code work in email?",
        "a": "The HTML img tag does. Most email clients load remote images over HTTPS, though some hide them until the reader clicks 'show images', which is normal email behaviour rather than a problem with the link."
      }
    ],
    "ctaTitle": "Generate your embed code now",
    "ctaBody": "Upload an image and get HTML, BBCode, or Markdown embed codes instantly, with no signup required.",
    "ctaButton": "Upload Now",
    "specsTitle": "Embed code generator at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input formats", "value": "JPG, PNG, WebP, GIF, SVG" },
      { "label": "Max size", "value": "50 MB" },
      { "label": "Embed formats", "value": "HTML, Markdown, BBCode" }
    ],
    "comparisonTitle": "Embed formats compared",
    "comparisonIntro": "The same hosted image can be pasted as four different snippets. They all point at the same file, but each one is written for a different kind of platform. Here is when to reach for each.",
    "comparisonColumns": [
      "Format",
      "Syntax example",
      "Where it works",
      "Renders inline",
      "Best for"
    ],
    "comparisonRows": [
      {
        "cells": [
          "HTML img",
          "<img src='url' alt=''>",
          "Websites, email, web apps",
          "Yes",
          "Pages you control the source of"
        ]
      },
      {
        "cells": [
          "Markdown",
          "![alt](url)",
          "GitHub, Reddit, Notion, docs",
          "Yes",
          "READMEs and documentation"
        ]
      },
      {
        "cells": [
          "BBCode",
          "[img]url[/img]",
          "phpBB, vBulletin, XenForo",
          "Yes",
          "Older and hobby forums"
        ]
      },
      {
        "cells": [
          "Direct URL",
          "https://imagetourl.cloud/abc.jpg",
          "Discord, Slack, chat apps",
          "Auto-preview",
          "Chat and quick sharing"
        ]
      }
    ],
    "useCasesTitle": "Where the embed codes get used",
    "useCasesIntro": "Pick the snippet that matches your destination and the image just appears:",
    "useCases": [
      {
        "title": "Blogs and websites",
        "body": "Drop the HTML img tag into a post, a template or a site builder. Set the alt text, and the picture loads inline on WordPress, Ghost, Hugo or hand-written HTML."
      },
      {
        "title": "Docs and READMEs",
        "body": "Paste the Markdown snippet into a GitHub README, a GitLab wiki, a Notion page or an Obsidian note. The exclamation-mark syntax renders the image rather than a text link."
      },
      {
        "title": "Forums and communities",
        "body": "Older boards still run on BBCode. The [img] snippet shows your screenshot or graphic inline in phpBB, vBulletin and XenForo threads without an attachment."
      }
    ],
    "sections": [
      {
        "heading": "HTML, Markdown and BBCode: what is the difference?",
        "body": "All three wrap the same direct link, they just use different punctuation that different platforms understand. HTML uses an img tag, like <img src='https://imagetourl.cloud/abc123.jpg' alt=''>, and is read by browsers and email clients. Markdown uses ![alt](https://imagetourl.cloud/abc123.jpg), which GitHub, Reddit and Notion turn into a picture. BBCode uses [img]https://imagetourl.cloud/abc123.jpg[/img] and is the markup classic forums expect. An image embed code generator hands you all three so you do not have to remember the syntax or type it by hand."
      },
      {
        "heading": "Why a hosted link beats pasting the image",
        "body": "Embed code needs a public web address to point at. A file sitting on your laptop has no URL, so the snippet has nothing to load. Hosting the image first gives it a direct https address ending in the real extension, which is exactly what an img tag, a Markdown image or a [img] tag needs. Upload once and the same link feeds every format. Because the file lives on a global CDN, it loads quickly for readers anywhere instead of depending on your own machine being online."
      },
      {
        "heading": "Always add alt text",
        "body": "The HTML and Markdown snippets include an alt slot for a reason. Alt text is the short description a screen reader announces and a browser shows if the image fails to load. It also gives search engines a clue about the picture. The generated code ships with an empty alt so it is valid immediately, but a few honest words describing the image is better for accessibility and SEO. Leave alt empty only when the image is purely decorative and adds nothing for a reader who cannot see it."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Generador de código para incrustar imágenes — HTML, BBCode y Markdown | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-url-for-chatgpt", "label": "URL de imagen para ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "URL de imagen para WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "URL de imagen para HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Hosting de imágenes para Vercel" }
    ],
    "metaDescription": "Sube una imagen y obtén códigos listos para usar en HTML, BBCode y Markdown. Generador gratuito de códigos de incrustación para sitios web, foros y documentación.",
    "schemaName": "Generador de código para incrustar imágenes",
    "schemaDescription": "Sube una imagen y obtén códigos listos para usar en HTML, BBCode y Markdown.",
    "badge": "CÓDIGOS DE INCRUSTACIÓN",
    "h1Pre": "Generador de código para",
    "h1Highlight": "incrustar imágenes.",
    "intro": "Sube una imagen y obtén al instante códigos en HTML, BBCode y Markdown. Copia, pega y listo.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra y suelta cualquier archivo de imagen o haz clic para buscar. Admitimos formatos JPG, PNG, WebP, GIF y SVG."
      },
      {
        "title": "Elige tu formato",
        "body": "Selecciona el formato de código que necesites: HTML para sitios web, BBCode para foros o Markdown para documentos y archivos README."
      },
      {
        "title": "Copia y pega",
        "body": "Haz clic para copiar el código al portapapeles y pégalo donde lo necesites. La imagen se mostrará automáticamente en línea."
      }
    ],
    "whyTitle": "Perfecto para",
    "whyItems": [
      {
        "title": "Blogueros",
        "body": "Incrusta imágenes en publicaciones de blog con etiquetas HTML adecuadas. Funciona con WordPress, Ghost, Hugo y cualquier plataforma de blogs."
      },
      {
        "title": "Usuarios de foros",
        "body": "Obtén etiquetas de imagen BBCode listas para pegar en cualquier foro. Tus imágenes se mostrarán en línea sin enlaces externos."
      },
      {
        "title": "Desarrolladores",
        "body": "Sintaxis de imagen Markdown para archivos README, descripciones de pull requests y documentación de proyectos en GitHub y GitLab."
      },
      {
        "title": "Editores de Wiki",
        "body": "Añade imágenes a artículos de wiki, bases de conocimiento y documentación colaborativa con el formato de incrustación correcto."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Qué formatos de código genera ImageToURL?",
        "a": "ImageToURL genera códigos en tres formatos: HTML (etiquetas img para sitios web), BBCode (para foros como phpBB y vBulletin) y Markdown (para GitHub, GitLab, sitios de documentación y aplicaciones de notas)."
      },
      {
        "q": "¿Puedo personalizar el código de incrustación?",
        "a": "Los códigos generados utilizan la URL de tu imagen con formato estándar. Puedes modificar libremente el código para añadir clases personalizadas, texto alternativo, dimensiones o estilos antes de pegarlo en tu proyecto."
      },
      {
        "q": "¿Qué foros admiten la incrustación de imágenes mediante BBCode?",
        "a": "La mayoría de los foros tradicionales admiten BBCode, incluidos phpBB, vBulletin, XenForo, Discourse y muchos otros. Las etiquetas de imagen BBCode utilizan la sintaxis [img] que estas plataformas reconocen y renderizan como imágenes en línea."
      },
      {
        "q": "¿Funcionará siempre la imagen incrustada?",
        "a": "Sí. ImageToURL proporciona URLs de imagen permanentes respaldadas por una CDN global. Una vez incrustada, tu imagen se cargará de forma fiable desde cualquier ubicación. Las URLs nunca caducan, por lo que tus imágenes seguirán funcionando indefinidamente."
      },
      {
        "q": "¿Puedo usar el código Markdown en archivos README de GitHub?",
        "a": "Por supuesto. Nuestra sintaxis de imagen Markdown funciona perfectamente en archivos README de GitHub, wikis de GitLab, páginas de Notion, notas de Obsidian y cualquier otra plataforma que renderice Markdown."
      }
    ],
    "ctaTitle": "Genera tu código de incrustación ahora",
    "ctaBody": "Sube una imagen y obtén códigos HTML, BBCode o Markdown al instante, sin necesidad de registro.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Générateur de code embed image — HTML, BBCode & Markdown | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-url-for-chatgpt", "label": "URL d'image pour ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "URL d'image pour WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "URL d'image pour HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Hébergement d'images pour Vercel" }
    ],
    "metaDescription": "Téléchargez une image et obtenez des codes d'intégration prêts à l'emploi en HTML, BBCode et Markdown. Générateur gratuit pour sites web, forums et documentation.",
    "schemaName": "Générateur de code embed image",
    "schemaDescription": "Téléchargez une image et obtenez des codes d'intégration prêts à l'emploi en HTML, BBCode et Markdown.",
    "badge": "CODES EMBED",
    "h1Pre": "Générateur de code",
    "h1Highlight": "embed image.",
    "intro": "Téléchargez une image et obtenez instantanément des codes d'intégration en HTML, BBCode et Markdown. Copiez, collez, c'est prêt.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Glissez-déposez n'importe quel fichier image ou cliquez pour parcourir. Nous prenons en charge les formats JPG, PNG, WebP, GIF et SVG."
      },
      {
        "title": "Choisissez votre format",
        "body": "Sélectionnez le format de code souhaité : HTML pour les sites web, BBCode pour les forums, ou Markdown pour la documentation et les fichiers README."
      },
      {
        "title": "Copiez & Collez",
        "body": "Cliquez pour copier le code dans votre presse-papier, puis collez-le où vous le souhaitez. L'image s'affiche automatiquement en ligne."
      }
    ],
    "whyTitle": "Parfait pour",
    "whyItems": [
      {
        "title": "Blogueurs",
        "body": "Intégrez des images dans vos articles avec les balises HTML appropriées. Compatible avec WordPress, Ghost, Hugo et toutes les plateformes de blog."
      },
      {
        "title": "Utilisateurs de forums",
        "body": "Obtenez des balises image BBCode prêtes à être insérées dans vos messages. Vos images s'affichent directement sans liens externes."
      },
      {
        "title": "Développeurs",
        "body": "Syntaxe image Markdown pour les fichiers README, les descriptions de pull requests et la documentation de projets sur GitHub et GitLab."
      },
      {
        "title": "Éditeurs de Wiki",
        "body": "Ajoutez des images à vos articles wiki, bases de connaissances et documentations collaboratives avec le format d'intégration adapté."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Quels formats de code embed ImageToURL génère-t-il ?",
        "a": "ImageToURL génère des codes dans trois formats : HTML (balises img pour sites web), BBCode (pour les forums comme phpBB et vBulletin), et Markdown (pour GitHub, GitLab, sites de documentation et applications de notes)."
      },
      {
        "q": "Puis-je personnaliser le code généré ?",
        "a": "Les codes générés utilisent l'URL de votre image avec un formatage standard. Vous pouvez librement modifier le code pour ajouter des classes personnalisées, du texte alt, des dimensions ou du style avant de l'insérer dans votre projet."
      },
      {
        "q": "Quels forums supportent l'intégration d'images BBCode ?",
        "a": "La plupart des forums traditionnels supportent le BBCode, notamment phpBB, vBulletin, XenForo, Discourse, et bien d'autres. Les balises BBCode utilisent la syntaxe [img] reconnue par ces plateformes."
      },
      {
        "q": "L'image intégrée fonctionnera-t-elle toujours ?",
        "a": "Oui. ImageToURL fournit des URLs d'images permanentes hébergées sur un CDN mondial. Une fois intégrée, votre image se chargera de manière fiable depuis n'importe quel endroit. Les URLs n'expirent jamais."
      },
      {
        "q": "Puis-je utiliser le code Markdown dans les fichiers README GitHub ?",
        "a": "Absolument. Notre syntaxe Markdown fonctionne parfaitement dans les fichiers README GitHub, les wikis GitLab, les pages Notion, les notes Obsidian et toute autre plateforme utilisant le Markdown."
      }
    ],
    "ctaTitle": "Générez votre code embed maintenant",
    "ctaBody": "Téléchargez une image et obtenez instantanément des codes HTML, BBCode ou Markdown, sans inscription requise.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bild-Embed-Code-Generator — HTML, BBCode & Markdown | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-url-for-chatgpt", "label": "Bild-URL für ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Bild-URL für WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "Bild-URL für HTML" },
      { "pageKey": "image-to-url-vercel", "label": "Bild-Hosting für Vercel" }
    ],
    "metaDescription": "Laden Sie ein Bild hoch und erhalten Sie sofort einsatzbereite Embed-Codes in HTML, BBCode und Markdown. Kostenloser Generator für Websites, Foren und Dokumentationen.",
    "schemaName": "Bild-Embed-Code-Generator",
    "schemaDescription": "Laden Sie ein Bild hoch und erhalten Sie sofort einsatzbereite Embed-Codes in HTML, BBCode und Markdown.",
    "badge": "EMBED-CODES",
    "h1Pre": "Bild-Embed-Code",
    "h1Highlight": "Generator.",
    "intro": "Laden Sie ein Bild hoch und erhalten Sie sofort Embed-Codes in HTML, BBCode und Markdown. Kopieren, einfügen, fertig.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie eine Bilddatei per Drag-and-Drop hinein oder klicken Sie zum Auswählen. Wir unterstützen JPG, PNG, WebP, GIF und SVG."
      },
      {
        "title": "Format wählen",
        "body": "Wählen Sie das benötigte Format: HTML für Websites, BBCode für Foren oder Markdown für Dokumentationen und READMEs."
      },
      {
        "title": "Kopieren & Einfügen",
        "body": "Klicken Sie, um den Code in die Zwischenablage zu kopieren, und fügen Sie ihn dort ein, wo Sie ihn benötigen. Das Bild wird automatisch inline angezeigt."
      }
    ],
    "whyTitle": "Perfekt für",
    "whyItems": [
      {
        "title": "Blogger",
        "body": "Binden Sie Bilder mit korrekten HTML-Tags in Blogbeiträge ein. Funktioniert mit WordPress, Ghost, Hugo und jeder anderen Blogging-Plattform."
      },
      {
        "title": "Foren-Nutzer",
        "body": "Erhalten Sie BBCode-Bild-Tags, die sofort in Forenbeiträge eingefügt werden können. Ihre Bilder werden ohne externe Links direkt angezeigt."
      },
      {
        "title": "Entwickler",
        "body": "Markdown-Bildsyntax für README-Dateien, Pull-Request-Beschreibungen und Projektdokumentationen auf GitHub und GitLab."
      },
      {
        "title": "Wiki-Editoren",
        "body": "Fügen Sie Bilder mit dem passenden Embed-Format zu Wiki-Artikeln, Wissensdatenbanken und kollaborativen Dokumentationen hinzu."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Welche Embed-Code-Formate generiert ImageToURL?",
        "a": "ImageToURL generiert Embed-Codes in drei Formaten: HTML (img-Tags für Websites), BBCode (für Foren wie phpBB und vBulletin) und Markdown (für GitHub, GitLab, Dokumentationsseiten und Notiz-Apps)."
      },
      {
        "q": "Kann ich den Embed-Code anpassen?",
        "a": "Die generierten Codes verwenden Ihre Bild-URL mit Standardformatierung. Sie können den Code vor dem Einfügen frei bearbeiten, um eigene Klassen, Alt-Texte, Dimensionen oder Styles hinzuzufügen."
      },
      {
        "q": "Welche Foren unterstützen BBCode-Bildeinbettung?",
        "a": "Die meisten traditionellen Foren unterstützen BBCode, darunter phpBB, vBulletin, XenForo, Discourse und viele andere. BBCode-Bild-Tags verwenden die [img]-Syntax, die von diesen Plattformen erkannt und als Inline-Bild gerendert wird."
      },
      {
        "q": "Funktioniert das eingebettete Bild dauerhaft?",
        "a": "Ja. ImageToURL bietet permanente Bild-URLs, die über ein globales CDN bereitgestellt werden. Sobald eingebettet, wird Ihr Bild zuverlässig von jedem Standort geladen. Die URLs laufen nicht ab, sodass Ihre eingebetteten Bilder dauerhaft funktionieren."
      },
      {
        "q": "Kann ich den Markdown-Code in GitHub README-Dateien verwenden?",
        "a": "Absolut. Unsere Markdown-Bildsyntax funktioniert perfekt in GitHub README-Dateien, GitLab-Wikis, Notion-Seiten, Obsidian-Notizen und jeder anderen Plattform, die Markdown rendert."
      }
    ],
    "ctaTitle": "Generieren Sie jetzt Ihren Embed-Code",
    "ctaBody": "Laden Sie ein Bild hoch und erhalten Sie sofort HTML-, BBCode- oder Markdown-Codes – ganz ohne Registrierung.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "画像埋め込みコード生成ツール — HTML, BBCode, Markdown | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-url-for-chatgpt", "label": "ChatGPT用画像URL" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "WhatsApp用画像URL" },
      { "pageKey": "image-to-url-for-html", "label": "HTML用画像URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel用画像ホスティング" }
    ],
    "metaDescription": "画像をアップロードして、HTML、BBCode、Markdown形式の埋め込みコードを即座に取得。Webサイト、掲示板、ドキュメント用の無料埋め込みコード生成ツール。",
    "schemaName": "画像埋め込みコード生成ツール",
    "schemaDescription": "画像をアップロードして、HTML、BBCode、Markdown形式の埋め込みコードを即座に取得。",
    "badge": "埋め込みコード",
    "h1Pre": "画像埋め込みコード",
    "h1Highlight": "生成ツール",
    "intro": "画像をアップロードするだけで、HTML、BBCode、Markdown形式の埋め込みコードを即座に生成。コピー＆ペーストですぐに使えます。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "画像をドラッグ＆ドロップするか、クリックして選択してください。JPG、PNG、WebP、GIF、SVG形式に対応しています。"
      },
      {
        "title": "形式を選択",
        "body": "必要な形式を選びます。Webサイト用のHTML、掲示板用のBBCode、ドキュメントやREADME用のMarkdownから選択可能です。"
      },
      {
        "title": "コピー＆ペースト",
        "body": "クリックしてコードをクリップボードにコピーし、必要な場所に貼り付けてください。画像が自動的にインライン表示されます。"
      }
    ],
    "whyTitle": "こんな用途に最適",
    "whyItems": [
      {
        "title": "ブロガー",
        "body": "適切なHTMLタグでブログ記事に画像を埋め込めます。WordPress、Ghost、Hugoなど、あらゆるブログプラットフォームに対応。"
      },
      {
        "title": "掲示板ユーザー",
        "body": "掲示板投稿用のBBCodeタグを生成。外部リンクなしで画像をインライン表示できます。"
      },
      {
        "title": "開発者",
        "body": "GitHubやGitLabのREADMEファイル、プルリクエスト、プロジェクトドキュメント用のMarkdown形式に対応。"
      },
      {
        "title": "Wiki編集者",
        "body": "Wiki記事やナレッジベース、共同編集ドキュメントに最適な形式で画像を追加できます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "ImageToURLではどのような形式の埋め込みコードが生成されますか？",
        "a": "HTML（Webサイト用imgタグ）、BBCode（phpBBやvBulletinなどの掲示板用）、Markdown（GitHub、GitLab、ドキュメントサイト、メモアプリ用）の3形式に対応しています。"
      },
      {
        "q": "埋め込みコードをカスタマイズできますか？",
        "a": "生成されたコードは標準的な画像URLを使用しています。貼り付ける前に、クラス、alt属性、サイズ、スタイルなどを自由に追加・編集可能です。"
      },
      {
        "q": "BBCodeの画像埋め込みに対応している掲示板は？",
        "a": "phpBB、vBulletin、XenForo、Discourseなど、多くの伝統的な掲示板が対応しています。これらは[img]構文を使用してインライン画像として表示されます。"
      },
      {
        "q": "埋め込んだ画像は常に表示されますか？",
        "a": "はい。ImageToURLはグローバルCDNによる永続的な画像URLを提供します。一度埋め込めば、どこからでも確実に読み込まれます。URLの有効期限はないため、永続的に利用可能です。"
      },
      {
        "q": "GitHubのREADMEファイルでMarkdownコードを使えますか？",
        "a": "もちろんです。当サイトのMarkdown構文は、GitHubのREADME、GitLabのWiki、Notion、Obsidianなど、Markdownをレンダリングするあらゆるプラットフォームで完璧に動作します。"
      }
    ],
    "ctaTitle": "今すぐ埋め込みコードを生成",
    "ctaBody": "画像をアップロードするだけで、HTML、BBCode、Markdown形式のコードを即座に取得。登録不要です。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "图片嵌入代码生成器 — HTML, BBCode 和 Markdown | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-url-for-chatgpt", "label": "ChatGPT 图片 URL" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "WhatsApp 图片 URL" },
      { "pageKey": "image-to-url-for-html", "label": "HTML 图片 URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel 图片托管" }
    ],
    "metaDescription": "上传图片并获取现成的 HTML、BBCode 和 Markdown 嵌入代码。适用于网站、论坛和文档的免费嵌入代码生成器。",
    "schemaName": "图片嵌入代码生成器",
    "schemaDescription": "上传图片并获取现成的 HTML、BBCode 和 Markdown 嵌入代码。",
    "badge": "嵌入代码",
    "h1Pre": "图片嵌入代码",
    "h1Highlight": "生成器。",
    "intro": "上传图片即可立即获取 HTML、BBCode 和 Markdown 格式的嵌入代码。复制、粘贴，轻松搞定。",
    "howTitle": "使用方法",
    "steps": [
      {
        "title": "上传图片",
        "body": "拖放任意图片文件或点击浏览。我们支持 JPG、PNG、WebP、GIF 和 SVG 格式。"
      },
      {
        "title": "选择格式",
        "body": "选择您需要的嵌入代码格式：用于网站的 HTML、用于论坛的 BBCode，或用于文档和 README 的 Markdown。"
      },
      {
        "title": "复制并粘贴",
        "body": "点击即可将嵌入代码复制到剪贴板，然后粘贴到您需要的地方。图片将自动内嵌显示。"
      }
    ],
    "whyTitle": "适用场景",
    "whyItems": [
      {
        "title": "博主",
        "body": "使用标准的 HTML 标签在博客文章中嵌入图片。适用于 WordPress、Ghost、Hugo 等所有博客平台。"
      },
      {
        "title": "论坛用户",
        "body": "获取可直接粘贴到论坛帖子的 BBCode 图片标签。您的图片将直接内嵌显示，无需跳转外部链接。"
      },
      {
        "title": "开发者",
        "body": "为 GitHub 和 GitLab 上的 README 文件、合并请求描述及项目文档提供 Markdown 图片语法。"
      },
      {
        "title": "Wiki 编辑者",
        "body": "使用正确的嵌入格式将图片添加到 Wiki 文章、知识库和协作文档中。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "ImageToURL 生成哪些嵌入代码格式？",
        "a": "ImageToURL 生成三种格式的嵌入代码：HTML（用于网站的 img 标签）、BBCode（用于 phpBB 和 vBulletin 等论坛）以及 Markdown（用于 GitHub、GitLab、文档网站和笔记应用）。"
      },
      {
        "q": "我可以自定义嵌入代码吗？",
        "a": "生成的嵌入代码使用您的图片 URL 和标准格式。在粘贴到项目之前，您可以自由修改生成的代码，以添加自定义类、alt 文本、尺寸或样式。"
      },
      {
        "q": "哪些论坛支持 BBCode 图片嵌入？",
        "a": "大多数传统论坛都支持 BBCode，包括 phpBB、vBulletin、XenForo、Discourse 等。BBCode 图片标签使用这些平台能够识别并渲染为内嵌图片的 [img] 语法。"
      },
      {
        "q": "嵌入的图片会一直有效吗？",
        "a": "是的。ImageToURL 提供由全球 CDN 支持的永久图片 URL。一旦嵌入，您的图片将从任何位置可靠加载。这些 URL 永不过期，因此您嵌入的图片将无限期保持有效。"
      },
      {
        "q": "我可以在 GitHub README 文件中使用 Markdown 代码吗？",
        "a": "当然可以。我们的 Markdown 图片语法非常适合 GitHub README 文件、GitLab Wiki、Notion 页面、Obsidian 笔记以及任何其他支持 Markdown 渲染的平台。"
      }
    ],
    "ctaTitle": "立即生成您的嵌入代码",
    "ctaBody": "上传图片并立即获取 HTML、BBCode 或 Markdown 嵌入代码，无需注册。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
