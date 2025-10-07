import { sanityClient } from "sanity:client";


const getAllPosters = await sanityClient.fetch(
  `*[_type == "posterListing"] {
    posters[]-> {
    name,
    role,
    associatedTalks[]-> {
    title,
   "slug": slug.current,
    },
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


const getAllPostersVirtual = await sanityClient.fetch(
  `*[_type == "posterListingVirtual"] {
    posters[]-> {
    name,
    role,
    associatedTalks[]-> {
    title,
   "slug": slug.current,
    },
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


export { getAllPosters, getAllPostersVirtual };

