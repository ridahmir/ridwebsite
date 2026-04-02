import { siteConfig } from "@/data/site";
import { aboutContent } from "@/data/about";

/**
 * Stat strip — same numbers as the reference portfolio.
 */
type StatsSectionProps = {
  bgClassName?: string;
  useAboutStats?: boolean;
};

export const StatsSection = ({
  bgClassName = "bg-paper",
  useAboutStats = false,
}: StatsSectionProps) => {
  const items = useAboutStats
    ? aboutContent.stats
    : [
        { value: `${siteConfig.stats.customers}+`, label: "Customers" },
        { value: `${siteConfig.stats.awards}+`, label: "Certificates" },
        { value: `${siteConfig.stats.projects}+`, label: "Projects" },
      ];

  return (
    <section className={`border-b border-line px-5 py-16 md:px-8 md:py-20 ${bgClassName}`}>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="text-center motion-safe:animate-fade-up"
          >
            <p className="font-display text-5xl text-ink md:text-6xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
