import { sanityClient } from "sanity:client";

const getAllEventPosts = await sanityClient.fetch(
  `*[_type == "eventPost"]{
   ...,
   title,
   body,
   youtube,
   projectLink,
   poster {
      asset->{
        url,
        originalFilename,
        mimeType
      }
    },
    mainImage{
    ...,
      asset-> {
      url,
      },
    },
   associatedPerson[]->{
     ...,
     name,
     role,
     keynote,
     linkedin,
     github,
     twitter,
     image{
       asset-> {
       url,
       },
     },
     bio, 
   },
  }`,
);

const getAllVirtualEventPosts = await sanityClient.fetch(
  `*[_type == "eventPostVirtual"]{
   ...,
   title,
   body,
   youtube,
   projectLink,
   publishedAt,
   endTime,
   poster {
      asset->{
        url,
        originalFilename,
        mimeType
      }
    },
    mainImage{
    ...,
      asset-> {
      url,
      },
    },
   associatedPerson[]->{
     ...,
     name,
     role,
     keynote,
     linkedin,
     github,
     twitter,
     image{
       asset-> {
       url,
       },
     },
     bio, 
   },
  }`,
);

export { getAllEventPosts, getAllVirtualEventPosts };
