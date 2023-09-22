import React, { Fragment, useState } from 'react';

import EventCard from '../../components/EventCard';

const EventList = ({ eventData, eventLocation }) => {
  const [activeTag, setActiveTag] = useState('');
  const [expandedEvent, setExpandedEvent] = useState('');
  const isFiltered = (event) => {
    if (activeTag === '') {
      return false;
    }

    if (event.tags && event.tags.length > 0) {
      return !event.tags.includes(activeTag);
    }

    return true;
  };

  const isExpandable = (event) => {
    return event.events && event.events.length > 0;
  };

  const isExpanded = (event) => {
    return event.id === expandedEvent;
  };

  const expand = (event) => {
    if (event.id === expandedEvent) {
      setExpandedEvent('');
    } else {
      setExpandedEvent(event.id);
    }
  };
  return (
    <div className="flex">
      <div className="hidden lg:block pb-10 lg:w-1/12">
        <div className="h-full w-px border-l border-white border-dashed mx-auto mt-4" />
        <span className="block typo-body text-center">end</span>
      </div>
      <div className="w-full lg:w-11/12">
        {eventData.map((event, i) => (
          <Fragment key={i}>
            <EventCard
              eventLocation={eventLocation}
              event={event}
              hidden={isFiltered(event)}
              expanded={isExpanded(event)}
              isExpandable={isExpandable(event)}
              onExpand={() => {
                expand(event);
              }}
            />
            {isExpanded(event) && (
              <>
                {event.events && (
                  <div>
                    {event.events.map((childEvent, i) => (
                      <EventCard key={i} event={childEvent} hidden={isFiltered(childEvent)} isChild />
                    ))}
                  </div>
                )}
              </>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default EventList;
