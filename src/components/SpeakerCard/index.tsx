import React, { useCallback, useEffect, useId, useState } from 'react';
import IconClose from './IconClose.svg';
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
  const [talksOpen, setTalksOpen] = useState(false);
  const overlayId = useId();

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

  const hasAssociatedTalks = Boolean(
    associatedEvents && associatedEvents.length > 0
  );
  const hasPrimaryTalk = Boolean(date || submissionTitle);
  const showTalksButton = hasPrimaryTalk || hasAssociatedTalks;

  const closeOverlay = useCallback(() => setTalksOpen(false), []);

  useEffect(() => {
    if (!talksOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeOverlay();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [talksOpen, closeOverlay]);

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

  const renderProfileImage = () => {
    const hasSanityImage =
      image &&
      (image.asset?._ref ||
        image.asset?._id ||
        image.asset?.url ||
        image._ref);

    return (
      <div className="w-full h-0 pb-[100%] relative overflow-hidden">
        {hasSanityImage ? (
          <img
            className="w-full h-full object-cover absolute"
            src={urlFor(image).width(600).height(600).url()}
            alt={`image of ${name}`}
          />
        ) : (
          <div className="w-full h-full bg-nextflow" />
        )}
      </div>
    );
  };

  const closeIconSrc =
    typeof IconClose === 'string'
      ? IconClose
      : (IconClose as { src?: string }).src;

  return (
    <div className="h-full">
      <div className="speaker-card relative z-0 flex h-full min-h-full flex-col overflow-hidden bg-black p-4 text-white transition-all duration-300">
        <div className="flex min-h-0 flex-1 flex-row">
          <div className="flex min-h-0 w-full min-w-0 flex-col">
            <div className="mb-2 w-full">{renderProfileImage()}</div>
            <h3 className="mb-0 font-display text-[1.85rem] leading-tight">
              {name}
            </h3>
            <p className="flex items-center text-[.85rem] leading-tight">
              {jobTitle}
            </p>

            <div className="mt-2 flex flex-row flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <div className="flex min-w-0 flex-row flex-wrap items-center">
                {renderSocialIcons()}
              </div>
              {showTalksButton && (
                <button
                  type="button"
                  className="shrink-0 border border-nextflow bg-nextflow px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wide text-black transition-all duration-300 hover:bg-nextflow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-nextflow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-expanded={talksOpen}
                  aria-controls={overlayId}
                  onClick={() => setTalksOpen(true)}
                >
                  Talks
                </button>
              )}
            </div>


          </div>
        </div>

        {talksOpen && (
          <div
            id={overlayId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${overlayId}-title`}
            className="absolute inset-0 z-10 flex flex-col border border-nextflow bg-black/95 p-4 text-left shadow-inner backdrop-blur-[1px]"
          >
            <div className="mb-2 flex shrink-0 justify-end">
              <button
                type="button"
                className="-m-1 rounded p-1 text-nextflow hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-nextflow"
                onClick={closeOverlay}
                aria-label="Close"
              >
                {closeIconSrc ? (
                  <img src={closeIconSrc} alt="" width={22} height={22} />
                ) : (
                  <span className="text-2xl leading-none" aria-hidden>
                    ×
                  </span>
                )}
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto pr-1">
              <h3
                id={`${overlayId}-title`}
                className="font-display leading-tight text-white font-display text-[1.85rem]"
              >
                {name}
              </h3>

              {hasPrimaryTalk && (
                <div className="mt-4 space-y-3 border-t border-nextflow/60 pt-4">
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
                    <div>
                      <h5 className="text-[1rem] font-medium leading-snug">
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
                    </div>
                  )}
                  <div className="mb-2 w-full">
                    {keynote && (
                      <div className="mt-2 h-8 text-[1rem] font-medium text-nextflow">
                        Keynote Speaker
                      </div>
                    )}
                  </div>
                </div>
              )}

              {hasAssociatedTalks && (
                <div
                  className={
                    hasPrimaryTalk
                      ? 'mt-5 space-y-2 border-t border-nextflow/60 pt-4'
                      : 'mt-4 space-y-2 border-t border-nextflow/60 pt-4'
                  }
                >
                  {hasPrimaryTalk && (
                    <p className="mb-2 text-xs uppercase tracking-wide text-nextflow-500">
                      Also on the agenda
                    </p>
                  )}
                  <ul className="m-0 list-none space-y-2 p-0">
                    {associatedEvents!.map((talk) => (
                      <li key={talk.slug} className="text-[.875rem]">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;
