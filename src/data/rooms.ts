import data from "./sessionize";

export type Room = {
  id: number;
  name: String;
  sort?: number;
};

const boston = data.boston.rooms as Room[];
const barcelona = data.barcelona.rooms as Room[];

export default {
  boston,
  barcelona,
};
