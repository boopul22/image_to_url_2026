# Mobile-First UI/UX Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every page of ImageToURL work beautifully on phones and tablets with proper touch targets, responsive grids, and smooth typography scaling.

**Architecture:** Pure CSS/Tailwind class changes across all page components. No new files, no structural changes. All edits are class string modifications in existing `.astro` files and one JS template literal fix per admin page.

**Tech Stack:** Tailwind CSS v4, Astro components

---

### Task 1: Global CSS — Add mobile utility and touch feedback

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add touch-feedback utility and smooth mobile menu transition**

Add after the existing `.material-symbols-outlined` block:

```css
/* Smooth mobile menu transition */
.mobile-menu-transition {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.mobile-menu-transition.open {
  max-height: 500px;
}
```

- [ ] **Step 2: Verify CSS compiles**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add mobile menu transition utility to global CSS"
```

---

### Task 2: Nav — Smooth mobile menu + active touch feedback

**Files:**
- Modify: `src/components/Nav.astro`

- [ ] **Step 1: Replace instant mobile menu toggle with animated transition**

In `Nav.astro`, change the mobile menu container from:
```html
<div id="mobile-menu" class="hidden md:hidden border-t-2 border-on-background bg-background/95 backdrop-blur-md">
```
to:
```html
<div id="mobile-menu" class="mobile-menu-transition md:hidden border-t-2 border-on-background bg-background/95">
```

- [ ] **Step 2: Update the mobile menu JS toggle logic**

Replace the existing mobile menu script section:
```js
menuBtn?.addEventListener('click', () => {
    const isOpen = !mobileMenu!.classList.contains('hidden');
    mobileMenu!.classList.toggle('hidden');
    menuIcon!.textContent = isOpen ? 'menu' : 'close';
    menuBtn!.setAttribute('aria-expanded', String(!isOpen));
  });
```
with:
```js
menuBtn?.addEventListener('click', () => {
    const isOpen = mobileMenu!.classList.contains('open');
    mobileMenu!.classList.toggle('open');
    menuIcon!.textContent = isOpen ? 'menu' : 'close';
    menuBtn!.setAttribute('aria-expanded', String(!isOpen));
  });
```

- [ ] **Step 3: Add active:scale-95 to Sign In button**

Change the Sign In `<a>` from:
```
class="bg-primary text-on-primary px-6 py-2 rounded-lg border-2 border-on-background hard-shadow hard-shadow-hover active:scale-95 duration-100 font-label uppercase tracking-wider text-xs font-bold flex items-center gap-2"
```
(Already has `active:scale-95` — verify and skip if present.)

- [ ] **Step 4: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 5: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat: smooth animated mobile menu + touch feedback"
```

---

### Task 3: AdminSidebar — Bigger toggle, active states, backdrop transition

**Files:**
- Modify: `src/components/AdminSidebar.astro`

- [ ] **Step 1: Increase mobile sidebar toggle to 56px (w-14 h-14)**

Change line 18 from:
```html
class="lg:hidden fixed bottom-6 left-6 z-50 w-12 h-12 bg-primary text-on-primary border-2 border-on-surface rounded-full flex items-center justify-center hard-shadow active:scale-95 transition-transform"
```
to:
```html
class="lg:hidden fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary text-on-primary border-2 border-on-surface rounded-full flex items-center justify-center hard-shadow active:scale-90 transition-transform"
```

- [ ] **Step 2: Add backdrop fade transition**

Change line 25 from:
```html
<div id="sidebar-backdrop" class="hidden lg:hidden fixed inset-0 bg-on-surface/40 z-30" aria-hidden="true"></div>
```
to:
```html
<div id="sidebar-backdrop" class="lg:hidden fixed inset-0 bg-on-surface/40 z-30 transition-opacity duration-200 opacity-0 pointer-events-none" aria-hidden="true"></div>
```

