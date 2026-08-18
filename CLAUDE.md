# CLAUDE.md — bActivate.eu-website-copy (branch: bactivate.eu → bactivate.eu)

EU/global-market site for bActivate (English). **Each branch of this repo is a complete,
independently localized site — never merge content between branches without review.**
This branch is also the fork source for `bactivate.jp`.

## Repo & branches

| Branch | Domain | Language |
|--------|--------|----------|
| `vite-conversion` | bactivate.us | English (US) |
| `bactivate.eu` | bactivate.eu | **English EU (this branch)** |
| `bactivate.jp` | bactivate.jp | Japanese (forked from this branch) |

Stack: Vite 6 + React 18 + TypeScript, React Router 7. `@` aliases `./src`. Dev: `npm run dev`
(port 5173). Build: `npm run build`. Never commit `dist/`.

## Deployment

Deployed from the server cp08.nordicway.dk (`ssh -p 33 barrenma@cp08.nordicway.dk`):

```bash
~/web/manage-sites.sh update bactivate.eu   # pull + build + deploy
```

Worktree `~/web/sites/bactivate.eu/` → live docroot `~/web/bactivate.eu/`. Full server docs:
`~/CLAUDE.md` on the server.

## Prerendering is ACTIVE on this branch

`npm run build:prerender` (`vite build` + `scripts/prerender.mjs`) is what the deploy runs.
`prerender.mjs` here is EU-localized: `BASE_URL = 'https://bactivate.eu'`, peer hreflang →
bactivate.us. It emits per-route static HTML with page titles/descriptions, canonical/og URLs,
and JSON-LD (BreadcrumbList, BlogPosting, MedicalWebPage with `reviewedBy`, FAQPage). **Keep
it working** — page components and `prerender.mjs` (PAGE_META, ROUTE_SCHEMAS, FAQ parsing
from FAQSection.tsx) must stay in sync.

## Branch-specific notes

- Shop: Ecwid store **130367502** (shared with .us/.jp), €229/vial, client-side widget in
  `src/pages/Shop.tsx`.
- `/glossary` and `/affiliate-program` are **prebuilt static HTML** in `public/` (not React
  routes) — they carry their own head/meta/JSON-LD and a footer link-injection script. Edit
  them directly in `public/`; the SPA never handles those paths as long as the folders exist.
- `/consultation-confirmed` route exists on this branch (HubSpot consultation flow).
- AEO surface: `public/llms.txt` + `public/okf/*.md` (Open Knowledge Format). In the EU/UK the
  product is positioned solely as a diagnostic tool (see llms.txt) — keep claims consistent.
- Legal pages are Danish-law / GDPR (unlike .jp, which is Japanese-law / APPI by design —
  do not "harmonise" them in either direction).

## Porting content between branches

Diff the **anchor-tag count** in changed files, not just prose — a localization pass once
dropped all 34 hyperlinks in `src/lib/blogData.ts` unnoticed. Citations point at PubMed/DOI
(DOIs preferred: ScienceDirect 403s to crawlers).

---
*Created 18 August 2026. Contact: martin@barren-mare.com*
