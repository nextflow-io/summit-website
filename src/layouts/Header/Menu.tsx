import React from "react";

import menuItems from "./menuItems";
import Button from "@components/Button";
import Link from "./Link";

type Props = {
  className?: string;
  namespace: string;
  pathname: string;
  second?: boolean;
  desktop?: boolean;
};

const Menu: React.FC<Props> = ({
  className,
  pathname,
  namespace,
  second,
  desktop,
}) => {
  function isActive(path) {
    return pathname.includes(path);
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
      <nav className={className}>
        <ul>
          {secondary.map(({ name, url, cta, root }) => (
            <li>
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
    <nav className={className}>
      <ul>
        {main.map(({ name, url }) => (
          <li>
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
