import { useCallback, useRef } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import { screens } from "../../../tailwind.config.mjs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import events from "./events.mjs";

import styles from "./styles.module.css";

const SectionPreviousEvents = () => {
  const breakpoints = Object.values(screens).map((bp) => parseInt(bp));
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper?.slidePrev();
  }, [sliderRef.current]);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper?.slideNext();
  }, [sliderRef.current]);

  return (
    <div className="pb-32">
      <div className="container">
        <h3 className="h0 mt-24 mb-16">See our past events</h3>
        <Swiper
          ref={sliderRef}
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
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className={classNames(styles.card)}>
                <img src={event.img.src} loading="lazy" />
                <div className="swiper-lazy-preloader"></div>
                <div>
                  <div>
                    <h4>{event.title}</h4>
                    <Button to={event.url} arrow white>
                      Visit website
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <nav className={classNames(styles.nav, "mt-12")}>
          <button onClick={handlePrev} />
          <button onClick={handleNext} />
        </nav>
      </div>
    </div>
  );
};

export default SectionPreviousEvents;
