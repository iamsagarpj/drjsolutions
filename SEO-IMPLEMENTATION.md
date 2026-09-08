# SEO implementation — DRJ Solutions

This document records the audit findings, what was implemented, and the work that still needs a human (Google Search Console, Google Business Profile, real project photos). It does not promise rankings.

Canonical site: `https://drjsolutions.in/`

---

## 1. Current SEO problems (audit)

Inspected: Vite + React 19 SPA (`react-router-dom`), `index.html`, `src/config/site.ts`, `src/components/layout/Seo.tsx`, `src/lib/schema.ts`, `src/content/en.ts` / `mr.ts`, pages, `public/robots.txt`, `public/sitemap.xml`, `netlify.toml`, `vercel.json`, `public/_redirects`, images, forms, and the live origin `https://drjsolutions.in`.

### Strengths already in the project

- Honest copy: no fake reviews, awards, or “our projects” stock photos.
- Real NAP in `src/config/site.ts` (Satara office, phone, email).
- Unique per-page titles/descriptions existed (too generic, but not duplicated blindly).
- FAQ JSON-LD on `/faq`.
- Responsive layout, skip link, form labels, `tel:` and WhatsApp CTAs.
- `robots.txt` allowed crawling and pointed at a sitemap.
- Calculator assumptions are labelled indicative.

### Problems

1. **JavaScript-only metadata.** Titles, canonicals, and most body copy were injected after hydration. Crawlers often saw the default `index.html` title (`DRJ Solutions | Rooftop Solar`) on inner URLs.
2. **SPA 200 fallback.** `/* → /index.html 200` made unknown URLs look indexable.
3. **Canonical host mismatch.** Code defaulted to `www.drjsolutions.in`; the preferred host is `https://drjsolutions.in`.
4. **No H1 on inner pages.** `PageHero` rendered the page title as `h2`.
5. **Homepage under-used Satara** in the H1 and title despite a Satara office.
6. **Thin service architecture.** Only residential, commercial, subsidy. No on-grid / hybrid / industrial / cost / maintenance URLs with unique jobs.
7. **Invalid schema type** `EnergyCompany` (not a schema.org type). `areaServed` was only `"India"`. No `WebSite`, `Service`, or `BreadcrumbList`. Duplicate `LocalBusiness` on Home and Contact.
8. **OG image is SVG** (weak on some social crawlers). No `og:site_name` / `twitter:image` originally.
9. **Projects are illustrative stock** (correctly labelled) — weak E-E-A-T until real photos exist.
10. **Subsidy page leaked a source-code path** (`src/config/calculator.ts`).
11. **Bilingual Marathi is client-only** on the same URL — no separate `/mr` URLs, so no hreflang pair.
12. **Sitemap on the live site returned 500** when fetched during the audit (confirm after deploy).
13. **Footer used `h2` for column labels**, crowding the heading outline.
14. **Noindex missing on 404.**

---

## 2. Changes made

- Canonical origin set to `https://drjsolutions.in`.
- Unique titles and meta descriptions for every indexable page (English source: `src/config/seoMeta.ts`; Marathi in `src/content/mr.ts`).
- Homepage copy and H1 aligned to a Satara solar installer without keyword stuffing.
- Inner pages now have a single H1 via `PageHero`.
- New unique service pages and three cornerstone guides (see architecture below).
- Valid JSON-LD: `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage` where the page has visible FAQs.
- Build-time prerender of titles/canonicals/OG tags plus `sitemap.xml` / `robots.txt` in `dist`.
- www → non-www 301 in `netlify.toml`. Unknown URLs → `404.html` with `noindex`.
- Internal links: homepage service list, related-link blocks, nav, footer.
- Image srcset max width reduced (dropped 2560px). Alt text remains descriptive, not stuffed.
- Subsidy amounts copy no longer exposes internal file paths.

---

## 3. Page architecture

