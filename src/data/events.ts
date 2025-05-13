import { sanityClient } from "sanity:client";


const getAllEventPosts = await sanityClient.fetch(
  `*[_type == "eventPost"]{
   ...,
   title,
   body,
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
     youtube,
     projectLink,
     image{
       asset-> {
       url,
       },
     },
     bio, 
   },
  }`
);


export default getAllEventPosts;

