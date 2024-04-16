import { dateSlug } from "@utils/prettyDate";
import { addSessionURL, type Session } from "./sessions";

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

const fetchSessionizeGrid = async (): Promise<Schedule> => {
  return await fetch(
    "https://sessionize.com/api/v2/zaqv23uw/view/GridSmart",
  ).then((res) => res.json());
};

const data = await fetchSessionizeGrid();

export default data.map((item) => {
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
