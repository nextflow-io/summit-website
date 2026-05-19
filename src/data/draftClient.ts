import type {SanityClient} from '@sanity/client'
import {sanityClient} from 'sanity:client'

export function hasDraftToken(): boolean {
  return Boolean(import.meta.env.SANITY_READ_TOKEN?.trim())
}

// Returns a client configured to fetch draft content.
// Use via getContentClient() when Astro.locals.draftMode is true.
export function getDraftClient(): SanityClient {
  const token = import.meta.env.SANITY_READ_TOKEN?.trim()
  if (!token) {
    return sanityClient
  }

  return sanityClient.withConfig({
    useCdn: false,
    token,
    perspective: 'previewDrafts',
  })
}
