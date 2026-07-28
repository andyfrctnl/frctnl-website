import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./ui";
import type { CaseStudy } from "@/lib/site";

function monogram(client: string) {
  return client
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);
}

export function CaseStudyCard({
  project,
  showResult = false,
}: {
  project: CaseStudy;
  showResult?: boolean;
}) {
  const wrapperClass =
    "group flex h-full flex-col overflow-hidden border border-forest-line bg-forest-soft/20 transition-colors hover:border-signal";

  const content = (
    <>
      <div className="notch relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-forest-soft/50 text-forest-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.client} — ${project.category}`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="font-display text-5xl">
            {monogram(project.client)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Eyebrow>{project.category}</Eyebrow>
        <h3 className="font-display mt-2 text-2xl text-on-dark">
          {project.client}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-on-dark-muted">
          {project.summary}
        </p>
        {showResult && (
          <p className="mt-4 text-sm font-semibold text-signal">
            {project.result}
          </p>
        )}
        {project.href && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal opacity-0 transition-opacity group-hover:opacity-100">
            View case study →
          </span>
        )}
      </div>
    </>
  );

  if (project.href) {
    return (
      <Link href={project.href} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
