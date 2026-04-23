import { sanityClient } from "sanity:client";

const getAllPosters = await sanityClient.fetch(
  `*[_type == "bostonPosters"] {
    posters[]-> {
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
    }
  }`
);

const getAllVirtualPosters = await sanityClient.fetch(
  `*[_type == "virtualPosters"] {
    posters[]-> {
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
    }
  }`
);

const extractPosterSlugs = (postersData: any): Set<string> =>
  new Set(
    postersData?.[0]?.posters
      ?.flatMap((person) => person?.associatedEvents ?? [])
      ?.map((event) => event?.slug)
      ?.filter(Boolean) ?? []
  );

const bostonPosterSlugs = extractPosterSlugs(getAllPosters);
const virtualPosterSlugs = extractPosterSlugs(getAllVirtualPosters);

export {
  getAllPosters,
  getAllVirtualPosters,
  bostonPosterSlugs,
  virtualPosterSlugs,
};