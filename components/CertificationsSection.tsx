import Image from "next/image";

type Certification = {
  title: string;
  issuer: string;
  note?: string;
  imageSrc: string;
};

const certifications: Certification[] = [
  {
    title: "Bubble Certificate",
    issuer: "Million Labs",
    imageSrc: "/certifications/bubble-million-labs.svg",
  },
  {
    title: "EF SET English Certificate",
    issuer: "EF SET",
    note: "78/100 (C2 Proficient)",
    imageSrc: "/certifications/efset-78-c2.svg",
  },
  {
    title: "Basic Bubble Certification",
    issuer: "No Code Alliance",
    imageSrc: "/certifications/basic-bubble-nca.svg",
  },
];

export const CertificationsSection = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Certifications
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Certifications
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
            A quick snapshot of certifications that support my Bubble, no-code, and
            communication skills.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-safe:animate-fade-up"
            >
              <div className="relative aspect-[4/3] bg-line/30">
                <Image
                  src={c.imageSrc}
                  alt={`${c.title} certificate`}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width:768px) 100vw, 33vw"
                  priority={false}
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl text-ink">{c.title}</h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {c.issuer}
                </p>
                {c.note ? (
                  <p className="mt-3 text-sm text-muted">{c.note}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

