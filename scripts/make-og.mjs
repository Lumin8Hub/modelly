// Generates the Open Graph card and the raster favicons from SVG source.
// Run on demand: `node scripts/make-og.mjs`. Not part of the build.
//
// This is the interim card described in 02-architecture.md §6.3: ink ground,
// wordmark, headline, connector mark cropped large at the right edge. An ugly
// preview beats no preview, and the site's primary reader arrives from a
// referral that travels through email and LinkedIn.
//
// See docs/revision-plan/06-image-brief.md §8 and §9.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");

const INK = "#0B0C0E";
const TEXT_INV = "#F5F5F0";
const TEXT_INV_MUT = "#A0A099";
const SIGNAL_BRIGHT = "#5EC8BC";

// The mark, as a reusable fragment. Geometry matches
// src/components/primitives/ConnectorMark.jsx.
function connectorMark({ color, strokeWidth = 1.5 }) {
  return `
    <g stroke="${color}" stroke-width="${strokeWidth}" fill="none">
      <circle cx="100" cy="100" r="3" fill="${color}" />
      <line x1="100" y1="100" x2="100" y2="40" />
      <line x1="100" y1="100" x2="50" y2="150" />
      <line x1="100" y1="100" x2="150" y2="150" />
      <rect x="80" y="20" width="40" height="40" rx="10" />
      <rect x="30" y="130" width="40" height="40" rx="10" />
      <rect x="130" y="130" width="40" height="40" rx="10" />
      <circle cx="100" cy="40" r="2.5" fill="${color}" />
      <circle cx="50" cy="150" r="2.5" fill="${color}" />
      <circle cx="150" cy="150" r="2.5" fill="${color}" />
    </g>`;
}

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}" />
  <g transform="translate(760, 60) scale(2.6)" opacity="0.1">
    ${connectorMark({ color: SIGNAL_BRIGHT, strokeWidth: 2 })}
  </g>
  <text x="72" y="112" fill="${TEXT_INV}" font-family="Inter Tight, Inter, system-ui, sans-serif"
        font-size="38" font-weight="500" letter-spacing="-0.7">modelly</text>
  <text x="72" y="300" fill="${TEXT_INV}" font-family="Inter Tight, Inter, system-ui, sans-serif"
        font-size="66" font-weight="500" letter-spacing="-2">Less time producing information.</text>
  <text x="72" y="378" fill="${TEXT_INV}" font-family="Inter Tight, Inter, system-ui, sans-serif"
        font-size="66" font-weight="500" letter-spacing="-2">More time using it.</text>
  <text x="72" y="546" fill="${TEXT_INV_MUT}" font-family="JetBrains Mono, ui-monospace, monospace"
        font-size="22" letter-spacing="0.9">Planning, forecasting and reporting systems</text>
</svg>`;

const faviconSvg = fs.readFileSync(path.join(PUBLIC_DIR, "favicon.svg"));

await sharp(Buffer.from(ogSvg))
  .png({ compressionLevel: 9 })
  .toFile(path.join(PUBLIC_DIR, "og-default.png"));

await sharp(faviconSvg, { density: 384 })
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toFile(path.join(PUBLIC_DIR, "favicon-32.png"));

// 180×180 with the mark on a paper ground and 20% padding, per 06 §8.
await sharp(faviconSvg, { density: 384 })
  .resize(108, 108)
  .extend({
    top: 36,
    bottom: 36,
    left: 36,
    right: 36,
    background: "#FBFBF8",
  })
  .flatten({ background: "#FBFBF8" })
  .png({ compressionLevel: 9 })
  .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));

console.log("wrote og-default.png, favicon-32.png, apple-touch-icon.png");
