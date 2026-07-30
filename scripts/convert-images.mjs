// Converts anything dropped into src/assets/raw/ into AVIF and WebP in
// src/assets/. Runs as `prebuild`, so it fires on every local and CI build.
//
// It must no-op silently when the directory is missing or empty: every raster
// asset on this project is currently blocked on the client (07-open-items.md
// A1/A2), and git does not track empty directories, so in CI the folder may not
// exist at all. sharp is imported lazily for the same reason — the no-op path
// must not depend on it.
//
// See docs/revision-plan/04-design-system.md §8.3 and 06-image-brief.md §11.

import fs from "node:fs";
import path from "node:path";

const RAW_DIR = path.join(process.cwd(), "src", "assets", "raw");
const OUT_DIR = path.join(process.cwd(), "src", "assets");
const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".tif", ".tiff"]);

if (!fs.existsSync(RAW_DIR)) {
  process.exit(0);
}

const sources = fs
  .readdirSync(RAW_DIR)
  .filter((file) => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()));

if (sources.length === 0) {
  process.exit(0);
}

const { default: sharp } = await import("sharp");

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const file of sources) {
  const base = path.basename(file, path.extname(file));
  const input = path.join(RAW_DIR, file);

  await sharp(input).avif({ quality: 62 }).toFile(path.join(OUT_DIR, `${base}.avif`));
  await sharp(input).webp({ quality: 78 }).toFile(path.join(OUT_DIR, `${base}.webp`));
  // PNG fallback for the <picture> element, per 06 §11.
  await sharp(input)
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_DIR, `${base}.png`));

  console.log(`converted ${file} → avif, webp, png`);
}
