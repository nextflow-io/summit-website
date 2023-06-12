import React from 'react';

import {
  Marquee,
} from 'website-components';

import Seo from '../components/Seo';

const TravelPage = () => {
  return (
    <>
      <Seo
        title="Travel to Barcelona"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2 mb-4">
                Barcelona
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                Barcelona offers a unique blend of rich artistic and architectural heritage, serving as a vibrant hub
                for art and technology. Visiting allows you to explore the birthplace of Nextflow, gaining insights
                into its groundbreaking origins and development.
              </p>
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

export default TravelPage;
