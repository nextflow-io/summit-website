import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import Seo from '../../../components/Seo';
import IntroText from '../../../modules/AgendaPage/IntroText';


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
        <div className="calendar-container">
          <iframe src="https://embed.styledcalendar.com/#Qss4ZvPVKjMoFYIc82hS" title="Styled Calendar" className="styled-calendar-container w-full border-0 h-[600px]" data-cy="calendar-embed-iframe"></iframe>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
