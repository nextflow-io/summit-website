import { Fragment } from "react";
import Button from "../Button";
import Swiper from "@components/Swiper";

import events from "./events.mjs";

const SectionPreviousEvents = () => {
  return (
    <section className="pb-32 container">
      <Swiper title="See our past events">
        {events.map((event, index) => (
          <Fragment key={index}>
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
          </Fragment>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionPreviousEvents;
