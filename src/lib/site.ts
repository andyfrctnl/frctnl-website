export const site = {
  name: "FRCTNL",
  tagline: "The missing fraction that makes your vision whole.",
  description:
    "FRCTNL is a full-service marketing agency in El Paso, TX, building brands, sites, and campaigns for companies ready to complete the picture.",
  url: "https://www.frctnlusa.com",
  email: "info@frctnlusa.com",
  googleAnalyticsId: "G-1VG0D786FL",
  address: {
    line1: "5115 Montana Ave",
    line2: "El Paso, TX 79903",
  },
  social: {
    instagram: "https://instagram.com/frctnl",
    tiktok: "https://tiktok.com/@frctnlmarketing",
    facebook: "https://www.facebook.com/profile.php?id=61591807575148",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "branding",
    name: "Branding",
    short: "Identity systems built to hold up under real use.",
    description:
      "We build the visual and verbal foundation your company runs on — name, mark, palette, type, voice — engineered so it still looks intentional on a billboard, a business card, and a mobile screen.",
    deliverables: [
      "Brand strategy & positioning",
      "Logo & visual identity system",
      "Color, type & brand guidelines",
      "Messaging & voice framework",
    ],
  },
  {
    slug: "web-design",
    name: "Web Design",
    short: "Sites that load fast and convert faster.",
    description:
      "Custom-designed, hand-built websites — not templates. Every site is engineered for speed, accessibility, and conversion, with motion that earns its place instead of getting in the way.",
    deliverables: [
      "UX strategy & wireframes",
      "Custom responsive design",
      "Performance-first development",
      "CMS & analytics setup",
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    short: "Content that compounds instead of disappearing.",
    description:
      "Editorial calendars, long-form content, and SEO strategy built to keep earning attention months after publish, not just on the day it goes live.",
    deliverables: [
      "Content strategy & calendars",
      "SEO & keyword research",
      "Blog & long-form writing",
      "Performance reporting",
    ],
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    short: "Real audiences, matched to your actual customer.",
    description:
      "We source, vet, and manage creator partnerships regionally and nationally — with contracts, briefs, and performance tracking handled end to end.",
    deliverables: [
      "Creator sourcing & vetting",
      "Campaign briefs & contracts",
      "Content review & compliance",
      "ROI & engagement reporting",
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    short: "Consistent presence without the daily grind.",
    description:
      "Strategy, content production, community management, and paid social — run as a system so your brand shows up the same way every time, everywhere.",
    deliverables: [
      "Channel strategy & content pillars",
      "Content production & scheduling",
      "Community management",
      "Paid social campaigns",
    ],
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    short: "Your highest-ROI channel, actually maintained.",
    description:
      "Lifecycle flows, campaign design, and list strategy built inside the platform you already use — designed to feel like a benefit, not spam.",
    deliverables: [
      "Lifecycle & automation flows",
      "Campaign design & copy",
      "List growth & segmentation",
      "Deliverability & testing",
    ],
  },
];

export const testimonial = {
  quote:
    "Frctnl was built on the idea that every business is missing something. We just help them find that missing piece.",
  name: "John Rivas",
  title: "Marketing Director/Partner",
};

export const process = [
  {
    step: "01",
    name: "Diagnose",
    description:
      "We audit what's actually working, what's not, and where the fraction is missing — before we touch a single deliverable.",
  },
  {
    step: "02",
    name: "Design",
    description:
      "Strategy becomes brand, site, and campaign — built around your audience, not a template.",
  },
  {
    step: "03",
    name: "Deploy",
    description:
      "Launch across the channels that matter, with tracking in place from day one.",
  },
  {
    step: "04",
    name: "Compound",
    description:
      "Monthly reporting and iteration so results build on themselves instead of resetting every quarter.",
  },
];

// Remaining entries below are placeholder projects — replace with real case
// studies before launch. CFC is a real client with a linked case study page.
export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  summary: string;
  result: string;
  image?: string;
  href?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cfc",
    client: "Combat Fighting Championship",
    category: "Branding + Social + Content + Events",
    summary:
      "Ongoing full-service partner for CFC's live MMA events at the El Paso County Coliseum — fight card design, social content, email campaigns, influencer partnerships, and on-site event coordination.",
    result: "7 live events and counting",
    image: "/work/cfc/logo-card.jpg",
    href: "/work/cfc",
  },
  {
    slug: "amparo",
    client: "Amparo Sancen",
    category: "Content Creation + Social Media",
    summary:
      "Roofing contractor and entrepreneur with 18 years in the industry. FRCTNL runs content and social media across two brands — Amparo Negocios for business owners and Amparo en Roofing for contractors — on Instagram, Facebook, YouTube, TikTok, and LinkedIn.",
    result: "Two brands, five platforms, one content engine",
    image: "/work/amparo/headshot-card.jpg",
    href: "/work/amparo",
  },
  {
    slug: "el-contador-del-sombrero",
    client: "El Contador del Sombrero",
    category: "Email Marketing + Content + Branding",
    summary:
      "Elite tax strategy for the Latino business community, led by Marcos Ramírez. FRCTNL runs the email marketing and content that turns live seminars and complex fiscal engineering into a brand business owners trust — and recognize.",
    result: "Trusted tax strategist for entrepreneurs & investors nationwide",
    image: "/work/el-contador-del-sombrero/logo-card.jpg",
    href: "/work/el-contador-del-sombrero",
  },
  {
    slug: "mazo-vibe",
    client: "Mazo Vibe",
    category: "Branding + Content + Social Media",
    summary:
      "El Paso DJ duo playing everywhere from Morning Brew to CFC and Futbol Fiesta, with support sets for Avicii, Afrojack, Steve Aoki, Morgan Page, Laidback Luke, and Galantis — branded, photographed, and kept posting by FRCTNL.",
    result: "Support sets for Avicii, Afrojack, Steve Aoki & more",
    image: "/work/mazo-vibe/hero.jpg",
    href: "/work/mazo-vibe",
  },
  {
    slug: "futbol-fiesta",
    client: "Futbol Fiesta",
    category: "Events + Branding + Content + Social",
    summary:
      "El Paso's biggest World Cup watch party — a 3-day flagship event with a 30x16 screen, a mechanical bull, giant foosball, food vendors, and a full bar, backed by a season-long bilingual content campaign and 8 local sponsor partnerships.",
    result: "3-day World Cup finale · 8 sponsor partners",
    image: "/work/futbol-fiesta/logo-card.jpg",
    href: "/work/futbol-fiesta",
  },
  {
    slug: "activation-king",
    client: "Activation King",
    category: "Content Creation + Social Media",
    summary:
      "Marco Vallejo Jr. — the Activation King — is a sponsorships and partnerships expert building his personal brand. FRCTNL runs the social media and content creation that turns real activations into a following, across Instagram, LinkedIn, Facebook, TikTok, and YouTube.",
    result: "Sponsorship expertise, built into a personal brand",
    image: "/work/activation-king/card.jpg",
    href: "/work/activation-king",
  },
];
