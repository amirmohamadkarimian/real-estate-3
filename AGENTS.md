# VERRA Properties — Dev Environment

A premium real-estate marketing site built with **Vite + React + TypeScript + Tailwind CSS v3**.

## Running locally

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

The Vite dev server runs inside the container on port 5173, mapped to host port **3000**.
Live reload is active — edits to `src/` appear in the preview without a rebuild.

## Stack

- **Framework:** Vite 5 + React 18 + TypeScript
- **Styling:** Tailwind CSS v3 (config in `tailwind.config.js`, base styles in `src/index.css`)
- **Fonts:** Manrope (loaded via Google Fonts in `index.html`)
- **No backend** — this is a static marketing/landing page.

## Project structure

```
src/
  App.tsx                  # Page composition
  main.tsx                 # React entry
  index.css               # Tailwind layers + global styles
  components/              # Header, Hero, About, Services, FeaturedProperties, CTA, Footer, Logo, icons
  data/properties.ts       # Property listing data
  hooks/useReveal.ts        # IntersectionObserver scroll-reveal hook
public/favicon.svg
```

## Design system

- **Nocturnal Navy:** `#0A1128` — primary background / text
- **Auric Gold:** `#C5A059` — accents / actions
- **Ethereal White:** `#F8F9FA` — main background
- **Mist Gray:** `#E9ECEF` — secondary UI

Typography uses Manrope. Images are sourced from Unsplash and lazy-loaded.

## Adding properties

Edit `src/data/properties.ts` — each entry has `name`, `location`, `price`, `image`, and an optional `featured` flag (the featured card renders larger).

## Notes

- The header is transparent over the hero and becomes a solid navy bar on scroll.
- The featured-properties carousel is a CSS scroll-snap track with arrow buttons; it is swipeable on touch devices.
- All animations respect `prefers-reduced-motion`.
