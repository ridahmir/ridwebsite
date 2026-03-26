export type ServiceOffering = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  priceHint: string;
  features: string[];
  ctaLabel: string;
};

export const servicesContent = {
  hero: {
    headline: "I Build High-Quality Websites, MVPs, and Mobile Apps",
    tagline:
      "Helping businesses and individuals bring their ideas to life with no-code solutions and full-stack expertise.",
    ctaLabel: "Work With Me",
  },
  about: {
    title: "About My Services",
    paragraphs: [
      "I help founders, teams, and businesses ship websites, MVPs, and mobile apps quickly—without compromising quality. My team and I combine no-code speed with full-stack thinking: clean UX, solid data structures, scalable workflows, and production-ready releases.",
      "From UI/UX design and development to testing, documentation, and publishing, we provide end-to-end delivery so you can focus on your product and customers.",
    ],
    toolLine:
      "Tools I use include Bubble, Webflow, the Vibe Coding tool, Figma, BDK, payment gateways (Stripe/PayPal), deployment tools (Vercel), AI integrations, and more.",
  },
  offerings: [
    {
      title: "No-Code Web & Mobile App Development",
      description:
        "Building websites, MVPs, and mobile apps using modern no-code tools with maintainable architecture and smooth UX.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive, visually appealing interfaces with thoughtful user flows, spacing, typography, and accessibility.",
    },
    {
      title: "Full App Testing & Documentation",
      description:
        "Thorough testing with detailed bug reports, clear reproduction steps, and recommended fixes to reduce launch risk.",
    },
    {
      title: "BDK Wrapping & Store Publishing",
      description:
        "Wrapping your app with BDK Native and publishing on Google Play and the Apple App Store with proper store metadata.",
    },
    {
      title: "In-App Purchase Integration",
      description:
        "Adding monetization and subscription flows to mobile apps, aligned with store requirements and best practices.",
    },
    {
      title: "AI Integrations",
      description:
        "Adding AI features to enhance app functionality—smart workflows, automation, and helpful user experiences.",
    },
    {
      title: "Deployment & Maintenance",
      description:
        "Handling deployment, updates, bug fixes, and ongoing maintenance so your product stays stable and current.",
    },
  ] as ServiceOffering[],
  pricing: {
    title: "Pricing / Packages",
    subtitle:
      "Choose a plan that fits your timeline and scope. If you’re not sure, I’ll recommend the best option after a quick call.",
    plans: [
      {
        name: "Starter",
        description:
          "Best for landing pages, small websites, or quick MVP validation.",
        priceHint: "Contact for a custom quote",
        features: [
          "Requirements clarification",
          "UI implementation with clean responsive layout",
          "Basic integrations (forms, analytics, email)",
          "Deployment setup",
        ],
        ctaLabel: "Get Started",
      },
      {
        name: "Standard",
        description:
          "Ideal for MVPs with real users, data workflows, and polished UX.",
        priceHint: "Contact for a custom quote",
        features: [
          "End-to-end build in Bubble/Webflow",
          "UI/UX flow refinement",
          "Payment integration (Stripe/PayPal) if needed",
          "Testing + documentation",
          "Deployment + handover",
        ],
        ctaLabel: "Contact Me",
      },
      {
        name: "Premium",
        description:
          "For full products, mobile app publishing, and long-term support.",
        priceHint: "Contact for a custom quote",
        features: [
          "Advanced workflows + scalable data structure",
          "AI integrations (where applicable)",
          "BDK wrapping + store publishing",
          "In-app purchases / subscriptions",
          "Ongoing maintenance & updates",
        ],
        ctaLabel: "Work With Me",
      },
    ] as PricingPlan[],
  },
  why: {
    title: "Why Work With Me",
    points: [
      {
        title: "7+ years in Bubble & no-code development",
        description:
          "Deep platform expertise with a strong eye for structure, scalability, and UX polish.",
      },
      {
        title: "Fast delivery, without cutting corners",
        description:
          "Efficient execution with strong QA—so you ship faster and feel confident in production.",
      },
      {
        title: "End-to-end service",
        description:
          "From design to build, testing, publishing, and support—one owner, clear communication.",
      },
      {
        title: "Creative + practical solutions",
        description:
          "I balance what’s ideal with what’s realistic, prioritizing outcomes and maintainability.",
      },
    ],
  },
  process: {
    title: "Process / How I Work",
    steps: [
      { title: "Consultation", description: "Scope, goals, timeline, and success metrics." },
      { title: "Design", description: "UI/UX flows, layout, and clickable direction." },
      { title: "Development", description: "Build with clean structure and reusable components." },
      { title: "Testing", description: "QA, bug reports, and fixes before launch." },
      { title: "Deployment", description: "Deploy to production or publish to stores." },
      { title: "Support", description: "Post-launch maintenance and iterative improvements." },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "Have an idea or an existing product that needs improvement? Let’s build something clean, fast, and production-ready.",
    primaryCtaLabel: "Get in Touch",
  },
} as const;

