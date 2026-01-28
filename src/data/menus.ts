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
  secondaryMenu?: MenuItem[];
  mobileMenu?: MobileMenuItem[];
  footerMenu?: FooterGroup[];
  mobileBtn?: Button;
  mobileBtn2?: Button;
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
