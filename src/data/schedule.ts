import { dateSlug } from "@utils/prettyDate";
import { parseSession, parseSessions, type Session } from "./sessionUtils";
import sessionizeData, { sessionizeGrid } from "./sessionize";

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

function filterRooms(rooms: Room[]): Room[] {
  // Holding room (only used so we can show the list of speakers)
  return rooms.filter((room) => room.id !== 51987);
}

function parseGrid(data, location) {
  return data.map((item) => {
    const rooms = filterRooms(item.rooms).map((room) => ({
      ...room,
      sessions: parseSessions(room.sessions, sessionizeData, location),
    }));

    const timeSlots = item.timeSlots.map((slot) => {
      return {
        ...slot,
        rooms: filterRooms(slot.rooms).map((room) => ({
          ...room,
          session: room.session
            ? parseSession(room.session, sessionizeData, location)
            : undefined,
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

const boston = parseGrid(sessionizeGrid.boston, "boston");
const barcelona = parseGrid(sessionizeGrid.barcelona, "barcelona");

export default {
  boston,
  barcelona,
};
