import { dateSlug } from "@utils/prettyDate";
import { addSessionURL, type Session } from "./sessions";
import { sessionizeGrid } from "./sessionize";

export type Room = {
  id: number;
  name: string;
  sessions?: Session[];
  session?: Session;
  index?: number;
};

export type TimeString = string;

export type Timeslot = {
  slotStart: TimeString;
  rooms: Room[];
};

export type ScheduleItem = {
  date: string;
  isDefault: boolean;
  rooms: Room[];
  timeSlots: Timeslot[];
};

export type Schedule = ScheduleItem[];

function parseGrid(data) {
  return data.map((item) => {
    const rooms = item.rooms.map((room) => ({
      ...room,
      sessions: room.sessions.map(addSessionURL),
    }));

    const timeSlots = item.timeSlots.map((slot) => {
      return {
        ...slot,
        rooms: slot.rooms.map((room) => ({
          ...room,
          session: room.session ? addSessionURL(room.session) : undefined,
        })),
      };
    });

    return {
      ...item,
      hash: `#${dateSlug(item.date)}`,
      hashID: dateSlug(item.date),
      rooms,
      timeSlots,
    };
  });
}

const boston = parseGrid(sessionizeGrid.boston);
const barcelona = parseGrid(sessionizeGrid.barcelona);

export default {
  boston,
  barcelona,
};
