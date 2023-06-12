import React from 'react';

import {
  Button,
  Marquee,
} from 'website-components';

import Seo from '../components/Seo';

const PastEventsPage = () => {
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
                <Button to="/program/" variant="secondary" size="md">
                  View gallery
                </Button>
              </div>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12">

            </div>
          </div>
        </div>
      </div>
      <Marquee className="typo-body bg-green-300 text-black" to="/call-for-abstracts/">
        Call for abstracts now open
      </Marquee>
    </>
  );
};

export default PastEventsPage;
