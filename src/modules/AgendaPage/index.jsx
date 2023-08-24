import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import { Accordion, Button, Link } from 'website-components';

const AccordionItem = ({ children }) => (
  <Accordion.Item
    className="border border-gray-800"
    inactiveClassName=""
    iconClassName="fill-green-300"
    activeIconClassName="fill-green-300"
  >
    {children}
  </Accordion.Item>
);

import EventView from './EventView';
import ProgramSelector from './ProgramSelector';
import Seo from '../../components/Seo';
import ContactUs from '../../components/ContactUs';
import IntroText from './IntroText';

const AgendaPage = ({ showEvents, eventData, showAllDays, eventType, eventLocation }) => {
  const data = useStaticQuery(graphql`
    query {
      heroImgBarcelona: file(relativePath: { eq: "photos/agenda-barcelona.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      heroImgBoston: file(relativePath: { eq: "photos/agenda-boston.jpg" }) {
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

  const imgPath = eventLocation === 'boston' ? data.heroImgBoston : data.heroImgBarcelona;

  return (
    <>
      <Seo title="Nextflow SUMMIT 2023 Agenda" />
      <div className="pt-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <IntroText eventLocation={eventLocation} />
            </div>
            <div className="col-full lg:col-5 lg:ml-1/12">
              <Image
                image={getImage(imgPath)}
                alt="Join us in Barcelona or virtually"
                className="rounded-sm shadow-xl"
                imgClassName="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-md text-white pt-36 pb-16" id="events">

        {showEvents ? (
          <>
            <h2 className="typo-h5 uppercase text-center mb-4">Agenda</h2>
            <div className="my-12">
              <AccordionItem>
                <Accordion.Summary>
                  <p className="typo-intro">Calendar overview</p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <iframe src="https://embed.styledcalendar.com/#Qss4ZvPVKjMoFYIc82hS" title="Styled Calendar" className="styled-calendar-container w-full border-0 h-[600px]" data-cy="calendar-embed-iframe"></iframe>
                  <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                </Accordion.Detail>
              </AccordionItem>
            </div>

            <EventView
              eventLocation={eventLocation}
              eventData={eventData}
              showAllDays={showAllDays}
              eventType={eventType}
            />
          </>
        ) : (
          <>
            <h2 className="typo-h5 uppercase text-center mb-4">Program</h2>
            <ProgramSelector eventLocation={eventLocation} />
          </>
        )}
      </div>
      <div className="bg-green-300 text-black">
        <div className="container-sm py-16 text-center">
          <h2 className="typo-display2">
            Immerse yourself in a vibrant atmosphere of knowledge exchange, networking, and collaboration, as we shape
            the path to revolutionary discoveries in the life sciences and more.
          </h2>
        </div>
      </div>
      <div className="container-lg text-white">
        <div className="row">
          <div className="col-full lg:col-5">
            <Image
              image={getImage(eventLocation === 'boston' ? data.redPattern : data.bluePattern)}
              alt="Nextflow SUMMIT speakers"
              className="h-full w-full"
            />
          </div>
          <div className="col-full lg:col-6 py-16">
            <div className="px-4 lg:px-12">
              <h2 className="typo-display1">20+ Speakers</h2>
              {eventLocation === 'boston' ? (
                <>
                  <p className="typo-body mt-2">
                    This year we are thrilled to have <strong>Erik Garrison</strong> join us as keynote speaker, author
                    of the recent <Link to="https://www.nature.com/articles/s41586-023-05896-x">Nature paper</Link>{' '}
                    <em>“A draft human pangenome reference”</em>.
                  </p>
                  <p className="typo-body mt-2">
                    Stay tuned for more exciting announcements of our distinguished speakers. Until then, you can watch
                    the talks from last year below:
                  </p>
                </>
              ) : (
                <p className="typo-body mt-2">
                  Stay tuned for exciting announcements of our distinguished speakers, and meantime check out talks
                  given last year.
                </p>
              )}
              <div className="mt-8">
                <Button
                  to="https://www.youtube.com/playlist?list=PLPZ8WHdZGxmUdAJlHowo7zL2pN3x97d32"
                  variant="secondary"
                  size="md"
                >
                  Watch talks from 2022
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default AgendaPage;
