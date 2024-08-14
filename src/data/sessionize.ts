import type { Schedule } from "./schedule";
import type { Session } from "./sessions";
import type { Speaker } from "./speakers";
import type { Category } from "./categories";
import type { Question } from "./questions";

export type SessionizeData = {
  sessions: Session[];
  speakers: Speaker[];
  categories: Category[];
  questions: Question[];
};

const ids = {
  boston: "zaqv23uw",
  barcelona: "hb4w1c5g",
};

const fetchSessionizeData = async (
  location: "barcelona" | "boston" = "boston",
): Promise<SessionizeData> => {
  const res = fetch(
    `https://sessionize.com/api/v2/${ids[location]}/view/All`,
  ).then((res) => res.json());
  return res || {};
};

const fetchSessionizeGrid = async (
  location: "barcelona" | "boston",
): Promise<Schedule> => {
  const res = await fetch(
    `https://sessionize.com/api/v2/${ids[location]}/view/GridSmart`,
  ).then((res) => res.json());
  return res || [];
};

const boston = await fetchSessionizeData("boston");
const barcelona = await fetchSessionizeData("barcelona");

export const sessionizeGrid = {
  boston: await fetchSessionizeGrid("boston"),
  barcelona: await fetchSessionizeGrid("barcelona"),
};

export type AllSessionizeData = {
  boston: SessionizeData;
  barcelona: SessionizeData;
};

const data: AllSessionizeData = { boston, barcelona };

export default data;
