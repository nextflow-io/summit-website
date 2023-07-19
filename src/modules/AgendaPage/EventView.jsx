import React from 'react';

import Tabs from '../../components/Tabs2';
import EventList from './EventList';

const EventView = ({ eventData, showAllDays }) => {
  console.log('>>', eventData);

  let loc = {};
  if (typeof window !== 'undefined') loc = window.location;

  let allEventData = [{ title: null, items: eventData }];

  if (showAllDays) {
    // Group by date
    const groups = eventData.reduce((groups, event) => {
      const date = event.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(event);
      return groups;
    }, {});

    // Map to event data
    allEventData = Object.entries(groups).map(([title, items]) => ({
      title,
      items,
    }));
  }

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
              <Tabs.Item to="/agenda/hackathon/">All</Tabs.Item>
              <Tabs.Item to="/agenda/hackathon/oct-16/">Mon, Oct 16</Tabs.Item>
              <Tabs.Item to="/agenda/hackathon/oct-17/">Tue, Oct 17</Tabs.Item>
              <Tabs.Item to="/agenda/hackathon/oct-18/">Wed, Oct 18</Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
      {allEventData.map((data, i) => (
        <div key={i} className="pb-10">
          {!!data.title && <h3 className="typo-h4 mt-10">{data.title}</h3>}
          <EventList eventData={data.items} />
        </div>
      ))}
    </div>
  );
};

export default EventView;
