import data from "./sessionize";

export type CategoryValue = {
  id: number;
  name: String;
  sort: number;
};

export type Category = {
  id: number;
  title: String;
  items: CategoryValue[];
};

const boston = data.boston.categories as Category[];
const barcelona = data.barcelona.categories as Category[];

export default {
  boston,
  barcelona,
};
