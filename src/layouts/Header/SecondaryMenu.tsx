import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

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
  second?: boolean;
  desktop?: boolean;
};

const SecondaryMenu: React.FC<Props> = (props) => {
  const [position, setPosition] = useState({
    left: undefined,
    width: 0,
    opacity: 0,
  });

  const { pathname, menuItems } = props;

  // If no menu items from Sanity, return null
  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <nav>
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="w-full flex bg-white text-black overflow-hidden"
      >
        {menuItems.map((item, index) => {
          const href = item.link?.isExternal 
            ? item.link?.externalUrl 
            : item.link?.internalLink;
          
          // Add leading slash if not present and not external
          const url = href && !item.link?.isExternal && !href.startsWith('/') 
            ? `/${href}` 
            : href || '#';
          
          return (
            <Tab 
              key={index}
              url={url} 
              pathname={pathname || ''}
              setPosition={setPosition}
              isExternal={item.link?.isExternal}
            >
              {item.linkTitle}
            </Tab>
          );
        })}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: (position: any) => void;
  url: string;
  pathname: string;
  isExternal?: boolean;
};

const Tab: React.FC<TabProps> = ({ children, setPosition, url, pathname, isExternal }) => {
  const ref = useRef<HTMLLIElement>(null);
  
  function isActive(path: string) {
    return pathname?.includes(path);
  }

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer text-brand"
    >
      <a 
        href={url}
        className={`navItem ${isActive(url) ? 'active' : ''}`}
        data-active={isActive(url) ? true : undefined}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    </li>
  );
};

type CursorProps = {
  position: {
    left: number | undefined;
    width: number;
    opacity: number;
  };
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      style={{ ...position }}
      initial={false}
      className="nav__highlight"
    />
  );
};

export default SecondaryMenu;