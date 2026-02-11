import React from 'react';
import PageLayout from '@components/PageLayout';
type Props = {
  data: any;
};

const StandardPage: React.FC<Props> = ({ data }) => {
  return (
    <PageLayout
      hero={data.hero}
      featureSection={data.featureSection}
      faqSection={data.faqSection}
    />
  );
};

export default StandardPage;
