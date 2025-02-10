import React from "react";

import Button from "@components/Button";
import ImageSlider from "@components/ImageSlider";
import data from "./images.js";

import styles from "./styles.module.css";
import 'swiper/css/effect-fade';
type Props = {
  className?: string;
  location?: "boston" | "barcelona";
};

const Slideshow: React.FC<Props> = (props = {}) => {
  const { className, location = "boston" } = props;
  return (

      <ImageSlider>
        {data.main.map((event, index) => (
          <div
            key={index}
            className={`top-0 left-0 right-0 bottom-0 object-cover absolute w-full h-full border border-nextflow `}
          >
            <img src={event.img.src} loading="lazy" className="top-0 left-0 right-0 bottom-0 object-cover absolute w-full h-full" />
            {/* <div className="swiper-lazy-preloader"></div> */}
          </div>
        ))}
      </ImageSlider>

  );
};

export default Slideshow;