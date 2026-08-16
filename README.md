# DRJ Solutions website

Production-ready lead-generation website for **DRJ Solutions**, a rooftop solar business in Satara, Maharashtra.

## Pages

- Home `/`
- About `/about`
- Residential Solar `/residential-solar`
- Commercial Solar `/commercial-solar`
- Solar Subsidy `/solar-subsidy`
- How It Works `/how-it-works`
- Solar Savings Calculator `/solar-savings-calculator`
- Projects `/projects`
- FAQ `/faq`
- Contact `/contact`
- Privacy Policy `/privacy-policy`
- Terms `/terms`

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

## Scripts

| Command                                      | Purpose                          |
| -------------------------------------------- | -------------------------------- |
| `npm run dev`                                | Local development server         |
| `make lint` / `npm run lint`                 | ESLint                           |
| `make lint-fix` / `npm run lint:fix`         | ESLint with safe auto-fixes      |
| `make format` / `npm run format`             | Format files with Prettier       |
| `make format-check` / `npm run format:check` | Check formatting without writing |
| `make check`                                 | Lint and check formatting        |
| `npm run build`                              | Typecheck + production build     |
| `npm run preview`                            | Preview the production build     |

## Environment variables

Copy `.env.example` to `.env` and adjust:

| Variable                                             | Purpose                                                                                   |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `VITE_SITE_URL`                                      | Canonical site URL for SEO, sitemap, Open Graph                                           |
| `VITE_CONTACT_API_URL`                               | Optional POST endpoint for lead forms. Empty = Netlify Forms in production, local storage in `npm run dev` |
| `VITE_GA_MEASUREMENT_ID`                             | Optional Google Analytics ID (e.g. `G-XXXXXXXX`)                                          |
| `VITE_GOOGLE_MAPS_URL`                               | Optional Google Maps place URL                                                            |
| `VITE_GOOGLE_MAPS_EMBED_URL`                         | Optional Maps embed URL for the contact page                                              |
| `VITE_BUSINESS_LATITUDE` / `VITE_BUSINESS_LONGITUDE` | Optional coordinates once verified                                                        |

Never put API secrets in `VITE_*` variables. Those values are exposed to the browser.

## Connect a backend later

Lead submissions go through `src/services/contactService.ts`. On Netlify, leave `VITE_CONTACT_API_URL` empty to collect leads in **Forms → lead**. To use your own API instead, set `VITE_CONTACT_API_URL` to FastAPI, Node, Firebase, Supabase, a CRM webhook, or an email worker. The request body is JSON:

```json
{
  "name": "",
  "phone": "",
  "city": "",
  "monthlyBill": "",
  "propertyType": "residential",
  "message": "",
  "source": "hero",
  "language": "mr"
}
```

## Content updates

- English copy: `src/content/en.ts`
- Marathi copy: `src/content/mr.ts`
- Business details / phone / address: `src/config/site.ts`
- Calculator assumptions & subsidy placeholders: `src/config/calculator.ts`

## Deploy on Netlify

The site is a Vite SPA. `netlify.toml` sets the build, publish folder, Node 22, SPA fallback, and cache headers.

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Netlify](https://app.netlify.com), **Add new site → Import an existing project**.
3. Select the repo. Build settings are already in `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add environment variables under **Site configuration → Environment variables** (required at build time because Vite inlines `VITE_*` values):

| Variable | Suggested value |
| --- | --- |
| `VITE_SITE_URL` | Your live URL, e.g. `https://www.drjsolutions.in` or `https://your-site.netlify.app` |
| `VITE_CONTACT_API_URL` | Leave empty to collect leads in **Netlify → Forms** (`lead`) |
| `VITE_GA_MEASUREMENT_ID` | Optional, e.g. `G-XXXXXXXX` |
| `VITE_GOOGLE_MAPS_URL` / `VITE_GOOGLE_MAPS_EMBED_URL` | Optional |

5. Deploy. After the first production submit, open **Forms → lead** to see enquiries.
6. Point a custom domain at the site under **Domain management**. Then set `VITE_SITE_URL` to that domain and trigger a new deploy.

SPA routes (`/about`, `/contact`, …) are rewritten to `index.html` via `netlify.toml` and `public/_redirects`.

Local development still saves leads in the browser until you connect an API. Never put private API keys in `VITE_*` variables.

## Replace before launch

- Real DRJ Solutions logo if a separate asset is supplied (current mark is a clean treatment, not a traced flyer)
- Project gallery photos (`public/images/` — placeholders are labelled in the UI)
- Google Maps embed URL
- Verified subsidy amounts (leave empty until confirmed)
- Founder / team details on the About page
- Optional email address

# drjsolutions
