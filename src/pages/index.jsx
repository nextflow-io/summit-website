import React from 'react';

import EventCTA from '../components/EventCTA';
import Seo from '../components/Seo';

import ContactUs from '../components/ContactUs';
import SponsoredBy from '../components/SponsoredBy';
import EventSelector from '../components/EventSelector';
import BarcelonaHome from '../modules/BarcelonaHome';
import { useLayoutState } from '../layout/Context';
import { useLayoutActions } from '../layout/Context';

const IndexPage = () => {
  const { barcelonaSelected } = useLayoutState();
  const { selectBarcelona } = useLayoutActions();

  return (
    <>
      <Seo title="Nextflow SUMMIT 2023" />
      {!barcelonaSelected ? (
        <>
          <EventSelector selectBcn={selectBarcelona} />
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
