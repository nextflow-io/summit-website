import React from "react";
import clsx from "clsx";
import { prettyDate, prettyTime } from "@utils/prettyDate";
import Markdown from 'react-markdown'
import Button from "@components/Button";

import type { Session } from "@data/sessions";

import styles from "./styles.module.css";

type Props = {
  session: Session;
  className?: string;
  showDate?: boolean;
  hideTime?: boolean;
  showRoomName?: boolean;
  hideSpeakers?: boolean;
  showVideoButton?: boolean;
  minimal?: boolean;
};

const CardContainer = ({ children, session, minimal = false }) => {
  const className = clsx(styles.card, {
    [styles.keynote]: session.isKeynote,
    [styles.confirmed]: session.isConfirmed,
  });
  let sessionUrl = session.url;
  if(session.categories?.outcome?.includes('Poster')){
    sessionUrl = sessionUrl.replace('agenda', 'posters');
  }
  return (
    <a href={sessionUrl} className={className}>
      {children}
    </a>
  );
};

const SessionCard: React.FC<Props> = ({
  className,
  showDate,
  hideTime,
  session,
  showRoomName,
  hideSpeakers,
  showVideoButton,
  minimal,
}) => {
  const showSpeakers = !!session.speakers.length && !hideSpeakers;
  const showFooter =
    showSpeakers ||
    session.isKeynote ||
    session.isSponsor ||
    session.recordingUrl;
  return (
    <div className={className}>
      <CardContainer session={session} minimal>
        <span className={styles.bg} />
        <span className={styles.content}>
          {!!session.startsAt && !minimal && (
            <span
              className={clsx(
                "block text-nextflow font-semibold mb-2",
                styles.time,
                { [styles.hideTime]: hideTime },
              )}
            >
              {showDate && prettyDate(session.startsAt, false)}
              {!!session.endsAt && (
                <>
                  {showDate && <span className="opacity-50 -ml-1">, </span>}
                  {`${prettyTime(session.startsAt)} - ${prettyTime(session.endsAt)}`}
                </>
              )}
            </span>
          )}
          <h2 className={styles.title}>{session.title}</h2>
          {session.isServiceSession && session.description && <div className={styles.description}><Markdown>{session.description}</Markdown></div> }
          {showFooter && (
            <div className={styles.footer}>
              {showSpeakers && (
                <div className={styles.speakers}>
                  {session.speakers.map((speaker) => (
                    <span key={speaker.id} className={styles.speaker}>
                      <img
                        src={speaker.profilePicture}
                        alt={speaker.fullName}
                      />
                      {speaker.fullName}
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.tags}>
                {session.isKeynote && (
                  <span className={styles.keynote}>Keynote</span>
                )}
                {session.isSponsor && (
                  <span className={styles.sponsor}>Sponsor</span>
                )}
                {!!session.posterPDF && (
                  <span className={styles.sponsor}>View poster online</span>
                )}
              </div>
              {showVideoButton && !!session.recordingUrl && (
                <Button
                  href={session.url}
                  cta
                  arrow
                  wide
                  small
                  className="ml-auto"
                >
                  Watch video
                </Button>
              )}
            </div>
          )}
          {showRoomName && !!session.room && (
            <div className={styles.room}>{session.room.name} room</div>
          )}
        </span>
      </CardContainer>
    </div>
  );
};

export default SessionCard;
