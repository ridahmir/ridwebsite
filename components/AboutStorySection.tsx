/**
 * “My Story” narrative block from the Webflow about page.
 */
import { aboutContent } from "@/data/about";

export const AboutStorySection = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted motion-safe:animate-fade-up">
          Story
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:40ms] md:text-4xl">
          {aboutContent.story.title}
        </h2>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:100ms] md:text-base">
          {aboutContent.story.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
