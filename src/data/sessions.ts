import data from "./sessionize";
import type { Speaker } from "./speakers";

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
  const slug = session.title.toLowerCase().replace(/ /g, "-");
  const url = `/2024/boston/sessions/${slug}`;
  return {
    ...session,
    slug,
    url,
  };
}

const fetchSessions = async (): Promise<Session[]> => {
  return data.sessions.map((session) => {
    const { speakers: speakerIDS } = session;
    const speakers = speakerIDS.map((id) =>
      data.speakers.find((speaker) => speaker.id === id),
    );
    return {
      ...addSessionURL(session),
      speakers,
    };
  });
};

const sessions = await fetchSessions();

export default sessions;
