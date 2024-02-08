import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
};

const Link: React.FC<Props> = ({ children, href, active }) => {
  return (
    <a className={clsx(styles.navItem, active && styles.active)} href={href}>
      {children}
    </a>
  );
};

export default Link;
