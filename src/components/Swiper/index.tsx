import { useCallback, useRef } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { screens } from "../../../tailwind.config.mjs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.css";

type Props = {
  title?: string;
  children: React.ReactNode[];
};

const SwiperSection: React.FC<Props> = ({ title, children }) => {
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
      {!!title && <h3 className="h0 mt-24 mb-8 md:mb-16">{title}</h3>}
      <Swiper
        className={styles.swiper}
        loop
        ref={sliderRef}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          [breakpoints[0]]: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          [breakpoints[1]]: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          [breakpoints[2]]: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {children.map((node, index) => (
          <SwiperSlide key={index}>{node}</SwiperSlide>
        ))}
      </Swiper>
      <nav className={clsx(styles.nav, "-mt-6")}>
        <button onClick={handlePrev} />
        <button onClick={handleNext} />
      </nav>
    </>
  );
};

export default SwiperSection;
