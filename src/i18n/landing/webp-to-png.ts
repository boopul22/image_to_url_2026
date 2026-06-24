import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "WebP to PNG Converter | Free, Lossless, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "png-to-webp", "label": "PNG to WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG to WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC to PNG" }
    ],
    "metaDescription": "Convert WebP to PNG free in your browser with transparency and full quality kept. No upload, no signup. Works on Windows, Mac, and iPhone.",
    "schemaName": "WebP to PNG Converter",
    "schemaDescription": "Convert WebP images to PNG losslessly in your browser, preserving transparency.",
    "badge": "Browser-only Tool",
    "h1Pre": "WebP to PNG Converter,",
    "h1Highlight": "Transparency Intact",
    "intro": "Got a WebP graphic with a transparent background that you need as a PNG? This converter rebuilds the file as a true PNG in your browser, with the alpha channel intact and no quality lost along the way. Nothing is uploaded, so logos, stickers and screenshots stay on your device. When you do want to share the result, one click hosts the PNG and hands you a link.",
    "howTitle": "How to convert WebP to PNG",
    "steps": [
      {
        "title": "Drop WebP files",
        "body": "Drag .webp files into the drop zone."
      },
      {
        "title": "Browser re-encodes losslessly",
        "body": "Your browser decodes the WebP and writes a PNG with the transparency kept. Nothing is sent to a server."
      },
      {
        "title": "Download PNG",
        "body": "Click Download on each PNG, or click 'Get URL' to host it."
      }
    ],
    "whyTitle": "Why convert WebP to PNG?",
    "whyItems": [
      {
        "title": "Transparency preserved",
        "body": "PNG keeps the same transparency that WebP uses, so nothing gets a white box behind it."
      },
      {
        "title": "Lossless pixels",
        "body": "No extra compression loss is added on top of the WebP."
      },
      {
        "title": "Editor compatibility",
        "body": "Every design tool accepts PNG."
      },
      {
        "title": "Archival fidelity",
        "body": "PNG is a safer long-term archive format than WebP."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Does this preserve transparency?",
        "a": "Yes. Transparent areas in the WebP stay transparent in the PNG, with no white background added."
      },
      {
        "q": "Is the PNG lossless?",
        "a": "Yes. The PNG is written without any extra compression, so it keeps every pixel the WebP had."
      },
      {
        "q": "Why is the PNG so much larger?",
        "a": "PNG is lossless and stores every pixel, so it is usually bigger than the compressed WebP. You get a full-quality, editable file in return."
      },
      {
        "q": "Are my files uploaded?",
        "a": "No. The conversion runs in your browser. Your files only leave your device if you click 'Get URL' to host one."
      },
      {
        "q": "Any batch limit?",
        "a": "No fixed limit. Drop a whole folder of WebP files and they convert one after another, right in your browser."
      },
      {
        "q": "Animated WebPs?",
        "a": "An animated WebP saves as a single still frame, since PNG can't hold animation. Use a GIF if you need motion."
      },
      {
        "q": "Is metadata preserved?",
        "a": "No. Re-encoding drops the EXIF metadata, which also helps with privacy."
      },
      {
        "q": "Why convert instead of just renaming?",
        "a": "Renaming a .webp file to .png doesn't change what's inside, so apps still reject it. This tool actually rewrites the image as a real PNG."
      },
      {
        "q": "How do I convert WebP to PNG on Windows, Mac, or iPhone?",
        "a": "It works in any modern browser on Windows, Mac, and iPhone. Drop your WebP files and download the PNGs. There is nothing to install."
      },
      {
        "q": "Is this WebP to PNG converter free?",
        "a": "Yes, fully free. There is no signup, no watermark, and no limit on how many files you convert."
      },
      {
        "q": "Can I convert multiple WebP files to PNG at once?",
        "a": "Yes. Drop or select several WebP files together and they convert to PNG one after another, so you can do a whole batch in one go."
      },
      {
        "q": "What is a WebP file, and why won't some apps open it?",
        "a": "WebP is a modern image format that makes small files and supports transparency. Browsers read it fine, but some design tools, older programs and upload forms don't accept it yet, so converting to PNG gets the image working in those places."
      },
      {
        "q": "Should I pick PNG or JPG?",
        "a": "Choose PNG when the image has a transparent background or needs to stay lossless, like a logo, icon or screenshot. Pick JPG instead for ordinary photos with no transparency, where a smaller file matters more than perfect pixels."
      }
    ],
    "specsTitle": "WebP to PNG at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input formats", "value": "WebP, with or without transparency" },
      { "label": "Output", "value": "PNG, lossless with alpha" },
      { "label": "Max size", "value": "No fixed limit, runs in your browser" }
    ],
    "comparisonTitle": "WebP, PNG and JPG compared",
    "comparisonIntro": "When a file has to keep a transparent background or stay pixel-perfect, the target format matters. Here is how PNG compares with WebP and the other common options, so it's clear why PNG is the safe pick for graphics.",
    "comparisonColumns": [
      "Format",
      "Compression",
      "Transparency",
      "Typical file size",
      "Best for"
    ],
    "comparisonRows": [
      { "cells": ["PNG", "Lossless", "Yes (full alpha)", "Large", "Logos, icons, screenshots"] },
      { "cells": ["WebP", "Lossy or lossless", "Yes", "Smallest", "Modern web pages"] },
      { "cells": ["JPG", "Lossy", "No", "Small", "Photos without transparency"] },
      { "cells": ["GIF", "Lossless, 256 colors", "Yes (1-bit)", "Small", "Simple animation"] },
      { "cells": ["SVG", "Vector, lossless", "Yes", "Tiny for flat art", "Logos and icons that scale"] }
    ],
    "useCasesTitle": "When WebP to PNG is the right call",
    "useCasesIntro": "PNG is the format to reach for whenever transparency or exact pixels matter:",
    "useCases": [
      {
        "title": "Logos and stickers with clear backgrounds",
        "body": "A transparent WebP becomes a transparent PNG, so the logo drops onto any color without a white rectangle around it."
      },
      {
        "title": "Design tools that want PNG",
        "body": "Some editors, slide tools and app pipelines accept PNG but not WebP. Converting first means the asset imports cleanly."
      },
      {
        "title": "Screenshots and UI mockups",
        "body": "PNG keeps sharp text and flat color with no compression smudging, which is why it's the standard for screenshots and interface art."
      }
    ],
    "sections": [
      {
        "heading": "Why choose PNG over JPG?",
        "body": "Both PNG and JPG open just about everywhere, so the choice comes down to what the image needs. PNG is lossless and keeps a full alpha channel, so transparent areas stay transparent and fine details like text edges stay crisp. JPG is smaller, but it is lossy and has no transparency, so a clear background turns into a solid color. For a logo, an icon, a sticker or a screenshot, PNG is the right target. For a plain photo with no transparency, JPG is fine and lighter. This tool gives you the lossless PNG route."
      },
      {
        "heading": "Does the transparency really survive?",
        "body": "Yes. The converter reads the alpha channel from the WebP and writes the same per-pixel transparency into the PNG, so there is no white box and no matte color added behind the image. A semi-transparent edge stays semi-transparent. The quickest way to check is to drop the PNG onto a colored background: if the see-through parts show that color through, the alpha came across correctly. If your WebP had no transparency to begin with, the PNG simply stays fully opaque, which is normal."
      },
      {
        "heading": "Why is the PNG bigger than the WebP?",
        "body": "This is expected, not a fault. WebP leans on modern compression and can throw away data to stay tiny, while PNG stores every pixel exactly with lossless compression. Keeping all that detail costs space, so a PNG is often several times the size of the WebP it came from. In return you get a file any editor opens, that holds its transparency, and that won't lose more quality each time you save it. If small size matters more than editing, the original WebP is still the lighter option."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24",
    "ctaTitle": "Need a hosted URL?",
    "ctaBody": "After converting, click 'Get URL' to host any PNG on our CDN. Free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de WebP a PNG | Gratis, sin pérdidas, sin subidas",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "png-to-webp", "label": "PNG a WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG a WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC a PNG" }
    ],
    "metaDescription": "Convierte WebP a PNG gratis en tu navegador manteniendo la transparencia y la calidad total. Sin subidas, sin registro. Funciona en Windows, Mac y iPhone.",
    "schemaName": "Convertidor de WebP a PNG",
    "schemaDescription": "Convierte imágenes WebP a PNG sin pérdidas en tu navegador, preservando la transparencia.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "Convertidor de WebP a PNG,",
    "h1Highlight": "Transparencia intacta",
    "intro": "Convierte WebP a PNG y conserva el fondo transparente. La recodificación es sin pérdidas y se ejecuta en tu navegador, sin subir archivos a ningún servidor.",
    "howTitle": "Cómo convertir WebP a PNG",
    "steps": [
      {
        "title": "Suelta los archivos WebP",
        "body": "Arrastra los archivos .webp a la zona de carga."
      },
      {
        "title": "El navegador recodifica sin pérdidas",
        "body": "Tu navegador decodifica el WebP y genera un PNG manteniendo la transparencia. No se envía nada a un servidor."
      },
      {
        "title": "Descarga el PNG",
        "body": "Haz clic en Descargar en cada PNG, o haz clic en 'Obtener URL' para alojarlo."
      }
    ],
    "whyTitle": "¿Por qué convertir WebP a PNG?",
    "whyItems": [
      {
        "title": "Transparencia preservada",
        "body": "PNG mantiene la misma transparencia que usa WebP, por lo que no aparecerá un recuadro blanco detrás."
      },
      {
        "title": "Píxeles sin pérdidas",
        "body": "No se añade ninguna pérdida de compresión adicional sobre el WebP original."
      },
      {
        "title": "Compatibilidad con editores",
        "body": "Cualquier herramienta de diseño acepta PNG."
      },
      {
        "title": "Fidelidad de archivo",
        "body": "PNG es un formato de archivo a largo plazo más seguro que WebP."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Se conserva la transparencia?",
        "a": "Sí. Las áreas transparentes del WebP permanecen transparentes en el PNG, sin añadir fondo blanco."
      },
      {
        "q": "¿El PNG es sin pérdidas?",
        "a": "Sí. El PNG se escribe sin compresión adicional, por lo que conserva cada píxel que tenía el WebP."
      },
      {
        "q": "¿Por qué el PNG es mucho más grande?",
        "a": "PNG es un formato sin pérdidas que almacena cada píxel, por lo que suele ser más grande que el WebP comprimido. A cambio, obtienes un archivo editable de máxima calidad."
      },
      {
        "q": "¿Se suben mis archivos?",
        "a": "No. La conversión se ejecuta en tu navegador. Tus archivos solo salen de tu dispositivo si haces clic en 'Obtener URL' para alojar uno."
      },
      {
        "q": "¿Hay límite de procesamiento por lotes?",
        "a": "No hay límite fijo. Suelta una carpeta entera de archivos WebP y se convertirán uno tras otro, directamente en tu navegador."
      },
      {
        "q": "¿Qué pasa con los WebP animados?",
        "a": "Un WebP animado se guarda como un solo fotograma estático, ya que PNG no admite animación. Usa un GIF si necesitas movimiento."
      },
      {
        "q": "¿Se conservan los metadatos?",
        "a": "No. La recodificación elimina los metadatos EXIF, lo cual también ayuda a proteger tu privacidad."
      },
      {
        "q": "¿Por qué convertir en lugar de solo cambiar la extensión?",
        "a": "Cambiar el nombre de un archivo .webp a .png no cambia su contenido, por lo que las aplicaciones lo seguirán rechazando. Esta herramienta reescribe la imagen como un PNG real."
      },
      {
        "q": "¿Cómo convierto WebP a PNG en Windows, Mac o iPhone?",
        "a": "Funciona en cualquier navegador moderno en Windows, Mac y iPhone. Suelta tus archivos WebP y descarga los PNG. No hay nada que instalar."
      },
      {
        "q": "¿Es gratis este convertidor de WebP a PNG?",
        "a": "Sí, totalmente gratis. No hay registro, ni marcas de agua, ni límite en la cantidad de archivos que conviertes."
      },
      {
        "q": "¿Puedo convertir varios archivos WebP a PNG a la vez?",
        "a": "Sí. Suelta o selecciona varios archivos WebP juntos y se convertirán a PNG uno tras otro, para que puedas procesar todo un lote de una sola vez."
      }
    ],
    "ctaTitle": "¿Necesitas una URL alojada?",
    "ctaBody": "Después de convertir, haz clic en 'Obtener URL' para alojar cualquier PNG en nuestra CDN. Gratis, sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur WebP en PNG | Gratuit, sans perte, sans téléchargement",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "png-to-webp", "label": "PNG vers WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG vers WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC vers PNG" }
    ],
    "metaDescription": "Convertissez vos fichiers WebP en PNG gratuitement dans votre navigateur, en conservant la transparence et la qualité totale. Aucun téléchargement, aucune inscription. Fonctionne sur Windows, Mac et iPhone.",
    "schemaName": "Convertisseur WebP en PNG",
    "schemaDescription": "Convertissez vos images WebP en PNG sans perte directement dans votre navigateur, en préservant la transparence.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur WebP en PNG,",
    "h1Highlight": "Transparence préservée",
    "intro": "Convertissez vos fichiers WebP en PNG tout en conservant l'arrière-plan transparent. Le réencodage est sans perte et s'exécute localement dans votre navigateur, sans aucun envoi sur un serveur.",
    "howTitle": "Comment convertir WebP en PNG",
    "steps": [
      {
        "title": "Déposez vos fichiers WebP",
        "body": "Faites glisser vos fichiers .webp dans la zone de dépôt."
      },
      {
        "title": "Réencodage local sans perte",
        "body": "Votre navigateur décode le WebP et génère un PNG en conservant la transparence. Aucune donnée n'est envoyée vers un serveur."
      },
      {
        "title": "Téléchargez le PNG",
        "body": "Cliquez sur Télécharger pour chaque PNG, ou cliquez sur 'Obtenir l'URL' pour l'héberger."
      }
    ],
    "whyTitle": "Pourquoi convertir WebP en PNG ?",
    "whyItems": [
      {
        "title": "Transparence préservée",
        "body": "Le format PNG conserve la transparence du WebP, évitant ainsi l'apparition d'un fond blanc."
      },
      {
        "title": "Pixels sans perte",
        "body": "Aucune compression supplémentaire n'est ajoutée au-delà de la qualité originale du WebP."
      },
      {
        "title": "Compatibilité logicielle",
        "body": "Tous les outils de design et logiciels acceptent le format PNG."
      },
      {
        "title": "Fidélité d'archivage",
        "body": "Le PNG est un format d'archivage plus fiable et pérenne que le WebP."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "La transparence est-elle conservée ?",
        "a": "Oui. Les zones transparentes du WebP restent transparentes dans le PNG, sans ajout de fond blanc."
      },
      {
        "q": "La conversion PNG est-elle sans perte ?",
        "a": "Oui. Le PNG est généré sans compression additionnelle, conservant ainsi chaque pixel du fichier WebP original."
      },
      {
        "q": "Pourquoi le fichier PNG est-il plus volumineux ?",
        "a": "Le PNG est un format sans perte qui stocke chaque pixel, il est donc généralement plus lourd qu'un WebP compressé. En contrepartie, vous obtenez un fichier de haute qualité et modifiable."
      },
      {
        "q": "Mes fichiers sont-ils envoyés sur un serveur ?",
        "a": "Non. La conversion s'effectue entièrement dans votre navigateur. Vos fichiers ne quittent votre appareil que si vous cliquez sur 'Obtenir l'URL' pour les héberger."
      },
      {
        "q": "Y a-t-il une limite de fichiers ?",
        "a": "Aucune limite fixe. Déposez un dossier entier de fichiers WebP et ils seront convertis les uns après les autres, directement dans votre navigateur."
      },
      {
        "q": "Qu'en est-il des WebP animés ?",
        "a": "Un WebP animé sera enregistré sous forme d'image fixe, car le format PNG ne gère pas l'animation. Utilisez un GIF si vous avez besoin de mouvement."
      },
      {
        "q": "Les métadonnées sont-elles conservées ?",
        "a": "Non. Le réencodage supprime les métadonnées EXIF, ce qui renforce également votre confidentialité."
      },
      {
        "q": "Pourquoi convertir plutôt que de simplement renommer ?",
        "a": "Renommer un fichier .webp en .png ne modifie pas sa structure interne, ce qui fait que les applications le rejetteront toujours. Cet outil réécrit réellement l'image en un véritable fichier PNG."
      },
      {
        "q": "Comment convertir WebP en PNG sur Windows, Mac ou iPhone ?",
        "a": "Cela fonctionne dans n'importe quel navigateur moderne sur Windows, Mac et iPhone. Déposez vos fichiers WebP et téléchargez les PNG. Rien à installer."
      },
      {
        "q": "Ce convertisseur WebP en PNG est-il gratuit ?",
        "a": "Oui, entièrement gratuit. Il n'y a pas d'inscription, pas de filigrane et aucune limite sur le nombre de fichiers convertis."
      },
      {
        "q": "Puis-je convertir plusieurs fichiers WebP en PNG à la fois ?",
        "a": "Oui. Déposez ou sélectionnez plusieurs fichiers WebP ensemble et ils seront convertis en PNG successivement, vous permettant de traiter tout un lot en une seule fois."
      }
    ],
    "ctaTitle": "Besoin d'une URL hébergée ?",
    "ctaBody": "Après la conversion, cliquez sur 'Obtenir l'URL' pour héberger n'importe quel PNG sur notre CDN. Gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil de conversion"
  },
  "de": {
    "metaTitle": "WebP zu PNG Konverter | Kostenlos, verlustfrei, kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "png-to-webp", "label": "PNG zu WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG zu WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC zu PNG" }
    ],
    "metaDescription": "Konvertieren Sie WebP kostenlos in Ihrem Browser zu PNG. Transparenz und volle Qualität bleiben erhalten. Kein Upload, keine Registrierung. Funktioniert auf Windows, Mac und iPhone.",
    "schemaName": "WebP zu PNG Konverter",
    "schemaDescription": "Konvertieren Sie WebP-Bilder verlustfrei in Ihrem Browser zu PNG und bewahren Sie dabei die Transparenz.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "WebP zu PNG Konverter,",
    "h1Highlight": "Transparenz bleibt erhalten",
    "intro": "Konvertieren Sie WebP zu PNG und behalten Sie den transparenten Hintergrund bei. Die Neukodierung erfolgt verlustfrei direkt in Ihrem Browser, ohne dass Dateien hochgeladen werden.",
    "howTitle": "So konvertieren Sie WebP zu PNG",
    "steps": [
      {
        "title": "WebP-Dateien ablegen",
        "body": "Ziehen Sie Ihre .webp-Dateien einfach in den dafür vorgesehenen Bereich."
      },
      {
        "title": "Browser konvertiert verlustfrei",
        "body": "Ihr Browser dekodiert das WebP und erstellt ein PNG unter Beibehaltung der Transparenz. Es werden keine Daten an einen Server gesendet."
      },
      {
        "title": "PNG herunterladen",
        "body": "Klicken Sie bei jedem PNG auf Download oder wählen Sie 'Get URL', um es zu hosten."
      }
    ],
    "whyTitle": "Warum WebP zu PNG konvertieren?",
    "whyItems": [
      {
        "title": "Transparenz bleibt erhalten",
        "body": "PNG bewahrt die Transparenz des WebP-Formats, sodass kein unerwünschter weißer Hintergrund entsteht."
      },
      {
        "title": "Verlustfreie Pixel",
        "body": "Es findet keine zusätzliche Komprimierung statt, die über das WebP-Format hinausgeht."
      },
      {
        "title": "Kompatibilität mit Editoren",
        "body": "Jedes gängige Design-Tool unterstützt das PNG-Format."
      },
      {
        "title": "Archivierungssicherheit",
        "body": "PNG ist ein sichereres Format für die langfristige Archivierung als WebP."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Bleibt die Transparenz erhalten?",
        "a": "Ja. Transparente Bereiche im WebP bleiben auch im PNG transparent, ohne dass ein weißer Hintergrund hinzugefügt wird."
      },
      {
        "q": "Ist das PNG verlustfrei?",
        "a": "Ja. Das PNG wird ohne zusätzliche Komprimierung erstellt und behält jedes Pixel des ursprünglichen WebP bei."
      },
      {
        "q": "Warum ist das PNG so viel größer?",
        "a": "PNG ist ein verlustfreies Format, das jedes Pixel speichert, daher ist es meist größer als das komprimierte WebP. Sie erhalten dafür eine editierbare Datei in voller Qualität."
      },
      {
        "q": "Werden meine Dateien hochgeladen?",
        "a": "Nein. Die Konvertierung erfolgt lokal in Ihrem Browser. Ihre Dateien verlassen das Gerät nur, wenn Sie auf 'Get URL' klicken, um ein Bild zu hosten."
      },
      {
        "q": "Gibt es ein Limit für die Stapelverarbeitung?",
        "a": "Es gibt kein festes Limit. Ziehen Sie einen ganzen Ordner mit WebP-Dateien hinein; sie werden nacheinander direkt in Ihrem Browser konvertiert."
      },
      {
        "q": "Was ist mit animierten WebPs?",
        "a": "Ein animiertes WebP wird als einzelnes Standbild gespeichert, da PNG keine Animationen unterstützt. Verwenden Sie für Animationen ein GIF."
      },
      {
        "q": "Werden Metadaten beibehalten?",
        "a": "Nein. Die Neukodierung entfernt EXIF-Metadaten, was auch dem Datenschutz zugutekommt."
      },
      {
        "q": "Warum konvertieren statt nur umzubenennen?",
        "a": "Das Umbenennen einer .webp-Datei in .png ändert den Inhalt nicht, weshalb Apps die Datei weiterhin ablehnen würden. Dieses Tool schreibt das Bild tatsächlich als echtes PNG neu."
      },
      {
        "q": "Wie konvertiere ich WebP zu PNG auf Windows, Mac oder iPhone?",
        "a": "Es funktioniert in jedem modernen Browser auf Windows, Mac und iPhone. Ziehen Sie einfach Ihre WebP-Dateien hinein und laden Sie die PNGs herunter. Es ist keine Installation erforderlich."
      },
      {
        "q": "Ist dieser WebP zu PNG Konverter kostenlos?",
        "a": "Ja, komplett kostenlos. Es gibt keine Registrierung, keine Wasserzeichen und kein Limit für die Anzahl der konvertierten Dateien."
      },
      {
        "q": "Kann ich mehrere WebP-Dateien gleichzeitig zu PNG konvertieren?",
        "a": "Ja. Ziehen oder wählen Sie mehrere WebP-Dateien gleichzeitig aus; sie werden nacheinander zu PNG konvertiert, sodass Sie eine ganze Serie in einem Durchgang bearbeiten können."
      }
    ],
    "ctaTitle": "Benötigen Sie eine gehostete URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung auf 'Get URL', um ein beliebiges PNG auf unserem CDN zu hosten. Kostenlos und ohne Registrierung.",
    "ctaButton": "Zum Haupt-Uploader"
  },
  "ja": {
    "metaTitle": "WebP PNG 変換 | 無料・ロスレス・アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "png-to-webp", "label": "PNG→WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG→WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC→PNG" }
    ],
    "metaDescription": "ブラウザ上でWebPをPNGに無料で変換。透過性を維持し、画質を落とさず変換します。アップロードや登録は不要。Windows、Mac、iPhoneで動作します。",
    "schemaName": "WebP PNG 変換ツール",
    "schemaDescription": "ブラウザ上でWebP画像をロスレスでPNGに変換し、透過性を保持します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "WebP PNG 変換、",
    "h1Highlight": "透過性をそのまま維持",
    "intro": "WebPをPNGに変換し、透明な背景を保持します。再エンコードはロスレスでブラウザ内で実行されるため、サーバーへのアップロードは発生しません。",
    "howTitle": "WebPからPNGへの変換方法",
    "steps": [
      {
        "title": "WebPファイルをドロップ",
        "body": ".webpファイルをドロップゾーンにドラッグ＆ドロップします。"
      },
      {
        "title": "ブラウザでロスレス変換",
        "body": "ブラウザがWebPをデコードし、透過性を保持したままPNGを生成します。ファイルはサーバーに送信されません。"
      },
      {
        "title": "PNGをダウンロード",
        "body": "各PNGの「ダウンロード」をクリックするか、「URLを取得」をクリックしてホストします。"
      }
    ],
    "whyTitle": "なぜWebPをPNGに変換するのか？",
    "whyItems": [
      {
        "title": "透過性を保持",
        "body": "PNGはWebPと同じ透過性を維持するため、背景が白くなることはありません。"
      },
      {
        "title": "ロスレス画質",
        "body": "WebPの画質に加えて、追加の圧縮による劣化は発生しません。"
      },
      {
        "title": "編集ソフトとの互換性",
        "body": "あらゆるデザインツールでPNGが利用可能です。"
      },
      {
        "title": "長期保存に適した形式",
        "body": "PNGはWebPよりも長期保存に適した安全なフォーマットです。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "透過性は維持されますか？",
        "a": "はい。WebPの透明部分はPNGでも透明のまま保持され、白い背景が追加されることはありません。"
      },
      {
        "q": "PNGはロスレスですか？",
        "a": "はい。追加の圧縮なしで書き出されるため、WebPのピクセル情報を完全に保持します。"
      },
      {
        "q": "なぜPNGの方がファイルサイズが大きいのですか？",
        "a": "PNGはロスレスで全ピクセルを保存するため、圧縮されたWebPよりも大きくなるのが一般的です。その代わり、高品質で編集可能なファイルが得られます。"
      },
      {
        "q": "ファイルはアップロードされますか？",
        "a": "いいえ。変換はブラウザ内で行われます。ファイルがデバイスから外部へ送信されるのは、「URLを取得」をクリックしてホストする場合のみです。"
      },
      {
        "q": "変換数に制限はありますか？",
        "a": "制限はありません。フォルダ内のWebPファイルをまとめてドロップすれば、ブラウザ上で次々と変換されます。"
      },
      {
        "q": "アニメーションWebPはどうなりますか？",
        "a": "PNGはアニメーションに対応していないため、最初の1フレームのみが保存されます。動きが必要な場合はGIFを使用してください。"
      },
      {
        "q": "メタデータは保持されますか？",
        "a": "いいえ。再エンコード時にEXIFメタデータは削除されます。これはプライバシー保護にも役立ちます。"
      },
      {
        "q": "拡張子を変えるだけではダメなのですか？",
        "a": ".webpの拡張子を.pngに変えても中身は変わらないため、アプリで開くことができません。このツールは画像を正真正銘のPNGとして書き換えます。"
      },
      {
        "q": "Windows、Mac、iPhoneで変換できますか？",
        "a": "はい。Windows、Mac、iPhoneの最新ブラウザで動作します。インストール不要で、ファイルをドロップするだけで変換可能です。"
      },
      {
        "q": "このWebP PNG変換ツールは無料ですか？",
        "a": "はい、完全に無料です。登録や透かし（ウォーターマーク）、変換数の制限もありません。"
      },
      {
        "q": "複数のWebPファイルを一度に変換できますか？",
        "a": "はい。複数のWebPファイルをまとめてドロップすれば、一つずつ順番にPNGへ変換されるため、一度にまとめて処理できます。"
      }
    ],
    "ctaTitle": "ホストされたURLが必要ですか？",
    "ctaBody": "変換後、「URLを取得」をクリックすると、PNGを当社のCDNでホストできます。登録不要で無料です。",
    "ctaButton": "アップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "WebP 转 PNG 转换器 | 免费、无损、无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "png-to-webp", "label": "PNG 转 WebP" },
      { "pageKey": "jpg-to-webp", "label": "JPG 转 WebP" },
      { "pageKey": "heic-to-png", "label": "HEIC 转 PNG" }
    ],
    "metaDescription": "在浏览器中免费将 WebP 转换为 PNG，保留透明度和完整画质。无需上传，无需注册。支持 Windows、Mac 和 iPhone。",
    "schemaName": "WebP 转 PNG 转换器",
    "schemaDescription": "在浏览器中将 WebP 图像无损转换为 PNG，并保留透明度。",
    "badge": "纯浏览器工具",
    "h1Pre": "WebP 转 PNG 转换器，",
    "h1Highlight": "完美保留透明度",
    "intro": "将 WebP 转换为 PNG 并保留透明背景。重编码过程在浏览器中进行，无需上传，且完全无损。",
    "howTitle": "如何将 WebP 转换为 PNG",
    "steps": [
      {
        "title": "拖入 WebP 文件",
        "body": "将 .webp 文件拖入指定区域。"
      },
      {
        "title": "浏览器无损重编码",
        "body": "您的浏览器会解码 WebP 并生成保留透明度的 PNG。没有任何数据会被发送到服务器。"
      },
      {
        "title": "下载 PNG",
        "body": "点击每个 PNG 的下载按钮，或点击“获取 URL”进行托管。"
      }
    ],
    "whyTitle": "为什么要将 WebP 转换为 PNG？",
    "whyItems": [
      {
        "title": "保留透明度",
        "body": "PNG 保留了 WebP 原有的透明度，因此背景不会出现白框。"
      },
      {
        "title": "像素无损",
        "body": "在 WebP 原有基础上不会产生额外的压缩损失。"
      },
      {
        "title": "编辑器兼容性",
        "body": "几乎所有设计工具都支持 PNG 格式。"
      },
      {
        "title": "存档保真度",
        "body": "相比 WebP，PNG 是更适合长期存档的格式。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "这能保留透明度吗？",
        "a": "是的。WebP 中的透明区域在 PNG 中依然保持透明，不会添加白色背景。"
      },
      {
        "q": "PNG 是无损的吗？",
        "a": "是的。PNG 在写入时没有任何额外压缩，因此保留了 WebP 的每一个像素。"
      },
      {
        "q": "为什么 PNG 文件大得多？",
        "a": "PNG 是无损格式，存储了每一个像素，因此通常比压缩后的 WebP 大。作为交换，您得到的是高质量、可编辑的文件。"
      },
      {
        "q": "我的文件会被上传吗？",
        "a": "不会。转换过程在您的浏览器中运行。只有当您点击“获取 URL”进行托管时，文件才会离开您的设备。"
      },
      {
        "q": "有批量限制吗？",
        "a": "没有固定限制。您可以拖入整个文件夹的 WebP 文件，它们会在浏览器中依次完成转换。"
      },
      {
        "q": "支持动画 WebP 吗？",
        "a": "动画 WebP 会被保存为单帧静态图，因为 PNG 不支持动画。如果需要动态效果，请使用 GIF。"
      },
      {
        "q": "元数据会保留吗？",
        "a": "不会。重编码会丢弃 EXIF 元数据，这也有助于保护隐私。"
      },
      {
        "q": "为什么要转换而不是直接重命名？",
        "a": "将 .webp 文件重命名为 .png 并不会改变文件内容，因此应用程序仍会拒绝它。此工具会将图像真正重写为 PNG 格式。"
      },
      {
        "q": "如何在 Windows、Mac 或 iPhone 上将 WebP 转换为 PNG？",
        "a": "它适用于 Windows、Mac 和 iPhone 上的任何现代浏览器。只需拖入 WebP 文件并下载 PNG 即可，无需安装任何软件。"
      },
      {
        "q": "这个 WebP 转 PNG 转换器是免费的吗？",
        "a": "是的，完全免费。无需注册，没有水印，也没有转换数量限制。"
      },
      {
        "q": "可以一次转换多个 WebP 文件吗？",
        "a": "可以。同时拖入或选择多个 WebP 文件，它们会依次转换为 PNG，您可以一次性完成批量处理。"
      }
    ],
    "ctaTitle": "需要托管 URL？",
    "ctaBody": "转换后，点击“获取 URL”即可将任何 PNG 托管在我们的 CDN 上。免费且无需注册。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
