import { sanityClient } from "sanity:client";

let keyDates = await sanityClient.fetch(
  `*[_type == "keyDate"] | order(date asc)`,
);

function prettyDate(date: string) {
  const options = {
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

keyDates = keyDates.map((date) => ({
  title: date.title,
  date: prettyDate(date.date),
}));

export default keyDates;
