import Distortion from "@components/Distortion";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

import styles from "./styles.module.css";

const Images = () => {
  return (
    <>
      <div className={styles.images}>
        <div>
          <Distortion img={img1} />
        </div>
        <div>
          <Distortion img={img2} />
        </div>
      </div>
    </>
  );
};

export default Images;
