import { sanityClient } from "sanity:client";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AgendaItemSpeaker {
  _id: string;
  name?: string;
  role?: string;
  keynote?: boolean;
  linkedin?: string;
  github?: string;
  twitter?: string;
  image?: { asset?: { url: string } };
  bio?: string;
}

export interface AgendaItem {
  _id: string;
  tags?: string[];
  title: string;
  isHighlighted?: boolean;
  startTime?: string;
  endTime?: string;
  externalLink?: string;
  associatedEvents?: {
    _id: string;
    title?: string;
    slug?: { current?: string } | string;
  };
  associatedSpeakers?: AgendaItemSpeaker[];
}

export interface AgendaSection {
  date?: string;
  timezone?: string;
  agendaItems?: AgendaItem[];
}

export interface AgendaData {
  seo?: unknown;
  summitAgenda?: AgendaSection[];
  hackathonAgenda?: AgendaSection[];
  beginnerTrainingAgenda?: AgendaSection[];
  advancedTrainingAgenda?: AgendaSection[];
}

// ─── Fetchers ─────────────────────────────────────────────────────────────────

const agendaItemFragment = `
  _id,
  tags,
  title,
  isHighlighted,
  startTime,
  endTime,
  externalLink,
  bodycopy,
  associatedEvents->{
    _id,
    title,
    slug,
      associatedSpeakers[]->{
    _id,
    name,
    role,
    keynote,
    linkedin,
    github,
    twitter,
    image{
      asset->{
        url,
      },
    },
    bio,
  },
  }
`;

const agendaSectionFragment = `
  date,
  timezone,
  agendaItems[]{
    ${agendaItemFragment}
  },
`;

const agendaFields = `
  seo,
  summitAgenda[]{
    ${agendaSectionFragment}
  },
  hackathonAgenda[]{
    ${agendaSectionFragment}
  },
  beginnerTrainingAgenda[]{
    ${agendaSectionFragment}
  },
  advancedTrainingAgenda[]{
    ${agendaSectionFragment}
  },
`;

export const fetchBostonAgenda = () =>
  sanityClient.fetch<AgendaData>(`*[_type == "bostonAgenda"][0]{ ${agendaFields} }`);

export const fetchBcnAgenda = () =>
  sanityClient.fetch<AgendaData>(`*[_type == "bcnAgenda"][0]{ ${agendaFields} }`);

export const fetchVirtualAgenda = () =>
  sanityClient.fetch<AgendaData>(`*[_type == "virtualAgenda"][0]{ ${agendaFields} }`);

/** Section `date` (YYYY-MM-DD) for a talk slug (matches `associatedEvents` on the agenda). */
export function findAgendaDateForEventSlug(
  agenda: AgendaData | null | undefined,
  eventSlug: string,
): string | undefined {
  if (!agenda || !eventSlug) return undefined;
  const sections = [
    ...(agenda.summitAgenda ?? []),
    ...(agenda.hackathonAgenda ?? []),
    ...(agenda.beginnerTrainingAgenda ?? []),
    ...(agenda.advancedTrainingAgenda ?? []),
  ];
  for (const section of sections) {
    for (const item of section.agendaItems ?? []) {
      const slug = item.associatedEvents?.slug;
      const s = typeof slug === 'string' ? slug : slug?.current;
      if (s === eventSlug) return section.date;
    }
  }
  return undefined;
}