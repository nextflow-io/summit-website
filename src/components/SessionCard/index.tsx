import React from "react";
import clsx from "clsx";
import { prettyDate, prettyTime } from "@utils/prettyDate";
import sessions from "@data/sessions";

import type { Session } from "@data/sessions";

import styles from "./styles.module.css";

type Props = {
  session: Session;
  className?: string;
  showDate?: boolean;
  hideTime?: boolean;
};

const CardContainer = ({ children, session }) => {
  if (session.isConfirmed)
    return (
      <a href={session.url} className={styles.card}>
        {children}
      </a>
    );
  return <div className={styles.card}>{children}</div>;
};

const SessionCard: React.FC<Props> = ({
  className,
  showDate,
  hideTime,
  ...props
}) => {
  const session = sessions.find((s) => s.id === props.session.id);
  return (
    <div className={clsx("w-full md:w-[400px]", className)}>
      <CardContainer session={session}>
        <span className={styles.bg} />
        <span className={styles.content}>
          {session.isKeynote && (
            <span className="text-nextflow text-sm">Keynote</span>
          )}
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
              {session.speakers.map((speaker) => speaker.fullName).join(", ")}
            </div>
          )}
        </span>
      </CardContainer>
    </div>
  );
};

export default SessionCard;
