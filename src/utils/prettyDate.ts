function prettyDate(d, showYear = true, ignoreZone = false) {
  if (!d) return null;
  let date = d;
  if (ignoreZone) date = d.split("T")?.[0] || d;
  const timeZone = ignoreZone ? "UTC" : "America/New_York";
  const options: any = {
    month: "short",
    day: "numeric",
    timeZone,
  };

  if (showYear) options.year = "numeric";

  const dateStr = new Date(date).toLocaleDateString("en-US", options);
  return dateStr;
}

function prettyTime(date) {
  const timeStr = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/New_York",
  });
  return timeStr;
}

function prettyDateAndTime(date) {
  return `${prettyDate(date)} | ${prettyTime(date)}`;
}

function dateSlug(date) {
  if (!date) return null;
  const options: any = {
    month: "short",
    day: "2-digit",
    timeZone: "America/New_York",
  };

  const dateStr = new Date(date).toLocaleDateString("en-US", options);
  return dateStr.toLowerCase().replace(/ /g, "-");
}

export { prettyDate, prettyTime, prettyDateAndTime, dateSlug };
