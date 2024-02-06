import classNames from "classnames";

import logo from "./logo.svg";
import styles from "./styles.module.css";
import Button from "@components/Button";

const Header = () => {
  return (
    <>
      <header
        className={classNames(
          "h-[104px] container flex items-center justify-between",
          styles.header,
        )}
      >
        <a className={styles.logo} href="/">
          <img src={logo.src} />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/agenda">Agenda</a>
            </li>
            <li>
              <a href="/travel">Travel</a>
            </li>
            <li>
              <a href="/speakers">Speakers</a>
            </li>
            <li>
              <a href="/sponsors">Sponsors</a>
            </li>
            <li>
              <a href="/past-events">Past events</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="/call-for-abstracts">Call for abstracts</a>
            </li>
            <li>
              <Button href="/register" arrow white>
                Pre-register
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
