#!/usr/bin/env node
/**
 * Acceptance checks on dist/ after `npm run build:prerender` (brand sites, EU and US share this file).
 * Mirrors the satellite checker: one title/description/canonical per page, one H1, hreflang cluster with
 * self and x-default, one FAQPage at most, Product+Offer only on the shop and never a Review, BreadcrumbList
 * below the home, JSON-LD that parses, no forbidden figures or dashes in copy, JSON-LD or llms.txt, no
 * third-party fonts or flags, sitemap in sync with the built routes. Run: `node scripts/check-html.mjs`.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const prerender = readFileSync("scripts/prerender.mjs", "utf8");
const BASE_URL = (prerender.match(/const BASE_URL = '([^']+)'/) || [])[1];
if (!BASE_URL) { console.error("check-html: BASE_URL not found in scripts/prerender.mjs"); process.exit(1); }

const checks = [];
const warnings = [];
const count = (s, re) => (s.match(re) || []).length;
const expect = (name, ok) => checks.push({ name, ok });
const warn = (name, ok) => { if (!ok) warnings.push(name); };

// Retired or unsourced claims that must never come back. Canon figures (34, 82, 64, 8, 47, 83, 70, 84, 89, 86.7, 87 %)
// are allowed; "100 %" only ever appeared as a pregnancy claim, so it is banned in copy (CSS "width:100%" is stripped first).
const FORBIDDEN = [
  [/\b72\s?%/, "72 %"],
  [/\b100\s?%/, "100 %"],
  [/\b60\s?%/, "60 %"],
  [/\b98\s?%/, "98 %"],
  [/70\s?(?:-|to|–)\s?80\s?%/, "70 to 80 %"],
  [/50\s?(?:-|to|–)\s?75\s?%/, "50 to 75 %"],
  [/£\s?916|£\s?531/, "GBP price"],
  [/10[.,]000\s?(?:x|times)\s?(?:MHK|MIC|the MIC)/i, "10,000 x MIC"],
  [/immune system can find/i, "immune-system clearing claim"],
  [/treatment cycle/i, "treatment cycle (it is an activation cycle)"],
  [/klinisch bew/i, "klinisch bewaehrt"],
  [/\b(?:one in four|1 in 5|one in five) (?:brood)?mares/i, "unsourced prevalence"],
  [/"@type":\s?"Review"/, "Review object"],
  [/10\.1093\/jac\/|10\.1128\/AAC\.|10\.1186\/s12917-018/, "wrong DOI"],
];
const DASH = /[–—]/;

const strip = (s) => s
  .replace(/<script[^>]*>[\s\S]*?<\/script>/g, " ")
  .replace(/<style[^>]*>[\s\S]*?<\/style>/g, " ")
  .replace(/<noscript>[\s\S]*?<\/noscript>/g, " ");
const text = (s) => strip(s).replace(/<[^>]+>/g, " ");
const ldBlocks = (s) => [...s.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const forbiddenIn = (s) => FORBIDDEN.filter(([re]) => re.test(s)).map(([, label]) => label);

function htmlFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) htmlFiles(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

const REQUIRED = ["index.html", "404.html", "what-is-bactivate/index.html", "when-to-use/index.html", "how-to-use/index.html",
  "studies-effect/index.html", "shop/index.html", "about-us/index.html", "contact/index.html", "blog/index.html",
  "swab-culture-vs-bactivate/index.html", "glossary/index.html", "is-my-mare-a-candidate/index.html", "affiliate-program/index.html",
  "privacy-policy/index.html", "terms-and-conditions/index.html", "llms.txt", "llms-full.txt", "sitemap.xml", "robots.txt"];
for (const f of REQUIRED) expect(`${f} exists`, existsSync(`dist/${f}`));

const routePaths = [];
for (const p of htmlFiles("dist")) {
  const f = p.replace(/\\/g, "/").replace(/^dist\//, "");
  const s = readFileSync(p, "utf8");
  const is404 = f === "404.html";
  const isHome = f === "index.html";
  const isRoute = f.endsWith("/index.html") || isHome;          // prerendered route or static folder page
  const route = isHome ? "/" : isRoute ? "/" + f.replace(/\/index\.html$/, "") : "/" + f.replace(/\.html$/, "");
  if (isRoute && !is404) routePaths.push(route);
  const body = text(s);
  const ld = ldBlocks(s);
  const ldAll = ld.join("\n");

  expect(`${f} has one title`, count(s, /<title>/g) === 1);
  const title = (s.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  warn(`${f} title is ${title.length} chars (over 60)`, title.length <= 60);
  if (!is404) {
    expect(`${f} has one description`, count(s, /<meta name="description"/g) === 1);
    const desc = (s.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
    expect(`${f} description length ${desc.length} is 50 to 158`, desc.length >= 50 && desc.length <= 158);
    expect(`${f} has one canonical`, count(s, /rel="canonical"/g) === 1);
    const canonical = (s.match(/rel="canonical" href="([^"]+)"/) || [])[1] || "";
    expect(`${f} canonical is ${BASE_URL}${route === "/" ? "/" : route}`, canonical === `${BASE_URL}${route === "/" ? "/" : route}`);
  }
  expect(`${f} has exactly one H1`, count(body, /<h1[\s>]/g) === 1 || count(strip(s), /<h1[\s>]/g) === 1);
  // hreflang: every route page carries the reciprocal cluster with itself in it (8 with ja and the four satellites, 4 for pages that exist only on the brand sites).
  const hl = count(s, /<link[^>]*hreflang=/g);
  if (isRoute && !is404) {
    expect(`${f} has the hreflang cluster (${hl})`, hl >= 4 && hl <= 8);  // 4 when the page has no satellite equivalent
    expect(`${f} hreflang includes itself`, new RegExp(`hreflang="en-(GB|US)" href="${BASE_URL.replace(/\./g, "\\.")}${route === "/" ? "/" : route}"`).test(s));
    expect(`${f} hreflang has x-default`, s.includes('hreflang="x-default"'));
  } else if (hl > 0) {
    expect(`${f} hreflang includes itself`, s.includes(`href="${BASE_URL}${route}"`) || s.includes(`href="${BASE_URL}${route}.html"`));
  }
  // Structured data
  let parsed = 0;
  for (const b of ld) { try { JSON.parse(b); parsed++; } catch { /* counted below */ } }
  expect(`${f} JSON-LD parses (${parsed}/${ld.length})`, parsed === ld.length);
  expect(`${f} has at most one FAQPage`, count(ldAll, /"@type":\s?"FAQPage"/g) <= 1);
  expect(`${f} has no Review object`, !/"@type":\s?"Review"/.test(ldAll));
  const products = count(ldAll, /"@type":\s?"Product"/g);
  if (f === "shop/index.html") {
    expect(`${f} has the Product node with the Offer`, products === 1 && /"@type":\s?"Offer"/.test(ldAll) && /"price":\s?229/.test(ldAll) && /"priceCurrency":\s?"(EUR|USD)"/.test(ldAll));
  } else {
    expect(`${f} has no Product node`, products === 0);
  }
  if (isRoute && !is404 && !isHome) expect(`${f} has BreadcrumbList`, /"@type":\s?"BreadcrumbList"/.test(ldAll));
  // Copy rules
  const fb = forbiddenIn(body);
  expect(`${f} has no forbidden figures in copy${fb.length ? ` (${fb.join(", ")})` : ""}`, fb.length === 0);
  const fl = forbiddenIn(ldAll);
  expect(`${f} has no forbidden figures in JSON-LD${fl.length ? ` (${fl.join(", ")})` : ""}`, fl.length === 0);
  expect(`${f} has no em or en dash in copy`, !DASH.test(body));
  expect(`${f} has no em or en dash in JSON-LD`, !DASH.test(ldAll));
  expect(`${f} has no duplicated body in noscript`, ![...s.matchAll(/<noscript>([\s\S]*?)<\/noscript>/g)].some((m) => /<h1|<main/.test(m[1])));
  expect(`${f} loads no third-party fonts or flags`, !/fonts\.(googleapis|gstatic)\.com|flagcdn\.com/.test(s));
  expect(`${f} has no stale-asset reference`, [...s.matchAll(/\/assets\/([A-Za-z0-9_.-]+)/g)].every((m) => existsSync(`dist/assets/${m[1]}`)));
}

