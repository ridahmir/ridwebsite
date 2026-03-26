import Link from "next/link";

/**
 * Services layout — order matches the Webflow home: offering band, then “Creative Solutions / Services”.
 */

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Build scalable websites, web apps, and dashboards with robust architecture",
  },
  {
    title: "UI/UX Design",
    description: "Clean, user-focused interfaces for web and mobile",
  },
  {
    title: "MVP Development & Launch",
    description:
      "Turn ideas into production-ready MVPs for fast validation and growth",
  },
  {
    title: "App Testing & Debugging",
    description:
      "Thorough testing with clear fixes to ensure smooth, bug-free performance",
  },
  {
    title: "Mobile App Publishing (BDK)",
    description: "Wrap and publish apps on App Store & Play Store",
  },
  {
    title: "API & AI Integrations",
    description: "Connect tools, automate workflows, and add AI features",
  },
] as const;

const ServiceIcon = () => (
  <span
    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper text-accent"
    aria-hidden
  >
    ▣
  </span>
);

export const ServicesSection = () => {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8 motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Creative Solutions
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl text-ink md:text-4xl">Services</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Offering No-code solutions tailored to streamline business processes
              and boost efficiency without traditional coding, empowering businesses
              to innovate effortlessly.
            </p>
          </div>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label="Services">
            {services.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-line/80 bg-paper p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <ServiceIcon />
                <div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-ink bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-accent hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
