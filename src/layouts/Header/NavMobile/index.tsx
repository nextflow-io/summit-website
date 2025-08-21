import { useState } from "react";
import clsx from "clsx";
import Button from "@components/Button";
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
          <div
            className={clsx(styles.navDropdown, { [styles.openDD]: isOpen })}
          >
            <DropDowns />

            <div className="container">
              <Button
                className="container mt-8 relative w-full"
                brand
                arrowAfter
              >
                Register for Summit
                <a
                  className="absolute w-full h-full"
                  href="https://seqera.registration.goldcast.io/events/dc611bf3-ddc4-4a20-9f2f-1a9e941cc68c"
                  target="_blank"
                ></a>
              </Button>
              <Button
                className="container mt-4 relative w-full"
                white
                arrowBefore
              >
                Register for Training
                <a
                  className="absolute w-full h-full"
                  href="https://seqera.swoogo.com/nextflow-training"
              target="_blank"
                ></a>
              </Button>
              <Button
                className="container mt-4 relative w-full"
                white
                arrowBefore
              >
               Register for Hackathon
                <a
                  className="absolute w-full h-full"
                     href="https://seqera.swoogo.com/nfcore-hackathon"
              target="_blank"
              
                ></a>
              </Button>
            </div>
          </div>
        )}
      </header>
      <div className="h-[76px]"></div>
    </div>
  );
};

export default NavMobile;
