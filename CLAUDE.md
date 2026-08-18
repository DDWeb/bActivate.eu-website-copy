# CLAUDE.md — bActivate.eu-website-copy (branch: vite-conversion → bactivate.us)

US-market site for bActivate (English). **Each branch of this repo is a complete,
independently localized site — never merge content between branches without review.**

## Repo & branches

| Branch | Domain | Language |
|--------|--------|----------|
| `vite-conversion` | bactivate.us | **English US (this branch)** |
| `bactivate.eu` | bactivate.eu | English (EU) |
| `bactivate.jp` | bactivate.jp | Japanese |

Stack: Vite 6 + React 18 + TypeScript, React Router 7. `@` aliases `./src`. Dev: `npm run dev`
(port 5173). Build: `npm run build`. Never commit `dist/`.

## Deployment

Deployed from the server cp08.nordicway.dk (`ssh -p 33 barrenma@cp08.nordicway.dk`):

```bash
~/web/manage-sites.sh update bactivate.us   # pull + build + deploy
```

Worktree `~/web/sites/bactivate.us/` → live docroot `~/web/bactivate.us/`. Full server docs:
`~/CLAUDE.md` on the server.

## Prerendering is ACTIVE on this branch

`npm run build:prerender` (`vite build` + `scripts/prerender.mjs`) is what the deploy runs.
`prerender.mjs` on this branch is US-localized: `BASE_URL = 'https://bactivate.us'`, peer
hreflang → bactivate.eu. It emits per-route static HTML with page titles/descriptions,
canonical/og URLs, and JSON-LD (BreadcrumbList, BlogPosting, MedicalWebPage with
`reviewedBy`, FAQPage). **Keep it working** — page components and `prerender.mjs`
(PAGE_META, ROUTE_SCHEMAS, FAQ parsing from FAQSection.tsx) must stay in sync.

## Branch-specific notes

- Shop: Ecwid store **130367502** (shared with .eu/.jp), client-side widget in
  `src/pages/Shop.tsx`; prices display in USD via Ecwid.
- No `/glossary` or `/affiliate-program` pages on this branch (neither static nor routes) —
  .eu serves them as static HTML in `public/`, .jp as React routes. No `/consultation-confirmed`
  either (that route is .eu-only).
- AEO surface: `public/llms.txt` + `public/okf/*.md` (Open Knowledge Format). llms.txt on this
  branch carries the US regulatory positioning — keep it consistent with page copy when editing.

## Porting content between branches

Diff the **anchor-tag count** in changed files, not just prose — a localization pass once
dropped all 34 hyperlinks in `src/lib/blogData.ts` unnoticed. Citations point at PubMed/DOI
(DOIs preferred: ScienceDirect 403s to crawlers).

---
*Created 18 August 2026. Contact: martin@barren-mare.com*
