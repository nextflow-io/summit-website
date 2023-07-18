import React from "react";

import Card from "../../components/Card";
import LaptopIcon from "../../components/icons/LaptopIcon";
import MountainIcon from "../../components/icons/MountainIcon";
import { Button } from "website-components";

const ProgramSelector = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="typo-h6 uppercase">Program</h2>
      </div>
      <div className="row">
        <div className="col-full lg:col-6 mt-4">
          <Card>
            <div className="text-green-300">
              <LaptopIcon />
            </div>
            <h3 className="typo-h4 mt-4">Hackathon | Oct 16-18</h3>
            <p className="typo-intro text-green-300 mt-8">
              2.5 days · 100 people · hackathon
            </p>
            <p className="typo-body mt-2">
              The program will be available once the call for abstracts has
              closed.
            </p>
            <div className="mt-4">
              <Button
                to="/agenda/hackathon#events"
                variant="secondary"
                size="md"
              >
                View program
              </Button>
            </div>
          </Card>
        </div>
        <div className="col-full lg:col-6 mt-8 md:mt-4">
          <Card>
            <div className="text-green-300">
              <MountainIcon />
            </div>
            <h3 className="typo-h4 mt-4">Summit | Oct 18-20</h3>
            <p className="typo-intro text-green-300 mt-8">
              2.5 days · 200 people · talks, posters, and more
            </p>
            <p className="typo-body mt-2">
              The program will be available once the call for abstracts has
              closed.
            </p>
            <div className="mt-4">
              <Button to="/agenda/summit#events" variant="secondary" size="md">
                View program
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProgramSelector;
