# Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the site's visual system as Direction A (Midnight Editorial) while preserving all routes, facts, content layer, and static export.

**Architecture:** Token-first restyle (globals.css + fonts), then header/footer/intro/hero shell, then homepage sections top-to-bottom, then subpage alignment, then QA specs, then audits. Each task ends green: `tsc`, `lint`, `next build`.

**Tech Stack:** Next.js 16 App Router (static export), React 19, Tailwind v4, Motion (`motion/react`), Playwright QA. No new runtime dependencies.

**Spec:** `docs/superpowers/specs/2026-09-20-premium-redesign-design.md`

## Global Constraints

- `output: "export"` in `next.config.ts` must remain; `npm run build` must emit `out/`.
- No SSR, no OpenNext, no Workers, no server actions, no API routes.
- No new runtime dependencies without explicit need.
- Kazakh glyphs must render (verify in screenshots, never assume).
- `prefers-reduced-motion` respected for every animation.
- No gradients, no glass, no pills, radius 0, gold retired, single steel accent.
- Work on branch `premium-redesign`; never push broken work to `main`.

## Review Focus

- Kazakh extended glyphs (қ ғ ң ұ ү і һ ә ө) tofu in Unbounded display face — every task with headlines includes a screenshot glyph check.
- motion/intro overlay reintroducing hydration mismatch — intro task pins SSR/client parity test.
- Director ping-pong advancing more than once per enter — task pins opacity-sequence test.
- Ticker links unclickable while moving — task pins force-click navigation test.
- Horizontal overflow at 390px after asymmetric layouts — every layout task pins overflow assertion.

---

