import React from 'react';

import Card from '../../components/Card';
import LaptopIcon from '../../components/icons/LaptopIcon';
import MountainIcon from '../../components/icons/MountainIcon';
import { Button } from 'website-components';

const ProgramSelector = ({ eventLocation }) => {
  let eventData = {
    agendaPath: 'agenda',
    hackathon: {
      date: 'Oct 16-18',
      description: '2.5 days · 100 people · hackathon',
    },
    summit: {
      date: 'Oct 18-20',
      description: '2.5 days · 200 people · talks, posters, and more',
    },
  };
  if (eventLocation === 'boston') {
    eventData = {
      agendaPath: 'boston/agenda',
      hackathon: {
        date: 'Nov 28-29',
        description: '1.5 days · 50 people · hackathon',
      },
      summit: {
        date: 'Nov 29-30',
        description: '1.5 days · 100 people · talks, networking, and more',
      },
    };
  }
  return (
    <>
      <div className="row">
        <div className="col-full lg:col-6 mt-4">
          <Card>
            <div className="text-green-300">
              <LaptopIcon />
            </div>
            <h3 className="typo-h4 mt-4">Hackathon | {eventData.hackathon.date}</h3>
            <p className="typo-intro text-green-300 mt-8">{eventData.hackathon.description}</p>
            <div className="mt-4">
              <Button to={`/${eventData.agendaPath}/hackathon#events`} variant="secondary" size="md">
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
            <h3 className="typo-h4 mt-4">Summit | {eventData.summit.date}</h3>
            <p className="typo-intro text-green-300 mt-8">{eventData.summit.description}</p>
            <div className="mt-4">
              <Button to={`/${eventData.agendaPath}/summit#events`} variant="secondary" size="md">
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
