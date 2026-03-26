import { siteConfig } from "@/data/site";
import { servicesContent } from "@/data/services";

export const ServicesContactSection = () => {
  return (
    <section className="bg-ink px-5 py-20 text-paper md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="motion-safe:animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              {servicesContent.contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/80 md:text-base">
              {servicesContent.contact.subtitle}
            </p>
          </div>

          <div className="rounded-xl border border-paper/20 bg-paper/5 p-8 motion-safe:animate-fade-up motion-safe:lg:[animation-delay:80ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
              Quick contact
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-paper bg-paper px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-transparent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              >
                {servicesContent.contact.primaryCtaLabel}
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Services%20Inquiry`}
                className="inline-flex items-center justify-center rounded-md border border-paper/30 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:border-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              >
                Email Me
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm text-paper/80">
              <p>
                <span className="font-semibold text-paper">Email:</span>{" "}
                {siteConfig.email}
              </p>
              <p>
                <span className="font-semibold text-paper">WhatsApp:</span>{" "}
                {siteConfig.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

