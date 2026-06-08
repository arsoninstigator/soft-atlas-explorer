import { useState, useMemo } from "react";
import { Filter, X, ArrowUpDown } from "lucide-react";

export type SortDir = "none" | "asc" | "desc";

interface Props {
  countries: string[];        // unique iso codes to offer
  selected: string[];
  onSelected: (next: string[]) => void;
  sort: SortDir;
  onSort: (s: SortDir) => void;
  countryLabel?: (iso: string) => string;
  showCountryFilter?: boolean;
}

export default function HistoryListFilters({
  countries, selected, onSelected, sort, onSort,
  countryLabel, showCountryFilter = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as string[];
    return countries
      .filter(c => !selected.includes(c))
      .filter(c => c.toLowerCase().startsWith(q) || (countryLabel?.(c) ?? c).toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, countries, selected, countryLabel]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80 hover:border-foreground/30 transition-colors"
      >
        <Filter className="h-3 w-3" />
        filter
        {(selected.length > 0 || sort !== "none") && (
          <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground/80 text-background px-1.5 text-[9px]">
            {selected.length + (sort !== "none" ? 1 : 0)}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[320px] rounded-2xl border border-border/70 bg-card/95 backdrop-blur-xl shadow-xl p-4 z-30">
          {showCountryFilter && (
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                filter by country involvement
              </div>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="type first letters…"
                className="w-full rounded-lg border border-border/70 bg-background/70 px-3 py-1.5 font-mono text-[11px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40"
              />
              {suggestions.length > 0 && (
                <div className="mt-1.5 rounded-lg border border-border/60 bg-background/70 overflow-hidden">
                  {suggestions.map(c => (
                    <button
                      key={c}
                      onClick={() => { onSelected([...selected, c]); setQuery(""); }}
                      className="block w-full text-left px-3 py-1.5 font-mono text-[11px] hover:bg-muted/60"
                    >
                      {countryLabel?.(c) ?? c} <span className="text-muted-foreground/60">· {c}</span>
                    </button>
                  ))}
                </div>
              )}
              {selected.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selected.map(c => (
                    <span key={c} className="inline-flex items-center gap-1 rounded-full bg-muted/70 px-2 py-0.5 font-mono text-[10px]">
                      {countryLabel?.(c) ?? c}
                      <button
                        onClick={() => onSelected(selected.filter(x => x !== c))}
                        className="hover:text-foreground text-muted-foreground"
                      >
                        <X className="h-2.5 w-2.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={showCountryFilter ? "mt-4" : ""}>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-2 flex items-center gap-1.5">
              <ArrowUpDown className="h-3 w-3" /> sort by timeline
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {(["none","asc","desc"] as SortDir[]).map(s => (
                <button
                  key={s}
                  onClick={() => onSort(s)}
                  className={[
                    "rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                    sort === s
                      ? "border-foreground/40 bg-foreground/10 text-foreground"
                      : "border-border/70 bg-background/40 text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {s === "none" ? "default" : s === "asc" ? "oldest →" : "newest →"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function parseYear(s: string): number | null {
  const m = s.match(/-?\d{3,4}/);
  if (!m) return null;
  const n = parseInt(m[0], 10);
  return Number.isFinite(n) ? n : null;
}
