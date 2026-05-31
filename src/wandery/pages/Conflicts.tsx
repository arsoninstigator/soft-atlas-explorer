import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONFLICTS, type ConflictDef } from "./Conflict";

// pretty labels for ISO codes used as party chips
const ISO_NAME: Record<string, string> = {
  USA:"united states", GBR:"united kingdom", FRA:"france", ESP:"spain", CAN:"canada",
  IND:"india", PAK:"pakistan", CHN:"china", TWN:"taiwan", ISR:"israel", PSE:"palestine",
  MAR:"morocco", ESH:"sahrawi (sadr)", UKR:"ukraine", RUS:"russia", CYP:"cyprus", TUR:"turkey",
  DNK:"denmark", GRL:"greenland", ARG:"argentina", CUB:"cuba", SYR:"syria",
};

function partyLabel(iso: string) { return ISO_NAME[iso] ?? iso.toLowerCase(); }

export default function Conflicts() {
  const nav = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);

  const all = useMemo(() => Object.values(CONFLICTS), []);

  // build sorted unique party list for filter chips
  const parties = useMemo(() => {
    const s = new Set<string>();
    all.forEach(c => { c.parties.forEach(p => s.add(p)); (c.allies ?? []).forEach(p => s.add(p)); });
    return Array.from(s).sort((a, b) => partyLabel(a).localeCompare(partyLabel(b)));
  }, [all]);

  // when filter is set, primary cards = parties include filter; ally cards = allies include filter
  const cards: Array<{ c: ConflictDef; ally: boolean }> = useMemo(() => {
    if (!filter) return all.map(c => ({ c, ally: false }));
    const out: Array<{ c: ConflictDef; ally: boolean }> = [];
    all.forEach(c => {
      const isParty = c.parties.includes(filter);
      const isAlly = !isParty && (c.allies ?? []).includes(filter);
      if (isParty) out.push({ c, ally: false });
      else if (isAlly) out.push({ c, ally: true });
    });
    return out;
  }, [all, filter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <Link to="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← index
        </Link>
        <h1 className="mt-6 font-serif italic text-[44px] leading-none text-foreground/90">conflicts</h1>
        <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground italic">
          disputed or contested regions with border conflicts as well as global catalog of sovereignty
          disputes (tied to autonomy, identity and map representation) with each side's cartographic perspective.
        </p>

        {/* country filter chips */}
        <div className="mt-7 flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilter(null)}
            className={[
              "font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border transition-colors",
              filter === null ? "border-foreground/60 text-foreground bg-card" : "border-border/60 text-muted-foreground hover:text-foreground bg-card/60",
            ].join(" ")}
          >
            all
          </button>
          {parties.map(iso => {
            const on = filter === iso;
            return (
              <button
                key={iso}
                onClick={() => setFilter(on ? null : iso)}
                className={[
                  "font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border transition-colors",
                  on ? "border-foreground/60 text-foreground bg-card" : "border-border/60 text-muted-foreground hover:text-foreground bg-card/60",
                ].join(" ")}
              >
                #{partyLabel(iso).replace(/\s+/g, "-")}
              </button>
            );
          })}
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ c, ally }) => (
            <button
              key={c.id}
              onClick={() => nav(`/conflict/${c.id}`)}
              className={[
                "relative text-left rounded-2xl border bg-card p-5 transition-all hover:shadow-md",
                ally ? "opacity-50 hover:opacity-80 border-border/50" : "border-border/70 hover:border-foreground/30",
              ].join(" ")}
            >
              {ally && (
                <div className="absolute top-3 right-3 font-mono text-[8px] uppercase tracking-[0.22em] text-muted-foreground bg-accent/40 border border-border/60 rounded-full px-2 py-0.5">
                  supports as primary ally
                </div>
              )}
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">
                /conflict/{c.id}
              </div>
              <div className="mt-2 font-serif italic text-[24px] leading-tight text-foreground/90">
                {c.label}
              </div>
              <p className="mt-2 text-[12px] leading-snug italic text-muted-foreground">{c.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {c.parties.map(p => (
                  <span key={p} className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground bg-muted/60 border border-border/40 rounded-full px-2 py-0.5">
                    {partyLabel(p)}
                  </span>
                ))}
                {(c.allies ?? []).map(p => (
                  <span key={"a"+p} className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80 border border-dashed border-border/60 rounded-full px-2 py-0.5">
                    ally · {partyLabel(p)}
                  </span>
                ))}
              </div>
            </button>
          ))}
          {!cards.length && (
            <div className="col-span-full text-center text-muted-foreground italic py-12">
              no conflicts found for this party.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}