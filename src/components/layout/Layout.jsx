import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTop } from "./ScrollToTop";
import { Seo } from "./Seo";
import { SkipLink } from "./SkipLink";

export function Layout() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <SkipLink />
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
