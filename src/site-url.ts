// Publieke basis-URL van de site, voor metadataBase, sitemap en robots.
//
// Vercel zet VERCEL_PROJECT_PRODUCTION_URL op het kortste custom productiedomein
// van het project, of op de vercel.app-URL zolang er nog geen custom domein is.
// Zolang victorbrands.nl nog de oude WordPress-site serveert, wijst alles dus
// naar victor-brands.vercel.app (waar og:image en de sitemap echt bestaan).
// Zodra victorbrands.nl in Vercel als domein is toegevoegd, schakelt de
// eerstvolgende deploy vanzelf om — er hoeft niets in de code te veranderen.
// Buiten Vercel (lokaal) valt het terug op het echte domein.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = productionHost ? `https://${productionHost}` : "https://victorbrands.nl";
