import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, EffectCreative } from "swiper/modules";
import clsx from "clsx";
import schedule from "@data/schedule";
import sessions from "@data/sessions";

import { prettyDate, weekday } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

import styles from "./styles.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Calendar = () => {
  const [activeHash, setActiveHash] = useState("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    setActiveHash(window.location.hash);
    function updateCurrentPage() {
      const hash = window.location.hash;
      setActiveHash(hash);
    }
    addEventListener("hashchange", updateCurrentPage);
    return function cleanup() {
      removeEventListener("hashchange", updateCurrentPage);
    };
  }, []);
  return (
    <>
      <nav className={clsx(styles.nav, "container")}>
        {schedule.map((item, i) => (
          <a
            key={i}
            className={clsx({ [styles.active]: activeHash === item.hash })}
            href={item.hash}
          >
            <span>{`${weekday(item.date)}, `}</span>
            {prettyDate(item.date, false)}
          </a>
        ))}
      </nav>
      <Swiper
        loop
        autoHeight
        modules={[HashNavigation, EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            opacity: 0,
            translate: ["-100%", 0, 0],
          },
          next: {
            opacity: 0,
            translate: ["100%", 0, 0],
          },
        }}
        hashNavigation={{
          watchState: true,
        }}
        className={clsx(styles.calendar, "p-4")}
      >
        {schedule.map((item, i) => {
          return (
            <SwiperSlide
              className={styles.page}
              key={`page-${i}`}
              data-hash={item.hashID}
            >
              <div className="container">
                {item.timeSlots.map((slot, key) => {
                  const showRoomName = slot.rooms.length > 1;
                  const time = formatTime(slot.slotStart);
                  return (
                    <div className={styles.item} key={`item-${key}`}>
                      <div className={styles.time}>
                        <div>
                          {time.str}
                          <span>{time.ampm}</span>
                        </div>
                      </div>
                      <div className={styles.sessions}>
                        {slot.rooms.map((room, i) => {
                          const fullSession = sessions.find(
                            (s) => s.id === room.session.id,
                          );
                          return (
                            <SessionCard
                              key={i}
                              session={fullSession}
                              hideTime
                              showRoomName={showRoomName}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Calendar;
