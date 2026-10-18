// Territorial claims drawn per conflict perspective.
// Polygons are hand-traced approximations, coordinates as [lng, lat].
// `featureIso` repaints a whole country feature from world.geo.json instead.

export interface Claim {
  label: string;
  /** the state this perspective assigns the territory to */
  owner: string;
  polygon?: [number, number][];
  featureIso?: string;
}

const KASHMIR_FULL: [number, number][] = [
  [74.0, 32.5], [73.9, 33.2], [73.8, 34.0], [73.7, 34.7], [74.1, 35.4], [74.4, 36.2], [74.7, 36.8],
  [75.4, 37.05], [76.3, 37.0], [77.4, 36.6], [78.4, 35.9], [79.5, 35.5], [80.3, 35.3], [80.4, 34.5],
  [79.6, 33.8], [78.8, 33.3], [78.5, 32.8], [78.1, 32.55], [77.3, 32.6], [76.5, 32.4], [75.4, 32.3],
  [74.5, 32.4], [74.0, 32.5],
];
// former princely state minus Aksai Chin (pakistan's claim)
const KASHMIR_NO_AKSAI: [number, number][] = [
  [74.0, 32.5], [73.8, 34.0], [74.1, 35.4], [74.7, 36.8], [75.4, 37.05], [76.3, 37.0], [77.4, 36.6],
  [78.0, 35.5], [77.8, 34.5], [78.8, 33.3], [78.5, 32.8], [78.1, 32.55], [77.3, 32.6], [75.4, 32.3], [74.0, 32.5],
];
const AKSAI_CHIN: [number, number][] = [
  [78.0, 35.5], [78.4, 35.9], [79.5, 35.5], [80.3, 35.3], [80.4, 34.5], [79.6, 33.8], [78.8, 33.3], [77.8, 34.5], [78.0, 35.5],
];
const WEST_BANK: [number, number][] = [
  [35.0, 31.35], [34.88, 31.6], [35.0, 32.0], [35.05, 32.35], [35.2, 32.55], [35.55, 32.4],
  [35.57, 31.75], [35.45, 31.45], [35.2, 31.35], [35.0, 31.35],
];
const GAZA: [number, number][] = [[34.22, 31.32], [34.37, 31.6], [34.56, 31.59], [34.49, 31.45], [34.27, 31.22], [34.22, 31.32]];
const CRIMEA: [number, number][] = [
  [32.5, 45.4], [33.5, 46.1], [34.5, 46.2], [35.3, 45.4], [36.6, 45.4], [35.4, 44.9], [34.0, 44.4], [33.4, 44.6], [32.5, 45.4],
];
const OCCUPIED_EAST: [number, number][] = [
  [33.0, 46.6], [35.0, 47.4], [36.5, 47.8], [37.8, 48.6], [38.2, 49.5], [40.0, 49.6], [40.1, 48.0],
  [38.3, 47.1], [36.6, 46.6], [35.0, 46.3], [33.5, 46.1], [33.0, 46.6],
];
const NORTH_CYPRUS: [number, number][] = [
  [32.3, 35.15], [32.9, 35.4], [33.6, 35.4], [34.6, 35.7], [34.0, 35.3], [33.9, 35.1], [33.0, 35.15], [32.3, 35.15],
];
const GOLAN: [number, number][] = [[35.62, 32.68], [35.65, 33.1], [35.8, 33.33], [35.9, 33.2], [35.85, 32.7], [35.62, 32.68]];
const GIBRALTAR: [number, number][] = [[-5.37, 36.11], [-5.34, 36.16], [-5.33, 36.15], [-5.34, 36.11], [-5.37, 36.11]];

/** keyed `${conflictId}:${perspectiveId}` */
export const CLAIMS: Record<string, Claim[]> = {
  "kashmir:india": [{ label: "Jammu & Kashmir · India", owner: "IND", polygon: KASHMIR_FULL }],
  "kashmir:pakistan": [
    { label: "Jammu & Kashmir · Pakistan", owner: "PAK", polygon: KASHMIR_NO_AKSAI },
    { label: "Aksai Chin · China", owner: "CHN", polygon: AKSAI_CHIN },
  ],
  "palestine:arab": [
    { label: "Palestine", owner: "PSE", featureIso: "ISR" },
    { label: "Palestine", owner: "PSE", polygon: WEST_BANK },
    { label: "Palestine", owner: "PSE", polygon: GAZA },
  ],
  "palestine:imperial": [
    { label: "West Bank", owner: "PSE", polygon: WEST_BANK },
    { label: "Gaza Strip", owner: "PSE", polygon: GAZA },
  ],
  "palestine:neutral": [
    { label: "Palestinian Territories", owner: "PSE", polygon: WEST_BANK },
    { label: "Palestinian Territories", owner: "PSE", polygon: GAZA },
  ],
  "taiwan:prc": [{ label: "Taiwan Province · PRC", owner: "CHN", featureIso: "TWN" }],
  "taiwan:roc": [{ label: "Republic of China", owner: "TWN", featureIso: "TWN" }],
  "westernsahara:morocco": [{ label: "Southern Provinces · Morocco", owner: "MAR", featureIso: "ESH" }],
  "westernsahara:polisario": [{ label: "Sahrawi Arab Democratic Republic", owner: "ESH", featureIso: "ESH" }],
  "crimea:russia": [
    { label: "Republic of Crimea · Russia", owner: "RUS", polygon: CRIMEA },
    { label: "annexed oblasts · Russia", owner: "RUS", polygon: OCCUPIED_EAST },
  ],
  "crimea:ukraine": [
    { label: "Crimea · temporarily occupied (Ukraine)", owner: "UKR", polygon: CRIMEA },
    { label: "occupied oblasts · Ukraine", owner: "UKR", polygon: OCCUPIED_EAST },
  ],
  "cyprus:roc": [{ label: "Republic of Cyprus (occupied north)", owner: "CYP", polygon: NORTH_CYPRUS }],
  "cyprus:trnc": [{ label: "Turkish Republic of Northern Cyprus", owner: "TUR", polygon: NORTH_CYPRUS }],
  "golan:israel": [{ label: "Golan Heights · Israel", owner: "ISR", polygon: GOLAN }],
  "golan:syria": [{ label: "Occupied Golan · Syria", owner: "SYR", polygon: GOLAN }],
  "falklands:uk": [{ label: "Falkland Islands · UK", owner: "GBR", featureIso: "FLK" }],
  "falklands:argentina": [{ label: "Islas Malvinas · Argentina", owner: "ARG", featureIso: "FLK" }],
  "gibraltar:uk": [{ label: "Gibraltar · UK", owner: "GBR", polygon: GIBRALTAR }],
  "gibraltar:spain": [{ label: "Gibraltar · Spain", owner: "ESP", polygon: GIBRALTAR }],
};

export function claimColor(owner: string): string {
  let h = 7;
  for (let i = 0; i < owner.length; i++) h = (h * 37 + owner.charCodeAt(i)) >>> 0;
  return `hsl(${h % 360} 55% 60%)`;
}
