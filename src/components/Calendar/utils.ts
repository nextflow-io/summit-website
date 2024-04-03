import type { TimeString } from "@data/schedule";

export function formatTime(time: TimeString) {
  const date = new Date(`1970-01-01T${time}Z`); // Use a dummy date
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutesStr}${ampm}`.replace(":00", "");
}
