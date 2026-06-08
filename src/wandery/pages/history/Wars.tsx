import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { WARS } from "@/wandery/data/history-events";
import HistoryListFilters, { parseYear, type SortDir } from "@/wandery/components/HistoryListFilters";

export default function Wars() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const all = useMemo(() => Object.values(WARS), []);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState<SortDir>("none");

  const allCountries = useMemo(() => {
    const set = new Set<string>();
    all.forEach(w => w.sides.forEach(s => s.members.forEach(c => set.add(c))));
    return Array.from(set).sort();
  }, [all]);

  const list = useMemo(() => {
    let l = all;
    if (selected.length > 0) {
      l = l.filter(w => selected.every(c => w.sides.some(s => s.members.includes(c))));
    }
    if (sort !== "none") {
      l = [...l].sort((a, b) => {
        const ya = parseYear(a.years) ?? 0;
        const yb = parseYear(b.years) ?? 0;
        return sort === "asc" ? ya - yb : yb - ya;
      });
    }
    return l;
  }, [all, selected, sort]);

  return (
    <div className="min-h-screen bg-background text-foreground lowercase">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/history" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← history
        </Link>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h1 className="font-serif text-[44px] leading-none text-foreground/90">wars</h1>
            <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
              major wars between countries, color-coded by side. focused on conflicts involving the united states, israel and the united kingdom.
            </p>
          </div>
          <HistoryListFilters countries={allCountries} selected={selected} onSelected={setSelected} sort={sort} onSort={setSort} />
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map(w => (
            <Link
              key={w.id}
              to={`/history/wars/${w.id}`}
              className="block rounded-2xl border border-border/70 bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">/history/wars/{w.id}</div>
              <div className="mt-2 font-serif text-[22px] leading-tight text-foreground/90">{w.title}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{w.years}</div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{w.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {w.sides.map(s => (
                  <span key={s.id} className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: `rgb(${s.color})` }} />
                    {s.label}{s.outcome ? ` · ${s.outcome}` : ""}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
