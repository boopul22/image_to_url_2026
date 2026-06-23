import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL for HTML — Get Direct <img> Tag Links",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Image embed code generator" },
      { "pageKey": "image-url-for-chatgpt", "label": "Image URL for ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Image URL for WhatsApp" },
      { "pageKey": "image-to-url-vercel", "label": "Image hosting for Vercel" }
    ],
    "metaDescription": "Convert any image to a direct URL you can drop straight into an HTML <img> tag. Permanent links, fast CDN, no signup, works in any framework or CMS.",
    "schemaName": "Image to URL Converter for HTML",
    "schemaDescription": "Turn any image into a direct URL ready for the src attribute of an HTML img tag.",
    "badge": "HTML Image URLs",
    "h1Pre": "Image to URL",
    "h1Highlight": "for HTML.",
    "intro": "Upload your image and get a clean, direct link you can paste straight into an HTML img tag. The URL works in any web page, any framework, any CMS, and it stays online for good.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drop a JPG, PNG, WebP, GIF or SVG into the uploader. Files up to 10MB on a free account."
      },
      {
        "title": "Copy the Direct URL",
        "body": "We hand you a clean URL that ends in the file extension. No gallery wrappers, no redirects, no tracking."
      },
      {
        "title": "Paste It Into Your HTML",
        "body": "Drop the link into the src attribute of an <img> tag and ship. The image renders the second the page loads."
      }
    ],
    "whyTitle": "Built for HTML Developers",
    "whyItems": [
      {
        "title": "Clean src Attribute",
        "body": "The URL points straight at the image file, so your <img> tag works without scripts, redirects, or extra requests."
      },
      {
        "title": "Works With Every Framework",
        "body": "React, Vue, Svelte, Astro, plain HTML, WordPress, Webflow. If it accepts a URL, it works."
      },
      {
        "title": "Hotlink Friendly",
        "body": "We allow embedding on any domain. No referer checks, no broken images on third-party sites."
      },
      {
        "title": "Permanent Links",
        "body": "Your URL stays live indefinitely. Pages and READMEs you wrote years ago will keep their visuals."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "How do I add an image to HTML using a URL?",
        "a": "Upload your image, copy the URL we generate, and paste it into the src attribute of an <img> tag, like this: <img src=\"https://imagetourl.cloud/your-image.jpg\" alt=\"description\">. That is everything you need."
      },
      {
        "q": "Will the link work in any browser?",
        "a": "Yes. The URL points at a static image file served from a global CDN, so every browser, mobile device, and email client can load it."
      },
      {
        "q": "Can I use these URLs on a website I do not own?",
        "a": "Yes. Hotlinking is allowed across any domain. The link works in forums, comment sections, README files, and embedded widgets."
      },
      {
        "q": "Do the URLs include the file extension?",
        "a": "Yes. URLs end in .jpg, .png, .webp, .gif or .svg. That keeps your <img> tag valid and lets browsers detect the format without an extra HEAD request."
      },
      {
        "q": "Is the service free for HTML developers?",
        "a": "The core upload-and-share workflow is free for everyone, with no signup. Free accounts unlock larger files and a personal dashboard."
      }
    ],
    "ctaTitle": "Get an HTML-ready image URL",
    "ctaBody": "Upload your file and grab a direct link in seconds. Drop it in your <img> tag and you are done.",
    "ctaButton": "Upload Image"
  },
  "es": {
    "metaTitle": "Imagen a URL para HTML — Enlaces directos para etiqueta <img> | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Generador de código incrustado de imagen" },
      { "pageKey": "image-url-for-chatgpt", "label": "URL de imagen para ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "URL de imagen para WhatsApp" },
      { "pageKey": "image-to-url-vercel", "label": "Hosting de imágenes para Vercel" }
    ],
    "metaDescription": "Convierte cualquier imagen en una URL directa que puedes pegar en una etiqueta HTML <img>. Sin registro, enlaces permanentes, entrega rápida vía CDN.",
    "schemaName": "Conversor de Imagen a URL para HTML",
    "schemaDescription": "Convierte cualquier imagen en una URL directa lista para el atributo src de una etiqueta img de HTML.",
    "badge": "URLs de imagen para HTML",
    "h1Pre": "Imagen a URL",
    "h1Highlight": "para HTML.",
    "intro": "Sube tu imagen y obtén un enlace directo y limpio que puedes pegar en cualquier etiqueta img de HTML. La URL funciona en cualquier página web, framework o CMS, y permanece en línea para siempre.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Arrastra un JPG, PNG, WebP, GIF o SVG al cargador. Archivos de hasta 10MB con una cuenta gratuita."
      },
      {
        "title": "Copia la URL directa",
        "body": "Te entregamos una URL limpia que termina con la extensión del archivo. Sin envoltorios de galería, sin redirecciones, sin rastreo."
      },
      {
        "title": "Pégala en tu HTML",
        "body": "Coloca el enlace en el atributo src de una etiqueta <img> y listo. La imagen aparece en cuanto carga la página."
      }
    ],
    "whyTitle": "Hecho para desarrolladores HTML",
    "whyItems": [
      {
        "title": "Atributo src limpio",
        "body": "La URL apunta directamente al archivo de imagen, así tu etiqueta <img> funciona sin scripts, redirecciones ni peticiones extra."
      },
      {
        "title": "Funciona con todos los frameworks",
        "body": "React, Vue, Svelte, Astro, HTML puro, WordPress, Webflow. Si acepta una URL, funciona."
      },
      {
        "title": "Compatible con hotlinking",
        "body": "Permitimos incrustarlas en cualquier dominio. Sin verificación de referer, sin imágenes rotas en sitios externos."
      },
      {
        "title": "Enlaces permanentes",
        "body": "Tu URL permanece activa por tiempo indefinido. Las páginas y READMEs que escribiste hace años conservan sus imágenes."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cómo añado una imagen a HTML usando una URL?",
        "a": "Sube tu imagen, copia la URL que generamos y pégala en el atributo src de una etiqueta <img>, así: <img src=\"https://imagetourl.cloud/your-image.jpg\" alt=\"description\">. Eso es todo lo que necesitas."
      },
      {
        "q": "¿El enlace funcionará en cualquier navegador?",
        "a": "Sí. La URL apunta a un archivo de imagen estático servido desde una CDN global, así que cualquier navegador, dispositivo móvil o cliente de correo puede cargarlo."
      },
      {
        "q": "¿Puedo usar estas URLs en un sitio que no es mío?",
        "a": "Sí. El hotlinking está permitido en cualquier dominio. El enlace funciona en foros, secciones de comentarios, archivos README y widgets incrustados."
      },
      {
        "q": "¿Las URLs incluyen la extensión del archivo?",
        "a": "Sí. Las URLs terminan en .jpg, .png, .webp, .gif o .svg. Esto mantiene válida tu etiqueta <img> y permite a los navegadores detectar el formato sin una petición HEAD adicional."
      },
      {
        "q": "¿El servicio es gratis para desarrolladores HTML?",
        "a": "El flujo principal de subir y compartir es gratis para todos, sin registro. Las cuentas gratuitas desbloquean archivos más grandes y un panel personal."
      }
    ],
    "ctaTitle": "Obtén una URL de imagen lista para HTML",
    "ctaBody": "Sube tu archivo y consigue un enlace directo en segundos. Ponlo en tu etiqueta <img> y listo.",
    "ctaButton": "Subir imagen"
  },
  "fr": {
    "metaTitle": "Image vers URL pour HTML — Liens directs pour balise <img> | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Générateur de code intégré d'image" },
      { "pageKey": "image-url-for-chatgpt", "label": "URL d'image pour ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "URL d'image pour WhatsApp" },
      { "pageKey": "image-to-url-vercel", "label": "Hébergement d'images pour Vercel" }
    ],
    "metaDescription": "Convertissez n'importe quelle image en URL directe à coller dans une balise HTML <img>. Sans inscription, liens permanents, livraison rapide via CDN.",
    "schemaName": "Convertisseur Image vers URL pour HTML",
    "schemaDescription": "Transformez n'importe quelle image en URL directe prête pour l'attribut src d'une balise img HTML.",
    "badge": "URL d'image pour HTML",
    "h1Pre": "Image vers URL",
    "h1Highlight": "pour HTML.",
    "intro": "Téléversez votre image et obtenez un lien direct et propre à coller dans n'importe quelle balise img HTML. L'URL fonctionne sur toute page web, tout framework, tout CMS, et reste en ligne pour de bon.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléversez votre image",
        "body": "Glissez un JPG, PNG, WebP, GIF ou SVG dans l'outil. Fichiers jusqu'à 10 Mo avec un compte gratuit."
      },
      {
        "title": "Copiez l'URL directe",
        "body": "Vous recevez une URL propre qui se termine par l'extension du fichier. Pas d'habillage de galerie, pas de redirection, pas de tracking."
      },
      {
        "title": "Collez-la dans votre HTML",
        "body": "Placez le lien dans l'attribut src d'une balise <img> et c'est parti. L'image s'affiche dès le chargement de la page."
      }
    ],
    "whyTitle": "Conçu pour les développeurs HTML",
    "whyItems": [
      {
        "title": "Attribut src propre",
        "body": "L'URL pointe directement vers le fichier image, donc votre balise <img> fonctionne sans script, redirection ou requête supplémentaire."
      },
      {
        "title": "Compatible avec tous les frameworks",
        "body": "React, Vue, Svelte, Astro, HTML brut, WordPress, Webflow. S'il accepte une URL, ça marche."
      },
      {
        "title": "Compatible hotlink",
        "body": "Nous autorisons l'intégration sur n'importe quel domaine. Pas de vérification du referer, pas d'images cassées sur les sites tiers."
      },
      {
        "title": "Liens permanents",
        "body": "Votre URL reste active indéfiniment. Les pages et READMEs écrits il y a des années garderont leurs visuels."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment ajouter une image en HTML avec une URL ?",
        "a": "Téléversez votre image, copiez l'URL générée et collez-la dans l'attribut src d'une balise <img>, comme ceci : <img src=\"https://imagetourl.cloud/your-image.jpg\" alt=\"description\">. C'est tout ce qu'il vous faut."
      },
      {
        "q": "Le lien fonctionnera-t-il sur tous les navigateurs ?",
        "a": "Oui. L'URL pointe vers un fichier image statique servi depuis un CDN global, donc tout navigateur, appareil mobile ou client mail peut le charger."
      },
      {
        "q": "Puis-je utiliser ces URLs sur un site qui ne m'appartient pas ?",
        "a": "Oui. Le hotlinking est autorisé sur tous les domaines. Le lien fonctionne sur les forums, les commentaires, les fichiers README et les widgets intégrés."
      },
      {
        "q": "Les URLs incluent-elles l'extension du fichier ?",
        "a": "Oui. Les URLs se terminent en .jpg, .png, .webp, .gif ou .svg. Cela garde votre balise <img> valide et permet aux navigateurs de détecter le format sans requête HEAD supplémentaire."
      },
      {
        "q": "Le service est-il gratuit pour les développeurs HTML ?",
        "a": "Le flux de base téléverser-et-partager est gratuit pour tout le monde, sans inscription. Les comptes gratuits débloquent des fichiers plus volumineux et un tableau de bord personnel."
      }
    ],
    "ctaTitle": "Obtenez une URL d'image prête pour HTML",
    "ctaBody": "Téléversez votre fichier et récupérez un lien direct en quelques secondes. Mettez-le dans votre balise <img> et c'est terminé.",
    "ctaButton": "Téléverser une image"
  },
  "de": {
    "metaTitle": "Bild zu URL für HTML — Direkte Links für <img>-Tag | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Bild-Embed-Code-Generator" },
      { "pageKey": "image-url-for-chatgpt", "label": "Bild-URL für ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Bild-URL für WhatsApp" },
      { "pageKey": "image-to-url-vercel", "label": "Bild-Hosting für Vercel" }
    ],
    "metaDescription": "Wandle jedes Bild in eine direkte URL um, die du direkt in ein HTML <img>-Tag einfügen kannst. Keine Anmeldung, dauerhafte Links, schnelle CDN-Auslieferung.",
    "schemaName": "Bild-zu-URL-Konverter für HTML",
    "schemaDescription": "Verwandle jedes Bild in eine direkte URL, bereit für das src-Attribut eines HTML img-Tags.",
    "badge": "HTML-Bild-URLs",
    "h1Pre": "Bild zu URL",
    "h1Highlight": "für HTML.",
    "intro": "Lade dein Bild hoch und erhalte einen sauberen, direkten Link, den du in jedes HTML-img-Tag einfügen kannst. Die URL funktioniert auf jeder Webseite, in jedem Framework, in jedem CMS, und bleibt dauerhaft online.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehe ein JPG, PNG, WebP, GIF oder SVG in den Uploader. Dateien bis zu 10 MB mit einem kostenlosen Konto."
      },
      {
        "title": "Direkte URL kopieren",
        "body": "Du bekommst eine saubere URL, die mit der Dateiendung endet. Keine Galerie-Hülle, keine Weiterleitungen, kein Tracking."
      },
      {
        "title": "In dein HTML einfügen",
        "body": "Setze den Link in das src-Attribut eines <img>-Tags und ab geht's. Das Bild erscheint, sobald die Seite lädt."
      }
    ],
    "whyTitle": "Für HTML-Entwickler gebaut",
    "whyItems": [
      {
        "title": "Sauberes src-Attribut",
        "body": "Die URL zeigt direkt auf die Bilddatei, dein <img>-Tag funktioniert also ohne Skripte, Weiterleitungen oder zusätzliche Anfragen."
      },
      {
        "title": "Funktioniert mit jedem Framework",
        "body": "React, Vue, Svelte, Astro, reines HTML, WordPress, Webflow. Wenn es eine URL akzeptiert, funktioniert es."
      },
      {
        "title": "Hotlink-freundlich",
        "body": "Wir erlauben das Einbetten auf jeder Domain. Keine Referer-Prüfung, keine kaputten Bilder auf fremden Seiten."
      },
      {
        "title": "Dauerhafte Links",
        "body": "Deine URL bleibt unbegrenzt aktiv. Seiten und READMEs, die du vor Jahren geschrieben hast, behalten ihre Bilder."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie füge ich ein Bild über eine URL in HTML ein?",
        "a": "Lade dein Bild hoch, kopiere die generierte URL und füge sie in das src-Attribut eines <img>-Tags ein, so: <img src=\"https://imagetourl.cloud/your-image.jpg\" alt=\"description\">. Mehr brauchst du nicht."
      },
      {
        "q": "Funktioniert der Link in jedem Browser?",
        "a": "Ja. Die URL zeigt auf eine statische Bilddatei, die über ein globales CDN ausgeliefert wird, sodass jeder Browser, jedes mobile Gerät und jeder E-Mail-Client sie laden kann."
      },
      {
        "q": "Kann ich diese URLs auf einer Website verwenden, die mir nicht gehört?",
        "a": "Ja. Hotlinking ist auf allen Domains erlaubt. Der Link funktioniert in Foren, Kommentarbereichen, README-Dateien und eingebetteten Widgets."
      },
      {
        "q": "Enthalten die URLs die Dateiendung?",
        "a": "Ja. URLs enden auf .jpg, .png, .webp, .gif oder .svg. Das hält dein <img>-Tag gültig und erlaubt Browsern, das Format ohne zusätzliche HEAD-Anfrage zu erkennen."
      },
      {
        "q": "Ist der Dienst für HTML-Entwickler kostenlos?",
        "a": "Der Kern-Workflow Hochladen-und-Teilen ist für alle kostenlos, ohne Anmeldung. Kostenlose Konten schalten größere Dateien und ein persönliches Dashboard frei."
      }
    ],
    "ctaTitle": "Hol dir eine HTML-fertige Bild-URL",
    "ctaBody": "Datei hochladen und in Sekunden einen direkten Link bekommen. In dein <img>-Tag einfügen und fertig.",
    "ctaButton": "Bild hochladen"
  },
  "ja": {
    "metaTitle": "HTML 用の画像 URL 変換 — <img> タグ向け直接リンク | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "画像埋め込みコード生成" },
      { "pageKey": "image-url-for-chatgpt", "label": "ChatGPT用画像URL" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "WhatsApp用画像URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel用画像ホスティング" }
    ],
    "metaDescription": "画像を HTML の <img> タグにそのまま貼り付けられる直接 URL に変換します。登録不要、永続リンク、高速 CDN 配信。",
    "schemaName": "HTML 用画像 URL 変換ツール",
    "schemaDescription": "画像を HTML の img タグの src 属性にそのまま使える直接 URL に変換します。",
    "badge": "HTML 画像 URL",
    "h1Pre": "画像 URL 変換",
    "h1Highlight": "HTML 用。",
    "intro": "画像をアップロードすると、HTML の img タグにそのまま貼り付けられる直接リンクが手に入ります。どんな Web ページ、フレームワーク、CMS でも動作し、リンクは永久に残ります。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "JPG、PNG、WebP、GIF、SVG をアップローダーにドロップしてください。無料アカウントなら 10MB まで対応。"
      },
      {
        "title": "直接 URL をコピー",
        "body": "ファイル拡張子で終わるクリーンな URL をお渡しします。ギャラリーラッパー、リダイレクト、トラッキングは一切ありません。"
      },
      {
        "title": "HTML に貼り付け",
        "body": "リンクを <img> タグの src 属性に入れて公開するだけ。ページが読み込まれた瞬間に画像が表示されます。"
      }
    ],
    "whyTitle": "HTML 開発者のために作りました",
    "whyItems": [
      {
        "title": "クリーンな src 属性",
        "body": "URL は画像ファイルを直接指すため、<img> タグはスクリプトもリダイレクトも追加リクエストもなしで動きます。"
      },
      {
        "title": "あらゆるフレームワークに対応",
        "body": "React、Vue、Svelte、Astro、素の HTML、WordPress、Webflow。URL を受け付けるなら動きます。"
      },
      {
        "title": "ホットリンク歓迎",
        "body": "どのドメインからの埋め込みも許可しています。リファラチェックなし、外部サイトでも画像が壊れません。"
      },
      {
        "title": "永続リンク",
        "body": "URL は無期限で有効です。何年も前に書いたページや README も画像が残り続けます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "URL を使って HTML に画像を追加するには？",
        "a": "画像をアップロードし、生成された URL をコピーして、<img> タグの src 属性に貼り付けます。例: <img src=\"https://imagetourl.cloud/your-image.jpg\" alt=\"description\">。これだけで完了です。"
      },
      {
        "q": "リンクはどのブラウザでも動きますか？",
        "a": "はい。URL はグローバル CDN から配信される静的画像ファイルを指しているので、どのブラウザ、モバイル端末、メールクライアントでも読み込めます。"
      },
      {
        "q": "自分のものではないサイトでも使えますか？",
        "a": "はい。ホットリンクはどのドメインでも許可されています。フォーラム、コメント欄、README ファイル、埋め込みウィジェットでも動きます。"
      },
      {
        "q": "URL に拡張子は含まれますか？",
        "a": "はい。URL は .jpg、.png、.webp、.gif、.svg で終わります。これにより <img> タグが有効に保たれ、ブラウザは追加の HEAD リクエストなしでフォーマットを判別できます。"
      },
      {
        "q": "HTML 開発者にとって無料ですか？",
        "a": "アップロードして共有する基本のワークフローは登録不要で全員無料です。無料アカウントを作るとファイルサイズの上限が増え、個人ダッシュボードも使えます。"
      }
    ],
    "ctaTitle": "HTML 用の画像 URL を取得",
    "ctaBody": "ファイルをアップロードして、数秒で直接リンクを取得。<img> タグに貼ればそれで完了です。",
    "ctaButton": "画像をアップロード"
  },
  "zh-Hans": {
    "metaTitle": "HTML 图片转 URL — 获取 <img> 标签直链 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "图片嵌入代码生成器" },
      { "pageKey": "image-url-for-chatgpt", "label": "ChatGPT 图片 URL" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "WhatsApp 图片 URL" },
      { "pageKey": "image-to-url-vercel", "label": "Vercel 图片托管" }
    ],
    "metaDescription": "将任意图片转换为可直接粘贴到 HTML <img> 标签中的直链。无需注册、永久链接、CDN 高速分发。",
    "schemaName": "HTML 图片转 URL 工具",
    "schemaDescription": "将任意图片转换为可直接用于 HTML img 标签 src 属性的直链。",
    "badge": "HTML 图片 URL",
    "h1Pre": "图片转 URL",
    "h1Highlight": "面向 HTML。",
    "intro": "上传图片即可获得一条干净的直链,可以直接粘贴到任何 HTML img 标签中。该 URL 可用于任何网页、任何框架、任何 CMS,并且永久在线。",
    "howTitle": "使用步骤",
    "steps": [
      {
        "title": "上传图片",
        "body": "将 JPG、PNG、WebP、GIF 或 SVG 拖到上传框中。免费账户支持最大 10MB。"
      },
      {
        "title": "复制直链",
        "body": "我们会给你一条以文件扩展名结尾的干净 URL。没有相册外壳、没有跳转、没有追踪。"
      },
      {
        "title": "粘贴到 HTML 中",
        "body": "将链接放进 <img> 标签的 src 属性,即可发布。页面一加载图片就会显示。"
      }
    ],
    "whyTitle": "为 HTML 开发者打造",
    "whyItems": [
      {
        "title": "干净的 src 属性",
        "body": "URL 直接指向图片文件,你的 <img> 标签无需脚本、无需跳转、无需额外请求即可工作。"
      },
      {
        "title": "兼容所有框架",
        "body": "React、Vue、Svelte、Astro、纯 HTML、WordPress、Webflow。只要接受 URL 就能用。"
      },
      {
        "title": "允许外链",
        "body": "我们允许在任何域名下嵌入。没有 referer 校验,第三方站点也不会出现裂图。"
      },
      {
        "title": "永久链接",
        "body": "URL 永久有效。多年前写的页面和 README 仍然能显示图片。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "如何用 URL 在 HTML 中添加图片?",
        "a": "上传图片,复制我们生成的 URL,粘贴到 <img> 标签的 src 属性中,例如:<img src=\"https://imagetourl.cloud/your-image.jpg\" alt=\"description\">。仅此而已。"
      },
      {
        "q": "链接在所有浏览器中都能用吗?",
        "a": "可以。URL 指向由全球 CDN 提供的静态图片文件,因此任何浏览器、移动设备和邮件客户端都能加载。"
      },
      {
        "q": "我可以在不属于自己的网站上使用这些 URL 吗?",
        "a": "可以。任何域名下都允许外链。该链接可在论坛、评论区、README 文件和嵌入小部件中使用。"
      },
      {
        "q": "URL 是否包含文件扩展名?",
        "a": "是的。URL 以 .jpg、.png、.webp、.gif 或 .svg 结尾。这样 <img> 标签保持有效,浏览器无需额外的 HEAD 请求就能识别格式。"
      },
      {
        "q": "HTML 开发者使用是否免费?",
        "a": "核心的上传和分享流程对所有人免费,无需注册。免费账户可解锁更大文件和个人面板。"
      }
    ],
    "ctaTitle": "获取 HTML 可用的图片 URL",
    "ctaBody": "上传文件,几秒内拿到直链。粘贴到 <img> 标签即可大功告成。",
    "ctaButton": "上传图片"
  },
} as LandingContentMap;
