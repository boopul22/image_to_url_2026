# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the ImageToURL homepage with a centered upload hero, stats bar, improved features grid, use cases, FAQ accordion, and final CTA — using the existing neo-brutalist design system.

**Architecture:** Single-file rewrite of `HomePage.astro` template section + new i18n keys in `en.json`. All existing upload JS logic preserved verbatim. No new components created — everything lives in HomePage.astro as it does today. New FAQ accordion uses a small inline `<script>` block.

**Tech Stack:** Astro, Tailwind CSS v4, existing design tokens (global.css @theme), Material Symbols icons, i18n JSON translations.

---

### Task 1: Add new i18n translation keys

**Files:**
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Add all new translation keys to en.json**

Add these keys after the existing `home.blog.uncategorized` entry (line 68):

```json
"home.hero.badge": "Free Image Hosting",
"home.hero.headline1": "Image to URL in",
"home.hero.headline2": "One Click",
"home.hero.subheadline": "Upload any image. Get a permanent, fast link. Share anywhere.",
"home.trust.cdn": "Global CDN",
"home.trust.ssl": "SSL Encrypted",
"home.trust.permanent": "Permanent Links",
"home.trust.instant": "Instant",

"home.stats.images": "10M+",
"home.stats.imagesLabel": "Images Hosted",
"home.stats.uptime": "99.9%",
"home.stats.uptimeLabel": "Uptime",
"home.stats.countries": "150+",
"home.stats.countriesLabel": "Countries",
"home.stats.signup": "0",
"home.stats.signupLabel": "Signup Required",

"home.howItWorks.title": "How It Works",
"home.howItWorks.subtitle": "Three steps. Zero friction.",

"home.features.grid.cdn.title": "CDN Delivery",
"home.features.grid.cdn.description": "Images served from edge nodes worldwide. Your content loads fast everywhere.",
"home.features.grid.noSignup.title": "No Signup Required",
"home.features.grid.noSignup.description": "Upload instantly without creating an account. No email, no password, no friction.",
"home.features.grid.permanent.title": "Permanent Links",
"home.features.grid.permanent.description": "Your URLs never expire. Share with confidence — they stay live forever.",
"home.features.grid.ssl.title": "SSL Secure",
"home.features.grid.ssl.description": "Every link is HTTPS encrypted. Safe for any context — blogs, apps, or emails.",
"home.features.grid.instant.title": "Instant Upload",
"home.features.grid.instant.description": "Drag, drop, done. Get your shareable URL in under 2 seconds.",
"home.features.grid.resize.title": "Auto Resize",
"home.features.grid.resize.description": "Images are optimized automatically for fast delivery without quality loss.",

"home.useCases.title": "Built for Everyone",
"home.useCases.subtitle": "Whether you're sharing a meme or shipping a product — we've got you.",
"home.useCases.bloggers.title": "Bloggers",
"home.useCases.bloggers.description": "Paste image URLs directly into your posts. No media library headaches.",
"home.useCases.developers.title": "Developers",
"home.useCases.developers.description": "Use our REST API to automate image hosting in your apps and pipelines.",
"home.useCases.students.title": "Students",
"home.useCases.students.description": "Quick image links for presentations, docs, and group projects.",
"home.useCases.creators.title": "Creators",
"home.useCases.creators.description": "Portfolio images, social posts, and thumbnails — always online, always fast.",

"home.faq.title": "Frequently Asked Questions",
"home.faq.q1": "Is it really free?",
"home.faq.a1": "Yes. The free tier gives you 10 uploads per month with permanent links and CDN delivery. No credit card needed.",
"home.faq.q2": "Do my links expire?",
"home.faq.a2": "No. Free-tier links are permanent. Pro users can optionally set custom expiration times.",
"home.faq.q3": "What image formats are supported?",
"home.faq.a3": "JPG, PNG, WebP, GIF, and SVG — up to 10 MB per file.",
"home.faq.q4": "Is there an API?",
"home.faq.a4": "Yes. Pro and Business plans include full REST API access for automated uploads and image management.",
"home.faq.q5": "How secure are my images?",
"home.faq.a5": "All images are served over HTTPS with SSL encryption. Data is stored on Cloudflare's encrypted infrastructure.",

"home.cta.title": "Ready to Host Your Images?",
"home.cta.subtitle": "No signup. No credit card. Just upload and share.",
"home.cta.button": "Start Uploading — It's Free"
```

