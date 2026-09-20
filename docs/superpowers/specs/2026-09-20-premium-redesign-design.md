# Premium Redesign — Design Spec (Direction A: Midnight Editorial)

Status: approved direction A. Branch: `premium-redesign`. Safety: `safety/pre-redesign-main`.
Baseline `npm run build` green before redesign.

## Art direction

Deep-navy-dominant editorial prestige. Near-black blue surfaces, white type,
cool off-white light bands, one restrained steel-blue accent. Photography
leads; typography carries identity. No gradients, no cards-grids monotony,
no library aesthetics.

## Authoritative assets (verified, do not alter)

- `public/images/hero/aqbobek-students-hero.png` — 1672×941 (~16:9), real
  graduates photo. Hero anchor. No face crops, no recompression.
- `public/brand/aqbobek-lyceum-loader-logo.jpg` — 447×447 JPEG, white crest on
  navy. Intro + header/footer branding (blends on navy surfaces).

Note: brief named hero as `.jpg`; the real file is `.png`. PNG is used as-is
for quality. Old placeholder `public/brand/aqbobek-lyceum-logo.png` is deleted;
all logo references must migrate to the loader logo.

## Design tokens

- `--color-abyss: #050B18` (intro, hero, footer, admissions closer)
- `--color-navy-900: #0A1F3C` (brand surfaces), `--color-navy-800: #123058`
- `--color-paper: #FFFFFF`, `--color-mist: #F4F6F9` (cool light bands)
- `--color-ink: #0B1526` (text on light), `--color-frost: #EAF0F8` (text on dark)
- `--color-steel-500: #3E6FD1` (single accent), `--color-steel-600: #355FC0`
- Lines: `rgba(255,255,255,.12)` on dark, `#E2E7EF` on light
- Radius: 0 everywhere. Buttons square. No pills.
- Gold (`#C9A227`) and warm parchment are RETIRED. No warm neutrals remain.

## Typography

- Display: **Unbounded** (cyrillic + cyrillic-ext, modern techno-academic),
  oversized headlines, eyebrows, numerals. Verify Kazakh glyphs in QA
  screenshots; fallback to PT Serif if any tofu.
- Body/UI: **Inter** (guaranteed Kazakh coverage), compact nav, readable body.
- Hierarchy: eyebrow (11px, tracked, steel) → display headline (clamp 2.5–5rem,
  tight) → lead (17px, frost/slate) → body 15–16px, max 65ch.

## Homepage narrative (all existing facts preserved)

1. Transparent header over hero → compact navy on scroll
2. Hero: asymmetric navy panel + full-bleed graduates photo, oversized
   Unbounded statement, factual subline, dual CTA (Admissions / Lyceum)
3. Mission/Vision/Values: navy editorial 01/02/03 oversized numerals
4. Why Aqbobek: sticky heading + numbered editorial rows, hover states
5. Education: split 7–9 / 10–11 with giant grade typography
6. Director: signature editorial profile, portrait, message, name/title
7. News wire ticker (restyled, editorial)
8. Stats: oversized type only, existing verified numbers (7–11, 100, 4, 5+)
9. Teachers: human premium rail/grid, real portraits stay as-is
10. Campus: image-led mosaic wired to future photos; interim typographic
    facility index (no fake photos, no face crops)
11. Admissions closer: large navy area, real exam/fee facts, primary + secondary CTA
12. Latest news: 1 major + 2 secondary editorial composition
13. Institutional navy footer

## Components: preserve vs replace

- Preserve (restyle only): IntroGate (new logo asset + navy continuity into
  hero), NewsTicker (editorial wire style), Reveal (same language), content
  layer untouched, all routes/URLs unchanged.
- Replace: SiteHeader (transparent→navy), HomeHero (full-bleed asymmetric),
  DirectorPortrait (NEW ping-pong sequence 1→2→3→2→1, one advance per enter;
  touch fallback), section compositions per narrative above.
- Update QA specs to the ping-pong sequence.

## Motion language (one system)

- Section reveal: opacity + 16–24px rise, once, expo-out, ≤600ms
- Image reveal: clip/mask or subtle scale from 1.04
- Hover: 150–250ms, transform/opacity only
- Major transitions (menu, intro exit): 300–600ms
- No springs except interruptible gestures; no bounce/float/decoration
- Full `prefers-reduced-motion` support (static fallbacks)

## Responsive / a11y / performance

- Intentional recomposition at 1440/1280/1024/768/390 (not stacked desktop)
- Semantic HTML, focus-visible, contrast AA, alt text, keyboard nav, 44px targets
- next/image with sizes, hero priority + eager, fonts via next/font,
  static export preserved (`output: "export"`, images unoptimized)

## QA strategy

- `npm run lint`, `tsc --noEmit`, `npm run build` → `out/`
- Playwright: update specs (ping-pong, new selectors), 5 viewports, intro,
  ticker, director, nav/menu, overflow, console errors, broken assets
- Visual inspection of every section screenshot; iterate weak sections
- Final: impeccable audit + animation review, then merge to main
