export type GuideItem = {
  id: string;
  title: string;
  description: string;
  category: "Bubble" | "UI/UX" | "Deployment" | "APIs" | "Webflow" | "AI";
  featured?: boolean;
};

export const guideItems: GuideItem[] = [
  {
    id: "bubble-workflows",
    title: "Designing Scalable Bubble Workflows",
    description:
      "How to structure backend and frontend workflows for maintainability and performance.",
    category: "Bubble",
    featured: true,
  },
  {
    id: "no-code-ui-ux",
    title: "UI/UX Principles for No-Code Apps",
    description:
      "Practical design decisions to make no-code interfaces feel polished and intuitive.",
    category: "UI/UX",
    featured: true,
  },
  {
    id: "api-integration-basics",
    title: "API Integrations in No-Code Projects",
    description:
      "A practical guide to connecting external APIs safely and reliably in Bubble/Webflow projects.",
    category: "APIs",
  },
  {
    id: "deploying-with-vercel",
    title: "Deploying No-Code Adjacent Frontends with Vercel",
    description:
      "Deployment flow, environment setup, and common pitfalls for smooth production releases.",
    category: "Deployment",
  },
  {
    id: "webflow-to-mvp",
    title: "From Webflow Landing to MVP",
    description:
      "Transition strategy from marketing website to functional product without redesigning everything.",
    category: "Webflow",
  },
  {
    id: "ai-in-no-code-products",
    title: "Adding AI Features to No-Code Products",
    description:
      "Patterns for AI-enhanced experiences: assistants, content generation, and smart automation.",
    category: "AI",
  },
];

