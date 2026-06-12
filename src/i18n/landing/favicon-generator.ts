import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Favicon Generator — 100% Browser | All sizes + HTML",
    "metaDescription": "Generate favicons at every required size (16 to 512) from one source image, plus a ready-to-paste HTML snippet. Free, runs in your browser, no upload.",
    "schemaName": "Favicon Generator",
    "schemaDescription": "Generate favicons at 16/32/48/180/192/512 sizes from a single source image.",
    "badge": "Browser-only Tool",
    "h1Pre": "Favicon Generator",
    "h1Highlight": "every size, one drop.",
    "intro": "Drop a square image (512×512 ideal) — get 16, 32, 48, 180, 192, and 512 favicon PNGs plus a ready-to-paste HTML snippet.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Drop a square image",
        "body": "A 512×512 PNG or JPG is ideal — the tool scales down from your source."
      },
      {
        "title": "Download each size",
        "body": "16×16, 32×32, 48×48, 180×180, 192×192, 512×512 PNGs appear."
      },
      {
        "title": "Paste the HTML snippet",
        "body": "Copy the generated <link> tags into your <head>."
      }
    ],
    "whyTitle": "Why all these sizes",
    "whyItems": [
      {
        "title": "32×32 — browser tabs",
        "body": "The default every browser picks for tabs."
      },
      {
        "title": "180×180 — Apple touch",
        "body": "Home-screen icon on iOS."
      },
      {
        "title": "192×192 / 512×512 — PWA",
        "body": "Manifest icons for Android install."
      },
      {
        "title": "16×16 / 48×48 — legacy",
        "body": "Cramped bookmark bars and Windows shortcuts."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "What sizes do I need in 2026?",
        "a": "32×32 (tabs), 180×180 (iOS), 192/512 (PWA). 16×16 for bookmarks, 48×48 for Windows."
      },
      {
        "q": "Do I still need .ico?",
        "a": "No for modern browsers. IE11 still asks for /favicon.ico if you need it."
      },
      {
        "q": "SVG favicon — better?",
        "a": "Better for flat logos. Worse for photographic logos."
      },
      {
        "q": "Is anything uploaded?",
        "a": "No. Canvas resizing in your browser."
      },
      {
        "q": "Non-square logo?",
        "a": "The tool center-crops to square before scaling."
      },
      {
        "q": "Light and dark mode?",
        "a": "Use a PNG with a colored badge, or SVG with prefers-color-scheme."
      },
      {
        "q": "What HTML do I need?",
        "a": "The generated snippet wires up <link rel=\"icon\">, Apple touch icon, and manifest."
      },
      {
        "q": "Need a manifest.json?",
        "a": "Only for PWA install prompt."
      }
    ],
    "ctaTitle": "Need favicons hosted?",
    "ctaBody": "Upload them to our CDN for fast delivery.",
    "ctaButton": "Try the main uploader"
  },
  "es": {
    "metaTitle": "Generador de Favicon — 100% en el navegador | Todos los tamaños + HTML",
    "metaDescription": "Genera favicons en todos los tamaños necesarios (16 a 512) a partir de una imagen, además de un fragmento HTML listo para copiar. Gratis, funciona en tu navegador, sin subidas.",
    "schemaName": "Generador de Favicon",
    "schemaDescription": "Genera favicons en tamaños 16/32/48/180/192/512 a partir de una sola imagen fuente.",
    "badge": "Herramienta solo en navegador",
    "h1Pre": "Generador de Favicon",
    "h1Highlight": "todos los tamaños, una sola imagen.",
    "intro": "Suelta una imagen cuadrada (512×512 ideal) y obtén archivos PNG de 16, 32, 48, 180, 192 y 512, además de un fragmento HTML listo para usar.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Suelta una imagen cuadrada",
        "body": "Un PNG o JPG de 512×512 es ideal; la herramienta escala desde tu fuente."
      },
      {
        "title": "Descarga cada tamaño",
        "body": "Aparecerán archivos PNG de 16×16, 32×32, 48×48, 180×180, 192×192 y 512×512."
      },
      {
        "title": "Pega el fragmento HTML",
        "body": "Copia las etiquetas <link> generadas en tu <head>."
      }
    ],
    "whyTitle": "Por qué tantos tamaños",
    "whyItems": [
      {
        "title": "32×32 — pestañas del navegador",
        "body": "El tamaño predeterminado que eligen todos los navegadores para las pestañas."
      },
      {
        "title": "180×180 — Apple touch",
        "body": "Icono de pantalla de inicio en iOS."
      },
      {
        "title": "192×192 / 512×512 — PWA",
        "body": "Iconos de manifiesto para la instalación en Android."
      },
      {
        "title": "16×16 / 48×48 — legado",
        "body": "Barras de marcadores estrechas y accesos directos de Windows."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Qué tamaños necesito en 2026?",
        "a": "32×32 (pestañas), 180×180 (iOS), 192/512 (PWA). 16×16 para marcadores, 48×48 para Windows."
      },
      {
        "q": "¿Todavía necesito .ico?",
        "a": "No para navegadores modernos. IE11 aún solicita /favicon.ico si lo necesitas."
      },
      {
        "q": "¿Es mejor un favicon SVG?",
        "a": "Mejor para logotipos planos. Peor para logotipos fotográficos."
      },
      {
        "q": "¿Se sube algo a un servidor?",
        "a": "No. El redimensionamiento se hace mediante Canvas en tu navegador."
      },
      {
        "q": "¿Logotipo no cuadrado?",
        "a": "La herramienta recorta el centro a un cuadrado antes de escalar."
      },
      {
        "q": "¿Modo claro y oscuro?",
        "a": "Usa un PNG con un distintivo de color, o un SVG con prefers-color-scheme."
      },
      {
        "q": "¿Qué HTML necesito?",
        "a": "El fragmento generado configura <link rel=\"icon\">, el icono de Apple touch y el manifiesto."
      },
      {
        "q": "¿Necesito un manifest.json?",
        "a": "Solo para el aviso de instalación de PWA."
      }
    ],
    "ctaTitle": "¿Necesitas alojar tus favicons?",
    "ctaBody": "Súbelos a nuestra CDN para una entrega rápida.",
    "ctaButton": "Probar el cargador principal"
  },
  "fr": {
    "metaTitle": "Générateur de favicon — 100% navigateur | Toutes tailles + HTML",
    "metaDescription": "Générez des favicons dans toutes les tailles requises (16 à 512) à partir d'une seule image, avec un extrait HTML prêt à l'emploi. Gratuit, fonctionne dans votre navigateur, aucun téléchargement.",
    "schemaName": "Générateur de favicon",
    "schemaDescription": "Générez des favicons aux tailles 16/32/48/180/192/512 à partir d'une seule image source.",
    "badge": "Outil 100% navigateur",
    "h1Pre": "Générateur de favicon",
    "h1Highlight": "toutes les tailles, un seul glisser-déposer.",
    "intro": "Déposez une image carrée (512×512 idéal) — obtenez des favicons PNG en 16, 32, 48, 180, 192 et 512, ainsi qu'un extrait HTML prêt à copier.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Déposez une image carrée",
        "body": "Un PNG ou JPG de 512×512 est idéal — l'outil redimensionne votre source."
      },
      {
        "title": "Téléchargez chaque taille",
        "body": "Les PNG en 16×16, 32×32, 48×48, 180×180, 192×192 et 512×512 apparaissent."
      },
      {
        "title": "Copiez l'extrait HTML",
        "body": "Copiez les balises <link> générées dans votre <head>."
      }
    ],
    "whyTitle": "Pourquoi toutes ces tailles ?",
    "whyItems": [
      {
        "title": "32×32 — onglets du navigateur",
        "body": "La taille par défaut utilisée par tous les navigateurs pour les onglets."
      },
      {
        "title": "180×180 — Apple touch",
        "body": "Icône pour l'écran d'accueil sur iOS."
      },
      {
        "title": "192×192 / 512×512 — PWA",
        "body": "Icônes de manifeste pour l'installation sur Android."
      },
      {
        "title": "16×16 / 48×48 — héritage",
        "body": "Barres de favoris étroites et raccourcis Windows."
      }
    ],
    "faqTitle": "FAQ",
    "faqs": [
      {
        "q": "Quelles tailles sont nécessaires en 2026 ?",
        "a": "32×32 (onglets), 180×180 (iOS), 192/512 (PWA). 16×16 pour les favoris, 48×48 pour Windows."
      },
      {
        "q": "Ai-je encore besoin du .ico ?",
        "a": "Non pour les navigateurs modernes. IE11 demande toujours /favicon.ico si nécessaire."
      },
      {
        "q": "Le favicon SVG est-il meilleur ?",
        "a": "Meilleur pour les logos plats. Moins adapté aux logos photographiques."
      },
      {
        "q": "Est-ce que quelque chose est envoyé sur un serveur ?",
        "a": "Non. Le redimensionnement se fait via le canvas de votre navigateur."
      },
      {
        "q": "Logo non carré ?",
        "a": "L'outil centre et recadre l'image en carré avant le redimensionnement."
      },
      {
        "q": "Mode clair et sombre ?",
        "a": "Utilisez un PNG avec un badge coloré, ou un SVG avec prefers-color-scheme."
      },
      {
        "q": "Quel HTML dois-je utiliser ?",
        "a": "L'extrait généré configure <link rel=\"icon\">, l'icône Apple touch et le manifeste."
      },
      {
        "q": "Besoin d'un manifest.json ?",
        "a": "Uniquement pour l'invite d'installation PWA."
      }
    ],
    "ctaTitle": "Besoin d'héberger vos favicons ?",
    "ctaBody": "Téléchargez-les sur notre CDN pour une diffusion rapide.",
    "ctaButton": "Essayer l'uploader principal"
  },
  "de": {
    "metaTitle": "Favicon Generator — 100% Browser | Alle Größen + HTML",
    "metaDescription": "Erstelle Favicons in allen benötigten Größen (16 bis 512) aus einem Quellbild, inklusive HTML-Snippet zum Kopieren. Kostenlos, läuft direkt im Browser, kein Upload.",
    "schemaName": "Favicon Generator",
    "schemaDescription": "Erstelle Favicons in den Größen 16/32/48/180/192/512 aus einem einzigen Quellbild.",
    "badge": "Browser-basiertes Tool",
    "h1Pre": "Favicon Generator",
    "h1Highlight": "jede Größe, ein Klick.",
    "intro": "Ziehe ein quadratisches Bild (ideal 512×512) hinein — erhalte 16, 32, 48, 180, 192 und 512 Favicon-PNGs sowie ein fertiges HTML-Snippet.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Bild hochladen",
        "body": "Ein 512×512 PNG oder JPG ist ideal — das Tool skaliert dein Quellbild automatisch."
      },
      {
        "title": "Größen herunterladen",
        "body": "Die PNGs in 16×16, 32×32, 48×48, 180×180, 192×192 und 512×512 werden erstellt."
      },
      {
        "title": "HTML-Snippet einfügen",
        "body": "Kopiere die generierten <link>-Tags in deinen <head>-Bereich."
      }
    ],
    "whyTitle": "Warum all diese Größen?",
    "whyItems": [
      {
        "title": "32×32 — Browser-Tabs",
        "body": "Der Standard, den jeder Browser für Tabs verwendet."
      },
      {
        "title": "180×180 — Apple Touch",
        "body": "Icon für den Startbildschirm unter iOS."
      },
      {
        "title": "192×192 / 512×512 — PWA",
        "body": "Manifest-Icons für die Android-Installation."
      },
      {
        "title": "16×16 / 48×48 — Legacy",
        "body": "Für Lesezeichenleisten und Windows-Verknüpfungen."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Welche Größen brauche ich 2026?",
        "a": "32×32 (Tabs), 180×180 (iOS), 192/512 (PWA). 16×16 für Lesezeichen, 48×48 für Windows."
      },
      {
        "q": "Brauche ich noch .ico?",
        "a": "Für moderne Browser nicht. IE11 benötigt weiterhin /favicon.ico, falls du das unterstützen musst."
      },
      {
        "q": "Ist ein SVG-Favicon besser?",
        "a": "Besser für flache Logos. Schlechter für fotorealistische Logos."
      },
      {
        "q": "Wird etwas hochgeladen?",
        "a": "Nein. Die Skalierung erfolgt lokal per Canvas in deinem Browser."
      },
      {
        "q": "Logo nicht quadratisch?",
        "a": "Das Tool schneidet das Bild vor dem Skalieren mittig quadratisch zu."
      },
      {
        "q": "Hell- und Dunkelmodus?",
        "a": "Verwende ein PNG mit farbigem Badge oder ein SVG mit prefers-color-scheme."
      },
      {
        "q": "Welches HTML brauche ich?",
        "a": "Das generierte Snippet enthält <link rel=\"icon\">, Apple Touch Icon und Manifest-Verknüpfungen."
      },
      {
        "q": "Brauche ich ein manifest.json?",
        "a": "Nur, wenn du PWA-Installationsaufforderungen nutzen möchtest."
      }
    ],
    "ctaTitle": "Favicons hosten?",
    "ctaBody": "Lade sie auf unser CDN hoch für eine schnelle Auslieferung.",
    "ctaButton": "Haupt-Uploader testen"
  },
  "ja": {
    "metaTitle": "ファビコン生成ツール — ブラウザ完結型 | 全サイズ対応 + HTMLコード",
    "metaDescription": "1枚の画像から必要なすべてのサイズ（16〜512px）のファビコンを生成。HTMLスニペットも提供。ブラウザ上で動作し、アップロード不要の無料ツールです。",
    "schemaName": "ファビコン生成ツール",
    "schemaDescription": "1枚の画像から16/32/48/180/192/512pxサイズのファビコンを生成します。",
    "badge": "ブラウザ完結型ツール",
    "h1Pre": "ファビコン生成ツール",
    "h1Highlight": "ドラッグ＆ドロップで全サイズ対応",
    "intro": "正方形の画像（512×512推奨）をドロップするだけで、16、32、48、180、192、512pxのPNGファビコンと、そのまま使えるHTMLスニペットを生成します。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "正方形の画像をドロップ",
        "body": "512×512のPNGまたはJPGが最適です。ツールが自動的にリサイズします。"
      },
      {
        "title": "各サイズをダウンロード",
        "body": "16×16、32×32、48×48、180×180、192×192、512×512のPNGファイルが生成されます。"
      },
      {
        "title": "HTMLスニペットを貼り付け",
        "body": "生成された<link>タグをサイトの<head>内にコピー＆ペーストしてください。"
      }
    ],
    "whyTitle": "なぜ複数のサイズが必要なのか",
    "whyItems": [
      {
        "title": "32×32 — ブラウザタブ",
        "body": "ブラウザのタブで標準的に使用されるサイズです。"
      },
      {
        "title": "180×180 — Appleタッチアイコン",
        "body": "iOSのホーム画面用アイコンです。"
      },
      {
        "title": "192×192 / 512×512 — PWA",
        "body": "Androidでのインストール用マニフェストアイコンです。"
      },
      {
        "title": "16×16 / 48×48 — レガシー",
        "body": "ブックマークバーやWindowsのショートカット用です。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "2026年現在、どのサイズが必要ですか？",
        "a": "32×32（タブ）、180×180（iOS）、192/512（PWA）が必須です。ブックマーク用に16×16、Windows用に48×48も推奨されます。"
      },
      {
        "q": ".icoファイルはまだ必要ですか？",
        "a": "モダンブラウザでは不要です。IE11をサポートする場合のみ/favicon.icoが必要です。"
      },
      {
        "q": "SVGファビコンの方が良いですか？",
        "a": "フラットなロゴには適していますが、写真ベースのロゴには不向きです。"
      },
      {
        "q": "画像はどこかにアップロードされますか？",
        "a": "いいえ。ブラウザ内のCanvas機能で処理されるため、外部へ送信されません。"
      },
      {
        "q": "正方形ではないロゴの場合は？",
        "a": "ツールが自動的に中央を正方形に切り抜いてからリサイズします。"
      },
      {
        "q": "ライトモードとダークモードへの対応は？",
        "a": "色付きバッジ付きのPNGを使用するか、prefers-color-schemeに対応したSVGを使用してください。"
      },
      {
        "q": "必要なHTMLは何ですか？",
        "a": "生成されるスニペットには、<link rel=\"icon\">、Appleタッチアイコン、マニフェストの設定が含まれています。"
      },
      {
        "q": "manifest.jsonは必要ですか？",
        "a": "PWAのインストールプロンプトを表示する場合にのみ必要です。"
      }
    ],
    "ctaTitle": "ファビコンのホスティングが必要ですか？",
    "ctaBody": "CDNにアップロードして高速配信しましょう。",
    "ctaButton": "メインアップローダーを試す"
  },
  "zh-Hans": {
    "metaTitle": "Favicon 生成器 — 100% 浏览器运行 | 全尺寸 + HTML",
    "metaDescription": "通过一张源图片生成所有所需尺寸（16 到 512）的 favicon，并提供可直接粘贴的 HTML 代码片段。免费、浏览器内运行，无需上传。",
    "schemaName": "Favicon 生成器",
    "schemaDescription": "通过一张源图片生成 16/32/48/180/192/512 尺寸的 favicon。",
    "badge": "纯浏览器工具",
    "h1Pre": "Favicon 生成器",
    "h1Highlight": "一键生成所有尺寸。",
    "intro": "拖入一张正方形图片（建议 512×512）——即可获得 16、32、48、180、192 和 512 尺寸的 PNG 图标，以及可直接粘贴的 HTML 代码片段。",
    "howTitle": "工作原理",
    "steps": [
      {
        "title": "拖入正方形图片",
        "body": "512×512 的 PNG 或 JPG 是最佳选择——工具会根据你的源文件自动缩放。"
      },
      {
        "title": "下载各尺寸图标",
        "body": "生成 16×16、32×32、48×48、180×180、192×192、512×512 的 PNG 文件。"
      },
      {
        "title": "粘贴 HTML 代码",
        "body": "将生成的 <link> 标签复制到你的 <head> 中即可。"
      }
    ],
    "whyTitle": "为什么需要这些尺寸",
    "whyItems": [
      {
        "title": "32×32 — 浏览器标签页",
        "body": "浏览器在标签页中默认使用的尺寸。"
      },
      {
        "title": "180×180 — Apple Touch",
        "body": "iOS 设备的主屏幕图标。"
      },
      {
        "title": "192×192 / 512×512 — PWA",
        "body": "Android 安装所需的清单图标。"
      },
      {
        "title": "16×16 / 48×48 — 传统用途",
        "body": "用于书签栏和 Windows 快捷方式。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "2026 年我需要哪些尺寸？",
        "a": "32×32（标签页）、180×180（iOS）、192/512（PWA）。16×16 用于书签，48×48 用于 Windows。"
      },
      {
        "q": "还需要 .ico 格式吗？",
        "a": "现代浏览器不再需要。如果仍需兼容 IE11，则需要 /favicon.ico。"
      },
      {
        "q": "SVG favicon 更好吗？",
        "a": "扁平化 Logo 使用 SVG 更好。摄影类 Logo 则不适用。"
      },
      {
        "q": "文件会上传吗？",
        "a": "不会。所有缩放处理均在你的浏览器中完成。"
      },
      {
        "q": "Logo 不是正方形怎么办？",
        "a": "工具会在缩放前自动将图片居中裁剪为正方形。"
      },
      {
        "q": "支持明暗模式吗？",
        "a": "可以使用带有彩色背景的 PNG，或使用支持 prefers-color-scheme 的 SVG。"
      },
      {
        "q": "我需要什么 HTML 代码？",
        "a": "生成的代码片段包含了 <link rel=\"icon\">、Apple touch icon 和 manifest 链接。"
      },
      {
        "q": "需要 manifest.json 吗？",
        "a": "仅在需要 PWA 安装提示时才需要。"
      }
    ],
    "ctaTitle": "需要托管 Favicon？",
    "ctaBody": "上传到我们的 CDN 以实现快速加载。",
    "ctaButton": "尝试主上传工具"
  }
} as LandingContentMap;
