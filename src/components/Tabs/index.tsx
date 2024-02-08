import { useState, useRef, useContext } from "react";
import clsx from "clsx";

import useMediaQuery from "@utils/useMediaQuery";
import { TabContext } from "./context";

import styles from "./styles.module.css";

const Tabs = ({ tabIDs, children, className }) => {
  const ref = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabIDs[0]);
  const [prevTab, setPrevTab] = useState(null);
  const activeIndex = tabIDs.indexOf(currentTab);
  const isSmallScreen = useMediaQuery({ maxWidth: "sm" });

  const setTab = (tabID) => {
    setPrevTab(currentTab);
    setCurrentTab(tabID);
    const newIndex = tabIDs.indexOf(tabID);
    let scrollAmount = 193 * newIndex;
    if (!isSmallScreen) return;
    ref.current.scroll({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <TabContext.Provider
      value={{ currentTab, prevTab, setActiveTab: setCurrentTab }}
    >
      <div className={className}>
        <div className={clsx(styles.navContainer, "mb-16")} ref={ref}>
          <nav className={styles.nav} data-index={activeIndex}>
            {tabIDs.map((currentTabID) => (
              <button key={currentTabID} onClick={() => setTab(currentTabID)}>
                {currentTabID}
              </button>
            ))}
          </nav>
        </div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </TabContext.Provider>
  );
};

const Content = ({ children, id, className }) => {
  const { currentTab, prevTab } = useContext(TabContext);
  if (![currentTab, prevTab].includes(id)) return null;
  return (
    <div
      className={clsx(className, styles.content, {
        [styles.out]: id === prevTab,
        [styles.inn]: id === currentTab,
      })}
    >
      {children}
    </div>
  );
};

Tabs.Content = Content;

export default Tabs;
