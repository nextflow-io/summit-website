import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation } from "swiper/modules";

import clsx from "clsx";
import schedule from "@data/schedule";
import sessions from "@data/sessions";

import styles from "./styles.module.css";
import { prettyDate, dateSlug } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

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
        {schedule.map((item, i) => {
          const hash = `#${dateSlug(item.date)}`;
          console.log(">>", hash, activeHash, hash === activeHash);
          return (
            <a
              key={i}
              className={clsx({ [styles.active]: activeHash === hash })}
              href={hash}
            >
              {prettyDate(item.date, false, true)}
            </a>
          );
        })}
      </nav>
      <Swiper
        modules={[HashNavigation]}
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
              data-hash={dateSlug(item.date)}
            >
              {item.timeSlots.map((slot, key) => {
                const showRoomName = slot.rooms.length > 1;
                const time = formatTime(slot.slotStart);
                return (
                  <div
                    className={clsx(styles.item, "container")}
                    key={`item-${key}`}
                  >
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Calendar;
