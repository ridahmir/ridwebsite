import { servicesContent } from "@/data/services";

export const WhatYouGetSection = () => {
  const { whatYouGet } = servicesContent;

  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {whatYouGet.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {whatYouGet.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {whatYouGet.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-line bg-paper p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md motion-safe:animate-fade-up"
            >
              <span
                className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span className="text-sm font-medium leading-relaxed text-ink">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
