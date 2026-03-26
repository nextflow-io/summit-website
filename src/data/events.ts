import { sanityClient } from "sanity:client";

const getAllEventPosts = await sanityClient.fetch(
  `*[_type == "event"]{
   ...,
   title,
   body,
   youtube,
   projectLink,
   startTime,
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
   associatedSpeakers[]->{
     ...,
     name,
     role,
     keynote,
     linkedin,
     github,
     twitter,
     bluesky,
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
   startTime,
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
