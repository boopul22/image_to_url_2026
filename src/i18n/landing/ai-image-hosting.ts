import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "AI Image Hosting - Host AI-Generated Art Free | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Free image hosting" },
      { "pageKey": "free-image-cdn", "label": "Free image CDN" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymous image upload" },
      { "pageKey": "bulk-image-upload", "label": "Bulk image upload" }
    ],
    "metaDescription": "Free hosting for AI-generated images from Midjourney, DALL-E, Stable Diffusion, and more. Get permanent URLs for your AI art. No signup required.",
    "schemaName": "AI Image Hosting",
    "schemaDescription": "Free hosting for AI-generated images from Midjourney, DALL-E, Stable Diffusion, and more with permanent URLs.",
    "badge": "AI CREATORS",
    "h1Pre": "AI Image Hosting",
    "h1Highlight": "for creators.",
    "intro": "Your Midjourney renders, DALL-E experiments and Stable Diffusion batches get stuck inside the app that made them. Upload one here and you get a clean direct link you can paste into Twitter, Reddit, a portfolio or a Discord that isn't the Midjourney server. No signup to get a link, no compression on the way through, and full resolution kept. Sign in if you want the link to stick around for good.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload your art",
        "body": "Select your AI-generated image from your device or paste the file directly into our uploader."
      },
      {
        "title": "Get your link",
        "body": "We instantly generate a direct, permanent URL for your image without any account requirements."
      },
      {
        "title": "Share anywhere",
        "body": "Use your new link to embed your art in portfolios, blogs, or social media platforms immediately."
      }
    ],
    "whyTitle": "Why AI Creators Need Hosting",
    "whyItems": [
      {
        "title": "Share Beyond Discord",
        "body": "Midjourney images live inside Discord by default. Host them here so you can share on Twitter, Reddit, or your blog with a clean, direct link."
      },
      {
        "title": "Build Your Portfolio",
        "body": "Curate your best AI art with permanent links. Embed them in portfolio sites, Notion pages, or Behance - your work stays online forever."
      },
      {
        "title": "Zero Compression",
        "body": "Every detail in your AI art matters. We store and deliver your images at their original resolution and quality - no artifacts or quality loss."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Can I host Midjourney images for free?",
        "a": "Yes. Save the upscale from Discord, drop it here, and you get a direct shareable URL in seconds. No account needed to grab a link, and no watermark is added."
      },
      {
        "q": "How do I get a Midjourney image out of Discord?",
        "a": "Open the upscaled image in Discord, save it to your device, then upload that file here. You get back a normal https link that works anywhere, not just inside the Midjourney server."
      },
      {
        "q": "Does this compress my AI art?",
        "a": "No. The file is served at the resolution you uploaded, with no re-encoding. Fine detail, fur, text and sharp edges from your render stay intact."
      },
      {
        "q": "Do the image links expire?",
        "a": "Anonymous uploads last until the monthly storage cleanup, so a couple of weeks at least. For a portfolio piece you want to keep, sign in with a free account and choose 'keep forever' so the link doesn't disappear."
      },
      {
        "q": "Can I use hosted AI images in my portfolio?",
        "a": "Yes. The direct URL works in portfolio sites, Notion pages, Behance embeds, personal blogs and anywhere that accepts an image link. Use a signed-in 'keep forever' link for work you want online long-term."
      },
      {
        "q": "Which AI image generators does it work with?",
        "a": "Any of them. The output is just a PNG, JPG or WebP, so Midjourney, DALL-E, Stable Diffusion, Leonardo, Adobe Firefly, Flux and the rest all upload the same way."
      },
      {
        "q": "What about transparent PNGs from my generator?",
        "a": "Transparency is preserved. Upload the PNG and the alpha channel comes through, so cut-out characters and logos keep their see-through background."
      },
      {
        "q": "Will the link embed inline on Discord and Reddit?",
        "a": "Yes. Because the URL points straight at the image file, it renders as the picture inline instead of a download or a gallery page."
      },
      {
        "q": "Is there a file size limit for AI renders?",
        "a": "10 MB per file, which covers most 1024px to 2048px outputs. If a big upscale is larger, compress it lightly first and then upload."
      },
      {
        "q": "Do you claim any rights over images I upload?",
        "a": "No. Your art stays yours. Just remember anonymous links are public to anyone who has the URL, so keep a private copy of anything you're not ready to share."
      }
    ],
    "ctaTitle": "Give your AI art a permanent home",
    "ctaBody": "Upload your AI-generated images and get instant, shareable links for free, with no account needed.",
    "ctaButton": "Upload Now",
    "specsTitle": "AI image hosting at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Formats", "value": "PNG, JPG, WebP, GIF, SVG" },
      { "label": "Max size", "value": "10 MB per render" },
      { "label": "Output", "value": "Direct CDN link" }
    ],
    "comparisonTitle": "Where AI artists host their renders",
    "comparisonIntro": "AI output is just an image file, so any host works in theory. In practice you care about quality kept, clean hotlinks for sharing, and how long the link lives. Here's the rundown.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Direct hotlink",
      "Keeps full quality",
      "Link lifetime"
    ],
    "comparisonRows": [
      { "cells": ["ImageToURL", "Yes", "10 MB", "Yes", "Yes", "Weeks free, forever when signed in"] },
      { "cells": ["Imgur", "No (since 2023)", "20 MB", "Limited", "Yes", "Tied to your account"] },
      { "cells": ["Catbox", "Yes", "200 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["ImgBB", "Yes", "32 MB", "Yes", "Yes", "Optional expiry"] },
      { "cells": ["Postimages", "Yes", "24 MB", "Yes", "No (resized to 1280px)", "Permanent"] }
    ],
    "useCasesTitle": "What AI creators do with a direct link",
    "useCasesIntro": "Once your render has its own URL, it leaves the generator and goes wherever you share work:",
    "useCases": [
      { "title": "Posting outside Discord", "body": "Midjourney lives in Discord by default. A direct link lets you drop the same image into Twitter, Reddit or a forum without screenshotting a chat window." },
      { "title": "Portfolios and case studies", "body": "Embed your best renders in a Notion page, a portfolio site or a write-up of your prompt workflow. Sign in and keep them so the embeds don't break." },
      { "title": "Prompt sharing and feedback", "body": "Paste the link alongside your prompt in a critique thread or a prompt-sharing community so people see the result at full quality." }
    ],
    "sections": [
      { "heading": "Why AI images get stuck inside the app", "body": "Most generators hand you the picture inside their own walls. Midjourney sits in a Discord channel, some web tools only show the image behind a login, and a saved file on your desktop isn't something you can paste into a forum. Hosting solves that last step: it turns the render into a plain https address that any site, chat or document can load. You're not exporting anything fancy, just giving the file a home on the open web so a link is all you need to share it." },
      { "heading": "Does hosting change my render's quality?", "body": "No. The file is stored and served exactly as uploaded, with no re-compression and no resizing. That matters for AI art because the texture, fine linework and any embedded text are the parts that show compression damage first. A host that quietly scales images down to 1280px would soften a detailed 2K upscale. Here a PNG stays a PNG and a transparent background stays transparent, so what you generated is what your audience sees." },
      { "heading": "Keeping a render online for the long run", "body": "If a piece is going in a portfolio or a tutorial, you want its link to outlast the month. Anonymous uploads are temporary - handy for a quick share, but cleared on the monthly sweep. Create a free account and mark the upload 'keep forever' and the link stays good. Either way, hold onto your original file and your prompt, since the source render is the one thing a host can't regenerate for you." }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes IA — Aloja arte generado por IA gratis | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hosting gratuito de imágenes" },
      { "pageKey": "free-image-cdn", "label": "CDN de imágenes gratuito" },
      { "pageKey": "anonymous-image-upload", "label": "Carga anónima de imágenes" },
      { "pageKey": "bulk-image-upload", "label": "Carga masiva de imágenes" }
    ],
    "metaDescription": "Alojamiento gratuito para imágenes generadas por IA de Midjourney, DALL-E, Stable Diffusion y más. Obtén URLs permanentes para tu arte IA. Sin registro.",
    "schemaName": "Alojamiento de imágenes IA",
    "schemaDescription": "Alojamiento gratuito para imágenes generadas por IA de Midjourney, DALL-E, Stable Diffusion y más con URLs permanentes.",
    "badge": "CREADORES DE IA",
    "h1Pre": "Alojamiento de imágenes IA",
    "h1Highlight": "para creadores.",
    "intro": "Tus obras maestras de Midjourney y creaciones de DALL-E merecen un hogar permanente. Sube arte generado por IA y obtén URLs directas y compartibles al instante: sin registro, sin compresión, sin límites.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu arte",
        "body": "Selecciona tu imagen generada por IA desde tu dispositivo o pega el archivo directamente en nuestro cargador."
      },
      {
        "title": "Obtén tu enlace",
        "body": "Generamos al instante una URL directa y permanente para tu imagen sin necesidad de cuenta."
      },
      {
        "title": "Comparte donde quieras",
        "body": "Usa tu nuevo enlace para insertar tu arte en portafolios, blogs o redes sociales de inmediato."
      }
    ],
    "whyTitle": "Por qué los creadores de IA necesitan alojamiento",
    "whyItems": [
      {
        "title": "Comparte más allá de Discord",
        "body": "Las imágenes de Midjourney viven en Discord por defecto. Alojalas aquí para compartirlas en Twitter, Reddit o tu blog con un enlace directo y limpio."
      },
      {
        "title": "Construye tu portafolio",
        "body": "Organiza tu mejor arte IA con enlaces permanentes. Insértalos en sitios de portafolio, páginas de Notion o Behance: tu trabajo permanecerá en línea para siempre."
      },
      {
        "title": "Cero compresión",
        "body": "Cada detalle en tu arte IA importa. Almacenamos y entregamos tus imágenes en su resolución y calidad original, sin artefactos ni pérdida de calidad."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Puedo alojar imágenes de Midjourney gratis?",
        "a": "Sí. Sube cualquier imagen de Midjourney a ImageToURL y obtén una URL permanente y compartible al instante. No se requiere cuenta ni se añaden marcas de agua."
      },
      {
        "q": "¿ImageToURL comprime mi arte generado por IA?",
        "a": "No. Almacenamos y servimos tus imágenes en su calidad original. Cada píxel de tu arte IA se conserva exactamente como lo creaste."
      },
      {
        "q": "¿Caducan las URLs de imágenes IA?",
        "a": "No. Cada URL que generamos es permanente. Tu arte IA permanecerá accesible en el mismo enlace para siempre, sin fechas de caducidad."
      },
      {
        "q": "¿Puedo usar imágenes IA alojadas en mi portafolio?",
        "a": "Absolutamente. Nuestras URLs directas funcionan perfectamente en sitios web de portafolio, páginas de Notion, blogs personales y cualquier plataforma que admita la inserción de imágenes."
      },
      {
        "q": "¿Qué generadores de imágenes IA son compatibles?",
        "a": "ImageToURL funciona con imágenes de cualquier generador de IA, incluyendo Midjourney, DALL-E, Stable Diffusion, Leonardo AI, Adobe Firefly y todos los demás."
      }
    ],
    "ctaTitle": "Dale a tu arte IA un hogar permanente",
    "ctaBody": "Sube tus imágenes generadas por IA y obtén enlaces instantáneos y compartibles gratis, sin necesidad de cuenta.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images IA — Hébergez gratuitement vos créations IA | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hébergement d'images gratuit" },
      { "pageKey": "free-image-cdn", "label": "CDN d'images gratuit" },
      { "pageKey": "anonymous-image-upload", "label": "Téléchargement d'image anonyme" },
      { "pageKey": "bulk-image-upload", "label": "Téléchargement d'images en masse" }
    ],
    "metaDescription": "Hébergement gratuit pour vos images générées par IA (Midjourney, DALL-E, Stable Diffusion, etc.). Obtenez des URL permanentes pour vos œuvres. Aucune inscription requise.",
    "schemaName": "Hébergement d'images IA",
    "schemaDescription": "Hébergement gratuit pour images générées par IA (Midjourney, DALL-E, Stable Diffusion, etc.) avec URL permanentes.",
    "badge": "CRÉATEURS IA",
    "h1Pre": "Hébergement d'images IA",
    "h1Highlight": "pour les créateurs.",
    "intro": "Vos chefs-d'œuvre Midjourney et créations DALL-E méritent un foyer permanent. Téléchargez vos images générées par IA et obtenez instantanément des URL directes partageables — sans inscription, sans compression, sans limites.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre œuvre",
        "body": "Sélectionnez votre image générée par IA depuis votre appareil ou collez le fichier directement dans notre outil d'importation."
      },
      {
        "title": "Obtenez votre lien",
        "body": "Nous générons instantanément une URL directe et permanente pour votre image, sans aucune création de compte requise."
      },
      {
        "title": "Partagez partout",
        "body": "Utilisez votre nouveau lien pour intégrer votre œuvre dans vos portfolios, blogs ou réseaux sociaux immédiatement."
      }
    ],
    "whyTitle": "Pourquoi les créateurs IA ont besoin d'un hébergement",
    "whyItems": [
      {
        "title": "Partagez au-delà de Discord",
        "body": "Les images Midjourney restent par défaut sur Discord. Hébergez-les ici pour les partager sur Twitter, Reddit ou votre blog avec un lien direct et propre."
      },
      {
        "title": "Construisez votre portfolio",
        "body": "Organisez vos meilleures créations IA avec des liens permanents. Intégrez-les sur des sites portfolio, des pages Notion ou Behance — votre travail reste en ligne pour toujours."
      },
      {
        "title": "Zéro compression",
        "body": "Chaque détail de votre art IA compte. Nous stockons et diffusons vos images dans leur résolution et qualité d'origine — sans artefacts ni perte de qualité."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Puis-je héberger des images Midjourney gratuitement ?",
        "a": "Oui. Téléchargez n'importe quelle image Midjourney sur ImageToURL et obtenez instantanément une URL permanente et partageable. Aucun compte requis, aucun filigrane ajouté."
      },
      {
        "q": "ImageToURL compresse-t-il mes images générées par IA ?",
        "a": "Non. Nous stockons et servons vos images dans leur qualité d'origine. Chaque pixel de votre art IA est préservé exactement tel que vous l'avez créé."
      },
      {
        "q": "Les URL d'images IA expirent-elles ?",
        "a": "Non. Chaque URL que nous générons est permanente. Votre art IA restera accessible via le même lien pour toujours, sans date d'expiration."
      },
      {
        "q": "Puis-je utiliser les images hébergées dans mon portfolio ?",
        "a": "Absolument. Nos URL d'images directes fonctionnent parfaitement sur les sites portfolio, les pages Notion, les blogs personnels et toute plateforme prenant en charge l'intégration d'images."
      },
      {
        "q": "Quels générateurs d'images IA sont pris en charge ?",
        "a": "ImageToURL fonctionne avec les images de n'importe quel générateur IA, y compris Midjourney, DALL-E, Stable Diffusion, Leonardo AI, Adobe Firefly et tous les autres."
      }
    ],
    "ctaTitle": "Offrez un foyer permanent à votre art IA",
    "ctaBody": "Téléchargez vos images générées par IA et obtenez gratuitement des liens instantanés et partageables, sans besoin de compte.",
    "ctaButton": "Télécharger maintenant"
  },
  "de": {
    "metaTitle": "KI-Bild-Hosting — KI-Kunst kostenlos hosten | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Kostenloses Bild-Hosting" },
      { "pageKey": "free-image-cdn", "label": "Kostenloses Bild-CDN" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymes Bild-Upload" },
      { "pageKey": "bulk-image-upload", "label": "Massen-Bild-Upload" }
    ],
    "metaDescription": "Kostenloses Hosting für KI-generierte Bilder von Midjourney, DALL-E, Stable Diffusion und mehr. Erhalten Sie permanente URLs für Ihre KI-Kunst. Keine Registrierung erforderlich.",
    "schemaName": "KI-Bild-Hosting",
    "schemaDescription": "Kostenloses Hosting für KI-generierte Bilder von Midjourney, DALL-E, Stable Diffusion und mehr mit permanenten URLs.",
    "badge": "KI-CREATORS",
    "h1Pre": "KI-Bild-Hosting",
    "h1Highlight": "für Creators.",
    "intro": "Ihre Midjourney-Meisterwerke und DALL-E-Kreationen verdienen ein dauerhaftes Zuhause. Laden Sie KI-generierte Kunst hoch und erhalten Sie sofort teilbare, direkte URLs – ohne Registrierung, ohne Komprimierung, ohne Limits.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Kunst hochladen",
        "body": "Wählen Sie Ihr KI-generiertes Bild von Ihrem Gerät aus oder fügen Sie die Datei direkt in unseren Uploader ein."
      },
      {
        "title": "Link erhalten",
        "body": "Wir generieren sofort eine direkte, permanente URL für Ihr Bild, ganz ohne Account-Anforderungen."
      },
      {
        "title": "Überall teilen",
        "body": "Verwenden Sie Ihren neuen Link, um Ihre Kunst sofort in Portfolios, Blogs oder auf Social-Media-Plattformen einzubinden."
      }
    ],
    "whyTitle": "Warum KI-Creators Hosting benötigen",
    "whyItems": [
      {
        "title": "Teilen jenseits von Discord",
        "body": "Midjourney-Bilder liegen standardmäßig in Discord. Hosten Sie sie hier, um sie mit einem sauberen, direkten Link auf Twitter, Reddit oder Ihrem Blog zu teilen."
      },
      {
        "title": "Portfolio aufbauen",
        "body": "Kuratieren Sie Ihre beste KI-Kunst mit permanenten Links. Binden Sie diese in Portfolio-Seiten, Notion oder Behance ein – Ihre Arbeit bleibt für immer online."
      },
      {
        "title": "Keine Komprimierung",
        "body": "Jedes Detail Ihrer KI-Kunst zählt. Wir speichern und liefern Ihre Bilder in ihrer ursprünglichen Auflösung und Qualität – ohne Artefakte oder Qualitätsverlust."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Kann ich Midjourney-Bilder kostenlos hosten?",
        "a": "Ja. Laden Sie jedes Midjourney-Bild bei ImageToURL hoch und erhalten Sie sofort eine permanente, teilbare URL. Kein Account erforderlich, keine Wasserzeichen."
      },
      {
        "q": "Komprimiert ImageToURL meine KI-generierte Kunst?",
        "a": "Nein. Wir speichern und liefern Ihre Bilder in ihrer Originalqualität. Jeder Pixel Ihrer KI-Kunst bleibt exakt so erhalten, wie Sie ihn erstellt haben."
      },
      {
        "q": "Laufen URLs für KI-Bilder ab?",
        "a": "Nein. Jede von uns generierte URL ist permanent. Ihre KI-Kunst bleibt unter demselben Link für immer erreichbar, ohne Ablaufdatum."
      },
      {
        "q": "Kann ich gehostete KI-Bilder in meinem Portfolio verwenden?",
        "a": "Absolut. Unsere direkten Bild-URLs funktionieren perfekt in Portfolio-Websites, Notion-Seiten, persönlichen Blogs und jeder Plattform, die Bildeinbettungen unterstützt."
      },
      {
        "q": "Welche KI-Bildgeneratoren werden unterstützt?",
        "a": "ImageToURL funktioniert mit Bildern von jedem KI-Generator, einschließlich Midjourney, DALL-E, Stable Diffusion, Leonardo AI, Adobe Firefly und allen anderen."
      }
    ],
    "ctaTitle": "Geben Sie Ihrer KI-Kunst ein dauerhaftes Zuhause",
    "ctaBody": "Laden Sie Ihre KI-generierten Bilder hoch und erhalten Sie kostenlos sofort teilbare Links, ohne dass ein Account erforderlich ist.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "AI画像ホスティング — AI生成アートを無料でホスト | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "free-image-hosting", "label": "無料画像ホスティング" },
      { "pageKey": "free-image-cdn", "label": "無料画像CDN" },
      { "pageKey": "anonymous-image-upload", "label": "匿名画像アップロード" },
      { "pageKey": "bulk-image-upload", "label": "一括画像アップロード" }
    ],
    "metaDescription": "Midjourney、DALL-E、Stable Diffusionなどで生成したAI画像の無料ホスティング。AIアートの永続的なURLを取得。登録不要。",
    "schemaName": "AI画像ホスティング",
    "schemaDescription": "Midjourney、DALL-E、Stable Diffusionなどで生成したAI画像を、永続的なURLで無料ホスティング。",
    "badge": "AIクリエイター向け",
    "h1Pre": "AI画像ホスティング",
    "h1Highlight": "クリエイターのために。",
    "intro": "Midjourneyの傑作やDALL-Eの作品には、永続的な保存場所が必要です。AI生成アートをアップロードして、共有可能なダイレクトURLを即座に取得しましょう。登録不要、圧縮なし、制限なしで利用できます。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "アートをアップロード",
        "body": "デバイスからAI生成画像を選択するか、ファイルをアップローダーに直接貼り付けてください。"
      },
      {
        "title": "リンクを取得",
        "body": "アカウント登録なしで、画像のダイレクトかつ永続的なURLを即座に生成します。"
      },
      {
        "title": "どこでも共有",
        "body": "取得したリンクを使用して、ポートフォリオ、ブログ、SNSなどにアートをすぐに埋め込めます。"
      }
    ],
    "whyTitle": "AIクリエイターがホスティングを必要とする理由",
    "whyItems": [
      {
        "title": "Discordの外で共有",
        "body": "Midjourneyの画像はデフォルトではDiscord内に留まります。ここでホストすれば、Twitter、Reddit、ブログなどでクリーンなダイレクトリンクとして共有できます。"
      },
      {
        "title": "ポートフォリオの構築",
        "body": "最高のAIアートを永続的なリンクで管理しましょう。ポートフォリオサイト、Notionページ、Behanceなどに埋め込めば、作品はオンラインでずっと公開されます。"
      },
      {
        "title": "圧縮ゼロ",
        "body": "AIアートの細部は重要です。私たちは画像を元の解像度と品質で保存・配信するため、画質の劣化やノイズは発生しません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "Midjourneyの画像を無料でホストできますか？",
        "a": "はい。Midjourneyの画像をImageToURLにアップロードすれば、永続的で共有可能なURLを即座に取得できます。アカウント登録や透かしの追加は一切ありません。"
      },
      {
        "q": "ImageToURLはAI生成アートを圧縮しますか？",
        "a": "いいえ。私たちは画像を元の品質のまま保存・配信します。AIアートのすべてのピクセルが、作成時そのままの状態で保持されます。"
      },
      {
        "q": "AI画像のURLに有効期限はありますか？",
        "a": "いいえ。生成されるすべてのURLは永続的です。あなたのAIアートは同じリンクで永遠にアクセス可能であり、有効期限はありません。"
      },
      {
        "q": "ホストしたAI画像をポートフォリオに使用できますか？",
        "a": "もちろんです。当社のダイレクト画像URLは、ポートフォリオサイト、Notionページ、個人ブログ、その他画像埋め込みをサポートするあらゆるプラットフォームで完璧に機能します。"
      },
      {
        "q": "どのAI画像生成ツールに対応していますか？",
        "a": "ImageToURLは、Midjourney、DALL-E、Stable Diffusion、Leonardo AI、Adobe Fireflyなど、あらゆるAI生成ツールからの画像に対応しています。"
      }
    ],
    "ctaTitle": "AIアートに永続的な場所を",
    "ctaBody": "AI生成画像をアップロードして、アカウント不要で無料の共有リンクを今すぐ手に入れましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "AI 图像托管 — 免费托管 AI 生成艺术作品 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "free-image-hosting", "label": "免费图片托管" },
      { "pageKey": "free-image-cdn", "label": "免费图片 CDN" },
      { "pageKey": "anonymous-image-upload", "label": "匿名图片上传" },
      { "pageKey": "bulk-image-upload", "label": "批量上传图片" }
    ],
    "metaDescription": "为 Midjourney、DALL-E、Stable Diffusion 等生成的 AI 图像提供免费托管。获取 AI 艺术作品的永久链接，无需注册。",
    "schemaName": "AI 图像托管",
    "schemaDescription": "为 Midjourney、DALL-E、Stable Diffusion 等生成的 AI 图像提供免费托管及永久链接。",
    "badge": "AI 创作者",
    "h1Pre": "AI 图像托管",
    "h1Highlight": "专为创作者打造。",
    "intro": "您的 Midjourney 杰作和 DALL-E 作品值得一个永久的归宿。上传 AI 生成的艺术作品，立即获取可分享的直链 — 无需注册，无压缩，无限制。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的作品",
        "body": "从设备中选择您的 AI 生成图像，或直接将文件粘贴到我们的上传器中。"
      },
      {
        "title": "获取链接",
        "body": "我们立即为您生成图像的永久直链，无需创建账户。"
      },
      {
        "title": "随时随地分享",
        "body": "使用新链接将您的作品直接嵌入作品集、博客或社交媒体平台。"
      }
    ],
    "whyTitle": "为什么 AI 创作者需要托管服务",
    "whyItems": [
      {
        "title": "突破 Discord 限制",
        "body": "Midjourney 图像默认存储在 Discord 中。在此托管，即可通过简洁的直链在 Twitter、Reddit 或您的博客上分享。"
      },
      {
        "title": "构建您的作品集",
        "body": "用永久链接整理您最出色的 AI 艺术作品。将其嵌入作品集网站、Notion 页面或 Behance，确保您的作品永久在线。"
      },
      {
        "title": "零压缩",
        "body": "AI 艺术的每一个细节都至关重要。我们以原始分辨率和质量存储并分发您的图像，绝无伪影或画质损失。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我可以免费托管 Midjourney 图像吗？",
        "a": "可以。将任何 Midjourney 图像上传到 ImageToURL，即可立即获得永久、可分享的 URL。无需账户，不添加水印。"
      },
      {
        "q": "ImageToURL 会压缩我的 AI 生成艺术作品吗？",
        "a": "不会。我们以原始质量存储和提供您的图像。您的 AI 艺术作品的每一个像素都将得到完美保留。"
      },
      {
        "q": "AI 图像链接会过期吗？",
        "a": "不会。我们生成的每个 URL 都是永久的。您的 AI 艺术作品将永远可以通过该链接访问，没有过期日期。"
      },
      {
        "q": "我可以在作品集里使用托管的 AI 图像吗？",
        "a": "当然可以。我们的图像直链非常适合用于作品集网站、Notion 页面、个人博客以及任何支持图像嵌入的平台。"
      },
      {
        "q": "支持哪些 AI 图像生成器？",
        "a": "ImageToURL 支持来自任何 AI 生成器的图像，包括 Midjourney、DALL-E、Stable Diffusion、Leonardo AI、Adobe Firefly 等所有工具。"
      }
    ],
    "ctaTitle": "为您的 AI 艺术作品安个永久的家",
    "ctaBody": "上传您的 AI 生成图像，免费获取即时、可分享的链接，无需任何账户。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
