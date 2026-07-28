"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "./ui";
import { site } from "@/lib/site";

const shapes = [
  { className: "top-[8%] left-[6%] h-24 w-24 sm:h-32 sm:w-32", delay: 0, duration: 7 },
  { className: "top-[58%] left-[2%] h-16 w-16 sm:h-20 sm:w-20", delay: 0.6, duration: 9 },
  { className: "top-[14%] right-[8%] h-20 w-20 sm:h-28 sm:w-28", delay: 0.3, duration: 8 },
  { className: "top-[62%] right-[4%] h-28 w-28 sm:h-36 sm:w-36", delay: 0.9, duration: 10 },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-forest-line/60">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(22,163,74,0.16), transparent)",
        }}
      />

      {!shouldReduceMotion &&
        shapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`notch absolute border border-forest-line bg-forest-soft/40 ${shape.className}`}
            aria-hidden="true"
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="container-page relative py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-line bg-forest-soft/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            Marketing agency · El Paso, TX
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-balance mt-6 max-w-4xl text-6xl leading-[0.92] text-on-dark sm:text-7xl lg:text-8xl"
        >
          We&apos;re the missing fraction.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted sm:text-xl"
        >
          {site.name} is a full-service marketing agency built for companies
          that are almost there. Branding, web design, and campaigns that
          complete the picture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            See our work
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
