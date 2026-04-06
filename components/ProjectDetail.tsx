import Image from "next/image";
import Link from "next/link";
import { shouldUnoptimizeImageSrc } from "@/lib/imageSrc";
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
            Project
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:60ms] md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:100ms] md:text-base">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2 motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-paper px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

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
                    Open live site
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
            Key contributions
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
            Outcomes and highlights
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
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink"
              >
                {t}
              </span>
            ))}
          </div>
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
          <div className="mt-4 rounded-lg border border-line bg-white p-6 text-sm leading-relaxed text-muted shadow-sm md:text-base">
            {project.roleSummary}
          </div>
        </section>

        <section className="motion-safe:animate-fade-up">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Gallery
              </p>
              <h2 className="mt-2 font-display text-xl text-ink md:text-2xl">
                Screens and flows
              </h2>
            </div>
            <p className="hidden text-sm text-muted md:block">
              Click an image to view full size.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.images.map((src, i) => {
              const unopt = shouldUnoptimizeImageSrc(src);
              const isHero = i === 0;
              const frameClass = isHero
                ? "md:col-span-2 aspect-[16/9]"
                : "aspect-[4/3]";

              return (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block overflow-hidden rounded-xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${frameClass}`}
                  aria-label={`Open ${project.title} screenshot ${i + 1} in a new tab`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                    sizes={
                      isHero
                        ? "(max-width:768px) 100vw, 720px"
                        : "(max-width:768px) 100vw, 360px"
                    }
                    loading={i <= 1 ? "eager" : "lazy"}
                    quality={unopt ? undefined : 80}
                    unoptimized={unopt}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-0" />
                </a>
              );
            })}
          </div>
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
            href="/projects"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-ink underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </article>
  );
};
