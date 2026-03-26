import { aboutContent } from "@/data/about";

export const ExperienceSection = () => {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Previous Roles
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {aboutContent.experience.map((item) => (
            <article
              key={`${item.company}-${item.dates}`}
              className="rounded-lg border border-line bg-paper p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-xl text-ink">{item.company}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.location}
                </p>
              </div>

              {item.title ? (
                <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
              ) : null}
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {item.dates}
              </p>

              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.linkedin.com/in/ridahefatima/details/experience/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:border-accent hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

