import React, { useEffect } from 'react';

import { AngleLeftIcon, Link } from 'website-components';

import Seo from '../../../components/Seo';
import Tabs from '../../../components/Tabs2';


const RegisterPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
    script.async = true;
    script.setAttribute('type', 'module');
    const calendarContainer = document.getElementsByClassName('calendar-container');
    calendarContainer[0].appendChild(script);
  }, []);

  return (
    <>
      <Seo title="Nextflow Summit 2023 Agenda - Calendaar" />
      <div className="container-lg py-16 bg-gray-900 text-white">
        <div className="inline-flex items-center hover:text-green-300 mb-4">
            <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
            <Link to="/boston/agenda/" className="typo-intro" noBorder>
              Back
            </Link>
        </div>
        <h1 className="typo-h2 text-green-300">Boston: Calendar</h1>
        <div className="row my-8">
          <div className="col-6">
            <p className='typo-body'>
              Subscribe to Hackathon calendar:
              <span className="ml-4">
                <Tabs location="-" >
                  <Tabs.Item to="https://calendar.google.com/calendar/u/1?cid=Y180MzVlYWE2MWM2MjRjZGM1MTJmYWZkZjYxZjI5YzhlZDVhOGM4NzM0NWRmMWM1Zjc2MjE1ZjAxYjVjMGFmYzU4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Google Calendar</Tabs.Item>
                  <Tabs.Item to="https://calendar.google.com/calendar/ical/c_435eaa61c624cdc512fafdf61f29c8ed5a8c87345df1c5f76215f01b5c0afc58%40group.calendar.google.com/public/basic.ics">iCal</Tabs.Item>
                </Tabs>
              </span>
            </p>
          </div>
          <div className="col-6 text-right">
            <p className='typo-body'>
              Subscribe to Summit calendar:
              <span className="ml-4">
                <Tabs location="-" >
                  <Tabs.Item to="https://calendar.google.com/calendar/u/1?cid=Y184ZjY0NGMyNTUxM2NjNGQ2YTEzNzcyYzdiYWNhODNlOGZhOWNkN2QyYTMyZWJlMzdmMWIyYzA5NTI4ODhjNTFiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Google Calendar</Tabs.Item>
                  <Tabs.Item to="https://calendar.google.com/calendar/ical/c_8f644c25513cc4d6a13772c7baca83e8fa9cd7d2a32ebe37f1b2c0952888c51b%40group.calendar.google.com/public/basic.ics">iCal</Tabs.Item>
                </Tabs>
              </span>
            </p>
          </div>
        </div>
        <div className="calendar-container">
          <iframe src="https://embed.styledcalendar.com/#A5RyQEwveb0zYn69ncqd" title="Boston SUMMIT 2023 Calendar" className="styled-calendar-container w-full border-0 h-[600px]" data-cy="calendar-embed-iframe"></iframe>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
