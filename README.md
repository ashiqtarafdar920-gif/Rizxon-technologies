# Rizxon Technologies — Cinematic Site

A premium, dark, 3D scroll-driven marketing site for Rizxon Technologies, built with
React, React Three Fiber (Three.js) and GSAP ScrollTrigger. A single holographic
"CRM core" evolves in color, form and camera framing as the visitor scrolls through
Real Estate, Restaurant, Travel, Wealth Management and Custom Software Development.

## Stack

- **React 18** + **Vite** — app shell and build tooling
- **Three.js** via **@react-three/fiber** and **@react-three/drei** — the 3D scene
- **GSAP** + **ScrollTrigger** — scroll-driven state and DOM reveal animations
- Plain CSS (no framework) with a token-based design system in `src/styles/index.css`

No backend is required to run the site. The contact form opens the visitor's email
client with a pre-filled message; see "Wiring up the contact form" below to connect
a real backend or form service.

## Project structure

```
rizxon-technologies/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # page composition + scroll driver
    ├── config/site.js           # ← company name, phone, WhatsApp number, email
    ├── data/verticals.js        # ← all CRM copy + 3D "stations" (color/camera cues)
    ├── state/scrollStore.js     # mutable scroll state read by the 3D scene
    ├── hooks/useScrollProgress.js
    ├── components/
    │   ├── canvas/              # Scene, CRMCore, ModulePanels, CameraRig, particles
    │   ├── layout/               # Navbar, Footer, WhatsAppButton
    │   ├── sections/             # Hero, VerticalSection, CustomSoftware, Stats, Process, Contact
    │   └── ui/                   # Button, SectionHeading, Loader
    └── styles/index.css
```

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally on :4173
```

The build is emitted to `dist/`. It is a fully static site — no server-side
rendering or API is required to host it.

## Customize before launch

1. **Company details** — edit `src/config/site.js`:
   - `whatsappNumber` (digits only, country code, no `+`)
   - `email`, `phoneDisplay`, `address`, social links
2. **CRM copy and metrics** — edit `src/data/verticals.js`. Each vertical's `color`
   also drives the 3D core/panel color for that section, so keep colors distinct.
3. **Stats and process steps** — `src/components/sections/Stats.jsx` and the
   `process` array in `src/data/verticals.js`.
4. **Brand colors / type** — CSS custom properties at the top of `src/styles/index.css`
   (`--brand`, `--brass`, `--font-display`, `--font-body`).
5. **Favicon / meta tags** — `public/favicon.svg` and the `<head>` of `index.html`.

## Wiring up the contact form

`src/components/sections/Contact.jsx` currently opens a `mailto:` link with the
visitor's message pre-filled — it works with zero backend but won't give you a
structured lead record. For production, replace the `submit` handler with either:

- A `fetch('/api/enquiries', { method: 'POST', body: ... })` call to your own
  backend, or
- A hosted form service (Formspree, Getform, Basin, etc.) — point the `fetch`
  at their endpoint and keep the same field names.

The WhatsApp button (`WhatsAppButton.jsx` and the hero/contact CTAs) needs no
backend — it deep-links to `wa.me` using `whatsappNumber` from `site.js`.

## Performance notes

- The 3D `<Canvas>` is lazy-loaded (`React.lazy`) and mounted after an idle
  callback, so it never blocks first paint of the hero text.
- `dpr` is capped (1 on mobile, 1.5 on desktop) and drei's `PerformanceMonitor`
  drops to `dpr=1` automatically if frame times degrade.
- Particle count, the floor grid, and pointer-parallax are all disabled below
  a 768px viewport width — mobile gets the same story, simpler geometry.
- `prefers-reduced-motion: reduce` disables camera parallax, reduces core
  distortion to a static amount, and drops DOM transform-based reveals to
  opacity-only fades.
- Vite's `manualChunks` splits `three`, `@react-three/*`, and `gsap` into
  separate cacheable chunks from your app code.

## Deployment

This is a static Vite build — deploy the `dist/` folder to any static host.

### Vercel
```bash
npm i -g vercel
vercel --prod
```
Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
Or connect the repo in the Netlify dashboard with build command `npm run build`
and publish directory `dist`.

### Cloudflare Pages
Build command: `npm run build`. Build output directory: `dist`. Node version: 18+.

### Any static host (S3 + CloudFront, GitHub Pages, Nginx, etc.)
Run `npm run build` and upload the contents of `dist/` as your site root. If
hosting under a sub-path (e.g. GitHub Pages project sites), set `base` in
`vite.config.js` to match.

## Browser support

Targets evergreen Chrome, Safari, Firefox and Edge with WebGL2. There is no
WebGL fallback UI beyond the dark gradient placeholder shown before the
canvas mounts — if you need to support browsers with WebGL disabled, add a
capability check around `<CanvasRoot />` in `App.jsx` and render a static
hero image instead.
