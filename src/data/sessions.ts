import data from "./sessionize";
import type { Speaker } from "./speakers";
import { dateSlug } from "@utils/prettyDate";

export type Session = {
  id: string;
  title: string;
  slug: string;
  url: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  isKeynote?: boolean;
  speakers: Speaker[];
  categoryItems: number[];
  questionAnswers: [
    {
      questionId: number;
      answerValue: string;
    },
  ];
  roomId: number;
  liveUrl?: string;
  recordingUrl?: string;
  status: "Accepted" | "Declined" | "Nominated";
  isInformed: boolean;
  isConfirmed: boolean;
};

export function addSessionURL(session: Session) {
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
  return !!session.questionAnswers.find((q) => q.questionId === 74899);
}

const getSessions = (): Session[] => {
  return data.sessions.map((session) => {
    const { speakers: speakerIDS } = session;
    const speakers = speakerIDS.map((id) =>
      data.speakers.find((speaker) => speaker.id === id),
    );
    return {
      ...addSessionURL(session),
      isKeynote: isKeynote(session),
      speakers,
    };
  });
};

const sessions = getSessions();

export default sessions;
