# Victor Brands

## TODO bij de domeinverhuizing

**Op drie plekken staat `https://victor-brands.vercel.app` tijdelijk hardcoded. Alle drie moeten terug naar `https://victorbrands.nl` zodra dat domein naar Vercel wijst:**

- `src/app/layout.tsx` — `metadataBase`
- `src/app/sitemap.ts` — `baseUrl`
- `src/app/robots.ts` — `baseUrl`

Zolang victorbrands.nl nog de oude WordPress-site serveert, zou het echte domein daar naar bestanden wijzen die er niet zijn: `og:image` geeft dan een 404 (LinkedIn toont geen previewafbeelding bij de gedeelde link) en de sitemap noemt URL's die nog niet bestaan. Bij elk van de drie staat een TODO-comment die hiernaar verwijst.

Hoort bij dezelfde omschakeling:

- `legal.privacy` en `legal.cookies` in `src/content.ts` opnieuw nalopen voordat het domein live gaat.
- `CONTACT_FROM_EMAIL` zetten zodra victorbrands.nl DNS-geverifieerd is in Resend.

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
