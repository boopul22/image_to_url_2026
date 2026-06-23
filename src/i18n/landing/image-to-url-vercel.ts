import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL for Vercel — Direct CDN Image Links",
    "relatedTitle": "Related image tools",
    "related": [
      { "pageKey": "image-embed-code-generator", "label": "Image embed code generator" },
      { "pageKey": "image-url-for-chatgpt", "label": "Image URL for ChatGPT" },
      { "pageKey": "image-to-url-for-whatsapp", "label": "Image URL for WhatsApp" },
      { "pageKey": "image-to-url-for-html", "label": "Image URL for HTML" }
    ],
    "metaDescription": "Host images outside your Vercel deploy and embed them with permanent CDN URLs. Skip the build size limit, ship faster, and keep your repo clean and small.",
    "schemaName": "Image to URL Converter for Vercel",
    "schemaDescription": "Generate permanent CDN URLs for images you embed in Vercel-hosted Next.js, Astro, or static sites.",
    "badge": "Vercel Image URLs",
    "h1Pre": "Image to URL",
    "h1Highlight": "for Vercel.",
    "intro": "Stop bloating your Vercel deploy with raw image files. Upload here, get a direct URL, and embed it in your Next.js, Astro, or static site. Builds stay fast and your repo stays small.",
    "howTitle": "How It Works",
    "steps": [
      {
        "title": "Upload Outside Your Repo",
        "body": "Send your image to our CDN instead of committing it to your Vercel project. Keeps your build artifact small and your push history clean."
      },
      {
        "title": "Grab the Permanent URL",
        "body": "We hand you a direct link that loads from a global edge cache. No build step needed, no redeploy when you swap the image."
      },
      {
        "title": "Use It in Your Code",
        "body": "Drop the URL into next/image, an Astro Image, or a plain <img> tag. It works the same way on Vercel as on any host."
      }
    ],
    "whyTitle": "Why Host Images Off-Vercel",
    "whyItems": [
      {
        "title": "Smaller Deploys",
        "body": "Vercel charges for build minutes and bandwidth. Big binary assets in git slow every deploy and bloat the build cache."
      },
      {
        "title": "Faster CI",
        "body": "Skip the upload step on every deploy. Your repo stays light and pushes go through in seconds, not minutes."
      },
      {
        "title": "Edge-Cached Globally",
        "body": "Images load from the closest edge POP to each visitor. Same speed model as Vercel's own CDN, no extra config."
      },
      {
        "title": "Swap Without Redeploying",
        "body": "Update an image without touching your code or triggering a new build. The URL stays the same."
      }
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Why not just put images in /public on Vercel?",
        "a": "You can, and it works fine for a handful of images. Once you have dozens of large files, every deploy ships them all again, builds slow down, and your repo balloons. Hosting them off-Vercel keeps things tidy."
      },
      {
        "q": "Does this work with next/image?",
        "a": "Yes. Pass the URL to the src prop and add the image domain to remotePatterns in next.config.js. Next.js will optimize it as if it were any external image."
      },
      {
        "q": "Will it slow my page down?",
        "a": "No. Images are served from a CDN with edge nodes worldwide. Real-world load times are usually under 100ms, similar to Vercel's own asset delivery."
      },
      {
        "q": "Do the URLs survive when I redeploy?",
        "a": "Yes. URLs are permanent and have nothing to do with your Vercel deploy. Roll back, redeploy, switch frameworks, the link keeps working."
      },
      {
        "q": "Is it free for hobby Vercel projects?",
        "a": "Yes. The upload-and-share flow is free, no signup. Free accounts unlock larger files and a dashboard for managing your uploads."
      }
    ],
    "ctaTitle": "Get a Vercel-ready image URL",
    "ctaBody": "Upload once. Embed anywhere. Keep your Vercel deploy lean.",
    "ctaButton": "Upload Image"
  },
  "es": {
    "metaTitle": "Imagen a URL para Vercel — Enlaces CDN directos para sitios estáticos | ImageToURL",
    "metaDescription": "Aloja imágenes fuera de tu deploy de Vercel y úsalas con URLs permanentes. Evita el límite de tamaño de build, despliega más rápido, mantén tu repo limpio.",
    "schemaName": "Conversor de Imagen a URL para Vercel",
    "schemaDescription": "Genera URLs CDN permanentes para imágenes que incrustas en sitios Next.js, Astro o estáticos alojados en Vercel.",
    "badge": "URLs de imagen para Vercel",
    "h1Pre": "Imagen a URL",
    "h1Highlight": "para Vercel.",
    "intro": "Deja de inflar tu deploy de Vercel con archivos de imagen. Sube aquí, obtén una URL directa e incrústala en tu sitio Next.js, Astro o estático. Los builds siguen siendo rápidos y tu repo se mantiene pequeño.",
    "howTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Sube fuera de tu repo",
        "body": "Envía tu imagen a nuestra CDN en lugar de comitearla en tu proyecto Vercel. Mantiene pequeño tu artefacto de build y limpio tu historial de pushes."
      },
      {
        "title": "Obtén la URL permanente",
        "body": "Te damos un enlace directo que carga desde una caché edge global. Sin paso de build, sin redeploy al cambiar la imagen."
      },
      {
        "title": "Úsala en tu código",
        "body": "Coloca la URL en next/image, Astro Image o una etiqueta <img> simple. Funciona igual en Vercel que en cualquier host."
      }
    ],
    "whyTitle": "Por qué alojar imágenes fuera de Vercel",
    "whyItems": [
      {
        "title": "Deploys más pequeños",
        "body": "Vercel cobra por minutos de build y ancho de banda. Los assets binarios grandes en git ralentizan cada deploy y inflan la caché de build."
      },
      {
        "title": "CI más rápido",
        "body": "Sáltate el paso de subida en cada deploy. Tu repo se mantiene ligero y los pushes pasan en segundos, no minutos."
      },
      {
        "title": "Edge-cacheado globalmente",
        "body": "Las imágenes cargan desde el POP edge más cercano a cada visitante. Mismo modelo de velocidad que la propia CDN de Vercel, sin configuración extra."
      },
      {
        "title": "Cambia sin redeploys",
        "body": "Actualiza una imagen sin tocar tu código ni disparar un nuevo build. La URL sigue siendo la misma."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Por qué no poner las imágenes en /public en Vercel?",
        "a": "Puedes hacerlo y funciona bien para un puñado de imágenes. Cuando tienes docenas de archivos grandes, cada deploy los reenvía todos, los builds se ralentizan y tu repo se infla. Alojarlos fuera de Vercel mantiene todo ordenado."
      },
      {
        "q": "¿Funciona con next/image?",
        "a": "Sí. Pasa la URL al prop src y añade el dominio de la imagen a remotePatterns en next.config.js. Next.js la optimizará como cualquier imagen externa."
      },
      {
        "q": "¿Ralentizará mi página?",
        "a": "No. Las imágenes se sirven desde una CDN con nodos edge en todo el mundo. Los tiempos reales suelen ser menores a 100ms, similar a la entrega de assets de Vercel."
      },
      {
        "q": "¿Las URLs sobreviven a los redeploys?",
        "a": "Sí. Las URLs son permanentes y no tienen nada que ver con tu deploy de Vercel. Haz rollback, redeploy, cambia de framework, el enlace sigue funcionando."
      },
      {
        "q": "¿Es gratis para proyectos hobby de Vercel?",
        "a": "Sí. El flujo de subir y compartir es gratis, sin registro. Las cuentas gratuitas desbloquean archivos más grandes y un panel para gestionar tus subidas."
      }
    ],
    "ctaTitle": "Obtén una URL de imagen lista para Vercel",
    "ctaBody": "Sube una vez. Incrusta donde quieras. Mantén tu deploy de Vercel ligero.",
    "ctaButton": "Subir imagen"
  },
  "fr": {
    "metaTitle": "Image vers URL pour Vercel — Liens CDN directs pour sites statiques | ImageToURL",
    "metaDescription": "Hébergez vos images en dehors de votre déploiement Vercel et intégrez-les via des URLs permanentes. Évitez la limite de taille de build, déployez plus vite, gardez votre repo propre.",
    "schemaName": "Convertisseur Image vers URL pour Vercel",
    "schemaDescription": "Générez des URLs CDN permanentes pour les images intégrées dans vos sites Next.js, Astro ou statiques hébergés sur Vercel.",
    "badge": "URLs d'image Vercel",
    "h1Pre": "Image vers URL",
    "h1Highlight": "pour Vercel.",
    "intro": "Arrêtez de gonfler votre déploiement Vercel avec des fichiers image bruts. Téléversez ici, obtenez une URL directe et intégrez-la dans votre site Next.js, Astro ou statique. Les builds restent rapides et votre repo reste petit.",
    "howTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Téléversez en dehors de votre repo",
        "body": "Envoyez votre image sur notre CDN au lieu de la commiter dans votre projet Vercel. Votre artefact de build reste petit et votre historique de push propre."
      },
      {
        "title": "Récupérez l'URL permanente",
        "body": "Nous vous donnons un lien direct qui charge depuis un cache edge global. Pas d'étape de build, pas de redéploiement quand vous changez l'image."
      },
      {
        "title": "Utilisez-la dans votre code",
        "body": "Mettez l'URL dans next/image, Astro Image ou une simple balise <img>. Ça marche pareil sur Vercel que sur n'importe quel hébergeur."
      }
    ],
    "whyTitle": "Pourquoi héberger les images en dehors de Vercel",
    "whyItems": [
      {
        "title": "Déploiements plus légers",
        "body": "Vercel facture les minutes de build et la bande passante. Les gros assets binaires dans git ralentissent chaque déploiement et gonflent le cache de build."
      },
      {
        "title": "CI plus rapide",
        "body": "Sautez l'étape d'upload à chaque déploiement. Votre repo reste léger et les pushes passent en quelques secondes, pas en minutes."
      },
      {
        "title": "Mis en cache edge mondialement",
        "body": "Les images chargent depuis le POP edge le plus proche de chaque visiteur. Même modèle de vitesse que la CDN propre de Vercel, sans config supplémentaire."
      },
      {
        "title": "Changez sans redéployer",
        "body": "Mettez à jour une image sans toucher votre code ni déclencher un nouveau build. L'URL reste la même."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Pourquoi ne pas simplement mettre les images dans /public sur Vercel ?",
        "a": "Vous pouvez, et ça marche bien pour quelques images. Dès que vous avez des dizaines de gros fichiers, chaque déploiement les renvoie tous, les builds ralentissent et votre repo gonfle. Les héberger en dehors de Vercel garde tout propre."
      },
      {
        "q": "Est-ce que ça marche avec next/image ?",
        "a": "Oui. Passez l'URL au prop src et ajoutez le domaine de l'image à remotePatterns dans next.config.js. Next.js l'optimisera comme n'importe quelle image externe."
      },
      {
        "q": "Est-ce que ça va ralentir ma page ?",
        "a": "Non. Les images sont servies depuis une CDN avec des nœuds edge dans le monde entier. Les temps de chargement réels sont généralement sous 100 ms, similaires à la livraison d'assets de Vercel."
      },
      {
        "q": "Les URLs survivent-elles aux redéploiements ?",
        "a": "Oui. Les URLs sont permanentes et n'ont rien à voir avec votre déploiement Vercel. Faites un rollback, redéployez, changez de framework, le lien continue de fonctionner."
      },
      {
        "q": "Est-ce gratuit pour les projets hobby Vercel ?",
        "a": "Oui. Le flux téléverser-et-partager est gratuit, sans inscription. Les comptes gratuits débloquent des fichiers plus volumineux et un tableau de bord pour gérer vos uploads."
      }
    ],
    "ctaTitle": "Obtenez une URL d'image prête pour Vercel",
    "ctaBody": "Téléversez une fois. Intégrez partout. Gardez votre déploiement Vercel léger.",
    "ctaButton": "Téléverser une image"
  },
  "de": {
    "metaTitle": "Bild zu URL für Vercel — Direkte CDN-Links für statische Sites | ImageToURL",
    "metaDescription": "Hoste Bilder außerhalb deines Vercel-Deploys und binde sie mit dauerhaften URLs ein. Umgehe das Build-Größenlimit, deploy schneller, halte dein Repo schlank.",
    "schemaName": "Bild-zu-URL-Konverter für Vercel",
    "schemaDescription": "Erzeuge dauerhafte CDN-URLs für Bilder, die du in Vercel-gehostete Next.js-, Astro- oder statische Sites einbettest.",
    "badge": "Vercel Bild-URLs",
    "h1Pre": "Bild zu URL",
    "h1Highlight": "für Vercel.",
    "intro": "Hör auf, deinen Vercel-Deploy mit rohen Bilddateien aufzublähen. Lade hier hoch, hol dir eine direkte URL und binde sie in dein Next.js-, Astro- oder statisches Projekt ein. Builds bleiben schnell und dein Repo bleibt klein.",
    "howTitle": "So funktioniert es",
    "steps": [
      {
        "title": "Außerhalb deines Repos hochladen",
        "body": "Schick dein Bild an unser CDN, statt es in dein Vercel-Projekt zu committen. Hält dein Build-Artefakt klein und deine Push-Historie sauber."
      },
      {
        "title": "Hol dir die dauerhafte URL",
        "body": "Wir geben dir einen direkten Link, der aus einem globalen Edge-Cache lädt. Kein Build-Schritt, kein Redeploy beim Bildwechsel."
      },
      {
        "title": "Verwende sie in deinem Code",
        "body": "Pack die URL in next/image, ein Astro Image oder ein simples <img>-Tag. Funktioniert auf Vercel genauso wie auf jedem anderen Host."
      }
    ],
    "whyTitle": "Warum Bilder außerhalb von Vercel hosten",
    "whyItems": [
      {
        "title": "Kleinere Deploys",
        "body": "Vercel berechnet Build-Minuten und Bandbreite. Große Binär-Assets in git verlangsamen jeden Deploy und blähen den Build-Cache auf."
      },
      {
        "title": "Schnellere CI",
        "body": "Spar dir den Upload-Schritt bei jedem Deploy. Dein Repo bleibt leicht und Pushes gehen in Sekunden durch, nicht in Minuten."
      },
      {
        "title": "Global Edge-gecacht",
        "body": "Bilder laden vom nächstgelegenen Edge-POP zu jedem Besucher. Gleiches Geschwindigkeitsmodell wie Vercels eigenes CDN, ohne Extra-Konfiguration."
      },
      {
        "title": "Tauschen ohne Redeploy",
        "body": "Aktualisiere ein Bild, ohne deinen Code anzufassen oder einen neuen Build auszulösen. Die URL bleibt gleich."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Warum die Bilder nicht einfach nach /public auf Vercel legen?",
        "a": "Kannst du, und es funktioniert gut für eine Handvoll Bilder. Sobald du Dutzende großer Dateien hast, schickt jeder Deploy sie alle wieder mit, Builds werden langsamer und dein Repo wuchert. Sie außerhalb von Vercel zu hosten hält alles ordentlich."
      },
      {
        "q": "Funktioniert das mit next/image?",
        "a": "Ja. Übergib die URL an die src-Prop und füge die Bild-Domain zu remotePatterns in next.config.js hinzu. Next.js optimiert sie wie jedes andere externe Bild."
      },
      {
        "q": "Wird das meine Seite verlangsamen?",
        "a": "Nein. Bilder werden über ein CDN mit Edge-Knoten weltweit ausgeliefert. Reale Ladezeiten liegen meist unter 100 ms, ähnlich wie Vercels eigene Asset-Auslieferung."
      },
      {
        "q": "Überleben die URLs einen Redeploy?",
        "a": "Ja. URLs sind dauerhaft und haben nichts mit deinem Vercel-Deploy zu tun. Roll zurück, deploy neu, wechsle das Framework, der Link funktioniert weiter."
      },
      {
        "q": "Ist es kostenlos für Hobby-Projekte auf Vercel?",
        "a": "Ja. Der Hochladen-und-Teilen-Flow ist kostenlos, ohne Registrierung. Kostenlose Konten schalten größere Dateien und ein Dashboard zur Verwaltung deiner Uploads frei."
      }
    ],
    "ctaTitle": "Hol dir eine Vercel-fertige Bild-URL",
    "ctaBody": "Einmal hochladen. Überall einbetten. Vercel-Deploy schlank halten.",
    "ctaButton": "Bild hochladen"
  },
  "ja": {
    "metaTitle": "Vercel 用画像 URL 変換 — 静的サイト向け直接 CDN リンク | ImageToURL",
    "metaDescription": "画像を Vercel デプロイの外でホストし、永続 URL で埋め込みましょう。ビルドサイズ制限を回避し、デプロイを高速化、リポジトリをすっきり保ちます。",
    "schemaName": "Vercel 用画像 URL 変換ツール",
    "schemaDescription": "Vercel でホストする Next.js、Astro、静的サイトに埋め込む画像のための永続 CDN URL を生成します。",
    "badge": "Vercel 画像 URL",
    "h1Pre": "画像 URL 変換",
    "h1Highlight": "Vercel 用。",
    "intro": "生の画像ファイルで Vercel デプロイを膨らませるのはやめましょう。ここにアップロードして直接 URL を受け取り、Next.js、Astro、静的サイトに埋め込んでください。ビルドは速いまま、リポジトリは小さいまま保てます。",
    "howTitle": "使い方",
    "steps": [
      {
        "title": "リポジトリの外にアップロード",
        "body": "Vercel プロジェクトにコミットせず、画像を当社の CDN に送ります。ビルド成果物は小さく、プッシュ履歴はクリーンに保たれます。"
      },
      {
        "title": "永続 URL を取得",
        "body": "グローバルエッジキャッシュから配信される直接リンクをお渡しします。ビルド工程は不要、画像差し替え時の再デプロイも不要です。"
      },
      {
        "title": "コードで使う",
        "body": "URL を next/image、Astro Image、または素の <img> タグに渡してください。Vercel でも他のホストと同じように動作します。"
      }
    ],
    "whyTitle": "Vercel の外で画像をホストする理由",
    "whyItems": [
      {
        "title": "デプロイが小さくなる",
        "body": "Vercel はビルド時間と帯域幅で課金します。git に入った大きなバイナリは毎回のデプロイを遅くし、ビルドキャッシュを膨張させます。"
      },
      {
        "title": "CI が高速化",
        "body": "毎回のデプロイでアップロード工程を省けます。リポジトリは軽いまま、プッシュは分単位ではなく秒単位で完了します。"
      },
      {
        "title": "グローバルエッジキャッシュ",
        "body": "画像は各訪問者に最も近いエッジ POP から配信されます。Vercel 自身の CDN と同じ速度モデルで、追加設定は不要です。"
      },
      {
        "title": "再デプロイなしで差し替え",
        "body": "コードを触らず、新しいビルドを走らせずに画像を更新できます。URL は変わりません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "Vercel の /public に画像を置けばよいのでは?",
        "a": "少数の画像なら問題なく動きます。大きなファイルが数十個になると、毎回のデプロイで全部送り直され、ビルドが遅くなり、リポジトリが膨らみます。Vercel の外に置けば整理が保てます。"
      },
      {
        "q": "next/image で動きますか?",
        "a": "はい。URL を src プロップに渡し、next.config.js の remotePatterns に画像ドメインを追加してください。Next.js は他の外部画像と同じように最適化します。"
      },
      {
        "q": "ページが遅くなりませんか?",
        "a": "なりません。画像は世界中のエッジノードを持つ CDN から配信されます。実測のロード時間はたいてい 100ms 未満で、Vercel 自身のアセット配信と同等です。"
      },
      {
        "q": "再デプロイしても URL は残りますか?",
        "a": "はい。URL は永続的で、Vercel デプロイとは無関係です。ロールバックしても、再デプロイしても、フレームワークを変えてもリンクは生き続けます。"
      },
      {
        "q": "個人の Vercel プロジェクトでも無料ですか?",
        "a": "はい。アップロードして共有する流れは登録不要で無料です。無料アカウントに登録すると、大きなファイルとアップロード管理用ダッシュボードが使えます。"
      }
    ],
    "ctaTitle": "Vercel 用の画像 URL を取得",
    "ctaBody": "一度アップロード。どこにでも埋め込み。Vercel デプロイを軽く保ちます。",
    "ctaButton": "画像をアップロード"
  },
  "zh-Hans": {
    "metaTitle": "Vercel 图片转 URL — 面向静态站点的直连 CDN 链接 | ImageToURL",
    "metaDescription": "把图片托管在 Vercel 部署之外,通过永久 URL 嵌入。绕开构建体积限制、更快上线、保持代码仓干净。",
    "schemaName": "Vercel 图片转 URL 工具",
    "schemaDescription": "为部署在 Vercel 上的 Next.js、Astro 或静态站点中嵌入的图片生成永久 CDN URL。",
    "badge": "Vercel 图片 URL",
    "h1Pre": "图片转 URL",
    "h1Highlight": "面向 Vercel。",
    "intro": "别再让原始图片文件撑大你的 Vercel 部署。在这里上传,拿到直链,然后嵌入你的 Next.js、Astro 或静态站点。构建保持快速,仓库保持小巧。",
    "howTitle": "使用步骤",
    "steps": [
      {
        "title": "在仓库之外上传",
        "body": "把图片发送到我们的 CDN,而不是提交到 Vercel 项目里。让构建产物变小,推送历史保持整洁。"
      },
      {
        "title": "获取永久 URL",
        "body": "我们给你一条从全球边缘缓存加载的直链。无需构建步骤,更换图片时也无需重新部署。"
      },
      {
        "title": "在代码中使用",
        "body": "把 URL 放进 next/image、Astro Image 或普通 <img> 标签。在 Vercel 上的表现与任何托管方一致。"
      }
    ],
    "whyTitle": "为什么把图片托管到 Vercel 之外",
    "whyItems": [
      {
        "title": "部署更小",
        "body": "Vercel 按构建时长和带宽计费。git 中的大体积二进制资源会拖慢每一次部署,撑大构建缓存。"
      },
      {
        "title": "CI 更快",
        "body": "每次部署都跳过上传步骤。仓库轻量,推送以秒计而不是分钟。"
      },
      {
        "title": "全球边缘缓存",
        "body": "图片从离访客最近的边缘节点加载。与 Vercel 自家 CDN 同样的速度模型,无需额外配置。"
      },
      {
        "title": "更换无需重新部署",
        "body": "不必改代码或触发新构建即可更新图片,URL 保持不变。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "为什么不直接把图片放在 Vercel 的 /public 目录?",
        "a": "可以,只要图片不多就没问题。一旦累积到几十个大文件,每次部署都会重新发送一次,构建变慢,仓库膨胀。把它们托管在 Vercel 之外能让一切保持整洁。"
      },
      {
        "q": "能与 next/image 一起用吗?",
        "a": "可以。把 URL 传给 src 属性,并在 next.config.js 的 remotePatterns 中添加图片域名。Next.js 会像处理任何外部图片一样进行优化。"
      },
      {
        "q": "会拖慢我的页面吗?",
        "a": "不会。图片由全球边缘节点的 CDN 提供。真实加载时间通常低于 100ms,与 Vercel 自身的资源分发相当。"
      },
      {
        "q": "重新部署后 URL 还有效吗?",
        "a": "有效。URL 是永久的,与 Vercel 部署完全无关。回滚、重新部署、切换框架,链接都继续可用。"
      },
      {
        "q": "业余 Vercel 项目能免费使用吗?",
        "a": "可以。上传分享流程免费,无需注册。免费账号可解锁更大文件和用于管理上传的面板。"
      }
    ],
    "ctaTitle": "获取 Vercel 可用的图片 URL",
    "ctaBody": "上传一次,随处嵌入,让 Vercel 部署保持轻盈。",
    "ctaButton": "上传图片"
  },
} as LandingContentMap;
