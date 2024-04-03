import React, { useEffect } from "react";
import schedule from "@data/schedule";

import styles from "./styles.module.css";
import { prettyDate } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

const Calendar = () => {
  return (
    <div className="container island pb-10">
      {schedule.map((item) => (
        <div className="pb-8">
          <h3 className="h1 mb-6 text-center">
            {prettyDate(item.date, false)}
          </h3>
          <div className={styles.schedule}>
            {item.timeSlots.map((slot) => {
              return (
                <div className={styles.timeSlot}>
                  <div className={styles.timelineItem}>
                    {formatTime(slot.slotStart)}
                  </div>
                  {slot.rooms.map(({ session }) => {
                    return <SessionCard session={session} />;
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
