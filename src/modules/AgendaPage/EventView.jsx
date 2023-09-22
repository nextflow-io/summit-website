import React from 'react';

import Tabs from '../../components/Tabs2';
import DateTabs from './DateTabs';
import EventList from './EventList';
import Calendar from './Calendar';

const EventView = ({ eventData, showAllDays, eventType, eventLocation, showCalendar }) => {
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

  const resolvePath = (path) => {
    if (eventLocation === 'boston') return `/boston${path}`;
    return `/barcelona${path}`;
  };

  return (
    <div className="container-lg">
      <div className="flex flex-wrap">
        <div className="w-full lg:ml-1/12 flex flex-wrap">
          <div className="w-full md:w-1/2">
            <Tabs location={loc} anchor="#events" partialMatch>
              <Tabs.Item to={resolvePath('/agenda/hackathon/')}>Hackathon</Tabs.Item>
              <Tabs.Item to={resolvePath('/agenda/summit/')}>Summit</Tabs.Item>
            </Tabs>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <Tabs location={loc} anchor="#events" partialMatch>
              <Tabs.Item to={resolvePath('/agenda/summit/')}>List view</Tabs.Item>
              <Tabs.Item to={resolvePath('/agenda/calendar/')}>Calendar view</Tabs.Item>
            </Tabs>
          </div>
          <div className="w-full mt-1 md:w-1/2">
            <DateTabs eventLocation={eventLocation} loc={loc} eventType={eventType} />
          </div>
          <div className="w-full md:w-1/2 mt-1 md:text-right">
            <Tabs location={loc} anchor="#events" partialMatch>
              <Tabs.Item to={resolvePath('/agenda/calendar/')}>Subscribe to Summit calendar</Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
      {showCalendar ? (
        <Calendar />
      ) : (
        <>
          {allEventData.map((data, i) => (
            <div key={i} className="pb-10">
              {!!data.title && (
                <div className="flex">
                  <div className="hidden lg:block w-1/12" />
                  <div className="w-full lg:w-11/12">
                    <h3 className="typo-h5 mt-10 text-green-300">{data.title}</h3>
                  </div>
                </div>
              )}
              <EventList eventData={data.items} eventLocation={eventLocation} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default EventView;
