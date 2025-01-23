import React from "react";

import menuItems from "./menuItems";
import Button from "@components/Button";
import Link from "./Link";

type Props = {
  namespace: string;
  pathname: string;
  second?: boolean;
  desktop?: boolean;
};

const Menu: React.FC<Props> = (props) => {
  const { pathname, namespace, second, desktop } = props;
  function isActive(path) {
    return pathname?.includes(path);
  }

  function getURL(path, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  let location = "menu";
  const { main } = menuItems[location];

  return (
    <nav>
      <ul>
        {main.map(({ name, url }, i) => (
          <li key={i}>
            <Link href={getURL(url)} active={isActive(url)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
