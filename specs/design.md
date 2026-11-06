# Design System — "The Personal Files of Tejal Shah"

A personal portfolio styled as a **physical archive folder**: a cream paper sheet sits on a taupe desk, and six colored index tabs along the top switch between sections. The tone is warm, analog, editorial, and quietly nostalgic (film photos, paper, tape, stamps, handwritten-feeling italics).

---

## 1. Concept & Principles

- **Metaphor:** A filing-cabinet folder. Tabs = sections. The page = paper. Details (tape, paperclip, stamp, polaroid) = tactile ephemera.
- **One memorable gesture:** the colored tab row. Everything else stays calm and typographic.
- **Content is curated, not exhaustive:** each section shows 3–4 items with generous empty space.
- **Typography does the heavy lifting:** large, tight, condensed serif headlines; tiny tracked sans labels; italic serif for personal voice.
- **Handmade touches over UI chrome:** rotated polaroids, tape strips, rubber-stamp badges instead of buttons and cards.
- **Voice:** first person, plain, lightly poetic. Short fragments ("Salt air, no plans", "me, lately").

---

## 2. Color

### Base
| Token | Approx. hex | Use |
|---|---|---|
| `--desk` | `#B9B09C` | Page background (the "desk"), with soft vignette/shadow |
| `--paper` | `#EEE8DA` | Main folder sheet (shifts slightly per tab, see below) |
| `--paper-light` | `#F2EEE2` | Active tab, polaroid frames, stamped cards |
| `--ink` | `#25241E` | Headlines, body text (warm near-black) |
| `--ink-muted` | `#6E6A5E` | Labels, captions, metadata |
| `--rule` | `#CFC8B6` | Hairline dividers and inner border |

### Tab / section accents
Each tab owns one color. The color appears on the tab itself and is echoed sparingly inside that section.

| Tab | Token | Approx. hex |
|---|---|---|
| 01 About | `--tab-about` | `#F2EEE2` (paper, active state reads as the sheet itself) |
| 02 Listening | `--tab-listening` | `#D6AE60` (mustard) |
| 03 Library | `--tab-library` | `#A5AF9C` (sage) |
| 04 Photos | `--tab-photos` | `#9C6F6B` (dusty rose / mauve) |
| 05 Résumé | `--tab-resume` | `#8197AB` (slate blue) |
| 06 Travel Diary | `--tab-travel` | `#C97A5A` (terracotta) |

### Highlight
- `--signal` `#D4553F` (vermilion/coral): star ratings, "READ 2025" stamps, progress bar, status dot, date stamp circle, active pagination dash.

### Section paper tint
The sheet shifts subtly by section to feel like different stock:
- About `#F0EBDD`, Listening `#EDE5D2`, Library `#EAE8DC`, Photos `#E8E0D5`, Résumé `#E6E8E4` (cool grey-green), Travel `#EDE3D2`.

### Content palette (book covers / album art)
Muted, earthy, slightly desaturated: ochre `#A9712F`, steel blue `#546B7A`, brick `#954238`, maroon `#6E3A38`, olive `#7C8B6B`, mustard `#D4A44A`, tomato `#C9533C` with butter yellow `#E8C468`.

---

## 3. Typography

Two families with clearly different roles.

### Display & editorial serif
- **Style:** Condensed, high-contrast transitional serif with tight tracking (similar to *Newsreader Display / Instrument Serif / Canela Condensed*).
- **Use:** All headlines, titles, body paragraphs, list items.
- **Italic variant:** used for personal voice: captions, taglines, descriptions, counts ("32 read this year", "14 countries · more to come", "me, lately").

### UI sans
- **Style:** Clean geometric sans (similar to *DM Sans*).
- **Use:** Eyebrows, tab labels, metadata, footers, tags, small captions.
- **Treatment:** Uppercase, wide letter-spacing (`~0.12–0.16em`), small size.

### Scale (desktop reference)
| Role | Size | Notes |
|---|---|---|
| Page headline (H1) | 72–96px | Tight leading (~0.95), letter-spacing `-0.02em` |
| Lead paragraph | 28–32px | Serif, leading ~1.25, max ~28ch per line segment |
| Section/entry title | 22–28px | Serif |
| Body / description | 15–18px | Serif italic for descriptions |
| Eyebrow label | 11–12px | Sans, uppercase, bold, tracked |
| Tab label | 12–13px | Sans, uppercase, tracked |
| Micro meta (dates, footers) | 10–11px | Sans, uppercase, muted |

### Logo
Wordmark **"A/M"** in a serif with a thin diagonal **red slash** striking through the middle. Top left.

---

## 4. Layout

