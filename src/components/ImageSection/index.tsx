import React from "react";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

import styles from "./styles.module.css";

const Images = () => {
  return (
    <div className={styles.images}>
      <div>
        <img src={img1.src} />
      </div>
      <div>
        <img src={img2.src} />
      </div>
    </div>
  );
};

export default Images;
