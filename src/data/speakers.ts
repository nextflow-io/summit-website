import { sanityClient } from "sanity:client";

const SUMMIT_YEAR = 2026;
const YEAR_FILTER = "!defined(year) || year == $year || string(year) == string($year)";

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
`;

type SpeakersPayload = { speakers?: any[] } | null;

async function fetchCanonicalSpeakers(location: "boston" | "barcelona" | "virtual"): Promise<SpeakersPayload> {
  return sanityClient.fetch(
    `{
      "speakers": *[_type == "speaker" && location == $location && (${YEAR_FILTER})]
        | order(name asc) {
          ${speakerProjection}
        }
    }`,
    { location, year: SUMMIT_YEAR }
  );
}

async function fetchCuratedSpeakers(curatedType: "bostonSpeakers" | "bcnSpeakers" | "virtualSpeakers"): Promise<SpeakersPayload> {
  return sanityClient.fetch(
    `*[_type == $curatedType && (${YEAR_FILTER})]
      | order(_updatedAt desc)[0]{
        speakers[]-> {
          ${speakerProjection}
        }
      }`,
    { curatedType, year: SUMMIT_YEAR }
  );
}

async function fetchLegacySpeakers(
  legacyType: "speakerListing" | "speakerListingVirtual",
  legacyField: "person" | "personVirtual"
): Promise<SpeakersPayload> {
  const legacyProjection =
    legacyField === "personVirtual"
      ? `personVirtual[]-> { ${speakerProjection} }`
      : `person[]-> { ${speakerProjection} }`;

  return sanityClient.fetch(
    `*[_type == $legacyType && (${YEAR_FILTER})]
      | order(_updatedAt desc)[0]{
        "speakers": coalesce(
          speakers[]-> { ${speakerProjection} },
          associatedPerson[]-> { ${speakerProjection} },
          ${legacyProjection}
        )
      }`,
    { legacyType, year: SUMMIT_YEAR }
  );
}

async function resolveSpeakers(options: {
  location: "boston" | "barcelona" | "virtual";
  curatedType: "bostonSpeakers" | "bcnSpeakers" | "virtualSpeakers";
  legacyType: "speakerListing" | "speakerListingVirtual";
  legacyField: "person" | "personVirtual";
}): Promise<SpeakersPayload> {
  const canonical = await fetchCanonicalSpeakers(options.location);
  if (canonical?.speakers?.length) return canonical;

  const curated = await fetchCuratedSpeakers(options.curatedType);
  if (curated?.speakers?.length) return curated;

  return fetchLegacySpeakers(options.legacyType, options.legacyField);
}

const [getAllSpeakers, getAllBcnSpeakers, getAllVirtualSpeakers] = await Promise.all([
  resolveSpeakers({
    location: "boston",
    curatedType: "bostonSpeakers",
    legacyType: "speakerListing",
    legacyField: "person",
  }),
  resolveSpeakers({
    location: "barcelona",
    curatedType: "bcnSpeakers",
    legacyType: "speakerListing",
    legacyField: "person",
  }),
  resolveSpeakers({
    location: "virtual",
    curatedType: "virtualSpeakers",
    legacyType: "speakerListingVirtual",
    legacyField: "personVirtual",
  }),
]);

export { getAllSpeakers, getAllBcnSpeakers, getAllVirtualSpeakers };