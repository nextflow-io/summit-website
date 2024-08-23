import type { Room } from "./rooms";
import type { AllSessionizeData } from "./sessionize";
import { parseSpeakers, type Speaker } from "./speakerUtils";

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
  posterPDF?: string;
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
    isKeynote: 76620,
    isSponsor: 76613,
    projectURL: 76616,
    coAuthors: 76614,
    github: 76617,
    presentation: 76618,
    presentationPDF: 76619,
    posterPDF: 83056,
    shareImage: 76621,
    shareImage2: 76622,
  },
};

const addSessionURL =
  (location = "boston") =>
  (session: Session) => {
    if (session.isServiceSession) return session;

    if (!session.title) return session;

    let slug = session.title
      ?.toLowerCase()
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
    const url = `/2024/${location}/agenda/${slug}`;

    return {
      ...session,
      slug,
      url,
    };
  };

function getAttributes(
  session: Session,
  data: AllSessionizeData,
  location: Location = "boston",
): { [key: string]: string; categories: any } {
  const ids = questionIDs[location];
  const attributes = {};

  // Parse question/answer pairs
  Object.keys(ids).forEach((key) => {
    const q = session.questionAnswers?.find((q) => q.questionId === ids[key]);
    let answer: string | boolean = q?.answerValue;
    if (answer === "true") answer = true;
    if (answer === "false") answer = false;
    if (q) attributes[key] = answer;
  });

  // Parse category items
  const categories: any = {};
  session.categoryItems?.forEach((id: number) => {
    const cValue = data[location].categories.find((c) =>
      c.items.find((item) => item.id === id),
    );
    if (!cValue) return;
    let key = cValue.title.toLowerCase();
    if (key === "presentation type") key = "type";
    if (!categories[key]) categories[key] = [];
    categories[key].push(cValue.items.find((item) => item.id === id).name);
  });

  return {
    ...attributes,
    categories: categories,
  };
}

export const parseSession = (
  session: Session,
  data: AllSessionizeData,
  location: Location = "boston",
  recursive = false,
): Session => {
  const sessions = [session];
  return (
    sessions

      // Associate speakers
      .map((session) => {
        let speakers = session.speakers.map((id) =>
          data[location].speakers.find((speaker) => speaker.id === id),
        );
        if (recursive)
          speakers = parseSpeakers(speakers, data, location, false);
        return {
          ...session,
          speakers,
        };
      })

      // Add custom attributes
      .map((session) => ({
        ...session,
        ...getAttributes(session, data, location),
      }))

      // Add URL & slug
      .map(addSessionURL(location))

      // Associate room
      .map((session) => {
        const room = data[location].rooms.find(
          (room) => room.id === session.roomId,
        );
        return {
          ...session,
          room,
        };
      })[0]
  );
};

export const parseSessions = (
  sessions: Session[],
  data: AllSessionizeData,
  location: Location = "boston",
  recursive = false,
): Session[] => {
  return sessions.map((s) => parseSession(s, data, location, recursive));
};
