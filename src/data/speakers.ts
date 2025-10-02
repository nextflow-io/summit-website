import { sanityClient } from "sanity:client";

const getAllSpeakers = await sanityClient.fetch(
  `*[_type == "speakerListing"] {
    speakers[]-> {
    name,
    role,
    associatedEvent-> {
    title,
   "slug": slug.current,
    associatedPerson[] {
     name,
    },
    coauthors,
    associatedCategory,
    publishedAt,
    endTime,
    ...,
    mainImage {
      ...,
      asset-> {
      url,
      },
     },
    },
    keynote,
    linkedin,
    github,
    twitter,
    company,
    bio,
    image {
      ...,
      asset-> {
      url,
      },
    },
    },
  }`
);

const getAllVirtualSpeakers = await sanityClient.fetch(
  `*[_type == "speakerListingVirtual"] {
    speakers[]-> {
    name,
    role,
    associatedEvent-> {
    title,
   "slug": slug.current,
    associatedPerson[] {
     name,
    },
    coauthors,
    associatedCategory,
    publishedAt,
    endTime,
    ...,
    mainImage {
      ...,
      asset-> {
      url,
      },
     },
    },
    keynote,
    linkedin,
    github,
    twitter,
    company,
    bio,
    image {
      ...,
      asset-> {
      url,
      },
    },
    },
  }`
);

export { getAllSpeakers, getAllVirtualSpeakers };