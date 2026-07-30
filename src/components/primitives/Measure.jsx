// Prose never exceeds 660px — roughly 68 characters at the 17px body size.
// One value, one primitive, rather than max-w-[58ch] repeated inline.
// See 04-design-system.md §2.6.
export function Measure({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`max-w-measure ${className}`}>{children}</Tag>;
}
