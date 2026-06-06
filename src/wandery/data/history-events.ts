// Curated catalog of major wars, trades and attacks for the /history hub.
// Country membership uses ISO_A3 codes matching world.geo.json features.

export interface WarSide {
  id: string;
  label: string;
  color: string; // rgb triplet
  members: string[];
  outcome?: "victor" | "defeated" | "mixed" | "withdrew";
}

export interface WarDef {
  id: string;
  title: string;
  years: string;
  blurb: string;
  sides: WarSide[];
  summary: string;
  notes?: string[];
}

export const WARS: Record<string, WarDef> = {
  ww1: {
    id: "ww1",
    title: "World War I",
    years: "1914 – 1918",
    blurb: "Allied and Central powers across European, African, and Middle-Eastern fronts.",
    sides: [
      { id: "allies", label: "Allied Powers", color: "82 120 178", outcome: "victor",
        members: ["GBR","FRA","RUS","ITA","USA","JPN","SRB","BEL","ROU","PRT","GRC","CAN","AUS","NZL","IND","ZAF"] },
      { id: "central", label: "Central Powers", color: "188 92 96", outcome: "defeated",
        members: ["DEU","AUT","HUN","TUR","BGR"] },
    ],
    summary:
      "Triggered by the assassination in Sarajevo, the war drew empires into industrial-scale trench warfare across Europe, the Levant and colonial fronts. The United States entered in 1917; the Central Powers collapsed in late 1918, dissolving the Austro-Hungarian, Ottoman and Russian imperial orders.",
    notes: [
      "U.S. entry in 1917 tipped the manpower balance on the Western Front.",
      "Ottoman defeat reshaped the Middle East via Sykes–Picot and the British Mandate.",
      "The Russian Empire collapsed mid-war into revolution and exit at Brest-Litovsk.",
    ],
  },
  ww2: {
    id: "ww2",
    title: "World War II",
    years: "1939 – 1945",
    blurb: "Axis vs Allied powers across Europe, the Pacific, North Africa and the Atlantic.",
    sides: [
      { id: "allies", label: "Allies", color: "82 120 178", outcome: "victor",
        members: ["USA","GBR","FRA","RUS","CHN","CAN","AUS","NZL","IND","ZAF","BRA","MEX","NOR","NLD","BEL","LUX","POL","CZE","GRC","YUG","ETH"] },
      { id: "axis", label: "Axis", color: "188 92 96", outcome: "defeated",
        members: ["DEU","ITA","JPN","HUN","ROU","BGR","FIN","HRV","SVK","THA"] },
    ],
    summary:
      "Germany's invasion of Poland in 1939 ignited a global war. The United States entered after Pearl Harbor (Dec 1941); the United Kingdom and the Commonwealth, the Soviet Union and China formed the core Allied coalition. The war ended with Germany's surrender in May 1945 and Japan's surrender in September 1945 after the atomic bombings.",
    notes: [
      "Axis included Nazi Germany, Fascist Italy and Imperial Japan; co-belligerents shifted (Italy switched sides in 1943).",
      "The Holocaust murdered six million Jews; the war killed an estimated 70–85 million people.",
      "Post-war, the United States, Soviet Union, UK, France and China became the UN Security Council's permanent members.",
    ],
  },
  cold_war: {
    id: "cold_war",
    title: "Cold War",
    years: "1947 – 1991",
    blurb: "NATO vs Warsaw Pact and the global proxy struggle between Washington and Moscow.",
    sides: [
      { id: "west", label: "NATO / Western bloc", color: "82 120 178", outcome: "victor",
        members: ["USA","GBR","FRA","CAN","DEU","ITA","BEL","NLD","LUX","DNK","NOR","ISL","PRT","ESP","GRC","TUR","AUS","NZL","JPN","KOR","ISR"] },
      { id: "east", label: "Warsaw Pact / Eastern bloc", color: "188 92 96", outcome: "defeated",
        members: ["RUS","UKR","BLR","POL","CZE","SVK","HUN","ROU","BGR","ALB","CUB","PRK","VNM","MNG"] },
      { id: "nam", label: "Non-Aligned / contested", color: "150 142 168", outcome: "mixed",
        members: ["IND","IDN","EGY","YUG","CHN","ETH","IRN","IRQ"] },
    ],
    summary:
      "After 1945 the U.S. and the Soviet Union polarized the world. Direct war was avoided in Europe; proxy conflicts ran through Korea, Vietnam, Afghanistan, Angola, Central America and the Middle East. The Soviet bloc dissolved between 1989 and 1991.",
  },
  korean: {
    id: "korean",
    title: "Korean War",
    years: "1950 – 1953",
    blurb: "UN coalition led by the United States vs North Korea and the People's Republic of China.",
    sides: [
      { id: "un", label: "UN Command", color: "82 120 178", outcome: "mixed",
        members: ["KOR","USA","GBR","CAN","AUS","NZL","FRA","TUR","ETH","ZAF","BEL","NLD","COL","GRC","THA","PHL","LUX"] },
      { id: "north", label: "DPRK & allies", color: "188 92 96", outcome: "mixed",
        members: ["PRK","CHN","RUS"] },
    ],
    summary:
      "The war began when North Korea invaded the South in June 1950. A U.S.-led UN coalition pushed to the Yalu before Chinese intervention drove the front back to roughly the 38th parallel, where an armistice was signed in 1953. No peace treaty has ever been signed.",
  },
  vietnam: {
    id: "vietnam",
    title: "Vietnam War",
    years: "1955 – 1975",
    blurb: "U.S.-backed South Vietnam vs the Soviet/Chinese-backed North.",
    sides: [
      { id: "south", label: "South Vietnam & allies", color: "82 120 178", outcome: "defeated",
        members: ["USA","KOR","AUS","NZL","THA","PHL"] },
      { id: "north", label: "North Vietnam & allies", color: "188 92 96", outcome: "victor",
        members: ["VNM","CHN","RUS","PRK","CUB"] },
    ],
    summary:
      "After French withdrawal, the U.S. escalated direct involvement from 1965. Despite massive bombing campaigns and 500,000+ U.S. troops at peak, sustained insurgency, casualties and domestic protest forced U.S. withdrawal in 1973. Saigon fell to the North in April 1975.",
  },
  iraq: {
    id: "iraq",
    title: "Iraq War",
    years: "2003 – 2011",
    blurb: "U.S.-led 'Coalition of the Willing' invasion of Ba'athist Iraq.",
    sides: [
      { id: "coalition", label: "Coalition", color: "82 120 178", outcome: "victor",
        members: ["USA","GBR","AUS","POL","ESP","ITA","DNK","NLD","KOR","JPN","GEO","ROU"] },
      { id: "iraq", label: "Ba'athist Iraq", color: "188 92 96", outcome: "defeated",
        members: ["IRQ"] },
    ],
    summary:
      "The U.S.-led invasion toppled Saddam Hussein in three weeks. A prolonged insurgency and sectarian civil war followed, with U.S. combat operations formally ending in 2011. The war is widely seen as the proximate cause of the rise of ISIS.",
  },
  gulf: {
    id: "gulf",
    title: "Gulf War",
    years: "1990 – 1991",
    blurb: "UN-authorized coalition expels Iraq from Kuwait.",
    sides: [
      { id: "coalition", label: "Coalition", color: "82 120 178", outcome: "victor",
        members: ["USA","GBR","FRA","SAU","EGY","SYR","KWT","ARE","QAT","BHR","OMN","CAN","AUS","ITA","ESP","NLD","ARG","PAK","BGD","KOR"] },
      { id: "iraq", label: "Iraq", color: "188 92 96", outcome: "defeated",
        members: ["IRQ"] },
    ],
    summary:
      "After Iraq invaded Kuwait in August 1990, a 35-nation coalition under U.S. command launched Operation Desert Storm in January 1991. Kuwait was liberated within 100 hours of the ground offensive.",
  },
  afghanistan: {
    id: "afghanistan",
    title: "War in Afghanistan",
    years: "2001 – 2021",
    blurb: "NATO-led ISAF intervention following the September 11 attacks.",
    sides: [
      { id: "nato", label: "NATO / ISAF", color: "82 120 178", outcome: "defeated",
        members: ["USA","GBR","CAN","FRA","DEU","ITA","AUS","NZL","POL","ESP","NLD","TUR","DNK","NOR","ROU"] },
      { id: "taliban", label: "Taliban & allies", color: "188 92 96", outcome: "victor",
        members: ["AFG"] },
    ],
    summary:
      "Launched after 9/11 to dismantle al-Qaeda and the Taliban regime. The U.S. and NATO occupied the country for two decades. After the 2020 Doha agreement and 2021 U.S. withdrawal, the Taliban swiftly retook Kabul.",
  },
  arab_israeli_1948: {
    id: "arab_israeli_1948",
    title: "1948 Arab–Israeli War",
    years: "1948 – 1949",
    blurb: "Israel's war of independence against neighbouring Arab states.",
    sides: [
      { id: "isr", label: "Israel", color: "82 120 178", outcome: "victor",
        members: ["ISR"] },
      { id: "arab", label: "Arab coalition", color: "188 92 96", outcome: "defeated",
        members: ["EGY","JOR","SYR","LBN","IRQ","SAU","YEM"] },
    ],
    summary:
      "Following the UN partition plan and Israel's declaration of independence in May 1948, five Arab armies invaded. Armistice lines drawn in 1949 became Israel's de-facto borders until 1967.",
  },
  six_day: {
    id: "six_day",
    title: "Six-Day War",
    years: "1967",
    blurb: "Israel vs Egypt, Syria and Jordan in a six-day pre-emptive war.",
    sides: [
      { id: "isr", label: "Israel", color: "82 120 178", outcome: "victor",
        members: ["ISR"] },
      { id: "arab", label: "Arab coalition", color: "188 92 96", outcome: "defeated",
        members: ["EGY","JOR","SYR","IRQ"] },
    ],
    summary:
      "Pre-empting an Egyptian mobilization, Israel destroyed the Egyptian Air Force on the ground and within six days captured the Sinai, Gaza, West Bank, East Jerusalem and Golan Heights — defining the territorial questions still at the heart of the Israeli–Palestinian conflict.",
  },
  yom_kippur: {
    id: "yom_kippur",
    title: "Yom Kippur War",
    years: "1973",
    blurb: "Egypt and Syria attack Israel on Yom Kippur.",
    sides: [
      { id: "isr", label: "Israel", color: "82 120 178", outcome: "victor",
        members: ["ISR"] },
      { id: "arab", label: "Egypt & Syria", color: "188 92 96", outcome: "defeated",
        members: ["EGY","SYR","IRQ","JOR"] },
    ],
    summary:
      "A coordinated Egyptian–Syrian surprise attack achieved early gains in Sinai and the Golan before Israel counter-attacked across the Suez Canal. The war led directly to the Camp David Accords and Egypt–Israel peace.",
  },
  falklands: {
    id: "falklands",
    title: "Falklands War",
    years: "1982",
    blurb: "United Kingdom vs Argentina over the Falkland Islands.",
    sides: [
      { id: "uk", label: "United Kingdom", color: "82 120 178", outcome: "victor",
        members: ["GBR"] },
      { id: "arg", label: "Argentina", color: "188 92 96", outcome: "defeated",
        members: ["ARG"] },
    ],
    summary:
      "Argentina invaded the British-administered Falklands in April 1982. A Royal Navy task force retook the islands within 74 days, reshaping British politics and ending Argentina's military junta.",
  },
  ukraine: {
    id: "ukraine",
    title: "Russo–Ukrainian War",
    years: "2014 – present",
    blurb: "Russia's annexation of Crimea and full-scale 2022 invasion of Ukraine.",
    sides: [
      { id: "ukr", label: "Ukraine & supporters", color: "82 120 178",
        members: ["UKR","USA","GBR","DEU","FRA","POL","CAN","ITA","ESP","NLD","BEL","DNK","NOR","SWE","FIN","CZE","SVK","ROU","BGR","EST","LVA","LTU","JPN","KOR","AUS"] },
      { id: "rus", label: "Russia & supporters", color: "188 92 96",
        members: ["RUS","BLR","PRK","IRN"] },
    ],
    summary:
      "Russia annexed Crimea in 2014 and launched a full-scale invasion of Ukraine on 24 Feb 2022. NATO members, while not co-belligerent, have provided sustained military and financial support to Ukraine.",
  },
};

