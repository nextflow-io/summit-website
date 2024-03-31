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
  links: {
    linkType: "Twitter" | "LinkedIn" | "Company_Website" | "GitHub";
    url: string;
  }[];
  categories: string[];
};

const fetchSpeakers = async (): Promise<Speaker[]> => {
  const data = await fetch(
    "https://sessionize.com/api/v2/zaqv23uw/view/Speakers",
  ).then((res) => res.json());

  return data
    .map((speaker) => {
      const { fullName, isTopSpeaker, questionAnswers, links } = speaker;
      let githubURL;
      const qIndex = questionAnswers.findIndex((q) => q.question === "GitHub");
      if (qIndex > -1) githubURL = questionAnswers[qIndex].answer;
      if (githubURL)
        links.push({ title: "GitHub", linkType: "GitHub", url: githubURL });
      const slug = fullName.toLowerCase().replace(" ", "-");
      return {
        slug,
        fullName,
        isTopSpeaker,
        links,
        ...speaker,
      };
    })
    .sort((a, b) => {
      if (a.fullName < b.fullName) return -1;
      if (a.fullName > b.fullName) return 1;
      return 0;
    })
    .sort((a, b) => {
      if (a.isTopSpeaker && !b.isTopSpeaker) return -1;
      if (!a.isTopSpeaker && b.isTopSpeaker) return 1;
      return 0;
    })
    .filter((speaker) => !!speaker.profilePicture);
};

const speakers = await fetchSpeakers();

export default speakers;
