// Shared easing and duration. Never write a raw cubic-bezier inline.
// See docs/revision-plan/05-motion-and-interaction.md §1.

export const EASE = {
  out: [0.22, 1, 0.36, 1], // entrances
  inOut: [0.65, 0, 0.35, 1], // state changes, toggles
  snap: [0.34, 1.3, 0.64, 1], // one small overshoot, for the ratio flip only
};

export const DUR = {
  fast: 0.18, // hover, focus, colour
  base: 0.32, // entrances, card reveals
  slow: 0.6, // the ratio flip, the construct stepper
  slower: 1.1, // hero headline stagger total
};
