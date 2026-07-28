import type { Metadata } from "next";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, web design, content marketing, influencer marketing, social media, and email marketing — coordinated under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-display text-balance mt-3 max-w-3xl text-5xl leading-[0.95] text-on-dark sm:text-6xl lg:text-7xl">
              Everything a modern brand needs, minus the vendor juggling.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted">
              Six disciplines, one strategy, one calendar. Work with FRCTNL on
              a single service or the full stack.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="container-page flex flex-col gap-24">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <div
                id={service.slug}
                className="grid scroll-mt-24 gap-10 border-t border-forest-line/60 pt-10 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <span className="font-display text-3xl text-forest-line">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display mt-3 text-4xl text-on-dark sm:text-5xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-on-dark-muted">
                    {service.description}
                  </p>
                </div>

                <StaggerGroup className="grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <StaggerItem key={item}>
                      <div className="notch h-full border border-forest-line bg-forest-soft/30 p-5">
                        <p className="text-sm font-medium leading-relaxed text-on-dark">
                          {item}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-forest-line/60 bg-ink py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="notch flex flex-col items-start gap-8 border border-forest-line bg-forest-soft/30 p-10 sm:p-16 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading title="Not sure which service you need?" />
            <ButtonLink href="/contact" className="flex-none">
              Talk it through
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
