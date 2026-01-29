import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

type Props = {
  attend: any;
};

const WhyAttendPage: React.FC<Props> = ({ attend }) => {
  return (
    <div className="bg-black text-white">
      <LandingHero
        title={attend.hero?.headline}
        content={attend.hero?.bodycopy}
        ctaText1={attend.hero?.button1?.buttonText}
        ctaLink1={formatLink(attend.hero?.button1?.buttonUrl)}
        ctaText2={attend.hero?.button2?.buttonText}
        ctaLink2={formatLink(attend.hero?.button2?.buttonUrl)}
        headlineSize={attend.hero?.headlineSize}
      />

      {attend.featureSection?.map((section, index) => {
        const sectionButtonUrl = getButtonUrl(section?.button);
        return (
          section?.boxes &&
          section.boxes.length > 0 && (
            <FeatureBlocks
              key={index}
              headline={section.headline}
              bodycopy={section.bodycopy}
              buttonText={section.button?.buttonText}
              buttonUrl={sectionButtonUrl}
              boxes={section.boxes.map(transformFeatureBox)}
            />
          )
        );
      })}

      {attend.faqSection && attend.faqSection.length > 0 && (
        <Faq data={attend.faqSection} />
      )}
    </div>
  );
};

export default WhyAttendPage;
