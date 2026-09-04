import { Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";
import { NotFound } from "./pages/NotFound";
import { StubPage } from "./pages/StubPage";
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
    <Route path="/about" element={<StubPage title="About Us" />} />
    <Route path="/get-started" element={<StubPage title="Start with a diagnostic." />} />
    <Route path="/privacy" element={<StubPage title="Privacy policy" />} />
    <Route path="/terms" element={<StubPage title="Terms of use" />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout>;
}
