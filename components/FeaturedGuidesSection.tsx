import { guideItems } from "@/data/guides";
import { siteConfig } from "@/data/site";

export const FeaturedGuidesSection = () => {
  const featured = guideItems.filter((g) => g.featured).slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Featured
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Featured Guides
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((guide) => (
            <article
              key={guide.id}
              className="rounded-lg border border-line bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {guide.category}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">{guide.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {guide.description}
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-ink underline-offset-4 transition hover:text-accent hover:underline"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

