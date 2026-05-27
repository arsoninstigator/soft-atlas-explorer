import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { FILTERS } from "@/wandery/data/filters";

export default function Landing() {
  useEffect(() => { document.body.style.overflow = "hidden"; }, []);

  const sampleChips = ["eu", "schengen", "anglosphere", "nordic", "balkans", "francophone", "postsoviet"];

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* faded world map backdrop — static SVG-ish washed gradient */}
      <div aria-hidden className="absolute inset-0 opacity-[0.85]" style={{
        background:
          "radial-gradient(70% 55% at 22% 30%, rgba(190,170,200,0.45), transparent 70%)," +
          "radial-gradient(60% 50% at 75% 25%, rgba(245,210,200,0.45), transparent 72%)," +
          "radial-gradient(80% 60% at 60% 85%, rgba(170,200,210,0.40), transparent 75%)," +
          "linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted)))",
      }} />

      {/* faint topo-like lines */}
      <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.10]" preserveAspectRatio="none">
        <defs>
          <pattern id="topo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 60 Q 30 30 60 60 T 120 60" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
            <path d="M0 90 Q 30 60 60 90 T 120 90" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
            <path d="M0 30 Q 30  0 60 30 T 120 30" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>

      {/* drifting filter chips */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {sampleChips.map((id, i) => {
          const f = FILTERS[id];
          if (!f) return null;
          const top = [12, 70, 28, 80, 18, 65, 38][i] ?? 30;
          const left = [8, 16, 78, 70, 50, 88, 30][i] ?? 50;
          return (
            <span
              key={id}
              className="absolute font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-border/50 backdrop-blur-md"
              style={{
                top: `${top}%`, left: `${left}%`,
                background: `rgba(${f.color} / 0.18)`,
                color: "hsl(var(--foreground) / 0.7)",
                animation: `wd-drift ${14 + i}s ease-in-out ${i * 0.6}s infinite alternate`,
              }}
            >
              {f.label}
            </span>
          );
        })}
      </div>

      {/* faint floating map pins */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {[[20,40],[34,62],[58,30],[72,55],[44,75],[82,68],[14,75]].map(([t,l],i) => (
          <span key={i} className="absolute h-2 w-2 rounded-full bg-foreground/40"
            style={{ top:`${t}%`, left:`${l}%`, boxShadow:"0 0 0 6px rgba(120,90,110,0.05), 0 0 22px 4px rgba(180,140,160,0.18)" }} />
        ))}
      </div>

      {/* center copy */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground mb-6">
          a living atlas
        </div>
        <h1 className="font-serif text-[clamp(64px,12vw,160px)] leading-none tracking-[0.08em] text-foreground/90">
          WANDERY
        </h1>
        <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-foreground/75 italic font-serif">
          explore borders, cultures, histories, and identities through an interactive living atlas.
        </p>
        <Link
          to="/world"
          className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/70 bg-card/70 backdrop-blur-xl font-mono text-[11px] uppercase tracking-[0.24em] text-foreground hover:bg-card transition-colors shadow-sm"
        >
          enter atlas <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <div className="mt-16 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">about</Link>
          <span className="opacity-40">·</span>
          <Link to="/philosophy" className="hover:text-foreground">philosophy</Link>
          <span className="opacity-40">·</span>
          <Link to="/features" className="hover:text-foreground">features</Link>
          <span className="opacity-40">·</span>
          <Link to="/roadmap" className="hover:text-foreground">roadmap</Link>
        </div>
      </div>

      {/* fake timeline preview */}
      <div aria-hidden className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
        <span>1800</span><span className="h-px w-10 bg-foreground/15" />
        <span>1914</span><span className="h-px w-10 bg-foreground/15" />
        <span>1945</span><span className="h-px w-10 bg-foreground/15" />
        <span>1991</span><span className="h-px w-10 bg-foreground/15" />
        <span className="text-foreground">2025</span>
      </div>
    </div>
  );
}