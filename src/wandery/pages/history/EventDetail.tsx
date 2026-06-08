import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MAJOR_EVENTS } from "@/wandery/data/history-events";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const e = id ? MAJOR_EVENTS[id] : undefined;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = prev; };
  }, []);

  if (!e) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="font-serif text-2xl">event not found</p>
          <Link to="/history/events" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">← events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground lowercase">
      <div className="max-w-[820px] mx-auto px-6 pt-12 pb-24">
        <Link to="/history/events" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← events
        </Link>
        <h1 className="mt-6 font-serif text-[44px] leading-tight text-foreground/90">{e.title}</h1>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{e.years}</div>
        <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">{e.summary}</p>

        <div className="mt-8 flex flex-wrap gap-1.5">
          {e.regions.map(r => (
            <span key={r} className="rounded-full bg-muted/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{r}</span>
          ))}
        </div>

        {e.notes && (
          <div className="mt-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">timeline</div>
            <ul className="space-y-2 text-[13px] text-foreground/85 italic list-disc pl-5">
              {e.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
