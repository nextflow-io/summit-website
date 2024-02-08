import { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import Hamburger from "./Hamburger";
import useMediaQuery from "@utils/useMediaQuery";
import Logo from "../Logo";
import Menu from "../Menu";

type Props = {
  namespace: string;
  pathname: string;
};

const NavMobile: React.FC<Props> = ({ pathname, namespace }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "lg" });
  if (!isMobile) return null;
  return (
    <header className={clsx(styles.navMobile, { [styles.open]: isOpen })}>
      <div className={styles.header}>
        <Logo namespace={namespace} />
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className={styles.menuContainer}>
          <Menu pathname={pathname} namespace={namespace} />
          <Menu pathname={pathname} namespace={namespace} second />
        </div>
      )}
    </header>
  );
};

export default NavMobile;
