import { LINKEDIN } from "../lib/site";

// Copy deck §5.2–§5.4.
//
// Fabio's and Jennifer's bios are INTERIM. The client is rewriting them
// (07-open-items.md A2). These versions contain no metric and no employer name,
// so nothing in them can be wrong. Replace this file when the real ones arrive.
//
// Jennifer shows CPA alone. The v1 site also credited PSM 1, which Question 35
// does not list. Confirm before adding it back (07 A2).
//
// `photo: null` renders the monogram tile in PrincipalCards. When headshots
// arrive (IMG-05), set this to the imported image and nothing else changes.
export const PRINCIPALS = [
  {
    name: "Fabio Ciampa",
    initials: "FC",
    role: "Co-founder",
    credentials: "CPA, CA",
    bio: "Fabio has spent his career in enterprise finance and financial systems: planning and analysis for revenue, cost of goods and product development, revenue assurance, billing system controls, and the data engineering underneath reporting. At Modelly he leads model design and systems work.",
    linkedIn: LINKEDIN.fabio,
    photo: null,
    interim: true,
  },
  {
    name: "Jennifer Hui",
    initials: "JH",
    role: "Co-founder",
    credentials: "CPA",
    bio: "Jennifer has spent her career in finance across telecom, retail and consumer packaged goods. Her work covers planning and analysis for revenue, equipment and operating costs, subscriber reporting and forecasting, and analytics. At Modelly she leads process and delivery.",
    linkedIn: LINKEDIN.jennifer,
    photo: null,
    interim: true,
  },
  {
    // Approved by the client in Question 33.B and shipped as written.
    //
    // Copy deck §5.4 flags that this text breaks three of the §0 voice rules and
    // recommends the tightened alternative below. Both were to go to Elaine for
    // her choice; until she picks, the approved original ships. If she accepts
    // the tightened version, swap the `bio` value for `bioTightened`.
    name: "Elaine Toribio",
    initials: "ET",
    role: "Growth",
    credentials: null,
    bio: "Elaine is a growth-focused marketing executive with 20+ years of experience scaling brands across telecom, technology, and enterprise services. She has led major growth initiatives for Hydro One, Rogers, and Bell, driving revenue growth, transformative rebrands, market expansion, and measurable gains in lead generation and profitability. Elaine brings enterprise-level marketing leadership and proven commercial strategy to Modelly's growth.",
    bioTightened:
      "Elaine has spent more than twenty years growing brands in telecom, technology and enterprise services, including growth programmes at Hydro One, Rogers and Bell covering rebrands, market expansion and lead generation. At Modelly she leads growth.",
    linkedIn: LINKEDIN.elaine,
    photo: null,
    interim: false,
  },
];

// Copy deck §5.5 and §1.7. Industry categories only — no logos, and no company
// names outside an individual bio. Question 31's permission table came back
// blank, so the client selected the fallback.
export const EXPERIENCE_BANDS = [
  "Telecom",
  "Retail",
  "Consumer packaged goods",
  "Professional services",
  "Enterprise software",
];

export const EXPERIENCE_CAPTION =
  "Named past employers appear in each bio above. We do not display employer or client logos.";
