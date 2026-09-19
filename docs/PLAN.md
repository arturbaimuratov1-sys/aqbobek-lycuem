# Aqbobek Lyceum — Implementation Plan

> Source of fact: https://a1s.kz/ (primary). Visual/structural reference: https://ais.edu.kz/.
> No copied code, no redrawn logo, no fabricated photos.

**Reading this as:** institutional school site for parents and prospective families,
trust-first calm language, editorial institutional design (navy + paper, serif display + neutral sans).

**Dials:** VARIANCE 4 · MOTION 3–4 · DENSITY 4.

## Stack

- Next.js 15 App Router + TypeScript (strict) + Tailwind CSS v4 + `motion` (transform/opacity only)
- `output: "export"` — fully static, portable to Cloudflare Pages, GitHub, any static host
- No server code, no env vars, no dependency on any AI environment

## Design tokens

| Token | Value |
|---|---|
| Navy / ink | `#0A1F3C` (deep `#071426` for intro/footer) |
| Paper | `#FFFFFF` + parchment `#F7F5F0` |
| Accent (single) | Muted gold `#C9A227`, used sparingly |
| Lines | `#E5E2DA` hairlines, grouping via space/dividers — not card grids everywhere |
| Display | PT Serif (institutional serif, Kazakh Cyrillic coverage) |
| Body/UI | Inter (full Kazakh glyph coverage: қ ғ ң ұ ү і һ ә ө) |
| Radius | One scale: `2px` editorial sharp (buttons pill only if documented — decision: sharp) |

Motion: quick, subtle, interruptible; `prefers-reduced-motion` respected everywhere.

## File structure

```
src/
  app/
    layout.tsx  page.tsx
    about/ education/ teachers/ admissions/ campus/ news/ news/[slug]/ contact/
  components/
    SiteHeader.tsx  SiteFooter.tsx  MobileMenu.tsx
    Intro/            (IntroGate — sessionStorage, ~3.5s, preloads hero)
    Reveal.tsx        (scroll reveal, transform+opacity)
    NewsTicker.tsx    (CSS loop, pause on hover/focus, reduced-motion safe)
    DirectorPortrait.tsx  (1→2→3→1 on pointer-enter, tap fallback)
    Hero.tsx  SectionHeading.tsx  Stat.tsx  TeacherCard.tsx  NewsCard.tsx  CtaBand.tsx
  content/kk/
    site.ts  home.ts  teachers.ts  news.ts  programs.ts  campus.ts  admissions.ts
  lib/
    content.ts  format.ts
public/
  brand/aqbobek-lyceum-logo.png   (from a1s.kz /Logo_Lyc.png — replace with master)
  images/hero/*  images/director/*  images/teachers/*  (school's own photography)
```

i18n ready: all content under `content/<locale>/`; UI strings via dictionary pattern so `ru/` `en/` can be added without refactoring.

## Build order

1. Scaffold + tokens + layout/header/footer
2. Content modules (from a1s.kz, no invented facts)
3. Home narrative → secondary pages
4. Specials (intro, ticker, director)
5. Responsive + a11y + performance pass
6. Playwright QA (1440/1280/768/390, intro replay, director sequence, ticker, console errors) → fix → retest
7. Impeccable polish pass → final Playwright pass
8. README (install/dev/build/GitHub/Cloudflare) + ASSETS.md (missing photo list)

## Asset status (verified 2026-09-20)

Remote fetch from a1s.kz stalled from this machine → all images are
**locally generated labeled placeholders** (see `docs/ASSETS.md`).
Regenerate/overwrite without code changes.

- [x] `public/brand/aqbobek-lyceum-logo.png` — PLACEHOLDER, need master logo
- [x] `public/director/director-1/2/3.jpg` — PLACEHOLDERS, need 3 official portraits
- [x] `public/images/hero/*` (10) — PLACEHOLDERS, need real photos
- [x] `public/images/teachers/*` (28) — PLACEHOLDERS, need real portraits
