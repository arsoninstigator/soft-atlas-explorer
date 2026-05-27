import { useEffect, useState } from "react";
import { REGIONS } from "@/wandery/data/regions";
import { filtersFor, type FilterId } from "@/wandery/data/filters";
import AtlasMap, { type ToggleState } from "@/wandery/components/AtlasMap";
import FilterChips from "@/wandery/components/FilterChips";
import MapControls from "@/wandery/components/MapControls";
import TimelineDial from "@/wandery/components/TimelineDial";
import TopBrand from "@/wandery/components/TopBrand";
import CountryPanel from "@/wandery/components/CountryPanel";
import { Link } from "react-router-dom";

interface Props { region: string }

export default function Atlas({ region }: Props) {
  const config = REGIONS[region] ?? REGIONS.world;
  const available = filtersFor(region);
  const [active, setActive] = useState<FilterId[]>([]);
  const [toggles, setToggles] = useState<ToggleState>({ labels: false, borders: true, terrain: false, pins: false });
  const [year, setYear] = useState(2025);
  const [picked, setPicked] = useState<{ iso: string; name: string } | null>(null);

  // reset filters when region changes
  useEffect(() => { setActive([]); setPicked(null); }, [region]);

  // body overflow is hidden globally — that's correct for the atlas surface
  useEffect(() => { document.body.style.overflow = "hidden"; }, []);

  const toggle = (id: FilterId) =>
    setActive(a => a.includes(id) ? a.filter(x => x !== id) : [...a, id]);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <AtlasMap
        center={config.center}
        zoom={config.zoom}
        activeFilters={active}
        toggles={toggles}
        year={year}
        onCountry={(iso, name) => setPicked({ iso, name })}
      />

      {/* atmospheric vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[10]" style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, rgba(255,245,240,0.0) 55%, rgba(80,50,70,0.10) 100%)," +
          "radial-gradient(80% 60% at 50% 100%, rgba(255,245,240,0.0) 60%, rgba(80,50,70,0.10) 100%)",
      }} />

      {/* top center brand */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-[30]">
        <TopBrand region={region} />
      </div>

      {/* top-left meta */}
      <div className="absolute top-5 left-5 z-[30] pointer-events-auto">
        <Link to="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← index
        </Link>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
          atlas · {config.label}
        </div>
        <div className="mt-0.5 text-[11px] italic text-muted-foreground max-w-[220px] leading-snug">
          {config.blurb}
        </div>
      </div>

      {/* right side: map controls */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-[30]">
        <MapControls toggles={toggles} setToggles={setToggles} />
      </div>

      {/* lower-left: timeline */}
      <div className="absolute bottom-24 left-5 z-[30]">
        <TimelineDial year={year} onYear={setYear} />
      </div>

      {/* bottom: filter chips */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[30] w-[min(96vw,1100px)]">
        <FilterChips available={available} active={active} onToggle={toggle} />
      </div>

      {/* country panel */}
      {picked && (
        <div className="absolute right-20 bottom-24 z-[40]">
          <CountryPanel iso={picked.iso} name={picked.name} year={year} onClose={() => setPicked(null)} />
        </div>
      )}
    </div>
  );
}