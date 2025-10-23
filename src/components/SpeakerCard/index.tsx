import React from "react";
import IconClose from "./IconClose.svg";
import clsx from "clsx";
import styles from "./speakers.module.css";
import SocialIcon from "@components/SocialIcon";
import { motion } from "framer-motion";
import { urlFor } from "@data/sanity-image";
import PortableText from "@components/PortableText";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  name?: string;
  jobTitle?: string;
  date?: string;
  endTime?: string;
  submissionTitle?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  bio?: any;
  keynote?: boolean;
  image?: any;
  isOpen: boolean;
  onClick: () => void;
  pageUrl?: string;
  location?: string;
  associatedTalks?: Array<{
    title: string;
    slug: string;
  }>;
};

const SpeakerCard: React.FC<Props> = ({
  name,
  jobTitle,
  date,
  endTime,
  submissionTitle,
  twitter,
  github,
  linkedin,
  bio,
  keynote,
  image,
  isOpen,
  onClick,
  pageUrl,
  location,
  associatedTalks,
}) => {
  const monthDate = date
    ? dayjs.utc(date).tz("America/New_York").format("MMMM D")
    : null;
  const timeStart = date
    ? dayjs.utc(date).tz("America/New_York").format("h:mm A")
    : null;
  const timeEnd = endTime
    ? dayjs.utc(endTime).tz("America/New_York").format("h:mm A")
    : null;

  const getEventPath = () => {
    // Prioritize location prop if provided

    if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    
    // Extract event location from current path
    if (pathname.includes('/virtual/')) return "/2025/virtual/agenda";
    if (pathname.includes('/boston/')) return "/2025/boston/agenda";
    if (pathname.includes('/barcelona/')) return "/2025/barcelona/agenda";
  }
    if (location) {
      const locationLower = location.toLowerCase();
      if (locationLower === "virtual") return "/2025/virtual/agenda";
      if (locationLower === "boston") return "/2025/boston/agenda";
      if (locationLower === "barcelona") return "/2025/barcelona/agenda";
    }

    // Default fallback
    return "/2025/boston/agenda";
  };

  const eventPath = getEventPath();

  const renderSocialIcons = () => (
    <>
      {twitter && (
        <SocialIcon
          key={twitter}
          href={twitter}
          type="Twitter"
          className="p-2 text-nextflow"
        />
      )}
      {linkedin && (
        <SocialIcon
          key={linkedin}
          href={linkedin}
          type="LinkedIn"
          className="p-2 text-nextflow"
        />
      )}
      {github && (
        <SocialIcon
          key={github}
          href={github}
          type="GitHub"
          className="p-2 text-nextflow"
        />
      )}
    </>
  );

  const renderProfileImage = (size: "large" | "small") => {
    const dimensions =
      size === "large" ? "w-[150px] h-[150px]" : "w-[100px] h-[100px]";

    return (
      <div
        className={`speaker-card__image rounded-full ${dimensions} object-cover overflow-hidden`}
      >
        {image ? (
          <img
            className={`imageBlend w-full h-full ${size === "large" ? "object-cover" : "object-contain"}`}
            src={urlFor(image).width(600).height(600).url()}
            alt={`image of ${name}`}
          />
        ) : (
          <div className="w-full h-full bg-nextflow" />
        )}
      </div>
    );
  };

  const renderDateTime = () => {
    if (!date) return null;

    return (
      <div
        className={`flex flex-row justify-between w-full border-t ${date && "border-b border-nextflow pb-2"} border-nextflow pt-2`}
      >
        <p className="monospace text-[1rem]">{monthDate}</p>
        <p className="font-display text-[1rem]">
          {timeStart} - {timeEnd} {location == "virtual" ? 'CEST' : ''}
        </p>
      </div>
    );
  };

  const renderSubmissionTitle = () => {
    if (!submissionTitle) return null;

    return (
      <div className={`py-1 pb-2  ${!date && "border-t border-nextflow"} border-nextflow`}>
        <h5 className="text-[1rem] leading-tight font-medium">
          {pageUrl ? (
            <div className="pt-1">
              <a
                href={`${eventPath}/${pageUrl}`}
                className="hover:text-nextflow-200 transition-all duration-300 "
              >
                {submissionTitle}
              </a>
            </div>
          ) : (
            submissionTitle && (
              <div className="text-[1rem]">{submissionTitle}</div>
            )
          )}
        </h5>
      </div>
    );
  };

  const renderAssociatedTalks = () => {
    if (!associatedTalks || associatedTalks.length === 0) return null;

    return (
      <div className="border-t border-nextflow pt-2">
        <div className="space-y-2">
          {associatedTalks.map((talk) => {
            return (
              <div key={talk.slug} className="text-[.875rem]">
                <a
                  href={`${eventPath}/${talk.slug}`}
                  className="hover:text-nextflow-200 transition-all duration-300"
                >
                  {talk.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="hover:cursor-pointer h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: 0.4, ease: "linear" }}
    >
      {/* Speaker Card */}
      <div className="speaker-card border border-nextflow hover:border-nextflow-200 transition-all duration-300 p-2 flex flex-col h-full">
        <div onClick={onClick} className="mb-2 flex-1 flex flex-col">
          <div className="flex flex-col items-center p-2 w-full">
            {renderProfileImage("large")}

            <div className="text-center mb-6 mt-6 w-full">
              <h3 className="font-display text-xl mb-2 min- flex items-center justify-center">
                {name}
              </h3>
              <p className="monospace flex items-center justify-center text-[.8rem]">
                {jobTitle}
              </p>

              {keynote && (
                <div className="text-nextflow mt-2 font-display font-medium text-[1rem] h-8">
                  Keynote Speaker
                </div>
              )}

              <div className=" flex items-center justify-center">
                {renderSocialIcons()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          {renderDateTime()}
          {renderSubmissionTitle()}
          {renderAssociatedTalks()}
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClick}
          className="fixed top-0 left-0 right-0 bottom-0 bg-brand/20 w-full h-full z-10 backdrop-blur-sm"
        />
      )}

      {/* Modal Popup */}
      <div
        className="w-full h-full max-w-[350px] sm:max-w-[850px] top-[50%] left-[50%] fixed z-[999] p-4 border border-nextflow bg-brand max-h-[600px] md:max-h-[550px] my-2 overflow-y-hidden"
        style={
          isOpen
            ? { display: "block", transform: "translate(-50%, -50%)" }
            : { display: "none" }
        }
      >
        <button className="fixed top-4 right-4 z-[999]" onClick={onClick}>
          <img src={IconClose.src} alt="close" className="w-[20px] h-[20px]" />
        </button>

        <div
          className={`overflow-y-scroll flex flex-col justify-between relative lg:flex-row md:fixed md:top-0 md:left-0 md:bottom-0 p-4 w-full h-full ${bio ? "md:max-w-[45%]" : "w-full"}`}
        >
          <div className="flex flex-col w-full pr-1 pt-4 justify-between h-full">
            <div className="flex flex-col justify-center items-center p-2 w-full">
              {renderProfileImage("small")}

              <div className="text-center mb-6 mt-6 w-full">
                <h3 className="font-display text-[1.3rem] md:text-[1.6rem] leading-tight mb-1">
                  {name}
                </h3>
                <p className="monospace text-[.8rem]">{jobTitle}</p>

                {keynote && (
                  <div className="text-nextflow mt-2 font-display font-medium text-[1rem]">
                    Keynote Speaker
                  </div>
                )}

                <div className="flex flex-row justify-center">
                  {renderSocialIcons()}
                </div>
              </div>
            </div>

            <div>
              <div
                className={`flex flex-row justify-between w-full border-t ${date && "border-b border-nextflow pb-2 mb-1 pt-2"} border-nextflow pt-1`}
              >
                {date && (
                  <>
                    <p className="monospace text-[1rem]">{monthDate}</p>
                    <p className="font-display text-[1rem]">
                      {timeStart} - {timeEnd}  {location == "virtual" ? 'CEST' : ''}
                    </p>
                  </>
                )}
              </div>

              {pageUrl ? (
                <div className="pb-1 pt-1">
                  {" "}
                  <a
                   href={`${eventPath}/${pageUrl}`}
                    className="hover:text-nextflow-200 transition-all duration-300 text-[.875rem]"
                  >
                    {submissionTitle}{" "}
                  </a>
                </div>
              ) : (
                submissionTitle && (
                  <div className="text-[.875rem] py-2">{submissionTitle}</div>
                )
              )}
              {renderAssociatedTalks()}

            </div>

            {bio && (
              <div
                className={clsx(
                  styles.speakersPopup,
                  "md:fixed md:right-0 md:bottom-0 top-0 w-full md:max-w-[55%] overflow-scroll h-full flex flex-col overflow-y-scroll md:pr-8",
                )}
              >
                <small className="text-nextflow mt-6 mb-2">About</small>
                <PortableText
                  className={clsx(styles.speakersBio, "monospace")}
                  value={bio}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
