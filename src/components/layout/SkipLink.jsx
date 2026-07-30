// Visible on focus only. Copy in 03-copy-deck.md §8.3.
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:font-sans focus:text-body-sm focus:text-text-inv"
    >
      Skip to content
    </a>
  );
}
