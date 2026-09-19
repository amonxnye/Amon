# Amon
Amon Website projects

A personal site listing the things I've built. Static Next.js site, no backend.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # static site written to ./out
```

`next.config.ts` sets `output: "export"`, so the build produces a plain
HTML/CSS/JS bundle in `out/` that any static host will serve.

## Adding a project

Projects are a single array in `src/data/projects.ts`. Add an entry and it
appears on the page — there's nothing else to wire up.
