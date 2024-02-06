import React, { useEffect, useRef } from "react";
import Distorter from "../../scripts/Distorter";

import styles from "./styles.module.css";

type Props = {
  img: {
    src: string;
  };
  n?: boolean;
};

const Distortion: React.FC<Props> = ({ img, n }) => {
  const distortion = useRef(null);
  const distortionContainer = useRef(null);
  useEffect(() => {
    if (!distortionContainer.current) return;
    distortion.current = new Distorter(distortionContainer.current);
    if (n) distortion.current.start();
    if (!n) setTimeout(() => distortion.current.start(), 4000);
    return function cleanup() {
      distortion.current.stop();
    };
  }, [distortionContainer, n]);
  return (
    <div className={styles.container} ref={distortionContainer}>
      <img src={img.src} />
    </div>
  );
};

export default Distortion;
