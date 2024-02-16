import Swiper from "@components/Swiper";
import Arrow from "./Arrow";

import events from "./events.mjs";

import styles from "./styles.module.css";

type Props = {
  title?: string;
};

const SectionPastEvents: React.FC<Props> = ({ title }) => {
  return (
    <section className="pb-16 container relative z-10">
      <Swiper title={title}>
        {events.map((event, index) => (
          <a
            key={index}
            className={styles.card}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={event.img.src} loading="lazy" />
            <div className={styles.overlay} />
            <div className={styles.overlay2} />
            <div className={styles.content}>
              <div>
                <h4>{event.title}</h4>
                <div className={styles.button}>
                  Visit website
                  <Arrow />
                </div>
              </div>
            </div>
          </a>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionPastEvents;
