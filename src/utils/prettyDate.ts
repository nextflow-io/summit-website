import dayjs from "dayjs";

const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

function prettyDate(date, showYear = true, showDay = false) {
  if (!date) return null;
  let format = "MMM DD";
  if (showYear) format = "YYYY " + format;
  const djs = dayjs(date);
  const day = days[djs.day()];
  if (showDay) {
    return `${day}, ${djs.format(format)}`;
  }
  return djs.format(format);
}

function prettyTime(date) {
  const djs = dayjs(date);
  return djs.format("HH:mm");
}

function prettyDateAndTime(date) {
  return `${prettyDate(date)} | ${prettyTime(date)}`;
}

function weekday(date) {
  const djs = dayjs(date);
  return days[djs.day()];
}

function dateSlug(date) {
  if (!date) return null;
  const djs = dayjs(date);
  return djs.format("MM-DD");
}

export { prettyDate, prettyTime, prettyDateAndTime, dateSlug, weekday };
