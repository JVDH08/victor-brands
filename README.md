# Victor Brands

## Checklist bij de domeinverhuizing

De basis-URL (metadataBase, sitemap, robots) komt uit `src/site-url.ts` en volgt automatisch het productiedomein in Vercel (`VERCEL_PROJECT_PRODUCTION_URL`). Zolang victorbrands.nl nog de oude WordPress-site serveert, wijst alles naar `victor-brands.vercel.app`.

Bij de omschakeling:

- `victorbrands.nl` in Vercel toevoegen als domein en de DNS laten wijzen, daarna **opnieuw deployen** — dan schakelen canonical, `og:image`, sitemap en robots vanzelf om.
- `CONTACT_FROM_EMAIL` zetten zodra victorbrands.nl DNS-geverifieerd is in Resend (zie `SETUP-CONTACT.md`).
- Controleren dat `RESEND_API_KEY` in Vercel staat en één testbericht via het contactformulier sturen.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
