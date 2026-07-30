import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/inter-tight/wght.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./index.css";
import App from "./App.jsx";

// GitHub Pages deep-link handoff. public/404.html stashes the requested path in
// sessionStorage and redirects to the SPA entry point; we restore it here before
// the router mounts. See 02-architecture.md §2.3.
const redirect = sessionStorage.getItem("redirectPath");
if (redirect) {
  sessionStorage.removeItem("redirectPath");
  window.history.replaceState(null, "", import.meta.env.BASE_URL + redirect);
}

// Read the base path from Vite so the modelly.ca cutover is a one-line change.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
