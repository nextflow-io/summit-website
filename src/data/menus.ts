// data/menus.ts or lib/sanity/menus.ts
import { sanityClient } from 'sanity:client';
import {
  mostSpecificSectionIndex,
  sectionOfLink,
} from '@utils/navSection';

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
  /**
   * The group's own landing page — the same destination the desktop tab links to.
   * Without it a group header would only toggle, leaving the section's overview
   * page unreachable on mobile.
   */
  link?: Link;
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
  /** @deprecated superseded by `headerMenu[].secondaryNav`; only used if `headerMenu` is empty. */
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

/** Whether a link actually resolves to somewhere (`formatLink` would return a URL). */
function hasDestination(link?: Link): boolean {
  if (!link) return false;
  return Boolean(link.isExternal ? link.externalUrl : link.internalLink);
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

  const tabs = (menus.headerMenu ?? []).filter(
    (item) => item?.secondaryNav && item.secondaryNav.length > 0
  );
  const matchIndex = mostSpecificSectionIndex(
    tabs.map((item) => sectionOfLink(item.link)),
    pathname
  );

  if (matchIndex !== null) return tabs[matchIndex].secondaryNav!;

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

/**
 * Builds the mobile navigation from the same `headerMenu` data the desktop header uses,
 * so the two can never drift: a tab with sub-links becomes an expandable group, a tab
 * without them stays a plain link. Falls back to the legacy hand-maintained `mobileMenu`
 * only when there is no `headerMenu` to derive from.
 */
export function buildMobileMenu(menus: MenusData | undefined): MobileMenuItem[] {
  const headerMenu = menus?.headerMenu ?? [];

  if (headerMenu.length === 0) return menus?.mobileMenu ?? [];

  return headerMenu
    .map((item): MobileMenuItem | null => {
      if (item.secondaryNav && item.secondaryNav.length > 0) {
        return {
          _type: 'menuGroup',
          menuTitle: item.linkTitle,
          link: item.link,
          menuLinks: item.secondaryNav.map(({ linkTitle, link }) => ({
            linkTitle,
            link,
          })),
        };
      }

      // A tab with neither sub-links nor a destination would render as inert
      // heading text, so leave it out rather than show a dead menu entry.
      if (!hasDestination(item.link)) return null;

      return {
        _type: 'singleLink',
        linkTitle: item.linkTitle,
        link: item.link,
      };
    })
    .filter((item): item is MobileMenuItem => item !== null);
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
