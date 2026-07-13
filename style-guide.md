# Style Guide

Source inspiration: [albedo.com](https://albedo.com) — a near-black canvas, oversized regular-weight type set with tight tracking, one loud accent color used sparingly, huge negative space, and modules that vary in shape instead of repeating the same card.

*Same argument as before — machine bias learned from gendered toy data — rendered as a confident systems index instead of a busy web-1.0 bulletin board.*

<br>

## The shift

The old direction treated every module the same way: a bordered white card, a bold headline, a fake file-extension label. It read as one long outline. This version gives ideas room — a thesis is one paragraph, a comparison is two blocks, an ontology gets the one table that's actually earned. Evidence (pink and blue) stays sharp against dark instead of paper-white, and a single acid accent marks the handful of places that should pull the eye — the title, the section numbers, a hover state. Everywhere else stays quiet.

<br>

## Palette

| | Hex | Use |
|---|---|---|
| Canvas | `#0D0C14` | Page background — near-black, faint violet cast |
| Panel | `#16141F` | Cards that need to read as distinct surfaces |
| Ink | `#F4F1FB` | Primary text, hairline borders |
| Muted | `#9992AB` | Secondary text, metadata, quiet dividers |
| Accent | `#E9FF7A` | One loud color — title, section numbers, hover states |
| Link | `#9A90FF` | Default link color |
| Toy Pink / Toy Blue | `#FF64C8` / `#2F6BFF` | The gendered-marketing evidence duo, unchanged |
| Alert Red / System Green | `#FF5C72` / `#3EE089` | Critique and progress cues |

The accent is spent deliberately — if it shows up more than a few times per screen, it's stopped being loud.

<br>

## Type

Large type stays regular weight, not bold, with tight negative tracking — confidence from scale, not heaviness. Small labels are the only place that earns bold, uppercase, monospace.

```css
--font-body: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-meta: "Courier New", ui-monospace, monospace;
```

<br>

## Rhythm

Major sections share one generous gap token instead of a flat 16px everywhere, and panels get roomier padding. Nothing should sit flush against the edge of its own container. If a section feels tight, widen its gap before reaching for a border or a rule.

<br>

## Module variation

No two sections should have the same shape in a row. A numbered eyebrow (`01`, `02`...) replaces the old fake-filename gag — the number sits in accent color, the label stays quiet and uppercase. Some sections are a single paragraph. Some are a pair of blocks. Only the ontology section is a full table, because that's the one place the content is genuinely tabular.

<br>

## Components, briefly

**Hover** — fills with the accent color and flips text to a fixed dark tone, never the page's light ink (illegible on a bright fill otherwise).
**Borders** — hairline, using the ink token; quieter dividers use the muted-toned rule color instead.
**Chips** — a pale tint of pink or blue mixed toward white, which pops precisely because it breaks from the dark field around it.
**Stat numbers** — the one place besides the title where accent color is allowed on a number, never on surrounding body text.

<br>

## Accessibility

Contrast matters more on a dark canvas, not less — check muted text against the panel color, not just the canvas. Keep focus states visible, never rely on the accent color alone to convey state, and confirm hover text stays legible against the accent fill.

<br>

## Starter tokens

```css
:root {
  --paper: #0d0c14;
  --surface: #16141f;
  --surface-raised: #201d2c;
  --ink: #f4f1fb;
  --muted: #9992ab;
  --rule: #322e40;
  --accent: #e9ff7a;
  --on-accent: #111111;
  --link-blue: #9a90ff;
  --visited-purple: #b09fe0;
  --toy-pink: #ff64c8;
  --toy-blue: #2f6bff;
  --alert-red: #ff5c72;
  --data-yellow: #fff35a;
  --system-green: #3ee089;

  --font-body: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-meta: "Courier New", ui-monospace, monospace;
}
```
