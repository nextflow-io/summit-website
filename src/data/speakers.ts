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
    linkType: "Twitter" | "LinkedIn" | "Company_Website" | "GitHub" | "Blog";
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
  return (
    data.speakers
      // Fix attributes, add slug
      .map(
        ({ fullName, isTopSpeaker, questionAnswers, links, ...speaker }) => ({
          slug: fullName.toLowerCase().replace(" ", "-"),
          fullName,
          isTopSpeaker,
          links: fixSocialLinks({ questionAnswers, links }),
          ...speaker,
        }),
      )

      // Associate sessions
      .map((speaker) => {
        const sessionIDs = speaker.sessions;
        let sessions = sessionIDs.map((id) =>
          data.sessions.find((s) => `${s.id}` === `${id}`),
        );
        sessions = sessions.filter((s) => !!s.isConfirmed);
        return {
          ...speaker,
          sessions,
        };
      })

      // Filter uncomfirmed sessions
      .filter((speaker) => {
        return speaker.sessions.length > 0;
      })

      // Filter out speakers without profile pictures
      .filter((speaker) => !!speaker.profilePicture)

      // Sort by name
      .sort((a, b) => {
        if (a.fullName < b.fullName) return -1;
        if (a.fullName > b.fullName) return 1;
        return 0;
      })

      // Sort by top speaker
      .sort((a, b) => {
        if (a.isTopSpeaker && !b.isTopSpeaker) return -1;
        if (!a.isTopSpeaker && b.isTopSpeaker) return 1;
        return 0;
      })
  );
};

const speakers = await fetchSpeakers();

export default speakers;
