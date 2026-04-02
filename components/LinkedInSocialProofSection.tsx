import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { shouldShowLinkedInSocialProofSection } from "@/data/linkedinSocialProof";

const LinkedInMark = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const LinkedInSocialProofSection = () => {
  if (!shouldShowLinkedInSocialProofSection()) {
    return null;
  }

  return (
    <section
      className="border-b border-line bg-white px-5 py-16 md:px-8 md:py-20"
      aria-labelledby="linkedin-social-proof-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-paper text-ink/75">
            <LinkedInMark />
          </div>
          <h2
            id="linkedin-social-proof-heading"
            className="mt-6 font-display text-2xl tracking-tight text-ink md:text-3xl"
          >
            Trusted by Founders &amp; Growing Businesses
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Sharing real-world insights on product development, testing, and app launches with
            10,000+ professionals on{" "}
            <LinkedInProfileLink className="font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent">
              LinkedIn
            </LinkedInProfileLink>
            .
          </p>
          <LinkedInProfileLink className="mt-8 inline-flex items-center justify-center rounded-md border border-line bg-paper px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition duration-200 hover:border-ink hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Connect on LinkedIn
          </LinkedInProfileLink>
        </div>
      </div>
    </section>
  );
};
