import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "HEIC to JPG Converter — 100% in your browser | ImageToURL",
    "metaDescription": "Convert HEIC photos from your iPhone to JPG entirely in your browser. Files never leave your device. Free, unlimited, no signup, no upload.",
    "schemaName": "HEIC to JPG Converter",
    "schemaDescription": "Convert HEIC and HEIF photos from your iPhone to JPG entirely in your browser without uploading files to a server.",
    "badge": "BROWSER-ONLY TOOL",
    "h1Pre": "HEIC to JPG Converter",
    "h1Highlight": "100% in your browser.",
    "intro": "Drop your iPhone HEIC photos here and get JPG files instantly. Conversion runs entirely on your device — your photos never leave your computer.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Drop your HEIC files",
        "body": "Drag photos straight from your iPhone, Mac Finder, or downloads folder. Multi-select is supported."
      },
      {
        "title": "Convert in your browser",
        "body": "A WebAssembly decoder runs locally on your device. Zero network calls — verify it in DevTools."
      },
      {
        "title": "Download or host",
        "body": "Save the JPG to your device, or one-click 'Get URL' to host it on our CDN and grab a shareable link."
      }
    ],
    "whyTitle": "Why convert HEIC to JPG?",
    "whyItems": [
      {
        "title": "Windows compatibility",
        "body": "Windows can't open HEIC out of the box without paid codecs. JPG opens everywhere, every time."
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
        "body": "Other converters upload your photos to their servers. Ours never does — the file stays on your device."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Are my photos really private?",
        "a": "Yes. Conversion happens entirely in your browser using WebAssembly. No file is uploaded to any server."
      },
      {
        "q": "What is HEIC and why do I need to convert it?",
        "a": "HEIC is the default iPhone photo format. It isn't widely supported on Windows or web browsers, so you need to convert it to JPG to share it."
      },
      {
        "q": "Is there a file size or count limit?",
        "a": "No. Because conversion happens locally in your browser, there is no upload limit. You can convert as many files as your memory allows."
      },
      {
        "q": "Will I lose quality converting HEIC to JPG?",
        "a": "We default to 92% quality, which is visually indistinguishable from the original. You can adjust the slider from 60% to 100%."
      },
      {
        "q": "Is this really free?",
        "a": "Yes, completely free with no signup, no watermarks, and no ads. Since the work happens on your computer, there is no cost to run it."
      }
    ],
    "ctaTitle": "Need a permanent URL too?",
    "ctaBody": "After converting, click 'Get URL' on any file to host it on our global CDN — free, no signup.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Convertidor de HEIC a JPG — 100% en tu navegador | ImageToURL",
    "metaDescription": "Convierte fotos HEIC de tu iPhone a JPG directamente en tu navegador. Los archivos nunca salen de tu dispositivo. Gratis, ilimitado, sin registro, sin subidas.",
    "schemaName": "Convertidor de HEIC a JPG",
    "schemaDescription": "Convierte fotos HEIC y HEIF de tu iPhone a JPG directamente en tu navegador sin subir archivos a un servidor.",
    "badge": "HERRAMIENTA SOLO EN NAVEGADOR",
    "h1Pre": "Convertidor de HEIC a JPG",
    "h1Highlight": "100% en tu navegador.",
    "intro": "Suelta tus fotos HEIC de iPhone aquí y obtén archivos JPG al instante. La conversión se ejecuta completamente en tu dispositivo; tus fotos nunca salen de tu computadora.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Suelta tus archivos HEIC",
        "body": "Arrastra las fotos directamente desde tu iPhone, Mac Finder o carpeta de descargas. Se admite la selección múltiple."
      },
      {
        "title": "Convierte en tu navegador",
        "body": "Un decodificador WebAssembly se ejecuta localmente en tu dispositivo. Cero llamadas de red; verifícalo en las herramientas de desarrollador (DevTools)."
      },
      {
        "title": "Descarga u hospeda",
        "body": "Guarda el JPG en tu dispositivo o haz clic en 'Obtener URL' para alojarlo en nuestra CDN y obtener un enlace para compartir."
      }
    ],
    "whyTitle": "¿Por qué convertir HEIC a JPG?",
    "whyItems": [
      {
        "title": "Compatibilidad con Windows",
        "body": "Windows no puede abrir HEIC de forma nativa sin códecs de pago. JPG se abre en todas partes, siempre."
      },
      {
        "title": "Android y mensajería",
        "body": "Muchos teléfonos Android y aplicaciones de chat aún tienen problemas con HEIC. JPG funciona perfectamente en WhatsApp, Messenger y correo electrónico."
      },
      {
        "title": "Web y redes sociales",
        "body": "La mayoría de los blogs, CMS y plataformas sociales antiguas rechazan las subidas en HEIC. Convierte primero para evitar errores de carga."
      },
      {
        "title": "Privacidad por defecto",
        "body": "Otros convertidores suben tus fotos a sus servidores. El nuestro nunca lo hace; el archivo permanece en tu dispositivo."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Mis fotos son realmente privadas?",
        "a": "Sí. La conversión ocurre completamente en tu navegador usando WebAssembly. Ningún archivo se sube a ningún servidor."
      },
      {
        "q": "¿Qué es HEIC y por qué necesito convertirlo?",
        "a": "HEIC es el formato de foto predeterminado del iPhone. No es ampliamente compatible con Windows o navegadores web, por lo que debes convertirlo a JPG para compartirlo."
      },
      {
        "q": "¿Hay un límite de tamaño o cantidad de archivos?",
        "a": "No. Debido a que la conversión ocurre localmente en tu navegador, no hay límite de subida. Puedes convertir tantos archivos como tu memoria permita."
      },
      {
        "q": "¿Perderé calidad al convertir HEIC a JPG?",
        "a": "Usamos una calidad predeterminada del 92%, que es visualmente indistinguible del original. Puedes ajustar el control deslizante del 60% al 100%."
      },
      {
        "q": "¿Es esto realmente gratis?",
        "a": "Sí, completamente gratis, sin registro, sin marcas de agua y sin anuncios. Dado que el trabajo ocurre en tu computadora, no hay costo de ejecución."
      }
    ],
    "ctaTitle": "¿Necesitas también una URL permanente?",
    "ctaBody": "Después de convertir, haz clic en 'Obtener URL' en cualquier archivo para alojarlo en nuestra CDN global; gratis y sin registro.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Convertisseur HEIC en JPG — 100% dans votre navigateur | ImageToURL",
    "metaDescription": "Convertissez vos photos HEIC d'iPhone en JPG directement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil. Gratuit, illimité, sans inscription, sans téléchargement.",
    "schemaName": "Convertisseur HEIC en JPG",
    "schemaDescription": "Convertissez vos photos HEIC et HEIF d'iPhone en JPG entièrement dans votre navigateur sans envoyer de fichiers vers un serveur.",
    "badge": "OUTIL 100% NAVIGATEUR",
    "h1Pre": "Convertisseur HEIC en JPG",
    "h1Highlight": "100% dans votre navigateur.",
    "intro": "Déposez vos photos HEIC d'iPhone ici et obtenez des fichiers JPG instantanément. La conversion s'effectue entièrement sur votre appareil — vos photos ne quittent jamais votre ordinateur.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Déposez vos fichiers HEIC",
        "body": "Faites glisser vos photos directement depuis votre iPhone, le Finder de votre Mac ou votre dossier de téléchargements. La sélection multiple est prise en charge."
      },
      {
        "title": "Convertissez dans votre navigateur",
        "body": "Un décodeur WebAssembly s'exécute localement sur votre appareil. Aucun appel réseau — vérifiez-le dans les outils de développement (DevTools)."
      },
      {
        "title": "Téléchargez ou hébergez",
        "body": "Enregistrez le JPG sur votre appareil, ou cliquez sur 'Obtenir l'URL' pour l'héberger sur notre CDN et obtenir un lien partageable."
      }
    ],
    "whyTitle": "Pourquoi convertir HEIC en JPG ?",
    "whyItems": [
      {
        "title": "Compatibilité Windows",
        "body": "Windows ne peut pas ouvrir les fichiers HEIC nativement sans codecs payants. Le format JPG s'ouvre partout, tout le temps."
      },
      {
        "title": "Android et messagerie",
        "body": "De nombreux téléphones Android et applications de messagerie ont encore du mal avec le format HEIC. Le JPG fonctionne parfaitement dans WhatsApp, Messenger et par e-mail."
      },
      {
        "title": "Web et réseaux sociaux",
        "body": "La plupart des blogs, CMS et anciennes plateformes sociales rejettent les téléchargements HEIC. Convertissez d'abord pour éviter les erreurs d'importation."
      },
      {
        "title": "Confidentialité par défaut",
        "body": "Les autres convertisseurs envoient vos photos sur leurs serveurs. Le nôtre ne le fait jamais — le fichier reste sur votre appareil."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Mes photos sont-elles vraiment privées ?",
        "a": "Oui. La conversion se fait entièrement dans votre navigateur via WebAssembly. Aucun fichier n'est envoyé vers un serveur."
      },
      {
        "q": "Qu'est-ce que le HEIC et pourquoi dois-je le convertir ?",
        "a": "Le HEIC est le format photo par défaut de l'iPhone. Il n'est pas largement pris en charge sur Windows ou les navigateurs web, vous devez donc le convertir en JPG pour le partager."
      },
      {
        "q": "Y a-t-il une limite de taille ou de nombre de fichiers ?",
        "a": "Non. Comme la conversion se fait localement dans votre navigateur, il n'y a pas de limite d'envoi. Vous pouvez convertir autant de fichiers que votre mémoire le permet."
      },
      {
        "q": "Vais-je perdre en qualité en convertissant HEIC en JPG ?",
        "a": "Nous utilisons par défaut une qualité de 92%, visuellement identique à l'original. Vous pouvez ajuster le curseur de 60% à 100%."
      },
      {
        "q": "Est-ce vraiment gratuit ?",
        "a": "Oui, totalement gratuit, sans inscription, sans filigrane et sans publicité. Comme le travail s'effectue sur votre ordinateur, cela ne coûte rien."
      }
    ],
    "ctaTitle": "Besoin d'une URL permanente ?",
    "ctaBody": "Après la conversion, cliquez sur 'Obtenir l'URL' sur n'importe quel fichier pour l'héberger sur notre CDN mondial — gratuit, sans inscription.",
    "ctaButton": "Essayer l'outil principal"
  },
  "de": {
    "metaTitle": "HEIC zu JPG Konverter — 100% in Ihrem Browser | ImageToURL",
    "metaDescription": "Konvertieren Sie HEIC-Fotos von Ihrem iPhone direkt in Ihrem Browser zu JPG. Dateien verlassen niemals Ihr Gerät. Kostenlos, unbegrenzt, ohne Anmeldung, kein Upload.",
    "schemaName": "HEIC zu JPG Konverter",
    "schemaDescription": "Konvertieren Sie HEIC- und HEIF-Fotos von Ihrem iPhone direkt in Ihrem Browser zu JPG, ohne Dateien auf einen Server hochzuladen.",
    "badge": "BROWSER-ONLY TOOL",
    "h1Pre": "HEIC zu JPG Konverter",
    "h1Highlight": "100% in Ihrem Browser.",
    "intro": "Ziehen Sie Ihre iPhone HEIC-Fotos hierher und erhalten Sie sofort JPG-Dateien. Die Konvertierung erfolgt vollständig auf Ihrem Gerät – Ihre Fotos verlassen niemals Ihren Computer.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "HEIC-Dateien ablegen",
        "body": "Ziehen Sie Fotos direkt von Ihrem iPhone, Mac Finder oder aus dem Download-Ordner. Mehrfachauswahl wird unterstützt."
      },
      {
        "title": "Im Browser konvertieren",
        "body": "Ein WebAssembly-Decoder läuft lokal auf Ihrem Gerät. Keine Netzwerkaufrufe – überprüfen Sie dies in den DevTools."
      },
      {
        "title": "Herunterladen oder hosten",
        "body": "Speichern Sie das JPG auf Ihrem Gerät oder klicken Sie auf 'URL abrufen', um es auf unserem CDN zu hosten und einen teilbaren Link zu erhalten."
      }
    ],
    "whyTitle": "Warum HEIC in JPG konvertieren?",
    "whyItems": [
      {
        "title": "Windows-Kompatibilität",
        "body": "Windows kann HEIC ohne kostenpflichtige Codecs nicht nativ öffnen. JPG lässt sich überall und jederzeit öffnen."
      },
      {
        "title": "Android & Messenger",
        "body": "Viele Android-Telefone und Chat-Apps haben Probleme mit HEIC. JPG funktioniert einfach in WhatsApp, Messenger und E-Mails."
      },
      {
        "title": "Web & Social Media",
        "body": "Die meisten Blogs, CMS und ältere soziale Plattformen lehnen HEIC-Uploads ab. Konvertieren Sie zuerst, um Upload-Fehler zu vermeiden."
      },
      {
        "title": "Datenschutz als Standard",
        "body": "Andere Konverter laden Ihre Fotos auf ihre Server hoch. Unser Tool tut dies nie – die Datei bleibt auf Ihrem Gerät."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Sind meine Fotos wirklich privat?",
        "a": "Ja. Die Konvertierung erfolgt vollständig in Ihrem Browser mittels WebAssembly. Es wird keine Datei auf einen Server hochgeladen."
      },
      {
        "q": "Was ist HEIC und warum muss ich es konvertieren?",
        "a": "HEIC ist das Standard-Fotoformat des iPhones. Es wird unter Windows oder in Webbrowsern nicht umfassend unterstützt, daher müssen Sie es in JPG konvertieren, um es zu teilen."
      },
      {
        "q": "Gibt es ein Limit für Dateigröße oder Anzahl?",
        "a": "Nein. Da die Konvertierung lokal in Ihrem Browser stattfindet, gibt es kein Upload-Limit. Sie können so viele Dateien konvertieren, wie Ihr Arbeitsspeicher zulässt."
      },
      {
        "q": "Verliere ich bei der Konvertierung von HEIC zu JPG an Qualität?",
        "a": "Wir verwenden standardmäßig 92% Qualität, was visuell nicht vom Original zu unterscheiden ist. Sie können den Regler von 60% bis 100% anpassen."
      },
      {
        "q": "Ist das wirklich kostenlos?",
        "a": "Ja, komplett kostenlos ohne Anmeldung, ohne Wasserzeichen und ohne Werbung. Da die Arbeit auf Ihrem Computer stattfindet, entstehen keine Kosten für den Betrieb."
      }
    ],
    "ctaTitle": "Benötigen Sie auch eine dauerhafte URL?",
    "ctaBody": "Klicken Sie nach der Konvertierung bei einer beliebigen Datei auf 'URL abrufen', um sie auf unserem globalen CDN zu hosten – kostenlos und ohne Anmeldung.",
    "ctaButton": "Haupt-Uploader ausprobieren"
  },
  "ja": {
    "metaTitle": "HEIC to JPG 変換 — ブラウザで完結 | ImageToURL",
    "metaDescription": "iPhoneのHEIC写真をブラウザ上でJPGに変換。ファイルはデバイスから一切送信されません。無料、無制限、登録不要、アップロードなし。",
    "schemaName": "HEIC to JPG 変換",
    "schemaDescription": "サーバーにアップロードすることなく、ブラウザ上でiPhoneのHEIC/HEIF写真をJPGに変換します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "HEIC to JPG 変換",
    "h1Highlight": "ブラウザで100%完結。",
    "intro": "iPhoneのHEIC写真をドラッグ＆ドロップするだけで、すぐにJPGファイルに変換。処理はすべてデバイス内で行われるため、写真はPCから外部へ送信されません。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "HEICファイルをドロップ",
        "body": "iPhone、MacのFinder、またはダウンロードフォルダから写真を直接ドラッグしてください。複数選択にも対応しています。"
      },
      {
        "title": "ブラウザで変換",
        "body": "WebAssemblyデコーダーがデバイス上でローカルに動作します。ネットワーク通信はゼロ。DevToolsで確認可能です。"
      },
      {
        "title": "ダウンロードまたはホスト",
        "body": "JPGをデバイスに保存するか、「URLを取得」をクリックしてCDNでホストし、共有リンクを作成できます。"
      }
    ],
    "whyTitle": "なぜHEICをJPGに変換するのか？",
    "whyItems": [
      {
        "title": "Windowsとの互換性",
        "body": "Windowsでは有料コーデックなしでHEICを開くことができません。JPGならどこでも確実に開けます。"
      },
      {
        "title": "Androidとメッセージアプリ",
        "body": "多くのAndroid端末やチャットアプリはHEICに未対応です。WhatsApp、Messenger、メールなどではJPGが確実です。"
      },
      {
        "title": "WebとSNS",
        "body": "多くのブログ、CMS、古いSNSプラットフォームはHEICのアップロードを拒否します。事前に変換してエラーを防ぎましょう。"
      },
      {
        "title": "プライバシー重視",
        "body": "他の変換サイトは写真をサーバーにアップロードしますが、当サイトは違います。ファイルは常にあなたのデバイス内に留まります。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "写真は本当にプライベートですか？",
        "a": "はい。変換はブラウザ内のWebAssemblyで完結します。サーバーへのファイルアップロードは一切ありません。"
      },
      {
        "q": "HEICとは何ですか？なぜ変換が必要なのですか？",
        "a": "HEICはiPhoneの標準写真形式です。WindowsやWebブラウザでのサポートが不十分なため、共有するにはJPGへの変換が必要です。"
      },
      {
        "q": "ファイルサイズや枚数に制限はありますか？",
        "a": "いいえ。ブラウザ内でローカル変換を行うため、アップロード制限はありません。メモリが許す限り何枚でも変換可能です。"
      },
      {
        "q": "変換で画質は落ちますか？",
        "a": "デフォルトで92%の品質に設定しており、見た目ではオリジナルと区別がつきません。スライダーで60%から100%まで調整可能です。"
      },
      {
        "q": "本当に無料ですか？",
        "a": "はい、登録や透かし、広告なしで完全に無料です。処理はすべてあなたのPC上で行われるため、運営コストがかかりません。"
      }
    ],
    "ctaTitle": "永続的なURLも必要ですか？",
    "ctaBody": "変換後、各ファイルの「URLを取得」をクリックすると、グローバルCDNでホストできます（無料・登録不要）。",
    "ctaButton": "アップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "HEIC 转 JPG 转换器 — 100% 在浏览器中完成 | ImageToURL",
    "metaDescription": "将 iPhone 的 HEIC 照片直接在浏览器中转换为 JPG。文件绝不会离开您的设备。免费、无限制、无需注册、无需上传。",
    "schemaName": "HEIC 转 JPG 转换器",
    "schemaDescription": "将 iPhone 的 HEIC 和 HEIF 照片直接在浏览器中转换为 JPG，无需将文件上传到服务器。",
    "badge": "纯浏览器工具",
    "h1Pre": "HEIC 转 JPG 转换器",
    "h1Highlight": "100% 在浏览器中完成。",
    "intro": "将您的 iPhone HEIC 照片拖放到此处，即可立即获取 JPG 文件。转换过程完全在您的设备上运行 — 您的照片绝不会离开您的电脑。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "拖放您的 HEIC 文件",
        "body": "直接从您的 iPhone、Mac Finder 或下载文件夹中拖入照片。支持多选。"
      },
      {
        "title": "在浏览器中转换",
        "body": "WebAssembly 解码器在您的设备上本地运行。零网络调用 — 您可以在 DevTools 中进行验证。"
      },
      {
        "title": "下载或托管",
        "body": "将 JPG 保存到您的设备，或点击“获取 URL”将其托管在我们的 CDN 上并获取可共享的链接。"
      }
    ],
    "whyTitle": "为什么要将 HEIC 转换为 JPG？",
    "whyItems": [
      {
        "title": "Windows 兼容性",
        "body": "Windows 在没有付费编解码器的情况下无法直接打开 HEIC。JPG 则随时随地都能打开。"
      },
      {
        "title": "Android 和即时通讯",
        "body": "许多 Android 手机和聊天应用仍难以处理 HEIC。JPG 在 WhatsApp、Messenger 和电子邮件中均可正常使用。"
      },
      {
        "title": "网页和社交媒体",
        "body": "大多数博客、CMS 和旧版社交平台拒绝 HEIC 上传。先转换以避免上传错误。"
      },
      {
        "title": "默认隐私保护",
        "body": "其他转换器会将您的照片上传到他们的服务器。我们绝不会这样做 — 文件始终保留在您的设备上。"
      }
    ],
    "faqTitle": "常见问题解答",
    "faqs": [
      {
        "q": "我的照片真的私密吗？",
        "a": "是的。转换完全在您的浏览器中使用 WebAssembly 完成。没有任何文件会被上传到任何服务器。"
      },
      {
        "q": "什么是 HEIC，为什么我需要转换它？",
        "a": "HEIC 是 iPhone 的默认照片格式。它在 Windows 或网页浏览器上的支持度不高，因此您需要将其转换为 JPG 才能分享。"
      },
      {
        "q": "有文件大小或数量限制吗？",
        "a": "没有。因为转换是在您的浏览器中本地进行的，所以没有上传限制。只要您的内存允许，您可以转换任意数量的文件。"
      },
      {
        "q": "将 HEIC 转换为 JPG 会损失质量吗？",
        "a": "我们默认使用 92% 的质量，这在视觉上与原图无异。您可以将滑块从 60% 调整到 100%。"
      },
      {
        "q": "这真的是免费的吗？",
        "a": "是的，完全免费，无需注册、无水印、无广告。由于处理过程在您的电脑上完成，因此运行它没有任何成本。"
      }
    ],
    "ctaTitle": "也需要永久 URL 吗？",
    "ctaBody": "转换后，点击任意文件上的“获取 URL”，即可将其托管在我们的全球 CDN 上 — 免费且无需注册。",
    "ctaButton": "尝试主上传器"
  },
} as LandingContentMap;
