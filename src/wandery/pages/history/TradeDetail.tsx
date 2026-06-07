import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import HistoryMap from "@/wandery/components/HistoryMap";
import { TRADES } from "@/wandery/data/history-events";

export default function TradeDetail() {
  const { id } = useParams<{ id: string }>();
  const trade = id ? TRADES[id] : undefined;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  if (!trade) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="font-serif italic text-2xl">route not found</p>
          <Link to="/history/trade" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">← trade</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-background lowercase">
      <div className="absolute inset-0">
        <HistoryMap arrows={trade.arrows} center={[20, -20]} zoom={3} />
      </div>

      <div className="absolute top-5 left-5 z-20 w-[360px] max-h-[calc(100vh-40px)] overflow-y-auto rounded-2xl border border-border/70 bg-card/90 backdrop-blur-xl shadow-xl p-5">
        <Link to="/history/trade" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← trade
        </Link>
        <h1 className="mt-3 font-serif italic text-[26px] leading-tight text-foreground/90">{trade.title}</h1>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{trade.years}</div>
        <p className="mt-3 text-[13px] leading-relaxed text-foreground/85">{trade.summary}</p>

        {trade.notes && (
          <div className="mt-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">notes</div>
            <ul className="space-y-1.5 text-[12px] text-foreground/80 italic list-disc pl-4">
              {trade.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
