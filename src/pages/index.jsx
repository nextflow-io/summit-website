import React from 'react';

import EventCTA from '../components/EventCTA';
import Seo from '../components/Seo';

import ContactUs from '../components/ContactUs';
import SponsoredBy from '../components/SponsoredBy';
import EventSelector from '../components/EventSelector';
import BarcelonaHome from '../modules/BarcelonaHome';

const IndexPage = () => {
  const [showBcn, setShowBcn] = React.useState(false);

  return (
    <>
      <Seo title="Nextflow SUMMIT 2023" />
      {!showBcn ? (
        <>
          <EventSelector selectBcn={() => setShowBcn(true)} />
          <SponsoredBy />
        </>
      ) : (
        <>
          <BarcelonaHome />
          <SponsoredBy />
          <EventCTA />
        </>
      )}
      <ContactUs />
    </>
  );
};

export default IndexPage;
