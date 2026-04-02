import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { siteConfig } from "@/data/site";

/**
 * Final CTA — WhatsApp primary, LinkedIn secondary (trust / conversion).
 */

export const GetInTouchSection = () => {
  return (
    <section className="bg-ink px-5 py-20 text-paper md:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="motion-safe:animate-fade-up">
          <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
            Get in
            <br />
            Touch
          </h2>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center motion-safe:animate-fade-up motion-safe:md:[animation-delay:80ms]">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-paper bg-paper px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-transparent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
          >
            Get in Touch
          </a>
          <LinkedInProfileLink className="inline-flex items-center justify-center rounded-md border border-paper/40 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:border-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper">
            Connect on LinkedIn
          </LinkedInProfileLink>
        </div>
      </div>
    </section>
  );
};
