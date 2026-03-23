import React from 'react';
import IconClose from './IconClose.svg';
import clsx from 'clsx';
import styles from './speakers.module.css';
import SocialIcon from '@components/SocialIcon';
import { motion } from 'framer-motion';
import { urlFor } from '@data/sanity-image';
import PortableText from '@components/PortableText';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

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
  pageUrl,
  location,
  associatedTalks,
}) => {
  const monthDate = date
    ? dayjs.utc(date).tz('America/New_York').format('dddd, MMM D')
    : null;
  const timeStart = date
    ? dayjs.utc(date).tz('America/New_York').format('h:mm A')
    : null;
  const timeEnd = endTime
    ? dayjs.utc(endTime).tz('America/New_York').format('h:mm A')
    : null;

  const getEventPath = () => {
    // Prioritize location prop if provided

    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;

      // Extract event location from current path
      if (pathname.includes('/virtual/')) return '/2026/virtual/agenda';
      if (pathname.includes('/boston/')) return '/2026/boston/agenda';
      if (pathname.includes('/barcelona/')) return '/2026/barcelona/agenda';
    }
    if (location) {
      const locationLower = location.toLowerCase();
      if (locationLower === 'virtual') return '/2026/virtual/agenda';
      if (locationLower === 'boston') return '/2026/boston/agenda';
      if (locationLower === 'barcelona') return '/2026/barcelona/agenda';
    }

    // Default fallback
    return '/2026/boston/agenda';
  };

  const eventPath = getEventPath();

  const renderSocialIcons = () => (
    <>
      {twitter && (
        <SocialIcon
          key={twitter}
          href={twitter}
          type="Twitter"
          className="p-2 text-brand"
        />
      )}
      {linkedin && (
        <SocialIcon
          key={linkedin}
          href={linkedin}
          type="LinkedIn"
          className="p-2 text-brand"
        />
      )}
      {github && (
        <SocialIcon
          key={github}
          href={github}
          type="GitHub"
          className="p-2 text-brand"
        />
      )}
    </>
  );

  const renderProfileImage = () => {
    return (
      <div className={`w-full h-0 pb-[100%] relative overflow-hidden`}>
        {image ? (
          <img
            className={`w-full h-full object-cover absolute`}
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
      <div className={`flex flex-row`}>
        <p className="text-xs  monospace">{monthDate},</p>
        <p className="text-xs monospace">
          {timeStart} {timeEnd} {location == 'virtual' ? 'CEST' : ''}
        </p>
      </div>
    );
  };

  const renderSubmissionTitle = () => {
    if (!submissionTitle) return null;

    return (
      <div className={``}>
        <h5 className="text-[1.4rem] leading-tight font-medium">
          {pageUrl ? (
            <div className="">
              <a
                href={`${eventPath}/${pageUrl}`}
                className=" transition-all duration-300 "
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
    <div>
      {/* Speaker Card */}
      <div className="speaker-card bg-nextflow text-brand transition-all duration-300 p-4 flex flex-col h-full">
        <div className="flex-1 flex flex-col">
                <div className="mb-2 w-full">
            {keynote && (
              <div className="text-nextflow mt-2 font-medium text-[1rem] h-8">
                Keynote Speaker
              </div>
            )}
          </div>
          {renderDateTime()}
          {renderSubmissionTitle()}
          {renderAssociatedTalks()}

    
          <div className="flex flex-col  w-full mt-2">
            {renderProfileImage()}
          </div>
        </div>

        <div className="mt-2">
          <h3 className=" text-[2rem] xl:text-[2.25rem] font-display mb-0 leading-tight">
            {name}
          </h3>
          <p className="monospace flex items-center  text-[.8rem] leading-tight">
            {jobTitle}
          </p>
          <div className=" flex ">{renderSocialIcons()}</div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
