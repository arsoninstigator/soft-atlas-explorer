// historical scaffolding for the timeline dial.

export const COUNTRY_BIRTH: Record<string, number> = {
  RUS:1991, UKR:1991, BLR:1991, KAZ:1991, UZB:1991, TKM:1991, KGZ:1991, TJK:1991,
  ARM:1991, AZE:1991, GEO:1991, MDA:1991, LTU:1991, LVA:1991, EST:1991,
  SVN:1991, HRV:1991, MKD:1991, BIH:1992, SRB:2006, MNE:2006,
  CZE:1993, SVK:1993,
  DEU:1990,
  IND:1947, PAK:1947, BGD:1971,
  VNM:1945, LAO:1953, KHM:1953,
  PRK:1948, KOR:1948,
  ISR:1948, JOR:1946, LBN:1943, SYR:1946, IRQ:1932,
  EGY:1922, LBY:1951, MAR:1956, TUN:1956, DZA:1962, SDN:1956,
  GHA:1957, GIN:1958, CMR:1960, SEN:1960, TGO:1960, MDG:1960, COD:1960, SOM:1960,
  BEN:1960, NER:1960, BFA:1960, CIV:1960, TCD:1960, CAF:1960, COG:1960, GAB:1960,
  MLI:1960, MRT:1960, NGA:1960, KEN:1963, MWI:1964, ZMB:1964, GMB:1965, BWA:1966,
  LSO:1966, SWZ:1968, GNQ:1968, BHR:1971, QAT:1971, ARE:1971, OMN:1971,
  GNB:1974, AGO:1975, MOZ:1975, CPV:1975, STP:1975, COM:1975, SUR:1975,
  DJI:1977, ZWE:1980, NAM:1990, ERI:1993, SSD:2011,
  PNG:1975, SLB:1978, VUT:1980, TLS:2002, BRN:1984,
};

export interface Polity {
  id: string;
  name: string;
  color: string;
  members: string[];
  from: number;
  to: number;
  labelAt: [number, number];
}

export const POLITIES: Polity[] = [
  { id:"USSR", name:"U.S.S.R.", color:"168,50,74",
    members:["RUS","UKR","BLR","KAZ","UZB","TKM","KGZ","TJK","ARM","AZE","GEO","MDA","LTU","LVA","EST"],
    from:1922, to:1991, labelAt:[62, 80] },
  { id:"YUG", name:"Yugoslavia", color:"122,90,143",
    members:["SVN","HRV","BIH","SRB","MNE","MKD"], from:1918, to:1992, labelAt:[44, 19] },
  { id:"CSK", name:"Czechoslovakia", color:"138,106,58",
    members:["CZE","SVK"], from:1918, to:1993, labelAt:[49.7, 17] },
  { id:"RAJ", name:"British Raj", color:"163,90,58",
    members:["IND","PAK","BGD","MMR"], from:1757, to:1947, labelAt:[22, 78] },
  { id:"INDO", name:"French Indochina", color:"90,122,138",
    members:["VNM","LAO","KHM"], from:1887, to:1954, labelAt:[16, 106] },
  { id:"OTT", name:"Ottoman Empire", color:"138,106,74",
    members:["TUR","SYR","LBN","ISR","JOR","IRQ","SAU","YEM","EGY","LBY"],
    from:1517, to:1922, labelAt:[38, 35] },
  { id:"AUH", name:"Austria-Hungary", color:"122,80,80",
    members:["AUT","HUN","CZE","SVK","SVN","HRV","BIH"], from:1867, to:1918, labelAt:[47.5, 16] },
  { id:"RUE", name:"Russian Empire", color:"138,70,90",
    members:["RUS","UKR","BLR","KAZ","UZB","TKM","KGZ","TJK","ARM","AZE","GEO","MDA","LTU","LVA","EST","FIN","POL"],
    from:1721, to:1917, labelAt:[60, 90] },
  { id:"QING", name:"Qing Empire", color:"180,140,60",
    members:["CHN","MNG","TWN"], from:1644, to:1912, labelAt:[36, 105] },
  { id:"GCOL", name:"Gran Colombia", color:"90,138,110",
    members:["COL","VEN","ECU","PAN"], from:1819, to:1831, labelAt:[4, -72] },
  { id:"FWA", name:"French West Africa", color:"110,138,90",
    members:["SEN","MLI","NER","CIV","BFA","BEN","GIN","MRT","TGO"],
    from:1895, to:1958, labelAt:[14, -4] },
  { id:"AOF", name:"Belgian Congo", color:"100,90,138",
    members:["COD","RWA","BDI"], from:1908, to:1960, labelAt:[-3, 23] },
  { id:"PERU", name:"Spanish America", color:"170,120,80",
    members:["MEX","GTM","SLV","HND","NIC","CRI","CUB","DOM","PER","BOL","CHL","ARG","URY","PRY"],
    from:1535, to:1821, labelAt:[-15, -65] },
];

export function polititiesAt(year: number): Polity[] {
  return POLITIES.filter(p => year >= p.from && year < p.to);
}

export function suppressedIsos(year: number): Set<string> {
  const s = new Set<string>();
  polititiesAt(year).forEach(p => p.members.forEach(m => s.add(m)));
  return s;
}

export function countryExists(iso: string, year: number): boolean {
  const birth = COUNTRY_BIRTH[iso];
  if (birth == null) return true;
  return year >= birth;
}

export const COUNTRY_PAGE: Record<string, string> = {
  USA: "unitedstates",
  CAN: "canada",
  GBR: "unitedkingdom",
  AUS: "australia",
  NZL: "newzealand",
};
