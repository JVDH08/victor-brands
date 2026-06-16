// ─── Central content file for Victor Brands ──────────────────────────────────
// Edit this file to update all website content without touching component code.
// This structure mirrors what a CMS (like your dashboard) would expose via API.
//
// 👉 Velden met "in te vullen" zijn placeholders. Vul ze in zodra de echte
//    gegevens bekend zijn (telefoonnummer, LinkedIn, logo's, klantcase).

export const siteContent = {
  meta: {
    title: "Victor Brands — Trainer, trainingsacteur & teamcoach | Amsterdam",
    description:
      "Victor Brands traint en coacht managementteams, vastgelopen teams en professionals bij overheid en bedrijfsleven. Concreet werk aan leiderschap, samenwerking en communicatie — met Insights Discovery, HBDI® en DISC.",
  },

  // Central image library — all photos from victorbrands.nl + Higgsfield-enhanced
  images: {
    logo: "https://www.victorbrands.nl/wp-content/uploads/2018/02/logo.fw_.png",
    // Real verified photo of Victor Brands (from comedytrain.nl)
    portraitOriginal:
      "https://www.comedytrain.nl/wp-content/uploads/2018/06/victor_brands_0.jpg",
    // Same photo, Higgsfield-enhanced (sharper/cleaner, face preserved exactly)
    portraitEnhanced:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_113502_d1785f19-6964-465e-9c96-22d3f0a214eb.png",
    heroBackground:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_111936_fad43455-659c-4a10-ad73-5251ebcbcdc4.png",
    // Higgsfield-enhanced (sharper/higher-res, content unchanged) of the
    // original victorbrands.nl/.../aanbod_r4_c5.png
    trainingsacteur:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_125845_5c3213f7-a904-4620-a5ac-c389068c6987.png",
    insightsDiscovery:
      "https://www.victorbrands.nl/wp-content/uploads/2018/01/insight-discovery.jpg",
    hbdiCertified:
      "https://www.victorbrands.nl/wp-content/uploads/2018/01/HBDICertifiedLogo.jpg",
    discBadge:
      "https://www.victorbrands.nl/wp-content/uploads/2022/02/Badge_DISC.jpeg",
  },

  nav: {
    logo: "VB",
    logoSub: "Victor Brands",
    // Max 7 items. Contact zit als aparte knop in de balk (desktop) en als
    // CTA onderaan het mobiele menu — daarom niet apart in deze lijst.
    links: [
      { label: "Over Victor", href: "#over-victor" },
      { label: "Het verhaal", href: "#verhaal" },
      { label: "Diensten", href: "#diensten" },
      { label: "Werkwijze", href: "#werkwijze" },
      { label: "Aanbod", href: "#aanbod" },
      { label: "Referenties", href: "#referenties" },
    ],
    cta: "Kennismakingsgesprek",
  },

  hero: {
    label: "Amsterdam · Trainer, Trainingsacteur & Teamcoach",
    name: "Victor",
    nameSuffix: "Brands",
    // Maakt binnen één blik duidelijk: WAT (trainer/acteur/coach), VOOR WIE
    // (MT's, vastgelopen teams, professionals — overheid én bedrijfsleven),
    // en WELK probleem (samenwerking, leiderschap, communicatie).
    tagline:
      "Voor managementteams, vastgelopen teams en professionals — bij de overheid én in het bedrijfsleven. Victor maakt samenwerking, leiderschap en communicatie merkbaar beter. Praktisch, op maat en zonder omwegen.",
    ctaPrimary: "Kennismakingsgesprek aanvragen",
    ctaSecondary: "Bekijk wat hij doet",
    stats: [
      { number: "20+", label: "Jaar trainer & coach" },
      { number: "3", label: "Erkende methodieken" },
      { number: "9", label: "Trainingsprogramma's" },
    ],
    portraitUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_113502_d1785f19-6964-465e-9c96-22d3f0a214eb.png",
    backgroundUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_111936_fad43455-659c-4a10-ad73-5251ebcbcdc4.png",
  },

  // Thin trust strip — echte opdrachtgevers, terug te zien in de referenties.
  // Logo-afbeeldingen zijn nog in te vullen: zet per klant een `logo`-pad
  // (bijv. "/logos/heineken.svg") zodra je de officiële logo's hebt. Zolang
  // `logo` leeg is, wordt de naam als nette tekst-wordmark getoond.
  clients: {
    label: "Vertrouwd door o.a.",
    note: "Logo's in te vullen — namen zijn echte opdrachtgevers (zie referenties).",
    items: [
      { name: "Heineken", logo: "" },
      { name: "Rijkswaterstaat", logo: "" },
      { name: "IFV · Brandweer", logo: "" },
      { name: "Pepperminds", logo: "" },
      { name: "Falke & Verbaan", logo: "" },
      { name: "the Art of Learning", logo: "" },
    ],
  },

  // Persoonlijke introductie: visie + werkervaring + expertise. Executive,
  // rustig, deskundig. Het uitgebreide levensverhaal staat in `about`.
  profile: {
    sectionLabel: "Over Victor",
    heading: "Senioriteit, rust",
    headingAccent: "en resultaat",
    intro:
      "Victor Brands begeleidt al ruim twintig jaar managementteams, teams en individuele professionals. Hij combineert een achtergrond als manager bij KLM met jarenlange ervaring als acteur en het werk van een gecertificeerd coach. Die combinatie maakt hem scherp op gedrag en communicatie — en nuchter over wat er in een organisatie écht speelt.",
    visionLabel: "Visie",
    vision: [
      {
        title: "Leiderschap",
        body: "Goed leiderschap is geen trucje, maar rust onder druk en duidelijkheid in keuzes. Victor helpt leidinggevenden richting te geven zonder de mens uit het oog te verliezen.",
      },
      {
        title: "Teamontwikkeling",
        body: "Teams lopen zelden vast op de inhoud, maar op onuitgesproken verwachtingen en vaste patronen. Victor maakt die bespreekbaar en brengt het team weer in beweging.",
      },
      {
        title: "Communicatie",
        body: "Effectieve communicatie is concreet, eerlijk en veilig. Victor traint mensen om het ongemakkelijke gesprek aan te durven — en er sterker uit te komen.",
      },
    ],
    experienceLabel: "Werkervaring",
    experience: [
      {
        period: "Nu",
        role: "Trainer, trainingsacteur & teamcoach",
        org: "Eigen praktijk · Amsterdam",
      },
      {
        period: "20+ jaar",
        role: "Trainer & coach voor overheid en corporate",
        org: "o.a. Heineken, Rijkswaterstaat, IFV (Brandweer), Pepperminds",
      },
      {
        period: "Acteur",
        role: "Theater, televisie & trainingsacteur",
        org: "Comedytrain · Toomler",
      },
      {
        period: "Start loopbaan",
        role: "Van grondsteward tot manager",
        org: "KLM",
      },
    ],
    expertiseLabel: "Expertisegebieden",
    expertise: [
      "Leiderschapsontwikkeling",
      "Teamcoaching",
      "Communicatie & feedback",
      "Conflicthantering",
      "Veranderkunde",
      "Insights Discovery",
      "HBDI®",
      "DISC",
    ],
    storyCta: "Lees het volledige verhaal",
  },

  about: {
    sectionLabel: "Het verhaal",
    heading: "Een verhaal dat",
    headingAccent: "niemand verzint",
    quote:
      "Zijn verleden maakt hem niet onbetrouwbaar. Het maakt hem de meest authentieke trainer die je kunt inhuren.",
    chapters: [
      {
        number: "01",
        tag: "Verleden",
        title: "Van grondsteward tot manager",
        body: "Victor begon zijn loopbaan als grondsteward bij KLM en klom op tot manager. Bekend om zijn scherpe observaties en aangeboren gevoel voor humor, onderscheidde hij zich al vroeg als iemand die mensen weet te lezen en te verbinden. Bij KLM leerde hij de kunst van communicatie onder druk.",
        accent: false,
      },
      {
        number: "02",
        tag: "Comedy",
        title: "Toomler, televisie & het grote podium",
        body: "In 1994 sloot Victor zich aan bij Comedytrain. Hij stond regelmatig op het podium van het legendarische Toomler en werd een vast gezicht op televisie: Westenwind, Blauw blauw, Unit 13, Goudkust, Kees & Co en Van Speijk. Zijn acteurscarrière bloeide — totdat het leven een andere wending nam.",
        accent: false,
      },
      {
        number: "03",
        tag: "Misstap",
        title: "Drie jaar in een Amerikaanse federale gevangenis",
        body: "In 2001 werd Victor in Miami gearresteerd voor het witwassen van geld en veroordeeld tot drie jaar hechtenis in een Amerikaans federaal penitentiaire inrichting. Vanuit de gevangenis schreef hij wekelijks columns voor de Volkskrant onder het pseudoniem Jan de Graaf — eerlijk, rauw en met zwarte humor. Die columns werden het boek 'Vast in de VS'. Zijn gevangenisjaren zijn niet iets wat hij verbergt. Ze zijn de kern van zijn geloofwaardigheid.",
        accent: true,
      },
      {
        number: "04",
        tag: "Heden",
        title: "Terug, en beter dan ooit",
        body: "Na zijn vrijlating in 2004 keerde Victor terug in de samenleving en bouwde iets bijzonders op. Hij combineerde zijn acteerervaring, zijn mensenkennis en zijn ongewone levensverhaal tot een unieke trainerspraktijk. Vandaag werkt hij voor organisaties als Heineken, Rijkswaterstaat, de brandweer (IFV) en Pepperminds. Zijn verhaal maakt hem niet kwetsbaar — het maakt hem onstopbaar.",
        accent: false,
      },
    ],
  },

  services: {
    sectionLabel: "Wat doet Victor?",
    heading: "Drie rollen,",
    headingAccent: "één aanpak",
    intro:
      "Veiligheid, interactiviteit en humor. Dat zijn de drie principes achter alles wat Victor doet — of hij nu traint, acteert of coacht.",
    items: [
      {
        title: "Trainer",
        tagline: "Vaardigheden die beklijven",
        body: "Victor traint teams en professionals in communicatie, leiderschap en samenwerking. Geen theorie om de theorie, maar oefenen met situaties uit hun eigen werkpraktijk.",
        approach:
          "Hij stemt elke training af op de organisatie, werkt in kleine, behapbare stappen en gebruikt humor om het tegelijk veilig én scherp te houden.",
        result:
          "Deelnemers passen het geleerde direct toe op de werkvloer — en houden het vast.",
        tags: ["Communicatie", "Leiderschap", "Samenwerking", "Verandering"],
      },
      {
        title: "Trainingsacteur",
        tagline: "Realisme dat raakt",
        body: "Als trainingsacteur speelt Victor realistische werksituaties na: een lastig beoordelingsgesprek, een conflict op de afdeling, een klant die afhaakt. Zo wordt oefenen écht oefenen.",
        approach:
          "Hij speelt geloofwaardig mee, stopt op het juiste moment en geeft feedback die de deelnemer meteen kan gebruiken.",
        result:
          "Trainingen leveren meer op: deelnemers ervaren het effect van hun gedrag in plaats van er alleen over te praten.",
        tags: ["Rollenspel", "Feedback", "Lastige gesprekken", "Presenteren"],
      },
      {
        title: "Coach & teamcoach",
        tagline: "Dieper dan de oppervlakte",
        body: "Als coach begeleidt Victor managementteams en individuele leidinggevenden bij samenwerking, rolverdeling en de onderlinge verhoudingen.",
        approach:
          "Met Insights Discovery, HBDI® en DISC — drie erkende methodes om drijfveren en gedrag in kaart te brengen — maakt hij patronen zichtbaar en bespreekbaar.",
        result:
          "Teams begrijpen elkaar beter, nemen sneller beslissingen en werken met minder wrijving samen.",
        tags: ["Insights Discovery", "HBDI®", "DISC", "Teamontwikkeling"],
      },
    ],
    approachLabel: "Aanpak",
    resultLabel: "Resultaat",
    ctaIntro: "Benieuwd wat dit voor uw team of organisatie kan betekenen?",
    cta: "Kennismakingsgesprek aanvragen",
  },

  methods: {
    sectionLabel: "De werkwijze",
    heading: "Gecertificeerd in de",
    headingAccent: "taal van gedrag",
    intro:
      "Victor werkt met bewezen methodieken die de denkvoorkeur, het gedragsprofiel en de samenwerking in kaart brengen. Geen willekeurige theorie — maar instrumenten die hij zelf heeft doorleefd.",
    disc: {
      title: "DISC-model",
      subtitle: "Gedragsanalyse",
      quadrants: [
        { key: "D", label: "Dominant", color: "#c0392b", desc: "Resultaatgericht, direct, daadkrachtig. Neemt initiatief en houdt van uitdagingen." },
        { key: "I", label: "Inspirerend", color: "#e8b84b", desc: "Enthousiast, optimistisch, overtuigend. Bouwt relaties en motiveert anderen." },
        { key: "S", label: "Stabiel", color: "#27ae60", desc: "Betrouwbaar, geduldig, teamgericht. Zoekt harmonie en consistentie." },
        { key: "C", label: "Consciëntieus", color: "#2980b9", desc: "Analytisch, nauwkeurig, kwaliteitsgericht. Werkt systematisch en zorgvuldig." },
      ],
    },
    hbdi: {
      title: "HBDI® Hersenkwadranten",
      subtitle: "Denkvoorkeurstijlen",
      quadrants: [
        { key: "A", label: "Analytisch", color: "#2980b9", desc: "Logisch, feitelijk, kwantitatief. Denkt in cijfers, analyses en kritisch redeneren." },
        { key: "D", label: "Strategisch", color: "#e8b84b", desc: "Holistisch, creatief, toekomstgericht. Denkt in visies, concepten en grote lijnen." },
        { key: "B", label: "Gestructureerd", color: "#27ae60", desc: "Georganiseerd, gepland, sequentieel. Denkt in processen, procedures en structuur." },
        { key: "C", label: "Interpersoonlijk", color: "#c0392b", desc: "Empathisch, communicatief, mensgericht. Denkt in gevoelens, relaties en samenwerking." },
      ],
    },
    insights: {
      title: "Kleurrijke zelfkennis",
      subtitle: "Insights Discovery",
      body: "Naast DISC en HBDI® werkt Victor ook met Insights Discovery — een methodiek die persoonlijkheid vertaalt in vier kleuren. Inzicht in jezelf en anderen is de sleutel tot betere communicatie, sterkere teams en duurzame gedragsverandering.",
    },
    certificationsLabel: "Officieel gecertificeerd",
    certifications: [
      { name: "Insights Discovery", imageKey: "insightsDiscovery" },
      { name: "HBDI® Certified", imageKey: "hbdiCertified" },
      { name: "DISC", imageKey: "discBadge" },
    ],
  },

  offerings: {
    sectionLabel: "Trainingsaanbod",
    heading: "Aanbod",
    headingAccent: "op maat",
    intro:
      "Victor biedt uitsluitend trainingen op maat — volledig afgestemd op de leerbehoeften van cursisten en de doelstellingen van de organisatie.",
    cta: "Kennismakingsgesprek aanvragen",
    ctaIntro: "Elke training begint met een gesprek over uw specifieke situatie.",
    items: [
      { num: "01", title: "Leiderschapstraject", desc: "Praktisch en coachend gericht leiderschap op maat." },
      { num: "02", title: "Salesvaardigheden", desc: "Verkoopgerelateerde competenties versterken in de praktijk." },
      { num: "03", title: "Communicatieve vaardigheden", desc: "Verbale en non-verbale communicatie effectiever maken." },
      { num: "04", title: "Ziekteverzuim", desc: "Begeleiding bij arbeids- en verzuimgerelateerde vraagstukken." },
      { num: "05", title: "Feedbacktraining", desc: "Feedback geven en ontvangen op een directe, veilige manier." },
      { num: "06", title: "Eerste indruk & presentatie", desc: "Persoonlijke uitstraling en presentatievaardigheden." },
      { num: "07", title: "Veranderingsmanagement", desc: "Teams begeleiden door organisatieveranderingen." },
      { num: "08", title: "HBDI®-profiel", desc: "Analyse van denkvoorkeurstijl en leerbehoefte." },
      { num: "09", title: "Insights Discovery", desc: "Persoonlijke ontwikkeling en zelfkennis via kleurprofielen." },
    ],
  },

  // ⚠️ PLACEHOLDER-CASE — in te vullen met een echte, akkoord bevonden klantcase.
  //    Gebruik geen verzonnen cijfers of citaten. Vervang onderstaande tekst en
  //    zet `isPlaceholder` op false zodra de case is ingevuld en goedgekeurd.
  caseStudy: {
    sectionLabel: "Klantcase",
    heading: "Van vraagstuk",
    headingAccent: "naar resultaat",
    isPlaceholder: true,
    placeholderBadge: "Voorbeeld — in te vullen",
    client: "Klantnaam — in te vullen",
    sector: "Sector / type organisatie — in te vullen",
    blocks: [
      {
        label: "De situatie",
        body: "Beschrijf hier kort de uitgangssituatie en het vraagstuk van de klant: wat speelde er, en waarom werd Victor gevraagd? (In te vullen.)",
      },
      {
        label: "De aanpak",
        body: "Beschrijf wat Victor concreet heeft gedaan: de opzet van het traject, de werkvormen en de gebruikte methodieken. (In te vullen.)",
      },
      {
        label: "Het resultaat",
        body: "Beschrijf het concrete resultaat — het liefst in de woorden van de klant. Geen verzonnen cijfers. (In te vullen.)",
      },
    ],
    quote: "Ruimte voor een afsluitend citaat van de opdrachtgever. (In te vullen.)",
    quoteName: "Naam — in te vullen",
    quoteRole: "Functie, organisatie — in te vullen",
  },

  // Echte referenties zoals eerder verzameld van victorbrands.nl. Nieuwe
  // testimonials kunnen hieronder worden toegevoegd — gebruik uitsluitend
  // echte, herleidbare citaten (naam, functie, organisatie). Geen anonieme
  // of verzonnen reviews.
  testimonials: {
    sectionLabel: "Referenties",
    heading: "Wat opdrachtgevers",
    headingAccent: "zeggen",
    items: [
      {
        text: "Victor is een effectieve trainer met een eigen aanpak gericht op communicatie en change management.",
        name: "Joris van Thiel",
        role: "Director TeleSales",
        company: "Heineken",
        category: "Als trainer",
      },
      {
        text: "Een toptrainer die deelnemers weet te inspireren! Victor creëert veiligheid, legt theorie goed uit en gebruikt veel humor.",
        name: "Melvin Littel",
        role: "Trainer",
        company: "Pepperminds",
        category: "Als trainer",
      },
      {
        text: "Door Victors bijdrage weet hij het rendement van trainingen te verhogen met professionele voorbereiding tot evaluatie.",
        name: "Henriëtte Martens",
        role: "Educatie- en trainingscoördinator",
        company: "Heineken",
        category: "Als trainingsacteur",
      },
      {
        text: "Deskundig, flexibel, integer en 3-dimensionaal denkend met energie. Hij inspireert zonder vertrouwen te schaden.",
        name: "Stance Gaspersz",
        role: "Manager",
        company: "Rijkswaterstaat",
        category: "Als trainingsacteur",
      },
      {
        text: "Victors kracht: snel inschatten van deelnemers, grote betrokkenheid, humor, directheid en motivatie in een veilige omgeving.",
        name: "Wendy van Middelkoop",
        role: "Decaan Leiderschap en organisatie",
        company: "IFV (Brandweer)",
        category: "Als trainingsacteur",
      },
      {
        text: "Victor is specialist én allrounder, heeft impact én is stille kracht met echte humor en discretie.",
        name: "Mark J. Bouman",
        role: "Director",
        company: "the Art of Learning",
        category: "Als trainingsacteur",
      },
      {
        text: "De samenwerking met Victor voelt als samenwerken met een collega, zowel qua inhoud als qua sfeer.",
        name: "Annette Balk",
        role: "Partner",
        company: "Falke en Verbaan",
        category: "Als trainer",
      },
    ],
  },

  book: {
    sectionLabel: "Het boek",
    title: "Vast",
    titleAccent: "in de VS",
    pullQuote:
      "Een ijzingwekkend, minutieus portret van een omgeving die een mens genadeloos op zichzelf terugwerpt.",
    body1:
      "In 2001 werd Victor Brands in Miami gearresteerd voor het witwassen van geld en veroordeeld tot drie jaar hechtenis in Amerikaanse federale gevangenissen. Vanuit zijn cel schreef hij wekelijks verslagen voor de Volkskrant onder het pseudoniem Jan de Graaf — eerlijk, rauw en met onnavolgbare zwarte humor.",
    body2:
      "Die columns werden het boek Vast in de VS. Het verscheen in 2005 en is tot op de dag van vandaag de meest indringende beschrijving van wat er met een mens gebeurt als hij alles verliest — en hoe hij zichzelf terugvindt.",
    orderEmail: "victor@victorbrands.nl",
    soldOutLabel: "Momenteel uitverkocht",
    soldOutNote: "Het boek is op dit moment niet leverbaar.",
    volkskrantNote:
      "Zijn columns verschenen wekelijks in de Volkskrant onder het pseudoniem Jan de Graaf. De arrestatiegetuigenis is nog steeds beschikbaar via zijn website.",
    backgroundUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_105100_8b30a23e-7945-4e65-a88a-946570579765.png",
    podcasts: [
      {
        title: "Toomler: Voor de show",
        desc: "Victor over zijn gevangenistijd en terugkeer naar het podium",
        href: "https://open.spotify.com/episode/2oW83CSG6Blt27kCViluJT",
      },
      {
        title: "Podcast: Vast in de VS",
        desc: "De volledige serie over zijn drie jaar in de Amerikaanse gevangenis",
        href: "https://open.spotify.com/episode/6imdZ93pEEMpgf6T8hUSP6",
      },
    ],
  },

  contact: {
    sectionLabel: "Contact",
    heading: "Laten we",
    headingAccent: "kennis maken",
    intro:
      "Elke samenwerking begint met een goed gesprek. Of u nu trainer, trainingsacteur of coach zoekt — Victor neemt de tijd om uw situatie te begrijpen voordat hij een voorstel maakt.",
    email: "victor@victorbrands.nl",
    // ↓ Telefoon en LinkedIn nog in te vullen. Laat leeg ("") om een nette
    //   "in te vullen"-aanduiding te tonen; vul in zodra bekend.
    phone: "", // bijv. "+31 6 12 34 56 78"
    phoneLabel: "Telefoon",
    linkedin: "", // bijv. "https://www.linkedin.com/in/victorbrands"
    linkedinLabel: "LinkedIn",
    placeholderNote: "In te vullen",
    location: "Amsterdam, Nederland",
    locationLabel: "Standplaats",
    principles: ["Veiligheid", "Interactiviteit", "Humor"],
    formLabels: {
      name: "Uw naam",
      namePlaceholder: "Voor- en achternaam",
      email: "E-mailadres",
      emailPlaceholder: "naam@bedrijf.nl",
      phone: "Telefoon (optioneel)",
      phonePlaceholder: "+31 6 …",
      message: "Bericht",
      messagePlaceholder: "Vertel kort wat u zoekt — Victor leest elk bericht persoonlijk",
      submit: "Kennismakingsgesprek aanvragen",
      sending: "Versturen…",
      privacy: "Uw gegevens worden alleen gebruikt voor dit contact.",
      error: "Er ging iets mis bij het versturen. Probeer het later opnieuw of mail rechtstreeks.",
    },
    successTitle: "Bericht ontvangen",
    successBody: "Victor neemt zo snel mogelijk contact met u op.",
  },

  footer: {
    copy: "VICTOR BRANDS · AMSTERDAM",
    tagline:
      "Trainer, trainingsacteur & teamcoach — voor managementteams, teams en organisaties bij overheid en bedrijfsleven.",
    email: "victor@victorbrands.nl",
    legalLinks: [
      { label: "Privacyverklaring", href: "/privacy" },
      { label: "Cookiebeleid", href: "/cookies" },
    ],
  },

  // ⚠️ CONCEPT — placeholderteksten. Laat de definitieve privacyverklaring en
  //    het cookiebeleid juridisch controleren voordat de site live gaat.
  legal: {
    backLabel: "Terug naar home",
    contactCta: "Contact opnemen",
    privacy: {
      slug: "privacy",
      title: "Privacyverklaring",
      updated: "Laatst bijgewerkt: in te vullen",
      disclaimer:
        "Dit is een conceptversie met placeholderteksten. Laat de definitieve privacyverklaring juridisch controleren voordat de site live gaat.",
      intro:
        "Victor Brands hecht waarde aan uw privacy. In deze verklaring leest u welke persoonsgegevens worden verwerkt, met welk doel, en welke rechten u heeft. Deze tekst is een concept en dient nog te worden afgestemd op de daadwerkelijke werkwijze.",
      sections: [
        {
          heading: "Welke gegevens worden verwerkt?",
          body: "Wanneer u het contactformulier invult, verwerken wij de gegevens die u zelf opgeeft: uw naam, e-mailadres, eventueel uw telefoonnummer en de inhoud van uw bericht. (Aanvullen met overige verwerkingen indien van toepassing.)",
        },
        {
          heading: "Met welk doel?",
          body: "Uw gegevens worden uitsluitend gebruikt om uw vraag te beantwoorden en eventueel contact met u op te nemen over een samenwerking. Wij gebruiken uw gegevens niet voor marketing zonder uw toestemming.",
        },
        {
          heading: "Bewaartermijn",
          body: "Wij bewaren uw gegevens niet langer dan nodig is voor het doel waarvoor ze zijn verzameld. (Concrete bewaartermijn in te vullen.)",
        },
        {
          heading: "Delen met derden",
          body: "Voor de afhandeling van het contactformulier maken wij gebruik van een e-mailverwerker (Resend). Gegevens worden niet verkocht aan derden. (Verwerkersovereenkomst en overige verwerkers in te vullen.)",
        },
        {
          heading: "Uw rechten",
          body: "U heeft het recht op inzage, correctie en verwijdering van uw persoonsgegevens, en u kunt bezwaar maken tegen de verwerking. Neem hiervoor contact op via het e-mailadres onderaan deze pagina.",
        },
        {
          heading: "Contact & klachten",
          body: "Vragen over deze verklaring? Mail naar victor@victorbrands.nl. U heeft daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.",
        },
      ],
    },
    cookies: {
      slug: "cookies",
      title: "Cookiebeleid",
      updated: "Laatst bijgewerkt: in te vullen",
      disclaimer:
        "Dit is een conceptversie met placeholderteksten. Controleer welke cookies en scripts de live site daadwerkelijk plaatst en stem dit beleid daarop af.",
      intro:
        "In dit cookiebeleid leest u welke cookies deze website gebruikt en waarvoor. Deze tekst is een concept en moet worden afgestemd op de cookies die de live website daadwerkelijk plaatst.",
      sections: [
        {
          heading: "Wat zijn cookies?",
          body: "Cookies zijn kleine tekstbestanden die bij een bezoek aan een website op uw apparaat worden opgeslagen. Ze worden onder andere gebruikt om een website goed te laten functioneren.",
        },
        {
          heading: "Welke cookies gebruiken wij?",
          body: "Deze website is gebouwd om zo min mogelijk gegevens te verzamelen. Op dit moment worden er geen tracking- of marketingcookies geplaatst. (Controleer en vul aan zodra er analytics of andere scripts worden toegevoegd.)",
        },
        {
          heading: "Functionele cookies",
          body: "Functionele cookies zijn noodzakelijk om de website te laten werken en vereisen geen toestemming. (In te vullen indien van toepassing.)",
        },
        {
          heading: "Analytische & marketingcookies",
          body: "Worden er in de toekomst analytische of marketingcookies geplaatst, dan vragen wij hiervoor vooraf uw toestemming. (In te vullen.)",
        },
        {
          heading: "Cookies beheren",
          body: "U kunt cookies altijd zelf beheren of verwijderen via de instellingen van uw browser.",
        },
      ],
    },
  },
};
