import { sanityClient } from "sanity:client";

let keyDates = await sanityClient.fetch(
  `*[_type == "keyDate"] | order(date asc)`,
);

function prettyDate(date: string) {
  if (!date) return null;
  const options = {
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

function getDay(date: string) {
  if (!date) return null;
  return new Date(date).getDate();
}

keyDates = keyDates.map((date) => ({
  title: date.title,
  date: prettyDate(date.date),
  endDate: prettyDate(date.endDate),
  endDay: getDay(date.endDate),
}));

export default keyDates;
