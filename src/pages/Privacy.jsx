import { LegalPage } from "../components/LegalPage";

// Structure from copy deck §7.2. Required because the diagnostic form collects
// personal information (Question 51). The third-party list cannot be written until
// the form provider and analytics tool are chosen (07 B4).
const SECTIONS = [
  { heading: "What we collect" },
  { heading: "Why we collect it" },
  { heading: "Who can see it" },
  { heading: "How long we keep it" },
  {
    heading: "Third parties we use",
    note: "To be completed once the form provider and analytics tool are confirmed. Both must be named explicitly.",
  },
  { heading: "Your rights under PIPEDA" },
  { heading: "How to reach us" },
];

export default function Privacy() {
  return <LegalPage title="Privacy policy" lastUpdated="Not yet published" sections={SECTIONS} />;
}
