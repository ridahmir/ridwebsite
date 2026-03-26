import { WorkPageIntro } from "@/components/WorkPageIntro";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

/**
 * Full project grid — each card links to `/work/[slug]`.
 */
export default function WorkPage() {
  return (
    <>
      <WorkPageIntro />
      <ProjectsSection projects={projects} />
      <ServicesSection />
    </>
  );
}
