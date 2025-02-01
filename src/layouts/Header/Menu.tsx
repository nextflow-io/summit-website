import React from "react";
import menuLinks from "./menuLinks";
import Link from "./Link";

type Props = {
  namespace?: string;
  pathname?: string;
};

const Menu: React.FC<Props> = (props) => {
  const { pathname, namespace } = props;
  function isActive(path) {
    return pathname?.includes(path);
  }

  function getURL(path, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  return (
    <nav>
      <ul>
        {menuLinks.map(({ name, url }, i) => (
          <li key={i}>
            <Link href={url} active={isActive(url)}>
              {name} 
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
