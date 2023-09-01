import React from 'react';
import classnames from 'classnames';

import { AngleDownIcon, ArrowRightIcon, Link, LocationIcon, YoutubeRectangleIcon } from 'website-components';
import SpeakerPics from './SpeakerPics';

import * as styles from './styles.module.css';

const EventCard = ({ event, hidden, expanded, isExpandable, onExpand, isChild, disableTimeline, eventLocation }) => {
  return (
    <div
      className={classnames('bg-black border px-4 py-6 lg:p-8 rounded-md shadow-xl mt-4 relative', {
        hidden: hidden,
        'cursor-pointer': isExpandable,
        'ml-10 lg:ml-14': isChild,
        'border-gray-800': !event.is_sponsor && !event.is_keynote,
        'border-green-300': event.is_keynote,
        'border-gray-600': event.is_sponsor,
      })}
      onClick={() => {
        if (isExpandable) {
          onExpand();
        }
      }}
    >
      {!disableTimeline && (
        <>
          {!isChild && (
            <span className="typo-body bg-gray-900 absolute left-0 -top-px -translate-x-24 hidden lg:inline">
              {event.time}
            </span>
          )}
          {isChild && (
            <>
              <span className="typo-body bg-gray-900 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 -ml-14">
                {event.time}
              </span>
              <ArrowRightIcon className="h-6 w-6 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 lg:-translate-x-12" />
            </>
          )}
        </>
      )}
      <div className="flex items-center justify-between mb-4">
        <p className="typo-intro text-green-300">{event.timeframe}</p>
        {event.tags && (
          <div className="hidden lg:flex">
            {event.tags.map((tag, i) => (
              <span
                className={classnames(styles.tag, 'border typo-small bg-gray-800 mr-2', {
                  'border-transparent': !['Keynote', 'Sponsor'].includes(tag),
                  'border-green-300': tag === 'Keynote',
                  'border-gray-600': tag === 'Sponsor',
                })}
                key={i}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {isExpandable && (
        <h3 className="typo-h4 mb-4 inline-flex items-center">
          <AngleDownIcon
            className={classnames('h-6 w-6 mr-2', {
              'rotate-180': expanded,
            })}
          />
          {event.title}
        </h3>
      )}
      {!isExpandable && (
        <h3 className="typo-h4 mb-4">
          {event.hasPage && (
            <Link to={event.fullPath} noBorder className="hover:text-green-300">
              {event.title}
            </Link>
          )}
          {!event.hasPage && <span>{event.title}</span>}
        </h3>
      )}
      {event.description && <p className="typo-body mb-4">{event.description}</p>}
      <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
        <SpeakerPics speakers={event.speakers} />
        <p className="typo-body">{`${event.date}, ${event.time} ${eventLocation === 'boston' ? 'EST' : 'CET'}`}</p>
        {event.location && (
          <>
            <span className="hidden lg:block mx-2">|</span>
            <div>
              <Link to={event.locationUrl} className="typo-body">
                {event.location}
              </Link>
              <LocationIcon className="inline-block h-6 w-6 ml-2" />
            </div>
          </>
        )}
        {event.youtube && (
          <>
            <span className="hidden lg:block mx-2">|</span>
            <span>
              <Link to={event.youtubeUrl} className="typo-body text-gray-600">
                {event.youtube}
              </Link>
              <YoutubeRectangleIcon className="inline-block h-6 w-6 ml-2 text-gray-600" />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;
