import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Anonymous Image Upload - No Account Required | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Free image hosting" },
      { "pageKey": "free-image-cdn", "label": "Free image CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI image hosting" },
      { "pageKey": "bulk-image-upload", "label": "Bulk image upload" }
    ],
    "metaDescription": "Upload images anonymously without creating an account. No signup, no email, no tracking. Just drag, drop, and get your link. Free and private.",
    "schemaName": "Anonymous Image Upload - ImageToURL",
    "schemaDescription": "Upload images anonymously without creating an account with no signup, email, or tracking required.",
    "badge": "ANONYMOUS UPLOAD",
    "h1Pre": "Anonymous Image Upload",
    "h1Highlight": " - no account needed.",
    "intro": "No signup form, no email box, no profile to fill out. Drag an image in, copy the link, and you're done in seconds. Anonymous just means there's no account tied to the upload, so it's quick - but it also means the link is public to anyone who has it. Worth knowing before you share something sensitive.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Drag and Drop",
        "body": "Simply drag your image file from your computer and drop it directly onto our upload area."
      },
      {
        "title": "Instant Processing",
        "body": "Our servers process your image immediately without requiring any account registration or personal details."
      },
      {
        "title": "Get Your Link",
        "body": "Receive a direct, permanent URL for your image that you can share anywhere instantly."
      }
    ],
    "whyTitle": "Why Anonymous Matters",
    "whyItems": [
      {
        "title": "No Registration",
        "body": "Skip the account creation. No usernames, no passwords, and no verification emails required."
      },
      {
        "title": "No Email Required",
        "body": "We never ask for your email address, ensuring your inbox stays free from marketing spam."
      },
      {
        "title": "No Profile, No History",
        "body": "Uploads aren't tied to an account, so there's no public gallery of your files and nothing linking one upload to the next."
      },
      {
        "title": "Instant Access",
        "body": "Zero friction: open the page, drop your file, and copy the link in under 10 seconds. No verification step in the way."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Do I need an account to upload?",
        "a": "No. There's no registration and no email to hand over. Drag and drop your image and you get a link straight away."
      },
      {
        "q": "What does 'anonymous' actually mean here?",
        "a": "It means the upload isn't attached to a user account or profile. There's no login, no public gallery under your name, and nothing connecting one upload to another."
      },
      {
        "q": "Can someone trace the image back to me?",
        "a": "There's no account or name on the file. We do log a request IP briefly to stop abuse and enforce daily limits, but that isn't shown to anyone. For real privacy, strip EXIF metadata first, since a photo can carry GPS and camera details on its own."
      },
      {
        "q": "Who can see my anonymous upload?",
        "a": "Anyone who has the link. The URL isn't listed or searchable, but it isn't secret either, so treat anything you upload as public and don't post images you'd want kept private."
      },
      {
        "q": "How long do anonymous links last?",
        "a": "Until the monthly storage cleanup, so a couple of weeks at minimum and usually longer. Need one that sticks around? Create a free account and choose 'keep forever' when you upload."
      },
      {
        "q": "Should I keep my own copy of the file?",
        "a": "Yes. Because anonymous links are temporary, hold onto the original on your device so you can re-upload if the link is eventually cleared."
      },
      {
        "q": "Does it compress or watermark my image?",
        "a": "No. You get the same file back at full resolution, with no re-compression and no watermark stamped on it."
      },
      {
        "q": "Will the anonymous link embed in Discord, Reddit and forums?",
        "a": "Yes. The URL points right at the image file, so it shows up inline as the picture rather than a download button or a preview card."
      },
      {
        "q": "What formats and size can I upload anonymously?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10 MB per file. The anonymous link is identical in quality to a signed-in one; the only difference is how long it lasts."
      },
      {
        "q": "Is anonymous upload free?",
        "a": "Yes, completely. There's no premium tier and no hidden cost. Signing in is optional and only adds the 'keep forever' choice."
      }
    ],
    "ctaTitle": "Upload anonymously in seconds",
    "ctaBody": "No account, no email, no tracking - just drop your image and get a link.",
    "ctaButton": "Upload Now",
    "specsTitle": "Anonymous upload at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Email", "value": "Never asked" },
      { "label": "Max size", "value": "10 MB per file" },
      { "label": "Visibility", "value": "Public to anyone with the link" }
    ],
    "comparisonTitle": "Which hosts let you skip the account",
    "comparisonIntro": "Anonymous upload sounds standard, but it isn't. Imgur dropped it in 2023, and others gate features behind a login. Here's who still lets you upload without signing in.",
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
      { "cells": ["Catbox", "Yes", "200 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["ImgBB", "Yes", "32 MB", "Yes", "Yes", "Optional expiry"] },
      { "cells": ["Postimages", "Yes", "24 MB", "Yes", "No (resized to 1280px)", "Permanent"] },
      { "cells": ["Imgur", "No (since 2023)", "20 MB", "Limited", "Yes", "Tied to your account"] }
    ],
    "useCasesTitle": "When skipping the account makes sense",
    "useCasesIntro": "No-login upload fits the moments where signing up would just be in the way:",
    "useCases": [
      { "title": "One-off shares", "body": "A screenshot for a support chat or a forum reply doesn't need an account behind it. Drop it, copy the link, move on." },
      { "title": "Throwaway and burner posts", "body": "Sharing something you don't want connected to your usual handle? No profile means there's no public history tying the upload to you." },
      { "title": "Quick links from a borrowed device", "body": "On someone else's computer you may not want to log in anywhere. Anonymous upload gets you a link without leaving an account signed in." }
    ],
    "sections": [
      { "heading": "What anonymous upload does and doesn't hide", "body": "Anonymous here means no account, no email and no public profile attached to your file. What it doesn't mean is invisible. To keep the service from being abused we briefly log the request IP to enforce daily limits, and that's normal for any free host. More importantly, the image itself can give you away: photos often carry EXIF metadata with GPS coordinates, a device model and a timestamp. If privacy matters, strip that metadata before uploading. Anonymous lowers the friction, but it isn't a cloak." },
      { "heading": "Anonymous links are public, so plan for it", "body": "An anonymous URL isn't listed in a gallery and isn't indexed, but anyone you give it to can open it and pass it on. There's no password on the file. Treat every anonymous upload as public: fine for memes, screenshots and art you're sharing anyway, not fine for IDs, private documents or anything you'd regret being seen. If you need access control, that's a different kind of tool than a free image host." },
      { "heading": "How long an anonymous link lasts", "body": "Skipping the account has one trade-off: lifetime. Anonymous uploads live until the next monthly storage cleanup, which is at least a couple of weeks and often more, but not forever. For a one-off share that's plenty. If you need the link to stay put - say it's going into documentation or a portfolio - create a free account and choose 'keep forever' instead. Keep your own copy of the file regardless, so you can re-upload if a temporary link is cleared." }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Subida de imágenes anónima — Sin cuenta necesaria | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hosting gratuito de imágenes" },
      { "pageKey": "free-image-cdn", "label": "CDN de imágenes gratuito" },
      { "pageKey": "ai-image-hosting", "label": "Hosting de imágenes con IA" },
      { "pageKey": "bulk-image-upload", "label": "Carga masiva de imágenes" }
    ],
    "metaDescription": "Sube imágenes de forma anónima sin crear una cuenta. Sin registro, sin correo electrónico, sin seguimiento. Solo arrastra, suelta y obtén tu enlace. Gratis y privado.",
    "schemaName": "Subida de imágenes anónima - ImageToURL",
    "schemaDescription": "Sube imágenes de forma anónima sin crear una cuenta, sin registro, correo electrónico o seguimiento requerido.",
    "badge": "SUBIDA ANÓNIMA",
    "h1Pre": "Subida de imágenes anónima",
    "h1Highlight": "— sin necesidad de cuenta.",
    "intro": "Sin formularios de registro, sin direcciones de correo electrónico y sin cookies de seguimiento. Solo arrastra, suelta y obtén tu enlace para compartir al instante.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Arrastra y suelta",
        "body": "Simplemente arrastra tu archivo de imagen desde tu computadora y suéltalo directamente en nuestra área de carga."
      },
      {
        "title": "Procesamiento instantáneo",
        "body": "Nuestros servidores procesan tu imagen de inmediato sin requerir registro de cuenta ni datos personales."
      },
      {
        "title": "Obtén tu enlace",
        "body": "Recibe una URL directa y permanente para tu imagen que puedes compartir en cualquier lugar al instante."
      }
    ],
    "whyTitle": "Por qué importa el anonimato",
    "whyItems": [
      {
        "title": "Sin registro",
        "body": "Evita la creación de cuentas. No se requieren nombres de usuario, contraseñas ni correos de verificación."
      },
      {
        "title": "Sin correo electrónico",
        "body": "Nunca pedimos tu dirección de correo electrónico, asegurando que tu bandeja de entrada se mantenga libre de spam."
      },
      {
        "title": "Sin seguimiento",
        "body": "No utilizamos cookies de seguimiento ni píxeles de análisis, manteniendo tu actividad de carga completamente privada."
      },
      {
        "title": "Acceso instantáneo",
        "body": "Experimenta cero fricción; abre la página, suelta tu archivo y obtén tu enlace en menos de 10 segundos."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Necesito crear una cuenta para subir imágenes?",
        "a": "No. ImageToURL no requiere cuenta, registro ni dirección de correo electrónico. Simplemente arrastra y suelta tu imagen y obtén un enlace al instante."
      },
      {
        "q": "¿ImageToURL rastrea quién sube las imágenes?",
        "a": "No asociamos las cargas con identidades de usuario. No hay cuentas de usuario, ni cookies que rastreen tu historial, ni se recopilan datos personales."
      },
      {
        "q": "¿Las cargas anónimas son permanentes?",
        "a": "Sí. Las cargas anónimas reciben las mismas URL permanentes que cualquier otra carga, sin reducción de calidad ni menor tiempo de retención."
      },
      {
        "q": "¿Alguien puede rastrear una imagen subida hasta mí?",
        "a": "No almacenamos direcciones IP ni información de identificación. Recomendamos eliminar los metadatos EXIF antes de subir si tu imagen contiene datos de ubicación."
      },
      {
        "q": "¿Es ImageToURL gratuito para cargas anónimas?",
        "a": "Sí. ImageToURL es completamente gratuito para todos los usuarios, sin niveles premium ni costos ocultos."
      }
    ],
    "ctaTitle": "Sube de forma anónima en segundos",
    "ctaBody": "Sin cuenta, sin correo, sin seguimiento: solo suelta tu imagen y obtén un enlace.",
    "ctaButton": "Subir ahora"
  },
  "fr": {
    "metaTitle": "Hébergement d'images anonyme — Aucun compte requis | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hébergement d'images gratuit" },
      { "pageKey": "free-image-cdn", "label": "CDN d'images gratuit" },
      { "pageKey": "ai-image-hosting", "label": "Hébergement d'images IA" },
      { "pageKey": "bulk-image-upload", "label": "Téléchargement d'images en masse" }
    ],
    "metaDescription": "Hébergez vos images anonymement sans créer de compte. Pas d'inscription, pas d'e-mail, pas de suivi. Glissez, déposez et obtenez votre lien. Gratuit et privé.",
    "schemaName": "Hébergement d'images anonyme - ImageToURL",
    "schemaDescription": "Hébergez des images anonymement sans créer de compte, sans inscription, sans e-mail et sans suivi.",
    "badge": "HÉBERGEMENT ANONYME",
    "h1Pre": "Hébergement d'images anonyme",
    "h1Highlight": "— aucun compte requis.",
    "intro": "Pas de formulaire d'inscription, pas d'adresse e-mail et pas de cookies de suivi. Glissez, déposez et obtenez instantanément votre lien de partage.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Glisser-déposer",
        "body": "Faites simplement glisser votre fichier image depuis votre ordinateur et déposez-le directement dans notre zone de téléchargement."
      },
      {
        "title": "Traitement instantané",
        "body": "Nos serveurs traitent votre image immédiatement sans nécessiter d'inscription ou de données personnelles."
      },
      {
        "title": "Obtenez votre lien",
        "body": "Recevez une URL directe et permanente pour votre image, prête à être partagée partout instantanément."
      }
    ],
    "whyTitle": "Pourquoi l'anonymat est important",
    "whyItems": [
      {
        "title": "Aucune inscription",
        "body": "Oubliez la création de compte. Aucun nom d'utilisateur, mot de passe ou e-mail de vérification n'est requis."
      },
      {
        "title": "Aucun e-mail requis",
        "body": "Nous ne demandons jamais votre adresse e-mail, garantissant que votre boîte de réception reste exempte de spam."
      },
      {
        "title": "Aucun suivi",
        "body": "Nous n'utilisons aucun cookie de suivi ou pixel d'analyse, gardant votre activité de téléchargement totalement privée."
      },
      {
        "title": "Accès instantané",
        "body": "Zéro friction : ouvrez la page, déposez votre fichier et obtenez votre lien en moins de 10 secondes."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Dois-je créer un compte pour héberger des images ?",
        "a": "Non. ImageToURL ne nécessite aucun compte, aucune inscription et aucune adresse e-mail. Glissez-déposez simplement votre image pour obtenir un lien instantanément."
      },
      {
        "q": "ImageToURL suit-il qui héberge les images ?",
        "a": "Nous n'associons pas les téléchargements à des identités. Il n'y a pas de comptes utilisateurs, pas de cookies de suivi et aucune donnée personnelle collectée."
      },
      {
        "q": "Les téléchargements anonymes sont-ils permanents ?",
        "a": "Oui. Les téléchargements anonymes reçoivent les mêmes URL permanentes que n'importe quel autre téléchargement, sans perte de qualité ni durée de rétention réduite."
      },
      {
        "q": "Quelqu'un peut-il remonter jusqu'à moi via une image ?",
        "a": "Nous ne stockons pas les adresses IP ou les informations d'identification. Nous recommandons de supprimer les métadonnées EXIF avant l'envoi si votre image contient des données de localisation."
      },
      {
        "q": "ImageToURL est-il gratuit pour les téléchargements anonymes ?",
        "a": "Oui. ImageToURL est entièrement gratuit pour tous les utilisateurs, sans offre premium ni frais cachés."
      }
    ],
    "ctaTitle": "Hébergez anonymement en quelques secondes",
    "ctaBody": "Pas de compte, pas d'e-mail, pas de suivi : déposez simplement votre image et obtenez un lien.",
    "ctaButton": "Héberger maintenant"
  },
  "de": {
    "metaTitle": "Anonymer Bild-Upload — Kein Konto erforderlich | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Kostenloses Bild-Hosting" },
      { "pageKey": "free-image-cdn", "label": "Kostenloses Bild-CDN" },
      { "pageKey": "ai-image-hosting", "label": "KI-Bild-Hosting" },
      { "pageKey": "bulk-image-upload", "label": "Massen-Bild-Upload" }
    ],
    "metaDescription": "Laden Sie Bilder anonym hoch, ohne ein Konto zu erstellen. Keine Registrierung, keine E-Mail, kein Tracking. Einfach per Drag & Drop zum Link. Kostenlos und privat.",
    "schemaName": "Anonymer Bild-Upload - ImageToURL",
    "schemaDescription": "Laden Sie Bilder anonym hoch, ohne ein Konto zu erstellen. Keine Registrierung, E-Mail oder Tracking erforderlich.",
    "badge": "ANONYMER UPLOAD",
    "h1Pre": "Anonymer Bild-Upload",
    "h1Highlight": "— kein Konto erforderlich.",
    "intro": "Keine Registrierungsformulare, keine E-Mail-Adressen und keine Tracking-Cookies. Einfach per Drag & Drop ziehen und sofort einen teilbaren Bild-Link erhalten.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Drag & Drop",
        "body": "Ziehen Sie Ihre Bilddatei einfach von Ihrem Computer direkt in unseren Upload-Bereich."
      },
      {
        "title": "Sofortige Verarbeitung",
        "body": "Unsere Server verarbeiten Ihr Bild sofort, ohne dass eine Kontoregistrierung oder persönliche Daten erforderlich sind."
      },
      {
        "title": "Link erhalten",
        "body": "Erhalten Sie sofort eine direkte, dauerhafte URL für Ihr Bild, die Sie überall teilen können."
      }
    ],
    "whyTitle": "Warum Anonymität wichtig ist",
    "whyItems": [
      {
        "title": "Keine Registrierung",
        "body": "Überspringen Sie die Kontoerstellung. Keine Benutzernamen, keine Passwörter und keine Bestätigungs-E-Mails erforderlich."
      },
      {
        "title": "Keine E-Mail erforderlich",
        "body": "Wir fragen niemals nach Ihrer E-Mail-Adresse, damit Ihr Posteingang frei von Marketing-Spam bleibt."
      },
      {
        "title": "Kein Tracking",
        "body": "Wir verwenden keine Tracking-Cookies oder Analyse-Pixel, wodurch Ihre Upload-Aktivität vollständig privat bleibt."
      },
      {
        "title": "Sofortiger Zugriff",
        "body": "Erleben Sie null Reibungsverluste; öffnen Sie die Seite, ziehen Sie Ihre Datei hinein und erhalten Sie Ihren Link in unter 10 Sekunden."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Muss ich ein Konto erstellen, um Bilder hochzuladen?",
        "a": "Nein. ImageToURL erfordert kein Konto, keine Registrierung und keine E-Mail-Adresse. Einfach per Drag & Drop das Bild hochladen und sofort einen Link erhalten."
      },
      {
        "q": "Verfolgt ImageToURL, wer Bilder hochlädt?",
        "a": "Wir verknüpfen Uploads nicht mit Benutzeridentitäten. Es gibt keine Benutzerkonten, keine Cookies, die Ihren Verlauf verfolgen, und es werden keine persönlichen Daten gesammelt."
      },
      {
        "q": "Sind anonyme Uploads dauerhaft?",
        "a": "Ja. Anonyme Uploads erhalten die gleichen dauerhaften URLs wie jeder andere Upload, ohne Qualitätsverlust oder kürzere Speicherdauer."
      },
      {
        "q": "Kann jemand ein hochgeladenes Bild zu mir zurückverfolgen?",
        "a": "Wir speichern keine IP-Adressen oder identifizierenden Informationen. Wir empfehlen, EXIF-Metadaten vor dem Hochladen zu entfernen, falls Ihr Bild Standortdaten enthält."
      },
      {
        "q": "Ist ImageToURL für anonyme Uploads kostenlos?",
        "a": "Ja. ImageToURL ist für alle Benutzer völlig kostenlos, ohne Premium-Stufen oder versteckte Kosten."
      }
    ],
    "ctaTitle": "In Sekunden anonym hochladen",
    "ctaBody": "Kein Konto, keine E-Mail, kein Tracking – ziehen Sie einfach Ihr Bild hinein und erhalten Sie einen Link.",
    "ctaButton": "Jetzt hochladen"
  },
  "ja": {
    "metaTitle": "匿名画像アップロード — アカウント不要 | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "free-image-hosting", "label": "無料画像ホスティング" },
      { "pageKey": "free-image-cdn", "label": "無料画像CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI画像ホスティング" },
      { "pageKey": "bulk-image-upload", "label": "一括画像アップロード" }
    ],
    "metaDescription": "アカウント作成なしで画像を匿名アップロード。登録、メールアドレス、追跡は一切不要。ドラッグ＆ドロップで即座にリンクを取得。無料かつプライベート。",
    "schemaName": "匿名画像アップロード - ImageToURL",
    "schemaDescription": "アカウント作成、メールアドレス、追跡不要で画像を匿名アップロードできます。",
    "badge": "匿名アップロード",
    "h1Pre": "匿名画像アップロード",
    "h1Highlight": "— アカウント不要。",
    "intro": "登録フォームやメールアドレス、追跡用クッキーは一切ありません。ドラッグ＆ドロップするだけで、共有可能な画像リンクを即座に取得できます。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "ドラッグ＆ドロップ",
        "body": "PCから画像ファイルをアップロードエリアにドラッグ＆ドロップするだけです。"
      },
      {
        "title": "即時処理",
        "body": "アカウント登録や個人情報を入力することなく、サーバーが即座に画像を処理します。"
      },
      {
        "title": "リンクを取得",
        "body": "どこでもすぐに共有できる、永続的な画像URLが発行されます。"
      }
    ],
    "whyTitle": "匿名であることの重要性",
    "whyItems": [
      {
        "title": "登録不要",
        "body": "アカウント作成は不要です。ユーザー名、パスワード、確認メールなどは一切必要ありません。"
      },
      {
        "title": "メールアドレス不要",
        "body": "メールアドレスを尋ねることはありません。迷惑メールに悩まされる心配もありません。"
      },
      {
        "title": "追跡なし",
        "body": "追跡用クッキーや解析ピクセルを使用していないため、アップロード履歴は完全にプライベートに保たれます。"
      },
      {
        "title": "即時アクセス",
        "body": "ストレスフリーな体験。ページを開いてファイルをドロップすれば、10秒以内にリンクが手に入ります。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "画像をアップロードするのにアカウント作成は必要ですか？",
        "a": "いいえ。ImageToURLはアカウント登録やメールアドレスを一切必要としません。ドラッグ＆ドロップするだけで即座にリンクを取得できます。"
      },
      {
        "q": "ImageToURLは誰がアップロードしたかを追跡しますか？",
        "a": "アップロードとユーザーの身元を関連付けることはありません。ユーザーアカウントや履歴を追跡するクッキーはなく、個人データも収集しません。"
      },
      {
        "q": "匿名アップロードは永続的ですか？",
        "a": "はい。匿名アップロードでも他のアップロードと同様に永続的なURLが発行され、画質の低下や保存期間の制限もありません。"
      },
      {
        "q": "アップロードした画像から個人を特定されることはありますか？",
        "a": "IPアドレスや個人を特定する情報は保存しません。画像に位置情報が含まれている場合は、アップロード前にEXIFメタデータを削除することをお勧めします。"
      },
      {
        "q": "ImageToURLの匿名アップロードは無料ですか？",
        "a": "はい。ImageToURLはすべてのユーザーが完全に無料で利用でき、有料プランや隠れたコストは一切ありません。"
      }
    ],
    "ctaTitle": "数秒で匿名アップロード",
    "ctaBody": "アカウント、メール、追跡は不要。画像をドロップしてリンクを取得しましょう。",
    "ctaButton": "今すぐアップロード"
  },
  "zh-Hans": {
    "metaTitle": "匿名图片上传 — 无需注册 | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "free-image-hosting", "label": "免费图片托管" },
      { "pageKey": "free-image-cdn", "label": "免费图片 CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI 图片托管" },
      { "pageKey": "bulk-image-upload", "label": "批量上传图片" }
    ],
    "metaDescription": "无需创建账户即可匿名上传图片。无需注册、无需邮箱、无追踪。只需拖放，即可获取链接。免费且私密。",
    "schemaName": "匿名图片上传 - ImageToURL",
    "schemaDescription": "无需创建账户、无需注册、无需邮箱或追踪即可匿名上传图片。",
    "badge": "匿名上传",
    "h1Pre": "匿名图片上传",
    "h1Highlight": "— 无需账户。",
    "intro": "无需注册表单，无需电子邮件地址，也无追踪 Cookie。只需拖放，即可立即获取可分享的图片链接。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "拖放图片",
        "body": "只需将图片文件从电脑中拖出，直接放入我们的上传区域即可。"
      },
      {
        "title": "即时处理",
        "body": "我们的服务器会立即处理您的图片，无需任何账户注册或个人详细信息。"
      },
      {
        "title": "获取链接",
        "body": "获取一个永久的图片直链，您可以立即在任何地方分享。"
      }
    ],
    "whyTitle": "为何匿名很重要",
    "whyItems": [
      {
        "title": "无需注册",
        "body": "跳过账户创建步骤。无需用户名、密码或验证邮件。"
      },
      {
        "title": "无需邮箱",
        "body": "我们从不索要您的电子邮件地址，确保您的收件箱免受营销垃圾邮件骚扰。"
      },
      {
        "title": "无追踪",
        "body": "我们不使用追踪 Cookie 或分析像素，确保您的上传活动完全私密。"
      },
      {
        "title": "即时访问",
        "body": "零摩擦体验；打开页面，放入文件，10秒内即可获得链接。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "上传图片需要创建账户吗？",
        "a": "不需要。ImageToURL 无需账户、无需注册、无需电子邮件地址。只需拖放图片，即可立即获取链接。"
      },
      {
        "q": "ImageToURL 会追踪上传者吗？",
        "a": "我们不会将上传内容与用户身份关联。这里没有用户账户，没有追踪历史的 Cookie，也不会收集任何个人数据。"
      },
      {
        "q": "匿名上传是永久的吗？",
        "a": "是的。匿名上传获得的永久链接与任何其他上传方式相同，不会降低质量或缩短保留时间。"
      },
      {
        "q": "有人能通过上传的图片追踪到我吗？",
        "a": "我们不存储 IP 地址或识别信息。如果您的图片包含位置数据，建议在上传前清除 EXIF 元数据。"
      },
      {
        "q": "ImageToURL 的匿名上传是免费的吗？",
        "a": "是的。ImageToURL 对所有用户完全免费，没有高级会员等级或隐藏费用。"
      }
    ],
    "ctaTitle": "秒速匿名上传",
    "ctaBody": "无需账户、无需邮箱、无追踪——只需放入图片即可获取链接。",
    "ctaButton": "立即上传"
  },
} as LandingContentMap;
