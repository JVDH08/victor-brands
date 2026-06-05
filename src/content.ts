// ─── Central content file for Victor Brands ──────────────────────────────────
// Edit this file to update all website content without touching component code.
// This structure mirrors what a CMS (like your dashboard) would expose via API.

export const siteContent = {
  meta: {
    title: "Victor Brands — Trainer, Trainingsacteur & Coach",
    description:
      "Victor Brands: ex-KLM-manager, stand-up comedian, acteur en veelgevraagd trainer voor o.a. Heineken en Rijkswaterstaat. Trainingen op maat met veiligheid, interactiviteit en humor als kernwaarden.",
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
    links: [
      { label: "Wie is Victor", href: "#over-victor" },
      { label: "Wat hij doet", href: "#diensten" },
      { label: "Werkwijze", href: "#werkwijze" },
      { label: "Aanbod", href: "#aanbod" },
      { label: "Referenties", href: "#referenties" },
      { label: "Vast in de VS", href: "#boek" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    label: "Amsterdam · Trainer, Acteur & Coach",
    name: "Victor",
    nameSuffix: "Brands",
    tagline:
      "Van KLM-manager tot stand-up comedian, van een Amerikaanse federale gevangenis tot toptrainer voor Heineken en Rijkswaterstaat. Geen gewoon verhaal — en dat is precies wat hem zo effectief maakt.",
    ctaPrimary: "Zijn verhaal",
    ctaSecondary: "Neem contact op",
    stats: [
      { number: "20+", label: "Jaar ervaring" },
      { number: "3", label: "Kernwaarden" },
      { number: "1", label: "Uniek verhaal" },
    ],
    portraitUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_113502_d1785f19-6964-465e-9c96-22d3f0a214eb.png",
    backgroundUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EOJXXOi3zIKWUH2mnlkIeXI6wM/hf_20260605_111936_fad43455-659c-4a10-ad73-5251ebcbcdc4.png",
  },

  about: {
    sectionLabel: "Wie is Victor Brands?",
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
        body: "Victor begeleidt individuen en teams om hun communicatieve en professionele vaardigheden te ontwikkelen. Zijn aanpak is direct, veilig en altijd op maat — met humor als bindmiddel en echte leerervaringen als resultaat.",
        tags: ["Communicatie", "Leiderschap", "Salesvaardigheden", "Veranderingsmanagement"],
      },
      {
        title: "Trainingsacteur",
        tagline: "Realisme dat raakt",
        body: "Als trainingsacteur simuleert Victor realistische werksituaties — van moeilijke gesprekken tot conflicten onder druk. Hij speelt, geeft feedback en maakt het ongemakkelijke bespreekbaar. Het rendement van trainingen neemt merkbaar toe.",
        tags: ["Rollenspelen", "Feedback", "Conflicthantering", "Presentatietraining"],
      },
      {
        title: "Coach & Teamcoach",
        tagline: "Dieper dan de oppervlakte",
        body: "Als coach begeleidt Victor individuen en teams bij persoonlijke en professionele vraagstukken. Met Insights Discovery, HBDI® en DISC gaat hij verder dan symptomen — hij zoekt naar drijfveren, patronen en echte doorbraken.",
        tags: ["Insights Discovery", "HBDI®", "DISC", "Teamontwikkeling"],
      },
    ],
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
    cta: "Vrijblijvend kennismaken",
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

  testimonials: {
    sectionLabel: "Referenties",
    heading: "Wat anderen",
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
    location: "Amsterdam, Nederland",
    principles: ["Veiligheid", "Interactiviteit", "Humor"],
    formLabels: {
      name: "Uw naam",
      namePlaceholder: "Voor- en achternaam",
      email: "E-mailadres",
      emailPlaceholder: "naam@bedrijf.nl",
      message: "Bericht",
      messagePlaceholder: "Vertel kort wat u zoekt — Victor leest elk bericht persoonlijk",
      submit: "Verstuur",
      sending: "Versturen…",
      privacy: "Uw gegevens worden alleen gebruikt voor dit contact.",
      error: "Er ging iets mis bij het versturen. Probeer het later opnieuw of mail rechtstreeks.",
    },
    successTitle: "Bericht ontvangen",
    successBody: "Victor neemt zo snel mogelijk contact met u op.",
  },

  footer: {
    copy: "VICTOR BRANDS · AMSTERDAM",
    email: "victor@victorbrands.nl",
  },
};
