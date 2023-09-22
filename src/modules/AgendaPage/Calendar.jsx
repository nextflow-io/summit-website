import React, { useEffect } from 'react';

const Calendar = ({ eventLocation }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
    script.async = true;
    script.setAttribute('type', 'module');
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.appendChild(script);
  }, []);

  let embedSrc = 'https://embed.styledcalendar.com/#Qss4ZvPVKjMoFYIc82hS';
  let embedTitle = 'Barcelona SUMMIT 2023 Calendar';

  if (eventLocation === 'boston') {
    embedSrc = 'https://embed.styledcalendar.com/#A5RyQEwveb0zYn69ncqd';
    embedTitle = 'Boston SUMMIT 2023 Calendar';
  }

  return (
    <>
      <div id="calendar-container" className="mt-16">
        <iframe
          src={embedSrc}
          title={embedTitle}
          className="styled-calendar-container w-full border-0 h-[600px]"
          data-cy="calendar-embed-iframe"
        ></iframe>
      </div>
    </>
  );
};

export default Calendar;
