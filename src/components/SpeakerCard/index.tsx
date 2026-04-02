import React from 'react';
import styles from './speakers.module.css';
import SocialIcon from '@components/SocialIcon';
import { urlFor } from '@data/sanity-image';
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
  pageUrl?: string;
  location?: string;
  associatedEvents?: Array<{
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
  bio: _bio,
  keynote,
  image,
  pageUrl,
  location,
  associatedEvents,
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
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
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
    return '/2026/boston/agenda';
  };

  const eventPath = getEventPath();

  const hasAssociatedTalks = Boolean(associatedEvents && associatedEvents.length > 0);
  const hasPrimaryTalk = Boolean(date || submissionTitle);

  const renderSocialIcons = () => (
    <>
      {twitter && (
        <SocialIcon
          key={twitter}
          href={twitter}
          type="Twitter"
          className="pr-2 text-white"
        />
      )}
      {linkedin && (
        <SocialIcon
          key={linkedin}
          href={linkedin}
          type="LinkedIn"
          className="pr-2 text-white"
        />
      )}
      {github && (
        <SocialIcon
          key={github}
          href={github}
          type="GitHub"
          className="pr-2 text-white"
        />
      )}
    </>
  );

  const hasSanityImage =
    image &&
    (image.asset?._ref ||
      image.asset?._id ||
      image.asset?.url ||
      image._ref);

  return (
    <div className="h-full">
      <div className="speaker-card flex h-full min-h-full flex-col gap-4 overflow-hidden bg-black p-4 text-white text-balance transition-all duration-300 sm:flex-row sm:gap-4">
        {/* Photo: full width on mobile; tall column on larger screens */}
        <div className="relative aspect-[4/3] max-h-[min(64vw,220px)] w-full shrink-0 overflow-hidden sm:max-h-none sm:aspect-auto sm:h-full sm:min-h-[200px] sm:w-[40%] sm:min-w-[150px] sm:max-w-[240px]">
          <div className="absolute inset-0">
            {hasSanityImage ? (
              <img
                className="h-full w-full object-cover object-[50%_28%]"
                src={urlFor(image).width(600).height(600).url()}
                alt={`image of ${name}`}
              />
            ) : (
              <div className="h-full w-full bg-nextflow" />
            )}
          </div>
        </div>

        {/* Text + sessions + socials */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-3">
          <div className="min-w-0 shrink-0 space-y-1">
            <h3 className="mb-0 font-display text-[24px] leading-tight">{name}</h3>
            <p className="flex items-center text-[.85rem] leading-tight">{jobTitle}</p>
            {keynote && (
              <p className="text-[1rem] font-medium leading-tight text-nextflow">
                Keynote Speaker
              </p>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-3 text-left">
            {hasPrimaryTalk && (
              <div className="border-t border-nextflow/50 pt-3">
                <ul className={styles.talkList}>
                  <li className={styles.talkListItem}>
                    {date && (
                      <p className="monospace text-sm leading-relaxed text-nextflow-500">
                        {monthDate}
                        {timeStart && (
                          <>
                            {' · '}
                            {timeStart}
                            {timeEnd ? ` – ${timeEnd}` : ''}
                            {location == 'virtual' ? ' CEST' : ''}
                          </>
                        )}
                      </p>
                    )}
                    {submissionTitle && (
                      <h5 className="text-[14px] font-medium leading-snug">
                        {pageUrl ? (
                          <a
                            href={`${eventPath}/${pageUrl}`}
                            className="transition-all duration-300 hover:text-nextflow-200"
                          >
                            {submissionTitle}
                          </a>
                        ) : (
                          submissionTitle
                        )}
                      </h5>
                    )}
                  </li>
                </ul>
              </div>
            )}

            {hasAssociatedTalks && (
              <div className="space-y-2 border-t border-nextflow/50 pt-3">
                {hasPrimaryTalk && (
                  <p className="text-xs uppercase tracking-wide text-nextflow-500">
                    Also on the agenda
                  </p>
                )}
                <ul className={styles.talkList}>
                  {associatedEvents!.map((talk) => (
                    <li
                      key={talk.slug}
                      className={`${styles.talkListItem} text-[14px]`}
                    >
                      <a
                        href={`${eventPath}/${talk.slug}`}
                        className="transition-all duration-300 hover:text-nextflow-200"
                      >
                        {talk.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-row flex-wrap items-center gap-x-1 pt-1">
            {renderSocialIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
