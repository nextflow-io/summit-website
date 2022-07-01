import React from 'react';
import { Button, ExpansionPanel, List } from 'website-components';

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
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Must know
          </h2>
          <div className="mt-8">
            <ExpansionPanel.Group>
              <ExpansionPanel className="border border-gray-800">
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
              <ExpansionPanel className="border border-gray-800">
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
              <ExpansionPanel className="border border-gray-800">
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Key dates
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Intro paragraph, theme
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel className="border border-gray-800">
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Venue location
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Intro paragraph, theme
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel className="border border-gray-800">
                <ExpansionPanel.Summary>
                  <span className="typo-intro">
                    Streaming
                  </span>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Detail>
                  <p className="typo-body">
                    Intro paragraph, theme
                  </p>
                </ExpansionPanel.Detail>
              </ExpansionPanel>
              <ExpansionPanel className="border border-gray-800">
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
