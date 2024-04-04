import data from "./sessionize";
import type { Room } from "./rooms";
import type { Speaker } from "./speakers";

import { dateSlug } from "@utils/prettyDate";

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
  isKeynote: 74899,
  isSponsor: 64629,
  projectURL: 67843,
};

export function addSessionURL(session: Session) {
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
  const date = dateSlug(session.startsAt);
  slug = `${date}--${slug}`;
  const url = `/2024/boston/agenda/${slug}`;

  return {
    ...session,
    slug,
    url,
  };
}

function isKeynote(session: Session): boolean {
  return !!session.questionAnswers.find((q) => {
    const isKeynote = q.questionId === questionIDs.isKeynote;
    return isKeynote && q.answerValue === "true";
  });
}

function isSponsor(session: Session): boolean {
  return !!session.questionAnswers.find((q) => {
    const isSponsor = q.questionId === questionIDs.isSponsor;
    return isSponsor && q.answerValue === "true";
  });
}

function projectURL(session: Session): string {
  const projectURL = session.questionAnswers.find(
    (q) => q.questionId === questionIDs.projectURL,
  );
  return projectURL ? projectURL.answerValue : "";
}

const getSessions = (): Session[] => {
  return (
    data.sessions

      // Associate speakers
      .map((session) => ({
        ...session,
        speakers: session.speakers.map((id) =>
          data.speakers.find((speaker) => speaker.id === id),
        ),
      }))

      // Add URL & slug
      .map(addSessionURL)

      // Add whether is keynote and/or sponsor
      .map((session) => ({
        ...session,
        isKeynote: isKeynote(session),
        isSponsor: isSponsor(session),
        projectURL: projectURL(session),
      }))

      // Associate room
      .map((session) => {
        const room = data.rooms.find((room) => room.id === session.roomId);
        return {
          ...session,
          room,
        };
      })
  );
};

const sessions = getSessions();

export const sessionPages = sessions.filter(
  (session) => !session.isServiceSession,
);

export default sessions;
