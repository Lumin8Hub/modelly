import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ScrollToTop } from "./ScrollToTop";
import { Seo } from "./Seo";
import { SkipLink } from "./SkipLink";

export function Layout({ children }) {
  return <><SkipLink /><Nav /><ScrollToTop /><Seo /><main id="main">{children}</main><Footer /></>;
}