### Task 1: Design tokens + typography foundation

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/content/kk/site.ts` (only if brand logo path changes)

**Interfaces:**
- Consumes: nothing (first task).
- Produces: CSS utilities consumed by all later tasks — `bg-abyss`, `bg-navy-900/800`, `bg-mist`, `text-ink`, `text-frost`, `text-steel-500/600`, `border-line` (cool), `font-display` (Unbounded), hairline helpers. Radius 0 default; no gold/parchment utilities may remain referenced.

- [ ] **Step 1: Rewrite `@theme` tokens** per spec (abyss/navy/mist/ink/frost/steel, cool lines, radius 0). Delete gold + warm parchment tokens.
- [ ] **Step 2: Swap fonts in `layout.tsx`** — Unbounded (weights 400..700, subsets latin+cyrillic+cyrillic-ext, variable `--font-display`) + Inter (keep, add cyrillic-ext if missing). Keep `lang="kk"`.
- [ ] **Step 3: Update `body` base styles** — mist/white background default, ink text, `::selection` navy, focus-visible steel outline. Keep reduced-motion block; adapt ticker CSS colors only.
- [ ] **Step 4: Verify** — Run: `npx tsc --noEmit`, `npm run lint`, `npm run build`. Expected: all pass.
- [ ] **Step 5: Glyph check** — start dev server, screenshot a probe page containing `Қазақстан ғимарат ң ұ ү і һ ә ө Ақбөбек` in `font-display`; visually confirm zero tofu. (Temporary probe route or Playwright evaluate; delete probe after.)
- [ ] **Step 6: Commit** — `git add src/app/globals.css src/app/layout.tsx && git commit -m "design: midnight tokens + Unbounded/Inter typography"`

### Task 2: Header + footer shell

**Files:**
- Modify: `src/components/SiteHeader.tsx`
- Modify: `src/components/SiteFooter.tsx`
- Modify: `src/content/kk/site.ts` (brand logo → `/brand/aqbobek-lyceum-loader-logo.jpg` if not already)

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: transparent-over-hero → compact navy header contract used by hero task (header height var, `data-scrolled` behavior via existing IntersectionObserver sentinel).

- [ ] **Step 1: Header transparent state** — absolute/fixed transparent white text over hero; on scroll (>24px via existing sentinel) compact `bg-abyss/95 backdrop-blur` with border-b white/10. Keep all nav labels, CTA, mobile menu structure; restyle to navy system (menu stays full-screen abyss).
- [ ] **Step 2: Logo** — next/image loader-logo JPG (navy bg blends on navy header/menu). Add `alt="Aqbobek Lyceum"`. Remove `brightness-0 invert` hacks tied to the old placeholder.
- [ ] **Step 3: Footer** — abyss, 4-col institutional (brand+desc, nav, programs, contacts), generous spacing, loader logo, social links. No gold.
- [ ] **Step 4: Verify** — `tsc`, `lint`, `build` pass. Playwright: desktop nav reaches every page; mobile menu opens/links/Escape; no overflow at 1440/390; no console errors.
- [ ] **Step 5: Commit** — `git commit -m "design: transparent-to-navy header + institutional footer"`

### Task 3: Intro with loader logo

**Files:**
- Modify: `src/components/Intro/IntroGate.tsx`

**Interfaces:**
- Consumes: tokens; produces: unchanged children contract + session-once behavior.

- [ ] **Step 1: Swap logo src** to `/brand/aqbobek-lyceum-loader-logo.jpg` (447×447, blends on abyss — no invert). Keep 3.4s timeline, mask/line reveal, exit into hero.
- [ ] **Step 2: SSR parity guard** — initial render must equal server HTML (no overlay) then mount-gated show, exactly as today; keep the eslint-disable with its justification comment.
- [ ] **Step 3: Verify** — full Playwright intro test (visible once, hidden after, never on in-site nav) + zero hydration errors in console. Screenshot mid-intro for art check.
- [ ] **Step 4: Commit** — `git commit -m "design: branded intro with loader logo"`

### Task 4: Hero with real graduates photo

**Files:**
- Modify: `src/components/HomeHero.tsx`
- Modify: `src/app/page.tsx` (hero props only)

**Interfaces:**
- Consumes: header contract (transparent over hero), tokens.
- Produces: hero section anchor `section:has(h1)` used by QA capture.

- [ ] **Step 1: Asymmetric navy hero** — left: eyebrow, oversized Unbounded headline (existing factual знают? keep real tagline facts: IT лицей-интернат, математика/ағылшын/IT), dual CTA; right/full-bleed: `/images/hero/aqbobek-students-hero.png` (1672×941) with `priority`, `sizes`, `alt` describing real students. No face crops: use full-width bleed or aspect-preserving frame, never object-position that cuts students.
- [ ] **Step 2: First-viewport discipline** — headline ≤3 lines at 1440, CTAs visible without scroll, stats/facts row integrated (existing verified numbers only).
- [ ] **Step 3: Verify** — build passes; Playwright 1440/1280/390 screenshots visually reviewed (photo uncropped, type overlapping intentionally, no overflow, Kazakh glyphs clean).
- [ ] **Step 4: Commit** — `git commit -m "design: asymmetric full-bleed hero with real photo"`

### Task 5: Mission / Why / Education sections

**Files:**
- Modify: `src/app/page.tsx` (sections), `src/content/kk/home.ts` (only if structure needs it — facts unchanged)

**Interfaces:**
- Consumes: tokens, Reveal. Produces: section anchors used by QA.

- [ ] **Step 1: Mission/Vision/Values** — navy band, 01/02/03 oversized Unbounded numerals, asymmetric composition. Facts verbatim from `site.ts`.
- [ ] **Step 2: Why Aqbobek** — sticky heading + numbered editorial rows with hover states (150–250ms, transform/opacity). No icon cards.
- [ ] **Step 3: Education split** — giant `7–9` / `10–11` typography, subject labels, clubs line. Facts from `programs.ts` verbatim.
- [ ] **Step 4: Verify** — build; screenshots at 1440/390 reviewed; overflow assertions pass.
- [ ] **Step 5: Commit** — `git commit -m "design: editorial mission/why/education sections"`

### Task 6: Director ping-pong + ticker + stats

**Files:**
- Modify: `src/components/DirectorPortrait.tsx`
- Modify: `src/components/NewsTicker.tsx`
- Modify: `src/app/page.tsx` (director/stats sections)
- Modify: `qa/home.spec.ts` (ping-pong expectations)

**Interfaces:**
- Consumes: tokens. Produces: portrait `img[src*="director-N.jpg"]` opacity contract for QA.

- [ ] **Step 1: Ping-pong logic** — advance index per pointer-enter through sequence 1→2→3→2→1→… (position in a `[0,1,2,1]` cycle array, not modulo-3). Keep: once-per-enter, touch/mouse/keyboard gating, onError skip, crossfade 500ms + subtle scale, state dots. Update sr-only status text to reflect 3 available states.
- [ ] **Step 2: Ticker restyle** — editorial wire: `LATEST | date story → …` on abyss, steel dates, pause on hover/focus, reduced-motion static. Keep dual-half loop + `tabindex` contract.
- [ ] **Step 3: Stats** — oversized Unbounded numerals with pure opacity/translate reveal, existing numbers only (7–11, 100, 4, 5+), hairline dividers, no cards, no count-up animation.
- [ ] **Step 4: Verify** — Playwright: full ping-pong opacity sequence 1→2→3→2→1 asserted; ticker pause + link navigation; no console errors; screenshots reviewed.
- [ ] **Step 5: Commit** — `git commit -m "design: director ping-pong, editorial ticker, oversized stats"`

### Task 7: Teachers rail + campus + admissions + news compositions

**Files:**
- Modify: `src/app/page.tsx`, `src/components/TeacherCard.tsx`, `src/components/NewsCard.tsx`, `src/components/CtaBand.tsx`
- Modify: subpages `src/app/{about,education,teachers,admissions,campus,news,contact}/page.tsx` (restyle to system, facts unchanged)

**Interfaces:**
- Consumes: all tokens/components. Produces: final homepage + aligned subpages.

- [ ] **Step 1: Teachers** — premium rail or asymmetric portrait grid with real photos, name/role typography, hover info. No LinkedIn cards.
- [ ] **Step 2: Campus** — image-led mosaic wired to future photos; interim: typographic facility index on mist/navy (no fake photos). Facts from `campus.ts`.
- [ ] **Step 3: Admissions closer** — large abyss area, real fee/exam facts, primary (application form) + secondary (WhatsApp/terms) CTAs.
- [ ] **Step 4: News** — homepage 1 major + 2 secondary; `/news` asymmetric grid; article pages aligned to system.
- [ ] **Step 5: Subpages** — apply PageHero→navy/editorial headers, section rhythm, shared footer/CTA. No URL or copy changes.
- [ ] **Step 6: Verify** — full build; every route screenshotted 1440/390 and reviewed; overflow + console clean.
- [ ] **Step 7: Commit** — `git commit -m "design: teachers/campus/admissions/news + subpage alignment"`

### Task 8: Responsive + accessibility hardening

**Files:** Any component touched above (small targeted edits only).

- [ ] **Step 1: Recompose at 1024/768** — hero type scale, rail→stack rules, menu, ticker density, footer columns. Add Playwright 1280 + 1024 checkpoints to specs.
- [ ] **Step 2: A11y sweep** — focus-visible everywhere, nav/menu keyboard (Escape, focus trap-lite), alt text audit, contrast spot-check (steel on abyss, frost on navy, ink on mist), 44px targets, skip link intact.
- [ ] **Step 3: Verify** — full suite green at 1440/1280/1024/768/390.
- [ ] **Step 4: Commit** — `git commit -m "design: responsive recomposition + a11y hardening"`

### Task 9: Motion review + impeccable audit + merge

**Files:** fixes only; `docs/ASSETS.md` + `README.md` if asset paths changed.

- [ ] **Step 1: review-animations** — consistency, easing, interruption, jank; fix findings.
- [ ] **Step 2: impeccable audit** — typography/hierarchy/rhythm/mobile; fix meaningful weaknesses; re-screenshot.
- [ ] **Step 3: Final verification** — lint, `tsc --noEmit`, `next build`, `out/` complete, Playwright full suite green, no console errors.
- [ ] **Step 4: Merge** — `git checkout main && git merge --no-ff premium-redesign -m "feat: premium Aqbobek Lyceum redesign"` then `git push origin main`. No force-push. Cloudflare Pages redeploys from main automatically.
