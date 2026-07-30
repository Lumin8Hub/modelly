// Asset gate. Every raster image on this site is blocked on the client
// (07-open-items.md A1 and A2), so each entry is null and the components render
// their prescribed interim state instead.
//
// To wire an asset in:
//   1. Drop the source into src/assets/raw/ (kebab-case, purpose first).
//   2. Run `npm run build` — the prebuild script emits .avif/.webp/.png.
//   3. Import them here and replace the null.
//
// Nothing else changes. The components already branch on these values.
//
// Do not point these at fabricated screenshots. A constructed model is
// detectable in seconds by exactly the reader this site is built for
// (06-image-brief.md §0.1).

// IMG-01 — hero model screenshot. Interim: the connector mark as a structural
// element behind the headline (06 §2).
export const HERO_MODEL = null;

// IMG-02 and IMG-03 — the before/after pair feeding the comparison slider.
// Both are required: one alone is useless. Interim: the FilesToWorkbook diagram
// with the alternative headline (copy deck §1.6).
export const COMPARE_IMAGES = null;
// Shape when supplied:
// export const COMPARE_IMAGES = {
//   before: { avif, webp, png, alt: "…", width: 2400, height: 1500 },
//   after:  { avif, webp, png, alt: "…", width: 2400, height: 1500 },
//   // One paragraph naming the four differences, for screen reader users.
//   description: "…",
// };
