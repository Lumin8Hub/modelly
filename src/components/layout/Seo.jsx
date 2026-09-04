import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { meta } from "../../content/meta";

export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const details = meta[pathname] || { title: "Modelly — Planning, forecasting and reporting systems", description: "Planning, forecasting and reporting systems built in the tools your team already has." };
    document.title = details.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", details.description);
  }, [pathname]);
  return null;
}
