import React from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import { SquarePixel } from '@components/SquarePixel';

const SectionBox = ({ children, href }) => {
  return (
    <div className={'bg-black p-8 relative w-full text-white'}>
      <div className="flex flex-row justify-between items-start">
        <div>{children}</div>
        <Icon className="w-full max-w-[30px]" />
      </div>
      <a href={href} className="absolute w-full h-full top-0 left-0 "></a>
    </div>
  );
};

type Props = {
  className?: string;
};

const SectionContact: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={clsx(
        'w-full py-8 lg:py-24 bg-nextflow-100 relative z-10',
        className
      )}
      id="footer"
    >
        <SquarePixel
        className="absolute top-[-72px] left-[36px] z-20"
        initialColor="#000"
      />
      <SquarePixel
        className="absolute top-[72px] left-0 z-20"
        initialColor="#000"
      />
      <SquarePixel
        className="absolute top-[90px] left-[18px] z-20"
        initialColor="#56D3BA"
      />
      <SquarePixel
        className="absolute top-[108px] left-0 z-20"
        initialColor="#56D3BA"
      />
      <SquarePixel
        className="absolute top-[50%] right-0 z-20"
        initialColor="#56D3BA"
      />

      <div className="container-xl w-full bg-nextflow-100 flex flex-col md:flex-row justify-center gap-6 lg:gap-10">
        <SectionBox href="mailto:help.summit@nextflow.io">
          <h5 className="monospace tracking-wider text-xs mb-2 uppercase">
            Ticketing questions
          </h5>
          <div className=" text-md text-nextflow">help.summit@nextflow.io</div>
        </SectionBox>

        <SectionBox href="mailto:summit@nextflow.io">
          <h5 className="monospace tracking-wider text-xs mb-2 uppercase">
            Program questions
          </h5>
          <div className="text-md text-nextflow">summit@nextflow.io</div>
        </SectionBox>
      </div>
    </section>
  );
};

export default SectionContact;
