import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { siteConfig } from "@/data/site";
import { servicesContent } from "@/data/services";

export const ServicesContactSection = () => {
  const { contact } = servicesContent;

  return (
    <section className="bg-ink px-5 py-20 text-paper md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="motion-safe:animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/80 md:text-base">
              {contact.subtitle}
            </p>
          </div>

          <div className="rounded-xl border border-paper/20 bg-paper/5 p-8 motion-safe:animate-fade-up motion-safe:lg:[animation-delay:80ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
              Next step
            </p>
            <h3 className="mt-4 font-display text-2xl font-normal tracking-tight text-paper md:text-3xl">
              {contact.panelHeadline}
            </h3>
            <div className="mt-8 grid gap-3">
              <a
                href={contact.workWithMeCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-paper bg-paper px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition duration-200 hover:bg-transparent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper active:scale-[0.98]"
              >
                {contact.workWithMeCta.label}
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Services%20inquiry`}
                className="inline-flex items-center justify-center rounded-md border border-paper/30 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-paper transition duration-200 hover:border-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper active:scale-[0.98]"
              >
                {contact.emailCtaLabel}
              </a>
            </div>

            <div className="mt-8 space-y-2 border-t border-paper/15 pt-6 text-sm text-paper/80">
              <p>
                <span className="font-semibold text-paper">Email:</span>{" "}
                {siteConfig.email}
              </p>
              <p>
                <span className="font-semibold text-paper">WhatsApp:</span>{" "}
                {siteConfig.phoneDisplay}
              </p>
              <p className="pt-2 text-paper/70">
                You can also connect with me on{" "}
                <LinkedInProfileLink className="font-medium text-paper underline decoration-paper/40 underline-offset-4 transition hover:decoration-paper">
                  LinkedIn
                </LinkedInProfileLink>{" "}
                for updates, insights, and professional discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
