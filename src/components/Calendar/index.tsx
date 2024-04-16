import React, { useEffect, useState } from "react";
import clsx from "clsx";
import schedule from "@data/schedule";
import sessions from "@data/sessions";

import styles from "./styles.module.css";
import { prettyDate } from "@utils/prettyDate";
import { formatTime } from "./utils";
import SessionCard from "@components/SessionCard";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(schedule[0].date);
  const item = schedule.find((item) => item.date === selectedDate);
  console.log(">>", selectedDate);
  return (
    <>
      <nav className={styles.nav}>
        {schedule.map((item) => (
          <button
            onClick={() => setSelectedDate(item.date)}
            className={clsx({ [styles.active]: selectedDate === item.date })}
          >
            {prettyDate(item.date, false, true)}
          </button>
        ))}
      </nav>
      <div className={clsx(styles.col, "p-4")}>
        <div className={styles.colItems}>
          {item.timeSlots.map((slot) => {
            const showRoomName = slot.rooms.length > 1;
            const time = formatTime(slot.slotStart);
            return (
              <div className={styles.timeSlot}>
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
      </div>
    </>
  );
};

export default Calendar;
