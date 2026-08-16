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
| `VITE_CONTACT_API_URL`                               | Optional POST endpoint for lead forms. Empty = store locally until a backend is connected |
| `VITE_GA_MEASUREMENT_ID`                             | Optional Google Analytics ID (e.g. `G-XXXXXXXX`)                                          |
| `VITE_GOOGLE_MAPS_URL`                               | Optional Google Maps place URL                                                            |
| `VITE_GOOGLE_MAPS_EMBED_URL`                         | Optional Maps embed URL for the contact page                                              |
| `VITE_BUSINESS_LATITUDE` / `VITE_BUSINESS_LONGITUDE` | Optional coordinates once verified                                                        |

Never put API secrets in `VITE_*` variables. Those values are exposed to the browser.

## Connect a backend later

Lead submissions go through `src/services/contactService.ts`. Point `VITE_CONTACT_API_URL` at FastAPI, Node, Firebase, Supabase, a CRM webhook, or an email worker. The request body is JSON:

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

## Deploy

The app is a static SPA.

**Vercel:** this repo includes `vercel.json` with SPA rewrites.

**Netlify:** `public/_redirects` already contains `/* /index.html 200`.

**Any static host:** upload the `dist/` folder after `npm run build`. Configure the server to serve `index.html` for unknown routes.

Update `VITE_SITE_URL` and `public/sitemap.xml` / `public/robots.txt` to the real domain before launch.

## Replace before launch

- Real DRJ Solutions logo if a separate asset is supplied (current mark is a clean treatment, not a traced flyer)
- Project gallery photos (`public/images/` — placeholders are labelled in the UI)
- Google Maps embed URL
- Verified subsidy amounts (leave empty until confirmed)
- Founder / team details on the About page
- Optional email address

# drjsolutions
