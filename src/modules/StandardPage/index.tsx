import React from 'react';
import PageLayout from '@components/PageLayout';
type Props = {
  data: any;
  /** Astro named slot `afterHero`, rendered between the hero and the rest. */
  afterHero?: React.ReactNode;
};

const StandardPage: React.FC<Props> = ({ data, afterHero }) => {
  return (
    <PageLayout
      hero={data?.hero}
      featureSection={data?.featureSection}
      faqSection={data?.faqSection}
      promoBanners={data?.promoBanners}
      afterHero={afterHero}
    />
  );
};

export default StandardPage;
