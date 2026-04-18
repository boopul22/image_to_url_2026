import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for Discord — Permanent Embed Links | ImageToURL",
    "metaDescription": "Get permanent image URLs for Discord embeds. Discord CDN links expire — use ImageToURL for reliable, permanent image hosting that works in Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Get permanent image URLs for Discord embeds to prevent broken images caused by expiring CDN tokens.",
    "badge": "DISCORD USERS",
    "h1Pre": "Image Hosting for Discord",
    "h1Highlight": "that never expires.",
    "intro": "Discord CDN links expire and break your embeds. Upload your images here and get permanent, reliable URLs that work forever in Discord messages, bots, and webhooks.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Select any image file from your device to upload it to our high-speed global CDN."
      },
      {
        "title": "Get Permanent URL",
        "body": "Receive a direct, stable image link that is optimized for Discord's embed system."
      },
      {
        "title": "Embed in Discord",
        "body": "Paste your link into any Discord message, bot embed, or webhook to display it permanently."
      }
    ],
    "whyTitle": "Why Discord Users Need External Hosting",
    "whyItems": [
      {
        "title": "CDN Links Expire",
        "body": "Since 2023, Discord uses signed URLs with expiration tokens that break external references over time."
      },
      {
        "title": "Embeds Stay Visible",
        "body": "Avoid broken image placeholders in your bot embeds, webhooks, and pinned messages."
      },
      {
        "title": "Bot-Friendly Integration",
        "body": "Our URLs work perfectly with Discord.js, discord.py, and other frameworks without token management."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why do Discord image links expire?",
        "a": "Discord changed their CDN in 2023 to use signed URLs with expiration tokens. Images uploaded directly to Discord now have URLs that expire after a set period, causing broken images in bookmarks, wikis, and external embeds."
      },
      {
        "q": "Can I use ImageToURL images in Discord bot embeds?",
        "a": "Yes. ImageToURL provides direct image URLs that work perfectly in Discord bot embed fields. The URLs are served over HTTPS with proper content-type headers, so Discord renders them as inline images."
      },
      {
        "q": "Do ImageToURL links work in Discord markdown?",
        "a": "Absolutely. You can paste an ImageToURL link directly into a Discord message and it will display as an embedded image preview."
      },
      {
        "q": "Is there a file size limit for Discord image hosting?",
        "a": "ImageToURL supports images up to 25MB, which covers virtually any image you would want to share on Discord, hosted permanently without degradation."
      },
      {
        "q": "Can I host animated GIFs for Discord?",
        "a": "Yes. ImageToURL fully supports animated GIFs. Upload your GIF and get a permanent URL that plays the animation when embedded in Discord messages."
      }
    ],
    "ctaTitle": "Stop losing images to expired Discord links",
    "ctaBody": "Upload once, get a permanent URL that works in embeds, bots, webhooks, and messages forever.",
    "ctaButton": "Upload Now"
  },
  "hi": {
    "metaTitle": "Discord के लिए इमेज होस्टिंग — परमानेंट एम्बेड लिंक | ImageToURL",
    "metaDescription": "Discord एम्बेड के लिए परमानेंट इमेज URL प्राप्त करें। Discord CDN लिंक एक्सपायर हो जाते हैं — विश्वसनीय और परमानेंट इमेज होस्टिंग के लिए ImageToURL का उपयोग करें जो Discord में काम करती है।",
    "schemaName": "ImageToURL",
    "schemaDescription": "एक्सपायर होने वाले CDN टोकन के कारण टूटी हुई इमेज से बचने के लिए Discord एम्बेड के लिए परमानेंट इमेज URL प्राप्त करें।",
    "badge": "DISCORD यूज़र्स",
    "h1Pre": "Discord के लिए इमेज होस्टिंग",
    "h1Highlight": "जो कभी एक्सपायर नहीं होती।",
    "intro": "Discord CDN लिंक एक्सपायर हो जाते हैं और आपके एम्बेड को खराब कर देते हैं। अपनी इमेज यहाँ अपलोड करें और परमानेंट, विश्वसनीय URL प्राप्त करें जो Discord मैसेज, बॉट्स और वेबहुक में हमेशा काम करते हैं।",
    "howTitle": "यह कैसे काम करता है",
    "steps": [
      {
        "title": "अपनी इमेज अपलोड करें",
        "body": "हमारे हाई-स्पीड ग्लोबल CDN पर अपलोड करने के लिए अपने डिवाइस से कोई भी इमेज फाइल चुनें।"
      },
      {
        "title": "परमानेंट URL प्राप्त करें",
        "body": "एक डायरेक्ट, स्टेबल इमेज लिंक प्राप्त करें जो Discord के एम्बेड सिस्टम के लिए ऑप्टिमाइज़ किया गया है।"
      },
      {
        "title": "Discord में एम्बेड करें",
        "body": "अपने लिंक को किसी भी Discord मैसेज, बॉट एम्बेड या वेबहुक में पेस्ट करें ताकि वह हमेशा के लिए दिखाई दे।"
      }
    ],
    "whyTitle": "Discord यूज़र्स को एक्सटर्नल होस्टिंग की आवश्यकता क्यों है",
    "whyItems": [
      {
        "title": "CDN लिंक एक्सपायर हो जाते हैं",
        "body": "2023 से, Discord एक्सपायरी टोकन वाले साइन्ड URL का उपयोग करता है जो समय के साथ एक्सटर्नल रेफरेंस को तोड़ देते हैं।"
      },
      {
        "title": "एम्बेड हमेशा दिखाई देते हैं",
        "body": "अपने बॉट एम्बेड, वेबहुक और पिन किए गए मैसेज में टूटे हुए इमेज प्लेसहोल्डर से बचें।"
      },
      {
        "title": "बॉट-फ्रेंडली इंटीग्रेशन",
        "body": "हमारे URL बिना किसी टोकन मैनेजमेंट के Discord.js, discord.py और अन्य फ्रेमवर्क के साथ पूरी तरह से काम करते हैं।"
      }
    ],
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "faqs": [
      {
        "q": "Discord इमेज लिंक एक्सपायर क्यों हो जाते हैं?",
        "a": "Discord ने 2023 में अपने CDN को एक्सपायरी टोकन वाले साइन्ड URL का उपयोग करने के लिए बदल दिया है। सीधे Discord पर अपलोड की गई इमेज के URL एक निश्चित अवधि के बाद एक्सपायर हो जाते हैं, जिससे बुकमार्क, विकी और एक्सटर्नल एम्बेड में इमेज टूट जाती हैं।"
      },
      {
        "q": "क्या मैं Discord बॉट एम्बेड में ImageToURL इमेज का उपयोग कर सकता हूँ?",
        "a": "हाँ। ImageToURL डायरेक्ट इमेज URL प्रदान करता है जो Discord बॉट एम्बेड फील्ड में पूरी तरह से काम करते हैं। URL को उचित कंटेंट-टाइप हेडर के साथ HTTPS पर सर्व किया जाता है, इसलिए Discord उन्हें इनलाइन इमेज के रूप में रेंडर करता है।"
      },
      {
        "q": "क्या ImageToURL लिंक Discord मार्कडाउन में काम करते हैं?",
        "a": "बिल्कुल। आप ImageToURL लिंक को सीधे Discord मैसेज में पेस्ट कर सकते हैं और यह एक एम्बेड इमेज प्रीव्यू के रूप में दिखाई देगा।"
      },
      {
        "q": "क्या Discord इमेज होस्टिंग के लिए कोई फाइल साइज़ लिमिट है?",
        "a": "ImageToURL 25MB तक की इमेज को सपोर्ट करता है, जो लगभग किसी भी ऐसी इमेज को कवर करता है जिसे आप Discord पर शेयर करना चाहते हैं, और यह बिना किसी क्वालिटी लॉस के परमानेंट होस्ट की जाती है।"
      },
      {
        "q": "क्या मैं Discord के लिए एनिमेटेड GIF होस्ट कर सकता हूँ?",
        "a": "हाँ। ImageToURL पूरी तरह से एनिमेटेड GIF को सपोर्ट करता है। अपना GIF अपलोड करें और एक परमानेंट URL प्राप्त करें जो Discord मैसेज में एम्बेड होने पर एनीमेशन प्ले करता है।"
      }
    ],
    "ctaTitle": "एक्सपायर हो चुके Discord लिंक के कारण इमेज खोना बंद करें",
    "ctaBody": "एक बार अपलोड करें, एक परमानेंट URL प्राप्त करें जो एम्बेड, बॉट्स, वेबहुक और मैसेज में हमेशा काम करता है।",
    "ctaButton": "अभी अपलोड करें"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para Discord — Enlaces permanentes | ImageToURL",
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
  "id": {
    "metaTitle": "Hosting Gambar untuk Discord — Link Embed Permanen | ImageToURL",
    "metaDescription": "Dapatkan URL gambar permanen untuk embed Discord. Link CDN Discord akan kedaluwarsa — gunakan ImageToURL untuk hosting gambar yang andal dan permanen untuk Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Dapatkan URL gambar permanen untuk embed Discord guna mencegah gambar rusak akibat token CDN yang kedaluwarsa.",
    "badge": "PENGGUNA DISCORD",
    "h1Pre": "Hosting Gambar untuk Discord",
    "h1Highlight": "yang tidak pernah kedaluwarsa.",
    "intro": "Link CDN Discord akan kedaluwarsa dan merusak embed Anda. Unggah gambar Anda di sini dan dapatkan URL permanen yang andal agar tetap berfungsi selamanya di pesan, bot, dan webhook Discord.",
    "howTitle": "Cara Kerjanya",
    "steps": [
      {
        "title": "Unggah Gambar Anda",
        "body": "Pilih file gambar apa pun dari perangkat Anda untuk mengunggahnya ke CDN global berkecepatan tinggi kami."
      },
      {
        "title": "Dapatkan URL Permanen",
        "body": "Terima link gambar langsung yang stabil dan dioptimalkan untuk sistem embed Discord."
      },
      {
        "title": "Embed di Discord",
        "body": "Tempel link Anda ke pesan Discord, embed bot, atau webhook apa pun untuk menampilkannya secara permanen."
      }
    ],
    "whyTitle": "Mengapa Pengguna Discord Membutuhkan Hosting Eksternal",
    "whyItems": [
      {
        "title": "Link CDN Kedaluwarsa",
        "body": "Sejak 2023, Discord menggunakan URL bertanda dengan token kedaluwarsa yang merusak referensi eksternal seiring waktu."
      },
      {
        "title": "Embed Tetap Terlihat",
        "body": "Hindari placeholder gambar rusak di embed bot, webhook, dan pesan yang disematkan (pinned)."
      },
      {
        "title": "Integrasi Ramah Bot",
        "body": "URL kami bekerja sempurna dengan Discord.js, discord.py, dan framework lainnya tanpa perlu manajemen token."
      }
    ],
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Mengapa link gambar Discord kedaluwarsa?",
        "a": "Discord mengubah CDN mereka pada tahun 2023 untuk menggunakan URL bertanda dengan token kedaluwarsa. Gambar yang diunggah langsung ke Discord kini memiliki URL yang kedaluwarsa setelah jangka waktu tertentu, menyebabkan gambar rusak di bookmark, wiki, dan embed eksternal."
      },
      {
        "q": "Bisakah saya menggunakan gambar ImageToURL di embed bot Discord?",
        "a": "Ya. ImageToURL menyediakan URL gambar langsung yang berfungsi sempurna di kolom embed bot Discord. URL disajikan melalui HTTPS dengan header content-type yang tepat, sehingga Discord merendernya sebagai gambar inline."
      },
      {
        "q": "Apakah link ImageToURL berfungsi di markdown Discord?",
        "a": "Tentu saja. Anda dapat menempelkan link ImageToURL langsung ke pesan Discord dan link tersebut akan ditampilkan sebagai pratinjau gambar yang disematkan."
      },
      {
        "q": "Apakah ada batas ukuran file untuk hosting gambar Discord?",
        "a": "ImageToURL mendukung gambar hingga 25MB, yang mencakup hampir semua gambar yang ingin Anda bagikan di Discord, dihosting secara permanen tanpa penurunan kualitas."
      },
      {
        "q": "Bisakah saya menghosting GIF animasi untuk Discord?",
        "a": "Ya. ImageToURL mendukung penuh GIF animasi. Unggah GIF Anda dan dapatkan URL permanen yang memutar animasi saat disematkan di pesan Discord."
      }
    ],
    "ctaTitle": "Berhenti kehilangan gambar karena link Discord yang kedaluwarsa",
    "ctaBody": "Unggah sekali, dapatkan URL permanen yang berfungsi di embed, bot, webhook, dan pesan selamanya.",
    "ctaButton": "Unggah Sekarang"
  },
  "vi": {
    "metaTitle": "Lưu trữ ảnh cho Discord — Liên kết nhúng vĩnh viễn | ImageToURL",
    "metaDescription": "Nhận liên kết ảnh vĩnh viễn cho các bài nhúng Discord. Liên kết CDN của Discord sẽ hết hạn — hãy sử dụng ImageToURL để lưu trữ ảnh ổn định, vĩnh viễn, hoạt động tốt trên Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Nhận liên kết ảnh vĩnh viễn cho các bài nhúng Discord để tránh lỗi ảnh do mã thông báo CDN hết hạn.",
    "badge": "NGƯỜI DÙNG DISCORD",
    "h1Pre": "Lưu trữ ảnh cho Discord",
    "h1Highlight": "không bao giờ hết hạn.",
    "intro": "Liên kết CDN của Discord sẽ hết hạn và làm hỏng các bài nhúng của bạn. Hãy tải ảnh lên đây để nhận các liên kết ổn định, vĩnh viễn, hoạt động mãi mãi trong tin nhắn, bot và webhook của Discord.",
    "howTitle": "Cách thức hoạt động",
    "steps": [
      {
        "title": "Tải ảnh của bạn lên",
        "body": "Chọn bất kỳ tệp ảnh nào từ thiết bị của bạn để tải lên CDN toàn cầu tốc độ cao của chúng tôi."
      },
      {
        "title": "Nhận liên kết vĩnh viễn",
        "body": "Nhận liên kết ảnh trực tiếp, ổn định được tối ưu hóa cho hệ thống nhúng của Discord."
      },
      {
        "title": "Nhúng vào Discord",
        "body": "Dán liên kết của bạn vào bất kỳ tin nhắn, bot nhúng hoặc webhook nào trên Discord để hiển thị ảnh vĩnh viễn."
      }
    ],
    "whyTitle": "Tại sao người dùng Discord cần lưu trữ ngoài",
    "whyItems": [
      {
        "title": "Liên kết CDN hết hạn",
        "body": "Kể từ năm 2023, Discord sử dụng các URL có chữ ký với mã thông báo hết hạn, khiến các tham chiếu bên ngoài bị hỏng theo thời gian."
      },
      {
        "title": "Bài nhúng luôn hiển thị",
        "body": "Tránh lỗi hiển thị ảnh trong các bài nhúng bot, webhook và tin nhắn đã ghim của bạn."
      },
      {
        "title": "Tích hợp thân thiện với Bot",
        "body": "Các liên kết của chúng tôi hoạt động hoàn hảo với Discord.js, discord.py và các framework khác mà không cần quản lý mã thông báo."
      }
    ],
    "faqTitle": "Các câu hỏi thường gặp",
    "faqs": [
      {
        "q": "Tại sao liên kết ảnh Discord lại hết hạn?",
        "a": "Discord đã thay đổi CDN vào năm 2023 để sử dụng URL có chữ ký với mã thông báo hết hạn. Ảnh tải trực tiếp lên Discord hiện có các URL sẽ hết hạn sau một khoảng thời gian, gây ra lỗi ảnh trong dấu trang, wiki và các bài nhúng bên ngoài."
      },
      {
        "q": "Tôi có thể sử dụng ảnh từ ImageToURL trong bài nhúng bot Discord không?",
        "a": "Có. ImageToURL cung cấp các liên kết ảnh trực tiếp hoạt động hoàn hảo trong các trường nhúng của bot Discord. Các URL được phục vụ qua HTTPS với tiêu đề content-type phù hợp, vì vậy Discord sẽ hiển thị chúng dưới dạng ảnh nội dòng."
      },
      {
        "q": "Liên kết ImageToURL có hoạt động trong Markdown của Discord không?",
        "a": "Chắc chắn rồi. Bạn có thể dán liên kết ImageToURL trực tiếp vào tin nhắn Discord và nó sẽ hiển thị dưới dạng bản xem trước ảnh nhúng."
      },
      {
        "q": "Có giới hạn kích thước tệp cho lưu trữ ảnh Discord không?",
        "a": "ImageToURL hỗ trợ ảnh lên đến 25MB, đáp ứng hầu hết mọi nhu cầu chia sẻ ảnh trên Discord, được lưu trữ vĩnh viễn mà không bị giảm chất lượng."
      },
      {
        "q": "Tôi có thể lưu trữ ảnh GIF động cho Discord không?",
        "a": "Có. ImageToURL hỗ trợ đầy đủ ảnh GIF động. Hãy tải GIF của bạn lên và nhận liên kết vĩnh viễn để phát hoạt ảnh khi nhúng vào tin nhắn Discord."
      }
    ],
    "ctaTitle": "Đừng để mất ảnh do liên kết Discord hết hạn",
    "ctaBody": "Tải lên một lần, nhận liên kết vĩnh viễn hoạt động mãi mãi trong các bài nhúng, bot, webhook và tin nhắn.",
    "ctaButton": "Tải lên ngay"
  },
  "pt-BR": {
    "metaTitle": "Hospedagem de Imagens para Discord — Links de Embed Permanentes | ImageToURL",
    "metaDescription": "Obtenha URLs de imagem permanentes para embeds no Discord. Os links da CDN do Discord expiram — use o ImageToURL para uma hospedagem de imagens confiável e permanente que funciona no Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Obtenha URLs de imagem permanentes para embeds no Discord para evitar imagens quebradas causadas por tokens de CDN expirados.",
    "badge": "USUÁRIOS DO DISCORD",
    "h1Pre": "Hospedagem de Imagens para Discord",
    "h1Highlight": "que nunca expira.",
    "intro": "Os links da CDN do Discord expiram e quebram seus embeds. Faça upload de suas imagens aqui e obtenha URLs permanentes e confiáveis que funcionam para sempre em mensagens, bots e webhooks do Discord.",
    "howTitle": "Como Funciona",
    "steps": [
      {
        "title": "Faça upload da sua imagem",
        "body": "Selecione qualquer arquivo de imagem do seu dispositivo para enviá-lo para nossa CDN global de alta velocidade."
      },
      {
        "title": "Obtenha uma URL permanente",
        "body": "Receba um link de imagem direto e estável, otimizado para o sistema de embeds do Discord."
      },
      {
        "title": "Use no Discord",
        "body": "Cole seu link em qualquer mensagem, embed de bot ou webhook do Discord para exibi-lo permanentemente."
      }
    ],
    "whyTitle": "Por que usuários do Discord precisam de hospedagem externa",
    "whyItems": [
      {
        "title": "Links da CDN expiram",
        "body": "Desde 2023, o Discord usa URLs assinadas com tokens de expiração que quebram referências externas com o passar do tempo."
      },
      {
        "title": "Embeds permanecem visíveis",
        "body": "Evite espaços reservados de imagem quebrada em seus embeds de bot, webhooks e mensagens fixadas."
      },
      {
        "title": "Integração amigável para bots",
        "body": "Nossas URLs funcionam perfeitamente com Discord.js, discord.py e outros frameworks sem necessidade de gerenciamento de tokens."
      }
    ],
    "faqTitle": "Perguntas Frequentes",
    "faqs": [
      {
        "q": "Por que os links de imagem do Discord expiram?",
        "a": "O Discord alterou sua CDN em 2023 para usar URLs assinadas com tokens de expiração. Imagens enviadas diretamente ao Discord agora possuem URLs que expiram após um período, causando imagens quebradas em favoritos, wikis e embeds externos."
      },
      {
        "q": "Posso usar imagens do ImageToURL em embeds de bots do Discord?",
        "a": "Sim. O ImageToURL fornece URLs de imagem diretas que funcionam perfeitamente nos campos de embed de bots do Discord. As URLs são servidas via HTTPS com cabeçalhos content-type adequados, para que o Discord as renderize como imagens inline."
      },
      {
        "q": "Os links do ImageToURL funcionam no markdown do Discord?",
        "a": "Com certeza. Você pode colar um link do ImageToURL diretamente em uma mensagem do Discord e ele será exibido como uma prévia de imagem incorporada."
      },
      {
        "q": "Existe um limite de tamanho de arquivo para hospedagem de imagens no Discord?",
        "a": "O ImageToURL suporta imagens de até 25MB, o que cobre praticamente qualquer imagem que você queira compartilhar no Discord, hospedada permanentemente sem degradação."
      },
      {
        "q": "Posso hospedar GIFs animados para o Discord?",
        "a": "Sim. O ImageToURL suporta totalmente GIFs animados. Faça upload do seu GIF e obtenha uma URL permanente que reproduz a animação quando incorporada em mensagens do Discord."
      }
    ],
    "ctaTitle": "Pare de perder imagens devido a links expirados do Discord",
    "ctaBody": "Faça upload uma vez e obtenha uma URL permanente que funciona em embeds, bots, webhooks e mensagens para sempre.",
    "ctaButton": "Fazer Upload Agora"
  },
  "tr": {
    "metaTitle": "Discord için Görsel Barındırma — Kalıcı Embed Linkleri | ImageToURL",
    "metaDescription": "Discord embedleri için kalıcı görsel URL'leri alın. Discord CDN linklerinin süresi dolar — Discord'da çalışan güvenilir ve kalıcı görsel barındırma için ImageToURL kullanın.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Süresi dolan CDN tokenları nedeniyle bozulan görselleri önlemek için Discord embedlerine kalıcı görsel URL'leri alın.",
    "badge": "DISCORD KULLANICILARI",
    "h1Pre": "Discord için Görsel Barındırma",
    "h1Highlight": "asla süresi dolmayan.",
    "intro": "Discord CDN linklerinin süresi dolar ve embedlerinizi bozar. Görsellerinizi buraya yükleyin ve Discord mesajlarında, botlarda ve webhook'larda sonsuza kadar çalışan kalıcı, güvenilir URL'ler alın.",
    "howTitle": "Nasıl Çalışır",
    "steps": [
      {
        "title": "Görselinizi Yükleyin",
        "body": "Yüksek hızlı küresel CDN'imize yüklemek için cihazınızdan herhangi bir görsel dosyası seçin."
      },
      {
        "title": "Kalıcı URL Alın",
        "body": "Discord'un embed sistemi için optimize edilmiş, doğrudan ve kararlı bir görsel linki alın."
      },
      {
        "title": "Discord'a Embed Edin",
        "body": "Linkinizi herhangi bir Discord mesajına, bot embed'ine veya webhook'a yapıştırarak kalıcı olarak görüntüleyin."
      }
    ],
    "whyTitle": "Discord Kullanıcıları Neden Harici Barındırmaya İhtiyaç Duyar?",
    "whyItems": [
      {
        "title": "CDN Linklerinin Süresi Dolar",
        "body": "2023'ten beri Discord, harici referansları zamanla bozan süresi dolan tokenlara sahip imzalı URL'ler kullanmaktadır."
      },
      {
        "title": "Embedler Görünür Kalır",
        "body": "Bot embedlerinizde, webhook'larınızda ve sabitlenmiş mesajlarınızda bozuk görsel yer tutucularından kaçının."
      },
      {
        "title": "Bot Dostu Entegrasyon",
        "body": "URL'lerimiz, token yönetimi gerektirmeden Discord.js, discord.py ve diğer framework'lerle mükemmel çalışır."
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular",
    "faqs": [
      {
        "q": "Discord görsel linklerinin süresi neden dolar?",
        "a": "Discord, 2023 yılında CDN'ini süresi dolan tokenlara sahip imzalı URL'ler kullanacak şekilde değiştirdi. Doğrudan Discord'a yüklenen görsellerin URL'leri belirli bir süre sonra dolar ve bu da yer imlerinde, wikilerde ve harici embedlerde görsel bozulmalarına neden olur."
      },
      {
        "q": "ImageToURL görsellerini Discord bot embedlerinde kullanabilir miyim?",
        "a": "Evet. ImageToURL, Discord bot embed alanlarında mükemmel çalışan doğrudan görsel URL'leri sağlar. URL'ler uygun content-type başlıklarıyla HTTPS üzerinden sunulur, bu nedenle Discord bunları satır içi görsel olarak işler."
      },
      {
        "q": "ImageToURL linkleri Discord markdown'ında çalışır mı?",
        "a": "Kesinlikle. Bir ImageToURL linkini doğrudan bir Discord mesajına yapıştırabilirsiniz; bu, gömülü bir görsel önizlemesi olarak görüntülenecektir."
      },
      {
        "q": "Discord görsel barındırma için dosya boyutu sınırı var mı?",
        "a": "ImageToURL, Discord'da paylaşmak isteyeceğiniz hemen hemen her görseli kapsayan 25MB'a kadar olan görselleri destekler ve kalıcı olarak bozulmadan barındırır."
      },
      {
        "q": "Discord için hareketli GIF'ler barındırabilir miyim?",
        "a": "Evet. ImageToURL, hareketli GIF'leri tam olarak destekler. GIF'inizi yükleyin ve Discord mesajlarına embed edildiğinde animasyonu oynatan kalıcı bir URL alın."
      }
    ],
    "ctaTitle": "Süresi dolan Discord linkleri yüzünden görsel kaybetmeye son verin",
    "ctaBody": "Bir kez yükleyin, embedlerde, botlarda, webhook'larda ve mesajlarda sonsuza kadar çalışan kalıcı bir URL alın.",
    "ctaButton": "Şimdi Yükle"
  },
  "tl": {
    "metaTitle": "Image Hosting para sa Discord — Permanenteng Embed Links | ImageToURL",
    "metaDescription": "Kumuha ng permanenteng image URL para sa Discord embeds. Nag-e-expire ang mga Discord CDN link — gamitin ang ImageToURL para sa maaasahan at permanenteng image hosting na gumagana sa Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Kumuha ng permanenteng image URL para sa Discord embeds upang maiwasan ang mga sirang imahe na dulot ng nag-e-expire na CDN tokens.",
    "badge": "PARA SA MGA USER NG DISCORD",
    "h1Pre": "Image Hosting para sa Discord",
    "h1Highlight": "na hindi nag-e-expire.",
    "intro": "Ang mga Discord CDN link ay nag-e-expire at sumisira sa iyong mga embed. I-upload ang iyong mga imahe rito at kumuha ng permanente at maaasahang URL na gagana habang-buhay sa mga mensahe, bot, at webhook sa Discord.",
    "howTitle": "Paano Ito Gumagana",
    "steps": [
      {
        "title": "I-upload ang Iyong Imahe",
        "body": "Pumili ng anumang image file mula sa iyong device para i-upload ito sa aming high-speed global CDN."
      },
      {
        "title": "Kumuha ng Permanenteng URL",
        "body": "Makatanggap ng direkta at stable na image link na optimized para sa embed system ng Discord."
      },
      {
        "title": "I-embed sa Discord",
        "body": "I-paste ang iyong link sa anumang mensahe, bot embed, o webhook sa Discord para ipakita ito nang permanente."
      }
    ],
    "whyTitle": "Bakit Kailangan ng Discord Users ang External Hosting",
    "whyItems": [
      {
        "title": "Nag-e-expire ang mga CDN Link",
        "body": "Simula noong 2023, gumagamit ang Discord ng mga signed URL na may expiration tokens na sumisira sa mga external reference paglipas ng panahon."
      },
      {
        "title": "Nananatiling Nakikita ang mga Embed",
        "body": "Iwasan ang mga sirang image placeholder sa iyong mga bot embed, webhook, at mga naka-pin na mensahe."
      },
      {
        "title": "Bot-Friendly Integration",
        "body": "Ang aming mga URL ay gumagana nang perpekto sa Discord.js, discord.py, at iba pang framework nang walang kailangang pamahalaang token."
      }
    ],
    "faqTitle": "Mga Madalas Itanong",
    "faqs": [
      {
        "q": "Bakit nag-e-expire ang mga image link ng Discord?",
        "a": "Binago ng Discord ang kanilang CDN noong 2023 para gumamit ng mga signed URL na may expiration tokens. Ang mga imaheng direktang in-upload sa Discord ay may mga URL na nag-e-expire pagkatapos ng takdang panahon, na nagiging sanhi ng mga sirang imahe sa mga bookmark, wiki, at external embeds."
      },
      {
        "q": "Maaari ko bang gamitin ang mga imahe mula sa ImageToURL sa mga Discord bot embed?",
        "a": "Oo. Nagbibigay ang ImageToURL ng mga direktang image URL na gumagana nang perpekto sa mga Discord bot embed field. Ang mga URL ay sineserbisyo sa pamamagitan ng HTTPS na may tamang content-type header, kaya ipinapakita ito ng Discord bilang mga inline image."
      },
      {
        "q": "Gumagana ba ang mga link ng ImageToURL sa Discord markdown?",
        "a": "Siyempre. Maaari mong i-paste ang link mula sa ImageToURL nang direkta sa isang mensahe sa Discord at lalabas ito bilang isang embedded image preview."
      },
      {
        "q": "May limitasyon ba sa file size para sa Discord image hosting?",
        "a": "Sinusuportahan ng ImageToURL ang mga imahe hanggang 25MB, na sumasaklaw sa halos anumang imahe na gusto mong ibahagi sa Discord, na naka-host nang permanente nang walang pagbaba ng kalidad."
      },
      {
        "q": "Maaari ba akong mag-host ng mga animated GIF para sa Discord?",
        "a": "Oo. Ganap na sinusuportahan ng ImageToURL ang mga animated GIF. I-upload ang iyong GIF at kumuha ng permanenteng URL na nagpe-play ng animation kapag na-embed sa mga mensahe sa Discord."
      }
    ],
    "ctaTitle": "Itigil ang pagkawala ng mga imahe dahil sa mga expired na Discord link",
    "ctaBody": "I-upload nang isang beses, kumuha ng permanenteng URL na gagana sa mga embed, bot, webhook, at mensahe habang-buhay.",
    "ctaButton": "I-upload Ngayon"
  },
  "pl": {
    "metaTitle": "Hosting zdjęć dla Discord — Stałe linki do osadzania | ImageToURL",
    "metaDescription": "Uzyskaj stałe adresy URL obrazów dla osadzeń na Discordzie. Linki CDN Discorda wygasają — użyj ImageToURL do niezawodnego, trwałego hostingu obrazów, który działa na Discordzie.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Uzyskaj stałe adresy URL obrazów dla osadzeń na Discordzie, aby zapobiec niedziałającym obrazom spowodowanym wygasającymi tokenami CDN.",
    "badge": "DLA UŻYTKOWNIKÓW DISCORDA",
    "h1Pre": "Hosting zdjęć dla Discorda",
    "h1Highlight": "który nigdy nie wygasa.",
    "intro": "Linki CDN Discorda wygasają i psują Twoje osadzenia. Prześlij swoje obrazy tutaj i uzyskaj stałe, niezawodne adresy URL, które działają wiecznie w wiadomościach, botach i webhookach na Discordzie.",
    "howTitle": "Jak to działa",
    "steps": [
      {
        "title": "Prześlij swój obraz",
        "body": "Wybierz dowolny plik graficzny ze swojego urządzenia, aby przesłać go do naszego szybkiego, globalnego CDN."
      },
      {
        "title": "Uzyskaj stały adres URL",
        "body": "Otrzymaj bezpośredni, stabilny link do obrazu, zoptymalizowany pod kątem systemu osadzania Discorda."
      },
      {
        "title": "Osadź na Discordzie",
        "body": "Wklej swój link do dowolnej wiadomości na Discordzie, osadzenia bota lub webhooka, aby wyświetlać go na stałe."
      }
    ],
    "whyTitle": "Dlaczego użytkownicy Discorda potrzebują zewnętrznego hostingu",
    "whyItems": [
      {
        "title": "Linki CDN wygasają",
        "body": "Od 2023 roku Discord używa podpisanych adresów URL z tokenami wygasania, które z czasem psują zewnętrzne odniesienia."
      },
      {
        "title": "Osadzenia pozostają widoczne",
        "body": "Unikaj niedziałających symboli zastępczych obrazów w osadzeniach botów, webhookach i przypiętych wiadomościach."
      },
      {
        "title": "Integracja przyjazna dla botów",
        "body": "Nasze adresy URL działają idealnie z Discord.js, discord.py i innymi frameworkami bez konieczności zarządzania tokenami."
      }
    ],
    "faqTitle": "Często zadawane pytania",
    "faqs": [
      {
        "q": "Dlaczego linki do obrazów na Discordzie wygasają?",
        "a": "Discord zmienił swój CDN w 2023 roku, aby używać podpisanych adresów URL z tokenami wygasania. Obrazy przesłane bezpośrednio na Discorda mają teraz adresy URL, które wygasają po określonym czasie, co powoduje błędy w zakładkach, wiki i zewnętrznych osadzeniach."
      },
      {
        "q": "Czy mogę używać obrazów z ImageToURL w osadzeniach botów Discord?",
        "a": "Tak. ImageToURL zapewnia bezpośrednie adresy URL obrazów, które działają idealnie w polach osadzeń botów Discord. Adresy URL są serwowane przez HTTPS z odpowiednimi nagłówkami content-type, więc Discord renderuje je jako obrazy wbudowane."
      },
      {
        "q": "Czy linki ImageToURL działają w markdownie Discorda?",
        "a": "Oczywiście. Możesz wkleić link ImageToURL bezpośrednio do wiadomości na Discordzie, a wyświetli się on jako podgląd osadzonego obrazu."
      },
      {
        "q": "Czy istnieje limit rozmiaru pliku dla hostingu obrazów na Discordzie?",
        "a": "ImageToURL obsługuje obrazy do 25 MB, co obejmuje praktycznie każdy obraz, który chcesz udostępnić na Discordzie, hostowany na stałe bez utraty jakości."
      },
      {
        "q": "Czy mogę hostować animowane pliki GIF dla Discorda?",
        "a": "Tak. ImageToURL w pełni obsługuje animowane pliki GIF. Prześlij swój GIF i uzyskaj stały adres URL, który odtwarza animację po osadzeniu w wiadomościach na Discordzie."
      }
    ],
    "ctaTitle": "Przestań tracić obrazy przez wygasające linki Discorda",
    "ctaBody": "Prześlij raz, uzyskaj stały adres URL, który działa w osadzeniach, botach, webhookach i wiadomościach na zawsze.",
    "ctaButton": "Prześlij teraz"
  },
  "nl": {
    "metaTitle": "Image Hosting voor Discord — Permanente Embed Links | ImageToURL",
    "metaDescription": "Krijg permanente image URL's voor Discord embeds. Discord CDN links verlopen — gebruik ImageToURL voor betrouwbare, permanente image hosting die werkt in Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Krijg permanente image URL's voor Discord embeds om kapotte afbeeldingen door verlopende CDN-tokens te voorkomen.",
    "badge": "DISCORD GEBRUIKERS",
    "h1Pre": "Image Hosting voor Discord",
    "h1Highlight": "die nooit verloopt.",
    "intro": "Discord CDN links verlopen en maken je embeds kapot. Upload je afbeeldingen hier en krijg permanente, betrouwbare URL's die voor altijd werken in Discord berichten, bots en webhooks.",
    "howTitle": "Hoe het werkt",
    "steps": [
      {
        "title": "Upload je afbeelding",
        "body": "Selecteer een afbeeldingsbestand vanaf je apparaat om het te uploaden naar ons snelle wereldwijde CDN."
      },
      {
        "title": "Krijg een permanente URL",
        "body": "Ontvang een directe, stabiele afbeeldingslink die geoptimaliseerd is voor het embed-systeem van Discord."
      },
      {
        "title": "Embed in Discord",
        "body": "Plak je link in elk Discord bericht, bot embed of webhook om het permanent weer te geven."
      }
    ],
    "whyTitle": "Waarom Discord gebruikers externe hosting nodig hebben",
    "whyItems": [
      {
        "title": "CDN links verlopen",
        "body": "Sinds 2023 gebruikt Discord ondertekende URL's met verloop-tokens die externe verwijzingen na verloop van tijd verbreken."
      },
      {
        "title": "Embeds blijven zichtbaar",
        "body": "Voorkom kapotte afbeeldings-placeholders in je bot embeds, webhooks en vastgezette berichten."
      },
      {
        "title": "Bot-vriendelijke integratie",
        "body": "Onze URL's werken perfect met Discord.js, discord.py en andere frameworks zonder tokenbeheer."
      }
    ],
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Waarom verlopen Discord afbeeldingslinks?",
        "a": "Discord heeft in 2023 hun CDN aangepast om ondertekende URL's met verloop-tokens te gebruiken. Afbeeldingen die direct naar Discord worden geüpload, hebben nu URL's die na een bepaalde periode verlopen, wat zorgt voor kapotte afbeeldingen in bladwijzers, wiki's en externe embeds."
      },
      {
        "q": "Kan ik ImageToURL afbeeldingen gebruiken in Discord bot embeds?",
        "a": "Ja. ImageToURL biedt directe afbeeldings-URL's die perfect werken in Discord bot embed velden. De URL's worden geserveerd via HTTPS met de juiste content-type headers, zodat Discord ze als inline afbeeldingen weergeeft."
      },
      {
        "q": "Werken ImageToURL links in Discord markdown?",
        "a": "Absoluut. Je kunt een ImageToURL link direct in een Discord bericht plakken en het zal worden weergegeven als een ingesloten afbeeldingsvoorbeeld."
      },
      {
        "q": "Is er een bestandsgrootte limiet voor Discord image hosting?",
        "a": "ImageToURL ondersteunt afbeeldingen tot 25MB, wat vrijwel elke afbeelding dekt die je op Discord wilt delen, permanent gehost zonder kwaliteitsverlies."
      },
      {
        "q": "Kan ik geanimeerde GIF's hosten voor Discord?",
        "a": "Ja. ImageToURL ondersteunt volledig geanimeerde GIF's. Upload je GIF en krijg een permanente URL die de animatie afspeelt wanneer deze in Discord berichten wordt ingesloten."
      }
    ],
    "ctaTitle": "Stop met het verliezen van afbeeldingen door verlopen Discord links",
    "ctaBody": "Upload één keer, krijg een permanente URL die voor altijd werkt in embeds, bots, webhooks en berichten.",
    "ctaButton": "Upload nu"
  },
  "it": {
    "metaTitle": "Hosting immagini per Discord — Link permanenti per embed | ImageToURL",
    "metaDescription": "Ottieni URL di immagini permanenti per gli embed di Discord. I link della CDN di Discord scadono: usa ImageToURL per un hosting affidabile e permanente che funziona su Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Ottieni URL di immagini permanenti per gli embed di Discord per evitare immagini interrotte causate dai token CDN in scadenza.",
    "badge": "UTENTI DISCORD",
    "h1Pre": "Hosting immagini per Discord",
    "h1Highlight": "che non scade mai.",
    "intro": "I link della CDN di Discord scadono e rompono i tuoi embed. Carica le tue immagini qui e ottieni URL permanenti e affidabili che funzionano per sempre nei messaggi, nei bot e nei webhook di Discord.",
    "howTitle": "Come funziona",
    "steps": [
      {
        "title": "Carica la tua immagine",
        "body": "Seleziona qualsiasi file immagine dal tuo dispositivo per caricarlo sulla nostra CDN globale ad alta velocità."
      },
      {
        "title": "Ottieni un URL permanente",
        "body": "Ricevi un link diretto e stabile ottimizzato per il sistema di embed di Discord."
      },
      {
        "title": "Inserisci in Discord",
        "body": "Incolla il tuo link in qualsiasi messaggio Discord, embed di bot o webhook per visualizzarlo in modo permanente."
      }
    ],
    "whyTitle": "Perché gli utenti Discord hanno bisogno di un hosting esterno",
    "whyItems": [
      {
        "title": "I link CDN scadono",
        "body": "Dal 2023, Discord utilizza URL firmati con token di scadenza che interrompono i riferimenti esterni nel tempo."
      },
      {
        "title": "Gli embed restano visibili",
        "body": "Evita segnaposto di immagini interrotte nei tuoi embed di bot, webhook e messaggi fissati."
      },
      {
        "title": "Integrazione perfetta per i bot",
        "body": "I nostri URL funzionano perfettamente con Discord.js, discord.py e altri framework senza gestione dei token."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Perché i link delle immagini di Discord scadono?",
        "a": "Discord ha modificato la propria CDN nel 2023 per utilizzare URL firmati con token di scadenza. Le immagini caricate direttamente su Discord ora hanno URL che scadono dopo un certo periodo, causando immagini interrotte in segnalibri, wiki ed embed esterni."
      },
      {
        "q": "Posso usare le immagini di ImageToURL negli embed dei bot Discord?",
        "a": "Sì. ImageToURL fornisce URL di immagini diretti che funzionano perfettamente nei campi embed dei bot Discord. Gli URL sono serviti tramite HTTPS con intestazioni content-type corrette, quindi Discord li visualizza come immagini incorporate."
      },
      {
        "q": "I link di ImageToURL funzionano nel markdown di Discord?",
        "a": "Assolutamente. Puoi incollare un link ImageToURL direttamente in un messaggio Discord e verrà visualizzato come anteprima dell'immagine incorporata."
      },
      {
        "q": "C'è un limite di dimensione del file per l'hosting di immagini Discord?",
        "a": "ImageToURL supporta immagini fino a 25MB, che coprono praticamente qualsiasi immagine che vorresti condividere su Discord, ospitata in modo permanente senza degradazione."
      },
      {
        "q": "Posso ospitare GIF animate per Discord?",
        "a": "Sì. ImageToURL supporta pienamente le GIF animate. Carica la tua GIF e ottieni un URL permanente che riproduce l'animazione quando incorporata nei messaggi Discord."
      }
    ],
    "ctaTitle": "Smetti di perdere immagini a causa dei link Discord scaduti",
    "ctaBody": "Carica una volta, ottieni un URL permanente che funziona per sempre in embed, bot, webhook e messaggi.",
    "ctaButton": "Carica ora"
  },
  "ar": {
    "metaTitle": "استضافة صور لـ Discord — روابط تضمين دائمة | ImageToURL",
    "metaDescription": "احصل على روابط صور دائمة لتضمينات Discord. روابط Discord CDN تنتهي صلاحيتها — استخدم ImageToURL لاستضافة صور موثوقة ودائمة تعمل في Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "احصل على روابط صور دائمة لتضمينات Discord لمنع تعطل الصور الناتج عن انتهاء صلاحية رموز CDN.",
    "badge": "مستخدمو DISCORD",
    "h1Pre": "استضافة صور لـ Discord",
    "h1Highlight": "لا تنتهي صلاحيتها أبداً.",
    "intro": "روابط Discord CDN تنتهي صلاحيتها وتتسبب في تعطل التضمينات. ارفع صورك هنا واحصل على روابط دائمة وموثوقة تعمل للأبد في رسائل Discord، والبوتات، وwebhooks.",
    "howTitle": "كيف يعمل",
    "steps": [
      {
        "title": "ارفع صورتك",
        "body": "اختر أي ملف صورة من جهازك لرفعه إلى شبكة CDN العالمية فائقة السرعة الخاصة بنا."
      },
      {
        "title": "احصل على رابط دائم",
        "body": "احصل على رابط صورة مباشر ومستقر ومُحسّن لنظام التضمين في Discord."
      },
      {
        "title": "التضمين في Discord",
        "body": "انسخ الرابط وضعه في أي رسالة Discord، أو تضمين بوت، أو webhook لعرضها بشكل دائم."
      }
    ],
    "whyTitle": "لماذا يحتاج مستخدمو Discord إلى استضافة خارجية",
    "whyItems": [
      {
        "title": "روابط CDN تنتهي صلاحيتها",
        "body": "منذ عام 2023، يستخدم Discord روابط موقعة برموز انتهاء صلاحية تؤدي إلى تعطل المراجع الخارجية بمرور الوقت."
      },
      {
        "title": "تبقى التضمينات مرئية",
        "body": "تجنب ظهور علامات الصور المعطلة في تضمينات البوتات، وwebhooks، والرسائل المثبتة."
      },
      {
        "title": "تكامل صديق للبوتات",
        "body": "روابطنا تعمل بشكل مثالي مع Discord.js وdiscord.py وإطارات العمل الأخرى دون الحاجة لإدارة الرموز."
      }
    ],
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "لماذا تنتهي صلاحية روابط صور Discord؟",
        "a": "قام Discord بتغيير شبكة CDN الخاصة به في عام 2023 لاستخدام روابط موقعة برموز انتهاء صلاحية. الصور المرفوعة مباشرة إلى Discord أصبحت الآن تمتلك روابط تنتهي بعد فترة محددة، مما يسبب تعطل الصور في الإشارات المرجعية، والويكي، والتضمينات الخارجية."
      },
      {
        "q": "هل يمكنني استخدام صور ImageToURL في تضمينات بوتات Discord؟",
        "a": "نعم. توفر ImageToURL روابط صور مباشرة تعمل بشكل مثالي في حقول تضمين بوتات Discord. يتم تقديم الروابط عبر HTTPS مع ترويسات content-type مناسبة، لذا يعرضها Discord كصور مضمنة."
      },
      {
        "q": "هل تعمل روابط ImageToURL في تنسيق Markdown الخاص بـ Discord؟",
        "a": "بالتأكيد. يمكنك لصق رابط ImageToURL مباشرة في رسالة Discord وسيظهر كمعاينة صورة مضمنة."
      },
      {
        "q": "هل يوجد حد لحجم الملف لاستضافة صور Discord؟",
        "a": "تدعم ImageToURL الصور حتى حجم 25 ميجابايت، وهو ما يغطي فعلياً أي صورة ترغب في مشاركتها على Discord، مع استضافة دائمة دون أي تدهور في الجودة."
      },
      {
        "q": "هل يمكنني استضافة صور GIF متحركة لـ Discord؟",
        "a": "نعم. تدعم ImageToURL صور GIF المتحركة بالكامل. ارفع ملف GIF الخاص بك واحصل على رابط دائم يقوم بتشغيل الحركة عند تضمينه في رسائل Discord."
      }
    ],
    "ctaTitle": "توقف عن فقدان الصور بسبب روابط Discord منتهية الصلاحية",
    "ctaBody": "ارفع مرة واحدة، واحصل على رابط دائم يعمل في التضمينات، والبوتات، وwebhooks، والرسائل للأبد.",
    "ctaButton": "ارفع الآن"
  },
  "bn": {
    "metaTitle": "Discord-এর জন্য ইমেজ হোস্টিং — পার্মানেন্ট এমবেড লিঙ্ক | ImageToURL",
    "metaDescription": "Discord এমবেডের জন্য পার্মানেন্ট ইমেজ URL পান। Discord CDN লিঙ্কগুলোর মেয়াদ শেষ হয়ে যায় — নির্ভরযোগ্য এবং পার্মানেন্ট ইমেজ হোস্টিংয়ের জন্য ImageToURL ব্যবহার করুন যা Discord-এ কাজ করে।",
    "schemaName": "ImageToURL",
    "schemaDescription": "এক্সপায়ারিং CDN টোকেনের কারণে ইমেজ ভেঙে যাওয়া রোধ করতে Discord এমবেডের জন্য পার্মানেন্ট ইমেজ URL পান।",
    "badge": "DISCORD ব্যবহারকারী",
    "h1Pre": "Discord-এর জন্য ইমেজ হোস্টিং",
    "h1Highlight": "যা কখনোই এক্সপায়ার হয় না।",
    "intro": "Discord CDN লিঙ্কগুলোর মেয়াদ শেষ হয়ে যায় এবং আপনার এমবেডগুলো ভেঙে ফেলে। এখানে আপনার ইমেজ আপলোড করুন এবং পার্মানেন্ট, নির্ভরযোগ্য URL পান যা Discord মেসেজ, বট এবং ওয়েবহুকে চিরকাল কাজ করবে।",
    "howTitle": "এটি যেভাবে কাজ করে",
    "steps": [
      {
        "title": "আপনার ইমেজ আপলোড করুন",
        "body": "আমাদের হাই-স্পিড গ্লোবাল CDN-এ আপলোড করতে আপনার ডিভাইস থেকে যেকোনো ইমেজ ফাইল সিলেক্ট করুন।"
      },
      {
        "title": "পার্মানেন্ট URL পান",
        "body": "একটি ডিরেক্ট, স্টেবল ইমেজ লিঙ্ক পান যা Discord-এর এমবেড সিস্টেমের জন্য অপ্টিমাইজ করা।"
      },
      {
        "title": "Discord-এ এমবেড করুন",
        "body": "আপনার লিঙ্কটি যেকোনো Discord মেসেজ, বট এমবেড বা ওয়েবহুকে পেস্ট করুন যাতে এটি স্থায়ীভাবে প্রদর্শিত হয়।"
      }
    ],
    "whyTitle": "কেন Discord ব্যবহারকারীদের এক্সটার্নাল হোস্টিং প্রয়োজন",
    "whyItems": [
      {
        "title": "CDN লিঙ্কের মেয়াদ শেষ হয়",
        "body": "২০২৩ সাল থেকে, Discord সাইনড URL ব্যবহার করে যার এক্সপায়ারেশন টোকেন সময়ের সাথে সাথে এক্সটার্নাল রেফারেন্সগুলো ভেঙে ফেলে।"
      },
      {
        "title": "এমবেডগুলো দৃশ্যমান থাকে",
        "body": "আপনার বট এমবেড, ওয়েবহুক এবং পিন করা মেসেজে ব্রোকেন ইমেজ প্লেসহোল্ডার এড়িয়ে চলুন।"
      },
      {
        "title": "বট-ফ্রেন্ডলি ইন্টিগ্রেশন",
        "body": "আমাদের URL গুলো কোনো টোকেন ম্যানেজমেন্ট ছাড়াই Discord.js, discord.py এবং অন্যান্য ফ্রেমওয়ার্কের সাথে নিখুঁতভাবে কাজ করে।"
      }
    ],
    "faqTitle": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "faqs": [
      {
        "q": "Discord ইমেজ লিঙ্কের মেয়াদ কেন শেষ হয়ে যায়?",
        "a": "Discord ২০২৩ সালে তাদের CDN পরিবর্তন করে সাইনড URL এবং এক্সপায়ারেশন টোকেন ব্যবহার শুরু করেছে। সরাসরি Discord-এ আপলোড করা ইমেজগুলোর URL একটি নির্দিষ্ট সময়ের পর এক্সপায়ার হয়ে যায়, যার ফলে বুকমার্ক, উইকি এবং এক্সটার্নাল এমবেডে ইমেজ ভেঙে যায়।"
      },
      {
        "q": "আমি কি Discord বট এমবেডে ImageToURL ইমেজ ব্যবহার করতে পারি?",
        "a": "হ্যাঁ। ImageToURL সরাসরি ইমেজ URL প্রদান করে যা Discord বট এমবেড ফিল্ডে নিখুঁতভাবে কাজ করে। URL গুলো সঠিক content-type হেডারসহ HTTPS-এর মাধ্যমে সার্ভ করা হয়, তাই Discord সেগুলোকে ইনলাইন ইমেজ হিসেবে রেন্ডার করে।"
      },
      {
        "q": "ImageToURL লিঙ্ক কি Discord মার্কডাউনে কাজ করে?",
        "a": "অবশ্যই। আপনি সরাসরি একটি Discord মেসেজে ImageToURL লিঙ্ক পেস্ট করতে পারেন এবং এটি একটি এমবেডেড ইমেজ প্রিভিউ হিসেবে প্রদর্শিত হবে।"
      },
      {
        "q": "Discord ইমেজ হোস্টিংয়ের জন্য কি কোনো ফাইল সাইজ লিমিট আছে?",
        "a": "ImageToURL ২৫MB পর্যন্ত ইমেজ সাপোর্ট করে, যা Discord-এ শেয়ার করার মতো প্রায় যেকোনো ইমেজের জন্য যথেষ্ট এবং এগুলো স্থায়ীভাবে হোস্ট করা হয়।"
      },
      {
        "q": "আমি কি Discord-এর জন্য অ্যানিমেটেড GIF হোস্ট করতে পারি?",
        "a": "হ্যাঁ। ImageToURL পুরোপুরি অ্যানিমেটেড GIF সাপোর্ট করে। আপনার GIF আপলোড করুন এবং একটি পার্মানেন্ট URL পান যা Discord মেসেজে এমবেড করলে অ্যানিমেশন প্লে করবে।"
      }
    ],
    "ctaTitle": "এক্সপায়ার হয়ে যাওয়া Discord লিঙ্কের কারণে ইমেজ হারানো বন্ধ করুন",
    "ctaBody": "একবার আপলোড করুন, একটি পার্মানেন্ট URL পান যা এমবেড, বট, ওয়েবহুক এবং মেসেজে চিরকাল কাজ করবে।",
    "ctaButton": "এখনই আপলোড করুন"
  },
  "fa": {
    "metaTitle": "میزبانی تصویر برای Discord — لینک‌های دائمی برای Embed | ImageToURL",
    "metaDescription": "لینک‌های دائمی تصویر برای Discord Embed دریافت کنید. لینک‌های CDN دیسکورد منقضی می‌شوند؛ از ImageToURL برای میزبانی مطمئن و دائمی تصویر که در Discord کار می‌کند، استفاده کنید.",
    "schemaName": "ImageToURL",
    "schemaDescription": "دریافت لینک‌های دائمی تصویر برای Discord Embed جهت جلوگیری از خرابی تصاویر ناشی از توکن‌های منقضی‌شده CDN.",
    "badge": "کاربران DISCORD",
    "h1Pre": "میزبانی تصویر برای Discord",
    "h1Highlight": "که هرگز منقضی نمی‌شود.",
    "intro": "لینک‌های CDN دیسکورد منقضی شده و باعث خرابی Embedهای شما می‌شوند. تصاویر خود را اینجا آپلود کنید و لینک‌های دائمی و مطمئنی دریافت کنید که برای همیشه در پیام‌ها، بات‌ها و وب‌هوک‌های Discord کار می‌کنند.",
    "howTitle": "نحوه کارکرد",
    "steps": [
      {
        "title": "تصویر خود را آپلود کنید",
        "body": "هر فایل تصویری را از دستگاه خود انتخاب کنید تا در CDN جهانی و پرسرعت ما آپلود شود."
      },
      {
        "title": "لینک دائمی دریافت کنید",
        "body": "یک لینک مستقیم و پایدار دریافت کنید که برای سیستم Embed دیسکورد بهینه‌سازی شده است."
      },
      {
        "title": "در Discord قرار دهید",
        "body": "لینک خود را در هر پیام، بات Embed یا وب‌هوک دیسکورد قرار دهید تا برای همیشه نمایش داده شود."
      }
    ],
    "whyTitle": "چرا کاربران Discord به میزبانی خارجی نیاز دارند",
    "whyItems": [
      {
        "title": "لینک‌های CDN منقضی می‌شوند",
        "body": "از سال ۲۰۲۳، دیسکورد از URLهای امضا شده با توکن‌های انقضا استفاده می‌کند که ارجاعات خارجی را به مرور زمان از کار می‌اندازد."
      },
      {
        "title": "Embedها قابل مشاهده می‌مانند",
        "body": "از نمایش آیکون‌های خرابی تصویر در بات‌ها، وب‌هوک‌ها و پیام‌های پین‌شده خود جلوگیری کنید."
      },
      {
        "title": "یکپارچه‌سازی آسان برای بات‌ها",
        "body": "لینک‌های ما بدون نیاز به مدیریت توکن، با Discord.js، discord.py و سایر فریم‌ورک‌ها به خوبی کار می‌کنند."
      }
    ],
    "faqTitle": "سوالات متداول",
    "faqs": [
      {
        "q": "چرا لینک‌های تصویر دیسکورد منقضی می‌شوند؟",
        "a": "دیسکورد در سال ۲۰۲۳ CDN خود را تغییر داد تا از URLهای امضا شده با توکن‌های انقضا استفاده کند. تصاویری که مستقیماً در دیسکورد آپلود می‌شوند اکنون دارای URLهایی هستند که پس از مدتی منقضی می‌شوند و باعث خرابی تصاویر در بوک‌مارک‌ها، ویکی‌ها و Embedهای خارجی می‌شوند."
      },
      {
        "q": "آیا می‌توانم از تصاویر ImageToURL در Discord bot embeds استفاده کنم؟",
        "a": "بله. ImageToURL لینک‌های مستقیم تصویر ارائه می‌دهد که در فیلدهای Discord bot embed به خوبی کار می‌کنند. این لینک‌ها از طریق HTTPS با هدرهای content-type مناسب سرو می‌شوند، بنابراین دیسکورد آن‌ها را به عنوان تصاویر داخلی نمایش می‌دهد."
      },
      {
        "q": "آیا لینک‌های ImageToURL در مارک‌داون دیسکورد کار می‌کنند؟",
        "a": "قطعاً. شما می‌توانید لینک ImageToURL را مستقیماً در پیام دیسکورد قرار دهید تا به صورت پیش‌نمایش تصویر Embed شده نمایش داده شود."
      },
      {
        "q": "آیا محدودیتی برای حجم فایل در میزبانی تصویر دیسکورد وجود دارد؟",
        "a": "ImageToURL از تصاویر تا ۲۵ مگابایت پشتیبانی می‌کند که تقریباً شامل هر تصویری است که بخواهید در دیسکورد به اشتراک بگذارید و به صورت دائمی و بدون افت کیفیت میزبانی می‌شود."
      },
      {
        "q": "آیا می‌توانم گیف‌های متحرک برای دیسکورد میزبانی کنم؟",
        "a": "بله. ImageToURL به طور کامل از گیف‌های متحرک پشتیبانی می‌کند. گیف خود را آپلود کنید و یک لینک دائمی دریافت کنید که هنگام Embed شدن در پیام‌های دیسکورد، انیمیشن را پخش می‌کند."
      }
    ],
    "ctaTitle": "دیگر تصاویر خود را به دلیل لینک‌های منقضی شده دیسکورد از دست ندهید",
    "ctaBody": "یک بار آپلود کنید و لینک دائمی دریافت کنید که برای همیشه در Embedها، بات‌ها، وب‌هوک‌ها و پیام‌ها کار می‌کند.",
    "ctaButton": "همین حالا آپلود کنید"
  },
  "ur": {
    "metaTitle": "Discord کے لیے امیج ہوسٹنگ — مستقل ایمبیڈ لنکس | ImageToURL",
    "metaDescription": "Discord ایمبیڈز کے لیے مستقل امیج URLs حاصل کریں۔ Discord CDN لنکس کی میعاد ختم ہو جاتی ہے — قابل اعتماد اور مستقل امیج ہوسٹنگ کے لیے ImageToURL استعمال کریں جو Discord میں کام کرتی ہے۔",
    "schemaName": "ImageToURL",
    "schemaDescription": "ایکسپائر ہونے والے CDN ٹوکنز کی وجہ سے ٹوٹی ہوئی تصاویر سے بچنے کے لیے Discord ایمبیڈز کے لیے مستقل امیج URLs حاصل کریں۔",
    "badge": "DISCORD صارفین",
    "h1Pre": "Discord کے لیے امیج ہوسٹنگ",
    "h1Highlight": "جو کبھی ختم نہیں ہوتی۔",
    "intro": "Discord CDN لنکس کی میعاد ختم ہو جاتی ہے اور آپ کے ایمبیڈز ٹوٹ جاتے ہیں۔ اپنی تصاویر یہاں اپ لوڈ کریں اور مستقل، قابل اعتماد URLs حاصل کریں جو Discord پیغامات، بوٹس، اور ویب ہکس میں ہمیشہ کام کرتے ہیں۔",
    "howTitle": "یہ کیسے کام کرتا ہے",
    "steps": [
      {
        "title": "اپنی تصویر اپ لوڈ کریں",
        "body": "ہماری ہائی اسپیڈ گلوبل CDN پر اپ لوڈ کرنے کے لیے اپنے ڈیوائس سے کوئی بھی امیج فائل منتخب کریں۔"
      },
      {
        "title": "مستقل URL حاصل کریں",
        "body": "ایک براہ راست، مستحکم امیج لنک حاصل کریں جو Discord کے ایمبیڈ سسٹم کے لیے آپٹمائزڈ ہے۔"
      },
      {
        "title": "Discord میں ایمبیڈ کریں",
        "body": "اپنے لنک کو کسی بھی Discord پیغام، بوٹ ایمبیڈ، یا ویب ہک میں پیسٹ کریں تاکہ اسے مستقل طور پر دکھایا جا سکے۔"
      }
    ],
    "whyTitle": "Discord صارفین کو بیرونی ہوسٹنگ کی ضرورت کیوں ہے",
    "whyItems": [
      {
        "title": "CDN لنکس کی میعاد ختم ہو جاتی ہے",
        "body": "2023 سے، Discord ایکسپائریشن ٹوکنز کے ساتھ سائنڈ URLs استعمال کرتا ہے جو وقت کے ساتھ بیرونی حوالہ جات کو توڑ دیتے ہیں۔"
      },
      {
        "title": "ایمبیڈز نظر آتے رہتے ہیں",
        "body": "اپنے بوٹ ایمبیڈز، ویب ہکس، اور پن کیے گئے پیغامات میں ٹوٹی ہوئی تصاویر کے پلیس ہولڈرز سے بچیں۔"
      },
      {
        "title": "بوٹ فرینڈلی انٹیگریشن",
        "body": "ہمارے URLs Discord.js، discord.py، اور دیگر فریم ورکس کے ساتھ بغیر کسی ٹوکن مینجمنٹ کے بہترین کام کرتے ہیں۔"
      }
    ],
    "faqTitle": "اکثر پوچھے گئے سوالات",
    "faqs": [
      {
        "q": "Discord امیج لنکس کی میعاد کیوں ختم ہو جاتی ہے؟",
        "a": "Discord نے 2023 میں اپنے CDN کو تبدیل کر کے ایکسپائریشن ٹوکنز کے ساتھ سائنڈ URLs کا استعمال شروع کیا۔ براہ راست Discord پر اپ لوڈ کی گئی تصاویر کے URLs ایک مقررہ مدت کے بعد ختم ہو جاتے ہیں، جس سے بک مارکس، وکیز، اور بیرونی ایمبیڈز میں تصاویر ٹوٹ جاتی ہیں۔"
      },
      {
        "q": "کیا میں Discord بوٹ ایمبیڈز میں ImageToURL تصاویر استعمال کر سکتا ہوں؟",
        "a": "جی ہاں۔ ImageToURL براہ راست امیج URLs فراہم کرتا ہے جو Discord بوٹ ایمبیڈ فیلڈز میں بہترین کام کرتے ہیں۔ یہ URLs مناسب content-type ہیڈرز کے ساتھ HTTPS پر فراہم کیے جاتے ہیں، لہذا Discord انہیں ان لائن تصاویر کے طور پر دکھاتا ہے۔"
      },
      {
        "q": "کیا ImageToURL لنکس Discord مارک ڈاؤن میں کام کرتے ہیں؟",
        "a": "بالکل۔ آپ ImageToURL لنک کو براہ راست Discord پیغام میں پیسٹ کر سکتے ہیں اور یہ ایک ایمبیڈڈ امیج پریویو کے طور پر ظاہر ہوگا۔"
      },
      {
        "q": "کیا Discord امیج ہوسٹنگ کے لیے فائل سائز کی کوئی حد ہے؟",
        "a": "ImageToURL 25MB تک کی تصاویر کو سپورٹ کرتا ہے، جو عملی طور پر ہر اس تصویر کا احاطہ کرتا ہے جسے آپ Discord پر شیئر کرنا چاہتے ہیں، اور یہ مستقل طور پر ہوسٹ کی جاتی ہیں۔"
      },
      {
        "q": "کیا میں Discord کے لیے اینیمیٹڈ GIFs ہوسٹ کر سکتا ہوں؟",
        "a": "جی ہاں۔ ImageToURL مکمل طور پر اینیمیٹڈ GIFs کو سپورٹ کرتا ہے۔ اپنی GIF اپ لوڈ کریں اور ایک مستقل URL حاصل کریں جو Discord پیغامات میں ایمبیڈ ہونے پر اینیمیشن کو پلے کرتا ہے۔"
      }
    ],
    "ctaTitle": "ایکسپائر ہونے والے Discord لنکس کی وجہ سے تصاویر کھونا بند کریں",
    "ctaBody": "ایک بار اپ لوڈ کریں، ایک مستقل URL حاصل کریں جو ایمبیڈز، بوٹس، ویب ہکس، اور پیغامات میں ہمیشہ کام کرے۔",
    "ctaButton": "ابھی اپ لوڈ کریں"
  },
  "ru": {
    "metaTitle": "Хостинг изображений для Discord — Постоянные ссылки для эмбедов | ImageToURL",
    "metaDescription": "Получайте постоянные ссылки на изображения для эмбедов в Discord. Ссылки CDN Discord имеют срок действия — используйте ImageToURL для надежного хостинга изображений, которые всегда отображаются в Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Получайте постоянные URL-адреса изображений для эмбедов в Discord, чтобы избежать битых ссылок из-за истечения срока действия токенов CDN.",
    "badge": "ДЛЯ ПОЛЬЗОВАТЕЛЕЙ DISCORD",
    "h1Pre": "Хостинг изображений для Discord",
    "h1Highlight": "который никогда не истекает.",
    "intro": "Ссылки CDN Discord имеют срок действия и ломают ваши эмбеды. Загружайте изображения здесь и получайте постоянные, надежные ссылки, которые будут работать вечно в сообщениях, ботах и вебхуках Discord.",
    "howTitle": "Как это работает",
    "steps": [
      {
        "title": "Загрузите изображение",
        "body": "Выберите любой файл изображения на вашем устройстве, чтобы загрузить его в наш высокоскоростной глобальный CDN."
      },
      {
        "title": "Получите постоянную ссылку",
        "body": "Получите прямую, стабильную ссылку на изображение, оптимизированную для системы эмбедов Discord."
      },
      {
        "title": "Вставьте в Discord",
        "body": "Вставьте ссылку в любое сообщение, эмбед бота или вебхук в Discord, чтобы изображение отображалось постоянно."
      }
    ],
    "whyTitle": "Почему пользователям Discord нужен внешний хостинг",
    "whyItems": [
      {
        "title": "Ссылки CDN истекают",
        "body": "С 2023 года Discord использует подписанные URL-адреса с токенами истечения срока действия, из-за чего внешние ссылки со временем перестают работать."
      },
      {
        "title": "Эмбеды остаются видимыми",
        "body": "Избегайте появления битых изображений в эмбедах ботов, вебхуках и закрепленных сообщениях."
      },
      {
        "title": "Интеграция для ботов",
        "body": "Наши ссылки отлично работают с Discord.js, discord.py и другими фреймворками без необходимости управления токенами."
      }
    ],
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Почему ссылки на изображения в Discord перестают работать?",
        "a": "В 2023 году Discord изменил работу своего CDN, внедрив подписанные URL-адреса с токенами истечения срока действия. Изображения, загруженные напрямую в Discord, теперь имеют ссылки, которые перестают работать через определенное время, что приводит к битым изображениям в закладках, вики и внешних эмбедах."
      },
      {
        "q": "Можно ли использовать изображения ImageToURL в эмбедах ботов Discord?",
        "a": "Да. ImageToURL предоставляет прямые ссылки на изображения, которые идеально работают в полях эмбедов ботов Discord. Ссылки передаются через HTTPS с правильными заголовками content-type, поэтому Discord отображает их как встроенные изображения."
      },
      {
        "q": "Работают ли ссылки ImageToURL в разметке Discord?",
        "a": "Безусловно. Вы можете вставить ссылку ImageToURL прямо в сообщение Discord, и она отобразится как встроенный предпросмотр изображения."
      },
      {
        "q": "Есть ли ограничение на размер файла для хостинга изображений Discord?",
        "a": "ImageToURL поддерживает изображения до 25 МБ, что покрывает практически любые изображения, которыми вы хотели бы поделиться в Discord, с постоянным хранением без потери качества."
      },
      {
        "q": "Можно ли хостить анимированные GIF для Discord?",
        "a": "Да. ImageToURL полностью поддерживает анимированные GIF. Загрузите свой GIF и получите постоянную ссылку, которая будет воспроизводить анимацию при вставке в сообщения Discord."
      }
    ],
    "ctaTitle": "Перестаньте терять изображения из-за истекших ссылок Discord",
    "ctaBody": "Загрузите один раз и получите постоянную ссылку, которая будет работать в эмбедах, ботах, вебхуках и сообщениях вечно.",
    "ctaButton": "Загрузить сейчас"
  },
  "th": {
    "metaTitle": "โฮสต์รูปภาพสำหรับ Discord — ลิงก์ Embed ถาวร | ImageToURL",
    "metaDescription": "รับลิงก์รูปภาพถาวรสำหรับ Discord embeds ลิงก์ Discord CDN มีวันหมดอายุ — ใช้ ImageToURL เพื่อโฮสต์รูปภาพที่เชื่อถือได้และถาวรสำหรับ Discord",
    "schemaName": "ImageToURL",
    "schemaDescription": "รับลิงก์รูปภาพถาวรสำหรับ Discord embeds เพื่อป้องกันรูปภาพเสียจากโทเค็น CDN ที่หมดอายุ",
    "badge": "สำหรับผู้ใช้ DISCORD",
    "h1Pre": "โฮสต์รูปภาพสำหรับ Discord",
    "h1Highlight": "ที่ไม่มีวันหมดอายุ",
    "intro": "ลิงก์ Discord CDN มีวันหมดอายุและทำให้ embeds ของคุณเสีย อัปโหลดรูปภาพของคุณที่นี่เพื่อรับลิงก์ที่ถาวรและเชื่อถือได้ ซึ่งใช้งานได้ตลอดไปในข้อความ Discord, บอท และเว็บฮุค",
    "howTitle": "วิธีการใช้งาน",
    "steps": [
      {
        "title": "อัปโหลดรูปภาพของคุณ",
        "body": "เลือกไฟล์รูปภาพจากอุปกรณ์ของคุณเพื่ออัปโหลดไปยัง CDN ความเร็วสูงระดับโลกของเรา"
      },
      {
        "title": "รับลิงก์ถาวร",
        "body": "รับลิงก์รูปภาพโดยตรงที่เสถียรและปรับแต่งมาเพื่อระบบ embed ของ Discord โดยเฉพาะ"
      },
      {
        "title": "Embed ใน Discord",
        "body": "วางลิงก์ของคุณลงในข้อความ Discord, บอท embed หรือเว็บฮุค เพื่อแสดงผลอย่างถาวร"
      }
    ],
    "whyTitle": "ทำไมผู้ใช้ Discord ถึงต้องการโฮสต์ภายนอก",
    "whyItems": [
      {
        "title": "ลิงก์ CDN มีวันหมดอายุ",
        "body": "ตั้งแต่ปี 2023 เป็นต้นมา Discord ใช้ Signed URLs ที่มีโทเค็นหมดอายุ ซึ่งทำให้การอ้างอิงภายนอกใช้งานไม่ได้เมื่อเวลาผ่านไป"
      },
      {
        "title": "Embed แสดงผลได้ตลอดไป",
        "body": "หลีกเลี่ยงปัญหาภาพเสียในบอท embed, เว็บฮุค และข้อความที่ปักหมุดของคุณ"
      },
      {
        "title": "รองรับการใช้งานกับบอท",
        "body": "ลิงก์ของเราทำงานร่วมกับ Discord.js, discord.py และเฟรมเวิร์กอื่นๆ ได้อย่างสมบูรณ์แบบโดยไม่ต้องจัดการโทเค็น"
      }
    ],
    "faqTitle": "คำถามที่พบบ่อย",
    "faqs": [
      {
        "q": "ทำไมลิงก์รูปภาพของ Discord ถึงหมดอายุ?",
        "a": "Discord เปลี่ยนระบบ CDN ในปี 2023 มาใช้ Signed URLs ที่มีโทเค็นหมดอายุ รูปภาพที่อัปโหลดโดยตรงไปยัง Discord จะมีลิงก์ที่หมดอายุหลังจากช่วงเวลาหนึ่ง ทำให้เกิดปัญหาภาพเสียในบุ๊กมาร์ก, วิกิ และ embeds ภายนอก"
      },
      {
        "q": "ฉันสามารถใช้รูปภาพจาก ImageToURL ใน Discord bot embeds ได้หรือไม่?",
        "a": "ได้ ImageToURL ให้ลิงก์รูปภาพโดยตรงที่ทำงานได้ดีเยี่ยมในช่อง Discord bot embed ลิงก์ถูกส่งผ่าน HTTPS พร้อม Content-Type headers ที่ถูกต้อง ทำให้ Discord แสดงผลเป็นรูปภาพแบบ inline ได้"
      },
      {
        "q": "ลิงก์จาก ImageToURL ใช้ใน Discord markdown ได้ไหม?",
        "a": "ได้แน่นอน คุณสามารถวางลิงก์จาก ImageToURL ลงในข้อความ Discord ได้โดยตรง แล้วมันจะแสดงผลเป็นพรีวิวรูปภาพแบบ embed"
      },
      {
        "q": "มีการจำกัดขนาดไฟล์สำหรับการโฮสต์รูปภาพใน Discord หรือไม่?",
        "a": "ImageToURL รองรับรูปภาพสูงสุด 25MB ซึ่งครอบคลุมรูปภาพเกือบทุกประเภทที่คุณต้องการแชร์บน Discord โดยโฮสต์ไว้แบบถาวรและไม่มีการลดคุณภาพ"
      },
      {
        "q": "ฉันสามารถโฮสต์ไฟล์ GIF แบบเคลื่อนไหวสำหรับ Discord ได้ไหม?",
        "a": "ได้ ImageToURL รองรับไฟล์ GIF แบบเคลื่อนไหวอย่างเต็มรูปแบบ อัปโหลด GIF ของคุณและรับลิงก์ถาวรที่เล่นแอนิเมชันได้เมื่อนำไป embed ในข้อความ Discord"
      }
    ],
    "ctaTitle": "หยุดสูญเสียรูปภาพจากลิงก์ Discord ที่หมดอายุ",
    "ctaBody": "อัปโหลดครั้งเดียว รับลิงก์ถาวรที่ใช้งานได้ใน embeds, บอท, เว็บฮุค และข้อความตลอดไป",
    "ctaButton": "อัปโหลดเลย"
  },
  "ko": {
    "metaTitle": "Discord용 이미지 호스팅 — 영구 임베드 링크 | ImageToURL",
    "metaDescription": "Discord 임베드를 위한 영구 이미지 URL을 받으세요. Discord CDN 링크는 만료됩니다. Discord에서 작동하는 안정적이고 영구적인 이미지 호스팅을 위해 ImageToURL을 사용하세요.",
    "schemaName": "ImageToURL",
    "schemaDescription": "만료되는 CDN 토큰으로 인한 이미지 깨짐을 방지하기 위해 Discord 임베드용 영구 이미지 URL을 받으세요.",
    "badge": "DISCORD 사용자",
    "h1Pre": "Discord용 이미지 호스팅",
    "h1Highlight": "만료되지 않습니다.",
    "intro": "Discord CDN 링크는 만료되어 임베드가 깨집니다. 여기에 이미지를 업로드하고 Discord 메시지, 봇, 웹후크에서 영원히 작동하는 안정적인 영구 URL을 받으세요.",
    "howTitle": "작동 방식",
    "steps": [
      {
        "title": "이미지 업로드",
        "body": "기기에서 이미지 파일을 선택하여 고속 글로벌 CDN에 업로드하세요."
      },
      {
        "title": "영구 URL 받기",
        "body": "Discord의 임베드 시스템에 최적화된 직접적이고 안정적인 이미지 링크를 받으세요."
      },
      {
        "title": "Discord에 임베드",
        "body": "링크를 Discord 메시지, 봇 임베드 또는 웹후크에 붙여넣어 영구적으로 표시하세요."
      }
    ],
    "whyTitle": "Discord 사용자가 외부 호스팅을 필요로 하는 이유",
    "whyItems": [
      {
        "title": "CDN 링크 만료",
        "body": "2023년부터 Discord는 시간이 지나면 외부 참조가 깨지는 만료 토큰이 포함된 서명된 URL을 사용합니다."
      },
      {
        "title": "임베드 유지",
        "body": "봇 임베드, 웹후크 및 고정된 메시지에서 깨진 이미지 표시를 방지하세요."
      },
      {
        "title": "봇 친화적 통합",
        "body": "당사의 URL은 토큰 관리 없이 Discord.js, discord.py 및 기타 프레임워크와 완벽하게 작동합니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "Discord 이미지 링크는 왜 만료되나요?",
        "a": "Discord는 2023년에 만료 토큰이 포함된 서명된 URL을 사용하도록 CDN을 변경했습니다. Discord에 직접 업로드된 이미지는 일정 시간이 지나면 만료되는 URL을 가지게 되어 북마크, 위키 및 외부 임베드에서 이미지가 깨지는 현상이 발생합니다."
      },
      {
        "q": "Discord 봇 임베드에 ImageToURL 이미지를 사용할 수 있나요?",
        "a": "네. ImageToURL은 Discord 봇 임베드 필드에서 완벽하게 작동하는 직접 이미지 URL을 제공합니다. URL은 적절한 content-type 헤더와 함께 HTTPS를 통해 제공되므로 Discord에서 인라인 이미지로 렌더링됩니다."
      },
      {
        "q": "ImageToURL 링크가 Discord 마크다운에서 작동하나요?",
        "a": "물론입니다. ImageToURL 링크를 Discord 메시지에 직접 붙여넣으면 임베드된 이미지 미리보기로 표시됩니다."
      },
      {
        "q": "Discord 이미지 호스팅에 파일 크기 제한이 있나요?",
        "a": "ImageToURL은 최대 25MB까지의 이미지를 지원하며, 이는 Discord에서 공유하려는 거의 모든 이미지를 영구적으로 호스팅하기에 충분합니다."
      },
      {
        "q": "Discord용 애니메이션 GIF를 호스팅할 수 있나요?",
        "a": "네. ImageToURL은 애니메이션 GIF를 완벽하게 지원합니다. GIF를 업로드하고 Discord 메시지에 임베드할 때 애니메이션이 재생되는 영구 URL을 받으세요."
      }
    ],
    "ctaTitle": "만료된 Discord 링크 때문에 이미지를 잃어버리지 마세요",
    "ctaBody": "한 번 업로드하고 임베드, 봇, 웹후크 및 메시지에서 영원히 작동하는 영구 URL을 받으세요.",
    "ctaButton": "지금 업로드"
  },
  "sw": {
    "metaTitle": "Hosting ya Picha kwa Discord — Viungo vya Kudumu vya Embed | ImageToURL",
    "metaDescription": "Pata URL za picha za kudumu kwa ajili ya Discord embeds. Viungo vya Discord CDN huisha muda wake — tumia ImageToURL kwa hosting ya picha ya kuaminika na ya kudumu inayofanya kazi Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Pata URL za picha za kudumu kwa ajili ya Discord embeds ili kuzuia picha zilizovunjika zinazosababishwa na tokeni za CDN zinazoisha muda wake.",
    "badge": "WATUMIAJI WA DISCORD",
    "h1Pre": "Hosting ya Picha kwa Discord",
    "h1Highlight": "isiyoisha muda wake.",
    "intro": "Viungo vya Discord CDN huisha muda wake na kuvunja embeds zako. Pakia picha zako hapa na upate URL za kudumu na za kuaminika zinazofanya kazi milele kwenye ujumbe wa Discord, boti, na webhook.",
    "howTitle": "Jinsi Inavyofanya Kazi",
    "steps": [
      {
        "title": "Pakia Picha Yako",
        "body": "Chagua faili yoyote ya picha kutoka kwenye kifaa chako ili kuipakia kwenye CDN yetu ya kasi ya juu ya kimataifa."
      },
      {
        "title": "Pata URL ya Kudumu",
        "body": "Pokea kiungo cha moja kwa moja na thabiti cha picha ambacho kimeboreshwa kwa ajili ya mfumo wa embed wa Discord."
      },
      {
        "title": "Embed kwenye Discord",
        "body": "Bandika kiungo chako kwenye ujumbe wowote wa Discord, bot embed, au webhook ili kuionyesha kwa kudumu."
      }
    ],
    "whyTitle": "Kwa Nini Watumiaji wa Discord Wanahitaji Hosting ya Nje",
    "whyItems": [
      {
        "title": "Viungo vya CDN Huisha Muda",
        "body": "Tangu 2023, Discord hutumia URL zilizotiwa saini na tokeni za muda zinazovunja marejeleo ya nje baada ya muda."
      },
      {
        "title": "Embeds Hubaki Kuonekana",
        "body": "Epuka alama za picha zilizovunjika kwenye bot embeds, webhook, na ujumbe uliowekwa alama (pinned)."
      },
      {
        "title": "Ujumuishaji Rahisi kwa Boti",
        "body": "URL zetu hufanya kazi kikamilifu na Discord.js, discord.py, na mifumo mingine bila kuhitaji usimamizi wa tokeni."
      }
    ],
    "faqTitle": "Maswali Yanayoulizwa Mara Kwa Mara",
    "faqs": [
      {
        "q": "Kwa nini viungo vya picha vya Discord huisha muda wake?",
        "a": "Discord ilibadilisha CDN yao mwaka 2023 ili kutumia URL zilizotiwa saini na tokeni za muda. Picha zilizopakiwa moja kwa moja kwenye Discord sasa zina URL zinazoisha muda wake baada ya kipindi fulani, na kusababisha picha kuvunjika kwenye alamisho, wiki, na embeds za nje."
      },
      {
        "q": "Je, ninaweza kutumia picha za ImageToURL kwenye Discord bot embeds?",
        "a": "Ndiyo. ImageToURL hutoa URL za picha za moja kwa moja zinazofanya kazi kikamilifu kwenye sehemu za Discord bot embed. URL hizo hutumwa kupitia HTTPS na vichwa (headers) sahihi vya content-type, hivyo Discord huzionyesha kama picha za ndani."
      },
      {
        "q": "Je, viungo vya ImageToURL hufanya kazi kwenye Discord markdown?",
        "a": "Bila shaka. Unaweza kubandika kiungo cha ImageToURL moja kwa moja kwenye ujumbe wa Discord na kitaonekana kama onyesho la picha iliyopachikwa."
      },
      {
        "q": "Je, kuna kikomo cha ukubwa wa faili kwa hosting ya picha ya Discord?",
        "a": "ImageToURL inasaidia picha hadi 25MB, ambayo inatosha kwa karibu picha yoyote unayotaka kushiriki kwenye Discord, ikiwa imehifadhiwa kwa kudumu bila kupoteza ubora."
      },
      {
        "q": "Je, ninaweza kuhifadhi GIF zilizohuishwa kwa Discord?",
        "a": "Ndiyo. ImageToURL inasaidia kikamilifu GIF zilizohuishwa. Pakia GIF yako na upate URL ya kudumu inayocheza uhuishaji inapopachikwa kwenye ujumbe wa Discord."
      }
    ],
    "ctaTitle": "Acha kupoteza picha kwa sababu ya viungo vya Discord vilivyoisha muda",
    "ctaBody": "Pakia mara moja, pata URL ya kudumu inayofanya kazi kwenye embeds, boti, webhook, na ujumbe milele.",
    "ctaButton": "Pakia Sasa"
  },
  "ms": {
    "metaTitle": "Hosting Imej untuk Discord — Pautan Embed Kekal | ImageToURL",
    "metaDescription": "Dapatkan URL imej kekal untuk embed Discord. Pautan CDN Discord akan tamat tempoh — gunakan ImageToURL untuk hosting imej yang boleh dipercayai dan kekal untuk Discord.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Dapatkan URL imej kekal untuk embed Discord bagi mengelakkan imej rosak akibat token CDN yang tamat tempoh.",
    "badge": "PENGGUNA DISCORD",
    "h1Pre": "Hosting Imej untuk Discord",
    "h1Highlight": "yang tidak pernah tamat tempoh.",
    "intro": "Pautan CDN Discord akan tamat tempoh dan merosakkan embed anda. Muat naik imej anda di sini dan dapatkan URL yang kekal serta boleh dipercayai untuk digunakan selama-lamanya dalam mesej, bot, dan webhook Discord.",
    "howTitle": "Cara Ia Berfungsi",
    "steps": [
      {
        "title": "Muat Naik Imej Anda",
        "body": "Pilih mana-mana fail imej daripada peranti anda untuk memuat naiknya ke CDN global berkelajuan tinggi kami."
      },
      {
        "title": "Dapatkan URL Kekal",
        "body": "Terima pautan imej terus yang stabil dan dioptimumkan untuk sistem embed Discord."
      },
      {
        "title": "Embed dalam Discord",
        "body": "Tampal pautan anda ke dalam mana-mana mesej Discord, embed bot, atau webhook untuk memaparkannya secara kekal."
      }
    ],
    "whyTitle": "Mengapa Pengguna Discord Memerlukan Hosting Luaran",
    "whyItems": [
      {
        "title": "Pautan CDN Tamat Tempoh",
        "body": "Sejak 2023, Discord menggunakan URL bertanda dengan token tamat tempoh yang menyebabkan rujukan luaran rosak dari masa ke masa."
      },
      {
        "title": "Embed Kekal Kelihatan",
        "body": "Elakkan paparan imej rosak dalam embed bot, webhook, dan mesej yang disematkan (pinned)."
      },
      {
        "title": "Integrasi Mesra Bot",
        "body": "URL kami berfungsi dengan sempurna bersama Discord.js, discord.py, dan rangka kerja lain tanpa perlu menguruskan token."
      }
    ],
    "faqTitle": "Soalan Lazim",
    "faqs": [
      {
        "q": "Mengapa pautan imej Discord tamat tempoh?",
        "a": "Discord menukar CDN mereka pada tahun 2023 untuk menggunakan URL bertanda dengan token tamat tempoh. Imej yang dimuat naik terus ke Discord kini mempunyai URL yang tamat tempoh selepas tempoh tertentu, menyebabkan imej rosak dalam penanda buku, wiki, dan embed luaran."
      },
      {
        "q": "Bolehkah saya menggunakan imej ImageToURL dalam embed bot Discord?",
        "a": "Ya. ImageToURL menyediakan URL imej terus yang berfungsi dengan sempurna dalam medan embed bot Discord. URL dihoskan melalui HTTPS dengan pengepala content-type yang betul, jadi Discord akan memaparkannya sebagai imej inline."
      },
      {
        "q": "Adakah pautan ImageToURL berfungsi dalam markdown Discord?",
        "a": "Sudah tentu. Anda boleh menampal pautan ImageToURL terus ke dalam mesej Discord dan ia akan dipaparkan sebagai pratonton imej yang di-embed."
      },
      {
        "q": "Adakah terdapat had saiz fail untuk hosting imej Discord?",
        "a": "ImageToURL menyokong imej sehingga 25MB, yang merangkumi hampir semua imej yang anda ingin kongsi di Discord, dihoskan secara kekal tanpa penurunan kualiti."
      },
      {
        "q": "Bolehkah saya menghoskan GIF animasi untuk Discord?",
        "a": "Ya. ImageToURL menyokong sepenuhnya GIF animasi. Muat naik GIF anda dan dapatkan URL kekal yang memainkan animasi apabila di-embed dalam mesej Discord."
      }
    ],
    "ctaTitle": "Berhenti kehilangan imej akibat pautan Discord yang tamat tempoh",
    "ctaBody": "Muat naik sekali, dapatkan URL kekal yang berfungsi dalam embed, bot, webhook, dan mesej selama-lamanya.",
    "ctaButton": "Muat Naik Sekarang"
  },
  "ta": {
    "metaTitle": "Discord-க்கான பட ஹோஸ்டிங் — நிரந்தர எம்பெட் இணைப்புகள் | ImageToURL",
    "metaDescription": "Discord எம்பெட்களுக்கு நிரந்தர பட URL-களைப் பெறுங்கள். Discord CDN இணைப்புகள் காலாவதியாகிவிடும் — Discord-இல் வேலை செய்யும் நம்பகமான, நிரந்தர பட ஹோஸ்டிங்கிற்கு ImageToURL-ஐப் பயன்படுத்துங்கள்.",
    "schemaName": "ImageToURL",
    "schemaDescription": "காலாவதியாகும் CDN டோக்கன்களால் ஏற்படும் உடைந்த படங்களைத் தவிர்க்க, Discord எம்பெட்களுக்கு நிரந்தர பட URL-களைப் பெறுங்கள்.",
    "badge": "DISCORD பயனர்கள்",
    "h1Pre": "Discord-க்கான பட ஹோஸ்டிங்",
    "h1Highlight": "இது ஒருபோதும் காலாவதியாகாது.",
    "intro": "Discord CDN இணைப்புகள் காலாவதியாகி உங்கள் எம்பெட்களை உடைக்கின்றன. உங்கள் படங்களை இங்கே பதிவேற்றி, Discord செய்திகள், பாட்கள் மற்றும் வெப்ஹூக்குகளில் எப்போதும் வேலை செய்யும் நிரந்தரமான, நம்பகமான URL-களைப் பெறுங்கள்.",
    "howTitle": "இது எப்படி வேலை செய்கிறது",
    "steps": [
      {
        "title": "உங்கள் படத்தை பதிவேற்றவும்",
        "body": "எங்கள் அதிவேக உலகளாவிய CDN-இல் பதிவேற்ற உங்கள் சாதனத்திலிருந்து ஏதேனும் ஒரு படக் கோப்பைத் தேர்ந்தெடுக்கவும்."
      },
      {
        "title": "நிரந்தர URL-ஐப் பெறவும்",
        "body": "Discord-இன் எம்பெட் சிஸ்டத்திற்காக மேம்படுத்தப்பட்ட நேரடி, நிலையான பட இணைப்பைப் பெறுங்கள்."
      },
      {
        "title": "Discord-இல் எம்பெட் செய்யவும்",
        "body": "உங்கள் இணைப்பை எந்தவொரு Discord செய்தி, பாட் எம்பெட் அல்லது வெப்ஹூக்கிலும் ஒட்டி நிரந்தரமாகக் காட்டவும்."
      }
    ],
    "whyTitle": "Discord பயனர்களுக்கு ஏன் வெளிப்புற ஹோஸ்டிங் தேவை",
    "whyItems": [
      {
        "title": "CDN இணைப்புகள் காலாவதியாகின்றன",
        "body": "2023 முதல், Discord காலாவதி டோக்கன்களைக் கொண்ட கையொப்பமிடப்பட்ட URL-களைப் பயன்படுத்துகிறது, இது காலப்போக்கில் வெளிப்புற குறிப்புகளை உடைக்கிறது."
      },
      {
        "title": "எம்பெட்கள் தொடர்ந்து தெரியும்",
        "body": "உங்கள் பாட் எம்பெட்கள், வெப்ஹூக்குகள் மற்றும் பின் செய்யப்பட்ட செய்திகளில் உடைந்த பட இடங்களை (placeholders) தவிர்க்கவும்."
      },
      {
        "title": "பாட்-நட்பு ஒருங்கிணைப்பு",
        "body": "எங்கள் URL-கள் Discord.js, discord.py மற்றும் பிற கட்டமைப்புகளுடன் டோக்கன் மேலாண்மை இல்லாமல் சரியாக வேலை செய்கின்றன."
      }
    ],
    "faqTitle": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faqs": [
      {
        "q": "Discord பட இணைப்புகள் ஏன் காலாவதியாகின்றன?",
        "a": "Discord 2023-இல் தனது CDN-ஐ மாற்றி, காலாவதி டோக்கன்களைக் கொண்ட கையொப்பமிடப்பட்ட URL-களைப் பயன்படுத்தத் தொடங்கியது. நேரடியாக Discord-இல் பதிவேற்றப்படும் படங்கள் இப்போது ஒரு குறிப்பிட்ட காலத்திற்குப் பிறகு காலாவதியாகும் URL-களைக் கொண்டுள்ளன, இது புக்மார்க்குகள், விக்கிகள் மற்றும் வெளிப்புற எம்பெட்களில் படங்களை உடைக்கிறது."
      },
      {
        "q": "Discord பாட் எம்பெட்களில் நான் ImageToURL படங்களைப் பயன்படுத்தலாமா?",
        "a": "ஆம். ImageToURL ஆனது Discord பாட் எம்பெட் புலங்களில் சரியாக வேலை செய்யும் நேரடி பட URL-களை வழங்குகிறது. URL-கள் சரியான content-type தலைப்புகளுடன் HTTPS வழியாக வழங்கப்படுகின்றன, எனவே Discord அவற்றை இன்லைன் படங்களாகக் காட்டுகிறது."
      },
      {
        "q": "ImageToURL இணைப்புகள் Discord மார்க் டவுனில் வேலை செய்யுமா?",
        "a": "நிச்சயமாக. நீங்கள் ஒரு ImageToURL இணைப்பை நேரடியாக Discord செய்தியில் ஒட்டலாம், அது எம்பெட் செய்யப்பட்ட பட முன்னோட்டமாகத் தோன்றும்."
      },
      {
        "q": "Discord பட ஹோஸ்டிங்கிற்கு கோப்பு அளவு வரம்பு உள்ளதா?",
        "a": "ImageToURL 25MB வரையிலான படங்களை ஆதரிக்கிறது, இது Discord-இல் நீங்கள் பகிர விரும்பும் எந்தவொரு படத்திற்கும் போதுமானது, மேலும் அவை தரமிறக்கம் இல்லாமல் நிரந்தரமாக ஹோஸ்ட் செய்யப்படும்."
      },
      {
        "q": "Discord-க்காக அனிமேஷன் செய்யப்பட்ட GIF-களை நான் ஹோஸ்ட் செய்யலாமா?",
        "a": "ஆம். ImageToURL அனிமேஷன் செய்யப்பட்ட GIF-களை முழுமையாக ஆதரிக்கிறது. உங்கள் GIF-ஐப் பதிவேற்றி, Discord செய்திகளில் எம்பெட் செய்யப்படும்போது அனிமேஷனை இயக்கும் நிரந்தர URL-ஐப் பெறுங்கள்."
      }
    ],
    "ctaTitle": "காலாவதியான Discord இணைப்புகளால் படங்களை இழப்பதை நிறுத்துங்கள்",
    "ctaBody": "ஒருமுறை பதிவேற்றுங்கள், எம்பெட்கள், பாட்கள், வெப்ஹூக்குகள் மற்றும் செய்திகளில் எப்போதும் வேலை செய்யும் நிரந்தர URL-ஐப் பெறுங்கள்.",
    "ctaButton": "இப்போதே பதிவேற்றுங்கள்"
  },
  "mr": {
    "metaTitle": "Discord साठी इमेज होस्टिंग — कायमस्वरूपी एम्बेड लिंक्स | ImageToURL",
    "metaDescription": "Discord एम्बेडसाठी कायमस्वरूपी इमेज URL मिळवा. Discord CDN लिंक्सची मुदत संपते — विश्वासार्ह आणि कायमस्वरूपी इमेज होस्टिंगसाठी ImageToURL वापरा.",
    "schemaName": "ImageToURL",
    "schemaDescription": "CDN टोकन्सची मुदत संपल्यामुळे होणाऱ्या इमेज एरर्स टाळण्यासाठी Discord एम्बेडसाठी कायमस्वरूपी इमेज URL मिळवा.",
    "badge": "DISCORD वापरकर्ते",
    "h1Pre": "Discord साठी इमेज होस्टिंग",
    "h1Highlight": "जे कधीही संपत नाही.",
    "intro": "Discord CDN लिंक्सची मुदत संपते आणि तुमचे एम्बेड्स खराब होतात. तुमच्या इमेजेस येथे अपलोड करा आणि कायमस्वरूपी, विश्वासार्ह URL मिळवा ज्या Discord मेसेज, बॉट्स आणि वेबहुक्समध्ये नेहमी काम करतील.",
    "howTitle": "हे कसे कार्य करते",
    "steps": [
      {
        "title": "तुमची इमेज अपलोड करा",
        "body": "आमच्या हाय-स्पीड ग्लोबल CDN वर अपलोड करण्यासाठी तुमच्या डिव्हाइसवरून कोणतीही इमेज फाईल निवडा."
      },
      {
        "title": "कायमस्वरूपी URL मिळवा",
        "body": "Discord च्या एम्बेड सिस्टमसाठी ऑप्टिमाइझ केलेली थेट आणि स्थिर इमेज लिंक मिळवा."
      },
      {
        "title": "Discord मध्ये एम्बेड करा",
        "body": "तुमची लिंक कोणत्याही Discord मेसेज, बॉट एम्बेड किंवा वेबहुकमध्ये पेस्ट करा आणि ती कायमस्वरूपी प्रदर्शित करा."
      }
    ],
    "whyTitle": "Discord वापरकर्त्यांना बाह्य होस्टिंगची गरज का आहे",
    "whyItems": [
      {
        "title": "CDN लिंक्सची मुदत संपते",
        "body": "२०२३ पासून, Discord एक्सपायरेशन टोकन्ससह साइन केलेल्या URL वापरते, ज्यामुळे बाह्य संदर्भ कालांतराने खराब होतात."
      },
      {
        "title": "एम्बेड्स दृश्यमान राहतात",
        "body": "तुमच्या बॉट एम्बेड्स, वेबहुक्स आणि पिन केलेल्या मेसेजमध्ये तुटलेल्या इमेज प्लेसहोल्डर्स टाळा."
      },
      {
        "title": "बॉट-फ्रेंडली इंटिग्रेशन",
        "body": "आमच्या URL टोकन व्यवस्थापनाशिवाय Discord.js, discord.py आणि इतर फ्रेमवर्क्ससह उत्तम प्रकारे काम करतात."
      }
    ],
    "faqTitle": "वारंवार विचारले जाणारे प्रश्न",
    "faqs": [
      {
        "q": "Discord इमेज लिंक्सची मुदत का संपते?",
        "a": "Discord ने २०२३ मध्ये त्यांचे CDN बदलले असून आता ते एक्सपायरेशन टोकन्ससह साइन केलेल्या URL वापरतात. थेट Discord वर अपलोड केलेल्या इमेजेसच्या URL ठराविक काळानंतर संपतात, ज्यामुळे बुकमार्क, विकी आणि बाह्य एम्बेड्समध्ये इमेजेस दिसत नाहीत."
      },
      {
        "q": "मी Discord बॉट एम्बेड्समध्ये ImageToURL इमेजेस वापरू शकतो का?",
        "a": "हो. ImageToURL थेट इमेज URL प्रदान करते जे Discord बॉट एम्बेड फील्डमध्ये उत्तम प्रकारे काम करतात. या URL योग्य content-type हेडर्ससह HTTPS द्वारे सर्व्ह केल्या जातात, त्यामुळे Discord त्यांना इनलाइन इमेज म्हणून रेंडर करते."
      },
      {
        "q": "ImageToURL लिंक्स Discord मार्कडाउनमध्ये काम करतात का?",
        "a": "नक्कीच. तुम्ही ImageToURL लिंक थेट Discord मेसेजमध्ये पेस्ट करू शकता आणि ती एम्बेड केलेली इमेज प्रीव्ह्यू म्हणून प्रदर्शित होईल."
      },
      {
        "q": "Discord इमेज होस्टिंगसाठी फाईल आकाराची मर्यादा आहे का?",
        "a": "ImageToURL २५MB पर्यंतच्या इमेजेसना सपोर्ट करते, ज्यामध्ये तुम्ही Discord वर शेअर करू इच्छित असलेल्या जवळजवळ सर्व इमेजेस येतात आणि त्या कायमस्वरूपी होस्ट केल्या जातात."
      },
      {
        "q": "मी Discord साठी ॲनिमेटेड GIF होस्ट करू शकतो का?",
        "a": "हो. ImageToURL ॲनिमेटेड GIF ला पूर्णपणे सपोर्ट करते. तुमची GIF अपलोड करा आणि एक कायमस्वरूपी URL मिळवा जी Discord मेसेजमध्ये एम्बेड केल्यावर ॲनिमेशन प्ले करते."
      }
    ],
    "ctaTitle": "एक्सपायर झालेल्या Discord लिंक्समुळे इमेजेस गमावणे थांबवा",
    "ctaBody": "एकदा अपलोड करा, आणि एम्बेड्स, बॉट्स, वेबहुक्स आणि मेसेजमध्ये कायमस्वरूपी काम करणारी URL मिळवा.",
    "ctaButton": "आता अपलोड करा"
  },
  "te": {
    "metaTitle": "Discord కోసం ఇమేజ్ హోస్టింగ్ — పర్మనెంట్ ఎంబెడ్ లింక్‌లు | ImageToURL",
    "metaDescription": "Discord ఎంబెడ్‌ల కోసం పర్మనెంట్ ఇమేజ్ URLలను పొందండి. Discord CDN లింక్‌లు ఎక్స్‌పైర్ అవుతాయి — Discordలో పనిచేసే నమ్మకమైన, శాశ్వతమైన ఇమేజ్ హోస్టింగ్ కోసం ImageToURLని ఉపయోగించండి.",
    "schemaName": "ImageToURL",
    "schemaDescription": "ఎక్స్‌పైర్ అయ్యే CDN టోకెన్‌ల వల్ల ఇమేజ్‌లు బ్రోక్ అవ్వకుండా ఉండటానికి, Discord ఎంబెడ్‌ల కోసం పర్మనెంట్ ఇమేజ్ URLలను పొందండి.",
    "badge": "DISCORD యూజర్లు",
    "h1Pre": "Discord కోసం ఇమేజ్ హోస్టింగ్",
    "h1Highlight": "ఇది ఎప్పటికీ ఎక్స్‌పైర్ అవ్వదు.",
    "intro": "Discord CDN లింక్‌లు ఎక్స్‌పైర్ అయి మీ ఎంబెడ్‌లను బ్రోక్ చేస్తాయి. మీ ఇమేజ్‌లను ఇక్కడ అప్‌లోడ్ చేయండి మరియు Discord మెసేజ్‌లు, బాట్‌లు మరియు వెబ్‌హుక్‌లలో ఎప్పటికీ పనిచేసే పర్మనెంట్, నమ్మకమైన URLలను పొందండి.",
    "howTitle": "ఇది ఎలా పనిచేస్తుంది",
    "steps": [
      {
        "title": "మీ ఇమేజ్‌ని అప్‌లోడ్ చేయండి",
        "body": "మా హై-స్పీడ్ గ్లోబల్ CDNకి అప్‌లోడ్ చేయడానికి మీ పరికరం నుండి ఏదైనా ఇమేజ్ ఫైల్‌ను ఎంచుకోండి."
      },
      {
        "title": "పర్మనెంట్ URLని పొందండి",
        "body": "Discord ఎంబెడ్ సిస్టమ్ కోసం ఆప్టిమైజ్ చేయబడిన డైరెక్ట్, స్టేబుల్ ఇమేజ్ లింక్‌ను పొందండి."
      },
      {
        "title": "Discordలో ఎంబెడ్ చేయండి",
        "body": "మీ లింక్‌ను ఏదైనా Discord మెసేజ్, బాట్ ఎంబెడ్ లేదా వెబ్‌హుక్‌లో పేస్ట్ చేసి శాశ్వతంగా ప్రదర్శించండి."
      }
    ],
    "whyTitle": "Discord యూజర్లకు ఎక్స్‌టర్నల్ హోస్టింగ్ ఎందుకు అవసరం",
    "whyItems": [
      {
        "title": "CDN లింక్‌లు ఎక్స్‌పైర్ అవుతాయి",
        "body": "2023 నుండి, Discord ఎక్స్‌పైర్ అయ్యే టోకెన్‌లతో కూడిన సైన్డ్ URLలను ఉపయోగిస్తోంది, ఇవి కాలక్రమేణా ఎక్స్‌టర్నల్ రిఫరెన్స్‌లను బ్రోక్ చేస్తాయి."
      },
      {
        "title": "ఎంబెడ్‌లు కనిపిస్తూనే ఉంటాయి",
        "body": "మీ బాట్ ఎంబెడ్‌లు, వెబ్‌హుక్‌లు మరియు పిన్ చేసిన మెసేజ్‌లలో బ్రోక్ అయిన ఇమేజ్ ప్లేస్‌హోల్డర్‌లను నివారించండి."
      },
      {
        "title": "బాట్-ఫ్రెండ్లీ ఇంటిగ్రేషన్",
        "body": "మా URLలు Discord.js, discord.py మరియు ఇతర ఫ్రేమ్‌వర్క్‌లతో టోకెన్ మేనేజ్‌మెంట్ అవసరం లేకుండానే పర్ఫెక్ట్‌గా పనిచేస్తాయి."
      }
    ],
    "faqTitle": "తరచుగా అడిగే ప్రశ్నలు",
    "faqs": [
      {
        "q": "Discord ఇమేజ్ లింక్‌లు ఎందుకు ఎక్స్‌పైర్ అవుతాయి?",
        "a": "Discord 2023లో తన CDNని మార్చి, ఎక్స్‌పైర్ అయ్యే టోకెన్‌లతో కూడిన సైన్డ్ URLలను ఉపయోగిస్తోంది. నేరుగా Discordకి అప్‌లోడ్ చేసిన ఇమేజ్‌ల URLలు నిర్ణీత సమయం తర్వాత ఎక్స్‌పైర్ అవుతాయి, దీనివల్ల బుక్‌మార్క్‌లు, వికీలు మరియు ఎక్స్‌టర్నల్ ఎంబెడ్‌లలో ఇమేజ్‌లు బ్రోక్ అవుతాయి."
      },
      {
        "q": "నేను Discord బాట్ ఎంబెడ్‌లలో ImageToURL ఇమేజ్‌లను ఉపయోగించవచ్చా?",
        "a": "అవును. ImageToURL డైరెక్ట్ ఇమేజ్ URLలను అందిస్తుంది, ఇవి Discord బాట్ ఎంబెడ్ ఫీల్డ్‌లలో పర్ఫెక్ట్‌గా పనిచేస్తాయి. ఈ URLలు సరైన కంటెంట్-టైప్ హెడర్‌లతో HTTPS ద్వారా అందించబడతాయి, కాబట్టి Discord వాటిని ఇన్‌లైన్ ఇమేజ్‌లుగా ప్రదర్శిస్తుంది."
      },
      {
        "q": "ImageToURL లింక్‌లు Discord మార్క్‌డౌన్‌లో పనిచేస్తాయా?",
        "a": "ఖచ్చితంగా. మీరు ImageToURL లింక్‌ను నేరుగా Discord మెసేజ్‌లో పేస్ట్ చేయవచ్చు, అది ఎంబెడెడ్ ఇమేజ్ ప్రివ్యూగా కనిపిస్తుంది."
      },
      {
        "q": "Discord ఇమేజ్ హోస్టింగ్ కోసం ఫైల్ సైజ్ పరిమితి ఉందా?",
        "a": "ImageToURL 25MB వరకు ఇమేజ్‌లకు మద్దతు ఇస్తుంది, ఇది మీరు Discordలో షేర్ చేయాలనుకునే దాదాపు అన్ని ఇమేజ్‌లకు సరిపోతుంది మరియు ఎటువంటి నాణ్యత తగ్గకుండా శాశ్వతంగా హోస్ట్ చేయబడుతుంది."
      },
      {
        "q": "నేను Discord కోసం యానిమేటెడ్ GIFలను హోస్ట్ చేయవచ్చా?",
        "a": "అవును. ImageToURL యానిమేటెడ్ GIFలకు పూర్తిగా మద్దతు ఇస్తుంది. మీ GIFని అప్‌లోడ్ చేయండి మరియు Discord మెసేజ్‌లలో ఎంబెడ్ చేసినప్పుడు ప్లే అయ్యే పర్మనెంట్ URLని పొందండి."
      }
    ],
    "ctaTitle": "ఎక్స్‌పైర్ అయ్యే Discord లింక్‌లతో ఇమేజ్‌లను కోల్పోవడం ఆపండి",
    "ctaBody": "ఒక్కసారి అప్‌లోడ్ చేయండి, ఎంబెడ్‌లు, బాట్‌లు, వెబ్‌హుక్‌లు మరియు మెసేజ్‌లలో ఎప్పటికీ పనిచేసే పర్మనెంట్ URLని పొందండి.",
    "ctaButton": "ఇప్పుడే అప్‌లోడ్ చేయండి"
  },
  "zh-Hant": {
    "metaTitle": "Discord 專用圖片託管 — 永久嵌入連結 | ImageToURL",
    "metaDescription": "獲取 Discord 嵌入專用的永久圖片連結。Discord CDN 連結會過期，請使用 ImageToURL 進行可靠且永久的圖片託管，確保在 Discord 中正常顯示。",
    "schemaName": "ImageToURL",
    "schemaDescription": "獲取 Discord 嵌入專用的永久圖片連結，防止因 CDN 權杖過期導致圖片無法顯示。",
    "badge": "DISCORD 用戶",
    "h1Pre": "Discord 專用圖片託管",
    "h1Highlight": "永不過期。",
    "intro": "Discord CDN 連結會過期並導致您的嵌入內容失效。在此上傳圖片，即可獲得在 Discord 訊息、機器人和 Webhook 中永久有效的可靠連結。",
    "howTitle": "運作方式",
    "steps": [
      {
        "title": "上傳您的圖片",
        "body": "從您的裝置選擇任何圖片檔案，並上傳至我們的高速全球 CDN。"
      },
      {
        "title": "獲取永久連結",
        "body": "取得針對 Discord 嵌入系統優化的直接、穩定圖片連結。"
      },
      {
        "title": "嵌入至 Discord",
        "body": "將連結貼上至任何 Discord 訊息、機器人嵌入或 Webhook，即可永久顯示圖片。"
      }
    ],
    "whyTitle": "為什麼 Discord 用戶需要外部託管",
    "whyItems": [
      {
        "title": "CDN 連結會過期",
        "body": "自 2023 年起，Discord 使用帶有過期權杖的簽名 URL，這會導致外部引用隨時間失效。"
      },
      {
        "title": "保持嵌入內容可見",
        "body": "避免您的機器人嵌入、Webhook 和置頂訊息中出現圖片損壞的佔位符。"
      },
      {
        "title": "機器人友善整合",
        "body": "我們的連結可與 Discord.js、discord.py 及其他框架完美搭配，無需進行權杖管理。"
      }
    ],
    "faqTitle": "常見問題",
    "faqs": [
      {
        "q": "為什麼 Discord 圖片連結會過期？",
        "a": "Discord 在 2023 年更改了其 CDN，改用帶有過期權杖的簽名 URL。現在直接上傳到 Discord 的圖片連結會在一段時間後過期，導致書籤、Wiki 和外部嵌入中的圖片無法顯示。"
      },
      {
        "q": "我可以在 Discord 機器人嵌入中使用 ImageToURL 圖片嗎？",
        "a": "可以。ImageToURL 提供可完美用於 Discord 機器人嵌入欄位的直接圖片連結。這些連結透過 HTTPS 提供並帶有正確的 content-type 標頭，因此 Discord 會將其渲染為內嵌圖片。"
      },
      {
        "q": "ImageToURL 連結適用於 Discord Markdown 嗎？",
        "a": "當然。您可以將 ImageToURL 連結直接貼入 Discord 訊息，它會顯示為嵌入式圖片預覽。"
      },
      {
        "q": "Discord 圖片託管有檔案大小限制嗎？",
        "a": "ImageToURL 支援最高 25MB 的圖片，這涵蓋了您在 Discord 上分享的幾乎所有圖片，並提供永久託管且不失真。"
      },
      {
        "q": "我可以託管 Discord 用的動態 GIF 嗎？",
        "a": "可以。ImageToURL 完全支援動態 GIF。上傳您的 GIF 並獲取永久連結，嵌入 Discord 訊息後即可播放動畫。"
      }
    ],
    "ctaTitle": "別再讓圖片因 Discord 連結過期而消失",
    "ctaBody": "只需上傳一次，即可獲得在嵌入、機器人、Webhook 和訊息中永久有效的連結。",
    "ctaButton": "立即上傳"
  }
} as LandingContentMap;
