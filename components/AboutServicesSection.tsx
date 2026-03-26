import { servicesContent } from "@/data/services";

export const AboutServicesSection = () => {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="motion-safe:animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Overview
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {servicesContent.about.title}
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:lg:[animation-delay:80ms] md:text-base">
            {servicesContent.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="rounded-lg border border-line bg-paper p-6">
              <p className="text-sm font-semibold text-ink">Tooling & expertise</p>
              <p className="mt-2 text-sm text-muted">{servicesContent.about.toolLine}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

