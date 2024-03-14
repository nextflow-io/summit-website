import Button from "@components/Button";
import Swiper from "@components/Swiper";
import locations from "./locations.mjs";

import styles from "./styles.module.css";

const SectionAccommodation = () => {
  return (
    <section className="pb-32 container">
      <Swiper title="Hotels close to the venue">
        {locations.map((event, index) => (
          <a
            key={index}
            className={styles.card}
            href={event.url}
            target="_blank"
          >
            <img src={event.img.src} loading="lazy" />
            <div className="swiper-lazy-preloader"></div>
            <div>
              <div>
                <h4>{event.title}</h4>
                <div className="mb-6">{event.subtitle}</div>
                <Button arrow white>
                  Find out more
                </Button>
              </div>
            </div>
          </a>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionAccommodation;
