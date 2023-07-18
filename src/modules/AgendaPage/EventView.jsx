import React from "react";

const EventView = ({ eventData }) => {
  console.log(">>", eventData.events.nodes);
  return (
    <div>
      <h2 className="typo-h4 mb-6">EventView</h2>
      {eventData?.events?.nodes?.map((event) => (
        <div key={event.slug} className="mb-2">
          {event.title} - {event.timeframe}
        </div>
      ))}
    </div>
  );
};

export default EventView;
