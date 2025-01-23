import React from "react";

import logo from "./logo.svg";
import styles from "./styles.module.css";

type Props = {
  namespace: string;
};

const Logo: React.FC<Props> = ({ namespace }) => {
  function url(path) {
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }
  return (
    <a className={styles.logo} href={url("/")}>
      <img src={logo.src} alt="Nextflow SUMMIT 2024" />
    </a>
  );
};

export default Logo;
