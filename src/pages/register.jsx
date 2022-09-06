import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Accordion, Button, Box, Link, List } from 'website-components';

import Seo from '../components/Seo';

import LogoNextflow from '../images/logos/nextflow.svg';
import LogoNfCore from '../images/logos/nf-core.svg';

const RegisterPage = () => {
  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Speakers"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            Join the Nextflow Summit 2022 with nf-core hackathon
          </h1>
          <p className="typo-body max-w-md mb-6 mx-auto">
            Places are limited, so register now to reserve your spot. Registration closes September 9 or when sold out.
          </p>
          <Button to="https://forms.creacongresos.com/nextflowsummit/" variant="accent" size="md" arrow>
            Register
          </Button>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row flex-wrap">
            <div className="col-full md:col-6">
              <div className="bg-black border border-gray-800 rounded-md p-8 shadow-xl relative">
                <p className="typo-intro text-green-600">
                  Oct 10-12
                </p>
                <h3 className="typo-h4 mt-6">
                  nf-core hackathon
                </h3>
                <p className="typo-body mt-6">
                  Join the nf-core hackathon held in Barcelona and virtually.
                </p>
                <p className="typo-small text-gray-600">
                  Registration for the in-person hackathon is now closed.
                </p>
              </div>
              <img src={LogoNfCore} className="h-28 mx-auto -mt-4" alt="nf-core hackathon" />
            </div>
            <div className="col-full md:col-6 mt-4 md:mt-0">
              <div className="bg-black border border-gray-800 rounded-md p-8 shadow-xl relative">
                <p className="typo-intro text-green-600">
                  Oct 12-14
                </p>
                <h3 className="typo-h4 mt-6">
                  Nextflow Summit 2022
                </h3>
                <p className="typo-body mt-6">
                  Join the Nextflow Summit held in Barcelona and virtually.
                </p>
                <p className="typo-small text-gray-600">
                  Registration for the in-person summit closes September 9th.
                </p>
              </div>
              <img src={LogoNextflow} className="h-20 mx-auto" alt="Nextflow" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Fees
          </h2>
          <div className="mt-8">
            <Accordion>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <p className="typo-intro">
                    In-person
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <List type="bullet" iconClassName="text-white">
                    <List.Item className="typo-body">
                      Nextflow Summit - academic: €149 (€180 incl. VAT)
                    </List.Item>
                    <List.Item className="typo-body">
                      Nextflow Summit  -  corporate: €349 (€422 incl. VAT)
                    </List.Item>
                    <List.Item className="typo-body">
                      Nextflow Summit  - invited guests: free
                    </List.Item>
                    <List.Item className="typo-body">
                      nf-core Hackathon: €49 (€59 incl. VAT)
                    </List.Item>
                  </List>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <p className="typo-intro">
                    Virtual
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <List type="bullet" iconClassName="text-white">
                    <List.Item className="typo-body">
                      Nextflow Summit: free
                    </List.Item>
                    <List.Item className="typo-body">
                      nf-core Hackathon: free
                    </List.Item>
                  </List>
                </Accordion.Detail>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
