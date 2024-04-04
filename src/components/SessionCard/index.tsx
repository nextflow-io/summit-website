import React from "react";
import clsx from "clsx";
import { prettyDate, prettyTime } from "@utils/prettyDate";

import type { Session } from "@data/sessions";

import styles from "./styles.module.css";

type Props = {
  session: Session;
  className?: string;
  showDate?: boolean;
  hideTime?: boolean;
};

const SessionCard: React.FC<Props> = ({
  session,
  className,
  showDate,
  hideTime,
}) => {
  return (
    <div className={clsx("w-full md:w-[400px]", className)}>
      <div
        className={clsx(
          "w-full h-full py-4 px-6",
          "flex flex-col",
          "bg-brand border border-nextflow rounded-lg text-left",
          styles.card,
        )}
      >
        <a href={session.url} className="flex-auto">
          {!!session.startsAt && (
            <span
              className={clsx(
                "block text-sm text-nextflow font-semibold mb-2",
                styles.time,
                { [styles.hideTime]: hideTime },
              )}
            >
              {showDate && prettyDate(session.startsAt, false)}
              {!!session.endsAt && (
                <>
                  {showDate && <span className="opacity-50"> @ </span>}
                  {`${prettyTime(session.startsAt)} - ${prettyTime(session.endsAt)}`}
                </>
              )}
            </span>
          )}
          <h2 className={styles.title}>{session.title}</h2>
          {!!session.speakers.length && (
            <div className="text-sm text-nextflow-200 mt-3 font-light">
              {session.speakers.map((speaker) => speaker.name).join(", ")}
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default SessionCard;
