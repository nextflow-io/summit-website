import grid from "./grid.json";

const fetchSessionizeData = async (): Promise<any> => {
  return await fetch("https://sessionize.com/api/v2/zaqv23uw/view/All").then(
    (res) => res.json(),
  );
};

const fetchSessionizeGrid = async (): Promise<any> => {
  return await fetch(
    "https://sessionize.com/api/v2/zaqv23uw/view/GridSmart",
  ).then((res) => res.json());
};

const data = await fetchSessionizeData();

export { grid };
export default data;
