import Image from "next/image";
import { tools } from "@/data/tools";

const ToolLogo = ({ name, logoSrc }: { name: string; logoSrc: string }) => {
  return (
    <div className="flex w-24 flex-none flex-col items-center justify-center gap-2">
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        <Image
          src={logoSrc}
          alt={name}
          title={name}
          width={48}
          height={48}
          className="object-contain"
          loading="lazy"
          sizes="48px"
          unoptimized
        />
      </div>
      <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        {name}
      </span>
    </div>
  );
};

export const ToolsSection = () => {
  const doubled = [...tools, ...tools];

  return (
    <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Tools I work with
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            These are the tools I use to deliver high-quality products—from
            no-code builds for websites, MVPs, and mobile applications, to UI
            design, payments, deployment, team collaboration, and the Vibe Coding
            tool for bringing websites to life.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />

          <div className="py-4">
            <div className="flex w-[200%] items-center gap-10 motion-safe:animate-marquee motion-reduce:animate-none md:gap-14">
              {doubled.map((tool, idx) => (
                <ToolLogo
                  key={`${tool.name}-${idx}`}
                  name={tool.name}
                  logoSrc={tool.logoSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
