import { Link } from "react-router-dom";
import { useEffect } from "react";
import HistoryMap from "@/wandery/components/HistoryMap";
import { ATTACKS } from "@/wandery/data/history-events";

export default function Attacks() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const list = Object.values(ATTACKS);
  return (
    <div className="min-h-screen bg-background text-foreground lowercase">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/history" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← history
        </Link>
        <h1 className="mt-6 font-serif italic text-[44px] leading-none text-foreground/90">major attacks</h1>
        <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
          pinpointed strikes that reshaped global politics — from pearl harbor to october 7.
        </p>
      </header>

      <section className="max-w-[1100px] mx-auto px-6">
        <div className="relative h-[360px] rounded-2xl overflow-hidden border border-border/60">
          <HistoryMap attacks={list} center={[25, 10]} zoom={1.5} />
        </div>
      </section>

      <main className="max-w-[1100px] mx-auto px-6 py-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map(a => (
            <Link
              key={a.id}
              to={`/history/attacks/${a.id}`}
              className="block rounded-2xl border border-border/70 bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">/history/attacks/{a.id}</div>
              <div className="mt-2 font-serif italic text-[22px] leading-tight text-foreground/90">{a.title}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{a.date} · {a.location}</div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{a.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
