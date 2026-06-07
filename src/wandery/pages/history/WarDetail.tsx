import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import HistoryMap from "@/wandery/components/HistoryMap";
import { WARS } from "@/wandery/data/history-events";

export default function WarDetail() {
  const { id } = useParams<{ id: string }>();
  const war = id ? WARS[id] : undefined;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  if (!war) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="font-serif italic text-2xl">war not found</p>
          <Link to="/history/wars" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">← wars</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-background lowercase">
      <div className="absolute inset-0">
        <HistoryMap sides={war.sides} />
      </div>

      {/* floating dossier */}
      <div className="absolute top-5 left-5 z-20 w-[360px] max-h-[calc(100vh-40px)] overflow-y-auto rounded-2xl border border-border/70 bg-card/90 backdrop-blur-xl shadow-xl p-5">
        <Link to="/history/wars" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← wars
        </Link>
        <h1 className="mt-3 font-serif italic text-[28px] leading-tight text-foreground/90">{war.title}</h1>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{war.years}</div>
        <p className="mt-3 text-[13px] leading-relaxed text-foreground/85">{war.summary}</p>

        <div className="mt-5 space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">sides</div>
          {war.sides.map(s => (
            <div key={s.id} className="flex items-start gap-2 rounded-lg border border-border/50 bg-background/60 p-2">
              <span className="mt-0.5 inline-block h-3 w-3 rounded-full" style={{ background: `rgb(${s.color})` }} />
              <div className="flex-1">
                <div className="font-serif text-[14px] text-foreground/90">{s.label}{s.outcome ? <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">· {s.outcome}</span> : null}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground italic">{s.members.length} state{s.members.length === 1 ? "" : "s"}</div>
              </div>
            </div>
          ))}
        </div>

        {war.notes && (
          <div className="mt-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">notes</div>
            <ul className="space-y-1.5 text-[12px] text-foreground/80 italic list-disc pl-4">
              {war.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
