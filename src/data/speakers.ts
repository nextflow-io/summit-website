import {getContentClient} from './client'

const SUMMIT_YEAR = 2026
const YEAR_FILTER = "!defined(year) || year == $year || string(year) == string($year)"

const speakerProjection = `
  name,
  role,
  keynote,
  linkedin,
  github,
  twitter,
  company,
  bio,
  image {
    ...,
    asset-> { url }
  },
  associatedEvents[]-> {
    title,
    "slug": slug.current,
    publishedAt,
    endTime,
    associatedPerson[] { name },
    coauthors,
    associatedCategory,
    mainImage {
      asset-> { url }
    }
  }
`

type SpeakersPayload = {speakers?: unknown[]} | null

async function fetchCanonicalSpeakers(
  location: 'boston' | 'virtual',
  draftMode = false,
): Promise<SpeakersPayload> {
  return getContentClient(draftMode).fetch(
    `{
      "speakers": *[_type == "speaker" && location == $location && (${YEAR_FILTER})]
        | order(name asc) {
          ${speakerProjection}
        }
    }`,
    {location, year: SUMMIT_YEAR},
  )
}

async function fetchCuratedSpeakers(
  curatedType: 'bostonSpeakers' | 'virtualSpeakers',
  draftMode = false,
): Promise<SpeakersPayload> {
  return getContentClient(draftMode).fetch(
    `*[_type == $curatedType && (${YEAR_FILTER})]
      | order(_updatedAt desc)[0]{
        speakers[]-> {
          ${speakerProjection}
        }
      }`,
    {curatedType, year: SUMMIT_YEAR},
  )
}

async function fetchLegacySpeakers(
  legacyType: 'speakerListing' | 'speakerListingVirtual',
  legacyField: 'person' | 'personVirtual',
  draftMode = false,
): Promise<SpeakersPayload> {
  const legacyProjection =
    legacyField === 'personVirtual'
      ? `personVirtual[]-> { ${speakerProjection} }`
      : `person[]-> { ${speakerProjection} }`

  return getContentClient(draftMode).fetch(
    `*[_type == $legacyType && (${YEAR_FILTER})]
      | order(_updatedAt desc)[0]{
        "speakers": coalesce(
          speakers[]-> { ${speakerProjection} },
          associatedPerson[]-> { ${speakerProjection} },
          ${legacyProjection}
        )
      }`,
    {legacyType, year: SUMMIT_YEAR},
  )
}

async function resolveSpeakers(
  options: {
    location: 'boston' | 'virtual'
    curatedType: 'bostonSpeakers' | 'virtualSpeakers'
    legacyType: 'speakerListing' | 'speakerListingVirtual'
    legacyField: 'person' | 'personVirtual'
  },
  draftMode = false,
): Promise<SpeakersPayload> {
  const canonical = await fetchCanonicalSpeakers(options.location, draftMode)
  if (canonical?.speakers?.length) return canonical

  const curated = await fetchCuratedSpeakers(options.curatedType, draftMode)
  if (curated?.speakers?.length) return curated

  return fetchLegacySpeakers(options.legacyType, options.legacyField, draftMode)
}

export async function getAllSpeakers(draftMode = false): Promise<SpeakersPayload> {
  return resolveSpeakers(
    {
      location: 'boston',
      curatedType: 'bostonSpeakers',
      legacyType: 'speakerListing',
      legacyField: 'person',
    },
    draftMode,
  )
}

export async function getAllVirtualSpeakers(draftMode = false): Promise<SpeakersPayload> {
  return resolveSpeakers(
    {
      location: 'virtual',
      curatedType: 'virtualSpeakers',
      legacyType: 'speakerListingVirtual',
      legacyField: 'personVirtual',
    },
    draftMode,
  )
}
