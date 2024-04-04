import data from "./sessionize";

export type Room = {
  id: number;
  name: String;
  sort?: number;
};

export default data.rooms as Room[];
