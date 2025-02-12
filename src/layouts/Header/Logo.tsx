import React from "react";
import styles from "./styles.module.css";
import SummitLogo from "@images/icons/SummitLogo";

type Props = {
  namespace: string;
};

const Logo: React.FC<Props> = ({ namespace }) => {
  function url(path) {
    if (!namespace) return path;
    return `/`;
  }
  return (
    <a href={url("/")}>
      <SummitLogo className={`${styles.summitLogo}`}/>
      {/* <img src={logo.src} alt="Nextflow Summit 2025 Logo" /> */}
    </a>
  );
};

export default Logo;
