import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Activation King",
  description:
    "How FRCTNL runs social media and content creation for sponsorships and partnerships expert Marco Vallejo Jr. — the Activation King.",
};

const scopeItems = [
  {
    name: "Content Creation",
    description:
      "Video, photo, and graphics produced from real activations and events — not stock footage.",
  },
  {
    name: "Social Media Management",
    description:
      "Full account management across Instagram, LinkedIn, Facebook, TikTok, and YouTube.",
  },
  {
    name: "Personal Branding",
    description:
      "Turning sponsorship and partnership expertise into a recognizable, quotable personal brand.",
  },
  {
    name: "Sponsorship Storytelling",
    description:
      "Real activations — jerseys, booths, events — captured and explained for an audience that wants to learn the game.",
  },
];

const videos = [
  {
    src: "/work/activation-king/video/sponsorship-advice.mp4",
    poster: "/work/activation-king/video/sponsorship-advice-poster.jpg",
    title: "Why Exposure Is the Worst Reason to Sponsor",
  },
  {
    src: "/work/activation-king/video/sponsor-jersey.mp4",
    poster: "/work/activation-king/video/sponsor-jersey-poster.jpg",
    title: "Out of Activation Ideas?",
  },
  {
    src: "/work/activation-king/video/vista-market.mp4",
    poster: "/work/activation-king/video/vista-market-poster.jpg",
    title: "On Location: Game Day Sponsorship Placement",
  },
];

export default function ActivationKingCaseStudyPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Case study · Personal brand & content</Eyebrow>
            <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Activation King
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">
              Marco Vallejo Jr. — the Activation King — is a sponsorships and
              partnerships expert building his personal brand. FRCTNL runs
              the social media and content creation that turns real
              activations into a following.
            </p>
            <p className="mt-8 text-sm font-semibold text-signal">
              Sponsorship expertise, built into a personal brand
            </p>
          </Reveal>

          <div className="notch relative aspect-[3/2] overflow-hidden border border-forest-line">
            <Image
              src="/work/activation-king/hero.jpg"
              alt="Marco Vallejo Jr., the Activation King"
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
            Sponsorship expertise, made shareable.
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
          <Eyebrow>More content</Eyebrow>
          <h2 className="font-display text-balance mt-3 max-w-2xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            The activation playbook, on camera.
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
            Ready to build a personal brand people trust?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
