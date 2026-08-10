/**
 * BackgroundPattern
 * Subtle tiled SVG motifs used behind sections to build PayBayGo's visual identity
 * without competing with foreground content. Always render inside a `relative
 * overflow-hidden` parent; this component is absolutely positioned and inert.
 *
 * variants:
 *  - "bays"   parking-bay stall outlines (hero / product sections)
 *  - "grid"   fine map/grid lines (data-forward sections e.g. Fleet)
 *  - "routes" dotted travel route with waypoint pins (How it works / process)
 *  - "lanes"  diagonal lane-marking dashes (dividers / CTA bands)
 */
const PATTERNS = {
  bays: (id) => (
    <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
      <path
        d="M8 8 L8 2 L20 2 M8 64 L8 70 L20 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M40 0 V72" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
    </pattern>
  ),
  grid: (id) => (
    <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0 H0 V48" fill="none" stroke="currentColor" strokeWidth="1" />
    </pattern>
  ),
  routes: (id) => (
    <pattern id={id} width="140" height="140" patternUnits="userSpaceOnUse">
      <path
        d="M-10 120 C 30 120, 30 60, 70 60 S 110 10, 150 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
      <circle cx="70" cy="60" r="3.5" fill="currentColor" />
      <path d="M70 52 L74 60 L70 68 L66 60 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </pattern>
  ),
  lanes: (id) => (
    <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
      <rect x="0" y="18" width="24" height="4" fill="currentColor" />
    </pattern>
  ),
};

export default function BackgroundPattern({
  variant = "bays",
  className = "",
  color = "text-pattern",
  opacity = 0.5,
}) {
  const id = `pg-pattern-${variant}`;
  const build = PATTERNS[variant] || PATTERNS.bays;

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${color} ${className}`}
      style={{ opacity }}
    >
      <defs>{build(id)}</defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
