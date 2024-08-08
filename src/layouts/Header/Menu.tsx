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
  const { pathname, namespace, second, desktop } = props | {};
  function isActive(path) {
    return pathname?.includes(path);
  }

  function getURL(path, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  let location = "boston";
  if (namespace === "2024/barcelona") location = "barcelona";

  const { main, secondary, cta } = menuItems[location];

  if (second)
    return (
      <nav>
        <ul>
          {secondary.map(({ name, url, cta, root }, i) => (
            <li key={i}>
              {desktop && cta ? (
                <Button href={getURL(url, root)} arrow cta wide>
                  {name}
                </Button>
              ) : (
                <Link href={getURL(url, root)} active={isActive(url)}>
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );

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
