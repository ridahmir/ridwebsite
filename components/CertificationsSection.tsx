import Image from "next/image";

type Certification = {
  title: string;
  issuer: string;
  note?: string;
  imageSrc: string;
  credentialUrl: string;
};

const certifications: Certification[] = [
  {
    title: "Bubble Certificate",
    issuer: "Million Labs",
    imageSrc: "/certifications/million-labs-bubble-certificate.png",
    credentialUrl:
      "https://c85ec4c2721d0d1fda7c4d73a2dd9307.cdn.bubble.io/f1749649446022x767181338860449800/kIRBgKpCCeMmSrdSleLn.pdf",
  },
  {
    title: "EF SET English Certificate",
    issuer: "EF SET",
    imageSrc: "/certifications/efset-certificate.png",
    credentialUrl: "https://cert.efset.org/8RiqmP",
  },
  {
    title: "Basic Bubble Certification",
    issuer: "No Code Alliance",
    imageSrc: "/certifications/no-code-alliance-bubble-basics.png",
    credentialUrl:
      "https://nocodealliance.org/next-create-certification/1725260099014x978589073524129800",
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
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 380px"
                  loading="lazy"
                  quality={75}
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

                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={0}
                  aria-label={`View credentials for ${c.title}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-line bg-paper px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View credentials
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

