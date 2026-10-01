# wandery

a living atlas — an immersive, interactive cartographic exploration platform.

wandery is not a travel app. it is an atmospheric, archival atlas for exploring geography, history, cultures, alliances and identity through interactive cartography: pastel maps, historical borders, disputed regions, trade routes, wars, and country archives.

## stack

- react 18 + vite 5 + typescript
- tailwind css + shadcn/ui
- leaflet with carto voyager tiles
- geojson country & subdivision boundaries

## development

```sh
bun install
bun run dev
```

## structure

- `src/wandery/` — atlas components, data, and pages
- `src/wandery/data/` — country archives, history (wars, trades, attacks, events), identity tags
- routes: `/`, `/world`, `/europe`, `/america`, `/asia`, `/africa`, `/oceania`, `/mena`, `/country/*`, `/conflicts`, `/conflict/:id`, `/history/*`, `/archive/:iso`, `/about`, `/philosophy`, `/features`, `/roadmap`
