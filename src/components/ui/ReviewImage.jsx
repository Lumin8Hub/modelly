export function ReviewImage({ image, caption = true, className = "" }) {
  return <figure className={`w-full ${className}`}>
    <div className="aspect-[4/3] w-full border border-rule bg-white p-4">
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
    </div>
    {caption && <figcaption className="mt-3 text-sm text-text-muted">Illustrative image — final Modelly image pending.</figcaption>}
  </figure>;
}

export function PendingPortrait({ initials, name }) {
  return <figure>
    <div className="flex aspect-[4/5] w-full items-center justify-center border border-rule bg-paper-elevated font-display text-4xl text-ink" aria-label={`${name} portrait pending`}>{initials}</div>
    <figcaption className="mt-3 text-sm text-text-muted">Portrait pending from Lumin8</figcaption>
  </figure>;
}
