

import React from "react";
import Box from "@components/Box";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  className?: string;
  children?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
  link?: string;
};

const InfoBox: React.FC<Props> = (props = {}) => {
  const { className, children = "", title, subtitle, icon, link } = props;
  return (
    <Box className={clsx(styles.infoBox, "flex flex-col justify-between min-h-[350px]")}  href={link}>
    <div className={clsx(styles.infoBox__title, "")}>
      <h5 className="h6 pb-6">{title}</h5>
    </div>
    <div className={clsx(styles.infoBox__content, "")}>
      {/* <img src={icon.src} className="w-[44px] inline-block" /> */}
      {subtitle && (
      <h6 className="h6">{subtitle}</h6>
    )}

      <div className="monospace text-md flex-auto">{children}</div>
    </div>
 
 
  </Box>
  );
};

export default InfoBox;

