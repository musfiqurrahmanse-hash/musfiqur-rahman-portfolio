import projectData from "./projects.json";
/**
 * CENTRAL CONTENT FILE — edit this file to update the portfolio.
 * Add new items to any array below; the page renders them automatically.
 * Anything marked `placeholder: true` or "Details coming soon" is unverified
 * and should be replaced by the owner.
 */

export const profile = {
  name: "Md. Musfiqur Rahman",
  initials: "MR",
  tagline: "CSE Student | Machine Learning & Software Development",
  intro:
    "I'm a Computer Science & Engineering undergraduate at AIUB, exploring machine learning, data analysis and software development through coursework and research-oriented projects.",
  about: [
    "I study Computer Science & Engineering at American International University-Bangladesh (AIUB). My work so far spans machine learning experiments, digital logic design, desktop and web applications, and lab coursework.",
    "Add a longer biography here — your motivations, what you're currently learning, and what kind of opportunities you're looking for.",
  ],
  // Leave email empty until a verified address is provided.
  email: "",
};

export type SocialLink = { label: string; href: string; placeholder?: boolean };

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Musfiq53062" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-musfiqur-rahman-060623248/" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Md-Musfiqur-Rahman-12" },
  // TODO: replace with the real ORCID iD URL (https://orcid.org/0000-...)
  { label: "ORCID", href: "https://orcid.org/my-orcid", placeholder: true },
];

export const interests: string[] = [
  "Machine Learning",
  "Explainable AI",
  "Software Development",
  "Data Analysis",
  "Research",
];

export type SkillGroup = { title: string; items: string[] };

/** Only add technologies you have confirmed. Empty arrays show a placeholder. */
export const skills: SkillGroup[] = [
  { title: "Programming Languages", items: ["C#"] },
  { title: "Frameworks & Tools", items: [".NET"] },
  { title: "Databases", items: [] },
  { title: "ML & Data Tools", items: [] },
];

export type ProjectCategory = "ml" | "software" | "coursework";

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine Learning & Research" },
  { id: "software", label: "Software Development" },
  { id: "coursework", label: "Coursework" },
];

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  repo?: string;
  liveDemo?: string;
  image?: string; // path relative to the public directory
  gallery?: string[]; // paths relative to the public directory
  tags?: string[]; // confirmed technologies only
  note?: string;
};

export const projects: Project[] = projectData as Project[];

export type ResearchStatus = "Draft" | "Ongoing" | "Preprint" | "Published";
export type ResearchKind = "Publication" | "Ongoing Research" | "Conference Presentation";

export type ResearchItem = {
  kind: ResearchKind;
  title: string;
  status: ResearchStatus;
  year?: string;
  abstract: string;
  doi?: string;
  paperLink?: string;
  dataset?: { label: string; href: string };
  code?: string;
};

export const research: ResearchItem[] = [
  {
    kind: "Ongoing Research",
    title:
      "Regional Load-Shedding Severity Classification Using Supply-Side Constraints in Bangladesh",
    status: "Draft",
    abstract:
      "Draft entry — studies how supply-side constraints relate to regional load-shedding severity in Bangladesh using classification models. Add the final abstract, status and venue once confirmed.",
    code: "https://github.com/Musfiq53062/Regional-Load-Shedding-Severity-Classification-Using-Supply-Side-Constraints-in-Bangladesh",
  },
];

export type Dataset = {
  title: string;
  description: string;
  link?: string;
  doi?: string; // add only if verified
};

export const datasets: Dataset[] = [
  {
    title: "Extended Bangladesh Electricity Dataset (2019–2026)",
    description:
      "Combines an attributed historical portion with a later extension sourced from the Bangladesh Power Development Board (BPDB). Edit this description with exact coverage and attribution.",
    link: "https://data.mendeley.com/datasets/yp5y4thtfm/1",
  },
];

export type Education = {
  institution: string;
  degree: string;
  period?: string;
  details?: string;
};

export const education: Education[] = [
  {
    institution: "American International University-Bangladesh (AIUB)",
    degree: "B.Sc. in Computer Science & Engineering (undergraduate)",
    details: "Dates, coursework highlights and other details — add later.",
  },
];

export type Achievement = { title: string; issuer?: string; year?: string; link?: string };

/** Certifications & achievements — empty until verified items are added. */
export const certifications: Achievement[] = [];
export const achievements: Achievement[] = [];
