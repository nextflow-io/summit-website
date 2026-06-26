# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Astro site for the Nextflow Summit (Boston, Barcelona, Virtual). The frontend lives
here; **all content lives in Sanity**, and the site is hosted on **Netlify**.

> **This repo is PUBLIC.** Never commit tokens, build-hook URLs, or other secrets.

## Commands

`.nvmrc` pins Node. From `package.json`: `npm run dev` / `npm start` (Astro dev
server), `npm run build` (production build), `npm run serve` (preview the build).
There is **no test or lint script** — don't invent one.

## Architecture

- **Astro 4**, `output: "hybrid"` (`astro.config.mjs`) + React islands + Tailwind, on
  the `@astrojs/netlify` adapter (non-static pages run as Netlify SSR functions).
- **Render mode per page:** a page is **SSR** if it has `export const prerender =
  false`, otherwise **static** (built once at deploy). Notably the talk detail pages
  `2026/<location>/agenda/[slug].astro` are static via `getStaticPaths()`.
- **Content = Sanity**, project `o2y1bt2g`, dataset **`summit`** (the `seqera`
  dataset in the same project powers the *main* nextflow.io site — not this one).
  Read through `sanity:client` (configured in `astro.config.mjs`); image URLs via
  `src/data/sanity-image.js`; draft preview via `src/data/draftClient.ts`.
- **Data layer (`src/data/*`) — the key thing to internalise:** modules that fetch
  with a **top-level `await`** (`events`, `speakers`, `posters`, `sponsors`, `blogs`,
  `keyDates`) resolve **once at build time** and are baked into the static output.
  Modules that export **async functions** (`agenda`, `fetchers`, `settings`, `menus`)
  fetch **per request** on SSR pages. So a CMS edit to build-time data only appears
  after a redeploy, while SSR pages reflect it immediately.
- **Content model** is location-partitioned with type prefixes `boston*` / `bcn*`
  (Barcelona) / `virtual*`; talks/posters are `event` docs (`location` field), and the
  schedule lives in `bostonAgenda`/`bcnAgenda`/`virtualAgenda` singletons that
  reference events.

## Editing CMS content or publishing to the live site → use the `summit-cms` skill

Most work here is frontend. **If a task instead involves changing Sanity content**
(talks, speakers, agenda, page copy, embedding recordings) **or making content changes
appear on summit.nextflow.io, use the `summit-cms` skill.** It covers the two traps
that otherwise waste time, so don't improvise around them:

- Editing build-time data needs a **production rebuild of `master`**, and the Sanity
  Studio "Deploy" button is mis-wired to a broken `2026-mvp` branch.
- Sanity's MCP **write** tools fail here (the Studio schema isn't deployed to the API),
  so writes go through `@sanity/client` + a CLI token.
