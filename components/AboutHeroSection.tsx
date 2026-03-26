import Image from "next/image";
import { aboutContent } from "@/data/about";

/**
 * About page intro band.
 */
export const AboutHeroSection = () => {
  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted motion-safe:animate-fade-up">
            {aboutContent.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-4xl tracking-tight text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:60ms] md:text-5xl lg:text-6xl">
            {aboutContent.hero.title}
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:120ms] md:text-lg">
            {aboutContent.hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="motion-safe:animate-fade-up motion-safe:lg:[animation-delay:120ms]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl border border-line bg-white shadow-sm">
            <Image
              src="/about-ridah.png"
              alt="Ridah e Fatima portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
