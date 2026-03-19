# Copilot Instructions for gano-jewelers

## Project Overview

This is a **Next.js 15 (TypeScript)** single-page marketing website for **GANO Jewelers** — a private jeweler specializing in custom engagement rings, diamond sourcing, and Rolex sourcing. The site is a single-page layout with scroll-reveal animations and a luxury dark aesthetic.

## Tech Stack

- **Framework:** Next.js (latest) with the App Router (`app/` directory)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS v2 (JIT mode) + custom CSS in `app/globals.css`
- **Fonts:** Cormorant Garamond (headings) and Montserrat (body) via Google Fonts
- **Runtime:** Node.js

## Repository Layout

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata and global CSS import
│   ├── page.tsx            # Main page — composes all section components
│   ├── globals.css         # All custom CSS: animations, theme classes, component styles
│   └── components/
│       ├── Header.tsx      # Sticky navigation bar with logo and contact button
│       ├── Hero.tsx        # Full-screen hero section with sparkle animations
│       ├── Trust.tsx       # Trust indicators / social proof bar
│       ├── Story.tsx       # Brand story section with imagery
│       ├── Products.tsx    # Product showcase grid
│       ├── Reviews.tsx     # Client reviews section
│       ├── Services.tsx    # Services list rows
│       ├── Contact.tsx     # Contact CTA with buttons (email + Instagram links)
│       └── ScrollReveal.tsx # Client component wrapper for IntersectionObserver reveal
├── src/
│   └── components/
│       └── Reviews.tsx     # Legacy reviews component (unused; active version is app/components/Reviews.tsx)
├── public/                 # Static assets (images, SVGs, icons)
├── index.html              # Static HTML prototype (not used by Next.js build)
├── next.config.js          # Next.js config (image formats: avif, webp)
├── tailwind.config.js      # Tailwind config with custom brand colors
├── tsconfig.json           # TypeScript config (strict, bundler module resolution)
├── postcss.config.js       # PostCSS config for Tailwind
└── package.json            # Scripts: dev, build, start
```

## Brand Design Tokens

All components use these brand colors (defined in `tailwind.config.js` and `globals.css`):

| Token | Value | Usage |
|---|---|---|
| `luxury-black` | `#0B0B0B` | Page background |
| `luxury-gold` | `#D4AF37` | Accents, borders, headings |
| `luxury-white` | `#F8F8F8` | Body text |

Custom CSS classes for components (hover effects, transitions, animations) live in `app/globals.css`. When adding new component styles, add them there rather than inline.

## Build & Development Commands

Always run `npm install` first if `node_modules/` is missing.

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Type-check and build for production
npm run build

# Start production server (requires build first)
npm start
```

There are **no tests** and **no lint scripts** configured. TypeScript compilation errors are surfaced during `npm run build`. Fix all TypeScript errors before considering a change complete.

## Architecture Notes

- The App Router is used (`app/` directory). All components that use browser APIs (like `IntersectionObserver` or `useState`) must include `'use client';` at the top of the file.
- `ScrollReveal.tsx` is a `'use client'` wrapper component. Wrap any section that should animate on scroll with `<ScrollReveal>` in `page.tsx`.
- There are no API routes, server actions, or database connections — this is a purely static/presentational site.
- Images are stored in `public/` and referenced with paths like `/image-name.jpg`. Next.js `<Image>` component is preferred over `<img>` for performance.
- The `src/components/Reviews.tsx` file is a legacy artifact. All active components are under `app/components/`.

## Validation Checklist

Before submitting changes:
1. Run `npm run build` — it must complete with zero errors.
2. Verify TypeScript strict-mode compliance (no implicit `any`, no type errors).
3. Ensure new components that use hooks or browser APIs have `'use client';` at the top.
4. New brand-specific CSS classes belong in `app/globals.css`; use existing Tailwind utilities where possible.
