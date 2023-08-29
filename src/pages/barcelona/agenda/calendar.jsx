import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import Seo from '../../../components/Seo';
import IntroText from '../../../modules/AgendaPage/IntroText';
import Tabs from '../../../components/Tabs2';


const RegisterPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImgBarcelona: file(relativePath: { eq: "photos/agenda-barcelona.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      bluePattern: file(relativePath: { eq: "visuals/speakers-blue-pattern.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      redPattern: file(relativePath: { eq: "visuals/speakers-red-pattern.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);
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
      <div className="pt-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <IntroText eventLocation="barcelona" />
            </div>
            <div className="col-full lg:col-5 lg:ml-1/12">
              <Image
                image={getImage(data.heroImgBarcelona)}
                alt="Join us in Barcelona or virtually"
                className="rounded-sm shadow-xl"
                imgClassName="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg text-white pt-36 pb-16" id="events">
        <h2 className="typo-h5 uppercase text-center mb-4">Agenda</h2>
        <div className="row my-8">
          <div className="col-6">
            <p className='typo-body'>
              Subscribe to Hackathon calendar:
              <span className="ml-4">
                <Tabs location="-" >
                  <Tabs.Item to="https://calendar.google.com/calendar/u/1?cid=Y184NDUxMjEyYjhhOWVhM2UyMzU0ZGIwYTU1Y2MyMTFkZDcxZTQyNTNjYjRkYTExMTRjMzIyZGIwNGVmZTJkOGUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Google Calendar</Tabs.Item>
                  <Tabs.Item to="https://calendar.google.com/calendar/ical/c_8451212b8a9ea3e2354db0a55cc211dd71e4253cb4da1114c322db04efe2d8e1%40group.calendar.google.com/public/basic.ics">iCal</Tabs.Item>
                </Tabs>
              </span>
            </p>
          </div>
          <div className="col-6 text-right">
            <p className='typo-body'>
              Subscribe to Summit calendar:
              <span className="ml-4">
                <Tabs location="-" >
                  <Tabs.Item to="https://calendar.google.com/calendar/u/1?cid=Y18yZTFiZmZjMWNhMzgwMzE5ZDc4ZjJhMmY2OTI0NmVmMjk3Yzg5NTYyMjljMWNlODY1M2UxOWNiMTAxYmNjODBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Google Calendar</Tabs.Item>
                  <Tabs.Item to="https://calendar.google.com/calendar/ical/c_2e1bffc1ca380319d78f2a2f69246ef297c8956229c1ce8653e19cb101bcc80c%40group.calendar.google.com/public/basic.ics">iCal</Tabs.Item>
                </Tabs>
              </span>
            </p>
          </div>
        </div>
        <div className="calendar-container">
          <iframe src="https://embed.styledcalendar.com/#Qss4ZvPVKjMoFYIc82hS" title="Styled Calendar" className="styled-calendar-container w-full border-0 h-[600px]" data-cy="calendar-embed-iframe"></iframe>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
