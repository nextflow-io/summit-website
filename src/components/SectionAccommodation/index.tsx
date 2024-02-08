import { Fragment } from "react";
import Button from "../Button";
import Swiper from "@components/Swiper";

import locations from "./locations.mjs";

const SectionAccommodation = () => {
  return (
    <section className="pb-32 container">
      <Swiper title="Hotels close to the venue">
        {locations.map((event, index) => (
          <Fragment key={index}>
            <img src={event.img.src} loading="lazy" />
            <div className="swiper-lazy-preloader"></div>
            <div>
              <div>
                <h4>{event.title}</h4>
                <div>{event.subtitle}</div>
                <Button to={event.url} arrow white>
                  Find out more
                </Button>
              </div>
            </div>
          </Fragment>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionAccommodation;
