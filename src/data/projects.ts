export type Project = {
  name: string;
  tagline: string;
  summary: string;
  /** Omitted when the language was not confirmed from the code. */
  language?: string;
  year: number;
  /** Public repository. Omitted for private repositories. */
  url?: string;
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
    name: "EvalDoc",
    tagline: "An AI front desk for doctors",
    summary:
      "Each doctor gets one shareable link and QR code. Patients open it and chat with an assistant without signing up. The assistant gives general health information only: it does not diagnose, prescribe or give doses, and it sends red flags such as chest pain to the doctor. The doctor sees every chat in an inbox, with draft replies to accept or rewrite.",
    language: "JavaScript",
    year: 2026,
    demo: "https://evaldoctor.ai",
  },
  {
    name: "FeytiMed HMS",
    tagline: "Hospital management for many hospitals",
    summary:
      "One web app for a hospital's clinical, admin and billing work, shared by many hospitals with each one's data kept apart. Doctors, nurses, lab, radiology, pharmacy, cashier and reception staff each get their own dashboard, and patients can see their own records and book appointments. Billing is per staff seat in UGX.",
    language: "TypeScript",
    year: 2026,
  },
  {
    name: "SOPAS",
    tagline: "Write, review and approve SOPs",
    summary:
      "Helps regulated teams, such as medical and pharmacovigilance teams, manage their Standard Operating Procedures. Write an SOP or upload a Word file, PDF or scan, get an AI quality score and plain-English writing warnings, then route it through roles and departments to a signed, stamped PDF/A with an audit trail.",
    year: 2026,
    demo: "https://sop.feytimedicalgroup.com",
  },
  {
    name: "Feyti Directory",
    tagline: "Find the nearest clinic in Uganda and Kenya",
    summary:
      "A free directory of hospitals, clinics, pharmacies, drug shops and laboratories. Search by country and type or find the nearest one to you, browse a district map shaded by how many providers each district has, and see plainly which details have been checked and where they came from.",
    year: 2026,
  },
  {
    name: "Feyti Africa Medical Group",
    tagline: "Website for a group of health platforms",
    summary:
      "The public website for Feyti Africa Medical Group and its health platforms. A static Next.js site with light and dark mode, built to work on phones.",
    year: 2026,
  },
  {
    name: "PayEngine",
    tagline: "Ledger and wallets for fintechs",
    summary:
      "Back-end rails for fintechs in East Africa: a double-entry ledger, wallets, multiple tenants on one deployment, scoped API keys, and a network for moving money between member fintechs. It has settled real UGX payments.",
    year: 2026,
  },
  {
    name: "PayBridge",
    tagline: "Card payments for Ugandan businesses",
    summary:
      "Lets businesses in Uganda take USD, EUR and GBP card payments through Stripe and settle to a local bank account or MTN Mobile Money. Payment links, live exchange rates, KYC, settlements, reports and an audit log, with separate dashboards for clients and admins.",
    year: 2026,
  },
  {
    name: "PaymentAgent and AgentStudio",
    tagline: "Payments by chat, and assistants for banks",
    summary:
      "PaymentAgent lets an operator send and track mobile money payments by chatting, and fails over to a second payment rail if the first one is down. AgentStudio, in the same repository, is a platform where banks and fintechs build their own embedded assistants, with onboarding, developer docs and a console.",
    year: 2026,
  },
  {
    name: "Horizon",
    tagline: "Banking for small businesses",
    summary:
      "Shows the balances of all your linked bank accounts in one place, sends transfers between them, and collects MTN and Airtel mobile money into a UGX wallet. It also has transaction history, an assistant chat and data export.",
    year: 2026,
  },
  {
    name: "Silk Wifi",
    tagline: "Pay-as-you-go WiFi hotspots",
    summary:
      "Local WiFi resale in Uganda. Customers pay by MTN MoMo or Airtel Money, get a voucher and log in at the hotspot page. An agent on each router reports to the cloud, and one admin dashboard shows router status and manages vouchers.",
    language: "JavaScript",
    year: 2026,
  },
  {
    name: "Silk Nova",
    tagline: "An AI media studio",
    summary:
      "Make music, video, voices and podcasts with AI, edit and recast uploaded media, and run call-centre agents that answer phone and web calls with live transcripts. Users pay from a UGX wallet, and developers can use a public API with keys and webhooks.",
    year: 2026,
  },
  {
    name: "SilkCode",
    tagline: "An open coding agent for any model",
    summary:
      "An MIT-licensed coding agent where the model is your choice: DeepSeek, Qwen, Kimi, OpenRouter, any OpenAI-compatible endpoint, or a local model through Ollama, vLLM or LM Studio. It reads a repo, plans, writes code, runs tests and reviews diffs, with approval gates on writes and risky commands. Drive it from a CLI or a web GUI on your phone. Start it with npx silkcode gui.",
    language: "Python",
    year: 2026,
    url: "https://github.com/RupertCloud/SilkCode",
  },
  {
    name: "WorldAI",
    tagline: "AI models on a world map",
    summary:
      "Groups AI models by the country of the team that built them. Pick a country on a 3D globe or a flat map to see its models and builders, then open a model's page for links to its weights, code and documentation.",
    language: "TypeScript",
    year: 2026,
  },
  {
    name: "RupertCloud AI Labs",
    tagline: "The lab's public website",
    summary:
      "Website for RupertCloud AI Labs, showing the lab's projects, research and posts, with an admin panel for publishing them.",
    year: 2026,
    demo: "https://rupertcloud.com",
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
