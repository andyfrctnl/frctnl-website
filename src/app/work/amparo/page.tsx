import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Amparo Sancen",
  description:
    "How FRCTNL runs content creation and social media for roofing contractor and entrepreneur Amparo Sancen across two brands and five platforms.",
};

const scopeItems = [
  {
    name: "Content Creation",
    description:
      "Live talks, seminars, and on-camera segments captured and cut into bilingual short-form video, week after week.",
  },
  {
    name: "Social Media Management",
    description:
      "Full account management across Instagram, Facebook, YouTube, TikTok, and LinkedIn — posting, community, and growth.",
  },
  {
    name: "Amparo Negocios",
    description:
      "The business account — entrepreneurship, best practices, and the day-to-day of running a company, for a business-owner audience.",
  },
  {
    name: "Amparo en Roofing",
    description:
      "The trade account — 18 years of roofing industry expertise turned into practical tips for contractors.",
  },
];

const gallery = [
  {
    src: "/work/amparo/chicago-training-1.jpg",
    alt: "Latinos en Roofing contractor training event in Chicago",
  },
  {
    src: "/work/amparo/chicago-training-2.jpg",
    alt: "Amparo Sancen speaking on stage at the Latinos en Roofing Chicago training",
  },
];

const videos = [
  {
    src: "/work/amparo/video/delegar-es-clave.mp4",
    poster: "/work/amparo/video/delegar-es-clave-poster.jpg",
    title: "Delegar es Clave: Domina tu Negocio y Gana Tiempo",
  },
  {
    src: "/work/amparo/video/diferenciate-triplica-ingresos.mp4",
    poster: "/work/amparo/video/diferenciate-triplica-ingresos-poster.jpg",
    title: "Diferénciate y Triplica tus Ingresos en tu Negocio",
  },
  {
    src: "/work/amparo/video/rcv-vs-acv.mp4",
    poster: "/work/amparo/video/rcv-vs-acv-poster.jpg",
    title: "RCV vs. ACV: Roofing Clientes Beneficios Secretos Revelados",
  },
  {
    src: "/work/amparo/video/latinxs-in-roofing.mp4",
    poster: "/work/amparo/video/latinxs-in-roofing-poster.jpg",
    title: "Latinxs in Roofing: Empoderando a la Comunidad Latina",
  },
  {
    src: "/work/amparo/video/bad-bunny-marca-personal.mp4",
    poster: "/work/amparo/video/bad-bunny-marca-personal-poster.jpg",
    title: "Lo que Bad Bunny Puede Enseñarle a un Roofer sobre Hacer Millones",
  },
];

export default function AmparoCaseStudyPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Case study · Content & social media</Eyebrow>
            <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Amparo Sancen
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
              Amparo Sancen is a roofing contractor and entrepreneur with 18
              years in the industry. FRCTNL runs content and social media
              across two distinct brands — Amparo Negocios for business
              owners and Amparo en Roofing for contractors — keeping both
              posting everywhere her audience actually is.
            </p>
            <p className="mt-8 text-sm font-semibold text-signal">
              18 years in roofing · two brands · five platforms
            </p>
          </Reveal>

          <div className="notch relative aspect-[3/2] overflow-hidden border border-forest-line">
            <Image
              src="/work/amparo/hero.jpg"
              alt="Amparo Sancen speaking on stage"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow>Scope of work</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Two brands, one content engine.
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {scopeItems.map((item) => (
              <StaggerItem key={item.name}>
                <div className="notch h-full border border-forest-line bg-forest-soft/30 p-6">
                  <h3 className="font-display text-xl text-on-dark">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-t border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow>On-site content</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Training rooms, not just studios.
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {gallery.map((image) => (
              <StaggerItem key={image.src}>
                <div className="notch relative aspect-[4/5] overflow-hidden border border-forest-line">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-t border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow>More content</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Business tips and roofing tips, both covered.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {videos.map((video) => (
              <div key={video.src}>
                <div className="notch relative aspect-[9/16] w-full overflow-hidden border border-forest-line">
                  <video
                    controls
                    preload="none"
                    poster={video.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <p className="mt-3 text-sm font-medium text-on-dark-muted">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-balance max-w-xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Need content that works across every platform?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
