import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [canShowCursor, setCanShowCursor] = useState(true);

  const { pathname, menuItems } = props;

  useEffect(() => {
    setCanShowCursor(false);
    setPosition({
      left: 0,
      width: 0,
      opacity: 0,
    });
    setHoveredIndex(null);
    
    const timer = setTimeout(() => {
      setCanShowCursor(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <nav className="">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
          setHoveredIndex(null);
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
              setPosition={setPosition}
              isExternal={item.link?.isExternal}
              isHovered={hoveredIndex === index}
              setHoveredIndex={setHoveredIndex}
              canShowCursor={canShowCursor}
            >
              {item.linkTitle}
            </Tab>
          );
        })}
        <Cursor position={position} pathname={pathname} />
      </ul>
    </nav>
  );
};

type TabProps = {
  children: React.ReactNode;
  index: number;
  setPosition: (position: any) => void;
  url: string;
  pathname: string;
  isExternal?: boolean;
  isHovered: boolean;
  setHoveredIndex: (index: number | null) => void;
  canShowCursor: boolean;
};

const Tab: React.FC<TabProps> = ({ 
  children, 
  index,
  setPosition, 
  url, 
  pathname, 
  isExternal, 
  isHovered,
  setHoveredIndex,
  canShowCursor
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  function isActive(path: string) {
    return pathname?.includes(path);
  }

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        setHoveredIndex(index);
        
        if (!ref?.current || !canShowCursor) return;
        
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer text-black "
    >
      <a 
        href={url}
        className={`navItem uppercase transition-none ${isActive(url) ? 'active' : ''} ${isHovered ? '!text-white' : ''}`}
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
    left: number;
    width: number;
    opacity: number;
  };
  pathname?: string;
};

const Cursor: React.FC<CursorProps> = ({ position, pathname }) => {
  return (
    <motion.li
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
      className="nav__highlight absolute top-0 z-0 h-full"
    />
  );
};

export default SecondaryMenu;