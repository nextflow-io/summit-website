import { sanityClient } from "sanity:client";

const keyDatesBoston = await sanityClient.fetch(
  `*[_type == "keyDate"] | order(date asc)`,
);

const keyDatesBarcelona = await sanityClient.fetch(
  `*[_type == "keyDateBarcelona"] | order(date asc)`,
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

const parseDates = (dates) =>
  dates.map((date) => ({
    title: date.title,
    description: date.description,
    date: prettyDate(date.date),
    endDate: prettyDate(date.endDate),
    endDay: getDay(date.endDate),
  }));

export default {
  boston: parseDates(keyDatesBoston),
  barcelona: parseDates(keyDatesBarcelona),
};
