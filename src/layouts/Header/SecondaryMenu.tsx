import React from "react";
import menuLinks from "./menuLinks";
import Link from "./Link";

type Props = {
  namespace: string;
  pathname: string;
  second?: boolean;
  desktop?: boolean;
};

const Menu: React.FC<Props> = (props) => {
  const { pathname, namespace, desktop } = props;

  function isActive(path) {
    return String(pathname) == String(path)
  }
 
    
  let location;
  if (namespace === "2025/boston") location = 0;
  if (namespace === "2025/barcelona") location = 1;

  return (
    <nav>
      <ul>
        {menuLinks[location].dropdowns?.map(({ name, url }, i) => {
          return (
            <li key={i}>
              {/* <Link href={url} active={isActive(url)}>
                {name}
              </Link> */}
                <a href={url} className={`navItem ${pathname === url ? "is-active" : ""}`}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
