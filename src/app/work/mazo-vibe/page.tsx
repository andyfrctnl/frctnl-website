import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mazo Vibe",
  description:
    "How FRCTNL handles branding, content creation, and social media for El Paso DJ duo Mazo Vibe.",
};

const scopeItems = [
  {
    name: "Branding",
    description:
      "A visual identity built to hold up on stickers, merch, and event signage as much as it does on a phone screen.",
  },
  {
    name: "Content Creation",
    description:
      "On-site photo and video capture at live sets — equipment close-ups, crowd energy, and behind-the-decks moments.",
  },
  {
    name: "Social Media",
    description:
      "Event promo graphics, announcement posts, and schedule cards produced on a show-week turnaround.",
  },
  {
    name: "Event Appearances",
    description:
      "Booked across FRCTNL's own event network — Morning Brew, CFC, and Futbol Fiesta — alongside outside bookings.",
  },
];

const gallery = [
  {
    src: "/work/mazo-vibe/mixer-detail.jpg",
    alt: "Close-up of Mazo Vibe on Pioneer DJ equipment",
  },
  {
    src: "/work/mazo-vibe/merch-strip.jpg",
    alt: "Mazo Vibe stickers and CFC photo booth strip from a live event",
  },
];

const videos = [
  {
    src: "/work/mazo-vibe/video/morning-brew-announcement.mp4",
    poster: "/work/mazo-vibe/video/morning-brew-announcement-poster.jpg",
    title: "Morning Brew — Announcement",
  },
  {
    src: "/work/mazo-vibe/video/morning-brew-schedule.mp4",
    poster: "/work/mazo-vibe/video/morning-brew-schedule-poster.jpg",
    title: "Morning Brew — Schedule",
  },
];

const alsoSeenAt = [
  {
    name: "Combat Fighting Championship",
    href: "/work/cfc",
  },
  {
    name: "Futbol Fiesta",
    href: "/work/futbol-fiesta",
  },
];

export default function MazoVibeCaseStudyPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Case study · Resident DJ duo</Eyebrow>
            <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Mazo Vibe
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
              Mazo Vibe is an El Paso DJ duo playing everywhere from sunrise
              run clubs to arena-sized fight cards. FRCTNL handles the
              branding, on-site content, and social presence that keeps them
              booked.
            </p>
            <p className="mt-8 text-sm font-semibold text-signal">
              Support sets for Avicii, Afrojack, Steve Aoki, Morgan Page,
              Laidback Luke & Galantis
            </p>
          </Reveal>

          <div className="notch relative aspect-[3/2] overflow-hidden border border-forest-line">
            <Image
              src="/work/mazo-vibe/hero.jpg"
              alt="Mazo Vibe performing live at an outdoor event"
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
            The brand behind the booth.
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

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow tone="light">Also seen at</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-light sm:text-5xl">
            Part of the FRCTNL client network.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-light-muted">
            Mazo Vibe plays sets across FRCTNL&apos;s own event clients —
            proof the roster works together, not just alongside each other.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {alsoSeenAt.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group notch flex items-center justify-between border border-cream-line bg-white/40 p-6 transition-colors hover:border-forest"
              >
                <span className="font-display text-xl text-on-light">
                  {item.name}
                </span>
                <span className="text-sm font-semibold text-forest opacity-0 transition-opacity group-hover:opacity-100">
                  View case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Eyebrow>On-site content</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Captured live, not staged.
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
          <Eyebrow>Event promo</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            See it in motion.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {videos.map((video) => (
              <div key={video.src}>
                <div className="notch relative aspect-[4/5] w-full overflow-hidden border border-forest-line">
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
            Need a brand that keeps up with your bookings?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
