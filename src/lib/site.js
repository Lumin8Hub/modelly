// One place for the deployed origin. Absolute URLs are needed for Open Graph,
// canonical links, JSON-LD and the sitemap — Vite rewrites href and src for the
// base path but never <meta content>.
//
// At the modelly.ca cutover, change this line and the hardcoded base in
// public/404.html. Nothing else refers to the origin.
export const SITE_ORIGIN = "https://lumin8hub.github.io";

// The Vite base path, without a trailing slash. "" once the site moves to a
// root domain.
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

export function absoluteUrl(pathname = "/") {
  // The root keeps its trailing slash so the canonical and og:url for the
  // homepage match the URL the site is actually served from.
  const path = pathname === "/" ? "/" : pathname;
  return `${SITE_ORIGIN}${BASE_PATH}${path}`;
}

export const LINKEDIN = {
  company: "https://www.linkedin.com/company/modelly",
  fabio: "https://www.linkedin.com/in/fabio-ciampa-869a3a10a/",
  jennifer: "https://www.linkedin.com/in/jennifer-hui-cpa/",
  elaine: "https://www.linkedin.com/in/elainetoribio/",
};
