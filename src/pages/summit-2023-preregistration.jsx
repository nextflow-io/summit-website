import React from 'react';

import HubspotEmbedForm from '../components/HubspotEmbedForm';
import Seo from '../components/Seo';

const Preregistration2023Page = () => {
  return (
    <>
      <Seo
        title="RSVP"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2 mb-4">
                Nextflow RSVP
              </h1>
              <p className="typo-body max-w-md">
                Hey, we still don't have the dates but if you want more info regarding the summit 2023, complete the form and we'll send you more info
              </p>
            </div>
            <div className="col-full lg:col-6">
              <HubspotEmbedForm title="Register for free" formId="8ef6ed83-071b-4ac6-9a5a-b1991e71f256" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preregistration2023Page;
