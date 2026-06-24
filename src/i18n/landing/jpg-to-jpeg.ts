import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "JPG to JPEG Converter - Free & Instant",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG to JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG to PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convert to JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG to JPG" }
    ],
    "metaDescription": "Convert JPG to JPEG free in your browser. Same image, just the .jpeg extension some upload forms require. One click, no upload, no signup, no quality loss.",
    "schemaName": "JPG to JPEG Converter",
    "schemaDescription": "Rename and re-save JPG files with the .jpeg extension locally in your browser. No upload required.",
    "badge": "Browser-only Tool",
    "h1Pre": "JPG to JPEG,",
    "h1Highlight": "the extension some forms want",
    "intro": "Some upload forms only accept .jpeg, not .jpg, even though the two are identical. This tool is the fix: it re-saves your file with the .jpeg extension a picky form is looking for, without changing the image at all. Drop your .jpg files in the box, download them as .jpeg, and the photo inside stays the same. Everything runs in your browser, and you can grab a shareable link to the result afterwards.",
    "howTitle": "How to convert JPG to JPEG",
    "steps": [
      {
        "title": "Drop JPG files",
        "body": "Drag your .jpg images into the box or click to select them."
      },
      {
        "title": "Keep the quality",
        "body": "Leave quality at 92 for a faithful copy, or lower it for a smaller file."
      },
      {
        "title": "Download as JPEG",
        "body": "Each file saves with the .jpeg extension. The conversion stays on your device."
      }
    ],
    "whyTitle": "Why convert JPG to JPEG?",
    "whyItems": [
      {
        "title": "Strict upload rules",
        "body": "A few portals and job-application forms only allow .jpeg and reject .jpg, even though they are the same format."
      },
      {
        "title": "Matching requirements",
        "body": "When a spec literally says JPEG, handing over a .jpeg file avoids back-and-forth and rejected submissions."
      },
      {
        "title": "No quality loss worth noticing",
        "body": "Both extensions point to the same JPEG format, so the switch is essentially a rename."
      },
      {
        "title": "Runs on your device",
        "body": "Files are processed in your browser. Nothing is uploaded unless you click Get URL."
      }
    ],
    "specsTitle": "JPG to JPEG at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Input", "value": "JPG (.jpg)" },
      { "label": "Output", "value": "JPEG (.jpeg)" },
      { "label": "Max size", "value": "10 MB" }
    ],
    "comparisonTitle": "JPG, JPEG and the extensions people confuse them with",
    "comparisonIntro": "The important fact first: .jpg and .jpeg are the same format and the same image. The table sorts out which extension to reach for and which names belong to genuinely different formats.",
    "comparisonColumns": [
      "Extension",
      "Identical format?",
      "Common on",
      "Why it exists",
      "Use it when"
    ],
    "comparisonRows": [
      { "cells": [".jpeg", "Yes", "Mac, cameras, some forms", "The original full spelling", "A form demands .jpeg"] },
      { "cells": [".jpg", "Yes", "Windows, most software", "Old three-letter limit", "Almost everywhere else"] },
      { "cells": [".jpe", "Yes", "Rare legacy software", "Another JPEG alias", "You almost never need it"] },
      { "cells": [".png", "No", "Everywhere", "A separate format", "You need transparency"] },
      { "cells": [".webp", "No", "Web", "Newer, smaller format", "Web image size matters"] }
    ],
    "useCasesTitle": "When converting JPG to JPEG helps",
    "useCasesIntro": "The image never needs changing here - this is about giving a strict system the exact extension it wants:",
    "useCases": [
      {
        "title": "Job and government portals",
        "body": "Some application forms check the extension text and only accept .jpeg, bouncing a perfectly good .jpg over the spelling alone."
      },
      {
        "title": "Software that wants .jpeg",
        "body": "A handful of older or specialised programs list .jpeg specifically. Handing over the matching extension avoids an import error."
      },
      {
        "title": "Following a strict file spec",
        "body": "When a brief or submission guideline literally says JPEG, a .jpeg file keeps you inside the rules with no back-and-forth."
      }
    ],
    "sections": [
      {
        "heading": "Is .jpg the same as .jpeg?",
        "body": "Yes, completely. JPG and JPEG are two spellings of one image format, named after the Joint Photographic Experts Group. A file saved as photo.jpg and the same file saved as photo.jpeg are identical inside, with the same compression and the same pixels. Changing one to the other does not alter the picture in any way. The whole reason this conversion exists is that some software and some upload forms check the text of the extension rather than the contents of the file."
      },
      {
        "heading": "Why would a form only accept .jpeg?",
        "body": "Usually a strict validation rule. Instead of reading the file to confirm it is a JPEG, the form simply checks whether the name ends in .jpeg, and rejects anything else - including a valid .jpg. It is a quirk of how the form was built, not a sign that your image is wrong. Re-saving the file with the .jpeg extension gives the form exactly the string it is testing for, and the upload goes through."
      },
      {
        "heading": "Does adding the extra letter hurt quality?",
        "body": "No. Because both extensions describe the same JPEG format, switching from .jpg to .jpeg is essentially a rename and re-save. At quality 92 the output looks identical to the input. The only minor change is that re-saving typically clears EXIF metadata such as camera model and GPS location, which is often a small bonus when you are about to upload a photo somewhere public."
      }
    ],
    "howToSchema": true,
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24",
    "faqTitle": "FAQ",
    "faqIntro": "Convert JPG to JPEG free and online, with no signup and no watermark. Your files stay on your device.",
    "faqs": [
      {
        "q": "Is JPG different from JPEG?",
        "a": "No. They are the same image format. The .jpg spelling exists because old systems limited file extensions to three letters."
      },
      {
        "q": "Why would a form need .jpeg?",
        "a": "Some uploaders match the extension text exactly and only look for .jpeg, rejecting a valid .jpg. Converting gives them the name they expect."
      },
      {
        "q": "Can I just rename .jpg to .jpeg?",
        "a": "Yes, that is essentially the change. Renaming works, but this tool does it cleanly and saves you fighting with Windows hidden extensions."
      },
      {
        "q": "Will renaming break the file?",
        "a": "No. The contents are already JPEG, so changing the extension to .jpeg leaves the image intact and openable everywhere."
      },
      {
        "q": "Will my image lose quality?",
        "a": "Practically none. Since both are JPEG, the conversion is close to a straight rename at quality 92."
      },
      {
        "q": "Is .jpe also valid?",
        "a": "Yes, .jpe is another rarely used alias for the same JPEG format. You will almost never be asked for it, but it is not wrong."
      },
      {
        "q": "Does Windows handle .jpeg correctly?",
        "a": "Yes. Modern Windows opens .jpeg files without any trouble; the three-letter .jpg habit is just a holdover from older systems."
      },
      {
        "q": "Will a .jpeg open everywhere a .jpg does?",
        "a": "Yes. Any app or browser that opens .jpg also opens .jpeg, since they are the same format under the hood."
      },
      {
        "q": "Does converting strip metadata?",
        "a": "Re-saving usually clears EXIF data like camera and location, which many people prefer before uploading a photo in public."
      },
      {
        "q": "Can I convert a batch?",
        "a": "Yes. Drop several .jpg files at once and they all save with the .jpeg extension, one after another."
      },
      {
        "q": "Are my files uploaded?",
        "a": "No. The conversion runs in your browser. Your files only leave the device if you click Get URL to host one."
      },
      {
        "q": "Can I get a link to the .jpeg?",
        "a": "Yes. After converting, click Get URL to host the .jpeg on our CDN and get a direct https link you can paste anywhere."
      }
    ],
    "ctaTitle": "Want a permanent URL?",
    "ctaBody": "After converting, click Get URL to host any JPEG on our CDN. Free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de JPG a JPEG — Gratis e instantáneo",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG a JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG a PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir a JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG a JPG" }
    ],
    "metaDescription": "Convierte JPG a JPEG gratis en tu navegador. La misma imagen, solo con la extensión .jpeg que requieren algunos formularios. Un clic, sin subidas, sin registros, sin pérdida de calidad.",
    "schemaName": "Convertidor de JPG a JPEG",
    "schemaDescription": "Cambia el nombre y guarda archivos JPG con la extensión .jpeg localmente en tu navegador. No requiere subida de archivos.",
    "badge": "Herramienta exclusiva de navegador",
    "h1Pre": "De JPG a JPEG,",
    "h1Highlight": "la extensión que piden algunos formularios",
    "intro": "Algunos formularios de carga solo aceptan .jpeg, no .jpg, a pesar de que ambos son idénticos. Suelta tus archivos .jpg aquí para convertirlos a JPEG y descárgalos con la extensión .jpeg, todo directamente en tu navegador.",
    "howTitle": "Cómo convertir JPG a JPEG",
    "steps": [
      {
        "title": "Suelta tus archivos JPG",
        "body": "Arrastra tus imágenes .jpg al recuadro o haz clic para seleccionarlas."
      },
      {
        "title": "Mantén la calidad",
        "body": "Deja la calidad en 92 para una copia fiel, o redúcela para obtener un archivo más pequeño."
      },
      {
        "title": "Descarga como JPEG",
        "body": "Cada archivo se guarda con la extensión .jpeg. La conversión se realiza en tu dispositivo."
      }
    ],
    "whyTitle": "¿Por qué convertir JPG a JPEG?",
    "whyItems": [
      {
        "title": "Reglas de carga estrictas",
        "body": "Algunos portales y formularios de solicitud de empleo solo permiten .jpeg y rechazan .jpg, aunque sean el mismo formato."
      },
      {
        "title": "Cumplir con los requisitos",
        "body": "Cuando una especificación pide explícitamente JPEG, entregar un archivo .jpeg evita rechazos y correcciones innecesarias."
      },
      {
        "title": "Sin pérdida de calidad notable",
        "body": "Ambas extensiones apuntan al mismo formato JPEG, por lo que el cambio es esencialmente un cambio de nombre."
      },
      {
        "title": "Se ejecuta en tu dispositivo",
        "body": "Los archivos se procesan en tu navegador. Nada se sube a la red a menos que hagas clic en Obtener URL."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Es el JPG diferente del JPEG?",
        "a": "No. Son el mismo formato de imagen. La extensión .jpg existe porque los sistemas antiguos limitaban las extensiones de archivo a tres letras."
      },
      {
        "q": "¿Por qué un formulario necesitaría .jpeg?",
        "a": "Algunos sistemas de carga comparan el texto de la extensión exactamente y solo buscan .jpeg. Convertirlo les da el nombre que esperan."
      },
      {
        "q": "¿Mi imagen perderá calidad?",
        "a": "Prácticamente nada. Como ambos son JPEG, la conversión es casi un cambio de nombre directo con una calidad de 92."
      },
      {
        "q": "¿Puedo convertir varios archivos a la vez?",
        "a": "Sí. Suelta varios archivos .jpg a la vez y todos se guardarán con la extensión .jpeg."
      },
      {
        "q": "¿Se suben mis archivos a algún servidor?",
        "a": "No. La conversión se ejecuta en tu navegador. Tus archivos solo salen del dispositivo si haces clic en Obtener URL para alojar uno."
      }
    ],
    "ctaTitle": "¿Quieres una URL permanente?",
    "ctaBody": "Después de convertir, haz clic en Obtener URL para alojar cualquier JPEG en nuestra CDN. Gratis y sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur JPG en JPEG — Gratuit et instantané",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG vers JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG vers PNG" },
      { "pageKey": "convert-to-jpg", "label": "Convertir en JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG vers JPG" }
    ],
    "metaDescription": "Convertissez vos JPG en JPEG gratuitement dans votre navigateur. Même image, juste l'extension .jpeg requise par certains formulaires. Un clic, aucun téléchargement, aucune inscription, aucune perte de qualité.",
    "schemaName": "Convertisseur JPG en JPEG",
    "schemaDescription": "Renommez et enregistrez vos fichiers JPG avec l'extension .jpeg localement dans votre navigateur. Aucun envoi requis.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "JPG vers JPEG,",
    "h1Highlight": "l'extension exigée par certains formulaires",
    "intro": "Certains formulaires d'envoi n'acceptent que le format .jpeg et non .jpg, bien que les deux soient identiques. Déposez vos fichiers .jpg ici pour les convertir en JPEG et les télécharger avec l'extension .jpeg, le tout directement dans votre navigateur.",
    "howTitle": "Comment convertir un JPG en JPEG",
    "steps": [
      {
        "title": "Déposez vos fichiers JPG",
        "body": "Faites glisser vos images .jpg dans la zone ou cliquez pour les sélectionner."
      },
      {
        "title": "Préservez la qualité",
        "body": "Laissez la qualité à 92 pour une copie fidèle, ou réduisez-la pour obtenir un fichier plus léger."
      },
      {
        "title": "Téléchargez en JPEG",
        "body": "Chaque fichier est enregistré avec l'extension .jpeg. La conversion reste sur votre appareil."
      }
    ],
    "whyTitle": "Pourquoi convertir un JPG en JPEG ?",
    "whyItems": [
      {
        "title": "Règles d'envoi strictes",
        "body": "Certains portails et formulaires de candidature n'autorisent que le .jpeg et rejettent le .jpg, alors qu'il s'agit du même format."
      },
      {
        "title": "Respect des spécifications",
        "body": "Lorsqu'une consigne exige explicitement le format JPEG, fournir un fichier .jpeg évite les erreurs et les rejets de soumission."
      },
      {
        "title": "Aucune perte de qualité notable",
        "body": "Les deux extensions désignent le même format JPEG, le changement est donc essentiellement un renommage."
      },
      {
        "title": "Fonctionne sur votre appareil",
        "body": "Les fichiers sont traités dans votre navigateur. Rien n'est envoyé sur un serveur, sauf si vous cliquez sur Obtenir l'URL."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Le JPG est-il différent du JPEG ?",
        "a": "Non. Il s'agit du même format d'image. L'extension .jpg existe car les anciens systèmes limitaient les extensions de fichiers à trois lettres."
      },
      {
        "q": "Pourquoi un formulaire exigerait-il le .jpeg ?",
        "a": "Certains outils d'envoi vérifient strictement l'extension et ne reconnaissent que le .jpeg. La conversion leur donne le nom qu'ils attendent."
      },
      {
        "q": "Mon image perdra-t-elle en qualité ?",
        "a": "Pratiquement pas. Comme les deux sont du JPEG, la conversion équivaut quasiment à un simple renommage à une qualité de 92."
      },
      {
        "q": "Puis-je convertir plusieurs fichiers à la fois ?",
        "a": "Oui. Déposez plusieurs fichiers .jpg simultanément et ils seront tous enregistrés avec l'extension .jpeg."
      },
      {
        "q": "Mes fichiers sont-ils envoyés sur un serveur ?",
        "a": "Non. La conversion s'effectue dans votre navigateur. Vos fichiers ne quittent votre appareil que si vous cliquez sur Obtenir l'URL pour en héberger un."
      }
    ],
    "ctaTitle": "Besoin d'une URL permanente ?",
    "ctaBody": "Après la conversion, cliquez sur Obtenir l'URL pour héberger n'importe quel JPEG sur notre CDN. Gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil principal"
  },
  "de": {
    "metaTitle": "JPG zu JPEG Konverter — Kostenlos & Sofort",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG zu JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG zu PNG" },
      { "pageKey": "convert-to-jpg", "label": "Zu JPG konvertieren" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG zu JPG" }
    ],
    "metaDescription": "Konvertieren Sie JPG zu JPEG kostenlos in Ihrem Browser. Dasselbe Bild, nur mit der .jpeg-Endung, die manche Upload-Formulare verlangen. Ein Klick, kein Upload, keine Anmeldung, kein Qualitätsverlust.",
    "schemaName": "JPG zu JPEG Konverter",
    "schemaDescription": "Benennen Sie JPG-Dateien lokal in Ihrem Browser in .jpeg um und speichern Sie diese neu. Kein Upload erforderlich.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "JPG zu JPEG,",
    "h1Highlight": "die Endung, die manche Formulare verlangen",
    "intro": "Einige Upload-Formulare akzeptieren nur .jpeg, nicht .jpg, obwohl beide identisch sind. Ziehen Sie Ihre .jpg-Dateien hierher, um JPG in JPEG zu konvertieren und sie mit der .jpeg-Endung herunterzuladen – alles direkt in Ihrem Browser.",
    "howTitle": "So konvertieren Sie JPG zu JPEG",
    "steps": [
      {
        "title": "JPG-Dateien ablegen",
        "body": "Ziehen Sie Ihre .jpg-Bilder in das Feld oder klicken Sie, um sie auszuwählen."
      },
      {
        "title": "Qualität beibehalten",
        "body": "Lassen Sie die Qualität bei 92 für eine originalgetreue Kopie oder verringern Sie sie für eine kleinere Datei."
      },
      {
        "title": "Als JPEG herunterladen",
        "body": "Jede Datei wird mit der .jpeg-Endung gespeichert. Die Konvertierung erfolgt direkt auf Ihrem Gerät."
      }
    ],
    "whyTitle": "Warum JPG zu JPEG konvertieren?",
    "whyItems": [
      {
        "title": "Strenge Upload-Regeln",
        "body": "Einige Portale und Bewerbungsformulare erlauben nur .jpeg und lehnen .jpg ab, obwohl es sich um dasselbe Format handelt."
      },
      {
        "title": "Anforderungen erfüllen",
        "body": "Wenn in den Spezifikationen explizit JPEG gefordert wird, vermeidet eine .jpeg-Datei unnötige Rückfragen und abgelehnte Einreichungen."
      },
      {
        "title": "Kein nennenswerter Qualitätsverlust",
        "body": "Beide Endungen verweisen auf dasselbe JPEG-Format, daher ist der Wechsel im Grunde nur eine Umbenennung."
      },
      {
        "title": "Läuft auf Ihrem Gerät",
        "body": "Dateien werden in Ihrem Browser verarbeitet. Nichts wird hochgeladen, es sei denn, Sie klicken auf URL abrufen."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Ist JPG anders als JPEG?",
        "a": "Nein. Es ist dasselbe Bildformat. Die Schreibweise .jpg existiert, weil alte Systeme Dateiendungen auf drei Buchstaben begrenzten."
      },
      {
        "q": "Warum benötigt ein Formular .jpeg?",
        "a": "Manche Upload-Systeme prüfen die Dateiendung exakt und suchen nur nach .jpeg. Die Konvertierung liefert ihnen den erwarteten Namen."
      },
      {
        "q": "Verliert mein Bild an Qualität?",
        "a": "Praktisch nicht. Da beides JPEG ist, entspricht die Konvertierung bei Qualität 92 nahezu einer direkten Umbenennung."
      },
      {
        "q": "Kann ich mehrere Dateien gleichzeitig konvertieren?",
        "a": "Ja. Ziehen Sie mehrere .jpg-Dateien gleichzeitig hinein, und alle werden mit der .jpeg-Endung gespeichert."
      },
      {
        "q": "Werden meine Dateien hochgeladen?",
        "a": "Nein. Die Konvertierung erfolgt in Ihrem Browser. Ihre Dateien verlassen das Gerät nur, wenn Sie auf URL abrufen klicken, um eine Datei zu hosten."
      }
    ],
    "ctaTitle": "Benötigen Sie eine permanente URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung auf URL abrufen, um ein beliebiges JPEG auf unserem CDN zu hosten. Kostenlos, ohne Anmeldung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "JPGからJPEGへの変換 — 無料で即座に",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG→JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG→PNG" },
      { "pageKey": "convert-to-jpg", "label": "JPG変換" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG→JPG" }
    ],
    "metaDescription": "ブラウザ上でJPGをJPEGに無料で変換。中身は同じ画像ですが、アップロードフォームで.jpeg拡張子が必要な場合に最適です。ワンクリック、アップロード不要、登録不要、画質劣化もありません。",
    "schemaName": "JPGからJPEGへの変換ツール",
    "schemaDescription": "ブラウザ上でローカルにJPGファイルを.jpeg拡張子にリネーム・再保存します。アップロードは不要です。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "JPGをJPEGへ、",
    "h1Highlight": "フォームが求める拡張子に",
    "intro": "一部のアップロードフォームでは、中身が同じであっても.jpgではなく.jpegのみを受け付ける場合があります。ここに.jpgファイルをドロップして.jpeg拡張子に変換し、ダウンロードしましょう。すべてブラウザ上で完結します。",
    "howTitle": "JPGをJPEGに変換する方法",
    "steps": [
      {
        "title": "JPGファイルをドロップ",
        "body": "ボックスに.jpg画像をドラッグ＆ドロップするか、クリックしてファイルを選択してください。"
      },
      {
        "title": "画質を維持",
        "body": "忠実なコピーを作成するには画質を92に設定したままにするか、ファイルサイズを小さくするために数値を下げてください。"
      },
      {
        "title": "JPEGとしてダウンロード",
        "body": "各ファイルが.jpeg拡張子で保存されます。変換処理はすべてお使いのデバイス内で行われます。"
      }
    ],
    "whyTitle": "なぜJPGをJPEGに変換するのか？",
    "whyItems": [
      {
        "title": "厳格なアップロードルール",
        "body": "一部のポータルサイトや求人応募フォームでは、同じ形式であるにもかかわらず.jpgを拒否し、.jpegのみを許可する場合があります。"
      },
      {
        "title": "要件への適合",
        "body": "仕様書にJPEGと明記されている場合、.jpegファイルを提出することで、差し戻しや拒否を防ぐことができます。"
      },
      {
        "title": "画質劣化はほぼなし",
        "body": "どちらの拡張子も同じJPEG形式を指しているため、実質的には名前の変更と同じです。"
      },
      {
        "title": "デバイス内で完結",
        "body": "ファイルはブラウザ内で処理されます。Get URLをクリックしない限り、ファイルが外部に送信されることはありません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "JPGとJPEGは違いますか？",
        "a": "いいえ、同じ画像形式です。.jpgという表記は、古いシステムで拡張子が3文字に制限されていた名残です。"
      },
      {
        "q": "なぜフォームで.jpegが必要なのですか？",
        "a": "アップローダーが拡張子の文字列を厳密に照合し、.jpegのみを許可している場合があるためです。変換することで、システムが期待する形式に合わせることができます。"
      },
      {
        "q": "画質は低下しますか？",
        "a": "ほとんど低下しません。どちらもJPEGであるため、画質92での変換は実質的に名前の変更と変わりません。"
      },
      {
        "q": "一括変換はできますか？",
        "a": "はい。複数の.jpgファイルを一度にドロップすれば、すべて.jpeg拡張子で保存されます。"
      },
      {
        "q": "ファイルはアップロードされますか？",
        "a": "いいえ。変換はブラウザ内で行われます。Get URLをクリックしてホスティングしない限り、ファイルがデバイスから外部へ出ることはありません。"
      }
    ],
    "ctaTitle": "永続的なURLが必要ですか？",
    "ctaBody": "変換後、Get URLをクリックすると、そのJPEGを当社のCDNでホストできます。無料、登録不要です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "JPG 转 JPEG 转换器 — 免费且即时",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "png-to-jpg", "label": "PNG 转 JPG" },
      { "pageKey": "jpg-to-png", "label": "JPG 转 PNG" },
      { "pageKey": "convert-to-jpg", "label": "转换为 JPG" },
      { "pageKey": "jpeg-to-jpg", "label": "JPEG 转 JPG" }
    ],
    "metaDescription": "在浏览器中免费将 JPG 转换为 JPEG。图像内容完全相同，仅更改为某些上传表单所需的 .jpeg 后缀。一键操作，无需上传，无需注册，无画质损失。",
    "schemaName": "JPG 转 JPEG 转换器",
    "schemaDescription": "在浏览器本地重命名并重新保存为 .jpeg 后缀的 JPG 文件。无需上传。",
    "badge": "纯浏览器工具",
    "h1Pre": "JPG 转 JPEG，",
    "h1Highlight": "满足特定表单的后缀要求",
    "intro": "尽管 JPG 和 JPEG 本质上是同一种格式，但某些上传表单仅接受 .jpeg 后缀。将您的 .jpg 文件拖放到此处，即可将其转换为 .jpeg 并下载，全程在浏览器中完成。",
    "howTitle": "如何将 JPG 转换为 JPEG",
    "steps": [
      {
        "title": "拖放 JPG 文件",
        "body": "将您的 .jpg 图像拖入框中，或点击进行选择。"
      },
      {
        "title": "保持画质",
        "body": "将画质保持在 92 以获得忠实副本，或降低数值以减小文件体积。"
      },
      {
        "title": "下载为 JPEG",
        "body": "每个文件都将以 .jpeg 后缀保存。转换过程完全在您的设备上进行。"
      }
    ],
    "whyTitle": "为什么要将 JPG 转换为 JPEG？",
    "whyItems": [
      {
        "title": "严格的上传规则",
        "body": "部分门户网站和求职申请表单仅允许 .jpeg，会拒绝 .jpg，尽管它们是同一种格式。"
      },
      {
        "title": "符合规范要求",
        "body": "当规格明确要求 JPEG 时，提供 .jpeg 文件可以避免反复沟通和提交失败。"
      },
      {
        "title": "几乎无画质损失",
        "body": "两个后缀指向同一种 JPEG 格式，因此转换本质上只是重命名。"
      },
      {
        "title": "在您的设备上运行",
        "body": "文件在您的浏览器中处理。除非您点击“获取 URL”，否则不会上传任何内容。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "JPG 和 JPEG 有区别吗？",
        "a": "没有。它们是同一种图像格式。使用 .jpg 是因为旧系统限制文件后缀只能有三个字母。"
      },
      {
        "q": "为什么表单需要 .jpeg？",
        "a": "某些上传程序会严格匹配后缀文本，只识别 .jpeg。转换后可以提供它们预期的名称。"
      },
      {
        "q": "我的图像会损失画质吗？",
        "a": "几乎不会。由于两者都是 JPEG，在 92 画质下转换几乎等同于直接重命名。"
      },
      {
        "q": "可以批量转换吗？",
        "a": "可以。一次拖入多个 .jpg 文件，它们都会以 .jpeg 后缀保存。"
      },
      {
        "q": "我的文件会被上传吗？",
        "a": "不会。转换在您的浏览器中运行。除非您点击“获取 URL”进行托管，否则文件不会离开您的设备。"
      }
    ],
    "ctaTitle": "需要永久 URL？",
    "ctaBody": "转换后，点击“获取 URL”即可将任何 JPEG 托管到我们的 CDN 上。免费，无需注册。",
    "ctaButton": "尝试主上传工具"
  }
} as LandingContentMap;
