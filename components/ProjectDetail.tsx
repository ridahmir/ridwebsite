import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

/**
 * Case-study layout modeled after the Webflow Beccas List template.
 */
export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted motion-safe:animate-fade-up">
            works
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:60ms] md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:100ms] md:text-base">
            {project.description}
          </p>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 text-sm motion-safe:animate-fade-up motion-safe:[animation-delay:140ms] sm:grid-cols-3">
            {project.client ? (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Client
                </dt>
                <dd className="mt-2 text-ink">{project.client}</dd>
              </div>
            ) : null}
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Tool
              </dt>
              <dd className="mt-2 text-ink">{project.tool}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Visit here
              </dt>
              <dd className="mt-2">
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="text-muted">Available on request</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-16 px-5 py-16 md:px-8 md:py-20">
        <section className="motion-safe:animate-fade-up">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Features of App
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink md:text-base">
            {project.featureList.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="motion-safe:animate-fade-up">
          <p className="text-sm leading-relaxed text-muted md:text-base">
            {project.longDescription}
          </p>
        </section>

        <section className="motion-safe:animate-fade-up">
          <h2 className="font-display text-xl text-ink md:text-2xl">
            Key Features
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted md:text-base">
            {project.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="motion-safe:animate-fade-up">
          <h2 className="font-display text-xl text-ink md:text-2xl">
            Technologies Used
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted md:text-base">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="motion-safe:animate-fade-up">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            My Role
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            {project.roleSummary}
          </p>
        </section>

        <section className="space-y-6 motion-safe:animate-fade-up">
          {project.images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-video overflow-hidden rounded-lg border border-line bg-line/40"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 720px"
              />
            </div>
          ))}
        </section>

        {project.externalUrl ? (
          <p className="text-center text-sm text-muted motion-safe:animate-fade-up">
            Visit the live website:{" "}
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.title}
            </a>
          </p>
        ) : null}

        <div className="flex justify-center pt-4 motion-safe:animate-fade-up">
          <Link
            href="/work"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-ink underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </article>
  );
};
