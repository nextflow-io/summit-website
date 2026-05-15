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
}

export interface Button {
  buttonText?: string;
  buttonLink?: string;
  buttonUrl?: string;
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
  headerMenu?: MenuItem[];
  headerBtn?: Button;
  secondaryPath?: string;
  secondaryMenu?: MenuItem[];
  mobileMenu?: MobileMenuItem[];
  footerMenu?: FooterGroup[];
  mobileBtn?: Button;
  mobileBtn2?: Button;
}

const BARCELONA_OVERVIEW = "/2026/barcelona/overview";

const BARCELONA_HEADER_ITEM: MenuItem = {
  linkTitle: "Barcelona",
  link: {
    isExternal: false,
    internalLink: BARCELONA_OVERVIEW,
  },
};

const BARCELONA_MOBILE_ITEM: SingleLink = {
  _type: "singleLink",
  linkTitle: "Barcelona",
  link: {
    isExternal: false,
    internalLink: BARCELONA_OVERVIEW,
  },
};

function internalLinkHasBarcelona(link?: Link): boolean {
  const path = link?.internalLink?.toLowerCase() ?? "";
  return !link?.isExternal && path.includes("barcelona");
}

function headerMenuHasBarcelona(menu?: MenuItem[]): boolean {
  return menu?.some((item) => internalLinkHasBarcelona(item.link)) ?? false;
}

function withBarcelonaInHeaderMenu(menu?: MenuItem[]): MenuItem[] {
  const list = [...(menu ?? [])];
  if (headerMenuHasBarcelona(list)) return list;
  const bostonIdx = list.findIndex((item) => {
    const path = item.link?.internalLink?.toLowerCase() ?? "";
    return !item.link?.isExternal && path.includes("/2026/boston");
  });
  const insertAt = bostonIdx >= 0 ? bostonIdx + 1 : list.length;
  list.splice(insertAt, 0, BARCELONA_HEADER_ITEM);
  return list;
}

function mobileMenuHasBarcelona(menu?: MobileMenuItem[]): boolean {
  if (!menu?.length) return false;
  for (const item of menu) {
    if (item._type === "singleLink" && internalLinkHasBarcelona(item.link))
      return true;
    if (item._type === "menuGroup") {
      const hit = item.menuLinks?.some((ml) =>
        internalLinkHasBarcelona(ml.link),
      );
      if (hit) return true;
    }
  }
  return false;
}

function withBarcelonaInMobileMenu(menu?: MobileMenuItem[]): MobileMenuItem[] {
  const list = [...(menu ?? [])];
  if (mobileMenuHasBarcelona(list)) return list;
  const bostonIdx = list.findIndex((item) => {
    if (item._type !== "singleLink") return false;
    const path = item.link?.internalLink?.toLowerCase() ?? "";
    return !item.link?.isExternal && path.includes("/2026/boston");
  });
  const insertAt = bostonIdx >= 0 ? bostonIdx + 1 : list.length;
  list.splice(insertAt, 0, BARCELONA_MOBILE_ITEM);
  return list;
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

  if (!data) return data;

  return {
    ...data,
    headerMenu: withBarcelonaInHeaderMenu(data.headerMenu),
    mobileMenu: withBarcelonaInMobileMenu(data.mobileMenu),
  };
}
