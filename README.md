# Aqbobek Lyceum — Official Website

Official website of **«Ақбөбек» лицейі / Aqbobek Lyceum** (Aktobe, Kazakhstan) —
IT-oriented lyceum-boarding school for gifted children (grades 7–11).

Fact source: [a1s.kz](https://a1s.kz/). Visual/structural reference: [ais.edu.kz](https://ais.edu.kz/).
All code is original; no source copied from either site.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (design tokens in `src/app/globals.css` via `@theme`)
- **Motion** (`motion/react`) — restrained transform/opacity animation only
- **Fully static export** (`output: "export"`) — no server, no env vars, no lock-in

## Requirements

- Node.js 20+ (developed on Node 24), npm 10+

## Get the code

```bash
git clone https://github.com/arturbaimuratov1-sys/aqbobek-lycuem.git
cd aqbobek-lycuem
npm install
npm run dev      # http://localhost:3000
```

Portable: edit with OpenCode, Cursor, VS Code, Muse Spark, Claude, GPT, or
manually. No AI-environment dependencies, no lock-in.

## Environment variables

None. The site is fully static — no API keys, no secrets, no `.env` files.

## Production build

```bash
npm run build     # static site in ./out
npx serve out     # preview the production build locally
```

Type-check and lint:

```bash
npx tsc --noEmit
npm run lint
```

## Project structure

```
src/
  app/                 # routes: /, /about, /education, /teachers,
                       # /admissions, /campus, /news, /news/[slug], /contact
  components/          # SiteHeader, SiteFooter, HomeHero, NewsTicker,
                       # DirectorPortrait, Intro/IntroGate, Reveal, …
  content/kk/          # ALL site content (Kazakh) — teachers, news, programs,
                       # campus, admissions, director, site facts
  lib/                 # cn(), home-news feed helper
public/
  brand/               # aqbobek-lyceum-logo.png
  director/            # director-1/2/3.jpg
  images/hero|teachers # school photography
docs/
  PLAN.md              # implementation plan
  ASSETS.md            # official asset checklist (what to replace / provide)
```

**Content rule:** never hard-code editorial content in components — put it in
`src/content/kk/*.ts`. The `kk/` namespace means Russian (`ru/`) and English
(`en/`) dictionaries can be added later without refactoring components.

## GitHub setup

Already connected — clone and push normally:

```bash
git clone https://github.com/arturbaimuratov1-sys/aqbobek-lycuem.git
cd aqbobek-lycuem
# ...make changes...
git add -A
git commit -m "describe the change"
git push origin main
```

## Cloudflare Pages deployment (from this repository)

No adapter, no Worker, no extra config — the project uses Next.js static
export (`output: "export"` in `next.config.ts`, `images.unoptimized`), so
Cloudflare Pages serves the `out/` directory directly. Local development is
unaffected (`npm run dev` works as usual).

> Important: create a **Pages** project, not a Workers project. A Workers /
> OpenNext setup looks for `.next/standalone/...` and will fail — this site
> needs no SSR, server actions, API routes, or Worker runtime.

1. Cloudflare Dashboard → Workers & Pages → Create → **Pages** → Connect to Git
2. Select `arturbaimuratov1-sys/aqbobek-lycuem`
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Output directory: `out`
   - Node version: 20+ (set `NODE_VERSION=20` env var if the default is older)
4. Save and Deploy. Every push to `main` redeploys automatically.

Custom domain: Pages project → Custom domains → attach (e.g. `a1s.kz`).

**Manual upload alternative** (same output, no Git integration):

```bash
npm run build
npx wrangler pages deploy out --project-name=aqbobek-lyceum
```

## Key interactions

- **Intro** (`IntroGate`): 3.4s brand overlay, first visit per session only
  (`sessionStorage`). Page renders behind it — intro never blocks loading.
- **News ticker** (`NewsTicker`): pure-CSS loop, pauses on hover/focus,
  collapses to a static list under `prefers-reduced-motion`.
- **Director portrait** (`DirectorPortrait`): 1→2→3→1, one advance per
  pointer-enter (mouse) or tap (touch). Missing files are skipped gracefully.

## License

Private school website. Photography belongs to Aqbobek Lyceum — see `docs/ASSETS.md`.
