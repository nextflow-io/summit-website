import React, { useState } from 'react';

import {
  Button,
  Link,
  Marquee,
} from 'website-components';

import Card from '../components/Card';
import Seo from '../components/Seo';
import Tabs from '../components/Tabs';

import VideoSrc from '../images/visuals/video-placeholder.svg';

const PastEventsPage = () => {
  const [ year, setYear ] = useState('2022');

  return (
    <>
      <Seo
        title="Past Events"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2">
                Past events
              </h1>
              <p className="typo-body mt-4">
                Past events have provided insights into Nextflow's origins, development, and its applications in various
                domains, highlighting its potential and impact on scientific research, data analysis, and workflow
                management.
              </p>
              <div className="mt-4">
                <Button to="/register/" variant="secondary" size="md">
                  View gallery
                </Button>
              </div>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12">
              <img src={VideoSrc} alt="Past Events" />
            </div>
          </div>
        </div>
      </div>
      <Marquee className="typo-body bg-green-300 text-black" to="/call-for-abstracts/" type="reset">
        Call for abstracts now open
      </Marquee>
      <div className="container-md py-16">
        <Tabs current={year} setCurrent={setYear}>
          <Tabs.Item index="2022">
            2022
          </Tabs.Item>
          <Tabs.Item index="2019">
            2019
          </Tabs.Item>
          <Tabs.Item index="2018">
            2018
          </Tabs.Item>
          <Tabs.Item index="2017">
            2017
          </Tabs.Item>
        </Tabs>
        <div className="mt-4">
          <Card>
            <h3 className="typo-h4">
              SUMMIT 2023
            </h3>
            <p className="typo-body mt-4">
              Oct 12, 2022
              <span className="mx-2">|</span>
              <Link to="/">
                Visit website
              </Link>
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <Card>
            <h3 className="typo-h4">
              nf-core hackathon 2022
            </h3>
            <p className="typo-body mt-4">
              Oct 12, 2022
              <span className="mx-2">|</span>
              <Link to="/">
                Visit website
              </Link>
            </p>
          </Card>
        </div>
      </div>
      <div className="bg-indigo-800 text-white">
        <div className="container-lg py-16 text-center">
          <h2 className="typo-h2">
            Step into the future of data-driven science at the Nextflow SUMMIT
            <br />
            held in Barcelona, October 16-20.
          </h2>
          <div className="mt-4">
            <Button to="/" variant="accent" size="md">
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEventsPage;
