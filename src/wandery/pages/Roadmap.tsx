import Shell, { Display, Eyebrow, Lead } from "./Shell";

const SECTIONS: { heading: string; items: { name: string; note: string }[] }[] = [
  {
    heading: "in development",
    items: [
      { name: "linguistic layer · v1", note: "francophone, arabic, slavic, sino-tibetan, dravidian — as gentle overlays." },
      { name: "country card expansions", note: "neighbours, languages, capitals, brief regional notes per country." },
      { name: "timeline reconstructions", note: "european borders for 1914, 1945, 1991 as switchable atlas states." },
    ],
  },
  {
    heading: "archival expansion",
    items: [
      { name: "ottoman extent atlas", note: "shaded territorial reach across the long 19th century." },
      { name: "cold-war europe", note: "iron curtain, warsaw pact, comecon — as drifting watercolour blocs." },
      { name: "hanseatic league", note: "trading cities reconstructed as a constellation, not a border." },
      { name: "silk road corridors", note: "movement, not territory." },
      { name: "colonial africa, then and now", note: "1885 berlin partition compared to present-day sovereignty." },
    ],
  },
  {
    heading: "future cartographic systems",
    items: [
      { name: "digital passport", note: "a personal atlas booklet documenting explored regions, timelines and concepts. not a travel passport." },
      { name: "postal stamp collections", note: "conceptual stamps for schengen, the silk road, former yugoslavia, the baltics, cold-war europe, the alps, the hanseatic league." },
      { name: "boarding pass transitions", note: "fictional boarding passes across regions and eras — western europe → eastern bloc, 1987." },
      { name: "atlas collections", note: "user-curated sets: the post-soviet archive, historical europe, maritime nations, former empires." },
      { name: "compare mode", note: "split-screen timelines — europe 1914 vs 2025, nato over time, berlin before and after reunification." },
      { name: "cultural pathways", note: "migration, trade, linguistic spread, historical movement, cultural diffusion." },
    ],
  },
  {
    heading: "experimental atlas tools",
    items: [
      { name: "community archives", note: "small, optional, curated essays and exploration trails: understanding the balkans, mapping the cold war, railways of europe." },
      { name: "paper-map overlays", note: "scans of historical atlases as a translucent layer beneath the live tiles." },
      { name: "audio rooms", note: "ambient regional soundscapes — wind across the steppe, a port at dawn." },
    ],
  },
];

export default function Roadmap() {
  return (
    <Shell active="roadmap">
      <Eyebrow>roadmap · catalogue of forthcoming systems</Eyebrow>
      <Display>future atlas expansions.</Display>
      <Lead>
        a quiet catalogue, not a product roadmap. each entry is something we are
        slowly drafting into the atlas, when it is ready and not before.
      </Lead>

      <div className="space-y-14">
        {SECTIONS.map(s => (
          <section key={s.heading}>
            <div className="flex items-baseline gap-3 mb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{s.heading}</div>
              <div className="h-px flex-1 bg-border/60" />
            </div>
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {s.items.map(it => (
                <li key={it.name} className="py-4 grid md:grid-cols-[220px,1fr] gap-3 md:gap-8">
                  <div className="font-serif text-lg text-foreground">{it.name}</div>
                  <div className="text-[14px] text-foreground/75 leading-relaxed">{it.note}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Shell>
  );
}