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
  pathname?: string;
  menuItems?: MenuItem[];
};

const Menu: React.FC<Props> = (props) => {
  const { pathname, menuItems } = props;

  function isActive(path: string) {
    return pathname?.includes(path);
  }
  
  // If no menu items from Sanity, return null
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
          
          // Add leading slash if not present and not external
          const url = href && !item.link?.isExternal && !href.startsWith('/') 
            ? `/${href}` 
            : href || '#';
          
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