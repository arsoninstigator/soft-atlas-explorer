// Religious + linguistic affiliations per country (ISO_A3).
// Intentionally partial — countries without entries fall back to defaults.

export interface Tag { label: string; tone?: "religion" | "language" | "secular" }

const REL: Record<string, string[]> = {
  // europe
  FRA: ["catholic", "muslim"], ITA: ["catholic"], ESP: ["catholic"], PRT: ["catholic"],
  IRL: ["catholic"], POL: ["catholic"], HRV: ["catholic"], SVN: ["catholic"], AUT: ["catholic"],
  DEU: ["protestant", "catholic"], CHE: ["protestant", "catholic"], NLD: ["protestant", "catholic"],
  BEL: ["catholic"], LUX: ["catholic"], CZE: ["catholic"], SVK: ["catholic"], HUN: ["catholic"],
  GBR: ["anglican", "catholic"], DNK: ["protestant"], SWE: ["protestant"], NOR: ["protestant"], FIN: ["protestant"], ISL: ["protestant"],
  GRC: ["orthodox"], CYP: ["orthodox"], BGR: ["orthodox"], ROU: ["orthodox"], SRB: ["orthodox"], MNE: ["orthodox"],
  RUS: ["orthodox"], UKR: ["orthodox"], BLR: ["orthodox"], MDA: ["orthodox"], GEO: ["orthodox"], ARM: ["orthodox"],
  BIH: ["muslim", "orthodox", "catholic"], ALB: ["muslim"], XKX: ["muslim"], MKD: ["orthodox", "muslim"],
  // mena
  TUR: ["muslim"], SAU: ["muslim"], IRN: ["muslim"], IRQ: ["muslim"], SYR: ["muslim"], LBN: ["muslim", "christian"],
  JOR: ["muslim"], EGY: ["muslim", "coptic"], LBY: ["muslim"], TUN: ["muslim"], DZA: ["muslim"], MAR: ["muslim"],
  ISR: ["jewish", "muslim"], ARE: ["muslim"], QAT: ["muslim"], KWT: ["muslim"], BHR: ["muslim"], OMN: ["muslim"], YEM: ["muslim"],
  AZE: ["muslim"], KAZ: ["muslim"], UZB: ["muslim"], TJK: ["muslim"], TKM: ["muslim"], KGZ: ["muslim"], AFG: ["muslim"], PAK: ["muslim"],
  // africa / asia
  IND: ["hindu", "muslim"], NPL: ["hindu"], LKA: ["buddhist", "hindu"], BTN: ["buddhist"], MMR: ["buddhist"], THA: ["buddhist"], KHM: ["buddhist"], LAO: ["buddhist"], MNG: ["buddhist"],
  CHN: ["buddhist", "taoist"], JPN: ["shinto", "buddhist"], KOR: ["christian", "buddhist"], VNM: ["buddhist"],
  IDN: ["muslim"], MYS: ["muslim"], BGD: ["muslim"], BRN: ["muslim"], PHL: ["catholic"], TLS: ["catholic"],
  NGA: ["muslim", "christian"], ETH: ["orthodox", "muslim"], SOM: ["muslim"], SDN: ["muslim"], SSD: ["christian"],
  KEN: ["christian"], UGA: ["christian"], TZA: ["christian", "muslim"], ZAF: ["christian"], GHA: ["christian"],
  CIV: ["muslim", "christian"], SEN: ["muslim"], MLI: ["muslim"], NER: ["muslim"], BFA: ["muslim"], TCD: ["muslim"], MRT: ["muslim"],
  // americas
  USA: ["christian"], CAN: ["christian"], MEX: ["catholic"], BRA: ["catholic"], ARG: ["catholic"], CHL: ["catholic"],
  PER: ["catholic"], COL: ["catholic"], VEN: ["catholic"], ECU: ["catholic"], BOL: ["catholic"], PRY: ["catholic"], URY: ["catholic"],
  CUB: ["catholic"], DOM: ["catholic"], HTI: ["catholic"], JAM: ["christian"],
  // oceania
  AUS: ["christian"], NZL: ["christian"],
};

