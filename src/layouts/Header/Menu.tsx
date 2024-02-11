import React from "react";

import Button from "@components/Button";
import Link from "./Link";

type Props = {
  className?: string;
  namespace: string;
  pathname: string;
  second?: boolean;
};

const Menu: React.FC<Props> = ({ className, pathname, namespace, second }) => {
  function isActive(path) {
    return pathname.includes(path);
  }

  function url(path) {
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  if (second)
    return (
      <nav className={className}>
        <ul>
          <li>
            <Link
              href={url("/call-for-abstracts")}
              active={isActive("call-for-abstracts")}
            >
              Call for abstracts
            </Link>
          </li>
          <li>
            <Button href={url("/register")} arrow cta wide>
              Pre-register
            </Button>
          </li>
        </ul>
      </nav>
    );

  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href={url("/agenda")} active={isActive("agenda")}>
            Agenda
          </Link>
        </li>
        <li>
          <Link href={url("/travel")} active={isActive("travel")}>
            Travel
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
