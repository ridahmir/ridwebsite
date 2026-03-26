import type { Metadata } from "next";
import { TemplatesGridSection } from "@/components/TemplatesGridSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Templates",
};

export default function TemplatesPage() {
  return (
    <>
      <section className="border-b border-line bg-paper px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Templates
          </p>
          <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl md:text-6xl">
            Templates
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Ready-to-use templates for websites, MVPs, and apps to help you launch faster.
          </p>
        </div>
      </section>

      <TemplatesGridSection />

      <section className="bg-ink px-5 py-20 text-paper md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Need a custom template?</h2>
              <p className="mt-3 text-sm text-paper/80 md:text-base">
                I can design and build custom templates tailored to your workflow and goals.
              </p>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-paper bg-paper px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-transparent hover:text-paper"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

