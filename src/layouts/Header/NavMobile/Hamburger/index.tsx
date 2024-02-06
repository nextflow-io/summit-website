import React, { useCallback, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

type Props = {};

const Hamburger: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <div className={styles.hamburgerWrapper}>
      <button
        className={classNames(styles.hamburger, { [styles.open]: open })}
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
