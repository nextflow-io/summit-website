import React from 'react';

import { Button, ExpansionPanel, Link, List, Marquee } from 'website-components';

import LogoNextflow from '../images/logo-nextflow.svg';

const IndexPage = () => {
  return (
    <>
      <div className="py-20 bg-green-600 text-white">
        <div className="container-lg">
          <img src={LogoNextflow} className="h-14 mb-4" alt="Nextflow Logo" />
          <h1 className="typo-h2 uppercase mb-4">
            Summit 2022
          </h1>
          <p className="typo-blockquote max-w-xl mb-4">
            See the latest developments and innovations from the Nextflow world and join the nf-core hackathon.
          </p>
          <p className="typo-intro uppercase mb-8">
            In person or virtually
            <br />
            Barcelona, 12-14 October 2022
          </p>
          <Button to="/" variant="primary" size="md" arrow>
            View program
          </Button>
        </div>
      </div>
      <Marquee>
        <span className="typo-blockquote">
          Become a speaker or submit poster.
        </span>
      </Marquee>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Must know
          </h2>
          <div className="mt-8">
            <ExpansionPanel.Group>
              <ExpansionPanel
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Nextflow Summit themes
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body mb-4">
                    Intro paragraph
                  </p>
                  <List type="bullet" iconClassName="text-white">
                    <List.Item className="typo-body">
                      Nextflow - describe
                    </List.Item>
                    <List.Item className="typo-body">
                      Community - describe
                    </List.Item>
                    <List.Item className="typo-body">
                      Ecosystem - describe
                    </List.Item>
                    <List.Item className="typo-body">
                      Software - describe
                    </List.Item>
                  </List>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Hackathon
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Intro paragraph, theme
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Key dates
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Call for talk abstracts: June 17 - July 22 (Abstracts will be read and speakers notified on a
                    rolling basis, so apply soon )
                  </p>
                  <p className="typo-body">
                    Accepted speakers notified: July 29
                  </p>
                  <p className="typo-body">
                    Registration to Nextflow summit and nf-core hackathon: July 1 - September 9
                  </p>
                  <p className="typo-body">
                    nf core hackathon: October 10-12
                  </p>
                  <p className="typo-body">
                    Nextflow summit: October 12-14
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Venue location
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    <Link to="https://goo.gl/maps/K3chvdYLa9BfDpaD9">
                      Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                    </Link>
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Streaming
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Streamed live on:
                  </p>
                  <p className="typo-body">
                    <Link to="/">
                      youtube
                    </Link>
                  </p>
                  <p className="typo-body">
                    <Link to="/">
                      gathertown
                    </Link>
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Sponsors
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Intro paragraph, theme
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
            </ExpansionPanel.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
