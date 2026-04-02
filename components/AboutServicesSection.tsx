import { servicesContent } from "@/data/services";
import { siteConfig } from "@/data/site";

export const AboutServicesSection = () => {
  const { about } = servicesContent;

  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="motion-safe:animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Positioning
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {about.title}
            </h2>
            <p className="mt-6 text-sm font-medium leading-relaxed text-ink md:text-base">
              {about.trustLine}
            </p>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:lg:[animation-delay:80ms] md:text-base">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-paper p-6 transition duration-300 hover:shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Technical
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {about.skillsTechnical.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-accent" aria-hidden>
                        ·
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-paper p-6 transition duration-300 hover:shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Specialized
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {about.skillsSpecialized.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-accent" aria-hidden>
                        ·
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs text-muted">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email}?subject=Services%20inquiry`}
                className="font-semibold text-ink underline decoration-line underline-offset-4 transition hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
