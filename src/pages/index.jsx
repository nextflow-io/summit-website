import React from 'react';

import Seo from '../components/Seo';

import ContactUs from '../components/ContactUs';
import SponsoredBy from '../components/SponsoredBy';
import EventSelector from '../components/EventSelector';

const IndexPage = () => {
  return (
    <>
      <Seo title="Nextflow SUMMIT 2023" />
      <EventSelector />
      <SponsoredBy />
      <ContactUs />
    </>
  );
};

export default IndexPage;