- [ ] **Step 3: Update sidebar label text from text-[10px] to text-xs**

Change line 29 from:
```html
<p class="font-label text-[10px] font-bold uppercase tracking-widest text-outline">Admin Console</p>
```
to:
```html
<p class="font-label text-xs font-bold uppercase tracking-widest text-outline">Admin Console</p>
```

- [ ] **Step 4: Add active state to nav items**

Change line 40 from:
```
: "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface",
```
to:
```
: "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface active:bg-surface-container-highest",
```

- [ ] **Step 5: Add active states to bottom nav links**

Change line 51 from:
```html
<a href="/dashboard" class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface font-label text-sm transition-colors">
```
to:
```html
<a href="/dashboard" class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface active:text-on-surface font-label text-sm transition-colors">
```

Change line 55 similarly (logout link) from `py-2` to `py-3`.

- [ ] **Step 6: Update backdrop JS to use opacity toggle instead of hidden**

Replace the open/close functions:
```js
function openSidebar() {
    sidebar?.classList.remove('-translate-x-full');
    backdrop?.classList.remove('hidden');
    if (icon) icon.textContent = 'close';
  }

  function closeSidebar() {
    sidebar?.classList.add('-translate-x-full');
    backdrop?.classList.add('hidden');
    if (icon) icon.textContent = 'menu';
  }
```
with:
```js
function openSidebar() {
    sidebar?.classList.remove('-translate-x-full');
    backdrop?.classList.remove('opacity-0', 'pointer-events-none');
    if (icon) icon.textContent = 'close';
  }

  function closeSidebar() {
    sidebar?.classList.add('-translate-x-full');
    backdrop?.classList.add('opacity-0', 'pointer-events-none');
    if (icon) icon.textContent = 'menu';
  }
```

- [ ] **Step 7: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 8: Commit**

```bash
git add src/components/AdminSidebar.astro
git commit -m "feat: larger sidebar toggle, backdrop fade, active states"
```

---

### Task 4: Admin Dashboard — Responsive layout, touch targets, table scroll

**Files:**
- Modify: `src/pages/admin.astro`

- [ ] **Step 1: Fix main content padding and max-width**

Change line 20 from:
```html
<main class="flex-1 p-8 space-y-8 bg-surface-container-lowest min-h-[calc(100vh-65px)]">
```
to:
```html
<main class="flex-1 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-surface-container-lowest min-h-[calc(100dvh-65px)]">
```

- [ ] **Step 2: Fix admin badge and title text sizes**

Change line 23 from:
```html
<span class="inline-block px-3 py-1 bg-tertiary-fixed border-2 border-on-surface rounded-full font-label text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed mb-3">Admin Overview</span>
```
to:
```html
<span class="inline-block px-3 py-1 bg-tertiary-fixed border-2 border-on-surface rounded-full font-label text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed mb-3">Admin Overview</span>
```

Change line 24 from:
```html
<h1 class="text-4xl md:text-5xl font-headline italic font-black text-on-surface mb-2">
```
to:
```html
<h1 class="text-2xl sm:text-4xl md:text-5xl font-headline italic font-black text-on-surface mb-2">
```

- [ ] **Step 3: Fix stats cards — add sm:grid-cols-2 and fix text-[10px]**

Change line 31 from:
```html
<div id="stats-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
```
to:
```html
<div id="stats-cards" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
```

For each of the 4 stat cards, change all `text-[10px]` to `text-xs`. There are 8 occurrences in lines 35-61. Example — change:
```html
<span class="text-[10px] font-bold text-on-secondary-fixed-variant bg-on-secondary-fixed/10 px-2 py-0.5 rounded-full" id="stat-images-change">—</span>
```
to:
```html
<span class="text-xs font-bold text-on-secondary-fixed-variant bg-on-secondary-fixed/10 px-2 py-0.5 rounded-full" id="stat-images-change">—</span>
```