| URL | Intent | Notes |
| --- | --- | --- |
| `/` | Commercial + local: solar company / installation in Satara | Primary money page |
| `/residential-solar` | Home rooftop installation | |
| `/commercial-solar` | Shops, offices, clinics, schools | |
| `/industrial-solar` | Workshops, warehouses, industrial roofs | Distinct from commercial |
| `/on-grid-solar` | Grid-tied systems | |
| `/off-grid-solar` | Battery / no-export sites | |
| `/hybrid-solar` | Grid + backup | |
| `/solar-maintenance` | Aftercare | |
| `/solar-system-cost` | Cost factors + calculator defaults | No fake ₹/W rate card |
| `/solar-subsidy` | Maharashtra / PM Surya Ghar guidance | Official links only |
| `/how-it-works` | Process | |
| `/solar-savings-calculator` | Tool | |
| `/guides` | Hub | |
| `/guides/rooftop-solar-satara` | Local informational | |
| `/guides/on-grid-vs-off-grid-vs-hybrid` | Comparison | |
| `/guides/solar-system-size` | Sizing logic | |
| `/about` `/projects` `/faq` `/contact` | Trust / conversion | |
| `/privacy-policy` `/terms` | Legal | |

**Not created (on purpose):** separate city doorway pages (Karad, Wai, …); `/solar-panel-installation-satara` (would cannibalise the homepage); `/solar-subidy-maharashtra` (typo duplicate of `/solar-subsidy`); 20 generic blog posts.

Nearby towns are mentioned once in service-area copy as places we can survey from the Satara office — not as fake branch pages.

---

## 4. Target keyword / topic map

| Topic | Intent | Target URL | Title direction | H1 direction |
| --- | --- | --- | --- | --- |
| Solar company / installation Satara | Commercial | `/` | Solar Company in Satara, Maharashtra \| DRJ Solutions | Rooftop solar for homes and businesses in Satara |
| Residential rooftop Satara | Commercial | `/residential-solar` | Residential Solar Installation in Satara | Rooftop solar for homes |
| Commercial solar Satara | Commercial | `/commercial-solar` | Commercial Solar Solutions in Satara | Solar for shops, offices and businesses |
| Industrial solar Maharashtra | Commercial | `/industrial-solar` | Industrial Solar Solutions in Maharashtra | Solar for workshops, warehouses and industrial roofs |
| On-grid solar Satara | Commercial + info | `/on-grid-solar` | On-Grid Solar Systems in Satara | On-grid rooftop solar… |
| Off-grid solar | Commercial + info | `/off-grid-solar` | Off-Grid Solar Systems in Satara | Off-grid solar with battery storage |
| Hybrid solar Satara | Commercial + info | `/hybrid-solar` | Hybrid Solar Systems in Satara | Hybrid solar: grid connection with battery backup |
| Solar cost Satara | Commercial + info | `/solar-system-cost` | Solar System Cost in Satara | What a solar system costs in Satara… |
| Solar subsidy Maharashtra / PM Surya Ghar | Info + assist | `/solar-subsidy` | Solar Subsidy Guide for Maharashtra | Understand rooftop solar subsidy… |
| Installation process | Info | `/how-it-works` | Solar Installation Process in Satara | Six clear steps… |
| Rooftop solar Satara guide | Info | `/guides/rooftop-solar-satara` | Rooftop Solar in Satara: A Practical Guide | Same |
| On-grid vs off-grid vs hybrid | Info | `/guides/on-grid-vs-off-grid-vs-hybrid` | Comparison title | Same |
| System size / how many panels | Info | `/guides/solar-system-size` | How to Size a Solar System for Your Home | Same |
| Maintenance | Commercial + info | `/solar-maintenance` | Solar Maintenance and Support in Satara | Solar maintenance and after-installation support |

Supporting internal links: related-link blocks on each service/guide; homepage “more services”; Solutions nav; footer.

---

## 5. Technical SEO changes

