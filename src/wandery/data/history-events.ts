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
      "Russia switched out of the war in 1918 after the Bolshevik Revolution, signing the Treaty of Brest-Litovsk with the Central Powers.",
      "Italy began the war allied with Germany and Austria-Hungary (Triple Alliance) but remained neutral in 1914 and joined the Allies in 1915 under the secret Treaty of London.",
      "Romania initially stayed neutral, joined the Allies in 1916, was defeated and signed a separate peace in 1918, then re-entered on the Allied side at the war's end.",
      "Bulgaria joined the Central Powers in 1915 after starting the war neutral.",
      "Colonial participation: India, Canada, Australia, New Zealand and South Africa fought as part of the British Empire — not as independent belligerents. ~1.3 million Indians served under the British Indian Army; over 74,000 were killed.",
      "French colonial troops (Senegalese tirailleurs, North and West African divisions, Indochinese) and the African and Pacific German colonies were also drawn in through imperial command, not independent declarations of war.",
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
      "Soviet Union (Russia): signed the Molotov–Ribbentrop non-aggression pact with Germany in Aug 1939 and jointly invaded Poland. After Germany's surprise invasion (Operation Barbarossa, June 1941) the USSR joined the Allies and bore the largest share of European casualties (~27 million).",
      "Italy: an Axis founding member; after Mussolini's fall and the 1943 armistice it co-belligerently joined the Allies while the German-backed Salò Republic fought on with the Axis.",
      "Romania, Bulgaria, Hungary and Finland fought alongside the Axis but switched sides (or were occupied and switched) to the Allies in 1944.",
      "Thailand declared war on the Allies under Japanese pressure in 1942; its Washington ambassador refused to deliver the declaration, and post-war the Allies treated Thailand as a defeated enemy in name only.",
      "Colonial participation: India, the Crown Colonies of Africa, Burma, Malaya and the Caribbean fought as part of the British Empire — not as sovereign belligerents. ~2.5 million Indians served in the British Indian Army (the largest volunteer army in history); ~87,000 were killed.",
      "Canada, Australia, New Zealand and South Africa entered the war as self-governing Dominions and declared war independently, though closely coordinated with London.",
      "French colonial forces (North and West African, Indochinese) fought first for Vichy France and then for the Free French; Free French forces under de Gaulle operated from London and Brazzaville.",
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
    notes: [
      "China: an Allied power under the Republic of China during WWII; after the 1949 Communist victory the PRC aligned with Moscow, then split from the USSR (Sino–Soviet split, 1960s) and re-aligned with the U.S. against Moscow from Nixon's 1972 visit onward.",
      "Yugoslavia: communist but expelled from the Soviet bloc in 1948; co-founded the Non-Aligned Movement with India, Egypt, Indonesia and Ghana.",
      "Egypt: shifted from Soviet client under Nasser to U.S. partner under Sadat after 1972, sealed by the 1979 peace treaty with Israel.",
      "Iran: a U.S. ally under the Shah until the 1979 Islamic Revolution, after which it became hostile to both blocs.",
      "Iraq: bought arms from both blocs; tilted Soviet under the Ba'ath, then received Western backing during the Iran–Iraq War.",
      "Albania: broke with Moscow in 1961 and aligned briefly with Maoist China before isolating itself entirely.",
    ],
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
  from?: [number, number];
  fromLabel?: string;
  color?: string; // rgb triplet for arrow + pin
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
    from: [40.0, 154.0],
    fromLabel: "imperial japanese navy carrier strike force (kido butai)",
    color: "188 92 96",
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
    from: [42.36, -71.01],
    fromLabel: "hijacked flights · boston · newark · dulles",
    color: "168 80 90",
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
    from: [31.45, 34.38],
    fromLabel: "hamas-led incursion from gaza",
    color: "168 80 90",
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
    color: "168 80 90",
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
    from: [24.86, 67.01],
    fromLabel: "lashkar-e-taiba seaborne approach from karachi",
    color: "168 80 90",
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
    color: "168 80 90",
  },
  hiroshima: {
    id: "hiroshima",
    title: "Atomic Bombing of Hiroshima",
    date: "6 August 1945",
    location: "Hiroshima, Japan",
    blurb: "First wartime use of a nuclear weapon — 'Little Boy' dropped by the Enola Gay.",
    summary:
      "A U.S. B-29, the Enola Gay, flew from North Field on Tinian in the Mariana Islands and dropped a uranium gun-type weapon (‘Little Boy’) over Hiroshima at 08:15. An estimated 70,000–80,000 people died instantly; by year's end the toll had reached ~140,000.",
    pos: [34.39, 132.45],
    from: [14.99, 145.62],
    fromLabel: "509th composite group · north field, tinian",
    color: "200 110 90",
  },
  nagasaki: {
    id: "nagasaki",
    title: "Atomic Bombing of Nagasaki",
    date: "9 August 1945",
    location: "Nagasaki, Japan",
    blurb: "Second nuclear strike — 'Fat Man' plutonium bomb, three days after Hiroshima.",
    summary:
      "Bockscar, another B-29 from Tinian, dropped the plutonium implosion bomb ‘Fat Man’ on Nagasaki at 11:02 after diverting from Kokura. Roughly 40,000 people were killed instantly, with the toll rising to ~74,000 by year's end. Japan announced surrender on 15 August.",
    pos: [32.77, 129.86],
    from: [14.99, 145.62],
    fromLabel: "509th composite group · north field, tinian",
    color: "200 110 90",
  },
  tokyo_firebombing: {
    id: "tokyo_firebombing",
    title: "Firebombing of Tokyo (Operation Meetinghouse)",
    date: "9 – 10 March 1945",
    location: "Tokyo, Japan",
    blurb: "U.S. Army Air Forces low-altitude incendiary raid on Tokyo.",
    summary:
      "Roughly 300 B-29s from the Mariana Islands dropped ~1,665 tons of incendiaries on Tokyo's wooden districts, killing an estimated 100,000 people in a single night and leaving over a million homeless — the deadliest conventional air raid in history.",
    pos: [35.68, 139.69],
    from: [14.99, 145.62],
    fromLabel: "xxi bomber command · marianas",
    color: "200 110 90",
  },
  dresden: {
    id: "dresden",
    title: "Bombing of Dresden",
    date: "13 – 15 February 1945",
    location: "Dresden, Germany",
    blurb: "RAF Bomber Command and USAAF firebombing of Dresden.",
    summary:
      "Over four raids, 722 RAF heavy bombers and 527 U.S. heavy bombers dropped more than 3,900 tons of high-explosive and incendiary bombs on Dresden, creating a firestorm that killed an estimated 25,000 people and destroyed the historic city centre.",
    pos: [51.05, 13.74],
    from: [52.21, 0.10],
    fromLabel: "raf bomber command · east anglia",
    color: "200 110 90",
  },
  paris_2015: {
    id: "paris_2015",
    title: "November 2015 Paris Attacks",
    date: "13 November 2015",
    location: "Paris, France",
    blurb: "Coordinated ISIS gun and bomb attacks across Paris.",
    summary:
      "Three coordinated teams of ISIS attackers struck the Stade de France, cafés in the 10th and 11th arrondissements and the Bataclan concert hall, killing 130 people and wounding 416 — the deadliest attack on French soil since WWII.",
    pos: [48.86, 2.35],
    color: "168 80 90",
  },
  beirut_1983: {
    id: "beirut_1983",
    title: "Beirut Barracks Bombing",
    date: "23 October 1983",
    location: "Beirut, Lebanon",
    blurb: "Suicide truck bombings of U.S. Marine and French paratrooper barracks.",
    summary:
      "Two near-simultaneous suicide truck bombings, attributed to Hezbollah, killed 241 U.S. Marines and 58 French paratroopers stationed with the multinational force in Lebanon. The attack prompted U.S. withdrawal within months.",
    pos: [33.82, 35.49],
    color: "168 80 90",
  },
  london_blitz: {
    id: "london_blitz",
    title: "The Blitz",
    date: "7 September 1940 – 11 May 1941",
    location: "London and British cities",
    blurb: "Sustained Luftwaffe bombing campaign against the United Kingdom.",
    summary:
      "For 57 consecutive nights London was bombed by the Luftwaffe, followed by raids on Coventry, Birmingham, Liverpool, Plymouth and Belfast. Around 43,000 British civilians were killed and over a million homes damaged or destroyed. The Blitz failed to break British morale or force a negotiated peace.",
    pos: [51.51, -0.13],
    from: [52.52, 13.40],
    fromLabel: "luftwaffe · berlin command",
    color: "188 92 96",
  },
  rotterdam_blitz: {
    id: "rotterdam_blitz",
    title: "Rotterdam Blitz",
    date: "14 May 1940",
    location: "Rotterdam, Netherlands",
    blurb: "Luftwaffe terror bombing that forced Dutch surrender.",
    summary:
      "German bombers destroyed the historic centre of Rotterdam in a single afternoon, killing ~900 civilians and rendering 85,000 homeless. The Dutch government surrendered the same day under threat that Utrecht would be next.",
    pos: [51.92, 4.48],
    from: [52.52, 13.40],
    fromLabel: "luftflotte 2 · bremen airfields",
    color: "188 92 96",
  },
  nanjing: {
    id: "nanjing",
    title: "Nanjing Massacre",
    date: "13 December 1937 – January 1938",
    location: "Nanjing, China",
    blurb: "Imperial Japanese Army massacre and mass rape during the Second Sino-Japanese War.",
    summary:
      "After capturing the Republic of China's capital, Japanese forces under General Matsui conducted six weeks of mass killings, rape, looting and arson. Chinese estimates put the death toll at over 300,000; international tribunals after the war established figures in the range of 200,000+. The massacre remains a defining and disputed memory in Sino-Japanese relations.",
    pos: [32.06, 118.80],
    color: "188 92 96",
  },
  doolittle: {
    id: "doolittle",
    title: "Doolittle Raid",
    date: "18 April 1942",
    location: "Tokyo and Honshu, Japan",
    blurb: "First U.S. air raid on the Japanese home islands after Pearl Harbor.",
    summary:
      "Sixteen B-25 medium bombers under Lt. Col. Jimmy Doolittle launched from the carrier USS Hornet 650 nautical miles off Japan and struck Tokyo, Yokohama, Yokosuka, Nagoya and Kobe. Material damage was light but the raid shocked Japanese command, accelerated the Midway operation, and lifted U.S. morale.",
    pos: [35.68, 139.69],
    from: [35.0, 153.0],
    fromLabel: "uss hornet · task force 16",
    color: "200 110 90",
  },
  hamburg_gomorrah: {
    id: "hamburg_gomorrah",
    title: "Bombing of Hamburg (Operation Gomorrah)",
    date: "24 July – 3 August 1943",
    location: "Hamburg, Germany",
    blurb: "RAF and USAAF firestorm raids on Hamburg.",
    summary:
      "A combined RAF night and USAAF day bombing campaign dropped ~9,000 tons of bombs on Hamburg, creating a firestorm that killed an estimated 37,000 people and destroyed half the city — the heaviest air assault in history to that date and the model for later raids on Dresden and Tokyo.",
    pos: [53.55, 9.99],
    from: [52.21, 0.10],
    fromLabel: "raf bomber command + usaaf 8th af · east anglia",
    color: "200 110 90",
  },
  munich_1972: {
    id: "munich_1972",
    title: "Munich Olympics Massacre",
    date: "5 – 6 September 1972",
    location: "Munich, West Germany",
    blurb: "Black September attack on Israeli athletes at the Summer Olympics.",
    summary:
      "Eight Palestinian Black September militants infiltrated the Olympic Village, killed two Israeli team members and took nine more hostage. All nine hostages, five attackers and a West German police officer were killed during a failed rescue at Fürstenfeldbruck airfield. Israel's response, Operation Wrath of God, ran for years.",
    pos: [48.18, 11.55],
    color: "168 80 90",
  },
  lockerbie: {
    id: "lockerbie",
    title: "Lockerbie Bombing (Pan Am 103)",
    date: "21 December 1988",
    location: "Lockerbie, Scotland",
    blurb: "Libyan-planted bomb destroys Pan Am 103 over Scotland.",
    summary:
      "A bomb in the forward cargo hold of Pan Am Flight 103 from London to New York exploded over Lockerbie, killing all 259 people on board and 11 on the ground. Libyan intelligence officer Abdelbaset al-Megrahi was convicted in 2001; Libya formally accepted responsibility in 2003.",
    pos: [55.12, -3.36],
    color: "168 80 90",
  },
  oklahoma_city: {
    id: "oklahoma_city",
    title: "Oklahoma City Bombing",
    date: "19 April 1995",
    location: "Oklahoma City, United States",
    blurb: "Truck bombing of the Alfred P. Murrah Federal Building.",
    summary:
      "Timothy McVeigh and Terry Nichols, U.S. Army veterans motivated by anti-government extremism, detonated a 4,800-pound ANFO truck bomb outside a federal building, killing 168 people including 19 children and injuring 680. It was the deadliest act of domestic terrorism in U.S. history until 9/11.",
    pos: [35.47, -97.52],
    color: "168 80 90",
  },
  tokyo_sarin: {
    id: "tokyo_sarin",
    title: "Tokyo Subway Sarin Attack",
    date: "20 March 1995",
    location: "Tokyo, Japan",
    blurb: "Aum Shinrikyo nerve-agent attack on the Tokyo Metro.",
    summary:
      "Five members of the Aum Shinrikyo cult released sarin gas on three Tokyo subway lines during morning rush hour, killing 14 people and injuring more than 5,800 — the first major chemical weapons attack on a civilian population in peacetime.",
    pos: [35.68, 139.76],
    color: "168 80 90",
  },
  embassy_bombings_1998: {
    id: "embassy_bombings_1998",
    title: "U.S. Embassy Bombings in East Africa",
    date: "7 August 1998",
    location: "Nairobi, Kenya · Dar es Salaam, Tanzania",
    blurb: "Near-simultaneous al-Qaeda truck bombings of U.S. embassies.",
    summary:
      "Coordinated truck bombings struck the U.S. embassies in Nairobi and Dar es Salaam within minutes of each other, killing 224 people (mostly Kenyans and Tanzanians) and wounding over 4,500. The attacks placed Osama bin Laden on the FBI's Most Wanted list and prompted U.S. cruise-missile strikes on Sudan and Afghanistan.",
    pos: [-1.29, 36.82],
    from: [-6.79, 39.21],
    fromLabel: "second bombing · dar es salaam (same morning)",
    color: "168 80 90",
  },
  kal_007: {
    id: "kal_007",
    title: "Korean Air Lines Flight 007",
    date: "1 September 1983",
    location: "Sea of Japan, near Sakhalin",
    blurb: "Soviet Su-15 shoots down a civilian airliner that strayed into USSR airspace.",
    summary:
      "A Korean Air Lines 747 en route from Anchorage to Seoul drifted off-course into Soviet airspace over Kamchatka and Sakhalin. A Soviet Su-15 interceptor shot it down with air-to-air missiles, killing all 269 people on board, including U.S. Congressman Larry McDonald. The incident hardened Cold War rhetoric and led the U.S. to open civilian GPS access.",
    pos: [46.6, 141.8],
    color: "188 92 96",
  },
  iran_hostage: {
    id: "iran_hostage",
    title: "Iran Hostage Crisis",
    date: "4 November 1979 – 20 January 1981",
    location: "Tehran, Iran",
    blurb: "Seizure of the U.S. embassy in Tehran by Iranian student militants.",
    summary:
      "Following the Islamic Revolution, Iranian students stormed the U.S. embassy and held 52 American diplomats and citizens hostage for 444 days. A U.S. rescue attempt (Operation Eagle Claw) failed disastrously in the desert in April 1980. The crisis defined the Carter–Reagan transition and ruptured U.S.–Iran relations for decades.",
    pos: [35.70, 51.42],
    color: "168 80 90",
  },
  khobar_towers: {
    id: "khobar_towers",
    title: "Khobar Towers Bombing",
    date: "25 June 1996",
    location: "Khobar, Saudi Arabia",
    blurb: "Truck bombing of a U.S. Air Force housing complex.",
    summary:
      "A tanker truck packed with plastic explosives detonated outside an eight-storey building housing U.S. Air Force personnel enforcing the Iraqi no-fly zone, killing 19 American airmen and one Saudi and wounding nearly 500. U.S. investigators attributed the attack to Hezbollah Al-Hejaz with Iranian backing.",
    pos: [26.28, 50.20],
    color: "168 80 90",
  },
  uss_cole: {
    id: "uss_cole",
    title: "USS Cole Bombing",
    date: "12 October 2000",
    location: "Aden, Yemen",
    blurb: "Al-Qaeda small-boat suicide attack on a U.S. Navy destroyer.",
    summary:
      "Two al-Qaeda operatives piloted a small fibreglass boat packed with explosives alongside the destroyer USS Cole refuelling in Aden harbour, killing 17 American sailors and wounding 39. The attack was a direct precursor to 9/11.",
    pos: [12.78, 44.97],
    color: "168 80 90",
  },
};

