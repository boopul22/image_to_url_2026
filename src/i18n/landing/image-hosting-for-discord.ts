import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for Discord — Permanent Embed Links",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-ebay", "label": "For eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" },
      { "pageKey": "image-hosting-for-github-readme", "label": "For GitHub" }
    ],
    "metaDescription": "Get stable image URLs for Discord embeds. Discord's own CDN links carry expiring tokens and eventually break — host here for free and get a direct link that keeps working.",
    "schemaName": "ImageToURL",
    "schemaDescription": "A free way to host images for Discord and get a direct link that stays stable in messages, bot embeds, and webhooks instead of expiring like Discord's own CDN URLs.",
    "badge": "DISCORD USERS",
    "h1Pre": "Image Hosting for Discord",
    "h1Highlight": "that never expires.",
    "intro": "Copy an image link out of Discord and paste it somewhere else, and a few weeks later it's a broken box. That's because Discord's CDN started signing attachment URLs with an expiry parameter, so those links die outside the chat. Upload your picture here instead and you get a plain direct link that ends in the real file extension. It embeds inline in channels, drops into bot embeds and webhook avatars, and keeps loading long after a copied Discord URL would have stopped.",
    "specsTitle": "Discord image hosting at a glance",
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
        "value": "10 MB"
      },
      {
        "label": "Output",
        "value": "Direct CDN link"
      }
    ],
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Drag a screenshot, meme, art piece or GIF onto the box, or click to pick one. JPG, PNG, WebP, GIF and SVG all work, up to 10MB each."
      },
      {
        "title": "Copy the direct link",
        "body": "The file lands on a fast CDN and you get a link that ends in the real extension, like .png or .gif. Nothing gets resized or watermarked, so it stays exactly as you uploaded it."
      },
      {
        "title": "Use it in Discord",
        "body": "Paste it into a channel and it shows inline, or drop it into a bot embed field or webhook config. The link doesn't carry an expiry token, so it keeps loading."
      }
    ],
    "whyTitle": "Why Discord Users Need External Hosting",
    "whyItems": [
      {
        "title": "Discord links carry an expiry",
        "body": "Around 2023 and 2024 Discord moved attachment URLs on cdn.discordapp.com and media.discordapp.net to signed links with an expiry parameter. Inside the app they refresh, but a link you copied out breaks later."
      },
      {
        "title": "Embeds keep showing the image",
        "body": "Bot embeds, webhook avatars and pinned messages that point at a copied Discord URL turn into broken placeholders once the token lapses. A stable host avoids that."
      },
      {
        "title": "Easy with bots and webhooks",
        "body": "Bots set image fields in embed JSON with a plain URL. discord.js and discord.py both want a normal https link, which is exactly what you get here, no token juggling."
      },
      {
        "title": "Full quality, no account",
        "body": "There's nothing to sign up for, and your file isn't compressed or scaled down. What you upload is what people see in the server."
      }
    ],
    "comparisonTitle": "Hosting here vs other options for Discord",
    "comparisonIntro": "Uploading straight into Discord is fine for a one-off message you'll never reuse. The trouble starts when you want that same link in a bot embed, a wiki, or another site. Here's how the common options compare for that job.",
    "comparisonColumns": [
      "Option",
      "No sign-up",
      "Link stays stable",
      "Embeds inline in Discord",
      "Safe for bot/webhook embeds",
      "Max file size"
    ],
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "Yes",
          "Weeks free, forever signed in",
          "Yes",
          "Yes",
          "10 MB"
        ]
      },
      {
        "cells": [
          "Discord attachment URL",
          "Discord account",
          "No, signed token expires",
          "Yes inside Discord",
          "Breaks over time",
          "Plan based"
        ]
      },
      {
        "cells": [
          "Imgur",
          "No (since 2023)",
          "Tied to your account",
          "Yes",
          "Yes",
          "20 MB"
        ]
      },
      {
        "cells": [
          "Catbox",
          "Yes",
          "Permanent",
          "Yes",
          "Yes",
          "200 MB"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "Yes",
          "Optional expiry",
          "Yes",
          "Yes",
          "32 MB"
        ]
      }
    ],
    "useCasesTitle": "What people host for Discord",
    "useCasesIntro": "Once an image has a direct link, it fits into the parts of Discord that need a real URL:",
    "useCases": [
      {
        "title": "Bot and embed images",
        "body": "Set the image or thumbnail field of an embed to the link. It loads the same way every time, with no expiring token to refresh."
      },
      {
        "title": "Webhook avatars and art",
        "body": "Point a webhook avatar at the URL, or post art in a channel without the link going stale a couple of weeks later."
      },
      {
        "title": "Server assets and guides",
        "body": "Source images for emoji and stickers, plus screenshots in pinned how-to messages that need to stay readable for new members."
      }
    ],
    "sections": [
      {
        "heading": "Why Discord CDN links break",
        "body": "When you upload a file to Discord, the link you can copy looks like cdn.discordapp.com or media.discordapp.net followed by a query string. Those extra parameters are a signed token with an expiry time. Inside the Discord client the link is refreshed for you, so you never notice. The moment you paste that URL somewhere else, a bot embed, a wiki, a forum post, it keeps working only until the token lapses, then it 404s. Hosting the image on a separate site sidesteps the whole problem, because the link you copy here has no token to expire."
      },
      {
        "heading": "Using image URLs in bot embeds and webhooks",
        "body": "Discord bots don't attach files for embeds; they pass a URL string. In discord.js you set EmbedBuilder().setImage(url), and in discord.py you set embed.set_image(url=...). Webhooks work the same way for the avatar and any embed image. All of them want a plain https link that returns an actual image with the right content type. A link from here fits that exactly. It ends in .png, .jpg, .gif or .webp, so the bot framework and Discord both treat it as an image and render it inline rather than as a download."
      },
      {
        "heading": "Which formats embed inline in Discord",
        "body": "PNG and JPG cover screenshots and photos. GIF keeps animation when you share it as a direct .gif link. WebP works too and is smaller for the same quality. Animated content shows in the message preview as long as the URL points right at the file. SVG is handled as a download rather than an inline preview in chat, which is normal for most platforms, so for something that needs to show in a message a raster format is the safer pick. Whatever you upload keeps its original quality, since nothing is recompressed on the way through."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why do Discord image links expire?",
        "a": "Discord changed its CDN to use signed URLs with an expiry parameter. Images uploaded directly to Discord get a link with a token baked in, and once that token lapses the link stops working in bookmarks, wikis, and external embeds. Inside the app the link is refreshed automatically, which is why it only seems to break elsewhere."
      },
      {
        "q": "Can I use these images in Discord bot embeds?",
        "a": "Yes. The link is a direct image URL served over HTTPS with the right content-type header, which is exactly what an embed image field expects. Set it as the image or thumbnail in your embed and it renders inline, with no token to manage."
      },
      {
        "q": "Do the links work in Discord markdown and messages?",
        "a": "Yes. Paste the link into a channel or DM and Discord shows it as an inline image preview, because the URL ends in the real file extension instead of pointing at a gallery page."
      },
      {
        "q": "Is there a file size limit?",
        "a": "10MB per image, which covers almost any screenshot, meme, or piece of art you'd post in a server. If a file is bigger, shrink or compress it first, then upload."
      },
      {
        "q": "Can I host animated GIFs for Discord?",
        "a": "Yes. Upload a GIF and you get a direct .gif link. When that link is posted in a message or set in an embed, the animation plays just like a normal Discord GIF."
      },
      {
        "q": "Does it work with discord.js and discord.py?",
        "a": "Yes. Both libraries take a plain URL string for embed images (setImage in discord.js, set_image in discord.py). A link from here drops straight into that field, so you don't have to upload a file with the message or refresh any token."
      },
      {
        "q": "Do I need a Discord account or to sign up here?",
        "a": "No account is needed to use this host. You only need a Discord account to post in servers, which you already have. Upload, copy the link, paste it in."
      },
      {
        "q": "Will the link work for a webhook avatar?",
        "a": "Yes. A webhook avatar is set with an image URL, and this link is a normal https image address, so it works there as well as in embeds."
      },
      {
        "q": "Does it compress or watermark my image?",
        "a": "No. Your file comes back at full resolution with no watermark and no re-compression, so art and screenshots stay sharp in the server."
      },
      {
        "q": "What formats can I upload?",
        "a": "JPG, PNG, WebP, GIF and SVG. For something that needs to show inline in a Discord message, stick to a raster format like PNG, JPG, GIF or WebP, since SVG is treated as a download."
      },
      {
        "q": "How long do the links last?",
        "a": "Anonymous uploads stay live until a monthly storage cleanup, so you get at least a couple of weeks and usually more. Want one that never goes away? Make a free account and choose 'keep forever' when you upload. Either way, keep your own copy as a backup."
      },
      {
        "q": "Are the links private?",
        "a": "Anonymous uploads are public to anyone who has the link, so don't post anything you wouldn't want a stranger to open. For a private server, the image is still reachable by URL, so treat it as shareable."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Stop losing images to expired Discord links",
    "ctaBody": "Upload once and get a direct link that works in embeds, bots, webhooks, and messages without an expiry token. Free, no sign-up.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para Discord — Enlaces permanentes | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-ebay", "label": "Para eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" },
      { "pageKey": "image-hosting-for-github-readme", "label": "Para GitHub" }
    ],
    "metaDescription": "Obtén URLs de imágenes permanentes para embeds de Discord. Los enlaces de la CDN de Discord caducan; usa ImageToURL para un alojamiento fiable y permanente que funciona en Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Obtén URLs de imágenes permanentes para embeds de Discord y evita imágenes rotas causadas por tokens de CDN caducados.",
    "badge": "USUARIOS DE DISCORD",
    "h1Pre": "Alojamiento de imágenes para Discord",
    "h1Highlight": "que nunca caduca.",
    "intro": "Los enlaces de la CDN de Discord caducan y rompen tus embeds. Sube tus imágenes aquí y obtén URLs permanentes y fiables que funcionan para siempre en mensajes, bots y webhooks de Discord.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Selecciona cualquier archivo de imagen desde tu dispositivo para subirlo a nuestra CDN global de alta velocidad."
      },
      {
        "title": "Obtén una URL permanente",
        "body": "Recibe un enlace directo y estable, optimizado para el sistema de embeds de Discord."
      },
      {
        "title": "Inserta en Discord",
        "body": "Pega tu enlace en cualquier mensaje, embed de bot o webhook de Discord para mostrarlo permanentemente."
      }
    ],
    "whyTitle": "Por qué los usuarios de Discord necesitan alojamiento externo",
    "whyItems": [
      {
        "title": "Los enlaces de la CDN caducan",
        "body": "Desde 2023, Discord utiliza URLs firmadas con tokens de caducidad que rompen las referencias externas con el tiempo."
      },
      {
        "title": "Los embeds permanecen visibles",
        "body": "Evita marcadores de posición de imagen rota en tus embeds de bots, webhooks y mensajes fijados."
      },
      {
        "title": "Integración compatible con bots",
        "body": "Nuestras URLs funcionan perfectamente con Discord.js, discord.py y otros frameworks sin necesidad de gestionar tokens."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué caducan los enlaces de imágenes de Discord?",
        "a": "Discord cambió su CDN en 2023 para usar URLs firmadas con tokens de caducidad. Las imágenes subidas directamente a Discord ahora tienen URLs que caducan tras un periodo determinado, causando imágenes rotas en marcadores, wikis y embeds externos."
      },
      {
        "q": "¿Puedo usar imágenes de ImageToURL en embeds de bots de Discord?",
        "a": "Sí. ImageToURL proporciona URLs de imagen directas que funcionan perfectamente en los campos de embed de los bots de Discord. Las URLs se sirven mediante HTTPS con los encabezados content-type adecuados, por lo que Discord las renderiza como imágenes integradas."
      },
      {
        "q": "¿Funcionan los enlaces de ImageToURL en el markdown de Discord?",
        "a": "Absolutamente. Puedes pegar un enlace de ImageToURL directamente en un mensaje de Discord y se mostrará como una vista previa de imagen integrada."
      },
      {
        "q": "¿Existe un límite de tamaño de archivo para el alojamiento de imágenes en Discord?",
        "a": "ImageToURL admite imágenes de hasta 25MB, lo que cubre prácticamente cualquier imagen que quieras compartir en Discord, alojada permanentemente sin degradación."
      },
      {
        "q": "¿Puedo alojar GIFs animados para Discord?",
        "a": "Sí. ImageToURL admite GIFs animados totalmente. Sube tu GIF y obtén una URL permanente que reproduce la animación cuando se inserta en mensajes de Discord."
      }
    ],
    "ctaTitle": "Deja de perder imágenes por enlaces de Discord caducados",
    "ctaBody": "Sube una vez, obtén una URL permanente que funciona en embeds, bots, webhooks y mensajes para siempre.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images pour Discord — Liens d'intégration permanents | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-ebay", "label": "Pour eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" },
      { "pageKey": "image-hosting-for-github-readme", "label": "Pour GitHub" }
    ],
    "metaDescription": "Obtenez des URL d'images permanentes pour les intégrations Discord. Les liens CDN de Discord expirent — utilisez ImageToURL pour un hébergement fiable et permanent qui fonctionne sur Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Obtenez des URL d'images permanentes pour les intégrations Discord afin d'éviter les images brisées causées par l'expiration des jetons CDN.",
    "badge": "UTILISATEURS DISCORD",
    "h1Pre": "Hébergement d'images pour Discord",
    "h1Highlight": "qui n'expire jamais.",
    "intro": "Les liens CDN de Discord expirent et brisent vos intégrations. Téléchargez vos images ici et obtenez des URL permanentes et fiables qui fonctionnent pour toujours dans les messages, bots et webhooks Discord.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Sélectionnez n'importe quel fichier image depuis votre appareil pour le télécharger sur notre CDN mondial haute vitesse."
      },
      {
        "title": "Obtenez une URL permanente",
        "body": "Recevez un lien d'image direct et stable, optimisé pour le système d'intégration de Discord."
      },
      {
        "title": "Intégrez dans Discord",
        "body": "Collez votre lien dans n'importe quel message Discord, intégration de bot ou webhook pour l'afficher de façon permanente."
      }
    ],
    "whyTitle": "Pourquoi les utilisateurs Discord ont besoin d'un hébergement externe",
    "whyItems": [
      {
        "title": "Les liens CDN expirent",
        "body": "Depuis 2023, Discord utilise des URL signées avec des jetons d'expiration qui brisent les références externes avec le temps."
      },
      {
        "title": "Les intégrations restent visibles",
        "body": "Évitez les espaces réservés d'images brisées dans vos intégrations de bots, webhooks et messages épinglés."
      },
      {
        "title": "Intégration compatible avec les bots",
        "body": "Nos URL fonctionnent parfaitement avec Discord.js, discord.py et d'autres frameworks sans gestion de jetons."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi les liens d'images Discord expirent-ils ?",
        "a": "Discord a modifié son CDN en 2023 pour utiliser des URL signées avec des jetons d'expiration. Les images téléchargées directement sur Discord ont désormais des URL qui expirent après une période définie, provoquant des images brisées dans les favoris, les wikis et les intégrations externes."
      },
      {
        "q": "Puis-je utiliser les images ImageToURL dans les intégrations de bots Discord ?",
        "a": "Oui. ImageToURL fournit des URL d'images directes qui fonctionnent parfaitement dans les champs d'intégration des bots Discord. Les URL sont servies via HTTPS avec les en-têtes content-type appropriés, afin que Discord les affiche comme des images intégrées."
      },
      {
        "q": "Les liens ImageToURL fonctionnent-ils dans le markdown Discord ?",
        "a": "Absolument. Vous pouvez coller un lien ImageToURL directement dans un message Discord et il s'affichera sous forme d'aperçu d'image intégré."
      },
      {
        "q": "Y a-t-il une limite de taille de fichier pour l'hébergement d'images Discord ?",
        "a": "ImageToURL prend en charge les images jusqu'à 25 Mo, ce qui couvre pratiquement toutes les images que vous souhaiteriez partager sur Discord, hébergées de manière permanente sans dégradation."
      },
      {
        "q": "Puis-je héberger des GIF animés pour Discord ?",
        "a": "Oui. ImageToURL prend entièrement en charge les GIF animés. Téléchargez votre GIF et obtenez une URL permanente qui joue l'animation lorsqu'elle est intégrée dans les messages Discord."
      }
    ],
    "ctaTitle": "Ne perdez plus vos images à cause des liens Discord expirés",
    "ctaBody": "Téléchargez une fois, obtenez une URL permanente qui fonctionne pour toujours dans les intégrations, les bots, les webhooks et les messages.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "Bild-Hosting für Discord — Permanente Embed-Links | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-ebay", "label": "Für eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" },
      { "pageKey": "image-hosting-for-github-readme", "label": "Für GitHub" }
    ],
    "metaDescription": "Erhalte permanente Bild-URLs für Discord-Embeds. Discord-CDN-Links laufen ab – nutze ImageToURL für zuverlässiges, dauerhaftes Bild-Hosting, das in Discord funktioniert.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Erhalte permanente Bild-URLs für Discord-Embeds, um defekte Bilder durch ablaufende CDN-Token zu vermeiden.",
    "badge": "DISCORD-NUTZER",
    "h1Pre": "Bild-Hosting für Discord",
    "h1Highlight": "das niemals abläuft.",
    "intro": "Discord-CDN-Links laufen ab und lassen deine Embeds kaputtgehen. Lade deine Bilder hier hoch und erhalte permanente, zuverlässige URLs, die für immer in Discord-Nachrichten, Bots und Webhooks funktionieren.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Lade dein Bild hoch",
        "body": "Wähle eine beliebige Bilddatei von deinem Gerät aus, um sie auf unser globales Hochgeschwindigkeits-CDN hochzuladen."
      },
      {
        "title": "Erhalte eine permanente URL",
        "body": "Erhalte einen direkten, stabilen Bild-Link, der für das Embed-System von Discord optimiert ist."
      },
      {
        "title": "In Discord einbetten",
        "body": "Füge deinen Link in eine Discord-Nachricht, ein Bot-Embed oder einen Webhook ein, um ihn dauerhaft anzuzeigen."
      }
    ],
    "whyTitle": "Warum Discord-Nutzer externes Hosting benötigen",
    "whyItems": [
      {
        "title": "CDN-Links laufen ab",
        "body": "Seit 2023 verwendet Discord signierte URLs mit Ablauf-Token, die externe Referenzen mit der Zeit ungültig machen."
      },
      {
        "title": "Embeds bleiben sichtbar",
        "body": "Vermeide defekte Bild-Platzhalter in deinen Bot-Embeds, Webhooks und angepinnten Nachrichten."
      },
      {
        "title": "Bot-freundliche Integration",
        "body": "Unsere URLs funktionieren perfekt mit Discord.js, discord.py und anderen Frameworks ohne Token-Management."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum laufen Discord-Bild-Links ab?",
        "a": "Discord hat 2023 sein CDN auf signierte URLs mit Ablauf-Token umgestellt. Bilder, die direkt bei Discord hochgeladen werden, haben nun URLs, die nach einer gewissen Zeit ablaufen, was zu defekten Bildern in Lesezeichen, Wikis und externen Embeds führt."
      },
      {
        "q": "Kann ich ImageToURL-Bilder in Discord-Bot-Embeds verwenden?",
        "a": "Ja. ImageToURL bietet direkte Bild-URLs, die perfekt in Discord-Bot-Embed-Feldern funktionieren. Die URLs werden über HTTPS mit korrekten Content-Type-Headern bereitgestellt, sodass Discord sie als Inline-Bilder rendert."
      },
      {
        "q": "Funktionieren ImageToURL-Links in Discord-Markdown?",
        "a": "Absolut. Du kannst einen ImageToURL-Link direkt in eine Discord-Nachricht einfügen und er wird als eingebettete Bildvorschau angezeigt."
      },
      {
        "q": "Gibt es ein Dateigrößenlimit für Discord-Bild-Hosting?",
        "a": "ImageToURL unterstützt Bilder bis zu 25 MB, was praktisch jedes Bild abdeckt, das du auf Discord teilen möchtest – dauerhaft gehostet ohne Qualitätsverlust."
      },
      {
        "q": "Kann ich animierte GIFs für Discord hosten?",
        "a": "Ja. ImageToURL unterstützt animierte GIFs vollständig. Lade dein GIF hoch und erhalte eine permanente URL, die die Animation abspielt, wenn sie in Discord-Nachrichten eingebettet wird."
      }
    ],
    "ctaTitle": "Verliere keine Bilder mehr durch abgelaufene Discord-Links",
    "ctaBody": "Einmal hochladen, eine permanente URL erhalten, die für immer in Embeds, Bots, Webhooks und Nachrichten funktioniert.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "Discord用画像ホスティング — 永続的な埋め込みリンク | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-ebay", "label": "eBay用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" },
      { "pageKey": "image-hosting-for-github-readme", "label": "GitHub用" }
    ],
    "metaDescription": "Discordの埋め込み用として永続的な画像URLを取得。DiscordのCDNリンクは期限切れになります。ImageToURLを使って、Discordで確実に機能する永続的な画像ホスティングを利用しましょう。",
    "schemaName": "ImageToURL",
    "schemaDescription": "CDNトークンの期限切れによる画像リンク切れを防ぐため、Discord埋め込み用の永続的な画像URLを取得します。",
    "badge": "DISCORDユーザー向け",
    "h1Pre": "Discord用画像ホスティング",
    "h1Highlight": "期限切れの心配はもうありません。",
    "intro": "DiscordのCDNリンクは期限が切れると埋め込みが表示されなくなります。画像をここにアップロードすれば、Discordのメッセージ、Bot、Webhookで永続的に機能する信頼性の高いURLを取得できます。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "デバイスから画像ファイルを選択し、高速なグローバルCDNにアップロードします。"
      },
      {
        "title": "永続的なURLを取得",
        "body": "Discordの埋め込みシステムに最適化された、直接的で安定した画像リンクを受け取ります。"
      },
      {
        "title": "Discordに埋め込む",
        "body": "リンクをDiscordのメッセージ、Botの埋め込み、またはWebhookに貼り付けるだけで、永続的に表示されます。"
      }
    ],
    "whyTitle": "Discordユーザーが外部ホスティングを必要とする理由",
    "whyItems": [
      {
        "title": "CDNリンクの期限切れ",
        "body": "2023年以降、Discordは期限付きトークンを含む署名付きURLを使用しており、時間が経つと外部参照がリンク切れになります。"
      },
      {
        "title": "埋め込みを常に表示",
        "body": "Botの埋め込み、Webhook、ピン留めされたメッセージで画像が表示されなくなる問題を回避します。"
      },
      {
        "title": "Botフレンドリーな統合",
        "body": "当社のURLは、トークン管理を必要とせず、Discord.jsやdiscord.pyなどのフレームワークで完璧に動作します。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜDiscordの画像リンクは期限切れになるのですか？",
        "a": "Discordは2023年にCDNを変更し、期限付きトークンを含む署名付きURLを採用しました。Discordに直接アップロードされた画像は一定期間でURLの期限が切れるため、ブックマークやWiki、外部埋め込みで画像が表示されなくなります。"
      },
      {
        "q": "ImageToURLの画像をDiscord Botの埋め込みに使えますか？",
        "a": "はい。ImageToURLはDiscordのBot埋め込みフィールドで完璧に動作する直接的な画像URLを提供します。URLは適切なContent-Typeヘッダー付きのHTTPSで配信されるため、Discordはインライン画像としてレンダリングします。"
      },
      {
        "q": "ImageToURLのリンクはDiscordのMarkdownで使えますか？",
        "a": "もちろんです。ImageToURLのリンクをDiscordのメッセージに直接貼り付けるだけで、埋め込み画像プレビューとして表示されます。"
      },
      {
        "q": "Discord画像ホスティングにファイルサイズ制限はありますか？",
        "a": "ImageToURLは最大25MBまでの画像をサポートしています。これはDiscordで共有したいほぼすべての画像に対応しており、劣化することなく永続的にホストされます。"
      },
      {
        "q": "Discord用にアニメーションGIFをホストできますか？",
        "a": "はい。ImageToURLはアニメーションGIFを完全にサポートしています。GIFをアップロードすれば、Discordメッセージに埋め込んだ際にアニメーションが再生される永続的なURLを取得できます。"
      }
    ],
    "ctaTitle": "期限切れのDiscordリンクに悩まされるのは終わりにしましょう",
    "ctaBody": "一度アップロードすれば、埋め込み、Bot、Webhook、メッセージでずっと使える永続的なURLが手に入ります。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "Discord 专用图片托管 — 永久嵌入链接 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-ebay", "label": "用于 eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" },
      { "pageKey": "image-hosting-for-github-readme", "label": "用于 GitHub" }
    ],
    "metaDescription": "获取用于 Discord 嵌入的永久图片链接。Discord CDN 链接会过期，使用 ImageToURL 获取在 Discord 中稳定、永久的图片托管服务。",
    "schemaName": "ImageToURL",
    "schemaDescription": "获取用于 Discord 嵌入的永久图片链接，防止因 CDN 令牌过期导致的图片失效问题。",
    "badge": "DISCORD 用户",
    "h1Pre": "Discord 专用图片托管",
    "h1Highlight": "永不过期。",
    "intro": "Discord CDN 链接会过期并导致嵌入失效。在此上传您的图片，获取在 Discord 消息、机器人和 Webhook 中永久有效的可靠链接。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传图片",
        "body": "从您的设备选择任意图片文件，上传至我们的高速全球 CDN。"
      },
      {
        "title": "获取永久链接",
        "body": "获取一个针对 Discord 嵌入系统优化的直接、稳定的图片链接。"
      },
      {
        "title": "在 Discord 中嵌入",
        "body": "将链接粘贴到任何 Discord 消息、机器人嵌入或 Webhook 中即可永久显示。"
      }
    ],
    "whyTitle": "为什么 Discord 用户需要外部托管",
    "whyItems": [
      {
        "title": "CDN 链接会过期",
        "body": "自 2023 年起，Discord 使用带有过期令牌的签名 URL，这会导致外部引用随时间推移而失效。"
      },
      {
        "title": "保持嵌入可见",
        "body": "避免在您的机器人嵌入、Webhook 和置顶消息中出现图片失效的占位符。"
      },
      {
        "title": "机器人友好集成",
        "body": "我们的 URL 可与 Discord.js、discord.py 及其他框架完美兼容，无需管理令牌。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么 Discord 图片链接会过期？",
        "a": "Discord 在 2023 年更改了其 CDN，开始使用带有过期令牌的签名 URL。直接上传到 Discord 的图片链接会在一段时间后过期，导致书签、维基和外部嵌入中的图片无法显示。"
      },
      {
        "q": "我可以在 Discord 机器人嵌入中使用 ImageToURL 图片吗？",
        "a": "可以。ImageToURL 提供可完美用于 Discord 机器人嵌入字段的直接图片链接。这些 URL 通过 HTTPS 提供并带有正确的 content-type 标头，因此 Discord 会将其渲染为内嵌图片。"
      },
      {
        "q": "ImageToURL 链接可以在 Discord Markdown 中使用吗？",
        "a": "当然可以。您可以直接将 ImageToURL 链接粘贴到 Discord 消息中，它将显示为嵌入式图片预览。"
      },
      {
        "q": "Discord 图片托管有文件大小限制吗？",
        "a": "ImageToURL 支持最大 25MB 的图片，这涵盖了您在 Discord 上分享的几乎所有图片，且永久托管，画质无损。"
      },
      {
        "q": "我可以托管 Discord 用的动态 GIF 吗？",
        "a": "可以。ImageToURL 完全支持动态 GIF。上传您的 GIF 并获取一个永久链接，在 Discord 消息中嵌入时即可播放动画。"
      }
    ],
    "ctaTitle": "别再因为 Discord 链接过期而丢失图片",
    "ctaBody": "上传一次，即可获得在嵌入、机器人、Webhook 和消息中永久有效的链接。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
