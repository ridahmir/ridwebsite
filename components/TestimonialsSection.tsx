import Image from "next/image";
import { aboutContent } from "@/data/about";

/**
 * Testimonial cards — content aligned with the live Webflow site.
 */
type TestimonialsSectionProps = {
  bgClassName?: string;
};

export const TestimonialsSection = ({
  bgClassName = "bg-white",
}: TestimonialsSectionProps) => {
  const { recommendations } = aboutContent;
  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");

  return (
    <section className={`border-b border-line px-5 py-20 md:px-8 md:py-24 ${bgClassName}`}>
      <div className="mx-auto max-w-6xl">
        <div className="motion-safe:animate-fade-up">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {recommendations.title}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {recommendations.items.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-lg border border-line bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
            >
              <blockquote className="text-sm leading-relaxed text-ink">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-6 text-center text-sm">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-line bg-paper">
                    {t.imageUrl ? (
                      <Image
                        src={t.imageUrl}
                        alt={`${t.name} profile photo`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted">
                        {getInitials(t.name)}
                      </div>
                    )}
                  </div>
                </div>
                {t.href ? (
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-semibold text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {t.name}
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center font-semibold text-ink">
                    {t.name}
                  </span>
                )}
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={recommendations.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md border border-ink bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-accent hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="View more LinkedIn recommendations"
          >
            {recommendations.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
