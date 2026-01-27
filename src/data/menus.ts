// lib/sanity/menus.ts
import { sanityClient } from "sanity:client";

export interface Link {
  internalLink?: string;
  externalUrl?: string;
  isExternal?: boolean;
}

export interface MenuItem {
  linkTitle: string;
  link: Link;
}

export interface FooterLink {
  linkTitle: string;
  link: Link;
}

export interface FooterGroup {
  footerTitle: string;
  footerLinks: FooterLink[];
}

export interface Button {
  buttonText: string;
  buttonLink?: string;
  buttonUrl?: string;
  externalLink?: boolean;
}

export interface MenusData {
  _id: string;
  _type: string;
  headerMenu: MenuItem[];
  headerBtn?: Button;
  footerMenu: FooterGroup[];
}

export async function fetchMenus(): Promise<MenusData> {
  const data = await sanityClient.fetch(`*[_type == "menus"][0]{
    _id,
    _type,
    headerMenu[]{
      linkTitle,
      link {
        url,
        href,
        external
      }
    },
    headerBtn {
      buttonText,
      buttonLink,
      buttonUrl,
      externalLink
    },
    footerMenu[]{
      footerTitle,
      footerLinks[]{
        linkTitle,
        link {
          isExternal,
          externalUrl,
          internalLink,
        }
      }
    }
  }`);
  
  return data;
}