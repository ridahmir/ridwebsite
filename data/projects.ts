/**
 * Central project catalogue — edit entries here to update /work and project pages.
 * Swap `coverImage` URLs for files in /public when you have final assets.
 */

export type Project = {
  slug: string;
  title: string;
  /** Shown on cards and listing */
  shortDescription: string;
  /** Opening paragraph on detail page */
  description: string;
  /** Longer editorial block (mirrors Webflow case-study body) */
  longDescription: string;
  client?: string;
  tool: string;
  category: string;
  externalUrl?: string;
  /** Bullet list under “Features of App” */
  featureList: string[];
  /** Structured key features */
  keyFeatures: string[];
  /** Tech stack bullets */
  technologies: string[];
  roleSummary: string;
  /** Gallery images — first is often used as cover */
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "beccas-list",
    title: "Beccas List",
    shortDescription:
      "Directory and listing platform with payments, search, and API integrations.",
    description:
      "I led the entire development process, from translating the client’s vision into a functional design, building all pages and workflows in Bubble, to testing and deploying the live website. I worked closely with the client to ensure all features met their needs and provided training on managing content independently after launch.",
    longDescription:
      "Beccas List is a beautifully designed, fully responsive web platform built entirely with Bubble.io, a powerful no-code development tool. The site serves as an engaging and user-friendly directory/listing service that helps users discover curated resources and businesses with ease. This project showcases my ability to create visually appealing and highly functional web experiences without writing a single line of code.",
    client: "Becca Eberhart",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://beccaslist.co/",
    featureList: [
      "API Integration",
      "Advanced Search Filter",
      "Custom CSS",
      "Secure Payments",
      "Responsive Design",
      "SamCart Integration",
    ],
    keyFeatures: [
      "Custom User Interface: Designed a clean and intuitive UI that aligns with the client’s branding and target audience.",
      "Responsive Design: Optimized for desktop, tablet, and mobile devices ensuring seamless user experience across all platforms.",
      "Dynamic Content Management: Implemented robust database workflows for easy content updating and listing management by the client.",
      "Interactive Elements: Incorporated smooth animations and hover effects for enhanced engagement.",
      "SEO Optimization: Structured the site with SEO best practices to improve discoverability and ranking.",
      "Fast and Reliable: Leveraged Bubble’s infrastructure for quick load times and stability without backend coding.",
    ],
    technologies: [
      "Bubble.io (No-Code Platform)",
      "Custom CSS & Workflows within Bubble",
      "Integrated external APIs for data enrichment",
    ],
    roleSummary:
      "I led the entire development process, from translating the client’s vision into a functional design, building all pages and workflows in Bubble, to testing and deploying the live website. I worked closely with the client to ensure all features met their needs and provided training on managing content independently after launch.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    ],
  },
  {
    slug: "lynapay",
    title: "Lyna Pay Payroll Management Site",
    shortDescription:
      "Payroll management experience with role-based access and reporting workflows.",
    description:
      "End-to-end Bubble build for payroll operations: employee records, approvals, and admin dashboards tailored to the client’s process.",
    longDescription:
      "Lyna Pay streamlines payroll management through a secure Bubble application with structured data, automated calculations where applicable, and clear navigation for HR teams.",
    tool: "Bubble.io",
    category: "Web App",
    featureList: [
      "Role-based permissions",
      "Payroll dashboards",
      "Data export",
      "Responsive layouts",
      "Audit-friendly records",
    ],
    keyFeatures: [
      "Modular page structure for HR and finance teams.",
      "Reusable UI patterns for faster data entry.",
      "Workflows aligned with real payroll approval steps.",
    ],
    technologies: ["Bubble.io", "Custom CSS", "API Integrations"],
    roleSummary:
      "Owned solution design, implementation, QA, and handover documentation for independent content updates.",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
    ],
  },
  {
    slug: "buyer-folio",
    title: "Buyer Folio",
    shortDescription:
      "Marketing website showcasing product value with conversion-focused sections.",
    description:
      "Webflow and no-code tooling combined for a fast, polished marketing site with CMS-managed sections.",
    longDescription:
      "Buyer Folio uses a clean narrative layout, strong typography, and CMS-driven case blocks so the team can iterate without developer dependency.",
    tool: "Bubble.io",
    category: "Website",
    featureList: [
      "CMS-friendly structure",
      "Responsive marketing sections",
      "Lead capture flows",
      "Performance-conscious assets",
    ],
    keyFeatures: [
      "Brand-aligned component system.",
      "Editor-friendly content model.",
      "Mobile-first spacing and typography.",
    ],
    technologies: ["Bubble.io", "Webflow", "Custom CSS"],
    roleSummary:
      "Built page templates, interactions, and publishing workflow for ongoing marketing updates.",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    ],
  },
  {
    slug: "venue-hub-my",
    title: "Venue Hub Malaysia",
    shortDescription:
      "Venue discovery and booking flows for the Malaysian market.",
    description:
      "Bubble web app connecting users with venues: search, filters, and detail pages optimized for mobile traffic.",
    longDescription:
      "Venue Hub Malaysia focuses on discovery UX—fast filters, rich media, and clear CTAs—so users can shortlist venues efficiently.",
    tool: "Bubble.io",
    category: "Web App",
    featureList: [
      "Advanced filters",
      "Listing detail pages",
      "Mobile-optimized UI",
      "Saved favorites",
    ],
    keyFeatures: [
      "Search tuned for real venue attributes.",
      "Consistent card system across listing and detail views.",
      "Lightweight animations for feedback without clutter.",
    ],
    technologies: ["Bubble.io", "API Integrations", "Custom CSS"],
    roleSummary:
      "Delivered discovery flows, admin tools for listings, and launch support.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f29da1c1c8?w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    ],
  },
  {
    slug: "humanize",
    title: "Humanize Platform",
    shortDescription:
      "Platform experience focused on engagement, profiles, and structured content.",
    description:
      "A Bubble application emphasizing human-centered UI patterns and scalable database design.",
    longDescription:
      "Humanize brings together profiles, content modules, and messaging-adjacent flows in a cohesive product shell built for iteration.",
    tool: "Bubble.io",
    category: "Web App",
    featureList: [
      "User profiles",
      "Content modules",
      "Notification-style updates",
      "Responsive product UI",
    ],
    keyFeatures: [
      "Reusable components for rapid feature rollout.",
      "Clear information hierarchy for dense data.",
      "Accessibility-minded contrast and tap targets.",
    ],
    technologies: ["Bubble.io", "No-code/Low-code Development", "Custom CSS"],
    roleSummary:
      "Partnered on product structure, built core screens, and iterated with stakeholder feedback.",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    ],
  },
  {
    slug: "sentieri",
    title: "Sentieri Hybrid Therapy Site",
    shortDescription:
      "Therapy practice site with calm visuals, services, and booking-oriented CTAs.",
    description:
      "Hybrid therapy positioning with trustworthy copy blocks, service explainers, and contact pathways.",
    longDescription:
      "Sentieri balances warmth and clarity: service breakdowns, practitioner story, and gentle motion for a professional healthcare-adjacent brand.",
    tool: "Bubble.io",
    category: "Web App",
    featureList: [
      "Service pages",
      "Trust-building content blocks",
      "Contact and intake CTAs",
      "Responsive typography",
    ],
    keyFeatures: [
      "Editorial layout for long-form therapy content.",
      "Subtle motion that supports—not distracts—from the message.",
    ],
    technologies: ["Bubble.io", "Webflow", "Custom CSS"],
    roleSummary:
      "Implemented site structure, styling, and client training for ongoing edits.",
    images: [
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    shortDescription:
      "Landing experience highlighting services, work, and social proof.",
    description:
      "Portfolio and landing page system showcasing projects, testimonials, and services in a single scroll narrative.",
    longDescription:
      "This portfolio pattern—hero, services, selected work, stats, and testimonials—was translated into a maintainable component set for fast updates.",
    tool: "Bubble.io",
    category: "Landing Page",
    featureList: [
      "Hero and services bands",
      "Project grid",
      "Testimonials",
      "FAQ-ready structure",
    ],
    keyFeatures: [
      "Modular sections for repeat use across campaigns.",
      "Performance-minded image handling patterns.",
    ],
    technologies: ["Bubble.io", "Webflow", "No-code/Low-code Development"],
    roleSummary:
      "Designed layout system, built interactions, and documented content update paths.",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const homePreviewSlugs = ["beccas-list", "lynapay", "venue-hub-my"] as const;
