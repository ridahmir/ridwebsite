import { AboutHeroSection } from "@/components/AboutHeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutStorySection } from "@/components/AboutStorySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutLinkedInTrustSection } from "@/components/AboutLinkedInTrustSection";
import { FAQSection } from "@/components/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

/**
 * About — stats, story, testimonials, FAQ, then WhatsApp CTA (no duplicate contact block).
 */
export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StatsSection
        bgClassName="bg-white"
        useAboutStats
      />
      <AboutStorySection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <TestimonialsSection bgClassName="bg-paper" />
      <FAQSection bgClassName="bg-white" />
      <AboutLinkedInTrustSection />
    </>
  );
}