Apply `text-[10px]` → `text-xs` to all 8 occurrences in the stats cards section (lines 35-61).

- [ ] **Step 4: Fix uploads/activity grid for mobile**

Change line 66 from:
```html
<div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
```
to:
```html
<div class="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
```

- [ ] **Step 5: Fix table JS template — wrap in overflow-x-auto, enlarge action buttons**

In the `<script>` section, find the table HTML template (around line 141). Change:
```js
uploadsEl.innerHTML = `
        <table class="w-full text-left">
```
to:
```js
uploadsEl.innerHTML = `
        <div class="overflow-x-auto">
        <table class="w-full text-left min-w-[500px]">
```

And close the wrapping div after `</table>`:
```js
        </table>
      </div>
```

Change the table header `text-[10px]` to `text-xs` in lines 144-147.

Change `max-w-32` on filename to `max-w-40 sm:max-w-48`:
```html
<span class="text-sm font-bold truncate max-w-40 sm:max-w-48">${esc(img.filename)}</span>
```

Change action buttons from `w-7 h-7` to `w-9 h-9`:
```html
<button onclick="copyUrl('${esc(img.url)}')" class="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-highest active:bg-surface-container-highest transition-colors">
```
(Same for the other action button.)

- [ ] **Step 6: Fix system status bar for mobile**

Change line 97 from:
```html
<div class="bg-on-surface text-surface rounded-2xl p-6 flex items-center justify-between hard-shadow border-2 border-on-surface">
```
to:
```html
<div class="bg-on-surface text-surface rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between hard-shadow border-2 border-on-surface">
```

- [ ] **Step 7: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 8: Commit**

```bash
git add src/pages/admin.astro
git commit -m "feat: admin dashboard mobile responsiveness and touch targets"
```

---

### Task 5: Dashboard — Responsive padding, touch targets, image card buttons

**Files:**
- Modify: `src/pages/dashboard.astro`

- [ ] **Step 1: Fix main container padding**

Change line 17 from:
```html
<main class="pt-8 pb-24 px-6 max-w-7xl mx-auto space-y-12">
```
to:
```html
<main class="pt-6 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-12">
```

- [ ] **Step 2: Fix account card padding and heading**

Change line 19 from:
```html
<section class="bg-surface border-2 border-on-surface p-8 hard-shadow flex flex-col md:flex-row items-center gap-8">
```
to:
```html
<section class="bg-surface border-2 border-on-surface p-5 sm:p-8 hard-shadow flex flex-col md:flex-row items-center gap-6 sm:gap-8">
```

Change line 27 from:
```html
<h1 class="text-3xl font-headline italic font-black text-on-surface">{user.name}</h1>
```
to:
```html
<h1 class="text-2xl sm:text-3xl font-headline italic font-black text-on-surface">{user.name}</h1>
```

- [ ] **Step 3: Fix upload zone and section padding**

Change line 46 from:
```html
<div class="bg-surface border-2 border-on-surface p-8 hard-shadow">
```
to:
```html
<div class="bg-surface border-2 border-on-surface p-4 sm:p-8 hard-shadow">
```

Change line 49 padding from `p-12` to `p-8 sm:p-12`.

- [ ] **Step 4: Fix API key button gap and sizing**

Change line 107 key name dialog from:
```html
<div class="flex gap-3">
```
to:
```html
<div class="flex flex-col sm:flex-row gap-3">
```

- [ ] **Step 5: Fix image grid JS template — enlarge buttons**

