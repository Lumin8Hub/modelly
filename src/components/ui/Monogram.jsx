export function Monogram({ initials, image, label }) {
  return <div className="mb-5 flex aspect-square max-w-[150px] items-center justify-center border border-rule bg-paper-elevated font-display text-4xl text-ink">
    {image ? <img src={image} alt={label || initials} className="h-full w-full object-cover" /> : initials}
  </div>;
}
