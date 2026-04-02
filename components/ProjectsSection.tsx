import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { Project } from "@/data/projects";

type FooterCta =
  | { kind: "internal"; href: string; label: string }
  | { kind: "external"; href: string; label: string };

type ProjectsSectionProps = {
  projects: Project[];
  showSeeMore?: boolean;
  /** Full-width projects page: 2×2 grid and optional LinkedIn CTA */
  variant?: "default" | "showcase";
  footerCta?: FooterCta;
};

/**
 * Project grid — home preview or full /projects showcase.
 */
export const ProjectsSection = ({
  projects,
  showSeeMore = false,
  variant = "default",
  footerCta,
}: ProjectsSectionProps) => {
  const gridClass =
    variant === "showcase"
      ? "grid gap-8 md:grid-cols-2"
      : "grid gap-8 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id="projects"
      className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {variant === "showcase" ? "Featured work" : "Selected projects"}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Projects
          </h2>
        </div>

        <div className={gridClass}>
          {projects.map((project, i) => (
            <RevealOnScroll key={project.slug} delayMs={i * 90}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        {footerCta ? (
          <div className="mt-14 flex justify-center motion-safe:animate-fade-in">
            {footerCta.kind === "external" ? (
              <a
                href={footerCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition duration-200 hover:border-accent hover:bg-accent hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
              >
                {footerCta.label}
              </a>
            ) : (
              <Link
                href={footerCta.href}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition duration-200 hover:border-accent hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
              >
                {footerCta.label}
              </Link>
            )}
          </div>
        ) : null}

        {showSeeMore && !footerCta ? (
          <div className="mt-12 flex justify-center motion-safe:animate-fade-in">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition duration-200 hover:border-accent hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              See More Projects
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};
