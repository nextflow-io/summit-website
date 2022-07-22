import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Card, Link, List, YoutubeRectangleIcon } from 'website-components';

import Tabs from '../../components/Tabs';
import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';

const CommunityEventsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      nfCoreTrainingImage: file(relativePath: {eq: "visuals/nf-core-training.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      communityImage: file(relativePath: {eq: "photos/community.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Program"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            A week of Nextflow goodness
          </h1>
          <p className="typo-body max-w-2xl mx-auto mb-4">
            We believe that the Nextflow Summit should be available to everyone, everywhere. That’s why the Nextflow
            Summit and nf-core Hackathon will be streamed live and presentations made available after the event.
          </p>
          <p className="typo-body max-w-2xl mx-auto mb-4">
            Nextflow Summit begins at 5:00&nbsp;PM CET on Wednesday, October&nbsp;12, and closes 2:30&nbsp;PM CET Friday, October&nbsp;14.
          </p>
          <Button to="/assets/program.pdf" variant="accent" size="md">
            Download program PDF
          </Button>
        </div>
      </div>
      <div id="events" className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div>
            <Tabs location={location} anchor="#events">
              <Tabs.Item to="/program/nf-core-hackathon/">
                nf-core Hackathon
              </Tabs.Item>
              <Tabs.Item to="/program/" inactive>
                Nextflow Summit
              </Tabs.Item>
              <Tabs.Item to="/program/community-events/">
                Community Events
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="mt-4">
            <div className="bg-black border border-gray-800 rounded-md shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-5/12">
                  <Image
                    image={getImage(data.communityImage)}
                    className="w-full h-full"
                    imgClassName="md:rounded-l-md"
                    alt="Host community streaming event"
                  />
                </div>
                <div className="w-full md:w-7/12 p-6 inline-flex flex-col">
                  <h3 className="typo-h4 mb-4">
                    Host community streaming event
                  </h3>
                  <p className="typo-body">
                    We encourage anyone to host a local community streaming event. Use our poster template to share with
                    your community and add the event to this website.
                  </p>
                  <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
                    <div className="mr-4 mt-4">
                      <Button
                        to="https://docs.google.com/document/d/1wQDtrVUv1Lro5lZFmeyfaPgJUI2pmGojtL9tWlQiVyQ/"
                        variant="secondary"
                        size="md"
                      >
                        Download poster
                      </Button>
                    </div>
                    <div className="mt-4">
                      <Button
                        to="https://seqera.typeform.com/streaming-event"
                        variant="secondary"
                        size="md"
                      >
                        Add community event
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black border border-gray-800 rounded-md shadow-xl mt-4 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-5/12">
                  <Image
                    image={getImage(data.nfCoreTrainingImage)}
                    className="w-full h-full"
                    imgClassName="md:rounded-l-md"
                    alt="Host community streaming event"
                  />
                </div>
                <div className="w-full md:w-7/12 p-6 inline-flex flex-col">
                  <p className="typo-intro text-green-600 mb-4">
                    Oct 3-5, 2022 | WEBINAR
                  </p>
                  <h3 className="typo-h4 mb-4">
                    Nextflow and nf-core training
                  </h3>
                  <p className="typo-body mb-4">
                    Get ready for the nf-core hackathon by joining the Nextflow and nf-core training event virtually on
                    Gather. Three events will be run in parallel to cater for all time zones.
                  </p>
                  <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
                    <span className="typo-body mt-2 lg:mt-0">
                      Virtual
                    </span>
                    <span className="hidden lg:block mx-2">|</span>
                    <span>
                      <Link to="https://nf-co.re/events/2022/training-october-2022" className="typo-body text-green-600">
                        Learn more
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityEventsPage;
