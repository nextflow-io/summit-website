import type { AllSessionizeData } from "./sessionize";
import { parseSessions, type Session } from "./sessionUtils";

export type Speaker = {
  id: string;
  slug: string;
  name?: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: Session[];
  isTopSpeaker: boolean;
  categoryItems: number[];
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

export const parseSpeakers = (
  speakers: Speaker[],
  data: AllSessionizeData,
  location: "boston" | "barcelona" = "boston",
  recursive = false,
): Speaker[] => {
  return (
    speakers
      // Fix attributes, add slug
      .map(
        ({ fullName, isTopSpeaker, questionAnswers, links, ...speaker }) => ({
          slug: fullName
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-zA-Z0-9 -]/g, ""),
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
          data[location].sessions.find((s) => `${s.id}` === `${id}`),
        );
        sessions = sessions.filter((s) => !!s.isConfirmed);
        if (recursive)
          sessions = parseSessions(sessions, data, location, false);
        return {
          ...speaker,
          sessions,
        };
      })

      // Associate categories
      .map((speaker) => {
        const categories = speaker.categoryItems.map((id) =>
          data[location].categories.find((c) => `${c.id}` === `${id}`),
        );
        return {
          ...speaker,
          categories,
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
