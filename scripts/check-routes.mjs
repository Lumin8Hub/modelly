import { readFileSync } from "node:fs";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const nav = readFileSync(new URL("../src/content/nav.js", import.meta.url), "utf8");
const required = [
  'path="/five-fs"', 'path="/five-cs"', 'path="/project-management-framework"',
  'to="/five-fs#functions"', 'to="/five-fs#features"', 'to="/five-fs#format"',
  'to="/five-fs#framework"', 'to="/five-fs#foundation"', 'path="*"',
];
const navLabels = ["Our Pillars", "Modelling Fundamentals and Construct", "Project Management Framework", "About Us", "Get Started", "Model Governance", "Fundamentals", "Construct"];
const missing = required.filter((entry) => !app.includes(entry)).concat(navLabels.filter((entry) => !nav.includes(`"${entry}"`)));
if (missing.length) {
  console.error(`Route check failed: ${missing.join(", ")}`);
  process.exit(1);
}
console.log("Route check passed: new routes, legacy redirects, 404 route and navigation labels are present.");
