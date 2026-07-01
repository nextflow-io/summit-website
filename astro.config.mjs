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
  // build: {
  //   assetsPrefix: 'https://nextflow-summit-2026.netlify.app'
  // },
  integrations: [
    react(),
    tailwind(),
    sanityIntegration({
      projectId: "o2y1bt2g",
      dataset: "summit",
      useCdn: false,
    }),
    icon(),
    sitemap({
      // Keep the unlisted "I'm Attending" avatar page out of the sitemap.
      filter: (page) =>
        page !== `${host}/2025/` &&
        page !== `${host}/attending/` &&
        page !== `${host}/attending`,
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
