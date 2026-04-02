import { ProjectsPageIntro } from "@/components/ProjectsPageIntro";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { linkedinProjectsUrl, projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

/**
 * Full project grid — each card links to `/projects/[slug]`.
 */
export default function ProjectsPage() {
  return (
    <>
      <ProjectsPageIntro />
      <ProjectsSection
        projects={projects}
        variant="showcase"
        footerCta={{
          kind: "external",
          href: linkedinProjectsUrl,
          label: "View More Projects",
        }}
      />
      <ServicesSection />
    </>
  );
}
