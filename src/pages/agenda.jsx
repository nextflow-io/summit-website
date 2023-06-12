import React from 'react';

import {
  Button,
} from 'website-components';

import Seo from '../components/Seo';

const AgendaPage = () => {
  return (
    <>
      <Seo
        title="Nextflow Summit 2023 Agenda"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2 mb-4">
                Join us
                <br />
                in Barcelona or virtually
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                This premier event brings together leading experts, innovators, and researchers to showcase the latest
                breakthroughs in workflow management.
              </p>
              <div className="mt-4">
                <Button to="/program/" variant="accent" size="md">
                  Register
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

export default AgendaPage;
