# CLAUDE.md — bActivate.eu-website-copy (branch: bactivate.jp → bactivate.jp)

Japanese-market site for bActivate. **This branch is manually localized — never auto-translate,
never merge content from other branches without review.**

## Repo & branches

One repo, three full sites. Each branch is a complete, independently localized site:

| Branch | Domain | Language |
|--------|--------|----------|
| `vite-conversion` | bactivate.us | English (US) |
| `bactivate.eu` | bactivate.eu | English (EU) |
| `bactivate.jp` | bactivate.jp | **Japanese (this branch)** |

Stack: Vite 6 + React 18 + TypeScript, React Router 7. `@` aliases `./src`. Dev: `npm run dev`
(port 5173). Build: `npm run build`. Never commit `dist/`.

## Deployment

Deployed from the server cp08.nordicway.dk (`ssh -p 33 barrenma@cp08.nordicway.dk`):

```bash
~/web/manage-sites.sh update bactivate.jp   # pull + build + deploy
```

Worktree `~/web/sites/bactivate.jp/` → live docroot `~/web/bactivate.jp/`. Full server docs:
`~/CLAUDE.md` on the server (section "bactivate.jp — site-specific notes").

## ⚠️ Prerender is deliberately disabled on this branch

`package.json` names the script **`build:prerender:ja-todo`** so the deploy runs plain
`vite build`. `scripts/prerender.mjs` is hardcoded to bactivate.eu (BASE_URL, English
PAGE_META, EUR price). Running it here would put `canonical → bactivate.eu` on every
Japanese page. Only rename the script back after fully localizing `prerender.mjs`.

## Content rules (owner-locked, Martin 2026-08-18)

- Register: polite です・ます throughout.
- Price: **¥41,999 (税別)** — never show EUR. Ecwid store 130367502 (shared with .eu/.us).
- Shipping: global fulfilment — nearest of Denmark / US / Australia. Never "from Denmark
  across Europe". Distributor lists → 世界各国の獣医用販売店.
- Terminology (never "improve"): problem mare = **不受胎牝馬** · high-risk mare = **高リスク牝馬**
  · persister tolerance = **薬剤寛容** (never 薬剤耐性 = genetic resistance) · **腺疫** only for
  *S. equi* subsp. *equi* (strangles), never for *zooepidemicus* · 空胎 (status) ≠ 不受胎 (outcome).
- No language switcher. Danish podcast series "Vejen til Føl" is removed on this branch.
- Full termbase + source translations: Martin's PC, `Documents/bactivate-jp/`
  (`glossary/termbase.md`, `build/*.ja.md`).

## Structure that differs from .eu/.us

- `/tokushoho` — 特定商取引法に基づく表記 (legally required; footer-linked). JP only.
- `/glossary` and `/affiliate-program` are **React routes** here. On .eu/.us they are static
  English HTML in `public/`. If those static folders reappear in `public/` on this branch,
  they shadow the SPA routes and serve English — delete them (also from the live docroot;
  deploy copies but never deletes).
- Legal pages are Japanese-law, not translations: privacy = APPI (個人情報保護法) with a
  外部送信規律 disclosure table; terms = Japanese law, consumer's domicile court, liability
  cap ¥1,700,000 disapplied on 故意・重過失. Draft status: pending JP legal review.

## Porting content between branches

Diff the **anchor-tag count** in changed files, not just prose — the original localization
silently dropped all 34 hyperlinks in `src/lib/blogData.ts` (citations + internal links).
Citations should point at PubMed/DOI (DOIs preferred: ScienceDirect 403s to crawlers).

---
*Created 18 August 2026. Contact: martin@barren-mare.com*
