import { sanityClient } from "sanity:client";


export async function getAllEventPosts() {
  return await sanityClient.fetch(`
    *[_type == "blogPost"] {
      ...,
      tags[]->,
      meta {
        slug {
          current
        },
        description,
        "shareImage": shareImage.asset->url
      },
      author->,
      authors[]->
    }`);
}
