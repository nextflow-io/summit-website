import dayjs from "dayjs";

function prettyDate(date, showYear = true) {
  if (!date) return null;
  let format = "MMM DD";
  if (showYear) format = "YYYY " + format;
  return dayjs(date).format(format);
}

function prettyTime(date) {
  const djs = dayjs(date);
  return djs.format("HH:mm");
}

function prettyDateAndTime(date) {
  return `${prettyDate(date)} | ${prettyTime(date)}`;
}

function dateSlug(date) {
  if (!date) return null;
  const djs = dayjs(date);
  return djs.format("MM-DD");
}

export { prettyDate, prettyTime, prettyDateAndTime, dateSlug };
