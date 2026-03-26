import type { Metadata } from "next";
import { FeaturedGuidesSection } from "@/components/FeaturedGuidesSection";
import { ResourcesGuidesSection } from "@/components/ResourcesGuidesSection";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Resources
          </p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl md:text-6xl">
            Guides & Resources
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Step-by-step guides, tutorials, and insights to help you build better with no-code.
          </p>
        </div>
      </section>

      <FeaturedGuidesSection />
      <ResourcesGuidesSection />
    </>
  );
}

