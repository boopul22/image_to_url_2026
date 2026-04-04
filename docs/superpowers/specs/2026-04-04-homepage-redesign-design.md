---
title: Homepage Redesign — ImageToURL
date: 2026-04-04
status: approved
---

# Homepage Redesign Spec

## Context
ImageToURL is a free image hosting tool. Upload an image, get a permanent CDN-backed URL. Primary audience: casual users (bloggers, students, social media creators).

## Design Decisions
- **Style**: Neo-brutalist refined — keep hard shadows, bold borders, yellow (#FFD600) accents, Space Grotesk/Mono fonts
- **Hero**: Centered, upload-focused (no split layout)
- **Flow**: Hybrid — immediate upload action in hero + story sections below for scrollers
- **File**: `src/components/pages/HomePage.astro` (full rewrite of template, preserve upload JS logic)

## Section Structure (top to bottom)

### 1. Hero — Centered Upload
- Yellow pill badge: "FREE IMAGE HOSTING"
- Headline: "Image to URL in One Click" — "One Click" in yellow highlight
- Subheadline: "Upload any image. Get a permanent, fast link. Share anywhere."
- Centered upload box (reuse existing upload panel logic + states)
- Trust signals row: Global CDN · SSL Encrypted · Permanent Links · Instant

### 2. Stats Bar
- Full-width dark bar (`bg-secondary`)
- 4 stats: "10M+ Images Hosted" · "99.9% Uptime" · "150+ Countries" · "0 Signup Required"

### 3. How It Works (3 Steps)
- Remove stock photos, use icon-based cards with colored backgrounds
- Step 1: Upload (upload icon, tertiary-fixed bg)
- Step 2: We Generate (bolt icon, primary-fixed bg)
- Step 3: Share Anywhere (share icon, secondary-container bg)
- Each step: number badge, icon, title, 1-line description

### 4. Features Grid (6 Cards)
- 3×2 grid of feature cards
- Each: material icon + title + 1-line description + colored bg
- CDN Delivery, No Signup, Permanent Links, SSL Secure, Instant Upload, Auto Resize
- Hard-shadow-hover on each card

### 5. Use Cases (Who It's For)
- 4 persona cards in a row
- Bloggers, Developers, Students, Social Media Creators
- Each: emoji/icon + persona name + 1-line scenario

### 6. Testimonials
- Keep 3 existing testimonials (Alex, Sarah, Jordan)
- Simpler header — just section title, no giant stars
- 3 quote cards with speech bubble tails + avatars

### 7. FAQ Accordion
- 5 questions with expand/collapse
- Is it really free? · Do links expire? · What formats? · Is there an API? · How secure?
- Hard-border accordion items, JS toggle

### 8. Final CTA + Blog Preview
- Full-width yellow CTA banner: "Ready to host your images?" + "Start Uploading — It's Free" button
- Blog preview grid (keep existing 3-post logic)

## i18n
- Add new translation keys to `en.json` for new sections (stats, use cases, FAQ, CTA)
- Other locale files get English fallback (existing fallback mechanism handles this)

## What NOT to change
- Nav component
- Footer component
- Layout component
- Upload JS logic (preserve all upload/copy/error/retry behavior)
- Schema/structured data in frontmatter
- Blog preview data fetching logic
