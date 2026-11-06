# DESIGN.md — "The Personal Files of Tejal Shah"

> **Read this first.** This is a personal portfolio designed as a **physical paper archive folder**. It is NOT a standard SaaS/portfolio template. Do not substitute familiar web patterns (emoji nav, white cards, filled buttons, gradient text). Where this file is specific, follow it literally. Where it says **MUST** or **NEVER**, there is no wiggle room.

---

## 0. Non-negotiables (check these before anything else)

**MUST**
1. The whole page background is a **taupe "desk"** (`#B9B09C`), never white.
2. Content lives on a **cream paper sheet** with a thin inner hairline border, a soft shadow, and **six colored index tabs attached to its top edge**, like folder dividers.
3. Headlines are a **tight, condensed-looking serif** at very large size with **negative letter-spacing**. Body copy is serif too. Only tiny labels use sans.
4. Every headline is **one solid ink color** (`#25241E`).
5. Tab labels are plain uppercase text with a small index number above (`01`, `02`...). The six tabs are: **About, Listening, Library, Photos, Résumé, Travel Diary**.
6. The portrait is a **rotated polaroid** with a tape strip and a paperclip, captioned in italic.
7. Small tactile details (tape, paperclip, rubber stamps, polaroids, hard-offset shadows) replace conventional UI chrome.
8. The footer lives **inside the paper sheet**, separated by a hairline: `ARCHIVE / 0X` left, `MADE WITH CARE, UPDATED OFTEN.` right.

