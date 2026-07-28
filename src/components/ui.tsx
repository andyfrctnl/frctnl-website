import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-signal" : "text-forest"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 ${tone === "dark" ? "bg-signal" : "bg-forest"}`}
      />
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200";
  const variants: Record<string, string> = {
    primary: "bg-signal text-ink hover:bg-signal-hover",
    outline: "border border-on-dark/25 text-on-dark hover:border-signal hover:text-signal",
    ghost: "text-on-dark hover:text-signal",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-display text-balance mt-3 text-4xl leading-[0.95] sm:text-5xl ${
          tone === "dark" ? "text-on-dark" : "text-on-light"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-on-dark-muted" : "text-on-light-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
