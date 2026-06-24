import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Base64 to Image - Browser Decoder | Free",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-compressor", "label": "Image compressor" },
      { "pageKey": "image-resizer", "label": "Image resizer" },
      { "pageKey": "image-to-base64", "label": "Image to Base64" },
      { "pageKey": "favicon-generator", "label": "Favicon generator" }
    ],
    "metaDescription": "Decode base64 strings and data URIs back into previewable, downloadable image files right in your browser. Free, instant, fully local, no upload.",
    "schemaName": "Base64 to Image Decoder",
    "schemaDescription": "Decode base64 data URIs to image files locally in your browser.",
    "badge": "Browser-only Tool",
    "h1Pre": "Base64 to Image",
    "h1Highlight": "paste, preview, download.",
    "intro": "Got a long base64 string and no idea what picture is hiding inside it? Paste it in the box above, with or without the data:image/...;base64,... prefix, and the real image appears so you can preview it and download it as a PNG or JPG. Everything runs in your browser, so the string never leaves your device and the result shows up instantly. If you then want a shareable https link for the recovered picture, you can pass it to the main uploader.",
    "specsTitle": "Base64 to image at a glance",
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
        "label": "Input",
        "value": "Base64 data URI or raw Base64"
      },
      {
        "label": "Max size",
        "value": "10 MB"
      },
      {
        "label": "Output",
        "value": "Image file (PNG/JPG) + optional link"
      }
    ],
    "howTitle": "How to decode base64 to an image",
    "steps": [
      {
        "title": "Paste base64 or data URI",
        "body": "Drop in either the full data:image/...;base64,... string or just the raw base64 payload. The string can come from CSS, an API response, a database field or another tool - it all works."
      },
      {
        "title": "Click Decode",
        "body": "The picture renders right away in your browser. A full data URI keeps its own MIME type; a bare base64 chunk is treated as PNG by default."
      },
      {
        "title": "Download or host it",
        "body": "Save the file to your device as a normal image, or send it to the uploader if you want a short https link to share."
      }
    ],
    "whyTitle": "Why decode base64 here",
    "whyItems": [
      {
        "title": "Nothing leaves your browser",
        "body": "Decoding is a local atob() and Blob step. The string is never sent to a server, which matters when it came from private config or an internal API."
      },
      {
        "title": "Check what a data URI really is",
        "body": "Inline data URIs are unreadable by eye. Paste one here to confirm it holds the image you expect before you ship it in code or email."
      },
      {
        "title": "Get a normal file back",
        "body": "Once decoded you have a regular PNG, JPG, GIF, WebP or SVG you can open, edit or upload anywhere - no special viewer needed."
      },
      {
        "title": "Works offline and instantly",
        "body": "There's no upload wait and no internet round trip. Open the page once and it keeps decoding even with the connection dropped."
      }
    ],
    "comparisonTitle": "Base64 vs a hosted URL",
    "comparisonIntro": "A base64 data URI and a hosted image URL both put a picture into a page, but they behave very differently. One inlines the bytes as text, the other points at a file on a server. Here's when each makes sense.",
    "comparisonColumns": [
      "Method",
      "Needs hosting",
      "Good for",
      "Downsides"
    ],
    "comparisonRows": [
      {
        "cells": [
          "Base64 data URI",
          "No hosting",
          "Tiny inline assets, single-file HTML, email, code",
          "Long unreadable string, about 33% larger, not shareable as a link, not cached separately"
        ]
      },
      {
        "cells": [
          "Hosted image URL",
          "Needs a host",
          "Sharing, large images, pictures reused across pages",
          "One extra network request, but the file is short, cacheable and easy to paste"
        ]
      }
    ],
    "useCasesTitle": "When people decode a base64 string",
    "useCasesIntro": "A base64 image can land in your lap from all sorts of places. These are the common ones:",
    "useCases": [
      {
        "title": "From an API or database",
        "body": "Some APIs and DB columns store images as base64 text. Paste the value here to pull the actual picture out and save it as a file."
      },
      {
        "title": "From CSS or HTML source",
        "body": "Inline background-image: url(data:...) rules and embedded <img src=data:...> tags hide a real image. Decode it to inspect or reuse the asset."
      },
      {
        "title": "From an email or export",
        "body": "Email source and some app exports embed images as base64. Recover them here instead of hunting for the original file."
      }
    ],
    "sections": [
      {
        "heading": "What is a base64 image?",
        "body": "A base64 image is a picture encoded as plain text so it can be dropped straight into code, CSS or an email instead of living in a separate file. The text usually starts with a data URI prefix like data:image/png;base64, followed by a long run of letters, digits, plus and slash characters. A browser reads that string, turns it back into the original bytes and shows the picture. Nothing about the image changes - it's the same pixels, just written in a format that travels inside text. Decoding simply reverses the process and hands you the file again."
      },
      {
        "heading": "When to use base64 vs a URL",
        "body": "Base64 is handy for tiny, fixed assets: a small icon in a stylesheet, a logo in an HTML email, or a single-file page with no external requests. Because the bytes live inside the document, there's no extra request and nothing to host. For anything bigger or anything you want to share, a hosted URL wins. A link is short, you can paste it into a chat or a post, the file caches on its own, and the same image can be reused across many pages without bloating each one. As a rough rule, inline below a few kilobytes and link above it."
      },
      {
        "heading": "Why base64 makes files about 33% bigger",
        "body": "Base64 maps every 3 bytes of binary data onto 4 ASCII characters. Each character it uses is itself one byte of text, so 3 bytes in become 4 bytes out - a jump of roughly one third. That's the trade for making binary safe to store and send as plain text: you accept about 33% more size. On a 2 KB icon the overhead is trivial, but on a 2 MB photo it adds hundreds of kilobytes and makes the surrounding code hard to read. This is the main reason large images belong in real files behind a URL rather than inlined as base64."
      }
    ],
    "faqTitle": "Base64 to image FAQ",
    "faqs": [
      {
        "q": "How do I convert a base64 string into an image?",
        "a": "Paste the string into the box above and click Decode. The picture appears right away and you can download it as a PNG or JPG. It works with or without the data:image prefix."
      },
      {
        "q": "Do I need the data: prefix?",
        "a": "No. A full data URI keeps its embedded MIME type, so the output matches the original format. A raw base64 chunk with no prefix is decoded as PNG by default, which is fine for most cases."
      },
      {
        "q": "Is anything uploaded when I decode?",
        "a": "No. The decode happens locally with the browser's atob() and the Blob constructor. The string never goes to a server, so it's safe for private or internal data."
      },
      {
        "q": "What image formats can I get out?",
        "a": "Whatever was encoded: PNG, JPG, GIF, WebP or SVG. A full data URI tells the decoder the exact type; a bare payload comes out as PNG."
      },
      {
        "q": "Why is nothing happening after I paste?",
        "a": "Usually there are invisible line breaks or spaces in the string. Remove them, or paste as plain text, then decode again. A truncated string that's missing its end will also fail."
      },
      {
        "q": "Is there a size limit on the string?",
        "a": "A textarea handles several megabytes of base64 fine. Past about 10 MB of text the browser slows down, which lines up with a roughly 7 MB original image."
      },
      {
        "q": "My transparent PNG looks blank - is it broken?",
        "a": "Probably not. A PNG with full transparency can look empty against a white page. Download it and open it over a dark or checkered background to confirm the pixels are there."
      },
      {
        "q": "Does it handle URL-safe base64?",
        "a": "Yes. URL-safe base64 swaps + for - and / for _. The decoder normalizes those back before converting, so strings from URLs and tokens still work."
      },
      {
        "q": "Can I decode a data URI that holds an SVG?",
        "a": "Yes. SVG data URIs preview correctly. If the SVG was URL-encoded rather than base64-encoded, open the result in a new tab to see it render."
      },
      {
        "q": "Does decoding change or compress the image?",
        "a": "No. Decoding is exact and lossless - you get back the same bytes that were encoded. There's no resizing, re-compression or watermark."
      },
      {
        "q": "Can I get a shareable link for the decoded image?",
        "a": "Yes. After you save the file, send it to the main uploader to get a direct https link that embeds in Discord, Reddit, forums and email. Base64 itself can't be shared as a link."
      },
      {
        "q": "Why would an image be stored as base64 in the first place?",
        "a": "To keep it inside text. APIs, JSON config, CSS, single-file HTML and email all benefit from embedding a small image directly instead of pointing at a separate file. The cost is the larger size and unreadable string."
      }
    ],
    "howToSchema": true,
    "ctaTitle": "Host the decoded image?",
    "ctaBody": "Upload the picture you just recovered to get a permanent, shareable https link in seconds. No sign-up needed.",
    "ctaButton": "Try the main uploader",
    "datePublished": "2026-06-15",
    "dateModified": "2026-06-24"
  },
  "es": {
    "metaTitle": "Base64 a imagen — Decodificador en navegador | Gratis",
    "relatedTitle": "Herramientas de imagen relacionadas",
    "related": [
      { "pageKey": "image-compressor", "label": "Compresor de imágenes" },
      { "pageKey": "image-resizer", "label": "Redimensionador de imágenes" },
      { "pageKey": "image-to-base64", "label": "Imagen a Base64" },
      { "pageKey": "favicon-generator", "label": "Generador de favicon" }
    ],
    "metaDescription": "Decodifica cadenas base64 y URIs de datos en archivos de imagen descargables directamente en tu navegador. Gratis, instantáneo, local y sin subidas.",
    "schemaName": "Decodificador de Base64 a imagen",
    "schemaDescription": "Decodifica URIs de datos base64 a archivos de imagen localmente en tu navegador.",
    "badge": "Herramienta solo en navegador",
    "h1Pre": "Base64 a imagen:",
    "h1Highlight": "pega, previsualiza, descarga.",
    "intro": "Pega una cadena base64 o una URI de datos completa y obtén un archivo de imagen descargable. Proceso totalmente local.",
    "howTitle": "Cómo decodificar",
    "steps": [
      {
        "title": "Pega el base64 o la URI de datos",
        "body": "Pega la cadena completa data:image/...;base64,... o solo el contenido base64."
      },
      {
        "title": "Haz clic en Decodificar",
        "body": "Aparecerá la vista previa de la imagen; haz clic en Descargar para guardarla."
      },
      {
        "title": "Guarda",
        "body": "Utiliza el archivo descargado como una imagen normal."
      }
    ],
    "whyTitle": "Por qué decodificar base64",
    "whyItems": [
      {
        "title": "Depurar URIs de datos",
        "body": "Verifica que una URI de datos codificada represente realmente la imagen esperada."
      },
      {
        "title": "Extraer de configuraciones",
        "body": "Extrae imágenes incrustadas en archivos JSON y guárdalas como archivos."
      },
      {
        "title": "Imágenes en correos",
        "body": "Recupera imágenes incrustadas en el código fuente de correos electrónicos."
      },
      {
        "title": "Recuperación offline",
        "body": "No necesitas internet; se ejecuta completamente en tu navegador."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Necesito el prefijo data:?",
        "a": "Ambas opciones funcionan. Si usas la URI completa, el decodificador usa el MIME incrustado. Si es solo el código, se asume PNG por defecto."
      },
      {
        "q": "¿Por qué no ocurre nada al pegar?",
        "a": "Suele deberse a saltos de línea invisibles. Elimínalos o pega como texto sin formato."
      },
      {
        "q": "¿Se sube algo a un servidor?",
        "a": "No. La decodificación se realiza localmente mediante atob() y el constructor Blob."
      },
      {
        "q": "¿Qué formatos puedo obtener?",
        "a": "PNG, JPG, GIF, WebP, SVG; cualquier formato que haya sido codificado."
      },
      {
        "q": "¿Longitud máxima al pegar?",
        "a": "Varios MB en el área de texto. A partir de 10 MB el rendimiento disminuye."
      },
      {
        "q": "¿El PNG transparente se ve en blanco?",
        "a": "Podría tener transparencia real. Haz clic derecho y selecciona Guardar para verificar."
      },
      {
        "q": "¿Variantes de base64 seguras para URL?",
        "a": "Sí, normalizamos - a + y _ a /."
      },
      {
        "q": "¿URI de datos con SVG codificado en URL?",
        "a": "La vista previa funciona; ábrela en una nueva pestaña para ver el SVG."
      }
    ],
    "ctaTitle": "¿Quieres alojar la imagen decodificada?",
    "ctaBody": "Súbela para obtener una URL permanente.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Base64 vers Image — Décodeur par navigateur | Gratuit",
    "relatedTitle": "Outils d'images connexes",
    "related": [
      { "pageKey": "image-compressor", "label": "Compresseur d'images" },
      { "pageKey": "image-resizer", "label": "Outil de redimensionnement d'images" },
      { "pageKey": "image-to-base64", "label": "Image vers Base64" },
      { "pageKey": "favicon-generator", "label": "Générateur de favicon" }
    ],
    "metaDescription": "Décodez vos chaînes base64 et data URIs en fichiers image prévisualisables et téléchargeables directement dans votre navigateur. Gratuit, instantané, 100% local, sans téléchargement.",
    "schemaName": "Décodeur Base64 vers Image",
    "schemaDescription": "Décodez les data URIs base64 en fichiers image localement dans votre navigateur.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Base64 vers Image :",
    "h1Highlight": "collez, prévisualisez, téléchargez.",
    "intro": "Collez une chaîne base64 ou une data URI complète pour obtenir un fichier image prévisualisable et téléchargeable. Traitement entièrement local.",
    "howTitle": "Comment décoder",
    "steps": [
      {
        "title": "Collez le base64 ou la data URI",
        "body": "Collez soit la chaîne complète data:image/...;base64,... soit uniquement la charge utile base64."
      },
      {
        "title": "Cliquez sur Décoder",
        "body": "La prévisualisation de l'image s'affiche ; cliquez sur Télécharger pour l'enregistrer."
      },
      {
        "title": "Enregistrez",
        "body": "Utilisez le fichier téléchargé comme n'importe quelle image classique."
      }
    ],
    "whyTitle": "Pourquoi décoder le base64",
    "whyItems": [
      {
        "title": "Déboguer les data URIs",
        "body": "Vérifiez qu'une data URI encodée correspond bien à l'image attendue."
      },
      {
        "title": "Extraire des configurations",
        "body": "Récupérez des images intégrées dans des fichiers de configuration JSON et enregistrez-les."
      },
      {
        "title": "Images intégrées aux emails",
        "body": "Récupérez les images insérées dans le code source d'un email."
      },
      {
        "title": "Récupération hors ligne",
        "body": "Aucune connexion internet requise — fonctionne entièrement dans votre navigateur."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Le préfixe data: est-il nécessaire ?",
        "a": "Les deux fonctionnent. Avec une data URI complète, le décodeur utilise le MIME intégré. Si c'est du brut, le format PNG est utilisé par défaut."
      },
      {
        "q": "Pourquoi rien ne se passe après le collage ?",
        "a": "Il s'agit souvent de sauts de ligne invisibles. Supprimez-les ou collez en tant que texte brut."
      },
      {
        "q": "Y a-t-il un transfert de données ?",
        "a": "Non. Le décodage utilise les fonctions locales atob() et le constructeur Blob."
      },
      {
        "q": "Quels formats puis-je obtenir ?",
        "a": "PNG, JPG, GIF, WebP, SVG — tout ce qui a été encodé."
      },
      {
        "q": "Longueur maximale de collage ?",
        "a": "Plusieurs Mo dans la zone de texte. Au-delà de 10 Mo, les performances peuvent diminuer."
      },
      {
        "q": "Le PNG transparent semble vide ?",
        "a": "Il se peut qu'il possède une transparence réelle. Faites un clic droit et enregistrez pour vérifier."
      },
      {
        "q": "Variantes base64 URL-safe ?",
        "a": "Oui, nous normalisons - en + et _ en /."
      },
      {
        "q": "Data URI avec SVG encodé ?",
        "a": "La prévisualisation fonctionne ; ouvrez dans un nouvel onglet pour voir le SVG."
      }
    ],
    "ctaTitle": "Héberger l'image décodée ?",
    "ctaBody": "Téléversez-la pour obtenir une URL permanente.",
    "ctaButton": "Essayer l'outil d'upload principal"
  },
  "de": {
    "metaTitle": "Base64 in Bild umwandeln — Browser-Decoder | Kostenlos",
    "relatedTitle": "Verwandte Bildwerkzeuge",
    "related": [
      { "pageKey": "image-compressor", "label": "Bildkompressor" },
      { "pageKey": "image-resizer", "label": "Bildgrößenänderungstool" },
      { "pageKey": "image-to-base64", "label": "Bild zu Base64" },
      { "pageKey": "favicon-generator", "label": "Favicon-Generator" }
    ],
    "metaDescription": "Dekodieren Sie Base64-Strings und Data-URIs direkt in Ihrem Browser in eine Bilddatei. Kostenlos, sofort, lokal und ohne Upload.",
    "schemaName": "Base64-zu-Bild-Decoder",
    "schemaDescription": "Dekodieren Sie Base64-Data-URIs lokal in Ihrem Browser in Bilddateien.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "Base64 in Bild",
    "h1Highlight": "einfügen, ansehen, herunterladen.",
    "intro": "Fügen Sie einen Base64-String oder eine vollständige Data-URI ein und erhalten Sie eine Bilddatei zum Herunterladen. Vollständig lokal.",
    "howTitle": "So funktioniert die Dekodierung",
    "steps": [
      {
        "title": "Base64 oder Data-URI einfügen",
        "body": "Fügen Sie entweder den vollständigen data:image/...;base64,... String oder nur den Base64-Inhalt ein."
      },
      {
        "title": "Dekodieren klicken",
        "body": "Die Bildvorschau erscheint; klicken Sie auf Download, um es zu speichern."
      },
      {
        "title": "Speichern",
        "body": "Verwenden Sie die heruntergeladene Datei wie jedes normale Bild."
      }
    ],
    "whyTitle": "Warum Base64 dekodieren?",
    "whyItems": [
      {
        "title": "Data-URIs debuggen",
        "body": "Überprüfen Sie, ob eine kodierte Data-URI tatsächlich das erwartete Bild darstellt."
      },
      {
        "title": "Aus Konfiguration extrahieren",
        "body": "Extrahieren Sie eingebettete Bilder aus JSON-Konfigurationen und speichern Sie diese als Dateien."
      },
      {
        "title": "Eingebettete E-Mail-Bilder",
        "body": "Stellen Sie Bilder wieder her, die im E-Mail-Quelltext eingebettet sind."
      },
      {
        "title": "Offline-Wiederherstellung",
        "body": "Kein Internet erforderlich – läuft vollständig in Ihrem Browser."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Benötige ich das data:-Präfix?",
        "a": "Beides funktioniert. Bei einer vollständigen Data-URI nutzt der Decoder den eingebetteten MIME-Typ. Bei Rohdaten wird standardmäßig PNG verwendet."
      },
      {
        "q": "Warum passiert nach dem Einfügen nichts?",
        "a": "Oft sind unsichtbare Zeilenumbrüche enthalten. Entfernen Sie diese oder fügen Sie den Text als reinen Text ein."
      },
      {
        "q": "Wird etwas hochgeladen?",
        "a": "Nein. Die Dekodierung erfolgt lokal mittels atob() und Blob-Konstruktor."
      },
      {
        "q": "Welche Formate kann ich erhalten?",
        "a": "PNG, JPG, GIF, WebP, SVG – was auch immer kodiert wurde."
      },
      {
        "q": "Maximale Länge beim Einfügen?",
        "a": "Mehrere MB im Textbereich. Ab ca. 10 MB lässt die Performance nach."
      },
      {
        "q": "Transparentes PNG sieht leer aus?",
        "a": "Es könnte tatsächlich transparent sein. Klicken Sie mit der rechten Maustaste auf 'Speichern unter', um es zu prüfen."
      },
      {
        "q": "URL-sichere Base64-Varianten?",
        "a": "Ja – wir normalisieren - zu + und _ zu /."
      },
      {
        "q": "Data-URI mit URL-kodiertem SVG?",
        "a": "Die Vorschau funktioniert; öffnen Sie es in einem neuen Tab, um das SVG zu sehen."
      }
    ],
    "ctaTitle": "Das dekodierte Bild hosten?",
    "ctaBody": "Laden Sie es hoch, um eine permanente URL zu erhalten.",
    "ctaButton": "Haupt-Uploader testen"
  },
  "ja": {
    "metaTitle": "Base64から画像へ — ブラウザデコーダー | 無料",
    "relatedTitle": "関連画像ツール",
    "related": [
      { "pageKey": "image-compressor", "label": "画像圧縮" },
      { "pageKey": "image-resizer", "label": "画像リサイザー" },
      { "pageKey": "image-to-base64", "label": "画像→Base64" },
      { "pageKey": "favicon-generator", "label": "ファビコン生成" }
    ],
    "metaDescription": "Base64文字列やデータURIをブラウザ上で即座にデコードし、プレビューおよびダウンロード可能な画像ファイルに変換します。完全ローカル処理でアップロード不要、無料です。",
    "schemaName": "Base64画像デコーダー",
    "schemaDescription": "ブラウザ上でBase64データURIを画像ファイルにローカルデコードします。",
    "badge": "ブラウザ専用ツール",
    "h1Pre": "Base64から画像へ",
    "h1Highlight": "貼り付け、プレビュー、ダウンロード。",
    "intro": "Base64文字列またはデータURIを貼り付けるだけで、プレビュー可能な画像ファイルに変換してダウンロードできます。処理はすべてローカルで行われます。",
    "howTitle": "デコードの手順",
    "steps": [
      {
        "title": "Base64またはデータURIを貼り付け",
        "body": "data:image/...;base64,...形式の文字列全体、またはBase64ペイロードのみを貼り付けます。"
      },
      {
        "title": "デコードをクリック",
        "body": "画像プレビューが表示されます。「ダウンロード」をクリックして保存してください。"
      },
      {
        "title": "保存",
        "body": "ダウンロードしたファイルは通常の画像として利用可能です。"
      }
    ],
    "whyTitle": "Base64をデコードする理由",
    "whyItems": [
      {
        "title": "データURIのデバッグ",
        "body": "エンコードされたデータURIが意図した画像であるかを簡単に確認できます。"
      },
      {
        "title": "設定ファイルからの抽出",
        "body": "JSON設定ファイルに埋め込まれた画像を抽出し、ファイルとして保存できます。"
      },
      {
        "title": "メール埋め込み画像の復元",
        "body": "メールのソースコードに埋め込まれた画像を復元します。"
      },
      {
        "title": "オフラインでの復元",
        "body": "インターネット接続は不要です。ブラウザ内で完全に動作します。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "data: プレフィックスは必要ですか？",
        "a": "どちらでも可能です。完全なデータURIの場合は埋め込まれたMIMEタイプを使用し、生のBase64の場合はPNGとして扱われます。"
      },
      {
        "q": "貼り付けても何も起こりませんか？",
        "a": "目に見えない改行が含まれている可能性があります。改行を削除するか、プレーンテキストとして貼り付けてください。"
      },
      {
        "q": "データはアップロードされますか？",
        "a": "いいえ。デコードはブラウザのatob()関数とBlobコンストラクタを使用してローカルで行われます。"
      },
      {
        "q": "どのような形式で出力できますか？",
        "a": "PNG、JPG、GIF、WebP、SVGなど、エンコードされていた形式で出力されます。"
      },
      {
        "q": "貼り付け可能な最大長は？",
        "a": "テキストエリアで数MBまで対応可能です。約10MBを超えるとパフォーマンスが低下する場合があります。"
      },
      {
        "q": "透過PNGが真っ白に見えますか？",
        "a": "実際には透過されている可能性があります。右クリックで保存して確認してください。"
      },
      {
        "q": "Base64のURLセーフ版に対応していますか？",
        "a": "はい。- を + に、_ を / に正規化して処理します。"
      },
      {
        "q": "URLエンコードされたSVGのデータURIは？",
        "a": "プレビューは可能ですが、SVGとして正しく表示するには新しいタブで開いてください。"
      }
    ],
    "ctaTitle": "デコードした画像をホストしますか？",
    "ctaBody": "アップロードして永続的なURLを取得しましょう。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "Base64 转图片 — 浏览器解码器 | 免费",
    "relatedTitle": "相关图片工具",
    "related": [
      { "pageKey": "image-compressor", "label": "图片压缩工具" },
      { "pageKey": "image-resizer", "label": "图片缩放工具" },
      { "pageKey": "image-to-base64", "label": "图片转 Base64" },
      { "pageKey": "favicon-generator", "label": "Favicon 生成器" }
    ],
    "metaDescription": "在浏览器中直接将 Base64 字符串和 Data URI 解码为可预览、可下载的图片文件。免费、即时、完全本地化，无需上传。",
    "schemaName": "Base64 转图片解码器",
    "schemaDescription": "在浏览器中本地将 Base64 Data URI 解码为图片文件。",
    "badge": "纯浏览器工具",
    "h1Pre": "Base64 转图片",
    "h1Highlight": "粘贴、预览、下载。",
    "intro": "粘贴 Base64 字符串或完整的 Data URI，即可获取可预览、可下载的图片文件。完全本地处理。",
    "howTitle": "如何解码",
    "steps": [
      {
        "title": "粘贴 Base64 或 Data URI",
        "body": "粘贴完整的 data:image/...;base64,... 字符串或仅粘贴 Base64 有效载荷。"
      },
      {
        "title": "点击解码",
        "body": "图片预览将显示；点击“下载”即可保存。"
      },
      {
        "title": "保存",
        "body": "将下载的文件作为普通图片使用。"
      }
    ],
    "whyTitle": "为什么要解码 Base64",
    "whyItems": [
      {
        "title": "调试 Data URI",
        "body": "验证编码后的 Data URI 是否确实代表预期的图片。"
      },
      {
        "title": "从配置中提取",
        "body": "从 JSON 配置文件中提取内联图片并保存为文件。"
      },
      {
        "title": "提取邮件嵌入图片",
        "body": "恢复嵌入在电子邮件源码中的图片。"
      },
      {
        "title": "离线恢复",
        "body": "无需互联网连接 — 完全在您的浏览器中运行。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "我需要 data: 前缀吗？",
        "a": "两者皆可。如果是完整的 Data URI，解码器会使用嵌入的 MIME 类型；如果是原始字符串，则默认为 PNG。"
      },
      {
        "q": "为什么粘贴后没有反应？",
        "a": "通常是因为存在不可见的换行符。请删除它们或以纯文本形式粘贴。"
      },
      {
        "q": "有任何数据被上传吗？",
        "a": "没有。解码过程完全通过本地的 atob() 和 Blob 构造函数完成。"
      },
      {
        "q": "我可以获得哪些格式？",
        "a": "PNG、JPG、GIF、WebP、SVG — 取决于编码时的格式。"
      },
      {
        "q": "最大粘贴长度是多少？",
        "a": "文本区域支持数 MB。超过 10 MB 时性能可能会下降。"
      },
      {
        "q": "透明 PNG 看起来是空白的？",
        "a": "它可能确实包含透明度。右键点击“保存”即可验证。"
      },
      {
        "q": "支持 URL 安全的 Base64 变体吗？",
        "a": "支持 — 我们会将 - 规范化为 +，将 _ 规范化为 /。"
      },
      {
        "q": "支持 URL 编码的 SVG Data URI 吗？",
        "a": "预览功能有效；在新标签页中打开即可查看 SVG。"
      }
    ],
    "ctaTitle": "需要托管解码后的图片？",
    "ctaBody": "上传以获取永久链接。",
    "ctaButton": "尝试主上传工具"
  }
} as LandingContentMap;
