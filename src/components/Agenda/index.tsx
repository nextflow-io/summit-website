import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, EffectFade } from "swiper/modules";
import clsx from "clsx";
import schedule from "@data/schedule";
import sessions from "@data/sessions";

import { prettyDate, weekday } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

import styles from "./agenda.module.css";

import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  location?: "boston" | "barcelona";
};

const Calendar: React.FC<Props> = ({ location = "boston" }) => {
  const [activeHash, setActiveHash] = useState(schedule[location]?.[0]?.hash);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const locationHash = window.location.hash;
    if (locationHash) setActiveHash(locationHash);
    function updateCurrentPage() {
      const hash = window.location.hash;
      setActiveHash(hash);
    }
    addEventListener("hashchange", updateCurrentPage);
    return function cleanup() {
      removeEventListener("hashchange", updateCurrentPage);
    };
  }, []);

  const modules = [HashNavigation, EffectFade];

  return (
    <>
      <nav className={clsx(styles.nav, "container smaller")}>
        <a
          className={clsx({
            [styles.active]: [
              "#05-21",
              "#05-22",
              "#10-28",
              "#10-29",
              "#10-30",
            ].includes(activeHash),
          })}
          href={location == "boston" ? "#05-21" : "#10-28"}
        >
          Hackathon + Training
        </a>
        <a
          className={clsx({
            [styles.active]: [
              "#05-23",
              "#05-24",
              "#10-30",
              "#10-31",
              "#11-01",
            ].includes(activeHash),
          })}
          href={location == "boston" ? "#05-23" : "#10-30"}
        >
          Summit
        </a>
      </nav>
      <nav className={clsx(styles.subnav, "container smaller")}>
        {schedule[location]?.map((item, i) => (
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

        {schedule[location]?.map((item, i) => {
          return (
          
              <div className="container smaller">
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
                          const fullSession = sessions[location]?.find(
                            (s) => s.id === room.session.id,
                          );
                          return (
                            <SessionCard
                              key={i}
                              session={fullSession}
                              hideTime
                              // showVideoButton={true}
                              showRoomName={showRoomName}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
        
          );
        })}
   
    </>
  );
};

export default Calendar;
