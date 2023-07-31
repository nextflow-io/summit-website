import React from 'react';

import { AngleLeftIcon, Link, List } from 'website-components';

import Seo from '../../../components/Seo';

const PostersInstructionsPage = () => {
  return (
    <>
      <Seo
        title="Nextflow SUMMIT 2023 Posters Instructions"
      />
      <div className="py-16 bg-gray-900 text-white">
        <div className="container-md">
          <div className="inline-flex items-center hover:text-green-300 mb-4">
            <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
            <Link to="/boston/call-for-abstracts/" className="typo-intro" noBorder>
              Back
            </Link>
          </div>
          <h1 className="typo-h2 text-green-300">
            Instructions
          </h1>
          <p className="typo-body mt-4">
            The call for abstracts has been extended until August 11, 2023. Abstracts will be read and presenters notified on a
            rolling basis, so apply soon. The final abstracts will be accepted and presenters notified mid August.
          </p>
          <div className="bg-black border border-gray-800 rounded-md p-8 mt-10">
            <h2 className="typo-h3">
              Posters
            </h2>
            <h3 className="typo-intro mt-8">
              Formats
            </h3>
            <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
              <List.Item className="typo-body">
                In-person
              </List.Item>
            </List>
            <h3 className="typo-intro mt-8">
              Themes
            </h3>
            <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
              <List.Item className="typo-body">
                Nextflow - central tool, language, and plugins
              </List.Item>
              <List.Item className="typo-body">
                Community - pipelines, applications, and use cases
              </List.Item>
              <List.Item className="typo-body">
                Ecosystem - infastructure and environments
              </List.Item>
              <List.Item className="typo-body">
                Software - containers and tool packaging
              </List.Item>
            </List>
            <h3 className="typo-intro mt-8">
              Requirements
            </h3>
            <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
              <List.Item className="typo-body">
                A printed A0 portrait formatted (max 841 x 1188 mm) poster
              </List.Item>
              <List.Item className="typo-body">
                A high-quality A0 portrait formatted PDF file
              </List.Item>
            </List>
            <h3 className="typo-intro mt-8">
              Where
            </h3>
            <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
              <List.Item className="typo-body">
                Poster session at the Nextflow SUMMIT
              </List.Item>
            </List>
            <div className="mt-8">
              <Link to="https://seqera.typeform.com/summit2023" className="typo-body text-green-300" noBorder>
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostersInstructionsPage;
