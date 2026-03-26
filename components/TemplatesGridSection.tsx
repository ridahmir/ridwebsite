"use client";

import { useMemo, useState } from "react";
import { templateItems } from "@/data/templates";
import { siteConfig } from "@/data/site";

const categories = ["All", "Web", "Mobile", "MVP"] as const;

export const TemplatesGridSection = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "All") return templateItems;
    return templateItems.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3">
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

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <article
              key={template.id}
              className="overflow-hidden rounded-lg border border-line bg-paper shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-white">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Preview Placeholder
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-ink">{template.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {template.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-ink bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition hover:border-accent hover:bg-accent"
                >
                  Use Template
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

