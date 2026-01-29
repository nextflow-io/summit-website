import React from 'react';
import PageLayout from '@components/PageLayout';
import FeatureBlocks from '@modules/FeatureBlocks';
import { getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

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
