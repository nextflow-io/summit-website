import React from "react";
import Button from "@components/Button";
import ImageSlider from "@components/ImageSlider";
import "swiper/css/effect-fade";

type Props = {
  className?: string;
  images?: Array<{
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  }>;
};

const Slideshow: React.FC<Props> = ({ images = [] }) => {
  return (
    <ImageSlider>
      {images.map((image, idx) => (
        <div
          key={idx}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
        >
          <img
            src={image.asset?.url}
            loading="lazy"
            alt={image.alt || ""}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </ImageSlider>
  );
};

export default Slideshow;