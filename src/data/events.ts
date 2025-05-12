import { sanityClient } from "sanity:client";


const getAllEventPosts = await sanityClient.fetch(
  `*[_type == "eventPost"]{
   ...,
   title,
   body,
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
    "poster": file.asset->url,
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

