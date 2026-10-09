// Publieke basis-URL van de site, voor metadataBase, sitemap en robots.
//
// Vercel zet VERCEL_PROJECT_PRODUCTION_URL op het kortste custom productiedomein
// van het project. Dat is victorbrands.nl, maar dat domein stuurt in Vercel met
// een 308 door naar www.victorbrands.nl, dus daarvoor gebruiken we de www-URL.
// Buiten Vercel (lokaal) valt het ook terug op de www-URL.
const canonicalUrl = "https://www.victorbrands.nl";
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  productionHost && productionHost !== "victorbrands.nl"
    ? `https://${productionHost}`
    : canonicalUrl;