// denominations / schools within the major religions: parent → sect → countries
export const SECTS: Record<string, Record<string, string[]>> = {
  islam: {
    sunni: ["SAU","TUR","EGY","PAK","IDN","MYS","BGD","AFG","JOR","SYR","LBY","TUN","DZA","MAR","ARE","QAT","KWT","KAZ","UZB","TJK","TKM","KGZ","SEN","MLI","NER","SOM","SDN","MRT","ALB","BIH","XKX","BRN","NGA","TCD","BFA","IRQ","LBN","YEM","IND"],
    shia: ["IRN","IRQ","AZE","BHR","LBN","YEM","PAK","AFG","SAU","KWT","IND"],
    ibadi: ["OMN"],
    sufi: ["SEN","TUR","PAK","IND","MAR","SDN","EGY"],
  },
  christianity: {
    catholic: ["ITA","ESP","PRT","IRL","POL","FRA","BEL","AUT","HRV","SVN","CZE","SVK","HUN","LUX","MEX","BRA","ARG","CHL","PER","COL","VEN","ECU","BOL","PRY","URY","CUB","DOM","HTI","PHL","TLS","DEU","CHE","NLD","USA","CAN","LBN"],
    protestant: ["DEU","CHE","NLD","DNK","SWE","NOR","FIN","ISL","USA","GBR","KEN","UGA","GHA","ZAF","AUS","NZL","KOR","NGA"],
    anglican: ["GBR","AUS","NZL","NGA","UGA","KEN"],
    "eastern-orthodox": ["GRC","CYP","BGR","ROU","SRB","MNE","RUS","UKR","BLR","MDA","GEO","MKD"],
    "oriental-orthodox": ["ETH","EGY","ARM","ERI"],
    pentecostal: ["BRA","NGA","GHA","KEN","USA","GTM"],
  },
  hinduism: {
    vaishnavism: ["IND","NPL","BGD"],
    shaivism: ["IND","NPL","LKA"],
    shaktism: ["IND","NPL","BGD"],
    smartism: ["IND"],
  },
  buddhism: {
    theravada: ["THA","MMR","KHM","LAO","LKA"],
    mahayana: ["CHN","JPN","KOR","VNM","TWN","SGP"],
    vajrayana: ["BTN","MNG","NPL","CHN"],
  },
  judaism: {
    orthodox: ["ISR","USA"],
    conservative: ["USA","ISR"],
    reform: ["USA","GBR","CAN"],
  },
};

// dominant hindu traditions by indian state (approximate, regional emphasis)
export const INDIA_STATE_SECTS: Record<string, string[]> = {
  "Uttar Pradesh": ["vaishnavism","shaivism"], "Gujarat": ["vaishnavism","shaktism"], "Rajasthan": ["vaishnavism","shaktism"],
  "Odisha": ["vaishnavism","shaktism"], "Manipur": ["vaishnavism"], "Haryana": ["vaishnavism"], "Delhi": ["vaishnavism"],
  "Bihar": ["vaishnavism","shaktism"], "Madhya Pradesh": ["vaishnavism","shaivism"], "Maharashtra": ["vaishnavism","shaivism"],
  "Andhra Pradesh": ["vaishnavism","shaivism"], "Telangana": ["vaishnavism","shaivism"], "Uttarakhand": ["shaivism","vaishnavism"],
  "Chandigarh": ["vaishnavism"], "Punjab": ["vaishnavism"], "Goa": ["vaishnavism","shaktism"], "Karnataka": ["shaivism","vaishnavism","smartism"],
  "Tamil Nadu": ["shaivism","vaishnavism","smartism"], "Kerala": ["shaivism","smartism","shaktism"], "Jammu and Kashmir": ["shaivism"],
  "Himachal Pradesh": ["shaivism","shaktism"], "Chhattisgarh": ["shaivism"], "Jharkhand": ["shaivism","shaktism"], "Pondicherry": ["shaivism"],
  "West Bengal": ["shaktism","vaishnavism"], "Assam": ["shaktism","vaishnavism"], "Tripura": ["shaktism","vaishnavism"],
  "Meghalaya": ["shaktism"], "Sikkim": ["shaktism"], "Mizoram": [], "Nagaland": [],
};

