import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { GetStarted } from "./pages/GetStarted";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Fundamentals } from "./pages/Fundamentals";
import { Construct } from "./pages/Construct";
import { ProjectManagementFramework } from "./pages/ProjectManagementFramework";
import { pillars } from "./content/pillars";
import { models } from "./content/models";

function DetailRoute({ pages, kind }) {
  const { slug } = useParams();
  const page = pages.find((candidate) => candidate.slug === slug);
  return page ? <DetailPage page={page} kind={kind} /> : <NotFound />;
}

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pillars/:slug" element={<DetailRoute pages={pillars} kind="pillar" />} />
    <Route path="/five-fs" element={<Fundamentals />} />
    <Route path="/five-fs/f1" element={<Navigate replace to="/five-fs#functions" />} />
    <Route path="/five-fs/f2" element={<Navigate replace to="/five-fs#features" />} />
    <Route path="/five-fs/f3" element={<Navigate replace to="/five-fs#format" />} />
    <Route path="/five-fs/f4" element={<Navigate replace to="/five-fs#framework" />} />
    <Route path="/five-fs/f5" element={<Navigate replace to="/five-fs#foundation" />} />
    <Route path="/five-cs" element={<Construct />} />
    <Route path="/project-management-framework" element={<ProjectManagementFramework />} />
    <Route path="/models/:slug" element={<DetailRoute pages={models} kind="tool" />} />
    <Route path="/about" element={<About />} />
    <Route path="/get-started" element={<GetStarted />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout>;
}
