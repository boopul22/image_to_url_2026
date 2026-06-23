import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for Notion Pages — Permanent URLs | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "For Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "For eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" }
    ],
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
  "es": {
    "metaTitle": "Alojamiento de imágenes para páginas de Notion — URLs permanentes | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Para Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Para eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" }
    ],
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
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Pour Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Pour eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" }
    ],
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
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Für Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Für eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" }
    ],
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
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Discord用" },
      { "pageKey": "image-hosting-for-ebay", "label": "eBay用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" }
    ],
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
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "用于 Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "用于 eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" }
    ],
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
} as LandingContentMap;
