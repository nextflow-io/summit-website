import React from 'react';

import {
  Button,
} from 'website-components';

import Seo from '../components/Seo';

const CallForAbstractsPage = () => {
  return (
    <>
      <Seo
        title="Call for abstracts"
      />
      <div className="py-20 bg-gray-900 text-white text-center">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-h2">
              Call for abstracts open
            </h1>
            <p className="typo-body mt-4">
              Act fast as abstracts will be reviewed and presenters will be notified on an ongoing basis. Final
              abstracts will be accepted and presenters will be notified by the end of July.
            </p>
            <div className="mt-4">
              <Button to="/program/" variant="accent" size="md">
                Apply now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForAbstractsPage;
