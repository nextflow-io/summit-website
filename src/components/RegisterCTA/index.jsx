import React from 'react';

import { Button, Reveal, RevealOnScroll } from 'website-components';

import { useLayoutState } from '../../layout/Context';

const RegisterCTA = () => {
  const { activeEvent } = useLayoutState();

  return (
    <RevealOnScroll className="bg-nextIndigo text-white">
      <Reveal className="container-sm py-16">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="typo-display2">
            Step into the future of data-driven science at the Nextflow SUMMIT
            <br />
            {activeEvent === 'barcelona' && <>held in Barcelona, October 16-20.</>}
            {activeEvent === 'boston' && <>held in Boston, November 28-30.</>}
          </h2>
          <div className="mt-5">
            <Button
              to={activeEvent === 'boston' ? '/boston/stream/' : '/barcelona/stream/'}
              variant="primary"
              size="md"
              arrow
            >
              Watch live
            </Button>
          </div>
        </div>
      </Reveal>
    </RevealOnScroll>
  );
};

export default RegisterCTA;
