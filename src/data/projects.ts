export type Project = {
  name: string;
  tagline: string;
  summary: string;
  language: string;
  year: number;
  url: string;
};

// REVIEW BEFORE PUBLISHING.
// Only AgenticSchool and WorldOrder have real GitHub descriptions to draw on.
// Phoenix, WebAgentbridge, AIPharmacy and RaceGame have none, so their
// summaries are inferred from the repo name and primary language — they are
// plausible, not authoritative. Replace them with your own copy.
export const projects: Project[] = [
  {
    name: "AgenticSchool",
    tagline: "AI School of AI Tools and Agents",
    summary:
      "A learning platform built around AI tooling and autonomous agents — teaching the stack by building with it.",
    language: "TypeScript",
    year: 2026,
    url: "https://github.com/amonxnye/AgenticSchool-",
  },
  {
    name: "Phoenix",
    tagline: "Python project in active development",
    summary:
      "The newest of the bunch and the only Python codebase here. Started August 2026 and still moving.",
    language: "Python",
    year: 2026,
    url: "https://github.com/amonxnye/Phoenix",
  },
  {
    name: "WebAgentbridge",
    tagline: "A bridge between web apps and agents",
    summary:
      "TypeScript groundwork for connecting browser-based applications to agent runtimes.",
    language: "TypeScript",
    year: 2026,
    url: "https://github.com/amonxnye/WebAgentbridge",
  },
  {
    name: "AIPharmacy",
    tagline: "AI in the pharmacy workflow",
    summary:
      "A TypeScript application exploring what AI assistance looks like applied to pharmacy operations.",
    language: "TypeScript",
    year: 2025,
    url: "https://github.com/amonxnye/AIPharmacy",
  },
  {
    name: "WorldOrder",
    tagline: "Age of Empires inspired strategy game",
    summary:
      "A browser strategy game in TypeScript, taking its cues from the Age of Empires era of real-time strategy.",
    language: "TypeScript",
    year: 2025,
    url: "https://github.com/amonxnye/WorldOrder",
  },
  {
    name: "RaceGame",
    tagline: "A browser racing experiment",
    summary:
      "A compact HTML and JavaScript racing game — built quickly, to see it run in the browser.",
    language: "HTML",
    year: 2025,
    url: "https://github.com/amonxnye/RaceGame",
  },
];
