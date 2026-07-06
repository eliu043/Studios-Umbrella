# Webcore Style Guide

Source inspiration: [Webcore on Aesthetics Wiki](https://aesthetics.fandom.com/wiki/Webcore) and [Index Space](https://www.index-space.org/)

## Creative Direction

This site should use Webcore through a minimal, brutalist, archive-oriented lens. The design should still reference the early web, machine interfaces, toy databases, and browser-native structures, but with much less visual noise than a maximal Webcore page.

Think: public program index, digital archive, research directory, raw HTML catalog, institutional bulletin board, and early web interface. The page should feel direct, constructed, and slightly strange. It should not feel glossy, decorative, nostalgic for nostalgia's sake, or overproduced.

## Core Values

- **Archive first:** content, citations, links, dates, and categories are the main design material.
- **Brutalist clarity:** use plain structure, obvious borders, direct labels, and visible hierarchy.
- **Minimal Webcore:** keep old-web cues, but make them sparse and functional.
- **Public knowledge space:** the site should feel like a place for study, not a marketing page.
- **Dataset logic:** grids, lists, tables, labels, indexes, filters, and repeated entries should shape the page.
- **Critical restraint:** let the absurdity of A.I. Toys emerge through contrast, repetition, and evidence rather than constant visual effects.
- **Gendered color as evidence:** use pink and blue as pointed references to stereotypical toy marketing, not as decorative defaults.

## Visual Motifs

Use Webcore motifs as structural devices, not decoration.

- Index pages, directories, link lists, bibliographies, and simple navigation menus.
- Browser-native elements such as underlined links, plain buttons, system labels, tables, fieldsets, and rules.
- Window panels only when they clarify a content module; avoid stacking many decorative windows.
- Toy/product cards treated like database records.
- Status labels such as `source`, `artist words`, `press`, `dataset`, `year`, and `medium`.
- Thin borders, hard corners, black rules, visible columns, and exposed layout logic.
- Small moments of old-web texture: default link blue, visited purple, monospace metadata, pixel icons, or a single alert state.
- Occasional toy-market pink and blue used as sharp accents, not as the whole atmosphere.

## Color Palette

The base palette should be mostly black, white, off-white, and grayscale. Use Webcore colors sparingly as signals.

| Role | Color | Hex |
| --- | --- | --- |
| Paper | Main background | `#F7F5EF` |
| White | Content surfaces | `#FFFFFF` |
| Ink | Primary text and borders | `#111111` |
| Rule Gray | Secondary borders and dividers | `#B8B8B8` |
| Soft Gray | Secondary panels | `#E7E7E7` |
| Link Blue | Links and active references | `#0000EE` |
| Visited Purple | Visited links | `#551A8B` |
| Toy Blue | Boys' toy-market cue, dataset comparison | `#2F6BFF` |
| Toy Pink | Girls' toy-market cue, dataset comparison | `#FF64C8` |
| Alert Red | Error, bias, warning accents | `#E00022` |
| Data Yellow | Highlighted dataset notes | `#FFF35A` |
| System Green | Rare success or progress accent | `#23C552` |

### Palette Rules

- Start in black and white; add color only where it means something.
- Use blue primarily for links and selected states.
- Use toy blue and toy pink as paired comparison colors when the design is explicitly discussing gendered toy categories.
- Use red for critique, warning, bias, or contradiction.
- Use yellow for annotation, highlighting, or dataset notes.
- Use pink and blue in restrained side-by-side moments: dataset tags, split rows, small chips, comparison rules, or chart accents.
- Avoid letting pink and blue become a simple endorsement of the binary the work is critiquing; the colors should feel analytical, quoted, or slightly uncomfortable.
- Use green only as a small old-system or progress-state cue.
- Avoid full-page gradients, heavy neon fields, or color collisions across large surfaces.

### Gendered Color Accents

Pink and blue can be useful because A.I. Toys is directly concerned with the gendered marketing of children's objects. Treat these colors like quoted material from consumer culture.

Good uses:

- Thin left borders on paired dataset records.
- Small labels such as `GIRLS DATASET` and `BOYS DATASET`.
- Side-by-side comparison rows.
- Tiny product-card accents.
- Chart keys showing how generated toys diverge by category.
- Hover states that briefly reveal the toy-market coding.

Avoid:

- Making the whole page half pink and half blue.
- Using pink for all content associated with girls and blue for all content associated with boys without critical framing.
- Softening the critique into cute toy branding.
- Letting color replace written analysis.

## Typography

Typography should feel plain, public, and web-native. Favor readable sans-serif text with occasional monospace metadata.

### Recommended Font Stack

```css
font-family: Arial, Helvetica, "MS Sans Serif", sans-serif;
```

### Metadata Font Stack

```css
font-family: "Courier New", "Lucida Console", monospace;
```

### Type Rules

- Use large type only for the main title or a major thesis statement.
- Let headings be blunt, short, and functional.
- Use monospace for dates, labels, tags, source types, and dataset language.
- Keep body text readable and relatively quiet.
- Use underlined links as a visible design feature.
- Avoid decorative pixel fonts except for tiny labels or one intentional accent.

## Layout

The layout should feel like an index, archive, or public program listing. It should be structured and modular, with visible divisions.

- Use full-width bands, grids, lists, and columns.
- Prefer tables, source lists, and record-like cards over ornamental panels.
- Make the bibliography feel like a navigable archive.
- Keep generous white space around dense information.
- Use hard edges and simple rectangular modules.
- Avoid overlapping windows unless there is a clear conceptual reason.
- Avoid floating decorative cards. If a box exists, it should hold a real content unit.
- Keep the first viewport direct: title, thesis, links, and one clear visual/system cue.

## UI Components

### Header

- Use a simple horizontal navigation bar.
- Include the project/context label, page sections, and primary links.
- Keep it utilitarian: no elaborate logo treatment.

### Index Rows

- Use rows for bibliography entries, project facts, press links, research questions, and artwork metadata.
- Rows can include columns such as `type`, `year`, `source`, `note`, and `link`.
- Thin borders and tight spacing are encouraged.

### Panels

- Panels should have simple borders and hard corners.
- Use panels to separate major analytical modules.
- Avoid beveled effects unless the page needs one explicit old-OS reference.

### Buttons

- Use plain rectangular text buttons.
- Default button style: white background, black border, underlined or bold text.
- Accent buttons may use link blue, yellow, or red.
- Avoid pill buttons, glass effects, large shadows, and glossy gradients.

### Links

- Default to underlined blue.
- Use visited purple when useful.
- Let link lists remain visibly link-like.
- Links should feel like part of the archive, not hidden inside polished cards.

### Labels

- Use small uppercase or monospace labels for content type.
- Examples: `ARTIST WORDS`, `PRESS`, `DATASET`, `A.I. TOYS`, `2022`, `SOURCE`.
- Labels should help visitors scan the page quickly.

## Texture and Effects

Effects should be rare and controlled.

Use:

- 1px or 2px black borders
- Thin divider rules
- Simple grid lines
- Occasional dotted or dashed borders
- Light gray fills
- One or two small pixel or system symbols
- Minimal hover inversions

Avoid:

- Heavy drop shadows
- Full-page scanlines
- Constant glitch effects
- Layered neon gradients
- Excessive tiled backgrounds
- Decorative pop-up clutter
- Fake chaos that makes the argument harder to read

## Motion

Motion should be minimal or absent.

Acceptable motion:

- Instant hover state changes
- Simple reveal or anchor jumps
- A restrained progress indicator if it serves the dataset/AI theme

Avoid:

- Jittering windows
- Blinking text
- Marquees
- Cursor trails
- Continuous glitch animation
- Low-frame-rate loops that distract from reading

## Sound Direction

Default to no sound. If sound is added, it must be optional and conceptually justified.

Possible sound cues:

- One old-system notification on a deliberate interaction
- A short dial-up or loading reference in an optional media element
- Low, quiet electronic ambience for an installation-style mode

Do not autoplay sound.

## Content Voice

The voice should be analytical, concise, and slightly dry. Let the structure carry some of the personality.

Use:

- Short thesis statements
- Direct source labels
- Clear interpretive claims
- Plain-language explanations of AI and datasets
- Bibliographic precision
- Occasional system-like phrases when they sharpen the critique

Avoid:

- Long decorative copy
- Fake tech mysticism
- Over-explaining the interface
- Corporate design language
- Too many jokes or surreal fragments

## Do

- Make the site feel like a rigorous digital archive.
- Use old-web references as functional reading structures.
- Give citations, dates, links, and source types strong visual presence.
- Keep the page readable for gallery visitors and art/design audiences.
- Let the brutalist restraint make the toy-market absurdity stand out.
- Use color as evidence, warning, or annotation.

## Do Not

- Turn Webcore into random glitch, neon, or pop-up overload.
- Make the page look like a generic vaporwave or cyberpunk site.
- Hide the analysis behind decoration.
- Use large areas of saturated color without a content reason.
- Overuse fake operating-system chrome.
- Make every module look like a novelty window.

## Accessibility Notes

- Keep body text high contrast.
- Do not rely on color alone for source type, status, or warning.
- Keep link styling visible.
- Preserve keyboard focus states.
- Avoid autoplaying sound or motion.
- Make tables and repeated records readable on mobile.
- Keep the reading order logical when grids collapse.

## Implementation Starter Tokens

```css
:root {
  --paper: #f7f5ef;
  --surface: #ffffff;
  --ink: #111111;
  --rule: #b8b8b8;
  --soft-gray: #e7e7e7;
  --link-blue: #0000ee;
  --visited-purple: #551a8b;
  --alert-red: #e00022;
  --data-yellow: #fff35a;
  --toy-pink: #ff64c8;
  --system-green: #23c552;

  --font-body: Arial, Helvetica, "MS Sans Serif", sans-serif;
  --font-meta: "Courier New", "Lucida Console", monospace;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--font-body);
}

a {
  color: var(--link-blue);
  text-decoration: underline;
}

a:visited {
  color: var(--visited-purple);
}

.site-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.archive-header,
.archive-panel,
.archive-row {
  border: 1px solid var(--ink);
  background: var(--surface);
}

.archive-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  padding: 12px 16px;
}

.archive-panel {
  padding: 20px;
}

.archive-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
}

.archive-row {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 12px;
  padding: 10px 12px;
  border-top: 0;
}

.label {
  font-family: var(--font-meta);
  font-size: 12px;
  text-transform: uppercase;
}

.warning {
  background: var(--data-yellow);
  border-color: var(--alert-red);
}
```

## Quick Moodboard Checklist

Before calling the design finished, check that it includes most of these:

- A mostly black, white, and gray base
- Underlined links as visible interface material
- A clear archive/index structure
- Thin borders, rows, columns, labels, and lists
- Sparse old-web references used functionally
- One or two toy/data accent colors, not a full candy palette
- Strong bibliography and source hierarchy
- Minimal motion and minimal effects
- A readable first viewport with title, thesis, and navigation
