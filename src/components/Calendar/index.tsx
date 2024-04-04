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
    <div className={clsx(styles.calendar, "-m-4 pb-10 pr-4")}>
      {schedule.map((item) => (
        <div className="p-4">
          <h3 className="h1 mb-6 text-center sm:ml-[100px]">
            {prettyDate(item.date, false)}
          </h3>
          <div className={styles.schedule}>
            {item.timeSlots.map((slot) => {
              return (
                <div className={styles.timeSlot}>
                  <div className={styles.time}>
                    {formatTime(slot.slotStart)}
                  </div>
                  {[slot.rooms[0]].map(({ session }, i) => {
                    return <SessionCard key={i} session={session} hideTime />;
                  })}
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
