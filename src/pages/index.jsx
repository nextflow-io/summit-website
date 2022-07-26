import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useContext } from 'react';

import {
    Accordion,
    Button,
    Link,
    List,
    LocationIcon,
    YoutubeRectangleIcon,
} from 'website-components';

import HeroAnimation from '../components/HeroAnimation';
import Seo from '../components/Seo';

import IconGather from '../images/icons/gather.svg';
import IconNextflow from '../images/logo-nextflow.svg';

import LogoAWS from '../images/logos/aws.svg';
import LogoSeqera from '../images/logos/seqera.svg';
import LogoQuilt from '../images/logos/quilt.svg';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
        title="Nextflow Summit 2022"
      />
      <div className="relative bg-black text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <HeroAnimation className="animate-flow" />
        </div>
        <div className="container-lg py-16 relative">
          <img src={IconNextflow} className="h-14 mb-4" alt="Nextflow Logo" />
          <h1 className="typo-h2 uppercase mb-4">
            Summit 2022
          </h1>
          <p className="typo-blockquote max-w-xl mb-4">
            Join us for the latest developments and innovations from the Nextflow world.
          </p>
          <p className="typo-intro uppercase mb-8">
            In person
            <span className="mx-2">
              |
            </span>
            Virtual
            <br />
            Barcelona, October 12-14, 2022
          </p>
          <Button to="/program/" variant="accent" size="md" arrow>
            View program
          </Button>
        </div>
      </div>
      <div className="text-white">
        <div className="py-6 text-center">
          <h2 className="typo-h6 uppercase">
            Sponsored by
          </h2>
        </div>
        <div className="container-xl">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoAWS} className="h-12" alt="AWS logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoSeqera} className="h-10" alt="Seqera logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoQuilt} className="h-12" alt="Quilt logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Key information
          </h2>
          <div className="mt-8">
            <Accordion>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <span className="typo-intro">
                    Nextflow Summit I Oct 12-14
                  </span>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body mb-4">
                    A showcase of the latest developments and innovations from the Nextflow world held in Barcelona and
                    virtually:
                  </p>
                  <List type="bullet" iconClassName="text-white">
                    <List.Item className="typo-body">
                      Nextflow - central tool, language, and plugins
                    </List.Item>
                    <List.Item className="typo-body">
                      Community - pipelines, applications, and use cases
                    </List.Item>
                    <List.Item className="typo-body">
                      Ecosystem - infastructure and environments
                    </List.Item>
                    <List.Item className="typo-body">
                      Software - containers and tool packaging
                    </List.Item>
                  </List>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <span className="typo-intro">
                    nf-core Hackathon I Oct 10-12
                  </span>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body mb-4">
                    An in-person and virtual hackathon to develop nf-core together. Held in Barcelona and on Gather (virtually) prior to the Nextflow Summit.
                  </p>
                  <p className="typo-body">
                    <Link to="https://nf-co.re/events/2022/hackathon-october-2022" className="text-green-600">
                      Visit the nf-core hackathon event page
                    </Link>
                    {' '}
                    to learn more.
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <span className="typo-intro">
                    Key dates
                  </span>
                </Accordion.Summary>
                <Accordion.Detail>
                  <List type="bullet" iconClassName="text-white">
                    <List.Item className="typo-body">
                      July 7: Registration for the Nextflow Summit opens
                    </List.Item>
                    <List.Item className="typo-body">
                      July 22: Call for talk abstracts closes
                    </List.Item>
                    <List.Item className="typo-body">
                      July 29:  Accepted speakers notified
                    </List.Item>
                    <List.Item className="typo-body">
                      September 9: Registration for the Nextflow Summit closes
                    </List.Item>
                    <List.Item className="typo-body">
                      October 10-12: nf-core Hackathon
                    </List.Item>
                    <List.Item className="typo-body">
                      October 12-14: Nextflow Summit
                    </List.Item>
                  </List>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <span className="typo-intro">
                    Venue location
                  </span>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body flex items-center">
                    <LocationIcon />
                    <span className="ml-2">
                      <Link to="https://goo.gl/maps/K3chvdYLa9BfDpaD9" className="hover:text-green-600">
                        Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                      </Link>
                    </span>
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <span className="typo-intro">
                    Streaming
                  </span>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body mb-4">
                    Talks at the Nextflow Summit will be streamed live on YouTube and Gather for remote attendees, and
                    will be available after the event.
                  </p>
                  <p className="typo-body flex items-center mb-4">
                    <span className="mr-2">
                      <Link to="https://www.youtube.com/c/nextflow">
                        YouTube
                      </Link>
                    </span>
                    <YoutubeRectangleIcon />
                  </p>
                  <p className="typo-body flex items-center">
                    <span className="mr-2">
                      <Link to="https://www.gather.town">
                        Gather
                      </Link>
                    </span>
                    <img src={IconGather} alt="Gather logo" className="h-6" />
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="mt-8">
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
                    And there is even more, join community events
                  </h3>
                  <p className="typo-body">
                    Join some of the side events that are hosted by community members. Tranings, streamings, and more.
                  </p>
                  <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
                    <div className="mt-4">
                      <Button
                        to="/program/community-events/"
                        variant="secondary"
                        size="md"
                      >
                        View community events
                      </Button>
                    </div>
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

export default IndexPage;
