import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanityIntegration({
      projectId: "o2y1bt2g",
      dataset: "summit",
      useCdn: false,
    }),
    icon(),
  ],
  vite: {
    plugins: [glsl()],
  },
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
