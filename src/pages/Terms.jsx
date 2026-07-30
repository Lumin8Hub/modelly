import { LegalPage } from "../components/LegalPage";

// Structure from copy deck §7.3. Question 50 requires a copyright notice covering
// the framework.
const SECTIONS = [
  { heading: "Using this site" },
  {
    heading: "Our intellectual property",
    note: "Must carry a copyright notice covering Modelly's frameworks, methods and templates.",
  },
  {
    heading: "What this site is not",
    note: "No professional advice is given or implied by the content here.",
  },
  { heading: "Links to other sites" },
  { heading: "Changes to these terms" },
  { heading: "How to reach us" },
];

export default function Terms() {
  return <LegalPage title="Terms of use" lastUpdated="Not yet published" sections={SECTIONS} />;
}
