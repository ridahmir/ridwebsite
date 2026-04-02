/**
 * Central project catalogue — `/projects` and case study pages.
 * Replace cover images under /public/projects/ (same filename as `coverFile`) when ready.
 */

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  client?: string;
  tool: string;
  category: string;
  externalUrl?: string;
  /** Short stack labels for cards (chips) */
  stack: string[];
  featureList: string[];
  keyFeatures: string[];
  technologies: string[];
  roleSummary: string;
  /** Paths under /public — first is card cover */
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "prosafenet",
    title: "ProsafeNet",
    shortDescription:
      "Digital safety and compliance-oriented web product for teams managing risk, policy, and operational visibility.",
    description:
      "ProsafeNet is a production Bubble application focused on structured data, role-aware views, and integrations that support safety and compliance workflows for organizational users.",
    longDescription:
      "Built end-to-end in Bubble with emphasis on clear information hierarchy, repeatable UI patterns, and workflows that scale as teams add users and policies. Integrations and custom logic keep the product aligned with how real operators work day to day.",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://prosafenet.com/",
    stack: ["Bubble.io", "APIs", "Custom CSS"],
    featureList: [
      "Role-aware screens and data access",
      "Structured workflows for policy and operations",
      "Integration-ready architecture",
      "Responsive layouts for desktop and mobile",
    ],
    keyFeatures: [
      "Consistent component patterns for faster iteration.",
      "Database design oriented toward audit-friendly records.",
      "Performance-conscious page structure for dense data.",
    ],
    technologies: ["Bubble.io", "API integrations", "Custom CSS", "Workflow automation"],
    roleSummary:
      "Owned solution design, Bubble implementation, integrations, QA, and launch support.",
    images: ["/projects/prosafenet-cover.svg"],
  },
  {
    slug: "publiclink",
    title: "PublicLink",
    shortDescription:
      "Public-facing digital experience for transparent engagement: clear narrative, trust-led UI, and conversion-minded structure.",
    description:
      "PublicLink (EU) combines polished marketing surfaces with product-minded layout so visitors quickly understand value, credibility, and next steps.",
    longDescription:
      "Delivered as a cohesive web experience with emphasis on typography, spacing, and modular sections that the team can evolve. Built for clarity first—supporting campaigns, trust signals, and ongoing content updates without heavy engineering overhead.",
    tool: "Webflow",
    category: "Website",
    externalUrl: "https://publiclink.eu/",
    stack: ["Webflow", "CMS", "Responsive UI"],
    featureList: [
      "Modular marketing sections",
      "CMS-driven content blocks",
      "Mobile-first layout and typography",
      "Performance-minded asset structure",
    ],
    keyFeatures: [
      "Editor-friendly structure for non-developers.",
      "Brand-aligned component rhythm across pages.",
      "Clear CTAs and scannable long-form content.",
    ],
    technologies: ["Webflow", "Figma-to-build handoff", "Custom CSS", "SEO-friendly markup"],
    roleSummary:
      "Structured the site system, built core templates, and documented update paths for the client team.",
    images: ["/projects/publiclink-cover.svg"],
  },
  {
    slug: "sentieri",
    title: "Sentieri",
    shortDescription:
      "Calm, credible web presence for a hybrid therapy practice: services, story, and gentle motion that supports—not distracts.",
    description:
      "Sentieri balances warmth and professionalism with editorial layouts, accessible contrast, and booking-oriented pathways suited to healthcare-adjacent positioning.",
    longDescription:
      "The site prioritizes trust: readable service explainers, practitioner narrative, and restrained motion. Built for long-form content and future iteration as offerings evolve.",
    tool: "Webflow",
    category: "Website",
    externalUrl: "https://sentieri.me/",
    stack: ["Webflow", "Bubble.io", "Custom CSS"],
    featureList: [
      "Service and story-driven pages",
      "Contact and intake CTAs",
      "Responsive typography and spacing",
      "Subtle, accessible motion",
    ],
    keyFeatures: [
      "Healthcare-adjacent tone and layout discipline.",
      "Content blocks that scale as services grow.",
      "Fast, maintainable style system.",
    ],
    technologies: ["Webflow", "Bubble.io", "Custom CSS"],
    roleSummary:
      "Implemented structure, visual system, interactions, and handover for ongoing edits.",
    images: ["/projects/sentieri-cover.svg"],
  },
  {
    slug: "cega-pay",
    title: "Cega Pay",
    shortDescription:
      "Payroll operations product on Bubble: structured records, role-based access, and admin workflows tuned to real HR processes.",
    description:
      "Cega Pay streamlines payroll management through secure data modeling, approvals-oriented flows, and dashboards that keep finance and HR aligned.",
    longDescription:
      "Focused on operational clarity: repeatable UI for data entry, exports where needed, and permissions that reflect how teams actually approve and audit payroll activity.",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://cega-pay.bubbleapps.io/version-test/",
    stack: ["Bubble.io", "Workflows", "APIs"],
    featureList: [
      "Role-based permissions",
      "Payroll dashboards and records",
      "Data export patterns",
      "Audit-friendly structure",
    ],
    keyFeatures: [
      "Workflows aligned with approval steps.",
      "Reusable UI for high-volume data tasks.",
      "Scalable database patterns for growth.",
    ],
    technologies: ["Bubble.io", "Custom CSS", "API integrations"],
    roleSummary:
      "Led build, testing, and documentation for independent operation and iteration.",
    images: ["/projects/cega-pay-cover.svg"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Home grid preview — three of four featured builds */
export const homePreviewSlugs = ["prosafenet", "publiclink", "sentieri"] as const;

export const linkedinProjectsUrl =
  "https://www.linkedin.com/in/ridahefatima/details/projects/" as const;