- `src/config/site.ts` — `siteUrl()` fallback `https://drjsolutions.in`; `areaServed` Satara / district / Maharashtra / India.
- `src/components/layout/Seo.tsx` — title, description, robots, canonical, Open Graph, Twitter, `og:site_name`.
- `scripts/prerender.mjs` — copies `dist/index.html` to each route folder with unique head tags; writes `dist/sitemap.xml`, `dist/robots.txt`, `dist/404.html`.
- `netlify.toml` / `public/_redirects` — www 301; missing routes 404 (prerendered files take priority).
- Trailing slash: homepage canonical `https://drjsolutions.in/`; other URLs unslashed to match `ROUTES`.
- 404: `noindex, nofollow`; HTTP 404 via `404.html`.

---

## 6. Structured data implemented

| Type | Where | Notes |
| --- | --- | --- |
| `LocalBusiness` | Homepage | Name, URL, phone, email, postal address, logo, image, areaServed, hasMap, makesOffer. **No** openingHours, **no** sameAs, **no** geo unless env coords are set. |
| `WebSite` | Homepage | Linked to the business `@id`. No SearchAction (no site search). |
| `Service` | Service pages | Visible service name + URL + provider. |
| `BreadcrumbList` | Inner pages | Matches visible breadcrumbs. |
| `FAQPage` | `/faq` and service/guide FAQs | Only questions shown on that page. |

Removed invalid `EnergyCompany`.

Validate after deploy with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/).

---

## 7. Sitemap location

- Source in repo: `public/sitemap.xml`
- Production: `https://drjsolutions.in/sitemap.xml` (regenerated at build into `dist/sitemap.xml`)

Contains only canonical indexable URLs listed in `SEO_PAGES`.

---

## 8. Robots.txt location

- `public/robots.txt` → `https://drjsolutions.in/robots.txt`
- Allows `/`, disallows `/404.html`, points at the sitemap.
- Does not block CSS, JS, or images.

---

## 9. Canonical strategy

- Preferred host: **https://drjsolutions.in** (no www).
- Each indexable page: `<link rel="canonical">` to its HTTPS path.
- Query strings are not used for content; do not create parameter URLs.
- Language is a client toggle on the same URL (not a second canonical).

After DNS: in Netlify Domain management, set `drjsolutions.in` as primary and redirect `www`.

Also set `VITE_SITE_URL=https://drjsolutions.in` on the host and **redeploy** so inlined canonicals match.

---

## 10. Internal linking strategy

- Homepage → residential, commercial, then moreLinks (industrial, on-grid, hybrid, maintenance, cost, guides).
- Each service page → related services, one guide, contact/survey CTA.
- Guides hub → all cornerstone articles + cost + subsidy.
- Descriptive, varied anchors (not the same exact-match phrase on every page).
- Footer lists solution children plus calculator and contact.

---

## 11. Content strategy

Shipped now: unique service pages + 3 guides + hub. Copy uses only facts already in the business config or labelled planning defaults (1,550 kWh/kW/year; ~80–100 sq. ft./kW thumb-rule from the existing FAQ).

**Not shipped as articles** (avoid thin AI posts): 3 kW/5 kW/10 kW price posts as separate URLs (covered inside cost + sizing); payback explainer; inverter buying guide; schools/institutions; “common mistakes”; “how much electricity does 5 kW generate” as a standalone (partially in sizing). See section 15.

Projects stay illustrative until real photos and capacities are provided.

---

## 12. Local SEO strategy

- NAP from `BUSINESS` everywhere (footer, contact, schema, privacy/terms).
- Satara is explicit in titles, H1, service area, and the Satara guide.
- District towns mentioned only as reachable survey locations.
- No fake GBP categories, reviews, or coordinates.
- Hours are still a placeholder until the owner confirms them — **do not add openingHours schema until then**.

---

## 13. Google Search Console setup steps

After deploy (do not skip the host confirmation):

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a **URL prefix** property: `https://drjsolutions.in` (and, if it still receives traffic, `https://www.drjsolutions.in` so you can watch the 301s).
3. Verify with DNS TXT or the HTML meta/file method Netlify/Google provide.
4. Set the **preferred** property to the non-www HTTPS prefix.
5. Sitemaps → submit `https://drjsolutions.in/sitemap.xml`.
6. Confirm robots.txt fetch succeeds.
7. URL Inspection on `/`, `/residential-solar`, `/solar-subsidy`, `/guides/rooftop-solar-satara`.
8. Request indexing on those URLs after they return 200 with the prerendered title.
9. Experience → Core Web Vitals (once data exists).
10. Enhancements → check Breadcrumbs / FAQ / Local business for errors (fix invalid items; do not add types you cannot support).

