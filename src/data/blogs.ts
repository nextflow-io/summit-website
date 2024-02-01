import { sanityClient } from "sanity:client";

const posts = await sanityClient.fetch(
  `*[_type == "post" && defined(slug)] | order(publishedAt desc)`
);

export default posts;
