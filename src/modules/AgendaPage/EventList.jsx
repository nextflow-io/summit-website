import React, { Fragment, useState } from 'react';

import EventCard from '../../components/EventCard';

const EventList = ({ eventData }) => {
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
    <div className="row">
      <div className="hidden lg:block col-1">
        <div className="h-full w-px border-l border-white border-dashed mx-auto mt-4" />
        <span className="block typo-body text-center">end</span>
      </div>
      <div className="col-full lg:col-9">
        {eventData.map((event, i) => (
          <Fragment key={i}>
            <EventCard
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
      <div className="hidden lg:block lg:col-2 mt-4"></div>
    </div>
  );
};

export default EventList;
