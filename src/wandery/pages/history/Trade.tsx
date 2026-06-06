import { Link } from "react-router-dom";
import { useEffect } from "react";
import { TRADES } from "@/wandery/data/history-events";

export default function Trade() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const list = Object.values(TRADES);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/history" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← history
        </Link>
        <h1 className="mt-6 font-serif italic text-[44px] leading-none text-foreground/90">trade</h1>
        <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
          historic trade networks visualised as directed arrows on the atlas — including the atlantic triangular slave trade.
        </p>
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
              <div className="mt-2 font-serif italic text-[22px] leading-tight text-foreground/90">{t.title}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.years}</div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
