import { servicesContent } from "@/data/services";

export const ProcessSection = () => {
  const { process } = servicesContent;

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Workflow
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {process.title}
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-line bg-white p-8 shadow-sm motion-safe:animate-fade-up"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

