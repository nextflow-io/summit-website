import React from 'react';

import HubspotEmbedForm from '../HubspotEmbedForm';
import img from '../../images/photos/agenda-barcelona.jpg';

const Preregister2024 = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="text-center w-full lg:w-1/2 lg:pr-10">
        <h3 className="typo-h3 text-white mb-2">Interested in attending Nextflow Summit 2024?</h3>
        <div className="text-xl mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Pre-register now to be the first to know when tickets go on sale!
        </div>
        <img src={img} className="w-full hidden lg:block" />
      </div>
      <div className="w-full lg:w-1/2">
        <HubspotEmbedForm formId="e2a41df7-342e-4667-88f1-bb57656261a8" />
      </div>
    </div>
  );
};

export default Preregister2024;
