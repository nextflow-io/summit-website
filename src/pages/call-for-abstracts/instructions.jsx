import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { AngleLeftIcon, Button, Link, List } from 'website-components';

import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';
import PlaceholderRectangle from '../../images/visuals/placeholder-rectangle.svg';

const InstructionsPage = () => {
  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Instructions"
      />
      <div className="py-16 bg-gray-900 text-white">
        <div className="container-md">
          <div className="inline-flex items-center hover:text-green-600 mb-4">
            <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
            <Link to="/call-for-abstracts/" className="typo-intro" noBorder>
              Back
            </Link>
          </div>
          <h1 className="typo-h2 mb-4">
            Instructions
          </h1>
          <p className="typo-body">
            The call for talks is now closed. The call for posters will remain open until September 9 or when all spaces
            are filled.
          </p>
          <div className="bg-black border border-gray-800 rounded-md p-8 mt-10">
            <h2 className="typo-h3 mb-4">
              Talks
            </h2>
            <p className="typo-body mb-4">
              The call for talks is now closed. Keep an eye on our speakers page to who has been selected to present.
            </p>
            <span className="typo-body bg-gray-800 rounded-sm py-2 px-4">
              Closed
            </span>
          </div>
          <div className="bg-black border border-gray-800 rounded-md p-8 mt-10">
            <h2 className="typo-h3 mb-4">
              Posters
            </h2>
            <h3 className="typo-intro mb-4">
              Formats
            </h3>
            <List type="bullet" iconClassName="text-white" className="mb-8">
              <List.Item className="typo-body">
                In-person: Printed A0 (841 x 1188 mm), portrait. PDF to be uploaded for online audience.
              </List.Item>
              <List.Item className="typo-body">
                Virtual: PDF, A0 portrait.
              </List.Item>
            </List>
            <h3 className="typo-intro mb-4">
              Themes
            </h3>
            <List type="bullet" iconClassName="text-white" className="mb-8">
              <List.Item className="typo-body">
                Nextflow - central tool, language, and plugins
              </List.Item>
              <List.Item className="typo-body">
                Community - pipelines, applications, and use cases
              </List.Item>
              <List.Item className="typo-body">
                Ecosystem - infrastructure and environments
              </List.Item>
              <List.Item className="typo-body">
                Software - containers and tool packaging
              </List.Item>
            </List>
            <h3 className="typo-intro mb-4">
              Where
            </h3>
            <List type="bullet" iconClassName="text-white" className="mb-4">
              <List.Item className="typo-body">
                In-person
                <List type="bullet" iconClassName="text-white" className="mt-4">
                  <List.Item className="typo-body">
                    Poster session at the Nextflow Summit
                  </List.Item>
                  <List.Item className="typo-body">
                    Nextflow Summit website during and after the event
                  </List.Item>
                </List>
              </List.Item>
              <List.Item className="typo-body">
                Virtual
                <List type="bullet" iconClassName="text-white" className="mt-4">
                  <List.Item className="typo-body">
                    Nextflow Summit website during and after the event
                  </List.Item>
                </List>
              </List.Item>
            </List>
            <Link to="https://seqera.typeform.com/summit-22-talks" noBorder className="typo-body text-green-600">
              Apply now
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default InstructionsPage;
