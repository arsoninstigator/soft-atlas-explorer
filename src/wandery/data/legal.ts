// Legal system families per ISO_A3. A country may appear in multiple
// families — the atlas blends colors for hybrid jurisdictions.

export type LegalSystem = "common" | "civil" | "religious" | "customary";

export interface LegalSystemDef {
  id: LegalSystem;
  label: string;
  /** rgb triplet (no parens), used to mix tints */
  rgb: [number, number, number];
  countries: Set<string>;
}

const COMMON = new Set([
  "USA","GBR","CAN","AUS","NZL","IRL","IND","PAK","BGD","LKA","MYS","SGP",
  "NGA","KEN","GHA","ZAF","JAM","TTO","BHS","BRB","BLZ","FJI","UGA","TZA",
  "ZMB","ZWE","MWI","CYP","MLT","HKG","ISR",
]);
const CIVIL = new Set([
  "FRA","DEU","ITA","ESP","PRT","NLD","BEL","LUX","CHE","AUT","CZE","SVK",
  "POL","HUN","SVN","HRV","ROU","BGR","GRC","DNK","SWE","NOR","FIN","ISL",
  "RUS","UKR","BLR","KAZ","UZB","TKM","KGZ","TJK","MDA","ARM","AZE","GEO",
  "TUR","BRA","ARG","CHL","MEX","COL","PER","VEN","ECU","BOL","PRY","URY",
  "DOM","CUB","PAN","GTM","CRI","HND","NIC","SLV","HTI",
  "JPN","KOR","CHN","VNM","TWN","IDN","THA","KHM","LAO","MNG",
  "EGY","TUN","DZA","MAR","LBN","SYR","JOR","IRQ","SEN","CIV","CMR","COD",
  "ANG","MOZ","ETH","MDG","GAB","COG","BFA","MLI","NER","BEN","TGO","GIN","GNB",
  "EST","LVA","LTU","SRB","BIH","MNE","MKD","ALB","XKX",
]);
const RELIGIOUS = new Set([
  "SAU","IRN","AFG","YEM","MRT","SDN","PAK","ARE","QAT","KWT","BHR","OMN",
  "LBY","BRN","MDV",
]);
const CUSTOMARY = new Set([
  "BTN","NPL","PNG","SLB","VUT","TLS","MMR","ETH","ERI","MDG","WSM","TON",
]);

export const LEGAL_SYSTEMS: Record<LegalSystem, LegalSystemDef> = {
  common:    { id:"common",    label:"common law",    rgb:[120, 158, 196], countries: COMMON },
  civil:     { id:"civil",     label:"civil law",     rgb:[198, 132, 142], countries: CIVIL },
  religious: { id:"religious", label:"religious law", rgb:[176, 152, 92],  countries: RELIGIOUS },
  customary: { id:"customary", label:"customary law", rgb:[122, 162, 132], countries: CUSTOMARY },
};

export const LEGAL_ORDER: LegalSystem[] = ["common","civil","religious","customary"];

/** Blend the rgb triplets of every active system the country belongs to. */
export function legalBlend(iso: string, active: LegalSystem[]): [number, number, number] | null {
  const hits = active.filter(k => LEGAL_SYSTEMS[k].countries.has(iso));
  if (!hits.length) return null;
  let r = 0, g = 0, b = 0;
  hits.forEach(k => {
    const [rr, gg, bb] = LEGAL_SYSTEMS[k].rgb;
    r += rr; g += gg; b += bb;
  });
  return [Math.round(r / hits.length), Math.round(g / hits.length), Math.round(b / hits.length)];
}