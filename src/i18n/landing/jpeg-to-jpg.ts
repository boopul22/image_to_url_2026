import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "JPEG to JPG - Free Converter, No Upload",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG to JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG to PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convert to JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG to JPEG" }
    ],
    "metaDescription": "Convert JPEG to JPG free in your browser. JPEG and JPG are the same format with different extensions, so rename and re-save in one click. No upload, no signup.",
    "schemaName": "JPEG to JPG Converter",
    "schemaDescription": "Convert JPEG files to the .jpg extension locally in your browser. No upload required.",
    "badge": "Browser-only Tool",
    "h1Pre": "JPEG to JPG,",
    "h1Highlight": "same image, right extension",
    "intro": "JPEG and JPG are the exact same format, just spelled differently. There is no real conversion happening here - the tool re-saves your file with the shorter .jpg extension that older Windows tools and some upload forms prefer. Drop your .jpeg files in the box, download them as .jpg, and the picture inside stays identical. It all runs in your browser, and you can grab a shareable link to the result afterwards.",
    "howTitle": "How to convert JPEG to JPG",
    "steps": [
      {
        "title": "Drop JPEG files",
        "body": "Drag your .jpeg images into the box or click to select them. Batches are fine."
      },
      {
        "title": "Pick a quality",
        "body": "Leave it at 92 to keep the image as-is, or lower it for a smaller file."
      },
      {
        "title": "Download as JPG",
        "body": "Each file saves with the .jpg extension. The conversion runs on your device."
      }
    ],
    "whyTitle": "Why convert JPEG to JPG?",
    "whyItems": [
      {
        "title": "Picky upload forms",
        "body": "Some sites and apps only show .jpg in their file list and skip over .jpeg, even though they are identical."
      },
      {
        "title": "Tidy file names",
        "body": "A consistent .jpg extension keeps folders, galleries, and bulk uploads neat and predictable."
      },
      {
        "title": "No quality surprise",
        "body": "Because both are the same JPEG format, the switch is essentially a rename with no real loss."
      },
      {
        "title": "Stays on your device",
        "body": "Files are processed in your browser. Nothing is uploaded unless you click Get URL."
      }
    ],
    "specsTitle": "JPEG to JPG at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input", "value": "JPEG (.jpeg)" },
      { "label": "Output", "value": "JPG (.jpg)" },
      { "label": "Max size", "value": "50 MB" }
    ],
    "comparisonTitle": "JPEG, JPG and the other image names",
    "comparisonIntro": "The big thing to know: .jpeg and .jpg are the same format, byte for byte. The differences below are about the name and a few genuinely different formats people mix them up with.",
    "comparisonColumns": [
      "Name",
      "Same as JPG?",
      "Where you see it",
      "Compression",
      "Notes"
    ],
    "comparisonRows": [
      { "cells": [".jpg", "Yes", "Windows, most apps", "Lossy", "The three-letter classic"] },
      { "cells": [".jpeg", "Yes", "Mac, Linux, cameras", "Lossy", "Full spelling, identical bytes"] },
      { "cells": [".jfif", "Yes, it is a JPEG", "Some Windows downloads", "Lossy", "Odd extension, just convert it"] },
      { "cells": [".png", "No", "Everywhere", "Lossless", "Different format, supports transparency"] },
      { "cells": [".webp", "No", "Web", "Lossy or lossless", "Different, smaller web format"] }
    ],
    "useCasesTitle": "When converting JPEG to JPG helps",
    "useCasesIntro": "Since the image does not change, this is about the extension matching what something expects:",
    "useCases": [
      {
        "title": "Picky upload forms",
        "body": "Some sites list only .jpg in their accepted types and quietly skip .jpeg, even though the file is identical."
      },
      {
        "title": "Tidy file naming",
        "body": "A consistent .jpg extension keeps folders, photo galleries and bulk uploads neat and predictable."
      },
      {
        "title": "Matching a spec",
        "body": "When instructions literally say 'upload a .jpg', handing over a .jpg avoids a rejected submission over a naming technicality."
      }
    ],
    "sections": [
      {
        "heading": "Is JPEG the same as JPG?",
        "body": "Yes. JPEG and JPG are two names for one image format, defined by the Joint Photographic Experts Group, which is where the name comes from. A file saved as photo.jpeg and the same file saved as photo.jpg contain identical data and look exactly the same. There is no quality difference, no compatibility difference in the image itself, and no hidden catch. The only thing that ever differs is the four letters versus three on the end of the filename."
      },
      {
        "heading": "Why are there two names?",
        "body": "The format's real extension is .jpeg, but early versions of Windows and DOS limited file extensions to three characters, so .jpg became the common short form. Both stuck around. Macs, cameras and many programs happily write .jpeg, while a lot of Windows software and web tools default to .jpg. That history is the entire reason people end up needing to switch one for the other - the picture was never the issue, only the label."
      },
      {
        "heading": "Does converting JPEG to JPG change anything?",
        "body": "Functionally, no. This tool re-saves the file with a .jpg extension so it matches what an app or form expects. At quality 92 the output is visually identical to the input. The one practical side effect is that re-saving usually strips EXIF metadata, so camera and location details do not carry over - which many people actually prefer when sharing a photo publicly."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24",
    "faqTitle": "FAQ",
    "faqIntro": "Convert JPEG to JPG free and online, with no signup and no watermark. Your files never leave your device.",
    "faqs": [
      {
        "q": "Is JPEG different from JPG?",
        "a": "No. They are the same image format. The short .jpg extension is a leftover from older Windows systems that only allowed three letters."
      },
      {
        "q": "Why do some files say .jpeg and others .jpg?",
        "a": "The format's full extension is .jpeg, but old systems capped extensions at three characters, so .jpg appeared. Both are still in use today."
      },
      {
        "q": "Which should I use, .jpg or .jpeg?",
        "a": "Either is correct. Use whichever the app or form in front of you asks for. If nothing specifies, .jpg is the more common default."
      },
      {
        "q": "Can I just rename .jpeg to .jpg?",
        "a": "Yes, that is all the change really is. Renaming works, but this tool does it cleanly in a batch and gives you a proper download without fiddling with hidden extensions."
      },
      {
        "q": "Will renaming break the image?",
        "a": "No. Because the contents are already JPEG, switching the extension does not damage the file. It opens the same as before."
      },
      {
        "q": "Will I lose quality?",
        "a": "Hardly any. Both are JPEG, so converting is close to a straight rename. At quality 92 the result matches the original."
      },
      {
        "q": "Does it remove EXIF data?",
        "a": "Yes. Re-saving drops EXIF metadata, so location and camera details are not carried into the new file, which is handy before sharing."
      },
      {
        "q": "Can I convert many files at once?",
        "a": "Yes. Drop a whole batch of .jpeg images and they all save as .jpg one after another."
      },
      {
        "q": "Do browsers or search engines treat them differently?",
        "a": "No. Browsers display both fine, and search engines read either extension the same way. The choice is purely about what a given tool expects."
      },
      {
        "q": "Are my files uploaded anywhere?",
        "a": "No. Everything happens in your browser. Your files only leave the device if you choose Get URL to host one."
      },
      {
        "q": "Can I get a link to the converted file?",
        "a": "Yes. After converting, click Get URL to host the .jpg on our CDN and get a direct https link to share."
      }
    ],
    "ctaTitle": "Want a permanent URL?",
    "ctaBody": "After converting, click Get URL to host any JPG on our CDN. Free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "JPEG a JPG — Convertidor gratuito, sin subidas",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG a JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG a PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir a JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG a JPEG" }
    ],
    "metaDescription": "Convierte JPEG a JPG gratis en tu navegador. JPEG y JPG son el mismo formato con extensiones diferentes, así que cámbialas y guárdalas con un clic. Sin subidas, sin registros.",
    "schemaName": "Convertidor de JPEG a JPG",
    "schemaDescription": "Convierte archivos JPEG a la extensión .jpg localmente en tu navegador. No requiere subidas.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "JPEG a JPG,",
    "h1Highlight": "misma imagen, extensión correcta",
    "intro": "JPEG y JPG son exactamente el mismo formato, solo se escriben diferente. Suelta tus archivos .jpeg aquí para convertir JPEG a JPG y descárgalos con la extensión .jpg limpia, todo desde tu navegador.",
    "howTitle": "Cómo convertir JPEG a JPG",
    "steps": [
      {
        "title": "Suelta archivos JPEG",
        "body": "Arrastra tus imágenes .jpeg al cuadro o haz clic para seleccionarlas. Se permiten lotes."
      },
      {
        "title": "Elige una calidad",
        "body": "Déjala en 92 para mantener la imagen tal cual, o redúcela para obtener un archivo más pequeño."
      },
      {
        "title": "Descarga como JPG",
        "body": "Cada archivo se guarda con la extensión .jpg. La conversión se ejecuta en tu dispositivo."
      }
    ],
    "whyTitle": "¿Por qué convertir JPEG a JPG?",
    "whyItems": [
      {
        "title": "Formularios exigentes",
        "body": "Algunos sitios y aplicaciones solo muestran .jpg en sus listas de archivos y omiten .jpeg, aunque sean idénticos."
      },
      {
        "title": "Nombres de archivo ordenados",
        "body": "Una extensión .jpg consistente mantiene las carpetas, galerías y cargas masivas ordenadas y predecibles."
      },
      {
        "title": "Sin sorpresas de calidad",
        "body": "Como ambos son el mismo formato JPEG, el cambio es esencialmente un cambio de nombre sin pérdida real."
      },
      {
        "title": "Permanece en tu dispositivo",
        "body": "Los archivos se procesan en tu navegador. Nada se sube a menos que hagas clic en Obtener URL."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Es JPEG diferente de JPG?",
        "a": "No. Son el mismo formato de imagen. La extensión corta .jpg es un remanente de los sistemas Windows antiguos que solo permitían tres letras."
      },
      {
        "q": "¿Perderé calidad?",
        "a": "Casi nada. Ambos son JPEG, por lo que convertir es casi como un cambio de nombre directo. Con una calidad de 92, el resultado coincide con el original."
      },
      {
        "q": "¿Puedo convertir muchos archivos a la vez?",
        "a": "Sí. Suelta un lote completo de imágenes .jpeg y todas se guardarán como .jpg una tras otra."
      },
      {
        "q": "¿Se suben mis archivos a algún lugar?",
        "a": "No. Todo sucede en tu navegador. Tus archivos solo salen del dispositivo si eliges Obtener URL para alojar uno."
      },
      {
        "q": "¿Elimina los datos EXIF?",
        "a": "Sí. Al volver a guardar se eliminan los metadatos EXIF, por lo que los detalles de ubicación y cámara no se transfieren al nuevo archivo."
      }
    ],
    "ctaTitle": "¿Quieres una URL permanente?",
    "ctaBody": "Después de convertir, haz clic en Obtener URL para alojar cualquier JPG en nuestra CDN. Gratis, sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "JPEG en JPG — Convertisseur gratuit, sans téléchargement",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG vers JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG vers PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir en JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG vers JPEG" }
    ],
    "metaDescription": "Convertissez vos fichiers JPEG en JPG gratuitement dans votre navigateur. JPEG et JPG sont le même format avec des extensions différentes, renommez et enregistrez en un clic. Aucun envoi, aucune inscription.",
    "schemaName": "Convertisseur JPEG en JPG",
    "schemaDescription": "Convertissez vos fichiers JPEG vers l'extension .jpg localement dans votre navigateur. Aucun envoi requis.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "JPEG en JPG,",
    "h1Highlight": "même image, bonne extension",
    "intro": "JPEG et JPG sont exactement le même format, avec une orthographe différente. Déposez vos fichiers .jpeg ici pour les convertir en JPG et téléchargez-les avec l'extension .jpg propre, le tout directement dans votre navigateur.",
    "howTitle": "Comment convertir JPEG en JPG",
    "steps": [
      {
        "title": "Déposez vos fichiers JPEG",
        "body": "Glissez vos images .jpeg dans la zone ou cliquez pour les sélectionner. Le traitement par lots est possible."
      },
      {
        "title": "Choisissez une qualité",
        "body": "Laissez à 92 pour conserver l'image telle quelle, ou réduisez pour obtenir un fichier plus léger."
      },
      {
        "title": "Téléchargez en JPG",
        "body": "Chaque fichier est enregistré avec l'extension .jpg. La conversion s'effectue sur votre appareil."
      }
    ],
    "whyTitle": "Pourquoi convertir JPEG en JPG ?",
    "whyItems": [
      {
        "title": "Formulaires exigeants",
        "body": "Certains sites et applications ne reconnaissent que le .jpg et ignorent le .jpeg, bien qu'ils soient identiques."
      },
      {
        "title": "Fichiers organisés",
        "body": "Une extension .jpg cohérente permet de garder vos dossiers, galeries et téléchargements groupés propres et prévisibles."
      },
      {
        "title": "Aucune perte de qualité",
        "body": "Comme il s'agit du même format JPEG, la conversion est essentiellement un renommage sans perte réelle."
      },
      {
        "title": "Reste sur votre appareil",
        "body": "Les fichiers sont traités dans votre navigateur. Rien n'est envoyé sur un serveur, sauf si vous cliquez sur Obtenir URL."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "JPEG est-il différent de JPG ?",
        "a": "Non. Il s'agit du même format d'image. L'extension courte .jpg est un héritage des anciens systèmes Windows qui limitaient les extensions à trois lettres."
      },
      {
        "q": "Vais-je perdre en qualité ?",
        "a": "Presque pas. Les deux sont du JPEG, donc la conversion équivaut à un simple renommage. À une qualité de 92, le résultat est identique à l'original."
      },
      {
        "q": "Puis-je convertir plusieurs fichiers à la fois ?",
        "a": "Oui. Déposez tout un lot d'images .jpeg et elles seront toutes enregistrées en .jpg les unes après les autres."
      },
      {
        "q": "Mes fichiers sont-ils envoyés sur un serveur ?",
        "a": "Non. Tout se passe dans votre navigateur. Vos fichiers ne quittent votre appareil que si vous choisissez Obtenir URL pour en héberger un."
      },
      {
        "q": "Cela supprime-t-il les données EXIF ?",
        "a": "Oui. Le réenregistrement supprime les métadonnées EXIF, donc les détails de localisation et de l'appareil photo ne sont pas conservés dans le nouveau fichier."
      }
    ],
    "ctaTitle": "Besoin d'une URL permanente ?",
    "ctaBody": "Après la conversion, cliquez sur Obtenir URL pour héberger n'importe quel JPG sur notre CDN. Gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil principal"
  },
  "de": {
    "metaTitle": "JPEG zu JPG — Kostenloser Konverter, kein Upload",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG zu JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG zu PNG" },
      { "pageKey": "convert-to-jpg", "label": "Zu JPG konvertieren" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG zu JPEG" }
    ],
    "metaDescription": "Konvertieren Sie JPEG zu JPG kostenlos direkt in Ihrem Browser. JPEG und JPG sind dasselbe Format mit unterschiedlichen Dateiendungen. Benennen Sie Ihre Dateien mit einem Klick um. Kein Upload, keine Registrierung.",
    "schemaName": "JPEG zu JPG Konverter",
    "schemaDescription": "Konvertieren Sie JPEG-Dateien lokal in Ihrem Browser zur .jpg-Endung. Kein Upload erforderlich.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "JPEG zu JPG,",
    "h1Highlight": "gleiches Bild, richtige Endung",
    "intro": "JPEG und JPG sind exakt dasselbe Format, nur unterschiedlich geschrieben. Ziehen Sie Ihre .jpeg-Dateien hierher, um sie in JPG zu konvertieren und mit der sauberen .jpg-Endung herunterzuladen – alles direkt in Ihrem Browser.",
    "howTitle": "So konvertieren Sie JPEG zu JPG",
    "steps": [
      {
        "title": "JPEG-Dateien ablegen",
        "body": "Ziehen Sie Ihre .jpeg-Bilder in das Feld oder klicken Sie, um sie auszuwählen. Stapelverarbeitung ist möglich."
      },
      {
        "title": "Qualität wählen",
        "body": "Belassen Sie es bei 92, um das Bild unverändert zu lassen, oder verringern Sie den Wert für eine kleinere Datei."
      },
      {
        "title": "Als JPG herunterladen",
        "body": "Jede Datei wird mit der .jpg-Endung gespeichert. Die Konvertierung erfolgt direkt auf Ihrem Gerät."
      }
    ],
    "whyTitle": "Warum JPEG zu JPG konvertieren?",
    "whyItems": [
      {
        "title": "Wählerische Upload-Formulare",
        "body": "Manche Websites und Apps zeigen in ihren Dateiauswahllisten nur .jpg an und ignorieren .jpeg, obwohl sie identisch sind."
      },
      {
        "title": "Aufgeräumte Dateinamen",
        "body": "Eine einheitliche .jpg-Endung sorgt für Ordnung und Vorhersehbarkeit in Ordnern, Galerien und bei Massen-Uploads."
      },
      {
        "title": "Keine Qualitätsverluste",
        "body": "Da beide das gleiche JPEG-Format sind, ist der Wechsel im Grunde nur eine Umbenennung ohne echten Qualitätsverlust."
      },
      {
        "title": "Bleibt auf Ihrem Gerät",
        "body": "Dateien werden in Ihrem Browser verarbeitet. Nichts wird hochgeladen, es sei denn, Sie klicken auf Get URL."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Ist JPEG anders als JPG?",
        "a": "Nein. Es ist dasselbe Bildformat. Die kurze .jpg-Endung stammt aus der Zeit älterer Windows-Systeme, die nur drei Buchstaben erlaubten."
      },
      {
        "q": "Verliere ich an Qualität?",
        "a": "Kaum. Beide sind JPEG, daher ist die Konvertierung fast wie eine einfache Umbenennung. Bei Qualität 92 entspricht das Ergebnis dem Original."
      },
      {
        "q": "Kann ich viele Dateien gleichzeitig konvertieren?",
        "a": "Ja. Ziehen Sie einen ganzen Stapel .jpeg-Bilder hinein, und sie werden nacheinander als .jpg gespeichert."
      },
      {
        "q": "Werden meine Dateien irgendwo hochgeladen?",
        "a": "Nein. Alles passiert in Ihrem Browser. Ihre Dateien verlassen das Gerät nur, wenn Sie Get URL wählen, um eine Datei zu hosten."
      },
      {
        "q": "Werden EXIF-Daten entfernt?",
        "a": "Ja. Beim erneuten Speichern werden EXIF-Metadaten entfernt, sodass Standort- und Kameradetails nicht in die neue Datei übernommen werden."
      }
    ],
    "ctaTitle": "Sie möchten eine permanente URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung auf Get URL, um ein beliebiges JPG auf unserem CDN zu hosten. Kostenlos und ohne Registrierung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "JPEGからJPGへ — 無料変換、アップロード不要",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG→JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG→PNG" },
      { "pageKey": "convert-to-jpg", "label": "JPG変換" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG→JPEG" }
    ],
    "metaDescription": "ブラウザ上でJPEGをJPGに無料で変換。JPEGとJPGは拡張子が異なるだけで同じ形式です。ワンクリックで名前を変更して保存。アップロードや登録は一切不要です。",
    "schemaName": "JPEGからJPGへの変換ツール",
    "schemaDescription": "ブラウザ上でローカルにJPEGファイルを.jpg拡張子に変換します。アップロードは不要です。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "JPEGをJPGへ、",
    "h1Highlight": "同じ画像、正しい拡張子で",
    "intro": "JPEGとJPGは全く同じ形式で、綴りが違うだけです。.jpegファイルをここにドロップしてJPGに変換し、すっきりとした.jpg拡張子でダウンロードしましょう。すべてブラウザ内で完結します。",
    "howTitle": "JPEGからJPGへの変換方法",
    "steps": [
      {
        "title": "JPEGファイルをドロップ",
        "body": ".jpeg画像をボックスにドラッグするか、クリックして選択します。複数ファイルの同時処理も可能です。"
      },
      {
        "title": "画質を選択",
        "body": "そのままの画質を維持するには92に設定してください。ファイルサイズを小さくしたい場合は数値を下げます。"
      },
      {
        "title": "JPGとしてダウンロード",
        "body": "各ファイルが.jpg拡張子で保存されます。変換処理はすべてお使いのデバイス上で行われます。"
      }
    ],
    "whyTitle": "なぜJPEGをJPGに変換するのか？",
    "whyItems": [
      {
        "title": "アップロード制限への対応",
        "body": "一部のサイトやアプリでは、ファイル選択時に.jpgしか表示されず、同じ形式である.jpegが認識されないことがあります。"
      },
      {
        "title": "ファイル名の整理",
        "body": ".jpg拡張子に統一することで、フォルダやギャラリー、一括アップロード時の管理がしやすくなります。"
      },
      {
        "title": "画質の劣化なし",
        "body": "どちらも同じJPEG形式であるため、変換は実質的に名前の変更であり、画質の劣化はほぼありません。"
      },
      {
        "title": "デバイス内で完結",
        "body": "ファイルはブラウザ内で処理されます。Get URLをクリックしない限り、外部へアップロードされることはありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "JPEGとJPGは違いますか？",
        "a": "いいえ、同じ画像形式です。短い.jpgという拡張子は、3文字までしか使えなかった古いWindowsシステムの名残です。"
      },
      {
        "q": "画質は落ちますか？",
        "a": "ほとんど落ちません。どちらもJPEGであるため、変換は名前の変更に近い処理です。画質92であればオリジナルとほぼ同じです。"
      },
      {
        "q": "一度に複数のファイルを変換できますか？",
        "a": "はい。複数の.jpeg画像をまとめてドロップすれば、すべて.jpgとして連続で保存できます。"
      },
      {
        "q": "ファイルはどこかにアップロードされますか？",
        "a": "いいえ。すべてブラウザ内で処理されます。Get URLを選択してホスティングしない限り、ファイルがデバイスから出ることはありません。"
      },
      {
        "q": "EXIFデータは削除されますか？",
        "a": "はい。再保存時にEXIFメタデータは削除されるため、位置情報やカメラの詳細設定は新しいファイルに引き継がれません。"
      }
    ],
    "ctaTitle": "永続的なURLが必要ですか？",
    "ctaBody": "変換後、Get URLをクリックすると、CDN上でJPGをホストできます。登録不要で無料です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "JPEG 转 JPG — 免费转换器，无需上传",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG 转 JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG 转 PNG" },
      { "pageKey": "convert-to-jpg", "label": "转换为 JPG" },
      { "pageKey": "jpg-to-jpeg", "label": "JPG 转 JPEG" }
    ],
    "metaDescription": "在浏览器中免费将 JPEG 转换为 JPG。JPEG 和 JPG 是同一种格式，只是扩展名不同，一键即可重命名并保存。无需上传，无需注册。",
    "schemaName": "JPEG 转 JPG 转换器",
    "schemaDescription": "在浏览器中本地将 JPEG 文件转换为 .jpg 扩展名。无需上传。",
    "badge": "纯浏览器工具",
    "h1Pre": "JPEG 转 JPG，",
    "h1Highlight": "图像不变，扩展名更正",
    "intro": "JPEG 和 JPG 是完全相同的格式，只是拼写不同。将您的 .jpeg 文件拖放到此处，即可将其转换为 JPG 并下载带有 .jpg 扩展名的文件，全程在浏览器中完成。",
    "howTitle": "如何将 JPEG 转换为 JPG",
    "steps": [
      {
        "title": "拖放 JPEG 文件",
        "body": "将您的 .jpeg 图像拖入框中或点击选择文件。支持批量处理。"
      },
      {
        "title": "选择质量",
        "body": "保持在 92 以维持原图质量，或降低数值以减小文件体积。"
      },
      {
        "title": "下载为 JPG",
        "body": "每个文件都将以 .jpg 扩展名保存。转换过程在您的设备上运行。"
      }
    ],
    "whyTitle": "为什么要将 JPEG 转换为 JPG？",
    "whyItems": [
      {
        "title": "挑剔的上传表单",
        "body": "某些网站和应用在文件列表中仅显示 .jpg，而忽略 .jpeg，尽管它们本质上是一样的。"
      },
      {
        "title": "整洁的文件名",
        "body": "统一的 .jpg 扩展名使文件夹、图库和批量上传更加整洁且可预测。"
      },
      {
        "title": "无质量损失",
        "body": "由于两者都是相同的 JPEG 格式，转换本质上只是重命名，不会造成实际的画质损失。"
      },
      {
        "title": "保留在您的设备上",
        "body": "文件在您的浏览器中处理。除非您点击“获取 URL”，否则不会上传任何内容。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "JPEG 和 JPG 有什么不同吗？",
        "a": "没有。它们是同一种图像格式。短的 .jpg 扩展名是早期 Windows 系统仅允许三个字母作为扩展名的遗留产物。"
      },
      {
        "q": "我会损失画质吗？",
        "a": "几乎不会。两者都是 JPEG，因此转换接近于直接重命名。在质量 92 时，结果与原始文件一致。"
      },
      {
        "q": "可以一次转换多个文件吗？",
        "a": "可以。拖入一批 .jpeg 图像，它们将依次保存为 .jpg。"
      },
      {
        "q": "我的文件会被上传到任何地方吗？",
        "a": "不会。一切都在您的浏览器中进行。只有当您选择“获取 URL”进行托管时，文件才会离开您的设备。"
      },
      {
        "q": "它会移除 EXIF 数据吗？",
        "a": "是的。重新保存会丢弃 EXIF 元数据，因此位置和相机详细信息不会带入新文件中。"
      }
    ],
    "ctaTitle": "需要永久 URL？",
    "ctaBody": "转换后，点击“获取 URL”即可将任何 JPG 托管在我们的 CDN 上。免费，无需注册。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
