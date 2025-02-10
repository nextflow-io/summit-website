import { useCallback, useRef } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Pagination } from "swiper/modules";
import { screens } from "../../../tailwind.config.mjs";
import SliderRight from "@images/icons/SliderRight";
import SliderLeft from "@images/icons/SliderLeft";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.css";

type Props = {
  title?: string;
  children: React.ReactNode[];
};

const ImageSlider: React.FC<Props> = ({ title, children }) => {
  const breakpoints = Object.values(screens).map((bp) => parseInt(bp));
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper?.slidePrev();
  }, [sliderRef.current]);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper?.slideNext();
  }, [sliderRef.current]);

  return (
    <>
      <Swiper
        className={`${styles.swiper} relative w-full`}
        loop
        effect={'fade'}
        ref={sliderRef}
        modules={[Autoplay, EffectFade, Pagination]}
        // pagination={{
        //   clickable: true,
        // }}
        fadeEffect={{
          crossFade: true
        }}
        breakpoints={{
          [breakpoints[0]]: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {children.map((node, index) => (
          <SwiperSlide key={index} className="imageBlend w-full h-0 pb-[100%] overflow-hidden relative">{node}</SwiperSlide>
        ))}
      </Swiper>
      <nav className={clsx(styles.nav, "")}>
        <button onClick={handlePrev} ><SliderLeft/></button>
        <button onClick={handleNext} ><SliderRight/></button>
      </nav>
    </>
  );
};

export default ImageSlider;