export function sectsFor(iso: string): string[] {
  const out: string[] = [];
  Object.values(SECTS).forEach(g => Object.entries(g).forEach(([sect, isos]) => { if (isos.includes(iso)) out.push(sect); }));
  return out;
}

// constitutionally / culturally secular states
const SECULAR = new Set([
  "FRA","USA","IND","JPN","KOR","TUR","MEX","BRA","ARG","CHL","URY","DEU","NLD","CZE","EST","LVA","LTU",
  "CAN","AUS","NZL","ZAF","KEN","PRT","ESP","ITA","BEL","CHE","SWE","NOR","FIN","DNK","ISL","HUN","SVK",
  "SVN","HRV","ROU","BGR","ALB","MKD","CHN","VNM","CUB","NPL",
]);

const LANG: Record<string, string[]> = {
  // romance
  FRA: ["french"], ITA: ["italian"], ESP: ["spanish"], PRT: ["portuguese"], ROU: ["romanian"],
  // germanic
  DEU: ["german"], AUT: ["german"], CHE: ["german", "french", "italian", "romansh"],
  NLD: ["dutch"], BEL: ["dutch", "french", "german"], LUX: ["luxembourgish", "french", "german"],
  GBR: ["english"], IRL: ["english", "irish"], USA: ["english"], CAN: ["english", "french"],
  AUS: ["english"], NZL: ["english", "maori"], DNK: ["danish"], SWE: ["swedish"], NOR: ["norwegian"], ISL: ["icelandic"], FIN: ["finnish", "swedish"],
  // slavic
  RUS: ["russian"], UKR: ["ukrainian"], BLR: ["belarusian"], POL: ["polish"], CZE: ["czech"], SVK: ["slovak"],
  BGR: ["bulgarian"], SRB: ["serbian"], HRV: ["croatian"], SVN: ["slovenian"], MKD: ["macedonian"], BIH: ["bosnian", "serbian", "croatian"], MNE: ["montenegrin"],
  // baltic / uralic
  EST: ["estonian"], LVA: ["latvian"], LTU: ["lithuanian"], HUN: ["hungarian"],
  // hellenic / albanian / armenian
  GRC: ["greek"], CYP: ["greek", "turkish"], ALB: ["albanian"], XKX: ["albanian", "serbian"], ARM: ["armenian"],
  // turkic
  TUR: ["turkish"], AZE: ["azerbaijani"], KAZ: ["kazakh", "russian"], UZB: ["uzbek"], TKM: ["turkmen"], KGZ: ["kyrgyz", "russian"],
  // iranian
  IRN: ["persian"], AFG: ["dari", "pashto"], TJK: ["tajik"],
  // semitic / arabic-speaking
  SAU: ["arabic"], IRQ: ["arabic", "kurdish"], SYR: ["arabic"], LBN: ["arabic"], JOR: ["arabic"], PSE: ["arabic"],
  EGY: ["arabic"], LBY: ["arabic"], TUN: ["arabic"], DZA: ["arabic", "berber"], MAR: ["arabic", "berber"],
  ARE: ["arabic"], QAT: ["arabic"], KWT: ["arabic"], BHR: ["arabic"], OMN: ["arabic"], YEM: ["arabic"],
  MRT: ["arabic"], SDN: ["arabic"], SOM: ["somali", "arabic"], ISR: ["hebrew", "arabic"],
  // south asia
  IND: ["hindi", "english"], PAK: ["urdu", "english"], BGD: ["bengali"], LKA: ["sinhala", "tamil"], NPL: ["nepali"], BTN: ["dzongkha"],
  // east / se asia
  CHN: ["mandarin"], JPN: ["japanese"], KOR: ["korean"], MNG: ["mongolian"], VNM: ["vietnamese"],
  THA: ["thai"], KHM: ["khmer"], LAO: ["lao"], MMR: ["burmese"], IDN: ["indonesian"], MYS: ["malay"], PHL: ["filipino", "english"], BRN: ["malay"], TLS: ["tetum", "portuguese"],
  // africa
  NGA: ["english", "hausa", "yoruba", "igbo"], ETH: ["amharic", "oromo"], KEN: ["swahili", "english"], UGA: ["english", "swahili"],
  TZA: ["swahili", "english"], ZAF: ["english", "afrikaans", "zulu", "xhosa"], GHA: ["english"], CIV: ["french"], SEN: ["french", "wolof"],
  MLI: ["french", "bambara"], NER: ["french"], BFA: ["french"], TCD: ["french", "arabic"], CMR: ["french", "english"],
  COD: ["french"], COG: ["french"], GAB: ["french"], MDG: ["malagasy", "french"], RWA: ["kinyarwanda", "french", "english"], BDI: ["kirundi", "french"],
  // americas
  MEX: ["spanish"], BRA: ["portuguese"], ARG: ["spanish"], CHL: ["spanish"], PER: ["spanish", "quechua"], COL: ["spanish"],
  VEN: ["spanish"], ECU: ["spanish"], BOL: ["spanish", "quechua", "aymara"], PRY: ["spanish", "guarani"], URY: ["spanish"],
  CUB: ["spanish"], DOM: ["spanish"], HTI: ["french", "haitian-creole"], JAM: ["english"],
  // caucasus
  GEO: ["georgian"], MDA: ["romanian"],
};

