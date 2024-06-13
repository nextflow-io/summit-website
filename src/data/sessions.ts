import data from "./sessionize";
import type { Room } from "./rooms";
import type { Speaker } from "./speakers";

import { dateSlug } from "@utils/prettyDate";

type Location = "boston" | "barcelona";

export type Session = {
  id: string;
  title: string;
  slug?: string;
  url?: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  isKeynote?: boolean;
  isSponsor?: boolean;
  projectURL?: string;
  coAuthors?: string;
  speakers: Speaker[];
  categoryItems: number[];
  questionAnswers: [
    {
      questionId: number;
      answerValue: string;
    },
  ];
  roomId: number;
  room?: Room;
  liveUrl?: string;
  recordingUrl?: string;
  status: "Accepted" | "Declined" | "Nominated";
  isInformed: boolean;
  isConfirmed: boolean;
};

const questionIDs = {
  boston: {
    isKeynote: 74899,
    isSponsor: 64629,
    projectURL: 67843,
    coAuthors: 67841,
  },
  barcelona: {
    isKeynote: undefined,
    isSponsor: undefined,
    projectURL: undefined,
    coAuthors: undefined,
  },
};

export function addSessionURL(session: Session, location: Location = "boston") {
  if (session.isServiceSession) return session;

  let slug = session.title
    .toLowerCase()
    .trimStart()
    .trimEnd()
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9 -]/g, "");

  const parts = slug.split("-");
  if (parts.length > 5) {
    slug = parts.slice(0, 5).join("-");
  }

  // TODO: PHIL HOTFIX
  // location is set as an integer here, maybe a map index or something?
  // Hotfix to hardcode to "boston" for now
  location = "boston";

  const date = dateSlug(session.startsAt);
  slug = `${date}--${slug}`;
  const url = `/2024/${location}/agenda/${slug}`;

  return {
    ...session,
    slug,
    url,
  };
}

function isKeynote(session: Session, location: Location = "boston"): boolean {
  return !!session.questionAnswers.find((q) => {
    const isKeynote = q.questionId === questionIDs[location].isKeynote;
    return isKeynote && q.answerValue === "true";
  });
}

function isSponsor(session: Session, location: Location = "boston"): boolean {
  return !!session.questionAnswers.find((q) => {
    const isSponsor = q.questionId === questionIDs[location].isSponsor;
    return isSponsor && q.answerValue === "true";
  });
}

function getProjectURL(
  session: Session,
  location: Location = "boston",
): string {
  const projectURL = session.questionAnswers.find(
    (q) => q.questionId === questionIDs[location].projectURL,
  );
  return projectURL ? projectURL.answerValue : "";
}

function getCoAuthors(session: Session, location: Location = "boston"): string {
  const coAuthors = session.questionAnswers.find(
    (q) => q.questionId === questionIDs[location].coAuthors,
  );
  return coAuthors?.answerValue || "";
}

const getSessions = (location: Location = "boston"): Session[] => {
  return (
    data[location].sessions

      // Associate speakers
      .map((session) => ({
        ...session,
        speakers: session.speakers.map((id) =>
          data[location].speakers.find((speaker) => speaker.id === id),
        ),
      }))

      // Add URL & slug
      .map(addSessionURL)

      // Add custom attributes
      .map((session) => ({
        ...session,
        isKeynote: isKeynote(session, location),
        isSponsor: isSponsor(session, location),
        projectURL: getProjectURL(session, location),
        coAuthors: getCoAuthors(session, location),
      }))

      // Associate room
      .map((session) => {
        const room = data[location].rooms.find(
          (room) => room.id === session.roomId,
        );
        return {
          ...session,
          room,
        };
      })
  );
};

const boston = getSessions("boston");
const barcelona = getSessions("barcelona");

const sessionPagesBoston = boston.filter(
  (session) => !session.isServiceSession,
);

const sessionPagesBarcelona = barcelona.filter(
  (session) => !session.isServiceSession,
);

export default {
  boston,
  barcelona,
};

export { sessionPagesBarcelona, sessionPagesBoston };
