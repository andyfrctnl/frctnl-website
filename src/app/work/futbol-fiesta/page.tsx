import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Futbol Fiesta",
  description:
    "How FRCTNL built the brand, ran bilingual match-day content, secured sponsors, and produced El Paso's biggest World Cup watch party.",
};

const scopeItems = [
  {
    name: "Branding",
    description:
      "A colorful crest-style mark and bilingual visual system built to travel across game-day posts, sponsor materials, and on-site signage.",
  },
  {
    name: "Design",
    description:
      "Match-preview templates for every group-stage game, sponsor welcome graphics, and wayfinding for the flagship event.",
  },
  {
    name: "Content",
    description:
      "Bilingual match-day content — predictions, fan interviews, and game-of-the-week previews — produced throughout the tournament.",
  },
  {
    name: "Social Media",
    description:
      "Daily match-day posting in English and Spanish, timed to kickoffs through the group stage and knockout rounds.",
  },
  {
    name: "Sponsor Activation",
    description:
      "Recruited and onboarded 8 local partners, from a credit union to restaurants to a county government office.",
  },
  {
    name: "Event Coordination",
    description:
      "Produced the 3-day flagship watch party at the El Paso County Coliseum — 30x16 screen, mechanical bull, giant foosball, giveaways, food vendors, and a full bar.",
  },
];

const gallery = [
  {
    src: "/work/futbol-fiesta/mex-vs-kor.jpg",
    alt: "Mexico vs South Korea match preview post",
  },
  {
    src: "/work/futbol-fiesta/usa-vs-aus.jpg",
    alt: "USA vs Australia match preview post",
  },
  {
    src: "/work/futbol-fiesta/ger-vs-civ.jpg",
    alt: "Germany vs Ivory Coast match preview post",
  },
];

const sponsors = [
  { src: "/work/futbol-fiesta/sponsors/gecu.jpg", name: "GECU" },
  { src: "/work/futbol-fiesta/sponsors/cfc.jpg", name: "CFC" },
  {
    src: "/work/futbol-fiesta/sponsors/mykonos.jpg",
    name: "Mykonos Mediterranean Steakhouse",
  },
  { src: "/work/futbol-fiesta/sponsors/sushiitto.jpg", name: "Sushiitto" },
  {
    src: "/work/futbol-fiesta/sponsors/best-deal.jpg",
    name: "Best Deal Auto Group",
  },
  { src: "/work/futbol-fiesta/sponsors/melting-pot.jpg", name: "Melting Pot" },
  {
    src: "/work/futbol-fiesta/sponsors/office-new-americans.jpg",
    name: "Office of New Americans",
  },
  { src: "/work/futbol-fiesta/sponsors/nebula.jpg", name: "Nebula Smart Home" },
];

const videos = [
  {
    src: "/work/futbol-fiesta/video/fra-vs-nor.mp4",
    poster: "/work/futbol-fiesta/video/fra-vs-nor-poster.jpg",
    title: "Game of the Week: France vs Norway",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/work/futbol-fiesta/video/predictions.mp4",
    poster: "/work/futbol-fiesta/video/predictions-poster.jpg",
    title: "Fan Predictions (Spanish)",
    aspect: "aspect-[9/16]",
  },
  {
    src: "/work/futbol-fiesta/video/fitfam-interview.mp4",
    poster: "/work/futbol-fiesta/video/fitfam-interview-poster.jpg",
    title: "Fan Interviews on Location",
    aspect: "aspect-[9/16]",
  },
];

export default function FutbolFiestaCaseStudyPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Case study · Flagship event</Eyebrow>
            <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Futbol Fiesta
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
              El Paso&apos;s biggest World Cup watch party. FRCTNL built the
              brand, ran a season-long bilingual content campaign, secured 8
              local sponsors, and produced the 3-day flagship event at the El
              Paso County Coliseum — semifinal watch parties on July 14 and
              15, and the final on July 19.
            </p>
            <p className="mt-8 text-sm font-semibold text-signal">
              3-day World Cup finale · 8 sponsor partners
            </p>
          </Reveal>

          <div className="notch relative aspect-[4/5] overflow-hidden border border-forest-line">
            <Image
              src="/work/futbol-fiesta/hero.jpg"
              alt="Futbol Fiesta match preview content"
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
            From kickoff to final whistle.
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <Eyebrow tone="light">Campaign teaser</Eyebrow>
            <h2 className="font-display text-balance mt-3 text-4xl leading-[0.95] text-on-light sm:text-5xl">
              Solo cada 4 años.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-on-light-muted">
              A hype video built to build anticipation ahead of the flagship
              event — timed to the exact dates fans needed to know: July 14,
              15, and 19.
            </p>
          </Reveal>

          <div className="notch relative aspect-[4/5] overflow-hidden border border-cream-line">
            <video
              controls
              preload="none"
              poster="/work/futbol-fiesta/video/4-anos-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="/work/futbol-fiesta/video/4-anos.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow>Match-day content</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            A preview for every game.
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3">
            {gallery.map((image) => (
              <StaggerItem key={image.src}>
                <div className="notch relative aspect-[4/5] overflow-hidden border border-forest-line">
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

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow tone="light">Sponsors</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-light sm:text-5xl">
            8 local partners, onboarded and activated.
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <StaggerItem key={sponsor.src}>
                <div className="notch relative aspect-[4/5] overflow-hidden border border-cream-line">
                  <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} sponsor welcome graphic`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
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
          <Eyebrow>On location</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            See it in motion.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {videos.map((video) => (
              <div key={video.src}>
                <div
                  className={`notch relative w-full overflow-hidden border border-forest-line ${video.aspect}`}
                >
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
            Want an event built to fill the room?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
