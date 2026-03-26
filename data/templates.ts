export type TemplateItem = {
  id: string;
  name: string;
  description: string;
  category: "Web" | "Mobile" | "MVP";
  tags: string[];
};

export const templateItems: TemplateItem[] = [
  {
    id: "saas-dashboard",
    name: "SaaS Dashboard Template",
    description:
      "A modern dashboard starter with analytics cards, user management, and billing-ready sections.",
    category: "Web",
    tags: ["Web App", "SaaS", "Dashboard"],
  },
  {
    id: "landing-kit",
    name: "High-Converting Landing Kit",
    description:
      "Minimal landing page structure focused on clear messaging, lead capture, and conversion.",
    category: "Web",
    tags: ["Landing Page", "Marketing", "Web"],
  },
  {
    id: "mvp-starter",
    name: "MVP Starter Framework",
    description:
      "Fast MVP framework with auth, core workflows, and admin-ready structure for quick validation.",
    category: "MVP",
    tags: ["MVP", "Startup", "Bubble"],
  },
  {
    id: "mobile-booking",
    name: "Mobile Booking App Template",
    description:
      "Mobile-first booking experience with profile, scheduling, and notifications flow.",
    category: "Mobile",
    tags: ["Mobile App", "Booking", "No-code"],
  },
  {
    id: "client-portal",
    name: "Client Portal Template",
    description:
      "Secure client workspace with task tracking, file sharing, and project updates.",
    category: "Web",
    tags: ["Portal", "Dashboard", "Client"],
  },
  {
    id: "marketplace-mvp",
    name: "Marketplace MVP Template",
    description:
      "Buyer/seller flow template with listing pages, filters, and checkout-ready structure.",
    category: "MVP",
    tags: ["Marketplace", "MVP", "Web App"],
  },
];