In the `renderImages()` function (around line 296), change the image card buttons from:
```js
<button onclick="copyUrl('${esc(img.url)}')" class="flex-1 text-center py-1 border border-on-surface text-[10px] font-bold uppercase hover:bg-primary hover:text-on-primary transition-colors">Copy URL</button>
<button onclick="deleteImage('${esc(img.id)}')" class="py-1 px-2 border border-error text-error text-[10px] font-bold uppercase hover:bg-error hover:text-on-error transition-colors">
```
to:
```js
<button onclick="copyUrl('${esc(img.url)}')" class="flex-1 text-center py-2.5 border border-on-surface text-xs font-bold uppercase hover:bg-primary hover:text-on-primary active:bg-primary active:text-on-primary transition-colors">Copy URL</button>
<button onclick="deleteImage('${esc(img.id)}')" class="py-2.5 px-3 border border-error text-error text-xs font-bold uppercase hover:bg-error hover:text-on-error active:bg-error active:text-on-error transition-colors">
```

Also change `text-[10px]` on date line 303 to `text-xs`.

- [ ] **Step 6: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 7: Commit**

```bash
git add src/pages/dashboard.astro
git commit -m "feat: dashboard mobile responsiveness and enlarged touch targets"
```

---

### Task 6: Admin Image Library — Filters, pagination, delete button

**Files:**
- Modify: `src/pages/admin/images.astro`

- [ ] **Step 1: Fix main padding and heading**

Change line 14 from:
```html
<main class="flex-1 p-8 space-y-6 bg-surface-container-lowest min-h-[calc(100vh-65px)]">
```
to:
```html
<main class="flex-1 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 bg-surface-container-lowest min-h-[calc(100dvh-65px)]">
```

- [ ] **Step 2: Fix header — stack on mobile**

Change lines 16-26 from:
```html
<div class="flex items-center justify-between">
  <div>
    <h1 class="text-4xl font-headline italic font-black text-on-surface">Image Library</h1>
    <p class="text-on-surface-variant mt-1">Manage, curate, and optimize your global media assets with ease.</p>
  </div>
  <label class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label text-xs font-bold uppercase tracking-wider border-2 border-on-surface hard-shadow hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-2">
```
to:
```html
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <div>
    <h1 class="text-2xl sm:text-4xl font-headline italic font-black text-on-surface">Image Library</h1>
    <p class="text-sm sm:text-base text-on-surface-variant mt-1">Manage, curate, and optimize your global media assets with ease.</p>
  </div>
  <label class="bg-primary text-on-primary px-5 py-3 rounded-lg font-label text-xs font-bold uppercase tracking-wider border-2 border-on-surface hard-shadow hover:-translate-y-1 active:scale-95 transition-all cursor-pointer flex items-center gap-2 self-start sm:self-auto">
```

- [ ] **Step 3: Fix filters — stack on mobile, enlarge touch targets**

Change lines 29-54 from:
```html
<div class="flex items-center justify-between">
  <div class="flex items-center gap-3">
```
to:
```html
<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
  <div class="flex flex-wrap items-center gap-2 sm:gap-3">
```

Change all filter buttons from `px-3 py-1.5 ... text-[10px]` to `px-3 py-2.5 ... text-xs`. There are 5 buttons (All, JPG, PNG, WebP, GIF). For each one change:
```html
<button class="px-3 py-1.5 rounded-full border-2 border-on-surface text-[10px] font-bold uppercase
```
to:
```html
<button class="px-4 py-2.5 rounded-full border-2 border-on-surface text-xs font-bold uppercase
```

Change view toggle buttons from `p-2` to `p-3`:
```html
<button class="p-3 bg-on-surface text-surface" id="view-grid">
```
```html
<button class="p-3 bg-surface hover:bg-surface-container-highest transition-colors" id="view-list">
```

- [ ] **Step 4: Fix image grid columns for small screens**

Change line 57 from:
```html
<div id="images-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
```
to:
```html
<div id="images-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
```

- [ ] **Step 5: Fix JS template — delete button size, pagination, text-[10px]**

In the JS `loadImages` function, change the delete button (around line 113) from:
```js
<button onclick="deleteImage('${esc(img.id)}')" class="text-error hover:text-on-error hover:bg-error w-7 h-7 rounded-full flex items-center justify-center transition-colors">
```
to:
```js
<button onclick="deleteImage('${esc(img.id)}')" class="text-error hover:text-on-error hover:bg-error active:bg-error w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Delete image">
```

