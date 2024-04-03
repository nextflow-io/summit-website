import React from "react";
import clsx from "clsx";
import { prettyDate, prettyTime } from "@utils/prettyDate";

import type { Session } from "@data/sessions";

type Props = {
  session: Session;
  className?: string;
  showDate?: boolean;
};

const SessionCard: React.FC<Props> = ({ session, className, showDate }) => {
  return (
    <div className={clsx("w-full md:w-[400px]", className)}>
      <div
        className={clsx(
          "w-full h-full py-4 px-6",
          "flex flex-col",
          "bg-brand border border-nextflow rounded-lg text-left",
          "hover:bg-nextflow transition-all duration-200 ease-in-out",
        )}
      >
        <a href={session.url} className="flex-auto">
          {!!session.startsAt && (
            <span className="block text-sm text-nextflow font-semibold mb-2">
              {showDate && prettyDate(session.startsAt, false)}
              {!!session.endsAt && (
                <>
                  {showDate && <span className="opacity-50"> @ </span>}
                  {`${prettyTime(session.startsAt)} - ${prettyTime(session.endsAt)}`}
                </>
              )}
            </span>
          )}
          <h2 className="text-lg font-display font-semibold text-nextflow-200">
            {session.title}
          </h2>
          {!!session.speakers.length && (
            <div className="text-sm text-nextflow-200 mt-2">
              {session.speakers.map((speaker) => speaker.name).join(", ")}
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default SessionCard;
