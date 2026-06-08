import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { TRADES } from "@/wandery/data/history-events";
import HistoryListFilters, { parseYear, type SortDir } from "@/wandery/components/HistoryListFilters";

export default function Trade() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const all = useMemo(() => Object.values(TRADES), []);
  const [sort, setSort] = useState<SortDir>("none");
  const list = useMemo(() => {
    if (sort === "none") return all;
    return [...all].sort((a, b) => {
      const ya = parseYear(a.years) ?? 0;
      const yb = parseYear(b.years) ?? 0;
      return sort === "asc" ? ya - yb : yb - ya;
    });
  }, [all, sort]);
  return (
    <div className="min-h-screen bg-background text-foreground lowercase">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/history" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← history
        </Link>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h1 className="font-serif text-[44px] leading-none text-foreground/90">trade</h1>
            <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
              historic trade networks visualised as directed arrows on the atlas — including the atlantic triangular slave trade.
            </p>
          </div>
          <HistoryListFilters countries={[]} selected={[]} onSelected={() => {}} sort={sort} onSort={setSort} showCountryFilter={false} />
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map(t => (
            <Link
              key={t.id}
              to={`/history/trade/${t.id}`}
              className="block rounded-2xl border border-border/70 bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">/history/trade/{t.id}</div>
              <div className="mt-2 font-serif text-[22px] leading-tight text-foreground/90">{t.title}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.years}</div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
