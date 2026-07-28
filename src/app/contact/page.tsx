import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}, a marketing agency in El Paso, TX.`,
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-balance mt-3 text-5xl leading-[0.95] text-on-dark sm:text-6xl">
            Let&apos;s start a project.
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-on-dark-muted">
            Tell us what you&apos;re working on and we&apos;ll get back to
            you within one business day.
          </p>

          <dl className="mt-10 flex flex-col gap-6 border-t border-forest-line/60 pt-8 text-sm">
            <div>
              <dt className="font-semibold text-on-dark-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-on-dark transition-colors hover:text-signal"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-on-dark-muted">Studio</dt>
              <dd className="mt-1 text-on-dark">
                {site.address.line1}
                <br />
                {site.address.line2}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="notch border border-forest-line bg-forest-soft/20 p-6 sm:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
