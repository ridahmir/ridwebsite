import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { projects, homePreviewSlugs } from "@/data/projects";

/**
 * Home — three project previews, no separate “Contact me” band, WhatsApp CTA only.
 */
export default function HomePage() {
  const preview = homePreviewSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <ProjectsSection
        projects={preview}
        showSeeMore
      />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
