import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Card, Link, List, Marquee } from 'website-components';

import Tabs from '../../components/Tabs';
import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';

const NfCoreHackathonPage = ({ location }) => {
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
            We believe that the Nextflow Summit should be available to everyone, everywhere. That’s why the Nextflow
            Summit and nf-core Hackathon will be streamed live and presentations made available after the event.
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
              <Tabs.Item to="/program/" inactive>
                Nextflow Summit
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="mt-1">
            <Tabs location={location} anchor="#events">
              <Tabs.Item to="/program/nf-core-hackathon/">
                Mon, Oct 10 - Wed, Oct 12
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="row mt-4">
            <div className="col-full lg:col-9">
              <div className="bg-black border border-gray-800 shadow-xl px-4 py-6 lg:p-8 rounded-md">
                <p className="typo-intro text-green-600 mb-4">
                  9 AM, Oct 10 - 5 PM, Oct 12, 2022
                </p>
                <h3 className="typo-h4 mb-4">
                  Start - Finish
                </h3>
                <p className="typo-body">
                  The nf-core hackathon will be held before the Nextflow Summit, from 10-12 Oct, 2022.
                </p>
                <p className="typo-body mb-4">
                  <Link to="/" className="text-green-600">
                    Visit the nf-core hackathon event page
                  </Link>
                  {' '}
                  to learn more.
                </p>
                <p className="typo-body">
                  <Link to="">
                    Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                  </Link>
                  <span className="mx-2">
                    |
                  </span>
                  Virtual
                </p>
              </div>
              <p className="typo-body mt-4">
                Join us for the Nextflow Summit 2022 being held at the same venue and virtually, starting shortly after
                the hackathon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NfCoreHackathonPage;
