import { Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { GetStarted } from "./pages/GetStarted";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { pillars } from "./content/pillars";
import { fiveFs } from "./content/fiveFs";
import { models } from "./content/models";

function DetailRoute({ pages }) {
  const { slug } = useParams();
  const page = pages.find((candidate) => candidate.slug === slug);
  return page ? <DetailPage page={page} /> : <NotFound />;
}

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pillars/:slug" element={<DetailRoute pages={pillars} />} />
    <Route path="/five-fs/:slug" element={<DetailRoute pages={fiveFs} />} />
    <Route path="/models/:slug" element={<DetailRoute pages={models} />} />
    <Route path="/about" element={<About />} />
    <Route path="/get-started" element={<GetStarted />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout>;
}
