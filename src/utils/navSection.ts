/**
 * Shared "which section of the site am I in?" rules for the header navigation.
 *
 * Both navs key off the same thing — a tab's *own* link — so the desktop secondary
 * bar and the mobile dropdown always agree about the current section. Kept free of
 * any Sanity imports so the mobile React island can use it client-side.
 */

export interface SectionLink {
  isExternal?: boolean;
  internalLink?: string;
  externalUrl?: string;
}

/**
 * The section a path belongs to: its first two URL segments
 * (e.g. "/2026/virtual/agenda" -> "2026/virtual"). Returns null when there are none.
 */
export function sectionOfPath(path?: string): string | null {
  if (!path) return null;
  const segments = path.replace(/^\/+/, '').split('/').filter(Boolean);
  if (segments.length === 0) return null;
  return segments.slice(0, 2).join('/');
}

/** The section a nav link owns. External links own no section. */
export function sectionOfLink(link?: SectionLink | null): string | null {
  if (!link || link.isExternal) return null;
  return sectionOfPath(link.internalLink);
}

/** Whether the visited path falls inside a section. */
export function pathInSection(pathname: string, section: string | null): boolean {
  return Boolean(section && pathname.includes(section));
}

/**
 * Of the given sections, the index of the one that owns `pathname`.
 * The most specific (longest) match wins, so editions never collide.
 */
export function mostSpecificSectionIndex(
  sections: (string | null)[],
  pathname: string
): number | null {
  const match = sections
    .map((section, index) => ({ section, index }))
    .filter((candidate) => pathInSection(pathname, candidate.section))
    .sort((a, b) => (b.section?.length ?? 0) - (a.section?.length ?? 0))[0];

  return match ? match.index : null;
}
