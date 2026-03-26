/**
 * Home hero — mirrors Webflow hierarchy (eyebrow + display title + supporting line).
 */
export const HeroSection = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:60ms] sm:text-5xl md:text-6xl lg:text-7xl">
          No-Code Engineer &amp; Product Builder
        </h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:90ms]">
          From Idea to Launch | Fast, Scalable, Production-Ready
        </p>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:120ms] md:text-lg">
          My team and I design, build, and ship websites, MVPs, and mobile apps
          with a focus on performance, scalability, and seamless user experience.
        </p>
        <p className="mt-8 max-w-4xl text-sm font-semibold tracking-wide text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:180ms]">
          Bubble • Webflow • Cursor • Payment Integrations • Mobile App
          Wrapping • APIs • AI Integrations
        </p>
      </div>
    </section>
  );
};
