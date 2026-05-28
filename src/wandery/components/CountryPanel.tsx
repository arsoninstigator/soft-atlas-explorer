import { X } from "lucide-react";
import { affiliationsForCountry } from "@/wandery/data/filters";
import { religionsFor, languagesFor } from "@/wandery/data/identity";

interface Props {
  iso: string;
  name: string;
  year: number;
  onClose: () => void;
}

export default function CountryPanel({ iso, name, year, onClose }: Props) {
  const affs = affiliationsForCountry(iso);
  const rel = religionsFor(iso);
  const langs = languagesFor(iso);
  return (
    <aside className="pointer-events-auto w-[320px] max-w-[90vw] bg-card/85 backdrop-blur-2xl border border-border/70 rounded-2xl shadow-md overflow-hidden">
      <div className="px-5 pt-4 pb-3 border-b border-border/60 flex items-start justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">archived country · {iso}</div>
          <h2 className="font-serif text-2xl mt-1 leading-tight text-foreground">{name}</h2>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground -mr-2 -mt-1 p-1">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="px-5 py-4 space-y-4">
        <Section label="region affiliations">
          {affs.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">no active overlays touch this territory.</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {affs.map(f => (
                <span
                  key={f.id}
                  className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60"
                  style={{ background: `rgba(${f.color} / 0.22)`, color: "hsl(var(--foreground))" }}
                >
                  {f.label}
                </span>
              ))}
            </div>
          )}
        </Section>
        <Section label="religious affiliations">
          {rel.secular || rel.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {rel.secular && (
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-muted/60 text-foreground">
                  #secular
                </span>
              )}
              {rel.tags.map(t => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60"
                  style={{ background: "hsl(var(--accent) / 0.35)", color: "hsl(var(--foreground))" }}
                >
                  #{t}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic">unarchived.</p>
          )}
        </Section>
        <Section label="linguistic affiliations">
          {langs.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {langs.map(l => (
                <span
                  key={l}
                  className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-border/60"
                  style={{ background: "hsl(var(--secondary) / 0.7)", color: "hsl(var(--foreground))" }}
                >
                  #{l}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic">unarchived.</p>
          )}
        </Section>
        <Section label="timeline">
          <p className="text-xs text-foreground/80 leading-relaxed">
            viewing the cartographic state of <span className="font-serif italic">{name}</span> circa{" "}
            <span className="font-mono">{year}</span>. borders, alliances and naming conventions
            shift quietly as the dial moves.
          </p>
        </Section>
        <Section label="notes">
          <p className="text-xs text-muted-foreground leading-relaxed">
            an atlas card. neighbouring regions, linguistic continuities and
            historical reconfigurations are archived as the dataset grows.
          </p>
        </Section>
      </div>
    </aside>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">{label}</div>
      {children}
    </div>
  );
}