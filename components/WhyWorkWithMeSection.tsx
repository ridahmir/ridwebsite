import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { servicesContent } from "@/data/services";

export const WhyWorkWithMeSection = () => {
  const { why } = servicesContent;

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {why.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {why.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            Active on{" "}
            <LinkedInProfileLink className="font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent">
              LinkedIn
            </LinkedInProfileLink>
            , sharing real-world insights on product development, testing, and app launches.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {why.points.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-line bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
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
