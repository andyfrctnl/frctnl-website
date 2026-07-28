import Link from "next/link";
import { Wordmark } from "./logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-forest-line/60 bg-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-on-dark-muted transition-colors hover:text-signal"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-on-dark-muted transition-colors hover:text-signal"
            >
              TikTok
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-on-dark-muted transition-colors hover:text-signal"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-on-dark-muted">
            Site
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-on-dark transition-colors hover:text-signal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-on-dark-muted">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-on-dark">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-signal"
              >
                {site.email}
              </a>
            </li>
            <li className="text-on-dark-muted">
              {site.address.line1}
              <br />
              {site.address.line2}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-line/60">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-on-dark-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>El Paso, Texas</p>
        </div>
      </div>
    </footer>
  );
}
