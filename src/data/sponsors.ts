import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

export type Sponsor = {
  name: string;
  slug: string;
  image?: string;
  rank?: string;
  location?: "barcelona" | "virtual" | "boston";
  url?: string;
  description?: any;
};

const sponsors = await sanityClient.fetch(
  `*[_type == "sponsor"] | order(rank asc)`,
);

const rankOrder = {
  diamond: 1,
  platinum: 2,
  gold: 3,
  silver: 4,
  bronze: 5,
};

function parseSponsors(sponsors): Sponsor[] {
  return sponsors.map((sponsor) => ({
    ...sponsor,
    image: sponsor.image ? builder.image(sponsor.image).url() : null,
    slug: sponsor.name.toLowerCase().replace(/ /g, "-"),
  })) as Sponsor[];
}

function sortSponsors(sponsors, location) {
  let rank = "rank";
  if (location === "barcelona") {
    rank = "rankBarcelona";
  }
  let filtered = sponsors.filter((sponsor) => sponsor[rank] !== "none");
  return filtered.sort((a, b) => {
    return rankOrder[a[rank]] - rankOrder[b[rank]];
  });
}

const parsedSponsors = parseSponsors(sponsors);

const boston = sortSponsors(parsedSponsors, "boston");
const barcelona = sortSponsors(parsedSponsors, "barcelona");

export default { boston, barcelona };
