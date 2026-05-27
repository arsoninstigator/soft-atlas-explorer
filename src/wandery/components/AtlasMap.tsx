import { useEffect, useRef, useState } from "react";
import { ensureLeaflet, loadCountries } from "@/wandery/lib/leaflet";
import { FILTERS, type FilterId } from "@/wandery/data/filters";

const TILE_BASE = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
const TILE_LABELS = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png";

export interface ToggleState {
  labels: boolean;
  borders: boolean;
  terrain: boolean;
  pins: boolean;
}

interface Props {
  center: [number, number];
  zoom: number;
  activeFilters: FilterId[];
  toggles: ToggleState;
  year: number;
  onCountry: (iso: string, name: string) => void;
}

export default function AtlasMap({ center, zoom, activeFilters, toggles, year, onCountry }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const labelsLayer = useRef<any>(null);
  const bordersLayer = useRef<any>(null);
  const overlayLayers = useRef<any[]>([]);
  const countriesRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const handlersRef = useRef({ onCountry });
  useEffect(() => { handlersRef.current = { onCountry }; });

  useEffect(() => {
    ensureLeaflet(async () => {
      if (mapRef.current || !ref.current) return;
      const L = (window as any).L;
      const map = L.map(ref.current, {
        center, zoom, zoomControl: false,
        worldCopyJump: true, zoomSnap: 0.25,
        wheelPxPerZoomLevel: 140, inertia: true,
      });
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
    if (mapRef.current) mapRef.current.flyTo(center, zoom, { duration: 1.6, easeLinearity: 0.25 });
  }, [center[0], center[1], zoom]);

  useEffect(() => {
    if (!mapRef.current) return;
    const L = (window as any).L;
    if (toggles.labels && !labelsLayer.current) {
      labelsLayer.current = L.tileLayer(TILE_LABELS, { maxZoom: 10, opacity: 0.55 }).addTo(mapRef.current);
    } else if (!toggles.labels && labelsLayer.current) {
      labelsLayer.current.remove();
      labelsLayer.current = null;
    }
  }, [toggles.labels, ready]);

  useEffect(() => {
    if (!ready || !mapRef.current || !countriesRef.current) return;
    const L = (window as any).L;
    const map = mapRef.current;

    overlayLayers.current.forEach(l => l.remove());
    overlayLayers.current = [];
    bordersLayer.current?.remove();
    bordersLayer.current = null;

    const ageFade = Math.max(0, Math.min(1, (year - 1800) / (2025 - 1800)));
    const borderOpacity = toggles.borders ? 0.18 + 0.08 * ageFade : 0.04;

    const base = L.geoJSON(countriesRef.current, {
      style: () => ({
        color: "rgba(80,60,70,1)", weight: 0.6, opacity: borderOpacity,
        fillColor: "#ffffff", fillOpacity: 0,
      }),
      onEachFeature: (feat: any, layer: any) => {
        const iso = feat.id || feat.properties?.iso_a3 || "";
        const name = feat.properties?.name ?? "";
        layer.on({
          mouseover: () => layer.setStyle({ weight: 1.2, opacity: 0.55, fillColor: "#f4ead8", fillOpacity: 0.18 }),
          mouseout: () => layer.setStyle({ weight: 0.6, opacity: borderOpacity, fillColor: "#ffffff", fillOpacity: 0 }),
          click: () => handlersRef.current.onCountry(iso, name),
        });
        layer.bindTooltip(`<span class="wd-tt-name">${name}</span>`, {
          direction: "top", sticky: true, className: "wd-hover-tooltip", opacity: 1,
        });
      },
    }).addTo(map);
    bordersLayer.current = base;
    overlayLayers.current.push(base);

    activeFilters.forEach((fid, idx) => {
      const def = FILTERS[fid];
      if (!def) return;
      const alpha = 0.18;
      const layer = L.geoJSON(countriesRef.current, {
        filter: (f: any) => def.countries.has(f.id),
        interactive: false,
        style: () => ({
          color: `rgb(${def.color})`, weight: 0.5, opacity: 0.35,
          fillColor: `rgb(${def.color})`, fillOpacity: alpha,
        }),
      }).addTo(map);
      overlayLayers.current.push(layer);

      const halo = L.geoJSON(countriesRef.current, {
        filter: (f: any) => def.countries.has(f.id),
        interactive: false,
        style: () => ({
          color: `rgb(${def.color})`, weight: 4 + idx * 0.5,
          opacity: 0.08, fill: false,
        }),
      }).addTo(map);
      overlayLayers.current.push(halo);
    });
  }, [ready, activeFilters.join("|"), toggles.borders, year]);

  return <div ref={ref} className="absolute inset-0 wd-map" />;
}