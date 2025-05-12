import { sanityClient } from "sanity:client";


const getAllPosters = await sanityClient.fetch(
  `*[_type == "posterListing"] {
    posters[]-> {
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


export default getAllPosters;

