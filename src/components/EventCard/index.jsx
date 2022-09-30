import classnames from 'classnames';
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image";
import React from 'react';

import { AngleDownIcon, ArrowRightIcon, Link, LocationIcon, YoutubeRectangleIcon } from 'website-components';

const EventCard = ({ event, hidden, expanded, isExpandable, onExpand, isChild, disableTimeline }) => {
  return (
    <div className={classnames(
        'bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl mt-4 relative',
        {
          'hidden': hidden,
          'cursor-pointer': isExpandable,
          'ml-10 lg:ml-14': isChild,
        },
      )}
      onClick={() => { if (isExpandable) { onExpand() } }}
    >
      {!disableTimeline && (
        <>
          {!isChild && (
            <span className="typo-body bg-gray-900 absolute left-0 -top-px -translate-x-24">
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
        <p className="typo-intro text-green-600">
          {event.timeframe}
        </p>
        {event.tags && (
          <div className="hidden lg:flex">
            {event.tags.map((tag) => (
              <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {isExpandable && (
        <h3 className="typo-h4 mb-4 inline-flex items-center">
          <AngleDownIcon
            className={classnames(
              'h-6 w-6 mr-2',
              {
                'rotate-180': expanded,
              }
            )}
          />
          {event.title}
        </h3>
      )}
      {!isExpandable && (
        <h3 className="typo-h4 mb-4">
          {event.hasPage && (
            <Link to={`/program/${event.slug}/`} noBorder className="hover:text-green-600">
              {event.title}
            </Link>
          )}
          {!event.hasPage && (
            <span>
              {event.title}
            </span>
          )}
        </h3>
      )}
      {event.description && (
        <p className="typo-body mb-4">
          {event.description}
        </p>
      )}
      <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
        {event.speakers && (
          <>
            {event.speakers.length === 1 && (
              <div className="flex items-center">
                <Image
                  image={getImage(event.speakers[0].image)}
                  alt={event.speakers[0].name}
                  imgClassName="rounded-full"
                  className="mr-4 h-8 w-8"
                />
                <span className="typo-intro text-green-600">
                  {event.speakers[0].name}
                </span>
              </div>
            )}
            {event.speakers.length === 2 && (
              <div className="flex items-center">
                <Image
                  image={getImage(event.speakers[0].image)}
                  alt={event.speakers[0].name}
                  imgClassName="rounded-full"
                  className="h-8 w-8"
                />
                <Image
                  image={getImage(event.speakers[1].image)}
                  alt={event.speakers[1].name}
                  imgClassName="rounded-full"
                  className="-ml-2 mr-4 h-8 w-8"
                />
                <span className="typo-intro text-green-600">
                  {`${event.speakers[0].name} & ${event.speakers[1].name}`}
                </span>
              </div>
            )}
            {event.speakers.length > 2 && (
              <div className="flex items-center">
                <div className="h-8 w-8 bg-indigo-600 rounded-full" />
                <div className="h-8 w-8 bg-green-600 rounded-full -ml-2 mr-4" />
                <span className="typo-intro text-green-600">
                  Several Speakers
                </span>
              </div>
            )}
            <span className="hidden lg:block mx-2">|</span>
          </>
        )}
        <p className="typo-body">
          {`${event.date}, ${event.time} CET`}
        </p>
        {event.location && (
          <>
            <span className="hidden lg:block mx-2">|</span>
            <div>
              <Link to="https://goo.gl/maps/K3chvdYLa9BfDpaD9" className="typo-body">
                Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
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
