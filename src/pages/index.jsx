import React from 'react';
import { Button } from 'website-components';

const IndexPage = () => {
  return (
    <>
      <div className="container-lg">
        <h1 className="typo-h2 uppercase mb-4">
          Summit 2022
        </h1>
        <p className="typo-blockquote max-w-xl mb-4">
          Make plans to join us in person in Barcelona or online on October 10-14, 2022 (registration will open in July).
        </p>
        <Button to="/" variant="primary" size="md" arrow>
          View program
        </Button>
      </div>
    </>
  );
};

export default IndexPage;
