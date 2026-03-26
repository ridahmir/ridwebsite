import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Slight delay class for staggered animation on grid */
  index?: number;
};

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const cover = project.images[0];
  const delayClass =
    index === 0
      ? ""
      : index === 1
        ? "md:[animation-delay:80ms]"
        : "md:[animation-delay:160ms]";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-safe:animate-fade-up motion-reduce:animate-none ${delayClass}`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={`View project: ${project.title}`}
      >
        <Image
          src={cover}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          <span>{project.tool}</span>
          <span className="text-line">•</span>
          <span>{project.category}</span>
        </div>
        <h3 className="font-display text-xl text-ink">{project.title}</h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex w-fit items-center text-sm font-semibold uppercase tracking-[0.12em] text-ink underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View Work
        </Link>
      </div>
    </article>
  );
};
