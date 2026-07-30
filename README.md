# Modelly

Marketing site for Modelly, which builds planning, forecasting and reporting
systems in Microsoft 365 or Google Workspace so finance teams spend less time
producing information and more time using it.

The site is a credibility instrument for warm referrals, not a lead magnet.

Every decision behind the current build is documented in the Round 2 revision
plan, which is **held privately and not committed** — this repository is public
and the plan contains commercially sensitive client material. Source comments
cite it as `docs/revision-plan/NN-*.md §N`. Ask Lumin8 for a copy before changing
copy, tokens or structure: the copy is client-approved verbatim and several
omissions on this site are deliberate legal positions, not oversights.

## Stack

- Vite
- React
- React Router
- Tailwind CSS
- Framer Motion
- lucide-react

## Development

```bash
npm install
npm run dev
```

The dev server serves the site at `http://localhost:5173/modelly/`. The
`/modelly/` path is required — `vite.config.js` sets `base: '/modelly/'` for
GitHub Pages.

## Environment

```bash
cp .env.example .env.local
```

`VITE_FORM_ENDPOINT` is the diagnostic form's POST target (Formspree or
Web3Forms, owned by a Modelly account, never the agency's). Without it the form
renders an inline configuration error rather than submitting into nothing. Never
commit the real value.

## Checks

```bash
npm run lint
npm run build
```

Both must pass before any commit. CI runs them on pull requests via
`.github/workflows/ci.yml`.

## Images

Drop client-supplied raster sources into `src/assets/raw/`. The `prebuild` script
(`scripts/convert-images.mjs`) converts them to AVIF, WebP and PNG in
`src/assets/`, and no-ops when the directory is empty. Diagrams are inline SVG
components in `src/components/diagrams/`, not files, so they can respond to theme
and reduced-motion.

`scripts/make-og.mjs` regenerates `public/og-default.png` and the raster
favicons. Run it on demand, not as part of the build.

## Structure

```
src/content/      All copy and data. One place to edit words.
src/lib/          Motion constants, reduced-motion hook, site origin, analytics stub.
src/components/   layout/ primitives/ diagrams/ sections/
src/pages/        One file per route.
```

Copy lives in `src/content/`, never inline in JSX — the client sends revised bios,
case studies and framework names, and each should be a one-file edit.

## Deployment

GitHub Actions deploys the static Vite build to GitHub Pages on pushes to `main`
via `.github/workflows/deploy.yml`.

Deep links are handled by `public/404.html`, which stashes the requested path in
`sessionStorage` and hands it to the SPA. The base path is hardcoded there;
`src/lib/site.js` holds the deployed origin used for Open Graph, canonical links
and the sitemap. At the `modelly.ca` cutover, both need updating along with
`vite.config.js`.

### Known limitation, v1.1

The site is client-rendered, so a crawler or link unfurler fetching a deep link
gets `404.html` with no metadata. Only the root URL previews richly. Moving to
`vite-react-ssg` pre-renders each route to static HTML with no change to the
component tree; that is planned for v1.1.
