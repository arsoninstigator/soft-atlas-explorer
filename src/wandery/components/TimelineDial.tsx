const STOPS = [1800, 1914, 1945, 1991, 2025];
const ERAS: Record<number, string> = {
  1800: "imperial cartography",
  1914: "the long summer",
  1945: "post-war redrawings",
  1991: "after the wall",
  2025: "present-day atlas",
};

interface Props { year: number; onYear: (y: number) => void; }

export default function TimelineDial({ year, onYear }: Props) {
  const nearestStop = STOPS.reduce((p, s) => Math.abs(s - year) < Math.abs(p - year) ? s : p, STOPS[0]);
  const era = ERAS[year] ?? ERAS[nearestStop];
  return (
    <div className="pointer-events-auto bg-card/75 backdrop-blur-xl border border-border/70 rounded-2xl px-4 py-3 shadow-sm w-[300px]">
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">timeline</span>
        <span className="font-serif text-2xl leading-none text-foreground">{year}</span>
      </div>
      <div className="text-[11px] text-muted-foreground italic mb-2">{era}</div>
      <input
        type="range" min={1800} max={2025} step={1} value={year}
        onChange={e => onYear(+e.target.value)}
        className="wd-range w-full"
      />
      <div className="flex justify-between mt-1.5 font-mono text-[9px] text-muted-foreground/70">
        {STOPS.map(y => (
          <button key={y} onClick={() => onYear(y)} className="hover:text-foreground transition-colors">
            {y}
          </button>
        ))}
      </div>
    </div>
  );
}