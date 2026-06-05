# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the project

This is a static HTML project with no build step. Open files directly in a browser or use any static file server:

```bash
npx serve .          # serves on http://localhost:3000
# or
python3 -m http.server 8080
```

The `motion` package in `node_modules` is only used as a CDN reference — the actual import is via `esm.sh` in the HTML (`import { animate, stagger, inView } from 'https://esm.sh/motion@12.40.0'`). No bundler or build command is needed.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Main landing page — La Miga Dorada bakery storefront |
| `teclado.html` | Separate interactive Three.js keyboard experiment |
| `PRODUCT.md` | Brand brief, target users, design principles, and anti-references |

Both HTML files are self-contained: all CSS is in `<style>` tags, all JS in `<script>` tags. There is no external `.js` or `.css` file to edit.

## Architecture of index.html

The page is a single-file landing page with three layers:

1. **CSS custom properties** (`--bg`, `--primary`, `--accent`, etc.) defined on `:root` using `oklch()` color space. All colors and radii are tokens — change them at the top to retheme the whole page.

2. **HTML sections** in order: `nav` → `hero` → `.marquee-section` → `#productos` → `#nosotros` → `#resenas` → `.cta-section` → `footer`. Section IDs are used as scroll targets and by the Motion `inView` hook.

3. **JS module** at the bottom of `<body>` handles:
   - Nav glassmorphism on scroll (`nav.scrolled` class)
   - Mobile burger menu toggle
   - Hero entrance animations (run once on load)
   - Scroll-triggered animations for products, pillars, about visual, and reviews — each gated by a `*Animated` boolean so they only fire once
   - Filter tabs that show/hide `.product-card` elements by `data-cat` attribute (`pastelillos`, `galletas`, `especiales`)
   - `window.orderProduct(name)` — opens WhatsApp with a pre-filled message to `wa.me/1234567890`

All animations respect `prefers-reduced-motion`: elements start visible (opacity not set) when the user has reduced motion enabled; the JS only sets `opacity: 0` as the initial state when motion is allowed.

## Brand constraints (from PRODUCT.md)

- Primary audience: mobile-first, Instagram/TikTok users 15+
- Goal: visitor sees catalog → gets hungry → places WhatsApp order
- Avoid: generic AI templates (cream/sand palettes), corporate bakery aesthetic, Victorian typography
- Design principles: product is the hero, energy over filler, WCAG AA minimum contrast
