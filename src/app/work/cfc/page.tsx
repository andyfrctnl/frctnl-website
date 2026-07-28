import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Combat Fighting Championship",
  description:
    "How FRCTNL runs branding, content, social, email, influencer marketing, and event-day coordination for Combat Fighting Championship's live MMA events in El Paso, TX.",
};

const scopeItems = [
  {
    name: "Branding",
    description:
      "Fight-card templates, event marks, and a visual system reused event after event so every CFC show feels unmistakably CFC.",
  },
  {
    name: "Design",
    description:
      "Matchup posters, fighter cards, ticket graphics, and venue signage produced on a fight-week turnaround.",
  },
  {
    name: "Content",
    description:
      "Fighter interviews, weigh-in coverage, and highlight edits captured and cut around each event.",
  },
  {
    name: "Social Media",
    description:
      "Always-on posting across the fight cycle — announcement, fight week, fight night, and recap.",
  },
  {
    name: "Email Marketing",
    description:
      "Ticket-sale campaigns and promo-code drops timed to on-sale dates and fight-week urgency.",
  },
  {
    name: "Influencer Marketing",
    description:
      "Local creator and ring-girl partnerships that extend ticket promotions past CFC's own channels.",
  },
  {
    name: "Event Coordination",
    description:
      "On-site support at the El Paso County Coliseum — from sponsor signage to real-time content capture.",
  },
];

const videos = [
  {
    src: "/work/cfc/video/commercial.mp4",
    poster: "/work/cfc/video/commercial-poster.jpg",
    title: "CFC7 Commercial",
    aspect: "aspect-video",
    span: "lg:col-span-2",
  },
  {
    src: "/work/cfc/video/santillan-highlight.mp4",
    poster: "/work/cfc/video/santillan-highlight-poster.jpg",
    title: "Fighter Highlight: Victor Santillan",
    aspect: "aspect-[9/16]",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/work/cfc/video/cfc6-recap.mp4",
    poster: "/work/cfc/video/cfc6-recap-poster.jpg",
    title: "CFC 6 Event Recap",
    aspect: "aspect-video",
    span: "lg:col-span-2",
  },
];

const gallery = [
  {
    src: "/work/cfc/countdown-10-days.jpg",
    alt: "CFC7 10 days out countdown post with fight action photo",
  },
  {
    src: "/work/cfc/alba-stats.jpg",
    alt: "Jeremy Alba fighter stat card, CFC7",
  },
  {
    src: "/work/cfc/santillan-vs-briones.jpg",
    alt: "Santillan vs Briones fight card poster",
  },
];

export default function CfcCaseStudyPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Case study · Ongoing partnership</Eyebrow>
            <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Combat Fighting Championship
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
              CFC is El Paso&apos;s home for live professional MMA at the El
              Paso County Coliseum. FRCTNL runs the full marketing stack —
              branding, design, content, social, email, influencer
              partnerships, and event-day coordination — for every show,
              now seven events deep.
            </p>
            <p className="mt-8 text-sm font-semibold text-signal">
              7 live events and counting
            </p>
          </Reveal>

          <div className="notch relative aspect-[4/5] overflow-hidden border border-forest-line">
            <Image
              src="/work/cfc/birchak-vs-roa-hero.jpg"
              alt="Birchak vs Roa fight card poster, CFC7 main event"
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
            Every discipline, run as one system.
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
        <div className="container-page">
          <Eyebrow tone="light">Fight-card design</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-light sm:text-5xl">
            Selected event graphics.
          </h2>

          <div className="notch relative mt-12 aspect-[16/9] overflow-hidden border border-cream-line">
            <Image
              src="/work/cfc/ticket-banner.jpg"
              alt="CFC7 ticket promotion banner"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <StaggerGroup className="mt-5 grid gap-5 sm:grid-cols-3">
            {gallery.map((image) => (
              <StaggerItem key={image.src}>
                <div className="notch relative aspect-[4/5] overflow-hidden border border-cream-line">
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
          <Eyebrow>On location</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            See it in motion.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {videos.map((video) => (
              <div key={video.src} className={video.span}>
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
            Want a marketing system built for your next event?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
