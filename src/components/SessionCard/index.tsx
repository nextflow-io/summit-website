import React from "react";
import clsx from "clsx";

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
          "bg-brand-1000 border border-brand rounded-lg py-4 px-6 text-left",
        )}
      >
        <a href={`/2024/boston/sessions/${session.id}`} className="flex-auto">
          <h2 className="text-lg font-display font-semibold text-nextflow">
            {session.title}
          </h2>
          {!!session.startsAt && (
            <span className="block text-base text-gray-600 mb-4">
              {session.startsAt}
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

export default SessionCard;
