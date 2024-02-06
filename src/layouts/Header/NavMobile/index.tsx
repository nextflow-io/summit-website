import React from "react";

import styles from "./styles.module.css";
import Hamburger from "./Hamburger";
import useMediaQuery from "@utils/useMediaQuery";

type Props = {};

const NavMobile: React.FC<Props> = () => {
  const isMobile = useMediaQuery({ maxWidth: "lg" });
  if (!isMobile) return null;
  return (
    <>
      <Hamburger />
    </>
  );
};

export default NavMobile;
