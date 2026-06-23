import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to Base64 — 100% Browser | Free Encoder",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-compressor", "label": "Image compressor" },
      { "pageKey": "image-resizer", "label": "Image resizer" },
      { "pageKey": "base64-to-image", "label": "Base64 to image" },
      { "pageKey": "favicon-generator", "label": "Favicon generator" }
    ],
    "metaDescription": "Convert any PNG, JPG, GIF, SVG, or WebP image to a base64 data URI you can paste into CSS, HTML, or JSON. Instant, free, runs in your browser, no upload.",
    "schemaName": "Image to Base64 Encoder",
    "schemaDescription": "Encode images as base64 data URIs locally in your browser.",
    "badge": "Browser-only Tool",
    "h1Pre": "Image to Base64",
    "h1Highlight": "instant data URI.",
    "intro": "Drop an image — get a ready-to-paste data URI for CSS, HTML, JSON, or email. Runs in your browser.",
    "howTitle": "How to convert",
    "steps": [
      {
        "title": "Drop an image",
        "body": "Drop any PNG, JPG, GIF, SVG, or WebP."
      },
      {
        "title": "Copy the data URI",
        "body": "The full data:image/...;base64,... string appears in the output box."
      },
      {
        "title": "Paste anywhere",
        "body": "Use in CSS url(), HTML <img src>, or JSON config."
      }
    ],
    "whyTitle": "When to use base64",
    "whyItems": [
      {
        "title": "Tiny icons",
        "body": "Embed sub-1KB icons inline to avoid a network request."
      },
      {
        "title": "Email HTML",
        "body": "When you cannot link external assets."
      },
      {
        "title": "Inline CSS",
        "body": "Eliminate the extra HTTP request for critical background images."
      },
      {
        "title": "Offline apps",
        "body": "Bundle images into source for fully offline use."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "What is base64 image encoding?",
        "a": "Base64 encodes binary data as ASCII text — lets you embed images directly inside CSS, HTML, or JSON."
      },
      {
        "q": "When should I use base64 instead of a URL?",
        "a": "For tiny images, emails, or inline CSS. For anything bigger, use a hosted URL — base64 inflates size by ~33%."
      },
      {
        "q": "Why is the base64 string so big?",
        "a": "Base64 costs 4 chars per 3 bytes — ~33% overhead."
      },
      {
        "q": "Is anything uploaded?",
        "a": "No. Local FileReader.readAsDataURL call."
      },
      {
        "q": "SVG encoding?",
        "a": "Works. URL-encoding can be smaller for SVG."
      },
      {
        "q": "How to use in CSS?",
        "a": "Paste inside url() — background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "How in HTML?",
        "a": "Put in img src: <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "Any file-size limit?",
        "a": "Practical browser limits around 2 MB for inline data URIs."
      }
    ],
    "ctaTitle": "Need a hosted URL instead?",
    "ctaBody": "For images > 2 KB, a CDN URL is faster.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Imagen a Base64 — 100% en navegador | Codificador gratuito",
    "metaDescription": "Convierte cualquier imagen PNG, JPG, GIF, SVG o WebP a una URI de datos base64 para pegar en CSS, HTML o JSON. Instantáneo, gratuito, funciona en tu navegador, sin subidas.",
    "schemaName": "Codificador de imagen a Base64",
    "schemaDescription": "Codifica imágenes como URIs de datos base64 localmente en tu navegador.",
    "badge": "Herramienta solo en navegador",
    "h1Pre": "Imagen a Base64",
    "h1Highlight": "URI de datos instantánea.",
    "intro": "Suelta una imagen y obtén una URI de datos lista para pegar en CSS, HTML, JSON o correo electrónico. Se ejecuta en tu navegador.",
    "howTitle": "Cómo convertir",
    "steps": [
      {
        "title": "Suelta una imagen",
        "body": "Suelta cualquier archivo PNG, JPG, GIF, SVG o WebP."
      },
      {
        "title": "Copia la URI de datos",
        "body": "La cadena completa data:image/...;base64,... aparecerá en el cuadro de salida."
      },
      {
        "title": "Pega donde quieras",
        "body": "Úsala en url() de CSS, <img src> de HTML o configuraciones JSON."
      }
    ],
    "whyTitle": "Cuándo usar base64",
    "whyItems": [
      {
        "title": "Iconos pequeños",
        "body": "Inserta iconos de menos de 1 KB para evitar una solicitud de red."
      },
      {
        "title": "HTML para correo",
        "body": "Cuando no puedes enlazar recursos externos."
      },
      {
        "title": "CSS en línea",
        "body": "Elimina la solicitud HTTP adicional para imágenes de fondo críticas."
      },
      {
        "title": "Apps sin conexión",
        "body": "Incluye imágenes en el código fuente para un uso totalmente offline."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Qué es la codificación de imagen base64?",
        "a": "Base64 codifica datos binarios como texto ASCII, permitiéndote insertar imágenes directamente dentro de CSS, HTML o JSON."
      },
      {
        "q": "¿Cuándo debería usar base64 en lugar de una URL?",
        "a": "Para imágenes diminutas, correos electrónicos o CSS en línea. Para archivos más grandes, usa una URL alojada, ya que base64 aumenta el tamaño en un 33% aproximadamente."
      },
      {
        "q": "¿Por qué la cadena base64 es tan larga?",
        "a": "Base64 utiliza 4 caracteres por cada 3 bytes, lo que supone un incremento de tamaño del 33%."
      },
      {
        "q": "¿Se sube algo a un servidor?",
        "a": "No. Se utiliza la llamada local FileReader.readAsDataURL."
      },
      {
        "q": "¿Codificación SVG?",
        "a": "Funciona. La codificación de URL puede ser más eficiente para archivos SVG."
      },
      {
        "q": "¿Cómo usarlo en CSS?",
        "a": "Pégalo dentro de url() — background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "¿Cómo usarlo en HTML?",
        "a": "Ponlo en el src de la imagen: <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "¿Hay límite de tamaño de archivo?",
        "a": "Los límites prácticos del navegador rondan los 2 MB para URIs de datos en línea."
      }
    ],
    "ctaTitle": "¿Necesitas una URL alojada en su lugar?",
    "ctaBody": "Para imágenes de más de 2 KB, una URL de CDN es más rápida.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Image en Base64 — 100% navigateur | Encodeur gratuit",
    "metaDescription": "Convertissez n'importe quelle image PNG, JPG, GIF, SVG ou WebP en URI de données base64 à coller dans votre CSS, HTML ou JSON. Instantané, gratuit, s'exécute dans votre navigateur, aucun téléchargement.",
    "schemaName": "Encodeur d'image en Base64",
    "schemaDescription": "Encodez vos images en URI de données base64 localement dans votre navigateur.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Image en Base64",
    "h1Highlight": "URI de données instantané.",
    "intro": "Déposez une image et obtenez une URI de données prête à l'emploi pour CSS, HTML, JSON ou e-mail. S'exécute directement dans votre navigateur.",
    "howTitle": "Comment convertir",
    "steps": [
      {
        "title": "Déposez une image",
        "body": "Déposez n'importe quel fichier PNG, JPG, GIF, SVG ou WebP."
      },
      {
        "title": "Copiez l'URI de données",
        "body": "La chaîne complète data:image/...;base64,... apparaît dans la zone de sortie."
      },
      {
        "title": "Collez partout",
        "body": "Utilisez-la dans un url() CSS, une balise <img src> HTML ou une configuration JSON."
      }
    ],
    "whyTitle": "Quand utiliser le base64",
    "whyItems": [
      {
        "title": "Petites icônes",
        "body": "Intégrez des icônes de moins de 1 Ko pour éviter une requête réseau."
      },
      {
        "title": "E-mails HTML",
        "body": "Lorsque vous ne pouvez pas lier des ressources externes."
      },
      {
        "title": "CSS en ligne",
        "body": "Éliminez la requête HTTP supplémentaire pour les images d'arrière-plan critiques."
      },
      {
        "title": "Applications hors ligne",
        "body": "Intégrez les images dans le code source pour une utilisation totalement hors ligne."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Qu'est-ce que l'encodage d'image en base64 ?",
        "a": "Le base64 encode les données binaires sous forme de texte ASCII, ce qui permet d'intégrer des images directement dans le CSS, le HTML ou le JSON."
      },
      {
        "q": "Quand utiliser le base64 plutôt qu'une URL ?",
        "a": "Pour les très petites images, les e-mails ou le CSS en ligne. Pour tout ce qui est plus volumineux, utilisez une URL hébergée — le base64 augmente la taille d'environ 33 %."
      },
      {
        "q": "Pourquoi la chaîne base64 est-elle si longue ?",
        "a": "Le base64 utilise 4 caractères pour 3 octets, soit une surcharge d'environ 33 %."
      },
      {
        "q": "Y a-t-il un téléchargement de fichier ?",
        "a": "Non. Tout est traité localement via FileReader.readAsDataURL."
      },
      {
        "q": "Encodage SVG ?",
        "a": "Cela fonctionne. L'encodage d'URL peut parfois être plus léger pour les SVG."
      },
      {
        "q": "Comment l'utiliser en CSS ?",
        "a": "Collez-le dans un url() — background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "Comment l'utiliser en HTML ?",
        "a": "Placez-le dans un src d'image : <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "Y a-t-il une limite de taille ?",
        "a": "Les limites pratiques des navigateurs se situent autour de 2 Mo pour les URI de données en ligne."
      }
    ],
    "ctaTitle": "Besoin d'une URL hébergée ?",
    "ctaBody": "Pour les images de plus de 2 Ko, une URL CDN est plus rapide.",
    "ctaButton": "Essayer l'outil d'upload principal"
  },
  "de": {
    "metaTitle": "Bild zu Base64 — 100% Browser | Kostenloser Encoder",
    "metaDescription": "Konvertieren Sie jedes PNG, JPG, GIF, SVG oder WebP Bild in einen Base64 Data URI für CSS, HTML oder JSON. Sofort, kostenlos, direkt im Browser, kein Upload.",
    "schemaName": "Bild zu Base64 Encoder",
    "schemaDescription": "Kodieren Sie Bilder lokal in Ihrem Browser als Base64 Data URIs.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "Bild zu Base64",
    "h1Highlight": "sofortiger Data URI.",
    "intro": "Bild ablegen – erhalten Sie einen sofort einsatzbereiten Data URI für CSS, HTML, JSON oder E-Mails. Läuft direkt in Ihrem Browser.",
    "howTitle": "So konvertieren Sie",
    "steps": [
      {
        "title": "Bild ablegen",
        "body": "Ziehen Sie ein beliebiges PNG, JPG, GIF, SVG oder WebP in das Fenster."
      },
      {
        "title": "Data URI kopieren",
        "body": "Der vollständige data:image/...;base64,... String erscheint im Ausgabefeld."
      },
      {
        "title": "Überall einfügen",
        "body": "Verwenden Sie ihn in CSS url(), HTML <img src> oder JSON-Konfigurationen."
      }
    ],
    "whyTitle": "Wann man Base64 verwendet",
    "whyItems": [
      {
        "title": "Kleine Icons",
        "body": "Betten Sie Icons unter 1 KB direkt ein, um Netzwerkanfragen zu vermeiden."
      },
      {
        "title": "E-Mail HTML",
        "body": "Wenn Sie keine externen Assets verlinken können."
      },
      {
        "title": "Inline CSS",
        "body": "Eliminieren Sie zusätzliche HTTP-Anfragen für kritische Hintergrundbilder."
      },
      {
        "title": "Offline-Apps",
        "body": "Bündeln Sie Bilder direkt im Quellcode für die vollständige Offline-Nutzung."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Was ist Base64-Bildkodierung?",
        "a": "Base64 kodiert Binärdaten als ASCII-Text – so können Sie Bilder direkt in CSS, HTML oder JSON einbetten."
      },
      {
        "q": "Wann sollte ich Base64 statt einer URL verwenden?",
        "a": "Für winzige Bilder, E-Mails oder Inline-CSS. Für alles Größere verwenden Sie eine gehostete URL – Base64 erhöht die Dateigröße um ca. 33%."
      },
      {
        "q": "Warum ist der Base64-String so groß?",
        "a": "Base64 benötigt 4 Zeichen pro 3 Bytes – das entspricht einem Overhead von ca. 33%."
      },
      {
        "q": "Wird etwas hochgeladen?",
        "a": "Nein. Es wird lokal über FileReader.readAsDataURL verarbeitet."
      },
      {
        "q": "SVG-Kodierung?",
        "a": "Funktioniert. URL-Kodierung kann bei SVGs jedoch kleiner sein."
      },
      {
        "q": "Wie verwende ich es in CSS?",
        "a": "Fügen Sie es in url() ein – background-image: url('data:image/png;base64,...')."
      },
      {
        "q": "Wie in HTML?",
        "a": "Fügen Sie es in das img src Attribut ein: <img src=\"data:image/png;base64,...\">."
      },
      {
        "q": "Gibt es eine Dateigrößenbeschränkung?",
        "a": "Praktische Browser-Limits liegen bei etwa 2 MB für Inline Data URIs."
      }
    ],
    "ctaTitle": "Benötigen Sie stattdessen eine gehostete URL?",
    "ctaBody": "Für Bilder über 2 KB ist eine CDN-URL schneller.",
    "ctaButton": "Haupt-Uploader testen"
  },
  "ja": {
    "metaTitle": "画像からBase64へ変換 — ブラウザ完結型 | 無料エンコーダー",
    "metaDescription": "PNG、JPG、GIF、SVG、WebP画像をCSS、HTML、JSONに貼り付け可能なbase64データURIに変換します。ブラウザ上で即座に変換、アップロード不要の無料ツールです。",
    "schemaName": "画像からBase64へのエンコーダー",
    "schemaDescription": "ブラウザ上でローカルに画像をbase64データURIへエンコードします。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "画像からBase64へ",
    "h1Highlight": "即座にデータURI化",
    "intro": "画像をドロップするだけで、CSS、HTML、JSON、メールですぐに使えるデータURIを取得できます。すべてブラウザ内で処理されます。",
    "howTitle": "変換方法",
    "steps": [
      {
        "title": "画像をドロップ",
        "body": "PNG、JPG、GIF、SVG、WebPファイルをドロップしてください。"
      },
      {
        "title": "データURIをコピー",
        "body": "data:image/...;base64,... 形式の文字列がすぐに出力ボックスに表示されます。"
      },
      {
        "title": "どこでも貼り付け",
        "body": "CSSのurl()、HTMLの<img src>、またはJSON設定ファイルで使用できます。"
      }
    ],
    "whyTitle": "base64の活用シーン",
    "whyItems": [
      {
        "title": "小さなアイコン",
        "body": "1KB未満のアイコンをインライン化し、ネットワークリクエストを削減します。"
      },
      {
        "title": "HTMLメール",
        "body": "外部アセットへのリンクが制限されている場合に最適です。"
      },
      {
        "title": "インラインCSS",
        "body": "重要な背景画像のリクエストを減らし、読み込みを最適化します。"
      },
      {
        "title": "オフラインアプリ",
        "body": "画像をソースコードに含めることで、完全なオフライン動作を実現します。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "base64画像エンコーディングとは？",
        "a": "バイナリデータをASCIIテキストに変換する手法です。CSS、HTML、JSON内に画像を直接埋め込むことができます。"
      },
      {
        "q": "URLの代わりにbase64を使うべき時は？",
        "a": "小さな画像、メール、インラインCSSに適しています。大きな画像はファイルサイズが約33%増加するため、ホストされたURLの使用を推奨します。"
      },
      {
        "q": "なぜbase64文字列は長くなるのですか？",
        "a": "3バイトのデータを4文字で表現するため、約33%のオーバーヘッドが発生します。"
      },
      {
        "q": "ファイルはどこかにアップロードされますか？",
        "a": "いいえ。FileReader.readAsDataURLを使用してブラウザ内でローカル処理されます。"
      },
      {
        "q": "SVGのエンコードは可能ですか？",
        "a": "可能です。ただし、SVGの場合はURLエンコードの方がサイズが小さくなる場合があります。"
      },
      {
        "q": "CSSでの使い方は？",
        "a": "url()の中に貼り付けます。例：background-image: url('data:image/png;base64,...');"
      },
      {
        "q": "HTMLでの使い方は？",
        "a": "imgタグのsrc属性に指定します：<img src=\"data:image/png;base64,...\">"
      },
      {
        "q": "ファイルサイズの制限はありますか？",
        "a": "ブラウザの仕様上、インラインデータURIとしては2MB程度が実用的な上限です。"
      }
    ],
    "ctaTitle": "ホストされたURLが必要ですか？",
    "ctaBody": "2KBを超える画像には、CDN経由のURLの方が高速です。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "图片转 Base64 — 100% 浏览器运行 | 免费编码器",
    "metaDescription": "将任何 PNG、JPG、GIF、SVG 或 WebP 图片转换为可粘贴到 CSS、HTML 或 JSON 中的 base64 数据 URI。即时、免费、在浏览器中运行，无需上传。",
    "schemaName": "图片转 Base64 编码器",
    "schemaDescription": "在浏览器中本地将图片编码为 base64 数据 URI。",
    "badge": "纯浏览器工具",
    "h1Pre": "图片转 Base64",
    "h1Highlight": "即时数据 URI。",
    "intro": "拖入图片，即可获得适用于 CSS、HTML、JSON 或电子邮件的即用型数据 URI。完全在您的浏览器中运行。",
    "howTitle": "如何转换",
    "steps": [
      {
        "title": "拖入图片",
        "body": "拖入任何 PNG、JPG、GIF、SVG 或 WebP 文件。"
      },
      {
        "title": "复制数据 URI",
        "body": "完整的 data:image/...;base64,... 字符串将出现在输出框中。"
      },
      {
        "title": "随处粘贴",
        "body": "用于 CSS url()、HTML <img src> 或 JSON 配置中。"
      }
    ],
    "whyTitle": "何时使用 base64",
    "whyItems": [
      {
        "title": "微型图标",
        "body": "嵌入 1KB 以下的图标，避免额外的网络请求。"
      },
      {
        "title": "HTML 邮件",
        "body": "在无法链接外部资源时使用。"
      },
      {
        "title": "内联 CSS",
        "body": "消除关键背景图片的额外 HTTP 请求。"
      },
      {
        "title": "离线应用",
        "body": "将图片打包到源代码中，实现完全离线使用。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "什么是 base64 图片编码？",
        "a": "Base64 将二进制数据编码为 ASCII 文本，允许您直接将图片嵌入 CSS、HTML 或 JSON 中。"
      },
      {
        "q": "何时应该使用 base64 而不是 URL？",
        "a": "适用于微型图片、电子邮件或内联 CSS。对于较大的图片，请使用托管 URL，因为 base64 会使文件大小增加约 33%。"
      },
      {
        "q": "为什么 base64 字符串这么长？",
        "a": "Base64 每 3 个字节占用 4 个字符，会有约 33% 的额外开销。"
      },
      {
        "q": "文件会上传吗？",
        "a": "不会。使用本地 FileReader.readAsDataURL 调用。"
      },
      {
        "q": "支持 SVG 编码吗？",
        "a": "支持。对于 SVG，URL 编码有时体积更小。"
      },
      {
        "q": "如何在 CSS 中使用？",
        "a": "粘贴到 url() 中 — background-image: url('data:image/png;base64,...')。"
      },
      {
        "q": "如何在 HTML 中使用？",
        "a": "放入 img src 中：<img src=\"data:image/png;base64,...\">。"
      },
      {
        "q": "有文件大小限制吗？",
        "a": "浏览器对内联数据 URI 的实际限制约为 2 MB。"
      }
    ],
    "ctaTitle": "需要托管的 URL？",
    "ctaBody": "对于大于 2 KB 的图片，使用 CDN URL 速度更快。",
    "ctaButton": "尝试主上传器"
  }
} as LandingContentMap;
