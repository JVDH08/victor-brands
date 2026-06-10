# Contactformulier — setup (Resend)

Het contactformulier op de site verstuurt berichten via [Resend](https://resend.com)
naar **victor@victorbrands.nl**. De backend zit in `src/app/api/contact/route.ts`,
het formulier in `src/components/contact.tsx`.

## 1. Resend-account + API-key

1. Maak een gratis account op <https://resend.com>.
2. Ga naar **API Keys** → <https://resend.com/api-keys> → **Create API Key**.
3. Geef 'm een naam (bijv. `victorbrands-website`) en kies **Sending access**.
4. Kopieer de key (begint met `re_…`). Je ziet 'm maar één keer.

## 2. Key lokaal instellen

1. Kopieer `.env.example` naar `.env.local` (als die nog niet bestaat).
2. Plak je key achter `RESEND_API_KEY=`:

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL=victor@victorbrands.nl
   CONTACT_FROM_EMAIL=onboarding@resend.dev
   ```

> `.env.local` staat in `.gitignore` — de key komt **nooit** in git.

## 3. Testen

```bash
npm run dev
```

Open <http://localhost:3000>, scroll naar het contactformulier, vul het in en
verstuur. Met een geldige key komt de mail aan op het `CONTACT_TO_EMAIL`-adres.
Zonder key (of bij ongeldige invoer) krijg je een nette foutmelding en gebeurt
er niets stiekems.

- **Loading / success / error** worden in het formulier getoond.
- Een verborgen **honeypot**-veld (`company`) vangt spam-bots af: als dat is
  ingevuld wordt het bericht stil genegeerd.
- Server-side validatie eist naam, geldig e-mailadres en een bericht.

## 4. Op Vercel (productie)

Zet dezelfde variabelen in **Vercel → Project → Settings → Environment
Variables**:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (optioneel, default `victor@victorbrands.nl`)
- `CONTACT_FROM_EMAIL` (optioneel, default `onboarding@resend.dev`)

Redeploy na het toevoegen.

## 5. Later: mailen vanaf victorbrands.nl

Nu wordt verstuurd vanaf Resends gedeelde testdomein `onboarding@resend.dev`.
Voor een professionele afzender (en betere bezorgbaarheid):

1. Resend → **Domains** → <https://resend.com/domains> → **Add Domain** →
   `victorbrands.nl`.
2. Voeg de getoonde **DNS-records** (SPF, DKIM, en evt. DMARC) toe bij de
   DNS-provider van het domein. Wacht tot Resend de status op **Verified** zet.
3. Pas `CONTACT_FROM_EMAIL` aan naar een adres op dat domein, bijv.:

   ```
   CONTACT_FROM_EMAIL=Victor Brands <noreply@victorbrands.nl>
   ```

   Lokaal in `.env.local` én op Vercel. Redeploy.
