export type ServiceOffering = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  priceLine: string;
  priceEstimate: string;
  scopeNote: string;
  features: string[];
  cta: { label: string; href: string };
};

export type WhyPoint = {
  title: string;
  description: string;
};

const wa = (phoneDigits: string, text: string) =>
  `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;

/** E.164 digits only; matches siteConfig.phoneTel without + */
export const servicesWhatsAppDigits = "923305863582";

export const servicesContent = {
  hero: {
    eyebrow: "Full-stack no-code product builder",
    headline: "End-to-end products, not just one-off tasks",
    tagline:
      "I help founders and teams ship complete digital products: validated MVPs, polished web apps, and store-ready mobile, designed, built, tested, and launched with a small expert team behind you.",
    trustLine:
      "Trusted by founders, startups, and businesses to build scalable digital products.",
    primaryCta: {
      label: "Let's Build Your Product",
      href: wa(
        servicesWhatsAppDigits,
        "Hi Ridah, I'd like to discuss building a product end-to-end. Here's a quick overview of what I need:",
      ),
    },
    highlights: [
      {
        title: "Ship something users can adopt",
        body: "Products structured for signup, retention, and the next feature, not a one-off page.",
      },
      {
        title: "Production-minded delivery",
        body: "Workflows, data, and integrations designed to survive real traffic and real users.",
      },
      {
        title: "One accountable path to launch",
        body: "Design through stores and deployment, with clear updates and documented handover.",
      },
    ],
  },
  about: {
    title: "How I work with you",
    paragraphs: [
      "You get a product partner, not a ticket queue. My team and I take ownership from clarity of goals through launch, so you move from idea to something users can actually adopt, not a fragile demo.",
      "We combine no-code speed with disciplined structure: clear UX, maintainable data and workflows, integrations that hold up in production, and communication you can plan around.",
    ],
    trustLine:
      "Trusted by founders, startups, and businesses to build scalable digital products.",
    skillsTechnical: [
      "Bubble",
      "Webflow",
      "Cursor",
      "Vercel",
      "API integrations",
      "AI integrations",
    ],
    skillsSpecialized: [
      "Mobile app publishing (BDK)",
      "App testing & debugging",
      "In-app purchases",
      "Performance optimization",
      "Scalable product architecture",
    ],
  },
  offerings: [
    {
      title: "No-code web & mobile products",
      description:
        "Launch a credible product your users can sign up for and pay for: web apps, MVPs, and mobile experiences built on a foundation that will not collapse when you add the next feature.",
    },
    {
      title: "UX that converts and retains",
      description:
        "Turn confusion into clarity: flows, hierarchy, and interface polish so people understand what to do next and actually complete signup, purchase, or core tasks.",
    },
    {
      title: "Testing & launch confidence",
      description:
        "Reduce surprise breakages before go-live with structured QA, documented issues, and fixes, so you ship knowing critical paths work under real use.",
    },
    {
      title: "App Store & Play Store delivery",
      description:
        "Get from Bubble build to installable apps: BDK wrapping, store requirements, and publishing support so your product is discoverable where your users already are.",
    },
    {
      title: "Monetization that fits your model",
      description:
        "Unlock revenue with subscriptions and in-app purchases implemented to align with store rules and your pricing strategy, without blocking your roadmap.",
    },
    {
      title: "AI that supports real workflows",
      description:
        "Embed AI where it saves time or improves outcomes: automation, assisted flows, and integrations, without turning your product into a fragile prototype.",
    },
    {
      title: "Deployment, stability & iteration",
      description:
        "Keep what you shipped healthy: hosting, updates, fixes, and incremental improvements so your product stays fast, secure, and aligned with how you operate.",
    },
    {
      title: "Workflow automation & integrations",
      description:
        "Connect the tools your team already uses so data moves reliably, manual work drops, and operations scale without hiring only for glue work.",
    },
    {
      title: "Product strategy & technical advisory",
      description:
        "Make confident build decisions early: scope, stack fit, risks, and a roadmap that balances speed with a foundation you will not regret at v2.",
    },
  ] as ServiceOffering[],
  whatYouGet: {
    title: "What You Get",
    eyebrow: "Outcomes",
    bullets: [
      "End-to-end product development from idea to launch",
      "Clean, scalable, and maintainable architecture",
      "Fast delivery without compromising quality",
      "Production-ready applications",
      "Clear communication and structured workflow",
      "Documentation and handover so your team can operate the product",
    ],
  },
  useCases: {
    title: "What I Can Help You Build",
    eyebrow: "Use cases",
    items: [
      "Startup MVPs",
      "SaaS platforms",
      "Business automation tools",
      "Internal dashboards",
      "Mobile applications",
      "Client portals & membership sites",
    ],
  },
  pricing: {
    title: "Investment & packages",
    subtitle:
      "Every build is scoped to your product, timeline, and risk profile. Below are typical engagement shapes; final pricing is always custom.",
    scopeBanner:
      "Custom pricing based on project scope. Estimates below are ballpark starting points, not fixed quotes.",
    plans: [
      {
        name: "Starter",
        description:
          "Validate an idea or ship a focused web presence without overbuilding.",
        priceLine: "Estimated from",
        priceEstimate: "~$1,500 – $4,000 USD",
        scopeNote: "Scoped to landing pages, small sites, or a tight MVP slice.",
        features: [
          "Discovery: goals, audience, and success metrics",
          "Responsive UI aligned to your brand",
          "Essential integrations (forms, analytics, email)",
          "Deployment you can own or we maintain",
        ],
        cta: {
          label: "Discuss Your Project",
          href: wa(
            servicesWhatsAppDigits,
            "Hi Ridah, I'd like to walk through Starter scope and pricing.",
          ),
        },
      },
      {
        name: "Standard",
        description:
          "Ship a product real users can adopt: workflows, data, and UX that hold up.",
        priceLine: "Estimated from",
        priceEstimate: "~$5,000 – $15,000 USD",
        scopeNote: "Typical for MVPs, customer-facing apps, and operational tools.",
        features: [
          "Full build in Bubble or Webflow (as fit)",
          "Workflow and UX refinement for adoption",
          "Payments (Stripe or PayPal) when revenue is in scope",
          "QA, documentation, and handover you can rely on",
        ],
        cta: {
          label: "Discuss Your Project",
          href: wa(
            servicesWhatsAppDigits,
            "Hi Ridah, I need help scoping a Standard-tier engagement.",
          ),
        },
      },
      {
        name: "Premium",
        description:
          "Full product lifecycle: mobile publishing, monetization, and ongoing partnership.",
        priceLine: "Estimated from",
        priceEstimate: "~$15,000+ USD",
        scopeNote: "For mobile, subscriptions, AI, and long-term iteration.",
        features: [
          "Advanced workflows and scalable data design",
          "AI integrations where they drive measurable value",
          "BDK wrapping and store publishing",
          "In-app purchases or subscriptions aligned to stores",
          "Ongoing maintenance and roadmap support",
        ],
        cta: {
          label: "Discuss Your Project",
          href: wa(
            servicesWhatsAppDigits,
            "Hi Ridah, I'd like to explore Premium scope and pricing.",
          ),
        },
      },
    ] as PricingPlan[],
  },
  why: {
    title: "Why Work With Me",
    eyebrow: "Trust",
    points: [
      {
        title: "7+ years building real products",
        description:
          "Deep experience shipping no-code products that have to work for paying users, not just demos.",
      },
      {
        title: "A team behind faster, better delivery",
        description:
          "You benefit from focused specialists when it matters, with one clear lead so nothing falls through the cracks.",
      },
      {
        title: "True end-to-end ownership",
        description:
          "Design, build, test, launch, and iterate, with one accountable path from idea to stores and production.",
      },
      {
        title: "Mobile publishing expertise (BDK)",
        description:
          "From Bubble to installable apps: wrapping, store requirements, and the details that usually slow teams down.",
      },
      {
        title: "UX and scalable systems in one mindset",
        description:
          "Interfaces people understand, backed by structure that will not fight you when you scale features or traffic.",
      },
      {
        title: "Clear communication under pressure",
        description:
          "Structured updates, documented decisions, and realistic timelines so stakeholders always know where things stand.",
      },
    ] as WhyPoint[],
  },
  process: {
    title: "How we work together",
    steps: [
      {
        title: "Discovery",
        description:
          "Align on outcomes, constraints, and what “done” means for your users and business.",
      },
      {
        title: "Design direction",
        description:
          "Shape flows, hierarchy, and UI so the build phase is efficient and on-brand.",
      },
      {
        title: "Build",
        description:
          "Implement with clean structure, reusable patterns, and integration points you can extend.",
      },
      {
        title: "Test & harden",
        description:
          "QA, fixes, and documentation so launch day is not the first time you stress-test critical paths.",
      },
      {
        title: "Launch",
        description:
          "Deploy or publish to stores with checklists, handover, and go-live support.",
      },
      {
        title: "Support & iterate",
        description:
          "Post-launch improvements, maintenance, and roadmap work as your product grows.",
      },
    ],
  },
  contact: {
    title: "Let's Build Your Product",
    subtitle:
      "Tell me what you are trying to ship: timeline, audience, and what success looks like. I will respond with honest fit, next steps, and how we can move fast without cutting corners.",
    panelHeadline: "Let's Build Your Product",
    workWithMeCta: {
      label: "Work With Me",
      href: wa(
        servicesWhatsAppDigits,
        "Hi Ridah, I'd like to explore working together on an upcoming build.",
      ),
    },
    emailCtaLabel: "Email me",
  },
};
