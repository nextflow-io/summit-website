import React, { useState } from 'react';
import classNames from 'classnames';

import * as styles from './styles.module.css';

const CalendarSubscribe = ({ eventLocation }) => {
  const [view, setView] = useState(null);

  let gCalHackathon =
    'https://calendar.google.com/calendar/u/1?cid=Y18yZTFiZmZjMWNhMzgwMzE5ZDc4ZjJhMmY2OTI0NmVmMjk3Yzg5NTYyMjljMWNlODY1M2UxOWNiMTAxYmNjODBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
  let gCalSummit =
    'https://calendar.google.com/calendar/u/1?cid=Y184NDUxMjEyYjhhOWVhM2UyMzU0ZGIwYTU1Y2MyMTFkZDcxZTQyNTNjYjRkYTExMTRjMzIyZGIwNGVmZTJkOGUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
  let iCalHackathon =
    'https://calendar.google.com/calendar/ical/c_2e1bffc1ca380319d78f2a2f69246ef297c8956229c1ce8653e19cb101bcc80c%40group.calendar.google.com/public/basic.ics';
  let iCalSummit =
    'https://calendar.google.com/calendar/ical/c_8451212b8a9ea3e2354db0a55cc211dd71e4253cb4da1114c322db04efe2d8e1%40group.calendar.google.com/public/basic.ics';

  if (eventLocation === 'boston') {
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
    <div className={classNames('flex items-end', styles.container)}>
      <div className="w-full">
        Subscribe to calendar:
        {!view && (
          <>
            <a className={styles.link} onClick={() => setView('hackathon')}>
              Hackathon
            </a>
            <a className={styles.link} onClick={() => setView('summit')}>
              Summit
            </a>
          </>
        )}
        {view === 'summit' && (
          <>
            <a className={styles.link} onClick={() => setView(null)} href={gCalSummit}>
              Google Calendar
            </a>
            <a className={styles.link} onClick={() => setView(null)} href={iCalSummit}>
              iCal
            </a>
          </>
        )}
        {view === 'hackathon' && (
          <>
            <a className={styles.link} onClick={() => setView(null)} href={gCalHackathon}>
              Google Calendar
            </a>
            <a className={styles.link} onClick={() => setView(null)} href={iCalHackathon}>
              iCal
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarSubscribe;
