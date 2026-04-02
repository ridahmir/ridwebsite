import { servicesContent } from "@/data/services";

export const PricingSection = () => {
  const { pricing } = servicesContent;

  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            {pricing.subtitle}
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-line bg-paper px-5 py-4 text-center text-sm font-medium text-ink md:px-8">
          {pricing.scopeBanner}
        </div>

        <div className="mt-12 grid auto-rows-fr gap-8 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full min-h-0 flex-col rounded-lg border border-line bg-paper p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-safe:animate-fade-up"
            >
              <div className="flex min-h-0 flex-1 flex-col">
                <h3 className="font-display text-2xl text-ink">{plan.name}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-muted md:min-h-[5rem]">
                  {plan.description}
                </p>
                <div className="mt-6 min-h-[3.25rem]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {plan.priceLine}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {plan.priceEstimate}
                  </p>
                </div>
                <p className="mt-2 min-h-[2.5rem] text-xs leading-relaxed text-muted">
                  {plan.scopeNote}
                </p>

                <ul className="mt-8 flex-1 list-disc space-y-2 pl-5 text-sm text-muted">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 shrink-0">
                <a
                  href={plan.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md border border-line bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink transition duration-200 hover:border-ink hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
                  aria-label={`${plan.cta.label}, ${plan.name}`}
                >
                  {plan.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
