import React from 'react';

import {
  Button,
} from 'website-components';

import Seo from '../components/Seo';

const SponsorsPage = () => {
  return (
    <>
      <Seo
        title="Travel to Barcelona"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2">
                Sponsor the SUMMIT
              </h1>
              <p className="typo-body mt-4">
                Strengthen your brand power and boost your message through exclusive advertising and sponsorship
                opportunities.
              </p>
              <p className="typo-body mt-4">
                A range of sponsorship opportunities to suit your needs. Get in contact to find out more.
              </p>
              <div className="mt-4">
                <Button to="/program/" variant="secondary" size="md">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsPage;
