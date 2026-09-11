# King Paints Nepal

Official website and inquiry management system for King Paints Nepal, a paint manufacturer and distributor based in Tarakeshwar, Kathmandu.

The project is a React and Vite frontend with Vercel serverless functions, Prisma ORM, and PostgreSQL-backed inquiry storage.

## Highlights

- Responsive product catalogue with detail pages, specifications, and TDS/SDS downloads
- 1,080-shade colour library with search, filters, pagination, and quick-view previews
- Dealer locator with search, map markers, and factory location embed
- Contact and dealer partnership inquiry forms
- WhatsApp, phone, and email contact actions
- Dynamic SEO metadata, Open Graph tags, canonical URLs, sitemap, robots rules, and JSON-LD schemas
- Admin inquiry dashboard at `/admin/inquiries`
- Prisma `Inquiry` model with Vercel API handlers for create, list, and status updates

## Technology

- React 18 and Vite 5
- Framer Motion and Lucide React
- Prisma 6 and PostgreSQL
- Vercel Functions

## Local Development

### Requirements

- Node.js 18 or newer
- npm 9 or newer
- PostgreSQL for shared inquiry storage

### Install and run

```bash
npm install
npm run dev
```

The Vite site runs at `http://localhost:5173` or the next available port.

The regular Vite server serves the frontend only. It does not execute the `api/` serverless functions. For full local API testing, use:

```bash
npx vercel dev
```

### Production build

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` for local work:

```env
DATABASE_URL=postgresql://user:password@host:5432/king_paints
```

`DATABASE_URL` is required for PostgreSQL inquiry storage. `ADMIN_API_TOKEN` is optional. When it is not configured, the dashboard password is used for the API fallback.

Never commit `.env.local` or real credentials.

## Database Setup

The Prisma schema is in `prisma/schema.prisma`.

```bash
npm run prisma:generate
npm run prisma:push
```

Run `prisma:push` once against the production database before testing live submissions.

## Inquiry Workflow

Public forms submit to `POST /api/inquiries`.

The admin dashboard reads from `GET /api/inquiries` and updates statuses through `PATCH /api/inquiries/:id`.

Supported statuses are `PENDING`, `REVIEWED`, and `CONTACTED`.

Open the admin page at:

```text
/admin/inquiries
```

The current dashboard password is `utkrista123`. For production, configure a strong `ADMIN_API_TOKEN` in Vercel and change the application password before sharing the dashboard publicly.

If the API/database is unavailable, the frontend saves submissions in browser storage so local testing can still show them in the admin page. Browser-local inquiries are not shared between devices; PostgreSQL is required for production persistence.

## Routes

### Public pages

- `/`
- `/products`
- `/products/:id`
- `/colours`
- `/dealers`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/cookies`
- `/refunds`

### Admin

- `/admin/inquiries`

### API

- `POST /api/inquiries`
- `GET /api/inquiries`
- `PATCH /api/inquiries/:id`

## Project Structure

```text
api/                    Vercel serverless inquiry handlers
prisma/                 Prisma schema
public/                 Static SEO, image, document, and favicon assets
src/components/         Shared UI components
src/data/               Site, product, colour, dealer, and local inquiry data
src/pages/               Public and admin page components
src/App.jsx             Client-side route selection
src/index.css           Shared design system and responsive styles
index.html              Static document head and SEO defaults
vercel.json             SPA fallback configuration
```

## Content Updates

Most business content is centralized in `src/data/`:

- `site.js` for company details, phones, email, domain, WhatsApp, and map links
- `products.js` for product records and specifications
- `colours.js` and `colourGenerator.js` for the colour catalogue
- `dealers.js` for locator records
- `nav.js` for navigation and product categories

## Deployment

The GitHub repository is connected to Vercel. Use the Vite framework preset and the default build command:

```bash
npm run build
```

Add `DATABASE_URL` to Vercel for Production, Preview, and Development environments. The `postinstall` script runs `prisma generate` automatically during deployment.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the deployment checklist.

## Quality Checks

```bash
npm run prisma:generate
npm run build
git diff --check
```

The production build should pass before pushing changes to `main`.

## Contact

**King Paints Nepal**

Tarakeshwar Municipality, Ward 5, Kathmandu, Nepal

Website: https://kingpaintsnepal.com.np/
