import React from 'react';

import Tabs from '../../components/Tabs2';
import DateTabs from './DateTabs';
import EventList from './EventList';

const EventView = ({ eventData, showAllDays, eventType, location }) => {
  let loc = {};
  if (typeof window !== 'undefined') loc = window.location;

  let allEventData = [{ title: null, items: eventData }];

  if (showAllDays) {
    // Group by date
    const groups = eventData?.reduce((groups, event) => {
      const date = event.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(event);
      return groups;
    }, {});

    // Map to event data
    allEventData = Object.entries(groups || {}).map(([title, items]) => ({
      title,
      items,
    }));
  }

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-full lg:col-9 lg:ml-1/12">
          <div>
            {location === 'boston' ? (
              <Tabs location={loc} anchor="#events" partialMatch>
                <Tabs.Item to="/boston/agenda/hackathon/">Hackathon</Tabs.Item>
                <Tabs.Item to="/boston/agenda/summit/">Summit</Tabs.Item>
              </Tabs>
            ) : (
              <Tabs location={loc} anchor="#events" partialMatch>
                <Tabs.Item to="/agenda/hackathon/">Hackathon</Tabs.Item>
                <Tabs.Item to="/agenda/summit/">Summit</Tabs.Item>
              </Tabs>
            )}
          </div>
          <div className="mt-1">
            <DateTabs location={location} loc={loc} eventType={eventType} />
          </div>
        </div>
      </div>
      {allEventData.map((data, i) => (
        <div key={i} className="pb-10">
          {!!data.title && (
            <div className="row">
              <div className="hidden lg:block col-1" />
              <div className="col-full lg:col-9">
                <h3 className="typo-h5 mt-10 text-green-300">{data.title}</h3>
              </div>
            </div>
          )}
          <EventList eventData={data.items} />
        </div>
      ))}
    </div>
  );
};

export default EventView;
