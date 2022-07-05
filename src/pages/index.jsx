import React from 'react';

import {
    Accordion,
    Button,
    Link,
    List,
    LocationIcon,
    Marquee,
    YoutubeRectangleIcon,
} from 'website-components';

import HeroAnimation from '../components/HeroAnimation';
import Seo from '../components/Seo';

import LogoGather from '../images/icons/gather.svg';
import LogoNextflow from '../images/logo-nextflow.svg';

const IndexPage = () => {
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
          <img src={LogoNextflow} className="h-14 mb-4" alt="Nextflow Logo" />
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
          <Button to="/program/" variant="primary" size="md" arrow>
            View program
          </Button>
        </div>
      </div>
      <Marquee to="/call-for-abstracts/">
        <span className="typo-blockquote">
          Call for abstracts now open
        </span>
      </Marquee>
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
                  <p className="typo-body">
                    An in-person and virtual hackathon to develop nf-core together. Held in Barcelona and on Gather (virtually) prior to the Nextflow Summit.
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
                      July 1: Registration for the Nextflow Summit opens
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
                      <Link to="https://goo.gl/maps/K3chvdYLa9BfDpaD9">
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
                    will available after the event.
                  </p>
                  <p className="typo-body flex items-center mb-4">
                    <span className="mr-2">
                      <Link to="/">
                        YouTube
                      </Link>
                    </span>
                    <YoutubeRectangleIcon />
                  </p>
                  <p className="typo-body flex items-center">
                    <span className="mr-2">
                      <Link to="/">
                        Gather
                      </Link>
                    </span>
                    <img src={LogoGather} alt="Gather logo" className="h-6" />
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
