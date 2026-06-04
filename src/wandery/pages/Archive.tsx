import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ARCHIVE } from "@/wandery/data/archive";
import { affiliationsForCountry } from "@/wandery/data/filters";
import { religionsFor, languagesFor } from "@/wandery/data/identity";
import { COUNTRY_PAGE } from "@/wandery/data/history";
import { ArrowLeft, MapPin } from "lucide-react";

export default function Archive() {
  const { iso = "" } = useParams<{ iso: string }>();
  const key = iso.toUpperCase();
  const entry = ARCHIVE[key];
  const nav = useNavigate();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    return () => { document.body.style.overflow = prev; };
  }, [key]);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <main className="max-w-3xl mx-auto px-6 py-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-4">archive · not found</div>
          <h1 className="font-serif text-4xl mb-6">no entry yet for {key}</h1>
          <p className="text-muted-foreground mb-8">this country is on the atlas but its full-length archive entry has not been written yet.</p>
          <button onClick={() => nav(-1)} className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground border border-border/70 rounded-full px-4 py-2 hover:bg-card">go back</button>
        </main>
      </div>
    );
  }

  const affs = affiliationsForCountry(key);
  const rel = religionsFor(key);
  const langs = languagesFor(key);
  const subPage = COUNTRY_PAGE[key];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* watercolor backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-70" style={{
        background:
          "radial-gradient(60% 50% at 20% 10%, rgba(222,200,232,0.55), transparent 70%)," +
          "radial-gradient(60% 50% at 90% 30%, rgba(247,225,215,0.55), transparent 70%)," +
          "radial-gradient(60% 60% at 50% 100%, rgba(237,175,184,0.35), transparent 75%)",
      }} />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-background/65 border-b border-border/60">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => nav(-1)} className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground flex items-center gap-2">
            <ArrowLeft className="h-3.5 w-3.5" /> back
          </button>
          <Link to="/" className="font-serif text-lg tracking-[0.2em]">WANDERY</Link>
          <Link to="/world" className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground border border-border/70 rounded-full px-3 py-1 hover:bg-card">enter atlas</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
          archive · {key} · full entry
        </div>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight mb-3">{entry.name}</h1>
        {entry.endonym && (
          <div className="font-serif italic text-xl text-foreground/70 mb-5">{entry.endonym}</div>
        )}
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-prose mb-10">{entry.tagline}</p>

        {/* fact card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-y border-border/60 py-6 mb-12">
          {Object.entries(entry.facts).map(([k, v]) => v ? (
            <div key={k}>
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground mb-0.5">{k.replace(/_/g, " ")}</div>
              <div className="text-[14px] text-foreground/90">{String(v)}</div>
            </div>
          ) : null)}
        </div>

        {/* affiliations */}
        {(affs.length || rel.tags.length || rel.secular || langs.length) ? (
          <section className="mb-12">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">archive tags</h2>
            <div className="flex flex-wrap gap-1.5">
              {affs.map(f => (
                <span key={f.id} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-card/70">
                  {f.label}
                </span>
              ))}
              {rel.secular && (
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-muted/60">#secular</span>
              )}
              {rel.tags.map(t => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-card/70">#{t}</span>
              ))}
              {langs.map(l => (
                <span key={l} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-card/70">#{l}</span>
              ))}
            </div>
          </section>
        ) : null}

        {/* prose sections */}
        {entry.sections.map(s => (
          <section key={s.heading} className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl mb-3">{s.heading}</h2>
            <p className="text-[15px] leading-relaxed text-foreground/85 max-w-prose">{s.body}</p>
          </section>
        ))}

        <hr className="my-12 border-border/60" />

        <div className="flex flex-wrap gap-3">
          <Link
            to="/world"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground border border-border/70 rounded-full px-4 py-2 hover:bg-card"
          >
            <MapPin className="h-3.5 w-3.5" /> see on world map
          </Link>
          {subPage && (
            <Link
              to={`/country/${subPage}`}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground border border-border/70 rounded-full px-4 py-2 hover:bg-card"
            >
              open country sub-atlas
            </Link>
          )}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-12">
          wandery · archive · vol. i
        </p>
      </main>
    </div>
  );
}