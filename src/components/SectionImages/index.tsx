// import Distortion from "@components/Distortion";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

import styles from "./styles.module.css";

const Images = () => {
  return (
    <>
      <div className={styles.images}>
        <div>
          {/* <Distortion img={img1} /> */}
          <img src={img1.src} />
        </div>
        <div>
          {/* <Distortion img={img2} /> */}
          <img src={img2.src} />
        </div>
      </div>
    </>
  );
};

export default Images;
