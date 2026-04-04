# Mobile-First UI/UX Polish — Design Spec

**Date:** 2026-04-03
**Approach:** B — Mobile-First Polish (fix + enhance within existing design system)
**Scope:** All public pages, dashboard, admin pages, blog

## 1. Touch Targets & Interactive Elements

All interactive elements must meet 44x44px minimum touch target.

### Changes:
- **Admin action buttons** (images, users, CMS posts): `px-3 py-1 text-[10px]` → `px-4 py-2.5 text-xs`
- **Dashboard image card buttons** (copy/delete): same enlargement
- **Pagination buttons**: `w-9 h-9` / `w-7 h-7` → `w-10 h-10` minimum
- **Admin filter pills** (image library type filters): `py-1.5` → `py-2.5`
- **View toggle buttons** (image library): `p-2` → `p-3`
- **CMS "Add Section" button**: `px-3 py-1 text-[10px]` → `px-4 py-2.5 text-xs`
- **All small icon-only buttons**: ensure `min-w-[44px] min-h-[44px]`

### Active/Focus States:
- Add `active:scale-95` to all buttons for touch feedback
- Add `focus-visible:ring-2 focus-visible:ring-primary` where missing
- Replace hover-only animations with `hover:X active:X` pairs

## 2. Responsive Grids & Layout

### Grid Breakpoints:
Add `sm:` (640px) intermediate to all grids that jump from 1 → 3 columns:
- How-It-Works: `grid sm:grid-cols-2 md:grid-cols-3` (already done in earlier fix)
- Testimonials: same (already done)
- Blog grid: same (already done)
- Features devtools: same (already done)
- Pricing: same with Pro card `sm:col-span-2 md:col-span-1` (already done)

### Admin Tables:
- Wrap all `<table>` in `<div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">`
- Add `min-w-[600px]` on table element to prevent column crushing
- Consider card-based layout for mobile on users/posts tables (stretch goal)

### Admin Layout:
- Main content area: add `max-w-6xl` to prevent ultra-wide stretching
- Padding: `p-4 sm:p-6 md:p-8` progressive padding
- Filter sections: `flex flex-col sm:flex-row flex-wrap gap-3`

### Public Pages:
- All sections: `px-4 sm:px-6` (already done in earlier fix)
- Hero section: `100dvh` (already done)

## 3. Typography Scale

### Responsive Type Ramp:
- Page titles (admin): `text-2xl sm:text-3xl md:text-4xl`
- Section headings: `text-xl sm:text-2xl md:text-3xl`
- Card headings: `text-lg sm:text-xl`
- Blog article body headings: `text-2xl sm:text-3xl md:text-4xl`

### Minimum Font Sizes:
- Eliminate `text-[10px]` usage — minimum `text-xs` (12px)
- Label text: `text-xs` minimum
- Button text: `text-xs` minimum (not `text-[10px]`)

## 4. Navigation Enhancements

### Mobile Menu:
- Add CSS transition for smooth open/close (max-height or transform)
- Increase touch targets in mobile nav links

### Nav Bar:
- Already fixed: `bg-background/95` on mobile (no blur), smaller padding
- Add `active:scale-95` to Sign In button

## 5. Performance

### Already Completed:
- Grain overlay hidden on mobile (`display: none` < 768px)
- Nav backdrop-blur disabled on mobile
- Google Fonts trimmed (unused weights removed, Material Symbols pinned)

### Remaining:
- Add `sizes` attribute to hero/feature images
- Verify all below-fold images have `loading="lazy"`
- Blog post images: ensure `decoding="async"` present

## 6. Admin Sidebar

- Mobile toggle: `w-12 h-12` → `w-14 h-14` with `active:scale-90`
- Backdrop: add fade transition
- Nav items: ensure all have `active:` feedback states

## Files to Modify

### Public pages (already partially done):
- `src/components/Nav.astro`
- `src/components/Footer.astro`
- `src/components/pages/HomePage.astro`
- `src/components/pages/FeaturesPage.astro`
- `src/components/pages/PricingPage.astro`
- `src/components/pages/BlogPage.astro`
- `src/components/pages/BlogPostPage.astro`
- `src/components/pages/DocsPage.astro`
- `src/layouts/Layout.astro`
- `src/styles/global.css`

### Admin/Dashboard pages (new work):
- `src/pages/dashboard.astro`
- `src/pages/admin.astro`
- `src/pages/admin/images.astro`
- `src/pages/admin/users.astro`
- `src/pages/admin/cms/posts/index.astro`
- `src/pages/admin/cms/posts/new.astro`
- `src/pages/admin/cms/posts/[id].astro`
- `src/components/AdminSidebar.astro`

## Success Criteria

1. All buttons/links pass 44x44px touch target test
2. No horizontal overflow on any page at 320px viewport width
3. All grids have smooth intermediate breakpoint (no 1→3 column jumps)
4. No text smaller than 12px (except decorative elements)
5. All interactive elements have visible active/focus states
6. Admin tables scrollable on mobile without page-level horizontal scroll
7. Typography scales smoothly across breakpoints
