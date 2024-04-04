import React, { useEffect } from "react";
import clsx from "clsx";
import schedule from "@data/schedule";
import sessions from "@data/sessions";

import styles from "./styles.module.css";
import { prettyDate } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

const Calendar = () => {
  return (
    <div className={clsx(styles.calendar, "pb-10")}>
      {schedule.map((item) => (
        <div className={clsx(styles.col, "p-4")}>
          <h3 className="h1 mb-6 sm:pl-4">{prettyDate(item.date, false)}</h3>
          <div className={styles.colItems}>
            {item.timeSlots.map((slot) => {
              const showRoomName = slot.rooms.length > 1;
              return (
                <div className={styles.timeSlot}>
                  <div className={styles.time}>
                    {formatTime(slot.slotStart)}
                  </div>
                  <div className={styles.sessions}>
                    {slot.rooms.map((room, i) => {
                      return (
                        <SessionCard
                          key={i}
                          session={room.session}
                          hideTime
                          room={showRoomName ? room : null}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