### Page frame
```
┌──────────────────────────────────────────────────────────┐
│ A/M      THE PERSONAL FILES OF            Oct   2026     │  header
│          Tejal Shah                                      │
│  ┌───────┬────────┬───────┬───────┬───────┬────────┐     │
│  │ABOUT  │LISTEN. │LIBRARY│PHOTOS │RÉSUMÉ │TRAVEL  │     │  tabs
│ ┌┴───────┴────────┴───────┴───────┴───────┴────────┴──┐  │
│ │ ┌─────────────────────────────────────────────────┐ │  │
│ │ │ EYEBROW                                         │ │  │
│ │ │ Big Headline                                    │ │  │  paper sheet
│ │ │ ...content...                                   │ │  │  with inner
│ │ │                                                 │ │  │  hairline border
│ │ │ ─────────────────────────────────────────────── │ │  │
│ │ │ ARCHIVE / 0X              MADE WITH CARE, ...   │ │  │  footer
│ │ └─────────────────────────────────────────────────┘ │  │
│ └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

- **Header:** 3-column. Logo left, centered two-line credit ("THE PERSONAL FILES OF" tiny caps over bold name), date right ("Oct 2026").
- **Tabs:** 6 equal-width tabs spanning the sheet width, flush to the top edge of the paper. Rounded top corners (~14–16px), square bottoms. Tab text: tiny index number (`01`) above the label.
- **Sheet:** Fills the width with ~40px outer margin from the desk. Soft, large, low-opacity drop shadow. Corners lightly rounded (~4–6px).
- **Inner border:** 1px hairline inset ~20px from the sheet edge, like a printed frame.
- **Content padding:** ~64px inside the inner border.
- **Footer:** Hairline rule, then left `ARCHIVE / 0X` and right `MADE WITH CARE, UPDATED OFTEN.` in micro caps. `X` matches the tab index.
- **Alignment:** Left-aligned throughout; counters/meta right-aligned on the headline baseline.

### Section layouts

**01 About:** Two-column plus sidebar. Left: eyebrow, huge "Hello, I'm Tejal.", lead paragraph, status line with a coral dot. Center-right: rotated polaroid with tape and paperclip. Far right: "Field Notes" column separated by a vertical hairline (rows: label in tiny caps, value in serif italic).

**02 Listening:** Eyebrow + headline, source pill top-right ("Pulled from Spotify", outlined, with equalizer icon). Left: square album art with offset shadow, "Last played" label, track title, artist, thin progress bar (coral on grey). Right: ranked track list with numbered color squares (01/02/03), title, artist · album, duration right-aligned, hairline dividers; italic helper note below.

**03 Library:** Headline + italic counter ("32 read this year") right. Three columns of books: flat colored cover (author tiny caps top, title in serif, number bottom) with offset shadow beside the meta (red star rating, title, "BY AUTHOR", italic one-line review, rotated "READ 2025" stamp).

**04 Photos:** Centered, rotated (~-1°) polaroid carousel with tape strip. Circular outlined arrow buttons left/right. Caption row inside polaroid: italic note left, location in tiny caps right. Pagination as short dashes (active = coral). Counter "01/04" italic top right. Small italic credit line below.

**05 Résumé:** Two columns. Left: eyebrow, headline "Making ideas tangible.", short paragraph, underlined text link "Open full résumé →". Right: heavier top rule then rows (date range in small sans left, role in serif, company in small grey sans), hairline dividers, then outlined pill tags.

**06 Travel Diary:** Headline + italic counter. Left: featured entry as a horizontal card (photo left, cream text panel right with place in tiny caps, serif title, short paragraph, circular red date stamp "JUN · 24" overlapping the corner). Right: list of past trips (place in serif, date `MM.YYYY` top-right in tiny caps, italic one-liner), hairline dividers.

---

## 5. Components

### Index tab
- Equal width, top radius ~14px, solid accent color, no border.
- Label: index number (tiny, muted) + name (uppercase, tracked).
- **Active:** tab brightens/lifts ~6–8px above neighbors, text darkens to full ink, and tab color blends into the paper (About active = paper color). Inactive tabs sit lower with slightly lower-contrast text.
- Focus state: 2px dark outline following the tab shape.

### Polaroid
- Off-white frame `#F7F3E8`, thicker bottom margin, ~2px radius.
- Rotation between -2° and +2°.
- Soft shadow (`0 10px 30px rgba(0,0,0,.15)`).
- Translucent tape strip (`rgba(214,190,130,.6)`) across the top, slightly rotated.
- Optional paperclip graphic (outlined, grey) at the top-right corner.
- Handwritten-style caption in serif italic.

### Stamp badge
- Outlined rectangle (1px coral border), uppercase tracked micro text in coral, rotated ~-3°. Used for "READ 2025".
- Circular variant for dates: coral 1.5px ring, ~56px, two-part text ("JUN · 24"), rotated, overlapping a card corner.

