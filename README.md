# NetFrame

**Cyberpunk CSS component library.**  
Terminal green. Cyber magenta. Hard edges. CRT scanlines. Zero border-radius. No apologies.

[![CI](https://github.com/KumaCommunity/NetFrame/actions/workflows/ci.yml/badge.svg)](https://github.com/KumaCommunity/NetFrame/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/netframe)](https://www.npmjs.com/package/netframe)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](LICENSE)

---

## Quick start

```sh
npm install netframe
# or
pnpm add netframe
# or
yarn add netframe
```

Import the stylesheet once in your project entry point:

```js
import 'netframe/dist/netframe.css';
```

Then use the classes anywhere in your HTML:

```html
<button class="nf-button nf-button-primary">INITIALIZE</button>

<div class="nf-card">
  <h3>SYSTEM STATUS</h3>
  <p>All subsystems nominal.</p>
</div>
```

Add the CRT scanline overlay to `<body>` for the full effect:

```html
<body class="nf-crt">
```

---

## What's included

- **20 components** — Button, Input, Card, Table, Avatar, Badge, Tag, Dropdown, Tooltip, Modal, Drawer, Toast, Progress, Spinner, Tabs, Accordion, Breadcrumb, Pagination, Divider, Skeleton
- **4 utility groups** — Glow/shadows, Scanlines/CRT, Glitch animation, Layout helpers
- **3 fonts** — Space Grotesk (display), JetBrains Mono (body), VT323 (labels) — self-hosted woff2
- **CSS custom properties** — every token overridable at runtime, no rebuild needed
- **Zero dependencies** — pure CSS output, framework-agnostic

---

## Theming

Override any `--nf-*` token to retheme:

```css
:root {
  --nf-color-primary:   #bd00ff;  /* swap green for purple */
  --nf-color-secondary: #ff6b00;
}
```

See the [theming docs](https://netframe.cybear.dev/theming) for the full token reference.

---

## Monorepo structure

```text
packages/
  netframe/        CSS library source (Sass → PostCSS)
apps/
  docs/            Astro docs site
.changeset/        Changesets versioning config
.github/workflows/ CI + release automation
```

---

## Development

Requires Node 20 and pnpm 9.

```sh
pnpm install
pnpm build          # build all packages
pnpm dev            # start all dev servers in parallel
```

Build the library only:

```sh
pnpm --filter netframe run build
pnpm --filter netframe run dev   # watch mode
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

GPL-3.0-only — Copyright (C) 2026 Cybear Technologies
