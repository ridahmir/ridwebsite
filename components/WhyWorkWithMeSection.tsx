import { servicesContent } from "@/data/services";

export const WhyWorkWithMeSection = () => {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Value
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {servicesContent.why.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {servicesContent.why.points.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-line bg-paper p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
            >
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

