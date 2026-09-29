import type { NextConfig } from "next";

// "standalone" is what Firebase App Hosting needs: its Next.js adapter builds
// the app, then reads .next/standalone/.next/routes-manifest.json to wire up
// routing. Setting "export" here instead produces a static export in out/,
// that manifest is never written, and the deploy fails with ENOENT.
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
