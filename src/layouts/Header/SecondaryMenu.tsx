import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
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
  namespace: string;
  pathname: string;
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

  const { pathname, namespace, desktop, menuItems } = props;

  function isActive(path: string) {
    return String(pathname) === String(path);
  }

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
        className="w-full flex bg-white overflow-hidden"
      >
        {menuItems.map((item, index) => {
          const href = item.link?.isExternal 
            ? item.link?.externalUrl 
            : item.link?.internalLink;
          
          return (
            <div key={index}>
              <Tab 
                url={href || '#'} 
                pathname={pathname} 
                setPosition={setPosition}
                isExternal={item.link?.isExternal}
              >
                {item.linkTitle}
              </Tab>
            </div>
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
      <Link 
        href={url} 
        active={isActive(url)}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
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