import data from "./sessionize";
import type { Speaker } from "./speakers";

export type Session = {
  id: string;
  title: string;
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

const fetchSessions = async (): Promise<Session[]> => {
  const d = data.sessions.map((session) => {
    const { speakers: speakerIDS, ...sessionData } = session;
    const speakers = speakerIDS.map((id) =>
      data.speakers.find((speaker) => speaker.id === id),
    );
    return {
      speakers,
      ...sessionData,
    };
  });
  console.log(d);
  return d;
};

const speakers = await fetchSessions();

export default speakers;
