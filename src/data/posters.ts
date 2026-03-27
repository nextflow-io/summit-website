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

const getAllVirtualSpeakers = await sanityClient.fetch(
  `*[_type == "speakerListingVirtual"] {
    speakers[]-> {
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

export { getAllPosters, getAllVirtualSpeakers };