# Hashim Tech — Premium Digital Agency Website

A modern, premium single-page marketing website for Hashim Tech, a digital agency specializing in custom websites, web apps, mobile apps, UI/UX design, branding, and AI integrations.

## Tech Stack

- **React 19** + **Vite 6** — Fast, modern build tooling
- **Tailwind CSS 3** — Utility-first styling with custom neumorphic design tokens
- **Framer Motion** — Smooth, physics-based scroll and hover animations
- **Lucide React** — Clean, consistent iconography
- **Google Fonts** — Inter + Space Grotesk typography

## Design System

### Neumorphic Dark Theme
- **Surface**: `#0B0F1A` (deep navy-black)
- **Surface Light**: `#111827` (card backgrounds)
- **Accent**: `#6366F1` (indigo — trust, innovation)
- **Typography**: Inter (body) + Space Grotesk (headings)

### Key Features
- Soft neumorphic shadows (`neu-raised`, `neu-pressed`, `neu-inset`)
- Tactile buttons with hover lift and active press states
- Cards that feel molded from the background surface
- Inputs carved into the surface with inset shadows
- Generous spacing and editorial typography
- Floating ambient shapes for depth

## Sections

1. **Hero** — Animated headline with floating UI mockups
2. **Services** — 9 service cards with icons and hover reveals
3. **Projects** — 6 featured project cards with tech stacks
4. **Why Choose Us** — Value proposition with stats and reason cards
5. **Process** — 6-step development timeline
6. **Technologies** — Tech stack badges
7. **Testimonials** — 6 client testimonials with ratings
8. **Stats** — Animated counters
9. **CTA** — Conversion-focused call-to-action
10. **Contact** — Form + contact info
11. **Footer** — Full site navigation

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard-navigable focus states
- WCAG AA contrast ratios
- Reduced motion support via `prefers-reduced-motion`
- Skip-to-content pattern

## Performance

- Code splitting with manual chunks (vendor, animation, icons)
- Lazy-loaded scroll animations (viewport-triggered)
- Optimized font loading with `display=swap`
- Minimal bundle footprint

## Getting Started

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

## License

© 2026 Hashim Tech. All rights reserved.
