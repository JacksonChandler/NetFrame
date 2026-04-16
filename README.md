# NetFrame

```text
███╗   ██╗███████╗████████╗███████╗██████╗  █████╗ ███╗   ███╗███████╗
████╗  ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝
██╔██╗ ██║█████╗     ██║   █████╗  ██████╔╝███████║██╔████╔██║█████╗
██║╚██╗██║██╔══╝     ██║   ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝
██║ ╚████║███████╗   ██║   ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗
╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
```

> **CYBERPUNK CSS COMPONENT LIBRARY** 

[![npm](https://img.shields.io/npm/v/netframe)](https://www.npmjs.com/package/netframe)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](LICENSE)

---

## `// INITIALIZE`

### COMING SOON
```sh
npm install netframe
pnpm add netframe
yarn add netframe
```

Import once at your project entry point:

```js
import 'netframe/dist/netframe.css';

// Optional: alternate themes
import 'netframe/dist/themes.css';
```

Drop classes anywhere in your markup:

```html
<button class="nf-button nf-button-primary">EXECUTE</button>
<button class="nf-button nf-button-danger">ABORT</button>

<div class="nf-card nf-card-primary">
  <div class="nf-card-header">
    <span class="nf-card-title">UPLINK STATUS</span>
  </div>
  <div class="nf-card-body">All subsystems nominal.</div>
</div>

<span class="nf-badge nf-badge-primary">ONLINE</span>
<span class="nf-badge nf-badge-error">CRITICAL</span>
```

Enable the CRT scanline overlay on `<body>`:

```html
<body class="nf-crt">
```

---

## `// PAYLOAD`

### 20 components

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| Button | Input | Card | Table |
| Avatar | Badge | Tag | Dropdown |
| Tooltip | Modal | Drawer | Toast |
| Progress | Spinner | Tabs | Accordion |
| Breadcrumb | Pagination | Divider | Skeleton |

**4 utility groups** — Glow/shadows · Scanlines/CRT · Glitch animation · Layout

**Fonts** — Space Grotesk · JetBrains Mono · VT323 · Orbitron · Russo One — all self-hosted woff2, zero CDN calls

**Zero dependencies** — pure CSS output, framework-agnostic, drop-in anywhere

---

## `// SIGNAL_VARIANTS` — Alternate Themes

Apply a theme class to `<html>` to switch the entire system at runtime:

```html
<html class="nf-theme-night-city">
```

Persist with localStorage:

```js
document.documentElement.classList.add('nf-theme-iron-signal');
localStorage.setItem('nf-theme', 'nf-theme-iron-signal');
```

---

### DEFAULT

> Terminal Green `#00FF00` · Hot Pink `#FF0066` · UV Violet `#7700FF`

The baseline. True black void. Neon triad — green/pink/violet. Hard pixel-offset shadows. CRT scanlines at 5% opacity.

---

### `nf-theme-night-city`

> Hazard Yellow `#FCEE09` · Neon Cyan `#00F0FF` · Blood Red `#FF003C`

Blade Runner rain-soaked streets. Yellow primary cuts through the smog. High-contrast danger aesthetic.

---

### `nf-theme-chiba-city`

> Electric Teal `#3AFFE5` · Burn Amber `#FF8C00`

Neuromancer's cyberspace. Two-color terminal. Teal data streams on dark urban substrate.

---

### `nf-theme-neon-80s`

> Hot Magenta `#FF00FF` · Retro Blue `#00D9FF` · UV `#7000FF`

RetroWave synthpop. Heavier scanlines. Grid-burst aesthetic. The decade that invented neon.

---

### `nf-theme-renaissance`

> Augmented Gold `#E5B100` · Renaissance Crimson `#992222` · Warm Parchment `#E0D8B8`

Cyber-Renaissance. Palatino/Didot serif display font. Gold and ink. Opulent, architectural, inky black surfaces.

---

### `nf-theme-code-rain`

> Matrix Green `#00FF41`

Single-color. All text, all borders, all accents — one shade of green. Maximum monochrome immersion.

---

### `nf-theme-iron-signal`

> Revolutionary Red `#FF0000` · Cathode Amber `#FFB000` · Cold Steel `#B4B4B4`

Cyber-Soviet. Tactical Monolith. Russo One display headers. Orbitron body text. Massive borders. Instant state changes — zero transition duration. Red-channel CRT phosphor shift.

```html
<html class="nf-theme-iron-signal">
```

---

## `// OVERRIDE_PROTOCOL` — Custom Theming

Every `--nf-*` token is a live CSS custom property. Override on `:root`, no rebuild required:

```css
:root {
  --nf-color-primary:   #bd00ff;
  --nf-color-secondary: #ff6b00;
  --nf-color-bg:        #050005;
}
```

Full token reference → [netframe.cybear.dev/theming](https://netframe.cybear.dev/theming)

---

## `// ARCHITECTURE`

```text
packages/
  netframe/
    src/
      base/           reset, typography, fonts (@font-face)
      components/     20 component SCSS partials
      mixins/         focus-ring, neon-glow, offset-shadow
      themes/         7 theme class overrides
      tokens/         colors, typography, spacing, motion
      utilities/      glow, scanlines, glitch, layout
    dist/
      netframe.css    compiled library
      netframe.min.css
      themes.css      compiled themes
      themes.min.css
      fonts/          self-hosted woff2 files
      scss/           raw source for Sass consumers
apps/
  docs/               Astro 4 documentation site
.changeset/           versioning config
.github/workflows/    CI + release automation
```

---

## `// DEV_ENVIRONMENT`

Requires **Node 20** · **pnpm 9**

```sh
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start all dev servers
pnpm dev
```

Library only:

```sh
pnpm --filter netframe run build   # single build
pnpm --filter netframe run dev     # watch mode
```

Docs site only:

```sh
pnpm --filter @netframe/docs dev   # http://localhost:4321
```

After rebuilding the library, sync to docs:

```sh
cp packages/netframe/dist/netframe.css apps/docs/public/
cp packages/netframe/dist/themes.css   apps/docs/public/
cp -r packages/netframe/dist/fonts/.   apps/docs/public/fonts/
```

---

## `// CONTRIBUTE`

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## `// LICENSE`

GPL-3.0-only — Copyright (C) 2026 Cybear Technologies
