import { sanityClient } from "sanity:client";

const getAllSpeakers = await sanityClient.fetch(
  `*[_type == "bostonSpeakers"] {
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

export { getAllSpeakers, getAllVirtualSpeakers };