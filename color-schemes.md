# Color Scheme Options — Support Futuro Vivo

Reference doc for the color exploration around matching the site to the Futuro Vivo
School logo (`photos/logo.jpeg`). The site currently uses **Navy Harbor** (below).
Nothing here is applied except where marked "currently live."

## Colors sampled from the logo

| Name        | Hex        | Notes                                    |
|-------------|------------|-------------------------------------------|
| Gold        | `#f4b659`  | top banner, pixel-sampled                |
| Green       | `#a8d552`  | bottom banner, pixel-sampled              |
| Water blue  | `#71b8de`  | interior circle, pixel-sampled            |
| Trunk brown | `#6b4423`  | tree/hand emblem, visual estimate only    |

## Original scheme (pre-redesign, for rollback reference)

```
--primary:        #0f2d4a   (navy)
--primary-light:  #1a4f78
--accent:         #e8834a   (orange)
--accent-dark:    #cf6b35
.btn-primary text: #fff
```

## Currently live — "Navy Harbor" (low commitment)

Keeps the navy structural backbone (nav, footer, hero, stats bar) untouched. Only the
single accent moved from orange to a gold pulled from the logo, tuned to land at close
to the same contrast ratios the site already shipped with. Button text on the gold
switched from white to navy — white-on-gold measured ~2.25:1 contrast (poor), navy-on-gold
measures ~6:1 (strong), so buttons read clearly instead of looking washed out.

```
--primary:           #0f2d4a   (unchanged)
--primary-light:     #1a4f78  (unchanged)
--accent:            #dba43e   (gold — lightened once at Joe's request; started at #cf9430)
--accent-dark:       #c28f2c
--accent-green:      #4a7d36   (added later — used only for "Donate Now" in the nav,
--accent-green-dark: #3a6b2c    since gold looked weak against the near-white nav bar)
.btn-primary text: var(--primary) (navy)
```

Green stays a small supporting color elsewhere (the "100% to the school" tax badge and
donation checkmarks on donate.html were already green — no change needed there).

**Tradeoff:** least visibly "branded" to the logo — someone who knows the emblem may not
immediately connect the two.

## Not applied — "Two-Band" (medium commitment)

Same navy backbone and gold accent as Navy Harbor, but the logo's own gold-over-green
banner becomes a repeating signature: a thin gold→green gradient rule under section
headings/cards, and green gets promoted to a real secondary-action color (outline
buttons) instead of decoration-only.

```
--primary:    #0f2d4a  (unchanged)
--accent:     #d9a441  (gold)
--secondary:  #4a7d36  (green — secondary buttons, outline states)
--rule:       linear-gradient(90deg, #d9a441, #6ea34a)  (decorative divider)
```

**Tradeoff:** two accents in active use — needs care so gold still reads as "the"
primary action color and green stays clearly secondary.

## Not applied — "Terra Verde" (high commitment)

Retires navy. The structural color becomes a deep, cool-leaning green from the logo
(deliberately darker/bluer than the logo's bright lime so it doesn't read as muddy),
always paired with gold rather than left to stand alone. Warm brown-tinted neutral
replaces the site's cool grey for section backgrounds.

```
--primary:        #1c4a36  (deep green, replaces navy)
--primary-light:  #2f6b4c
--accent:         #d9a441  (gold)
--neutral-warm:   #f4ecdf  (section-alt background, replaces #f5f7fa)
.btn-primary text: #1c4a36 (dark green, instead of navy — mirrors Navy Harbor's
                            navy-on-gold logic)
```

**Tradeoff:** biggest visual departure from the current site — worth sitting with for a
day before committing, since it changes the whole temperature of the site, not just an
accent.

## Tried and reverted (kept here so we don't retry blindly)

- **Light-blue hero background** — swapped `.hero`/`.page-hero` backgrounds to the
  logo's water blue (`--hero-blue: #71b8de`, `--hero-blue-light: #a8d4ea`), with hero/
  breadcrumb text switched to dark navy since white text on light blue measured ~2:1
  contrast. Reverted at Joe's request — went back to the original navy hero.
- **Full deep-green repaint** — an earlier, less careful attempt at a green primary
  (`--primary: #163d28`, `--primary-light: #1f6e46`, `--accent: #d9932e`/`#b6791c`,
  plus retinted footer/amount-button/program-icon backgrounds). Reverted — Joe felt it
  "wasn't visually appealing." Terra Verde above is a redo of this idea with a cooler,
  darker green and gold always paired in rather than green carrying text on its own.
