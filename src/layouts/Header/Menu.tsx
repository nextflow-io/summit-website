import React from "react";

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
            {desktop ? (
              <Button href={url("/register")} arrow cta wide>
                Register
              </Button>
            ) : (
              <Link href={url("/register")} active={isActive("register")}>
                Register
              </Link>
            )}
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
        <li>
          <Link href={url("/training")} active={isActive("training")}>
            Training
          </Link>
        </li>
        <li>
          <Link href={url("/speakers")} active={isActive("speakers")}>
            Speakers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
