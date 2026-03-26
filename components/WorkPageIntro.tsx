/**
 * Top band for /work — mirrors Webflow works intro copy.
 */
export const WorkPageIntro = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl text-center motion-safe:animate-fade-up">
        <h1 className="font-display text-4xl text-ink md:text-5xl">Works</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          I offer innovative solutions that captivate customers, drive engagement
          and get results.
        </p>
      </div>
    </section>
  );
};
