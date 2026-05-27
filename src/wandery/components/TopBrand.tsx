import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { REGIONS, REGION_ORDER } from "@/wandery/data/regions";
import { useState } from "react";

export default function TopBrand({ region }: { region: string }) {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const r = REGIONS[region];
  return (
    <div className="pointer-events-auto flex flex-col items-center">
      <Link to="/" className="font-serif text-[28px] leading-none tracking-[0.18em] text-foreground/85 hover:text-foreground transition-colors">
        WANDERY
      </Link>
      <div className="relative mt-1.5">
        <button
          onClick={() => setOpen(v => !v)}
          className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
        >
          {r?.label ?? "atlas"}
          <ChevronDown className="h-3 w-3" />
        </button>
        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-card/90 backdrop-blur-xl border border-border/70 rounded-xl shadow-md py-1 min-w-[140px] z-50">
            {REGION_ORDER.map(k => (
              <button
                key={k}
                onClick={() => { setOpen(false); nav(`/${k}`); }}
                className={[
                  "block w-full text-left px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em]",
                  k === region ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {REGIONS[k].label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}