import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import HistoryMap from "@/wandery/components/HistoryMap";
import { ATTACKS } from "@/wandery/data/history-events";

export default function AttackDetail() {
  const { id } = useParams<{ id: string }>();
  const a = id ? ATTACKS[id] : undefined;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  if (!a) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="font-serif italic text-2xl">attack not found</p>
          <Link to="/history/attacks" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">← attacks</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-background lowercase">
      <div className="absolute inset-0">
        <HistoryMap attacks={[a]} center={a.pos} zoom={4} />
      </div>

      <div className="absolute top-5 left-5 z-20 w-[360px] max-h-[calc(100vh-40px)] overflow-y-auto rounded-2xl border border-border/70 bg-card/90 backdrop-blur-xl shadow-xl p-5">
        <Link to="/history/attacks" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← attacks
        </Link>
        <h1 className="mt-3 font-serif italic text-[26px] leading-tight text-foreground/90">{a.title}</h1>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{a.date}</div>
        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{a.location}</div>
        <p className="mt-3 text-[13px] leading-relaxed text-foreground/85">{a.summary}</p>
      </div>
    </div>
  );
}