// ── TRADE ROUTES ────────────────────────────────────────────────────────────

export interface TradeArrow {
  from: [number, number]; // [lat, lng]
  to: [number, number];
  label?: string;
  color?: string;
}

export interface TradeDef {
  id: string;
  title: string;
  years: string;
  blurb: string;
  summary: string;
  arrows: TradeArrow[];
  notes?: string[];
}

export const TRADES: Record<string, TradeDef> = {
  triangular_slave: {
    id: "triangular_slave",
    title: "Atlantic Triangular Slave Trade",
    years: "c. 1500 – 1867",
    blurb: "European manufactured goods to Africa, enslaved Africans to the Americas, raw commodities back to Europe.",
    summary:
      "Over roughly three and a half centuries, an estimated 12.5 million Africans were forcibly transported across the Atlantic, of whom around 10.7 million survived the Middle Passage. Britain, Portugal, France, Spain, the Netherlands and later the United States organised the trade, exchanging textiles, firearms and metalware for captives, then sugar, tobacco, cotton and rum.",
    arrows: [
      { from: [52, -2], to: [8, -2], label: "£20,000 worth · textiles, firearms, metal goods", color: "120 80 90" },
      { from: [4, 6], to: [18, -66], label: "£4,000 worth · enslaved Africans (Middle Passage)", color: "168 80 90" },
      { from: [22, -78], to: [50, -6], label: "£10,000 worth · sugar, tobacco, raw cotton, furs", color: "120 80 90" },
    ],
    notes: [
      "Average profit on a single enslaved person in 1800: ~£22.",
      "A trip lasted roughly a year, returning ~£8,000 profit per ship.",
      "In 1792, Liverpool alone fielded 140 slave ships.",
      "Britain abolished the trade in 1807 and slavery in the Empire in 1833; the U.S. ended legal importation in 1808 and abolished slavery in 1865.",
    ],
  },
  silk_road: {
    id: "silk_road",
    title: "Silk Road",
    years: "c. 130 BCE – 1450s CE",
    blurb: "Overland and maritime exchange between China, Central Asia, Persia and the Mediterranean.",
    summary:
      "A network — not a single road — carrying silk, porcelain, spices, glass, horses, religions and disease between East Asia and the Mediterranean. It declined as the Ottoman Empire restricted overland trade and European maritime routes opened.",
    arrows: [
      { from: [34, 108], to: [39, 76], label: "silk, porcelain →", color: "120 90 60" },
      { from: [39, 76], to: [35, 51], label: "→ Persia", color: "120 90 60" },
      { from: [35, 51], to: [41, 29], label: "→ Constantinople", color: "120 90 60" },
      { from: [41, 29], to: [45, 12], label: "→ Venice", color: "120 90 60" },
    ],
  },
  spice_route: {
    id: "spice_route",
    title: "Maritime Spice Route",
    years: "c. 1500 – 1800",
    blurb: "Portuguese, Dutch and British East India companies linking Europe to the Indies.",
    summary:
      "Pepper, cloves, nutmeg and cinnamon drove European naval expansion around the Cape of Good Hope into the Indian Ocean. The Dutch and British East India Companies built corporate empires on this trade.",
    arrows: [
      { from: [52, 4], to: [-34, 18], label: "Amsterdam → Cape", color: "90 110 140" },
      { from: [-34, 18], to: [6, 80], label: "Cape → Ceylon", color: "90 110 140" },
      { from: [6, 80], to: [-6, 106], label: "→ Batavia (Java)", color: "90 110 140" },
      { from: [-6, 106], to: [-3, 128], label: "→ Spice Islands", color: "90 110 140" },
    ],
  },
};

