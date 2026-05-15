import { sanityClient } from 'sanity:client'

// Returns a client configured to fetch draft content.
// Use in fetchers when Astro.locals.draftMode is true.
export function getDraftClient() {
  return sanityClient.withConfig({
    useCdn: false,
    token: import.meta.env.SANITY_READ_TOKEN,
    perspective: 'previewDrafts',
  })
}
