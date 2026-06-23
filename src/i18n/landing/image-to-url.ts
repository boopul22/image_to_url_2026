import type { LandingContentMap } from './types';

// Head-term landing page targeting the bare keyword "image to url".
// Distinct from `image-to-url-converter` (the long-tail "image to url converter").
// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL - Free, No Sign-Up, Instant Direct Link | ImageToURL",
    "metaDescription": "Turn any image into a URL for free. Drop a JPG, PNG, WebP, GIF or SVG and get a direct link that works in Discord, Reddit, forums and email. No account, no compression, 10MB.",
    "schemaName": "Image to URL",
    "schemaDescription": "A free image to URL tool that turns any picture into a direct, full-quality link. No account, no watermark, fast global CDN.",
    "badge": "IMAGE TO URL",
    "h1Pre": "Image to URL:",
    "h1Highlight": "free, no sign-up needed",
    "intro": "Need to turn an image to URL without making an account first? Drop your picture in the box above and you get a direct link in about two seconds. It works on JPG, PNG, WebP, GIF and SVG files up to 10MB, there's no watermark, and nothing gets squeezed or shrunk on the way through. Copy the link and paste it wherever you need it.",
    "specsTitle": "Image to URL at a glance",
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
    "howTitle": "How the image to URL tool works",
    "steps": [
      {
        "title": "Drop your file in",
        "body": "Drag an image onto the box or click to pick one from your device. Files can be up to 10MB each, and JPG, PNG, WebP, GIF and SVG all work."
      },
      {
        "title": "Grab the link",
        "body": "Your image goes onto a fast global CDN and a direct link pops out right away. The link ends in the real file extension, so it behaves exactly like the original file."
      },
      {
        "title": "Paste it anywhere",
        "body": "Use the URL in a Discord chat, a Reddit post, a forum thread, an HTML page or an email. It shows up as the actual image, not a download button or a preview card."
      }
    ],
    "whyTitle": "Why people use it instead of Imgur",
    "whyItems": [
      {
        "title": "No account, no email",
        "body": "There's nothing to sign up for. Imgur stopped letting people post anonymously back in 2023, so a lot of folks went looking for a simpler option. Upload, copy, done."
      },
      {
        "title": "Links that actually embed",
        "body": "The URL points straight at the image file, so Discord, Reddit and most forums show it inline instead of opening a gallery page or forcing a download."
      },
      {
        "title": "Full quality, no shrinking",
        "body": "Some hosts quietly resize hotlinked images down to around 1,280px. This one leaves your file alone, so what you upload is exactly what people see."
      },
      {
        "title": "Honest about how long links last",
        "body": "Anonymous links stick around for at least a couple of weeks, usually longer. Want one that never goes away? Make a free account and pick 'keep forever' when you upload."
      }
    ],
    "comparisonTitle": "Image to URL hosts compared",
    "comparisonIntro": "Most free image hosts can hand you a link. They differ on whether you need an account, how big a file you can drop, and whether your image keeps its full quality. Here's how the popular ones stack up.",
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
          "10 MB",
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
          "Catbox",
          "Yes",
          "200 MB",
          "Yes",
          "Yes",
          "Permanent"
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
    "useCasesTitle": "Where an image to URL link comes in handy",
    "useCasesIntro": "Once your picture has a direct link, it drops into just about anywhere online:",
    "useCases": [
      {
        "title": "Discord and forums",
        "body": "Paste the link into a channel or a thread and the image just appears. No attachment, no extra click to open it."
      },
      {
        "title": "Websites and docs",
        "body": "Drop the URL into your HTML, a Notion page, a README or a site builder and the picture loads inline. No separate hosting to wrangle."
      },
      {
        "title": "Email and chat",
        "body": "Add it to a signature or send it in a message. It hotlinks to the file, so people see the image instead of a broken box."
      }
    ],
    "sections": [
      {
        "heading": "What is an image URL?",
        "body": "An image URL is a direct web address that ends in the file's own extension, like .jpg, .png or .webp, and points straight at the picture rather than at a web page about it. Because it links to the raw file, anything that understands a URL - a browser, a chat app, a forum, an email client - can load the image inline. That's the difference between a real image URL and a normal page link: one shows the picture, the other opens a page you have to click through. This tool gives you the first kind."
      },
      {
        "heading": "Image to URL vs image to link",
        "body": "People say 'image to URL' and 'image to link' to mean the same thing: a direct, hotlinkable address for a picture. There's no real difference. Whichever phrase you searched for, you get the same result here - a clean link that ends in the file extension and embeds as the actual image on Discord, Reddit, Slack, WhatsApp and most websites."
      },
      {
        "heading": "Are the links safe to share?",
        "body": "Every link is served over HTTPS and points only at your image, with no redirect pages or trackers bolted on. Keep in mind that anonymous uploads are public to anyone who has the link, so don't post anything private, and keep your own copy of the file as a backup since free links are cleared on a regular schedule."
      }
    ],
    "faqTitle": "Image to URL FAQ",
    "faqs": [
      { "q": "How do I create a URL for an image?", "a": "Upload the image in the box above and you get a direct link ending in the real extension (.jpg, .png) within seconds, no account needed. That URL is the image’s web address — paste it anywhere you need the picture to appear." },
      { "q": "How do I turn a photo or picture into a URL?", "a": "The same three steps work for any source: upload the photo, copy the generated direct link, and paste it where you need it. It works straight from a phone camera roll or a desktop file." },
      { "q": "What is an image URL?", "a": "An image URL is the direct web address of an image file, like https://imagetourl.cloud/abc123.jpg. Pasted into a browser it shows just the image, and in an HTML image tag it embeds the picture. You get one by uploading the image to a host that returns a direct link." },
      {
        "q": "How do I convert an image to URL for free?",
        "a": "Upload your image in the box at the top of this page. It lands on our CDN and you get a direct link within a few seconds, ready to copy. No account and no payment, ever."
      },
      {
        "q": "What image formats can I use?",
        "a": "JPG, PNG, WebP, GIF and SVG, up to 10MB per file. The link you get ends in the real extension, so it hotlinks and embeds the same way the original file would."
      },
      {
        "q": "Can I turn a screenshot or photo into a URL?",
        "a": "Yes. A screenshot or phone photo is just a PNG or JPG, so it works exactly the same way - drop it in and copy the direct link."
      },
      {
        "q": "Will the link work in Discord and Reddit?",
        "a": "Yes. Because the URL points right at the image file, Discord, Reddit and most forums render it as a picture inline instead of showing a download or a gallery page."
      },
      {
        "q": "Can I use the URL in an <img> tag or Markdown?",
        "a": "Yes. The link is a normal direct image URL, so it works in HTML <img src> tags, Markdown image syntax, CSS background-image and any website builder that accepts an image link."
      },
      {
        "q": "Do the links expire?",
        "a": "Anonymous uploads stay live until our monthly storage cleanup, so you get a couple of weeks at minimum and often more. Want a link that never expires? Create a free account and choose 'keep forever' when you upload. Either way, keep your own copy as a backup."
      },
      {
        "q": "Does it compress or resize my image?",
        "a": "No. You get back the same file you put in, at full resolution, with no re-compression and no watermark. That's different from hosts that scale hotlinked images down to a smaller size."
      },
      {
        "q": "Is there a file size limit?",
        "a": "10MB per image, which covers almost any screenshot, photo or graphic. If a file is larger, compress or resize it first and then convert it to a URL."
      },
      {
        "q": "Is this a good free Imgur alternative?",
        "a": "It is, especially if you just want to turn an image to URL and paste the link somewhere. No app, no email and no gallery page, which is what most people miss from the old anonymous Imgur."
      }
    ],
    "relatedTitle": "More image to URL tools",
    "related": [
      {
        "pageKey": "image-to-url-converter",
        "label": "Image to URL Converter"
      },
      {
        "pageKey": "free-image-hosting",
        "label": "Free Image Hosting"
      },
      {
        "pageKey": "imgur-alternative",
        "label": "Imgur Alternative"
      },
      {
        "pageKey": "image-hosting-for-discord",
        "label": "Image Hosting for Discord"
      },
      {
        "pageKey": "direct-image-link",
        "label": "Direct Image Link"
      },
      {
        "pageKey": "png-to-url",
        "label": "PNG to URL"
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Turn your image into a URL now",
    "ctaBody": "Upload a JPG, PNG, WebP, GIF or SVG and get a direct link in seconds. No sign-up, no compression, no watermark.",
    "ctaButton": "Upload Image Now",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15"
  },
  "es": {
    "metaTitle": "Imagen a URL - Gratis, sin registro, enlace directo instantáneo | ImageToURL",
    "metaDescription": "Convierte cualquier imagen a URL gratis. Sube un JPG, PNG, WebP, GIF o SVG y obtén un enlace directo que funciona en Discord, Reddit, foros y correo electrónico. Sin cuenta, sin compresión, hasta 10MB.",
    "schemaName": "Imagen a URL",
    "schemaDescription": "Una herramienta gratuita para convertir imágenes a URL que transforma cualquier foto en un enlace directo de calidad completa. Sin cuenta, sin marcas de agua, CDN global rápido.",
    "badge": "IMAGEN A URL",
    "h1Pre": "Imagen a URL:",
    "h1Highlight": "gratis, sin necesidad de registro",
    "intro": "¿Necesitas convertir una imagen a URL sin crear una cuenta primero? Suelta tu imagen en el cuadro de arriba y obtendrás un enlace directo en unos dos segundos. Funciona con archivos JPG, PNG, WebP, GIF y SVG de hasta 10MB, no tiene marcas de agua y nada se comprime ni se reduce en el proceso. Copia el enlace y pégalo donde lo necesites.",
    "howTitle": "Cómo funciona la herramienta de imagen a URL",
    "steps": [
      {
        "title": "Sube tu archivo",
        "body": "Arrastra una imagen al cuadro o haz clic para seleccionar una desde tu dispositivo. Los archivos pueden pesar hasta 10MB cada uno, y funcionan formatos JPG, PNG, WebP, GIF y SVG."
      },
      {
        "title": "Obtén el enlace",
        "body": "Tu imagen se sube a una CDN global rápida y aparece un enlace directo al instante. El enlace termina con la extensión real del archivo, por lo que se comporta exactamente igual que el archivo original."
      },
      {
        "title": "Pégalo donde quieras",
        "body": "Usa la URL en un chat de Discord, una publicación de Reddit, un hilo de foro, una página HTML o un correo electrónico. Se mostrará como la imagen real, no como un botón de descarga o una tarjeta de vista previa."
      }
    ],
    "whyTitle": "Por qué la gente lo usa en lugar de Imgur",
    "whyItems": [
      {
        "title": "Sin cuenta, sin correo",
        "body": "No hay nada que registrar. Imgur dejó de permitir publicaciones anónimas en 2023, por lo que mucha gente buscó una opción más sencilla. Sube, copia, listo."
      },
      {
        "title": "Enlaces que realmente se incrustan",
        "body": "La URL apunta directamente al archivo de imagen, por lo que Discord, Reddit y la mayoría de los foros la muestran en línea en lugar de abrir una página de galería o forzar una descarga."
      },
      {
        "title": "Calidad completa, sin reducción",
        "body": "Algunos servidores reducen silenciosamente las imágenes vinculadas a unos 1280px. Este servicio mantiene tu archivo intacto, por lo que lo que subes es exactamente lo que la gente ve."
      },
      {
        "title": "Transparencia sobre la duración de los enlaces",
        "body": "Los enlaces anónimos permanecen activos al menos un par de semanas, generalmente más. ¿Quieres uno que nunca desaparezca? Crea una cuenta gratuita y elige 'mantener para siempre' al subir."
      }
    ],
    "faqTitle": "Preguntas frecuentes sobre Imagen a URL",
    "faqs": [
      {
        "q": "¿Cómo convierto una imagen a URL gratis?",
        "a": "Sube tu imagen en el cuadro en la parte superior de esta página. Se aloja en nuestra CDN y obtienes un enlace directo en pocos segundos, listo para copiar. Sin cuenta y sin pagos, nunca."
      },
      {
        "q": "¿Qué formatos de imagen puedo usar?",
        "a": "JPG, PNG, WebP, GIF y SVG, hasta 10MB por archivo. El enlace que obtienes termina con la extensión real, por lo que se vincula e incrusta de la misma manera que lo haría el archivo original."
      },
      {
        "q": "¿Puedo convertir una captura de pantalla o foto en una URL?",
        "a": "Sí. Una captura de pantalla o foto de teléfono es simplemente un PNG o JPG, por lo que funciona exactamente de la misma manera: súbela y copia el enlace directo."
      },
      {
        "q": "¿Funcionará el enlace en Discord y Reddit?",
        "a": "Sí. Debido a que la URL apunta directamente al archivo de imagen, Discord, Reddit y la mayoría de los foros la renderizan como una imagen en línea en lugar de mostrar una descarga o una página de galería."
      },
      {
        "q": "¿Puedo usar la URL en una etiqueta <img> o Markdown?",
        "a": "Sí. El enlace es una URL de imagen directa normal, por lo que funciona en etiquetas HTML <img src>, sintaxis de imagen Markdown, CSS background-image y cualquier constructor de sitios que acepte un enlace de imagen."
      },
      {
        "q": "¿Los enlaces caducan?",
        "a": "Las subidas anónimas permanecen activas hasta nuestra limpieza mensual de almacenamiento, por lo que obtienes un par de semanas como mínimo y a menudo más. ¿Quieres un enlace que nunca caduque? Crea una cuenta gratuita y elige 'mantener para siempre' al subir. De cualquier manera, guarda tu propia copia como respaldo."
      },
      {
        "q": "¿Comprime o cambia el tamaño de mi imagen?",
        "a": "No. Obtienes el mismo archivo que subiste, a resolución completa, sin recompresión y sin marcas de agua. Eso es diferente de los servidores que escalan las imágenes vinculadas a un tamaño más pequeño."
      },
      {
        "q": "¿Hay un límite de tamaño de archivo?",
        "a": "10MB por imagen, lo que cubre casi cualquier captura de pantalla, foto o gráfico. Si un archivo es más grande, comprímelo o cambia su tamaño primero y luego conviértelo a una URL."
      },
      {
        "q": "¿Es esta una buena alternativa gratuita a Imgur?",
        "a": "Lo es, especialmente si solo quieres convertir una imagen a URL y pegar el enlace en algún lugar. Sin aplicación, sin correo electrónico y sin página de galería, que es lo que la mayoría de la gente extraña del antiguo Imgur anónimo."
      }
    ],
    "ctaTitle": "Convierte tu imagen a URL ahora",
    "ctaBody": "Sube un JPG, PNG, WebP, GIF o SVG y obtén un enlace directo en segundos. Sin registro, sin compresión, sin marcas de agua.",
    "ctaButton": "Subir imagen ahora",
    "useCasesTitle": "Dónde resulta útil un enlace de imagen a URL",
    "useCasesIntro": "Una vez que tu imagen tiene un enlace directo, puedes colocarla en casi cualquier lugar en línea:",
    "useCases": [
      {
        "title": "Discord y foros",
        "body": "Pega el enlace en un canal o hilo y la imagen aparecerá directamente. Sin archivos adjuntos, sin clics adicionales para abrirla."
      },
      {
        "title": "Sitios web y documentos",
        "body": "Suelta la URL en tu HTML, una página de Notion, un README o un constructor de sitios y la imagen se cargará en línea. Sin necesidad de gestionar alojamiento por separado."
      },
      {
        "title": "Correo electrónico y chat",
        "body": "Añádela a una firma o envíala en un mensaje. Se vincula directamente al archivo, por lo que la gente ve la imagen en lugar de un cuadro roto."
      }
    ],
    "specsTitle": "Imagen a URL de un vistazo",
    "specs": [
      {
        "label": "Precio",
        "value": "Gratis"
      },
      {
        "label": "Registro",
        "value": "No requerido"
      },
      {
        "label": "Formatos",
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "Tamaño máximo",
        "value": "10 MB"
      },
      {
        "label": "Salida",
        "value": "Enlace CDN directo"
      }
    ],
    "comparisonTitle": "Comparativa de servidores de imagen a URL",
    "comparisonIntro": "La mayoría de los servidores de imágenes gratuitos pueden darte un enlace. Se diferencian en si necesitas una cuenta, qué tan grande puede ser el archivo que subes y si tu imagen mantiene su calidad completa. Así es como se comparan los más populares.",
    "comparisonColumns": [
      "Servidor",
      "Sin registro",
      "Tamaño máx. de archivo",
      "Enlace directo",
      "Calidad completa",
      "Duración del enlace"
    ],
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "Sí",
          "10 MB",
          "Sí",
          "Sí",
          "Semanas gratis, siempre si inicias sesión"
        ]
      },
      {
        "cells": [
          "Imgur",
          "No (desde 2023)",
          "20 MB",
          "Limitado",
          "Sí",
          "Vinculado a tu cuenta"
        ]
      },
      {
        "cells": [
          "Catbox",
          "Sí",
          "200 MB",
          "Sí",
          "Sí",
          "Permanente"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "Sí",
          "32 MB",
          "Sí",
          "Sí",
          "Caducidad opcional"
        ]
      },
      {
        "cells": [
          "Postimages",
          "Sí",
          "24 MB",
          "Sí",
          "No (redimensionado a 1280px)",
          "Permanente"
        ]
      }
    ],
    "sections": [
      {
        "heading": "¿Qué es una URL de imagen?",
        "body": "Una URL de imagen es una dirección web directa que termina con la extensión del archivo, como .jpg, .png o .webp, y apunta directamente a la imagen en lugar de a una página web sobre ella. Debido a que enlaza al archivo original, cualquier cosa que entienda una URL (un navegador, una aplicación de chat, un foro, un cliente de correo) puede cargar la imagen en línea. Esa es la diferencia entre una URL de imagen real y un enlace de página normal: uno muestra la imagen, el otro abre una página en la que tienes que hacer clic. Esta herramienta te da el primer tipo."
      },
      {
        "heading": "Imagen a URL vs imagen a enlace",
        "body": "La gente dice 'imagen a URL' e 'imagen a enlace' para referirse a lo mismo: una dirección directa y vinculable para una imagen. No hay una diferencia real. Cualquiera que sea la frase que hayas buscado, obtendrás el mismo resultado aquí: un enlace limpio que termina en la extensión del archivo y se incrusta como la imagen real en Discord, Reddit, Slack, WhatsApp y la mayoría de los sitios web."
      },
      {
        "heading": "¿Son seguros los enlaces para compartir?",
        "body": "Cada enlace se sirve a través de HTTPS y apunta solo a tu imagen, sin páginas de redirección ni rastreadores añadidos. Ten en cuenta que las subidas anónimas son públicas para cualquiera que tenga el enlace, así que no publiques nada privado y guarda tu propia copia del archivo como respaldo, ya que los enlaces gratuitos se eliminan periódicamente."
      }
    ],
    "relatedTitle": "Más herramientas de imagen a URL",
    "related": [
      {
        "pageKey": "image-to-url-converter",
        "label": "Convertidor de imagen a URL"
      },
      {
        "pageKey": "free-image-hosting",
        "label": "Alojamiento de imágenes gratuito"
      },
      {
        "pageKey": "imgur-alternative",
        "label": "Alternativa a Imgur"
      },
      {
        "pageKey": "image-hosting-for-discord",
        "label": "Alojamiento de imágenes para Discord"
      },
      {
        "pageKey": "direct-image-link",
        "label": "Enlace directo de imagen"
      },
      {
        "pageKey": "png-to-url",
        "label": "PNG a URL"
      }
    ],
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15",
    "howToSchema": true
  },
  "fr": {
    "metaTitle": "Image vers URL - Gratuit, sans inscription, lien direct instantané | ImageToURL",
    "metaDescription": "Transformez n'importe quelle image en URL gratuitement. Déposez un fichier JPG, PNG, WebP, GIF ou SVG et obtenez un lien direct fonctionnant sur Discord, Reddit, les forums et par e-mail. Sans compte, sans compression, jusqu'à 10 Mo.",
    "schemaName": "Image vers URL",
    "schemaDescription": "Un outil gratuit pour transformer une image en URL, créant un lien direct en pleine qualité. Sans compte, sans filigrane, via un CDN mondial rapide.",
    "badge": "IMAGE VERS URL",
    "h1Pre": "Image vers URL :",
    "h1Highlight": "gratuit, aucune inscription requise",
    "intro": "Besoin de transformer une image en URL sans créer de compte ? Déposez votre image dans la zone ci-dessus et obtenez un lien direct en deux secondes environ. Cela fonctionne avec les fichiers JPG, PNG, WebP, GIF et SVG jusqu'à 10 Mo, sans filigrane, et sans aucune perte de qualité. Copiez le lien et collez-le où vous le souhaitez.",
    "howTitle": "Comment fonctionne l'outil Image vers URL",
    "steps": [
      {
        "title": "Déposez votre fichier",
        "body": "Faites glisser une image dans la zone ou cliquez pour en sélectionner une depuis votre appareil. Les fichiers peuvent peser jusqu'à 10 Mo, et les formats JPG, PNG, WebP, GIF et SVG sont acceptés."
      },
      {
        "title": "Récupérez le lien",
        "body": "Votre image est envoyée sur un CDN mondial rapide et un lien direct est généré instantanément. Le lien se termine par l'extension réelle du fichier, il se comporte donc exactement comme le fichier original."
      },
      {
        "title": "Collez-le partout",
        "body": "Utilisez l'URL dans un chat Discord, un post Reddit, un fil de discussion, une page HTML ou un e-mail. Elle s'affiche comme l'image elle-même, et non comme un bouton de téléchargement ou une carte de prévisualisation."
      }
    ],
    "whyTitle": "Pourquoi l'utiliser plutôt qu'Imgur",
    "whyItems": [
      {
        "title": "Pas de compte, pas d'e-mail",
        "body": "Rien à créer. Imgur a arrêté les publications anonymes en 2023, poussant beaucoup d'utilisateurs à chercher une option plus simple. Téléchargez, copiez, c'est fini."
      },
      {
        "title": "Des liens qui s'intègrent vraiment",
        "body": "L'URL pointe directement vers le fichier image, ce qui permet à Discord, Reddit et la plupart des forums de l'afficher directement au lieu d'ouvrir une galerie ou de forcer un téléchargement."
      },
      {
        "title": "Qualité totale, aucune réduction",
        "body": "Certains hébergeurs redimensionnent discrètement les images vers 1 280 px. Ici, votre fichier reste intact : ce que vous téléchargez est exactement ce que les gens voient."
      },
      {
        "title": "Transparence sur la durée des liens",
        "body": "Les liens anonymes restent actifs pendant au moins quelques semaines, souvent plus. Vous voulez un lien permanent ? Créez un compte gratuit et choisissez 'conserver pour toujours' lors de l'envoi."
      }
    ],
    "faqTitle": "FAQ Image vers URL",
    "faqs": [
      {
        "q": "Comment convertir une image en URL gratuitement ?",
        "a": "Téléchargez votre image dans la zone en haut de cette page. Elle est placée sur notre CDN et vous obtenez un lien direct en quelques secondes, prêt à être copié. Sans compte ni paiement, jamais."
      },
      {
        "q": "Quels formats d'image puis-je utiliser ?",
        "a": "JPG, PNG, WebP, GIF et SVG, jusqu'à 10 Mo par fichier. Le lien obtenu se termine par l'extension réelle, permettant une intégration identique au fichier original."
      },
      {
        "q": "Puis-je transformer une capture d'écran ou une photo en URL ?",
        "a": "Oui. Une capture d'écran ou une photo de téléphone est simplement un fichier PNG ou JPG, cela fonctionne donc exactement de la même manière : déposez-le et copiez le lien direct."
      },
      {
        "q": "Le lien fonctionnera-t-il sur Discord et Reddit ?",
        "a": "Oui. Comme l'URL pointe directement vers le fichier image, Discord, Reddit et la plupart des forums l'affichent comme une image intégrée au lieu de montrer un téléchargement ou une page de galerie."
      },
      {
        "q": "Puis-je utiliser l'URL dans une balise <img> ou en Markdown ?",
        "a": "Oui. Le lien est une URL d'image directe standard, il fonctionne donc dans les balises HTML <img src>, la syntaxe Markdown, les propriétés CSS background-image et tout constructeur de site acceptant un lien d'image."
      },
      {
        "q": "Les liens expirent-ils ?",
        "a": "Les téléchargements anonymes restent actifs jusqu'à notre nettoyage mensuel, vous avez donc au moins quelques semaines. Vous voulez un lien qui n'expire jamais ? Créez un compte gratuit et choisissez 'conserver pour toujours'. Dans tous les cas, gardez une copie de sauvegarde."
      },
      {
        "q": "L'outil compresse-t-il ou redimensionne-t-il mon image ?",
        "a": "Non. Vous récupérez le même fichier que celui envoyé, en pleine résolution, sans recompression et sans filigrane. C'est différent des hébergeurs qui réduisent la taille des images."
      },
      {
        "q": "Y a-t-il une limite de taille de fichier ?",
        "a": "10 Mo par image, ce qui couvre presque toutes les captures d'écran, photos ou graphiques. Si un fichier est plus gros, compressez-le ou redimensionnez-le d'abord avant de le convertir en URL."
      },
      {
        "q": "Est-ce une bonne alternative gratuite à Imgur ?",
        "a": "Oui, surtout si vous voulez simplement transformer une image en URL et coller le lien. Pas d'application, pas d'e-mail et pas de page de galerie, ce qui manque à beaucoup d'utilisateurs de l'ancien Imgur anonyme."
      }
    ],
    "ctaTitle": "Transformez votre image en URL maintenant",
    "ctaBody": "Téléchargez un fichier JPG, PNG, WebP, GIF ou SVG et obtenez un lien direct en quelques secondes. Sans inscription, sans compression, sans filigrane.",
    "ctaButton": "Télécharger l'image maintenant",
    "useCasesTitle": "Où utiliser un lien Image vers URL",
    "useCasesIntro": "Une fois que votre image possède un lien direct, vous pouvez l'utiliser presque partout en ligne :",
    "useCases": [
      {
        "title": "Discord et forums",
        "body": "Collez le lien dans un canal ou un fil de discussion et l'image apparaît. Pas de pièce jointe, pas de clic supplémentaire pour l'ouvrir."
      },
      {
        "title": "Sites web et documents",
        "body": "Insérez l'URL dans votre HTML, une page Notion, un fichier README ou un constructeur de site et l'image se chargera directement. Aucun hébergement séparé à gérer."
      },
      {
        "title": "E-mail et chat",
        "body": "Ajoutez-le à une signature ou envoyez-le dans un message. Le lien pointe vers le fichier, les gens voient donc l'image au lieu d'une icône brisée."
      }
    ],
    "specsTitle": "Image vers URL en un coup d'œil",
    "specs": [
      {
        "label": "Prix",
        "value": "Gratuit"
      },
      {
        "label": "Inscription",
        "value": "Non requise"
      },
      {
        "label": "Formats",
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "Taille max",
        "value": "10 Mo"
      },
      {
        "label": "Sortie",
        "value": "Lien CDN direct"
      }
    ],
    "comparisonTitle": "Comparaison des hébergeurs d'images vers URL",
    "comparisonIntro": "La plupart des hébergeurs gratuits peuvent vous donner un lien. Ils diffèrent sur l'obligation de créer un compte, la taille maximale des fichiers et la conservation de la qualité. Voici comment les plus populaires se comparent.",
    "comparisonColumns": [
      "Hébergeur",
      "Sans inscription",
      "Taille max",
      "Lien direct",
      "Qualité totale",
      "Durée de vie"
    ],
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "Oui",
          "10 Mo",
          "Oui",
          "Oui",
          "Semaines (gratuit), illimité (connecté)"
        ]
      },
      {
        "cells": [
          "Imgur",
          "Non (depuis 2023)",
          "20 Mo",
          "Limité",
          "Oui",
          "Lié à votre compte"
        ]
      },
      {
        "cells": [
          "Catbox",
          "Oui",
          "200 Mo",
          "Oui",
          "Oui",
          "Permanent"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "Oui",
          "32 Mo",
          "Oui",
          "Oui",
          "Expiration optionnelle"
        ]
      },
      {
        "cells": [
          "Postimages",
          "Oui",
          "24 Mo",
          "Oui",
          "Non (redimensionné à 1280px)",
          "Permanent"
        ]
      }
    ],
    "sections": [
      {
        "heading": "Qu'est-ce qu'une URL d'image ?",
        "body": "Une URL d'image est une adresse web directe se terminant par l'extension du fichier (.jpg, .png, .webp) et pointant directement vers l'image plutôt que vers une page web. Comme elle pointe vers le fichier brut, tout ce qui comprend une URL (navigateur, application de chat, forum, client e-mail) peut charger l'image directement. C'est la différence entre une vraie URL d'image et un lien de page : l'un affiche l'image, l'autre ouvre une page sur laquelle il faut cliquer. Cet outil vous donne le premier type."
      },
      {
        "heading": "Image vers URL vs Image vers lien",
        "body": "Les gens utilisent 'image vers URL' et 'image vers lien' pour désigner la même chose : une adresse directe pour une image. Il n'y a aucune différence réelle. Quel que soit le terme recherché, vous obtenez ici le même résultat : un lien propre se terminant par l'extension du fichier qui s'intègre comme une image sur Discord, Reddit, Slack, WhatsApp et la plupart des sites web."
      },
      {
        "heading": "Les liens sont-ils sûrs à partager ?",
        "body": "Chaque lien est servi via HTTPS et pointe uniquement vers votre image, sans pages de redirection ni trackers. Gardez à l'esprit que les téléchargements anonymes sont publics pour quiconque possède le lien. Ne publiez rien de privé et conservez votre propre copie du fichier en sauvegarde, car les liens gratuits sont régulièrement supprimés."
      }
    ],
    "relatedTitle": "Plus d'outils Image vers URL",
    "related": [
      {
        "pageKey": "image-to-url-converter",
        "label": "Convertisseur Image vers URL"
      },
      {
        "pageKey": "free-image-hosting",
        "label": "Hébergement d'images gratuit"
      },
      {
        "pageKey": "imgur-alternative",
        "label": "Alternative à Imgur"
      },
      {
        "pageKey": "image-hosting-for-discord",
        "label": "Hébergement d'images pour Discord"
      },
      {
        "pageKey": "direct-image-link",
        "label": "Lien d'image direct"
      },
      {
        "pageKey": "png-to-url",
        "label": "PNG vers URL"
      }
    ],
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15",
    "howToSchema": true
  },
  "de": {
    "metaTitle": "Bild zu URL - Kostenlos, ohne Anmeldung, sofortiger Direktlink | ImageToURL",
    "metaDescription": "Verwandeln Sie jedes Bild kostenlos in eine URL. Laden Sie JPG, PNG, WebP, GIF oder SVG hoch und erhalten Sie einen Direktlink für Discord, Reddit, Foren und E-Mails. Kein Konto, keine Komprimierung, bis 10 MB.",
    "schemaName": "Bild zu URL",
    "schemaDescription": "Ein kostenloses Tool, das jedes Bild in einen direkten Link in voller Qualität umwandelt. Kein Konto, kein Wasserzeichen, schnelles globales CDN.",
    "badge": "BILD ZU URL",
    "h1Pre": "Bild zu URL:",
    "h1Highlight": "kostenlos, keine Anmeldung erforderlich",
    "intro": "Sie müssen ein Bild in eine URL umwandeln, ohne vorher ein Konto zu erstellen? Ziehen Sie Ihr Bild einfach in das Feld oben und Sie erhalten in etwa zwei Sekunden einen Direktlink. Es funktioniert mit JPG-, PNG-, WebP-, GIF- und SVG-Dateien bis zu 10 MB. Es gibt kein Wasserzeichen und die Qualität bleibt unverändert. Kopieren Sie den Link und fügen Sie ihn überall ein, wo Sie ihn benötigen.",
    "howTitle": "So funktioniert das Bild-zu-URL-Tool",
    "steps": [
      {
        "title": "Datei hochladen",
        "body": "Ziehen Sie ein Bild in das Feld oder klicken Sie darauf, um eine Datei von Ihrem Gerät auszuwählen. Dateien können bis zu 10 MB groß sein; JPG, PNG, WebP, GIF und SVG werden unterstützt."
      },
      {
        "title": "Link abrufen",
        "body": "Ihr Bild wird auf ein schnelles globales CDN hochgeladen und Sie erhalten sofort einen Direktlink. Der Link endet mit der echten Dateiendung, sodass er sich genau wie die Originaldatei verhält."
      },
      {
        "title": "Überall einfügen",
        "body": "Verwenden Sie die URL in einem Discord-Chat, einem Reddit-Beitrag, einem Foren-Thread, einer HTML-Seite oder einer E-Mail. Das Bild wird direkt angezeigt, nicht als Download-Button oder Vorschau-Karte."
      }
    ],
    "whyTitle": "Warum Nutzer es statt Imgur verwenden",
    "whyItems": [
      {
        "title": "Kein Konto, keine E-Mail",
        "body": "Sie müssen sich nirgendwo registrieren. Da Imgur seit 2023 keine anonymen Beiträge mehr zulässt, suchen viele nach einer einfacheren Option. Hochladen, kopieren, fertig."
      },
      {
        "title": "Links, die tatsächlich eingebettet werden",
        "body": "Die URL verweist direkt auf die Bilddatei, sodass Discord, Reddit und die meisten Foren das Bild inline anzeigen, anstatt eine Galerie-Seite zu öffnen oder einen Download zu erzwingen."
      },
      {
        "title": "Volle Qualität, keine Verkleinerung",
        "body": "Einige Hoster skalieren verlinkte Bilder automatisch auf ca. 1.280px herunter. Dieses Tool lässt Ihre Datei unangetastet, sodass das, was Sie hochladen, genau das ist, was andere sehen."
      },
      {
        "title": "Transparenz bei der Link-Dauer",
        "body": "Anonyme Links bleiben mindestens einige Wochen aktiv, meist länger. Möchten Sie einen Link, der für immer bleibt? Erstellen Sie ein kostenloses Konto und wählen Sie beim Hochladen 'für immer behalten'."
      }
    ],
    "faqTitle": "Bild zu URL FAQ",
    "faqs": [
      {
        "q": "Wie wandle ich ein Bild kostenlos in eine URL um?",
        "a": "Laden Sie Ihr Bild in das Feld oben auf dieser Seite hoch. Es landet auf unserem CDN und Sie erhalten innerhalb weniger Sekunden einen Direktlink zum Kopieren. Kein Konto und keine Zahlung erforderlich."
      },
      {
        "q": "Welche Bildformate kann ich verwenden?",
        "a": "JPG, PNG, WebP, GIF und SVG bis zu 10 MB pro Datei. Der Link endet mit der echten Dateiendung, sodass er sich wie die Originaldatei verhält und eingebettet werden kann."
      },
      {
        "q": "Kann ich einen Screenshot oder ein Foto in eine URL umwandeln?",
        "a": "Ja. Ein Screenshot oder ein Handyfoto ist lediglich eine PNG- oder JPG-Datei. Es funktioniert genauso: einfach hochladen und den Direktlink kopieren."
      },
      {
        "q": "Funktioniert der Link in Discord und Reddit?",
        "a": "Ja. Da die URL direkt auf die Bilddatei verweist, zeigen Discord, Reddit und die meisten Foren das Bild inline an, anstatt einen Download oder eine Galerie-Seite zu erzwingen."
      },
      {
        "q": "Kann ich die URL in einem <img>-Tag oder Markdown verwenden?",
        "a": "Ja. Der Link ist eine normale, direkte Bild-URL und funktioniert daher in HTML <img src>-Tags, Markdown-Bildsyntax, CSS background-image und jedem Website-Builder, der Bildlinks akzeptiert."
      },
      {
        "q": "Laufen die Links ab?",
        "a": "Anonyme Uploads bleiben bis zu unserer monatlichen Speicherbereinigung aktiv, also mindestens einige Wochen. Möchten Sie einen Link, der nicht abläuft? Erstellen Sie ein kostenloses Konto und wählen Sie beim Hochladen 'für immer behalten'. Bewahren Sie zur Sicherheit immer eine eigene Kopie auf."
      },
      {
        "q": "Wird mein Bild komprimiert oder in der Größe verändert?",
        "a": "Nein. Sie erhalten genau die Datei zurück, die Sie hochgeladen haben, in voller Auflösung, ohne erneute Komprimierung und ohne Wasserzeichen."
      },
      {
        "q": "Gibt es eine Dateigrößenbeschränkung?",
        "a": "10 MB pro Bild, was für fast jeden Screenshot, jedes Foto oder jede Grafik ausreicht. Wenn eine Datei größer ist, komprimieren oder verkleinern Sie sie bitte zuerst."
      },
      {
        "q": "Ist dies eine gute kostenlose Imgur-Alternative?",
        "a": "Ja, besonders wenn Sie einfach nur ein Bild in eine URL umwandeln und den Link teilen möchten. Keine App, keine E-Mail und keine Galerie-Seite – genau das, was viele am alten anonymen Imgur vermissen."
      }
    ],
    "ctaTitle": "Wandeln Sie Ihr Bild jetzt in eine URL um",
    "ctaBody": "Laden Sie ein JPG, PNG, WebP, GIF oder SVG hoch und erhalten Sie in Sekunden einen Direktlink. Keine Anmeldung, keine Komprimierung, kein Wasserzeichen.",
    "ctaButton": "Bild jetzt hochladen",
    "useCasesTitle": "Wo ein Bild-zu-URL-Link nützlich ist",
    "useCasesIntro": "Sobald Ihr Bild einen Direktlink hat, können Sie es fast überall online einfügen:",
    "useCases": [
      {
        "title": "Discord und Foren",
        "body": "Fügen Sie den Link in einen Kanal oder Thread ein und das Bild erscheint sofort. Kein Anhang, kein zusätzlicher Klick zum Öffnen."
      },
      {
        "title": "Websites und Dokumente",
        "body": "Fügen Sie die URL in Ihr HTML, eine Notion-Seite, eine README oder einen Website-Builder ein und das Bild wird inline geladen. Kein separates Hosting erforderlich."
      },
      {
        "title": "E-Mail und Chat",
        "body": "Fügen Sie es einer Signatur hinzu oder senden Sie es in einer Nachricht. Es verlinkt direkt auf die Datei, sodass Empfänger das Bild sehen und kein defektes Symbol."
      }
    ],
    "specsTitle": "Bild zu URL auf einen Blick",
    "specs": [
      {
        "label": "Preis",
        "value": "Kostenlos"
      },
      {
        "label": "Anmeldung",
        "value": "Nicht erforderlich"
      },
      {
        "label": "Formate",
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "Max. Größe",
        "value": "10 MB"
      },
      {
        "label": "Ausgabe",
        "value": "Direkter CDN-Link"
      }
    ],
    "comparisonTitle": "Bild-zu-URL-Hoster im Vergleich",
    "comparisonIntro": "Die meisten kostenlosen Bild-Hoster bieten Links an. Sie unterscheiden sich jedoch darin, ob ein Konto erforderlich ist, wie groß die Datei sein darf und ob die volle Qualität erhalten bleibt. Hier ist der Vergleich der beliebtesten Anbieter.",
    "comparisonColumns": [
      "Hoster",
      "Keine Anmeldung",
      "Max. Dateigröße",
      "Direkter Hotlink",
      "Volle Qualität",
      "Link-Lebensdauer"
    ],
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "Ja",
          "10 MB",
          "Ja",
          "Ja",
          "Wochenlang kostenlos, für immer mit Konto"
        ]
      },
      {
        "cells": [
          "Imgur",
          "Nein (seit 2023)",
          "20 MB",
          "Begrenzt",
          "Ja",
          "An Ihr Konto gebunden"
        ]
      },
      {
        "cells": [
          "Catbox",
          "Ja",
          "200 MB",
          "Ja",
          "Ja",
          "Permanent"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "Ja",
          "32 MB",
          "Ja",
          "Ja",
          "Optionales Ablaufdatum"
        ]
      },
      {
        "cells": [
          "Postimages",
          "Ja",
          "24 MB",
          "Ja",
          "Nein (auf 1280px skaliert)",
          "Permanent"
        ]
      }
    ],
    "sections": [
      {
        "heading": "Was ist eine Bild-URL?",
        "body": "Eine Bild-URL ist eine direkte Webadresse, die mit der Dateiendung (z. B. .jpg, .png oder .webp) endet und direkt auf das Bild verweist, anstatt auf eine Webseite, die das Bild enthält. Da sie auf die Rohdatei verlinkt, kann jedes Programm, das URLs versteht – Browser, Chat-Apps, Foren, E-Mail-Clients – das Bild inline laden. Das ist der Unterschied zwischen einer echten Bild-URL und einem normalen Seitenlink: Das eine zeigt das Bild, das andere öffnet eine Seite, die man erst anklicken muss. Dieses Tool liefert Ihnen den ersten Typ."
      },
      {
        "heading": "Bild zu URL vs. Bild zu Link",
        "body": "Die Begriffe 'Bild zu URL' und 'Bild zu Link' werden oft synonym verwendet: Sie bezeichnen eine direkte, hotlink-fähige Adresse für ein Bild. Es gibt keinen wirklichen Unterschied. Egal, wonach Sie gesucht haben, Sie erhalten hier das gleiche Ergebnis – einen sauberen Link, der mit der Dateiendung endet und auf Discord, Reddit, Slack, WhatsApp und den meisten Websites als Bild eingebettet wird."
      },
      {
        "heading": "Sind die Links sicher zu teilen?",
        "body": "Jeder Link wird über HTTPS bereitgestellt und verweist nur auf Ihr Bild, ohne Weiterleitungsseiten oder Tracker. Denken Sie daran, dass anonyme Uploads für jeden mit dem Link öffentlich zugänglich sind. Posten Sie daher nichts Privates und bewahren Sie eine eigene Kopie der Datei als Backup auf, da kostenlose Links regelmäßig gelöscht werden."
      }
    ],
    "relatedTitle": "Weitere Bild-zu-URL-Tools",
    "related": [
      {
        "pageKey": "image-to-url-converter",
        "label": "Bild zu URL Konverter"
      },
      {
        "pageKey": "free-image-hosting",
        "label": "Kostenloses Bild-Hosting"
      },
      {
        "pageKey": "imgur-alternative",
        "label": "Imgur-Alternative"
      },
      {
        "pageKey": "image-hosting-for-discord",
        "label": "Bild-Hosting für Discord"
      },
      {
        "pageKey": "direct-image-link",
        "label": "Direkter Bildlink"
      },
      {
        "pageKey": "png-to-url",
        "label": "PNG zu URL"
      }
    ],
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15",
    "howToSchema": true
  },
  "ja": {
    "metaTitle": "画像URL変換 - 無料・登録不要・即時直リンク発行 | ImageToURL",
    "metaDescription": "画像を無料でURLに変換。JPG、PNG、WebP、GIF、SVGをアップロードして、Discord、Reddit、掲示板、メールで使える直リンクを取得。アカウント不要、圧縮なし、最大10MBまで対応。",
    "schemaName": "画像URL変換",
    "schemaDescription": "画像を画質劣化なしの直リンクに変換する無料ツール。アカウント登録不要、透かしなし、高速グローバルCDN利用。",
    "badge": "画像URL変換",
    "h1Pre": "画像URL変換：",
    "h1Highlight": "無料・登録不要",
    "intro": "アカウント作成なしで画像をURLに変換したいですか？上のボックスに画像をドラッグ＆ドロップするだけで、約2秒で直リンクが発行されます。JPG、PNG、WebP、GIF、SVG形式（最大10MB）に対応しており、透かしや画質の劣化もありません。リンクをコピーして、必要な場所に貼り付けてください。",
    "howTitle": "画像URL変換ツールの使い方",
    "steps": [
      {
        "title": "ファイルをアップロード",
        "body": "画像をボックスにドラッグ＆ドロップするか、クリックしてデバイスから選択してください。最大10MBまでのJPG、PNG、WebP、GIF、SVGファイルに対応しています。"
      },
      {
        "title": "リンクを取得",
        "body": "画像は高速なグローバルCDNにアップロードされ、すぐに直リンクが発行されます。リンクは元のファイル拡張子で終わるため、元のファイルと全く同じように機能します。"
      },
      {
        "title": "どこでも貼り付け",
        "body": "Discordのチャット、Redditの投稿、掲示板のスレッド、HTMLページ、メールなどでURLを使用してください。ダウンロードボタンやプレビューカードではなく、画像そのものが表示されます。"
      }
    ],
    "whyTitle": "Imgurの代わりに選ばれる理由",
    "whyItems": [
      {
        "title": "アカウント・メール登録不要",
        "body": "登録手続きは一切ありません。Imgurは2023年から匿名投稿を廃止したため、よりシンプルなツールを探している多くのユーザーに選ばれています。アップロードしてコピーするだけです。"
      },
      {
        "title": "埋め込み可能なリンク",
        "body": "URLは画像ファイルに直接リンクしているため、Discord、Reddit、ほとんどの掲示板でギャラリーページを開いたりダウンロードを強制したりすることなく、インラインで表示されます。"
      },
      {
        "title": "画質劣化なし",
        "body": "一部のホスティングサービスでは、ホットリンクされた画像を約1,280pxに自動リサイズしますが、当ツールはファイルをそのまま保持するため、アップロードした画質がそのまま表示されます。"
      },
      {
        "title": "リンクの有効期限について明記",
        "body": "匿名リンクは少なくとも数週間、通常はそれ以上保持されます。期限切れのないリンクが必要な場合は、無料アカウントを作成し、アップロード時に「永久保存」を選択してください。"
      }
    ],
    "faqTitle": "画像URL変換に関するよくある質問",
    "faqs": [
      { "q": "画像URLとは何ですか？", "a": "画像URLは画像ファイルの直接的なウェブアドレスです（例：https://imagetourl.cloud/abc123.jpg）。ブラウザで開くと画像だけが表示され、HTML や Markdown に埋め込むことができます。画像をアップロードして直接リンクを返すホストを使うことで、あなたの画像URLを取得できます。" },
      {
        "q": "無料で画像をURLに変換するには？",
        "a": "ページ上部のボックスに画像をアップロードしてください。CDNに保存され、数秒以内にコピー可能な直リンクが発行されます。アカウント登録や支払いは一切不要です。"
      },
      {
        "q": "どの画像形式が使えますか？",
        "a": "JPG、PNG、WebP、GIF、SVGに対応しており、1ファイル最大10MBまでです。発行されるリンクは元の拡張子で終わるため、元のファイルと同じようにホットリンクや埋め込みが可能です。"
      },
      {
        "q": "スクリーンショットや写真をURLにできますか？",
        "a": "はい。スクリーンショットやスマホで撮影した写真はPNGやJPGですので、同様にドラッグ＆ドロップして直リンクを取得できます。"
      },
      {
        "q": "DiscordやRedditでリンクは機能しますか？",
        "a": "はい。URLが画像ファイルに直接リンクしているため、DiscordやReddit、ほとんどの掲示板でダウンロードページやギャラリーではなく、画像としてインライン表示されます。"
      },
      {
        "q": "<img>タグやMarkdownで使用できますか？",
        "a": "はい。通常の直リンクURLですので、HTMLの<img src>タグ、Markdownの画像構文、CSSのbackground-image、および画像リンクを受け付けるあらゆるサイトビルダーで使用可能です。"
      },
      {
        "q": "リンクに有効期限はありますか？",
        "a": "匿名アップロードは毎月のストレージ整理まで保持されるため、最低でも数週間は有効です。期限切れを防ぎたい場合は、無料アカウントを作成して「永久保存」を選択してください。いずれの場合も、バックアップとしてご自身でファイルを保管しておくことをお勧めします。"
      },
      {
        "q": "画像が圧縮やリサイズされることはありますか？",
        "a": "いいえ。アップロードしたファイルがそのままの解像度で保持され、再圧縮や透かしの追加もありません。これは、ホットリンクされた画像を縮小する他のホスティングサービスとは異なります。"
      },
      {
        "q": "ファイルサイズの制限はありますか？",
        "a": "1画像あたり10MBまでです。これはほとんどのスクリーンショット、写真、グラフィックをカバーします。これを超える場合は、圧縮やリサイズを行ってから変換してください。"
      },
      {
        "q": "Imgurの無料代替として適していますか？",
        "a": "はい。特に画像をURLに変換してどこかに貼り付けたいという用途には最適です。アプリのインストールやメール登録、ギャラリーページへの遷移が不要で、かつての匿名Imgurのような使い勝手を実現しています。"
      }
    ],
    "ctaTitle": "今すぐ画像をURLに変換",
    "ctaBody": "JPG、PNG、WebP、GIF、SVGをアップロードして、数秒で直リンクを取得しましょう。登録不要、圧縮なし、透かしなし。",
    "ctaButton": "今すぐ画像をアップロード",
    "comparisonColumns": [
      "ホスト",
      "登録不要",
      "最大ファイルサイズ",
      "直リンク",
      "画質維持",
      "リンクの寿命"
    ],
    "comparisonIntro": "多くの無料画像ホストはリンクを提供しますが、アカウントの必要性、ファイルサイズ制限、画質維持の可否が異なります。主要なサービスの比較は以下の通りです。",
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "はい",
          "10 MB",
          "はい",
          "はい",
          "無料は数週間、ログイン時は永久"
        ]
      },
      {
        "cells": [
          "Imgur",
          "いいえ (2023年以降)",
          "20 MB",
          "制限あり",
          "はい",
          "アカウントに紐付け"
        ]
      },
      {
        "cells": [
          "Catbox",
          "はい",
          "200 MB",
          "はい",
          "はい",
          "永久"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "はい",
          "32 MB",
          "はい",
          "はい",
          "期限設定可能"
        ]
      },
      {
        "cells": [
          "Postimages",
          "はい",
          "24 MB",
          "はい",
          "いいえ (1280pxにリサイズ)",
          "永久"
        ]
      }
    ],
    "comparisonTitle": "画像ホスティングサービスの比較",
    "related": [
      {
        "pageKey": "image-to-url-converter",
        "label": "画像URL変換ツール"
      },
      {
        "pageKey": "free-image-hosting",
        "label": "無料画像ホスティング"
      },
      {
        "pageKey": "imgur-alternative",
        "label": "Imgurの代替"
      },
      {
        "pageKey": "image-hosting-for-discord",
        "label": "Discord用画像ホスティング"
      },
      {
        "pageKey": "direct-image-link",
        "label": "画像直リンク"
      },
      {
        "pageKey": "png-to-url",
        "label": "PNGからURLへ"
      }
    ],
    "relatedTitle": "その他の画像URL変換ツール",
    "sections": [
      {
        "heading": "画像URLとは？",
        "body": "画像URLとは、.jpg、.png、.webpなどのファイル拡張子で終わり、Webページではなく画像ファイルそのものを直接指し示すWebアドレスのことです。生のファイルにリンクしているため、ブラウザ、チャットアプリ、掲示板、メールクライアントなど、URLを認識できるあらゆる場所で画像をインライン表示できます。これが本物の画像URLと通常のページリンクの違いです。前者は画像を表示し、後者はクリックが必要なページを開きます。当ツールは前者を提供します。"
      },
      {
        "heading": "「画像URL変換」と「画像リンク変換」の違い",
        "body": "「画像URL変換」と「画像リンク変換」は同じ意味で使われており、画像への直接的なホットリンク可能なアドレスを指します。実質的な違いはありません。どちらのキーワードで検索しても、当ツールでは同じ結果が得られます。ファイル拡張子で終わり、Discord、Reddit、Slack、WhatsApp、ほとんどのWebサイトで画像として埋め込まれるクリーンなリンクです。"
      },
      {
        "heading": "リンクを共有しても安全ですか？",
        "body": "すべてのリンクはHTTPS経由で提供され、リダイレクトページやトラッカーを含まない画像ファイルのみを指します。匿名アップロードはリンクを知っている誰でも閲覧可能であるため、プライベートなものは投稿しないでください。また、無料リンクは定期的に削除される可能性があるため、バックアップとしてご自身でファイルを保管してください。"
      }
    ],
    "specs": [
      {
        "label": "料金",
        "value": "無料"
      },
      {
        "label": "登録",
        "value": "不要"
      },
      {
        "label": "対応形式",
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "最大サイズ",
        "value": "10 MB"
      },
      {
        "label": "出力",
        "value": "CDN直リンク"
      }
    ],
    "specsTitle": "画像URL変換の概要",
    "useCases": [
      {
        "title": "Discordや掲示板",
        "body": "リンクをチャンネルやスレッドに貼り付けるだけで画像が表示されます。添付ファイルやクリックして開く手間は不要です。"
      },
      {
        "title": "Webサイトやドキュメント",
        "body": "HTML、Notionページ、README、サイトビルダーにURLを貼り付けるだけで画像が読み込まれます。個別のホスティング管理は不要です。"
      },
      {
        "title": "メールやチャット",
        "body": "署名に追加したり、メッセージで送信したりできます。ファイルへのホットリンクなので、画像が壊れたボックスとして表示されることはありません。"
      }
    ],
    "useCasesIntro": "画像に直リンクがあれば、オンライン上のあらゆる場所に簡単に貼り付けられます：",
    "useCasesTitle": "画像URLリンクの活用シーン",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15",
    "howToSchema": true
  },
  "zh-Hans": {
    "metaTitle": "图片转 URL - 免费、无需注册、即时直链 | ImageToURL",
    "metaDescription": "免费将任何图片转换为 URL。上传 JPG、PNG、WebP、GIF 或 SVG，即可获得适用于 Discord、Reddit、论坛和电子邮件的直链。无需账户，无压缩，支持 10MB。",
    "schemaName": "图片转 URL",
    "schemaDescription": "一款免费的图片转 URL 工具，可将任何图片转换为直接、全质量的链接。无需账户，无水印，快速全球 CDN。",
    "badge": "图片转 URL",
    "h1Pre": "图片转 URL：",
    "h1Highlight": "免费，无需注册",
    "intro": "需要将图片转换为 URL 而无需先注册账户吗？将您的图片拖放到上方的框中，大约两秒钟即可获得直链。它适用于最大 10MB 的 JPG、PNG、WebP、GIF 和 SVG 文件，没有水印，传输过程中也不会进行任何压缩或缩减。复制链接并将其粘贴到您需要的地方即可。",
    "howTitle": "图片转 URL 工具的使用方法",
    "steps": [
      {
        "title": "拖放您的文件",
        "body": "将图片拖到框中或点击以从您的设备中选择。每个文件最大可达 10MB，支持 JPG、PNG、WebP、GIF 和 SVG。"
      },
      {
        "title": "获取链接",
        "body": "您的图片会被上传到快速的全球 CDN，并立即生成直链。链接以原始文件扩展名结尾，因此其表现与原始文件完全一致。"
      },
      {
        "title": "粘贴到任何地方",
        "body": "在 Discord 聊天、Reddit 帖子、论坛主题、HTML 页面或电子邮件中使用该 URL。它会显示为实际图片，而不是下载按钮或预览卡片。"
      }
    ],
    "whyTitle": "为什么人们选择它而不是 Imgur",
    "whyItems": [
      {
        "title": "无需账户，无需邮箱",
        "body": "无需注册任何内容。Imgur 自 2023 年起停止允许匿名发布，因此许多人都在寻找更简单的选择。上传、复制、完成。"
      },
      {
        "title": "真正可嵌入的链接",
        "body": "URL 直接指向图片文件，因此 Discord、Reddit 和大多数论坛会将其内嵌显示，而不是打开图库页面或强制下载。"
      },
      {
        "title": "全质量，不压缩",
        "body": "一些托管服务会悄悄将外链图片缩小到约 1,280px。本工具保留您的原始文件，因此您上传的内容就是用户看到的内容。"
      },
      {
        "title": "关于链接有效期的诚实说明",
        "body": "匿名链接至少可以保留几周，通常更久。想要永久有效的链接？注册一个免费账户，并在上传时选择“永久保存”。"
      }
    ],
    "faqTitle": "图片转 URL 常见问题解答",
    "faqs": [
      {
        "q": "如何免费将图片转换为 URL？",
        "a": "在本页面顶部的框中上传您的图片。它会进入我们的 CDN，您将在几秒钟内获得可供复制的直链。无需账户，无需付费。"
      },
      {
        "q": "我可以使用哪些图片格式？",
        "a": "JPG、PNG、WebP、GIF 和 SVG，每个文件最大 10MB。您获得的链接以真实扩展名结尾，因此它的外链和嵌入方式与原始文件相同。"
      },
      {
        "q": "我可以将截图或照片转换为 URL 吗？",
        "a": "可以。截图或手机照片本质上就是 PNG 或 JPG，因此工作方式完全相同——拖入并复制直链即可。"
      },
      {
        "q": "链接可以在 Discord 和 Reddit 中使用吗？",
        "a": "可以。因为 URL 直接指向图片文件，Discord、Reddit 和大多数论坛会将其渲染为内嵌图片，而不是显示下载或图库页面。"
      },
      {
        "q": "我可以在 <img> 标签或 Markdown 中使用该 URL 吗？",
        "a": "可以。该链接是标准的直接图片 URL，因此它适用于 HTML <img src> 标签、Markdown 图片语法、CSS background-image 以及任何接受图片链接的网站构建器。"
      },
      {
        "q": "链接会过期吗？",
        "a": "匿名上传的文件会保留到我们每月的存储清理为止，因此您至少可以获得几周的有效期，通常更长。想要永不过期的链接？创建一个免费账户并在上传时选择“永久保存”。无论哪种方式，请务必保留自己的备份。"
      },
      {
        "q": "它会压缩或调整我的图片大小吗？",
        "a": "不会。您将获得与上传时完全相同的文件，保持全分辨率，没有重新压缩，也没有水印。这与那些将外链图片缩小到较小尺寸的托管服务不同。"
      },
      {
        "q": "有文件大小限制吗？",
        "a": "每张图片 10MB，这涵盖了几乎所有的截图、照片或图形。如果文件较大，请先压缩或调整大小，然后再转换为 URL。"
      },
      {
        "q": "这是一个好的免费 Imgur 替代品吗？",
        "a": "是的，特别是如果您只是想将图片转换为 URL 并将链接粘贴到某处。没有应用程序、没有电子邮件、没有图库页面，这正是大多数人怀念旧版匿名 Imgur 的地方。"
      }
    ],
    "ctaTitle": "立即将您的图片转换为 URL",
    "ctaBody": "上传 JPG、PNG、WebP、GIF 或 SVG，几秒钟内即可获得直链。无需注册，无压缩，无水印。",
    "ctaButton": "立即上传图片",
    "comparisonColumns": [
      "托管服务",
      "无需注册",
      "最大文件大小",
      "直接外链",
      "保持全质量",
      "链接有效期"
    ],
    "comparisonIntro": "大多数免费图片托管服务都可以为您提供链接。它们的区别在于是否需要账户、可以上传多大的文件以及图片是否保持全质量。以下是主流服务的对比。",
    "comparisonRows": [
      {
        "cells": [
          "ImageToURL",
          "是",
          "10 MB",
          "是",
          "是",
          "免费几周，登录后永久"
        ]
      },
      {
        "cells": [
          "Imgur",
          "否 (自 2023 年起)",
          "20 MB",
          "有限",
          "是",
          "绑定到您的账户"
        ]
      },
      {
        "cells": [
          "Catbox",
          "是",
          "200 MB",
          "是",
          "是",
          "永久"
        ]
      },
      {
        "cells": [
          "ImgBB",
          "是",
          "32 MB",
          "是",
          "是",
          "可选过期"
        ]
      },
      {
        "cells": [
          "Postimages",
          "是",
          "24 MB",
          "是",
          "否 (调整为 1280px)",
          "永久"
        ]
      }
    ],
    "comparisonTitle": "图片转 URL 托管服务对比",
    "related": [
      {
        "pageKey": "image-to-url-converter",
        "label": "图片转 URL 转换器"
      },
      {
        "pageKey": "free-image-hosting",
        "label": "免费图片托管"
      },
      {
        "pageKey": "imgur-alternative",
        "label": "Imgur 替代品"
      },
      {
        "pageKey": "image-hosting-for-discord",
        "label": "Discord 图片托管"
      },
      {
        "pageKey": "direct-image-link",
        "label": "直接图片链接"
      },
      {
        "pageKey": "png-to-url",
        "label": "PNG 转 URL"
      }
    ],
    "relatedTitle": "更多图片转 URL 工具",
    "sections": [
      {
        "heading": "什么是图片 URL？",
        "body": "图片 URL 是一个直接的网页地址，以文件本身的扩展名（如 .jpg、.png 或 .webp）结尾，直接指向图片本身，而不是指向关于该图片的网页。因为它链接到原始文件，所以任何理解 URL 的程序（浏览器、聊天应用、论坛、电子邮件客户端）都可以内嵌加载该图片。这就是真实的图片 URL 与普通页面链接的区别：前者显示图片，后者打开一个您必须点击才能查看的页面。本工具为您提供的是前者。"
      },
      {
        "heading": "图片转 URL 与图片转链接",
        "body": "人们说“图片转 URL”和“图片转链接”时，意思是一样的：即图片的直接、可外链地址。两者没有实质区别。无论您搜索哪个短语，在这里都会得到相同的结果——一个以文件扩展名结尾的纯净链接，可以在 Discord、Reddit、Slack、WhatsApp 和大多数网站上作为实际图片嵌入。"
      },
      {
        "heading": "这些链接可以安全分享吗？",
        "body": "每个链接都通过 HTTPS 提供服务，并且仅指向您的图片，没有重定向页面或跟踪器。请记住，匿名上传的内容对任何拥有链接的人都是公开的，因此请勿发布任何私密内容，并保留一份文件副本作为备份，因为免费链接会定期清理。"
      }
    ],
    "specs": [
      {
        "label": "价格",
        "value": "免费"
      },
      {
        "label": "注册",
        "value": "无需"
      },
      {
        "label": "格式",
        "value": "JPG, PNG, WebP, GIF, SVG"
      },
      {
        "label": "最大大小",
        "value": "10 MB"
      },
      {
        "label": "输出",
        "value": "直接 CDN 链接"
      }
    ],
    "specsTitle": "图片转 URL 概览",
    "useCases": [
      {
        "title": "Discord 和论坛",
        "body": "将链接粘贴到频道或主题中，图片就会直接显示。无需附件，无需额外点击即可打开。"
      },
      {
        "title": "网站和文档",
        "body": "将 URL 放入您的 HTML、Notion 页面、README 或网站构建器中，图片即可内嵌加载。无需处理单独的托管。"
      },
      {
        "title": "电子邮件和聊天",
        "body": "将其添加到签名或在消息中发送。它会外链到文件，因此人们看到的是图片，而不是损坏的框。"
      }
    ],
    "useCasesIntro": "一旦您的图片拥有了直链，它几乎可以在线上的任何地方使用：",
    "useCasesTitle": "图片转 URL 链接的实用场景",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-15",
    "howToSchema": true
  }
} as LandingContentMap;
