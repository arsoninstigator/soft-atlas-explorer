import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { MAJOR_EVENTS } from "@/wandery/data/history-events";
import HistoryListFilters, { parseYear, type SortDir } from "@/wandery/components/HistoryListFilters";

export default function Events() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const all = useMemo(() => Object.values(MAJOR_EVENTS), []);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState<SortDir>("none");

  const allCountries = useMemo(() => {
    const set = new Set<string>();
    all.forEach(e => e.countries?.forEach(c => set.add(c)));
    return Array.from(set).sort();
  }, [all]);

  const filtered = useMemo(() => {
    let list = all;
    if (selected.length > 0) {
      list = list.filter(e => selected.every(c => (e.countries ?? []).includes(c)));
    }
    if (sort !== "none") {
      list = [...list].sort((a, b) => {
        const ya = parseYear(a.years) ?? 0;
        const yb = parseYear(b.years) ?? 0;
        return sort === "asc" ? ya - yb : yb - ya;
      });
    }
    return list;
  }, [all, selected, sort]);

  return (
    <div className="min-h-screen bg-background text-foreground lowercase">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/history" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← history
        </Link>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h1 className="font-serif text-[44px] leading-none text-foreground/90">major events</h1>
            <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
              defining eras and movements — nazi germany, british raj, cold war, decolonization and more.
            </p>
          </div>
          <HistoryListFilters
            countries={allCountries}
            selected={selected}
            onSelected={setSelected}
            sort={sort}
            onSort={setSort}
          />
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(e => (
            <Link
              key={e.id}
              to={`/history/events/${e.id}`}
              className="block rounded-2xl border border-border/70 bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">/history/events/{e.id}</div>
              <div className="mt-2 font-serif text-[22px] leading-tight text-foreground/90">{e.title}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{e.years}</div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{e.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {e.regions.slice(0, 4).map(r => (
                  <span key={r} className="rounded-full bg-muted/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{r}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
