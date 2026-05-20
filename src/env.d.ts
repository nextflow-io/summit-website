/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

declare namespace App {
  interface Locals {
    draftMode: boolean;
  }
}

interface ImportMetaEnv {
  readonly SANITY_READ_TOKEN?: string;
  readonly SANITY_PREVIEW_SECRET?: string;
}

interface Window {
  gtag: (command: string, ...args: any[]) => void;
  dataLayer: any[];
}
