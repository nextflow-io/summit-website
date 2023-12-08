import React from 'react';

import Seo from '../components/Seo';
import ContactUs from '../components/ContactUs';
import Preregister2024 from '../components/Preregister2024';

const IndexPage = () => {
  return (
    <>
      <Seo title="Sign up for SUMMIT 2024" image="/images/share-image.jpg" />
      <Preregister2024 />
      <ContactUs />
    </>
  );
};

export default IndexPage;
