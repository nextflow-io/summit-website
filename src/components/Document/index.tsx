import React from "react";

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Document: React.FC<Props> = ({ children }) => {
  return <div className={styles.document}>{children}</div>;
};

export default Document;
