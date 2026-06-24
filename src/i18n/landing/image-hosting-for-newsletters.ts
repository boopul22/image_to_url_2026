import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image Hosting for Email Newsletters | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "For Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "For eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "For email signatures" },
      { "pageKey": "image-hosting-for-forums", "label": "For forums" }
    ],
    "metaDescription": "Reliable image hosting for email newsletters. Get permanent URLs that work with Mailchimp, Substack, ConvertKit, and all newsletter platforms.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Reliable image hosting for email newsletters with permanent, CDN-backed URLs that work with all major platforms.",
    "badge": "NEWSLETTERS",
    "h1Pre": "Image Hosting for Email",
    "h1Highlight": "Newsletters.",
    "intro": "Email newsletters reference every image by an absolute https link - inbox clients won't load a file off your laptop or a relative path, so the picture has to live somewhere on the open web. Upload your banner, header or product shot here and you get a direct link that drops into Mailchimp, Substack, ConvertKit, Beehiiv or raw HTML. It keeps full quality with no watermark, and for issues that sit in an archive for years you can sign in and mark the image 'keep forever' so it never goes missing.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Your Image",
        "body": "Select your newsletter graphics and upload them to our secure, high-speed servers."
      },
      {
        "title": "Get Permanent URL",
        "body": "Instantly receive a direct, permanent link that never expires or changes."
      },
      {
        "title": "Embed in Newsletter",
        "body": "Paste the URL into your newsletter platform's image block to ensure perfect rendering."
      }
    ],
    "whyTitle": "Why Newsletter Creators Need This",
    "whyItems": [
      {
        "title": "Reliable Delivery",
        "body": "Your newsletter images load for every subscriber, every time. No broken images, no missing graphics."
      },
      {
        "title": "Global CDN Speed",
        "body": "Images are served from edge servers around the world for instant loading in any email client."
      },
      {
        "title": "Works Everywhere",
        "body": "ImageToURL links render in Gmail, Outlook, Apple Mail, and every other major email client."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      { "q": "How do I add an image to my newsletter by URL?", "a": "Paste the hosted image’s direct link into your newsletter tool’s image block or HTML. A CDN-backed URL loads fast for every subscriber and never expires mid-campaign, unlike attachments or private links." },
      {
        "q": "Why do newsletter images sometimes not display?",
        "a": "Newsletter images can fail due to expired URLs, broken hosting, or hotlink restrictions. ImageToURL provides permanent, CDN-backed links that ensure your images always render."
      },
      {
        "q": "Can I use ImageToURL with Mailchimp?",
        "a": "Yes. Simply select 'Import from URL' in the Mailchimp image block and paste your ImageToURL link to display your image instantly."
      },
      {
        "q": "Does ImageToURL work with Substack?",
        "a": "Yes. You can paste ImageToURL links directly into the Substack editor to ensure your images remain permanent across your posts."
      },
      {
        "q": "Will images load fast in email clients?",
        "a": "Yes. We serve all images from a global CDN, ensuring fast load times regardless of where your subscribers are located."
      },
      {
        "q": "Are there bandwidth limits for newsletter images?",
        "a": "Our CDN scales automatically, so whether you have 100 or 100,000 subscribers, your images will load reliably every time."
      },
      {
        "q": "Why can't I just attach the image to the email?",
        "a": "Attachments don't show up inline in most newsletters and they bloat the message, which hurts deliverability. Newsletters render images from an https link instead, so the body stays light and the picture appears in the reading pane. A hosted URL is the standard way to do that."
      },
      {
        "q": "Does it work with ConvertKit, Beehiiv and other platforms?",
        "a": "Yes. Any platform with an 'image by URL' field or an HTML block accepts the link, including ConvertKit, Beehiiv, MailerLite and most ESPs. Paste the URL where the editor asks for an image address."
      },
      {
        "q": "Should I sign in for newsletter images?",
        "a": "It's worth it. Anonymous links last at least a couple of weeks, which covers a single send, but newsletter issues often stay readable in archives and inboxes for years. Create a free account and choose 'keep forever' so an old issue doesn't suddenly show broken images."
      },
      {
        "q": "What size and format should newsletter images be?",
        "a": "JPG works well for photos and PNG for logos or anything with text or transparency, up to 10 MB. Keep the width around 600px for the main content area so it looks sharp without slowing the load. The file is served at full quality with no recompression."
      },
      {
        "q": "Will the same image show in every email client?",
        "a": "A direct https link renders in Gmail, Outlook, Apple Mail and the rest. Just remember many clients block images until the reader clicks 'show images', so set meaningful alt text and don't bury key information inside the graphic alone."
      }
    ],
    "ctaTitle": "Your newsletter deserves reliable images",
    "ctaBody": "Upload your newsletter images and get permanent URLs that work with every email platform and client.",
    "ctaButton": "Upload Now",
    "specsTitle": "Newsletter image hosting at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required (recommended for keep-forever)" },
      { "label": "Formats", "value": "JPG, PNG, WebP, GIF, SVG" },
      { "label": "Max size", "value": "10 MB" },
      { "label": "Output", "value": "Direct https link" }
    ],
    "useCasesTitle": "What newsletter creators host here",
    "useCasesIntro": "Anything that needs an https link to show up in the inbox:",
    "useCases": [
      {
        "title": "Headers and banners",
        "body": "The masthead at the top of each issue. Host it once, reuse the same link across every send so your branding stays consistent."
      },
      {
        "title": "Product and content shots",
        "body": "Photos for a featured product, a new blog post or an event. Drop each link into the matching image block in your editor."
      },
      {
        "title": "Footer logos and badges",
        "body": "Company logo, social icons or a 'forward to a friend' graphic that sits at the bottom of every email."
      }
    ],
    "comparisonTitle": "Ways to put an image in a newsletter",
    "comparisonIntro": "Newsletter tools give you a couple of ways to add a picture, but only one keeps an archived issue looking right years later. Here's the trade-off.",
    "comparisonColumns": [
      "Method",
      "Shows inline",
      "Survives long-term",
      "Reuse across issues",
      "Notes"
    ],
    "comparisonRows": [
      { "cells": ["Hosted direct link (signed in)", "Yes", "Yes (keep forever)", "Yes", "Best for evergreen issues"] },
      { "cells": ["Hosted link (anonymous)", "Yes", "Weeks, then cleared", "Yes", "Fine for a single send"] },
      { "cells": ["Platform's own uploader", "Yes", "Tied to that platform", "Within that tool", "Locked in if you switch ESP"] },
      { "cells": ["Email attachment", "Usually no", "n/a", "No", "Bloats the email, hurts delivery"] },
      { "cells": ["Hotlink from a website", "Yes", "Until the source moves it", "Yes", "Breaks on the next site redesign"] }
    ],
    "sections": [
      {
        "heading": "Why newsletters need a hosted URL",
        "body": "An email is just HTML, and an image in HTML loads from an absolute address like https://imagetourl.cloud/abc.png. There's no folder the inbox can reach on your computer, so a local file or a relative path shows nothing. That's why every newsletter editor asks for an image you either upload to its servers or point at by URL. Hosting the file yourself and pasting the link gives you one address that behaves the same in every client and every issue."
      },
      {
        "heading": "Keeping images alive in the archive",
        "body": "Most newsletters keep a public archive, and subscribers often reopen old issues months later. If the image link dies, those issues look broken. Anonymous uploads here are cleared on a regular cleanup, so for anything you want to last, sign in free and choose 'keep forever'. It costs nothing and means a year-old issue still renders. Always keep your own copy of the original files too, as a safety net."
      },
      {
        "heading": "A note on blocked images and alt text",
        "body": "Plenty of email clients hide images until the reader clicks 'display images', and some never show them at all. So treat the picture as an enhancement, not the whole message: write clear alt text for every image, and don't lock your call to action or key details inside a graphic alone. A hosted URL gets the picture there reliably, but good alt text is what carries the meaning when it's switched off."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de imágenes para boletines informativos | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Para Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Para eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Para firmas de correo" },
      { "pageKey": "image-hosting-for-forums", "label": "Para foros" }
    ],
    "metaDescription": "Alojamiento de imágenes fiable para boletines. Obtén URLs permanentes que funcionan con Mailchimp, Substack, ConvertKit y todas las plataformas de email.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Alojamiento de imágenes fiable para boletines con URLs permanentes respaldadas por CDN que funcionan en todas las plataformas principales.",
    "badge": "BOLETINES",
    "h1Pre": "Alojamiento de imágenes para",
    "h1Highlight": "Boletines.",
    "intro": "Alojamiento de imágenes fiable que funciona con cualquier plataforma de boletines. Sube una vez y obtén una URL permanente que se visualiza perfectamente en la bandeja de entrada de cada suscriptor.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Selecciona los gráficos de tu boletín y súbelos a nuestros servidores seguros de alta velocidad."
      },
      {
        "title": "Obtén una URL permanente",
        "body": "Recibe al instante un enlace directo y permanente que nunca caduca ni cambia."
      },
      {
        "title": "Inserta en el boletín",
        "body": "Pega la URL en el bloque de imagen de tu plataforma de boletines para asegurar una visualización perfecta."
      }
    ],
    "whyTitle": "Por qué los creadores de boletines necesitan esto",
    "whyItems": [
      {
        "title": "Entrega fiable",
        "body": "Las imágenes de tu boletín se cargan para cada suscriptor, siempre. Sin imágenes rotas ni gráficos faltantes."
      },
      {
        "title": "Velocidad CDN global",
        "body": "Las imágenes se sirven desde servidores perimetrales en todo el mundo para una carga instantánea en cualquier cliente de correo."
      },
      {
        "title": "Funciona en todas partes",
        "body": "Los enlaces de ImageToURL se visualizan en Gmail, Outlook, Apple Mail y cualquier otro cliente de correo importante."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué a veces no se muestran las imágenes de los boletines?",
        "a": "Las imágenes pueden fallar debido a URLs caducadas, alojamiento defectuoso o restricciones de hotlinking. ImageToURL proporciona enlaces permanentes respaldados por CDN que aseguran que tus imágenes siempre se vean."
      },
      {
        "q": "¿Puedo usar ImageToURL con Mailchimp?",
        "a": "Sí. Simplemente selecciona 'Importar desde URL' en el bloque de imagen de Mailchimp y pega tu enlace de ImageToURL para mostrar tu imagen al instante."
      },
      {
        "q": "¿Funciona ImageToURL con Substack?",
        "a": "Sí. Puedes pegar los enlaces de ImageToURL directamente en el editor de Substack para asegurar que tus imágenes permanezcan fijas en tus publicaciones."
      },
      {
        "q": "¿Las imágenes se cargarán rápido en los clientes de correo?",
        "a": "Sí. Servimos todas las imágenes desde una CDN global, asegurando tiempos de carga rápidos sin importar dónde se encuentren tus suscriptores."
      },
      {
        "q": "¿Hay límites de ancho de banda para las imágenes de los boletines?",
        "a": "Nuestra CDN se escala automáticamente, así que ya tengas 100 o 100,000 suscriptores, tus imágenes se cargarán de forma fiable siempre."
      }
    ],
    "ctaTitle": "Tu boletín merece imágenes fiables",
    "ctaBody": "Sube las imágenes de tu boletín y obtén URLs permanentes que funcionan con todas las plataformas y clientes de correo.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images pour newsletters | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Pour Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Pour eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Pour les signatures e-mail" },
      { "pageKey": "image-hosting-for-forums", "label": "Pour les forums" }
    ],
    "metaDescription": "Hébergement d'images fiable pour vos newsletters. Obtenez des URL permanentes compatibles avec Mailchimp, Substack, ConvertKit et toutes les plateformes d'emailing.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Hébergement d'images fiable pour newsletters avec des URL permanentes via CDN, compatibles avec toutes les plateformes majeures.",
    "badge": "NEWSLETTERS",
    "h1Pre": "Hébergement d'images pour",
    "h1Highlight": "Newsletters.",
    "intro": "Un hébergement d'images fiable qui fonctionne avec toutes les plateformes de newsletter. Importez une fois, obtenez une URL permanente qui s'affiche parfaitement dans la boîte de réception de chaque abonné.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Importez votre image",
        "body": "Sélectionnez vos visuels de newsletter et importez-les sur nos serveurs sécurisés et ultra-rapides."
      },
      {
        "title": "Obtenez une URL permanente",
        "body": "Recevez instantanément un lien direct et permanent qui n'expire jamais et ne change jamais."
      },
      {
        "title": "Intégrez dans votre newsletter",
        "body": "Collez l'URL dans le bloc image de votre plateforme d'emailing pour garantir un affichage parfait."
      }
    ],
    "whyTitle": "Pourquoi les créateurs de newsletters en ont besoin",
    "whyItems": [
      {
        "title": "Distribution fiable",
        "body": "Vos images de newsletter se chargent pour chaque abonné, à chaque fois. Fini les images brisées ou manquantes."
      },
      {
        "title": "Vitesse CDN mondiale",
        "body": "Les images sont servies depuis des serveurs de périphérie (edge) dans le monde entier pour un chargement instantané dans n'importe quel client mail."
      },
      {
        "title": "Fonctionne partout",
        "body": "Les liens ImageToURL s'affichent parfaitement dans Gmail, Outlook, Apple Mail et tous les autres clients mail majeurs."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi les images de newsletter ne s'affichent-elles pas parfois ?",
        "a": "Les images de newsletter peuvent échouer à cause d'URL expirées, d'un hébergement défaillant ou de restrictions de hotlinking. ImageToURL fournit des liens permanents via CDN qui garantissent que vos images s'affichent toujours."
      },
      {
        "q": "Puis-je utiliser ImageToURL avec Mailchimp ?",
        "a": "Oui. Sélectionnez simplement 'Importer depuis une URL' dans le bloc image de Mailchimp et collez votre lien ImageToURL pour afficher votre image instantanément."
      },
      {
        "q": "ImageToURL fonctionne-t-il avec Substack ?",
        "a": "Oui. Vous pouvez coller les liens ImageToURL directement dans l'éditeur Substack pour garantir que vos images restent permanentes dans vos publications."
      },
      {
        "q": "Les images se chargeront-elles rapidement dans les clients mail ?",
        "a": "Oui. Nous servons toutes les images via un CDN mondial, garantissant des temps de chargement rapides quel que soit l'endroit où se trouvent vos abonnés."
      },
      {
        "q": "Y a-t-il des limites de bande passante pour les images de newsletter ?",
        "a": "Notre CDN s'adapte automatiquement. Que vous ayez 100 ou 100 000 abonnés, vos images se chargeront de manière fiable à chaque fois."
      }
    ],
    "ctaTitle": "Votre newsletter mérite des images fiables",
    "ctaBody": "Importez vos images de newsletter et obtenez des URL permanentes compatibles avec toutes les plateformes et clients mail.",
    "ctaButton": "Importer maintenant"
  },
  "de": {
    "metaTitle": "Bildhosting für E-Mail-Newsletter | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Für Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "Für eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "Für E-Mail-Signaturen" },
      { "pageKey": "image-hosting-for-forums", "label": "Für Foren" }
    ],
    "metaDescription": "Zuverlässiges Bildhosting für E-Mail-Newsletter. Erhalten Sie permanente URLs, die mit Mailchimp, Substack, ConvertKit und allen Newsletter-Plattformen funktionieren.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Zuverlässiges Bildhosting für E-Mail-Newsletter mit permanenten, CDN-gestützten URLs, die mit allen gängigen Plattformen funktionieren.",
    "badge": "NEWSLETTER",
    "h1Pre": "Bildhosting für E-Mail-",
    "h1Highlight": "Newsletter.",
    "intro": "Zuverlässiges Bildhosting, das mit jeder Newsletter-Plattform funktioniert. Einmal hochladen, eine permanente URL erhalten, die im Posteingang jedes Abonnenten perfekt angezeigt wird.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Wählen Sie Ihre Newsletter-Grafiken aus und laden Sie sie auf unsere sicheren Hochgeschwindigkeitsserver hoch."
      },
      {
        "title": "Permanente URL erhalten",
        "body": "Erhalten Sie sofort einen direkten, permanenten Link, der niemals abläuft oder sich ändert."
      },
      {
        "title": "In Newsletter einbetten",
        "body": "Fügen Sie die URL in den Bildblock Ihrer Newsletter-Plattform ein, um eine perfekte Darstellung zu gewährleisten."
      }
    ],
    "whyTitle": "Warum Newsletter-Ersteller dies benötigen",
    "whyItems": [
      {
        "title": "Zuverlässige Zustellung",
        "body": "Ihre Newsletter-Bilder werden für jeden Abonnenten geladen, jedes Mal. Keine defekten Bilder, keine fehlenden Grafiken."
      },
      {
        "title": "Globale CDN-Geschwindigkeit",
        "body": "Bilder werden von Edge-Servern auf der ganzen Welt bereitgestellt, für sofortiges Laden in jedem E-Mail-Client."
      },
      {
        "title": "Funktioniert überall",
        "body": "ImageToURL-Links werden in Gmail, Outlook, Apple Mail und jedem anderen gängigen E-Mail-Client korrekt angezeigt."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum werden Newsletter-Bilder manchmal nicht angezeigt?",
        "a": "Newsletter-Bilder können aufgrund abgelaufener URLs, defektem Hosting oder Hotlink-Beschränkungen ausfallen. ImageToURL bietet permanente, CDN-gestützte Links, die sicherstellen, dass Ihre Bilder immer geladen werden."
      },
      {
        "q": "Kann ich ImageToURL mit Mailchimp verwenden?",
        "a": "Ja. Wählen Sie einfach 'Import from URL' im Mailchimp-Bildblock und fügen Sie Ihren ImageToURL-Link ein, um Ihr Bild sofort anzuzeigen."
      },
      {
        "q": "Funktioniert ImageToURL mit Substack?",
        "a": "Ja. Sie können ImageToURL-Links direkt in den Substack-Editor einfügen, um sicherzustellen, dass Ihre Bilder in Ihren Beiträgen dauerhaft erhalten bleiben."
      },
      {
        "q": "Werden Bilder in E-Mail-Clients schnell geladen?",
        "a": "Ja. Wir stellen alle Bilder über ein globales CDN bereit, was schnelle Ladezeiten garantiert, unabhängig davon, wo sich Ihre Abonnenten befinden."
      },
      {
        "q": "Gibt es Bandbreitenbeschränkungen für Newsletter-Bilder?",
        "a": "Unser CDN skaliert automatisch. Egal, ob Sie 100 oder 100.000 Abonnenten haben, Ihre Bilder werden jedes Mal zuverlässig geladen."
      }
    ],
    "ctaTitle": "Ihr Newsletter verdient zuverlässige Bilder",
    "ctaBody": "Laden Sie Ihre Newsletter-Bilder hoch und erhalten Sie permanente URLs, die mit jeder E-Mail-Plattform und jedem Client funktionieren.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "メールマガジン用画像ホスティング | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "Discord用" },
      { "pageKey": "image-hosting-for-ebay", "label": "eBay用" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "メール署名用" },
      { "pageKey": "image-hosting-for-forums", "label": "フォーラム用" }
    ],
    "metaDescription": "メールマガジンに最適な信頼性の高い画像ホスティング。Mailchimp、Substack、ConvertKitなど、あらゆるプラットフォームで機能する永続的なURLを取得できます。",
    "schemaName": "ImageToURL",
    "schemaDescription": "主要なすべてのプラットフォームで機能する、CDN対応の永続的なURLを備えたメールマガジン用画像ホスティング。",
    "badge": "メールマガジン",
    "h1Pre": "メールマガジン用",
    "h1Highlight": "画像ホスティング",
    "intro": "あらゆるメールマガジン配信プラットフォームに対応した信頼性の高い画像ホスティング。一度アップロードすれば、すべての購読者の受信トレイで完璧に表示される永続的なURLが手に入ります。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "メールマガジン用のグラフィックを選択し、安全で高速なサーバーにアップロードします。"
      },
      {
        "title": "永続的なURLを取得",
        "body": "有効期限が切れたり変更されたりすることのない、直接的な永続リンクを即座に取得します。"
      },
      {
        "title": "メールマガジンに埋め込む",
        "body": "URLをメールマガジン配信プラットフォームの画像ブロックに貼り付けるだけで、完璧な表示が保証されます。"
      }
    ],
    "whyTitle": "メールマガジン作成者に選ばれる理由",
    "whyItems": [
      {
        "title": "確実な配信",
        "body": "すべての購読者の環境で、毎回確実に画像が表示されます。画像のリンク切れや表示エラーを防ぎます。"
      },
      {
        "title": "グローバルCDNによる高速化",
        "body": "世界中のエッジサーバーから配信されるため、どのメールクライアントでも瞬時に画像が読み込まれます。"
      },
      {
        "title": "どこでも使える",
        "body": "ImageToURLのリンクは、Gmail、Outlook、Apple Mailなど、主要なすべてのメールクライアントで正しく表示されます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "メールマガジンの画像が表示されないことがあるのはなぜですか？",
        "a": "URLの有効期限切れ、ホスティングの不具合、ホットリンク制限などが原因です。ImageToURLはCDN対応の永続リンクを提供し、常に画像が正しく表示されるようにします。"
      },
      {
        "q": "MailchimpでImageToURLを使用できますか？",
        "a": "はい。Mailchimpの画像ブロックで「URLからインポート」を選択し、ImageToURLのリンクを貼り付けるだけで画像が即座に表示されます。"
      },
      {
        "q": "SubstackでImageToURLは使えますか？",
        "a": "はい。ImageToURLのリンクをSubstackのエディタに直接貼り付けることで、投稿全体を通して画像を永続的に保持できます。"
      },
      {
        "q": "メールクライアントで画像は高速に読み込まれますか？",
        "a": "はい。すべての画像をグローバルCDNから配信しているため、購読者の場所に関係なく高速な読み込みが可能です。"
      },
      {
        "q": "メールマガジン用画像に帯域幅の制限はありますか？",
        "a": "当社のCDNは自動的にスケールするため、購読者が100人でも10万人でも、毎回確実に画像が読み込まれます。"
      }
    ],
    "ctaTitle": "信頼性の高い画像でメールマガジンの品質を向上",
    "ctaBody": "メールマガジン用の画像をアップロードして、あらゆるメールプラットフォームやクライアントで機能する永続的なURLを取得しましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "邮件通讯图片托管 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-hosting-for-discord", "label": "用于 Discord" },
      { "pageKey": "image-hosting-for-ebay", "label": "用于 eBay" },
      { "pageKey": "image-hosting-for-email-signatures", "label": "用于邮件签名" },
      { "pageKey": "image-hosting-for-forums", "label": "用于论坛" }
    ],
    "metaDescription": "可靠的邮件通讯图片托管服务。获取适用于 Mailchimp、Substack、ConvertKit 及所有邮件平台的永久链接。",
    "schemaName": "ImageToURL",
    "schemaDescription": "为邮件通讯提供可靠的图片托管服务，通过 CDN 加速的永久链接，适用于所有主流平台。",
    "badge": "邮件通讯",
    "h1Pre": "邮件通讯",
    "h1Highlight": "图片托管。",
    "intro": "适用于所有邮件通讯平台的可靠图片托管。上传一次，即可获得在每位订阅者收件箱中完美呈现的永久链接。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传图片",
        "body": "选择您的邮件通讯素材并上传至我们安全、高速的服务器。"
      },
      {
        "title": "获取永久链接",
        "body": "立即获得一个永不过期、不会变更的直接链接。"
      },
      {
        "title": "嵌入邮件通讯",
        "body": "将链接粘贴到邮件通讯平台的图片模块中，确保完美显示。"
      }
    ],
    "whyTitle": "为什么邮件通讯创作者需要它",
    "whyItems": [
      {
        "title": "可靠的投递",
        "body": "确保您的邮件图片能为每位订阅者加载。告别图片损坏或无法显示的问题。"
      },
      {
        "title": "全球 CDN 加速",
        "body": "图片通过全球边缘服务器分发，在任何邮件客户端中均可实现秒开。"
      },
      {
        "title": "全平台兼容",
        "body": "ImageToURL 链接可在 Gmail、Outlook、Apple Mail 及所有主流邮件客户端中完美呈现。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么邮件通讯中的图片有时无法显示？",
        "a": "图片无法显示通常是因为链接过期、托管服务中断或防盗链限制。ImageToURL 提供基于 CDN 的永久链接，确保您的图片始终正常显示。"
      },
      {
        "q": "我可以在 Mailchimp 中使用 ImageToURL 吗？",
        "a": "可以。只需在 Mailchimp 的图片模块中选择“从 URL 导入”，然后粘贴您的 ImageToURL 链接即可立即显示图片。"
      },
      {
        "q": "ImageToURL 支持 Substack 吗？",
        "a": "支持。您可以直接将 ImageToURL 链接粘贴到 Substack 编辑器中，确保您的图片在文章中永久有效。"
      },
      {
        "q": "图片在邮件客户端中加载速度快吗？",
        "a": "快。我们通过全球 CDN 分发所有图片，无论您的订阅者身处何地，都能确保快速加载。"
      },
      {
        "q": "邮件通讯图片有带宽限制吗？",
        "a": "我们的 CDN 会自动扩展，因此无论您有 100 还是 100,000 名订阅者，您的图片都能始终可靠地加载。"
      }
    ],
    "ctaTitle": "您的邮件通讯值得拥有可靠的图片",
    "ctaBody": "上传您的邮件通讯图片，获取适用于所有邮件平台和客户端的永久链接。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
