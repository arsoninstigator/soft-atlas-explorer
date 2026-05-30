import { useMemo, useState } from "react";
import Atlas from "./Atlas";
import { REGIONS } from "@/wandery/data/regions";

export interface ConflictDef {
  id: string;
  label: string;
  blurb: string;
  center: [number, number];
  zoom: number;
  perspectives: Array<{
    id: string;
    label: string;
    /** iso → name override applied to labels + tooltips */
    overrides: Record<string, string>;
  }>;
}

export const CONFLICTS: Record<string, ConflictDef> = {
  kashmir: {
    id: "kashmir", label: "kashmir",
    blurb: "a valley claimed by three states; the border depends on the page.",
    center: [34, 76], zoom: 6,
    perspectives: [
      { id: "india", label: "india perspective", overrides: {
        IND: "India (incl. J&K)", PAK: "Pakistan-Occupied Kashmir",
      }},
      { id: "pakistan", label: "pakistan perspective", overrides: {
        PAK: "Pakistan (incl. Azad Kashmir)", IND: "India (Indian-Occupied Kashmir)",
      }},
      { id: "neutral", label: "neutral cartography", overrides: {
        IND: "India", PAK: "Pakistan",
      }},
    ],
  },
  palestine: {
    id: "palestine", label: "palestine · israel",
    blurb: "the same coastline, named twice. the dial swaps the legend.",
    center: [31.5, 35], zoom: 7,
    perspectives: [
      { id: "arab", label: "arab perspective", overrides: {
        ISR: "Palestine (1948 borders)", PSE: "Palestine",
      }},
      { id: "imperial", label: "imperial / western perspective", overrides: {
        ISR: "Israel", PSE: "West Bank & Gaza",
      }},
      { id: "neutral", label: "neutral cartography", overrides: {
        ISR: "Israel · Palestine", PSE: "Palestinian Territories",
      }},
    ],
  },
};

interface Props { id: string }

export default function Conflict({ id }: Props) {
  const def = CONFLICTS[id] ?? CONFLICTS.kashmir;
  const [pIdx, setPIdx] = useState(0);
  const overrides = def.perspectives[pIdx].overrides;

  // inject a temporary region into REGIONS so Atlas reads the right center/zoom + label
  const key = `conflict:${def.id}`;
  useMemo(() => {
    REGIONS[key] = {
      key, label: `conflict · ${def.label}`,
      center: def.center, zoom: def.zoom,
      blurb: def.blurb,
      labelMode: "countries",
    };
  }, [key, def]);

  return (
    <>
      <Atlas region={key} labelOverrides={overrides} />
      {/* perspective toggle — floats above the atlas chrome */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[50] pointer-events-auto">
        <div className="inline-flex items-center gap-1 bg-card/90 backdrop-blur-2xl border border-border/70 rounded-full p-1 shadow-sm">
          {def.perspectives.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setPIdx(i)}
              className={[
                "px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                i === pIdx ? "bg-foreground/90 text-background" : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}