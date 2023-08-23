import React from 'react';

import EventCTA from '../../components/EventCTA';
import Seo from '../../components/Seo';

import ContactUs from '../../components/ContactUs';
import SponsoredBy from '../../components/SponsoredBy';
import BarcelonaHome from '../../modules/BarcelonaHome';

const IndexPage = () => {
  return (
    <>
      <Seo title="Nextflow SUMMIT 2023" />
      <BarcelonaHome />
      <SponsoredBy />
      <EventCTA />
      <ContactUs />
    </>
  );
};

export default IndexPage;
