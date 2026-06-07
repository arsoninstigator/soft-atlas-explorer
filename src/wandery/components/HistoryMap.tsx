import { useEffect, useRef, useState } from "react";
import { ensureLeaflet, loadCountries } from "@/wandery/lib/leaflet";
import type { WarSide, TradeArrow, AttackDef } from "@/wandery/data/history-events";

const TILE_BASE = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
const REFERENCE_LAND_FILL = "#f8e7ec";

interface Props {
  center?: [number, number];
  zoom?: number;
  sides?: WarSide[];
  arrows?: TradeArrow[];
  attacks?: AttackDef[];
}

export default function HistoryMap({ center = [25, 10], zoom = 2, sides, arrows, attacks }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const countriesRef = useRef<any>(null);
  const overlays = useRef<any[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureLeaflet(async () => {
      if (mapRef.current || !ref.current) return;
      const L = (window as any).L;
      const map = L.map(ref.current, { center, zoom, zoomControl: false, worldCopyJump: true, zoomSnap: 0.25 });
      L.tileLayer(TILE_BASE, { maxZoom: 10, attribution: "© OpenStreetMap © CARTO" }).addTo(map);
      mapRef.current = map;
      const data = await loadCountries();
      countriesRef.current = data;
      setReady(true);
    });
    return () => { mapRef.current?.remove(); mapRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready || !mapRef.current) return;
    const L = (window as any).L;
    const map = mapRef.current;

    overlays.current.forEach(o => o.remove());
    overlays.current = [];

    if (countriesRef.current) {
      const base = L.geoJSON(countriesRef.current, {
        style: () => ({ color: "rgba(80,60,70,1)", weight: 0.5, opacity: 0.18, fillColor: REFERENCE_LAND_FILL, fillOpacity: 0.85 }),
        onEachFeature: (feat: any, layer: any) => {
          const name = feat.properties?.name ?? "";
          if (name) layer.bindTooltip(`<span class="wd-tt-name">${name}</span>`, { direction: "top", sticky: true, className: "wd-hover-tooltip", opacity: 1 });
        },
      }).addTo(map);
      overlays.current.push(base);
    }

    // war sides — color each side's member countries
    if (sides && countriesRef.current) {
      sides.forEach(side => {
        const members = new Set(side.members);
        const fill = L.geoJSON(countriesRef.current, {
          filter: (f: any) => members.has(f.id),
          interactive: false,
          style: () => ({ color: `rgb(${side.color})`, weight: 1.0, opacity: 0.75, fillColor: `rgb(${side.color})`, fillOpacity: 0.42 }),
        }).addTo(map);
        overlays.current.push(fill);
      });
    }

    // trade arrows
    if (arrows) {
      arrows.forEach(a => {
        const color = `rgb(${a.color ?? "120 80 90"})`;
        const line = L.polyline([a.from, a.to], { color, weight: 2.4, opacity: 0.85, dashArray: "6 6" }).addTo(map);
        overlays.current.push(line);
        // arrowhead via a small marker rotated approximately
        const head = L.circleMarker(a.to, { radius: 5, color, fillColor: color, fillOpacity: 1, weight: 0 }).addTo(map);
        overlays.current.push(head);
        if (a.label) {
          const mid: [number, number] = [(a.from[0] + a.to[0]) / 2, (a.from[1] + a.to[1]) / 2];
          const label = L.marker(mid, {
            interactive: false,
            icon: L.divIcon({ className: "wd-arrow-label", html: `<span style="background:rgba(255,255,255,0.78);padding:2px 6px;border-radius:6px;border:1px solid rgba(120,80,90,0.25);font-family:ui-monospace,SFMono-Regular,monospace;font-size:10px;letter-spacing:0.05em;color:#5a3a44;white-space:nowrap;">${a.label}</span>`, iconSize: [0, 0] }),
          }).addTo(map);
          overlays.current.push(label);
        }
      });
    }

    // attack pins
    if (attacks) {
      attacks.forEach(at => {
        const color = `rgb(${at.color ?? "168 80 90"})`;
        if (at.from) {
          const line = L.polyline([at.from, at.pos], { color, weight: 2.4, opacity: 0.85, dashArray: "6 6" }).addTo(map);
          overlays.current.push(line);
          const origin = L.circleMarker(at.from, { radius: 4, color, fillColor: color, fillOpacity: 0.9, weight: 0 }).addTo(map);
          overlays.current.push(origin);
          if (at.fromLabel) {
            const mid: [number, number] = [(at.from[0] + at.pos[0]) / 2, (at.from[1] + at.pos[1]) / 2];
            const label = L.marker(mid, {
              interactive: false,
              icon: L.divIcon({ className: "wd-arrow-label", html: `<span style="background:rgba(255,255,255,0.78);padding:2px 6px;border-radius:6px;border:1px solid rgba(120,80,90,0.25);font-family:ui-monospace,SFMono-Regular,monospace;font-size:10px;letter-spacing:0.05em;color:#5a3a44;white-space:nowrap;">${at.fromLabel.toLowerCase()}</span>`, iconSize: [0, 0] }),
            }).addTo(map);
            overlays.current.push(label);
          }
        }
        const m = L.circleMarker(at.pos, { radius: 9, color, fillColor: color, fillOpacity: 0.85, weight: 1.5 }).addTo(map);
        m.bindTooltip(`<span class="wd-tt-name">${at.title.toLowerCase()}</span>`, { direction: "top", sticky: true, className: "wd-hover-tooltip", opacity: 1 });
        overlays.current.push(m);
      });
    }
  }, [ready, sides, arrows, attacks]);

  return <div ref={ref} className="absolute inset-0 wd-map" />;
}
