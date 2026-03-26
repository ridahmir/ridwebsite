import { aboutContent } from "@/data/about";

export const SkillsSection = () => {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            S K I L L S
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Strengths
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {aboutContent.skills.map((group) => (
            <article
              key={group.category}
              className="rounded-lg border border-line bg-paper p-6 shadow-sm motion-safe:animate-fade-up"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-md border border-line bg-white p-3"
                  >
                    <div>
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

