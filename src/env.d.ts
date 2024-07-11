/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
interface Window {
  gtag: (command: string, ...args: any[]) => void;
  dataLayer: any[];
}
