import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Card, Link, List, Marquee } from 'website-components';

import Tabs from '../../components/Tabs';
import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';

const ProgramOct14Page = ({ location }) => {
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
          <p className="typo-body max-w-2xl mb-4 mx-auto">
            We believe that Nextflow Summit should be available to everyone, everywhere. That’s why the hackathon and
            talks will be streamed live, and presentations will be made available after the event.
          </p>
        </div>
      </div>
      <Marquee to="/call-for-abstracts/">
        <span className="typo-blockquote">
          Call for abstracts now open
        </span>
      </Marquee>
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
            </Tabs>
          </div>
          <div className="mt-1">
            <Tabs location={location} anchor="#events">
              <Tabs.Item to="/program/" inactive>
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
            <div className="col-full lg:col-9">
              <div className="bg-black border border-gray-800 p-8 rounded-md shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="typo-intro text-green-600">
                    11-12 AM (60 min)
                  </p>
                  <div className="flex">
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2">
                      Software
                    </span>
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase">
                      Ecosystem
                    </span>
                  </div>
                </div>
                <h3 className="typo-h4 mb-4">
                  Session
                </h3>
                <p className="typo-body mb-4">
                  The session will be composed of multiple talks given by several speakers. Details will be announced soon.
                </p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full -mr-4" />
                    <div className="h-8 w-8 bg-green-600 rounded-full mr-4" />
                    <span className="typo-intro text-green-600">
                      Several Speakers
                    </span>
                  </div>
                  <span className="mx-2">|</span>
                  <span className="typo-body">
                    Oct 13 2022, 11 AM CET
                  </span>
                  <span className="mx-2">|</span>
                  <span>
                    <Link to="/" className="typo-body text-gray-600">
                      Watch on youtube
                    </Link>
                  </span>
                </div>
              </div>

              <div className="bg-black border border-gray-800 p-8 rounded-md shadow-xl mt-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="typo-intro text-green-600">
                    12 AM (20 min)
                  </p>
                  <div className="flex">
                    <span className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase">
                      Social
                    </span>
                  </div>
                </div>
                <h3 className="typo-h4 mb-4">
                  Coffee break
                </h3>
                <div className="flex items-center">
                  <span className="typo-body">
                    Oct 13 2022, 12 AM CET
                  </span>
                </div>
              </div>

              <div className="bg-black border border-gray-800 p-8 rounded-md shadow-xl mt-4">
                <p className="typo-intro text-green-600 mb-4">
                  12:20 AM - 1:20 PM (60 min)
                </p>
                <h3 className="typo-h4 mb-4">
                  Session
                </h3>
                <p className="typo-body mb-4">
                  The session will be composed of multiple talks given by several speakers. Details will be announced soon.
                </p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full -mr-4" />
                    <div className="h-8 w-8 bg-green-600 rounded-full mr-4" />
                    <span className="typo-intro text-green-600">
                      Several Speakers
                    </span>
                  </div>
                  <span className="mx-2">|</span>
                  <span className="typo-body">
                    Oct 13 2022, 12:20 AM CET
                  </span>
                  <span className="mx-2">|</span>
                  <span>
                    <Link to="/" className="typo-body text-gray-600">
                      Watch on youtube
                    </Link>
                  </span>
                </div>
              </div>

              <div className="bg-black border border-gray-800 p-8 rounded-md shadow-xl mt-4">
                <p className="typo-intro text-green-600 mb-4">
                  12 AM (20 min)
                </p>
                <h3 className="typo-h4 mb-4">
                  Closing
                </h3>
                <p className="typo-body mb-4">
                  nf core Hackathon report nad Nextflow Summit wrap up.
                </p>
                <div className="flex items-center">
                  <span className="typo-body">
                    Oct 13 2022, 12 AM CET
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

export default ProgramOct14Page;
