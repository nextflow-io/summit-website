import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Dirs to match Gatsby
  publicDir: "static",
  outDir: "public",
  integrations: [react(), tailwind(), sanityIntegration({
    projectId: "o2y1bt2g",
    dataset: "summit",
    useCdn: false
  })]
});