export function religionsFor(iso: string): { secular: boolean; tags: string[]; sects: string[] } {
  return { secular: SECULAR.has(iso), tags: REL[iso] ?? [], sects: sectsFor(iso) };
}

export function languagesFor(iso: string): string[] {
  return LANG[iso] ?? [];
}

/* ── reverse indexes for tag exploration ── */

function buildIndex(src: Record<string, string[]>): Record<string, string[]> {
  const idx: Record<string, string[]> = {};
  Object.entries(src).forEach(([iso, tags]) => {
    tags.forEach(t => { (idx[t] ||= []).push(iso); });
  });
  return idx;
}

const REL_INDEX = buildIndex(REL);
Object.values(SECTS).forEach(g => Object.entries(g).forEach(([sect, isos]) => {
  REL_INDEX[sect] = Array.from(new Set([...(REL_INDEX[sect] ?? []), ...isos]));
}));
const LANG_INDEX = buildIndex(LANG);
const SECULAR_ARR = Array.from(SECULAR);

export type TagKind = "religion" | "language" | "secular";

export function countriesForTag(kind: TagKind, tag: string): string[] {
  if (kind === "secular") return SECULAR_ARR;
  if (kind === "religion") return REL_INDEX[tag] ?? [];
  return LANG_INDEX[tag] ?? [];
}

// stable hue per tag string — gives every tag a distinct color
export function colorForTag(kind: TagKind, tag: string): string {
  if (kind === "secular") return "hsl(220 10% 55%)";
  let h = 0;
  for (let i = 0; i < tag.length; i++) h = (h * 31 + tag.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  // religions warmer, languages cooler
  const sat = kind === "religion" ? 55 : 45;
  const lig = kind === "religion" ? 58 : 62;
  return `hsl(${hue} ${sat}% ${lig}%)`;
}

// All known countries (union of identity sources) — used by the tag panel
export function allKnownCountries(): string[] {
  const set = new Set<string>([...Object.keys(REL), ...Object.keys(LANG), ...SECULAR_ARR]);
  return Array.from(set);
}