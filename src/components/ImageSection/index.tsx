import React, { useEffect, useRef } from "react";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

import styles from "./styles.module.css";

const Images = () => {
  const distortion = useRef(null);
  const distortionContainer = useRef(null);
  useEffect(() => {
    if (!distortionContainer.current) return;
    // distortion.current = new Distortion(distortionContainer.current);
  }, [distortionContainer]);
  return (
    <div className={styles.images}>
      <div ref={distortionContainer}>
        <img src={img1.src} />
      </div>
      <div>
        <img src={img2.src} />
      </div>
    </div>
  );
};

export default Images;
