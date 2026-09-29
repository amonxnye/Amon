# Amon
Amon Website projects

A personal site listing the things I've built.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build
```

## Deployment

Deployed to **Firebase App Hosting**, which runs the app as a server.

`next.config.ts` sets `output: "standalone"` because App Hosting's Next.js
adapter builds the app and then reads
`.next/standalone/.next/routes-manifest.json`. Do not change this to
`output: "export"` — a static export writes to `out/` and never creates that
file, and the deploy fails with `ENOENT`.

The page itself is statically prerendered, so if you ever want to host it as
plain files instead, switch to `output: "export"` and serve `out/` from
classic Firebase Hosting rather than App Hosting.

## Adding a project

Projects are a single array in `src/data/projects.ts`. Add an entry and it
appears on the page — there's nothing else to wire up.
