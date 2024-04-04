import React, { useEffect } from "react";
import schedule from "@data/schedule";

import styles from "./styles.module.css";
import { prettyDate } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

const Calendar = () => {
  return (
    <div className="container pb-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-center -m-2">
        {schedule.map((item) => (
          <div className="p-2">
            <h3 className="h1 mb-6 text-center">
              {prettyDate(item.date, false)}
            </h3>
            <div className={styles.schedule}>
              {item.timeSlots.map((slot) => {
                return (
                  <div className={styles.timeSlot}>
                    <div className={styles.time}>
                      {formatTime(slot.slotStart)}
                    </div>
                    {slot.rooms.map(({ session }) => {
                      return <SessionCard session={session} hideTime />;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
