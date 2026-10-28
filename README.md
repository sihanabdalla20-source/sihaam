# Siham Tours

A complete, responsive four-page tourism website for **Siham Tours**, built with Next.js, TypeScript and Tailwind CSS.

The site includes:

- **Home** — cinematic hero, featured journeys, why-choose-us, popular destinations, an honest traveler-stories section and a planning call-to-action.
- **About** — brand story, mission and vision, planning approach, values and commitment.
- **Products** — a searchable, filterable collection of sample tour packages with accessible detail dialogs and inquiry links.
- **Contact** — validated inquiry form, direct contact details, WhatsApp integration, social links and a configurable map.

There is no database, authentication, admin panel or payment processing.

---

## Run locally

Requirements: **Node.js 18.18+** (Node.js 22 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

---

## Project structure

```text
app/
  about/page.tsx          About page
  contact/page.tsx        Contact page
  products/page.tsx       Tour packages page
  page.tsx                Home page
  layout.tsx              Shared layout, navigation, footer, SEO defaults
  globals.css             Design tokens, components and motion
  sitemap.ts              Sitemap
  robots.ts               Robots rules
components/
  Button.tsx              Reusable button/link
  ContactForm.tsx         Validated inquiry form
  Footer.tsx              Shared footer
  Logo.tsx                Brand mark and wordmark
  Navbar.tsx              Responsive navigation + mobile menu
  PageHero.tsx            Inner-page hero
  PlanCTA.tsx             Shared planning call-to-action
  Reveal.tsx              Lightweight scroll-reveal wrapper
  SectionHeading.tsx      Reusable section heading
  TourCard.tsx            Tour package card
  TourDialog.tsx          Accessible tour details dialog
  ToursExplorer.tsx       Search, category filtering and results
lib/
  site.ts                 Company, contact, social and map settings
  tours.ts                Tour package data and helpers
public/images/            Optimised source photography
```

---

## Customise the business information

All editable company details are in [`lib/site.ts`](lib/site.ts):

- Phone number and `tel:` link
- Email address and `mailto:` link
- WhatsApp number and `wa.me` link
- Office address
- Office hours
- Social media URLs
- Map embed URL, map link and map label
- Public site URL fallback

The checked-in phone number, email address, address and map are **intentional placeholders**. Replace them with Siham Tours' real details before launch. The map uses an OpenStreetMap embed by default.

For correct canonical URLs, Open Graph metadata and the sitemap, add a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

---

## Update tour packages

The catalogue lives in [`lib/tours.ts`](lib/tours.ts). Each tour is a typed object:

```ts
{
  slug: "zanzibar-island-escape",
  name: "Zanzibar Island Escape",
  destination: "Zanzibar",
  country: "Tanzania",
  category: "Beach Holidays",
  price: 1250,
  duration: "6 days / 5 nights",
  summary: "Short card description",
  description: "Longer description for the detail dialog",
  image: "/images/zanzibar.jpg",
  imageAlt: "Accessible image description",
  highlights: ["..."],
  included: ["..."],
  bestFor: "Couples and slow-travel lovers",
  featured: true
}
```

Add an image to `public/images/`, then add or edit an entry. Cards, category filters, search results, detail dialogs and contact-page prefill all update automatically.

The packages are realistic **sample itineraries**, not confirmed live offers. Pricing and inclusions should be reviewed before launch. The product page includes an indicative-pricing note.

---

## Connect the contact form

The form validates all fields in the browser, shows inline errors and moves focus to the first invalid field.

By default, no form service is connected. A valid submission shows a clear message that **nothing has been sent**, together with email and WhatsApp links. It never pretends to send a message.

To enable delivery, create a form endpoint (for example with Formspree, Basin or your own API) and add it to `.env.local`:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-service.example/your-form-id
```

When configured, the form sends a JSON `POST` with these fields:

```json
{
  "fullName": "...",
  "email": "...",
  "phone": "...",
  "subject": "...",
  "message": "..."
}
```

It expects a successful `2xx` response. No backend or API keys are committed to the project.

---

## Testimonials

No customer quotes, names or reviews have been invented. The Home page includes a designed **Traveler Stories** section that explains the verified-review policy and reserves the space for real feedback. Once genuine reviews are available, replace the quote card in `app/page.tsx` with the verified testimonials and attribution.

Likewise, the site does not claim years in business, traveler counts, awards or other unverified credentials.

---

## Design and technical notes

- Deep navy, teal, warm gold and cream palette with Playfair Display + Manrope typography.
- Fully responsive layouts tested for mobile, tablet and desktop; mobile navigation includes focus trapping, escape-to-close and body scroll locking.
- Semantic landmarks, skip link, visible focus states, labelled form fields, ARIA states and keyboard-accessible tour dialogs.
- Local, optimised imagery via `next/image`; hero images are prioritised and below-the-fold images are lazy-loaded.
- Per-page titles, descriptions and canonical URLs; Open Graph/Twitter metadata; sitemap and robots rules.
- Reduced-motion support for users who prefer less animation.
- No unnecessary client-side animation libraries.

---

## Photography credits

Photography is sourced from Unsplash. The Cappadocia image is by **MusikAnimal**, licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons. The credit is also included in the site footer.

If you replace the photography, update `imageAlt` text and the footer credit as appropriate.
