import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "El Contador del Sombrero",
  description:
    "How FRCTNL runs email marketing, content, and branding for tax strategist Marcos Ramírez — El Contador del Sombrero.",
};

const scopeItems = [
  {
    name: "Email Marketing",
    description:
      "Segmented campaigns that turn dense tax strategy into clear, must-open guidance for business owners, investors, and entrepreneurs.",
  },
  {
    name: "Content Creation",
    description:
      "Live seminars and speaking engagements repackaged into bilingual short-form video, captioned and built for the feed.",
  },
  {
    name: "Branding",
    description:
      "The black-and-white cowboy mark and signature hat, kept consistent everywhere from social profiles to seminar decks.",
  },
  {
    name: "Event Registration",
    description:
      "Sign-up and check-in handled for tax strategy seminars as Marcos tours cities across the country.",
  },
  {
    name: "Social Media",
    description:
      "Full account management across Instagram, Facebook, TikTok, and YouTube — posting, community, and growth.",
  },
];

const gallery = [
  {
    src: "/work/el-contador-del-sombrero/phoenix-faq-promo.jpg",
    alt: "Preguntas Frecuentes para el Evento — Phoenix, AZ promo graphic",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/work/el-contador-del-sombrero/tour-dates-promo.jpg",
    alt: "Donde va estar — tour dates for Chicago, El Paso, and Houston",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/work/el-contador-del-sombrero/houston-summit-promo.jpg",
    alt: "Cumbre Fiscal para Empresarios Houston event promo graphic",
    aspect: "aspect-[4/5]",
  },
];

const videos = [
  {
    src: "/work/el-contador-del-sombrero/video/renta-oficina.mp4",
    poster: "/work/el-contador-del-sombrero/video/renta-oficina-poster.jpg",
    title: "Renta tu Oficina a tu Propia Empresa y Ahorra en Impuestos",
  },
  {
    src: "/work/el-contador-del-sombrero/video/gym-food-reimbursements.mp4",
    poster:
      "/work/el-contador-del-sombrero/video/gym-food-reimbursements-poster.jpg",
    title: "Amazon's Secret: Gym & Healthy Food Reimbursements Revealed",
  },
  {
    src: "/work/el-contador-del-sombrero/video/deduce-gastos.mp4",
    poster: "/work/el-contador-del-sombrero/video/deduce-gastos-poster.jpg",
    title: "Deduce tus Gastos: Protege tu Negocio de Auditorías",
  },
];

export default function ElContadorDelSombreroCaseStudyPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Case study · Tax strategy & business education</Eyebrow>
            <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              El Contador del Sombrero
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
              El Contador del Sombrero is Marcos Ramírez&apos;s tax strategy
              practice for the Latino business community — helping business
              owners, real estate investors, and entrepreneurs navigate a
              complex tax code with confidence. FRCTNL runs the email
              marketing and content that turns elite fiscal engineering into
              a brand people trust.
            </p>
            <p className="mt-8 text-sm font-semibold text-signal">
              Ingeniería fiscal de élite para empresarios y familias de alto
              impacto
            </p>
          </Reveal>

          <div className="notch relative aspect-[3/2] overflow-hidden border border-forest-line">
            <Image
              src="/work/el-contador-del-sombrero/hero.jpg"
              alt="El Contador del Sombrero logo"
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
            Tax strategy people actually read.
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
          <Eyebrow>Event promo</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Announcing the next stop.
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3">
            {gallery.map((image) => (
              <StaggerItem key={image.src}>
                <div
                  className={`notch relative overflow-hidden border border-forest-line ${image.aspect}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
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
            Tax strategy, made for the feed.
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
            Need a brand that makes people trust the numbers?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