Change the type badge `text-[10px]` (line 101) to `text-xs`.

Change the image card info `text-[10px]` (line 105) to `text-xs`.

Change all pagination buttons from `w-9 h-9` to `w-10 h-10` (lines 136-141).

- [ ] **Step 6: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 7: Commit**

```bash
git add src/pages/admin/images.astro
git commit -m "feat: image library mobile filters, touch targets, responsive grid"
```

---

### Task 7: Admin Users — Table scroll, button sizes, responsive layout

**Files:**
- Modify: `src/pages/admin/users.astro`

- [ ] **Step 1: Fix main padding and heading**

Change line 14 from:
```html
<main class="flex-1 p-8 space-y-6 bg-surface-container-lowest min-h-[calc(100vh-65px)]">
```
to:
```html
<main class="flex-1 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 bg-surface-container-lowest min-h-[calc(100dvh-65px)]">
```

- [ ] **Step 2: Fix header — stack on mobile**

Change lines 16-24 from:
```html
<div class="flex items-center justify-between">
  <div>
    <h1 class="text-4xl font-headline italic font-black text-on-surface">User Management</h1>
```
to:
```html
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <div>
    <h1 class="text-2xl sm:text-4xl font-headline italic font-black text-on-surface">User Management</h1>
```

Change the "Invite" button to stack nicely:
```html
<button class="bg-tertiary-fixed text-on-tertiary-fixed px-5 py-3 rounded-lg font-label text-xs font-bold uppercase tracking-wider border-2 border-on-surface hard-shadow hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 self-start sm:self-auto">
```

- [ ] **Step 3: Fix stats grid for mobile**

Change line 48 from:
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-5" id="user-stats">
```
to:
```html
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5" id="user-stats">
```

- [ ] **Step 4: Fix JS template — table scroll wrapper, action buttons, text-[10px]**

In the JS `loadUsers` function, wrap the table in overflow-x-auto. Change line 111:
```js
table.innerHTML = `
      <table class="w-full text-left">
```
to:
```js
table.innerHTML = `
      <div class="overflow-x-auto">
      <table class="w-full text-left min-w-[700px]">
```

And close `</div>` after `</table>`.

Change all table header `text-[10px]` (lines 115-120) to `text-xs`.

Change role badge `text-[10px]` in `getRoleBadge` function (lines 106-108) to `text-xs`:
```js
const getRoleBadge = (role: string, isBanned: number) => {
      if (isBanned) return '<span class="px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-error text-on-error border border-error">Banned</span>';
      if (role === 'admin') return '<span class="px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-error-container text-on-error-container border border-error">Admin</span>';
      return '<span class="px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-secondary-container text-on-secondary-container border border-secondary">User</span>';
    };
