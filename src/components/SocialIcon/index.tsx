import React from "react";
import clsx from "clsx";

import Twitter from "@icons/Twitter";
import Linkedin from "@icons/Linkedin";
import Github from "@icons/Github";
import Link from "@icons/Link";

import styles from "./styles.module.css";

type Props = {
  type: "Twitter" | "LinkedIn" | "Company_Website" | "GitHub" | "Blog";
  className?: string;
  href: string;
};

const SocialIcon: React.FC<Props> = ({ type, href, className }) => {
  let Icon = Link;
  switch (type) {
    case "Twitter":
      Icon = Twitter;
      break;
    case "LinkedIn":
      Icon = Linkedin;
      break;
    case "GitHub":
      Icon = Github;
      break;
  }

  let title = `${type}`;
  if (type === "Company_Website") title = "Website";

  return (
    <a href={href} className={clsx(className, styles.icon)} title={title}>
      <Icon />
    </a>
  );
};

export default SocialIcon;
