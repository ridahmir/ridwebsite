import { aboutContent } from "@/data/about";

export const EducationSection = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Education
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Academics
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {aboutContent.education.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-white p-8 shadow-sm motion-safe:animate-fade-up"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {item.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {item.certifications && item.certifications.length > 0 ? (
                <>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Certifications
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {item.certifications.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

