export function Monogram({ initials, image, label }) {
  return <div className="flex aspect-[4/5] w-full items-center justify-center border border-rule bg-paper-elevated font-display text-4xl text-ink">
    {image ? <img src={image} alt={label || initials} className="portrait-image h-full w-full object-cover" /> : initials}
  </div>;
}
