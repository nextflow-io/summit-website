import React, { useEffect, useRef } from "react";
import classNames from "classnames";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import Distorter from "../../scripts/Distorter";

import styles from "./styles.module.css";

const Images = () => {
  const distortion = useRef(null);
  const distortionContainer = useRef(null);
  // console.log(">>", "asdasdasdas");
  useEffect(() => {
    if (!distortionContainer.current) return;
    new Distorter(distortionContainer.current);
    // console.log(">>", distortionContainer.current);
    // add dispose
  }, [distortionContainer]);
  return (
    <>
      <div ref={distortionContainer} className={styles.container}>
        <div className={classNames("canvas-container", styles.img)}>
          <img src={img1.src} />
        </div>
      </div>
      <div className={styles.images}>
        <div className="canvas-containesssssr">
          <img src={img1.src} />
        </div>
        <div>
          <img src={img2.src} />
        </div>
      </div>
    </>
  );
};

export default Images;
