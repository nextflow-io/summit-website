import React from 'react';
import { Button, YoutubeRectangleIcon } from 'website-components';

const IntroText = ({ eventLocation }) => {
  if (eventLocation === 'boston') {
    return (
      <>
        <h1 className="typo-display1 mb-4">Join us in Boston</h1>
        <p className="typo-body max-w-3xl mb-4">
          This premier event brings together leading experts, innovators, and researchers to showcase the latest
          breakthroughs in workflow management.
        </p>
        <div className="mt-4">
          <Button to="/boston/stream/" variant="primary" size="md" arrow>
            <YoutubeRectangleIcon className="inline-block h-6 w-6 mr-3" />
            Watch live
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="typo-display1 mb-4">
        Exploring frontiers together through data science and computational biology
      </h1>
      <p className="typo-body max-w-3xl mb-4">
        Join us for a week of Nextflow goodness, where passionate Nextflow users and industry experts will share
        first-hand success stories from the community.
      </p>
      <p className="typo-body max-w-3xl mb-4">
        The program includes inspiring keynotes, talks, poster sessions, and social events. Summit will be streamed, and
        presentations will be made available after the event.
      </p>
    </>
  );
};

export default IntroText;