### Pill
- Fully rounded, 1px ink-muted outline, transparent fill, uppercase tracked 10–11px text, ~8px 14px padding. Used for skills and source chips.

### Circular nav button
- 44px, 1px ink outline, transparent, arrow glyph centered. Hover: fill with ink, arrow in paper.

### Book cover
- Flat solid color rectangle, ~2:3 ratio, no radius, hard offset shadow (`6px 6px 0 rgba(0,0,0,.12)`), title in serif light color, author in micro caps top, index number bottom-left.

### Album art
- Square with the same hard offset shadow. "NOW PLAYING" in tiny caps bottom-left.

### Dividers
- 1px `--rule` lines between list rows; a heavier 1.5–2px ink-muted line caps the top of lists.

### Status dot
- 10px coral circle before a short serif/sans line ("Currently based in Berkeley, open to good conversations.").

### Stars
- Five coral stars; empty star as outline.

---

## 6. Spacing & Shape

- **Base unit:** 8px. Common values: 8, 16, 24, 32, 48, 64, 96.
- **Radii:** Tabs ~14px top; sheet ~4–6px; polaroids/covers ~2px; pills fully round. Mostly square elsewhere (paper feels cut, not molded).
- **Shadows:** Two types: *soft/diffuse* for sheet and polaroids; *hard offset, low opacity* for flat objects (book covers, album art, featured card).
- **Whitespace:** Generous. Sections are intentionally sparse with the bottom third of the sheet often empty; content anchors to the top.
- **Texture:** Very subtle paper grain/noise over the sheet and desk (≤3% opacity).

---

## 7. Imagery

- **Photography:** Analog film look: soft grain, slightly faded blues, warm sand and whites, natural light. Candid, unposed, travel and seaside moments.
- **Illustrations/graphics:** Flat geometric album art (concentric circles), flat colored book covers. No gradients, no glossy effects.
- **Placeholder treatment:** Taupe block with large italic serif letter and caption ("Your portrait here").

---

## 8. Motion & Interaction

- **Tab switch:** Active tab lifts and the sheet tint cross-fades (~250ms, ease-out). Content fades in once, no per-element staggering.
- **Photo carousel:** Polaroid slides/fades out and the next one settles in with its own slight rotation; pagination dash updates.
- **Hover:** Subtle only: underline on links, fill on circular buttons, slight lift (2px) on tabs.
- **Progress bar:** Static or slowly advancing for "now playing".
- Respect `prefers-reduced-motion`.

---

## 9. Content & Voice

- **Headlines:** Plain, warm statements: "Books that stayed with me", "What I'm listening to", "Proof I was there", "Notes from elsewhere", "Making ideas tangible."
- **Eyebrows:** Short noun phrases ("On repeat", "Shelf no. 3", "Camera roll", "Selected experience").
- **Captions/reviews:** One italic line, specific and sensory ("Hills, tiled walls, and one very good custard tart.").
- **Meta:** Tiny and factual (dates as `MM.YYYY`, durations as `3:48`).
- **Footers:** Constant: `ARCHIVE / 0X` and `MADE WITH CARE, UPDATED OFTEN.`

---

## 10. Accessibility & Responsiveness Notes

- Check contrast of muted labels and inactive tab text (mustard, sage, and rose tabs with ink text are close to the minimum; keep text full ink on tabs).
- Tabs must be real buttons/links with visible focus rings and `aria-current` on the active one.
- On narrow screens: tabs become a horizontally scrollable row (keep color and index), sheet padding drops to ~24px, the About layout stacks (polaroid above text, field notes below), and Library/Travel lists become single-column.
- Keep decorative elements (tape, clip, stamps) `aria-hidden`.
- Alt text for every photo; carousel controls labeled "Previous photo" / "Next photo".

---

## 11. Suggested CSS Tokens

```css
:root {
  --desk: #B9B09C;
  --paper: #EEE8DA;
  --paper-light: #F2EEE2;
  --ink: #25241E;
  --ink-muted: #6E6A5E;
  --rule: #CFC8B6;
  --signal: #D4553F;

  --tab-about: #F2EEE2;
  --tab-listening: #D6AE60;
  --tab-library: #A5AF9C;
  --tab-photos: #9C6F6B;
  --tab-resume: #8197AB;
  --tab-travel: #C97A5A;

  --font-serif: "Newsreader", "Instrument Serif", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;

  --space-1: 8px;  --space-2: 16px; --space-3: 24px;
  --space-4: 32px; --space-6: 48px; --space-8: 64px;

  --shadow-soft: 0 10px 30px rgba(0,0,0,.15);
  --shadow-hard: 6px 6px 0 rgba(0,0,0,.12);
}
```
