import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected FRCTNL projects across branding, web design, and marketing campaigns.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h1 className="font-display text-balance mt-3 max-w-3xl text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Fractions, made whole.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted">
              A look at recent brand, web, and campaign work — including our
              ongoing partnerships with Combat Fighting Championship, Futbol
              Fiesta, and Mazo Vibe.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-page">
          <StaggerGroup className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <StaggerItem key={project.slug}>
                <CaseStudyCard project={project} showResult />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-t border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-balance max-w-xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
            Want results like these for your brand?
          </h2>
          <ButtonLink href="/contact" className="flex-none">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
