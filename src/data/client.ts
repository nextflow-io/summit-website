import type {SanityClient} from '@sanity/client'
import {sanityClient} from 'sanity:client'
import {getDraftClient, hasDraftToken} from './draftClient'

/** Published CDN client, or draft perspective when preview cookie is set. */
export function getContentClient(draftMode = false): SanityClient {
  if (draftMode && !hasDraftToken()) {
    if (import.meta.env.DEV) {
      console.warn(
        '[summit preview] SANITY_READ_TOKEN is missing — showing published content. Add it to .env (see .env.example).',
      )
    }
    return sanityClient
  }

  return draftMode ? getDraftClient() : sanityClient
}
