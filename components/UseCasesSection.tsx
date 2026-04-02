import { servicesContent } from "@/data/services";

export const UseCasesSection = () => {
  const { useCases } = servicesContent;

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {useCases.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {useCases.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {useCases.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-line/90 bg-white px-6 py-5 text-center text-sm font-semibold text-ink shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md motion-safe:animate-fade-up"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
