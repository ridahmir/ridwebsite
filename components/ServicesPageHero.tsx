import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { servicesContent } from "@/data/services";

export const ServicesPageHero = () => {
  const { hero } = servicesContent;

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {hero.tagline}
          </p>
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm font-medium leading-relaxed text-ink md:text-base">
            {hero.trustLine}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-paper transition duration-200 hover:border-accent hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              {hero.primaryCta.label}
            </a>
            <LinkedInProfileLink className="inline-flex items-center justify-center rounded-md border border-line bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition duration-200 hover:border-ink hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]">
              View My LinkedIn
            </LinkedInProfileLink>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-white p-8 shadow-sm motion-safe:animate-fade-up motion-safe:lg:[animation-delay:80ms]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            At a glance
          </p>
          <div className="mt-6 grid gap-4">
            {hero.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-lg border border-line bg-paper p-5 transition duration-300 hover:border-line/80 hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-ink">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
