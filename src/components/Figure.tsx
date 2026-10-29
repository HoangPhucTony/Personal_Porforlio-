import type { Role } from "../data/profile";

/** Decorative mini-figure used when a project has no cover: a bar chart for DA, a process flow for BA. */
export default function Figure({ role, seed }: { role: Role; seed: number }) {
  if (role === "da") {
    const bars = [0.45, 0.7, 0.55, 0.9, 0.65, 0.8, 0.5].map((h, i) => ((h + seed * 0.13 * (i % 3)) % 0.6) + 0.35);
    const top = bars.indexOf(Math.max(...bars));
    return (
      <svg viewBox="0 0 220 90" className="h-full w-full" aria-hidden>
        <line x1="10" y1="80" x2="210" y2="80" stroke="hsl(var(--line))" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={18 + i * 27}
            y={80 - h * 68}
            width="16"
            height={h * 68}
            rx="2"
            fill="hsl(var(--accent))"
            opacity={i === top ? 1 : 0.35}
            style={{ transformOrigin: `${26 + i * 27}px 80px`, transition: `transform .6s cubic-bezier(.22,1,.36,1) ${i * 40}ms` }}
            className="group-hover:[transform:scaleY(1.08)]"
          />
        ))}
        <polyline
          points={bars.map((h, i) => `${26 + i * 27},${80 - h * 68 - 6}`).join(" ")}
          fill="none"
          stroke="hsl(var(--fg))"
          strokeOpacity="0.5"
          strokeDasharray="3 3"
        />
      </svg>
    );
  }
  const nodes = ["As-is", "Gap", "To-be", "Spec"];
  return (
    <svg viewBox="0 0 220 90" className="h-full w-full" aria-hidden>
      {nodes.map((n, i) => {
        const x = 8 + i * 54;
        return (
          <g key={n}>
            {i < nodes.length - 1 && <line x1={x + 44} y1="45" x2={x + 54} y2="45" stroke="hsl(var(--accent))" strokeWidth="1.5" />}
            {i === 1 ? (
              <polygon points={`${x + 22},25 ${x + 44},45 ${x + 22},65 ${x},45`} fill="none" stroke="hsl(var(--accent))" />
            ) : (
              <rect x={x} y="31" width="44" height="28" rx="6" fill={i === nodes.length - 1 ? "hsl(var(--accent) / 0.2)" : "none"} stroke="hsl(var(--accent))" />
            )}
            <text x={x + 22} y="48" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="hsl(var(--fg))">
              {n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
