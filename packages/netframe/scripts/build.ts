#!/usr/bin/env tsx
// NetFrame build pipeline
// Copyright (C) 2026 Cybear Technologies
// SPDX-License-Identifier: GPL-3.0-only
//
// Steps:
//   1. Compile src/netframe.scss → dist/netframe.css   (Dart Sass)
//   2. Run PostCSS (autoprefixer + cssnano) → dist/netframe.min.css
//   3. Copy src/ → dist/scss/  so Sass consumers can @use 'netframe/scss/...'

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from 'sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

const WATCH = process.argv.includes('--watch');

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDirSync(src: string, dest: string): void {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function buildEntry(
  entry: string,
  outName: string,
): Promise<void> {
  const cssOutPath = path.join(DIST, `${outName}.css`);
  const minOutPath = path.join(DIST, `${outName}.min.css`);

  const sassResult = compile(entry, {
    style: 'expanded',
    sourceMap: true,
    loadPaths: [SRC],
  });

  // Autoprefixer pass
  const prefixed = await postcss([autoprefixer]).process(sassResult.css, {
    from: cssOutPath,
    to: cssOutPath,
    map: { inline: false },
  });
  fs.writeFileSync(cssOutPath, prefixed.css, 'utf8');
  if (prefixed.map) {
    fs.writeFileSync(`${cssOutPath}.map`, prefixed.map.toString(), 'utf8');
  }
  console.log(`  ✓ Sass + Autoprefixer → ${path.relative(ROOT, cssOutPath)}`);

  // cssnano minify
  const minified = await postcss([
    autoprefixer,
    cssnano({ preset: 'default' }),
  ]).process(sassResult.css, {
    from: cssOutPath,
    to: minOutPath,
  });
  fs.writeFileSync(minOutPath, minified.css, 'utf8');
  console.log(`  ✓ cssnano → ${path.relative(ROOT, minOutPath)}`);
}

async function build(): Promise<void> {
  const start = Date.now();
  console.log('▶ NetFrame build starting…');

  ensureDir(DIST);

  // 1. Main library: netframe.scss → netframe.css / netframe.min.css
  await buildEntry(path.join(SRC, 'netframe.scss'), 'netframe');

  // 2. Themes: themes/themes.scss → themes.css / themes.min.css
  await buildEntry(path.join(SRC, 'themes', 'themes.scss'), 'themes');

  // 3. Copy src/ → dist/scss/
  const scssDestDir = path.join(DIST, 'scss');
  copyDirSync(SRC, scssDestDir);
  console.log(`  ✓ Copied src/ → ${path.relative(ROOT, scssDestDir)}/`);

  // 4. Copy fonts → dist/fonts/  (so consumers can serve alongside the CSS)
  const fontsSrc  = path.join(SRC, 'fonts');
  const fontsDest = path.join(DIST, 'fonts');
  copyDirSync(fontsSrc, fontsDest);
  console.log(`  ✓ Copied fonts/ → ${path.relative(ROOT, fontsDest)}/`);

  const elapsed = Date.now() - start;
  console.log(`✔ Build complete in ${elapsed}ms`);
}

async function watch(): Promise<void> {
  await build();
  console.log('\n👁  Watching src/ for changes…\n');

  fs.watch(SRC, { recursive: true }, async (_event, filename) => {
    if (filename?.endsWith('.scss')) {
      console.log(`  ~ changed: ${filename}`);
      try {
        await build();
      } catch (err) {
        console.error('Build error:', err);
      }
    }
  });
}

try {
  if (WATCH) {
    await watch();
  } else {
    await build();
  }
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}
