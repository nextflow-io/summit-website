import { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import Hamburger from "./Hamburger";
import DropDowns from "./DropDowns/DropDowns";
import useMediaQuery from "@utils/useMediaQuery";
import Logo from "../Logo";
import Menu from "../Menu";

type Props = {
  namespace: string;
  pathname: string;
  showNav?: boolean;
};

const NavMobile: React.FC<Props> = ({ pathname, namespace, showNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "sm" });
  if (!isMobile) return null;
  return (
    <div>
    <header
      id="headerMobile"
      className={clsx(styles.navMobile, { [styles.open]: isOpen })}
    >  
      <div className={styles.header}>
        <Logo namespace={namespace} />
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className={clsx(styles.navDropdown, { [styles.openDD]: isOpen })}>
          <DropDowns />
        </div>
      )}
      
    </header>
      <div className="h-[76px]"></div>
    </div>
  );
};

export default NavMobile;