Optional: add the domain property `drjsolutions.in` to cover http/https and www in one place, still using non-www HTTPS canonicals on-page.

---

## 14. Google Business Profile recommendations

Do not create a second “virtual” office. Match the website:

Must match the site:

- Name: **DRJ Solutions**
- Phone: **9579792080** / **+91 95797 92080**
- Address: **7 Hills Apartment, 18, Shri Chhatrapati Shahu Maharaj Rd, Anand Nagar, Zunjar Colony, Satara, Maharashtra 415002**
- Website: **https://drjsolutions.in/**
- Service area: Satara-first; add other towns only if you genuinely serve them

Suggested GBP work (owner only):

- Primary category: **Solar Energy Company** or **Solar Panel Installation Service** (pick the one Google shows that best matches installation).
- Secondary: electrician / renewable energy equipment, only if accurate.
- Description: rooftop solar for homes and businesses, office in Satara, free site survey — no guaranteed savings %.
- Services: residential, commercial, industrial, on-grid, hybrid, maintenance, subsidy guidance.
- Hours: add only when true; then mirror them on `/contact` and in schema.
- Photos: real office, real roofs, team (no stock as “our install”).
- Ask real customers for reviews; reply to every review. Never buy reviews.
- Posts: completed jobs (with permission), monsoon maintenance reminders, subsidy portal links (official).

---

## 15. Future content opportunities

Only write these when you have a real angle (a job, a discom snag, a measured generation month):

- 3 kW / 5 kW / 10 kW generation notes using **your** monitored sites
- Payback walkthrough with a real (anonymised) bill pattern
- Inverter selection checklist from equipment you actually install
- Rooftop solar for a specific Satara society (with committee permission)
- Net metering steps as you experience MSEDCL in Satara (date-stamped, not guessed)
- School / industrial case studies with real kW and photos

---

## 16. Backlink / link-building recommendations (white-hat)

- Citations: justdial / IndiaMART / Sulekha only if the listing is real and NAP-identical.
- Maharashtra / Satara business directories and industry associations you actually belong to.
- Supplier or inverter brand “finder” listings if you are an authorised partner (only if true).
- Local sponsorships, school/college energy talks, with a link you control.
- Earn links from useful guides (Satara rooftop, subsidy explainer) — do not buy PBNs or guest-post networks.
- Keep `drjsolutions.in` as the only domain you promote.

---

## 17. Monthly SEO maintenance checklist

- [ ] Search Console: coverage, 404s, sitemap status
- [ ] Confirm no accidental `noindex` on money pages
- [ ] Refresh subsidy copy if official rules change; still no invented amounts
- [ ] Replace illustrative gallery items with real projects when photos exist
- [ ] Respond to GBP reviews
- [ ] Check phone, WhatsApp, and form still convert
- [ ] Re-test one service URL in Rich Results Test after content edits
- [ ] CWV: if LCP regresses, inspect hero image and font CSS
- [ ] One new **useful** paragraph or FAQ from a real customer question — not a new thin URL

---

## 90-day content plan (recommended)

**Days 1–30**

- Deploy this build; finish GSC + GBP NAP match.
- Collect 5 real project photos (capacity, locality, permission).
- Confirm visiting hours; then add them on Contact **and** schema.
- Write nothing extra until those assets exist.

**Days 31–60**

- Publish 1–2 real project write-ups on `/projects` (not stock).
- Add one FAQ per week from actual WhatsApp questions.
- Optional: “net metering paperwork we saw in Satara this month” dated note on the subsidy or Satara guide.

**Days 61–90**

- If you have monitored generation, add a dated 5 kW example to `/solar-system-cost`.
- One partnership or local citation with identical NAP.
- Review GSC queries; expand existing pages rather than minting near-duplicates.
