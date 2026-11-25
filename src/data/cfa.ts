// Call for Abstracts — per-location configuration.
//
// The landing copy (hero, feature blocks, FAQ) is edited in Sanity
// (`bostonCfa` / `bcnCfa` / `virtualCfa`). This file holds the parts that
// describe the *form itself*, so they can be kept in lock-step with Typeform:
//
//   - `typeformId`  fallback form ID. Editors can override it without a deploy
//                   by pasting a Typeform URL into the page's "form URL" field
//                   in Sanity (currently named `swoogoUrl`).
//   - `questions`   mirrors the Typeform, in order. It powers the "Before you
//                   start" preview + "copy as template" on the landing page, so
//                   applicants can draft offline before opening the form.
//                   ⚠️ Update this whenever a question changes in Typeform.
//   - `dates`       shown in the key-dates card. Leave a value `null` to hide it.
//
// No secrets here — Typeform form IDs are public (they're in the share URL).

export type CfaLocation = 'boston' | 'barcelona' | 'virtual';

export type CfaQuestion = {
  label: string;
  /** Short guidance shown under the label, e.g. a word limit. */
  hint?: string;
  required?: boolean;
};

export type CfaDate = {
  label: string;
  /** Human-readable, e.g. "Friday, January 30". `null` hides the row. */
  value: string | null;
};

export type CfaConfig = {
  location: CfaLocation;
  eventName: string;
  typeformId?: string;
  /** Rough completion time shown before people start. */
  minutes: number;
  questions: CfaQuestion[];
  dates: CfaDate[];
  /** Where to send corrections — Typeform submissions can't be edited. */
  contactEmail: string;
};

const CONTACT_EMAIL = 'summit@nextflow.io';

export const cfaConfig: Partial<Record<CfaLocation, CfaConfig>> = {
  boston: {
    location: 'boston',
    eventName: 'Nextflow Summit Boston',
    typeformId: 'kLPH8WrD',
    minutes: 10,
    // TODO(cfa): sync wording/limits with the final Typeform before launch.
    questions: [
      { label: 'Your name, email and affiliation', required: true },
      {
        label: 'Speaker bio',
        hint: '2–3 sentences, written in the third person',
        required: true,
      },
      {
        label: 'Session format',
        hint: 'Talk, poster, or either',
        required: true,
      },
      { label: 'Title', hint: 'Up to 100 characters', required: true },
      { label: 'Abstract', hint: 'Up to 300 words', required: true },
      {
        label: 'Topic area',
        hint: 'e.g. Bio/ML, pipelines & tooling, infrastructure, community',
        required: true,
      },
      {
        label: 'Co-presenters',
        hint: 'Names and affiliations, if any',
      },
      {
        label: 'Anything else we should know',
        hint: 'Accessibility needs, travel constraints, links to prior work',
      },
    ],
    dates: [
      { label: 'Submissions open', value: null },
      { label: 'Submission deadline', value: null },
      { label: 'Speakers notified', value: null },
    ],
    contactEmail: CONTACT_EMAIL,
  },
};

/**
 * Pull a Typeform form ID out of a share URL
 * (`https://<org>.typeform.com/to/<id>` or `https://form.typeform.com/to/<id>`).
 * Returns `undefined` for anything that isn't a Typeform URL (e.g. the old
 * Swoogo links), so callers can fall back.
 */
export function typeformIdFromUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  try {
    const { hostname, pathname } = new URL(url);
    if (!hostname.endsWith('typeform.com')) return undefined;
    return pathname.match(/\/to\/([A-Za-z0-9]+)/)?.[1];
  } catch {
    return undefined;
  }
}

/** Sanity URL wins (editable without a deploy); config is the fallback. */
export function resolveTypeformId(
  location: CfaLocation,
  sanityUrl?: string | null,
): string | undefined {
  return typeformIdFromUrl(sanityUrl) ?? cfaConfig[location]?.typeformId;
}

/** Plain-text drafting template built from the question list. */
export function buildDraftTemplate(config: CfaConfig): string {
  const lines = [
    `${config.eventName} — Call for Abstracts (draft)`,
    '',
    ...config.questions.flatMap((q, i) => [
      `${i + 1}. ${q.label}${q.required ? '' : ' (optional)'}`,
      ...(q.hint ? [`   ${q.hint}`] : []),
      '',
      '',
    ]),
  ];
  return lines.join('\n').trimEnd() + '\n';
}
