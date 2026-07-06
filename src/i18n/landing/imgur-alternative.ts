import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Imgur Alternative - Free, No Account, Direct Links | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "imgbb-alternative", "label": "ImgBB alternative" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary alternative" }
    ],
    "metaDescription": "Want an Imgur alternative that skips the account? Drop a JPG, PNG, WebP, GIF or SVG and get a direct https link in seconds. No sign-up, no watermark, full quality, 50MB.",
    "schemaName": "Imgur Alternative",
    "schemaDescription": "A free Imgur alternative that turns any image into a direct, full-quality link. No account, no watermark, no gallery page, fast global CDN.",
    "badge": "IMGUR ALTERNATIVE",
    "h1Pre": "A simpler Imgur",
    "h1Highlight": "alternative, no account",
    "intro": "Since Imgur dropped anonymous uploads in 2023, getting a quick image link there means making an account first and tying the picture to it. If all you want is a direct link to paste into Discord or a forum, that's a lot of overhead. ImageToURL skips the sign-up: drop a JPG, PNG, WebP, GIF or SVG up to 50MB and you get a direct https link in about two seconds, at full quality, with no watermark and no gallery page wrapped around it.",
    "specsTitle": "ImageToURL at a glance",
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
        "value": "50 MB"
      },
      {
        "label": "Output",
        "value": "Direct CDN link"
      }
    ],
    "howTitle": "How it works",
    "steps": [
      {
        "title": "Drop your image in",
        "body": "Drag a file onto the box above or click to pick one from your device. JPG, PNG, WebP, GIF and SVG all work, up to 50MB each. No account screen first."
      },
      {
        "title": "Copy the direct link",
        "body": "Your image lands on a global CDN and a direct link appears right away. It ends in the real file extension, so it behaves like the original file, not a page about it."
      },
      {
        "title": "Paste it anywhere",
        "body": "Drop the URL into Discord, a Reddit comment, a forum post, an email or an HTML img tag. It shows up as the picture inline, with no gallery page and no extra click."
      }
    ],
    "whyTitle": "Why people pick a simple host over Imgur",
    "whyItems": [
      {
        "title": "No account to make",
        "body": "Imgur now needs you to be signed in to upload, and the image gets attached to that account. Here there's nothing to register for. Upload, copy the link, move on."
      },
      {
        "title": "A direct link, not a gallery",
        "body": "Imgur is built around its own image pages and community. If you just want a raw link that embeds inline, those pages get in the way. This gives you the file URL straight up."
      },
      {
        "title": "Full quality, no watermark",
        "body": "Your file comes back at the same resolution you uploaded, with no re-compression and no badge stamped on it. What you put in is what other people see."
      },
      {
        "title": "Clear about how long links last",
        "body": "Anonymous links stay live for at least a couple of weeks and are cleared on a monthly storage cleanup. Want one that sticks around? Make a free account and choose 'keep forever' when you upload."
      }
    ],
    "comparisonTitle": "Imgur alternatives compared",
    "comparisonIntro": "Most of these hosts will hand you a link. Where they differ is whether you need an account at all, how big a file you can drop, and whether the link points straight at the image. Here's how a few popular options line up.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Direct hotlink",
      "Keeps full quality",
      "Link lifetime"
    ],
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "Yes",
          "50 MB",
          "Yes",
          "Yes",
          "Weeks free, forever when signed in"
        ]
      },
      {
        "cells": [
          "Imgur",
          "No (since 2023)",
          "20 MB",
          "Limited",
          "Yes",
          "Tied to your account"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "Yes",
          "32 MB",
          "Yes",
          "Yes",
          "Optional expiry"
        ]
      },
      {
        "cells": [
          "Postimages",
          "Yes",
          "24 MB",
          "Yes",
          "No (resized to 1280px)",
          "Permanent"
        ]
      }
    ],
    "useCasesTitle": "Where a direct image link helps",
    "useCasesIntro": "Once your picture has its own URL, it slots into the places Imgur links used to:",
    "useCases": [
      {
        "title": "Discord and forums",
        "body": "Paste the link in a channel or thread and the image renders inline. No gallery tab to open, no 'view on Imgur' detour for the person reading."
      },
      {
        "title": "Bug reports and tickets",
        "body": "Attach a screenshot to a GitHub issue, a support ticket or a Notion doc by dropping in the URL. It loads as the image, so reviewers see it without leaving the page."
      },
      {
        "title": "Email and chat",
        "body": "Add the link to a signature or a message. Because it hotlinks the file directly, recipients see the picture instead of a broken preview box."
      }
    ],
    "sections": [
      {
        "heading": "What changed with Imgur in 2023?",
        "body": "In April 2023 Imgur stopped allowing anonymous uploads, so posting an image now requires an account, and that image is tied to it. Around the same time the site tightened its rules on adult and explicit material and began removing old, unused anonymous content that had built up over the years. None of that makes Imgur a bad site. It is still a solid community and gallery platform. It just means the old habit of dropping a file there for a throwaway link no longer fits the way it works now."
      },
      {
        "heading": "Imgur vs a plain direct-link host",
        "body": "The two are built for different jobs. Imgur is a destination: image pages, comments, votes, a front-page feed. A direct-link host like this one has no feed and no profile. You upload a file and get a URL that ends in .jpg or .png and points at the raw image. That is the right tool when you want the picture to appear inline somewhere else, like a Discord chat or a forum post, rather than send people to a separate page. If you actually want the community and the gallery, Imgur is still the better pick."
      },
      {
        "heading": "Is it safe to switch away from Imgur?",
        "body": "For quick sharing, yes, with a couple of things to know. Every link here is served over HTTPS and points only at your file, with no redirect pages or trackers attached. Anonymous uploads are public to anyone who has the link, so don't post anything private, and keep your own copy of the file. Free links clear on a regular monthly cleanup rather than living forever, so for anything you need to keep, make a free account and mark it 'keep forever', or hold onto the original."
      }
    ],
    "faqTitle": "Imgur alternative FAQ",
    "faqs": [
      {
        "q": "Is Imgur free?",
        "a": "Yes, Imgur is free to use. The main change is that you now need an account to upload, so it is no longer a one-step anonymous link tool the way it was before 2023."
      },
      {
        "q": "Did Imgur remove anonymous uploads?",
        "a": "Yes. In April 2023 Imgur ended anonymous uploads. You now have to be signed in to post an image, and the image is tied to your account."
      },
      {
        "q": "Does Imgur still allow anonymous uploads?",
        "a": "No. Since the 2023 change, uploading on Imgur requires an account. If you want to get a link without signing in, you need a host that still allows anonymous uploads, like this one."
      },
      {
        "q": "Why did people move off Imgur?",
        "a": "A few reasons: the end of anonymous uploads, the removal of old unused anonymous content, and tighter content rules. For people who only wanted a fast direct link, a lighter host without an account simply fits better."
      },
      {
        "q": "What is the best free Imgur alternative?",
        "a": "It depends on what you need. If you want a quick direct link with no account and full quality, ImageToURL works well. ImgBB and Postimages are also free and worth a look. If you want a community gallery, Imgur itself is still good."
      },
      {
        "q": "Do I need an account to use ImageToURL?",
        "a": "No. You can upload and get a direct link without signing up. An account is optional and mainly useful if you want a link that stays up permanently."
      },
      {
        "q": "What image formats can I upload?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 50MB per file. The link you get ends in the real extension, so it hotlinks and embeds the same way the original file would."
      },
      {
        "q": "Will the link embed in Discord?",
        "a": "Yes. Because the URL points right at the image file, Discord shows it inline as a picture instead of a link card or a gallery page. The same is true on Reddit and most forums."
      },
      {
        "q": "Does it compress or watermark my image?",
        "a": "No. You get back the same file you uploaded at full resolution, with no re-compression and no watermark added."
      },
      {
        "q": "How long do the links last?",
        "a": "Anonymous uploads stay live until the monthly storage cleanup, so you get a couple of weeks at minimum and often longer. For a link that never expires, create a free account and pick 'keep forever' when you upload."
      },
      {
        "q": "Can I move my old Imgur images here?",
        "a": "Yes. Download the images from your Imgur account, then upload them here to get fresh direct links. Keep the originals as a backup either way."
      },
      {
        "q": "Are my uploads private?",
        "a": "Anonymous uploads are public to anyone who has the link. There is no feed listing them, but the URL is not secret, so don't use it for anything sensitive."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Get a direct image link, no account",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct link in seconds. No sign-up, no compression, no watermark, no gallery page.",
    "ctaButton": "Upload Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "La mejor alternativa a Imgur (2026) — Gratis, sin cuenta | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "imgbb-alternative", "label": "Alternativa a ImgBB" },
      { "pageKey": "cloudinary-alternative", "label": "Alternativa a Cloudinary" }
    ],
    "metaDescription": "¿Buscas una alternativa a Imgur? ImageToURL ofrece alojamiento de imágenes gratuito sin necesidad de cuenta, enlaces permanentes, URLs directas y sin anuncios. El mejor reemplazo para Imgur.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Una plataforma de alojamiento de imágenes gratuita y sin anuncios que proporciona URLs directas permanentes sin requerir cuentas de usuario.",
    "badge": "ALTERNATIVA A IMGUR",
    "h1Pre": "La mejor",
    "h1Highlight": "alternativa a Imgur.",
    "intro": "Imgur ya no es lo que era. ImageToURL es el alojamiento de imágenes sencillo y sin anuncios que estabas buscando: enlaces permanentes, URLs directas y sin necesidad de crear una cuenta.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Simplemente arrastra y suelta tu archivo de imagen en nuestro cargador o haz clic para seleccionarlo desde tu dispositivo."
      },
      {
        "title": "Obtén tu enlace",
        "body": "Nuestro sistema procesa tu archivo al instante y genera una URL directa y permanente para tu imagen."
      },
      {
        "title": "Comparte en cualquier lugar",
        "body": "Copia tu enlace directo y compártelo en foros, Discord o cualquier otro sitio sin preocuparte por anuncios o caducidad."
      }
    ],
    "whyTitle": "Por qué cambiar desde Imgur",
    "whyItems": [
      {
        "title": "No más eliminaciones masivas",
        "body": "A diferencia de Imgur, no eliminamos imágenes por inactividad o antigüedad, asegurando que tu contenido permanezca en línea para siempre."
      },
      {
        "title": "Cero distracciones publicitarias",
        "body": "Ofrecemos una experiencia de visualización limpia y sin anuncios para que tu audiencia vea solo tu imagen, sin desorden promocional."
      },
      {
        "title": "Acceso mediante URL directa",
        "body": "Proporcionamos enlaces directos a imágenes por defecto, evitando las innecesarias páginas de galería y la carga social que se encuentra en Imgur."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué la gente busca alternativas a Imgur?",
        "a": "Imgur ha enfrentado problemas como la eliminación masiva de imágenes anónimas, una creciente saturación de anuncios y un cambio hacia las redes sociales, lo que lleva a los usuarios a buscar un alojamiento más fiable."
      },
      {
        "q": "¿Es ImageToURL realmente gratis como Imgur?",
        "a": "Sí, ImageToURL es completamente gratuito. No mostramos anuncios, no requerimos cuentas y no tenemos niveles premium ni limitaciones ocultas."
      },
      {
        "q": "¿ImageToURL borrará mis imágenes como hizo Imgur?",
        "a": "No. Proporcionamos alojamiento de imágenes permanente. No eliminamos imágenes por inactividad, antigüedad o estado de la cuenta."
      },
      {
        "q": "¿Puedo migrar mis imágenes de Imgur a ImageToURL?",
        "a": "Sí. Simplemente descarga tus imágenes de Imgur y súbelas de nuevo a ImageToURL para obtener nuevos enlaces permanentes que nunca caducarán."
      },
      {
        "q": "¿Tiene ImageToURL comunidad o funciones sociales?",
        "a": "No. Nos enfocamos puramente en el alojamiento de imágenes sin comentarios, votos positivos o feeds sociales, manteniendo tu experiencia simple y rápida."
      }
    ],
    "ctaTitle": "Haz el cambio desde Imgur",
    "ctaBody": "Alojamiento de imágenes gratuito sin anuncios, sin cuenta y con enlaces permanentes.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Meilleure alternative à Imgur (2026) — Gratuit, sans compte | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "imgbb-alternative", "label": "Alternative à ImgBB" },
      { "pageKey": "cloudinary-alternative", "label": "Alternative à Cloudinary" }
    ],
    "metaDescription": "Vous cherchez une alternative à Imgur ? ImageToURL propose un hébergement d'images gratuit sans compte, des liens permanents, des URL directes et aucune publicité. Le meilleur remplaçant d'Imgur.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Une plateforme d'hébergement d'images gratuite et sans publicité, fournissant des URL directes permanentes sans nécessiter de compte utilisateur.",
    "badge": "ALTERNATIVE À IMGUR",
    "h1Pre": "La meilleure",
    "h1Highlight": "alternative à Imgur.",
    "intro": "Imgur n'est plus ce qu'il était. ImageToURL est l'hébergeur d'images simple et sans publicité que vous recherchiez : liens permanents, URL directes, aucun compte requis.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Faites simplement glisser votre fichier image dans notre outil de téléchargement ou cliquez pour le sélectionner depuis votre appareil."
      },
      {
        "title": "Obtenez votre lien",
        "body": "Notre système traite instantanément votre fichier et génère une URL directe et permanente pour votre image."
      },
      {
        "title": "Partagez partout",
        "body": "Copiez votre lien direct et partagez-le sur des forums, Discord ou ailleurs sans vous soucier des publicités ou de l'expiration."
      }
    ],
    "whyTitle": "Pourquoi quitter Imgur",
    "whyItems": [
      {
        "title": "Fini les suppressions massives",
        "body": "Contrairement à Imgur, nous ne supprimons pas les images en fonction de l'inactivité ou de l'ancienneté, garantissant que votre contenu reste en ligne pour toujours."
      },
      {
        "title": "Zéro publicité",
        "body": "Nous offrons une expérience de visionnage propre et sans publicité afin que votre public ne voie que votre image, sans encombrement promotionnel."
      },
      {
        "title": "Accès par URL directe",
        "body": "Nous fournissons des liens d'image directs par défaut, en évitant les pages de galerie inutiles et le superflu social présents sur Imgur."
      }
    ],
    "faqTitle": "Questions fréquemment posées",
    "faqs": [
      {
        "q": "Pourquoi les gens cherchent-ils des alternatives à Imgur ?",
        "a": "Imgur a rencontré des problèmes tels que la suppression massive d'images anonymes, une saturation publicitaire croissante et une orientation vers les réseaux sociaux, poussant les utilisateurs à chercher un hébergement plus fiable."
      },
      {
        "q": "ImageToURL est-il vraiment gratuit comme Imgur ?",
        "a": "Oui, ImageToURL est entièrement gratuit. Nous n'affichons pas de publicités, ne demandons pas de compte et n'avons pas de niveaux premium ou de limitations cachées."
      },
      {
        "q": "ImageToURL supprimera-t-il mes images comme Imgur l'a fait ?",
        "a": "Non. Nous fournissons un hébergement d'images permanent. Nous ne supprimons pas les images en fonction de l'inactivité, de l'âge ou du statut du compte."
      },
      {
        "q": "Puis-je migrer mes images d'Imgur vers ImageToURL ?",
        "a": "Oui. Téléchargez simplement vos images depuis Imgur et téléversez-les sur ImageToURL pour obtenir de nouveaux liens permanents qui n'expireront jamais."
      },
      {
        "q": "ImageToURL possède-t-il une communauté ou des fonctionnalités sociales ?",
        "a": "Non. Nous nous concentrons uniquement sur l'hébergement d'images sans commentaires, votes ou flux sociaux, pour une expérience simple et rapide."
      }
    ],
    "ctaTitle": "Passez à ImageToURL",
    "ctaBody": "Hébergement d'images gratuit sans publicité, sans compte et avec des liens permanents.",
    "ctaButton": "Téléverser maintenant"
  },
  "de": {
    "metaTitle": "Beste Imgur Alternative (2026) — Kostenlos, ohne Konto | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "imgbb-alternative", "label": "ImgBB-Alternative" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary-Alternative" }
    ],
    "metaDescription": "Suchen Sie eine Imgur-Alternative? ImageToURL bietet kostenloses Image-Hosting ohne Konto, permanente Links, direkte URLs und ohne Werbung. Der beste Imgur-Ersatz.",
    "schemaName": "ImageToURL",
    "schemaDescription": "Eine kostenlose, werbefreie Image-Hosting-Plattform, die permanente direkte URLs ohne Benutzerkonto bereitstellt.",
    "badge": "IMGUR ALTERNATIVE",
    "h1Pre": "Die beste Imgur",
    "h1Highlight": "Alternative.",
    "intro": "Imgur ist nicht mehr das, was es einmal war. ImageToURL ist der einfache, werbefreie Image-Host, nach dem Sie gesucht haben — permanente Links, direkte URLs, kein Konto erforderlich.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ziehen Sie Ihre Bilddatei einfach per Drag-and-Drop in unseren Uploader oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "title": "Link erhalten",
        "body": "Unser System verarbeitet Ihre Datei sofort und generiert eine direkte, permanente URL für Ihr Bild."
      },
      {
        "title": "Überall teilen",
        "body": "Kopieren Sie Ihren direkten Link und teilen Sie ihn in Foren, auf Discord oder anderswo, ohne sich Gedanken über Werbung oder Ablaufdaten zu machen."
      }
    ],
    "whyTitle": "Warum von Imgur wechseln?",
    "whyItems": [
      {
        "title": "Keine Massenlöschungen mehr",
        "body": "Im Gegensatz zu Imgur löschen wir keine Bilder aufgrund von Inaktivität oder Alter, sodass Ihre Inhalte für immer online bleiben."
      },
      {
        "title": "Keine störende Werbung",
        "body": "Wir bieten ein sauberes, werbefreies Seherlebnis, damit Ihr Publikum nur Ihr Bild sieht und nicht von Werbe-Clutter abgelenkt wird."
      },
      {
        "title": "Direkter URL-Zugriff",
        "body": "Wir stellen standardmäßig direkte Bildlinks bereit und überspringen die unnötigen Galerie-Seiten und den sozialen Ballast von Imgur."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum suchen Leute nach Imgur-Alternativen?",
        "a": "Imgur hatte mit Problemen wie der Massenlöschung anonymer Bilder, zunehmender Werbesättigung und einer Verlagerung hin zu sozialen Medien zu kämpfen, was Nutzer dazu veranlasst, nach zuverlässigerem Hosting zu suchen."
      },
      {
        "q": "Ist ImageToURL wirklich so kostenlos wie Imgur?",
        "a": "Ja, ImageToURL ist komplett kostenlos. Wir schalten keine Werbung, benötigen keine Konten und haben keine Premium-Stufen oder versteckte Einschränkungen."
      },
      {
        "q": "Wird ImageToURL meine Bilder löschen, wie Imgur es getan hat?",
        "a": "Nein. Wir bieten permanentes Image-Hosting. Wir löschen keine Bilder aufgrund von Inaktivität, Alter oder Kontostatus."
      },
      {
        "q": "Kann ich meine Bilder von Imgur zu ImageToURL migrieren?",
        "a": "Ja. Laden Sie einfach Ihre Bilder von Imgur herunter und laden Sie sie erneut auf ImageToURL hoch, um neue, permanente Links zu erhalten, die niemals ablaufen."
      },
      {
        "q": "Hat ImageToURL eine Community oder soziale Funktionen?",
        "a": "Nein. Wir konzentrieren uns rein auf Image-Hosting ohne Kommentare, Upvotes oder soziale Feeds, damit Ihre Erfahrung einfach und schnell bleibt."
      }
    ],
    "ctaTitle": "Wechseln Sie von Imgur",
    "ctaBody": "Kostenloses Image-Hosting ohne Werbung, ohne Konto und mit permanenten Links.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "最高のImgur代替サービス (2026年) — 無料・アカウント不要 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "imgbb-alternative", "label": "ImgBB代替" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary代替" }
    ],
    "metaDescription": "Imgurの代替サービスをお探しですか？ImageToURLなら、アカウント不要で永久リンク、直接URL、広告なしの無料画像ホスティングが利用可能です。Imgurに代わる最適な選択肢です。",
    "schemaName": "ImageToURL",
    "schemaDescription": "アカウント登録不要で、永久的な直接URLを提供する広告なしの無料画像ホスティングプラットフォーム。",
    "badge": "IMGURの代替",
    "h1Pre": "最高のImgur",
    "h1Highlight": "代替サービス。",
    "intro": "Imgurは以前のようなサービスではなくなりました。ImageToURLは、あなたが求めていたシンプルで広告のない画像ホスティングです。永久リンク、直接URL、アカウント登録も不要です。",
    "howTitle": "利用方法",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "画像をアップローダーにドラッグ＆ドロップするか、クリックしてデバイスから選択するだけです。"
      },
      {
        "title": "リンクを取得",
        "body": "システムが即座にファイルを処理し、画像の直接かつ永久的なURLを生成します。"
      },
      {
        "title": "どこでも共有",
        "body": "直接リンクをコピーして、フォーラムやDiscordなど、どこにでも共有できます。広告やリンク切れの心配はありません。"
      }
    ],
    "whyTitle": "Imgurから乗り換える理由",
    "whyItems": [
      {
        "title": "一括削除の心配なし",
        "body": "Imgurとは異なり、非アクティブや経過時間に基づいて画像を削除することはありません。コンテンツは永久にオンラインで維持されます。"
      },
      {
        "title": "広告による妨害ゼロ",
        "body": "クリーンで広告のない閲覧体験を提供します。視聴者はプロモーションに邪魔されることなく、あなたの画像だけを見ることができます。"
      },
      {
        "title": "直接URLアクセス",
        "body": "デフォルトで直接画像リンクを提供します。Imgurにあるような不要なギャラリーページやソーシャル機能の肥大化を回避できます。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜImgurの代替サービスを探す人が多いのですか？",
        "a": "Imgurは匿名画像の大量削除、広告の増加、ソーシャルメディア化へのシフトといった問題を抱えており、より信頼性の高いホスティングを求めるユーザーが増えています。"
      },
      {
        "q": "ImageToURLはImgurのように本当に無料ですか？",
        "a": "はい、ImageToURLは完全に無料です。広告表示やアカウント登録は不要で、プレミアムプランや隠れた制限もありません。"
      },
      {
        "q": "ImageToURLはImgurのように画像を削除しますか？",
        "a": "いいえ。永久的な画像ホスティングを提供しています。非アクティブ、経過時間、アカウントステータスに基づいて画像を削除することはありません。"
      },
      {
        "q": "ImgurからImageToURLへ画像を移行できますか？",
        "a": "はい。Imgurから画像をダウンロードし、ImageToURLに再アップロードするだけで、期限切れのない新しい永久リンクを取得できます。"
      },
      {
        "q": "ImageToURLにはコミュニティやソーシャル機能はありますか？",
        "a": "いいえ。コメント、評価、ソーシャルフィードのない、純粋な画像ホスティングに特化しており、シンプルで高速な体験を提供します。"
      }
    ],
    "ctaTitle": "Imgurからの乗り換え",
    "ctaBody": "広告なし、アカウント不要、永久リンクの無料画像ホスティング。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "最佳 Imgur 替代品 (2026) — 免费、无需注册 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "imgbb-alternative", "label": "ImgBB 替代品" },
      { "pageKey": "cloudinary-alternative", "label": "Cloudinary 替代品" }
    ],
    "metaDescription": "正在寻找 Imgur 替代品？ImageToURL 提供免费图像托管服务，无需注册账号，支持永久链接、直接 URL 且无广告。这是最好的 Imgur 替代方案。",
    "schemaName": "ImageToURL",
    "schemaDescription": "一个免费、无广告的图像托管平台，提供永久直接 URL，无需用户注册。",
    "badge": "IMGUR 替代品",
    "h1Pre": "最佳 Imgur",
    "h1Highlight": "替代品。",
    "intro": "Imgur 已今非昔比。ImageToURL 正是您一直在寻找的简洁、无广告的图像托管平台——提供永久链接、直接 URL，且无需注册账号。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的图像",
        "body": "只需将图像文件拖放到我们的上传器中，或点击从您的设备中选择。"
      },
      {
        "title": "获取您的链接",
        "body": "我们的系统会立即处理您的文件，并为您的图像生成一个直接的永久 URL。"
      },
      {
        "title": "随时随地分享",
        "body": "复制您的直接链接并将其分享到论坛、Discord 或其他任何地方，无需担心广告或链接失效。"
      }
    ],
    "whyTitle": "为什么要从 Imgur 切换过来",
    "whyItems": [
      {
        "title": "不再有大规模清理",
        "body": "与 Imgur 不同，我们不会因不活跃或时间过长而删除图像，确保您的内容永久在线。"
      },
      {
        "title": "零广告干扰",
        "body": "我们提供纯净、无广告的浏览体验，让您的受众只看到您的图像，而不是促销杂乱信息。"
      },
      {
        "title": "直接 URL 访问",
        "body": "我们默认提供直接图像链接，跳过 Imgur 中不必要的图库页面和臃肿的社交功能。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "为什么人们在寻找 Imgur 替代品？",
        "a": "Imgur 面临着匿名图像大规模删除、广告饱和度增加以及向社交媒体转型等问题，导致用户寻求更可靠的托管服务。"
      },
      {
        "q": "ImageToURL 真的像 Imgur 一样免费吗？",
        "a": "是的，ImageToURL 完全免费。我们不展示广告，不需要注册账号，也没有高级会员层级或隐藏限制。"
      },
      {
        "q": "ImageToURL 会像 Imgur 那样删除我的图像吗？",
        "a": "不会。我们提供永久图像托管。我们不会根据不活跃状态、时间或账号状态删除图像。"
      },
      {
        "q": "我可以将图像从 Imgur 迁移到 ImageToURL 吗？",
        "a": "可以。只需从 Imgur 下载您的图像，然后重新上传到 ImageToURL，即可获得永不过期的新永久链接。"
      },
      {
        "q": "ImageToURL 有社区或社交功能吗？",
        "a": "没有。我们专注于纯粹的图像托管，没有评论、点赞或社交信息流，保持您的体验简单快捷。"
      }
    ],
    "ctaTitle": "从 Imgur 切换过来",
    "ctaBody": "免费图像托管，无广告、无需账号，提供永久链接。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
