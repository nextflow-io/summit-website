import React from 'react';

import HubspotEmbedForm from '../HubspotEmbedForm';
import img from '../../images/photos/agenda-barcelona.jpg';

const Preregister2024 = () => {
  return (
    <>
      <div className="bg-nextIndigo">
        <div className="container-md py-10">
          <div className="flex flex-wrap items-center">
            <div className="text-center w-full lg:w-1/2 sm:px-8 lg:pl-0 lg:pr-10">
              <h3 className="typo-h3 text-white mb-2">Interested in attending Nextflow Summit 2024?</h3>
              <div className="text-xl mb-6 font-[200]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Sign up for updates to be the first to know when tickets go on sale!
              </div>
              <ul className="mb-10 text-xl text-white">
                <li>
                  <span className="text-green-300">Boston</span> <span className="opacity-25">|</span> May 14-17
                </li>
                <li>
                  <span className="text-green-300">Barcelona</span> <span className="opacity-25">|</span> October 21-25
                </li>
              </ul>
              <img src={img} className="w-full hidden lg:block" />
            </div>
            <div className="w-full lg:w-1/2">
              <HubspotEmbedForm formId="e2a41df7-342e-4667-88f1-bb57656261a8" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181818] h-[16px]" />
    </>
  );
};

export default Preregister2024;
