/**
 * Top band for /projects listing.
 */
export const ProjectsPageIntro = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl text-center motion-safe:animate-fade-up">
        <h1 className="font-display text-4xl text-ink md:text-5xl">Projects</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Production builds shipped with Bubble, Webflow, and integrations: safety and
          compliance tooling, public-sector style experiences, therapy-adjacent brands,
          and payroll operations. Each card summarizes scope and stack; open a case
          study for detail or jump to the live product.
        </p>
      </div>
    </section>
  );
};
