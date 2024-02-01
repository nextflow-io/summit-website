export type Speaker = {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: any[];
  isTopSpeaker: boolean;
  links: string[];
  questionsAndAnswers: any[];
  categories: string[];
};

const fetchSpeakers = async (): Promise<Speaker[]> => {
  const data = await fetch(
    "https://sessionize.com/api/v2/zaqv23uw/view/Speakers"
  ).then((res) => res.json());

  return data.map((speaker) => {
    const { fullName } = speaker;
    const slug = fullName.toLowerCase().replace(" ", "-");
    return {
      slug,
      ...speaker,
    };
  });
};

const speakers = await fetchSpeakers();

export default speakers;
