import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let timeout;
    let delayedTimeout;
    const scrollToHash = () => document.getElementById(id)?.scrollIntoView({ block: "start" });
    const frame = requestAnimationFrame(() => {
      scrollToHash();
      timeout = window.setTimeout(scrollToHash, 0);
      delayedTimeout = window.setTimeout(scrollToHash, 300);
    });
    return () => { cancelAnimationFrame(frame); window.clearTimeout(timeout); window.clearTimeout(delayedTimeout); };
  }, [pathname, hash]);
  return null;
}
