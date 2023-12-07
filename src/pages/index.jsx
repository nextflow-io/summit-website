import React from 'react';

import Seo from '../components/Seo';
import ContactUs from '../components/ContactUs';
import SponsoredBy from '../components/SponsoredBy';
import EventSelector from '../components/EventSelector';
import Preregister2024 from '../components/Preregister2024';

const IndexPage = () => {
  return (
    <>
      <Seo title="Nextflow SUMMIT 2023" image="/images/share-image.jpg" />
      <div className="bg-nextIndigo">
        <div className="container-md py-10">
          <Preregister2024 />
        </div>
      </div>
      <EventSelector />
      <SponsoredBy />
      <ContactUs />
    </>
  );
};

export default IndexPage;
