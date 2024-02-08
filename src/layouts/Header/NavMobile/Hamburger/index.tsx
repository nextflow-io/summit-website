import React, { useCallback, useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const Hamburger: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <div className={styles.hamburgerWrapper}>
      <button
        className={clsx(styles.hamburger, { [styles.open]: isOpen })}
        onClick={handleClick}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
};

export default Hamburger;
