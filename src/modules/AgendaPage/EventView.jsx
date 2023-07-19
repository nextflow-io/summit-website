import React, { useState } from 'react';

import EventCard from '../../components/EventCard';
import Tabs from '../../components/Tabs2';

const EventView = ({ eventData }) => {
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

  let loc = {};
  if (typeof window !== 'undefined') loc = window.location;

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-full lg:col-9 lg:ml-1/12">
          <div>
            <Tabs location={loc} anchor="#events">
              <Tabs.Item to="/agenda/hackathon/">Hackathon</Tabs.Item>
              <Tabs.Item to="/agenda/summit/">Summit</Tabs.Item>
            </Tabs>
          </div>
          <div className="mt-1">
            <Tabs location={loc} anchor="#events">
              <Tabs.Item to="/agenda/hackathon/">Mon, Oct 16</Tabs.Item>
              <Tabs.Item to="/agenda/hackathon/oct-17/">Tue, Oct 17</Tabs.Item>
              <Tabs.Item to="/agenda/hackathon/oct-18/">Wed, Oct 18</Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="hidden lg:block col-1">
          <div className="h-full w-px border-l border-white border-dashed mx-auto mt-4" />
          <span className="block typo-body text-center">end</span>
        </div>
        <div className="col-full lg:col-9">
          {eventData.map((event, i) => (
            <>
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
            </>
          ))}
        </div>
        <div className="hidden lg:block lg:col-2 mt-4"></div>
      </div>
    </div>
  );
};

export default EventView;
