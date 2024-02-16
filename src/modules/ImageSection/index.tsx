import clsx from "clsx";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import boston01 from "./images/boston-01.jpg";
import boston02 from "./images/boston-02.jpg";
import boston03 from "./images/boston-03.jpg";

import styles from "./styles.module.css";

type Props = {
  alt1?: boolean;
  alt2?: boolean;
  className?: string;
};

const ImageSection: React.FC<Props> = ({ alt1, alt2, className }) => {
  let images = [img1, img2];
  if (alt1) images = [img3, img4, img5];
  if (alt2) images = [boston01, boston02, boston03];

  return (
    <section className={styles.container}>
      <div className={clsx(styles.images, alt1 && styles.alt1, className)}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
