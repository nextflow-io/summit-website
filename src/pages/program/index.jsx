import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Card, Link, List, LocationIcon, YoutubeRectangleIcon } from 'website-components';

import Tabs from '../../components/Tabs';
import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';

const ProgramPage = ({ location }) => {
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
              <Tabs.Item to="/program/">
                Nextflow Summit
              </Tabs.Item>
              <Tabs.Item to="/program/community-events/">
                Community Events
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="mt-1">
            <Tabs location={location} anchor="#events">
              <Tabs.Item to="/program/">
                Wed, Oct 12
              </Tabs.Item>
              <Tabs.Item to="/program/oct-13/">
                Thu, Oct 13
              </Tabs.Item>
              <Tabs.Item to="/program/oct-14/">
                Fri, Oct 14
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="row mt-4">
            <div className="col-full md:col-9">
              <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl">
                <p className="typo-intro text-green-600 mb-4">
                  2:00 - 5:00 PM (180 min)
                </p>
                <h3 className="typo-h4 mb-4">
                  Summit arrivals and registration
                </h3>
                <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
                  <p className="typo-body">
                    Oct 12, 2022, 2:00 PM CET
                  </p>
                  <span className="hidden lg:block mx-2">|</span>
                  <div>
                    <Link to="/" className="typo-body">
                      Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                    </Link>
                    <LocationIcon className="inline-block h-6 w-6 ml-2" />
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl mt-4">
                <p className="typo-intro text-green-600 mb-4">
                  5:00 - 5:20 PM (20 min)
                </p>
                <h3 className="typo-h4 mb-4">
                  Summit welcome
                </h3>
                <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full mr-4" />
                    <span className="typo-intro text-green-600">
                      Evan Floden
                    </span>
                  </div>
                  <span className="hidden lg:block mx-2">|</span>
                  <span className="typo-body mt-2 lg:mt-0">
                    Oct 12, 2022, 5:00 PM CET
                  </span>
                  <span className="hidden lg:block mx-2">|</span>
                  <span>
                    <Link to="https://www.youtube.com/c/nextflow" className="typo-body text-gray-600">
                      Watch on youtube
                    </Link>
                    <YoutubeRectangleIcon className="inline-block h-6 w-6 ml-2 text-gray-600" />
                  </span>
                </div>
              </div>
              <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl mt-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="typo-intro text-green-600">
                    5:20 - 7:00 PM (100 min)
                  </p>
                  <div className="hidden lg:flex">
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2">
                      Nextflow
                    </span>
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2">
                      Software
                    </span>
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase">
                      Community
                    </span>
                  </div>
                </div>
                <h3 className="typo-h4 mb-4">
                  Talks
                </h3>
                <p className="typo-body mb-4">
                  The session will be composed of multiple talks given by several speakers. Details will be announced soon.
                </p>
                <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full -mr-4" />
                    <div className="h-8 w-8 bg-green-600 rounded-full mr-4" />
                    <span className="typo-intro text-green-600">
                      Several Speakers
                    </span>
                  </div>
                  <span className="hidden lg:block mx-2">|</span>
                  <span className="typo-body mt-2 lg:mt-0">
                    Oct 12, 2022, 5:20 PM CET
                  </span>
                  <span className="hidden lg:block mx-2">|</span>
                  <span>
                    <Link to="https://www.youtube.com/c/nextflow" className="typo-body text-gray-600">
                      Watch on youtube
                    </Link>
                    <YoutubeRectangleIcon className="inline-block h-6 w-6 ml-2 text-gray-600" />
                  </span>
                </div>
              </div>
              <div className="bg-black border border-gray-800 p-4 lg:py-8 rounded-md shadow-xl mt-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="typo-intro text-green-600">
                    7:00 - 8:30 PM (90 min)
                  </p>
                  <div className="flex">
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase">
                      Social
                    </span>
                  </div>
                </div>
                <h3 className="typo-h4 mb-4">
                  Summit social
                </h3>
                <p className="typo-body mb-4">
                  Drinks, cocktails and networking
                </p>
                <div className="flex items-center">
                  <span className="typo-body">
                    Oct 12, 2022, 7:00 PM CET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramPage;
