# Auth + CMS + Blog System - Complete Implementation Reference

> **Purpose:** This document fully describes the authentication, CMS, and blog system built with **Astro + Cloudflare Workers + D1 (SQLite) + R2 (object storage)**. Use it as a blueprint to implement the same system on another site. Every detail - database schemas, API routes, middleware, rendering, SEO - is covered with real code.

---

## Table of Contents

1. [Tech Stack & Architecture](#1-tech-stack--architecture)
2. [Database Schema](#2-database-schema)
3. [Authentication System](#3-authentication-system)
4. [Session Management](#4-session-management)
5. [Middleware & Route Protection](#5-middleware--route-protection)
6. [Role-Based Access Control (RBAC)](#6-role-based-access-control-rbac)
7. [Admin User Management](#7-admin-user-management)
8. [CMS - Posts](#8-cms---posts)
9. [CMS - Categories](#9-cms---categories)
10. [CMS - Media Library](#10-cms---media-library)
11. [CMS - Static Pages](#11-cms---static-pages)
12. [CMS - Activity Log](#12-cms---activity-log)
13. [Blog Rendering (Public)](#13-blog-rendering-public)
14. [SEO & Structured Data](#14-seo--structured-data)
15. [Image Upload System](#15-image-upload-system)
16. [R2 Object Storage Integration](#16-r2-object-storage-integration)
17. [Caching Strategy](#17-caching-strategy)
18. [Security](#18-security)
19. [Environment Variables](#19-environment-variables)
20. [File Structure](#20-file-structure)
21. [Data Migration](#21-data-migration)
22. [Utility Functions](#22-utility-functions)

---

## 1. Tech Stack & Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Astro (SSR mode, `export const prerender = false`) |
| Deployment | Cloudflare Workers (via `@astrojs/cloudflare` adapter) |
| Database | Cloudflare D1 (SQLite) |
| Object Storage | Cloudflare R2 (S3-compatible) |
| Auth Provider | Google OAuth 2.0 with PKCE (custom, no NextAuth) |
| Frontend | Astro components + Tailwind CSS + vanilla JS |
| Rich Text Editor | TipTap (for admin CMS) |
| Internationalization | Custom i18n with locale-prefixed routes (`/en/blog`, `/es/blog`) |

**Key architectural decisions:**
- **No external auth libraries** - OAuth is implemented from scratch using Web Crypto API
- **No ORM** - Raw SQL queries against D1
- **No Astro Content Collections** - All content lives in D1, not markdown files
- **R2 uploads use AWS Signature V4** - Custom implementation, no `@aws-sdk` dependency
- **ISR pattern** - SSR pages with CDN caching headers for edge performance

---

## 2. Database Schema

### 2.1 Auth Tables (`db-schema.sql`)

```sql
-- Users
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,                    -- 21-char alphanumeric (generateId())
  google_id TEXT NOT NULL UNIQUE,         -- Google "sub" claim
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'user',      -- 'user' | 'admin'
  is_banned INTEGER NOT NULL DEFAULT 0,   -- 0 = active, 1 = banned
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Sessions (database-backed, not JWT)
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,                    -- 64-char hex token (32 random bytes)
  user_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,               -- ISO 8601
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);

-- User-uploaded images (the core product feature)
CREATE TABLE IF NOT EXISTS images (
  id TEXT PRIMARY KEY,
  user_id TEXT,                           -- NULL for anonymous uploads
  r2_key TEXT NOT NULL,                   -- R2 object path
  url TEXT NOT NULL,                      -- Public CDN URL
  filename TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  uploaded_via TEXT DEFAULT 'web',        -- 'web' | 'api'
  api_key_id TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_images_user_id ON images(user_id);

-- API keys (currently disabled but schema exists)
CREATE TABLE IF NOT EXISTS api_keys (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  key_hash TEXT NOT NULL UNIQUE,          -- SHA-256 hash of actual key
  key_prefix TEXT NOT NULL,               -- First 8 chars for display
  last_used_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  revoked_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON api_keys(user_id);
CREATE INDEX IF NOT EXISTS idx_api_keys_key_hash ON api_keys(key_hash);

-- Anonymous upload rate limiting
CREATE TABLE IF NOT EXISTS anonymous_uploads (
  id TEXT PRIMARY KEY,
  ip_address TEXT NOT NULL,
  image_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_anon_uploads_ip ON anonymous_uploads(ip_address);
```

### 2.2 CMS Tables (`cms-schema.sql`)

```sql
-- Blog categories
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,              -- URL-safe, auto-generated from name
  color TEXT NOT NULL DEFAULT 'primary',  -- CSS class: 'primary' | 'secondary' | 'tertiary'
  description TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Blog posts
CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',       -- Short summary for listing pages
  content TEXT NOT NULL DEFAULT '{}',     -- JSON (structured) or HTML (TipTap)
  category_id TEXT,                       -- FK to categories
  author_name TEXT NOT NULL DEFAULT '',
  author_role TEXT NOT NULL DEFAULT '',
  author_avatar TEXT NOT NULL DEFAULT '', -- URL to avatar image
  featured INTEGER NOT NULL DEFAULT 0,   -- Boolean: highlight on blog listing
  status TEXT NOT NULL DEFAULT 'draft',   -- 'draft' | 'published' | 'archived'
  cover_image TEXT,                       -- URL to cover/hero image
  icon_fallback TEXT,                     -- Material icon name when no cover image
  icon_bg TEXT,                           -- Background CSS class for icon display
  read_time TEXT NOT NULL DEFAULT '',     -- "X min read" - auto-calculated
  meta_title TEXT,                        -- SEO title override
  meta_description TEXT,                  -- SEO description override
  related_slugs TEXT NOT NULL DEFAULT '[]',  -- JSON array of related post slugs
  faq_items TEXT NOT NULL DEFAULT '[]',      -- JSON array of {question, answer}
  published_at TEXT,                      -- Set on first publish
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_category_id ON posts(category_id);

-- CMS media library (separate from user-uploaded images)
CREATE TABLE IF NOT EXISTS media (
  id TEXT PRIMARY KEY,
  r2_key TEXT NOT NULL,                   -- R2 storage path: cms/{folder}/{id}.{ext}
  url TEXT NOT NULL,                      -- Public URL
  filename TEXT NOT NULL,
  alt_text TEXT NOT NULL DEFAULT '',
  size_bytes INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  folder TEXT NOT NULL DEFAULT 'general', -- 'general' | 'blog' | 'pages'
  uploaded_by TEXT,                       -- User ID of admin who uploaded
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_media_folder ON media(folder);

-- Static pages (About, Terms, Privacy, etc.)
CREATE TABLE IF NOT EXISTS pages (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,              -- Route: /p/{slug}
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '{}',     -- HTML content
  status TEXT NOT NULL DEFAULT 'draft',   -- 'draft' | 'published'
  meta_title TEXT,
  meta_description TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);

-- Audit trail for all CMS actions
CREATE TABLE IF NOT EXISTS activity_log (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  action TEXT NOT NULL,                   -- 'create_post', 'publish_post', etc.
  entity_type TEXT NOT NULL,              -- 'post', 'category', 'media', 'page', 'system'
  entity_id TEXT,
  entity_title TEXT,
  details TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON activity_log(created_at);
```

### 2.3 Running Schema Migrations

```bash
# Apply auth tables
npx wrangler d1 execute YOUR_DB_NAME --file=src/lib/db-schema.sql --remote

# Apply CMS tables
npx wrangler d1 execute YOUR_DB_NAME --file=src/lib/cms-schema.sql --remote
```

---

## 3. Authentication System

### 3.1 Overview

Google OAuth 2.0 with PKCE (Proof Key for Code Exchange). No NextAuth, no external libraries. Uses only Web Crypto API and `fetch`.

### 3.2 OAuth Flow

```
User clicks Login
  -> GET /api/auth/login
     1. Generate random state (16 bytes hex)
     2. Generate PKCE code_verifier (32 random bytes, base64url-encoded)
     3. Generate code_challenge = SHA-256(code_verifier), base64url-encoded
     4. Set temporary cookies: google_oauth_state, google_oauth_code_verifier (10 min TTL)
     5. Redirect to Google OAuth URL

User authenticates with Google
  -> Google redirects to GET /api/auth/callback?code=...&state=...
     1. Validate state matches cookie (CSRF protection)
     2. Exchange authorization code for access_token (POST to Google token endpoint, with code_verifier)
     3. Fetch user info from Google userinfo endpoint
     4. Check if first user -> auto-assign admin role
     5. Upsert user in DB (INSERT ... ON CONFLICT DO UPDATE)
     6. Create session (random 64-char hex token, 30-day expiry, stored in DB)
     7. Set session cookie (HttpOnly, 30 days)
     8. Clear OAuth cookies
     9. Redirect to homepage with cache-bust param

User clicks Logout
  -> GET /api/auth/logout
     1. Delete session from DB
     2. Clear session cookie
     3. Redirect to /
```

### 3.3 Crypto Utilities (`src/lib/crypto.ts`)

```typescript
// Generate random hex token
export function generateRandomToken(bytes = 32): string {
  const buffer = new Uint8Array(bytes);
  crypto.getRandomValues(buffer);
  return Array.from(buffer)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// SHA-256 hash (hex output)
export async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// SHA-256 hash (base64url output - for PKCE)
export async function sha256Base64url(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(hash)));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Generate alphanumeric ID (for database primary keys)
export function generateId(size = 21): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => chars[b % chars.length])
    .join('');
}
```

### 3.4 Auth Functions (`src/lib/auth.ts`)

```typescript
import { generateRandomToken, sha256Base64url } from './crypto';

// Generate CSRF state parameter
export function generateState(): string {
  return generateRandomToken(16);
}

// Generate PKCE code verifier (base64url-encoded random bytes)
export function generateCodeVerifier(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const base64 = btoa(String.fromCharCode(...bytes));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Generate PKCE code challenge from verifier
export async function generateCodeChallenge(verifier: string): Promise<string> {
  return sha256Base64url(verifier);
}

// Build Google OAuth authorization URL
export function buildGoogleAuthURL(
  state: string,
  codeChallenge: string,
  clientId: string,
  redirectUri: string,
): string {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid profile email',
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    access_type: 'online',
    prompt: 'consent',
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

// Exchange authorization code for access token
export async function exchangeCodeForTokens(
  code: string,
  codeVerifier: string,
  clientId: string,
  clientSecret: string,
  redirectUri: string,
): Promise<{ access_token: string }> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
      code_verifier: codeVerifier,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }
  return res.json();
}

// Fetch user profile from Google
export async function fetchGoogleUser(accessToken: string): Promise<{
  sub: string;
  name: string;
  email: string;
  picture: string;
}> {
  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch user info: ${res.status}`);
  return res.json();
}

// Get redirect URI based on environment
export function getRedirectUri(isDev: boolean): string {
  if (isDev) return 'http://localhost:4321/api/auth/callback';
  return 'https://YOUR-DOMAIN.com/api/auth/callback';
}
```

### 3.5 Login Route (`src/pages/api/auth/login.ts`)

```typescript
export const prerender = false;

import type { APIRoute } from 'astro';
import {
  generateState, generateCodeVerifier, generateCodeChallenge,
  buildGoogleAuthURL, getRedirectUri,
} from '../../../lib/auth';
import { getEnv } from '../../../lib/env';

export const GET: APIRoute = async ({ locals }) => {
  const env = getEnv(locals);
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const redirectUri = getRedirectUri(import.meta.env.DEV);
  const url = buildGoogleAuthURL(state, codeChallenge, env.GOOGLE_CLIENT_ID, redirectUri);

  const isSecure = import.meta.env.PROD;
  const domain = isSecure ? '; Domain=.YOUR-DOMAIN.com' : '';
  const cookieFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=600${isSecure ? '; Secure' : ''}${domain}`;

  return new Response(null, {
    status: 302,
    headers: [
      ['Location', url],
      ['Set-Cookie', `google_oauth_state=${state}; ${cookieFlags}`],
      ['Set-Cookie', `google_oauth_code_verifier=${codeVerifier}; ${cookieFlags}`],
    ],
  });
};
```

### 3.6 Callback Route (`src/pages/api/auth/callback.ts`)

```typescript
export const prerender = false;

import type { APIRoute } from 'astro';
import { exchangeCodeForTokens, fetchGoogleUser, getRedirectUri } from '../../../lib/auth';
import { createSession } from '../../../lib/session';
import { generateId } from '../../../lib/crypto';
import { getDB } from '../../../lib/db';
import { getEnv } from '../../../lib/env';

export const GET: APIRoute = async ({ request, url, cookies, redirect, locals }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  // Parse cookies from raw header as fallback (some environments don't parse correctly)
  const rawCookie = request.headers.get('cookie') || '';
  const parseCookie = (name: string) => {
    const match = rawCookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
    return match ? match[1] : undefined;
  };

  const storedState = cookies.get('google_oauth_state')?.value || parseCookie('google_oauth_state');
  const codeVerifier = cookies.get('google_oauth_code_verifier')?.value || parseCookie('google_oauth_code_verifier');

  // Validate CSRF state
  if (!code || !state || !storedState || !codeVerifier || state !== storedState) {
    return new Response('Invalid OAuth state', { status: 400 });
  }

  try {
    const env = getEnv(locals);
    const db = getDB(locals);
    const redirectUri = getRedirectUri(import.meta.env.DEV);

    // Exchange code for tokens
    const tokens = await exchangeCodeForTokens(
      code, codeVerifier, env.GOOGLE_CLIENT_ID, env.GOOGLE_CLIENT_SECRET, redirectUri,
    );

    // Fetch user info from Google
    const googleUser = await fetchGoogleUser(tokens.access_token);

    // First user gets admin role
    const countResult = await db
      .prepare('SELECT COUNT(*) as count FROM users')
      .first<{ count: number }>();
    const isFirstUser = (countResult?.count ?? 0) === 0;

    // Upsert user (create if new, update name/email/avatar if returning)
    const userId = generateId();
    await db
      .prepare(
        `INSERT INTO users (id, google_id, email, name, avatar_url, role)
         VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(google_id) DO UPDATE SET
           email = excluded.email,
           name = excluded.name,
           avatar_url = excluded.avatar_url,
           updated_at = datetime('now')`,
      )
      .bind(userId, googleUser.sub, googleUser.email, googleUser.name,
            googleUser.picture, isFirstUser ? 'admin' : 'user')
      .run();

    // Get actual user ID (might be existing user due to upsert)
    const user = await db
      .prepare('SELECT id FROM users WHERE google_id = ?')
      .bind(googleUser.sub)
      .first<{ id: string }>();

    if (!user) return new Response('Failed to create user', { status: 500 });

    // Create session
    const sessionToken = await createSession(db, user.id);

    // Set session cookie and clear OAuth cookies
    const isSecure = import.meta.env.PROD;
    const domain = isSecure ? '; Domain=.YOUR-DOMAIN.com' : '';
    const maxAge = 30 * 24 * 60 * 60; // 30 days
    const sessionFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${isSecure ? '; Secure' : ''}${domain}`;
    const clearFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=0${isSecure ? '; Secure' : ''}${domain}`;

    return new Response(null, {
      status: 302,
      headers: [
        ['Location', `/?_=${Date.now()}`],  // Cache-bust redirect
        ['Set-Cookie', `session=${sessionToken}; ${sessionFlags}`],
        ['Set-Cookie', `google_oauth_state=; ${clearFlags}`],
        ['Set-Cookie', `google_oauth_code_verifier=; ${clearFlags}`],
        ['Cache-Control', 'no-store'],
      ],
    });
  } catch (err: any) {
    console.error('OAuth callback error:', err);
    return new Response('Authentication failed: ' + (err.message || 'Unknown error'), { status: 500 });
  }
};
```

### 3.7 Logout Route (`src/pages/api/auth/logout.ts`)

```typescript
export const prerender = false;

import type { APIRoute } from 'astro';
import { deleteSession } from '../../../lib/session';
import { getDB } from '../../../lib/db';

export const GET: APIRoute = async ({ request, locals }) => {
  const rawCookie = request.headers.get('cookie') || '';
  const match = rawCookie.match(/(?:^|;\s*)session=([^;]*)/);
  const token = match ? match[1] : null;

  if (token) {
    try {
      const db = getDB(locals);
      await deleteSession(db, token);
    } catch {
      // Ignore DB errors on logout
    }
  }

  const isSecure = import.meta.env.PROD;
  const clearFlags = `HttpOnly; SameSite=Lax; Path=/; Max-Age=0${isSecure ? '; Secure' : ''}`;

  return new Response(null, {
    status: 302,
    headers: [
      ['Location', '/'],
      ['Set-Cookie', `session=; ${clearFlags}`],
    ],
  });
};
```

---

## 4. Session Management

### 4.1 Session Module (`src/lib/session.ts`)

```typescript
import { generateRandomToken } from './crypto';

export interface SessionUser {
  id: string;
  googleId: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'user' | 'admin';
}

const SESSION_DURATION_DAYS = 30;

export async function createSession(db: D1Database, userId: string): Promise<string> {
  const token = generateRandomToken(32); // 64-char hex
  const expiresAt = new Date(
    Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000
  ).toISOString();

  await db
    .prepare('INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)')
    .bind(token, userId, expiresAt)
    .run();

  return token;
}

export async function getSession(db: D1Database, token: string): Promise<SessionUser | null> {
  const row = await db
    .prepare(
      `SELECT u.id, u.google_id, u.name, u.email, u.avatar_url, u.role, u.is_banned, s.expires_at
       FROM sessions s
       JOIN users u ON s.user_id = u.id
       WHERE s.id = ?`
    )
    .bind(token)
    .first<{
      id: string; google_id: string; name: string; email: string;
      avatar_url: string; role: string; is_banned: number; expires_at: string;
    }>();

  if (!row) return null;
  if (new Date(row.expires_at) < new Date()) return null;  // Expired
  if (row.is_banned) return null;  // Banned users can't have valid sessions

  return {
    id: row.id,
    googleId: row.google_id,
    name: row.name,
    email: row.email,
    avatarUrl: row.avatar_url,
    role: row.role as 'user' | 'admin',
  };
}

export async function deleteSession(db: D1Database, token: string): Promise<void> {
  await db.prepare('DELETE FROM sessions WHERE id = ?').bind(token).run();
}
```

### 4.2 How Sessions Work

- **Storage:** Database (D1), not JWT or in-memory
- **Token:** 64-character hex string (32 cryptographically random bytes)
- **Cookie name:** `session`
- **Duration:** 30 days
- **Cookie flags:** `HttpOnly; SameSite=Lax; Path=/; Secure` (Secure only in prod)
- **Validation:** On every request via middleware - joins sessions + users tables, checks expiry and ban status

---

## 5. Middleware & Route Protection

### 5.1 Complete Middleware (`src/middleware.ts`)

```typescript
import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/session';
import { getDB } from './lib/db';

export const onRequest = defineMiddleware(async ({ request, cookies, locals, redirect }, next) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // --- URL normalization & redirects ---

  // Redirect bare / to default locale
  if (path === '/') return redirect('/en/', 301);

  // Redirect root-level pages to locale-prefixed versions
  const rootToLocaleRedirects = ['/blog', '/features', '/pricing', '/docs', '/privacy', '/terms'];
  if (rootToLocaleRedirects.includes(path)) return redirect(`/en${path}`, 301);

  // Trailing slash removal (except locale roots like /en/)
  if (path !== '/' && path.endsWith('/') && !path.match(/^\/[a-z]{2}\/$/) && path !== '/404/') {
    const cleanPath = path.replace(/\/+$/, '');
    return redirect(cleanPath + url.search, 301);
  }

  // --- Database & session resolution ---

  let db: D1Database | null = null;
  try { db = getDB(locals); } catch { /* D1 not available */ }

  if (db) {
    const token = cookies.get('session')?.value;
    if (token) {
      try {
        const user = await getSession(db, token);
        if (user) locals.user = user;
      } catch { /* Invalid session */ }
    }
  }

  // --- Route protection ---

  // Dashboard: requires any authenticated user
  if ((path.startsWith('/dashboard') || path.startsWith('/api/dashboard/')) && !locals.user) {
    if (path.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401, headers: { 'Content-Type': 'application/json' },
      });
    }
    return redirect('/api/auth/login', 302);
  }

  // Admin: requires admin role
  if (path.startsWith('/admin') || path.startsWith('/api/admin/')) {
    if (!locals.user || locals.user.role !== 'admin') {
      if (path.startsWith('/api/')) {
        return new Response(JSON.stringify({ error: 'Forbidden' }), {
          status: 403, headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response('Forbidden', { status: 403 });
    }
  }

  // --- Process request ---
  const response = await next();

  // --- Security headers (all responses) ---
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // --- Cache headers for public HTML pages ---
  if (!path.startsWith('/api/') && !path.startsWith('/admin') && !path.startsWith('/dashboard')
      && response.headers.get('content-type')?.includes('text/html')) {
    if (locals.user) {
      // Logged-in users: never cache (personalized nav)
      response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    } else {
      // Anonymous: cache at CDN edge
      response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
      response.headers.set('Vary', 'Cookie');
    }
  }

  return response;
});
```

### 5.2 Route Protection Summary

| Route Pattern | Auth Required | Role Required | Unauthenticated Behavior |
|--------------|---------------|---------------|--------------------------|
| `/dashboard*` | Yes | Any | Redirect to `/api/auth/login` |
| `/api/dashboard/*` | Yes | Any | 401 JSON response |
| `/admin*` | Yes | `admin` | 403 HTML response |
| `/api/admin/*` | Yes | `admin` | 403 JSON response |
| `/blog*`, `/` | No | None | Public access |
| `/api/upload` | No | None | Rate-limited for anonymous |

---

## 6. Role-Based Access Control (RBAC)

### Roles

| Role | Capabilities |
|------|-------------|
| `user` | Upload images, manage own images, view dashboard |
| `admin` | Everything a user can do, plus: manage all users (ban/unban/promote/demote), access CMS, manage posts/categories/media/pages, view system stats, view activity log |

### First User Auto-Admin

The very first user to sign up automatically gets the `admin` role:

```typescript
const countResult = await db.prepare('SELECT COUNT(*) as count FROM users').first<{ count: number }>();
const isFirstUser = (countResult?.count ?? 0) === 0;
// ... bind role: isFirstUser ? 'admin' : 'user'
```

### Self-Modification Prevention

Admins cannot modify their own account via the admin panel:

```typescript
if (userId === locals.user.id) {
  return new Response(JSON.stringify({ error: 'Cannot modify your own account' }), { status: 400 });
}
```

---

## 7. Admin User Management

### API: `GET /api/admin/users`

Query params: `page` (default 1), `search` (name/email filter)

Returns paginated user list with image count per user.

### API: `PATCH /api/admin/users`

Body: `{ userId: string, action: string }`

| Action | Effect |
|--------|--------|
| `ban` | Sets `is_banned = 1`, deletes all user sessions (immediate lockout) |
| `unban` | Sets `is_banned = 0` |
| `make_admin` | Sets `role = 'admin'` |
| `remove_admin` | Sets `role = 'user'` |

### API: `GET /api/admin/stats`

Returns system-wide statistics:

```json
{
  "totalUsers": 42,
  "totalImages": 1250,
  "totalStorage": 523567890,
  "activeApiKeys": 0,
  "recentUploads": [...],
  "totalPosts": 15,
  "totalMedia": 30,
  "totalPages": 3
}
```

---

## 8. CMS - Posts

### 8.1 TypeScript Types (`src/lib/cms.ts`)

```typescript
export interface PostContent {
  intro: string;
  sections: Array<{ heading: string; number: string; body: string }>;
  blockquote?: string;
  callout?: { title: string; body: string };
  outro: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: PostContent;      // Parsed JSON content (legacy format)
  htmlContent: string;        // TipTap HTML content (modern format)
  categoryId: string | null;
  categoryName: string | null;
  categoryColor: string | null;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  coverImage: string | null;
  iconFallback: string | null;
  iconBg: string | null;
  readTime: string;
  metaTitle: string | null;
  metaDescription: string | null;
  relatedSlugs: string[];
  faqItems: FAQItem[];
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
```

### 8.2 Content Format Detection

Posts support two content formats stored in the same `content` column:

```typescript
// Detect if content is HTML (TipTap) or JSON (legacy structured)
export function isHtmlContent(raw: string): boolean {
  if (!raw) return false;
  const trimmed = raw.trim();
  if (trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && typeof parsed === 'object' && 'intro' in parsed) return false; // JSON format
    } catch {}
  }
  return true; // HTML format
}
```

**JSON format** (legacy, from migration):
```json
{
  "intro": "Opening paragraph...",
  "sections": [
    { "heading": "Section Title", "number": "01", "body": "Section content..." }
  ],
  "blockquote": "Pull quote text...",
  "callout": { "title": "Pro Tip", "body": "Tip content..." },
  "outro": "Closing paragraph..."
}
```

**HTML format** (modern, from TipTap editor):
Raw HTML stored directly in the `content` column.

### 8.3 Post API Endpoints

#### List Posts: `GET /api/admin/cms/posts`

Query params:
- `page` (default: 1)
- `limit` (default: 20)
- `status` - `all` | `published` | `draft` | `archived`
- `category` - category ID
- `search` - searches title and excerpt

Response:
```json
{
  "success": true,
  "posts": [...],
  "total": 42,
  "page": 1,
  "totalPages": 3
}
```

#### Create Post: `POST /api/admin/cms/posts`

Body:
```json
{
  "title": "Post Title",
  "slug": "custom-slug",
  "excerpt": "Short summary",
  "content": "<h2>HTML content from TipTap</h2><p>...</p>",
  "categoryId": "abc123",
  "authorName": "John Doe",
  "authorRole": "Developer",
  "authorAvatar": "https://...",
  "featured": false,
  "status": "draft",
  "coverImage": "https://...",
  "iconFallback": "article",
  "iconBg": "bg-primary-fixed",
  "metaTitle": "SEO Title Override",
  "metaDescription": "SEO description override",
  "relatedSlugs": ["other-post-slug"],
  "faqItems": [{ "question": "Q?", "answer": "A." }]
}
```

Behavior:
- If `slug` is omitted, auto-generated from title
- If slug already exists, appends `-{random6chars}`
- `readTime` is auto-calculated from content
- If `status` is `published`, sets `published_at` to now
- Logs activity

Response: `{ "success": true, "id": "...", "slug": "..." }`

#### Get Single Post: `GET /api/admin/cms/posts/[id]`

Returns full post data including unpublished/archived.

#### Update Post: `PUT /api/admin/cms/posts/[id]`

Body: Same fields as create (all optional). Uses nullish coalescing - only updates provided fields.

If changing `status` to `published` and `published_at` is null, sets it to now (first-publish timestamp).

#### Archive Post: `DELETE /api/admin/cms/posts`

Body: `{ "id": "..." }`

Sets `status = 'archived'` (soft delete, never hard-deletes posts).

#### Publish Post: `POST /api/admin/cms/posts/[id]/publish`

Sets `status = 'published'`, sets `published_at` if not already set.

#### Unpublish Post: `POST /api/admin/cms/posts/[id]/unpublish`

Sets `status = 'draft'`.

### 8.4 Draft/Publish Workflow

```
New Post -> status: 'draft' (default)
  |
  v
Publish -> status: 'published', published_at: NOW (if first publish)
  |
  v
Unpublish -> status: 'draft' (published_at preserved)
  |
  v
Archive -> status: 'archived' (soft delete)
```

Only `status = 'published'` posts appear on the public blog.

### 8.5 Read Time Calculation

```typescript
// For HTML content (TipTap)
export function calculateReadTimeFromHtml(html: string): string {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// For JSON content (legacy)
export function calculateReadTime(content: PostContent): string {
  let words = 0;
  const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;
  words += countWords(content.intro || '');
  for (const section of content.sections || []) {
    words += countWords(section.heading || '');
    words += countWords(section.body || '');
  }
  if (content.blockquote) words += countWords(content.blockquote);
  if (content.callout) {
    words += countWords(content.callout.title || '');
    words += countWords(content.callout.body || '');
  }
  words += countWords(content.outro || '');
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// Auto-detect format and calculate
export function calculateReadTimeAuto(raw: string): string {
  if (isHtmlContent(raw)) return calculateReadTimeFromHtml(raw);
  return calculateReadTime(parseContentJson(raw));
}
```

### 8.6 Slug Generation

```typescript
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')   // Remove special chars
    .replace(/\s+/g, '-')            // Spaces -> dashes
    .replace(/-+/g, '-')             // Multiple dashes -> single
    .replace(/^-|-$/g, '');           // Trim leading/trailing dashes
}
```

Uniqueness enforced at API level: if slug exists, append `-{random6chars}`.

### 8.7 Database Row Mapping

```typescript
export function mapPostRow(row: any): Post {
  const rawContent = row.content || '';
  const html = isHtmlContent(rawContent);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    content: html ? { intro: '', sections: [], outro: '' } : parseContentJson(rawContent),
    htmlContent: html ? rawContent : '',
    categoryId: row.category_id || null,
    categoryName: row.category_name || null,   // From JOIN
    categoryColor: row.category_color || null,  // From JOIN
    authorName: row.author_name || '',
    authorRole: row.author_role || '',
    authorAvatar: row.author_avatar || '',
    featured: !!row.featured,
    status: row.status || 'draft',
    coverImage: row.cover_image || null,
    iconFallback: row.icon_fallback || null,
    iconBg: row.icon_bg || null,
    readTime: row.read_time || '',
    metaTitle: row.meta_title || null,
    metaDescription: row.meta_description || null,
    relatedSlugs: parseJsonArray(row.related_slugs),
    faqItems: parseJsonFaq(row.faq_items),
    publishedAt: row.published_at || null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
```

---

## 9. CMS - Categories

### Types

```typescript
export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;        // 'primary' | 'secondary' | 'tertiary' (maps to CSS classes)
  description: string | null;
  sortOrder: number;
  postCount?: number;    // Computed from subquery
  createdAt: string;
  updatedAt: string;
}
```

### API Endpoints

#### List: `GET /api/admin/cms/categories`

Returns all categories with post counts (excluding archived posts).

#### Create: `POST /api/admin/cms/categories`

Body: `{ "name": "...", "color": "primary", "description": "..." }`

- Name is required, must be unique
- Slug auto-generated from name
- Duplicate slugs rejected (400)

#### Update: `PUT /api/admin/cms/categories`

Body: `{ "id": "...", "name": "...", "color": "...", "description": "...", "sortOrder": 0 }`

- If name changes, slug is regenerated

#### Delete: `DELETE /api/admin/cms/categories`

Body: `{ "id": "..." }`

- **Prevented if any non-archived posts use this category**
- Returns: `{ "error": "Cannot delete: 5 posts use this category" }`

### Public Query

```typescript
export async function getCategories(db: D1Database): Promise<Category[]> {
  const rows = await db.prepare(
    `SELECT c.*, (SELECT COUNT(*) FROM posts WHERE category_id = c.id) as post_count
     FROM categories c ORDER BY c.sort_order ASC, c.name ASC`
  ).all();
  // ... map rows to Category[]
}
```

---

## 10. CMS - Media Library

### API Endpoints

#### List: `GET /api/admin/cms/media`

Query params: `page` (1), `limit` (24), `folder` (`all|general|blog|pages`), `search`

#### Upload: `POST /api/admin/cms/media`

FormData:
- `file` (required) - Image file
- `folder` (optional, default: `general`) - `general` | `blog` | `pages`
- `alt_text` (optional)

Validations:
- **Allowed types:** JPEG, PNG, WebP, GIF, SVG
- **Max size:** 10 MB
- **Storage path:** `cms/{folder}/{id}.{ext}`

Process:
1. Validate file type and size
2. Generate unique ID
3. Upload to R2 (`cms/{folder}/{id}.{ext}`)
4. Insert record into `media` table
5. Log activity
6. Return `{ success, id, url, filename }`

#### Update Metadata: `PUT /api/admin/cms/media/[id]`

Body: `{ "altText": "...", "folder": "blog" }`

#### Delete: `DELETE /api/admin/cms/media`

Body: `{ "id": "..." }`

Deletes from both R2 and D1.

---

## 11. CMS - Static Pages

Static pages render at `/p/{slug}` (e.g., `/p/about`, `/p/terms`).

### API Endpoints

#### List: `GET /api/admin/cms/pages`

Returns all pages (all statuses).

#### Create: `POST /api/admin/cms/pages`

Body: `{ "title", "slug", "content" (HTML), "status", "metaTitle", "metaDescription" }`

#### Get: `GET /api/admin/cms/pages/[id]`

Returns full page with content.

#### Update: `PUT /api/admin/cms/pages/[id]`

Partial update - only provided fields are changed.

#### Delete: `DELETE /api/admin/cms/pages`

Body: `{ "id": "..." }` - Hard delete (unlike posts which soft-delete).

### Public Rendering (`src/pages/p/[slug].astro`)

```astro
---
export const prerender = false;

import Layout from '../../layouts/Layout.astro';
import { getDB } from '../../lib/db';

const { slug } = Astro.params;
const db = getDB(Astro.locals);
const row = await db
  .prepare("SELECT * FROM pages WHERE slug = ? AND status = 'published'")
  .bind(slug)
  .first();

if (!row) return new Response(null, { status: 404 });

// ISR caching
Astro.response.headers.set('CDN-Cache-Control', 'public, max-age=600, stale-while-revalidate=86400');
Astro.response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

const page = row as any;
---

<Layout title={`${page.meta_title || page.title} - YourSite`}>
  <main>
    <article>
      <h1>{page.title}</h1>
      <div set:html={page.content} />
    </article>
  </main>
</Layout>
```

---

## 12. CMS - Activity Log

Every CMS action is logged with user attribution.

### Logging Function

```typescript
export async function logActivity(
  db: D1Database,
  params: {
    userId: string;
    userName: string;
    action: string;       // 'create_post', 'publish_post', 'archive_post', etc.
    entityType: string;   // 'post', 'category', 'media', 'page', 'system'
    entityId?: string;
    entityTitle?: string;
    details?: string;
  },
): Promise<void> {
  const id = generateId();
  await db
    .prepare(
      `INSERT INTO activity_log (id, user_id, user_name, action, entity_type, entity_id, entity_title, details)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(id, params.userId, params.userName, params.action,
          params.entityType, params.entityId || null,
          params.entityTitle || null, params.details || null)
    .run();
}
```

### Action Types Used

| Action | Entity Type | When |
|--------|------------|------|
| `create_post` | post | New post created |
| `update_post` | post | Post edited |
| `publish_post` | post | Draft -> Published |
| `unpublish_post` | post | Published -> Draft |
| `archive_post` | post | Post archived |
| `create_category` | category | New category |
| `update_category` | category | Category edited |
| `delete_category` | category | Category removed |
| `upload_media` | media | File uploaded |
| `update_media` | media | Alt text/folder changed |
| `delete_media` | media | File deleted |
| `create_page` | page | New static page |
| `update_page` | page | Page edited |
| `delete_page` | page | Page removed |
| `migrate_blog` | system | Data migration ran |

### API: `GET /api/admin/cms/activity`

Query params: `page` (1), `limit` (20)

Returns paginated activity log, newest first.

---

## 13. Blog Rendering (Public)

### 13.1 Blog Listing Page

Route: `/blog` or `/{locale}/blog`

```astro
---
export const prerender = false;

import { getDB } from '../../lib/db';
import { getPublishedPosts, getCategories } from '../../lib/cms';

// ISR: Cache at CDN edge for 5 min
Astro.response.headers.set('CDN-Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
Astro.response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

const db = getDB(Astro.locals);
const { posts } = await getPublishedPosts(db, { limit: 50 });
const categories = await getCategories(db);

const featuredPost = posts.find((p) => p.featured);
const otherPosts = posts.filter((p) => p !== featuredPost);
---
```

Features:
- Featured post displayed prominently (2-column span)
- Grid layout: 1 col mobile, 2 col tablet, 3 col desktop
- Search bar + category filter buttons (client-side filtering)
- Each card shows: cover image (or icon fallback), category badge, title, excerpt, author, read time
- Newsletter signup section

### 13.2 Blog Post Detail Page

Route: `/blog/{slug}` or `/{locale}/blog/{slug}`

```astro
---
export const prerender = false;

import { getDB } from '../../lib/db';
import { getPostBySlug, getRelatedPosts } from '../../lib/cms';

const { slug } = Astro.params;
const db = getDB(Astro.locals);
const post = await getPostBySlug(db, slug as string);

if (!post) return Astro.redirect('/blog'); // 404 -> redirect to listing

// ISR: Cache at CDN edge for 10 min
Astro.response.headers.set('CDN-Cache-Control', 'public, max-age=600, stale-while-revalidate=86400');
Astro.response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

const relatedPosts = await getRelatedPosts(db, post.relatedSlugs);
---
```

Rendering logic:
- If `post.htmlContent` exists -> render as raw HTML with `set:html`
- Otherwise -> render structured JSON: intro, numbered sections with headings, blockquote (after section 1), callout (after section 2), outro
- FAQ section: expandable `<details>` elements
- Share section: social sharing buttons
- Related posts grid

### 13.3 Public Database Queries

```typescript
// Get published posts with filtering
export async function getPublishedPosts(
  db: D1Database,
  opts: { limit?: number; offset?: number; categoryId?: string; search?: string } = {},
): Promise<{ posts: Post[]; total: number }> {
  // Builds dynamic WHERE clause
  // Joins categories for name/color
  // Orders by published_at DESC, created_at DESC
}

// Get single post by slug (published only)
export async function getPostBySlug(db: D1Database, slug: string): Promise<Post | null> {
  const row = await db.prepare(
    `SELECT p.*, c.name as category_name, c.color as category_color
     FROM posts p LEFT JOIN categories c ON p.category_id = c.id
     WHERE p.slug = ? AND p.status = 'published'`
  ).bind(slug).first();
  return row ? mapPostRow(row) : null;
}

// Get related posts by slugs
export async function getRelatedPosts(db: D1Database, slugs: string[]): Promise<Post[]> {
  if (!slugs.length) return [];
  const placeholders = slugs.map(() => '?').join(',');
  const rows = await db.prepare(
    `SELECT p.*, c.name as category_name, c.color as category_color
     FROM posts p LEFT JOIN categories c ON p.category_id = c.id
     WHERE p.slug IN (${placeholders}) AND p.status = 'published'`
  ).bind(...slugs).all();
  return (rows.results || []).map(mapPostRow);
}
```

---

## 14. SEO & Structured Data

### 14.1 Layout Meta Tags (`src/layouts/Layout.astro`)

The Layout component accepts these props and renders all meta tags:

```typescript
interface Props {
  title?: string;
  description?: string;
  ogImage?: string;      // Path or URL for og:image
  ogType?: string;       // 'website' | 'article'
  noindex?: boolean;
  schema?: object | object[];  // JSON-LD structured data
  noHreflang?: boolean;
  breadcrumbs?: { name: string; url: string }[];
}
```

Renders:
- `<title>`, `<meta name="description">`
- `<link rel="canonical">`
- `<meta name="robots" content="noindex, nofollow">` (conditional)
- Open Graph: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`, `og:locale`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Hreflang tags for all locales
- JSON-LD structured data (Organization + WebSite sitewide, plus page-specific schemas)

### 14.2 Blog Post Schema

```typescript
// BlogPosting schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.coverImage || undefined,
  "datePublished": post.publishedAt,
  "dateModified": post.updatedAt || post.publishedAt,
  "author": { "@type": "Person", "name": post.authorName },
  "publisher": { "@id": "https://YOUR-DOMAIN.com/#organization" },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://YOUR-DOMAIN.com/blog/${slug}`
  }
};

// FAQPage schema (if post has FAQ items)
const faqSchema = post.faqItems?.length ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": post.faqItems.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
} : null;
```

### 14.3 Sitewide Schemas

Always present on every page:
- **Organization** schema (name, url, logo)
- **WebSite** schema (with SearchAction potential action)
- **BreadcrumbList** (auto-generated or manually provided)

---

## 15. Image Upload System

### 15.1 Public Upload: `POST /api/upload`

Open to both authenticated and anonymous users.

```
Request: FormData with 'file' field
Response: { success, data: { id, key, url, filename, size, mimetype, created_at } }
```

**Anonymous rate limiting:**
- Limit: 5 uploads per IP address (lifetime, not per-session)
- Tracked in `anonymous_uploads` table
- IP extracted from: `cf-connecting-ip` > `x-forwarded-for` > `0.0.0.0`

**Origin validation:**
- Only allows requests from own domain (CORS-like check on `origin` and `referer` headers)
- Rejects all external API calls

**File handling:**
- Allowed: JPEG, PNG, WebP, GIF, SVG
- Max: 10 MB
- Anonymous -> stored in `anonymous/` R2 folder
- Authenticated -> stored in `uploads/` R2 folder
- 8-char random alphanumeric ID

### 15.2 User Image Management: `/api/dashboard/images`

- `GET` - List user's own images (paginated, 20/page)
- `DELETE` - Delete user's own image (verifies ownership via `user_id`)

---

## 16. R2 Object Storage Integration

### 16.1 Custom R2 Client (`src/lib/r2.ts`)

Uses **AWS Signature V4** authentication, zero dependencies (no `@aws-sdk`). Built entirely on Web Crypto API and `fetch`.

```typescript
// Upload file to R2
export async function uploadToR2(opts: {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  key: string;           // e.g., "cms/blog/abc123.jpg"
  body: Uint8Array;
  contentType: string;
}): Promise<void> {
  // Constructs S3-compatible PUT request with AWS Sig V4 authorization
  const host = `${bucket}.${accountId}.r2.cloudflarestorage.com`;
  const url = `https://${host}/${key}`;
  // ... HMAC-SHA256 signing chain, canonical request, authorization header
  await fetch(url, { method: 'PUT', headers: {...}, body });
}

// Delete file from R2
export async function deleteFromR2(opts: {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  key: string;
}): Promise<void> {
  // Same signing process, DELETE method
  // Ignores 404 errors (file already gone)
}
```

### 16.2 R2 Key Patterns

| Upload Type | R2 Key Pattern | Example |
|------------|---------------|---------|
| User upload (authenticated) | `uploads/{id}.{ext}` | `uploads/a1b2c3d4.jpg` |
| Anonymous upload | `anonymous/{id}.{ext}` | `anonymous/x9y8z7w6.png` |
| CMS media | `cms/{folder}/{id}.{ext}` | `cms/blog/AbCdEfGhIjK.webp` |

### 16.3 Public URL

```typescript
const publicUrl = env.R2_PUBLIC_URL
  ? `${env.R2_PUBLIC_URL}/${key}`
  : `https://${bucket}.${accountId}.r2.cloudflarestorage.com/${key}`;
```

---

## 17. Caching Strategy

### ISR (Incremental Static Regeneration) Pattern

All public pages use SSR with CDN caching headers, giving static-site speed with dynamic content:

| Route | CDN Cache | Stale-While-Revalidate | Browser Cache |
|-------|----------|----------------------|---------------|
| Blog listing (`/blog`) | 5 min | 1 hour | Must revalidate |
| Blog post (`/blog/[slug]`) | 10 min | 24 hours | Must revalidate |
| Static page (`/p/[slug]`) | 10 min | 24 hours | Must revalidate |
| Public HTML (anonymous) | 5 min | 24 hours | 5 min |
| Public HTML (logged-in) | Never | - | Private, no-store |
| API routes | Never | - | - |
| Admin pages | Never | - | - |

Headers used:
```
CDN-Cache-Control: public, max-age=600, stale-while-revalidate=86400
Cache-Control: public, max-age=0, must-revalidate
Vary: Cookie
```

---

## 18. Security

### 18.1 Authentication Security

| Feature | Implementation |
|---------|---------------|
| PKCE (RFC 7636) | SHA-256 code challenge prevents authorization code interception |
| CSRF protection | Random state parameter validated against cookie |
| HttpOnly cookies | Session cookie inaccessible to JavaScript (prevents XSS theft) |
| Secure flag | Cookies only sent over HTTPS in production |
| SameSite=Lax | Prevents CSRF attacks from third-party sites |
| Session expiry | 30-day TTL checked on every request |
| Ban enforcement | Banned users immediately lose all sessions |

### 18.2 Security Headers (All Responses)

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 18.3 Upload Security

- File type validation (whitelist: JPEG, PNG, WebP, GIF, SVG)
- File size limit (10 MB)
- Origin validation (blocks external API access)
- Anonymous rate limiting (5 per IP)
- Ownership verification on delete

### 18.4 Admin Safety

- Self-modification prevention (can't ban/demote yourself)
- All actions logged to activity_log
- Soft-delete for posts (archived, not deleted)
- Category deletion blocked if posts reference it

---

## 19. Environment Variables

### Required

| Variable | Purpose |
|----------|---------|
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth 2.0 client secret |
| `DB` | Cloudflare D1 database binding (configured in `wrangler.toml`) |

### Required for Media/Image Upload

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |
| `R2_ACCESS_KEY_ID` | R2 S3-compatible API access key |
| `R2_SECRET_ACCESS_KEY` | R2 S3-compatible API secret key |
| `R2_BUCKET_NAME` | R2 bucket name |
| `R2_PUBLIC_URL` | Public URL for R2 bucket (custom domain or default) |

### Optional

| Variable | Purpose |
|----------|---------|
| `AUTH_SECRET` | Reserved for future use (session signing) |
| `R2_ENDPOINT` | Custom R2 endpoint (if needed) |

### TypeScript Type Definitions (`src/env.d.ts`)

```typescript
/// <reference types="astro/client" />

type D1Database = import('@cloudflare/workers-types').D1Database;

declare namespace App {
  interface Locals {
    runtime: {
      env: {
        DB: D1Database;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        AUTH_SECRET: string;
        CLOUDFLARE_ACCOUNT_ID: string;
        R2_ACCESS_KEY_ID: string;
        R2_SECRET_ACCESS_KEY: string;
        R2_BUCKET_NAME: string;
        R2_ENDPOINT: string;
        R2_PUBLIC_URL: string;
      };
    };
    user?: {
      id: string;
      googleId: string;
      name: string;
      email: string;
      avatarUrl: string;
      role: 'user' | 'admin';
    };
    locale: import('./i18n/config').Locale;
  }
}
```

### Cloudflare Configuration (`wrangler.toml`)

```toml
name = "your-project-name"
compatibility_date = "2026-03-15"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "your-db-name"
database_id = "your-database-uuid"
```

### Database & Environment Access (`src/lib/db.ts`, `src/lib/env.ts`)

```typescript
// src/lib/db.ts
import { env } from 'cloudflare:workers';

export function getDB(_locals?: App.Locals): D1Database {
  return env.DB as unknown as D1Database;
}

// src/lib/env.ts
import { env } from 'cloudflare:workers';

export function getEnv(_locals?: App.Locals): Record<string, string> {
  return env as unknown as Record<string, string>;
}
```

---

## 20. File Structure

```
src/
├── lib/
│   ├── auth.ts              # OAuth flow: state, PKCE, Google URL, token exchange, user fetch
│   ├── session.ts           # Session CRUD: create, get (with user JOIN), delete
│   ├── crypto.ts            # generateRandomToken, sha256Hex, sha256Base64url, generateId
│   ├── cms.ts               # Types, slug generation, read time, content parsing, DB queries
│   ├── r2.ts                # R2 upload/delete with AWS Sig V4 (zero dependencies)
│   ├── db.ts                # getDB() helper
│   ├── env.ts               # getEnv() helper
│   ├── db-schema.sql        # Auth tables: users, sessions, images, api_keys, anonymous_uploads
│   └── cms-schema.sql       # CMS tables: posts, categories, media, pages, activity_log
├── middleware.ts             # Session resolution, route protection, security headers, caching
├── env.d.ts                 # TypeScript type definitions
├── layouts/
│   └── Layout.astro         # Base layout: meta tags, OG, Twitter, hreflang, JSON-LD schemas
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.ts     # Initiate Google OAuth
│   │   │   ├── callback.ts  # Handle OAuth callback, create session
│   │   │   └── logout.ts    # Delete session, clear cookie
│   │   ├── upload.ts        # Public image upload (auth + anon)
│   │   ├── dashboard/
│   │   │   ├── images.ts    # User's own images (GET, DELETE)
│   │   │   └── api-keys.ts  # API keys (currently disabled)
│   │   └── admin/
│   │       ├── users.ts     # User management (GET list, PATCH ban/unban/role)
│   │       ├── stats.ts     # System statistics
│   │       └── cms/
│   │           ├── posts.ts         # GET list, POST create, DELETE archive
│   │           ├── posts/
│   │           │   ├── [id].ts      # GET single, PUT update
│   │           │   └── [id]/
│   │           │       ├── publish.ts   # POST publish
│   │           │       └── unpublish.ts # POST unpublish
│   │           ├── categories.ts    # GET, POST, PUT, DELETE
│   │           ├── media.ts         # GET list, POST upload, DELETE
│   │           ├── media/[id].ts    # PUT update metadata
│   │           ├── pages.ts         # GET list, POST create, DELETE
│   │           ├── pages/[id].ts    # GET single, PUT update
│   │           ├── activity.ts      # GET activity log
│   │           └── migrate.ts       # POST one-time data migration
│   ├── blog.astro                   # Blog listing (root)
│   ├── blog/[slug].astro            # Blog post detail (root)
│   ├── [locale]/blog.astro          # Blog listing (localized)
│   ├── [locale]/blog/[slug].astro   # Blog post detail (localized)
│   ├── p/[slug].astro               # Static pages
│   └── admin/cms/
│       ├── index.astro              # CMS dashboard
│       ├── posts/
│       │   ├── index.astro          # Posts list
│       │   ├── new.astro            # Create post
│       │   └── edit/[id].astro      # Edit post
│       ├── categories.astro         # Categories management
│       ├── media.astro              # Media library
│       └── pages/index.astro        # Static pages management
├── components/
│   └── pages/
│       ├── BlogPage.astro           # Blog listing component
│       └── BlogPostPage.astro       # Blog post detail component
└── data/
    └── blog-posts.ts                # Legacy hardcoded blog data (deprecated)
```

---

## 21. Data Migration

A one-time migration endpoint to move hardcoded blog data from a TypeScript file into the database:

### API: `POST /api/admin/cms/migrate`

```typescript
// Only runs if posts table is empty
const existing = await db.prepare('SELECT COUNT(*) as count FROM posts').first();
if (existing && existing.count > 0) {
  return new Response(JSON.stringify({ error: 'Posts already exist. Migration skipped.' }), { status: 400 });
}

// 1. Extract unique categories from blog data
// 2. Insert categories with auto-generated slugs
// 3. Insert posts with published status and parsed dates
// 4. Log migration activity
```

This is optional - only needed if you have existing blog data in a file that needs to move to the database.

---

## 22. Utility Functions

### ID Generation

```typescript
// Database IDs: 21-char alphanumeric
generateId()        // -> "AbCdEfGhIjKlMnOpQrStU"
generateId(6)       // -> "xY7z3q" (for slug disambiguation)

// Session tokens: 64-char hex
generateRandomToken(32)  // -> "a1b2c3d4...64chars"

// Upload IDs: 8-char lowercase alphanumeric
// (separate function in upload.ts)
```

### Content Parsing

```typescript
// Parse JSON content safely
parseContentJson(raw: string): PostContent
// Detect HTML vs JSON
isHtmlContent(raw: string): boolean
// Auto-calculate read time based on format
calculateReadTimeAuto(raw: string): string
```

### Slug Generation

```typescript
generateSlug("My Blog Post Title!") // -> "my-blog-post-title"
generateSlug("Hello  World---Test") // -> "hello-world-test"
```

---

## Quick Start Checklist

To implement this system on a new Astro + Cloudflare site:

1. **Set up Cloudflare:**
   - Create D1 database
   - Create R2 bucket with public access
   - Configure `wrangler.toml` with D1 binding

2. **Run schema migrations:**
   - Apply `db-schema.sql` (auth tables)
   - Apply `cms-schema.sql` (CMS tables)

3. **Set up Google OAuth:**
   - Create Google Cloud project
   - Enable Google OAuth 2.0
   - Add authorized redirect URI: `https://YOUR-DOMAIN/api/auth/callback`
   - Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` as secrets

4. **Set up R2 credentials:**
   - Create R2 API token with read/write access
   - Set `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_PUBLIC_URL`, `CLOUDFLARE_ACCOUNT_ID`

5. **Implement files in order:**
   - `src/lib/crypto.ts` (utilities)
   - `src/lib/db.ts` + `src/lib/env.ts` (accessors)
   - `src/lib/r2.ts` (storage)
   - `src/lib/auth.ts` (OAuth)
   - `src/lib/session.ts` (sessions)
   - `src/lib/cms.ts` (CMS types + queries)
   - `src/middleware.ts` (route protection)
   - `src/env.d.ts` (TypeScript types)
   - Auth API routes (`login.ts`, `callback.ts`, `logout.ts`)
   - CMS API routes
   - Blog rendering pages
   - Admin UI pages

6. **First login:** The first user to authenticate gets `admin` role automatically.
