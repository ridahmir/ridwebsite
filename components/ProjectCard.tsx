import Image from "next/image";
import Link from "next/link";
import { shouldUnoptimizeImageSrc } from "@/lib/imageSrc";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const cover = project.images[0] ?? "/projects/prosafenet-hero.png";
  const unoptimized = shouldUnoptimizeImageSrc(cover);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-line/80 hover:shadow-xl motion-reduce:hover:translate-y-0">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={`Open case study: ${project.title}`}
      >
        <Image
          src={cover}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
          loading="lazy"
          quality={unoptimized ? undefined : 80}
          unoptimized={unoptimized}
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-0" />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-paper px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl text-ink md:text-2xl">{project.title}</h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted md:text-[0.95rem]">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex w-fit items-center text-sm font-semibold tracking-wide text-ink underline-offset-4 transition duration-200 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
          >
            More details
          </Link>
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center text-sm font-medium text-muted underline-offset-4 transition duration-200 hover:text-ink hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Live site
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
