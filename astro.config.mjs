import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import netlify from "@astrojs/netlify";

export default defineConfig({
  // Dirs to match Gatsby
  publicDir: "static",
  outDir: "public",
  integrations: [
    react(),
    tailwind(),
    sanityIntegration({
      projectId: "o2y1bt2g",
      dataset: "summit",
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [glsl()],
  },
  output: "static",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
