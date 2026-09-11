# Vercel Deployment

This project deploys as a Vite frontend with Vercel Functions in `api/` and Prisma/PostgreSQL for inquiries.

## Vercel setup

1. Connect the GitHub repository to Vercel.
2. Leave the framework preset as Vite and keep the build command as `npm run build`.
3. Add this required environment variable for Production, Preview, and Development:

```env
DATABASE_URL=postgresql://...
```

4. Deploy. The `postinstall` script automatically runs `prisma generate` during the Vercel install.

## Create the table

With `DATABASE_URL` available locally, run once:

```bash
npm run prisma:push
```

The inquiry form writes to `POST /api/inquiries`, and the dashboard is available at `/admin/inquiries`.

Use the dashboard password `utkrista123`. `ADMIN_API_TOKEN` is optional; setting it in Vercel is recommended for stronger server-side protection.