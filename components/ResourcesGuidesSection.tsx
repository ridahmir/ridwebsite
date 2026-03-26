"use client";

import { useMemo, useState } from "react";
import { guideItems } from "@/data/guides";
import { siteConfig } from "@/data/site";

const categories = ["All", "Bubble", "UI/UX", "Deployment", "APIs", "Webflow", "AI"] as const;

export const ResourcesGuidesSection = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return guideItems;
    return guideItems.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                activeCategory === category
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-ink hover:border-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((guide) => (
            <article
              key={guide.id}
              className="rounded-lg border border-line bg-paper p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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

