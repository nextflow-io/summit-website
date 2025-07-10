import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import menuLinks from "./menuLinks";
import Link from "./Link";

type Props = {
  namespace: string;
  pathname: string;
  second?: boolean;
  desktop?: boolean;
};

const SecondaryMenu: React.FC<Props> = (props) => {
  const [position, setPosition] = useState({
    left: undefined,
    width: 0,
    opacity: 0,
  });

  const { pathname, namespace, desktop } = props;

  function isActive(path) {
    return String(pathname) == String(path);
  }

  let location;
  if (namespace === "2025/boston") location = 1;
  if (namespace === "2025/barcelona") location = 0;
  return (
    <nav>
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="rounded-sm relative mx-auto flex w-fit bg-nextflow-200 overflow-hidden"
      >
        {menuLinks[location].dropdowns?.map(({ name, url }, i) => {
          return (
            <div key={i}>
              <Tab url={url} pathname={pathname} setPosition={setPosition}>
                {name}
              </Tab>
            </div>
          );
        })}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition, url, pathname }) => {
  const ref = useRef(null);
  function isActive(path) {
    return pathname?.includes(path);
    // return pathname.toString() == path.toString()
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
      {/* <a
        href={url}
        className={`navItem`}
      >
        {children}
      </a> */}
           <Link href={url} active={isActive(url)}>
           {children}
          </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      style={{...position}}
      initial={false}
      className="nav__highlight"
    />
  );
};

export default SecondaryMenu;
