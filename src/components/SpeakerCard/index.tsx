import React from "react";
import clsx from "clsx";

type Props = {
  name: string;
  jobTitle: string;
  date: string;
  time: string;
  submissionTitle: string;
  track?: string;
  bio?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  keynote?: boolean;
  image?: string;
};

const SpeakerCard: React.FC<Props> = ({
  name,
  jobTitle,
  date,
  time,
  submissionTitle,
  track,
  twitter,
  github,
  linkedin,
  keynote,
  image,
}) => {
  return (
    <>
    <div className="speaker-card border border-nextflow p-4 flex flex-col">
      <div className="flex flex-col justify-center items-center p-2 w-full">
        <div className="speaker-card__image rounded-full w-[200px] h-[200px] object-cover overflow-hidden">
          {image ?
          <img
            className="imageBlend  w-full h-full object-cover"
            src={image}
            alt={`image of ${name}`}
          />
          :
          <div className="w-full h-full bg-nextflow"></div>
          }    
        </div>

        <div className="text-center mb-6 mt-6 min-h-[120px] w-full">
          <h3 className="font-display text-2xl mb-2">{name}</h3>
          <p className="monospace">{jobTitle}</p>
          {keynote && <div className="text-nextflow mt-2 font-display font-medium text-[1.1rem]">Keynote Speaker</div>}
        </div>
      </div>

      <div className="flex flex-row justify-between w-full border-t border-b border-nextflow py-2 mb-4">
        <p className="monospace">{date}</p>
        <p className="font-display">{time}</p>
      </div>

      <h5 className="text-[1.2rem] leading-1 font-medium">{submissionTitle}</h5>
    </div>

    </>
  );
};

export default SpeakerCard;
