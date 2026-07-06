import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "PNG to JPG Converter | Free, Private, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "jpg-to-png", "label": "JPG to PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convert to JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG to JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG to JPEG" }
    ],
    "metaDescription": "Convert PNG to JPG free, right in your browser. Smaller files with no upload and no watermark. Works on Windows, Mac, and iPhone, no signup.",
    "schemaName": "PNG to JPG Converter",
    "schemaDescription": "Convert PNG images to JPG entirely in your browser. Files never leave your device.",
    "badge": "Browser-only Tool",
    "h1Pre": "PNG to JPG Converter,",
    "h1Highlight": "Runs on Your Device",
    "intro": "Drop your PNG files and get JPGs back in a few seconds. The new files are much smaller and open anywhere, which makes them easy to email, attach to a form, or upload to a listing. One thing to know up front: JPG has no transparency, so any see-through areas in a PNG turn solid, white by default. The conversion runs on your device with no upload, no signup, and no watermark, and you can grab a shareable https link to any result if you want one.",
    "howTitle": "How to convert PNG to JPG",
    "steps": [
      {
        "title": "Drop PNG files",
        "body": "Drag files from Finder, your desktop, Downloads, or a folder. Select as many as you want and they convert one by one."
      },
      {
        "title": "Convert locally",
        "body": "Your browser decodes the PNG, fills any transparent areas with white, and re-encodes it as JPG using the canvas API. No files are sent to a server."
      },
      {
        "title": "Download or host",
        "body": "Save the JPG to your device, or click 'Get URL' to host it on our CDN and copy a permanent link."
      }
    ],
    "whyTitle": "Why convert PNG to JPG?",
    "whyItems": [
      {
        "title": "5–10× smaller files",
        "body": "PNG photos are needlessly large. A JPG at 92% quality is a fraction of the size with no visible difference."
      },
      {
        "title": "Email attachments",
        "body": "Gmail's 25 MB cap kills big PNG batches. Convert first and send ten times as many photos in one email."
      },
      {
        "title": "Marketplaces & listings",
        "body": "eBay, Depop, Etsy, Facebook Marketplace, and OLX recompress anything you upload. Sending PNG just wastes bandwidth."
      },
      {
        "title": "Strips EXIF by default",
        "body": "Re-encoding drops the embedded metadata, which is handy when you share screenshots that might contain file paths."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Does this upload my PNG files?",
        "a": "No. The conversion runs entirely in your browser, so your PNG files never leave your device. They only get uploaded if you click 'Get URL' to host one."
      },
      {
        "q": "Why does my transparent PNG come out with a white background?",
        "a": "JPG doesn't support transparency, so any transparent areas are filled with white during conversion. If you need to keep transparency, save as PNG instead."
      },
      {
        "q": "Will the JPG be smaller than the PNG?",
        "a": "Almost always. For photos, a JPG is often 5 to 10 times smaller than the same PNG, with no visible drop in quality."
      },
      {
        "q": "Is there a file-size or file-count limit?",
        "a": "No fixed limit. Drop a whole folder of PNG files and they convert one after another, right in your browser."
      },
      {
        "q": "What quality setting should I use?",
        "a": "92 is a good default. It keeps the image sharp while making the file much smaller. Lower it if you want an even smaller file."
      },
      {
        "q": "Does this preserve my PNG's EXIF or metadata?",
        "a": "No. Re-encoding drops the metadata. That is usually a good thing for privacy when sharing screenshots."
      },
      {
        "q": "Can I convert PNG screenshots this way?",
        "a": "Yes. Screenshots convert the same as any other PNG, and the JPG is a lot smaller for sharing."
      },
      {
        "q": "How do I convert PNG to JPG on Windows, Mac, or iPhone?",
        "a": "It works in any modern browser on Windows, Mac, and iPhone. Just open the page, drop your PNG files, and download the JPGs. There is nothing to install."
      },
      {
        "q": "Is converting PNG to JPG lossy?",
        "a": "Yes. JPG uses lossy compression, so a small amount of detail is dropped to make the file tiny. At quality 92 the loss is invisible on photos. For text, logos, or sharp lines, PNG keeps the edges cleaner, so keep those as PNG."
      },
      {
        "q": "Does converting change the image's resolution?",
        "a": "No. The pixel dimensions stay exactly the same. Only the file size shrinks, because JPG packs the same picture into far fewer bytes than PNG."
      },
      {
        "q": "Can I pick a background color other than white?",
        "a": "Transparent areas are filled with white here. If you need a different matte color behind the image, set that background in an editor first, then convert the flattened PNG to JPG."
      },
      {
        "q": "Should I keep the original PNG?",
        "a": "If the image is a logo, icon, or screenshot with text, keep the PNG as your master copy and use the JPG only for sharing. For ordinary photos the JPG is fine on its own."
      }
    ],
    "ctaTitle": "Want a permanent link to the JPG?",
    "ctaBody": "After converting, click 'Get URL' on any file to host it on our CDN. Free, no signup, no expiry.",
    "ctaButton": "Try the main uploader",
    "specsTitle": "PNG to JPG at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input format", "value": "PNG" },
      { "label": "Output format", "value": "JPG" },
      { "label": "Max size to host", "value": "50 MB" }
    ],
    "comparisonTitle": "PNG, JPG and WebP compared",
    "comparisonIntro": "PNG and JPG solve different problems, and WebP tries to cover both. Here is how the common web formats line up so you can pick the right one before you convert.",
    "comparisonColumns": [
      "Format",
      "Compression",
      "Transparency",
      "Typical file size",
      "Browser support",
      "Best for"
    ],
    "comparisonRows": [
      { "cells": ["PNG", "Lossless", "Yes, full alpha", "Large", "All browsers", "Logos, screenshots, line art"] },
      { "cells": ["JPG", "Lossy", "No", "Small", "All browsers", "Photos, email, listings"] },
      { "cells": ["WebP", "Lossy or lossless", "Yes", "Smallest at the same quality", "All current browsers", "Modern web pages"] },
      { "cells": ["GIF", "Lossless, 256 colors", "Yes, 1-bit", "Small for simple art", "All browsers", "Short animations, simple graphics"] }
    ],
    "useCasesTitle": "When PNG to JPG is the right move",
    "useCasesIntro": "Reach for a JPG whenever file size matters more than a transparent background:",
    "useCases": [
      {
        "title": "Sending photos by email",
        "body": "A folder of phone photos saved as PNG can blow past Gmail's 25 MB cap fast. As JPGs the same set drops to a few megabytes, so it all fits in one message."
      },
      {
        "title": "Uploading to listings and forms",
        "body": "eBay, Etsy, Facebook Marketplace and most web forms re-compress images on their end anyway. Handing them a slim JPG uploads faster and skips the wasted bandwidth of a heavy PNG."
      },
      {
        "title": "Shrinking screenshots",
        "body": "Screenshots saved as PNG are surprisingly large because of all the flat color. Convert to JPG when you just need to show what is on screen and don't need crisp text."
      }
    ],
    "sections": [
      {
        "heading": "JPG vs PNG: which should you use?",
        "body": "Pick JPG for photographs and any image with smooth color gradients. Its lossy compression drops detail your eye won't miss, and the files come out small. Pick PNG for logos, icons, screenshots with text, and anything that needs a transparent background or razor-sharp edges. PNG keeps every pixel exactly, which is why those files are bigger. A quick rule: if the image came from a camera, JPG is fine; if it has flat color, hard lines, or transparency, leave it as PNG. Converting PNG to JPG is the right call when the picture is photographic and you mainly care about size."
      },
      {
        "heading": "Why is my PNG file so large?",
        "body": "PNG stores every pixel with no loss, so a detailed photo can run 5 to 10 times bigger than the same shot as JPG. Phone screenshots and exports from design tools often default to PNG too, which is why a simple grab can land at several megabytes. That size is worth paying for graphics with sharp edges or transparency, but for an ordinary photo it is mostly wasted bytes. Converting to JPG re-compresses the image at a quality setting (around 92 works well), which cuts the file down sharply while it still looks clean to the eye."
      },
      {
        "heading": "What happens to transparency?",
        "body": "JPG has no alpha channel, so it cannot store transparency at all. When you convert a PNG with see-through areas, those pixels have to become a solid color. This tool fills them with white, the safe default for most photos and screenshots. If your image is a logo or sticker meant to sit on a colored background, that white fill will show as a boxy edge, so keep it as a PNG or set a matching background color in an editor before converting. For plain photos there is nothing transparent to lose, so the fill never comes into play."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Convertidor de PNG a JPG | Gratis, privado, sin subidas",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "jpg-to-png", "label": "JPG a PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir a JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG a JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG a JPEG" }
    ],
    "metaDescription": "Convierte PNG a JPG gratis directamente en tu navegador. Archivos más pequeños sin subidas ni marcas de agua. Funciona en Windows, Mac y iPhone, sin registro.",
    "schemaName": "Convertidor de PNG a JPG",
    "schemaDescription": "Convierte imágenes PNG a JPG completamente en tu navegador. Los archivos nunca salen de tu dispositivo.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "Convertidor de PNG a JPG,",
    "h1Highlight": "ejecutado en tu dispositivo",
    "intro": "Suelta tus archivos PNG y obtén JPG en segundos. Son más pequeños y funcionan en todas partes, listos para enviar por correo o subir a la web. La conversión se realiza en tu dispositivo, sin subidas, sin registro y sin marcas de agua.",
    "howTitle": "Cómo convertir PNG a JPG",
    "steps": [
      {
        "title": "Suelta archivos PNG",
        "body": "Arrastra archivos desde el Finder, tu escritorio, Descargas o cualquier carpeta. Selecciona tantos como quieras y se convertirán uno a uno."
      },
      {
        "title": "Convierte localmente",
        "body": "Tu navegador decodifica el PNG, rellena las áreas transparentes con blanco y lo vuelve a codificar como JPG usando la API canvas. No se envían archivos a ningún servidor."
      },
      {
        "title": "Descarga o aloja",
        "body": "Guarda el JPG en tu dispositivo o haz clic en 'Obtener URL' para alojarlo en nuestra CDN y copiar un enlace permanente."
      }
    ],
    "whyTitle": "¿Por qué convertir PNG a JPG?",
    "whyItems": [
      {
        "title": "Archivos 5-10 veces más pequeños",
        "body": "Las fotos PNG son innecesariamente grandes. Un JPG al 92% de calidad es una fracción del tamaño sin diferencia visible."
      },
      {
        "title": "Adjuntos de correo electrónico",
        "body": "El límite de 25 MB de Gmail bloquea lotes grandes de PNG. Convierte primero y envía diez veces más fotos en un solo correo."
      },
      {
        "title": "Marketplaces y listados",
        "body": "eBay, Depop, Etsy, Facebook Marketplace y OLX recomprimen todo lo que subes. Enviar PNG solo desperdicia ancho de banda."
      },
      {
        "title": "Elimina EXIF por defecto",
        "body": "La recodificación elimina los metadatos incrustados, lo cual es útil al compartir capturas de pantalla que podrían contener rutas de archivos."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Esto sube mis archivos PNG?",
        "a": "No. La conversión se ejecuta completamente en tu navegador, por lo que tus archivos PNG nunca salen de tu dispositivo. Solo se suben si haces clic en 'Obtener URL' para alojar uno."
      },
      {
        "q": "¿Por qué mi PNG transparente sale con un fondo blanco?",
        "a": "JPG no admite transparencia, por lo que cualquier área transparente se rellena con blanco durante la conversión. Si necesitas mantener la transparencia, guarda como PNG."
      },
      {
        "q": "¿El JPG será más pequeño que el PNG?",
        "a": "Casi siempre. Para fotos, un JPG suele ser de 5 a 10 veces más pequeño que el mismo PNG, sin pérdida visible de calidad."
      },
      {
        "q": "¿Hay un límite de tamaño o cantidad de archivos?",
        "a": "No hay límite fijo. Suelta una carpeta entera de archivos PNG y se convertirán uno tras otro, directamente en tu navegador."
      },
      {
        "q": "¿Qué configuración de calidad debo usar?",
        "a": "92 es un buen valor predeterminado. Mantiene la imagen nítida mientras reduce significativamente el tamaño del archivo. Bájalo si quieres un archivo aún más pequeño."
      },
      {
        "q": "¿Esto conserva el EXIF o metadatos de mi PNG?",
        "a": "No. La recodificación elimina los metadatos. Eso suele ser bueno para la privacidad al compartir capturas de pantalla."
      },
      {
        "q": "¿Puedo convertir capturas de pantalla PNG de esta manera?",
        "a": "Sí. Las capturas de pantalla se convierten igual que cualquier otro PNG, y el JPG es mucho más pequeño para compartir."
      },
      {
        "q": "¿Cómo convierto PNG a JPG en Windows, Mac o iPhone?",
        "a": "Funciona en cualquier navegador moderno en Windows, Mac y iPhone. Solo abre la página, suelta tus archivos PNG y descarga los JPG. No hay nada que instalar."
      }
    ],
    "ctaTitle": "¿Quieres un enlace permanente al JPG?",
    "ctaBody": "Después de convertir, haz clic en 'Obtener URL' en cualquier archivo para alojarlo en nuestra CDN. Gratis, sin registro, sin caducidad.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur PNG en JPG | Gratuit, privé, sans téléchargement",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "jpg-to-png", "label": "JPG vers PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir en JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG vers JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG vers JPEG" }
    ],
    "metaDescription": "Convertissez vos PNG en JPG gratuitement, directement dans votre navigateur. Des fichiers plus légers, sans envoi sur serveur et sans filigrane. Fonctionne sur Windows, Mac et iPhone, sans inscription.",
    "schemaName": "Convertisseur PNG en JPG",
    "schemaDescription": "Convertissez vos images PNG en JPG entièrement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur PNG en JPG,",
    "h1Highlight": "exécuté sur votre appareil",
    "intro": "Déposez vos fichiers PNG et obtenez des JPG en quelques secondes. Ils sont plus légers, compatibles partout et prêts à être envoyés par e-mail ou publiés. La conversion s'effectue localement, sans envoi, sans inscription et sans filigrane.",
    "howTitle": "Comment convertir un PNG en JPG",
    "steps": [
      {
        "title": "Déposez vos fichiers PNG",
        "body": "Faites glisser vos fichiers depuis le Finder, votre bureau, vos téléchargements ou un dossier. Sélectionnez-en autant que vous le souhaitez, ils seront convertis un par un."
      },
      {
        "title": "Conversion locale",
        "body": "Votre navigateur décode le PNG, remplit les zones transparentes avec du blanc et ré-encode le tout en JPG via l'API canvas. Aucun fichier n'est envoyé sur un serveur."
      },
      {
        "title": "Téléchargez ou hébergez",
        "body": "Enregistrez le JPG sur votre appareil ou cliquez sur 'Obtenir l'URL' pour l'héberger sur notre CDN et copier un lien permanent."
      }
    ],
    "whyTitle": "Pourquoi convertir un PNG en JPG ?",
    "whyItems": [
      {
        "title": "Fichiers 5 à 10 fois plus légers",
        "body": "Les photos PNG sont inutilement lourdes. Un JPG à 92% de qualité occupe une fraction de la taille sans perte visuelle notable."
      },
      {
        "title": "Pièces jointes par e-mail",
        "body": "La limite de 25 Mo de Gmail bloque souvent les gros lots de PNG. Convertissez-les d'abord pour envoyer dix fois plus de photos dans un seul e-mail."
      },
      {
        "title": "Marketplaces et annonces",
        "body": "eBay, Depop, Etsy, Facebook Marketplace et OLX recompressent tout ce que vous publiez. Envoyer du PNG est un gaspillage de bande passante."
      },
      {
        "title": "Suppression automatique des EXIF",
        "body": "Le ré-encodage supprime les métadonnées intégrées, ce qui est pratique lorsque vous partagez des captures d'écran pouvant contenir des chemins de fichiers."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Mes fichiers PNG sont-ils envoyés sur un serveur ?",
        "a": "Non. La conversion s'effectue entièrement dans votre navigateur, vos fichiers ne quittent jamais votre appareil. Ils ne sont envoyés que si vous cliquez sur 'Obtenir l'URL' pour en héberger un."
      },
      {
        "q": "Pourquoi mon PNG transparent devient-il blanc ?",
        "a": "Le format JPG ne gère pas la transparence ; les zones transparentes sont donc remplies de blanc lors de la conversion. Si vous devez conserver la transparence, enregistrez en PNG."
      },
      {
        "q": "Le JPG sera-t-il plus léger que le PNG ?",
        "a": "Presque toujours. Pour les photos, un JPG est souvent 5 à 10 fois plus léger qu'un PNG équivalent, sans baisse de qualité visible."
      },
      {
        "q": "Y a-t-il une limite de taille ou de nombre de fichiers ?",
        "a": "Aucune limite fixe. Déposez un dossier entier de PNG et ils seront convertis les uns après les autres, directement dans votre navigateur."
      },
      {
        "q": "Quel réglage de qualité utiliser ?",
        "a": "92 est un bon réglage par défaut. Il conserve la netteté de l'image tout en réduisant considérablement la taille du fichier. Diminuez cette valeur pour un fichier encore plus léger."
      },
      {
        "q": "Les métadonnées EXIF sont-elles conservées ?",
        "a": "Non. Le ré-encodage supprime les métadonnées. C'est généralement un avantage pour la confidentialité lors du partage de captures d'écran."
      },
      {
        "q": "Puis-je convertir des captures d'écran PNG ?",
        "a": "Oui. Les captures d'écran se convertissent comme n'importe quel autre PNG, et le JPG sera beaucoup plus léger pour le partage."
      },
      {
        "q": "Comment convertir un PNG en JPG sur Windows, Mac ou iPhone ?",
        "a": "Cela fonctionne dans n'importe quel navigateur moderne sur Windows, Mac et iPhone. Ouvrez simplement la page, déposez vos fichiers PNG et téléchargez les JPG. Rien à installer."
      }
    ],
    "ctaTitle": "Besoin d'un lien permanent pour votre JPG ?",
    "ctaBody": "Après la conversion, cliquez sur 'Obtenir l'URL' sur n'importe quel fichier pour l'héberger sur notre CDN. Gratuit, sans inscription, sans expiration.",
    "ctaButton": "Essayer l'outil de conversion"
  },
  "de": {
    "metaTitle": "PNG in JPG umwandeln | Kostenlos, privat, kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "jpg-to-png", "label": "JPG zu PNG" },
      { "pageKey": "convert-to-jpg", "label": "Zu JPG konvertieren" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG zu JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG zu JPEG" }
    ],
    "metaDescription": "Wandeln Sie PNG in JPG kostenlos direkt in Ihrem Browser um. Kleinere Dateien ohne Upload und ohne Wasserzeichen. Funktioniert auf Windows, Mac und iPhone, keine Registrierung.",
    "schemaName": "PNG in JPG Konverter",
    "schemaDescription": "Wandeln Sie PNG-Bilder vollständig in Ihrem Browser in JPG um. Dateien verlassen niemals Ihr Gerät.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "PNG in JPG umwandeln,",
    "h1Highlight": "läuft direkt auf Ihrem Gerät",
    "intro": "Ziehen Sie Ihre PNG-Dateien per Drag-and-Drop hinein und erhalten Sie in Sekunden JPGs. Diese sind kleiner, universell einsetzbar und bereit für E-Mails oder Uploads. Die Konvertierung erfolgt lokal auf Ihrem Gerät – ohne Upload, ohne Registrierung und ohne Wasserzeichen.",
    "howTitle": "So wandeln Sie PNG in JPG um",
    "steps": [
      {
        "title": "PNG-Dateien ablegen",
        "body": "Ziehen Sie Dateien aus dem Finder, von Ihrem Desktop, aus dem Download-Ordner oder einem beliebigen Verzeichnis. Wählen Sie beliebig viele Dateien aus, die nacheinander konvertiert werden."
      },
      {
        "title": "Lokal konvertieren",
        "body": "Ihr Browser dekodiert das PNG, füllt transparente Bereiche mit Weiß und kodiert es mittels Canvas-API als JPG neu. Es werden keine Dateien an einen Server gesendet."
      },
      {
        "title": "Herunterladen oder hosten",
        "body": "Speichern Sie das JPG auf Ihrem Gerät oder klicken Sie auf 'URL abrufen', um es auf unserem CDN zu hosten und einen permanenten Link zu kopieren."
      }
    ],
    "whyTitle": "Warum PNG in JPG umwandeln?",
    "whyItems": [
      {
        "title": "5–10× kleinere Dateien",
        "body": "PNG-Fotos sind unnötig groß. Ein JPG bei 92 % Qualität ist nur ein Bruchteil der Größe, ohne sichtbaren Qualitätsverlust."
      },
      {
        "title": "E-Mail-Anhänge",
        "body": "Das 25-MB-Limit von Gmail macht großen PNG-Sammlungen oft einen Strich durch die Rechnung. Konvertieren Sie zuerst und versenden Sie zehnmal so viele Fotos in einer E-Mail."
      },
      {
        "title": "Marktplätze & Anzeigen",
        "body": "eBay, Depop, Etsy, Facebook Marketplace und OLX komprimieren hochgeladene Bilder ohnehin neu. PNG zu senden verschwendet nur Bandbreite."
      },
      {
        "title": "Entfernt standardmäßig EXIF-Daten",
        "body": "Durch die Neukodierung werden eingebettete Metadaten entfernt – praktisch, wenn Sie Screenshots teilen, die möglicherweise Dateipfade enthalten."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Werden meine PNG-Dateien hochgeladen?",
        "a": "Nein. Die Konvertierung erfolgt vollständig in Ihrem Browser, sodass Ihre PNG-Dateien Ihr Gerät niemals verlassen. Sie werden nur hochgeladen, wenn Sie auf 'URL abrufen' klicken, um eine Datei zu hosten."
      },
      {
        "q": "Warum hat mein transparentes PNG einen weißen Hintergrund?",
        "a": "JPG unterstützt keine Transparenz, daher werden transparente Bereiche während der Konvertierung mit Weiß gefüllt. Wenn Sie Transparenz beibehalten müssen, speichern Sie das Bild als PNG."
      },
      {
        "q": "Ist das JPG kleiner als das PNG?",
        "a": "Fast immer. Bei Fotos ist ein JPG oft 5 bis 10 Mal kleiner als das entsprechende PNG, ohne sichtbaren Qualitätsverlust."
      },
      {
        "q": "Gibt es ein Limit für Dateigröße oder Anzahl?",
        "a": "Es gibt kein festes Limit. Ziehen Sie einen ganzen Ordner mit PNG-Dateien hinein; sie werden nacheinander direkt in Ihrem Browser konvertiert."
      },
      {
        "q": "Welche Qualitätseinstellung sollte ich verwenden?",
        "a": "92 ist ein guter Standardwert. Das Bild bleibt scharf, während die Datei deutlich kleiner wird. Verringern Sie den Wert, wenn Sie eine noch kleinere Datei wünschen."
      },
      {
        "q": "Bleiben EXIF- oder Metadaten erhalten?",
        "a": "Nein. Die Neukodierung entfernt die Metadaten. Das ist beim Teilen von Screenshots meist ein Vorteil für den Datenschutz."
      },
      {
        "q": "Kann ich auch PNG-Screenshots so konvertieren?",
        "a": "Ja. Screenshots werden genauso konvertiert wie jedes andere PNG, und das resultierende JPG ist deutlich kleiner und einfacher zu teilen."
      },
      {
        "q": "Wie konvertiere ich PNG in JPG unter Windows, Mac oder iPhone?",
        "a": "Es funktioniert in jedem modernen Browser auf Windows, Mac und iPhone. Öffnen Sie einfach die Seite, ziehen Sie Ihre PNG-Dateien hinein und laden Sie die JPGs herunter. Es muss nichts installiert werden."
      }
    ],
    "ctaTitle": "Benötigen Sie einen permanenten Link zum JPG?",
    "ctaBody": "Klicken Sie nach der Konvertierung bei einer beliebigen Datei auf 'URL abrufen', um sie auf unserem CDN zu hosten. Kostenlos, ohne Registrierung, ohne Ablaufdatum.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "PNG JPG 変換 | 無料・プライバシー保護・アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "jpg-to-png", "label": "JPG→PNG" },
      { "pageKey": "convert-to-jpg", "label": "JPG変換" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG→JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG→JPEG" }
    ],
    "metaDescription": "ブラウザ上でPNGをJPGに無料で変換。アップロード不要、透かしなしでファイルサイズを軽量化。Windows、Mac、iPhoneに対応、登録も不要です。",
    "schemaName": "PNG JPG 変換ツール",
    "schemaDescription": "ブラウザ上でPNG画像をJPGに変換。ファイルはデバイスから一切外部へ送信されません。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "PNG JPG 変換、",
    "h1Highlight": "デバイス内で高速処理",
    "intro": "PNGファイルをドラッグ＆ドロップするだけで、数秒でJPGに変換。ファイルサイズが小さくなり、メール添付やアップロードに最適です。変換はデバイス内で行われるため、アップロードや登録、透かしの挿入は一切ありません。",
    "howTitle": "PNGからJPGへの変換方法",
    "steps": [
      {
        "title": "PNGファイルをドロップ",
        "body": "Finderやデスクトップ、ダウンロードフォルダからファイルをドラッグします。複数選択すれば、順番に変換されます。"
      },
      {
        "title": "ローカルで変換",
        "body": "ブラウザがPNGをデコードし、透明部分を白で塗りつぶしてCanvas APIでJPGとして再エンコードします。サーバーへファイルは送信されません。"
      },
      {
        "title": "ダウンロードまたはホスト",
        "body": "JPGをデバイスに保存するか、「URLを取得」をクリックしてCDNでホストし、永続リンクをコピーできます。"
      }
    ],
    "whyTitle": "なぜPNGをJPGに変換するのか？",
    "whyItems": [
      {
        "title": "ファイルサイズが5〜10倍小さくなる",
        "body": "PNG写真は不必要に大容量です。92%の品質のJPGなら、見た目の違いはほとんどなく、サイズを大幅に削減できます。"
      },
      {
        "title": "メール添付に最適",
        "body": "Gmailの25MB制限も、変換すれば解決。一度に10倍以上の写真をメールで送れるようになります。"
      },
      {
        "title": "マーケットプレイスや出品サイト",
        "body": "eBay、Depop、Etsy、Facebook Marketplace、OLXなどはアップロード時に再圧縮されます。PNGを送るのは帯域の無駄です。"
      },
      {
        "title": "EXIF情報を自動削除",
        "body": "再エンコードにより埋め込まれたメタデータが削除されます。ファイルパスが含まれる可能性のあるスクリーンショットの共有時に便利です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "PNGファイルはアップロードされますか？",
        "a": "いいえ。変換はすべてブラウザ内で行われるため、PNGファイルがデバイスから外部へ出ることはありません。「URLを取得」をクリックしてホストする場合のみアップロードされます。"
      },
      {
        "q": "透明なPNGが白背景になるのはなぜですか？",
        "a": "JPGは透明度をサポートしていないため、変換時に透明部分が白で塗りつぶされます。透明度を保持したい場合はPNGのまま保存してください。"
      },
      {
        "q": "JPGはPNGより小さくなりますか？",
        "a": "ほぼ確実に小さくなります。写真の場合、JPGは同じPNGの5〜10分の1のサイズになり、画質の劣化もほとんど目立ちません。"
      },
      {
        "q": "ファイルサイズや枚数に制限はありますか？",
        "a": "固定の制限はありません。フォルダごとドラッグ＆ドロップすれば、ブラウザ上で次々と変換されます。"
      },
      {
        "q": "品質設定は何が良いですか？",
        "a": "92が推奨設定です。画質を鮮明に保ちつつ、ファイルサイズを大幅に削減できます。さらに小さくしたい場合は数値を下げてください。"
      },
      {
        "q": "PNGのEXIFやメタデータは保持されますか？",
        "a": "いいえ。再エンコードによりメタデータは削除されます。スクリーンショットを共有する際のプライバシー保護の観点からは、通常これが望ましい動作です。"
      },
      {
        "q": "PNGのスクリーンショットも変換できますか？",
        "a": "はい。スクリーンショットも他のPNGと同様に変換でき、共有用にJPG化することでサイズを大幅に軽量化できます。"
      },
      {
        "q": "Windows、Mac、iPhoneで変換するには？",
        "a": "Windows、Mac、iPhoneの最新ブラウザであればどれでも動作します。ページを開いてPNGをドロップし、JPGをダウンロードするだけです。インストールは不要です。"
      }
    ],
    "ctaTitle": "JPGの永続リンクが必要ですか？",
    "ctaBody": "変換後、各ファイルの「URLを取得」をクリックするとCDNでホストできます。無料、登録不要、期限なしです。",
    "ctaButton": "変換ツールを試す"
  },
  "zh-Hans": {
    "metaTitle": "PNG 转 JPG 转换器 | 免费、隐私、无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "jpg-to-png", "label": "JPG 转 PNG" },
      { "pageKey": "convert-to-jpg", "label": "转换为 JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG 转 JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG 转 JPEG" }
    ],
    "metaDescription": "直接在浏览器中免费将 PNG 转换为 JPG。文件更小，无需上传，无水印。适用于 Windows、Mac 和 iPhone，无需注册。",
    "schemaName": "PNG 转 JPG 转换器",
    "schemaDescription": "完全在您的浏览器中将 PNG 图像转换为 JPG。文件绝不会离开您的设备。",
    "badge": "纯浏览器工具",
    "h1Pre": "PNG 转 JPG 转换器，",
    "h1Highlight": "在您的设备上运行",
    "intro": "拖放您的 PNG 文件，几秒钟即可获得 JPG。转换后的文件更小，兼容性更强，随时可用于电子邮件或上传。转换过程完全在您的设备上运行，无需上传、无需注册、无水印。",
    "howTitle": "如何将 PNG 转换为 JPG",
    "steps": [
      {
        "title": "拖放 PNG 文件",
        "body": "从 Finder、桌面、下载文件夹或任何文件夹中拖入文件。您可以根据需要选择任意数量的文件，它们将逐一转换。"
      },
      {
        "title": "本地转换",
        "body": "您的浏览器会解码 PNG，将透明区域填充为白色，并使用 canvas API 将其重新编码为 JPG。没有任何文件会被发送到服务器。"
      },
      {
        "title": "下载或托管",
        "body": "将 JPG 保存到您的设备，或点击“获取 URL”将其托管在我们的 CDN 上并复制永久链接。"
      }
    ],
    "whyTitle": "为什么要将 PNG 转换为 JPG？",
    "whyItems": [
      {
        "title": "文件缩小 5–10 倍",
        "body": "PNG 照片通常过大。92% 质量的 JPG 文件大小仅为原图的一小部分，且视觉上几乎没有差异。"
      },
      {
        "title": "电子邮件附件",
        "body": "Gmail 的 25 MB 限制经常导致大批量 PNG 无法发送。先转换再发送，一封邮件可以多发十倍的照片。"
      },
      {
        "title": "电商平台与列表",
        "body": "eBay、Depop、Etsy、Facebook Marketplace 和 OLX 会对您上传的任何内容进行二次压缩。发送 PNG 只是浪费带宽。"
      },
      {
        "title": "默认移除 EXIF 信息",
        "body": "重新编码会丢弃嵌入的元数据，这在分享可能包含文件路径的截图时非常有用。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "这会上传我的 PNG 文件吗？",
        "a": "不会。转换完全在您的浏览器中运行，因此您的 PNG 文件永远不会离开您的设备。只有当您点击“获取 URL”进行托管时，文件才会被上传。"
      },
      {
        "q": "为什么我的透明 PNG 转换后背景变成了白色？",
        "a": "JPG 不支持透明度，因此在转换过程中，任何透明区域都会被填充为白色。如果您需要保留透明度，请保存为 PNG。"
      },
      {
        "q": "JPG 会比 PNG 更小吗？",
        "a": "几乎总是如此。对于照片，JPG 通常比相同的 PNG 小 5 到 10 倍，且质量没有明显下降。"
      },
      {
        "q": "有文件大小或数量限制吗？",
        "a": "没有固定限制。直接拖入整个文件夹的 PNG 文件，它们会在您的浏览器中依次完成转换。"
      },
      {
        "q": "我应该使用什么质量设置？",
        "a": "92 是一个不错的默认值。它既能保持图像清晰，又能显著减小文件大小。如果您想要更小的文件，可以调低该数值。"
      },
      {
        "q": "这会保留我的 PNG 的 EXIF 或元数据吗？",
        "a": "不会。重新编码会丢弃元数据。在分享截图时，这通常对保护隐私很有帮助。"
      },
      {
        "q": "我可以用这种方式转换 PNG 截图吗？",
        "a": "可以。截图的转换方式与其他 PNG 相同，转换后的 JPG 更适合分享。"
      },
      {
        "q": "如何在 Windows、Mac 或 iPhone 上将 PNG 转换为 JPG？",
        "a": "它适用于 Windows、Mac 和 iPhone 上的任何现代浏览器。只需打开页面，拖入您的 PNG 文件，然后下载 JPG 即可。无需安装任何软件。"
      }
    ],
    "ctaTitle": "想要 JPG 的永久链接？",
    "ctaBody": "转换后，点击任意文件上的“获取 URL”即可将其托管在我们的 CDN 上。免费、无需注册、永不过期。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
