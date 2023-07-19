import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import { Button } from 'website-components';

import EventView from './EventView';
import ProgramSelector from './ProgramSelector';
import Seo from '../../components/Seo';

const AgendaPage = ({ showEvents, eventData, showAllDays }) => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "photos/agenda-barcelona.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      bluePattern: file(relativePath: { eq: "visuals/speakers-blue-pattern.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);
  return (
    <>
      <Seo title="Nextflow SUMMIT 2023 Agenda" />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1 mb-4">
                Exploring frontiers together through data science and computational biology
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                Join us for a week of Nextflow goodness, where passionate Nextflow users and industry experts will share
                first-hand success stories from the community.
              </p>
              <p className="typo-body max-w-3xl mb-4">
                The program includes inspiring keynotes, talks, poster sessions, and social events. Summit will be
                streamed, and presentations will be made available after the event.
              </p>
            </div>
            <div className="col-full lg:col-5 lg:ml-1/12">
              <Image
                image={getImage(data.heroImage)}
                alt="Join us in Barcelona or virtually"
                className="rounded-sm shadow-xl"
                imgClassName="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-md text-white py-16" id="events">
        {showEvents ? <EventView eventData={eventData} showAllDays={showAllDays} /> : <ProgramSelector />}
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
            <Image image={getImage(data.bluePattern)} alt="Nextflow SUMMIT speakers" className="h-full w-full" />
          </div>
          <div className="col-full lg:col-6 py-16">
            <div className="px-4 lg:px-12">
              <h2 className="typo-display1">20+ Speakers</h2>
              <p className="typo-body mt-2">
                Stay tuned for exciting announcements of our distinguished speakers, and meantime check out talks given
                last year.
              </p>
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
    </>
  );
};

export default AgendaPage;
