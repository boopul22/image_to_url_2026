import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "JFIF to JPG Converter - Free, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG to JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG to PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convert to JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG to JPG" }
    ],
    "metaDescription": "Convert JFIF to JPG free in your browser. Turn the .jfif files Windows saved into normal .jpg images you can open and share anywhere. No upload, no signup.",
    "schemaName": "JFIF to JPG Converter",
    "schemaDescription": "Convert JFIF files to standard JPG locally in your browser. No upload required.",
    "badge": "Browser-only Tool",
    "h1Pre": "JFIF to JPG Converter,",
    "h1Highlight": "fix those .jfif files",
    "intro": "Windows sometimes saves photos as .jfif, and plenty of apps refuse to open them. Drop them here to convert JFIF to JPG and get standard .jpg files back, processed entirely in your browser. JFIF is really just a JPEG with an unusual extension, so the picture inside stays exactly the same. Once you have the .jpg, you can grab a shareable https link to it in one click.",
    "howTitle": "How to convert JFIF to JPG",
    "steps": [
      {
        "title": "Drop JFIF files",
        "body": "Drag your .jfif images into the box or click to browse for them."
      },
      {
        "title": "Choose a quality",
        "body": "Quality 92 keeps the photo sharp. Lower it if you want a lighter file."
      },
      {
        "title": "Download as JPG",
        "body": "Each image saves as a normal .jpg. Nothing is sent to a server."
      }
    ],
    "whyTitle": "Why convert JFIF to JPG?",
    "whyItems": [
      {
        "title": "Apps reject .jfif",
        "body": "Older editors, some social uploaders, and a few print services do not recognize the .jfif extension at all."
      },
      {
        "title": "Same image, usable name",
        "body": "JFIF is really just JPEG with an odd extension, so you get the same picture under a name everything accepts."
      },
      {
        "title": "No install needed",
        "body": "You do not need Photoshop or a desktop app. The converter runs in any modern browser."
      },
      {
        "title": "Files stay private",
        "body": "Conversion happens on your device. Your photos are never uploaded unless you click Get URL."
      }
    ],
    "specsTitle": "JFIF to JPG at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input", "value": "JFIF (.jfif)" },
      { "label": "Output", "value": "JPG (.jpg)" },
      { "label": "Max size", "value": "10 MB" }
    ],
    "comparisonTitle": "JFIF, JPG and the formats around them",
    "comparisonIntro": "JFIF is not really a separate format - it is a JPEG that ended up with a confusing extension. Here is how it sits next to the names you see every day, so you can tell what is actually different and what is just a label.",
    "comparisonColumns": [
      "Format",
      "What it is",
      "Compression",
      "App support",
      "Best for"
    ],
    "comparisonRows": [
      { "cells": ["JFIF", "A JPEG with a .jfif extension", "Lossy", "Patchy, the extension trips apps up", "Nothing special - convert it"] },
      { "cells": ["JPG", "The everyday JPEG", "Lossy", "Everywhere", "Photos, sharing, uploads"] },
      { "cells": ["JPEG", "Same format as JPG", "Lossy", "Everywhere", "Identical to JPG"] },
      { "cells": ["PNG", "Lossless graphics format", "Lossless", "Everywhere", "Logos, screenshots, transparency"] },
      { "cells": ["WebP", "Modern web format", "Lossy or lossless", "Most browsers", "Smaller web images"] }
    ],
    "useCasesTitle": "When converting JFIF helps",
    "useCasesIntro": "The trouble with .jfif is almost always the extension, not the image. Renaming it to .jpg clears these up:",
    "useCases": [
      {
        "title": "Opening in editors",
        "body": "Some photo apps and older versions of Photoshop will not open a .jfif at all. A plain .jpg loads without complaint."
      },
      {
        "title": "Uploading to forms and sites",
        "body": "Job portals, marketplaces and older CMS upload boxes often reject .jfif. The same picture as a .jpg sails through."
      },
      {
        "title": "Sharing with other people",
        "body": "Send a .jpg and nobody asks what a .jfif is or why it will not open. It just shows up as the photo."
      }
    ],
    "sections": [
      {
        "heading": "What is a JFIF file?",
        "body": "JFIF stands for JPEG File Interchange Format. It is the standard wrapper that holds JPEG image data, so a .jfif file is a normal JPEG photo - the same compression, the same pixels. The odd part is the extension. Most JPEGs are saved as .jpg or .jpeg, but certain Windows and browser combinations save downloaded images as .jfif instead. Nothing is wrong with the file; the name just confuses apps that check the extension before the contents. Converting to .jpg fixes that mismatch without touching the image."
      },
      {
        "heading": "Can I just rename .jfif to .jpg?",
        "body": "Often, yes. Because the bytes inside are already JPEG, changing the extension from .jfif to .jpg is usually enough to make stubborn apps cooperate. The catch is that Windows hides file extensions by default, so renaming can be fiddly and easy to get wrong. This tool does the same job reliably: it re-saves each file as a clean .jpg in one step, no digging through folder options or worrying about a half-renamed file."
      },
      {
        "heading": "JFIF vs JPG: is there any real difference?",
        "body": "For everyday use, no. JFIF and JPG describe the same JPEG image, and converting between them does not change the photo in any way you would notice. At quality 92 the output is visually identical to the input. The only thing that changes is the extension, and that is exactly the point: a .jpg name is recognised by every editor, browser, printer and upload form, while .jfif quietly breaks in a surprising number of them."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24",
    "faqTitle": "FAQ",
    "faqIntro": "Convert JFIF to JPG free and online, with no signup and no watermark. Your files stay on your device.",
    "faqs": [
      {
        "q": "Why did my photo save as .jfif?",
        "a": "Some Windows and browser combinations save downloaded JPEGs with the .jfif extension, usually because of a registry quirk. The image data is normal JPEG underneath, so nothing is actually broken."
      },
      {
        "q": "What is a JFIF file?",
        "a": "JFIF (JPEG File Interchange Format) is the standard container for JPEG image data. A .jfif file is just a JPEG with a different label on the end of the name."
      },
      {
        "q": "Is JFIF the same as JPG?",
        "a": "Almost entirely. JFIF is the standard JPEG file format, and .jpg is the usual extension for it. Converting to .jpg gives you the same picture with a name every app understands."
      },
      {
        "q": "Can I just rename .jfif to .jpg?",
        "a": "Usually that works, since the file is already JPEG inside. But Windows hides extensions by default, so renaming is error-prone. This tool re-saves a clean .jpg for you instead."
      },
      {
        "q": "Will the quality change?",
        "a": "Barely. It is a JPEG either way, so at quality 92 the converted file looks the same as the original. You can lower the quality if you want a smaller file."
      },
      {
        "q": "Can I convert several at once?",
        "a": "Yes. Drop a batch of .jfif files and they convert to .jpg one after another, right in your browser."
      },
      {
        "q": "Does converting remove EXIF data?",
        "a": "Re-saving usually drops EXIF metadata such as location and camera details, so the resulting .jpg is a little more private than the original."
      },
      {
        "q": "Can I open a .jfif on a Mac?",
        "a": "Preview on macOS opens most .jfif files since they are really JPEGs. If an app still refuses, converting to .jpg removes any doubt."
      },
      {
        "q": "How do I stop Windows saving images as JFIF?",
        "a": "It comes from a registry association and is fiddly to change safely. Most people find it easier to just convert the occasional .jfif to .jpg as it comes up."
      },
      {
        "q": "Are my files uploaded?",
        "a": "No. The whole process runs locally in your browser. Your files only leave the device if you click Get URL to host one."
      },
      {
        "q": "Can I get a link to the converted JPG?",
        "a": "Yes. After converting, click Get URL and the .jpg is hosted on our CDN with a direct https link you can paste into chat, a forum or an email."
      }
    ],
    "ctaTitle": "Want a permanent URL?",
    "ctaBody": "After converting, click Get URL to host any JPG on our CDN. Free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de JFIF a JPG — Gratis, sin subidas",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG a JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG a PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir a JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG a JPG" }
    ],
    "metaDescription": "Convierte JFIF a JPG gratis en tu navegador. Convierte los archivos .jfif que Windows guarda en imágenes .jpg normales que puedes abrir y compartir en cualquier lugar. Sin subidas, sin registros.",
    "schemaName": "Convertidor de JFIF a JPG",
    "schemaDescription": "Convierte archivos JFIF a JPG estándar localmente en tu navegador. No requiere subida de archivos.",
    "badge": "Herramienta solo para navegador",
    "h1Pre": "Convertidor de JFIF a JPG,",
    "h1Highlight": "arregla esos archivos .jfif",
    "intro": "Windows a veces guarda fotos como .jfif y muchas aplicaciones se niegan a abrirlas. Suéltalas aquí para convertir JFIF a JPG y recuperar archivos .jpg estándar, procesados completamente en tu navegador.",
    "howTitle": "Cómo convertir JFIF a JPG",
    "steps": [
      {
        "title": "Suelta archivos JFIF",
        "body": "Arrastra tus imágenes .jfif al cuadro o haz clic para buscarlas."
      },
      {
        "title": "Elige una calidad",
        "body": "La calidad 92 mantiene la foto nítida. Bájala si quieres un archivo más ligero."
      },
      {
        "title": "Descarga como JPG",
        "body": "Cada imagen se guarda como un .jpg normal. Nada se envía a un servidor."
      }
    ],
    "whyTitle": "¿Por qué convertir JFIF a JPG?",
    "whyItems": [
      {
        "title": "Las aplicaciones rechazan .jfif",
        "body": "Los editores antiguos, algunos cargadores de redes sociales y ciertos servicios de impresión no reconocen la extensión .jfif en absoluto."
      },
      {
        "title": "Misma imagen, nombre utilizable",
        "body": "JFIF es realmente solo JPEG con una extensión extraña, por lo que obtienes la misma imagen bajo un nombre que todo acepta."
      },
      {
        "title": "No requiere instalación",
        "body": "No necesitas Photoshop ni una aplicación de escritorio. El convertidor funciona en cualquier navegador moderno."
      },
      {
        "title": "Los archivos permanecen privados",
        "body": "La conversión ocurre en tu dispositivo. Tus fotos nunca se suben a menos que hagas clic en Get URL."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué mi foto se guardó como .jfif?",
        "a": "Algunas combinaciones de Windows y navegadores guardan los JPEGs descargados con la extensión .jfif. Los datos de la imagen son JPEG normales por debajo."
      },
      {
        "q": "¿Es JFIF lo mismo que JPG?",
        "a": "Casi. JFIF es el formato de archivo JPEG estándar. Convertir a .jpg te da la misma imagen con una extensión que cualquier aplicación entiende."
      },
      {
        "q": "¿Cambiará la calidad?",
        "a": "Apenas. Es un JPEG de cualquier manera, así que con calidad 92 el archivo convertido se ve igual que el original."
      },
      {
        "q": "¿Puedo convertir varios a la vez?",
        "a": "Sí. Suelta un lote de archivos .jfif y se convertirán a .jpg uno tras otro, directamente en tu navegador."
      },
      {
        "q": "¿Se suben mis archivos?",
        "a": "No. Todo el proceso se ejecuta localmente. Tus archivos solo salen del dispositivo si haces clic en Get URL para alojar uno."
      }
    ],
    "ctaTitle": "¿Quieres una URL permanente?",
    "ctaBody": "Después de convertir, haz clic en Get URL para alojar cualquier JPG en nuestra CDN. Gratis, sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur JFIF en JPG — Gratuit, sans téléchargement",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG vers JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG vers PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir en JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG vers JPG" }
    ],
    "metaDescription": "Convertissez vos fichiers JFIF en JPG gratuitement dans votre navigateur. Transformez les fichiers .jfif enregistrés par Windows en images .jpg standard, compatibles partout. Aucun envoi sur serveur, aucune inscription.",
    "schemaName": "Convertisseur JFIF en JPG",
    "schemaDescription": "Convertissez vos fichiers JFIF en JPG standard localement dans votre navigateur. Aucun envoi requis.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Convertisseur JFIF en JPG,",
    "h1Highlight": "corrigez vos fichiers .jfif",
    "intro": "Windows enregistre parfois les photos au format .jfif, que de nombreuses applications refusent d'ouvrir. Déposez-les ici pour convertir vos JFIF en JPG et récupérer des fichiers .jpg standard, traités entièrement dans votre navigateur.",
    "howTitle": "Comment convertir JFIF en JPG",
    "steps": [
      {
        "title": "Déposez vos fichiers JFIF",
        "body": "Faites glisser vos images .jfif dans la zone ou cliquez pour les sélectionner."
      },
      {
        "title": "Choisissez la qualité",
        "body": "Une qualité de 92 préserve la netteté. Réduisez-la si vous souhaitez un fichier plus léger."
      },
      {
        "title": "Téléchargez en JPG",
        "body": "Chaque image est enregistrée en .jpg standard. Rien n'est envoyé sur un serveur."
      }
    ],
    "whyTitle": "Pourquoi convertir JFIF en JPG ?",
    "whyItems": [
      {
        "title": "Les applications rejettent le .jfif",
        "body": "Les anciens éditeurs, certains outils de téléchargement sur les réseaux sociaux et services d'impression ne reconnaissent pas l'extension .jfif."
      },
      {
        "title": "Même image, nom utilisable",
        "body": "Le format JFIF est simplement un JPEG avec une extension inhabituelle ; vous obtenez la même image sous un nom reconnu par tous."
      },
      {
        "title": "Aucune installation requise",
        "body": "Pas besoin de Photoshop ou d'un logiciel de bureau. Le convertisseur fonctionne dans n'importe quel navigateur moderne."
      },
      {
        "title": "Vos fichiers restent privés",
        "body": "La conversion se fait sur votre appareil. Vos photos ne sont jamais envoyées sur un serveur, sauf si vous cliquez sur Obtenir URL."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Pourquoi ma photo a-t-elle été enregistrée en .jfif ?",
        "a": "Certaines combinaisons de Windows et de navigateurs enregistrent les JPEG téléchargés avec l'extension .jfif. Les données de l'image restent du JPEG classique."
      },
      {
        "q": "JFIF est-il identique au JPG ?",
        "a": "Presque. Le JFIF est le format de fichier JPEG standard. La conversion en .jpg vous donne la même image avec une extension que toutes les applications comprennent."
      },
      {
        "q": "La qualité va-t-elle changer ?",
        "a": "À peine. Il s'agit de JPEG dans les deux cas, donc avec une qualité de 92, le fichier converti est identique à l'original."
      },
      {
        "q": "Puis-je en convertir plusieurs à la fois ?",
        "a": "Oui. Déposez un lot de fichiers .jfif et ils seront convertis en .jpg les uns après les autres, directement dans votre navigateur."
      },
      {
        "q": "Mes fichiers sont-ils envoyés sur un serveur ?",
        "a": "Non. Tout le processus est local. Vos fichiers ne quittent votre appareil que si vous cliquez sur Obtenir URL pour en héberger un."
      }
    ],
    "ctaTitle": "Besoin d'une URL permanente ?",
    "ctaBody": "Après la conversion, cliquez sur Obtenir URL pour héberger n'importe quel JPG sur notre CDN. Gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil d'upload principal"
  },
  "de": {
    "metaTitle": "JFIF in JPG Konverter — Kostenlos, kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG zu JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG zu PNG" },
      { "pageKey": "convert-to-jpg", "label": "Zu JPG konvertieren" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG zu JPG" }
    ],
    "metaDescription": "Konvertieren Sie JFIF kostenlos direkt in Ihrem Browser in JPG. Wandeln Sie die von Windows gespeicherten .jfif-Dateien in normale .jpg-Bilder um, die Sie überall öffnen und teilen können. Kein Upload, keine Registrierung.",
    "schemaName": "JFIF in JPG Konverter",
    "schemaDescription": "Konvertieren Sie JFIF-Dateien lokal in Ihrem Browser in Standard-JPG. Kein Upload erforderlich.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "JFIF in JPG Konverter,",
    "h1Highlight": "reparieren Sie Ihre .jfif-Dateien",
    "intro": "Windows speichert Fotos manchmal als .jfif, und viele Apps können diese nicht öffnen. Ziehen Sie sie einfach hierher, um JFIF in JPG zu konvertieren und Standard-.jpg-Dateien zu erhalten – die Verarbeitung erfolgt vollständig in Ihrem Browser.",
    "howTitle": "So konvertieren Sie JFIF in JPG",
    "steps": [
      {
        "title": "JFIF-Dateien ablegen",
        "body": "Ziehen Sie Ihre .jfif-Bilder in das Feld oder klicken Sie, um sie auszuwählen."
      },
      {
        "title": "Qualität wählen",
        "body": "Qualität 92 sorgt für scharfe Fotos. Verringern Sie den Wert, wenn Sie eine kleinere Datei wünschen."
      },
      {
        "title": "Als JPG herunterladen",
        "body": "Jedes Bild wird als normales .jpg gespeichert. Es werden keine Daten an einen Server gesendet."
      }
    ],
    "whyTitle": "Warum JFIF in JPG konvertieren?",
    "whyItems": [
      {
        "title": "Apps lehnen .jfif ab",
        "body": "Ältere Bildbearbeitungsprogramme, einige Social-Media-Uploads und Druckdienste erkennen die .jfif-Endung oft nicht."
      },
      {
        "title": "Gleiches Bild, besserer Name",
        "body": "JFIF ist im Grunde ein JPEG mit einer ungewöhnlichen Endung. Sie erhalten dasselbe Bild unter einem Namen, den jedes Programm akzeptiert."
      },
      {
        "title": "Keine Installation nötig",
        "body": "Sie benötigen kein Photoshop oder eine Desktop-App. Der Konverter läuft in jedem modernen Browser."
      },
      {
        "title": "Dateien bleiben privat",
        "body": "Die Konvertierung erfolgt auf Ihrem Gerät. Ihre Fotos werden niemals hochgeladen, es sei denn, Sie klicken auf URL abrufen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum wurde mein Foto als .jfif gespeichert?",
        "a": "Einige Kombinationen aus Windows und Browsern speichern heruntergeladene JPEGs mit der .jfif-Endung. Die Bilddaten sind jedoch normale JPEGs."
      },
      {
        "q": "Ist JFIF dasselbe wie JPG?",
        "a": "Fast. JFIF ist das Standard-JPEG-Dateiformat. Die Konvertierung in .jpg liefert Ihnen dasselbe Bild mit einer Endung, die jede App versteht."
      },
      {
        "q": "Ändert sich die Qualität?",
        "a": "Kaum. Da es sich in beiden Fällen um ein JPEG handelt, sieht die konvertierte Datei bei Qualität 92 genauso aus wie das Original."
      },
      {
        "q": "Kann ich mehrere Dateien gleichzeitig konvertieren?",
        "a": "Ja. Ziehen Sie einfach eine Reihe von .jfif-Dateien hinein, und sie werden nacheinander direkt in Ihrem Browser in .jpg konvertiert."
      },
      {
        "q": "Werden meine Dateien hochgeladen?",
        "a": "Nein. Der gesamte Prozess läuft lokal ab. Ihre Dateien verlassen das Gerät nur, wenn Sie auf URL abrufen klicken, um ein Bild zu hosten."
      }
    ],
    "ctaTitle": "Benötigen Sie eine dauerhafte URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung auf URL abrufen, um ein beliebiges JPG auf unserem CDN zu hosten. Kostenlos, ohne Registrierung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "JFIFからJPGへの変換ツール — 無料、アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG→JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG→PNG" },
      { "pageKey": "convert-to-jpg", "label": "JPG変換" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG→JPG" }
    ],
    "metaDescription": "ブラウザ上でJFIFをJPGに無料で変換。Windowsで保存された.jfifファイルを、どこでも開いて共有できる標準的な.jpg画像に変換します。アップロードや登録は一切不要です。",
    "schemaName": "JFIFからJPGへの変換ツール",
    "schemaDescription": "ブラウザ上でJFIFファイルを標準的なJPGにローカル変換。アップロードは不要です。",
    "badge": "ブラウザ専用ツール",
    "h1Pre": "JFIFからJPGへの変換、",
    "h1Highlight": ".jfifファイルの悩みを解決",
    "intro": "Windowsでは写真が.jfif形式で保存されることがあり、一部のアプリでは開くことができません。ここにドラッグ＆ドロップするだけで、JFIFをJPGに変換し、標準的な.jpgファイルとして取得できます。処理はすべてブラウザ内で行われます。",
    "howTitle": "JFIFをJPGに変換する方法",
    "steps": [
      {
        "title": "JFIFファイルをドロップ",
        "body": ".jfif画像をボックスにドラッグするか、クリックしてファイルを選択してください。"
      },
      {
        "title": "画質を選択",
        "body": "画質92なら写真を鮮明に保てます。ファイルサイズを軽くしたい場合は数値を下げてください。"
      },
      {
        "title": "JPGとしてダウンロード",
        "body": "各画像は標準的な.jpgとして保存されます。サーバーには何も送信されません。"
      }
    ],
    "whyTitle": "なぜJFIFをJPGに変換するのか？",
    "whyItems": [
      {
        "title": "アプリが.jfifを認識しない",
        "body": "古い編集ソフトや一部のSNSアップローダー、印刷サービスなどでは、.jfif拡張子が認識されないことがあります。"
      },
      {
        "title": "同じ画像、使いやすい名前",
        "body": "JFIFは実質的にJPEGと同じですが、拡張子が異なるだけです。変換することで、あらゆる環境で受け入れられる形式になります。"
      },
      {
        "title": "インストール不要",
        "body": "Photoshopやデスクトップアプリは必要ありません。最新のブラウザであればどれでも動作します。"
      },
      {
        "title": "ファイルは非公開",
        "body": "変換はデバイス上で行われます。Get URLをクリックしない限り、写真がアップロードされることはありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "なぜ写真が.jfifで保存されるのですか？",
        "a": "Windowsやブラウザの組み合わせにより、ダウンロードしたJPEGが.jfif拡張子で保存されることがあります。中身の画像データは通常のJPEGです。"
      },
      {
        "q": "JFIFとJPGは同じですか？",
        "a": "ほぼ同じです。JFIFは標準的なJPEGファイル形式です。.jpgに変換することで、すべてのアプリで認識されるようになります。"
      },
      {
        "q": "画質は変わりますか？",
        "a": "ほとんど変わりません。どちらもJPEGであるため、画質92であれば元のファイルと見た目は同じです。"
      },
      {
        "q": "一度に複数変換できますか？",
        "a": "はい。複数の.jfifファイルをまとめてドロップすれば、ブラウザ上で次々と.jpgに変換されます。"
      },
      {
        "q": "ファイルはアップロードされますか？",
        "a": "いいえ。すべての処理はローカルで実行されます。Get URLをクリックしてホストしない限り、ファイルがデバイスから出ることはありません。"
      }
    ],
    "ctaTitle": "永続的なURLが必要ですか？",
    "ctaBody": "変換後、Get URLをクリックすると、JPGを当社のCDNでホストできます。登録不要で無料です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "JFIF 转 JPG 转换器 — 免费，无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG 转 JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG 转 PNG" },
      { "pageKey": "convert-to-jpg", "label": "转换为 JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG 转 JPG" }
    ],
    "metaDescription": "在浏览器中免费将 JFIF 转换为 JPG。将 Windows 保存的 .jfif 文件转换为可在任何地方打开和共享的标准 .jpg 图像。无需上传，无需注册。",
    "schemaName": "JFIF 转 JPG 转换器",
    "schemaDescription": "在浏览器中本地将 JFIF 文件转换为标准 JPG。无需上传。",
    "badge": "纯浏览器工具",
    "h1Pre": "JFIF 转 JPG 转换器，",
    "h1Highlight": "修复那些 .jfif 文件",
    "intro": "Windows 有时会将照片保存为 .jfif 格式，许多应用程序无法打开它们。将它们拖放到此处即可将 JFIF 转换为 JPG，并获取标准的 .jpg 文件，整个过程完全在您的浏览器中完成。",
    "howTitle": "如何将 JFIF 转换为 JPG",
    "steps": [
      {
        "title": "拖放 JFIF 文件",
        "body": "将您的 .jfif 图像拖入框中或点击以浏览选择文件。"
      },
      {
        "title": "选择质量",
        "body": "质量 92 可保持照片清晰。如果您想要更小的文件，可以降低质量。"
      },
      {
        "title": "下载为 JPG",
        "body": "每张图像都会保存为标准的 .jpg 文件。没有任何内容会被发送到服务器。"
      }
    ],
    "whyTitle": "为什么要将 JFIF 转换为 JPG？",
    "whyItems": [
      {
        "title": "应用程序拒绝 .jfif",
        "body": "旧版编辑器、某些社交媒体上传工具和少数打印服务根本无法识别 .jfif 扩展名。"
      },
      {
        "title": "相同的图像，通用的名称",
        "body": "JFIF 本质上就是带有奇怪扩展名的 JPEG，因此您可以获得一个所有软件都支持的通用名称的图片。"
      },
      {
        "title": "无需安装",
        "body": "您不需要 Photoshop 或桌面应用程序。转换器可以在任何现代浏览器中运行。"
      },
      {
        "title": "文件保持私密",
        "body": "转换在您的设备上进行。除非您点击“获取 URL”，否则您的照片永远不会被上传。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "为什么我的照片保存为 .jfif？",
        "a": "某些 Windows 和浏览器组合会将下载的 JPEG 保存为 .jfif 扩展名。其底层图像数据仍然是标准的 JPEG。"
      },
      {
        "q": "JFIF 和 JPG 是一样的吗？",
        "a": "几乎一样。JFIF 是标准的 JPEG 文件格式。转换为 .jpg 可以让您获得所有应用程序都能识别的相同图片。"
      },
      {
        "q": "质量会改变吗？",
        "a": "几乎不会。无论哪种方式都是 JPEG，因此在质量 92 下，转换后的文件看起来与原始文件相同。"
      },
      {
        "q": "我可以一次转换多个文件吗？",
        "a": "可以。拖入一批 .jfif 文件，它们会在您的浏览器中依次转换为 .jpg。"
      },
      {
        "q": "我的文件会被上传吗？",
        "a": "不会。整个过程在本地运行。只有在您点击“获取 URL”进行托管时，文件才会离开您的设备。"
      }
    ],
    "ctaTitle": "想要永久 URL？",
    "ctaBody": "转换后，点击“获取 URL”即可将任何 JPG 托管在我们的 CDN 上。免费，无需注册。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
