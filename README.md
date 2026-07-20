# Hashim Tech — Next.js Website

A modern, high-performance agency website built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Why Next.js?

| Feature | Benefit |
|---------|---------|
| **SEO** | Server-side rendering (SSR) + static generation (SSG) delivers fully-rendered HTML to search engines |
| **Performance** | Automatic code splitting, image optimization, and prefetching |
| **Routing** | File-based routing with zero configuration |
| **Images** | Built-in `<Image>` component with lazy loading and optimization |
| **Analytics** | Built-in Core Web Vitals reporting |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts & metadata
  page.tsx            # Home page composing all sections
  globals.css          # Global styles & CSS variables
components/
  sections/            # Page sections (Hero, Services, etc.)
  ui/                  # Reusable UI components (ScrollReveal, etc.)
hooks/                 # Custom React hooks
lib/                   # Utility functions
public/                # Static assets
```

## Animations

- **Framer Motion** — Scroll-triggered reveals, staggered entrances, hover effects
- **Counter animation** — Animated statistics with Intersection Observer
- **Floating shapes** — Continuous ambient motion in hero
- **Mobile drawer** — Slide-in menu with spring physics
- **Toast notifications** — Animated form feedback

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono (via next/font)

## License

MIT
