import React, { useEffect } from 'react';

import Tabs from '../../components/Tabs2';

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
  let gCalHackathon =
    'https://calendar.google.com/calendar/u/1?cid=Y18yZTFiZmZjMWNhMzgwMzE5ZDc4ZjJhMmY2OTI0NmVmMjk3Yzg5NTYyMjljMWNlODY1M2UxOWNiMTAxYmNjODBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
  let gCalSummit =
    'https://calendar.google.com/calendar/u/1?cid=Y184NDUxMjEyYjhhOWVhM2UyMzU0ZGIwYTU1Y2MyMTFkZDcxZTQyNTNjYjRkYTExMTRjMzIyZGIwNGVmZTJkOGUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
  let iCalHackathon =
    'https://calendar.google.com/calendar/ical/c_2e1bffc1ca380319d78f2a2f69246ef297c8956229c1ce8653e19cb101bcc80c%40group.calendar.google.com/public/basic.ics';
  let iCalSummit =
    'https://calendar.google.com/calendar/ical/c_8451212b8a9ea3e2354db0a55cc211dd71e4253cb4da1114c322db04efe2d8e1%40group.calendar.google.com/public/basic.ics';

  if (eventLocation === 'boston') {
    embedSrc = 'https://embed.styledcalendar.com/#A5RyQEwveb0zYn69ncqd';
    embedTitle = 'Boston SUMMIT 2023 Calendar';
    gCalHackathon =
      'https://calendar.google.com/calendar/u/1?cid=Y180MzVlYWE2MWM2MjRjZGM1MTJmYWZkZjYxZjI5YzhlZDVhOGM4NzM0NWRmMWM1Zjc2MjE1ZjAxYjVjMGFmYzU4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
    gCalSummit =
      'https://calendar.google.com/calendar/u/1?cid=Y184ZjY0NGMyNTUxM2NjNGQ2YTEzNzcyYzdiYWNhODNlOGZhOWNkN2QyYTMyZWJlMzdmMWIyYzA5NTI4ODhjNTFiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
    iCalHackathon =
      'https://calendar.google.com/calendar/ical/c_435eaa61c624cdc512fafdf61f29c8ed5a8c87345df1c5f76215f01b5c0afc58%40group.calendar.google.com/public/basic.ics';
    iCalSummit =
      'https://calendar.google.com/calendar/ical/c_8f644c25513cc4d6a13772c7baca83e8fa9cd7d2a32ebe37f1b2c0952888c51b%40group.calendar.google.com/public/basic.ics';
  }

  return (
    <>
      <div className="row my-8 hidden">
        <div className="col-6">
          <p className="typo-body">
            Subscribe to Hackathon calendar:
            <span className="ml-4">
              <Tabs location="-">
                <Tabs.Item to={gCalHackathon}>Google Calendar</Tabs.Item>
                <Tabs.Item to={iCalHackathon}>iCal</Tabs.Item>
              </Tabs>
            </span>
          </p>
        </div>
        <div className="col-6 text-right">
          <p className="typo-body">
            Subscribe to Summit calendar:
            <span className="ml-4">
              <Tabs location="-">
                <Tabs.Item to={gCalSummit}>Google Calendar</Tabs.Item>
                <Tabs.Item to={iCalSummit}>iCal</Tabs.Item>
              </Tabs>
            </span>
          </p>
        </div>
      </div>
      <div id="calendar-container">
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
