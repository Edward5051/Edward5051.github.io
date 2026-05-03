// =============================================================
// PORTFOLIO DATA
// Edit content here; components consume these values.
// =============================================================

export const PROFILE = {
  name: "Emmanuel Danladi",
  role: "React Frontend Developer",
  location: "Abuja, Nigeria",
  timeZone: "Africa/Lagos", // WAT, UTC+1
  status: "Building BIDA",
  email: "edante12345678@gmail.com",
  phone: "+234 805 818 5936",
  phoneTel: "+2348058185936", // for tel: links
  linkedin: "https://www.linkedin.com/in/emmanuel-danladi-72471b29a/",
  linkedinHandle: "/in/emmanuel-danladi",
  github: "https://github.com/Edward5051",
  githubHandle: "@Edward5051",
  X: "https://x.com/HiredSpender",
  Xhandle: "@HiredSpender",
  bidaUrl: "https://bida.finance",
  startedCodingYear: 2020,
} as const;

export type WorkItem = {
  num: string;
  name: string;
  italic: string;
  tech: string;
  year: string;
  url: string;
};

export const WORK: WorkItem[] = [
  {
    num: "01",
    name: "BIDA",
    italic: "Webapp",
    tech: "React, TS, Tailwind, shadcn/ui, TanStack Query",
    year: "2025 →",
    url: "https://bida.finance",
  },
  {
    num: "02",
    name: "Project",
    italic: "Defense",
    tech: "React, Redux, Supabase",
    year: "2024",
    url: "https://github.com/Edward5051/project-defense",
  },
  {
    num: "03",
    name: "Ethers",
    italic: "Example",
    tech: "React, ethers.js, blockchain interaction",
    year: "2024",
    url: "https://github.com/Edward5051/ethers-example",
  },
  {
    num: "04",
    name: "Jumia Food",
    italic: "Clone",
    tech: "React, Tailwind CSS, responsive UI",
    year: "2023",
    url: "https://github.com/Edward5051/jumia-food-Jdlab",
  },
  {
    num: "05",
    name: "",
    italic: "Voized",
    tech: "JavaScript, HTML, CSS — desktop voice chat",
    year: "2020",
    url: "https://github.com/Edward5051/Voized",
  },
  {
    num: "06",
    name: "Manga & Manhwa",
    italic: "Typesetting",
    tech: "Photoshop, Illustrator — Ace Scans / Frenzied Frogs",
    year: "2021",
    url: "https://github.com/Edward5051",
  },
];

export const BIDA_STACK = [
  "React 18",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "Radix UI",
  "TanStack Query",
  "React Router",
  "Web3 Wallet",
] as const;

export type DisciplineItem = { name: string; italic: string; num: string };

export const DISCIPLINES: DisciplineItem[] = [
  { name: "Frontend", italic: "Development", num: "01" },
  { name: "Graphics", italic: "Design", num: "02" },
  { name: "", italic: "Typesetting", num: "03" },
  { name: "Hardware", italic: "& PC Builds", num: "04" },
];

export type StackItem = { text: string; italic?: boolean };
export type StackCell = { cat: string; items: StackItem[] };

export const STACK_GRID: StackCell[] = [
  {
    cat: "Core",
    items: [
      { text: "React 18" },
      { text: "TypeScript" },
      { text: "JavaScript" },
      { text: "(ES6+)", italic: true },
    ],
  },
  {
    cat: "UI & Styling",
    items: [
      { text: "Tailwind CSS" },
      { text: "shadcn/ui" },
      { text: "Radix" },
      { text: "primitives", italic: true },
    ],
  },
  {
    cat: "State & Routing",
    items: [
      { text: "TanStack Query" },
      { text: "Redux" },
      { text: "React" },
      { text: "Router", italic: true },
    ],
  },
  {
    cat: "Build & Tools",
    items: [
      { text: "Vite" },
      { text: "Git & GitHub" },
      { text: "Figma" },
    ],
  },
  {
    cat: "Backend",
    items: [
      { text: "Supabase" },
      { text: "REST APIs" },
      { text: "ethers.js" },
    ],
  },
  {
    cat: "Design",
    items: [
      { text: "Photoshop" },
      { text: "Illustrator" },
      { text: "Typesetting" },
    ],
  },
  {
    cat: "Hardware",
    items: [
      { text: "PC Building" },
      { text: "Diagnostics" },
      { text: "Optimization", italic: true },
    ],
  },
  {
    cat: "Soft",
    items: [
      { text: "Problem solving" },
      { text: "Communication" },
      { text: "Taste", italic: true },
    ],
  },
];

export const MARQUEE_ITEMS = [
  "React",
  "TypeScript",
  "Tailwind",
  "shadcn/ui",
  "Web3",
  "Vite",
  "Figma",
  "Photoshop",
] as const;
