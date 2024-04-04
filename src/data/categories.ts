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

export default data.categories as Category[];
