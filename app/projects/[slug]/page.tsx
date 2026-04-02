import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export const generateStaticParams = () =>
  projects.map((p) => ({ slug: p.slug }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
};

/**
 * Dynamic case study — content comes from `data/projects.ts`.
 */
export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