- [ ] **Step 2: Verify JSON is valid**

Run: `node -e "JSON.parse(require('fs').readFileSync('src/i18n/translations/en.json','utf8')); console.log('OK')"`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add src/i18n/translations/en.json
git commit -m "feat(i18n): add translation keys for homepage redesign"
```

---

### Task 2: Rewrite HomePage.astro template — Hero + Stats sections

**Files:**
- Modify: `src/components/pages/HomePage.astro:119-230` (replace Hero section and Features pills)

The frontmatter (lines 1-118) stays exactly as-is. The `<script>` block at the end (lines 415-540) stays exactly as-is. We're only rewriting the template between `<Layout>` and `</Layout>`.

- [ ] **Step 1: Replace everything between `<Layout ...>` and `<Footer />` with the new sections**

Replace lines 121-410 (from the `<link slot="head"...>` through the blog section closing) with the following. This step covers Hero + Stats. Subsequent tasks add the remaining sections before `<Footer />`.

```astro
  <Nav activePage="home" />

  <!-- Hero Section — Centered Upload -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16 text-center">
    <div class="inline-block bg-primary px-3 py-1 border-2 border-on-background text-on-primary font-label text-[10px] sm:text-xs font-bold uppercase tracking-widest hard-shadow mb-5 sm:mb-6">
      {t(locale, 'home.hero.badge')}
    </div>
    <h1 class="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-on-background leading-[0.95] tracking-tighter mb-4 sm:mb-5">
      {t(locale, 'home.hero.headline1')} <span class="bg-primary px-1 sm:px-2">{t(locale, 'home.hero.headline2')}</span>
    </h1>
    <p class="font-body text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
      {t(locale, 'home.hero.subheadline')}
    </p>

    <!-- Upload Area -->
    <div class="max-w-lg mx-auto">
      <input type="file" id="file-input" accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml" class="hidden" />
      <div
        id="upload-panel"
        class="bg-tertiary-fixed border-2 border-on-background hard-shadow overflow-hidden transition-colors"
        data-uploading={t(locale, 'home.upload.uploading')}
        data-copied={t(locale, 'home.upload.copied')}
        data-copy={t(locale, 'home.upload.copy')}
        data-failed={t(locale, 'home.upload.failed')}
        data-click-or-drag={t(locale, 'home.upload.clickOrDrag')}
        data-formats={t(locale, 'home.upload.formats')}
        data-select-file={t(locale, 'home.upload.selectFile')}
        data-uploading-file={t(locale, 'home.upload.uploadingFile')}
      >
        <!-- State: idle / uploading -->
        <div id="state-idle" class="p-4 sm:p-6">
          <div id="drop-zone" class="flex flex-col items-center gap-3 cursor-pointer" role="button" tabindex="0">
            <span class="material-symbols-outlined text-on-tertiary-container text-3xl sm:text-4xl" id="upload-icon">upload_file</span>
            <div class="text-center">
              <p class="text-on-surface font-bold text-sm sm:text-base" id="upload-text">{t(locale, 'home.upload.clickOrDrag')}</p>
              <p class="text-xs text-outline mt-1" id="upload-subtext">{t(locale, 'home.upload.formats')}</p>
            </div>
            <div class="bg-on-background text-primary px-6 py-2.5 font-bold text-sm uppercase tracking-wider active:scale-95 transition-transform" id="upload-btn">
              {t(locale, 'home.upload.selectFile')}
            </div>
          </div>
          <div id="progress-bar" class="hidden mt-4 h-1.5 bg-surface-variant overflow-hidden">
            <div id="progress-fill" class="h-full bg-primary transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- State: success -->
        <div id="state-success" class="p-4 sm:p-6 hidden">
          <div class="flex items-center gap-2 mb-3">
            <span class="material-symbols-outlined text-secondary text-xl sm:text-2xl">check_circle</span>
            <span class="font-bold text-secondary text-xs sm:text-sm">{t(locale, 'home.upload.uploaded')}</span>
            <button id="upload-another" class="ml-auto text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider hover:underline flex-shrink-0">
              {t(locale, 'home.upload.uploadAnother')}
            </button>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            <input type="text" id="result-url" readonly class="flex-1 min-w-0 bg-white border-2 border-on-background px-3 py-2.5 sm:py-2 text-xs sm:text-sm font-mono text-on-surface focus:outline-none" />
            <button id="copy-btn" class="bg-primary text-on-primary px-4 py-2.5 sm:py-2 font-bold text-sm border-2 border-on-background flex-shrink-0 active:scale-95 transition-transform">
              {t(locale, 'home.upload.copy')}
            </button>
          </div>
        </div>

        <!-- State: error -->
        <div id="state-error" class="p-4 sm:p-6 hidden">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-error flex-shrink-0">error</span>
            <span class="font-bold text-on-error-container text-sm flex-1 min-w-0 truncate" id="error-text">{t(locale, 'home.upload.failed')}</span>
            <button id="error-retry" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline flex-shrink-0">
              {t(locale, 'home.upload.tryAgain')}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Signals -->
    <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-on-surface-variant font-label font-bold uppercase tracking-wider">
      <span class="flex items-center gap-1.5">🚀 {t(locale, 'home.trust.cdn')}</span>
      <span class="flex items-center gap-1.5">🔒 {t(locale, 'home.trust.ssl')}</span>
      <span class="flex items-center gap-1.5">🔗 {t(locale, 'home.trust.permanent')}</span>
      <span class="flex items-center gap-1.5">⚡ {t(locale, 'home.trust.instant')}</span>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="bg-secondary py-6 sm:py-8 border-y-2 border-on-background">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
      <div class="reveal">
        <div class="font-headline text-2xl sm:text-4xl font-black text-primary">{t(locale, 'home.stats.images')}</div>
        <div class="font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-secondary font-bold mt-1">{t(locale, 'home.stats.imagesLabel')}</div>
      </div>
      <div class="reveal">
        <div class="font-headline text-2xl sm:text-4xl font-black text-primary">{t(locale, 'home.stats.uptime')}</div>
        <div class="font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-secondary font-bold mt-1">{t(locale, 'home.stats.uptimeLabel')}</div>
      </div>
      <div class="reveal">
        <div class="font-headline text-2xl sm:text-4xl font-black text-primary">{t(locale, 'home.stats.countries')}</div>
        <div class="font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-secondary font-bold mt-1">{t(locale, 'home.stats.countriesLabel')}</div>
      </div>
      <div class="reveal">
        <div class="font-headline text-2xl sm:text-4xl font-black text-primary">{t(locale, 'home.stats.signup')}</div>
        <div class="font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-secondary font-bold mt-1">{t(locale, 'home.stats.signupLabel')}</div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify the file has no syntax errors**

