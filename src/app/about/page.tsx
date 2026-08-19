import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "FRCTNL is a marketing agency based in El Paso, TX — the missing fraction that makes your vision whole.",
};

const values = [
  {
    name: "Fractional, not partial",
    description:
      "We take on the whole picture — strategy, design, and execution — instead of handing you a fragment and calling it done.",
  },
  {
    name: "Built on the border",
    description:
      "El Paso shaped how we work: bilingual, bicultural, and built for brands that serve both sides of the market.",
  },
  {
    name: "Numbers over vibes",
    description:
      "Every campaign ships with tracking attached. If we can’t measure it, we don’t ship it.",
  },
  {
    name: "Small team, senior work",
    description:
      "No account layers between you and the people doing the work. You talk to whoever is actually building it.",
  },
];

type TeamMember = {
  name?: string;
  role: string;
  image?: string;
};

const team: TeamMember[] = [
  {
    name: "John Rivas",
    role: "Marketing Director/Partner",
    image: "/team/john-rivas.jpg",
  },
  {
    name: "Roland Rios",
    role: "Business Strategy/Partner",
    image: "/team/roland-rios.jpg",
  },
  {
    name: "Alfredo Garcia",
    role: "Creative Director",
    image: "/team/alfredo-garcia.jpg",
  },
  {
    name: "Andrea Moran",
    role: "Business Development",
    image: "/team/andrea-moran.jpg",
  },
  {
    name: "Brianna Martinez",
    role: "Social Media Coordinator",
    image: "/team/brianna-rivas.jpg",
  },
  {
    name: "Andrea Gonzalez",
    role: "Social Media and Communications Manager",
    image: "/team/andrea-gonzalez.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Eyebrow>About FRCTNL</Eyebrow>
            <h1 className="font-display text-balance mt-3 max-w-3xl text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Every brand is missing a fraction. We find it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted">
              FRCTNL started in El Paso with a simple observation: most
              businesses don&apos;t need more marketing, they need the right
              piece — the one that makes everything else finally click into
              place. We build that piece, whether it&apos;s a brand identity,
              a website, or the campaign that gets you in front of the
              customers who&apos;ve been looking for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 text-on-light sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we think"
            title="What we optimize for."
            tone="light"
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <StaggerItem key={value.name}>
                <div className="h-full border-t-2 border-forest pt-5">
                  <h3 className="font-display text-2xl text-on-light">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-light-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="The team" title="Small crew. Senior hands." />

          <div className="notch relative mt-10 aspect-[3/2] overflow-hidden border border-forest-line sm:aspect-[16/9]">
            <Image
              src="/team/team-photo.jpg"
              alt="The FRCTNL team"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name ?? member.role}>
                <div className="notch border border-forest-line bg-forest-soft/30 p-6">
                  <div className="notch-sm relative aspect-square w-full overflow-hidden bg-forest-soft/60">
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name ?? member.role}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  {member.name ? (
                    <>
                      <p className="font-display mt-4 text-lg text-on-dark">
                        {member.name}
                      </p>
                      <p className="text-sm text-on-dark-muted">
                        {member.role}
                      </p>
                    </>
                  ) : (
                    <p className="font-display mt-4 text-lg text-on-dark">
                      {member.role}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-t border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-balance max-w-xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Let&apos;s find your missing fraction.
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Get in touch
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