// ── MAJOR ATTACKS ───────────────────────────────────────────────────────────

export interface AttackDef {
  id: string;
  title: string;
  date: string;
  location: string;
  blurb: string;
  summary: string;
  pos: [number, number];
}

export const ATTACKS: Record<string, AttackDef> = {
  pearl_harbor: {
    id: "pearl_harbor",
    title: "Attack on Pearl Harbor",
    date: "7 December 1941",
    location: "Oahu, Hawaii, United States",
    blurb: "Imperial Japan's surprise carrier strike that brought the U.S. into WWII.",
    summary:
      "A surprise Japanese carrier-based attack on the U.S. Pacific Fleet killed 2,403 Americans, sank or damaged 19 ships and 300+ aircraft. The U.S. declared war on Japan the next day, entering WWII.",
    pos: [21.36, -157.95],
  },
  nine_eleven: {
    id: "nine_eleven",
    title: "September 11 Attacks",
    date: "11 September 2001",
    location: "New York · Arlington · Shanksville, United States",
    blurb: "Al-Qaeda hijackings that killed 2,977 and triggered the Global War on Terror.",
    summary:
      "Nineteen al-Qaeda hijackers crashed four airliners into the World Trade Center, the Pentagon, and a Pennsylvania field. The U.S. invoked NATO Article 5, invaded Afghanistan, and reshaped global security, surveillance and air travel.",
    pos: [40.71, -74.01],
  },
  oct_7: {
    id: "oct_7",
    title: "October 7 Attacks",
    date: "7 October 2023",
    location: "Southern Israel",
    blurb: "Hamas-led cross-border assault from Gaza into southern Israel.",
    summary:
      "A coordinated assault by Hamas and allied factions killed ~1,200 people in Israel and took 251 hostages, triggering Israel's war in Gaza. The deadliest day for Jews since the Holocaust.",
    pos: [31.5, 34.5],
  },
  london_77: {
    id: "london_77",
    title: "7/7 London Bombings",
    date: "7 July 2005",
    location: "London, United Kingdom",
    blurb: "Coordinated suicide bombings on the London transport network.",
    summary:
      "Four British Islamist suicide bombers attacked three Underground trains and a bus, killing 52 commuters and injuring 700+ — the deadliest terrorist attack on British soil.",
    pos: [51.51, -0.13],
  },
  mumbai: {
    id: "mumbai",
    title: "26/11 Mumbai Attacks",
    date: "26 – 29 November 2008",
    location: "Mumbai, India",
    blurb: "Lashkar-e-Taiba commando-style assault across multiple Mumbai sites.",
    summary:
      "Ten Pakistan-based militants from Lashkar-e-Taiba conducted a four-day siege of hotels, a railway station, a hospital and a Jewish centre, killing 175 people including 20 security personnel.",
    pos: [19.07, 72.87],
  },
  madrid: {
    id: "madrid",
    title: "Madrid Train Bombings",
    date: "11 March 2004",
    location: "Madrid, Spain",
    blurb: "Coordinated commuter-train bombings days before Spain's general election.",
    summary:
      "Ten near-simultaneous bombings on Madrid commuter trains killed 193 people. The attack, claimed by al-Qaeda-inspired cells, reshaped Spain's election and ended its participation in the Iraq War.",
    pos: [40.41, -3.70],
  },
};
