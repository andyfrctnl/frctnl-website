import Link from "next/link";
import { CaseStudyCard } from "@/components/case-study-card";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { caseStudies, process, services, testimonial } from "@/lib/site";

const featuredSlugs = ["cfc", "el-contador-del-sombrero", "amparo"];
const featuredCaseStudies = featuredSlugs.map(
  (slug) => caseStudies.find((project) => project.slug === slug)!
);

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee items={services.map((s) => s.name)} />

      {/* Services */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Six disciplines. One coordinated team."
            description="No hand-offs between five different vendors. Every service below works from the same brand, strategy, and calendar."
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <Link
                  href="/services"
                  className="group notch flex h-full flex-col justify-between border border-forest-line bg-forest-soft/30 p-7 transition-colors hover:border-signal hover:bg-forest-soft/60"
                >
                  <div>
                    <span className="font-display text-3xl text-forest-line group-hover:text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-4 text-2xl text-on-dark">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                      {service.short}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper py-24 text-on-light sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A repeatable process, not a guessing game."
            tone="light"
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <Reveal key={item.step}>
                <div className="border-t-2 border-forest pt-5">
                  <span className="font-display text-4xl text-forest">
                    {item.step}
                  </span>
                  <h3 className="font-display mt-3 text-xl text-on-light">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-light-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span
              className="font-display block text-6xl leading-none text-signal sm:text-7xl"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-display text-balance -mt-4 text-3xl leading-[1.15] text-on-dark sm:text-4xl">
              {testimonial.quote}
            </p>
            <p className="mt-8 text-sm font-semibold text-on-dark">
              {testimonial.name}
              <span className="font-normal text-on-dark-muted">
                {" "}
                · {testimonial.title}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Work teaser */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Selected work" title="Recent projects." />
            <ButtonLink href="/work" variant="outline" className="self-start">
              View all work
            </ButtonLink>
          </div>

          <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((project) => (
              <StaggerItem key={project.slug}>
                <CaseStudyCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-forest-line/60 bg-ink py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="notch flex flex-col items-start gap-8 border border-forest-line bg-forest-soft/30 p-10 sm:p-16 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="font-display text-balance max-w-xl text-4xl leading-[0.95] text-on-dark sm:text-5xl">
              Ready to complete the picture?
            </h2>
            <ButtonLink href="/contact" className="flex-none">
              Start a project
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
