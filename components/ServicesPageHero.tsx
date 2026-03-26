import { servicesContent } from "@/data/services";

export const ServicesPageHero = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Services
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {servicesContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {servicesContent.hero.tagline}
          </p>
        </div>

        {/* Optional illustration placeholder */}
        <div className="rounded-xl border border-line bg-white p-8 shadow-sm motion-safe:animate-fade-up motion-safe:lg:[animation-delay:80ms]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            What you get
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">Modern, minimal UI</p>
              <p className="mt-2 text-sm text-muted">
                Clean layout, great spacing, and mobile-first responsiveness.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">Production-ready build</p>
              <p className="mt-2 text-sm text-muted">
                Structured workflows, scalable data, and reliable deployment.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">Clear communication</p>
              <p className="mt-2 text-sm text-muted">
                Transparent progress, fast iterations, and documented handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

