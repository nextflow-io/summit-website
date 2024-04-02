import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

export type Sponsor = {
  name: string;
  slug: string;
  image?: string;
  rank?: string;
  location?: string;
  url?: string;
  description?: any;
};

const sponsors = await sanityClient.fetch(
  `*[_type == "sponsor"] | order(rank asc)`,
);

export default sponsors.map((sponsor) => ({
  ...sponsor,
  image: sponsor.image ? builder.image(sponsor.image).url() : null,
  slug: sponsor.name.toLowerCase().replace(/ /g, "-"),
})) as Sponsor[];
