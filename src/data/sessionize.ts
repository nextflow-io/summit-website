import type { Schedule } from "./schedule";

const ids = {
  boston: "zaqv23uw",
  barcelona: "hb4w1c5g",
};

const fetchSessionizeData = async (
  location: "barcelona" | "boston" = "boston",
): Promise<any> => {
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

export default { boston, barcelona };
