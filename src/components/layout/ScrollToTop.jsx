import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does not reset scroll on navigation. Reset on pathname change,
// but skip the reset when a hash is present so /services#models still works.
// See 02-architecture.md §2.4.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
