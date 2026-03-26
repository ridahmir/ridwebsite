"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What tools do you use?",
    a: "I primarily use Bubble and Webflow for building applications, and Cursor for developing fast, optimized static websites. I also work with APIs and AI integrations to create scalable, high-performance solutions.",
  },
  {
    q: "Do you work alone or with a team?",
    a: "I work with a small team, allowing me to handle projects efficiently while maintaining high quality.",
  },
  {
    q: "Can you handle a full project end-to-end?",
    a: "Yes, from UI/UX design and development to testing, deployment, and publishing.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, I provide maintenance, updates, and ongoing support after launch.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "Timelines vary, but most MVPs are delivered within a few weeks depending on complexity.",
  },
] as const;

/**
 * Accessible FAQ accordion — edit questions in the `faqs` array above.
 */
type FAQSectionProps = {
  bgClassName?: string;
};

export const FAQSection = ({ bgClassName = "bg-paper" }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={`border-b border-line px-5 py-20 md:px-8 md:py-24 ${bgClassName}`}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl motion-safe:animate-fade-up">
          FAQ
        </h2>
        <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted motion-safe:animate-fade-up">
          All You Need to Know
        </p>

        <div className="mt-12 space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-lg border border-line bg-white motion-safe:animate-fade-up"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink transition hover:bg-line/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent md:text-base"
                    onClick={() => handleToggle(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleToggle(index);
                      }
                    }}
                  >
                    <span>{item.q}</span>
                    <span
                      className="text-lg text-muted transition-transform"
                      aria-hidden
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
