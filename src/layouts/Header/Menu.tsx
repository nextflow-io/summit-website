import React from "react";
import Link from "./Link";

type MenuItem = {
  linkTitle: string;
  link?: {
    isExternal?: boolean;
    internalLink?: string;
    externalUrl?: string;
  };
};

type Props = {
  namespace?: string;
  pathname?: string;
  menuItems?: MenuItem[];
};

const Menu: React.FC<Props> = (props) => {
  const { pathname, namespace, menuItems } = props;

  function isActive(path: string) {
    return pathname?.includes(path);
  }

  function getURL(path: string, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  // If no menu items from Sanity, return null or show a fallback
  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <nav className="main-nav">
      <ul>
        {menuItems.map((item, index) => {
          const href = item.link?.isExternal 
            ? item.link?.externalUrl 
            : item.link?.internalLink;
          
          const url = href ? getURL(href, item.link?.isExternal) : '#';
          const isExternal = item.link?.isExternal;

          return (
            <li key={index}>
              <Link 
                href={url} 
                active={isActive(url)}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {item.linkTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;