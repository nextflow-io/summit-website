import clsx from "clsx";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import styles from "./styles.module.css";

const SectionImages = ({ alt1, className }) => {
  let images = [img1, img2];
  if (alt1) {
    images = [img3, img4, img5];
  }
  return (
    <section className={styles.container}>
      <div className={clsx(styles.images, alt1 && styles.alt1, className)}>
        {images.map((img, i) => (
          <div>
            <img src={img.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionImages;
