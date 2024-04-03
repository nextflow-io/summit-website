const fetchSessionizeData = async (): Promise<any> => {
  return await fetch("https://sessionize.com/api/v2/zaqv23uw/view/All").then(
    (res) => res.json(),
  );
};

const data = await fetchSessionizeData();

export default data;
