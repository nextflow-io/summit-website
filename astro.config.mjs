import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import glsl from "vite-plugin-glsl";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

const host = "https://summit.nextflow.io";

export default defineConfig({
  site: host,
  integrations: [
    react(),
    tailwind(),
    sanityIntegration({
      projectId: "o2y1bt2g",
      dataset: "summit",
      useCdn: false,
      token: import.meta.env.SANITY_READ_TOKEN, 
      apiVersion: '2024-01-01', 
      studioBasePath: '/studio',
    }),
    icon(),
    sitemap({
      filter: (page) => page !== `${host}/2026/`,
    }),
  ],
  vite: {
    plugins: [glsl()],
  },
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});