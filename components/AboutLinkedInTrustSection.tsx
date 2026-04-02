import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";

/**
 * Subtle trust signal at the end of the About narrative (footer unchanged).
 */
export const AboutLinkedInTrustSection = () => {
  return (
    <section className="border-t border-line bg-paper px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          I&apos;m also active on{" "}
          <LinkedInProfileLink className="font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent">
            LinkedIn
          </LinkedInProfileLink>
          , where I share insights on building scalable web and mobile applications.
        </p>
      </div>
    </section>
  );
};
