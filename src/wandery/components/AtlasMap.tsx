import { useEffect, useRef, useState } from "react";
import { ensureLeaflet, loadCountries } from "@/wandery/lib/leaflet";
import { FILTERS, type FilterId } from "@/wandery/data/filters";

const TILE_BASE = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";

// hardcoded continent label anchors for the /world view
const CONTINENTS: { name: string; pos: [number, number] }[] = [
  { name: "NORTH AMERICA", pos: [46, -100] },
  { name: "SOUTH AMERICA", pos: [-15, -60] },
  { name: "EUROPE",        pos: [54, 18] },
  { name: "AFRICA",         pos: [3, 22] },
  { name: "ASIA",           pos: [46, 95] },
  { name: "OCEANIA",        pos: [-25, 140] },
  { name: "ANTARCTICA",     pos: [-78, 0] },
];

// rough centroid from a GeoJSON feature (avg of outer-ring coords)
function featureCentroid(feat: any): [number, number] | null {
  const g = feat?.geometry; if (!g) return null;
  const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : null;
  if (!polys) return null;
  let best: any[] = []; let bestLen = 0;
  polys.forEach((p: any) => { const ring = p[0] || []; if (ring.length > bestLen) { bestLen = ring.length; best = ring; } });
  if (!best.length) return null;
  let x = 0, y = 0;
  best.forEach(([lng, lat]: number[]) => { x += lng; y += lat; });
  return [y / best.length, x / best.length];
}

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
  labelMode?: "continents" | "countries" | "subdivisions";
  subdivisionsUrl?: string;
  onCountry: (iso: string, name: string) => void;
}

export default function AtlasMap({ center, zoom, activeFilters, toggles, year, labelMode = "countries", subdivisionsUrl, onCountry }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const labelsLayer = useRef<any>(null);
  const bordersLayer = useRef<any>(null);
  const overlayLayers = useRef<any[]>([]);
  const countriesRef = useRef<any>(null);
  const subdivisionsRef = useRef<any>(null);
  const subdivisionsLayer = useRef<any>(null);
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

  // fetch subdivisions when url changes
  useEffect(() => {
    subdivisionsRef.current = null;
    if (!subdivisionsUrl) return;
    let cancel = false;
    fetch(subdivisionsUrl).then(r => r.json()).then(j => {
      if (cancel) return;
      subdivisionsRef.current = j;
      // force a re-render of label/border layers
      setReady(r => r); // no-op state nudge
      // manually trigger by toggling a state value
      setSubKey(k => k + 1);
    }).catch(() => {});
    return () => { cancel = true; };
  }, [subdivisionsUrl]);
  const [subKey, setSubKey] = useState(0);

  useEffect(() => {
    if (!ready || !mapRef.current || !countriesRef.current) return;
    const L = (window as any).L;
    // tear down previous label layer; rebuild from scratch each time the mode changes
    if (labelsLayer.current) { labelsLayer.current.remove(); labelsLayer.current = null; }
    if (!toggles.labels) return;

    const group = L.layerGroup();

    if (labelMode === "continents") {
      CONTINENTS.forEach(({ name, pos }) => {
        L.marker(pos, {
          interactive: false,
          icon: L.divIcon({
            className: "wd-continent-label",
            html: `<span>${name}</span>`,
            iconSize: [0, 0],
          }),
        }).addTo(group);
      });
    } else if (labelMode === "subdivisions" && subdivisionsRef.current) {
      subdivisionsRef.current.features.forEach((feat: any) => {
        const c = featureCentroid(feat);
        const name = feat.properties?.name || feat.properties?.NAME;
        if (!c || !name) return;
        L.marker(c, {
          interactive: false,
          icon: L.divIcon({ className: "wd-country-label", html: `<span>${name}</span>`, iconSize: [0, 0] }),
        }).addTo(group);
      });
    } else {
      countriesRef.current.features.forEach((feat: any) => {
        const c = featureCentroid(feat);
        const name = feat.properties?.name;
        if (!c || !name) return;
        L.marker(c, {
          interactive: false,
          icon: L.divIcon({ className: "wd-country-label", html: `<span>${name}</span>`, iconSize: [0, 0] }),
        }).addTo(group);
      });
    }

    group.addTo(mapRef.current);
    labelsLayer.current = group;
  }, [toggles.labels, ready, labelMode, subKey]);

  useEffect(() => {
    if (!ready || !mapRef.current || !countriesRef.current) return;
    const L = (window as any).L;
    const map = mapRef.current;

    overlayLayers.current.forEach(l => l.remove());
    overlayLayers.current = [];
    bordersLayer.current?.remove();
    bordersLayer.current = null;
    subdivisionsLayer.current?.remove();
    subdivisionsLayer.current = null;

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

    if (subdivisionsRef.current) {
      const sub = L.geoJSON(subdivisionsRef.current, {
        style: () => ({
          color: "rgba(80,60,70,1)", weight: 0.8, opacity: 0.45,
          fillColor: "#ffffff", fillOpacity: 0,
        }),
        onEachFeature: (feat: any, layer: any) => {
          const name = feat.properties?.name || feat.properties?.NAME || "";
          layer.on({
            mouseover: () => layer.setStyle({ weight: 1.4, opacity: 0.75, fillColor: "#f4ead8", fillOpacity: 0.22 }),
            mouseout: () => layer.setStyle({ weight: 0.8, opacity: 0.45, fillColor: "#ffffff", fillOpacity: 0 }),
          });
          if (name) layer.bindTooltip(`<span class="wd-tt-name">${name}</span>`, {
            direction: "top", sticky: true, className: "wd-hover-tooltip", opacity: 1,
          });
        },
      }).addTo(map);
      subdivisionsLayer.current = sub;
      overlayLayers.current.push(sub);
    }

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
  }, [ready, activeFilters.join("|"), toggles.borders, year, subKey]);

  return <div ref={ref} className="absolute inset-0 wd-map" />;
}