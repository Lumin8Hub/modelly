// The connector mark: three rounded squares joined at a central node. The only
// piece of visual identity the site has, so it is used assertively rather than
// at 4.5% opacity. See 04-design-system.md §6.9.
//
// Merges the v1 ConnectorMotif (untinted, ambient) and TriadMark (per-pillar
// tints) into one component with a `tint` prop.

const SQUARES = [
  { x: 80, y: 20, nodeX: 100, nodeY: 40 }, // top
  { x: 30, y: 130, nodeX: 50, nodeY: 150 }, // bottom left
  { x: 130, y: 130, nodeX: 150, nodeY: 150 }, // bottom right
];

export function ConnectorMark({
  size = 96,
  color = "currentColor",
  opacity = 1,
  tint = null,
  strokeWidth = 1.5,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ opacity }}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke={color} strokeWidth={strokeWidth} fill="none">
        <circle cx="100" cy="100" r="3" fill={color} />
        <line x1="100" y1="100" x2="100" y2="40" />
        <line x1="100" y1="100" x2="50" y2="150" />
        <line x1="100" y1="100" x2="150" y2="150" />
      </g>
      {SQUARES.map((square, i) => (
        <rect
          key={square.nodeX}
          x={square.x}
          y={square.y}
          width="40"
          height="40"
          rx="10"
          fill={tint ? tint[i] : "none"}
          stroke={color}
          strokeWidth={strokeWidth}
        />
      ))}
      {SQUARES.map((square) => (
        <circle key={`n-${square.nodeX}`} cx={square.nodeX} cy={square.nodeY} r="2.5" fill={color} />
      ))}
    </svg>
  );
}
