import { useEffect, useRef } from "react";
import Distorter from "../../scripts/Distorter";

import styles from "./styles.module.css";

type Props = {
  img: {
    src: string;
  };
};

const Distortion: React.FC<Props> = ({ img }) => {
  const distortion = useRef(null);
  const distortionContainer = useRef(null);

  useEffect(() => {
    const container = distortionContainer.current;
    if (!container) return;
    if (!distortion.current) {
      const distortionInstance = new Distorter(container);
      distortion.current = distortionInstance;
    }
    distortion.current.start();
    return function cleanup() {
      distortion.current.stop();
    };
  }, [distortionContainer]);

  return (
    <div className={styles.container} ref={distortionContainer}>
      <img src={img.src} />
    </div>
  );
};

export default Distortion;
