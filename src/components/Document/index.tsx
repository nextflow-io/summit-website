import React from "react";

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Document: React.FC<Props> = ({ children }) => {
  return <div className={`${styles.document} container-xl`}>
    <div className="py-20">{children}</div></div>;
};

export default Document;
