import React from 'react';

import {
  Button,
  Reveal,
  RevealOnScroll,
} from 'website-components';

import { useLayoutState } from '../../layout/Context';

const RegisterCTA = () => {
  const { activeEvent } = useLayoutState();

  return (
    <RevealOnScroll className="bg-indigo-800 text-white">
      <Reveal className="container-lg py-16 text-center">
        <h2 className="typo-h2">
          Step into the future of data-driven science at the Nextflow SUMMIT
          <br />
          held in Barcelona, October 16-20.
        </h2>
        <div className="mt-4">
          <Button to={(activeEvent === 'boston' ? '/boston/register/' : '/register/')} variant="accent" size="md">
            Register
          </Button>
        </div>
      </Reveal>
    </RevealOnScroll>
  );
};

export default RegisterCTA;
