import React from "react";
import clsx from "clsx";

import type { Speaker } from "@data/speakers";
import SessionCard from "@components/SessionCard";

type Props = {
  speaker: Speaker;
};

import styles from "./styles.module.css";

const SpeakerPage: React.FC<Props> = ({ speaker }) => {
  return (
    <>
      <section className="pb-6 pt-16 md:pt-20">
        <div className="container island pb-10 md:pb-20">
          <div className="text-left mb-6">
            <a href="/2024/boston/speakers" className="text-nextflow-400">
              &larr; Back to speakers
            </a>
          </div>
          <div className={clsx("bg-white rounded-lg", styles.page)}>
            <div className="flex mb-8">
              <div>
                <img
                  src={speaker.profilePicture}
                  alt={speaker.fullName}
                  className="rounded-full w-20 h-20 md:w-40 md:h-40"
                />
              </div>
              <div className="flex-auto text-left pl-6">
                <h1 className="text-5xl font-bold mb-4 font-display">
                  {speaker.fullName}
                </h1>
                <div className="font-medium text-lg text-brand-900">
                  {speaker.tagLine}
                </div>
              </div>
            </div>
            <div className="typo-intro text-left text-brand-900">
              {speaker.bio}
            </div>
            <h2 className="h2 mt-16 text-left mb-6">Sessions</h2>
            {speaker.sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeakerPage;
