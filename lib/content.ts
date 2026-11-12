export const profile = {
  name: "Kipkorir Amos",
  email: "amosbett99@gmail.com",
  github: "https://github.com/lixelamos",
  linkedin: "https://www.linkedin.com/in/amosbett99/",
  behance: "https://www.behance.net/amosbett",
  resume:
    "https://drive.google.com/file/d/1PmtLIVacga9QaaUgWsrlhP8BIMDm1t0M/view?usp=sharing",
};
export const categories = [
  "All work",
  "Full stack",
  "Frontend",
  "Developer tools",
] as const;
export type Category = (typeof categories)[number];
export type Project = {
  slug: string;
  name: string;
  category: Exclude<Category, "All work">;
  label: string;
  description: string;
  stack: string[];
  url: string;
  github?: string;
  color: string;
  role: string;
  detail: string;
  liveNote?: string;
  screenshot: string;
  screenshotCaption: string;
  context: string;
  highlights: string[];
};
export const projects: Project[] = [
  {
    slug: "flowdock",
    name: "FlowDock",
    category: "Frontend",
    label: "MACOS PRODUCT \u00b7 WEBSITE",
    description:
      "A product website for FlowDock, a macOS app that opens saved groups of apps, websites, and folders together.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    url: "https://www.flowdock.space/",
    color: "sage",
    role: "Product website",
    detail:
      "Built with the Next.js App Router, React, and TypeScript. The website includes feature pages, an MDX journal, a changelog, and product videos produced with Remotion.",
    screenshot: "/images/projects/flowdock.png",
    screenshotCaption: "Live FlowDock website with the app workspace preview",
    context:
      "FlowDock saves the resources used for a task as a workspace. Its website introduces the Mac app, demonstrates workspace launching, and helps visitors explore features and download the app.",
    highlights: [
      "Product demonstrations",
      "MDX journal",
      "Download and release pages",
    ],
  },
{
  "slug": "evcharging",
  "name": "EV Charging Dashboard",
  "category": "Frontend",
  "label": "ELECTRIC MOBILITY · DASHBOARD",
  "description": "A React and TypeScript dashboard integrating charging-device APIs for station status, device monitoring, and charging records.",
  "stack": [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Leaflet",
    "Recharts"
  ],
  "url": "https://ev-charging-dashboard-alpha.vercel.app/",
  "color": "blue",
  "role": "Frontend development",
  "detail": "Integrated charging-infrastructure REST APIs through Axios for charge-point status, heartbeats, meter readings, and transactions. The dashboard polls every 30 seconds, with Leaflet maps and Recharts visualisations. Some charts and workflow values use sample data.",
  "liveNote": "Demo sign-in accepts any email and password",
  "screenshot": "/images/projects/evcharging.png",
  "screenshotCaption": "Demo dashboard with a Nairobi station map, charging information, and usage statistics",
  "context": "Drivers need to find charging stations and organise charging sessions, while administrators manage the charging network. Separate user and administrator routes support those workflows.",
  "highlights": [
    "Charging-device API integration",
    "Polling for station status",
    "User and admin views"
  ]
},
  {
    slug: "pelini",
    screenshot: "/images/projects/pelini.png",
    screenshotCaption: "Public landing page",
    context:
      "Financial teams need a central place to manage collections and customer accounts. The interface brings those workflows into a role-based web application.",
    highlights: [
      "Role-based interface",
      "Backend API integration",
      "Responsive layouts",
    ],
    liveNote: "Sign-in required",
    name: "Resolva Africa (Pelini)",
    category: "Frontend",
    label: "BUSINESS SOFTWARE · FRONTEND",
    description:
      "Frontend for a debt collection management system, with authentication, role-based access, and backend API integration.",
    stack: ["Next.js", "TypeScript", "REST APIs"],
    url: "https://pelini-ltd.vercel.app/",
    color: "peach",
    role: "Frontend development",
    detail:
      "I built the frontend, integrated the backend APIs, and implemented authentication and role-based access. The interface uses Next.js and TypeScript, with responsive layouts for the management workflows.",
  },
  {
    slug: "quickai",
    screenshot: "/images/projects/quickai.png",
    screenshotCaption: "Public landing page",
    context:
      "A single workspace for common content tasks: writing articles, generating titles and images, and reviewing a r\u00e9sum\u00e9. The public tool catalogue leads into a signed-in workspace.",
    highlights: [
      "React interface",
      "Express backend",
      "Content-tool catalogue",
    ],
    liveNote: "Sign-in required",
    name: "QuickAI",
    category: "Full stack",
    label: "AI SAAS · FULL STACK",
    description:
      "An AI productivity application with a React interface and Express backend.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Express"],
    url: "https://quick-ai-flax-two.vercel.app/",
    github: "https://github.com/lixelamos/QuickAi",
    color: "lavender",
    role: "Full stack application",
    detail:
      "React and TypeScript handle the interface, with Tailwind CSS for styling and Express on the backend. The application groups several AI content workflows behind a common interface and sign-in flow.",
  },
  {
    slug: "smartseason",
    screenshot: "/images/projects/smartseason.png",
    screenshotCaption:
      "Public sign-in screen; field dashboards require an account",
    context:
      "Coordinators assign field agents to specific fields. Agents record crop stages and notes, so observations stay connected to the field and growing season.",
    highlights: [
      "Field assignments",
      "Crop-stage observations",
      "Role-based access",
    ],
    liveNote: "Sign-in required",
    name: "SmartSeason",
    category: "Full stack",
    label: "AGRICULTURE · FIELD MONITORING",
    description:
      "A field-monitoring application for assigning agents to fields and recording crop stages and observations.",
    stack: ["TypeScript", "Node.js", "Express", "SQLite"],
    url: "https://shamba-phi.vercel.app/",
    github: "https://github.com/lixelamos/smartseason",
    color: "sage",
    role: "Full stack development",
    detail:
      "Built with TypeScript, Express, and SQLite. Access is scoped to administrators and assigned agents, connecting field assignments with the observations each user is allowed to record.",
  },
  {
    slug: "plando",
    screenshot: "/images/projects/plando.png",
    screenshotCaption: "Task creation screen",
    context:
      "A small productivity app for turning a work session into a manageable list of tasks. The interface provides task creation, tags, and descriptions alongside time management.",
    highlights: [
      "Task creation",
      "Tags and descriptions",
      "Focus-session planning",
    ],
    name: "Plan-Do",
    category: "Frontend",
    label: "PRODUCTIVITY · WEB APPLICATION",
    description:
      "A task manager with a Pomodoro timer for planning tasks and focused work sessions.",
    stack: ["React", "TypeScript", "Weather API"],
    url: "https://promodoro-to-app.vercel.app/",
    github: "https://github.com/lixelamos/promodoro-To-Do-App",
    color: "blue",
    role: "Frontend development",
    detail:
      "Built with React and TypeScript. The frontend combines task creation, optional descriptions, and tags in a compact interface designed around planning a focused work session.",
  },
];

export const secondaryInterest = {
  title: "E-learning & content digitisation",
  description:
    "Alongside software development, I’m interested in making learning more engaging — curating course content and turning curricula into interactive modules with Articulate 360, H5P, Canva, and SCORM.",
  url: "https://e-learn-portfolio.vercel.app/",
};