// Home: the cluster is complete and the Organization graph is there.
const idx = readFileSync("dist/index.html", "utf8");
expect("homepage has the full 8-link hreflang cluster", count(idx, /<link[^>]*hreflang=/g) === 8);
expect("homepage has the Organization node", /"@type":\s?"Organization"/.test(ldBlocks(idx).join("\n")));
expect("homepage has both founders as Person", count(ldBlocks(idx).join("\n"), /"@type":\s?"Person"/g) >= 2);

// llms.txt and sitemap
const llms = readFileSync("dist/llms.txt", "utf8");
const lf = forbiddenIn(llms);
expect(`llms.txt has no forbidden figures${lf.length ? ` (${lf.join(", ")})` : ""}`, lf.length === 0);
expect("llms.txt states the swab figure", /34\s?%/.test(llms));
expect("llms.txt has no em or en dash", !DASH.test(llms));
const sm = readFileSync("dist/sitemap.xml", "utf8");
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
for (const r of routePaths) {
  const u = `${BASE_URL}${r === "/" ? "/" : r}`;
  expect(`sitemap lists ${r}`, smUrls.includes(u) || smUrls.includes(u + "/"));
}
for (const u of smUrls) {
  if (!u.startsWith(BASE_URL)) { expect(`sitemap URL on this host: ${u}`, false); continue; }
  const r = u.slice(BASE_URL.length).replace(/\/$/, "");
  const ok = r === "" || existsSync(`dist${r}/index.html`) || existsSync(`dist${r}.html`) || existsSync(`dist${r}`);
  expect(`sitemap URL exists in dist: ${u}`, ok);
}

let failed = 0;
for (const c of checks) {
  if (!c.ok) { console.log(`FAIL ${c.name}`); failed++; }
}
for (const w of warnings) console.log(`warn ${w}`);
console.log(`check-html: ${checks.length} checks, ${failed} failed, ${warnings.length} warnings`);
if (failed) process.exit(1);
console.log("check-html: passed");
