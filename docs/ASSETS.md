# Official Asset Checklist

Remote downloads from `a1s.kz` proved unreliable from this machine, so every
image below is currently a **locally generated placeholder** (navy/parchment,
clearly labeled, correct dimensions and paths). Layout and components are final —
drop in the official files and the site updates with zero code changes.

Replacement rule: keep the **same filename** (or update the path in the
referenced content file). Regeneration script: `scripts/make-placeholders.ps1`
(PowerShell 5.1: run via the UTF-8 bootstrap,
`$s=[IO.File]::ReadAllText('scripts/make-placeholders.ps1',[Text.Encoding]::UTF8); &([ScriptBlock]::Create($s))`).

Logo assumption: the official logo is **dark artwork on transparent background**.
Header shows it as-is; intro overlay and footer display it with `invert` for
dark surfaces. If the real logo is light-on-dark instead, remove the
`brightness-0 invert` classes in `IntroGate.tsx` / `SiteFooter.tsx`.

## Brand

| File | Status | To provide |
|---|---|---|
| `public/brand/aqbobek-lyceum-loader-logo.jpg` | ✅ REAL official logo (447×447, verified visually) — used in intro, header, footer | — |

## Director portraits (hover sequence 1 → 2 → 3 → 1)

| File | Status | To provide |
|---|---|---|
| `public/director/director-1.jpg` | ✅ REAL portrait (1017×678, verified visually) | — |
| `public/director/director-2.jpg` | ❌ MISSING — component gracefully degrades to 1↔3; full 1→2→3→2→1 test restores on arrival | official portrait 2 (3:4) |
| `public/director/director-3.jpg` | ✅ REAL portrait (489×627, verified visually) | — |

## Photography (all placeholders, correct aspect)

| Files | Status | To provide |
|---|---|---|
| `public/images/hero/aqbobek-students-hero-clean.png` (1672×941) | ✅ REAL clean graduates photo (verified visually, uncropped hero layer) | — |
| `public/images/hero/background*.jpg` (1200×900) | 🟡 PLACEHOLDER (news/campus filler) | real campus/classroom/event photos (4:3, ≥1600px) |
| `public/images/teachers/<id>.jpg` × 28 (600×800, initials) | 🟡 PLACEHOLDER | real staff portraits (3:4, ≥800px) |

Teacher file ids: kaiyrkulov_n, karayeva_a, baidirahmanova_b, dushmanova_a,
karabai_a, amangazy_s, zholaman_m, esalina_a, kopzhasarova_t, maratkyzy_d,
nazhmadinov_m, suleimanov_b, akhmetova_i, baktygulov_a, akyrap_a, dauletbaeva_s,
sungarieva_a, zhadyrassyn_y, nazarov_d, kydyrbayeva_g, sharafadinova_a,
zhomartova_a, tanatar_m, khalelova_a, kaiyrzhanova_a, utenova_k, matigulova_g,
salamatuly_a.

## News

`src/content/kk/news.ts` holds **clearly-marked placeholder items**
(shape-compatible with a future CMS). Replace with real newsroom content or
connect an API returning `{ slug, title, date, category, excerpt, image }`.

Legend: ✅ final · 🟡 placeholder, works but must be replaced · ❌ missing
