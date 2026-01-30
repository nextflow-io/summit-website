import React, { useRef, useState, useEffect } from 'react';
import { formatLink } from '@utils/linkFormatter';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const { pathname, menuItems } = props;

  useEffect(() => {
    setHoveredIndex(null);
    setIsAnyHovered(false);
    setIsNavigating(false);
    setClickedIndex(null);
  }, [pathname]);

  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <nav className="">
      <ul
        onMouseEnter={() => {
          if (!isNavigating) {
            setIsAnyHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (!isNavigating) {
            setHoveredIndex(null);
            setIsAnyHovered(false);
          }
        }}
        className="relative w-full flex bg-nextflow-100 text-black overflow-hidden"
      >
        {menuItems.map((item, index) => {
          const url = formatLink(item.link) || '#';

          return (
            <Tab
              key={index}
              index={index}
              url={url}
              pathname={pathname || ''}
              isExternal={item.link?.isExternal}
              isHovered={hoveredIndex === index}
              isAnyHovered={isAnyHovered}
              setHoveredIndex={setHoveredIndex}
              isNavigating={isNavigating}
              setIsNavigating={setIsNavigating}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            >
              {item.linkTitle}
            </Tab>
          );
        })}
      </ul>
    </nav>
  );
};

type TabProps = {
  children: React.ReactNode;
  index: number;
  url: string;
  pathname: string;
  isExternal?: boolean;
  isHovered: boolean;
  isAnyHovered: boolean;
  setHoveredIndex: (index: number | null) => void;
  isNavigating: boolean;
  setIsNavigating: (value: boolean) => void;
  clickedIndex: number | null;
  setClickedIndex: (index: number | null) => void;
};

const Tab: React.FC<TabProps> = ({
  children,
  index,
  url,
  pathname,
  isExternal,
  isHovered,
  isAnyHovered,
  setHoveredIndex,
  isNavigating,
  setIsNavigating,
  clickedIndex,
  setClickedIndex,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  function isActive(path: string) {
    return pathname?.includes(path);
  }

  const active = isActive(url);

  const showSquare = 
    (!isNavigating && isHovered) || 
    (isNavigating && clickedIndex === index) ||
    (active && !isAnyHovered && !isNavigating);

  const handleClick = (e: React.MouseEvent) => {
    if (!isExternal) {
      setIsNavigating(true);
      setClickedIndex(index);
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!isNavigating) {
          setHoveredIndex(index);
        }
      }}
      className="relative z-10 flex items-center gap-2 cursor-pointer text-black"
    >
      <span 
        className={`w-2 h-2 bg-black flex-shrink-0 transition-opacity duration-300 mr-[-6px] mt-[-1px] ${
          showSquare ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <a
        href={url}
        onClick={handleClick}
        className={`navItem uppercase transition-none ${active ? 'active' : ''}`}
        data-active={active ? true : undefined}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    </li>
  );
};

export default SecondaryMenu;