import React from "react";

import menuItems from "./menuItems";
import Button from "@components/Button";
import Link from "./Link";

type Props = {
  namespace: string;
  pathname: string;
  desktop?: boolean;
};

const Menu: React.FC<Props> = (props) => {
  const { pathname, namespace, desktop } = props;
  function isActive(path) {
    return pathname?.includes(path);
  }

  function getURL(path, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  let location = "boston";
  if (namespace === "2025/barcelona") location = "barcelona";

  const { main, cta } = menuItems[location];

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
