import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL for Vercel — Direct CDN Links for Static Sites | ImageToURL",
    "metaDescription": "Host images outside your Vercel deploy and embed them with permanent URLs. Skip the build size limit, ship faster, keep your repo clean.",
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
  "hi": {
    "metaTitle": "Vercel के लिए Image to URL — स्टैटिक साइट्स के लिए सीधे CDN लिंक | ImageToURL",
    "metaDescription": "अपने Vercel डिप्लॉय के बाहर इमेज होस्ट करें और स्थायी URL के साथ एम्बेड करें। बिल्ड साइज़ लिमिट से बचें, तेज़ शिप करें, अपना रेपो साफ़ रखें।",
    "schemaName": "Vercel के लिए Image to URL कन्वर्टर",
    "schemaDescription": "Vercel-होस्टेड Next.js, Astro, या स्टैटिक साइट्स में एम्बेड की गई इमेज के लिए स्थायी CDN URL जनरेट करें।",
    "badge": "Vercel इमेज URL",
    "h1Pre": "Image to URL",
    "h1Highlight": "Vercel के लिए।",
    "intro": "अपने Vercel डिप्लॉय को रॉ इमेज फाइलों से भरना बंद करें। यहाँ अपलोड करें, सीधा URL पाएं, और इसे अपने Next.js, Astro, या स्टैटिक साइट में एम्बेड करें। बिल्ड तेज़ रहते हैं और आपका रेपो छोटा रहता है।",
    "howTitle": "यह कैसे काम करता है",
    "steps": [
      {
        "title": "अपने रेपो के बाहर अपलोड करें",
        "body": "अपनी इमेज को अपने Vercel प्रोजेक्ट में कमिट करने के बजाय हमारे CDN पर भेजें। आपका बिल्ड आर्टिफैक्ट छोटा और पुश हिस्ट्री साफ़ रहती है।"
      },
      {
        "title": "स्थायी URL प्राप्त करें",
        "body": "हम आपको एक सीधा लिंक देते हैं जो ग्लोबल एज कैश से लोड होता है। कोई बिल्ड स्टेप नहीं, इमेज बदलते समय कोई रीडिप्लॉय नहीं।"
      },
      {
        "title": "अपने कोड में उपयोग करें",
        "body": "URL को next/image, Astro Image, या साधारण <img> टैग में डालें। यह Vercel पर भी वैसा ही काम करता है जैसे किसी भी होस्ट पर।"
      }
    ],
    "whyTitle": "Vercel के बाहर इमेज होस्ट क्यों करें",
    "whyItems": [
      {
        "title": "छोटे डिप्लॉय",
        "body": "Vercel बिल्ड मिनट और बैंडविड्थ के लिए शुल्क लेता है। git में बड़े बाइनरी एसेट हर डिप्लॉय को धीमा करते हैं और बिल्ड कैश को फुलाते हैं।"
      },
      {
        "title": "तेज़ CI",
        "body": "हर डिप्लॉय पर अपलोड स्टेप छोड़ें। आपका रेपो हल्का रहता है और पुश सेकंडों में हो जाते हैं, मिनटों में नहीं।"
      },
      {
        "title": "ग्लोबली एज-कैश्ड",
        "body": "इमेज हर विज़िटर के निकटतम एज POP से लोड होती हैं। Vercel के अपने CDN जैसा ही स्पीड मॉडल, कोई अतिरिक्त कॉन्फ़िग नहीं।"
      },
      {
        "title": "बिना रीडिप्लॉय के बदलें",
        "body": "अपना कोड छुए या नया बिल्ड ट्रिगर किए बिना इमेज अपडेट करें। URL वही रहता है।"
      }
    ],
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "faqs": [
      {
        "q": "Vercel पर इमेज को सिर्फ /public में क्यों न रखें?",
        "a": "आप रख सकते हैं, और यह कुछ इमेज के लिए ठीक काम करता है। एक बार जब आपके पास दर्जनों बड़ी फाइलें होती हैं, हर डिप्लॉय उन सभी को फिर से शिप करता है, बिल्ड धीमे होते हैं, और आपका रेपो फूल जाता है। Vercel के बाहर होस्ट करना चीज़ों को व्यवस्थित रखता है।"
      },
      {
        "q": "क्या यह next/image के साथ काम करता है?",
        "a": "हाँ। URL को src प्रॉप में पास करें और next.config.js में remotePatterns में इमेज डोमेन जोड़ें। Next.js इसे किसी भी बाहरी इमेज की तरह ऑप्टिमाइज़ करेगा।"
      },
      {
        "q": "क्या यह मेरे पेज को धीमा करेगा?",
        "a": "नहीं। इमेज दुनिया भर में एज नोड्स वाले CDN से सर्व की जाती हैं। वास्तविक लोड समय आमतौर पर 100ms से कम होते हैं, Vercel के अपने एसेट डिलीवरी जैसा।"
      },
      {
        "q": "क्या मेरे रीडिप्लॉय करने पर URL बने रहते हैं?",
        "a": "हाँ। URL स्थायी हैं और आपके Vercel डिप्लॉय से कोई लेना-देना नहीं है। रोल बैक करें, रीडिप्लॉय करें, फ्रेमवर्क बदलें, लिंक काम करता रहता है।"
      },
      {
        "q": "क्या यह हॉबी Vercel प्रोजेक्ट्स के लिए मुफ्त है?",
        "a": "हाँ। अपलोड-और-शेयर फ्लो मुफ्त है, कोई साइनअप नहीं। फ्री अकाउंट बड़ी फाइलें और अपने अपलोड प्रबंधित करने के लिए एक डैशबोर्ड अनलॉक करता है।"
      }
    ],
    "ctaTitle": "Vercel-तैयार इमेज URL पाएं",
    "ctaBody": "एक बार अपलोड करें। कहीं भी एम्बेड करें। अपने Vercel डिप्लॉय को हल्का रखें।",
    "ctaButton": "इमेज अपलोड करें"
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
  "id": {
    "metaTitle": "Image to URL untuk Vercel — Tautan CDN Langsung untuk Situs Statis | ImageToURL",
    "metaDescription": "Hosting gambar di luar deploy Vercel dan sematkan dengan URL permanen. Lewati batas ukuran build, kirim lebih cepat, jaga repo tetap bersih.",
    "schemaName": "Konverter Image to URL untuk Vercel",
    "schemaDescription": "Buat URL CDN permanen untuk gambar yang kamu sematkan di situs Next.js, Astro, atau statis yang dihosting di Vercel.",
    "badge": "URL Gambar Vercel",
    "h1Pre": "Image to URL",
    "h1Highlight": "untuk Vercel.",
    "intro": "Hentikan membengkakkan deploy Vercel-mu dengan file gambar mentah. Unggah di sini, dapatkan URL langsung, lalu sematkan ke situs Next.js, Astro, atau statis. Build tetap cepat dan repo tetap kecil.",
    "howTitle": "Cara Kerjanya",
    "steps": [
      {
        "title": "Unggah di Luar Repo",
        "body": "Kirim gambarmu ke CDN kami daripada menyimpannya di proyek Vercel. Artefak build tetap kecil dan riwayat push tetap bersih."
      },
      {
        "title": "Ambil URL Permanen",
        "body": "Kami beri kamu tautan langsung yang dimuat dari edge cache global. Tanpa langkah build, tanpa redeploy saat ganti gambar."
      },
      {
        "title": "Pakai di Kodemu",
        "body": "Letakkan URL ke next/image, Astro Image, atau tag <img> biasa. Bekerja di Vercel sama seperti di host mana pun."
      }
    ],
    "whyTitle": "Kenapa Hosting Gambar di Luar Vercel",
    "whyItems": [
      {
        "title": "Deploy Lebih Kecil",
        "body": "Vercel menagih menit build dan bandwidth. Aset biner besar di git memperlambat setiap deploy dan membengkakkan cache build."
      },
      {
        "title": "CI Lebih Cepat",
        "body": "Lewati langkah unggah di setiap deploy. Repo tetap ringan dan push selesai dalam hitungan detik, bukan menit."
      },
      {
        "title": "Edge-Cached Global",
        "body": "Gambar dimuat dari POP edge terdekat ke setiap pengunjung. Model kecepatan yang sama dengan CDN Vercel sendiri, tanpa konfigurasi tambahan."
      },
      {
        "title": "Ganti Tanpa Redeploy",
        "body": "Perbarui gambar tanpa menyentuh kode atau memicu build baru. URL tetap sama."
      }
    ],
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Kenapa tidak langsung taruh gambar di /public Vercel saja?",
        "a": "Bisa, dan itu cocok untuk segelintir gambar. Begitu kamu punya puluhan file besar, setiap deploy mengirim ulang semuanya, build melambat, dan repo membengkak. Hosting di luar Vercel menjaga semuanya tetap rapi."
      },
      {
        "q": "Apakah ini bekerja dengan next/image?",
        "a": "Ya. Lewatkan URL ke prop src dan tambahkan domain gambar ke remotePatterns di next.config.js. Next.js akan mengoptimalkannya seperti gambar eksternal lainnya."
      },
      {
        "q": "Apakah halamanku akan melambat?",
        "a": "Tidak. Gambar disajikan dari CDN dengan node edge di seluruh dunia. Waktu muat nyata biasanya di bawah 100ms, mirip dengan pengiriman aset Vercel sendiri."
      },
      {
        "q": "Apakah URL bertahan saat aku redeploy?",
        "a": "Ya. URL bersifat permanen dan tidak ada hubungannya dengan deploy Vercel-mu. Rollback, redeploy, ganti framework, tautannya tetap bekerja."
      },
      {
        "q": "Apakah gratis untuk proyek hobi di Vercel?",
        "a": "Ya. Alur unggah-dan-bagikan gratis, tanpa pendaftaran. Akun gratis membuka file lebih besar dan dasbor untuk mengelola unggahanmu."
      }
    ],
    "ctaTitle": "Dapatkan URL gambar siap Vercel",
    "ctaBody": "Unggah sekali. Sematkan di mana saja. Jaga deploy Vercel-mu tetap ringan.",
    "ctaButton": "Unggah Gambar"
  },
  "vi": {
    "metaTitle": "Image to URL cho Vercel — Liên kết CDN trực tiếp cho trang tĩnh | ImageToURL",
    "metaDescription": "Lưu trữ ảnh ngoài bản triển khai Vercel và nhúng bằng URL vĩnh viễn. Vượt qua giới hạn kích thước build, triển khai nhanh hơn, giữ repo gọn gàng.",
    "schemaName": "Công cụ chuyển ảnh sang URL cho Vercel",
    "schemaDescription": "Tạo URL CDN vĩnh viễn cho ảnh được nhúng trong các trang Next.js, Astro hoặc tĩnh được lưu trữ trên Vercel.",
    "badge": "URL ảnh Vercel",
    "h1Pre": "Image to URL",
    "h1Highlight": "cho Vercel.",
    "intro": "Đừng làm phình bản triển khai Vercel của bạn với các tệp ảnh thô. Tải lên đây, nhận URL trực tiếp và nhúng vào trang Next.js, Astro hoặc tĩnh của bạn. Build vẫn nhanh và repo vẫn nhỏ.",
    "howTitle": "Cách hoạt động",
    "steps": [
      {
        "title": "Tải lên ngoài repo",
        "body": "Gửi ảnh đến CDN của chúng tôi thay vì commit vào dự án Vercel. Giữ artifact build nhỏ và lịch sử push gọn."
      },
      {
        "title": "Lấy URL vĩnh viễn",
        "body": "Chúng tôi đưa cho bạn liên kết trực tiếp tải từ edge cache toàn cầu. Không cần bước build, không cần redeploy khi đổi ảnh."
      },
      {
        "title": "Dùng trong code",
        "body": "Đặt URL vào next/image, Astro Image hoặc thẻ <img> thường. Hoạt động trên Vercel giống như trên bất kỳ host nào."
      }
    ],
    "whyTitle": "Vì sao nên lưu ảnh ngoài Vercel",
    "whyItems": [
      {
        "title": "Triển khai nhỏ hơn",
        "body": "Vercel tính phí phút build và băng thông. Tài sản nhị phân lớn trong git làm chậm mỗi lần triển khai và làm phình build cache."
      },
      {
        "title": "CI nhanh hơn",
        "body": "Bỏ qua bước tải lên ở mỗi lần triển khai. Repo nhẹ, push hoàn tất trong vài giây thay vì vài phút."
      },
      {
        "title": "Edge-cache toàn cầu",
        "body": "Ảnh tải từ POP edge gần nhất với mỗi khách. Cùng mô hình tốc độ như chính CDN của Vercel, không cần cấu hình thêm."
      },
      {
        "title": "Thay ảnh không cần redeploy",
        "body": "Cập nhật ảnh mà không chạm code hoặc kích hoạt build mới. URL vẫn giữ nguyên."
      }
    ],
    "faqTitle": "Câu hỏi thường gặp",
    "faqs": [
      {
        "q": "Tại sao không đặt ảnh vào /public trên Vercel?",
        "a": "Bạn có thể, và nó hoạt động tốt với một vài ảnh. Khi có hàng chục tệp lớn, mỗi lần triển khai đều gửi lại tất cả, build chậm dần, và repo phình ra. Lưu ngoài Vercel giúp mọi thứ gọn gàng."
      },
      {
        "q": "Có hoạt động với next/image không?",
        "a": "Có. Truyền URL vào prop src và thêm domain ảnh vào remotePatterns trong next.config.js. Next.js sẽ tối ưu như bất kỳ ảnh ngoài nào."
      },
      {
        "q": "Có làm trang chậm không?",
        "a": "Không. Ảnh được phục vụ từ CDN với các node edge trên toàn cầu. Thời gian tải thực tế thường dưới 100ms, tương đương với cách Vercel phục vụ tài sản."
      },
      {
        "q": "URL có còn dùng được khi tôi redeploy không?",
        "a": "Có. URL là vĩnh viễn và không liên quan đến bản triển khai Vercel của bạn. Rollback, redeploy, đổi framework, liên kết vẫn hoạt động."
      },
      {
        "q": "Có miễn phí cho dự án Vercel cá nhân không?",
        "a": "Có. Quy trình tải lên và chia sẻ miễn phí, không cần đăng ký. Tài khoản miễn phí mở khóa tệp lớn hơn và bảng điều khiển để quản lý các tệp tải lên."
      }
    ],
    "ctaTitle": "Lấy URL ảnh sẵn sàng cho Vercel",
    "ctaBody": "Tải một lần. Nhúng mọi nơi. Giữ bản triển khai Vercel của bạn nhẹ nhàng.",
    "ctaButton": "Tải ảnh lên"
  },
  "pt-BR": {
    "metaTitle": "Imagem para URL para Vercel — Links CDN diretos para sites estáticos | ImageToURL",
    "metaDescription": "Hospede imagens fora do seu deploy do Vercel e use URLs permanentes. Pule o limite de tamanho do build, lance mais rápido, mantenha o repo limpo.",
    "schemaName": "Conversor de Imagem para URL para Vercel",
    "schemaDescription": "Gere URLs CDN permanentes para imagens incorporadas em sites Next.js, Astro ou estáticos hospedados no Vercel.",
    "badge": "URLs de imagem Vercel",
    "h1Pre": "Imagem para URL",
    "h1Highlight": "para Vercel.",
    "intro": "Pare de inflar seu deploy do Vercel com arquivos de imagem brutos. Faça upload aqui, pegue uma URL direta e incorpore no seu site Next.js, Astro ou estático. Os builds continuam rápidos e seu repo continua pequeno.",
    "howTitle": "Como funciona",
    "steps": [
      {
        "title": "Faça upload fora do seu repo",
        "body": "Envie sua imagem para nossa CDN em vez de commitar no projeto Vercel. Mantém o artefato de build pequeno e o histórico de push limpo."
      },
      {
        "title": "Pegue a URL permanente",
        "body": "Entregamos um link direto que carrega de um cache edge global. Sem etapa de build, sem redeploy quando você troca a imagem."
      },
      {
        "title": "Use no seu código",
        "body": "Coloque a URL em next/image, Astro Image ou uma tag <img> simples. Funciona no Vercel do mesmo jeito que em qualquer host."
      }
    ],
    "whyTitle": "Por que hospedar imagens fora do Vercel",
    "whyItems": [
      {
        "title": "Deploys menores",
        "body": "O Vercel cobra por minutos de build e banda. Assets binários grandes no git atrasam cada deploy e incham o cache de build."
      },
      {
        "title": "CI mais rápido",
        "body": "Pule a etapa de upload em todo deploy. Seu repo continua leve e os pushes vão em segundos, não minutos."
      },
      {
        "title": "Cacheado no edge globalmente",
        "body": "As imagens carregam do POP edge mais próximo de cada visitante. Mesmo modelo de velocidade da CDN do Vercel, sem config extra."
      },
      {
        "title": "Troque sem redeploy",
        "body": "Atualize uma imagem sem mexer no código nem disparar um novo build. A URL continua a mesma."
      }
    ],
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Por que não colocar as imagens em /public no Vercel?",
        "a": "Você pode, e funciona bem para algumas imagens. Quando você tem dezenas de arquivos grandes, todo deploy reenvia todos eles, os builds ficam mais lentos e o repo incha. Hospedar fora do Vercel mantém tudo organizado."
      },
      {
        "q": "Funciona com next/image?",
        "a": "Sim. Passe a URL para a prop src e adicione o domínio da imagem em remotePatterns no next.config.js. O Next.js otimiza como qualquer imagem externa."
      },
      {
        "q": "Vai deixar minha página lenta?",
        "a": "Não. As imagens são servidas de uma CDN com nós edge no mundo todo. Tempos reais costumam ficar abaixo de 100ms, parecido com a entrega de assets do Vercel."
      },
      {
        "q": "As URLs sobrevivem aos redeploys?",
        "a": "Sim. As URLs são permanentes e não têm nada a ver com seu deploy do Vercel. Faça rollback, redeploy, troque de framework, o link continua funcionando."
      },
      {
        "q": "É gratuito para projetos hobby no Vercel?",
        "a": "Sim. O fluxo de enviar e compartilhar é gratuito, sem cadastro. Contas gratuitas liberam arquivos maiores e um painel para gerenciar seus uploads."
      }
    ],
    "ctaTitle": "Pegue uma URL de imagem pronta para o Vercel",
    "ctaBody": "Envie uma vez. Incorpore em qualquer lugar. Mantenha o deploy do Vercel leve.",
    "ctaButton": "Enviar imagem"
  },
  "tr": {
    "metaTitle": "Vercel için Resimden URL — Statik Siteler için Doğrudan CDN Bağlantıları | ImageToURL",
    "metaDescription": "Resimleri Vercel deploy'ınızın dışında barındırın ve kalıcı URL'lerle yerleştirin. Build boyut sınırını atlayın, daha hızlı yayınlayın, repo'nuzu temiz tutun.",
    "schemaName": "Vercel için Resimden URL Dönüştürücü",
    "schemaDescription": "Vercel'de barındırılan Next.js, Astro veya statik sitelere yerleştirilen resimler için kalıcı CDN URL'leri oluşturun.",
    "badge": "Vercel Resim URL'leri",
    "h1Pre": "Resimden URL",
    "h1Highlight": "Vercel için.",
    "intro": "Vercel deploy'ınızı ham resim dosyalarıyla şişirmeyi bırakın. Buraya yükleyin, doğrudan bir URL alın ve Next.js, Astro veya statik sitenize yerleştirin. Build'ler hızlı kalır ve repo'nuz küçük kalır.",
    "howTitle": "Nasıl Çalışır",
    "steps": [
      {
        "title": "Repo Dışına Yükleyin",
        "body": "Resminizi Vercel projenize commit etmek yerine CDN'imize gönderin. Build artifact'ınız küçük ve push geçmişiniz temiz kalır."
      },
      {
        "title": "Kalıcı URL'yi Alın",
        "body": "Size global edge cache'den yüklenen doğrudan bir bağlantı veriyoruz. Build adımı yok, resmi değiştirdiğinizde yeniden deploy yok."
      },
      {
        "title": "Kodunuzda Kullanın",
        "body": "URL'yi next/image, Astro Image veya düz bir <img> etiketine koyun. Vercel'de herhangi bir host gibi çalışır."
      }
    ],
    "whyTitle": "Resimleri Neden Vercel Dışında Barındırmalı",
    "whyItems": [
      {
        "title": "Daha Küçük Deploy'lar",
        "body": "Vercel build dakikaları ve bant genişliği için ücret alır. git'teki büyük binary asset'ler her deploy'u yavaşlatır ve build cache'i şişirir."
      },
      {
        "title": "Daha Hızlı CI",
        "body": "Her deploy'da yükleme adımını atlayın. Repo'nuz hafif kalır ve push'lar dakikalar değil saniyeler içinde geçer."
      },
      {
        "title": "Küresel Edge Cache",
        "body": "Resimler her ziyaretçiye en yakın edge POP'tan yüklenir. Vercel'in kendi CDN'iyle aynı hız modeli, ekstra config yok."
      },
      {
        "title": "Yeniden Deploy Olmadan Değiştirin",
        "body": "Kodunuza dokunmadan veya yeni bir build tetiklemeden resmi güncelleyin. URL aynı kalır."
      }
    ],
    "faqTitle": "Sıkça Sorulan Sorular",
    "faqs": [
      {
        "q": "Neden resimleri Vercel'de /public içine koymayalım?",
        "a": "Koyabilirsiniz ve birkaç resim için iyi çalışır. Düzinelerce büyük dosyanız olduğunda, her deploy hepsini yeniden gönderir, build'ler yavaşlar ve repo'nuz şişer. Vercel dışında barındırmak her şeyi düzenli tutar."
      },
      {
        "q": "next/image ile çalışıyor mu?",
        "a": "Evet. URL'yi src prop'una geçirin ve resim domain'ini next.config.js'deki remotePatterns'a ekleyin. Next.js bunu herhangi bir harici resim gibi optimize eder."
      },
      {
        "q": "Sayfamı yavaşlatır mı?",
        "a": "Hayır. Resimler dünya çapında edge node'lara sahip bir CDN'den sunulur. Gerçek dünya yükleme süreleri genellikle 100ms'nin altındadır, Vercel'in kendi asset teslimine benzer."
      },
      {
        "q": "Yeniden deploy ettiğimde URL'ler hayatta kalır mı?",
        "a": "Evet. URL'ler kalıcıdır ve Vercel deploy'unuzla hiçbir ilgisi yoktur. Rollback yapın, yeniden deploy edin, framework değiştirin, bağlantı çalışmaya devam eder."
      },
      {
        "q": "Hobi Vercel projeleri için ücretsiz mi?",
        "a": "Evet. Yükle-ve-paylaş akışı ücretsiz, kayıt yok. Ücretsiz hesaplar daha büyük dosyaları ve yüklemelerinizi yönetmek için bir panel açar."
      }
    ],
    "ctaTitle": "Vercel'e hazır resim URL'si alın",
    "ctaBody": "Bir kez yükleyin. Her yere yerleştirin. Vercel deploy'unuzu hafif tutun.",
    "ctaButton": "Resim Yükle"
  },
  "tl": {
    "metaTitle": "Image to URL para sa Vercel — Direktang CDN Links para sa Static Sites | ImageToURL",
    "metaDescription": "I-host ang mga larawan sa labas ng iyong Vercel deploy at i-embed gamit ang permanenteng URL. Iwasan ang build size limit, mag-ship ng mas mabilis, panatilihing malinis ang repo.",
    "schemaName": "Image to URL Converter para sa Vercel",
    "schemaDescription": "Gumawa ng permanenteng CDN URL para sa mga larawang ini-embed mo sa Vercel-hosted Next.js, Astro, o static sites.",
    "badge": "Vercel Image URLs",
    "h1Pre": "Image to URL",
    "h1Highlight": "para sa Vercel.",
    "intro": "Itigil ang pagpapabigat sa iyong Vercel deploy gamit ang raw image files. Mag-upload dito, kumuha ng direktang URL, at i-embed sa iyong Next.js, Astro, o static site. Mananatiling mabilis ang build at maliit ang repo.",
    "howTitle": "Paano Ito Gumagana",
    "steps": [
      {
        "title": "Mag-upload sa Labas ng Repo",
        "body": "Ipadala ang iyong larawan sa CDN namin sa halip na i-commit sa Vercel project. Pinapanatili ang build artifact na maliit at malinis ang push history."
      },
      {
        "title": "Kunin ang Permanenteng URL",
        "body": "Bibigyan ka namin ng direktang link na nagloload mula sa global edge cache. Walang build step, walang redeploy kapag pinapalitan ang larawan."
      },
      {
        "title": "Gamitin sa Iyong Code",
        "body": "Ilagay ang URL sa next/image, Astro Image, o plain <img> tag. Gumagana sa Vercel katulad ng sa anumang host."
      }
    ],
    "whyTitle": "Bakit Mag-host ng Larawan sa Labas ng Vercel",
    "whyItems": [
      {
        "title": "Mas Maliit na Deploys",
        "body": "Naniningil ang Vercel ng build minutes at bandwidth. Pinapabagal ng malalaking binary asset sa git ang bawat deploy at pinapalaki ang build cache."
      },
      {
        "title": "Mas Mabilis na CI",
        "body": "Laktawan ang upload step sa bawat deploy. Mananatiling magaan ang repo at ang push ay tatagal ng segundo, hindi minuto."
      },
      {
        "title": "Edge-Cached sa Buong Mundo",
        "body": "Nagloload ang mga larawan mula sa pinakamalapit na edge POP sa bawat bisita. Parehong speed model ng sariling CDN ng Vercel, walang extra config."
      },
      {
        "title": "Magpalit nang Walang Redeploy",
        "body": "I-update ang isang larawan nang hindi hinawakan ang code o nag-trigger ng bagong build. Pareho pa rin ang URL."
      }
    ],
    "faqTitle": "Mga Madalas Itanong",
    "faqs": [
      {
        "q": "Bakit hindi na lang ilagay ang mga larawan sa /public sa Vercel?",
        "a": "Puwede mo, at gumagana ito nang maayos para sa kakaunting larawan. Kapag may dose-dosenang malalaking file, sa bawat deploy ipinapadala ulit lahat, bumabagal ang build, at lumalaki ang repo. Mas malinis kapag nasa labas ng Vercel."
      },
      {
        "q": "Gumagana ba ito sa next/image?",
        "a": "Oo. Ipasa ang URL sa src prop at idagdag ang image domain sa remotePatterns sa next.config.js. I-o-optimize ito ng Next.js tulad ng anumang external na larawan."
      },
      {
        "q": "Pababagalin ba nito ang aking page?",
        "a": "Hindi. Sineserve ang mga larawan mula sa CDN na may edge nodes sa buong mundo. Karaniwang mas mababa sa 100ms ang totoong load times, katulad ng asset delivery ng Vercel mismo."
      },
      {
        "q": "Mananatili ba ang mga URL kapag nag-redeploy ako?",
        "a": "Oo. Permanente ang mga URL at walang kinalaman sa iyong Vercel deploy. Mag-rollback, mag-redeploy, magpalit ng framework, gumagana pa rin ang link."
      },
      {
        "q": "Libre ba ito para sa hobby Vercel projects?",
        "a": "Oo. Libre ang upload-at-share flow, walang sign-up. Bumubukas ang libreng account ng mas malalaking file at dashboard para sa pamamahala ng iyong mga upload."
      }
    ],
    "ctaTitle": "Kumuha ng URL ng larawan na handa sa Vercel",
    "ctaBody": "Mag-upload minsan. I-embed kahit saan. Panatilihing magaan ang Vercel deploy.",
    "ctaButton": "Mag-upload ng Larawan"
  },
  "pl": {
    "metaTitle": "Obraz na URL dla Vercel — Bezpośrednie linki CDN dla stron statycznych | ImageToURL",
    "metaDescription": "Hostuj obrazy poza wdrożeniem Vercel i osadzaj je za pomocą trwałych URL-i. Omiń limit rozmiaru builda, wdrażaj szybciej, utrzymuj repo w czystości.",
    "schemaName": "Konwerter obrazu na URL dla Vercel",
    "schemaDescription": "Generuj trwałe URL-e CDN dla obrazów osadzanych w stronach Next.js, Astro lub statycznych hostowanych na Vercel.",
    "badge": "URL-e obrazów Vercel",
    "h1Pre": "Obraz na URL",
    "h1Highlight": "dla Vercel.",
    "intro": "Przestań rozdymać swoje wdrożenie Vercel surowymi plikami obrazów. Wgraj tutaj, otrzymaj bezpośredni URL i osadź go w swojej stronie Next.js, Astro lub statycznej. Buildy pozostają szybkie, a repo małe.",
    "howTitle": "Jak to działa",
    "steps": [
      {
        "title": "Wgraj poza repo",
        "body": "Wyślij swój obraz do naszego CDN zamiast commitować go w projekcie Vercel. Twój artefakt builda pozostaje mały, a historia pushów czysta."
      },
      {
        "title": "Pobierz trwały URL",
        "body": "Dajemy ci bezpośredni link, który ładuje się z globalnego edge cache. Bez kroku builda, bez redeployu przy zmianie obrazu."
      },
      {
        "title": "Użyj go w kodzie",
        "body": "Wstaw URL do next/image, Astro Image lub zwykłego tagu <img>. Działa na Vercel tak samo jak na każdym innym hostingu."
      }
    ],
    "whyTitle": "Dlaczego hostować obrazy poza Vercel",
    "whyItems": [
      {
        "title": "Mniejsze wdrożenia",
        "body": "Vercel pobiera opłaty za minuty buildu i przepustowość. Duże binarne assety w git spowalniają każde wdrożenie i rozdymają cache buildu."
      },
      {
        "title": "Szybsze CI",
        "body": "Pomiń krok wgrywania przy każdym wdrożeniu. Twoje repo pozostaje lekkie, a pushe przechodzą w sekundach, nie minutach."
      },
      {
        "title": "Edge-cache globalnie",
        "body": "Obrazy ładują się z najbliższego POP edge dla każdego odwiedzającego. Ten sam model szybkości co własny CDN Vercel, bez dodatkowej konfiguracji."
      },
      {
        "title": "Zmieniaj bez redeployu",
        "body": "Aktualizuj obraz bez dotykania kodu ani wyzwalania nowego builda. URL pozostaje taki sam."
      }
    ],
    "faqTitle": "Najczęściej zadawane pytania",
    "faqs": [
      {
        "q": "Dlaczego nie wrzucić obrazów po prostu do /public na Vercel?",
        "a": "Możesz, i działa to dobrze dla kilku obrazów. Gdy masz dziesiątki dużych plików, każde wdrożenie wysyła je wszystkie ponownie, buildy zwalniają, a repo puchnie. Hostowanie poza Vercel utrzymuje porządek."
      },
      {
        "q": "Czy działa z next/image?",
        "a": "Tak. Przekaż URL do propsa src i dodaj domenę obrazu do remotePatterns w next.config.js. Next.js zoptymalizuje go jak każdy inny zewnętrzny obraz."
      },
      {
        "q": "Czy spowolni moją stronę?",
        "a": "Nie. Obrazy są serwowane z CDN z węzłami edge na całym świecie. Rzeczywiste czasy ładowania są zwykle poniżej 100 ms, podobnie jak dostarczanie assetów przez sam Vercel."
      },
      {
        "q": "Czy URL-e przetrwają redeploy?",
        "a": "Tak. URL-e są trwałe i nie mają nic wspólnego z twoim wdrożeniem Vercel. Rollback, redeploy, zmiana frameworka, link nadal działa."
      },
      {
        "q": "Czy jest darmowy dla hobbystycznych projektów Vercel?",
        "a": "Tak. Przepływ wgrywaj-i-udostępniaj jest darmowy, bez rejestracji. Darmowe konta odblokowują większe pliki i panel do zarządzania uploadami."
      }
    ],
    "ctaTitle": "Pobierz URL obrazu gotowy dla Vercel",
    "ctaBody": "Wgraj raz. Osadzaj wszędzie. Utrzymuj swoje wdrożenie Vercel w lekkiej formie.",
    "ctaButton": "Wgraj obraz"
  },
  "nl": {
    "metaTitle": "Afbeelding naar URL voor Vercel — Directe CDN-links voor statische sites | ImageToURL",
    "metaDescription": "Host afbeeldingen buiten je Vercel-deploy en gebruik permanente URL's. Omzeil de build-groottelimiet, deploy sneller, houd je repo schoon.",
    "schemaName": "Afbeelding naar URL converter voor Vercel",
    "schemaDescription": "Genereer permanente CDN-URL's voor afbeeldingen die je insluit in op Vercel gehoste Next.js-, Astro- of statische sites.",
    "badge": "Vercel afbeeldings-URL's",
    "h1Pre": "Afbeelding naar URL",
    "h1Highlight": "voor Vercel.",
    "intro": "Stop met het opblazen van je Vercel-deploy met ruwe afbeeldingsbestanden. Upload hier, krijg een directe URL en sluit hem in in je Next.js-, Astro- of statische site. Builds blijven snel en je repo blijft klein.",
    "howTitle": "Hoe het werkt",
    "steps": [
      {
        "title": "Upload buiten je repo",
        "body": "Stuur je afbeelding naar onze CDN in plaats van hem in je Vercel-project te committen. Houdt je build-artefact klein en je push-historie schoon."
      },
      {
        "title": "Pak de permanente URL",
        "body": "We geven je een directe link die laadt vanaf een globale edge-cache. Geen build-stap, geen redeploy als je de afbeelding wisselt."
      },
      {
        "title": "Gebruik hem in je code",
        "body": "Zet de URL in next/image, Astro Image of een gewone <img>-tag. Werkt op Vercel net zo als op elke andere host."
      }
    ],
    "whyTitle": "Waarom afbeeldingen buiten Vercel hosten",
    "whyItems": [
      {
        "title": "Kleinere deploys",
        "body": "Vercel rekent build-minuten en bandbreedte. Grote binaire assets in git vertragen elke deploy en blazen de build-cache op."
      },
      {
        "title": "Snellere CI",
        "body": "Sla de upload-stap over bij elke deploy. Je repo blijft licht en pushes gaan in seconden, niet minuten."
      },
      {
        "title": "Wereldwijd edge-gecached",
        "body": "Afbeeldingen laden vanaf de dichtstbijzijnde edge-POP per bezoeker. Hetzelfde snelheidsmodel als Vercels eigen CDN, zonder extra config."
      },
      {
        "title": "Wisselen zonder redeploy",
        "body": "Werk een afbeelding bij zonder je code aan te raken of een nieuwe build te triggeren. De URL blijft hetzelfde."
      }
    ],
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Waarom niet gewoon afbeeldingen in /public op Vercel zetten?",
        "a": "Kan, en werkt prima voor een handvol afbeeldingen. Zodra je tientallen grote bestanden hebt, verstuurt elke deploy ze allemaal opnieuw, worden builds trager en zwelt je repo op. Buiten Vercel hosten houdt alles netjes."
      },
      {
        "q": "Werkt het met next/image?",
        "a": "Ja. Geef de URL door aan de src-prop en voeg het afbeeldingsdomein toe aan remotePatterns in next.config.js. Next.js optimaliseert hem zoals elke andere externe afbeelding."
      },
      {
        "q": "Maakt het mijn pagina trager?",
        "a": "Nee. Afbeeldingen worden geserveerd vanaf een CDN met edge-nodes wereldwijd. Echte laadtijden liggen meestal onder de 100 ms, vergelijkbaar met Vercels eigen asset-levering."
      },
      {
        "q": "Overleven de URL's een redeploy?",
        "a": "Ja. URL's zijn permanent en hebben niets met je Vercel-deploy te maken. Roll back, deploy opnieuw, wissel van framework, de link blijft werken."
      },
      {
        "q": "Is het gratis voor hobby Vercel-projecten?",
        "a": "Ja. De uploaden-en-delen-flow is gratis, zonder registratie. Gratis accounts ontgrendelen grotere bestanden en een dashboard om je uploads te beheren."
      }
    ],
    "ctaTitle": "Pak een Vercel-klare afbeeldings-URL",
    "ctaBody": "Upload één keer. Sluit overal in. Houd je Vercel-deploy slank.",
    "ctaButton": "Afbeelding uploaden"
  },
  "it": {
    "metaTitle": "Immagine in URL per Vercel — Link CDN diretti per siti statici | ImageToURL",
    "metaDescription": "Ospita immagini fuori dal tuo deploy Vercel e incorporale con URL permanenti. Aggira il limite di dimensione del build, distribuisci più velocemente, mantieni la repo pulita.",
    "schemaName": "Convertitore Immagine in URL per Vercel",
    "schemaDescription": "Genera URL CDN permanenti per immagini incorporate in siti Next.js, Astro o statici ospitati su Vercel.",
    "badge": "URL immagini Vercel",
    "h1Pre": "Immagine in URL",
    "h1Highlight": "per Vercel.",
    "intro": "Smetti di appesantire il tuo deploy Vercel con file immagine grezzi. Carica qui, ottieni un URL diretto e incorporalo nel tuo sito Next.js, Astro o statico. I build restano veloci e la repo resta piccola.",
    "howTitle": "Come funziona",
    "steps": [
      {
        "title": "Carica fuori dalla repo",
        "body": "Invia la tua immagine alla nostra CDN invece di committarla nel progetto Vercel. Mantiene piccolo l'artefatto del build e pulita la cronologia dei push."
      },
      {
        "title": "Prendi l'URL permanente",
        "body": "Ti diamo un link diretto che si carica da una cache edge globale. Nessuna fase di build, nessun redeploy quando cambi l'immagine."
      },
      {
        "title": "Usalo nel codice",
        "body": "Inserisci l'URL in next/image, Astro Image o in un semplice tag <img>. Funziona su Vercel come su qualsiasi host."
      }
    ],
    "whyTitle": "Perché ospitare le immagini fuori da Vercel",
    "whyItems": [
      {
        "title": "Deploy più piccoli",
        "body": "Vercel addebita minuti di build e larghezza di banda. Grossi asset binari in git rallentano ogni deploy e gonfiano la cache di build."
      },
      {
        "title": "CI più veloce",
        "body": "Salta il passo di upload a ogni deploy. La tua repo resta leggera e i push passano in secondi, non in minuti."
      },
      {
        "title": "Edge-cache globale",
        "body": "Le immagini si caricano dal POP edge più vicino a ogni visitatore. Stesso modello di velocità della CDN di Vercel, senza configurazioni extra."
      },
      {
        "title": "Sostituisci senza redeploy",
        "body": "Aggiorna un'immagine senza toccare il codice né attivare un nuovo build. L'URL resta lo stesso."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Perché non mettere semplicemente le immagini in /public su Vercel?",
        "a": "Puoi, e funziona bene per una manciata di immagini. Quando ne hai decine di grandi dimensioni, ogni deploy le rispedisce tutte, i build rallentano e la repo si gonfia. Ospitarle fuori da Vercel mantiene tutto in ordine."
      },
      {
        "q": "Funziona con next/image?",
        "a": "Sì. Passa l'URL alla prop src e aggiungi il dominio dell'immagine a remotePatterns in next.config.js. Next.js la ottimizzerà come qualsiasi altra immagine esterna."
      },
      {
        "q": "Rallenterà la mia pagina?",
        "a": "No. Le immagini sono servite da una CDN con nodi edge in tutto il mondo. I tempi di caricamento reali sono di solito sotto i 100 ms, simili alla distribuzione di asset di Vercel."
      },
      {
        "q": "Gli URL sopravvivono ai redeploy?",
        "a": "Sì. Gli URL sono permanenti e non hanno nulla a che fare con il tuo deploy Vercel. Esegui rollback, ridistribuisci, cambia framework, il link continua a funzionare."
      },
      {
        "q": "È gratis per progetti hobby su Vercel?",
        "a": "Sì. Il flusso di caricamento e condivisione è gratuito, senza registrazione. Gli account gratuiti sbloccano file più grandi e una dashboard per gestire i tuoi upload."
      }
    ],
    "ctaTitle": "Ottieni un URL immagine pronto per Vercel",
    "ctaBody": "Carica una volta. Incorpora ovunque. Mantieni snello il tuo deploy Vercel.",
    "ctaButton": "Carica immagine"
  },
  "ar": {
    "metaTitle": "تحويل الصورة إلى رابط لـ Vercel — روابط CDN مباشرة للمواقع الثابتة | ImageToURL",
    "metaDescription": "استضف الصور خارج نشر Vercel ودمجها بروابط دائمة. تجاوز حد حجم البناء، وانشر بسرعة أكبر، واحتفظ بمستودعك نظيفًا.",
    "schemaName": "محوّل الصورة إلى رابط لـ Vercel",
    "schemaDescription": "أنشئ روابط CDN دائمة للصور التي تضمّنها في مواقع Next.js وAstro والمواقع الثابتة المستضافة على Vercel.",
    "badge": "روابط صور Vercel",
    "h1Pre": "تحويل الصورة إلى رابط",
    "h1Highlight": "لـ Vercel.",
    "intro": "توقّف عن إثقال نشر Vercel الخاص بك بملفات الصور الخام. ارفعها هنا، احصل على رابط مباشر، وضمّنه في موقع Next.js أو Astro أو الموقع الثابت لديك. تبقى عمليات البناء سريعة ويبقى المستودع صغيرًا.",
    "howTitle": "طريقة العمل",
    "steps": [
      {
        "title": "ارفع خارج المستودع",
        "body": "أرسل صورتك إلى CDN لدينا بدلًا من إيداعها في مشروع Vercel. هذا يُبقي ناتج البناء صغيرًا وسجل الدفع نظيفًا."
      },
      {
        "title": "احصل على الرابط الدائم",
        "body": "نمنحك رابطًا مباشرًا يُحمَّل من ذاكرة تخزين مؤقت طرفية عالمية. لا حاجة لخطوة بناء ولا لإعادة نشر عند تبديل الصورة."
      },
      {
        "title": "استخدمه في كودك",
        "body": "ضع الرابط في next/image أو Astro Image أو وسم <img> العادي. يعمل على Vercel بنفس طريقة عمله على أي مضيف."
      }
    ],
    "whyTitle": "لماذا تستضيف الصور خارج Vercel",
    "whyItems": [
      {
        "title": "عمليات نشر أصغر",
        "body": "تتقاضى Vercel رسومًا على دقائق البناء وعرض النطاق. الأصول الثنائية الكبيرة داخل git تُبطئ كل عملية نشر وتُضخّم ذاكرة البناء."
      },
      {
        "title": "CI أسرع",
        "body": "تخطّ خطوة الرفع في كل نشر. يبقى مستودعك خفيفًا وتمر عمليات الدفع في ثوانٍ بدلًا من دقائق."
      },
      {
        "title": "تخزين مؤقت طرفي عالمي",
        "body": "تُحمَّل الصور من أقرب نقطة طرفية لكل زائر. نفس نموذج السرعة الذي تعتمده شبكة Vercel نفسها، دون أي تكوين إضافي."
      },
      {
        "title": "استبدال دون إعادة نشر",
        "body": "حدّث الصورة دون لمس الكود أو تشغيل بناء جديد. يبقى الرابط نفسه."
      }
    ],
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "لماذا لا أضع الصور في مجلد /public على Vercel فحسب؟",
        "a": "يمكنك ذلك، ويعمل بشكل جيد لعدد قليل من الصور. عندما يصبح لديك عشرات الملفات الكبيرة، يُعيد كل نشر إرسالها كلها، وتبطؤ عمليات البناء، ويتضخم المستودع. استضافتها خارج Vercel تُبقي كل شيء مرتّبًا."
      },
      {
        "q": "هل يعمل مع next/image؟",
        "a": "نعم. مرّر الرابط إلى خاصية src وأضف نطاق الصورة إلى remotePatterns في next.config.js. ستعالجه Next.js كأي صورة خارجية أخرى."
      },
      {
        "q": "هل سيُبطئ صفحتي؟",
        "a": "لا. تُقدَّم الصور من شبكة CDN ذات نقاط طرفية حول العالم. أوقات التحميل الفعلية عادةً أقل من 100 مللي ثانية، شبيهة بتوصيل أصول Vercel نفسها."
      },
      {
        "q": "هل تبقى الروابط بعد إعادة النشر؟",
        "a": "نعم. الروابط دائمة ولا علاقة لها بنشر Vercel. ارجع للخلف، أعد النشر، غيّر إطار العمل، يبقى الرابط شغّالًا."
      },
      {
        "q": "هل هي مجانية لمشاريع Vercel الشخصية؟",
        "a": "نعم. تدفّق الرفع والمشاركة مجاني دون تسجيل. الحسابات المجانية تفتح ملفات أكبر ولوحة لإدارة عمليات الرفع."
      }
    ],
    "ctaTitle": "احصل على رابط صورة جاهز لـ Vercel",
    "ctaBody": "ارفع مرة واحدة. ضمّن في أي مكان. أبقِ نشر Vercel خفيفًا.",
    "ctaButton": "ارفع صورة"
  },
  "bn": {
    "metaTitle": "Vercel-এর জন্য Image to URL — স্ট্যাটিক সাইটের জন্য সরাসরি CDN লিংক | ImageToURL",
    "metaDescription": "আপনার Vercel ডিপ্লয়ের বাইরে ছবি হোস্ট করুন এবং স্থায়ী URL দিয়ে এম্বেড করুন। বিল্ড সাইজ লিমিট এড়ান, দ্রুত শিপ করুন, আপনার রেপো পরিচ্ছন্ন রাখুন।",
    "schemaName": "Vercel-এর জন্য Image to URL কনভার্টার",
    "schemaDescription": "Vercel-এ হোস্ট করা Next.js, Astro বা স্ট্যাটিক সাইটে এম্বেড করা ছবির জন্য স্থায়ী CDN URL তৈরি করুন।",
    "badge": "Vercel ছবির URL",
    "h1Pre": "Image to URL",
    "h1Highlight": "Vercel-এর জন্য।",
    "intro": "কাঁচা ছবির ফাইল দিয়ে আপনার Vercel ডিপ্লয় ফোলানো বন্ধ করুন। এখানে আপলোড করুন, একটি সরাসরি URL পান, এবং এটি আপনার Next.js, Astro বা স্ট্যাটিক সাইটে এম্বেড করুন। বিল্ড দ্রুত থাকে এবং আপনার রেপো ছোট থাকে।",
    "howTitle": "এটি কীভাবে কাজ করে",
    "steps": [
      {
        "title": "আপনার রেপোর বাইরে আপলোড করুন",
        "body": "আপনার ছবি Vercel প্রজেক্টে কমিট না করে আমাদের CDN-এ পাঠান। আপনার বিল্ড আর্টিফ্যাক্ট ছোট এবং পুশ ইতিহাস পরিচ্ছন্ন রাখে।"
      },
      {
        "title": "স্থায়ী URL নিন",
        "body": "আমরা আপনাকে একটি সরাসরি লিংক দিই যা গ্লোবাল এজ ক্যাশ থেকে লোড হয়। কোনো বিল্ড ধাপ নেই, ছবি পরিবর্তন করার সময় কোনো রিডিপ্লয় নেই।"
      },
      {
        "title": "আপনার কোডে ব্যবহার করুন",
        "body": "URL টি next/image, Astro Image বা সাধারণ <img> ট্যাগে রাখুন। Vercel-এ যেকোনো হোস্টের মতই কাজ করে।"
      }
    ],
    "whyTitle": "Vercel-এর বাইরে ছবি কেন হোস্ট করবেন",
    "whyItems": [
      {
        "title": "ছোট ডিপ্লয়",
        "body": "Vercel বিল্ড মিনিট এবং ব্যান্ডউইথের জন্য চার্জ করে। git-এ বড় বাইনারি অ্যাসেট প্রতিটি ডিপ্লয়কে ধীর করে এবং বিল্ড ক্যাশ ফোলায়।"
      },
      {
        "title": "দ্রুত CI",
        "body": "প্রতিটি ডিপ্লয়ে আপলোড ধাপটি এড়িয়ে যান। আপনার রেপো হালকা থাকে এবং পুশগুলি সেকেন্ডে শেষ হয়, মিনিটে নয়।"
      },
      {
        "title": "বিশ্বব্যাপী এজ-ক্যাশড",
        "body": "প্রতিটি দর্শকের নিকটতম এজ POP থেকে ছবি লোড হয়। Vercel-এর নিজস্ব CDN-এর মতই গতি মডেল, কোনো অতিরিক্ত কনফিগ নেই।"
      },
      {
        "title": "রিডিপ্লয় ছাড়াই পরিবর্তন করুন",
        "body": "আপনার কোড স্পর্শ না করে বা নতুন বিল্ড ট্রিগার না করে একটি ছবি আপডেট করুন। URL একই থাকে।"
      }
    ],
    "faqTitle": "সাধারণ জিজ্ঞাসা",
    "faqs": [
      {
        "q": "Vercel-এ ছবিগুলি শুধু /public-এ রাখলে হয় না কেন?",
        "a": "রাখতে পারেন, এবং কয়েকটি ছবির জন্য এটি ভালোভাবে কাজ করে। যখন আপনার কাছে ডজনখানেক বড় ফাইল থাকে, প্রতিটি ডিপ্লয় সেগুলো আবার পাঠায়, বিল্ড ধীর হয়, এবং আপনার রেপো ফোলে। Vercel-এর বাইরে হোস্ট করা সবকিছু পরিপাটি রাখে।"
      },
      {
        "q": "এটা কি next/image এর সাথে কাজ করে?",
        "a": "হ্যাঁ। URL টি src প্রপে পাঠান এবং next.config.js-এ remotePatterns-এ ছবির ডোমেইন যোগ করুন। Next.js এটিকে যেকোনো বাহ্যিক ছবির মতো অপ্টিমাইজ করবে।"
      },
      {
        "q": "এটা কি আমার পেজ ধীর করবে?",
        "a": "না। ছবিগুলি বিশ্বজুড়ে এজ নোডসহ একটি CDN থেকে পরিবেশন করা হয়। প্রকৃত লোড সময় সাধারণত 100ms-এর কম, Vercel-এর নিজস্ব অ্যাসেট ডেলিভারির অনুরূপ।"
      },
      {
        "q": "আমি রিডিপ্লয় করলে URL টি কি টিকে থাকে?",
        "a": "হ্যাঁ। URL স্থায়ী এবং আপনার Vercel ডিপ্লয়ের সাথে কোনো সম্পর্ক নেই। রোল ব্যাক করুন, রিডিপ্লয় করুন, ফ্রেমওয়ার্ক পরিবর্তন করুন, লিংকটি কাজ করতে থাকে।"
      },
      {
        "q": "হবি Vercel প্রজেক্টের জন্য কি এটি ফ্রি?",
        "a": "হ্যাঁ। আপলোড-এবং-শেয়ার ফ্লো ফ্রি, কোনো সাইনআপ নেই। ফ্রি অ্যাকাউন্ট বড় ফাইল এবং আপনার আপলোড পরিচালনার জন্য একটি ড্যাশবোর্ড আনলক করে।"
      }
    ],
    "ctaTitle": "Vercel-প্রস্তুত ছবির URL পান",
    "ctaBody": "একবার আপলোড করুন। যেকোনো জায়গায় এম্বেড করুন। আপনার Vercel ডিপ্লয় হালকা রাখুন।",
    "ctaButton": "ছবি আপলোড করুন"
  },
  "fa": {
    "metaTitle": "تبدیل تصویر به URL برای Vercel — لینک‌های مستقیم CDN برای سایت‌های استاتیک | ImageToURL",
    "metaDescription": "تصاویر را خارج از deploy ورسل میزبانی کنید و با URLهای دائمی جاسازی کنید. از محدودیت اندازه build عبور کنید، سریع‌تر منتشر کنید، ریپوی خود را تمیز نگه دارید.",
    "schemaName": "مبدل تصویر به URL برای Vercel",
    "schemaDescription": "برای تصاویری که در سایت‌های Next.js، Astro یا استاتیک میزبانی‌شده در Vercel جاسازی می‌کنید، URLهای CDN دائمی تولید کنید.",
    "badge": "URLهای تصویر Vercel",
    "h1Pre": "تبدیل تصویر به URL",
    "h1Highlight": "برای Vercel.",
    "intro": "دیگر deploy ورسل خود را با فایل‌های تصویر خام سنگین نکنید. اینجا آپلود کنید، یک URL مستقیم بگیرید و آن را در سایت Next.js، Astro یا استاتیک خود جاسازی کنید. build‌ها سریع می‌مانند و ریپوی شما کوچک می‌ماند.",
    "howTitle": "نحوه کار",
    "steps": [
      {
        "title": "خارج از ریپوی خود آپلود کنید",
        "body": "تصویر خود را به جای commit کردن در پروژه ورسل، به CDN ما بفرستید. این کار build artifact شما را کوچک و تاریخچه push شما را تمیز نگه می‌دارد."
      },
      {
        "title": "URL دائمی را بگیرید",
        "body": "ما به شما یک لینک مستقیم می‌دهیم که از یک edge cache جهانی بارگذاری می‌شود. بدون نیاز به مرحله build، بدون redeploy هنگام تعویض تصویر."
      },
      {
        "title": "در کد خود استفاده کنید",
        "body": "URL را در next/image، Astro Image یا یک تگ <img> ساده قرار دهید. روی Vercel به همان شکلی کار می‌کند که روی هر هاست دیگری."
      }
    ],
    "whyTitle": "چرا تصاویر را خارج از Vercel میزبانی کنید",
    "whyItems": [
      {
        "title": "Deployهای کوچک‌تر",
        "body": "Vercel برای دقایق build و پهنای باند هزینه می‌گیرد. asset های باینری بزرگ در git هر deploy را کند می‌کنند و build cache را متورم می‌کنند."
      },
      {
        "title": "CI سریع‌تر",
        "body": "مرحله آپلود را در هر deploy رد کنید. ریپوی شما سبک می‌ماند و push ها در عرض چند ثانیه انجام می‌شوند، نه دقیقه."
      },
      {
        "title": "Edge-Cache جهانی",
        "body": "تصاویر از نزدیک‌ترین edge POP به هر بازدیدکننده بارگذاری می‌شوند. همان مدل سرعت CDN خود ورسل، بدون پیکربندی اضافی."
      },
      {
        "title": "تعویض بدون redeploy",
        "body": "تصویر را بدون دست زدن به کد یا تریگر کردن یک build جدید به‌روز کنید. URL یکسان می‌ماند."
      }
    ],
    "faqTitle": "پرسش‌های پرتکرار",
    "faqs": [
      {
        "q": "چرا تصاویر را در /public روی Vercel نگذاریم؟",
        "a": "می‌توانید، و برای چند تصویر خوب کار می‌کند. وقتی ده‌ها فایل بزرگ داشته باشید، هر deploy همه آن‌ها را دوباره ارسال می‌کند، build ها کند می‌شوند و ریپوی شما متورم می‌شود. میزبانی آن‌ها خارج از Vercel همه چیز را مرتب نگه می‌دارد."
      },
      {
        "q": "آیا با next/image کار می‌کند؟",
        "a": "بله. URL را به prop src ارسال کنید و دامنه تصویر را به remotePatterns در next.config.js اضافه کنید. Next.js آن را مانند هر تصویر خارجی دیگری بهینه می‌کند."
      },
      {
        "q": "آیا صفحه من را کند می‌کند؟",
        "a": "خیر. تصاویر از یک CDN با node های edge در سراسر جهان ارائه می‌شوند. زمان بارگذاری واقعی معمولاً زیر 100ms است، مشابه ارائه asset های خود ورسل."
      },
      {
        "q": "آیا URL ها هنگام redeploy باقی می‌مانند؟",
        "a": "بله. URL ها دائمی هستند و هیچ ربطی به deploy ورسل شما ندارند. rollback کنید، redeploy کنید، فریم‌ورک عوض کنید، لینک همچنان کار می‌کند."
      },
      {
        "q": "آیا برای پروژه‌های تفریحی ورسل رایگان است؟",
        "a": "بله. جریان آپلود و اشتراک‌گذاری رایگان است، بدون ثبت‌نام. حساب‌های رایگان فایل‌های بزرگ‌تر و یک داشبورد برای مدیریت آپلودهای شما را باز می‌کنند."
      }
    ],
    "ctaTitle": "یک URL تصویر آماده برای Vercel دریافت کنید",
    "ctaBody": "یک بار آپلود کنید. در هر کجا جاسازی کنید. deploy ورسل خود را سبک نگه دارید.",
    "ctaButton": "آپلود تصویر"
  },
  "ur": {
    "metaTitle": "Vercel کے لیے Image to URL — جامد سائٹس کے لیے براہ راست CDN لنکس | ImageToURL",
    "metaDescription": "اپنے Vercel ڈیپلائے سے باہر تصاویر ہوسٹ کریں اور انہیں مستقل URLs کے ساتھ ایمبیڈ کریں۔ بلڈ سائز کی حد چھوڑیں، تیزی سے شپ کریں، اپنے ریپو کو صاف رکھیں۔",
    "schemaName": "Vercel کے لیے Image to URL کنورٹر",
    "schemaDescription": "Vercel پر ہوسٹ کیے گئے Next.js، Astro، یا جامد سائٹس میں ایمبیڈ کی گئی تصاویر کے لیے مستقل CDN URLs بنائیں۔",
    "badge": "Vercel تصویر URLs",
    "h1Pre": "Image to URL",
    "h1Highlight": "Vercel کے لیے۔",
    "intro": "خام تصویر فائلوں کے ساتھ اپنے Vercel ڈیپلائے کو پھولانا بند کریں۔ یہاں اپلوڈ کریں، براہ راست URL حاصل کریں، اور اسے اپنی Next.js، Astro، یا جامد سائٹ میں ایمبیڈ کریں۔ بلڈز تیز رہتے ہیں اور آپ کا ریپو چھوٹا رہتا ہے۔",
    "howTitle": "یہ کیسے کام کرتا ہے",
    "steps": [
      {
        "title": "اپنے ریپو سے باہر اپلوڈ کریں",
        "body": "اپنی تصویر کو اپنے Vercel پروجیکٹ میں کمٹ کرنے کے بجائے ہمارے CDN پر بھیجیں۔ آپ کی بلڈ آرٹیفیکٹ چھوٹی اور پش ہسٹری صاف رہتی ہے۔"
      },
      {
        "title": "مستقل URL حاصل کریں",
        "body": "ہم آپ کو ایک براہ راست لنک دیتے ہیں جو عالمی ایج کیش سے لوڈ ہوتا ہے۔ کوئی بلڈ مرحلہ نہیں، تصویر تبدیل کرتے وقت کوئی ری ڈیپلائے نہیں۔"
      },
      {
        "title": "اپنے کوڈ میں استعمال کریں",
        "body": "URL کو next/image، Astro Image، یا سادہ <img> ٹیگ میں ڈالیں۔ یہ Vercel پر کسی بھی ہوسٹ کی طرح ہی کام کرتا ہے۔"
      }
    ],
    "whyTitle": "Vercel سے باہر تصاویر کیوں ہوسٹ کریں",
    "whyItems": [
      {
        "title": "چھوٹے ڈیپلائے",
        "body": "Vercel بلڈ منٹ اور بینڈوڈتھ کے لیے چارج کرتا ہے۔ git میں بڑے بائنری اثاثے ہر ڈیپلائے کو سست کرتے ہیں اور بلڈ کیش کو پھولاتے ہیں۔"
      },
      {
        "title": "تیز CI",
        "body": "ہر ڈیپلائے پر اپلوڈ مرحلہ چھوڑیں۔ آپ کا ریپو ہلکا رہتا ہے اور پشز سیکنڈوں میں ہوتے ہیں، منٹوں میں نہیں۔"
      },
      {
        "title": "عالمی طور پر ایج کیش شدہ",
        "body": "تصاویر ہر زائر کے قریب ترین ایج POP سے لوڈ ہوتی ہیں۔ Vercel کے اپنے CDN جیسا ہی رفتار ماڈل، کوئی اضافی کنفگ نہیں۔"
      },
      {
        "title": "ری ڈیپلائے کے بغیر تبدیل کریں",
        "body": "اپنے کوڈ کو چھوئے بغیر یا نیا بلڈ ٹرگر کیے بغیر تصویر اپ ڈیٹ کریں۔ URL وہی رہتا ہے۔"
      }
    ],
    "faqTitle": "اکثر پوچھے گئے سوالات",
    "faqs": [
      {
        "q": "تصاویر کو صرف Vercel پر /public میں کیوں نہ ڈالیں؟",
        "a": "آپ ڈال سکتے ہیں، اور یہ چند تصاویر کے لیے ٹھیک کام کرتا ہے۔ جب آپ کے پاس درجنوں بڑی فائلیں ہوں، ہر ڈیپلائے انہیں دوبارہ بھیجتا ہے، بلڈز سست ہوتے ہیں، اور آپ کا ریپو پھولتا ہے۔ Vercel سے باہر ہوسٹ کرنا چیزوں کو منظم رکھتا ہے۔"
      },
      {
        "q": "کیا یہ next/image کے ساتھ کام کرتا ہے؟",
        "a": "جی ہاں۔ URL کو src پراپ پر بھیجیں اور next.config.js میں remotePatterns میں تصویر کا ڈومین شامل کریں۔ Next.js اسے کسی بھی بیرونی تصویر کی طرح آپٹیمائز کرے گا۔"
      },
      {
        "q": "کیا یہ میرے صفحے کو سست کرے گا؟",
        "a": "نہیں۔ تصاویر دنیا بھر میں ایج نوڈز کے ساتھ CDN سے سرو کی جاتی ہیں۔ حقیقی لوڈ اوقات عام طور پر 100ms سے کم ہوتے ہیں، Vercel کی اپنی اثاثہ ڈیلیوری کی طرح۔"
      },
      {
        "q": "کیا میں ری ڈیپلائے کرنے پر URLs زندہ رہتے ہیں؟",
        "a": "جی ہاں۔ URLs مستقل ہیں اور آپ کے Vercel ڈیپلائے سے کوئی تعلق نہیں رکھتے۔ رول بیک کریں، ری ڈیپلائے کریں، فریم ورک تبدیل کریں، لنک کام کرتا رہتا ہے۔"
      },
      {
        "q": "کیا یہ شوقیہ Vercel پروجیکٹس کے لیے مفت ہے؟",
        "a": "جی ہاں۔ اپلوڈ-اور-شیئر فلو مفت ہے، کوئی سائن اپ نہیں۔ مفت اکاؤنٹس بڑی فائلیں اور آپ کے اپلوڈز کو منظم کرنے کے لیے ایک ڈیش بورڈ کھولتے ہیں۔"
      }
    ],
    "ctaTitle": "Vercel-تیار تصویر URL حاصل کریں",
    "ctaBody": "ایک بار اپلوڈ کریں۔ کہیں بھی ایمبیڈ کریں۔ اپنے Vercel ڈیپلائے کو ہلکا رکھیں۔",
    "ctaButton": "تصویر اپلوڈ کریں"
  },
  "ru": {
    "metaTitle": "Изображение в URL для Vercel — Прямые ссылки CDN для статических сайтов | ImageToURL",
    "metaDescription": "Размещайте изображения вне вашего деплоя Vercel и встраивайте их через постоянные URL. Обходите ограничение размера сборки, выкатывайте быстрее, держите репозиторий чистым.",
    "schemaName": "Конвертер изображений в URL для Vercel",
    "schemaDescription": "Создавайте постоянные CDN-URL для изображений, встроенных в сайты Next.js, Astro или статические сайты на Vercel.",
    "badge": "URL изображений Vercel",
    "h1Pre": "Изображение в URL",
    "h1Highlight": "для Vercel.",
    "intro": "Хватит раздувать ваш деплой Vercel сырыми файлами изображений. Загрузите здесь, получите прямой URL и встройте его в свой Next.js, Astro или статический сайт. Сборки остаются быстрыми, а репозиторий маленьким.",
    "howTitle": "Как это работает",
    "steps": [
      {
        "title": "Загружайте вне репозитория",
        "body": "Отправьте изображение в нашу CDN вместо коммита в проект Vercel. Артефакт сборки остаётся маленьким, а история пушей чистой."
      },
      {
        "title": "Получите постоянную ссылку",
        "body": "Мы выдаём прямую ссылку, которая загружается из глобального edge-кеша. Без шага сборки, без редеплоя при замене изображения."
      },
      {
        "title": "Используйте в коде",
        "body": "Поместите URL в next/image, Astro Image или обычный тег <img>. На Vercel это работает так же, как на любом хостинге."
      }
    ],
    "whyTitle": "Зачем хостить изображения вне Vercel",
    "whyItems": [
      {
        "title": "Меньшие деплои",
        "body": "Vercel берёт деньги за минуты сборки и трафик. Большие бинарные ассеты в git замедляют каждый деплой и раздувают кеш сборки."
      },
      {
        "title": "Быстрее CI",
        "body": "Пропускайте шаг загрузки при каждом деплое. Репозиторий остаётся лёгким, а пуши проходят за секунды, а не за минуты."
      },
      {
        "title": "Глобальный edge-кеш",
        "body": "Изображения загружаются с ближайшей edge-точки к каждому посетителю. Та же модель скорости, что у CDN самого Vercel, без дополнительной настройки."
      },
      {
        "title": "Меняйте без редеплоя",
        "body": "Обновите изображение, не трогая код и не запуская новую сборку. URL остаётся прежним."
      }
    ],
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Почему просто не положить изображения в /public на Vercel?",
        "a": "Можно, и это нормально работает для пары изображений. Когда у вас десятки больших файлов, каждый деплой пересылает их все, сборки замедляются, а репозиторий пухнет. Хостинг вне Vercel сохраняет порядок."
      },
      {
        "q": "Работает ли с next/image?",
        "a": "Да. Передайте URL в проп src и добавьте домен изображения в remotePatterns в next.config.js. Next.js оптимизирует его как любое другое внешнее изображение."
      },
      {
        "q": "Не замедлит ли это страницу?",
        "a": "Нет. Изображения раздаются через CDN с edge-узлами по всему миру. Реальные времена загрузки обычно меньше 100 мс, как и у собственной доставки ассетов Vercel."
      },
      {
        "q": "Сохранятся ли URL после редеплоя?",
        "a": "Да. URL постоянны и никак не связаны с вашим деплоем Vercel. Откатывайтесь, редеплоите, меняйте фреймворк — ссылка продолжает работать."
      },
      {
        "q": "Это бесплатно для хобби-проектов на Vercel?",
        "a": "Да. Поток загрузки и обмена бесплатен, без регистрации. Бесплатные аккаунты разблокируют файлы большего размера и панель для управления загрузками."
      }
    ],
    "ctaTitle": "Получите URL изображения, готовый для Vercel",
    "ctaBody": "Загрузите один раз. Встраивайте где угодно. Держите ваш деплой Vercel лёгким.",
    "ctaButton": "Загрузить изображение"
  },
  "th": {
    "metaTitle": "แปลงรูปภาพเป็น URL สำหรับ Vercel — ลิงก์ CDN ตรงสำหรับเว็บสแตติก | ImageToURL",
    "metaDescription": "โฮสต์รูปภาพนอก deploy ของ Vercel และฝังด้วย URL ถาวร ข้ามขีดจำกัดขนาด build ส่งเร็วขึ้น และรักษา repo ให้สะอาด",
    "schemaName": "ตัวแปลงรูปภาพเป็น URL สำหรับ Vercel",
    "schemaDescription": "สร้าง URL CDN ถาวรสำหรับรูปภาพที่คุณฝังในเว็บไซต์ Next.js, Astro หรือสแตติกที่โฮสต์บน Vercel",
    "badge": "URL รูปภาพ Vercel",
    "h1Pre": "รูปภาพเป็น URL",
    "h1Highlight": "สำหรับ Vercel",
    "intro": "หยุดทำให้ deploy ของ Vercel หนักด้วยไฟล์รูปภาพดิบ อัปโหลดที่นี่ รับ URL ตรง และฝังในไซต์ Next.js, Astro หรือสแตติกของคุณ build ยังคงรวดเร็วและ repo ยังคงเล็ก",
    "howTitle": "วิธีการทำงาน",
    "steps": [
      {
        "title": "อัปโหลดนอก repo",
        "body": "ส่งรูปของคุณไปยัง CDN ของเราแทนที่จะ commit เข้าโปรเจกต์ Vercel ทำให้ artifact ของ build เล็กและประวัติ push สะอาด"
      },
      {
        "title": "รับ URL ถาวร",
        "body": "เราจะให้ลิงก์ตรงที่โหลดจาก edge cache ทั่วโลก ไม่ต้องมีขั้นตอน build ไม่ต้อง redeploy เมื่อเปลี่ยนรูป"
      },
      {
        "title": "ใช้ในโค้ดของคุณ",
        "body": "นำ URL ไปใส่ใน next/image, Astro Image หรือแท็ก <img> ธรรมดา ทำงานบน Vercel เหมือนกับโฮสต์อื่น ๆ"
      }
    ],
    "whyTitle": "ทำไมจึงโฮสต์รูปภาพนอก Vercel",
    "whyItems": [
      {
        "title": "Deploy เล็กลง",
        "body": "Vercel คิดเงินตามนาที build และแบนด์วิดท์ ไฟล์ binary ขนาดใหญ่ใน git ทำให้ทุก deploy ช้าลงและทำให้ build cache บวม"
      },
      {
        "title": "CI เร็วขึ้น",
        "body": "ข้ามขั้นตอนอัปโหลดในทุก deploy repo ของคุณยังคงเบาและ push เสร็จในไม่กี่วินาที ไม่ใช่นาที"
      },
      {
        "title": "Edge-cached ทั่วโลก",
        "body": "รูปโหลดจาก edge POP ที่ใกล้ที่สุดสำหรับผู้เข้าชมแต่ละคน โมเดลความเร็วเดียวกับ CDN ของ Vercel เอง โดยไม่ต้องคอนฟิกเพิ่ม"
      },
      {
        "title": "เปลี่ยนโดยไม่ต้อง redeploy",
        "body": "อัปเดตรูปได้โดยไม่ต้องแตะโค้ดหรือทริกเกอร์ build ใหม่ URL ยังคงเหมือนเดิม"
      }
    ],
    "faqTitle": "คำถามที่พบบ่อย",
    "faqs": [
      {
        "q": "ทำไมไม่ใส่รูปไว้ใน /public บน Vercel ไปเลย?",
        "a": "คุณทำได้ และมันใช้ได้ดีสำหรับรูปภาพไม่กี่รูป เมื่อคุณมีไฟล์ขนาดใหญ่หลายสิบไฟล์ ทุก deploy จะส่งทั้งหมดอีกครั้ง build จะช้าลง และ repo จะบวม การโฮสต์นอก Vercel จะทำให้ทุกอย่างเป็นระเบียบ"
      },
      {
        "q": "ใช้กับ next/image ได้ไหม?",
        "a": "ได้ ส่ง URL ไปยัง prop src และเพิ่มโดเมนของรูปใน remotePatterns ใน next.config.js Next.js จะ optimize เหมือนรูปภายนอกอื่น ๆ"
      },
      {
        "q": "จะทำให้หน้าของฉันช้าลงไหม?",
        "a": "ไม่ รูปภาพถูกเสิร์ฟจาก CDN ที่มี edge node ทั่วโลก เวลาโหลดจริงมักจะต่ำกว่า 100ms คล้ายกับการส่ง asset ของ Vercel เอง"
      },
      {
        "q": "URL จะอยู่รอดเมื่อฉัน redeploy ไหม?",
        "a": "ใช่ URL เป็นแบบถาวรและไม่เกี่ยวข้องกับ deploy ของ Vercel ของคุณเลย rollback, redeploy, เปลี่ยน framework ลิงก์ก็ยังใช้งานได้"
      },
      {
        "q": "ฟรีสำหรับโปรเจกต์ Vercel งานอดิเรกไหม?",
        "a": "ใช่ ขั้นตอนอัปโหลดและแชร์ฟรี ไม่ต้องสมัคร บัญชีฟรีปลดล็อกไฟล์ขนาดใหญ่ขึ้นและแดชบอร์ดสำหรับจัดการการอัปโหลดของคุณ"
      }
    ],
    "ctaTitle": "รับ URL รูปภาพพร้อมใช้สำหรับ Vercel",
    "ctaBody": "อัปโหลดครั้งเดียว ฝังที่ไหนก็ได้ รักษา deploy ของ Vercel ให้เบา",
    "ctaButton": "อัปโหลดรูปภาพ"
  },
  "ko": {
    "metaTitle": "Vercel용 이미지 URL 변환 — 정적 사이트용 직접 CDN 링크 | ImageToURL",
    "metaDescription": "Vercel 배포 외부에 이미지를 호스팅하고 영구 URL로 임베드하세요. 빌드 크기 제한을 우회하고, 더 빠르게 배포하며, 저장소를 깔끔하게 유지하세요.",
    "schemaName": "Vercel용 이미지 URL 변환기",
    "schemaDescription": "Vercel에 호스팅된 Next.js, Astro 또는 정적 사이트에 임베드하는 이미지에 대한 영구 CDN URL을 생성합니다.",
    "badge": "Vercel 이미지 URL",
    "h1Pre": "이미지 URL 변환",
    "h1Highlight": "Vercel용.",
    "intro": "원본 이미지 파일로 Vercel 배포를 부풀리지 마세요. 여기에 업로드하고 직접 URL을 받아 Next.js, Astro 또는 정적 사이트에 임베드하세요. 빌드는 빠르게 유지되고 저장소는 작게 유지됩니다.",
    "howTitle": "작동 방식",
    "steps": [
      {
        "title": "저장소 외부에 업로드",
        "body": "Vercel 프로젝트에 커밋하는 대신 이미지를 우리 CDN에 보내세요. 빌드 아티팩트는 작게, 푸시 기록은 깔끔하게 유지됩니다."
      },
      {
        "title": "영구 URL 받기",
        "body": "글로벌 엣지 캐시에서 로드되는 직접 링크를 드립니다. 빌드 단계가 필요 없고, 이미지를 교체할 때 재배포도 필요 없습니다."
      },
      {
        "title": "코드에서 사용하기",
        "body": "URL을 next/image, Astro Image 또는 일반 <img> 태그에 넣으세요. Vercel에서도 다른 호스트와 동일하게 작동합니다."
      }
    ],
    "whyTitle": "왜 Vercel 외부에 이미지를 호스팅해야 할까",
    "whyItems": [
      {
        "title": "더 작은 배포",
        "body": "Vercel은 빌드 분과 대역폭에 대해 비용을 부과합니다. git의 큰 바이너리 자산은 모든 배포를 느리게 만들고 빌드 캐시를 부풀립니다."
      },
      {
        "title": "더 빠른 CI",
        "body": "배포할 때마다 업로드 단계를 건너뛰세요. 저장소는 가벼워지고 푸시는 분이 아닌 초 단위로 통과합니다."
      },
      {
        "title": "글로벌 엣지 캐시",
        "body": "이미지는 각 방문자에게 가장 가까운 엣지 POP에서 로드됩니다. Vercel 자체 CDN과 동일한 속도 모델, 추가 설정 없음."
      },
      {
        "title": "재배포 없이 교체",
        "body": "코드를 건드리거나 새 빌드를 트리거하지 않고 이미지를 업데이트하세요. URL은 그대로 유지됩니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "왜 Vercel의 /public에 이미지를 그냥 넣지 않나요?",
        "a": "넣을 수 있고, 소수의 이미지에는 잘 작동합니다. 큰 파일이 수십 개가 되면 모든 배포에서 그것들이 모두 다시 전송되고, 빌드가 느려지며, 저장소가 부풀어 오릅니다. Vercel 외부에 호스팅하면 모든 것이 깔끔하게 유지됩니다."
      },
      {
        "q": "next/image와 함께 작동하나요?",
        "a": "예. URL을 src 프롭에 전달하고 next.config.js의 remotePatterns에 이미지 도메인을 추가하세요. Next.js는 다른 외부 이미지처럼 최적화할 것입니다."
      },
      {
        "q": "페이지가 느려지나요?",
        "a": "아니요. 이미지는 전 세계에 엣지 노드가 있는 CDN에서 제공됩니다. 실제 로드 시간은 보통 100ms 미만으로, Vercel 자체 자산 전송과 비슷합니다."
      },
      {
        "q": "재배포할 때 URL이 살아남나요?",
        "a": "예. URL은 영구적이며 Vercel 배포와는 전혀 관계가 없습니다. 롤백, 재배포, 프레임워크 전환을 해도 링크는 계속 작동합니다."
      },
      {
        "q": "취미 Vercel 프로젝트에 무료인가요?",
        "a": "예. 업로드와 공유 흐름은 가입 없이 무료입니다. 무료 계정은 더 큰 파일과 업로드 관리 대시보드를 잠금 해제합니다."
      }
    ],
    "ctaTitle": "Vercel에 바로 쓸 수 있는 이미지 URL 받기",
    "ctaBody": "한 번 업로드. 어디서나 임베드. Vercel 배포를 가볍게 유지.",
    "ctaButton": "이미지 업로드"
  },
  "sw": {
    "metaTitle": "Picha hadi URL kwa Vercel — Viungo vya CDN vya Moja kwa Moja kwa Tovuti Tuli | ImageToURL",
    "metaDescription": "Hifadhi picha nje ya deploy yako ya Vercel na zifungashe kwa URL za kudumu. Ruka kikomo cha ukubwa wa build, sambaza haraka, weka repo yako safi.",
    "schemaName": "Kibadilishaji cha Picha hadi URL kwa Vercel",
    "schemaDescription": "Tengeneza URL za CDN za kudumu kwa picha unazoweka katika tovuti za Next.js, Astro, au tuli zinazohifadhiwa kwenye Vercel.",
    "badge": "URL za picha za Vercel",
    "h1Pre": "Picha hadi URL",
    "h1Highlight": "kwa Vercel.",
    "intro": "Acha kuvimba deploy yako ya Vercel kwa faili za picha mbichi. Pakia hapa, pata URL ya moja kwa moja, na uifungashe katika tovuti yako ya Next.js, Astro, au tuli. Builds zinabaki haraka na repo yako inabaki ndogo.",
    "howTitle": "Jinsi Inavyofanya Kazi",
    "steps": [
      {
        "title": "Pakia Nje ya Repo Yako",
        "body": "Tuma picha yako kwenye CDN yetu badala ya kuiweka kwenye mradi wa Vercel. Inaweka artifact ya build ndogo na historia ya push safi."
      },
      {
        "title": "Pata URL ya Kudumu",
        "body": "Tunakupa kiungo cha moja kwa moja kinachopakia kutoka kwa edge cache ya kimataifa. Hakuna hatua ya build, hakuna redeploy unapobadilisha picha."
      },
      {
        "title": "Itumie Katika Msimbo Wako",
        "body": "Weka URL kwenye next/image, Astro Image, au tagi ya kawaida ya <img>. Inafanya kazi kwenye Vercel kama vile katika mwenyeji wowote."
      }
    ],
    "whyTitle": "Kwa Nini Uhifadhi Picha Nje ya Vercel",
    "whyItems": [
      {
        "title": "Deploys Ndogo",
        "body": "Vercel hutoza dakika za build na bandwidth. Asili kubwa za binary katika git hupunguza kasi ya kila deploy na kuvimba build cache."
      },
      {
        "title": "CI ya Haraka",
        "body": "Ruka hatua ya kupakia katika kila deploy. Repo yako inabaki nyepesi na push hupita kwa sekunde, sio dakika."
      },
      {
        "title": "Edge-Cached Kimataifa",
        "body": "Picha hupakia kutoka edge POP iliyo karibu zaidi na kila mgeni. Mfano sawa wa kasi kama CDN ya Vercel yenyewe, hakuna mipangilio ya ziada."
      },
      {
        "title": "Badilisha Bila Redeploy",
        "body": "Sasisha picha bila kugusa msimbo wako au kuanzisha build mpya. URL inabaki sawa."
      }
    ],
    "faqTitle": "Maswali Yanayoulizwa Mara kwa Mara",
    "faqs": [
      {
        "q": "Kwa nini usiweke tu picha katika /public kwenye Vercel?",
        "a": "Unaweza, na inafanya kazi vizuri kwa picha chache. Mara unapokuwa na faili kubwa kadhaa, kila deploy huzituma zote tena, builds hupungua kasi, na repo yako huvimba. Kuhifadhi nje ya Vercel kunaweka mambo yote nadhifu."
      },
      {
        "q": "Je, hii inafanya kazi na next/image?",
        "a": "Ndiyo. Pitisha URL kwa prop ya src na ongeza kikoa cha picha kwenye remotePatterns katika next.config.js. Next.js itaitumia vizuri kama picha yoyote ya nje."
      },
      {
        "q": "Je, itapunguza kasi ya ukurasa wangu?",
        "a": "Hapana. Picha hutolewa kutoka kwa CDN yenye node za edge ulimwenguni kote. Nyakati halisi za upakiaji kawaida ni chini ya 100ms, sawa na utoaji wa asili wa Vercel."
      },
      {
        "q": "Je, URL zinabaki ninapofanya redeploy?",
        "a": "Ndiyo. URL ni za kudumu na hazina uhusiano wowote na deploy yako ya Vercel. Rudisha nyuma, redeploy, badilisha framework, kiungo kinaendelea kufanya kazi."
      },
      {
        "q": "Je, ni bure kwa miradi ya hobby ya Vercel?",
        "a": "Ndiyo. Mtiririko wa kupakia-na-kushiriki ni bure, hakuna usajili. Akaunti za bure zinafungua faili kubwa zaidi na dashibodi ya kusimamia upakiaji wako."
      }
    ],
    "ctaTitle": "Pata URL ya picha tayari kwa Vercel",
    "ctaBody": "Pakia mara moja. Fungasha popote. Weka deploy yako ya Vercel nyepesi.",
    "ctaButton": "Pakia Picha"
  },
  "ms": {
    "metaTitle": "Imej kepada URL untuk Vercel — Pautan CDN Terus untuk Laman Statik | ImageToURL",
    "metaDescription": "Hoskan imej di luar deploy Vercel anda dan benamkan dengan URL kekal. Lepasi had saiz build, hantar lebih pantas, kekalkan repo anda bersih.",
    "schemaName": "Penukar Imej kepada URL untuk Vercel",
    "schemaDescription": "Jana URL CDN kekal untuk imej yang anda benamkan dalam laman Next.js, Astro, atau statik yang dihos di Vercel.",
    "badge": "URL Imej Vercel",
    "h1Pre": "Imej kepada URL",
    "h1Highlight": "untuk Vercel.",
    "intro": "Berhenti membengkakkan deploy Vercel anda dengan fail imej mentah. Muat naik di sini, dapatkan URL terus, dan benamkan dalam laman Next.js, Astro, atau statik anda. Build kekal pantas dan repo anda kekal kecil.",
    "howTitle": "Cara Ia Berfungsi",
    "steps": [
      {
        "title": "Muat Naik di Luar Repo Anda",
        "body": "Hantar imej anda ke CDN kami daripada melakukan commit ke projek Vercel. Mengekalkan artifact build kecil dan sejarah push bersih."
      },
      {
        "title": "Dapatkan URL Kekal",
        "body": "Kami berikan anda pautan terus yang dimuatkan dari edge cache global. Tiada langkah build, tiada redeploy apabila anda menukar imej."
      },
      {
        "title": "Gunakan dalam Kod Anda",
        "body": "Letakkan URL ke dalam next/image, Astro Image, atau tag <img> biasa. Berfungsi di Vercel sama seperti di mana-mana hos."
      }
    ],
    "whyTitle": "Mengapa Hoskan Imej di Luar Vercel",
    "whyItems": [
      {
        "title": "Deploy Lebih Kecil",
        "body": "Vercel mengenakan caj minit build dan bandwidth. Aset binari besar dalam git memperlahankan setiap deploy dan membengkakkan build cache."
      },
      {
        "title": "CI Lebih Pantas",
        "body": "Langkau langkah muat naik pada setiap deploy. Repo anda kekal ringan dan push selesai dalam beberapa saat, bukan minit."
      },
      {
        "title": "Edge-Cache Global",
        "body": "Imej dimuatkan dari POP edge terdekat kepada setiap pelawat. Model kelajuan yang sama dengan CDN Vercel sendiri, tanpa konfigurasi tambahan."
      },
      {
        "title": "Tukar Tanpa Redeploy",
        "body": "Kemas kini imej tanpa menyentuh kod anda atau mencetuskan build baru. URL kekal sama."
      }
    ],
    "faqTitle": "Soalan Lazim",
    "faqs": [
      {
        "q": "Mengapa tidak letak imej dalam /public di Vercel sahaja?",
        "a": "Anda boleh, dan ia berfungsi dengan baik untuk segelintir imej. Apabila anda mempunyai berpuluh-puluh fail besar, setiap deploy menghantarnya semula, build menjadi perlahan, dan repo anda membengkak. Mengehoskannya di luar Vercel mengekalkan semuanya kemas."
      },
      {
        "q": "Adakah ia berfungsi dengan next/image?",
        "a": "Ya. Hantar URL ke prop src dan tambahkan domain imej ke remotePatterns dalam next.config.js. Next.js akan mengoptimumkannya seperti mana-mana imej luaran."
      },
      {
        "q": "Adakah ia akan memperlahankan halaman saya?",
        "a": "Tidak. Imej dihidangkan dari CDN dengan nod edge di seluruh dunia. Masa muat sebenar biasanya di bawah 100ms, mirip dengan penghantaran aset Vercel sendiri."
      },
      {
        "q": "Adakah URL kekal apabila saya redeploy?",
        "a": "Ya. URL adalah kekal dan tiada kaitan dengan deploy Vercel anda. Rollback, redeploy, tukar rangka kerja, pautan terus berfungsi."
      },
      {
        "q": "Adakah ia percuma untuk projek hobi Vercel?",
        "a": "Ya. Aliran muat naik-dan-kongsi adalah percuma, tanpa pendaftaran. Akaun percuma membuka fail yang lebih besar dan papan pemuka untuk menguruskan muat naik anda."
      }
    ],
    "ctaTitle": "Dapatkan URL imej sedia Vercel",
    "ctaBody": "Muat naik sekali. Benamkan di mana-mana. Kekalkan deploy Vercel anda ringan.",
    "ctaButton": "Muat Naik Imej"
  },
  "ta": {
    "metaTitle": "Vercel-க்கான Image to URL — நிலையான தளங்களுக்கான நேரடி CDN இணைப்புகள் | ImageToURL",
    "metaDescription": "உங்கள் Vercel வரிசைப்படுத்தலுக்கு வெளியே படங்களை ஹோஸ்ட் செய்து நிரந்தர URL-கள் மூலம் உட்பொதிக்கவும். கட்டமைப்பு அளவு வரம்பைத் தவிர்க்கவும், விரைவாக அனுப்பவும், உங்கள் ரெப்போவை சுத்தமாக வைத்திருக்கவும்.",
    "schemaName": "Vercel-க்கான Image to URL மாற்றி",
    "schemaDescription": "Vercel-இல் ஹோஸ்ட் செய்யப்பட்ட Next.js, Astro அல்லது நிலையான தளங்களில் நீங்கள் உட்பொதிக்கும் படங்களுக்கான நிரந்தர CDN URL-களை உருவாக்கவும்.",
    "badge": "Vercel பட URL-கள்",
    "h1Pre": "Image to URL",
    "h1Highlight": "Vercel-க்கு.",
    "intro": "மூல பட கோப்புகளுடன் உங்கள் Vercel வரிசைப்படுத்தலை வீக்கம் செய்வதை நிறுத்துங்கள். இங்கே பதிவேற்றவும், ஒரு நேரடி URL ஐப் பெறவும், மேலும் அதை உங்கள் Next.js, Astro அல்லது நிலையான தளத்தில் உட்பொதிக்கவும். பில்டுகள் வேகமாக இருக்கும் மற்றும் உங்கள் ரெப்போ சிறியதாக இருக்கும்.",
    "howTitle": "இது எவ்வாறு செயல்படுகிறது",
    "steps": [
      {
        "title": "உங்கள் ரெப்போவிற்கு வெளியே பதிவேற்றவும்",
        "body": "உங்கள் படத்தை Vercel திட்டத்தில் கமிட் செய்வதற்குப் பதிலாக எங்கள் CDN-க்கு அனுப்பவும். உங்கள் கட்டமைப்பு கலைப்பொருளை சிறியதாகவும், பின்னேற்ற வரலாற்றை சுத்தமாகவும் வைத்திருக்கிறது."
      },
      {
        "title": "நிரந்தர URL ஐப் பெறுங்கள்",
        "body": "உலகளாவிய எட்ஜ் கேச்சில் இருந்து ஏற்றப்படும் ஒரு நேரடி இணைப்பை நாங்கள் உங்களுக்கு வழங்குகிறோம். கட்டமைப்பு படி இல்லை, படத்தை மாற்றும் போது மீண்டும் பயன்படுத்துதல் இல்லை."
      },
      {
        "title": "உங்கள் குறியீட்டில் பயன்படுத்தவும்",
        "body": "URL ஐ next/image, Astro Image அல்லது சாதா <img> குறிச்சொல்லில் வைக்கவும். Vercel-இலும் வேறு எந்த ஹோஸ்டிலும் ஒரே மாதிரியாக வேலை செய்கிறது."
      }
    ],
    "whyTitle": "ஏன் Vercel-க்கு வெளியே படங்களை ஹோஸ்ட் செய்ய வேண்டும்",
    "whyItems": [
      {
        "title": "சிறிய வரிசைப்படுத்தல்கள்",
        "body": "Vercel கட்டமைப்பு நிமிடங்கள் மற்றும் பேண்ட்விட்த்துக்கு கட்டணம் வசூலிக்கிறது. git-இல் உள்ள பெரிய பைனரி சொத்துக்கள் ஒவ்வொரு வரிசைப்படுத்தலையும் மெதுவாக்குகின்றன மற்றும் கட்டமைப்பு கேச்சை வீக்கம் செய்கின்றன."
      },
      {
        "title": "வேகமான CI",
        "body": "ஒவ்வொரு வரிசைப்படுத்தலிலும் பதிவேற்றும் படியைத் தவிர்க்கவும். உங்கள் ரெப்போ இலகுவாக இருக்கும் மற்றும் பின்னேற்றங்கள் நிமிடங்கள் அல்ல, விநாடிகளில் முடிகின்றன."
      },
      {
        "title": "உலகளவில் Edge-Cached",
        "body": "ஒவ்வொரு பார்வையாளருக்கும் அருகிலுள்ள எட்ஜ் POP-இல் இருந்து படங்கள் ஏற்றப்படுகின்றன. Vercel-இன் சொந்த CDN-ஐப் போன்ற அதே வேக மாதிரி, கூடுதல் கட்டமைப்பு இல்லை."
      },
      {
        "title": "மீண்டும் வரிசைப்படுத்தாமல் மாற்றுதல்",
        "body": "உங்கள் குறியீட்டைத் தொடாமல் அல்லது புதிய பில்டைத் தூண்டாமல் ஒரு படத்தை புதுப்பிக்கவும். URL அப்படியே இருக்கும்."
      }
    ],
    "faqTitle": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faqs": [
      {
        "q": "Vercel-இல் /public-இல் படங்களை ஏன் வைக்க வேண்டாம்?",
        "a": "வைக்கலாம், அது சில படங்களுக்கு நன்றாக வேலை செய்கிறது. டஜன் கணக்கான பெரிய கோப்புகள் இருக்கும்போது, ஒவ்வொரு வரிசைப்படுத்தலும் அவை அனைத்தையும் மீண்டும் அனுப்புகிறது, பில்டுகள் மெதுவாக இருக்கின்றன, மற்றும் உங்கள் ரெப்போ வீக்கமாக இருக்கிறது. Vercel-க்கு வெளியே ஹோஸ்ட் செய்வது அனைத்தையும் ஒழுங்காக வைத்திருக்கும்."
      },
      {
        "q": "இது next/image உடன் வேலை செய்யுமா?",
        "a": "ஆம். URL ஐ src prop-க்கு அனுப்பி, next.config.js-இல் உள்ள remotePatterns-இல் பட டொமைனைச் சேர்க்கவும். Next.js அதை வேறு எந்த வெளிப்புற படத்தையும் போல உகந்ததாக்கும்."
      },
      {
        "q": "இது என் பக்கத்தை மெதுவாக்குமா?",
        "a": "இல்லை. படங்கள் உலகெங்கிலும் உள்ள எட்ஜ் முனைகளுடன் ஒரு CDN-இலிருந்து வழங்கப்படுகின்றன. நிஜ உலக ஏற்றுதல் நேரங்கள் பொதுவாக 100ms-க்கும் குறைவாக உள்ளன, Vercel-இன் சொந்த சொத்து விநியோகத்தைப் போன்றது."
      },
      {
        "q": "நான் மீண்டும் வரிசைப்படுத்தும்போது URL-கள் தப்பிப்பிழைக்குமா?",
        "a": "ஆம். URL-கள் நிரந்தரமானவை மற்றும் உங்கள் Vercel வரிசைப்படுத்தலுடன் எந்த தொடர்பும் இல்லை. பின்னோக்கி உருட்டவும், மீண்டும் வரிசைப்படுத்தவும், கட்டமைப்புகளை மாற்றவும், இணைப்பு வேலை செய்து கொண்டே இருக்கும்."
      },
      {
        "q": "பொழுதுபோக்கு Vercel திட்டங்களுக்கு இது இலவசமா?",
        "a": "ஆம். பதிவேற்று-மற்றும்-பகிர் ஓட்டம் இலவசம், பதிவு இல்லை. இலவச கணக்குகள் பெரிய கோப்புகளையும் உங்கள் பதிவேற்றங்களை நிர்வகிப்பதற்கான ஒரு டாஷ்போர்டையும் திறக்கின்றன."
      }
    ],
    "ctaTitle": "Vercel-தயார் பட URL ஐ பெறுங்கள்",
    "ctaBody": "ஒரு முறை பதிவேற்று. எங்கும் உட்பொதிக்கவும். உங்கள் Vercel வரிசைப்படுத்தலை இலகுவாக வைத்திருங்கள்.",
    "ctaButton": "படத்தை பதிவேற்று"
  },
  "mr": {
    "metaTitle": "Vercel साठी Image to URL — स्टॅटिक साइट्ससाठी थेट CDN लिंक्स | ImageToURL",
    "metaDescription": "तुमच्या Vercel डिप्लॉयच्या बाहेर प्रतिमा होस्ट करा आणि कायमस्वरूपी URL सह एम्बेड करा. बिल्ड साइज मर्यादा टाळा, जलद शिप करा, तुमचा रेपो स्वच्छ ठेवा.",
    "schemaName": "Vercel साठी Image to URL कनव्हर्टर",
    "schemaDescription": "Vercel-होस्ट केलेल्या Next.js, Astro, किंवा स्टॅटिक साइट्समध्ये एम्बेड केलेल्या प्रतिमांसाठी कायमस्वरूपी CDN URL तयार करा.",
    "badge": "Vercel प्रतिमा URL",
    "h1Pre": "Image to URL",
    "h1Highlight": "Vercel साठी.",
    "intro": "कच्च्या प्रतिमा फायलींनी तुमचा Vercel डिप्लॉय फुगवणे थांबवा. येथे अपलोड करा, थेट URL मिळवा, आणि तुमच्या Next.js, Astro किंवा स्टॅटिक साइटमध्ये एम्बेड करा. बिल्ड्स जलद राहतात आणि तुमचा रेपो लहान राहतो.",
    "howTitle": "हे कसे कार्य करते",
    "steps": [
      {
        "title": "तुमच्या रेपोच्या बाहेर अपलोड करा",
        "body": "तुमची प्रतिमा तुमच्या Vercel प्रकल्पात कमिट करण्याऐवजी आमच्या CDN वर पाठवा. तुमचे बिल्ड आर्टिफॅक्ट लहान आणि पुश इतिहास स्वच्छ ठेवते."
      },
      {
        "title": "कायमस्वरूपी URL मिळवा",
        "body": "आम्ही तुम्हाला एक थेट लिंक देतो जी जागतिक एज कॅशवरून लोड होते. कोणतेही बिल्ड पाऊल नाही, प्रतिमा बदलताना कोणतेही रीडिप्लॉय नाही."
      },
      {
        "title": "तुमच्या कोडमध्ये वापरा",
        "body": "URL ला next/image, Astro Image किंवा साध्या <img> टॅगमध्ये टाका. Vercel वर ते कोणत्याही होस्टसारखेच कार्य करते."
      }
    ],
    "whyTitle": "Vercel च्या बाहेर प्रतिमा का होस्ट करावी",
    "whyItems": [
      {
        "title": "लहान डिप्लॉय",
        "body": "Vercel बिल्ड मिनिटे आणि बँडविड्थसाठी शुल्क आकारते. git मधील मोठ्या बायनरी मालमत्ता प्रत्येक डिप्लॉय कमी करतात आणि बिल्ड कॅश फुगवतात."
      },
      {
        "title": "जलद CI",
        "body": "प्रत्येक डिप्लॉयवर अपलोड पाऊल वगळा. तुमचा रेपो हलका राहतो आणि पुश सेकंदांमध्ये पास होतात, मिनिटांत नाही."
      },
      {
        "title": "जागतिक स्तरावर एज-कॅश्ड",
        "body": "प्रत्येक अभ्यागताच्या जवळच्या एज POP वरून प्रतिमा लोड होतात. Vercel च्या स्वतःच्या CDN सारखेच गती मॉडेल, कोणतीही अतिरिक्त कॉन्फिग नाही."
      },
      {
        "title": "रीडिप्लॉयशिवाय बदला",
        "body": "तुमचा कोड न स्पर्श करता किंवा नवीन बिल्ड ट्रिगर न करता प्रतिमा अपडेट करा. URL तीच राहते."
      }
    ],
    "faqTitle": "वारंवार विचारले जाणारे प्रश्न",
    "faqs": [
      {
        "q": "Vercel वर फक्त /public मध्ये प्रतिमा का ठेवू नये?",
        "a": "तुम्ही करू शकता, आणि ते काही प्रतिमांसाठी चांगले कार्य करते. एकदा तुमच्याकडे डझनभर मोठ्या फायली असतील, प्रत्येक डिप्लॉय त्या सर्व पुन्हा पाठवते, बिल्ड्स कमी होतात, आणि तुमचा रेपो फुगतो. Vercel च्या बाहेर होस्ट केल्याने सर्व काही नीटनेटके राहते."
      },
      {
        "q": "हे next/image सह कार्य करते का?",
        "a": "होय. URL ला src प्रॉपमध्ये पास करा आणि next.config.js मध्ये remotePatterns मध्ये प्रतिमा डोमेन जोडा. Next.js त्यास इतर कोणत्याही बाह्य प्रतिमेप्रमाणे ऑप्टिमाइझ करेल."
      },
      {
        "q": "हे माझे पेज कमी करेल का?",
        "a": "नाही. प्रतिमा जगभरातील एज नोड्ससह CDN वरून सर्व्ह केल्या जातात. वास्तविक लोड वेळा सहसा 100ms पेक्षा कमी असतात, Vercel च्या स्वतःच्या मालमत्ता वितरणासारखेच."
      },
      {
        "q": "मी रीडिप्लॉय करताना URL टिकतात का?",
        "a": "होय. URL कायमस्वरूपी आहेत आणि तुमच्या Vercel डिप्लॉयशी काहीही संबंध नाही. रोल बॅक करा, रीडिप्लॉय करा, फ्रेमवर्क बदला, लिंक काम करत राहते."
      },
      {
        "q": "हॉबी Vercel प्रकल्पांसाठी हे विनामूल्य आहे का?",
        "a": "होय. अपलोड-आणि-शेअर फ्लो विनामूल्य आहे, साइनअप नाही. विनामूल्य खाती मोठ्या फायली आणि तुमचे अपलोड व्यवस्थापित करण्यासाठी डॅशबोर्ड अनलॉक करतात."
      }
    ],
    "ctaTitle": "Vercel-तयार प्रतिमा URL मिळवा",
    "ctaBody": "एकदा अपलोड करा. कुठेही एम्बेड करा. तुमचा Vercel डिप्लॉय हलका ठेवा.",
    "ctaButton": "प्रतिमा अपलोड करा"
  },
  "te": {
    "metaTitle": "Vercel కోసం Image to URL — స్టాటిక్ సైట్ల కోసం డైరెక్ట్ CDN లింక్‌లు | ImageToURL",
    "metaDescription": "మీ Vercel డిప్లాయ్ వెలుపల చిత్రాలను హోస్ట్ చేయండి మరియు శాశ్వత URL లతో ఎంబెడ్ చేయండి. బిల్డ్ సైజ్ పరిమితిని దాటవేయండి, వేగంగా షిప్ చేయండి, మీ రెపోను శుభ్రంగా ఉంచండి.",
    "schemaName": "Vercel కోసం Image to URL కన్వర్టర్",
    "schemaDescription": "Vercel-హోస్ట్ చేయబడిన Next.js, Astro లేదా స్టాటిక్ సైట్‌లలో మీరు ఎంబెడ్ చేసే చిత్రాల కోసం శాశ్వత CDN URL లను రూపొందించండి.",
    "badge": "Vercel చిత్ర URL లు",
    "h1Pre": "Image to URL",
    "h1Highlight": "Vercel కోసం.",
    "intro": "ముడి చిత్ర ఫైల్‌లతో మీ Vercel డిప్లాయ్‌ని ఉబ్బించడం ఆపండి. ఇక్కడ అప్‌లోడ్ చేయండి, ఒక డైరెక్ట్ URL పొందండి, మరియు దానిని మీ Next.js, Astro లేదా స్టాటిక్ సైట్‌లో ఎంబెడ్ చేయండి. బిల్డ్‌లు వేగంగా ఉంటాయి మరియు మీ రెపో చిన్నదిగా ఉంటుంది.",
    "howTitle": "ఇది ఎలా పనిచేస్తుంది",
    "steps": [
      {
        "title": "మీ రెపో వెలుపల అప్‌లోడ్ చేయండి",
        "body": "మీ చిత్రాన్ని Vercel ప్రాజెక్ట్‌లో కమిట్ చేయడానికి బదులుగా మా CDN కి పంపండి. మీ బిల్డ్ ఆర్టిఫ్యాక్ట్‌ను చిన్నగా మరియు పుష్ చరిత్రను శుభ్రంగా ఉంచుతుంది."
      },
      {
        "title": "శాశ్వత URL ను పొందండి",
        "body": "మేము మీకు గ్లోబల్ ఎడ్జ్ క్యాష్ నుండి లోడ్ అయ్యే డైరెక్ట్ లింక్‌ను ఇస్తాము. బిల్డ్ స్టెప్ లేదు, చిత్రాన్ని మార్చేటప్పుడు రీడిప్లాయ్ లేదు."
      },
      {
        "title": "మీ కోడ్‌లో ఉపయోగించండి",
        "body": "URL ను next/image, Astro Image లేదా సాధారణ <img> ట్యాగ్‌లో ఉంచండి. ఇది ఏ హోస్ట్‌లో ఉన్నట్లుగానే Vercel లో పనిచేస్తుంది."
      }
    ],
    "whyTitle": "Vercel వెలుపల చిత్రాలను ఎందుకు హోస్ట్ చేయాలి",
    "whyItems": [
      {
        "title": "చిన్న డిప్లాయ్‌లు",
        "body": "Vercel బిల్డ్ నిమిషాలు మరియు బ్యాండ్‌విడ్త్ కోసం ఛార్జ్ చేస్తుంది. git లోని పెద్ద బైనరీ ఆస్తులు ప్రతి డిప్లాయ్‌ని మందగిస్తాయి మరియు బిల్డ్ క్యాష్‌ను ఉబ్బిస్తాయి."
      },
      {
        "title": "వేగవంతమైన CI",
        "body": "ప్రతి డిప్లాయ్‌లో అప్‌లోడ్ స్టెప్‌ని దాటవేయండి. మీ రెపో తేలికగా ఉంటుంది మరియు పుష్‌లు నిమిషాలలో కాకుండా సెకన్లలో పూర్తవుతాయి."
      },
      {
        "title": "గ్లోబల్‌గా ఎడ్జ్-క్యాష్డ్",
        "body": "ప్రతి సందర్శకుడికి దగ్గరగా ఉన్న ఎడ్జ్ POP నుండి చిత్రాలు లోడ్ అవుతాయి. Vercel యొక్క సొంత CDN వలె అదే వేగ నమూనా, అదనపు కాన్ఫిగ్ లేదు."
      },
      {
        "title": "రీడిప్లాయ్ లేకుండా మార్చండి",
        "body": "మీ కోడ్‌ని తాకకుండా లేదా కొత్త బిల్డ్‌ని ట్రిగ్గర్ చేయకుండా చిత్రాన్ని అప్‌డేట్ చేయండి. URL అలాగే ఉంటుంది."
      }
    ],
    "faqTitle": "తరచుగా అడిగే ప్రశ్నలు",
    "faqs": [
      {
        "q": "Vercel లో /public లో చిత్రాలను ఎందుకు ఉంచకూడదు?",
        "a": "మీరు ఉంచవచ్చు, మరియు ఇది కొన్ని చిత్రాలకు బాగా పనిచేస్తుంది. మీకు డజన్ల కొద్దీ పెద్ద ఫైల్‌లు ఉన్నప్పుడు, ప్రతి డిప్లాయ్ వాటిని మళ్లీ పంపుతుంది, బిల్డ్‌లు మందగిస్తాయి, మరియు మీ రెపో ఉబ్బుతుంది. Vercel వెలుపల హోస్ట్ చేయడం అన్నింటినీ చక్కగా ఉంచుతుంది."
      },
      {
        "q": "ఇది next/image తో పనిచేస్తుందా?",
        "a": "అవును. URL ను src ప్రాప్‌కి పంపండి మరియు next.config.js లోని remotePatterns కి చిత్ర డొమైన్‌ని జోడించండి. Next.js దీన్ని ఏ ఇతర బాహ్య చిత్రం వలెనే ఆప్టిమైజ్ చేస్తుంది."
      },
      {
        "q": "ఇది నా పేజీని మందగిస్తుందా?",
        "a": "లేదు. ప్రపంచవ్యాప్తంగా ఎడ్జ్ నోడ్‌లతో ఉన్న CDN నుండి చిత్రాలు అందించబడతాయి. వాస్తవ లోడ్ సమయాలు సాధారణంగా 100ms కంటే తక్కువగా ఉంటాయి, Vercel యొక్క సొంత ఆస్తి డెలివరీ వలె."
      },
      {
        "q": "నేను రీడిప్లాయ్ చేసినప్పుడు URL లు మనుగడలో ఉంటాయా?",
        "a": "అవును. URL లు శాశ్వతం మరియు మీ Vercel డిప్లాయ్‌తో ఎలాంటి సంబంధం లేదు. రోల్ బ్యాక్ చేయండి, రీడిప్లాయ్ చేయండి, ఫ్రేమ్‌వర్క్‌లను మార్చండి, లింక్ పనిచేస్తూనే ఉంటుంది."
      },
      {
        "q": "హాబీ Vercel ప్రాజెక్ట్‌లకు ఇది ఉచితమా?",
        "a": "అవును. అప్‌లోడ్-మరియు-షేర్ ఫ్లో ఉచితం, సైన్‌అప్ లేదు. ఉచిత ఖాతాలు పెద్ద ఫైల్‌లను మరియు మీ అప్‌లోడ్‌లను నిర్వహించడానికి ఒక డ్యాష్‌బోర్డ్‌ను అన్‌లాక్ చేస్తాయి."
      }
    ],
    "ctaTitle": "Vercel-సిద్ధంగా ఉన్న చిత్ర URL ని పొందండి",
    "ctaBody": "ఒకసారి అప్‌లోడ్ చేయండి. ఎక్కడైనా ఎంబెడ్ చేయండి. మీ Vercel డిప్లాయ్‌ని తేలికగా ఉంచండి.",
    "ctaButton": "చిత్రాన్ని అప్‌లోడ్ చేయండి"
  },
  "zh-Hant": {
    "metaTitle": "Vercel 圖片轉 URL — 面向靜態站台的直連 CDN 連結 | ImageToURL",
    "metaDescription": "把圖片託管在 Vercel 部署之外，透過永久 URL 嵌入。繞開建置體積限制、更快上線、保持程式碼倉乾淨。",
    "schemaName": "Vercel 圖片轉 URL 工具",
    "schemaDescription": "為部署在 Vercel 上的 Next.js、Astro 或靜態站台中嵌入的圖片產生永久 CDN URL。",
    "badge": "Vercel 圖片 URL",
    "h1Pre": "圖片轉 URL",
    "h1Highlight": "專為 Vercel。",
    "intro": "別再讓原始圖片檔撐大你的 Vercel 部署。在這裡上傳，拿到直連，然後嵌入你的 Next.js、Astro 或靜態站台。建置保持快速，倉庫保持小巧。",
    "howTitle": "使用步驟",
    "steps": [
      {
        "title": "在倉庫之外上傳",
        "body": "把圖片發送到我們的 CDN，而不是提交到 Vercel 專案裡。讓建置產物變小，推送歷史保持整潔。"
      },
      {
        "title": "取得永久 URL",
        "body": "我們給你一條從全球邊緣快取載入的直連。無需建置步驟，更換圖片時也無需重新部署。"
      },
      {
        "title": "在程式碼中使用",
        "body": "把 URL 放進 next/image、Astro Image 或普通 <img> 標籤。在 Vercel 上的表現與任何託管方一致。"
      }
    ],
    "whyTitle": "為什麼把圖片託管到 Vercel 之外",
    "whyItems": [
      {
        "title": "部署更小",
        "body": "Vercel 按建置時長與頻寬計費。git 中的大型二進位資源會拖慢每一次部署，撐大建置快取。"
      },
      {
        "title": "CI 更快",
        "body": "每次部署都跳過上傳步驟。倉庫輕量，推送以秒計而不是分鐘。"
      },
      {
        "title": "全球邊緣快取",
        "body": "圖片從距離訪客最近的邊緣節點載入。與 Vercel 自家 CDN 同樣的速度模型，無需額外設定。"
      },
      {
        "title": "更換無需重新部署",
        "body": "不必修改程式碼或觸發新建置即可更新圖片，URL 保持不變。"
      }
    ],
    "faqTitle": "常見問題",
    "faqs": [
      {
        "q": "為什麼不直接把圖片放在 Vercel 的 /public 目錄？",
        "a": "可以，只要圖片不多就沒問題。一旦累積到幾十個大檔案，每次部署都會重新發送一次，建置變慢，倉庫膨脹。把它們託管在 Vercel 之外能讓一切保持整潔。"
      },
      {
        "q": "能與 next/image 一起用嗎？",
        "a": "可以。把 URL 傳給 src 屬性，並在 next.config.js 的 remotePatterns 中加入圖片網域。Next.js 會像處理任何外部圖片一樣進行最佳化。"
      },
      {
        "q": "會拖慢我的頁面嗎？",
        "a": "不會。圖片由全球邊緣節點的 CDN 提供。實際載入時間通常低於 100ms，與 Vercel 自身的資源分發相當。"
      },
      {
        "q": "重新部署後 URL 還有效嗎？",
        "a": "有效。URL 是永久的，與 Vercel 部署完全無關。回滾、重新部署、切換框架，連結都繼續可用。"
      },
      {
        "q": "業餘 Vercel 專案能免費使用嗎？",
        "a": "可以。上傳分享流程免費，無需註冊。免費帳號可解鎖更大檔案和用於管理上傳的面板。"
      }
    ],
    "ctaTitle": "取得 Vercel 可用的圖片 URL",
    "ctaBody": "上傳一次，到處嵌入，讓 Vercel 部署保持輕盈。",
    "ctaButton": "上傳圖片"
  }
} as LandingContentMap;
