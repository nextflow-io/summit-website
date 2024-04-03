import React, { useEffect } from "react";
import schedule from "@data/schedule";

import styles from "./styles.module.css";
import { prettyDate } from "@utils/prettyDate";
import { formatTime } from "./utils";

const Calendar = () => {
  console.log(">>", schedule[0].timeSlots[0].rooms[0].session);
  return (
    <div>
      {schedule.map((item) => (
        <div className="pb-8">
          <h3 className="h1 mb-6">{prettyDate(item.date, false, true)}</h3>
          <div className={styles.schedule}>
            {item.timeSlots.map((slot) => {
              return (
                <div className={styles.timeSlot}>
                  <div>{formatTime(slot.slotStart)}</div>
                  {slot.rooms.map(({ session }) => {
                    return (
                      <a className={styles.item} href={session.url}>
                        <h4>{session.title}</h4>
                        {!!session.speakers.length && (
                          <div>
                            {session.speakers
                              .map((speaker) => speaker.name)
                              .join(", ")}
                          </div>
                        )}
                      </a>
                    );
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
