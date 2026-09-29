export type Project = {
  name: string;
  tagline: string;
  summary: string;
  language: string;
  year: number;
  url: string;
  demo?: string;
};

// Summaries below are taken from each repository's own README.
export const projects: Project[] = [
  {
    name: "Phoenix",
    tagline: "A governed agent organization",
    summary:
      "Runs a fleet of LLM agents as an organization rather than a swarm: one measurable goal, a board that approves spending, a ledger that retires agents when their budget runs out, memory that outlives any single agent, and a human gate in front of anything irreversible. The rules are a constitution, and every article names the code that enforces it.",
    language: "Python",
    year: 2026,
    url: "https://github.com/amonxnye/Phoenix",
  },
  {
    name: "WebBridge",
    tagline: "Any website as an agent-ready endpoint",
    summary:
      "Crawls a site with a headless browser, uses Claude to classify pages and extract entities and actions, then generates an MCP endpoint, an agent.json discovery manifest and an OpenAPI 3.1 spec for it — turning ordinary websites into something agents can call.",
    language: "TypeScript",
    year: 2026,
    url: "https://github.com/amonxnye/WebAgentbridge",
  },
  {
    name: "Agentic School",
    tagline: "AI School of AI Tools and Agents",
    summary:
      "An AI-first, human-supervised school for AI-native work. Teaching agents deliver the everyday instruction while human experts design the curriculum and supervise quality. The promise on the tin: $100, two weeks, one new AI capability.",
    language: "TypeScript",
    year: 2026,
    url: "https://github.com/amonxnye/AgenticSchool-",
  },
  {
    name: "AIPharmacy",
    tagline: "Multi-tenant pharmacy management",
    summary:
      "A cloud SaaS for pharmacy outlets: point of sale that deducts stock transactionally on a FEFO basis, batch-level inventory with expiry and low-stock tracking, multi-outlet branches, staff onboarding, and live dashboards — with tenant isolation enforced by Firestore security rules.",
    language: "TypeScript",
    year: 2025,
    url: "https://github.com/amonxnye/AIPharmacy",
  },
  {
    name: "World Order",
    tagline: "Nation-building from 1925 to today",
    summary:
      "A historical simulator where you lead a nation through the eras: researching technology, balancing resources, allocating population between workers, soldiers and scientists, managing finances and education, and holding your own diplomatically.",
    language: "TypeScript",
    year: 2025,
    url: "https://github.com/amonxnye/WorldOrder",
    demo: "https://worldordergameapp.web.app",
  },
  {
    name: "RaceGame",
    tagline: "A browser racing experiment",
    summary:
      "A single-file browser racing game — one index.html, no build step, no dependencies.",
    language: "HTML",
    year: 2025,
    url: "https://github.com/amonxnye/RaceGame",
  },
];
