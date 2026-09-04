# Modelly

Modelly is a Vite and React site for planning, forecasting and reporting systems. It uses React Router, Tailwind CSS, Framer Motion and Lucide icons.

## Versions

- `main` is the v1 site at `/modelly/`.
- `v2` is the multi-page site at `/modelly/v2/`.

The Pages workflow builds both branches side by side while v2 is reviewed.

## Environment

Copy `.env.example` to `.env` when needed:

- `VITE_BASE` sets the published base path.
- `VITE_PREVIEW` shows draft and placeholder badges when `true`.
- `VITE_FORM_ENDPOINT` reserves the form endpoint for the selected form provider.

Run `npm run dev` for local development, `npm run build` for the default build, `npm run lint` for linting, and `npm run check:copy` for the client copy rules.

## Cut-over

When v2 is approved:

1. Set `VITE_BASE` back to `/modelly/`.
2. Merge `v2` into `main`.
3. Remove the v1 checkout and build from `.github/workflows/deploy.yml`.
4. Publish the single v2 build at the site root.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run check:copy
npm run build
```

## Deployment

GitHub Actions deploys the static Vite build to GitHub Pages from `.github/workflows/deploy.yml`. It checks out `main` and builds v1 at `/modelly/`, checks out `v2` and builds v2 at `/modelly/v2/`, then assembles both into one Pages artifact.
