import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

type ProjectsSectionProps = {
  /** Projects to render (home passes 3; /work passes all) */
  projects: Project[];
  /** When true, show “See More Projects” CTA under the grid */
  showSeeMore?: boolean;
};

/**
 * Project grid — reusable for home preview and work listing styling if needed.
 */
export const ProjectsSection = ({
  projects,
  showSeeMore = false,
}: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
            />
          ))}
        </div>

        {showSeeMore ? (
          <div className="mt-12 flex justify-center motion-safe:animate-fade-in">
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-accent hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See More Projects
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};
