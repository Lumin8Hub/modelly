import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FALLBACK_META, META } from "../../content/meta";
import { absoluteUrl } from "../../lib/site";

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Sets document.title and the description, canonical and OG tags on route
// change. No dependency needed — see 02-architecture.md §6.2.
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = META[pathname] ?? FALLBACK_META;
    const canonical = absoluteUrl(pathname);

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", canonical);
  }, [pathname]);

  return null;
}
