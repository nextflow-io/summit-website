import React, { Fragment } from "react";
import { Icon } from "astro-icon/components";

import Twitter from "@icons/Twitter";
import Linkedin from "@icons/Linkedin";
import Github from "@icons/Github";
import Link from "@icons/Link";

type Props = {
  type: "Twitter" | "LinkedIn" | "Company_Website" | "GitHub" | "Blog";
};

const SocialIcon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case "Twitter":
      return <Twitter />;
    case "LinkedIn":
      return <Linkedin />;
    case "GitHub":
      return <Github />;
    default:
      return <Link />;
  }
};

export default SocialIcon;
