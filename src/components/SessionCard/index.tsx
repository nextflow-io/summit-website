import React from "react";
import clsx from "clsx";
import { prettyDate, prettyTime } from "@utils/prettyDate";

import type { Session } from "@data/sessions";

type Props = {
  session: Session;
  className?: string;
};

const SessionCard: React.FC<Props> = ({ session, className }) => {
  return (
    <div className={clsx("w-full md:w-1/2", className)}>
      <div
        className={clsx(
          "w-full h-full",
          "flex flex-col",
          "bg-nextflow-400 border border-brand rounded-lg py-4 px-6 text-left",
        )}
      >
        <a href={`/2024/boston/sessions/${session.id}`} className="flex-auto">
          {!!session.startsAt && (
            <span className="block text-sm text-brand font-semibold mb-4">
              {prettyDate(session.startsAt, false)}
              {!!session.endsAt && (
                <>
                  <span className="opacity-50"> @ </span>
                  {`${prettyTime(session.startsAt)} - ${prettyTime(session.endsAt)}`}
                </>
              )}
            </span>
          )}
          <h2 className="text-lg font-display font-semibold text-brand">
            {session.title}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default SessionCard;
