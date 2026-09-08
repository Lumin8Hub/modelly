import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { meta } from "../../content/meta";

export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const details = meta[pathname] || { title: "Modelly — Planning, forecasting and reporting systems", description: "Planning, forecasting and reporting systems built in the tools your team already has." };
    document.title = details.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", details.description);
    document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, nofollow");
    const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(Object.assign(document.createElement("link"), { rel: "canonical" }));
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    canonical.setAttribute("href", `${window.location.origin}${base}${pathname === base ? "/" : pathname.replace(base, "")}`);
  }, [pathname]);
  return null;
}
