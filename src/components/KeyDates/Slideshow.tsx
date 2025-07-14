import React from "react";
import Button from "@components/Button";
import ImageSlider from "@components/ImageSlider";
import data from "./images.js";
import styles from "./styles.module.css";
import "swiper/css/effect-fade";

type Props = {
  className?: string;
  location?: "boston" | "barcelona" | "virtual";
};

const Slideshow: React.FC<Props> = ({ location }) => {
  const fallbackLocation = "virtual";
  const selectedLocation =
    data.main.find((item) => item.location === location) ||
    data.main.find((item) => item.location === fallbackLocation);

  return (
    <ImageSlider>
      {selectedLocation.images.map((image, idx) => (
        <div
          key={idx}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
        >
          <img
            src={image.img?.src || image.img}
            loading="lazy"
            alt={image.alt || ""}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-indigo-900 mix-blend-exclusion opacity-40"></div>
        </div>
      ))}
    </ImageSlider>
  );
};

export default Slideshow;
