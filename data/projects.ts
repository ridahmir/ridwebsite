/**
 * Central project catalogue — `/projects` and case study pages.
 * Card cover = `images[0]`. Raster assets live under `/public/projects/` (optimized via next/image).
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
      "Mobile app for safety, security, and emergency professionals, wrapped from Bubble into store-ready iOS and Android builds.",
    description:
      "ProSafeNet is a mobile application designed for professionals in risk management, disaster response, and security industries, including security personnel, police, soldiers, and fire brigades.",
    longDescription:
      "I worked on transforming a Bubble single-page application into a fully functional mobile app using BDK Native, making it available on both iOS and Android platforms. The work focused on reliable native integrations, production testing, and store publishing workflows so the product could ship to real users.",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://prosafenet.com/",
    stack: ["Bubble.io", "BDK Native", "iOS + Android"],
    featureList: [
      "Wrapped Bubble SPA in BDK Native for mobile deployment",
      "Integrated push notifications, Sign in with Apple, biometrics",
      "Added Google reCAPTCHA v3 verification",
      "Tested builds, fixed UI issues, improved front-end flows",
    ],
    keyFeatures: [
      "Native-first capabilities layered onto a Bubble product without breaking core flows.",
      "Store-ready build pipeline: request builds, test releases, and prepare publishing artifacts.",
      "Industry-specific reporting features and UX hardening for real-world usage.",
    ],
    technologies: [
      "Bubble.io (no-code development)",
      "BDK Native (wrapping + native integrations)",
      "Mobile app deployment (iOS and Android)",
      "Push notifications and biometrics",
      "Sign in with Apple",
      "Google reCAPTCHA v3",
      "Testing and UI bug fixes",
      "Google Cloud Console",
      "Google Play Console",
      "App Store Connect",
    ],
    roleSummary:
      "Wrapped the Bubble SPA in BDK Native, integrated key native features, tested and fixed UI issues, implemented reporting improvements, and managed the publishing workflow for Google Play with App Store publishing in progress.",
    images: [
      "/projects/prosafenet-thumb.png",
      "/projects/prosafenet-01-home.png",
      "/projects/prosafenet-02-feed.png",
      "/projects/prosafenet-03-events.png",
      "/projects/prosafenet-04-companies.png",
      "/projects/prosafenet-05-jobs.png",
      "/projects/prosafenet-06-profile.png",
      "/projects/prosafenet-07-pro-plan.png",
    ],
  },
  {
    slug: "publiclink",
    title: "PublicLink",
    shortDescription:
      "Professional social network and job platform for contractors and companies in public international institutions, built on Bubble.io.",
    description:
      "Contributed AI-powered features to PublicLink, enabling structured extraction from CVs and job posts and improving matchmaking for candidates and vacancies.",
    longDescription:
      "The core focus was turning free-form documents into queryable structured data and then using that structure to rank matches on both sides of the marketplace. This reduced manual input, improved search quality, and helped users quickly find relevant opportunities and candidates.",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://publiclink.eu/",
    stack: ["Bubble.io", "AI parsing", "Matching engine"],
    featureList: [
      "Engineered a CV parsing pipeline extracting structured candidate data",
      "Designed a job description parser to extract key fields from postings",
      "Built a bidirectional AI matching engine for candidates and vacancies",
      "Ranked top matches by skill and experience alignment",
    ],
    keyFeatures: [
      "Structured parsing outputs: skills, experience, education, role history.",
      "Queryable job fields: seniority, responsibilities, location, required skills.",
      "Top 5 best matches surfaced for both job seekers and vacancies.",
    ],
    technologies: ["Bubble.io", "AI-assisted parsing", "Data structuring", "Matching and ranking logic"],
    roleSummary:
      "Built CV and job post parsing pipelines and implemented a bidirectional matching engine surfacing top-ranked candidates and opportunities.",
    images: [
      "/projects/publiclink-thumb.png",
      "/projects/publiclink-02-jobs.png",
      "/projects/publiclink-03-company.png",
      "/projects/publiclink-04-feed.png",
      "/projects/publiclink-05-job-detail.png",
      "/projects/publiclink-01-signup.png",
      "/projects/publiclink-06-feed.png",
    ],
  },
  {
    slug: "sentieri",
    title: "Sentieri",
    shortDescription:
      "Online therapy and events platform: responsive Bubble build with sessions, events, and CMS-managed content for an Italian hybrid practice.",
    description:
      "Designed and crafted a calm, credible web presence for an Italian hybrid therapy practice offering online psychology sessions and live events.",
    longDescription:
      "Produced a fully responsive Bubble build with CMS-driven content management, enabling the practice team to manage sessions, events, and articles independently. Integrated automated email flows to reduce no-shows and improved the overall clarity and trust of the product experience.",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://sentieri.me/",
    stack: ["Bubble.io", "Brevo", "CMS"],
    featureList: [
      "Online sessions module for scheduled and on-demand doctor sessions",
      "Events and articles with CMS-managed content",
      "Brevo email automations (confirmations and reminders)",
      "Fully responsive UI for mobile and desktop",
    ],
    keyFeatures: [
      "Trust-led layouts with calm hierarchy and readable long-form content.",
      "Automation to reduce no-shows through timely confirmations and reminders.",
      "Admin-friendly CMS so the team can run updates without engineering.",
    ],
    technologies: ["Bubble.io", "Brevo email integration", "CMS content management", "Responsive UI", "Workflow automation"],
    roleSummary:
      "Built the Bubble platform end to end: sessions module, CMS-driven content, Brevo automations, and responsive UI, with handover for independent operation.",
    images: [
      "/projects/sentieri-thumb.png",
      "/projects/sentieri-01-hero.png",
      "/projects/sentieri-02-offerings.png",
      "/projects/sentieri-03-dashboard.png",
    ],
  },
  {
    slug: "cega-pay",
    title: "Cega Pay",
    shortDescription:
      "Payroll management system in Bubble.io: employee records, payroll structures, payslip generation, and reporting dashboards.",
    description:
      "Constructed a payroll management system enabling companies to manage employee records, define payroll structures, and process salaries for teams of any size.",
    longDescription:
      "Users can input earnings, deductions, and pay periods to generate accurate, formatted payroll reports on demand, replacing error-prone manual processes. Released automated financial dashboards giving companies full visibility over payroll history, payment status, and reporting, saving an estimated 5+ hours per payroll cycle.",
    tool: "Bubble.io",
    category: "Web App",
    externalUrl: "https://cega-pay.bubbleapps.io/version-test/",
    stack: ["Bubble.io", "Payroll", "Dashboards"],
    featureList: [
      "Employee records and payroll structures",
      "Earnings, deductions, and pay period inputs",
      "On-demand payslip and report generation",
      "Automated dashboards for payroll visibility",
    ],
    keyFeatures: [
      "Accurate formatted payroll reports generated in minutes.",
      "Dashboards for payroll history, payment status, and reporting.",
      "Operational UX designed to replace manual spreadsheet workflows.",
    ],
    technologies: ["Bubble.io", "Workflow logic", "Database design", "Dashboards and reporting"],
    roleSummary:
      "Built the payroll system end to end: data model, workflows, report generation, and dashboards to reduce manual effort and improve visibility.",
    images: [
      "/projects/cega-pay-thumb.png",
      "/projects/cega-pay-01-dashboard.png",
      "/projects/cega-pay-02-how-it-works.png",
      "/projects/cega-pay-03-packs.png",
      "/projects/cega-pay-04-form.png",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Home grid preview — three of four featured builds */
export const homePreviewSlugs = ["prosafenet", "publiclink", "sentieri"] as const;

export const linkedinProjectsUrl =
  "https://www.linkedin.com/in/ridahefatima/details/projects/" as const;
