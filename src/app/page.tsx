import { projects } from "@/data/projects";

const languageColor: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572a5",
  HTML: "#e34c26",
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20 sm:py-28">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Amon
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          I build software — AI agents and tooling, web applications, and the
          occasional game. Most of it starts as a question I wanted answered.
        </p>
        <a
          href="https://github.com/amonxnye"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          github.com/amonxnye
          <span aria-hidden="true">→</span>
        </a>
      </header>

      <section className="mt-16" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="font-mono text-xs uppercase tracking-widest text-muted"
        >
          Selected projects
        </h2>

        <ul className="mt-6 space-y-4">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-medium group-hover:text-accent">
                    {project.name}
                  </h3>
                  <span className="text-sm text-muted">{project.tagline}</span>
                </div>

                <p className="mt-3 leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-4 flex items-center gap-4 font-mono text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full"
                      style={{
                        backgroundColor:
                          languageColor[project.language] ?? "currentColor",
                      }}
                    />
                    {project.language}
                  </span>
                  <span>{project.year}</span>
                  {project.demo ? <span>live</span> : null}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-20 border-t border-border pt-8 font-mono text-xs text-muted">
        Built with Next.js. Source on{" "}
        <a
          href="https://github.com/amonxnye/Amon"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        .
      </footer>
    </main>
  );
}