Run: `npx astro check 2>&1 | head -20`
Expected: No errors in HomePage.astro

- [ ] **Step 3: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "feat(home): rewrite hero as centered upload + add stats bar"
```

---

### Task 3: Add How It Works + Features Grid sections

**Files:**
- Modify: `src/components/pages/HomePage.astro` (insert after Stats Bar section, before `<Footer />`)

- [ ] **Step 1: Add How It Works and Features Grid sections**

Insert these sections after the Stats Bar `</section>` closing tag:

```astro
  <!-- How It Works -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
    <div class="text-center mb-8 sm:mb-14 reveal">
      <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-background mb-2 sm:mb-3">{t(locale, 'home.howItWorks.title')}</h2>
      <p class="font-body text-on-surface-variant text-sm sm:text-base">{t(locale, 'home.howItWorks.subtitle')}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 reveal-stagger">
      <!-- Step 1 -->
      <div class="reveal bg-tertiary-fixed border-2 border-on-background p-6 sm:p-8 hard-shadow relative">
        <div class="absolute top-3 left-3 bg-on-background text-white w-8 h-8 flex items-center justify-center font-headline text-lg font-black">1</div>
        <div class="text-center pt-4">
          <span class="material-symbols-outlined text-on-tertiary-container text-4xl sm:text-5xl mb-3 block">cloud_upload</span>
          <h3 class="font-headline text-xl sm:text-2xl font-black text-on-background mb-2">{t(locale, 'home.howItWorks.upload.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.howItWorks.upload.description')}</p>
        </div>
      </div>
      <!-- Step 2 -->
      <div class="reveal bg-primary-fixed border-2 border-on-background p-6 sm:p-8 hard-shadow relative">
        <div class="absolute top-3 left-3 bg-on-background text-white w-8 h-8 flex items-center justify-center font-headline text-lg font-black">2</div>
        <div class="text-center pt-4">
          <span class="material-symbols-outlined text-on-primary-fixed-variant text-4xl sm:text-5xl mb-3 block">bolt</span>
          <h3 class="font-headline text-xl sm:text-2xl font-black text-on-background mb-2">{t(locale, 'home.howItWorks.convert.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.howItWorks.convert.description')}</p>
        </div>
      </div>
      <!-- Step 3 -->
      <div class="reveal bg-secondary-container border-2 border-on-background p-6 sm:p-8 hard-shadow relative">
        <div class="absolute top-3 left-3 bg-on-background text-white w-8 h-8 flex items-center justify-center font-headline text-lg font-black">3</div>
        <div class="text-center pt-4">
          <span class="material-symbols-outlined text-on-secondary-container text-4xl sm:text-5xl mb-3 block">share</span>
          <h3 class="font-headline text-xl sm:text-2xl font-black text-on-background mb-2">{t(locale, 'home.howItWorks.share.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.howItWorks.share.description')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="bg-surface-container border-y-2 border-on-background py-10 sm:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8 sm:mb-14 reveal">
        <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-background mb-2 sm:mb-3">{t(locale, 'home.features.title')}</h2>
        <p class="font-body text-on-surface-variant text-sm sm:text-base">{t(locale, 'home.features.description')}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 reveal-stagger">
        <div class="reveal bg-white border-2 border-on-background p-5 sm:p-6 hard-shadow hard-shadow-hover transition-all cursor-default">
          <span class="material-symbols-outlined text-primary text-3xl mb-3 block">rocket_launch</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.features.grid.cdn.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.features.grid.cdn.description')}</p>
        </div>
        <div class="reveal bg-white border-2 border-on-background p-5 sm:p-6 hard-shadow hard-shadow-hover transition-all cursor-default">
          <span class="material-symbols-outlined text-primary text-3xl mb-3 block">lock_open</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.features.grid.noSignup.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.features.grid.noSignup.description')}</p>
        </div>
        <div class="reveal bg-white border-2 border-on-background p-5 sm:p-6 hard-shadow hard-shadow-hover transition-all cursor-default">
          <span class="material-symbols-outlined text-primary text-3xl mb-3 block">link</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.features.grid.permanent.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.features.grid.permanent.description')}</p>
        </div>
        <div class="reveal bg-white border-2 border-on-background p-5 sm:p-6 hard-shadow hard-shadow-hover transition-all cursor-default">
          <span class="material-symbols-outlined text-primary text-3xl mb-3 block">https</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.features.grid.ssl.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.features.grid.ssl.description')}</p>
        </div>
        <div class="reveal bg-white border-2 border-on-background p-5 sm:p-6 hard-shadow hard-shadow-hover transition-all cursor-default">
          <span class="material-symbols-outlined text-primary text-3xl mb-3 block">flash_on</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.features.grid.instant.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.features.grid.instant.description')}</p>
        </div>
        <div class="reveal bg-white border-2 border-on-background p-5 sm:p-6 hard-shadow hard-shadow-hover transition-all cursor-default">
          <span class="material-symbols-outlined text-primary text-3xl mb-3 block">aspect_ratio</span>
          <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.features.grid.resize.title')}</h3>
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.features.grid.resize.description')}</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "feat(home): add How It Works steps + Features grid sections"
```

---

### Task 4: Add Use Cases + Testimonials sections

**Files:**
- Modify: `src/components/pages/HomePage.astro` (insert after Features Grid, before `<Footer />`)

- [ ] **Step 1: Add Use Cases and Testimonials sections**

Insert after the Features Grid `</section>` closing tag:

```astro
  <!-- Use Cases -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
    <div class="text-center mb-8 sm:mb-14 reveal">
      <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-background mb-2 sm:mb-3">{t(locale, 'home.useCases.title')}</h2>
      <p class="font-body text-on-surface-variant text-sm sm:text-base">{t(locale, 'home.useCases.subtitle')}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal-stagger">
      <div class="reveal bg-tertiary-fixed border-2 border-on-background p-5 sm:p-6 hard-shadow">
        <span class="text-2xl sm:text-3xl block mb-3">✍️</span>
        <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.useCases.bloggers.title')}</h3>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.useCases.bloggers.description')}</p>
      </div>
      <div class="reveal bg-primary-fixed border-2 border-on-background p-5 sm:p-6 hard-shadow">
        <span class="text-2xl sm:text-3xl block mb-3">💻</span>
        <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.useCases.developers.title')}</h3>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.useCases.developers.description')}</p>
      </div>
      <div class="reveal bg-secondary-container border-2 border-on-background p-5 sm:p-6 hard-shadow">
        <span class="text-2xl sm:text-3xl block mb-3">🎓</span>
        <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.useCases.students.title')}</h3>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.useCases.students.description')}</p>
      </div>
      <div class="reveal bg-surface-variant border-2 border-on-background p-5 sm:p-6 hard-shadow">
        <span class="text-2xl sm:text-3xl block mb-3">🎨</span>
        <h3 class="font-headline text-lg font-black text-on-background mb-1">{t(locale, 'home.useCases.creators.title')}</h3>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.useCases.creators.description')}</p>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="bg-secondary px-4 sm:px-6 py-10 sm:py-20 border-y-2 border-on-background">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8 sm:mb-14 reveal">
        <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-secondary mb-2">{t(locale, 'home.testimonials.title')} <span class="bg-primary text-on-primary px-2">{t(locale, 'home.testimonials.highlight')}</span></h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 reveal-stagger">
        <!-- Quote 1 -->
        <div class="reveal">
          <div class="bg-white p-5 sm:p-6 border-2 border-on-background hard-shadow">
            <p class="font-body text-on-surface text-sm sm:text-base mb-4 leading-relaxed">"{t(locale, 'home.testimonials.alex.quote')}"</p>
            <div class="flex items-center gap-3 pt-3 border-t-2 border-surface-variant">
              <div class="w-10 h-10 rounded-full border-2 border-on-background overflow-hidden bg-primary-fixed flex-shrink-0">
                <img alt={t(locale, 'home.testimonials.alex.name')} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfM4WRnmfMyxG2svBrqpKPj662x21sg_veIICHjC_JLq9LmSfOXcYCJ4ssCs2F2ZCkPnSOHcVb8O01YtjxgezrK_k4BNaV-g7hDu-9hjcacLtuX5ZoBjz1LTEvnua-NIy2Doq9_vRlKytHTee0BMajnJN8XKa9zuMbNtz0q-1JrTQ1FhSXR2ylj8AR0SfzTTHWZmnk4ejWT60VvIvTJAwCoR0GBEYUBy4v5EP8f_ox9l1xfhvI89yg_OBBvReml0OIivwZ7lANjc" width="40" height="40" loading="lazy" decoding="async" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-bold text-sm">{t(locale, 'home.testimonials.alex.name')}</p>
                <p class="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{t(locale, 'home.testimonials.alex.role')}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Quote 2 -->
        <div class="reveal">
          <div class="bg-white p-5 sm:p-6 border-2 border-on-background hard-shadow">
            <p class="font-body text-on-surface text-sm sm:text-base mb-4 leading-relaxed">"{t(locale, 'home.testimonials.sarah.quote')}"</p>
            <div class="flex items-center gap-3 pt-3 border-t-2 border-surface-variant">
              <div class="w-10 h-10 rounded-full border-2 border-on-background overflow-hidden bg-tertiary-fixed flex-shrink-0">
                <img alt={t(locale, 'home.testimonials.sarah.name')} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmULj_9vdxghm3rYVHcgb_MFynGE4ZKLJlSHqhJfNJ6Lb9OPzYqFnEF5UrK4_WxSwhU44EinVXaHTJ5norK1kiHdu-NngoRyJb11gThlA2YbcQRLvdo4Kv3omAbV2tESDfnjQ1Y4Ko7VxsEtFrK0Qeapfg6wYms5eJxwyfye4bXa2C-aJv1poP7An_GRxMwe63CTy9OKwniS4IGa5QyM-lXJMBROj3nVOY4WOi533zDEUY7KG93khb6cU4StgCpTOKLYpbY8cFDrU" width="40" height="40" loading="lazy" decoding="async" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-bold text-sm">{t(locale, 'home.testimonials.sarah.name')}</p>
                <p class="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{t(locale, 'home.testimonials.sarah.role')}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Quote 3 -->
        <div class="reveal">
          <div class="bg-white p-5 sm:p-6 border-2 border-on-background hard-shadow">
            <p class="font-body text-on-surface text-sm sm:text-base mb-4 leading-relaxed">"{t(locale, 'home.testimonials.jordan.quote')}"</p>
            <div class="flex items-center gap-3 pt-3 border-t-2 border-surface-variant">
              <div class="w-10 h-10 rounded-full border-2 border-on-background overflow-hidden bg-secondary-fixed flex-shrink-0">
                <img alt={t(locale, 'home.testimonials.jordan.name')} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKK7PpHY1AWcvGia_m2KYL4o4aEjQdoqOv_DuyRnN8lShFbVhM-magAFEVXcgUQe18pHEMb80i65kGHD5Vj_4iEGvljOEFaSQNhNbr3SifE-1YY9PO7mlEVTd_2fY5DoSg9pYNMY-oAwYP_OSZwME6WYVjW3x3kJsZc4tooWZugNvBnAwfaHxw08oFrl_21eJzle-ShNxUmb9h9BMeWWr1QjDv8fVN79fQZ6eewZxxn7oHkL3ft1fNKW_iYj_4Choh_EPvqhsC2a0" width="40" height="40" loading="lazy" decoding="async" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-bold text-sm">{t(locale, 'home.testimonials.jordan.name')}</p>
                <p class="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{t(locale, 'home.testimonials.jordan.role')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "feat(home): add Use Cases + Testimonials sections"
