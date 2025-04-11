import { sanityClient } from "sanity:client";


const getAllEventPosts = await sanityClient.fetch(
  `*[_type == "eventPost"]{
   ...,
   title,
   body,
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
  }`
);


export default getAllEventPosts;

