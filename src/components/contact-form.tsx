"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, site } from "@/lib/site";

const budgets = ["Under $1k", "$1k–$3k", "$3k–$6k", "$6k+"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      service: String(data.get("service") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Company" name="company" />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-on-dark">Service</span>
          <select
            name="service"
            className="rounded-lg border border-on-dark/25 bg-transparent px-4 py-3 text-sm text-on-dark focus:border-signal focus:outline-none"
          >
            <option value="" className="bg-ink">
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name} className="bg-ink">
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-on-dark">
            Project budget
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {budgets.map((b) => (
              <label
                key={b}
                className="cursor-pointer rounded-full border border-on-dark/25 px-4 py-2 text-sm text-on-dark-muted has-[:checked]:border-signal has-[:checked]:text-signal"
              >
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  className="sr-only"
                />
                {b}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-on-dark">
            Tell us about the project
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-lg border border-on-dark/25 bg-transparent px-4 py-3 text-sm text-on-dark placeholder:text-on-dark-muted focus:border-signal focus:outline-none"
            placeholder="What are you trying to accomplish?"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-signal-hover disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-sm text-signal"
          >
            Thanks — your message is on its way to {site.email}. We&apos;ll
            get back to you within one business day.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-sm text-red-400"
          >
            Something went wrong sending your message. Please email us
            directly at {site.email}.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-on-dark">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-on-dark/25 bg-transparent px-4 py-3 text-sm text-on-dark placeholder:text-on-dark-muted focus:border-signal focus:outline-none"
      />
    </label>
  );
}