```

---

### Task 5: Add FAQ Accordion + Final CTA + Blog Preview

**Files:**
- Modify: `src/components/pages/HomePage.astro` (insert after Testimonials, before `<Footer />`)

- [ ] **Step 1: Add FAQ, CTA, and Blog Preview sections**

Insert after the Testimonials `</section>` closing tag, before `<Footer />`:

```astro
  <!-- FAQ Accordion -->
  <section class="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
    <div class="text-center mb-8 sm:mb-14 reveal">
      <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-background">{t(locale, 'home.faq.title')}</h2>
    </div>
    <div class="flex flex-col gap-3 sm:gap-4 reveal" id="faq-container">
      <div class="faq-item border-2 border-on-background hard-shadow bg-white">
        <button class="faq-toggle w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer" aria-expanded="false">
          <span class="font-headline font-black text-on-background text-sm sm:text-base pr-4">{t(locale, 'home.faq.q1')}</span>
          <span class="material-symbols-outlined text-on-surface-variant flex-shrink-0 faq-icon transition-transform duration-200">expand_more</span>
        </button>
        <div class="faq-answer hidden px-4 sm:px-5 pb-4 sm:pb-5">
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.faq.a1')}</p>
        </div>
      </div>
      <div class="faq-item border-2 border-on-background hard-shadow bg-white">
        <button class="faq-toggle w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer" aria-expanded="false">
          <span class="font-headline font-black text-on-background text-sm sm:text-base pr-4">{t(locale, 'home.faq.q2')}</span>
          <span class="material-symbols-outlined text-on-surface-variant flex-shrink-0 faq-icon transition-transform duration-200">expand_more</span>
        </button>
        <div class="faq-answer hidden px-4 sm:px-5 pb-4 sm:pb-5">
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.faq.a2')}</p>
        </div>
      </div>
      <div class="faq-item border-2 border-on-background hard-shadow bg-white">
        <button class="faq-toggle w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer" aria-expanded="false">
          <span class="font-headline font-black text-on-background text-sm sm:text-base pr-4">{t(locale, 'home.faq.q3')}</span>
          <span class="material-symbols-outlined text-on-surface-variant flex-shrink-0 faq-icon transition-transform duration-200">expand_more</span>
        </button>
        <div class="faq-answer hidden px-4 sm:px-5 pb-4 sm:pb-5">
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.faq.a3')}</p>
        </div>
      </div>
      <div class="faq-item border-2 border-on-background hard-shadow bg-white">
        <button class="faq-toggle w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer" aria-expanded="false">
          <span class="font-headline font-black text-on-background text-sm sm:text-base pr-4">{t(locale, 'home.faq.q4')}</span>
          <span class="material-symbols-outlined text-on-surface-variant flex-shrink-0 faq-icon transition-transform duration-200">expand_more</span>
        </button>
        <div class="faq-answer hidden px-4 sm:px-5 pb-4 sm:pb-5">
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.faq.a4')}</p>
        </div>
      </div>
      <div class="faq-item border-2 border-on-background hard-shadow bg-white">
        <button class="faq-toggle w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer" aria-expanded="false">
          <span class="font-headline font-black text-on-background text-sm sm:text-base pr-4">{t(locale, 'home.faq.q5')}</span>
          <span class="material-symbols-outlined text-on-surface-variant flex-shrink-0 faq-icon transition-transform duration-200">expand_more</span>
        </button>
        <div class="faq-answer hidden px-4 sm:px-5 pb-4 sm:pb-5">
          <p class="font-body text-on-surface-variant text-sm leading-relaxed">{t(locale, 'home.faq.a5')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="bg-primary border-y-2 border-on-background py-10 sm:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-background mb-3 sm:mb-4 reveal">{t(locale, 'home.cta.title')}</h2>
      <p class="font-body text-on-surface-variant text-sm sm:text-base mb-6 sm:mb-8 reveal">{t(locale, 'home.cta.subtitle')}</p>
      <a href="#file-input" class="reveal inline-block bg-on-background text-primary px-8 py-3 sm:py-4 font-headline font-black text-sm sm:text-base uppercase tracking-wider hard-shadow hover:-translate-y-1 transition-transform" onclick="document.getElementById('file-input')?.click(); return false;">
        {t(locale, 'home.cta.button')}
      </a>
    </div>
  </section>

  <!-- Blog Preview -->
  {previewPosts.length > 0 && (
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
    <h2 class="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-on-background mb-6 sm:mb-12 reveal">{t(locale, 'home.blog.title')} <span class="bg-primary px-2">{t(locale, 'home.blog.highlight')}</span></h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 reveal-stagger">
      {previewPosts.map((post) => (
        <article class="group reveal">
          <a href={lp(`/blog/${post.slug}`)} class="block h-full">
            <div class="bg-surface border-2 border-on-background h-full flex flex-col hard-shadow hard-shadow-hover transition-all duration-200">
              <div class={`h-48 relative border-b-2 border-on-background overflow-hidden ${!post.coverImage ? (post.iconBg || 'bg-surface-container-highest') + ' flex items-center justify-center' : ''}`}>
                {post.coverImage ? (
                  <img alt={post.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.coverImage} width="400" height="192" loading="lazy" decoding="async" />
                ) : (
                  <span class="material-symbols-outlined text-8xl text-on-surface/20">{post.iconFallback || 'article'}</span>
                )}
              </div>
              <div class="p-5 sm:p-6 flex flex-col flex-1">
                <span class={`font-label text-xs font-bold uppercase text-${post.categoryColor || 'primary'} tracking-widest mb-3 block`}>{post.categoryName || t(locale, 'home.blog.uncategorized')}</span>
                <h3 class="font-headline text-lg font-black text-on-surface mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <span class="font-label text-xs font-black uppercase text-primary flex items-center gap-1 mt-auto">
                  {t(locale, 'home.blog.readMore')} <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  </section>
  )}
```

- [ ] **Step 2: Add FAQ accordion script**

Append the following `<script>` block immediately AFTER the existing upload script (the one ending at the bottom of the file). This is a separate `<script>` tag:

```html
<script>
  // FAQ Accordion
  document.querySelectorAll('.faq-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement!;
      const answer = item.querySelector('.faq-answer')!;
      const icon = btn.querySelector('.faq-icon')!;
      const isOpen = !answer.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-item').forEach((faq) => {
        faq.querySelector('.faq-answer')!.classList.add('hidden');
        faq.querySelector('.faq-toggle')!.setAttribute('aria-expanded', 'false');
        faq.querySelector('.faq-icon')!.classList.remove('rotate-180');
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        answer.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
        icon.classList.add('rotate-180');
      }
    });
  });
