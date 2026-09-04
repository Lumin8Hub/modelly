export function ConnectorMotif({ size = 320, color = "#fff", opacity = 0.12 }) {
  return <svg width={size} height={size} viewBox="0 0 320 320" style={{ opacity }} aria-hidden="true"><path d="M20 160h80l40-80h60l40 80h60M20 160l80 80h60l40-80h60l40 80" fill="none" stroke={color} strokeWidth="1.5" /></svg>;
}
