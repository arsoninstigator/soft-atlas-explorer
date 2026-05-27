export interface RegionConfig {
  key: string;
  label: string;
  center: [number, number];
  zoom: number;
  blurb: string;
}

export const REGIONS: Record<string, RegionConfig> = {
  world:   { key:"world",   label:"world",   center:[22, 6],     zoom: 2, blurb: "the whole atlas, drawn quietly" },
  europe:  { key:"europe",  label:"europe",  center:[52, 14],    zoom: 4, blurb: "a peninsula folded into many republics" },
  america: { key:"america", label:"america", center:[8, -72],    zoom: 3, blurb: "two continents read as one long shoreline" },
  canada:  { key:"canada",  label:"canada",  center:[60, -100],  zoom: 3, blurb: "a confederation across boreal weather" },
  asia:    { key:"asia",    label:"asia",    center:[34, 95],    zoom: 3, blurb: "the largest landmass and its many interiors" },
  africa:  { key:"africa",  label:"africa",  center:[2, 20],     zoom: 3, blurb: "fifty-four sovereignties along old caravan lines" },
  oceania: { key:"oceania", label:"oceania", center:[-22, 145],  zoom: 3, blurb: "an archipelago the size of an ocean" },
};

export const REGION_ORDER = ["world","europe","america","canada","asia","africa","oceania"];