// ── MAJOR ERAS / EVENTS ─────────────────────────────────────────────────────

export interface EraDef {
  id: string;
  title: string;
  years: string;
  blurb: string;
  summary: string;
  regions: string[];   // descriptive labels (not iso)
  countries?: string[]; // iso codes for filter
  notes?: string[];
}

export const MAJOR_EVENTS: Record<string, EraDef> = {
  nazi_germany: {
    id: "nazi_germany",
    title: "Nazi Germany Era",
    years: "1933 – 1945",
    blurb: "The Third Reich — from the Enabling Act to unconditional surrender.",
    summary:
      "Adolf Hitler's NSDAP took power in January 1933 and over twelve years built a totalitarian state, rearmed Germany in violation of Versailles, annexed Austria and Czechoslovakia, launched the Second World War in 1939 and perpetrated the Holocaust, the industrialised murder of six million Jews and millions of others. The regime ended with Berlin's fall and Hitler's suicide in April 1945.",
    regions: ["central europe", "europe", "north africa", "soviet union"],
    countries: ["DEU","AUT","POL","CZE","FRA","NLD","BEL","NOR","DNK","RUS","UKR","BLR","HUN","HRV","ITA","GRC","YUG"],
    notes: [
      "1933: Enabling Act consolidates dictatorship.",
      "1935: Nuremberg Laws strip Jews of citizenship.",
      "1938: Anschluss with Austria; Kristallnacht.",
      "1939: invasion of Poland triggers WWII.",
      "1941–1945: the Holocaust; six million Jews murdered.",
      "April 1945: Hitler dies in the Berlin bunker; Germany surrenders unconditionally on 8 May.",
    ],
  },
  british_raj: {
    id: "british_raj",
    title: "British Raj",
    years: "1858 – 1947",
    blurb: "Direct British Crown rule over the Indian subcontinent.",
    summary:
      "After the 1857 rebellion the British Crown dissolved the East India Company and assumed direct rule over present-day India, Pakistan, Bangladesh and Myanmar. The Raj built railways, codified law, conducted famine policy that killed millions, drafted ~2.5M Indian soldiers in WWII, and ended with the bloody Partition of 1947, displacing 15 million people and killing up to two million.",
    regions: ["south asia"],
    countries: ["IND","PAK","BGD","MMR","LKA","NPL","GBR"],
    notes: [
      "1858: Crown takes over from the East India Company.",
      "1876: Queen Victoria proclaimed Empress of India.",
      "1885: Indian National Congress founded.",
      "1919: Jallianwala Bagh massacre at Amritsar.",
      "1943: Bengal famine, ~3 million dead.",
      "1947: Partition into India and Pakistan; ~1–2M killed, 15M displaced.",
    ],
  },
  soviet_union: {
    id: "soviet_union",
    title: "Soviet Union",
    years: "1922 – 1991",
    blurb: "The world's first and largest communist state.",
    summary:
      "Born from the 1917 Bolshevik Revolution and formally constituted in 1922, the USSR industrialised under Stalin at catastrophic human cost, lost ~27 million people defeating Nazi Germany, built the Eastern Bloc, raced the United States to the Moon, and dissolved in December 1991 into fifteen successor republics.",
    regions: ["eastern europe", "central asia", "caucasus"],
    countries: ["RUS","UKR","BLR","KAZ","UZB","TJK","KGZ","TKM","ARM","AZE","GEO","MDA","LTU","LVA","EST"],
    notes: [
      "1917: October Revolution.",
      "1922: USSR formally constituted.",
      "1932–33: Holodomor in Ukraine; ~3.5M deaths.",
      "1939: Molotov–Ribbentrop pact with Nazi Germany.",
      "1941–45: Great Patriotic War, ~27M Soviet dead.",
      "1957: Sputnik. 1961: Gagarin.",
      "1991: Dissolution into 15 republics.",
    ],
  },
  ottoman_empire: {
    id: "ottoman_empire",
    title: "Ottoman Empire",
    years: "1299 – 1922",
    blurb: "Six centuries from the Anatolian frontier to the gates of Vienna.",
    summary:
      "Founded by Osman I in 1299, the Ottoman Empire took Constantinople in 1453, reached its zenith under Suleiman the Magnificent and at its height ruled the Balkans, Anatolia, the Levant, Mesopotamia, Egypt and most of North Africa. Defeat in WWI and the Turkish War of Independence ended the empire and produced the modern Republic of Turkey.",
    regions: ["anatolia", "balkans", "levant", "north africa", "arabia"],
    countries: ["TUR","GRC","BGR","SRB","BIH","MKD","ALB","EGY","SYR","LBN","JOR","ISR","PSE","IRQ","SAU","YEM","LBY","TUN","DZA"],
    notes: [
      "1453: fall of Constantinople.",
      "1529 & 1683: failed sieges of Vienna.",
      "1915–23: Armenian Genocide; ~1.5M dead.",
      "1918: Mudros Armistice ends Ottoman participation in WWI.",
      "1922: sultanate abolished; 1923 Republic of Turkey declared.",
    ],
  },
  cold_war_era: {
    id: "cold_war_era",
    title: "Cold War Era",
    years: "1947 – 1991",
    blurb: "Bipolar world order between Washington and Moscow.",
    summary:
      "From the Truman Doctrine to the Soviet collapse, the world organised itself around two nuclear-armed superpowers. NATO and the Warsaw Pact divided Europe; proxy wars ran through Korea, Vietnam, Afghanistan, Angola, Nicaragua and the Middle East. The era ended bloodlessly in Europe with the fall of the Berlin Wall (1989) and the dissolution of the USSR (1991).",
    regions: ["global"],
    countries: ["USA","RUS","GBR","FRA","DEU","CUB","VNM","KOR","PRK","CHN","AFG","AGO","NIC","EGY","ISR"],
    notes: [
      "1947: Truman Doctrine.",
      "1949: NATO founded; USSR tests nuclear bomb.",
      "1955: Warsaw Pact founded.",
      "1962: Cuban Missile Crisis.",
      "1989: Berlin Wall falls.",
      "1991: USSR dissolved.",
    ],
  },
  decolonization: {
    id: "decolonization",
    title: "Decolonization",
    years: "1945 – 1975",
    blurb: "Dismantling of the European colonial empires.",
    summary:
      "In the three decades after WWII, the British, French, Dutch, Belgian and Portuguese empires unravelled. Over a hundred new sovereign states joined the United Nations between 1945 and 1980. The process was peaceful in some cases (Ghana 1957) and violent in others (Indochina, Algeria, Kenya, Angola).",
    regions: ["africa", "south asia", "southeast asia", "caribbean"],
    countries: ["IND","PAK","IDN","VNM","DZA","KEN","GHA","NGA","ZAF","ZWE","MOZ","AGO","COD","MYS","SGP"],
    notes: [
      "1947: Partition of India.",
      "1954: French defeat at Dien Bien Phu; 1962 Algerian independence.",
      "1957: Ghana — first sub-Saharan independence.",
      "1960: 'Year of Africa' — 17 states independent.",
      "1975: Portuguese empire collapses (Angola, Mozambique, East Timor).",
    ],
  },
  meiji_era: {
    id: "meiji_era",
    title: "Meiji Era",
    years: "1868 – 1912",
    blurb: "Japan's industrial revolution and emergence as a great power.",
    summary:
      "The Meiji Restoration ended Tokugawa rule and the policy of national seclusion. In forty-four years Japan adopted a constitution, built railways and a modern navy, defeated Qing China (1895) and Imperial Russia (1905), annexed Taiwan and Korea, and became the first non-Western great power of the industrial age.",
    regions: ["east asia"],
    countries: ["JPN","KOR","CHN","TWN","RUS"],
    notes: [
      "1868: Meiji Restoration.",
      "1889: Meiji Constitution.",
      "1894–95: First Sino-Japanese War; Taiwan annexed.",
      "1904–05: Russo-Japanese War; first Asian victory over a European power.",
      "1910: annexation of Korea.",
    ],
  },
  pax_americana: {
    id: "pax_americana",
    title: "Pax Americana",
    years: "1945 – present",
    blurb: "U.S.-led liberal international order after WWII.",
    summary:
      "After 1945 the United States built and underwrote a global order: the UN, IMF, World Bank, GATT/WTO, NATO, the dollar as reserve currency, forward bases on every continent. Challenged by the USSR until 1991, by Islamist terror after 9/11, and by China's rise since the 2000s.",
    regions: ["global"],
    countries: ["USA","GBR","FRA","DEU","JPN","KOR","ISR","CAN","AUS","SAU"],
    notes: [
      "1944: Bretton Woods system.",
      "1948: Marshall Plan.",
      "1949: NATO.",
      "1991: 'unipolar moment' after USSR collapse.",
      "2001+: Global War on Terror reshapes posture.",
    ],
  },
};

