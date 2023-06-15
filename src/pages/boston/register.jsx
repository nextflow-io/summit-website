import React from 'react';

import {
  Button,
} from 'website-components';

import Seo from '../../components/Seo';

const RegisterPage = () => {
  return (
    <>
      <Seo
        title="Call for abstracts"
      />
      <div className="py-20 bg-gray-900 text-white text-center">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-h2">
              Join the Nextflow SUMMIT and nf-core Hackathon
            </h1>
            <p className="typo-body max-w-xl mx-auto mt-4">
              Places are limited, so register now to reserve your spot. Registration closes September 9, or when sold out.
            </p>
            <div className="mt-4">
              <Button to="/program/" variant="accent" size="md">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
