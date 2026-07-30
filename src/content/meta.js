// Per-route title and description. See 02-architecture.md §6.2.
// One Open Graph card serves every route (IMG-09), so no ogImage key here —
// per-route cards are a v1.1 nicety.
export const META = {
  "/": {
    title: "Modelly — spend less time producing numbers, more time using them",
    description:
      "Modelly builds planning, forecasting and reporting systems in Microsoft 365 or Google Workspace so finance teams stop spending 80% of their time on preparation.",
  },
  "/services": {
    title:
      "What we do — enterprise systems, accounting processes, persistent models | Modelly",
    description:
      "Three connected areas: the systems your numbers come from, the processes and controls around them, and models that keep working after we leave.",
  },
  "/approach": {
    title: "How we work — our model-building method | Modelly",
    description:
      "Four delivery layers, five model fundamentals, five construct steps, and a project discipline that keeps the work on schedule.",
  },
  "/results": {
    title: "Results | Modelly",
    description: "What we changed, for whom, and what it was worth.",
  },
  "/team": {
    title: "Team — Fabio Ciampa, Jennifer Hui, Elaine Toribio | Modelly",
    description:
      "Two CPAs and a marketing executive with forty years between them across telecom, retail, consumer packaged goods, professional services and enterprise software.",
  },
  "/diagnostic": {
    title: "Start a diagnostic | Modelly",
    description:
      "Five questions. We review your answers and come back within two business days.",
  },
  "/privacy": {
    title: "Privacy policy | Modelly",
    description: "How Modelly handles personal information.",
  },
  "/terms": {
    title: "Terms of use | Modelly",
    description: "Terms of use for modelly.ca.",
  },
};

export const FALLBACK_META = {
  title: "Page not found | Modelly",
  description: "That page does not exist.",
};
