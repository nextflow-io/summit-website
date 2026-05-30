---
name: summit-cms
description: Edit Nextflow Summit website content in Sanity and publish it to the live site. Use whenever a task involves changing CMS content for the summit-website repo — talks/events, speakers, posters, sponsors, agenda, page copy, embedding YouTube recordings — or making such changes appear on summit.nextflow.io (which needs a Netlify rebuild). Covers the no-deployed-schema write workaround and the master-branch deploy gotcha.
---

# Editing summit-website CMS content and publishing it

Content lives in Sanity (project `o2y1bt2g`, dataset `summit`), not in this repo.
See `CLAUDE.md` for the full architecture. This skill is the procedure.

## 1. Understand the content before editing

- `get_schema` returns "no schema deployed" — that's expected. Learn the shape by
  querying live data instead: e.g. `*[_type=="event" && location=="boston"]{...}`.
- Talks/posters are **`event`** docs (`location` = boston|barcelona|virtual). The
  YouTube embed is a bare 11-char video ID in the `youtube` field. Schedule lives in
  the `bostonAgenda`/`bcnAgenda`/`virtualAgenda` singletons, which **reference**
  events via `associatedEvents->`.
- Use the Sanity MCP **read** tools freely (`query_documents`, `get_document`).

## 2. Write — MCP write tools DON'T work here

`patch_document_from_json` / `create_*` fail with
`Schema for schemaId '_.schemas.default' could not be found` (schema not deployed).
Mutate with the JS client + the local Sanity CLI token instead. Write a script to
the **repo root** (so `@sanity/client` resolves) and run it:

```js
import { createClient } from '@sanity/client'
const client = createClient({
  projectId: 'o2y1bt2g', dataset: 'summit',
  apiVersion: '2021-06-07', token: process.env.SANITY_TOKEN, useCdn: false,
})
// patch PUBLISHED ids (no "drafts." prefix) to go live in the dataset immediately:
await client.patch(id).set({ field: value }).commit({ visibility: 'sync' })
```

```bash
export SANITY_TOKEN=$(npx --no-install sanity debug --secrets 2>/dev/null \
  | grep "Auth token" | sed -E "s/.*'([^']+)'.*/\1/")
node ./your-script.mjs          # run from repo root; rm the script after
```

First check there are no drafts that would clash:
`*[_type=="event" && _id in path("drafts.**")]`. Confirm the write with a read-back.

> **Proper fix (not yet done):** the schema isn't deployed because the Studio repo
> `seqeralabs/cms` only runs `sanity deploy`, never `sanity schema deploy`. Running
> `sanity schema deploy --workspace summit` there (with a CLI newer than the pinned
> `sanity@3.58`) would unlock the MCP write tools — then call them with
> `workspaceName: "summit"`. Non-destructive, but drifts unless wired into that
> repo's deploy pipeline. Until then, use the `@sanity/client` workaround.

## 3. Will it show on the live site? Maybe not without a rebuild

- Edits to **`event`, `speaker`, `poster`, `sponsor`, `blog`, `keyDate`** are baked
  in at **build time** (`src/data/*.ts` top-level `await`). They appear on the live
  **static** pages (e.g. `/2026/boston/agenda/<slug>/`) **only after a redeploy**.
- Edits surfaced through **SSR** pages (agenda *listing*, overview, faq, settings,
  menus — anything with `prerender = false`) appear **immediately**, no deploy.

So a half-applied look (listing updated, detail page stale) means: data is fine,
you just haven't rebuilt.

## 4. Deploy to production = rebuild `master`

Production is the **`master`** branch on Netlify. The Studio "Deploy" button / the
build hook in the `webhook_deploy` doc point at **`2026-mvp`** (wrong branch, and
its build errors), and the stored Netlify token is **read-only** (can't `POST
/builds`). So force the hook onto master:

```bash
# fetch secrets from Sanity (public repo — never hardcode these):
#   query *[_type=="webhook_deploy"][0]{buildHook, accessToken, siteId}
curl -sS -X POST -d '{}' "<buildHook>?trigger_branch=master&trigger_title=<msg>"
```

Poll until ready, then verify the rendered HTML (not just Sanity):

```bash
# state: GET https://api.netlify.com/api/v1/deploys/<deployId>  (Bearer <accessToken>)
curl -s "https://summit.nextflow.io/<path>" | grep "<expected value>"
```

Static detail pages render content inside a React island, so the value appears
serialized in the page HTML once the rebuild lands.

## 5. Tell the user

Report: what changed in Sanity, whether a rebuild was needed, the deploy state, and
the live-page verification. Flag the `2026-mvp` build-hook misconfiguration if it's
relevant — it's an ongoing footgun until someone repoints the hook to `master`.

## Previewing unpublished drafts (no deploy)

To view draft content before publishing, hit
`/preview?secret=<SANITY_PREVIEW_SECRET>&path=/some/page`. It sets the
`sanity-draft-mode` cookie (`src/middleware.ts`) and rewrites to the path, so SSR
fetchers switch to `getDraftClient()` (`previewDrafts` perspective). Needs env
`SANITY_READ_TOKEN` (Viewer token) + `SANITY_PREVIEW_SECRET` (must match the Studio).
Only works on **SSR** pages — static detail pages can't preview drafts this way.
