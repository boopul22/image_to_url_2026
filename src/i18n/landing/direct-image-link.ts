import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Direct Image Link - Free Hotlinkable URL, No Gallery Page | ImageToURL",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Free image hosting" },
      { "pageKey": "free-image-cdn", "label": "Free image CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI image hosting" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymous image upload" }
    ],
    "metaDescription": "Get a direct image link that ends in .jpg, .png or .webp and opens the raw file - not a gallery page. Free, no sign-up, hotlinks inline in HTML, Discord and email.",
    "schemaName": "Direct Image Link",
    "schemaDescription": "A free tool that gives you a direct image link ending in the real file extension, so the raw image loads and embeds inline instead of opening a page.",
    "badge": "DIRECT IMAGE LINK",
    "h1Pre": "Direct Image Link:",
    "h1Highlight": "the file, not a page",
    "intro": "A direct image link points straight at the image file, so the URL ends in .jpg, .png or .webp and loads the raw picture on its own. That's the kind of link forums, Discord, email and HTML need to embed an image inline. Upload your file in the box above and you get a clean direct link in a couple of seconds, no account required. It works on JPG, PNG, WebP, GIF and SVG up to 10MB, with no watermark and nothing compressed on the way through.",
    "specsTitle": "Direct image link at a glance",
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
        "label": "Link type",
        "value": "Direct, ends in file extension"
      }
    ],
    "howTitle": "How to get a direct image link",
    "steps": [
      {
        "title": "Upload the file",
        "body": "Drag your image onto the box or click to pick one. JPG, PNG, WebP, GIF and SVG all work, up to 10MB each. The file goes onto a fast global CDN."
      },
      {
        "title": "Copy the direct link",
        "body": "You get a URL that ends in the real file extension, like .jpg or .png. Open it and you see just the image, no surrounding page, no ads, no click-through."
      },
      {
        "title": "Embed or paste it",
        "body": "Drop the link into an HTML img tag, Markdown, a forum post, a Discord message or an email and the picture shows up inline instead of as a link to a page."
      }
    ],
    "whyTitle": "Why you need a direct link, not a page link",
    "whyItems": [
      {
        "title": "Forums and BBCode need it",
        "body": "Forum image tags and BBCode only embed a URL that ends in an image extension. Paste an Imgur gallery page or a Drive viewer link and you get a dead box or a text link, not the picture."
      },
      {
        "title": "HTML and Markdown embed it inline",
        "body": "An HTML img tag and Markdown image syntax both expect a direct file URL. Give them a direct link and the image loads in place; give them a page link and nothing renders."
      },
      {
        "title": "Discord, Slack and Reddit show the image",
        "body": "Chat apps unfurl a direct link straight into the picture. A page link usually shows a small preview card or just the text, which is not what you want in a thread."
      },
      {
        "title": "Full quality, no resizing",
        "body": "The link points at your original file at full resolution. Some hosts quietly scale hotlinked images down to around 1,280px; this one leaves your file exactly as you uploaded it."
      }
    ],
    "comparisonTitle": "Direct link vs page link",
    "comparisonIntro": "The fastest way to tell the two apart is the end of the URL and what opens when you click it. A direct link ends in an image extension and shows the raw file; a page or share link opens a webpage that contains the image. Here is how common sources compare.",
    "comparisonColumns": [
      "Link type",
      "Ends in file extension",
      "Embeds inline",
      "Opens a page",
      "Example source"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Direct image link",
          "Yes (.jpg, .png, .webp)",
          "Yes",
          "No",
          "ImageToURL, Catbox, ImgBB direct URL"
        ]
      },
      {
        "cells": [
          "Imgur gallery page",
          "No",
          "No",
          "Yes",
          "imgur.com/a/abc123"
        ]
      },
      {
        "cells": [
          "Google Drive share link",
          "No",
          "No",
          "Yes",
          "drive.google.com/file/d/..."
        ]
      },
      {
        "cells": [
          "Webpage with image",
          "No",
          "No",
          "Yes",
          "Any blog post or product page"
        ]
      },
      {
        "cells": [
          "Right-click 'Copy image address'",
          "Usually yes",
          "Yes",
          "No",
          "Image already on a live page"
        ]
      }
    ],
    "useCasesTitle": "Where a direct image link is the only thing that works",
    "useCasesIntro": "Once your picture has a direct link, it drops straight into the places that refuse page links:",
    "useCases": [
      {
        "title": "Forum and BBCode posts",
        "body": "Wrap the direct URL in image tags or BBCode and the picture renders inside your post. A gallery page link would just sit there as plain text."
      },
      {
        "title": "Website builders and HTML",
        "body": "Paste the link into an img tag, a WordPress or Wix image field, a Notion page or a README and the image loads inline with no extra hosting to set up."
      },
      {
        "title": "Email signatures and chat",
        "body": "Add the direct link to an HTML email or a Slack message and recipients see the actual image instead of a broken box or a link they have to open."
      }
    ],
    "sections": [
      {
        "heading": "What is a direct image link?",
        "body": "A direct image link is a web address that points at the image file itself, so it ends in the file's own extension like .jpg, .png or .webp. Open it in a browser and you see only the picture, with no menu, no comments and no ads around it. Because the URL is the raw file, anything that reads a URL can load the image in place: an HTML img tag, Markdown, a forum's image tag, a chat app. That is the difference from a page link, which opens a webpage that happens to contain the image and cannot be embedded on its own."
      },
      {
        "heading": "How to tell if a link is direct",
        "body": "Three quick checks. First, look at the end of the URL: a direct link finishes in an image extension such as .jpg, .png, .gif or .webp. Second, open it in a fresh browser tab. If you see just the image on a blank background, it is direct; if you land on a gallery, a viewer or a full webpage, it is not. Third, try it in an HTML img tag or a Markdown image. A direct link shows the picture, while a page link renders nothing or shows broken-image text."
      },
      {
        "heading": "Turning an indirect link into a direct one",
        "body": "You cannot force a Google Drive viewer URL or an Imgur gallery page to behave like a file link, because those addresses point at pages, not at the raw image. The reliable fix is to re-host the picture. Save the image to your device, then upload it here and copy the direct link we hand back. The new URL ends in the real extension and embeds inline straight away. Keep your own copy of the file as a backup, since anonymous links are cleared on a regular cleanup schedule."
      }
    ],
    "faqTitle": "Direct image link FAQ",
    "faqs": [
      {
        "q": "What is a direct image link?",
        "a": "It is a URL that points straight at the image file, ending in the real extension like .jpg or .png. Opening it shows only the picture, and you can embed it inline in HTML, Markdown, forums and chat apps."
      },
      {
        "q": "How do I know if a link is direct or not?",
        "a": "Check the end of the URL and what opens. A direct link ends in an image extension and loads just the image on a blank page. If clicking it opens a gallery, a viewer or a webpage, it is an indirect page link."
      },
      {
        "q": "How do I get a direct link for my image?",
        "a": "Upload the file in the box above. Within a couple of seconds you get a URL ending in the real file extension that loads the raw image. No account and no payment are needed."
      },
      {
        "q": "Why won't my Imgur or Google Drive link embed?",
        "a": "Those links open a page that contains the image, not the file itself, so an img tag or a forum image tag has nothing to render. Re-host the image here to get a direct link that embeds inline."
      },
      {
        "q": "How do I convert an indirect link to a direct one?",
        "a": "You cannot rewrite a page URL into a file URL by hand. Save the image, then upload it here and use the direct link we generate. That new URL ends in the file extension and works in any img tag."
      },
      {
        "q": "Does the direct link work in HTML and Markdown?",
        "a": "Yes. The URL is a normal direct image link, so it works in HTML img src tags, Markdown image syntax, CSS background-image and any website builder that accepts an image URL."
      },
      {
        "q": "Will it embed in Discord, Slack and forums?",
        "a": "Yes. Because the link points right at the file, Discord and Slack unfurl it into the picture, and forum image tags or BBCode render it inline instead of showing plain text."
      },
      {
        "q": "Do direct image links work in email?",
        "a": "Yes. A direct file URL is what HTML email clients need to show an image inline. A page link tends to break or appear as a plain hyperlink in the message."
      },
      {
        "q": "Does it compress or resize my image?",
        "a": "No. You get back the same file at full resolution, with no re-compression and no watermark. That is different from hosts that scale hotlinked images down to a smaller width."
      },
      {
        "q": "What formats and file size are supported?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10MB per file. The link ends in the matching extension, so it hotlinks the same way the original file would."
      },
      {
        "q": "How long does the direct link stay live?",
        "a": "Anonymous links stay up until our monthly storage cleanup, so you get at least a couple of weeks and often longer. Sign in for free and choose 'keep forever' if you need a permanent link, and keep your own backup either way."
      },
      {
        "q": "Are the links safe to share?",
        "a": "Each link is served over HTTPS and points only at your image, with no redirect pages or trackers. Anonymous uploads are public to anyone with the link, so do not post anything private."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Get a direct image link now",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct link that ends in the file extension and embeds inline. No sign-up, no compression, no gallery page.",
    "ctaButton": "Upload Your Image",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Alojamiento de enlaces directos a imágenes — URLs limpias para hotlinking | ImageToURL",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hosting gratuito de imágenes" },
      { "pageKey": "free-image-cdn", "label": "CDN de imágenes gratuito" },
      { "pageKey": "ai-image-hosting", "label": "Hosting de imágenes con IA" },
      { "pageKey": "anonymous-image-upload", "label": "Carga anónima de imágenes" }
    ],
    "metaDescription": "Obtén enlaces directos a imágenes que terminan en .jpg, .png, .gif, sin páginas de galería con anuncios. URLs aptas para hotlinking e incrustar en cualquier lugar de la web.",
    "schemaName": "Alojamiento de enlaces directos a imágenes",
    "schemaDescription": "Una herramienta para generar URLs de imágenes directas y sin anuncios, optimizadas para hotlinking e incrustación en sitios web, foros y correos electrónicos.",
    "badge": "ENLACES DIRECTOS A IMÁGENES",
    "h1Pre": "Enlaces directos a imágenes,",
    "h1Highlight": "sin páginas de galería.",
    "intro": "Obtén URLs de imágenes limpias y aptas para hotlinking que apuntan directamente a tu archivo. Sin envoltorios de galería, sin anuncios, sin redirecciones: solo la imagen, lista para incrustar en cualquier lugar.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube tu imagen",
        "body": "Selecciona cualquier archivo de imagen desde tu dispositivo para subirlo al instante a nuestros servidores de alta velocidad."
      },
      {
        "title": "Obtén la URL directa",
        "body": "Proporcionamos un enlace limpio y permanente que apunta directamente a tu archivo de imagen, no a una página de galería."
      },
      {
        "title": "Incrusta en cualquier lugar",
        "body": "Copia y pega tu enlace directo en tu sitio web, foro o correo electrónico para mostrar tu imagen al instante."
      }
    ],
    "whyTitle": "¿Por qué usar enlaces directos?",
    "whyItems": [
      {
        "title": "URLs limpias",
        "body": "Nuestros enlaces apuntan directamente al archivo, asegurando que tus espectadores vean solo la imagen sin ninguna interfaz que distraiga."
      },
      {
        "title": "Sin anuncios",
        "body": "Evita los molestos anuncios y ventanas emergentes de las galerías que saturan la experiencia del usuario en otras plataformas de alojamiento."
      },
      {
        "title": "Apto para hotlinking",
        "body": "Admitimos hotlinking directo, por lo que tus imágenes se cargan de forma fiable en HTML, Markdown y en todos tus proyectos."
      },
      {
        "title": "Compatibilidad universal",
        "body": "Nuestras URLs directas funcionan perfectamente en etiquetas img, clientes de correo electrónico y respuestas de API sin restricciones de referencia."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Qué es un enlace directo a una imagen?",
        "a": "Un enlace directo a una imagen apunta directamente al archivo de imagen, no a una página de galería. Cuando lo abres, solo ves la imagen."
      },
      {
        "q": "¿Por qué los enlaces directos son mejores que los enlaces de galería?",
        "a": "Los enlaces directos no tienen anuncios, cargan más rápido y son necesarios para incrustar imágenes en HTML, correos electrónicos y foros."
      },
      {
        "q": "¿Puedo hacer hotlink de imágenes de ImageToURL en mi sitio web?",
        "a": "Sí, admitimos hotlinking totalmente. Puedes incrustar nuestras URLs en el HTML de tu sitio web sin limitación de ancho de banda."
      },
      {
        "q": "¿Funcionan los enlaces directos a imágenes en correos electrónicos?",
        "a": "Sí, los enlaces directos son la única forma de asegurar que las imágenes se muestren correctamente dentro de los clientes de correo electrónico HTML."
      },
      {
        "q": "¿Imgur proporciona enlaces directos a imágenes?",
        "a": "Imgur utiliza por defecto páginas de galería con anuncios. ImageToURL proporciona un enlace limpio y directo por defecto en todo momento."
      }
    ],
    "ctaTitle": "Obtén un enlace directo a una imagen ahora",
    "ctaBody": "Sube tu imagen y obtén una URL limpia y apta para hotlinking sin páginas de galería ni anuncios.",
    "ctaButton": "Sube tu imagen"
  },
  "fr": {
    "metaTitle": "Hébergement d'images avec lien direct — URLs propres et hotlinkables | ImageToURL",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Hébergement d'images gratuit" },
      { "pageKey": "free-image-cdn", "label": "CDN d'images gratuit" },
      { "pageKey": "ai-image-hosting", "label": "Hébergement d'images IA" },
      { "pageKey": "anonymous-image-upload", "label": "Téléchargement d'image anonyme" }
    ],
    "metaDescription": "Obtenez des liens d'images directs se terminant par .jpg, .png, .gif — pas de pages de galerie avec publicités. URLs compatibles avec le hotlinking pour intégration partout sur le web.",
    "schemaName": "Hébergement d'images avec lien direct",
    "schemaDescription": "Un outil pour générer des URLs d'images directes et sans publicité, optimisées pour le hotlinking et l'intégration dans des sites web, forums et emails.",
    "badge": "LIENS D'IMAGES DIRECTS",
    "h1Pre": "Liens d'images directs",
    "h1Highlight": "sans pages de galerie.",
    "intro": "Obtenez des URLs d'images propres et hotlinkables qui pointent directement vers votre fichier. Pas de galeries, pas de publicités, pas de redirections — juste l'image, prête à être intégrée partout.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléchargez votre image",
        "body": "Sélectionnez n'importe quel fichier image depuis votre appareil pour le télécharger instantanément sur nos serveurs haute vitesse."
      },
      {
        "title": "Obtenez une URL directe",
        "body": "Nous fournissons un lien propre et permanent qui pointe directement vers votre fichier image, et non vers une page de galerie."
      },
      {
        "title": "Intégrez partout",
        "body": "Copiez et collez votre lien direct dans votre site web, forum ou email pour afficher votre image instantanément."
      }
    ],
    "whyTitle": "Pourquoi utiliser des liens directs ?",
    "whyItems": [
      {
        "title": "URLs propres",
        "body": "Nos liens pointent directement vers le fichier, garantissant que vos visiteurs ne voient que l'image sans interface distrayante."
      },
      {
        "title": "Sans publicités",
        "body": "Évitez les publicités de galerie et les pop-ups agaçants qui encombrent l'expérience utilisateur sur d'autres plateformes d'hébergement."
      },
      {
        "title": "Compatible avec le hotlinking",
        "body": "Nous prenons en charge le hotlinking direct, afin que vos images se chargent de manière fiable en HTML, Markdown et dans tous vos projets."
      },
      {
        "title": "Compatibilité universelle",
        "body": "Nos URLs directes fonctionnent parfaitement dans les balises img, les clients email et les réponses API sans aucune restriction de référent."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Qu'est-ce qu'un lien d'image direct ?",
        "a": "Un lien d'image direct pointe directement vers le fichier image lui-même, et non vers une page de galerie. Lorsque vous l'ouvrez, vous ne voyez que l'image."
      },
      {
        "q": "Pourquoi les liens directs sont-ils meilleurs que les liens de galerie ?",
        "a": "Les liens directs sont sans publicité, se chargent plus rapidement et sont nécessaires pour intégrer des images en HTML, dans les emails et sur les forums."
      },
      {
        "q": "Puis-je utiliser le hotlinking pour les images ImageToURL sur mon site ?",
        "a": "Oui, nous prenons entièrement en charge le hotlinking. Vous pouvez intégrer nos URLs dans le HTML de votre site sans limitation de bande passante."
      },
      {
        "q": "Les liens d'images directs fonctionnent-ils dans les emails ?",
        "a": "Oui, les liens directs sont le seul moyen de garantir que les images s'affichent correctement en ligne dans les clients email HTML."
      },
      {
        "q": "Imgur fournit-il des liens d'images directs ?",
        "a": "Imgur utilise par défaut des pages de galerie avec publicités. ImageToURL fournit systématiquement un lien propre et direct par défaut."
      }
    ],
    "ctaTitle": "Obtenez un lien d'image direct maintenant",
    "ctaBody": "Téléchargez votre image et obtenez une URL propre et hotlinkable sans aucune page de galerie ni publicité.",
    "ctaButton": "Téléchargez votre image"
  },
  "de": {
    "metaTitle": "Direktes Bild-Hosting — Saubere Hotlink-URLs | ImageToURL",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "free-image-hosting", "label": "Kostenloses Bild-Hosting" },
      { "pageKey": "free-image-cdn", "label": "Kostenloses Bild-CDN" },
      { "pageKey": "ai-image-hosting", "label": "KI-Bild-Hosting" },
      { "pageKey": "anonymous-image-upload", "label": "Anonymes Bild-Upload" }
    ],
    "metaDescription": "Erhalten Sie direkte Bild-Links, die auf .jpg, .png oder .gif enden — keine Galerie-Seiten mit Werbung. Hotlink-freundliche URLs zum Einbetten im Web.",
    "schemaName": "Direktes Bild-Hosting",
    "schemaDescription": "Ein Tool zur Erstellung direkter, werbefreier Bild-URLs, optimiert für Hotlinking und das Einbetten in Websites, Foren und E-Mails.",
    "badge": "DIREKTE BILD-LINKS",
    "h1Pre": "Direkte Bild-Links,",
    "h1Highlight": "keine Galerie-Seiten.",
    "intro": "Erhalten Sie saubere, hotlink-fähige Bild-URLs, die direkt auf Ihre Datei verweisen. Keine Galerie-Wrapper, keine Werbung, keine Weiterleitungen — nur das Bild, bereit zum Einbetten.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Wählen Sie eine Bilddatei von Ihrem Gerät aus, um sie sofort auf unsere Hochgeschwindigkeitsserver hochzuladen."
      },
      {
        "title": "Direkten Link erhalten",
        "body": "Wir stellen einen sauberen, permanenten Link bereit, der direkt auf Ihre Bilddatei verweist, nicht auf eine Galerie-Seite."
      },
      {
        "title": "Überall einbetten",
        "body": "Kopieren Sie den direkten Link und fügen Sie ihn in Ihre Website, Ihr Forum oder Ihre E-Mail ein, um das Bild sofort anzuzeigen."
      }
    ],
    "whyTitle": "Warum direkte Links nutzen?",
    "whyItems": [
      {
        "title": "Saubere URLs",
        "body": "Unsere Links verweisen direkt auf die Datei. Ihre Betrachter sehen nur das Bild ohne störende Benutzeroberfläche."
      },
      {
        "title": "Keine Werbung",
        "body": "Vermeiden Sie nervige Galerie-Werbung und Pop-ups, die das Nutzererlebnis auf anderen Hosting-Plattformen beeinträchtigen."
      },
      {
        "title": "Hotlink-freundlich",
        "body": "Wir unterstützen direktes Hotlinking, sodass Ihre Bilder zuverlässig in HTML, Markdown und all Ihren Projekten geladen werden."
      },
      {
        "title": "Universelle Kompatibilität",
        "body": "Unsere direkten URLs funktionieren perfekt in img-Tags, E-Mail-Clients und API-Antworten ohne Referrer-Einschränkungen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Was ist ein direkter Bild-Link?",
        "a": "Ein direkter Bild-Link verweist direkt auf die Bilddatei selbst, nicht auf eine Galerie-Seite. Wenn Sie ihn öffnen, sehen Sie nur das Bild."
      },
      {
        "q": "Warum sind direkte Links besser als Galerie-Links?",
        "a": "Direkte Links sind werbefrei, laden schneller und sind für das Einbetten von Bildern in HTML, E-Mails und Foren erforderlich."
      },
      {
        "q": "Kann ich ImageToURL-Bilder auf meiner Website hotlinken?",
        "a": "Ja, wir unterstützen Hotlinking vollständig. Sie können unsere URLs ohne Bandbreitendrosselung in das HTML Ihrer Website einbetten."
      },
      {
        "q": "Funktionieren direkte Bild-Links in E-Mails?",
        "a": "Ja, direkte Links sind der einzige Weg, um sicherzustellen, dass Bilder in HTML-E-Mail-Clients korrekt inline angezeigt werden."
      },
      {
        "q": "Bietet Imgur direkte Bild-Links an?",
        "a": "Imgur leitet standardmäßig auf Galerie-Seiten mit Werbung weiter. ImageToURL stellt standardmäßig immer einen sauberen, direkten Link bereit."
      }
    ],
    "ctaTitle": "Jetzt direkten Bild-Link erhalten",
    "ctaBody": "Laden Sie Ihr Bild hoch und erhalten Sie eine saubere, hotlink-fähige URL ohne Galerie-Seiten oder Werbung.",
    "ctaButton": "Bild hochladen"
  },
  "ja": {
    "metaTitle": "ダイレクト画像リンクホスティング — クリーンな直リンク用URL | ImageToURL",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "free-image-hosting", "label": "無料画像ホスティング" },
      { "pageKey": "free-image-cdn", "label": "無料画像CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI画像ホスティング" },
      { "pageKey": "anonymous-image-upload", "label": "匿名画像アップロード" }
    ],
    "metaDescription": "広告付きのギャラリーページではなく、.jpg、.png、.gifで終わる直接的な画像リンクを取得。Web上のどこにでも埋め込み可能な、直リンク対応のURLを提供します。",
    "schemaName": "ダイレクト画像リンクホスティング",
    "schemaDescription": "Webサイト、フォーラム、メールへの埋め込みや直リンクに最適化された、広告なしの直接的な画像URLを生成するツールです。",
    "badge": "ダイレクト画像リンク",
    "h1Pre": "ダイレクト画像リンク",
    "h1Highlight": "ギャラリーページは不要です。",
    "intro": "ファイルに直接アクセスできる、クリーンで直リンク可能な画像URLを取得しましょう。ギャラリーの枠組みや広告、リダイレクトは一切なし。画像のみをどこにでもすぐに埋め込めます。",
    "howTitle": "仕組み",
    "steps": [
      {
        "title": "画像をアップロード",
        "body": "デバイスから画像ファイルを選択し、高速サーバーへ即座にアップロードします。"
      },
      {
        "title": "ダイレクトURLを取得",
        "body": "ギャラリーページではなく、画像ファイルに直接アクセスできるクリーンで永続的なリンクを提供します。"
      },
      {
        "title": "どこにでも埋め込み",
        "body": "ダイレクトリンクをコピーして、Webサイト、フォーラム、メールに貼り付けるだけで、すぐに画像が表示されます。"
      }
    ],
    "whyTitle": "なぜダイレクトリンクを使うのか？",
    "whyItems": [
      {
        "title": "クリーンなURL",
        "body": "リンクはファイルに直接つながるため、閲覧者は余計なインターフェースに邪魔されることなく画像だけを見ることができます。"
      },
      {
        "title": "広告なし",
        "body": "他のホスティングプラットフォームでユーザー体験を損なう、煩わしいギャラリー広告やポップアップを回避できます。"
      },
      {
        "title": "直リンク対応",
        "body": "ダイレクトな直リンクをサポートしているため、HTML、Markdown、あらゆるプロジェクトで画像を確実に読み込めます。"
      },
      {
        "title": "高い互換性",
        "body": "当社のダイレクトURLは、imgタグ、メールクライアント、APIレスポンスで、リファラー制限なしに完璧に動作します。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "ダイレクト画像リンクとは何ですか？",
        "a": "ダイレクト画像リンクとは、ギャラリーページではなく、画像ファイルそのものに直接アクセスするリンクのことです。開くと画像のみが表示されます。"
      },
      {
        "q": "なぜギャラリーリンクよりダイレクトリンクの方が良いのですか？",
        "a": "ダイレクトリンクは広告がなく、読み込みが速く、HTML、メール、フォーラムへの画像埋め込みに必須だからです。"
      },
      {
        "q": "ImageToURLの画像を自分のWebサイトで直リンクできますか？",
        "a": "はい、直リンクを完全にサポートしています。帯域幅の制限なしに、WebサイトのHTMLへ当社のURLを埋め込むことができます。"
      },
      {
        "q": "ダイレクト画像リンクはメールでも使えますか？",
        "a": "はい、HTMLメールクライアント内で画像をインラインで正しく表示させるには、ダイレクトリンクが唯一の方法です。"
      },
      {
        "q": "Imgurはダイレクト画像リンクを提供していますか？",
        "a": "Imgurはデフォルトで広告付きのギャラリーページになります。ImageToURLは、常にクリーンなダイレクトリンクをデフォルトで提供します。"
      }
    ],
    "ctaTitle": "今すぐダイレクト画像リンクを取得",
    "ctaBody": "画像をアップロードして、ギャラリーページや広告のない、クリーンで直リンク可能なURLを手に入れましょう。",
    "ctaButton": "画像をアップロード"
  },
  "zh-Hans": {
    "metaTitle": "直接图片链接托管 — 纯净可外链 URL | ImageToURL",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "free-image-hosting", "label": "免费图片托管" },
      { "pageKey": "free-image-cdn", "label": "免费图片 CDN" },
      { "pageKey": "ai-image-hosting", "label": "AI 图片托管" },
      { "pageKey": "anonymous-image-upload", "label": "匿名图片上传" }
    ],
    "metaDescription": "获取以 .jpg、.png、.gif 结尾的直接图片链接，而非带有广告的图库页面。适用于在网页任何位置嵌入的友好外链 URL。",
    "schemaName": "直接图片链接托管",
    "schemaDescription": "一个用于生成直接、无广告图片 URL 的工具，针对网站、论坛和电子邮件中的外链和嵌入进行了优化。",
    "badge": "直接图片链接",
    "h1Pre": "直接图片链接，",
    "h1Highlight": "拒绝图库页面。",
    "intro": "获取指向您文件的纯净、可外链的图片 URL。没有图库包装，没有广告，没有重定向——只有图片，随时随地嵌入。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "上传您的图片",
        "body": "从您的设备中选择任何图片文件，即可立即上传到我们的高速服务器。"
      },
      {
        "title": "获取直接 URL",
        "body": "我们提供一个指向您图片文件的纯净、永久链接，而不是图库页面。"
      },
      {
        "title": "随处嵌入",
        "body": "复制并粘贴您的直接链接到您的网站、论坛或电子邮件中，即可立即显示您的图片。"
      }
    ],
    "whyTitle": "为什么要使用直接链接？",
    "whyItems": [
      {
        "title": "纯净 URL",
        "body": "我们的链接直接指向文件，确保您的观众只看到图片，没有任何干扰性的界面。"
      },
      {
        "title": "无广告",
        "body": "绕过其他托管平台上那些破坏用户体验的烦人图库广告和弹窗。"
      },
      {
        "title": "外链友好",
        "body": "我们支持直接外链，因此您的图片可以在 HTML、Markdown 和您的所有项目中可靠地加载。"
      },
      {
        "title": "通用兼容性",
        "body": "我们的直接 URL 在 img 标签、电子邮件客户端和 API 响应中均能完美运行，且没有任何引用来源限制。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "什么是直接图片链接？",
        "a": "直接图片链接直接指向图片文件本身，而不是图库页面。当您打开它时，您只会看到图片。"
      },
      {
        "q": "为什么直接链接比图库链接更好？",
        "a": "直接链接无广告、加载速度更快，并且是在 HTML、电子邮件和论坛中嵌入图片所必需的。"
      },
      {
        "q": "我可以在我的网站上外链 ImageToURL 的图片吗？",
        "a": "可以，我们完全支持外链。您可以将我们的 URL 嵌入到您网站的 HTML 中，且不会受到带宽限制。"
      },
      {
        "q": "直接图片链接在电子邮件中有效吗？",
        "a": "有效，直接链接是确保图片在 HTML 电子邮件客户端中正确内联显示的唯一方法。"
      },
      {
        "q": "Imgur 提供直接图片链接吗？",
        "a": "Imgur 默认跳转到带有广告的图库页面。ImageToURL 每次默认提供纯净的直接链接。"
      }
    ],
    "ctaTitle": "立即获取直接图片链接",
    "ctaBody": "上传您的图片，获取一个纯净、可外链的 URL，无需任何图库页面或广告。",
    "ctaButton": "上传您的图片"
  },
} as LandingContentMap;
