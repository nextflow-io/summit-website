import clsx from "clsx";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import styles from "./styles.module.css";

const SectionImages = ({ alt1, className }) => {
  let images = [img1, img2];
  if (alt1) {
    images = [img2, img1, img2];
  }
  return (
    <div className={clsx(styles.images, alt1 && styles.alt1, className)}>
      {images.map((img, i) => (
        <div>
          <img src={img.src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SectionImages;
