import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import Results from "./pages/Results";
import Team from "./pages/Team";
import Diagnostic from "./pages/Diagnostic";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Routes only. See 02-architecture.md §2.5.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="approach" element={<Approach />} />
        <Route path="results" element={<Results />} />
        <Route path="team" element={<Team />} />
        <Route path="diagnostic" element={<Diagnostic />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