**NEVER**
- **No emoji anywhere** (not in tabs, buttons, headings, or cards).
- **No white (`#fff`) page or card backgrounds.** The lightest surface is paper `#F2EEE2`.
- **No sans-serif headlines** (no Inter, Roboto, system-ui for headings).
- **No gold/colored highlighted words in headings** (don't color part of the name).
- **No colored tagline row** like "Designer · Developer · Music Lover".
- **No "Fun Fact" card, no filled call-to-action buttons** ("Explore My Music", "See My Books"), no pill CTAs on the About page.
- **No thick white rounded frame around the portrait.** Use the polaroid.
- **No flat underline-style tab bar.** Tabs are colored, rounded-top folder tabs.
- **No full-width footer band or "© 2026 ... All rights reserved."** line.
- **No gradients, glassmorphism, or glossy effects.**
- **No large border-radius on cards.** Paper is cut, not molded (see radii).

---

## 1. Concept & Principles

- **Metaphor:** a filing-cabinet folder on a desk. Tabs = sections. Page = paper. Ephemera = tape, clip, stamps, polaroids.
- **One memorable gesture:** the colored tab row. Everything else is calm and typographic.
- **Curated, not exhaustive:** each section shows 3–4 items and leaves generous empty space. Content anchors to the top of the sheet; the bottom third is often intentionally empty.
- **Voice:** first person, plain, lightly poetic. Short fragments ("Salt air, no plans", "me, lately").
- **Warm and analog:** film photography, faded colors, paper grain, handwritten-feeling italics.

---

## 2. Color

### Base
| Token | Hex | Use |
|---|---|---|
| `--desk` | `#B9B09C` | Page background (full viewport) |
| `--paper` | `#EEE8DA` | Default sheet color (tinted per section below) |
| `--paper-light` | `#F2EEE2` | Active About tab, polaroid frame |
| `--ink` | `#25241E` | Headlines and body text (warm near-black) |
| `--ink-muted` | `#6E6A5E` | Labels, captions, metadata |
| `--rule` | `#CFC8B6` | Hairlines, inner border |
| `--signal` | `#D4553F` | Star ratings, stamps, progress bar, date ring, logo slash |

### Tab colors (each tab owns one color)
| # | Tab | Hex |
|---|---|---|
| 01 | About | `#F2EEE2` (paper cream) |
| 02 | Listening | `#D6AE60` mustard |
| 03 | Library | `#A5AF9C` sage |
| 04 | Photos | `#9C6F6B` dusty rose |
| 05 | Résumé | `#8197AB` slate blue |
| 06 | Travel Diary | `#C97A5A` terracotta |

### Sheet tint per section (subtle paper-stock shift)
About `#F0EBDD` · Listening `#EDE5D2` · Library `#EAE8DC` · Photos `#E8E0D5` · Résumé `#E6E8E4` · Travel `#EDE3D2`

### Content palette (book covers, album art)
ochre `#A9712F`, steel `#546B7A`, brick `#954238`, maroon `#6E3A38`, olive `#7C8B6B`, mustard `#D4A44A`, tomato `#C9533C`, butter `#E8C468`. Flat fills only.

---

## 3. Typography

Load from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">
```

| Role | Family | Style |
|---|---|---|
| Headlines, lead copy, titles, list items | **Newsreader** (fallback Georgia, serif) | Weight 500 for headlines, 400 for body. `font-optical-sizing: auto`. Must look **tight and condensed** via negative tracking |
| Personal voice: captions, taglines, reviews, counters | **Newsreader italic** | 400 italic |
| Eyebrows, tab labels, meta, footers, tags | **DM Sans** (fallback system-ui) | Uppercase, tracked `0.12–0.16em` |

### Scale (desktop)
| Role | Size | Leading | Tracking |
|---|---|---|---|
| H1 page headline | `clamp(56px, 7vw, 96px)` | 0.95 | `-0.035em` |
| Lead paragraph | `clamp(24px, 2.4vw, 32px)` | 1.25 | `-0.015em` |
| Entry title | 22–28px | 1.15 | `-0.01em` |
| Italic description | 16–20px | 1.4 | normal |
| Eyebrow | 11px, DM Sans 700, uppercase | — | `0.16em` |
| Tab label | 12px, DM Sans 500, uppercase | — | `0.14em` |
| Tab index number | 9px, DM Sans, muted | — | `0.12em` |
| Micro meta / footer | 10px, DM Sans, uppercase, muted | — | `0.12em` |

Headlines are **left-aligned**, solid `--ink`, and never wrap to more than 2 lines on desktop.

### Logo
Wordmark **"A M"** in the serif (~44px, tracking `-0.03em`) with a thin **red diagonal slash** (`--signal`, ~1.5px, rotated ~20°) through the gap. Top-left of the header.

---

## 4. Page Frame (identical on every page)

```
┌────────────────────────────────────────────────────────────────┐  desk #B9B09C
│ A/M         THE PERSONAL FILES OF               Oct    2026    │  header
│             Tejal Shah                                         │
│    ┌─────────┬─────────┬────────┬────────┬────────┬─────────┐  │
│    │01 ABOUT │02 LISTEN│03 LIBR.│04 PHOTO│05 RÉSUM│06 TRAVEL│  │  tabs (touch sheet)
│   ┌┴─────────┴─────────┴────────┴────────┴────────┴─────────┴┐ │
│   │ ┌───────────────────────────────────────────────────────┐ │ │
│   │ │ EYEBROW                                               │ │ │  sheet + 1px
│   │ │ Huge Headline                                         │ │ │  inner border
│   │ │ ...section content...                                 │ │ │
│   │ │ ───────────────────────────────────────────────────── │ │ │
│   │ │ ARCHIVE / 0X                MADE WITH CARE, UPDATED.. │ │ │  footer (inside)
│   │ └───────────────────────────────────────────────────────┘ │ │
│   └───────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

- **Page padding:** ~24px top, ~40px sides (desktop).
- **Header:** 3-column grid. Logo left; center credit (`THE PERSONAL FILES OF` in 11px tracked caps, name below in DM Sans 700 13px); right `Oct   2026` in DM Sans 12px with wide gap. Use the **current month and year**.
- **Tabs:** 6 equal columns, inset ~28px from the sheet's left edge, **flush against the top of the sheet**. Top corners `14px`, bottom square. Each tab: index number (`01`) above label. Inactive tabs sit ~6px lower; the **active tab is taller (62px vs 52px)**, label bold, and its color matches the sheet when it is About.
- **Sheet:** background = section tint, radius `4px 4px 6px 6px`, shadow `0 30px 60px rgba(60,50,30,.22), 0 4px 10px rgba(60,50,30,.12)`, 20px padding, containing a `1px solid --rule` inner frame with ~64px inner padding.
- **Footer:** inside the inner frame, `margin-top` ~56px, hairline top rule, two micro-caps labels spread to the left and right edges.
- **Subtle paper grain:** SVG noise overlay at ≤3% opacity on both desk and sheet.

---

## 5. Page Specs (use this exact copy)

### 01 · ABOUT  — `ARCHIVE / 01`

Three columns inside the inner frame: **text (≈1.5fr) | polaroid (≈1fr) | field notes (220px)**, gap ~56px, align top.

```
┌────────────────────────────────────┬──────────────┬────────────┐
│ A SMALL ARCHIVE OF A LIFE IN PROG. │   ╭tape╮ ⌇clip │            │
│                                    │  ┌─────────┐ │ FIELD NOTES│
│ Hello, I’m Tejal.                  │  │  "A"    │ │ ─────────  │
│                                    │  │ YOUR    │ │ MAKING     │
│ Designer, curious generalist, and  │  │ PORTRAIT│ │ Digital    │
│ collector of good stories. I make  │  │ HERE    │ │ experiences│
│ thoughtful digital things and      │  └─────────┘ │ ─────────  │
│ spend the rest of my time looking  │   me, lately │ READING    │
│ for new records, old books, and    │              │ The        │
│ the best table by the window.      │              │ Overstory  │
│                                    │              │ ─────────  │
│ ● Currently based in Berkeley,     │              │ LEARNING   │
│   open to good conversations.      │              │ Italian,   │
│                                    │              │ slowly     │
└────────────────────────────────────┴──────────────┴────────────┘
```

**Exact copy**
- Eyebrow: `A SMALL ARCHIVE OF A LIFE IN PROGRESS`
- H1: `Hello, I’m Tejal.` (plain, single color, no highlighted word; use a curly apostrophe)
- Lead: `Designer, curious generalist, and collector of good stories. I make thoughtful digital things and spend the rest of my time looking for new records, old books, and the best table by the window.`
- Status line (DM Sans 14px, preceded by a 10px coral dot `#E08A78`): `Currently based in Berkeley, open to good conversations.`
- Polaroid caption: `me, lately`
- Field notes heading: `FIELD NOTES`. Rows (label in tiny caps → value in serif italic 20px): `MAKING → Digital experiences`, `READING → The Overstory`, `LEARNING → Italian, slowly`. Hairline between rows; the column is separated from the content by a **vertical 1px hairline** on its left.
- **Do NOT add:** tagline row, fun fact, buttons, links to other sections.

### 02 · LISTENING — `ARCHIVE / 02`
- Eyebrow `ON REPEAT`, H1 `What I’m listening to`.
- Top-right: outlined pill `PULLED FROM SPOTIFY` with a small equalizer icon (inline SVG, not emoji).
- Left: square album art (concentric circles, tomato `#C9533C` background, ring `#A04B3E`, center `#E8C468`) with hard offset shadow and `NOW PLAYING` micro-label bottom-left. Beside it: `LAST PLAYED` label, `Texas Sun` (serif 40px), `Khruangbin, Leon Bridges`, a thin progress bar (coral fill ~45% over a grey track).
- Right: ranked list, top heavy rule then hairlines. Each row: 52px color square with numeral (`01` maroon `#6E3A38`, `02` olive `#7C8B6B`, `03` mustard `#D4A44A`), title, `Artist · Album` in muted sans 12px, duration right-aligned.
  1. `All I Need` — Radiohead · In Rainbows — 3:48
  2. `Anything` — Adrianne Lenker · songs — 3:22
  3. `Texas Sun` — Khruangbin, Leon Bridges · Texas Sun — 4:12
- Italic helper note under the list: `Connect your Spotify account to make this list update automatically.`

### 03 · LIBRARY — `ARCHIVE / 03`
- Eyebrow `SHELF NO. 3`, H1 `Books that stayed with me`, right-aligned italic `32 read this year`.
- Three columns, each: flat cover (≈144×214, hard offset shadow, author in micro caps top, title in serif, index `01` bottom-left) + meta (coral stars, serif title, `BY AUTHOR` micro caps, one-line italic review, rotated outlined coral stamp `READ 2025`).
  1. The Creative Act — Rick Rubin — 5★ — *A book to return to whenever the signal gets lost in the noise.* — cover ochre
  2. Tomorrow, and Tomorrow, and Tomorrow — Gabrielle Zevin — 4★ — *Tender, ambitious, and wonderfully interested in how we make things together.* — cover steel blue
  3. On Earth We’re Briefly Gorgeous — Ocean Vuong — 5★ — *Language so precise it makes the familiar feel newly discovered.* — cover brick

### 04 · PHOTOS — `ARCHIVE / 04`
- Eyebrow `CAMERA ROLL`, H1 `Proof I was there`, right italic counter `01 / 04`.
- Centered polaroid carousel (rotated ≈-1°, tape strip on top, soft shadow). Photo inside, caption row at the bottom: italic `Salt air, no plans` left, `SOMEWHERE BY THE SEA` micro caps right.
- 44px circular outlined arrow buttons left and right of the polaroid (1px ink outline, transparent; hover fills ink).
- Pagination: four short dashes under the polaroid; active = coral, others grey.
- Italic credit line: `Sample photography from Unsplash. Replace with your own life archive.`
- Photos are analog-film styled: grain, faded blues, warm sand.

### 05 · RÉSUMÉ — `ARCHIVE / 05`
- Sheet tint is cool grey-green `#E6E8E4`.
- Left: eyebrow `SELECTED EXPERIENCE`, H1 `Making ideas tangible.`, paragraph `I work across product strategy, visual design, and prototyping to create digital experiences with clarity and character.`, underlined text link `OPEN FULL RÉSUMÉ →` with mono helper `Add your PDF as public/resume.pdf`.
- Right: 2px top rule, then rows (date range in DM Sans 11px left, role in serif 28px, company in muted sans 12px), hairlines between:
  - `2023—Now` · Senior Product Designer · Independent / New York
  - `2020—2023` · Product Designer · Studio North
  - `2018—2020` · Junior Designer · Common Ground
- Below: outlined pills `PRODUCT DESIGN`, `ART DIRECTION`, `PROTOTYPING`, `RESEARCH`.

### 06 · TRAVEL DIARY — `ARCHIVE / 06`
- Eyebrow `TRAVEL DIARY`, H1 `Notes from elsewhere`, right italic `14 countries · more to come`.
- Left: featured card (photo left ≈55%, cream text panel right, hard offset shadow). Panel: `PAROS, GREECE` micro caps, serif title `Blue hours & slow mornings`, paragraph `We rented a tiny car, missed every planned turn, and found better places because of it. The island smelled like salt, warm stone, and jasmine after dark.` A **circular coral date stamp** `JUN · 24` (≈56px, 1.5px ring, rotated, overlapping the panel's top-right corner).
- Right: list with 1.5px top rule then hairlines. Each: place (serif 26px), date `MM.YYYY` micro caps top-right, italic one-liner.
  - `Lisbon` · 04.2024 · *Hills, tiled walls, and one very good custard tart.*
  - `Mexico City` · 11.2023 · *A week arranged entirely around museums and lunch.*
  - `Kyoto` · 03.2023 · *Rain on temple roofs and the quietest train ride.*

---

## 6. Components

**Polaroid** — frame `#F7F3E8`, padding `14px 14px 56px`, radius 2px, rotate `-2.5°` (About) / `-1°` (Photos), shadow `0 10px 30px rgba(0,0,0,.15)`. Tape: 96×30px, `rgba(214,190,130,.6)`, rotated -3°, straddling the top edge. Paperclip (About only): outlined grey (`#7A766B`) SVG, ~30×74px, clipped to the top-right corner. Caption in serif italic, bottom-right (About) or bottom-left (Photos). Empty portrait state: taupe `#C9C0AC` square, large italic serif letter `A`, tiny caps `YOUR PORTRAIT HERE`. **Never show a broken-image icon or alt text**; fall back to the placeholder.

**Stamp** — outlined 1px coral rectangle, micro caps coral text, rotated ≈-3°. Circular variant for dates.

**Pill** — fully rounded, 1px `--ink-muted` outline, transparent, uppercase tracked 10–11px DM Sans, padding `8px 14px`.

**Circular nav button** — 44px, 1px ink outline, transparent.

**Book cover / album art** — flat color, radius 0–2px, hard offset shadow `6px 6px 0 rgba(0,0,0,.12)`.

**Dividers** — 1px `--rule` between rows; 1.5–2px `--ink-muted` rule capping the top of lists.

**Radii cheat sheet** — tabs 14px (top only) · sheet 4–6px · polaroids/covers 2px · pills 999px · everything else 0. **Do not** use 16–32px rounded cards.

**Shadows** — two kinds only: soft diffuse (sheet, polaroids) and hard offset low-opacity (covers, album art, featured card).

**Spacing** — 8px base unit: 8, 16, 24, 32, 48, 64, 96.

---

## 7. Imagery
- Photography: film look, soft grain, faded blues, warm sand/white, candid and unposed.
- Graphics: flat geometric album art (concentric circles), flat book covers. No gradients or glossy effects.
- Icons: inline SVG line icons only (equalizer, arrows, paperclip). No emoji, no icon fonts.

---

## 8. Motion
- Tab change: active tab lifts, sheet tint cross-fades (~250ms ease-out); content fades in once. No staggered per-element animation.
- Carousel: polaroid fades/slides and settles at a slight new rotation; pagination dash updates.
- Hover: underline on links, fill on circular buttons, 2px lift on tabs. Nothing else.
- Respect `prefers-reduced-motion`.

---

## 9. Responsive & Accessibility
- ≤1100px: About becomes two columns; field notes drop below as a full-width row.
- ≤760px: single column; polaroid first, then text, then field notes. Tabs become a horizontally scrollable row (keep color + index). Sheet inner padding 24px. Hide the centered header credit. Footer labels stack.
- Tabs are real links with visible focus rings and `aria-current="page"` on the active one.
- Tab text stays full ink for contrast. Decorative tape/clip/stamps are `aria-hidden`.
- Alt text on every photo; carousel buttons labeled "Previous photo" / "Next photo".

---

## 10. CSS Tokens
```css
:root {
  --desk: #B9B09C;  --paper: #EEE8DA;  --paper-light: #F2EEE2;
  --ink: #25241E;   --ink-muted: #6E6A5E;  --rule: #CFC8B6;
  --signal: #D4553F;

  --tab-about: #F2EEE2;   --tab-listening: #D6AE60; --tab-library: #A5AF9C;
  --tab-photos: #9C6F6B;  --tab-resume: #8197AB;    --tab-travel: #C97A5A;

  --font-serif: "Newsreader", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;

  --shadow-soft: 0 10px 30px rgba(0,0,0,.15);
  --shadow-hard: 6px 6px 0 rgba(0,0,0,.12);
}
body { background: var(--desk); color: var(--ink); font-family: var(--font-serif); }
```

---

## 11. Final Checklist (verify before finishing)
- [ ] Background is taupe desk, sheet is cream paper. No pure white anywhere.
- [ ] Six colored folder tabs with `01–06` index numbers and the exact labels (including **Résumé** and **Travel Diary**); no emoji.
- [ ] H1 is a large tight serif in a single ink color; name not highlighted.
- [ ] About has exactly: eyebrow, H1, lead, Berkeley status line, polaroid (tape + clip + `me, lately`), Field Notes column. Nothing else.
- [ ] No Fun Fact card, no CTA buttons, no tagline row, no copyright line.
- [ ] Footer is inside the sheet: `ARCHIVE / 0X` + `MADE WITH CARE, UPDATED OFTEN.`
- [ ] Radii small, shadows follow the two allowed types, no gradients.
- [ ] Portrait has a styled placeholder, never a broken-image icon.
- [ ] Layout holds at desktop, tablet and mobile widths.
