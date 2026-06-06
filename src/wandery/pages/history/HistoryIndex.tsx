import { Link } from "react-router-dom";
import { useEffect } from "react";
import { WARS, TRADES, ATTACKS } from "@/wandery/data/history-events";

export default function HistoryIndex() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const sections: Array<{ to: string; title: string; blurb: string; count: number; sample: string[] }> = [
    { to: "/history/wars", title: "wars", blurb: "color-coded maps of major wars — axis vs allies, victors and defeated.", count: Object.keys(WARS).length, sample: Object.values(WARS).slice(0, 4).map(w => w.title) },
    { to: "/history/trade", title: "trades", blurb: "historic trade networks rendered as arrows over the world — silk, spice, and the slave triangle.", count: Object.keys(TRADES).length, sample: Object.values(TRADES).slice(0, 4).map(t => t.title) },
    { to: "/history/attacks", title: "major attacks", blurb: "pinpointed strikes and terror attacks that reshaped global politics.", count: Object.keys(ATTACKS).length, sample: Object.values(ATTACKS).slice(0, 4).map(a => a.title) },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← index
        </Link>
        <h1 className="mt-6 font-serif italic text-[44px] leading-none text-foreground/90">history</h1>
        <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
          consolidated archive of wars, trades and major attacks — each navigates into its own cartographic dossier.
        </p>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map(s => (
            <Link
              key={s.to}
              to={s.to}
              className="block rounded-2xl border border-border/70 bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">{s.to}</div>
              <div className="mt-2 font-serif italic text-[28px] leading-tight text-foreground/90">{s.title}</div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{s.blurb}</p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.count} entries
              </div>
              <ul className="mt-3 space-y-1 text-[12px] text-foreground/75 italic">
                {s.sample.map(x => <li key={x}>· {x}</li>)}
              </ul>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
