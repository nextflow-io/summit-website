// data/menus.ts or lib/sanity/menus.ts
import { sanityClient } from 'sanity:client';

export interface Link {
  isExternal?: boolean;
  internalLink?: string;
  externalUrl?: string;
}

export interface MenuItem {
  linkTitle: string;
  link: Link;
  /** Optional sub-links. If present, this tab shows a secondary bar across its section. */
  secondaryNav?: MenuItem[];
}

export interface Button {
  buttonText?: string;
  buttonLink?: string;
  buttonUrl?: Link;
  externalLink?: boolean;
}

export interface SingleLink {
  _type: 'singleLink';
  linkTitle: string;
  link: Link;
}

export interface MenuLink {
  linkTitle: string;
  link: Link;
}

export interface MenuGroup {
  _type: 'menuGroup';
  menuTitle: string;
  menuLinks: MenuLink[];
}

export type MobileMenuItem = SingleLink | MenuGroup;

export interface FooterLink {
  linkTitle: string;
  link: Link;
}

export interface FooterGroup {
  footerTitle: string;
  footerLinks: FooterLink[];
}

export interface MenusData {
  _id: string;
  _type: string;
  /** Single ordered list of header tabs. A tab with `secondaryNav` shows a sub-bar across its section. */
  headerMenu?: MenuItem[];
  headerBtn?: Button;
  mobileMenu?: MobileMenuItem[];
  footerMenu?: FooterGroup[];
  mobileBtn?: Button;
  mobileBtn2?: Button;
  // --- transition fallback only (pre-unified model); safe to drop once data is migrated ---
  /** @deprecated superseded by `headerMenu[].secondaryNav`. */
  secondaryPath?: string;
  /** @deprecated superseded by `headerMenu[].secondaryNav`. */
  secondaryMenu?: MenuItem[];
}

/**
 * The "section" a header tab owns, used to decide where its secondary bar shows.
 * It is the first two URL segments of the tab's own internal link
 * (e.g. "2026/barcelona/overview" -> "2026/barcelona"). External or empty links have no section.
 */
function sectionOf(link?: Link): string | null {
  if (!link || link.isExternal) return null;
  const internal = link.internalLink;
  if (!internal) return null;
  const segments = internal.replace(/^\/+/, '').split('/').filter(Boolean);
  if (segments.length === 0) return null;
  return segments.slice(0, 2).join('/');
}

/**
 * Builds the primary header navigation: simply the ordered `headerMenu` list.
 * Order is fully controlled by the editor (drag-to-reorder in the CMS).
 */
export function buildPrimaryNav(menus: MenusData | undefined): MenuItem[] {
  return menus?.headerMenu ?? [];
}

/**
 * Resolves which secondary (sub) navigation to show for the current path.
 *
 * A tab's secondary bar shows when the visited URL falls within that tab's section
 * (derived from the tab's own link). The most specific (longest) matching section wins,
 * so editions never collide. Tabs without sub-links (e.g. FAQ) show no secondary bar.
 */
export function resolveSecondaryMenu(
  menus: MenusData | undefined,
  pathname: string
): MenuItem[] | null {
  if (!menus || !pathname) return null;

  const match = (menus.headerMenu ?? [])
    .filter((item) => item?.secondaryNav && item.secondaryNav.length > 0)
    .map((item) => ({ section: sectionOf(item.link), nav: item.secondaryNav! }))
    .filter((c) => c.section && pathname.includes(c.section))
    .sort((a, b) => (b.section!.length ?? 0) - (a.section!.length ?? 0))[0];

  if (match?.nav) return match.nav;

  // transition fallback: legacy single secondary nav (removable once CMS data is migrated)
  if (
    menus.secondaryPath &&
    pathname.includes(menus.secondaryPath) &&
    menus.secondaryMenu &&
    menus.secondaryMenu.length > 0
  ) {
    return menus.secondaryMenu;
  }

  return null;
}

export async function fetchMenus(): Promise<MenusData> {
  const data = await sanityClient.fetch(`*[_type == "menus"][0]{
    _id,
    _type,
    headerMenu[]{
      linkTitle,
      link {
        isExternal,
        internalLink,
        externalUrl
      },
      secondaryNav[]{
        linkTitle,
        link {
          isExternal,
          internalLink,
          externalUrl
        }
      }
    },
    headerBtn {
      buttonText,
      buttonLink,
      buttonUrl {
      ...,
      },
      externalLink,
    },
    secondaryPath,
    secondaryMenu[]{
      linkTitle,
      link {
        isExternal,
        internalLink,
        externalUrl
      }
    },
    mobileMenu[]{
      _type,
      linkTitle,
      link {
        isExternal,
        internalLink,
        externalUrl
      },
      menuTitle,
      menuLinks[]{
        linkTitle,
        link {
          isExternal,
          internalLink,
          externalUrl
        }
      }
    },
    mobileBtn {
      buttonText,
      buttonLink,
      buttonUrl {
      ...,
      },
      externalLink,
    },
    mobileBtn2 {
      buttonText,
      buttonLink,
      buttonUrl {
      ...,
      },
      externalLink,
    },
    footerMenu[]{
      footerTitle,
      footerLinks[]{
        linkTitle,
        link {
          isExternal,
          internalLink,
          externalUrl
        }
      }
    }
  }`);

  return data;
}
