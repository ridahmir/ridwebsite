import { siteConfig } from "@/data/site";
import { servicesContent } from "@/data/services";

export const PricingSection = () => {
  const { pricing } = servicesContent;

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
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

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full flex-col rounded-lg border border-line bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
            >
              <div>
                <h3 className="font-display text-2xl text-ink">{plan.name}</h3>
                <p className="mt-3 text-sm text-muted">{plan.description}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {plan.priceHint}
                </p>
              </div>

              <ul className="mt-8 list-disc space-y-2 pl-5 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md border border-ink bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-accent hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`${plan.ctaLabel} on WhatsApp`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