</script>
```

- [ ] **Step 3: Verify build compiles**

Run: `npx astro check 2>&1 | head -20`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "feat(home): add FAQ accordion, CTA banner, and blog preview"
```

---

### Task 6: Remove preload of old hero image

**Files:**
- Modify: `src/components/pages/HomePage.astro` (remove line 121)

- [ ] **Step 1: Remove the old hero image preload**

The old hero had a `<link slot="head" rel="preload" ...>` for the Google Photos hero image. This image is no longer used. Remove this line entirely — it was on line 121 in the original file, but after the rewrite it may be at a different position. Search for the `<link slot="head"` line that preloads the `lh3.googleusercontent.com` image and delete it.

- [ ] **Step 2: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "chore(home): remove unused hero image preload"
```

---

### Task 7: Add FAQPage schema to structured data

**Files:**
- Modify: `src/components/pages/HomePage.astro` (in the frontmatter `pageSchema` array)

- [ ] **Step 1: Add FAQPage schema to the pageSchema array**

Add this object to the `pageSchema` array (after the existing WebPage schema object):

```javascript
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The free tier gives you 10 uploads per month with permanent links and CDN delivery. No credit card needed."
        }
      },
      {
        "@type": "Question",
        "name": "Do my links expire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Free-tier links are permanent. Pro users can optionally set custom expiration times."
        }
      },
      {
        "@type": "Question",
        "name": "What image formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPG, PNG, WebP, GIF, and SVG — up to 10 MB per file."
        }
      },
      {
        "@type": "Question",
        "name": "Is there an API?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Pro and Business plans include full REST API access for automated uploads and image management."
        }
      },
      {
        "@type": "Question",
        "name": "How secure are my images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All images are served over HTTPS with SSL encryption. Data is stored on Cloudflare's encrypted infrastructure."
        }
      }
    ]
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "feat(seo): add FAQPage schema to homepage structured data"
```
