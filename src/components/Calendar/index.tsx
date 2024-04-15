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
  return (
    <>
      <nav className={styles.nav}>
        {schedule.map((item) => (
          <button>{prettyDate(item.date, false)}</button>
        ))}
      </nav>
      <div className={clsx(styles.col, "p-4")}>
        <h3 className="h1 mb-6 sm:pl-4">{prettyDate(item.date, false)}</h3>
        <div className={styles.colItems}>
          {item.timeSlots.map((slot) => {
            const showRoomName = slot.rooms.length > 1;
            return (
              <div className={styles.timeSlot}>
                <div className={styles.time}>{formatTime(slot.slotStart)}</div>
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
