import data from "./sessionize";
import type { Session } from "./sessions";

export type Speaker = {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: Session[];
  isTopSpeaker: boolean;
  links: {
    linkType: "Twitter" | "LinkedIn" | "Company_Website" | "GitHub";
    url: string;
  }[];
  categories: string[];
};

function fixSocialLinks({ questionAnswers, links }) {
  let githubURL;
  const qIndex = questionAnswers.findIndex((q) => q.question === "GitHub");
  if (qIndex > -1) githubURL = questionAnswers[qIndex].answer;
  if (!githubURL) return links;
  const githubLink = { title: "GitHub", linkType: "GitHub", url: githubURL };
  return [...links, githubLink];
}

const fetchSpeakers = async (): Promise<Speaker[]> => {
  return data.speakers
    .map(
      ({
        fullName,
        isTopSpeaker,
        questionAnswers,
        links,
        sessions: sessionIDs,
        ...speaker
      }) => {
        const slug = fullName.toLowerCase().replace(" ", "-");

        const sessions = sessionIDs.map((id) =>
          data.sessions.find((session) => `${session.id}` === `${id}`),
        );

        return {
          slug,
          fullName,
          isTopSpeaker,
          links: fixSocialLinks({ questionAnswers, links }),
          sessions,
          ...speaker,
        };
      },
    )
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