```

Change action buttons from `px-3 py-1 ... text-[10px]` to `px-4 py-2 ... text-xs` (lines 141-148):
```js
? `<button onclick="adminAction('${u.id}', 'unban')" class="px-4 py-2 rounded-full text-xs font-bold uppercase border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary active:bg-secondary active:text-on-secondary transition-colors">Unban</button>`
: `<button onclick="adminAction('${u.id}', 'ban')" class="px-4 py-2 rounded-full text-xs font-bold uppercase border border-error text-error hover:bg-error hover:text-on-error active:bg-error active:text-on-error transition-colors">Ban</button>`
```
(Same pattern for Make Admin / Remove Admin buttons.)

Change `text-[10px]` in user row subtitle (line 131) to `text-xs`.

Change pagination buttons to add min-height:
```js
<button onclick="loadPage(${Math.max(1, page - 1)})" class="px-4 py-2.5 border-2 border-on-surface rounded-lg font-label text-xs font-bold bg-surface hover:bg-surface-container-highest active:bg-surface-container-highest transition-colors ${page === 1 ? 'opacity-30' : ''}">Previous</button>
<button onclick="loadPage(${Math.min(data.totalPages, page + 1)})" class="px-4 py-2.5 border-2 border-on-surface rounded-lg font-label text-xs font-bold bg-surface hover:bg-surface-container-highest active:bg-surface-container-highest transition-colors ${page === data.totalPages ? 'opacity-30' : ''}">Next</button>
```

- [ ] **Step 5: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 6: Commit**

```bash
git add src/pages/admin/users.astro
git commit -m "feat: users page mobile scroll, enlarged buttons, responsive header"
```

---

### Task 8: BlogPostPage — Responsive headings, share buttons, related grid

**Files:**
- Modify: `src/components/pages/BlogPostPage.astro`

- [ ] **Step 1: Fix article container padding**

Change line 62 from:
```html
<main class="pt-12 pb-24 px-6 md:px-0">
```
to:
```html
<main class="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 md:px-0">
```

- [ ] **Step 2: Fix article title responsive size**

Change line 69 from:
```html
<h1 class="text-5xl md:text-7xl font-headline italic font-black leading-[1.1] tracking-tight text-on-surface mb-8">
```
to:
```html
<h1 class="text-3xl sm:text-5xl md:text-7xl font-headline italic font-black leading-[1.1] tracking-tight text-on-surface mb-6 sm:mb-8">
```

- [ ] **Step 3: Fix section headings responsive size**

Change line 111 from:
```html
<h2 class="text-3xl font-headline italic font-bold mt-12 mb-4 text-primary">
```
to:
```html
<h2 class="text-2xl sm:text-3xl font-headline italic font-bold mt-8 sm:mt-12 mb-4 text-primary">
```

- [ ] **Step 4: Fix blockquote and callout padding for mobile**

Change line 118 blockquote from `p-8` to `p-5 sm:p-8`.

Change line 128 callout from `p-8` to `p-5 sm:p-8` and `gap-6` to `gap-4 sm:gap-6`.

- [ ] **Step 5: Fix share buttons — add active states for touch**

Change lines 152-159, each share button from:
```html
<button class="w-12 h-12 bg-surface border-2 border-on-surface rounded-full flex items-center justify-center hover:-translate-y-1 hover:rotate-6 transition-all"
```
to:
```html
<button class="w-12 h-12 bg-surface border-2 border-on-surface rounded-full flex items-center justify-center hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all"
```
(Same for all 3 share buttons.)

- [ ] **Step 6: Fix related posts grid — add sm: intermediate**

Change line 172 from:
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
```
to:
```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
```

Change related post category `text-[10px]` (line 193) to `text-xs`.

- [ ] **Step 7: Fix share section padding for mobile**

Change line 145 from:
```html
<section class="mt-20 p-8 bg-secondary-container border-2 border-on-surface rounded-2xl relative">
```
to:
```html
<section class="mt-12 sm:mt-20 p-5 sm:p-8 bg-secondary-container border-2 border-on-surface rounded-2xl relative">
```

- [ ] **Step 8: Build and verify**

Run: `npx astro build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 9: Commit**

```bash
git add src/components/pages/BlogPostPage.astro
git commit -m "feat: blog post mobile typography, touch targets, responsive grids"
```

---

### Task 9: Final build verification and integration commit

**Files:**
- All modified files

- [ ] **Step 1: Full build**

Run: `npx astro build 2>&1 | tail -5`
Expected: `[build] Complete!`

- [ ] **Step 2: Verify no horizontal overflow at 320px**

Run: `npx astro build 2>&1 | grep -i error`
Expected: No errors

- [ ] **Step 3: Commit all remaining changes if any**

```bash
git status
```

If there are uncommitted changes:
```bash
git add -A
git commit -m "feat: comprehensive mobile-first UI/UX polish across all pages"
```
