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
  location: Location = "boston",
): { [key: string]: string } {
  const ids = questionIDs[location];
  const attributes = {};
  Object.keys(ids).forEach((key) => {
    const q = session.questionAnswers?.find((q) => q.questionId === ids[key]);
    let answer: string | boolean = q?.answerValue;
    if (answer === "true") answer = true;
    if (answer === "false") answer = false;
    if (q) attributes[key] = answer;
  });
  return attributes;
}

export const parseSessions = (
  sessions: Session[],
  data: AllSessionizeData,
  location: Location = "boston",
  recursive = false,
): Session[] => {
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

      // Associate categories
      .map((session) => {
        const categories = session.categoryItems.map((id) =>
          data[location].categories.find((c) => `${c.id}` === `${id}`),
        );
        console.log(data[location].categories[1]?.items);
        return {
          ...session,
          categories,
        };
      })

      // Add custom attributes
      .map((session) => ({
        ...session,
        ...getAttributes(session, location),
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
      })
  );
};
