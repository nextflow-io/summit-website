import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";

import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanityIntegration({
      projectId: "ir5d5hbg",
      dataset: "production",
      useCdn: false,
    }),
  ],
});
