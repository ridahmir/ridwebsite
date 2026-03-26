export type AboutContent = {
  hero: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  story: {
    title: string;
    paragraphs: string[];
  };
  experience: Array<{
    company: string;
    location: string;
    title?: string;
    dates: string;
    bullets: string[];
  }>;
  education: Array<{
    title: string;
    institution: string;
    details: string[];
    certifications?: string[];
  }>;
  skills: Array<{
    category: string;
    items: Array<{
      name: string;
      detail: string;
    }>;
  }>;
  recommendations: {
    title: string;
    ctaLabel: string;
    ctaHref: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
      href?: string;
      imageUrl?: string;
    }>;
  };
};

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "Get To Know",
    title: "About Me",
    paragraphs: [
      "I’m a Full-Stack No-Code Developer with 7+ years of experience, helping founders and businesses turn ideas into scalable digital products. My team and I specialize in building websites, MVPs, and mobile apps that are fast, reliable, and production-ready.",
      "From Bubble and Webflow to API and AI integrations, I focus on clean UX, strong architecture, and efficient workflows to deliver high-quality results without the delays of traditional development. I also use Vibe Coding tools and Cursor to build static, visually striking websites that combine performance with modern design.",
    ],
  },
  stats: [
    { value: "25+", label: "Clients Served" },
    { value: "3+", label: "Certifications" },
    { value: "26+", label: "Projects Delivered" },
  ],

  story: {
    title: "My Journey",
    paragraphs: [
      "My journey into development started with a curiosity about how technology can simplify everyday problems. What began as exploration quickly turned into a passion for building meaningful digital products.",
      "Over the years, I have worked on a wide range of projects, from MVPs for startups to full-scale web and mobile applications. Along the way, I have continuously learned and mastered new tools to strengthen my skills, including Bubble, Webflow, Cursor, Vercel, and modern no-code/low-code platforms. I have also built a strong network of talented developers, working with them consistently to deliver high-quality, scalable solutions.",
      "Beyond technical skills, I am committed to designing intuitive experiences, streamlining workflows, and finding creative ways to solve real-world problems. Today, my team and I help businesses bring their ideas to life faster, combining creativity, strategy, and no-code development to deliver production-ready products with lasting impact.",
    ],
  },

  experience: [
    {
      company: "ETERNA Creative",
      location: "Serbia",
      title: "Bubble.io Specialist",
      dates: "Nov 2025 - Present",
      bullets: [
        "Built and optimized no-code web applications across multiple client projects using Bubble’s visual development environment.",
        "Developed and enhanced Bubble-based products, including ProSafeNet and PublicLink platforms.",
        "Implemented new features, workflows, and responsive UI improvements to increase performance and user experience.",
        "Integrated APIs, optimized databases, and maintained strong data security and workflow efficiency.",
        "Handled testing, debugging, and documentation for reliable production delivery.",
        "Collaborated remotely with the Eterna Creative team and managed updates through Slack and Notion.",
      ],
    },
    {
      company: "Prevail",
      location: "Canada",
      title: "Full Stack Bubble Developer",
      dates: "Sep 2024 - Mar 2025",
      bullets: [
        "Collaborated with clients and stakeholders to gather requirements and deliver tailored no-code solutions.",
        "Built product features and workflows in Bubble with a focus on usability, reliability, and scalability.",
        "Provided ongoing technical support and optimization guidance to maximize platform value.",
      ],
    },
    {
      company: "Buyer Folio",
      location: "Canada",
      title: "Full Stack Bubble Developer",
      dates: "Jul 2024 - Dec 2024",
      bullets: [
        "Delivered a complex real estate-focused mobile application with no-code workflows and robust feature logic.",
        "Wrapped the mobile app using BDK and prepared production-ready builds for deployment pipelines.",
        "Optimized user flows and platform performance for real estate professionals and field usage.",
        "Partnered with stakeholders on enhancements, QA cycles, and ongoing technical support.",
      ],
    },
    {
      company: "Digital Nucleus",
      location: "Malaysia",
      title: "Senior Bubble Developer",
      dates: "Apr 2022 - Sep 2024",
      bullets: [
        "Architected and developed Bubble web applications from business requirements to production launch.",
        "Designed intuitive interfaces and optimized workflow logic for seamless user experiences.",
        "Collaborated with cross-functional remote teams to deliver milestone-based project outcomes.",
        "Translated complex business needs into scalable, practical technical solutions.",
      ],
    },
  ],

  education: [
    {
      title: "Bachelors in Commerce",
      institution: "University of the Punjab",
      details: ["GPA: 3.1"],
      certifications: [
        "Bubble Certificate (Million Labs)",
        "EF SET English Certificate 78/100 (C2 Proficient)",
        "Basic Bubble Certification (No Code Alliance)",
      ],
    },
  ],

  skills: [
    {
      category: "Core Expertise",
      items: [
        {
          name: "Full-Stack No-Code Development",
          detail:
            "Build websites, web apps, dashboards, and complex workflows without traditional coding.",
        },
        {
          name: "MVP Development & Product Launch",
          detail: "Validate startup ideas quickly with production-ready MVPs.",
        },
        {
          name: "UI/UX Design",
          detail:
            "Design intuitive, visually appealing interfaces for web and mobile.",
        },
        {
          name: "Consultation & Strategy",
          detail:
            "Advise on tech stack, workflow architecture, and scalability.",
        },
      ],
    },
    {
      category: "Technical Skills",
      items: [
        {
          name: "Bubble",
          detail: "Advanced database and workflow implementation.",
        },
        {
          name: "Webflow",
          detail: "Responsive and visually rich website development.",
        },
        {
          name: "Cursor",
          detail: "Build static, optimized, modern websites.",
        },
        {
          name: "Vercel",
          detail: "Hosting and deployment of static websites.",
        },
        {
          name: "API Integrations",
          detail: "Connect third-party services for automation.",
        },
        {
          name: "AI Integrations",
          detail: "Embed AI functionality to enhance apps.",
        },
        {
          name: "Database Design",
          detail: "Structure scalable and efficient databases.",
        },
        {
          name: "Workflow Automation",
          detail: "Streamline processes efficiently.",
        },
      ],
    },
    {
      category: "Specialized Skills",
      items: [
        {
          name: "Mobile App Publishing (BDK)",
          detail: "Wrap and deploy apps on App Store & Play Store.",
        },
        {
          name: "App Testing & Debugging",
          detail: "Full testing with detailed reports and solutions.",
        },
        {
          name: "In-App Purchase Integration",
          detail: "Monetize apps seamlessly.",
        },
        {
          name: "Performance Optimization",
          detail: "Improve speed, reliability, and scalability of apps.",
        },
        {
          name: "Project Documentation",
          detail: "Clear bug and feature reporting.",
        },
      ],
    },
  ],

  recommendations: {
    title: "Recommendations",
    ctaLabel: "View more",
    ctaHref:
      "https://www.linkedin.com/in/ridahefatima/details/recommendations/?detailScreenTabIndex=0",
    items: [
      {
        quote:
          "Working with Ridah was great, she is quite advanced in Bubble skills and has good approach. We managed to bring some extraordinary things to life.",
        name: "Marko Milojkovic",
        role: "CEO, Eterna Creative",
        imageUrl: "/review-marko.png",
      },
      {
        quote:
          "She’s been managing the development with incredible skill and precision. Her expertise in Bubble, attention to detail, and dedication are truly impressive.",
        name: "Edouard Romeus",
        role: "CEO, Buyerfolio",
        href: "https://www.linkedin.com/in/edouardromeus/",
        imageUrl: "/review-edward.png",
      },
      {
        quote:
          "She possesses remarkable skills that help her efficiently manage complex tasks and ensure the timely completion.",
        name: "Mir Imad Ahmed",
        role: "CEO, Digital Nucleus",
        imageUrl: "/review-imad.png",
      },
    ],
  },
};

