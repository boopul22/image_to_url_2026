import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "HEIC to JPG Converter | Free, Private, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG to JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG to PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convert to JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG to JPG" }
    ],
    "metaDescription": "Convert HEIC to JPG free, right in your browser. Your iPhone photos never get uploaded. Works on Windows, Mac, iPhone and Android. No signup needed.",
    "schemaName": "HEIC to JPG Converter",
    "schemaDescription": "Convert HEIC and HEIF photos from your iPhone to JPG entirely in your browser without uploading files to a server.",
    "badge": "BROWSER-ONLY TOOL",
    "h1Pre": "HEIC to JPG Converter,",
    "h1Highlight": "100% in Your Browser",
    "intro": "Drop your iPhone HEIC photos here and get JPG files in seconds. The whole conversion runs on your own device, so your pictures never get uploaded anywhere. There's no signup, no watermark, and no limit on how many you can run through. Once a photo is converted you can also click 'Get URL' to host it on our CDN and get a shareable https link.",
    "specsTitle": "HEIC to JPG at a glance",
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
        "label": "Converts",
        "value": "HEIC / HEIF to JPG"
      },
      {
        "label": "Privacy",
        "value": "Runs in your browser"
      },
      {
        "label": "Output",
        "value": "JPG download + optional shareable link"
      }
    ],
    "howTitle": "How to convert HEIC to JPG",
    "steps": [
      {
        "title": "Drop your HEIC files",
        "body": "Drag photos straight from your iPhone, Mac Finder, or downloads folder. Multi-select is supported."
      },
      {
        "title": "Convert in your browser",
        "body": "A WebAssembly decoder does the work right on your device. No files get sent to a server, and you can check that yourself in DevTools."
      },
      {
        "title": "Download or host",
        "body": "Save the JPG to your device, or click 'Get URL' to host it on our CDN and get a shareable link."
      }
    ],
    "whyTitle": "Why convert HEIC to JPG?",
    "whyItems": [
      {
        "title": "Works on Windows",
        "body": "Windows can't open HEIC without a paid codec. JPG opens everywhere, on any PC, with no extra setup."
      },
      {
        "title": "Android & messaging",
        "body": "Many Android phones and chat apps still struggle with HEIC. JPG just works in WhatsApp, Messenger, and email."
      },
      {
        "title": "Web & social",
        "body": "Most blogs, CMSs, and older social platforms reject HEIC uploads. Convert first to avoid the upload error."
      },
      {
        "title": "Privacy by default",
        "body": "Other converters upload your photos to their servers. This one doesn't. Your files stay on your device the entire time."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Are my photos really private?",
        "a": "Yes. The conversion happens entirely in your browser, so your HEIC photos never leave your computer or phone. Nothing gets uploaded unless you choose to host a file with 'Get URL'."
      },
      {
        "q": "What is HEIC?",
        "a": "HEIC is the format the iPhone uses to save photos. It saves space, but a lot of apps, Windows PCs, and websites can't open it. Converting HEIC to JPG makes your photos work everywhere."
      },
      {
        "q": "How do I convert HEIC to JPG on iPhone, Windows, or Mac?",
        "a": "The same way on every device. Open this page, drop your HEIC files into the box, and download the JPG. It runs in any modern browser, so there's nothing to install on Windows, Mac, iPhone, or Android."
      },
      {
        "q": "Will I lose quality converting HEIC to JPG?",
        "a": "No noticeable loss. You can set the quality slider up to 92 for sharp, full-resolution JPGs that look the same as the original."
      },
      {
        "q": "Is this really free?",
        "a": "Yes, it's completely free with no signup and no file limits. Convert as many photos as you like, as often as you like."
      },
      {
        "q": "Why won't my HEIC photo open on Windows?",
        "a": "Older versions of Windows don't ship the HEIC codec, so File Explorer and Photos just show a blank or an error. Windows 10 and 11 can add it through a paid extension from the Microsoft Store, but converting the file to JPG is quicker and means it opens on any PC without extra software."
      },
      {
        "q": "Can I convert many HEIC photos at once?",
        "a": "Yes. Select a whole batch when you drop files in and they all convert together. Each one comes out as its own JPG you can download separately or all at once."
      },
      {
        "q": "How do I stop my iPhone saving photos as HEIC?",
        "a": "Open Settings, tap Camera, then Formats, and choose 'Most Compatible'. From then on the camera saves JPG instead of HEIC. New photos will be JPG; anything already shot in HEIC still needs converting."
      },
      {
        "q": "Does converting change the original photo?",
        "a": "No. The original HEIC file stays exactly where it is. The tool reads a copy and writes out a new JPG, so you end up with both files and can delete whichever you don't need."
      },
      {
        "q": "Can I convert HEIC to JPG on Android?",
        "a": "Yes. The tool runs in the phone's browser, so open this page in Chrome on Android, pick the HEIC file you received, and save the JPG. Nothing to install."
      },
      {
        "q": "Is HEIC the same as HEIF?",
        "a": "Close. HEIF is the container format and HEIC is Apple's specific version of it that holds HEVC-encoded images. In practice the file extensions .heic and .heif both convert to JPG here the same way."
      },
      {
        "q": "Why does my HEIC photo turn into two files or look odd?",
        "a": "Some iPhone shots, like Live Photos or burst frames, pack extra data into the HEIC. The converter pulls out the main still image and writes a single clean JPG, dropping the motion or depth layers that JPG can't hold."
      }
    ],
    "comparisonTitle": "HEIC vs JPG vs PNG",
    "comparisonIntro": "These three formats trade size, quality and compatibility in different ways. Here's how they line up so you can pick the right one before you convert.",
    "comparisonColumns": [
      "Format",
      "Typical file size",
      "Quality",
      "Transparency",
      "Where it works"
    ],
    "comparisonRows": [
      {
        "cells": [
          "HEIC",
          "Smallest (~half of JPG)",
          "High at a small size",
          "No",
          "Apple devices; limited elsewhere"
        ]
      },
      {
        "cells": [
          "JPG",
          "Small",
          "Lossy, fine at high quality",
          "No",
          "Everywhere"
        ]
      },
      {
        "cells": [
          "PNG",
          "Large",
          "Lossless",
          "Yes",
          "Everywhere"
        ]
      },
      {
        "cells": [
          "WebP",
          "Small",
          "Good, lossy or lossless",
          "Yes",
          "Modern browsers and apps"
        ]
      }
    ],
    "useCasesTitle": "When converting iPhone photos to JPG matters",
    "useCasesIntro": "HEIC is fine while a photo stays on your iPhone. The moment it has to go somewhere else, JPG saves you the headache:",
    "useCases": [
      {
        "title": "Uploading to a website or CMS",
        "body": "WordPress, most online forms and a lot of e-commerce backends reject .heic outright. Convert first and the upload goes through with no error message."
      },
      {
        "title": "Sending to Windows or Android users",
        "body": "A friend on a PC or an Android phone often can't open the HEIC you AirDropped or messaged. A JPG opens for them straight away, no codec hunt."
      },
      {
        "title": "Attaching to email or job forms",
        "body": "Application portals and HR systems usually expect JPG or PDF. Converting your iPhone shot keeps the attachment from bouncing or showing as a broken file."
      }
    ],
    "sections": [
      {
        "heading": "What is HEIC and why convert it to JPG?",
        "body": "HEIC is the format the iPhone has used by default since iOS 11. It's Apple's take on HEIF and leans on HEVC compression, which is why a HEIC photo is often about half the size of the same shot saved as JPG while still looking sharp. The catch is support. Outside Apple's own apps, plenty of Windows PCs, Android phones, websites and email clients either can't open .heic or refuse to accept it. Converting to JPG trades a little file size for a format that opens basically everywhere, which is the whole reason most people do it."
      },
      {
        "heading": "HEIC vs JPG: which should you keep?",
        "body": "If a photo lives on your iPhone and you mainly view it there, HEIC is the better deal: smaller files, same visible quality, more room on your phone. JPG wins the second you need to share or upload. It's older and a bit larger at matching quality, but nothing turns it away. A reasonable habit is to leave your camera roll in HEIC and convert copies to JPG only when you're sending them out. That way you save space without getting stuck with files other people can't open."
      },
      {
        "heading": "Will I lose quality converting to JPG?",
        "body": "JPG is a lossy format, so in theory every save throws away some detail. In practice, at a high quality setting like 92 you won't see the difference next to the original, even zoomed in. The conversion reads the full-resolution image out of the HEIC and writes a JPG at the same pixel dimensions, so nothing gets scaled down. The one thing JPG can't carry is transparency, but iPhone camera photos don't have any, so that only matters for screenshots or graphics with see-through areas."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24",
    "ctaTitle": "Need a permanent URL too?",
    "ctaBody": "After converting, click 'Get URL' on any file to host it on our global CDN — free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de HEIC a JPG | Gratis, Privado, Sin Subida",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG a JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG a PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir a JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG a JPG" }
    ],
    "metaDescription": "Convierte HEIC a JPG gratis, directamente en tu navegador. Tus fotos de iPhone nunca se suben. Funciona en Windows, Mac, iPhone y Android. Sin registro.",
    "schemaName": "Convertidor de HEIC a JPG",
    "schemaDescription": "Convierte fotos HEIC y HEIF de tu iPhone a JPG completamente en tu navegador sin subir archivos a un servidor.",
    "badge": "HERRAMIENTA SOLO EN NAVEGADOR",
    "h1Pre": "Convertidor de HEIC a JPG,",
    "h1Highlight": "100% en tu navegador",
    "intro": "Suelta tus fotos HEIC de iPhone aquí y obtén archivos JPG en segundos. La conversión completa se ejecuta en tu propio dispositivo, así que tus fotos nunca se suben a ningún lado.",
    "howTitle": "Cómo convertir HEIC a JPG",
    "steps": [
      {
        "title": "Suelta tus archivos HEIC",
        "body": "Arrastra las fotos directamente desde tu iPhone, Mac Finder o carpeta de descargas. Se admite la selección múltiple."
      },
      {
        "title": "Convierte en tu navegador",
        "body": "Un decodificador WebAssembly hace el trabajo directamente en tu dispositivo. Ningún archivo se envía a un servidor, y puedes comprobarlo tú mismo en DevTools."
      },
      {
        "title": "Descarga u hospeda",
        "body": "Guarda el JPG en tu dispositivo o haz clic en 'Obtener URL' para alojarlo en nuestra CDN y obtener un enlace para compartir."
      }
    ],
    "whyTitle": "¿Por qué convertir HEIC a JPG?",
    "whyItems": [
      {
        "title": "Funciona en Windows",
        "body": "Windows no puede abrir HEIC sin un códec de pago. JPG se abre en todas partes, en cualquier PC, sin configuración adicional."
      },
      {
        "title": "Android y mensajería",
        "body": "Muchos teléfonos Android y aplicaciones de chat aún tienen problemas con HEIC. JPG simplemente funciona en WhatsApp, Messenger y correo electrónico."
      },
      {
        "title": "Web y redes sociales",
        "body": "La mayoría de los blogs, CMS y plataformas sociales antiguas rechazan las subidas en HEIC. Convierte primero para evitar el error de subida."
      },
      {
        "title": "Privacidad por defecto",
        "body": "Otros convertidores suben tus fotos a sus servidores. Este no. Tus archivos permanecen en tu dispositivo todo el tiempo."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Mis fotos son realmente privadas?",
        "a": "Sí. La conversión ocurre completamente en tu navegador, así que tus fotos HEIC nunca salen de tu computadora o teléfono. Nada se sube a menos que elijas alojar un archivo con 'Obtener URL'."
      },
      {
        "q": "¿Qué es HEIC?",
        "a": "HEIC es el formato que usa el iPhone para guardar fotos. Ahorra espacio, pero muchas aplicaciones, PCs con Windows y sitios web no pueden abrirlo. Convertir HEIC a JPG hace que tus fotos funcionen en todas partes."
      },
      {
        "q": "¿Cómo convierto HEIC a JPG en iPhone, Windows o Mac?",
        "a": "De la misma manera en cada dispositivo. Abre esta página, suelta tus archivos HEIC en el cuadro y descarga el JPG. Funciona en cualquier navegador moderno, así que no hay nada que instalar en Windows, Mac, iPhone o Android."
      },
      {
        "q": "¿Perderé calidad al convertir HEIC a JPG?",
        "a": "Sin pérdida apreciable. Puedes ajustar el control deslizante de calidad hasta 92 para obtener JPG nítidos y de resolución completa que se ven igual que el original."
      },
      {
        "q": "¿Es esto realmente gratis?",
        "a": "Sí, es completamente gratis, sin registro y sin límite de archivos. Convierte tantas fotos como quieras, con la frecuencia que desees."
      }
    ],
    "ctaTitle": "¿Necesitas también una URL permanente?",
    "ctaBody": "Después de convertir, haz clic en 'Obtener URL' en cualquier archivo para alojarlo en nuestra CDN global — gratis, sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur HEIC en JPG | Gratuit, Privé, Sans Upload",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG vers JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG vers PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir en JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG vers JPG" }
    ],
    "metaDescription": "Convertissez HEIC en JPG gratuitement dans votre navigateur. Vos photos iPhone ne sont jamais téléchargées. Fonctionne sur Windows, Mac, iPhone et Android. Sans inscription.",
    "schemaName": "Convertisseur HEIC en JPG",
    "schemaDescription": "Convertissez des photos HEIC et HEIF de votre iPhone en JPG entièrement dans votre navigateur sans envoyer de fichiers vers un serveur.",
    "badge": "OUTIL NAVIGATEUR UNIQUEMENT",
    "h1Pre": "Convertisseur HEIC en JPG,",
    "h1Highlight": "100% dans votre navigateur",
    "intro": "Déposez vos photos HEIC iPhone ici et obtenez des fichiers JPG en quelques secondes. La conversion entière s'effectue sur votre propre appareil — vos photos ne sont donc jamais uploadées nulle part.",
    "howTitle": "Comment convertir HEIC en JPG",
    "steps": [
      {
        "title": "Déposez vos fichiers HEIC",
        "body": "Faites glisser vos photos directement depuis votre iPhone, le Finder de votre Mac ou votre dossier de téléchargements. La sélection multiple est prise en charge."
      },
      {
        "title": "Convertissez dans votre navigateur",
        "body": "Un décodeur WebAssembly effectue le travail directement sur votre appareil. Aucun fichier n'est envoyé vers un serveur, et vous pouvez le vérifier vous-même dans les DevTools."
      },
      {
        "title": "Téléchargez ou hébergez",
        "body": "Enregistrez le JPG sur votre appareil, ou cliquez sur 'Obtenir l'URL' pour l'héberger sur notre CDN et obtenir un lien partageable."
      }
    ],
    "whyTitle": "Pourquoi convertir HEIC en JPG ?",
    "whyItems": [
      {
        "title": "Fonctionne sur Windows",
        "body": "Windows ne peut pas ouvrir HEIC sans un codec payant. JPG s'ouvre partout, sur n'importe quel PC, sans configuration supplémentaire."
      },
      {
        "title": "Android et messagerie",
        "body": "De nombreux téléphones Android et applications de messagerie ont encore du mal avec HEIC. JPG fonctionne simplement dans WhatsApp, Messenger et les e-mails."
      },
      {
        "title": "Web et réseaux sociaux",
        "body": "La plupart des blogs, CMS et anciennes plateformes sociales rejettent les téléchargements HEIC. Convertissez d'abord pour éviter l'erreur d'importation."
      },
      {
        "title": "Confidentialité par défaut",
        "body": "Les autres convertisseurs téléchargent vos photos sur leurs serveurs. Celui-ci ne le fait pas. Vos fichiers restent sur votre appareil tout le temps."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Mes photos sont-elles vraiment privées ?",
        "a": "Oui. La conversion se fait entièrement dans votre navigateur, vos photos HEIC ne quittent donc jamais votre ordinateur ou téléphone. Rien n'est téléchargé sauf si vous choisissez d'héberger un fichier avec 'Obtenir l'URL'."
      },
      {
        "q": "Qu'est-ce que HEIC ?",
        "a": "HEIC est le format qu'utilise l'iPhone pour sauvegarder les photos. Il économise de l'espace, mais beaucoup d'applications, de PCs Windows et de sites web ne peuvent pas l'ouvrir. Convertir HEIC en JPG fait fonctionner vos photos partout."
      },
      {
        "q": "Comment convertir HEIC en JPG sur iPhone, Windows ou Mac ?",
        "a": "De la même façon sur chaque appareil. Ouvrez cette page, déposez vos fichiers HEIC dans la zone et téléchargez le JPG. Ça fonctionne dans n'importe quel navigateur moderne, donc rien à installer sur Windows, Mac, iPhone ou Android."
      },
      {
        "q": "Vais-je perdre de la qualité en convertissant HEIC en JPG ?",
        "a": "Aucune perte perceptible. Vous pouvez régler le curseur de qualité jusqu'à 92 pour des JPG nets et en pleine résolution qui semblent identiques à l'original."
      },
      {
        "q": "Est-ce vraiment gratuit ?",
        "a": "Oui, c'est complètement gratuit sans inscription et sans limites de fichiers. Convertissez autant de photos que vous voulez, aussi souvent que vous le souhaitez."
      }
    ],
    "ctaTitle": "Besoin d'une URL permanente aussi ?",
    "ctaBody": "Après la conversion, cliquez sur 'Obtenir l'URL' sur n'importe quel fichier pour l'héberger sur notre CDN mondial — gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil principal"
  },
  "de": {
    "metaTitle": "HEIC zu JPG Konverter | Kostenlos, Privat, Kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG zu JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG zu PNG" },
      { "pageKey": "convert-to-jpg", "label": "Zu JPG konvertieren" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG zu JPG" }
    ],
    "metaDescription": "Konvertieren Sie HEIC kostenlos zu JPG, direkt im Browser. Ihre iPhone-Fotos werden nie hochgeladen. Funktioniert auf Windows, Mac, iPhone und Android. Keine Anmeldung.",
    "schemaName": "HEIC zu JPG Konverter",
    "schemaDescription": "Konvertieren Sie HEIC- und HEIF-Fotos von Ihrem iPhone zu JPG vollständig in Ihrem Browser, ohne Dateien auf einen Server hochzuladen.",
    "badge": "NUR-BROWSER-TOOL",
    "h1Pre": "HEIC zu JPG Konverter,",
    "h1Highlight": "100% in Ihrem Browser",
    "intro": "Legen Sie Ihre iPhone HEIC-Fotos hier ab und erhalten Sie JPG-Dateien in Sekunden. Die gesamte Konvertierung läuft auf Ihrem eigenen Gerät, sodass Ihre Fotos nirgendwo hochgeladen werden.",
    "howTitle": "So konvertieren Sie HEIC zu JPG",
    "steps": [
      {
        "title": "HEIC-Dateien ablegen",
        "body": "Ziehen Sie Fotos direkt von Ihrem iPhone, Mac Finder oder aus dem Download-Ordner. Mehrfachauswahl wird unterstützt."
      },
      {
        "title": "Im Browser konvertieren",
        "body": "Ein WebAssembly-Decoder erledigt die Arbeit direkt auf Ihrem Gerät. Es werden keine Dateien an einen Server gesendet, und das können Sie selbst in den DevTools überprüfen."
      },
      {
        "title": "Herunterladen oder hosten",
        "body": "Speichern Sie das JPG auf Ihrem Gerät oder klicken Sie auf 'URL abrufen', um es auf unserem CDN zu hosten und einen teilbaren Link zu erhalten."
      }
    ],
    "whyTitle": "Warum HEIC in JPG konvertieren?",
    "whyItems": [
      {
        "title": "Funktioniert auf Windows",
        "body": "Windows kann HEIC ohne einen kostenpflichtigen Codec nicht öffnen. JPG lässt sich überall öffnen, auf jedem PC, ohne zusätzliche Einrichtung."
      },
      {
        "title": "Android & Messenger",
        "body": "Viele Android-Telefone und Chat-Apps haben immer noch Probleme mit HEIC. JPG funktioniert einfach in WhatsApp, Messenger und E-Mails."
      },
      {
        "title": "Web & Social Media",
        "body": "Die meisten Blogs, CMS und ältere soziale Plattformen lehnen HEIC-Uploads ab. Konvertieren Sie zuerst, um den Upload-Fehler zu vermeiden."
      },
      {
        "title": "Datenschutz als Standard",
        "body": "Andere Konverter laden Ihre Fotos auf ihre Server hoch. Dieses Tool tut das nicht. Ihre Dateien bleiben die ganze Zeit auf Ihrem Gerät."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Sind meine Fotos wirklich privat?",
        "a": "Ja. Die Konvertierung erfolgt vollständig in Ihrem Browser, sodass Ihre HEIC-Fotos Ihren Computer oder Ihr Telefon niemals verlassen. Es wird nichts hochgeladen, es sei denn, Sie wählen, eine Datei mit 'URL abrufen' zu hosten."
      },
      {
        "q": "Was ist HEIC?",
        "a": "HEIC ist das Format, das das iPhone zum Speichern von Fotos verwendet. Es spart Speicherplatz, aber viele Apps, Windows-PCs und Websites können es nicht öffnen. Das Konvertieren von HEIC zu JPG sorgt dafür, dass Ihre Fotos überall funktionieren."
      },
      {
        "q": "Wie konvertiere ich HEIC zu JPG auf iPhone, Windows oder Mac?",
        "a": "Auf jedem Gerät gleich. Öffnen Sie diese Seite, legen Sie Ihre HEIC-Dateien in das Feld und laden Sie das JPG herunter. Es läuft in jedem modernen Browser, sodass auf Windows, Mac, iPhone oder Android nichts installiert werden muss."
      },
      {
        "q": "Verliere ich Qualität beim Konvertieren von HEIC zu JPG?",
        "a": "Kein merklicher Verlust. Sie können den Qualitätsregler auf bis zu 92 einstellen, um scharfe JPGs in voller Auflösung zu erhalten, die genauso aussehen wie das Original."
      },
      {
        "q": "Ist das wirklich kostenlos?",
        "a": "Ja, komplett kostenlos ohne Anmeldung und ohne Dateilimits. Konvertieren Sie so viele Fotos wie Sie möchten, so oft Sie möchten."
      }
    ],
    "ctaTitle": "Benötigen Sie auch eine dauerhafte URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung bei einer beliebigen Datei auf 'URL abrufen', um sie auf unserem globalen CDN zu hosten — kostenlos und ohne Anmeldung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "HEIC to JPG 変換 | 無料・プライベート・アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG→JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG→PNG" },
      { "pageKey": "convert-to-jpg", "label": "JPG変換" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG→JPG" }
    ],
    "metaDescription": "iPhoneのHEIC写真をブラウザで無料JPG変換。写真はアップロードされません。Windows・Mac・iPhone・Android対応、登録不要。",
    "schemaName": "HEIC to JPG 変換ツール",
    "schemaDescription": "サーバーへのアップロードなしに、ブラウザ上でiPhoneのHEIC・HEIF写真をJPGに変換します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "HEIC to JPG 変換ツール,",
    "h1Highlight": "100% ブラウザで完結",
    "intro": "iPhoneのHEIC写真をここにドロップするだけで、数秒でJPGファイルに変換できます。変換処理はすべてデバイス上で行われるため、写真はどこにもアップロードされません。",
    "howTitle": "HEIC to JPGの変換方法",
    "steps": [
      {
        "title": "HEICファイルをドロップ",
        "body": "iPhone、MacのFinder、またはダウンロードフォルダから写真を直接ドラッグしてください。複数選択にも対応しています。"
      },
      {
        "title": "ブラウザで変換",
        "body": "WebAssemblyデコーダーがデバイス上で直接処理します。サーバーへのファイル送信はなく、DevToolsで自分で確認することもできます。"
      },
      {
        "title": "ダウンロードまたはホスト",
        "body": "JPGをデバイスに保存するか、「URLを取得」をクリックしてCDNでホストし、共有リンクを取得できます。"
      }
    ],
    "whyTitle": "なぜHEICをJPGに変換するのか？",
    "whyItems": [
      {
        "title": "Windowsで動作する",
        "body": "Windowsでは有料コーデックなしでHEICを開くことができません。JPGならどのPCでも追加設定なしで開けます。"
      },
      {
        "title": "Androidとメッセージアプリ",
        "body": "多くのAndroid端末やチャットアプリはHEICにまだ対応していません。WhatsApp、Messenger、メールではJPGが確実に機能します。"
      },
      {
        "title": "WebとSNS",
        "body": "多くのブログ、CMS、古いSNSプラットフォームはHEICのアップロードを拒否します。先に変換してエラーを回避しましょう。"
      },
      {
        "title": "デフォルトでプライバシー保護",
        "body": "他の変換サービスは写真をサーバーにアップロードしますが、このツールは違います。ファイルは終始あなたのデバイス内に留まります。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "写真は本当にプライベートですか？",
        "a": "はい。変換はブラウザ内で完全に行われるため、HEIC写真はパソコンやスマートフォンから外部へ送信されません。「URLを取得」でファイルをホストすることを選ばない限り、何もアップロードされません。"
      },
      {
        "q": "HEICとは何ですか？",
        "a": "HEICはiPhoneが写真を保存するために使用するフォーマットです。容量を節約できますが、多くのアプリ、Windows PC、ウェブサイトで開けません。HEIC to JPGに変換することで、あらゆる場所で写真が使えるようになります。"
      },
      {
        "q": "iPhone・Windows・MacでHEICをJPGに変換するには？",
        "a": "どのデバイスでも同じ方法です。このページを開き、HEICファイルをボックスにドロップし、JPGをダウンロードするだけです。あらゆる最新ブラウザで動作するため、Windows・Mac・iPhone・Androidに何もインストールする必要はありません。"
      },
      {
        "q": "HEIC to JPGに変換すると画質が落ちますか？",
        "a": "ほとんど気になりません。品質スライダーを92まで設定することで、オリジナルと同じくシャープで高解像度のJPGが得られます。"
      },
      {
        "q": "本当に無料ですか？",
        "a": "はい、登録なし・ファイル制限なしで完全に無料です。好きな枚数を、好きなだけ変換できます。"
      }
    ],
    "ctaTitle": "永続的なURLも必要ですか？",
    "ctaBody": "変換後、各ファイルの「URLを取得」をクリックすると、グローバルCDNでホストできます（無料・登録不要）。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "HEIC 转 JPG 转换器 | 免费、私密、无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG 转 JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG 转 PNG" },
      { "pageKey": "convert-to-jpg", "label": "转换为 JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG 转 JPG" }
    ],
    "metaDescription": "在浏览器中免费将 iPhone 的 HEIC 转为 JPG。照片不会上传，支持 Windows、Mac、iPhone 和 Android，无需注册。",
    "schemaName": "HEIC 转 JPG 转换器",
    "schemaDescription": "无需上传文件至服务器，完全在浏览器中将 iPhone 的 HEIC 和 HEIF 照片转换为 JPG。",
    "badge": "纯浏览器工具",
    "h1Pre": "HEIC 转 JPG 转换器,",
    "h1Highlight": "100% 在浏览器中完成",
    "intro": "将您的 iPhone HEIC 照片拖放至此，数秒内即可获得 JPG 文件。整个转换过程在您自己的设备上运行，照片不会上传到任何地方。",
    "howTitle": "如何将 HEIC 转换为 JPG",
    "steps": [
      {
        "title": "拖放您的 HEIC 文件",
        "body": "直接从您的 iPhone、Mac Finder 或下载文件夹中拖入照片。支持多选。"
      },
      {
        "title": "在浏览器中转换",
        "body": "WebAssembly 解码器直接在您的设备上运行。没有文件会发送到服务器，您可以在 DevTools 中自行验证。"
      },
      {
        "title": "下载或托管",
        "body": "将 JPG 保存到您的设备，或点击「获取 URL」将其托管在我们的 CDN 上，获取可共享的链接。"
      }
    ],
    "whyTitle": "为什么要将 HEIC 转换为 JPG？",
    "whyItems": [
      {
        "title": "适用于 Windows",
        "body": "Windows 在没有付费编解码器的情况下无法打开 HEIC。JPG 可在任何 PC 上随时打开，无需额外设置。"
      },
      {
        "title": "Android 和即时通讯",
        "body": "许多 Android 手机和聊天应用仍难以处理 HEIC。JPG 在 WhatsApp、Messenger 和电子邮件中均可正常使用。"
      },
      {
        "title": "网页和社交媒体",
        "body": "大多数博客、CMS 和旧版社交平台拒绝上传 HEIC。先转换以避免上传错误。"
      },
      {
        "title": "默认隐私保护",
        "body": "其他转换器会将您的照片上传到其服务器。此工具不会。您的文件全程保留在您的设备上。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我的照片真的是私密的吗？",
        "a": "是的。转换完全在您的浏览器中进行，因此您的 HEIC 照片永远不会离开您的电脑或手机。除非您选择使用「获取 URL」托管文件，否则不会上传任何内容。"
      },
      {
        "q": "什么是 HEIC？",
        "a": "HEIC 是 iPhone 用于保存照片的格式。它节省存储空间，但许多应用程序、Windows PC 和网站无法打开它。将 HEIC 转换为 JPG 可让您的照片在任何地方都能使用。"
      },
      {
        "q": "如何在 iPhone、Windows 或 Mac 上将 HEIC 转换为 JPG？",
        "a": "每台设备的操作方式相同。打开此页面，将 HEIC 文件拖入方框，然后下载 JPG。它可在任何现代浏览器中运行，因此在 Windows、Mac、iPhone 或 Android 上无需安装任何东西。"
      },
      {
        "q": "将 HEIC 转换为 JPG 会损失画质吗？",
        "a": "几乎没有明显损失。您可以将画质滑块调至 92，获得清晰、全分辨率的 JPG，效果与原图相同。"
      },
      {
        "q": "这真的是免费的吗？",
        "a": "是的，完全免费，无需注册，没有文件数量限制。随时转换任意数量的照片。"
      }
    ],
    "ctaTitle": "还需要一个永久 URL 吗？",
    "ctaBody": "转换后，点击任意文件上的「获取 URL」，即可将其托管在我们的全球 CDN 上 — 免费，无需注册。",
    "ctaButton": "试用主上传器"
  },
} as LandingContentMap;
