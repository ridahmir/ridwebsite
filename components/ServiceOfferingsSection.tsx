import { servicesContent } from "@/data/services";

const CardIcon = () => (
  <span
    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper text-accent"
    aria-hidden
  >
    ▣
  </span>
);

export const ServiceOfferingsSection = () => {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Services / Offerings
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesContent.offerings.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-line/80 bg-paper p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
            >
              <CardIcon />
              <h3 className="mt-5 font-display text-lg text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

