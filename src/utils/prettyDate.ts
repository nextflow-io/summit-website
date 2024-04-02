function prettyDate(date, showYear = true) {
  if (!date) return null;
  const options: any = {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  if (showYear) options.year = "numeric";

  const dateStr = new Date(date).toLocaleDateString("en-US", options);
  return dateStr;
}

function prettyTime(date) {
  const timeStr = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
  return timeStr;
}

function prettyDateAndTime(date) {
  return `${prettyDate(date)} | ${prettyTime(date)}`;
}

export { prettyDate, prettyTime, prettyDateAndTime };
