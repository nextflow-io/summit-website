import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import events from "./events.mjs";

import styles from "./styles.module.css";

const PreviousEvents = () => {
  return (
    <div className="pb-32 px-8">
      <div className="container-lg">
        <h3 className="text-4xl font-display font-semibold mt-24 mb-16">
          See our past events
        </h3>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className={classNames(styles.card)}>
                <img src={event.img.src} />
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
      </div>
    </div>
  );
};

export default PreviousEvents;
