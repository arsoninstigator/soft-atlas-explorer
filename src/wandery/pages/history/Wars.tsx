import { Link } from "react-router-dom";
import { useEffect } from "react";
import { WARS } from "@/wandery/data/history-events";

export default function Wars() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const list = Object.values(WARS);
  return (
    <div className="min-h-screen bg-background text-foreground lowercase">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/history" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← history
        </Link>
        <h1 className="mt-6 font-serif italic text-[44px] leading-none text-foreground/90">wars</h1>
        <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
          major wars between countries, color-coded by side. focused on conflicts involving the united states, israel and the united kingdom.
        </p>
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
              <div className="mt-2 font-serif italic text-[22px] leading-tight text-foreground/90">{w.title}</div>
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
