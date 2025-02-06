import type { TimeString } from "@data/schedule";

export function formatTime(time: TimeString) {
  const date = new Date(`1970-01-01T${time}Z`); // Use a dummy date
  const minutes = date.getUTCMinutes();

  let hours: string | number;
  hours = date.getUTCHours();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = String(hours).length === 1 ? "0" + hours : hours;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return {
    str: `${hours}.${minutesStr}`,
    ampm,
  };
}
